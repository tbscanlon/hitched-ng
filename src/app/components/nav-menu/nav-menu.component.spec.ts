import { NO_ERRORS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavMenuComponent } from "./nav-menu.component";

describe("NavMenuComponent", () => {
  let component: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMenuComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture   = TestBed.createComponent(NavMenuComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  describe("Initialisation", () => {
    it("should create", () => {
      expect(component).toBeTruthy();
    });

    it("is collapsed by default", () => {
      expect(component.isCollapsed).toBeTruthy();
    });
  });

  describe("#onCollapseNavbar", () => {
    beforeEach(() => {
      component.onCollapseNavbar();
    });

    it("Shows the navbar on mobile devices", () => {
      expect(component.isCollapsed).toBeFalsy();
    });
  });
});
