import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-heat',
  templateUrl: './heat.component.html',
  styleUrls: ['./heat.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeatComponent implements OnInit {

  book = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
  }

  getBook(id) {
    this.http.get('/book/' + id).subscribe(data => {
      this.book = data;
    });
  }
  updateBook(id, book) {
    this.http.put('/book/' + id, this.book)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/books']);
      }, (err) => {
        console.log(err);
      }
      );
  }


}
