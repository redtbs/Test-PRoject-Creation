import { Component } from '@angular/core';

@Component({
  selector: 'app-entity-table',
  templateUrl: './entity-table.component.html',
  styleUrls: ['./entity-table.component.css']
})
export class EntityTableComponent {
  entities = [
    { id: 1, name: 'Entity 1', description: 'Description 1' },
    { id: 2, name: 'Entity 2', description: 'Description 2' },
    { id: 3, name: 'Entity 3', description: 'Description 3' }
  ];
}
