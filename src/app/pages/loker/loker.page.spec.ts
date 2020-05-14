import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LokerPage } from './loker.page';

describe('LokerPage', () => {
  let component: LokerPage;
  let fixture: ComponentFixture<LokerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LokerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LokerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
