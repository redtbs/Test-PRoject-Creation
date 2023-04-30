/*import { Component } from '@angular/core';

import { projects } from '../projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent {
  projects = projects;

  share() {
    window.alert('The project has been shared!');
  }
}
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  projects = [
    { name: 'Project A', status: 'Active' },
    { name: 'Project B', status: 'Inactive' },
    { name: 'Project C', status: 'Active' },
    { name: 'Project D', status: 'Inactive' }
  ];
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
