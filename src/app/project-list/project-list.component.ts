
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Project {
  name: string;
  id: string;
  url: string;
  status: string;
  revision: number;
}


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
 
  projects: Project[];


constructor(private http: HttpClient) {
  this.projects = [];
  this.loadProjects();
}

loadProjects() {
 
    this.http.get<Project[]>('assets/projects.json').subscribe(
      data => {
        this.projects = data;
      },
    error => console.error(error)
  );
}
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
