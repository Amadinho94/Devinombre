// -----------------------------------------------------------------------------------
//                  JEU DEVINER LE NOMBRE/CHIFFRE MYSTERE
// ----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
//                           DONNEES
// ----------------------------------------------------------------------------------
// RECUPERER ELEMENT HTML
const buttonDOM = document.querySelector(".jolie-button")
const bodyDOM = document.querySelector("body")
const sectionDOM = document.querySelector(".carre-blanc")
const bigTitleDOM = document.querySelector(".big-title")
const smallTitleDOM = document.querySelector(".small-title")
// INPUT
const userNumberInputDOM = document.querySelector(".user-number")
const userDifficultyInputDOM = document.querySelector(".user-difficulty")
// LABEL
const labelDifficultyDOM = document.querySelector(".label-difficulty")
const labelNumberDOM = document.querySelector(".label-chose-number")


// VARIABLES
// NOMBRE A DEVINER 
let aDeviner = Math.floor(Math.random() * 100)
// COUNTER
let Facilecounter = 15;
let Moyencounter = 10;
let Impossiblecounter = 10;

// TOGGLE POUR RESET/RECOMMENCER UNE PARTIE (REMETTRE LES COMPTEURS AUX VALEURS INITIALES)
let toggle = false

// -----------------------------------------------------------------------------------
//                           FONCTIONS
// ----------------------------------------------------------------------------------
// FONCTION CALL DE CHICKENS ON THE TRICHEUR
const police = () => {
    window.alert("POLICE NATIONALE souhaite connaitre votre position")
}

// FONCTION QUI STOCKE LE DEMARRAGE DU JEU
const gameStart = () => {
//  MESSAGE DE BIENVENUE AU CHARGEMENT DE LA PAGE
buttonDOM.innerText = "VALIDER"

buttonDOM.removeEventListener("click", gameStart)
buttonDOM.addEventListener("click", difficultyValidator)


// PROMPT DIFFICULTE DE JEU
labelDifficultyDOM.classList.remove("display-none")
userDifficultyInputDOM.classList.remove("display-none")


smallTitleDOM.innerText = ""
smallTitleDOM.style.color = "black"
bigTitleDOM.innerText = "DEVINE LE NOMBRE MYSTERE"
bodyDOM.style.background = "linear-gradient(to right, #1DB1DD, #23D0D2)"

labelNumberDOM.style.color = "black"
labelNumberDOM.innerText = "Veuillez choisir un nombre ?"
userNumberInputDOM.value = ""

labelDifficultyDOM.style.color = "black"
labelDifficultyDOM.innerText = "Veuillez choisir votre niveau de difficulté (facile - moyen - impossible)"


toggle = true

}

// DIFFICULTE EST-ELLE VALIDE SI OUI EVENT LISTENER DU CHOIX DE DIFFICULTE
const difficultyValidator = () => {
   
   
   if (userDifficultyInputDOM.value.toLowerCase() != "facile" && userDifficultyInputDOM.value.toLowerCase() != "moyen" && userDifficultyInputDOM.value.toLowerCase() != "impossible") {
        labelDifficultyDOM.style.color = "red"
        labelDifficultyDOM.innerText = "Niveau de difficulté invalide - Veuillez choisir entre (facile - moyen - impossible)"
        userDifficultyInputDOM.value = ""
        
        
   } else if (userDifficultyInputDOM.value.toLowerCase() === "facile") {
       buttonDOM.removeEventListener("click", difficultyValidator)
       userDifficultyInputDOM.classList.add("display-none")
       labelDifficultyDOM.classList.add("display-none")
       labelNumberDOM.classList.remove("display-none")
       userNumberInputDOM.classList.remove("display-none")
       buttonDOM.addEventListener("click", facileNumberValidator)
        
       
   } else if (userDifficultyInputDOM.value.toLowerCase() === "moyen") {
       buttonDOM.removeEventListener("click", difficultyValidator)
       userDifficultyInputDOM.classList.add("display-none")
       labelDifficultyDOM.classList.add("display-none")
        labelNumberDOM.classList.remove("display-none")
        userNumberInputDOM.classList.remove("display-none")
        
        buttonDOM.addEventListener("click", moyenNumberValidator)
        
   } else if (userDifficultyInputDOM.value.toLowerCase() === "impossible") {
        buttonDOM.removeEventListener("click", difficultyValidator)
       userDifficultyInputDOM.classList.add("display-none")
       labelDifficultyDOM.classList.add("display-none")
        labelNumberDOM.classList.remove("display-none")
        userNumberInputDOM.classList.remove("display-none")
        
        buttonDOM.addEventListener("click", impossibleNumberValidator)
   }   
}

// DIFFICULTE FACILE
const facileNumberValidator = () => {
        
        userDifficultyInputDOM.value = ""
        
        if (toggle === true) {
            Facilecounter = 15
            toggle = false
        }
        
        // EST CE QUE LE NOMBRE OU CHIFFRE DE L'UTILISATEUR EST UN NOMBRE ?
        if (isNaN(userNumberInputDOM.value)|| userNumberInputDOM.value === "") {
        labelNumberDOM.style.color = "red"
        labelNumberDOM.innerText = "Réponse invalide - Veuillez choisir un nombre ou un chiffre valide"
        userNumberInputDOM.value = ""
        
        } else {
         parseInt(userNumberInputDOM.value)
         
         if (userNumberInputDOM.value  !== aDeviner && Facilecounter !== 0) {
              
              if (Facilecounter === 0) {
                userNumberInputDOM.value = aDeviner
              } else { 
                 
                 Facilecounter--    
                
                
                if (userNumberInputDOM.value >= aDeviner+30) {
                    
                    userNumberInputDOM.value = ""
                    labelNumberDOM.style.color = "red"
                    labelNumberDOM.innerText = "Ton nombre est beaucoup trop grand - Tentative(s) restante(s) " + Facilecounter
                } else if (userNumberInputDOM.value <= aDeviner-30) {
                    
                    userNumberInputDOM.value = ""
                    labelNumberDOM.style.color = "red"
                    labelNumberDOM.innerText = "Ton nombre est beaucoup trop petit - Tentative(s) restante(s) " + Facilecounter
                } else if (userNumberInputDOM.value >= aDeviner+15 && userNumberInputDOM.value < aDeviner+30) {
                    
                    userNumberInputDOM.value = ""
                    labelNumberDOM.style.color = "red"
                    labelNumberDOM.innerText = "Ton nombre est un peu trop grand - Tentative(s) restante(s) " + Facilecounter
                    
                } else if (userNumberInputDOM.value <= aDeviner-15 && userNumberInputDOM.value > aDeviner-30) {
                    labelNumberDOM.style.color = "red"
                    labelNumberDOM.innerText = "Ton nombre est un peu trop petit - Tentative(s) restante(s) " + Facilecounter
                    userNumberInputDOM.value = ""
                    
                } else if (userNumberInputDOM.value >= aDeviner+5 && userNumberInputDOM.value < aDeviner+15) {
                    userNumberInputDOM.value = ""
                    labelNumberDOM.sstyle.color = "red"
                    labelNumberDOM.innerText = "Tu y es presque, ton nombre est un peu trop grand - Tentative(s) restante(s) " + Facilecounter
                    
                } else if (userNumberInputDOM.value <= aDeviner-5 && userNumberInputDOM.value > aDeviner-15) {
                    
                    userNumberInputDOM.value = ""
                    labelNumberDOM.style.color = "red"
                    labelDifficultyDOM.innerText = "Tu y es presque, ton nombre est un peu trop petit - Tentative(s) restante(s) " + Facilecounter
                    
                } else if (userNumberInputDOM.value > aDeviner && userNumberInputDOM.value < aDeviner+5) {
                    
                    userNumberInputDOM.value = ""
                    labelNumberDOM.style.color = "red"
                    labelNumberDOM.innerText = "Tu brûles, ton nombre est légèrement plus grand - Tentative(s) restante(s) " + Facilecounter
                    
                } else if (userNumberInputDOM.value < aDeviner && userNumberInputDOM.value > aDeviner-5) {
                    
                    userNumberInputDOM.value = ""
                    labelNumberDOM.style.color = "red"
                    labelNumberDOM.innerText = "Tu brûles, ton nombre est légèrement plus petit - Tentative(s) restante(s) " + Facilecounter
                    
                }
            }

        }
        if (userNumberInputDOM.value == aDeviner && Facilecounter >= 0) { // SI l'utilisateur à trouver le bon nombre il sort de la boucle et...
                        buttonDOM.innerText = "RECOMMENCER"
                        smallTitleDOM.innerText = "BIEN JOUE"
                        smallTitleDOM.style.color = "#00ff00"
                        bigTitleDOM.innerText = "Tu as trouvé le nombre mystère en mode facile"
                        bodyDOM.style.background = "#00ff00"
                        buttonDOM.removeEventListener("click", facileNumberValidator)
                        labelNumberDOM.classList.add("display-none")
                        userNumberInputDOM.classList.add("display-none")
                        buttonDOM.addEventListener("click", gameStart)
                        let Facilecounter = 10;
                        
    
        } else if (Facilecounter === 0) {
                        buttonDOM.innerText = "REESAYER"
                        smallTitleDOM.style.color = "red"
                        smallTitleDOM.innerText = "GAME OVER"
                        bigTitleDOM.innerText = "La honte, tu as perdu en mode facile"
                        bodyDOM.style.background = "red"
                        buttonDOM.removeEventListener("click", facileNumberValidator)
                        labelNumberDOM.classList.add("display-none")
                        userNumberInputDOM.classList.add("display-none")
                        buttonDOM.addEventListener("click", gameStart)
                        let Facilecounter = 10;
                        
                        
        }
    }
            
}

// DIFFICULTE MOYEN
const moyenNumberValidator = () => {
        
        userDifficultyInputDOM.value = ""
        
        if (toggle === true) {
            let Moyencounter = 10
            toggle = false
        }
        
        if (isNaN(userNumberInputDOM.value)|| userNumberInputDOM.value === "") {
        labelNumberDOM.style.color = "red"
        labelNumberDOM.innerText = "Réponse invalide - Veuillez choisir un nombre ou un chiffre valide"
        userNumberInputDOM.value = ""
        
        } else {
            parseInt(userNumberInputDOM.value)
            if (userNumberInputDOM.value !== aDeviner && Moyencounter !== 0) { // TANT QUE - le nombre saisit par l'utilisateur n'est pas égal au nombre à deviner
                
                if (Moyencounter === 0) { // SI - la valeur de la variable qui sert de compteur arrive à 0
                     userNumberInputDOM.value = aDeviner
                 } else { 
                     Moyencounter--
        
                    if (userNumberInputDOM.value > aDeviner+30) {
                        userNumberInputDOM.value = ""
                        labelNumberDOM.style.color = "red"
                        labelNumberDOM.innerText = "Ton nombre est beaucoup trop grand - Tentative(s) restante(s) " + Moyencounter
                        
                    } else if (userNumberInputDOM.value < aDeviner-30) {
                        userNumberInputDOM.value = ""
                        labelNumberDOM.style.color = "red"
                        labelNumberDOM.innerText = "Ton nombre est beaucoup trop petit - Tentative(s) restante(s) " + Moyencounter
                        
                    } else if (userNumberInputDOM.value > aDeviner && userNumberInputDOM.value < aDeviner+30) {
                        userNumberInputDOM.value = ""
                        labelNumberDOM.style.color = "red"
                        labelNumberDOM.innerText = "Ton nombre est un peu trop grand - Tentative(s) restante(s) " + Moyencounter
                        
                    } else if (userNumberInputDOM.value < aDeviner && userNumberInputDOM.value > aDeviner-30) {
                        userNumberInputDOM.value = ""
                        labelNumberDOM.style.color = "red"
                        labelNumberDOM.innerText = "Ton nombre est un peu trop petit - Tentative(s) restante(s) " + Moyencounter
                        
                    }
                }
    
            }
            if (userNumberInputDOM.value == aDeviner && Moyencounter >= 0) { // SI l'utilisateur à trouver le bon nombre il sort de la boucle et...
                        buttonDOM.innerText = "RECOMMENCER"
                        smallTitleDOM.innerText = "BIEN JOUE"
                        smallTitleDOM.style.color = "#00ff00"
                        bigTitleDOM.innerText = "Tu as trouvé le nombre mystère"
                        bodyDOM.style.background = "#00ff00"
                        buttonDOM.removeEventListener("click", moyenNumberValidator)
                        labelNumberDOM.classList.add("display-none")
                        userNumberInputDOM.classList.add("display-none")
                        buttonDOM.addEventListener("click", gameStart)
                        let Moyencounter = 10;
                        
    
            } else if (Moyencounter === 0) {
                        buttonDOM.innerText = "REESAYER"
                        smallTitleDOM.style.color = "red"
                        smallTitleDOM.innerText = "GAME OVER"
                        bigTitleDOM.innerText = "Tu as perdu, dommage"
                        bodyDOM.style.background = "red"
                        buttonDOM.removeEventListener("click", moyenNumberValidator)
                        labelNumberDOM.classList.add("display-none")
                        userNumberInputDOM.classList.add("display-none")
                        buttonDOM.addEventListener("click", gameStart)
                        let Moyencounter = 10;
                        
                            
            } 
    }

         
} 

// DIFFICULTE IMPOSSIBLE
const impossibleNumberValidator = () => {
        
        userDifficultyInputDOM.value = ""
        
        if (toggle === true) {
            let Impossiblecounter = 10
            toggle = false
        }
        // EST CE QUE LE NOMBRE OU CHIFFRE DE L'UTILISATEUR EST UN NOMBRE ?
        if (isNaN(userNumberInputDOM.value)|| userNumberInputDOM.value === "") {
        labelNumberDOM.style.color = "red"
        labelNumberDOM.innerText = "Réponse invalide - Veuillez choisir un nombre ou un chiffre valide"
        userNumberInputDOM.value = ""
        } else {
            parseInt(userNumberInputDOM.value)
            if (userNumberInputDOM.value !== aDeviner && Impossiblecounter !== 0) { // TANT QUE - le nombre saisit par l'utilisateur n'est pas égal au nombre à deviner
                
                if (Impossiblecounter === 0) { // SI - la valeur de la variable qui sert de compteur arrive à 0
                     userNumberInputDOM.value = aDeviner
                 } else { 
                     Impossiblecounter--
        
                     if (userNumberInputDOM.value < aDeviner || userNumberInputDOM.value > aDeviner) {
                         
                         userNumberInputDOM.value = ""
                        labelNumberDOM.style.color = "red"
                        labelNumberDOM.innerText = "Raté - Essaye encore - Tentative(s) restante(s) " + Impossiblecounter
                     }
                    // if (userNumberInputDOM.value < aDeviner && userNumberInputDOM.value > aDeviner-40 || userNumberInputDOM.value > aDeviner && userNumberInputDOM.value < aDeviner+40) {
                    //     userNumberInputDOM.value = parseInt(window.prompt("Dommage - Essaye encore " + aDeviner + " - Tentative(s) restante(s) " + counter))
                    // }else if (userNumberInputDOM.value < aDeviner-40 && userNumberInputDOM.value > aDeviner-70 || userNumberInputDOM.value > aDeviner+40 && userNumberInputDOM.value < aDeviner+70) {
                    //     userNumberInputDOM.value = parseInt(window.prompt("Raté - Tu ferais mieux de laisser tomber " + aDeviner + " - Tentative(s) restante(s) " + counter))
                    // } else if (userNumberInputDOM.value > aDeviner+70 || userNumberInputDOM.value < aDeviner-70) {
                    //     userNumberInputDOM.value = parseInt(window.prompt("Houlà - Essaye le mode facile, il me semble être plus adapté pour quelqu'un comme toi " + aDeviner + " - Tentative(s) restante(s) " + counter))
                    // }       
    
       
                    
                }

            }
        }
        
            if (userNumberInputDOM.value == aDeviner && Impossiblecounter >= 0) { // SI l'utilisateur à trouver le bon nombre il sort de la boucle et...
                        buttonDOM.innerText = "RECOMMENCER"
                        smallTitleDOM.innerText = "T'ES UN TRICHEUR"
                        smallTitleDOM.style.color = "red"
                        bigTitleDOM.innerText = "T'as surement dû tricher pour trouver la bonne réponse"
                        bodyDOM.style.background = "black"
                        buttonDOM.removeEventListener("click", impossibleNumberValidator)
                        labelNumberDOM.classList.add("display-none")
                        userNumberInputDOM.classList.add("display-none")
                        buttonDOM.addEventListener("click", gameStart)
                        
                        setTimeout(police, 1500)
                        
                        
            } else if (Impossiblecounter === 0) {
                        buttonDOM.innerText = "REESAYER"
                        smallTitleDOM.style.color = "red"
                        smallTitleDOM.innerText = "GAME OVER"
                        bigTitleDOM.innerText = "Essaye le mode facile, il me semble être plus adapté pour quelqu'un comme toi"
                        bodyDOM.style.background = "red"
                        buttonDOM.removeEventListener("click", impossibleNumberValidator)
                        labelNumberDOM.classList.add("display-none")
                        userNumberInputDOM.classList.add("display-none")
                        
                        buttonDOM.addEventListener("click", gameStart)
            }
}


// -----------------------------------------------------------------------------------
//                           CODE PRINCIPAL
// ----------------------------------------------------------------------------------
// EVENEMENT AU CLICK DU BOUTON COMMENCER/RECOMMENCER/REESAYER - AU CLICK DEBUT DU JEU
buttonDOM.addEventListener("click", gameStart)

