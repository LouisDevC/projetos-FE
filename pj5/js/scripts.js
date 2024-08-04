// variáveis 

const legendaData = document.querySelector('.legenda')
const legendaX = document.querySelector('#legendax')
const legendaY = document.querySelector('#legenday')
const legendaBtn = document.querySelector('#change-to-info')

const informativeData = document.querySelector('.informative')
const quantBarra = document.querySelector('.qx')
const legendBarra = document.querySelector('#legendab')
const inputValueBarra = document.querySelector('#valory')
const graficBtnGenerate = document.querySelector('#generate-btn')

const funcTable = document.querySelector('.data')
legendaData.classList.add("active")
// funções

function getLegendValues() {

    legendaXValue = legendaX.value
    legendaYValue = legendaY.value

    if(!legendaXValue || !legendaYValue)return

    return {legendaXValue, legendaYValue}
}

function createLegendBarra(quantidade) {
    let inputLab = '';
    for (let i = 0; i < quantidade; i++) {
        html += `<label for="legendab${i}">Legenda de cada Barra ${i + 1}</label>
        <input type="text" name="legendab${i}" id="legendab${i}" placeholder="2024" required><br>`;
    }
    return inputLab;
}

// eventos

legendaBtn.addEventListener('click', (e) =>{
    e.preventDefault()

    const objLegenda = getLegendValues()

    if(objLegenda == undefined) return

    legendaData.classList.remove('active')
    informativeData.classList.add('active')
})
quantBarra.addEventListener('input', () =>{
    const quantBarraValue = quantBarra.value

    
})