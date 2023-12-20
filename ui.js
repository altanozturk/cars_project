const carTable = document.querySelector("#cars");


function UI() {



};


UI.prototype.addCarToUI = function (newCar) {

    carTable.innerHTML += `<tr>
        <td><img src="${newCar.img}" class="img-fluid img-thumbnail"></td>
        <td>${newCar.name}</td>
        <td>${newCar.price}</td>
        <td><a href="#" id="delete-car" class="btn btn-danger">Aracı Sil</a></td>
    </tr>`

};
