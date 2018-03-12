import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListBarComponent } from './game-list-bar.component';

describe('GameListBarComponent', () => {
  let component: GameListBarComponent;
  let fixture: ComponentFixture<GameListBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameListBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
