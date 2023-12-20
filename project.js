const carName = document.querySelector("#title");
const carImage = document.querySelector("#url");
const carPrice = document.querySelector("#price");

const submitButton = document.querySelector(".btn.btn-danger");


// UI Objesini Başlatma

const ui = new UI();
const str = new Storage();


// Tüm Eventleri Yükleme

eventListeners();
loadAllCars();

function eventListeners(){

    
    submitButton.addEventListener("click", addCar);

};


function loadAllCars(){

    const carsFromLS = str.getCarsFromLS();

    carsFromLS.forEach(function(item){
        ui.addCarToUI(item);

    });
};





function addCar(e){
    

    const name = carName.value;
    const price = carPrice.value;
    const url = carImage.value;

    const newCar = new Car(name, price, url);

    carName.value = "";
    carPrice.value = "",
    carImage.value = "";

    e.preventDefault();
    // Arayüze araç ekleme
    ui.addCarToUI(newCar);
    str.addCarToLS(newCar);

 
    
};


