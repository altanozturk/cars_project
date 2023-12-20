const carName = document.querySelector("#title");
const carImage = document.querySelector("#url");
const carPrice = document.querySelector("#price");

const submitButton = document.querySelector(".btn.btn-danger");
const deleteAll = document.querySelector("#clear-cars");

const carBody = document.querySelectorAll(".card-body")[1];



// UI Objesini Başlatma

const ui = new UI();
const str = new Storage();


// Tüm Eventleri Yükleme
// Load all cars ile başlatma


loadAllCars();
eventListeners();



function eventListeners() {


    submitButton.addEventListener("click", addCar);

    // document.addEventListener("DOMContentLoaded",function(){
    //     let cars = str.getCarsFromLS();
    //     ui.loadAllCars(cars);

    // });

    deleteAll.addEventListener("click", deleteAllCars);
    carBody.addEventListener("click", deleteCar);

};



function loadAllCars() {

    const carsFromLS = str.getCarsFromLS();

    carsFromLS.forEach(function (item) {
        ui.addCarToUI(item);

    });

};





function addCar(e) {


    const name = carName.value;
    const price = carPrice.value;
    const url = carImage.value;

    const newCar = new Car(name, price, url);

    carName.value = "";
    carPrice.value = "";
    carImage.value = "";

    e.preventDefault();
    // Arayüze araç ekleme
    ui.addCarToUI(newCar);
    str.addCarToLS(newCar);



};

function deleteAllCars() {
    ui.deleteAllCars();
    str.deleteAllCarsFromLS();
};


function deleteCar(e) {


    if (e.target.id === "delete-car") {
        if (confirm("Silmek istediğinizden emin misiniz?")) {


            e.target.parentElement.parentElement.remove();

            const carsFromLS = str.getCarsFromLS();
            carsFromLS.forEach(function (item, index) {
                if (item.name === e.target.parentElement.parentElement.children[1].textContent) {
                    console.log(item.name === e.target.parentElement.parentElement.children[1].textContent);
                    carsFromLS.splice(index, 1);
                    console.log(carsFromLS);

                };



            });
            localStorage.setItem("cars",JSON.stringify(carsFromLS));


        }

    }
    else {

    };



    e.preventDefault();


};

