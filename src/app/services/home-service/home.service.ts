import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService{
  private urlProducts = "http://localhost:3000/products/headphones";

  constructor(
    private http: HttpClient
  ) { }

  retrieveAll() {
    return this.http.get(this.urlProducts)
  }
}
