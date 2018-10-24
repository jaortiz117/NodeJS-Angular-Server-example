import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor( private dataService:DataService){}

  ngOnInit(): void {
    this.dataService.getAllCats().subscribe( result => {
      console.log("Received Response: " + result);
    });

    this.dataService.getCat("testerson").subscribe( result => {
      console.log("Received Response: " + result.name);
    });
  }
}
