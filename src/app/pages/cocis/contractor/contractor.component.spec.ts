import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContractorComponent } from './contractor.component';

describe('PageContractorComponent', () => {
  let component: PageContractorComponent;
  let fixture: ComponentFixture<PageContractorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageContractorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
