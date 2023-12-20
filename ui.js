const carTable = document.querySelector("#cars");


function UI() {



};


UI.prototype.addCarToUI = function (newCar) {

    carTable.innerHTML += 
    `<tr>
        <td><img src="${newCar.img}" class="img-fluid img-thumbnail"></td>
        <td>${newCar.name}</td>
        <td>${newCar.price}</td>
        <td><a href="#" id="delete-car" class="btn btn-danger">Aracı Sil</a></td>
    </tr>`

};

UI.prototype.deleteAllCars = function(){
    carTable.innerHTML = "";
};



// UI.prototype.loadAllCars = function(cars){

//     cars.forEach(function(item){
//         carTable.innerHTML += 
//         `<tr>
//             <td><img src="${item.img}" class="img-fluid img-thumbnail"></td>
//             <td>${item.name}</td>
//             <td>${item.price}</td>
//             <td><a href="#" id="delete-car" class="btn btn-danger">Aracı Sil</a></td>
//         </tr>`

//     });
 

//};