import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-authentication',
    template: `
    <div class="container">
        <div class="row">
            <nav class="col-md-8">
                <ul class="nav nav-tabs">
                    <li routerLinkActive="active"><a [routerLink]="['signup']">Signup</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['signin']">Signin</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['logout']">Logout</a></li>
                </ul>
            </nav>
        </div>
        <div class="row">
           <router-outlet></router-outlet>
        </div>
    </div>
    `
})
export class AuthenticationComponent {

}