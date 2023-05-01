import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoCrud';
  serverData: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('http://localhost:3000').subscribe(data => {
      this.serverData = data;
      console.log(this.serverData);
    });
  }
}

