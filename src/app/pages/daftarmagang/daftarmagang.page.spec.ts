import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DaftarmagangPage } from './daftarmagang.page';

describe('DaftarmagangPage', () => {
  let component: DaftarmagangPage;
  let fixture: ComponentFixture<DaftarmagangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarmagangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DaftarmagangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
