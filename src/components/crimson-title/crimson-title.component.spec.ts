import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimsonTitleComponent } from './crimson-title.component';

describe('CrimsonTitleComponent', () => {
  let component: CrimsonTitleComponent;
  let fixture: ComponentFixture<CrimsonTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrimsonTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrimsonTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title text with correct classes', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span.title-text-crimson').textContent).toContain('CRIMSON');
    expect(compiled.querySelector('span.title-text-imagination').textContent).toContain('IMAGINATION');
  });


});
