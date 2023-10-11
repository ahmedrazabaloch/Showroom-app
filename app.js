function buycars() {
  var services = document.getElementById("services").style;
  var featured = document.getElementById("featured").style;

  services.display = "block";
  featured.display = "block";
}

// function selected(e) {
//   var company = event.target;
//   var selection = document.getElementById("selection");
//   selection.innerHTML = company.innerHTML;
//   var select = selection.innerHTML;

//   console.log(select);
// }

var cars = {
  hyundai: {
    Sonata: {
      name: "Hyundai Sonata",
      engine: "Smart Stream 2.5 MPi",
      door: "4 doors",
      FuelTank: "60 (Ltr.)",
      MaxPower: "132 (180)/6200",
      color: ["White", "Black", "Red"],
      price: "112 Lakh",
    },
    Tucson: {
      name: "Hyundai Sonata",
      engine: "Smart Stream 2.5 MPi",
      door: "4 doors",
      FuelTank: "60 (Ltr.)",
      MaxPower: "132 (180)/6200",
      color: ["White", "Black", "Red"],
      price: "112 Lakh",
    },
    Accent: {
      name: "Hyundai Sonata",
      engine: "Smart Stream 2.5 MPi",
      door: "4 doors",
      FuelTank: "60 (Ltr.)",
      MaxPower: "132 (180)/6200",
      color: ["White", "Black", "Red"],
      price: "112 Lakh",
    },
    SantaFe: {
      name: "Hyundai Sonata",
      engine: "Smart Stream 2.5 MPi",
      door: "4 doors",
      FuelTank: "60 (Ltr.)",
      MaxPower: "132 (180)/6200",
      color: ["White", "Black", "Red"],
      price: "112 Lakh",
    },
  },
  toyota: {
    Camry: {
      name: "Toyota Camry",
      engine: "Smart Stream 2.5 MPi",
      door: "4 doors",
      FuelTank: "60 (Ltr.)",
      MaxPower: "132 (180)/6200",
      color: ["White", "Black", "Red"],
      price: "112 Lakh",
    },
    Corolla: {
      name: "Toyota Corolla",
      engine: "Smart Stream 2.5 MPi",
      door: "4 doors",
      FuelTank: "60 (Ltr.)",
      MaxPower: "132 (180)/6200",
      color: ["White", "Black", "Red"],
      price: "112 Lakh",
    },

    Prius: {
      name: "Toyota Prius",
      engine: "Smart Stream 2.5 MPi",
      door: "4 doors",
      FuelTank: "60 (Ltr.)",
      MaxPower: "132 (180)/6200",
      color: ["White", "Black", "Red"],
      price: "112 Lakh",
    },
    Fortuner: {
      name: "Toyota Fortuner",
      engine: "Smart Stream 2.5 MPi",
      door: "4 doors",
      FuelTank: "60 (Ltr.)",
      MaxPower: "132 (180)/6200",
      color: ["White", "Black", "Red"],
      price: "112 Lakh",
    },
  },
  suzuki: {
    Swift: {
      name: "Suzuki Swift",
      engine: "Smart Stream 2.5 MPi",
      door: "4 doors",
      FuelTank: "60 (Ltr.)",
      MaxPower: "132 (180)/6200",
      color: ["White", "Black", "Red"],
      price: "112 Lakh",
    },
    Alto: {
      name: "Suzuki Alto",
      engine: "Smart Stream 2.5 MPi",
      door: "4 doors",
      FuelTank: "60 (Ltr.)",
      MaxPower: "132 (180)/6200",
      color: ["White", "Black", "Red"],
      price: "112 Lakh",
    },
    Mehran: {
      name: "Suzuki Mehran",
      engine: "Smart Stream 2.5 MPi",
      door: "4 doors",
      FuelTank: "60 (Ltr.)",
      MaxPower: "132 (180)/6200",
      color: ["White", "Black", "Red"],
      price: "112 Lakh",
    },
    Carry: {
      name: "Suzuki Carry",
      engine: "Smart Stream 2.5 MPi",
      door: "4 doors",
      FuelTank: "60 (Ltr.)",
      MaxPower: "132 (180)/6200",
      color: ["White", "Black", "Red"],
      price: "112 Lakh",
    },
  },
  honda: {
    Civic: {
      name: "Honda Civic",
      engine: "Smart Stream 2.5 MPi",
      door: "4 doors",
      FuelTank: "60 (Ltr.)",
      MaxPower: "132 (180)/6200",
      color: ["White", "Black", "Red"],
      price: "112 Lakh",
    },
    City: {
      name: "Honda City",
      engine: "Smart Stream 2.5 MPi",
      door: "4 doors",
      FuelTank: "60 (Ltr.)",
      MaxPower: "132 (180)/6200",
      color: ["White", "Black", "Red"],
      price: "112 Lakh",
    },
    BRV: {
      name: "Honda BR-V",
      engine: "Smart Stream 2.5 MPi",
      door: "4 doors",
      FuelTank: "60 (Ltr.)",
      MaxPower: "132 (180)/6200",
      color: ["White", "Black", "Red"],
      price: "112 Lakh",
    },
    Hybrid: {
      name: "Honda CR-V Hybrid",
      engine: "Smart Stream 2.5 MPi",
      door: "4 doors",
      FuelTank: "60 (Ltr.)",
      MaxPower: "132 (180)/6200",
      color: ["White", "Black", "Red"],
      price: "112 Lakh",
    },
  },
  kia: {
    Sportage: {
      name: "Kia Sportage",
      engine: "Smart Stream 2.5 MPi",
      door: "4 doors",
      FuelTank: "60 (Ltr.)",
      MaxPower: "132 (180)/6200",
      color: ["White", "Black", "Red"],
      price: "112 Lakh",
    },
    Sorento: {
      name: "Kia Sorento",
      engine: "Smart Stream 2.5 MPi",
      door: "4 doors",
      FuelTank: "60 (Ltr.)",
      MaxPower: "132 (180)/6200",
      color: ["White", "Black", "Red"],
      price: "112 Lakh",
    },
    Rio: {
      name: "Kia Rio",
      engine: "Smart Stream 2.5 MPi",
      door: "4 doors",
      FuelTank: "60 (Ltr.)",
      MaxPower: "132 (180)/6200",
      color: ["White", "Black", "Red"],
      price: "112 Lakh",
    },
    Stinger: {
      name: "Kia Stinger",
      engine: "Smart Stream 2.5 MPi",
      door: "4 doors",
      FuelTank: "60 (Ltr.)",
      MaxPower: "132 (180)/6200",
      color: ["White", "Black", "Red"],
      price: "112 Lakh",
    },
  },
};

var company = document.getElementById("company");
var brand = document.getElementById("brand");
var allCars = document.getElementById("allCars");

brand.innerHTML = `<option value="">Choice a car</option>`;

for (var key in cars) {
  company.innerHTML += `
  <option value="${key}">${key.toUpperCase()}</option>
  `;

  for (var key1 in cars[key]) {
    var carsDetails = cars[key][key1];
    allCars.innerHTML = `
      <div class="card" style="width: 25rem">
      <img
        src="img/cars/honda/Hyundai-Sonata-Front.jpg"
        class="card-img-top"
      />
      <div class="card-body">
        <h1 class="card-title">${carsDetails.name}</h1>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <img src="img/icons/engine.png" alt="" /> ${carsDetails.engine}
        </li>
        <li class="list-group-item">
          <img src="img/icons/speed-meter.png" alt="" />${carsDetails.MaxPower}
        </li>
        <li class="list-group-item">
          <img src="img/icons/car-door.png" alt="" />${carsDetails.door}
        </li>
        <li class="list-group-item">
          <img src="img/icons/full-tank.png" alt="" />${carsDetails.FuelTank}
        </li>
        <li class="list-group-item">
          <img src="img/icons/color.png" alt="" /> ${carsDetails.color}
        </li>
        <li class="list-group-item">
          <img src="img/icons/price.png" alt="" /> ${carsDetails.price}
        </li>
      </ul>
    </div>
      `;
  }
}
function companyToBrand() {
  brand.innerHTML = "";
  brand.innerHTML = `<option value="">Choice a car</option>`;
  for (var key in cars[company.value]) {
    brand.innerHTML += `
    <option value="${key}">${key.toUpperCase()}</option>
  `;
  }
}
