import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { ShowDateTimeComponent } from './show-datetime.component';

describe('ShowDateTimeComponent', () => {
  let component: ShowDateTimeComponent;
  let fixture: ComponentFixture<ShowDateTimeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ShowDateTimeComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
