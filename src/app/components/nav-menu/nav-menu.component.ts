import { Component, OnInit } from "@angular/core";

/**
 * Represents the navigation menu visible on every page.
 */
@Component({
  selector: "app-nav-menu",
  templateUrl: "./nav-menu.component.html",
  styleUrls: ["./nav-menu.component.scss"]
})
export class NavMenuComponent {

  public isCollapsed = true;

  /**
   * Shows or hides the navigation menu on mobile devices.
   */
  public onCollapseNavbar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
