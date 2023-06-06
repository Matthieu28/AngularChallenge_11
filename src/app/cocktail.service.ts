import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CocktailService {

  constructor(public http: HttpClient) { }

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>("assets/cocktails.json");
  }
}
