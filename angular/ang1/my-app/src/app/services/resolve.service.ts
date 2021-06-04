import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<Observable<any[]>> {

  constructor(private httpClient: HttpClient) { }

  resolve() {
    return this.httpClient.get<any[]>(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }
}
