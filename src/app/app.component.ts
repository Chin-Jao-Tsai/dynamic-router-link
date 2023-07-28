import { Location } from "@angular/common";
import { Component, VERSION } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GreetingService } from "./service/greeting.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  bgColor = '';
  
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router, 
    private readonly location: Location,
    public gs: GreetingService
  ) {}

  ngOnInit() {
    console.log("AppComponent");
  }

  childComEmit(event: any){
    alert(event);
  }

  mouseEnter(event: any){
    if(event){
      this.bgColor = "blue";
    } else {
      this.bgColor = "";
    }
  }



  // Router Lab
  onActivate(event: any){
    // console.log(Object.keys(event));
    // alert("onActive");
  }

  onDeactivate(event: any){
    // console.log("D", Object.keys(event));
    // alert("onDeactivate");
  }
}
