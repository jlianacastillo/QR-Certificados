document.getElementById('generateCertificate').addEventListener('click', () => { 
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const currentTime = new Date().toLocaleString();
    const pdfContent = {
      content: [
        { text: `Certificado de participación`, fontSize: 20, bold: true, alignment: 'center' },
        { text: '\n' },
        { text: `Nombre: ${name}`, fontSize: 16 },
        { text: `ID: ${id}`, fontSize: 16 },
        { text: `Fecha: ${currentTime}`, fontSize: 16 },
        { qr: `Certificado de ${name}\nID: ${id}\nFecha: ${currentTime}`, fit: 100, alignment: 'center' } 
      ],
      defaultStyle: {
        fontSize: 12,
      },
    };
    const pdfDocument = pdfMake.createPdf(pdfContent);
    pdfDocument.download(`Certificado_${name}.pdf`);
  });
  