
const appuis = document.querySelector("#burger");

appuis.addEventListener("click", function ()  {
    const navi = document.querySelector("nav");
    if(navi.classList.contains("activeburger")) {
        navi.classList.remove("activeburger");
    } else {
        navi.classList.add("activeburger");
    }
});


const radio1 = document.querySelector("#slideOne");
const radio2 = document.querySelector("#slideTwo");
const radio3 = document.querySelector("#slideThree");
const radio4 = document.querySelector("#slideFor");
const radio5 = document.querySelector("#slideFive");
const radio6 = document.querySelector("#slideSix");
const radio7 = document.querySelector("#slideSeven");
const radio8 = document.querySelector("#slideEight");
const radio9 = document.querySelector("#slideNine");
const radio10 = document.querySelector("#slideTen");
const radio11 = document.querySelector("#slideEleven");
const radio12 = document.querySelector("#slideTwelve");

radio1.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselUn");
    if( leCaroussel.classList.contains("positionCaroussel2")){
        leCaroussel.classList.remove("positionCaroussel2");
        leCaroussel.classList.add("positionCaroussel1");
    } else if( leCaroussel.classList.contains("positionCaroussel3")){
        leCaroussel.classList.remove("positionCaroussel3");
        leCaroussel.classList.add("positionCaroussel1");
    }
    else if( leCaroussel.classList.contains("positionCaroussel4")){
        leCaroussel.classList.remove("positionCaroussel4");
        leCaroussel.classList.add("positionCaroussel1");
    }
 
    else {
        leCaroussel.classList.add("positionCaroussel1");
    }
});


radio2.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselUn");
    if( leCaroussel.classList.contains("positionCaroussel1")){
        leCaroussel.classList.remove("positionCaroussel1");
        leCaroussel.classList.add("positionCaroussel2");
    } else if( leCaroussel.classList.contains("positionCaroussel3")){
        leCaroussel.classList.remove("positionCaroussel3");
        leCaroussel.classList.add("positionCaroussel2");
    } else if( leCaroussel.classList.contains("positionCaroussel4")){
        leCaroussel.classList.remove("positionCaroussel4");
        leCaroussel.classList.add("positionCaroussel2");
    }
    
    else {
        leCaroussel.classList.add("positionCaroussel2");
    }
});

radio3.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselUn");
    if( leCaroussel.classList.contains("positionCaroussel1")){
        leCaroussel.classList.remove("positionCaroussel1");
        leCaroussel.classList.add("positionCaroussel3");
    } else if( leCaroussel.classList.contains("positionCaroussel2")){
        leCaroussel.classList.remove("positionCaroussel2");
        leCaroussel.classList.add("positionCaroussel3");
    } else if( leCaroussel.classList.contains("positionCaroussel4")){
        leCaroussel.classList.remove("positionCaroussel4");
        leCaroussel.classList.add("positionCaroussel3");
    }
    
    else {
        leCaroussel.classList.add("positionCaroussel3");
    }
});

radio4.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselUn");
    if( leCaroussel.classList.contains("positionCaroussel1")){
        leCaroussel.classList.remove("positionCaroussel1");
        leCaroussel.classList.add("positionCaroussel4");
    } else if( leCaroussel.classList.contains("positionCaroussel2")){
        leCaroussel.classList.remove("positionCaroussel2");
        leCaroussel.classList.add("positionCaroussel4");
    } else if( leCaroussel.classList.contains("positionCaroussel3")){
        leCaroussel.classList.remove("positionCaroussel3");
        leCaroussel.classList.add("positionCaroussel4");
    }
    
    else {
        leCaroussel.classList.add("positionCaroussel4");
    }
})

radio5.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselDeux");
    if( leCaroussel.classList.contains("positionCaroussel2")){
        leCaroussel.classList.remove("positionCaroussel2");
        leCaroussel.classList.add("positionCaroussel1");
    } else if( leCaroussel.classList.contains("positionCaroussel3")){
        leCaroussel.classList.remove("positionCaroussel3");
        leCaroussel.classList.add("positionCaroussel1");
    }
    else if( leCaroussel.classList.contains("positionCaroussel4")){
        leCaroussel.classList.remove("positionCaroussel4");
        leCaroussel.classList.add("positionCaroussel1");
    }
 
    else {
        leCaroussel.classList.add("positionCaroussel1");
    }
});


radio6.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselDeux");
    if( leCaroussel.classList.contains("positionCaroussel1")){
        leCaroussel.classList.remove("positionCaroussel1");
        leCaroussel.classList.add("positionCaroussel2");
    } else if( leCaroussel.classList.contains("positionCaroussel3")){
        leCaroussel.classList.remove("positionCaroussel3");
        leCaroussel.classList.add("positionCaroussel2");
    } else if( leCaroussel.classList.contains("positionCaroussel4")){
        leCaroussel.classList.remove("positionCaroussel4");
        leCaroussel.classList.add("positionCaroussel2");
    }
    
    else {
        leCaroussel.classList.add("positionCaroussel2");
    }
});

radio7.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselDeux");
    if( leCaroussel.classList.contains("positionCaroussel1")){
        leCaroussel.classList.remove("positionCaroussel1");
        leCaroussel.classList.add("positionCaroussel3");
    } else if( leCaroussel.classList.contains("positionCaroussel2")){
        leCaroussel.classList.remove("positionCaroussel2");
        leCaroussel.classList.add("positionCaroussel3");
    } else if( leCaroussel.classList.contains("positionCaroussel4")){
        leCaroussel.classList.remove("positionCaroussel4");
        leCaroussel.classList.add("positionCaroussel3");
    }
    
    else {
        leCaroussel.classList.add("positionCaroussel3");
    }
});

radio8.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselDeux");
    if( leCaroussel.classList.contains("positionCaroussel1")){
        leCaroussel.classList.remove("positionCaroussel1");
        leCaroussel.classList.add("positionCaroussel4");
    } else if( leCaroussel.classList.contains("positionCaroussel2")){
        leCaroussel.classList.remove("positionCaroussel2");
        leCaroussel.classList.add("positionCaroussel4");
    } else if( leCaroussel.classList.contains("positionCaroussel3")){
        leCaroussel.classList.remove("positionCaroussel3");
        leCaroussel.classList.add("positionCaroussel4");
    }
    
    else {
        leCaroussel.classList.add("positionCaroussel4");
    }
})


radio9.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselTrois");
    if( leCaroussel.classList.contains("positionCaroussel2")){
        leCaroussel.classList.remove("positionCaroussel2");
        leCaroussel.classList.add("positionCaroussel1");
    } else if( leCaroussel.classList.contains("positionCaroussel3")){
        leCaroussel.classList.remove("positionCaroussel3");
        leCaroussel.classList.add("positionCaroussel1");
    }
    else if( leCaroussel.classList.contains("positionCaroussel4")){
        leCaroussel.classList.remove("positionCaroussel4");
        leCaroussel.classList.add("positionCaroussel1");
    }
 
    else {
        leCaroussel.classList.add("positionCaroussel1");
    }
});


radio10.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselTrois");
    if( leCaroussel.classList.contains("positionCaroussel1")){
        leCaroussel.classList.remove("positionCaroussel1");
        leCaroussel.classList.add("positionCaroussel2");
    } else if( leCaroussel.classList.contains("positionCaroussel3")){
        leCaroussel.classList.remove("positionCaroussel3");
        leCaroussel.classList.add("positionCaroussel2");
    } else if( leCaroussel.classList.contains("positionCaroussel4")){
        leCaroussel.classList.remove("positionCaroussel4");
        leCaroussel.classList.add("positionCaroussel2");
    }
    
    else {
        leCaroussel.classList.add("positionCaroussel2");
    }
});

radio11.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselTrois");
    if( leCaroussel.classList.contains("positionCaroussel1")){
        leCaroussel.classList.remove("positionCaroussel1");
        leCaroussel.classList.add("positionCaroussel3");
    } else if( leCaroussel.classList.contains("positionCaroussel2")){
        leCaroussel.classList.remove("positionCaroussel2");
        leCaroussel.classList.add("positionCaroussel3");
    } else if( leCaroussel.classList.contains("positionCaroussel4")){
        leCaroussel.classList.remove("positionCaroussel4");
        leCaroussel.classList.add("positionCaroussel3");
    }
    
    else {
        leCaroussel.classList.add("positionCaroussel3");
    }
});

radio12.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselTrois");
    if( leCaroussel.classList.contains("positionCaroussel1")){
        leCaroussel.classList.remove("positionCaroussel1");
        leCaroussel.classList.add("positionCaroussel4");
    } else if( leCaroussel.classList.contains("positionCaroussel2")){
        leCaroussel.classList.remove("positionCaroussel2");
        leCaroussel.classList.add("positionCaroussel4");
    } else if( leCaroussel.classList.contains("positionCaroussel3")){
        leCaroussel.classList.remove("positionCaroussel3");
        leCaroussel.classList.add("positionCaroussel4");
    }
    
    else {
        leCaroussel.classList.add("positionCaroussel4");
    }
})