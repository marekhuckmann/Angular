import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sun',
  templateUrl: './sun.component.html',
  styleUrls: ['./sun.component.css']
})
export class SunComponent implements OnInit {
  books: any;
  lat: number;
  lng: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/book').subscribe(data => {
      this.books = data;
    });

    this.getUserLocation();
  }

  private getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.http.get(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${this.lat},${this.lng}`)
          .map(result => result).subscribe(sth => {
            let voivodeship;

            for (let ac = 0; ac < sth['results'][0].address_components.length; ac++) {
              const component = sth['results'][0].address_components[ac];

              if (component.types[0] === 'administrative_area_level_1') {
                  voivodeship = component.short_name;
                  break;
              }
              console.log(ac);
            }
            console.log(voivodeship);
          });
      });
    }
  }
}
