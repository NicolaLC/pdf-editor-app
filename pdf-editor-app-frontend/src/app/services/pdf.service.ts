import { Injectable } from '@angular/core';
import { degrees, PDFDocument, rgb, StandardFonts, PDFPage } from 'pdf-lib';
import { Signature } from '../models/signature';
// https://pdf-lib.js.org/docs/api/

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  constructor() { }

  async loadPDF(path: string) {
    const res = await fetch(path);
    return res.arrayBuffer();
  } 

  async applySignatureTo(
      pdf: string, 
      pageIndex: number, 
      signature: Signature, 
      rect: DOMRect
    ) {
      const pdfDoc = await PDFDocument.load(pdf)
      const page = pdfDoc.getPages()[pageIndex];
      const documentWrapperRect = document.querySelectorAll('.canvasWrapper canvas')[pageIndex].getBoundingClientRect();
      const relativeBoundaries = this.relativeBoundaries(rect, documentWrapperRect, page.getWidth(), page.getHeight());

      page.drawRectangle(
        {
          x: relativeBoundaries.x,
          y: relativeBoundaries.y,
          width: relativeBoundaries.width,
          height: relativeBoundaries.height,
          borderColor: rgb(1, 0, 0),
          borderWidth: 1,
        }
      )

      page.drawText(`${signature.surname} ${signature.name}`,
        { 
          x: relativeBoundaries.x + 10.25, 
          y: relativeBoundaries.y + 10.5, 
          maxWidth: relativeBoundaries.width,
          size: 10
        });
      
      return await pdfDoc.save();
  }

  relativeBoundaries(ofRect: DOMRect, pdfPageRect: DOMRect, pageWidth: number, pageHeight: number): DOMRect {
    const result: DOMRect = ofRect;
    const {x: xOf, y: yOf, width: wOf, height: hOf} = ofRect;
    const {left: xPage, top: yPage, width: wPage, height: hPage} = pdfPageRect;

    const rapportoX = wPage / pageWidth;
    const rapportoY = hPage / pageHeight;

    result.x = ((xOf - xPage) / rapportoX);
    result.y = pageHeight - ((yOf - yPage) / rapportoY);
    result.width = (ofRect.width / rapportoX) - 0.5;
    result.height = (ofRect.height / rapportoY) -0.5;

    result.x += 0.5;
    result.y -= result.height - 0.5;

    return result;
  }
}
