import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import reactDom from 'react-dom';

// FONTE https://www.youtube.com/watch?v=WG1EYRhny3M

export default function filmesPDF(movieReviewList) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [{
        text: 'Avaliação de Filmes',
        fontSize: 15,
        bold: true,
        margin: [15, 20, 0, 45],
        alignment: 'center',
    }]
    const dados = movieReviewList.map(item =>{
       return [
            { text: item.movieName,  fontSize: 10, margin:[0,2,0,2] },
            { text:item.movieReview , fontSize: 10,margin:[0,2,0,2] }
        ]
    })


    const details = [{
        table: {
            headerRows: 1,
            widths: ['*', '*'],
            body: [
                [
                    { text: 'MovieName', style: 'tableHeader', fontSize: 10 },
                    { text: 'MovieReview', style: 'tableHeader', fontSize: 10 }
                ],
               ...dados
            ]
        },
        layout: 'headerLineOnly'
    }]

    function Rodape() {

    }

    const docDefinitios = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],
        header: [reportTitle],
        content: [details],
        footer: Rodape
    }

    pdfMake.createPdf(docDefinitios).download();

}