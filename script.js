/*
Reste à faire
    Animation qd click
*/

// ------ Récupération des éléments -----

// Energie
const ButtonM10E = document.querySelector("#M10E");
const ButtonM5E = document.querySelector("#M5E");
const ButtonM1E = document.querySelector("#M1E");
const ButtonP10E = document.querySelector("#P10E");
const ButtonP1E = document.querySelector("#P1E");
const ButtonP5E = document.querySelector("#P5E");

const CounterPower = document.querySelector("#PowerCounter")

//Metal
const ButtonM10M = document.querySelector("#M10M");
const ButtonM5M = document.querySelector("#M5M");
const ButtonM1M = document.querySelector("#M1M");
const ButtonP10M = document.querySelector("#P10M");
const ButtonP1M = document.querySelector("#P1M");
const ButtonP5M = document.querySelector("#P5M");

const CounterMetal = document.querySelector("#MetalCounter")

//Nourriture
const ButtonM10N = document.querySelector("#M10N");
const ButtonM5N = document.querySelector("#M5N");
const ButtonM1N = document.querySelector("#M1N");
const ButtonP10N = document.querySelector("#P10N");
const ButtonP1N = document.querySelector("#P1N");
const ButtonP5N = document.querySelector("#P5N");

const CounterFood = document.querySelector("#FoodCounter")

//Defense
const ButtonM10D = document.querySelector("#M10D");
const ButtonM5D = document.querySelector("#M5D");
const ButtonM1D = document.querySelector("#M1D");
const ButtonP10D = document.querySelector("#P10D");
const ButtonP1D = document.querySelector("#P1D");
const ButtonP5D = document.querySelector("#P5D");

const CounterDefense = document.querySelector("#DefenseCounter")

//Autres
const ButtonReset = document.querySelector("#Reset");
const ButtonNormalTurn = document.querySelector("#NormalTurn");


// ----- Variables -----
let Energie = 100;
let Metal = 100;
let Nourriture = 100;
let Defense = 100;




// ----- Bouttons -----

function UpdateCounters(){
    CounterPower.innerHTML = Energie;
    CounterFood.innerHTML = Nourriture;
    CounterMetal.innerHTML = Metal;
    CounterDefense.innerHTML = Defense;

    //Check if player lose
    if(Energie <= 0 || Nourriture <= 0 || Defense <=0){
        alert("Vous avez perdu(e) !")
        window.scrollTo(0, document.body.scrollHeight);
    }

}


// --- Energie ---
ButtonM10E.addEventListener("click", function(){
    if(Energie > 0) Energie -= 10;
    UpdateCounters();

    ButtonM10E.classList.add("ButtonAnimation");
})
ButtonM5E.addEventListener("click", function(){
    if(Energie > 0) Energie -= 5;
    UpdateCounters();
})
ButtonM1E.addEventListener("click", function(){
    if(Energie > 0) Energie -= 1;
    UpdateCounters();
})
ButtonP10E.addEventListener("click", function(){
    Energie += 10;
    UpdateCounters();
})
ButtonP5E.addEventListener("click", function(){
    Energie += 5;
    UpdateCounters();
})
ButtonP1E.addEventListener("click", function(){
    Energie += 1;
    UpdateCounters();
})


// --- Metal ---
ButtonM10M.addEventListener("click", function(){
    if(Metal > 0) Metal -= 10;
    UpdateCounters();
})
ButtonM5M.addEventListener("click", function(){
    if(Metal > 0) Metal -= 5;
    UpdateCounters();
})
ButtonM1M.addEventListener("click", function(){
    if(Metal > 0) Metal -= 1;
    UpdateCounters();
})
ButtonP10M.addEventListener("click", function(){
    Metal += 10;
    UpdateCounters();
})
ButtonP5M.addEventListener("click", function(){
    Metal += 5;
    UpdateCounters();
})
ButtonP1M.addEventListener("click", function(){
    Metal += 1;
    UpdateCounters();
})


// --- Nourriture ---
ButtonM10N.addEventListener("click", function(){
    if(Nourriture > 0) Nourriture -= 10;
    UpdateCounters();
})
ButtonM5N.addEventListener("click", function(){
    if(Nourriture > 0) Nourriture -= 5;
    UpdateCounters();
})
ButtonM1N.addEventListener("click", function(){
    if(Nourriture > 0) Nourriture -= 1;
    UpdateCounters();
})
ButtonP10N.addEventListener("click", function(){
    Nourriture += 10;
    UpdateCounters();
})
ButtonP5N.addEventListener("click", function(){
    Nourriture += 5;
    UpdateCounters();
})
ButtonP1N.addEventListener("click", function(){
    Nourriture += 1;
    UpdateCounters();
})


// --- Defense ---
ButtonM10D.addEventListener("click", function(){
    if(Defense > 0) Defense -= 10;
    UpdateCounters();
})
ButtonM5D.addEventListener("click", function(){
    if(Defense > 0) Defense -= 5;
    UpdateCounters();
})
ButtonM1D.addEventListener("click", function(){
    if(Defense > 0) Defense -= 1;
    UpdateCounters();
})
ButtonP10D.addEventListener("click", function(){
    Defense += 10;
    UpdateCounters();
})
ButtonP5D.addEventListener("click", function(){
    Defense += 5;
    UpdateCounters();
})
ButtonP1D.addEventListener("click", function(){
    Defense += 1;
    UpdateCounters();
})


// --- Reset ---
ButtonReset.addEventListener("click",function(){
    Defense = 100;
    Energie = 100;
    Metal = 100;
    Nourriture = 100;
    UpdateCounters();
})

// --- Nouveau Tour ---
ButtonNormalTurn.addEventListener("click", function(){
    Energie -= 10;
    Nourriture -= 10;
    UpdateCounters();
})