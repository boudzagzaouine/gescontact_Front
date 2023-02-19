import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Contact } from '../models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }

  getContacts() {
    return this.httpClient.get<Contact[]>(this.url+"employee")
      .pipe(map(data => data), catchError(this.handleError))
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // just a test ... more could would go here
    return throwError(() => err);
  }

}




