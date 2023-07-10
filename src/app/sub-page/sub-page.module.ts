import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubPageComponent } from "./sub-page.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SubPageComponent]
})
export class SubPageModule {}
