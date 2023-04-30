import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent {
  facility-list: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/facilities.json').subscribe((data: any[]) => {
      this.facility-list = data;
    });
  }

}
