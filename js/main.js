const elBtn = document.querySelector('.site-wrraper__img')
const elTex = document.querySelector('.site-wrraper__txt')
const elSelect = document.querySelector('#select')
const arr = [] 
data.forEach(el => {
    const elOption = document.createElement('option')
    elOption.textContent = el.name
    elOption.value = el.name
    elOption.lang = el.alpha2
    elSelect.append(elOption)
elSelect.addEventListener('click' , e => {
    if (el.name.includes(e.target.value)){
            arr.unshift(elOption.lang)
        }
})      
})

elBtn.addEventListener('click', () =>{
    elBtn.classList.add('site-wrraper__img--active')
    document.getElementById('sound1').play()
    let recoginition = new webkitSpeechRecognition();
        recoginition.lang = `${arr[0]}-GB`
        console.log(recoginition.lang);
        const elSound = document.createElement('audio')
        elSound.src = 'sound/sound2.wav'
        recoginition.addEventListener('result', e =>{
            elTex.textContent =  e.results[0][0].transcript
            console.log(e.results[0][0].transcript);
            elSound.play()
            elBtn.classList.remove('site-wrraper__img--active')
        })
    recoginition.start()
})

let a = Math.floor(Math.random()*10)
setTimeout(() =>{
    console.log(a);
},1000)
