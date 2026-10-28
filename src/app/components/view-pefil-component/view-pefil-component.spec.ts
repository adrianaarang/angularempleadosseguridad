import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewPefilComponent } from './view-pefil-component';

describe('ViewPefilComponent', () => {
  let component: ViewPefilComponent;
  let fixture: ComponentFixture<ViewPefilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewPefilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPefilComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
