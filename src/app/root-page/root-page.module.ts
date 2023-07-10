import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RootPageComponent } from "./root-page.component";
import { ButtonModule } from "../button/button.module";

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [RootPageComponent]
})
export class RootPageModule {}
