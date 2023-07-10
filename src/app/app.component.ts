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
  inputVal;
  
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router, 
    private readonly location: Location,
    public gs: GreetingService
  ) {}



  changeParam(value: string): void {
    // this.router.navigate([], { queryParams: { param: value } });
    // this.location.back();
  }

  childComEmit(event: any){
    alert(event);
  }
}
