import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCardPswComponent } from './update-card-psw.component';

describe('UpdateCardPswComponent', () => {
  let component: UpdateCardPswComponent;
  let fixture: ComponentFixture<UpdateCardPswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCardPswComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCardPswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
