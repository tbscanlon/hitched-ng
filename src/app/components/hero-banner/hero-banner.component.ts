import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-hero-banner",
  templateUrl: "./hero-banner.component.html",
  styleUrls: ["./hero-banner.component.scss"]
})
export class HeroBannerComponent implements OnInit {

  // TODO: create config file and place url to bg image in there.
  // then import image here with an if/else to toggle it or something.

  constructor() { }

  ngOnInit() {
  }

}
