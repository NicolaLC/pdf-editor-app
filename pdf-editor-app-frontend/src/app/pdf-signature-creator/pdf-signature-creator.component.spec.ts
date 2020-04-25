import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfSignatureCreatorComponent } from './pdf-signature-creator.component';

describe('PdfSignatureCreatorComponent', () => {
  let component: PdfSignatureCreatorComponent;
  let fixture: ComponentFixture<PdfSignatureCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfSignatureCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfSignatureCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
