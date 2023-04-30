import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-unit-list',
  template: `
  <h2>Unit List</h2>
  <ul>
    <li *ngFor="let unit of units">{{ unit.name }} - {{ unit.description }}</li>
  </ul>
`,
})
export class UnitListComponent implements OnInit {
  units: any[] = [
    { name: 'Unit A', description: 'This is unit A' },
    { name: 'Unit B', description: 'This is unit B' },
    { name: 'Unit C', description: 'This is unit C' },
  ];

  constructor() {}

  ngOnInit(): void { };
  }
