import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListContentComponent } from './game-list-content.component';

describe('GameListContentComponent', () => {
  let component: GameListContentComponent;
  let fixture: ComponentFixture<GameListContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameListContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
