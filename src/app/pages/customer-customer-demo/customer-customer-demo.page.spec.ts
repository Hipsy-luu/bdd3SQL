import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerCustomerDemoPage } from './customer-customer-demo.page';

describe('CustomerCustomerDemoPage', () => {
  let component: CustomerCustomerDemoPage;
  let fixture: ComponentFixture<CustomerCustomerDemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCustomerDemoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerCustomerDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
