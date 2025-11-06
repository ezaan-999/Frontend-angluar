import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePacking } from './create-packing';

describe('CreatePacking', () => {
  let component: CreatePacking;
  let fixture: ComponentFixture<CreatePacking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePacking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePacking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
