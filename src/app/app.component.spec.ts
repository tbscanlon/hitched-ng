import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("AppComponent", () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app     = fixture.debugElement.componentInstance;

    fixture.detectChanges();
  }));

  describe("Initialisation", () => {
    it("should create the app", async(() => {
      expect(app).toBeTruthy();
    }));

    it(`should have as title 'app'`, async(() => {
      expect(app.title).toEqual("app");
    }));

    it("has a navigation menu", async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector("app-nav-menu")).toBeTruthy();
    }));
  });
});
