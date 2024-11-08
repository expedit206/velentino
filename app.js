const texte = document.querySelector('#text')
let letterIndex = 0
let wordIndex = 0
let verif= true
const metiers = [
    'bonne fete de la saint valentin'
]

const affiche = () => {

    const metiercontent = document.createElement('span')
    // console.log(metiercontent);
    if(verif==true){
    let writting=setTimeout(() => { // console.log('r');
        if (wordIndex < metiers.length) {
            if (letterIndex < metiers[wordIndex].length) {
                // console.log(metiers[wordIndex][letterIndex])
                metiercontent.textContent = metiers[wordIndex][letterIndex]
                texte.appendChild(metiercontent)
                letterIndex++
                affiche()
            } else {
                setTimeout(() => {
                    wordIndex++
                    letterIndex = 0
                    // metiercontent.classList.remove('active')
                    affiche()
                }, 2500);
            }
        }else{
            wordIndex=0
            affiche()
        }
    }, 30);
// console.log(verif);

}

    setTimeout(() => {
      let active=setTimeout(() => {
            
            metiercontent.classList.toggle('active')
        }, 400);
        setTimeout(() => {
            
            // metiercontent.style.visibility='hidden'
            // metiercontent.remove()
        }, 500);
    }, 2500);
}
affiche()
// console.log(metiers);


const changerfond=()=>{
    setInterval(() => {
        // texte.style.background=`black`
        texte.style.background=`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()})`
        setTimeout(() => {
            
        }, 2000);
        
        // texte.style.background=`rgb(255, 255, 255)`
        // texte.style.background=`green`
        
    }, 1500);
}


setTimeout(() => {
    let span=document.querySelectorAll('span')
    
    changerfond()
verif=false
}, 14000);
    

// ###########
// second stept
// ###########

const dear=['t', 'o', ' ','y','o','u',' ', 'm','y',' ','d','e','a','r']
i=0
const divDear=document.querySelector('.dear')
// console.log(divDear);


function functiondear(){
    setTimeout(() => {
    const b=document.createElement('b')
    // for(i=0; i<dear.length;i++){
    if(i==dear.length){ return}
    b.textContent+=dear[i]
    b.classList.toggle('activ')
        setTimeout(() => {
            // b.remove()

        }, 14000);
    b.style.color=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()})`

    divDear.appendChild(b)
    
    i++
    // console.log(i);

    functiondear()
}, 500);
}
setTimeout(() => {
    
    functiondear()
    // retire()
}, 15000);

const dayi=['D', 'A','Y','I','N','A']
const divDayi=document.querySelector('.dayi')

j=0
function functiondayi(){
    setTimeout(() => {
        const d=document.createElement('i')
        if(j==dayi.length){ return}
    // for(i=0; i<dear.length;i++){
        // console.log(i);
    d.textContent+=dayi[j]
    d.classList.toggle('activ')
    d.style.color=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()})`
    divDayi.appendChild(d)
    j++
    // console.log(dayi);
    // console.log(i);
   
    functiondayi()
}, 500);
}
setTimeout(() => {
    
    functiondayi()
}, 25000);

// je suis ici
function retire(){
    b.classList.toggle('retirer')

}



















