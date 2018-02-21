import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LocationDetailsComponent implements OnInit {

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
  deleteLocation(id) {
    const token = localStorage.getItem('token')
    ? '?token=' + localStorage.getItem('token')
    : '';
    this.http.delete('/location/' + id + token)
      .subscribe(res => {
          this.router.navigate(['/locations']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
