import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';

import { NgCircleProgressModule } from 'ng-circle-progress';
import {NgxTimeSchedulerModule} from 'ngx-time-scheduler';

const appRoutes: Routes = [
  {
    path: '',
    component: UserDashboardComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    NavbarComponent,
    ProjectsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    //Circle Progress
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    MatBadgeModule,
    NgxTimeSchedulerModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
