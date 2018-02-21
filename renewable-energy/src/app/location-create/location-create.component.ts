import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location-create',
  templateUrl: './location-create.component.html',
  styleUrls: ['./location-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LocationCreateComponent implements OnInit {

  location = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveLocation() {
    const token = localStorage.getItem('token')
    ? '?token=' + localStorage.getItem('token')
    : '';
    this.http.post('/location' + token, this.location)
      .subscribe(res => {
          // tslint:disable-next-line:prefer-const
          let id = res['_id'];
          this.router.navigate(['/location-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
