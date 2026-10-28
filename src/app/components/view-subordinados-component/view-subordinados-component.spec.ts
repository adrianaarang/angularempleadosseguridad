import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewSubordinadosComponent } from './view-subordinados-component';

describe('ViewSubordinadosComponent', () => {
  let component: ViewSubordinadosComponent;
  let fixture: ComponentFixture<ViewSubordinadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewSubordinadosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSubordinadosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
