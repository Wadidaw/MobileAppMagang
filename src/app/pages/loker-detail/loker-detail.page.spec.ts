import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LokerDetailPage } from './loker-detail.page';

describe('LokerDetailPage', () => {
  let component: LokerDetailPage;
  let fixture: ComponentFixture<LokerDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LokerDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LokerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
