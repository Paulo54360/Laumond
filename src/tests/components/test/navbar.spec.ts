import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { NavbarTraduction, OeuvresTraduction, MetaHismeTraduction, AnalysesTraduction } from '@interfaces/traductions.interfaces';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Import du CUSTOM_ELEMENTS_SCHEMA

const FAKE_TRANSLATIONS: Record<string, NavbarTraduction> = {
  en: {
    "MétaHisme": "MetaHism",
    "Oeuvres": "Artworks",
    "Biographie": "Biography",
    "Actualités": "News",
    "Analyses": "Analyzes"
  },
  fr: {
    "MétaHisme": "MétaHisme",
    "Oeuvres": "Œuvres",
    "Biographie": "Biographie",
    "Actualités": "Actualités",
    "Analyses": "Analyses"
  }
};

const mockTranslateService = {
  use: jest.fn(),
  get: jest.fn((key) => of(FAKE_TRANSLATIONS[key])),
  setDefaultLang: jest.fn()
};

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        { provide: TranslateService, useValue: mockTranslateService },
        { provide: PrimeNGConfig, useValue: {} }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Ajout du CUSTOM_ELEMENTS_SCHEMA
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should switch language', () => {
    component.currentLang = 'fr';
    component.switchLanguage();
    expect(component.currentLang).toEqual('en');
    expect(mockTranslateService.use).toHaveBeenCalledWith('en');

    component.switchLanguage();
    expect(component.currentLang).toEqual('fr');
    expect(mockTranslateService.use).toHaveBeenCalledWith('fr');
  });

  it('should translate items', () => {
    component.translateItems();
    expect(mockTranslateService.get).toHaveBeenCalled();
  });
});
