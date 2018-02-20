import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WaterComponent implements OnInit {

  location = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveLocation() {
    this.http.post('/location', this.location)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/location-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
