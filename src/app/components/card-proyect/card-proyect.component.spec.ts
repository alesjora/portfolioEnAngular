import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProyectComponent } from './card-proyect.component';

describe('CardProyectComponent', () => {
  let component: CardProyectComponent;
  let fixture: ComponentFixture<CardProyectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProyectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
