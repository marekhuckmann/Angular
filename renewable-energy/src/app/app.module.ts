import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LocationCreateComponent } from './location-create/location-create.component';
import { LocationEdit } from './location-edit/location-edit.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { SigninComponent } from './auth/signin.component';
import { LogoutComponent } from './auth/logout.component';
import { SignupComponent } from './auth/signup.component';
import { AuthService } from './auth/auth.service';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  {
    path: 'locations',
    component: LocationsComponent,
    data: { title: 'Location List' }
  },
  {
    path: 'location-details/:id',
    component: LocationDetailsComponent,
    data: { title: 'Location Details'}
  },
  {
    path: 'location-create',
    component: LocationCreateComponent,
    data: { title: 'Create location' }
  },
  {
    path: 'location-edit/:id',
    component: LocationEdit,
    data: { title: 'Edit location' }
  },
  {
    path: 'auth',
    component: AuthenticationComponent,
      children: [
        {path: '', redirectTo: 'signin', pathMatch: 'full'},
        {path: 'signup', component: SignupComponent},
        {path: 'signin', component: SigninComponent},
        {path: 'logout', component: LogoutComponent}
      ]
  },
  {
    path: '',
    redirectTo: '/locations',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationsComponent,
    LocationDetailsComponent,
    LocationCreateComponent,
    LocationEdit,
    AuthenticationComponent,
    SigninComponent,
    LogoutComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    NgProgressModule.forRoot(),
    NgProgressHttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
