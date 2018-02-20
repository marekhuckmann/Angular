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

  location = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getlocationDetail(this.route.snapshot.params['id']);
  }

  getlocationDetail(id) {
    this.http.get('/location/' + id).subscribe(data => {
      this.location = data;
    });
  }
  deletelocation(id) {
    this.http.delete('/location/' + id)
      .subscribe(res => {
          this.router.navigate(['/locations']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
