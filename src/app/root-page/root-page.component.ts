import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root-page',
  templateUrl: './root-page.component.html',
  styleUrls: ['./root-page.component.css']
})
export class RootPageComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit() {
    console.log("RootPageComponent");
  }

  gotoSubPage(){
    this.router.navigate(['/sub-page']);                            
  }

  gotoSubPageWithParam(){
    this.router.navigate(['/sub-page'], {
      queryParams: {
        data: "someId",
        id: "123"
      }
    }); 
  }
}