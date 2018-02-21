import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LocationEdit implements OnInit {

  location = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getlocation(this.route.snapshot.params['id']);
  }

  getlocation(id) {
    const token = localStorage.getItem('token')
    ? '?token=' + localStorage.getItem('token')
    : '';
    this.http.get('/location/' + id + token).subscribe(data => {
      this.location = data;
    });
  }
  updatelocation(id, location) {
    const token = localStorage.getItem('token')
    ? '?token=' + localStorage.getItem('token')
    : '';
    this.http.put('/location/' + id + token, this.location)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/locations']);
      }, (err) => {
        console.log(err);
      }
      );
  }


}
