// Core
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// Routing
import { AppRoutingModule } from "./app-routing/app-routing.module";

// Components
import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./components/nav-menu/nav-menu.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeroBannerComponent } from "./components/hero-banner/hero-banner.component";

// Views
import { HomeComponent } from "./views/home/home.component";


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    HeroBannerComponent,
    HomeComponent
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
