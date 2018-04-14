import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./components/nav-menu/nav-menu.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeroBannerComponent } from "./components/hero-banner/hero-banner.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    HeroBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
