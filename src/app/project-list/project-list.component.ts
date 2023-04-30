/*import { Component } from '@angular/core';

import { projects } from '../projects';


export class ProjectListComponent {
  projects = projects;

  share() {
    window.alert('The project has been shared!');
  }
}
*/
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
 /* const url = 'https://dev.azure.com/{organization}/{project}/_apis/projects?api-version=6.0';
  const headers = { 'Authorization': 'Basic ' + btoa(':' + '{personal access token}') };*/
 /* this.http.get(url, { headers }).subscribe(
    (data: any) => {
      this.projects = data.value.map((project: any) => ({
        name: project.name,
        id: project.id,
        url: project.url,
        status: project.status,
        revision: project.revision
      }));
    },

    */

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
