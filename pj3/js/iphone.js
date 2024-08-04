const btns = document.querySelectorAll('#img-picker li')
const img = document.querySelector('#product')
const dayLight = document.querySelector('#daylight')

btns.forEach((btn) =>{
    btn.addEventListener('click', (event) =>{
        console.log(event);

    btns.forEach((btn) => {
        btn.querySelector('.color').classList.remove('selected')
    });

    const btnTarget = event.target

    const id = btnTarget.getAttribute('id')

    btnTarget.querySelector('.color').classList.add('selected')

    img.classList.add("changing");
    img.setAttribute('src', `img/iphone_${id}.png`)

    setTimeout(() =>{
        img.classList.remove("changing")
    }, 200)
})
})

dayLight.addEventListener('click',() =>{
    const mainColor = document.querySelector('#main-content')

    if(dayLight.src.includes('img/bgtyle/day-and-night.png')){
        dayLight.src = 'img/bgtyle/daynight.png'
        mainColor.style.backgroundColor ='black'
        mainColor.style.color = 'white'
    }else{
        dayLight.src = 'img/bgtyle/day-and-night.png'
        mainColor.style.backgroundColor ='white'
        mainColor.style.color = 'black'
    }
})