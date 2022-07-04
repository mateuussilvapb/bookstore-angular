import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookModel } from './model/book';
import { Observable } from 'rxjs';

// ============================================== //
@Injectable()
export class BookService {
  // ============================================== //
  private BASE_URL = 'http://localhost:3000/books';
  // ============================================== //
  httpOptions = {
    Headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };
  // ============================================== //
  constructor(private http: HttpClient) {}
  // ============================================== //
  getBooks(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(this.BASE_URL);
  }
  // ============================================== //
  getBook(id: number) {
    return this.http.get(`${this.BASE_URL}/${id}`);
  }
}
