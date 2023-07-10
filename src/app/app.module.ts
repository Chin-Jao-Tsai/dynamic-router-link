import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { Route, RouterModule } from "@angular/router";
import { SubPageComponent } from "./sub-page/sub-page.component";
import { SubPageModule } from "./sub-page/sub-page.module";
import { RootPageModule } from "./root-page/root-page.module";
import { RootPageComponent } from "./root-page/root-page.component";
import { BlockCopyPasteDirective } from "./directive/disableCopyPaste";

const routes: Route[] = [
  { path: "", component: RootPageComponent },
  { path: "sub-page", component: SubPageComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RootPageModule,
    SubPageModule
  ],
  declarations: [
    AppComponent, 
    HelloComponent,
    BlockCopyPasteDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
