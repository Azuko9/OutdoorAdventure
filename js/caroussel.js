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
        leCaroussel.classList.remove("positionCaroussel1", "positionCaroussel3", "positionCaroussel4");
        leCaroussel.classList.add("positionCaroussel1");
});


radio2.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselUn");
        leCaroussel.classList.remove("positionCaroussel2", "positionCaroussel3", "positionCaroussel4");
        leCaroussel.classList.add("positionCaroussel2");


});

radio3.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselUn");
        leCaroussel.classList.remove("positionCaroussel1", "positionCaroussel2", "positionCaroussel4");
        leCaroussel.classList.add("positionCaroussel3");

});

radio4.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselUn");
        leCaroussel.classList.remove("positionCaroussel1", "positionCaroussel2", "positionCaroussel3");
        leCaroussel.classList.add("positionCaroussel4");
})

radio5.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselDeux");
        leCaroussel.classList.remove("positionCaroussel2", "positionCaroussel3", "positionCaroussel4");
        leCaroussel.classList.add("positionCaroussel1");
    
});


radio6.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselDeux");
        leCaroussel.classList.remove("positionCaroussel1", "positionCaroussel3", "positionCaroussel4");
        leCaroussel.classList.add("positionCaroussel2");
});

radio7.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselDeux");
        leCaroussel.classList.remove("positionCaroussel1", "positionCaroussel2", "positionCaroussel4");
        leCaroussel.classList.add("positionCaroussel3");
});

radio8.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselDeux");
        leCaroussel.classList.remove("positionCaroussel1", "positionCaroussel2", "positionCaroussel3");
        leCaroussel.classList.add("positionCaroussel4");
})


radio9.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselTrois");
    leCaroussel.classList.remove("positionCaroussel2", "positionCaroussel3", "positionCaroussel4"); 
    leCaroussel.classList.add("positionCaroussel1");
});


radio10.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselTrois");
    leCaroussel.classList.remove("positionCaroussel1", "positionCaroussel3", "positionCaroussel4");
    leCaroussel.classList.add("positionCaroussel2");
});

radio11.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselTrois");
    leCaroussel.classList.remove("positionCaroussel1", "positionCaroussel2", "positionCaroussel4");
    leCaroussel.classList.add("positionCaroussel3");
});

radio12.addEventListener("click", function () {
    const leCaroussel = document.querySelector("#carousselTrois");
    leCaroussel.classList.remove("positionCaroussel1", "positionCaroussel2", "positionCaroussel3");
    leCaroussel.classList.add("positionCaroussel4");
})