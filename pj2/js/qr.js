const container = document.querySelector('.qr-container');
const qrButton = document.querySelector('.form-qr button');
const qrInput = document.querySelector('#input-qr');
const qrImage = document.querySelector('#qr-code img')


// eventos
function generateQr() {
    const qrInputValue = qrInput.value;
    if(!qrInputValue)return;
    qrButton.innerHTML = 'Gerando QRcode';
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInputValue}`;
    container.classList.add('active');
    qrButton.innerHTML = 'QRcode gerado';
};

qrButton.addEventListener("click", () => {
    generateQr();
});

qrInput.addEventListener("keydown", (Event) => {
    if(Event.code === 'Enter') {
        generateQr();
    }
});

qrInput.addEventListener('keyup', () => {
    if(!qrInput.value){
        container.classList.remove('active');
        qrButton.innerHTML = 'Gerar QRcode';
    }
});