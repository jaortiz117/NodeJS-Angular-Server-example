import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export interface Cat {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getAllCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>('http://localhost:3000/api/data');
  }

  getCat(name: string): Observable<Cat> {
    return this.http.get<Cat>('http://localhost:3000/api/data/' + name);
  }

  insertCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>('http://localhost:3000/api/data/', cat);
  }

  updateCat(cat: Cat): Observable<void> {
    return this.http.put<void>('http://localhost:3000/api/data/' + cat.name, cat);
  }

  deleteCat(name: string) {
    return this.http.delete('http://localhost:3000/api/data/' + name);
  }
}
