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

  onActivate(event: any){
    // console.log(Object.keys(event));
  }

  onDeactivate(event: any){
    // console.log("D", Object.keys(event));
  }
}
