import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.component.html',
  styleUrls: ['./sub-page.component.css']
})
export class SubPageComponent implements OnInit {

  constructor(private readonly route: ActivatedRoute, 
              private router: Router,
              private location: Location) {
      
      console.log(this.route.snapshot.queryParams);
                
  }

  ngOnInit() {
  }

  back(){
    // this.location.back();
    this.router.navigate(['']);
  }

  goRootPageinSubPage(){
    this.router.navigate(['/sub-page/root-page']);
  }
}