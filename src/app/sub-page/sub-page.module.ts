import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubPageComponent } from "./sub-page.component";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "../button/button.module";

@NgModule({
  imports: [CommonModule, RouterModule, ButtonModule],
  declarations: [SubPageComponent]
})
export class SubPageModule {}
