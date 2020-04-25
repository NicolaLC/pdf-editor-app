import { Component, OnInit, Input, EventEmitter, Output, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pdf-signature-creator',
  templateUrl: './pdf-signature-creator.component.html',
  styleUrls: ['./pdf-signature-creator.component.scss']
})
export class PdfSignatureCreatorComponent {

  @Input() signature: string;

  @Output() apply: EventEmitter<{rect:Partial<DOMRect>}> = new EventEmitter();
  @Output() cancel: EventEmitter<null> = new EventEmitter();

  constructor(private elRef: ElementRef) {}

  calculateBoundaries() {
    const rect = this.elRef.nativeElement.querySelector('.signature-creator-content').getBoundingClientRect();
    this.apply.emit({rect});
  }

}
