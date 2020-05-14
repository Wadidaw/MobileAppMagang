import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MandiriPage } from './mandiri.page';

describe('MandiriPage', () => {
  let component: MandiriPage;
  let fixture: ComponentFixture<MandiriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandiriPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MandiriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
