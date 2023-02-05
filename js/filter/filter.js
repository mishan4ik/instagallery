let maclaren = document.getElementById("maclaren");
let forest = document.getElementById("forest");
let mercedes = document.getElementById("mercedes");
let flower = document.getElementById("flower");
let zoo = document.getElementById("zoo");
let wolf = document.getElementById("wolf");
let p = document.getElementById("not_request")
let inp = document.getElementById("inp_filter")

oninput = function(){

    if(inp.value == "maclaren" || inp.value == "макларен" || inp.value == "macl" || inp.value == "макл"
    || inp.value == "MACL" || inp.value == "Macl" || inp.value == "МАКЛ" || inp.value == "Макл"){

        maclaren.style.display = "block"
        forest.style.display = "none"
        mercedes.style.display = "none"
        flower.style.display = "none"
        zoo.style.display = "none"
        wolf.style.display = "none"


    }
    else if(inp.value == "forest" || inp.value == "FOREST" || inp.value == "for" || inp.value == "FOR" || inp.value == "лес" 
    || inp.value == "ЛЕС" || inp.value == "Лес" || inp.value == "ліс" || inp.value == "ЛІС"){

        maclaren.style.display = "none"
        forest.style.display = "block"
        mercedes.style.display = "none"
        flower.style.display = "none"
        zoo.style.display = "none"
        wolf.style.display = "none"


    }
    else if(inp.value == "mercedes" || inp.value == "MERCEDES" || inp.value == "Mercedes" || inp.value == "мерседес" || inp.value == "МЕРСЕДЕС"
    || inp.value == "merc" || inp.value == "Merc" || inp.value == "Мерс" || inp.value == "мерс" || inp.value == "МЕРС"){

        maclaren.style.display = "none"
        forest.style.display = "none"
        mercedes.style.display = "block"
        flower.style.display = "none"
        zoo.style.display = "none"
        wolf.style.display = "none"
    }
    else if(inp.value == "flower" || inp.value == "flow" || inp.value == "Flow" || inp.value == "FLOW" || inp.value == "FLOWER"
    || inp.value == "цветок" || inp.value == "цветы" || inp.value == "Цветок" || inp.value == "ромашка" || inp.value == "ЦВЕТОК"
    || inp.value == "РОМАШКА" || inp.value == "цвет" || inp.value == "Цвет" || inp.value == "ЦВЕТ"){

        maclaren.style.display = "none"
        forest.style.display = "none"
        mercedes.style.display ="none"
        flower.style.display = "block"
        zoo.style.display = "none"
        wolf.style.display = "none"


    }
    else if(inp.value == "zoo" || inp.value == "зоопарк" || inp.value == "зоо" || inp.value == "ЗОО" || inp.value == "Зоо" 
    || inp.value == "ZOO" || inp.value == "tiger" || inp.value == "tig" || inp.value == "Tig" || inp.value == "TIG"){

        maclaren.style.display = "none"
        forest.style.display = "none"
        mercedes.style.display ="none"
        flower.style.display = "none"
        zoo.style.display = "block"
        wolf.style.display = "none"
    }
    else if(inp.value == "wolf" || inp.value == "WOLF" || inp.value == "Wolf" || inp.value == "wolfs" || inp.value == "WOLFS"
    || inp.value == "волк" || inp.value == "Волк" || inp.value == "Вол" || inp.value == "вол" || inp.value == "wol" || inp.value == "WOL"){

        maclaren.style.display = "none"
        forest.style.display = "none"
        mercedes.style.display ="none"
        flower.style.display = "none"
        zoo.style.display = "none"
        wolf.style.display = "block"


    }
   else if(inp.value == "авто" || inp.value == "автомобили" || inp.value == "auto" || inp.value == "техника" || inp.value == "машина"
   || inp.value == "машины" || inp.value == "Машины"){

        maclaren.style.display = "block"
        forest.style.display = "none"
        mercedes.style.display ="block"
        flower.style.display = "none"
        zoo.style.display = "none"
        wolf.style.display = "none"

   }
   else if(inp.value == "animal" || inp.value == "animals" || inp.value == "животные" ){

        maclaren.style.display = "none"
        forest.style.display = "none"
        mercedes.style.display ="none"
        flower.style.display = "none"
        zoo.style.display = "block"
        wolf.style.display = "block"

   }
   else if(inp.value == "" ){

    maclaren.style.display = "block"
    forest.style.display = "block"
    mercedes.style.display ="block"
    flower.style.display = "block"
    zoo.style.display = "block"
    wolf.style.display = "block"

}
}



