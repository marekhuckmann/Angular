import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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

const appRoutes: Routes = [
  {
    path: 'books',
    component: SunComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'book-details/:id',
    component: WindComponent,
    data: { title: 'Book Details'}
  },
  {
    path: 'book-create',
    component: WaterComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'book-edit/:id',
    component: HeatComponent,
    data: { title: 'Edit Book' }
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
    redirectTo: '/books',
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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
