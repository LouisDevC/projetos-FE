// seleção de elementos

const formSpace = document.querySelector('#form-space');
const tabNumber = document.querySelector('#number');
const multiplicador = document.querySelector('#multiplicador');
const tableBox = document.querySelector('.result-box')
const multiTitle = document.querySelector('#multi-title span')

// funções
const createTable = (multiNumber, contNumber) =>{
    tableBox.innerHTML = ''

    for(i=1; i <= contNumber; i++){
        const result = multiNumber * i;

        const template = `<article class="row">
            <p>${multiNumber} x ${i} =</p>
            <p class="result">${result}</p>
        </article>`
        const parser = new DOMParser()
        const HTMLtemplate = parser.parseFromString(template, 'text/html')
        const row = HTMLtemplate.querySelector('.row')
        tableBox.appendChild(row)
    }
    multiTitle.innerHTML = multiNumber
}
// eventos
formSpace.addEventListener("submit", (event) => {
    event.preventDefault();

    const multiNumber = +tabNumber.value; //sinal de mas força ele a retornar um inteiro
    const contNumber = +multiplicador.value;
    if(!multiNumber || !contNumber) return;

    createTable(multiNumber, contNumber)
});