/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CInemaComponent } from './CInema.component';

describe('CInemaComponent', () => {
  let component: CInemaComponent;
  let fixture: ComponentFixture<CInemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CInemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CInemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
