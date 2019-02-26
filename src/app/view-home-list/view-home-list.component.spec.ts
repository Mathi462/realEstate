import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHomeListComponent } from './view-home-list.component';

describe('ViewHomeListComponent', () => {
  let component: ViewHomeListComponent;
  let fixture: ComponentFixture<ViewHomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHomeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
