import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getAllMovies(page:number):Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/movie/top_rated?api_key=ce6c13bc393fd7f0a2877fd8e89dff96&language=en-US&page='+page)
  }
}
