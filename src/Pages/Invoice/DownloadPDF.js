import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';

const downloadPDF = () => {
    const node = document.getElementById('invoice');

    domtoimage.toPng(node)
        .then((dataUrl) => {
            const img = new Image();
            img.src = dataUrl;

            img.onload = () => {
                const pdf = new jsPDF('p', 'mm', 'a4');
                const imgWidth = 210;
                const imgHeight = (img.height * imgWidth) / img.width;

                pdf.addImage(img, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save('invoice.pdf');
            };
        })
        .catch((error) => {
            console.error('Error generating PDF: ', error);
        });
}

export default downloadPDF;
