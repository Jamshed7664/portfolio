import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtechStackComponent } from './ttech-stack.component';

describe('TtechStackComponent', () => {
  let component: TtechStackComponent;
  let fixture: ComponentFixture<TtechStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TtechStackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtechStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
