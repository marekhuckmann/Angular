import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SunComponent } from './sun/sun.component';
import { WindComponent } from './wind/wind.component';
import { WaterComponent } from './water/water.component';
import { HeatComponent } from './heat/heat.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { SigninComponent } from './auth/signin.component';
import { LogoutComponent } from './auth/logout.component';
import { SignupComponent } from './auth/signup.component';
import { AuthService } from './auth/auth.service';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  {
    path: 'locations',
    component: SunComponent,
    data: { title: 'location List' }
  },
  {
    path: 'location-details/:id',
    component: WindComponent,
    data: { title: 'location Details'}
  },
  {
    path: 'location-create',
    component: WaterComponent,
    data: { title: 'Create location' }
  },
  {
    path: 'location-edit/:id',
    component: HeatComponent,
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
    SunComponent,
    WindComponent,
    WaterComponent,
    HeatComponent,
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
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
