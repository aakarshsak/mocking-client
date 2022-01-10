import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'moncking-client';
  res: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getApiResponse();
  }

  async getApiResponse() {
    // this.res.timezone = 'UTC';
    let result;
    console.log(environment.baseUrl);
    this.http.get(`${environment.baseUrl}/data/level`).subscribe((Response) => {
      // If response comes hideloader() function is called
      // to hide that loader
      console.log('Inner Response', Response);
      this.res = Response;
      if (Response) {
        result = Response;
      }
      console.log(this.res.timezone, 'THIs');
    });
  }
}
