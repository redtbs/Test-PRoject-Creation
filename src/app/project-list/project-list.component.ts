
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
 
  projects: any[];


constructor(private http: HttpClient) {

}
ngOnInit() {
  this.http.get<any[]>('/assets/projects.json').subscribe(data => {
    this.projects = data;
  });

}
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
