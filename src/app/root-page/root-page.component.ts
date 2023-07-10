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
  }

  gotoSubPage(){
    this.router.navigate(['/sub-page']);                            
  }
}