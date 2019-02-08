import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestservComponent } from './testserv.component';

describe('TestservComponent', () => {
  let component: TestservComponent;
  let fixture: ComponentFixture<TestservComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestservComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
