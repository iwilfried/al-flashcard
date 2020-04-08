import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImprintModalComponent } from './imprint-modal.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ImprintModalComponent', () => {
  let component: ImprintModalComponent;
  let fixture: ComponentFixture<ImprintModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprintModalComponent ],
      imports: [IonicModule.forRoot()],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ImprintModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
