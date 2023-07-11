import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { Route, RouterModule } from "@angular/router";
import { SubPageComponent } from "./sub-page/sub-page.component";
import { SubPageModule } from "./sub-page/sub-page.module";
import { RootPageModule } from "./root-page/root-page.module";
import { RootPageComponent } from "./root-page/root-page.component";
import { FormsModule } from "@angular/forms";
import { BlockCopyPasteDirective } from "./directive/disableCopyPaste.directive";
import { HighlightDirective } from "./directive/highlight.directive";

const routes: Route[] = [
  { path: "", component: RootPageComponent },
  { path: "roo-page", component: RootPageComponent },
  { path: "sub-page", component: SubPageComponent }
  // { path: "sub-page", component: SubPageComponent,
  //   children: [
  //     {
  //       path: 'hello-page',
  //       component: HelloComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    RootPageModule,
    SubPageModule
  ],
  declarations: [
    AppComponent, 
    HelloComponent,
    BlockCopyPasteDirective,
    HighlightDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
