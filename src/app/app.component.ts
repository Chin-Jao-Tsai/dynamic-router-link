import { Location } from "@angular/common";
import { Component, VERSION } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  content: string = 'Hello Angular';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router, 
    private readonly location: Location
  ) {}



  changeParam(value: string): void {
    // this.router.navigate([], { queryParams: { param: value } });
    this.location.back();
  }
}
