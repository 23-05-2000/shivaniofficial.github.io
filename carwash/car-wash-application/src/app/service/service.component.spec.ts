import { ComponentFixture, TestBed } from '@angular/core/testing';

import { serviceComponent } from './service.component';

describe('ServiceComponent', () => {
  let component: serviceComponent;
  let fixture: ComponentFixture<serviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [serviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(serviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
