import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['../../styles.css']
})
export class FacilityListComponent {
    facilities = [
    { id: 1, name: '80 Fen', description: 'London Office' },
    { id: 2, name: 'Cubo', description: 'Sheffield Office' },
    { id: 3, name: 'Airport City', description: 'Belgrade Office' }
  ];
}