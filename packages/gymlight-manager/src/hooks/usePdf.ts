import { useRef, useState } from 'react';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface IUsePdfParams {
  fileName?: string;
  paperSize?: 'A3' | 'A4' | 'A5' | 'A6' | 'A7' | 'B4' | [number, number];
  orientation?: 'portrait' | 'landscape';
}

export const usePdf = ({
  fileName = 'contract',
  paperSize = 'A4',
  orientation = 'portrait',
}: IUsePdfParams) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pdfBase64String, setPdfBase64String] = useState('');

  const paperSizes = {
    A3: [297, 420],
    A4: [210, 297],
    A5: [148, 210],
    A6: [105, 148],
    A7: [74, 105],
    B4: [250, 353],
  };

  const size = typeof paperSize === 'string' ? paperSizes[paperSize] : paperSize;
  const isLandscape = orientation === 'landscape';

  const getBlob = async (): Promise<Blob | null> => {
    const contractElement = ref.current;
    if (!contractElement) {
      alert('PDF 생성에 필요한 요소를 찾을 수 없습니다.');
      return null;
    }

    return html2canvas(contractElement, {
      scale: 2,
    }).then((canvas) => {
      const pdf = new jsPDF({
        orientation,
        unit: 'mm',
        format: size,
      });

      const imgWidth = isLandscape ? size[0] : size[1];
      const imgHeight = (imgWidth * canvas.height) / canvas.width;

      const jpegImage = canvas.toDataURL('image/jpeg', 0.5);

      pdf.addImage(jpegImage, 'JPEG', 0, 0, imgWidth, imgHeight, 'SLOW');

      return pdf.output('blob');
    });
  };

  const getPdfBase64String = async (): Promise<string | null> => {
    const pdfBlob = await getBlob();
    if (!pdfBlob) return null;

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          resolve(reader.result.toString());
        } else {
          reject('Blob을 base url로 변환하는데에 실패했습니다.');
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(pdfBlob);
    });
  };

  const handleGeneratePdfBase64 = async () => {
    try {
      const base64String = await getPdfBase64String();
      if (base64String) {
        setPdfBase64String(base64String);
      } else {
        console.error('PDF Base64 생성 실패');
      }
    } catch (error) {
      console.error('PDF Base64 변환 중 에러:', error);
    }
  };

  const downloadPdf = async () => {
    const pdfBlob = await getBlob();
    if (pdfBlob) {
      const newBlobUrl = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = newBlobUrl;
      link.download = `${fileName}.pdf`;
      link.click();
    }
  };

  return {
    ref,
    downloadPdf,

    handleGeneratePdfBase64,
    pdfBase64String,

    getBlob,
  };
};
