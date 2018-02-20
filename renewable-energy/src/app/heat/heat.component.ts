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

  location = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getlocation(this.route.snapshot.params['id']);
  }

  getlocation(id) {
    this.http.get('/location/' + id).subscribe(data => {
      this.location = data;
    });
  }
  updatelocation(id, location) {
    this.http.put('/location/' + id, this.location)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/locations']);
      }, (err) => {
        console.log(err);
      }
      );
  }


}
