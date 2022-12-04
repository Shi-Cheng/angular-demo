import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  url: string = 'http://127.0.0.1:4523/m1/2031289-0-default' + '/get/car/list'
  constructor(private http: HttpClient) {
    this.http = http;
  }

  ngOnInit(): void {
    
    this.http.get(this.url).subscribe(item => {
      console.log(item);
    });
  }
  title = 'myngapp01';
}
