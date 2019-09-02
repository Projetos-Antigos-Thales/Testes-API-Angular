import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveHomeComponent } from './activehome.component';

describe('IndexComponent', () => {
  let component: ActiveHomeComponent;
  let fixture: ComponentFixture<ActiveHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
