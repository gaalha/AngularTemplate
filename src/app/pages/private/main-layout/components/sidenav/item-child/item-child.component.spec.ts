import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemChildComponent } from './item-child.component';

describe('ItemChildComponent', () => {
  let component: ItemChildComponent;
  let fixture: ComponentFixture<ItemChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
