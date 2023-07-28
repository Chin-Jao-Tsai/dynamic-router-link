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
      
      let data = this.route.snapshot.queryParamMap.get("data");
      let id = this.route.snapshot.queryParamMap.get("id");

      if(data && id) {
        alert(data + " - " + id);
      }
        
                
  }

  ngOnInit() {
  
  }

  back(){
    // this.location.back();
    this.router.navigate(['']);
  }

  goHelloPageinSubPage(){
    this.router.navigate(['/sub-page/hello-page']);
    // or
    // this.router.navigate(['hello-page'], {
    //   relativeTo: this.route
    // });
  }
}