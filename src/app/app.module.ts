import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EntityTableComponent } from './entity-table/entity-table.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { FacilityListComponent } from './facility-list/facility-list.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  //  RouterModule.forRoot([
   //   { path: '', component: ProjectListComponent },
   // ])
 ],
  declarations: [
    AppComponent,
    TopBarComponent,
    EntityTableComponent,
    ProjectListComponent,
    FacilityListComponent
 
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/