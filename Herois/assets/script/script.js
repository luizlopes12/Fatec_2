const repeatHero = () =>{
    
    let heroName = document.getElementById('hero-name').value.toLowerCase()
    let heroUniverse = document.getElementById('hero-universe').value
    let heroReps = document.getElementById('hero-reps').value
    let cardItem = document.getElementById('card-item')
    let cardText = document.getElementById('card-text')
    let cardImg = document.getElementById('card-img')
    let image = document.createElement('img')
    let repsContainer = document.getElementById('cards-grid')
    let form = document.querySelector('.form__section')
    if(heroUniverse === '' || heroName == '' || heroReps < 1){
            cardItem.classList.remove('hide')
            cardText.innerHTML = `utilize dados válidos`
    }else{
        if(heroName == 'batman' && heroUniverse == 'DC'){
            image.src = `assets/img/${heroName}.png`
            cardImg.append(image)
            cardText.innerHTML = `
            <p>O nome do herói é <b>${heroName}</b>, <br/> O universo é <b>${heroUniverse}</b></p>
            `
            form.style.paddingTop = '100px';
            cardItem.classList.remove('hide')
            for(let i = 0; i < heroReps-1; i++){
                repsContainer.appendChild(cardItem.cloneNode(true))
            }
        }
        if(heroName == 'flash' && heroUniverse == 'DC'){
            image.src = `assets/img/${heroName}.png`
            cardImg.append(image)
            cardText.innerHTML = `
            <p>O nome do herói é <b>${heroName}</b>, <br/> O universo é <b>${heroUniverse}</b></p>
            `
            form.style.paddingTop = '100px';
            cardItem.classList.remove('hide')
            for(let i = 0; i < heroReps-1; i++){
                repsContainer.appendChild(cardItem.cloneNode(true))
            }
        }
        if(heroName == 'superman' && heroUniverse == 'DC'){
            image.src = `assets/img/${heroName}.png`
            cardImg.append(image)
            cardText.innerHTML = `
            <p>O nome do herói é <b>${heroName}</b>, <br/> O universo é <b>${heroUniverse}</b></p>
            `
            form.style.paddingTop = '100px';
            cardItem.classList.remove('hide')
            for(let i = 0; i < heroReps-1; i++){
                repsContainer.appendChild(cardItem.cloneNode(true))
            }
        }
        if(heroName == 'aquaman' && heroUniverse == 'DC'){
            image.src = `assets/img/${heroName}.png`
            cardImg.append(image)
            cardText.innerHTML = `
            <p>O nome do herói é <b>${heroName}</b>, <br/> O universo é <b>${heroUniverse}</b></p>
            `
            form.style.paddingTop = '100px';
            cardItem.classList.remove('hide')
            for(let i = 0; i < heroReps-1; i++){
                repsContainer.appendChild(cardItem.cloneNode(true))
            }
        }
        if(heroName == 'robin' && heroUniverse == 'DC'){
            image.src = `assets/img/${heroName}.png`
            cardImg.append(image)
            cardText.innerHTML = `
            <p>O nome do herói é <b>${heroName}</b>, <br/> O universo é <b>${heroUniverse}</b></p>
            `
            form.style.paddingTop = '100px';
            cardItem.classList.remove('hide')
            for(let i = 0; i < heroReps-1; i++){
                repsContainer.appendChild(cardItem.cloneNode(true))
            }
        }
        if(heroName == 'mercurio' && heroUniverse == 'Marvel'){
            image.src = `assets/img/${heroName}.png`
            cardImg.append(image)
            cardText.innerHTML = `
            <p>O nome do herói é <b>${heroName}</b>, <br/> O universo é <b>${heroUniverse}</b></p>
            `
            form.style.paddingTop = '100px';
            cardItem.classList.remove('hide')
            for(let i = 0; i < heroReps-1; i++){
                repsContainer.appendChild(cardItem.cloneNode(true))
            }
        }
        if(heroName == 'hulk' && heroUniverse == 'Marvel'){
            image.src = `assets/img/${heroName}.png`
            cardImg.append(image)
            cardText.innerHTML = `
            <p>O nome do herói é <b>${heroName}</b>, <br/> O universo é <b>${heroUniverse}</b></p>
            `
            form.style.paddingTop = '100px';
            cardItem.classList.remove('hide')
            for(let i = 0; i < heroReps-1; i++){
                repsContainer.appendChild(cardItem.cloneNode(true))
            }
        }
        if(heroName == 'thor' && heroUniverse == 'Marvel'){
            image.src = `assets/img/${heroName}.png`
            cardImg.append(image)
            cardText.innerHTML = `
            <p>O nome do herói é <b>${heroName}</b>, <br/> O universo é <b>${heroUniverse}</b></p>
            `
            form.style.paddingTop = '100px';
            cardItem.classList.remove('hide')
            for(let i = 0; i < heroReps-1; i++){
                repsContainer.appendChild(cardItem.cloneNode(true))
            }
        }
        if(heroName == 'deadpool' && heroUniverse == 'Marvel'){
            image.src = `assets/img/${heroName}.png`
            cardImg.append(image)
            cardText.innerHTML = `
            <p>O nome do herói é <b>${heroName}</b>, <br/> O universo é <b>${heroUniverse}</b></p>
            `
            form.style.paddingTop = '100px';
            cardItem.classList.remove('hide')
            for(let i = 0; i < heroReps-1; i++){
                repsContainer.appendChild(cardItem.cloneNode(true))
            }
        }
        if(heroName == 'jubileu' && heroUniverse == 'marvel'){
            image.src = `assets/img/${heroName}.png`
            cardImg.append(image)
            cardText.innerHTML = `
            <p>O nome do herói é <b>${heroName}</b>, <br/> O universo é <b>${heroUniverse}</b></p>
            `
            form.style.paddingTop = '100px';
            cardItem.classList.remove('hide')
            for(let i = 0; i < heroReps-1; i++){
                repsContainer.appendChild(cardItem.cloneNode(true))
            }
        }else{
            cardItem.classList.remove('hide')
            cardText.innerHTML = `Herói ou universo inválido`
        }

    }

}


