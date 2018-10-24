import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private dataService:DataService){}

  getAll(){
    this.dataService.getAllCats().subscribe( result => {
      console.log("Received Response: " + result);
    });
  }

  getTest(){
    this.dataService.getCat("testerson").subscribe( result => {
      console.log("Received Response: " + result.name);
    });
  }
}
