import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-modulea',
  templateUrl: './modulea.component.html',
  styleUrls: ['./modulea.component.scss']
})
export class ModuleaComponent implements OnInit {
movieList:any;
page: number = 1;
  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
this.getMovies();
  }
  getMovies(){
    this.httpService.getAllMovies(this.page).subscribe((res)=>{
      console.log(res);
      this.movieList=res.results;
      console.log(this.movieList);
    })


  }
  onScroll(){
    console.log("Scrolled");
    this.page = this.page + 1;
    this.getMovies();
  }

}
