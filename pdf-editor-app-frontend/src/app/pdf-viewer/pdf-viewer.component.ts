import { RestService } from './../services/rest.service';
import { PdfService } from '../services/pdf.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Signature } from '../models/signature';
import { Subscription } from 'rxjs';

// https://pdfviewer.net/attributes

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {

  base64: string;
  currentPage = 1;
  restorePage = null;
  showSignatureSelector = false;
  signatures: Signature[] = [];
  selectedSignature: Signature;
  subs: Subscription[];

  constructor(
    private pdfService: PdfService,
    private restService: RestService
  ) { 
      restService.get('signatures/all').subscribe(signatures => this.signatures = signatures);
  }

    
  ngOnInit() {
    this
      .pdfService
      .loadPDF('assets/example.pdf')
      .then(arrayBuffer => {
        if(arrayBuffer) {
          this.base64 = btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
        }
      })
  }

  toggleSignatureSelector() {
    this.showSignatureSelector = !this.showSignatureSelector;
  }

  selectSignature(signature: Signature) {
    this.showSignatureSelector = false;
    this.selectedSignature = signature;
  }

  applySignature(event) {
    this
    .pdfService
    .applySignatureTo(this.base64, this.currentPage - 1, this.selectedSignature, event.rect)
    .then(arrayBuffer => {
      if(arrayBuffer) {
        this.base64 = btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
        this.restorePage = this.currentPage;
      }
    })
  }

  setCurrentPage(index) {
    this.restorePage = null;
    this.currentPage = index;
  }
}
