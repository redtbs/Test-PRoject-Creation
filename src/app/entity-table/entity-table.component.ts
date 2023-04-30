import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entity-table',
  templateUrl: './entity-table.component.html',
  styleUrls: ['../styles.css']
})
export class EntityTableComponent {
  entities = [
    { id: 1, name: 'Arcadis Gen', description: 'Global Legal Entity for Arcadis Gen' },
    { id: 2, name: 'Arcadis North America', description: 'Legal Entity for Arcadis North America Only' },
    { id: 3, name: 'Arcadis UK', description: 'Legal Entity for Arcadis UK only' }
  ];
}
