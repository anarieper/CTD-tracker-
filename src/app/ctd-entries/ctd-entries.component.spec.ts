import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtdEntriesComponent } from './ctd-entries.component';

describe('CtdEntriesComponent', () => {
  let component: CtdEntriesComponent;
  let fixture: ComponentFixture<CtdEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtdEntriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtdEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
