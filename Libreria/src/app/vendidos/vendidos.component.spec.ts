import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendidosComponent } from './vendidos.component';

describe('VendidosComponent', () => {
  let component: VendidosComponent;
  let fixture: ComponentFixture<VendidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
