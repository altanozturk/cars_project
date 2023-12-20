function Storage() {


};

Storage.prototype.addCarToLS = function (newCar) {

    
    const carsFromLS = this.getCarsFromLS();
    carsFromLS.push(newCar);
    localStorage.setItem("cars",JSON.stringify(carsFromLS));

};


Storage.prototype.getCarsFromLS = function () {

    let cars;

    if (JSON.parse(localStorage.getItem("cars")) === null) {

        cars = [];


    }
    else {

        cars = JSON.parse(localStorage.getItem("cars"));



    }

    return cars;
};

