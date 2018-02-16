import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WindComponent implements OnInit {

  book = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }
  
  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this.http.get('/book/' + id).subscribe(data => {
      this.book = data;
    });
  }
  deleteBook(id) {
    this.http.delete('/book/'+id)
      .subscribe(res => {
          this.router.navigate(['/books']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
