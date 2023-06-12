const imagen = document.querySelector(".item");
const radio = document.querySelectorAll(".carousel__radio");
let counter = 2;
let link;
imagen.classList.add("promo1");

radio.forEach((item) => {
    item.addEventListener("click", (event) => {
        console.log(event.currentTarget.id);
        if(event.currentTarget.id == "radio1"){
            imagen.classList.add("promo1");
            imagen.classList.remove("promo2");
            imagen.classList.remove("promo3");
            counter = 2;
        }else if(event.currentTarget.id == "radio2"){
            imagen.classList.add("promo2");
            imagen.classList.remove("promo1");
            imagen.classList.remove("promo3");
            counter = 3;
        }else if(event.currentTarget.id == "radio3"){
            imagen.classList.add("promo3");
            imagen.classList.remove("promo1");
            imagen.classList.remove("promo2");
            counter = 1;
        }
    })
})

setInterval(() => {
    document.getElementById(`radio` + counter).checked = true;
    // imagen.classList.toggle(`card` + counter);

    if(counter == 1){
        imagen.classList.add("promo1");
        imagen.classList.remove("promo2");
        imagen.classList.remove("promo3");
    }else if(counter == 2){
        imagen.classList.add("promo2");
        imagen.classList.remove("promo1");
        imagen.classList.remove("promo3");
    }else if(counter == 3){
        imagen.classList.add("promo3");
        imagen.classList.remove("promo1");
        imagen.classList.remove("promo2");
    }
    
    counter++;
    if(counter > 3){
        counter = 1;
    }

}, 4000);