import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TerritoriesPage } from './territories.page';

describe('TerritoriesPage', () => {
  let component: TerritoriesPage;
  let fixture: ComponentFixture<TerritoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerritoriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TerritoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
