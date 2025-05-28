/*
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesPage } from './heroes.page';

describe('HeroesPage', () => {
  let component: HeroesPage;
  let fixture: ComponentFixture<HeroesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesPage } from './heroes.page';
import { provideRouter } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HeroesBDService } from 'src/app/services/heroes-bd.service';

describe('HeroesPage', () => {
  let component: HeroesPage;
  let fixture: ComponentFixture<HeroesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesPage], // Standalone component
      providers: [
        { provide: HeroesBDService, useValue: { getHeroes: () => of([]) } },
        { provide: ActivatedRoute, useValue: { snapshot: { queryParamMap: { get: () => null } } } },
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
