class App {
  constructor() {
    this.tipeDriver = "";
    this.tanggal = "";
    this.waktuJemput = "";
    this.jumlahPenumpang = "";
    this.loadButton = document.getElementById("btnCari");
    this.carContainerElement = document.getElementById(
      "container_hasilCariMobil"
    );
  }

  async init() {
    await this.load();

    // Register click listener
    this.loadButton.onclick = this.run;
  }

  input = () => {
    this.tipeDriver =
      document.getElementById("dropboxTipedriver").value == "0"
        ? "true"
        : "false";
    this.tanggal = document.getElementById("tanggal").value;
    this.waktuJemput = document.getElementById("dropboxWaktuJemput").value;
    this.jumlahPenumpang = document.getElementById(
      "inputJumlahPenumpang"
    ).value;
  };

  run = () => {
    this.clear();
    if (this.check()) {
      this.input();
      let userdateTime = new Date(
        `${this.tanggal} ${this.waktuJemput}`
      ).valueOf();

      let foundCar = false;
      Car.list.forEach((car) => {
        console.log("car time:" + Date.parse(car.availableAt));
        console.log("user time:" + userdateTime);
        if (
          car.available.toString() == this.tipeDriver &&
          Date.parse(car.availableAt) >= userdateTime &&
          car.capacity >= this.jumlahPenumpang
        ) {
          foundCar = true;
          console.table(car);
          this.carContainerElement.innerHTML += car.render();
        }
      });
      if (foundCar == false) {
        const carInstance = new Car({});
        this.carContainerElement.innerHTML = carInstance.errorRender();
      }
      feather.replace();
    }
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };

  check = () => {
    if (
      document.getElementById("dropboxTipedriver").value !== "" &&
      document.getElementById("tanggal").value !== "" &&
      document.getElementById("dropboxWaktuJemput").value !== "" &&
      document.getElementById("inputJumlahPenumpang").value !== ""
    ) {
      // this.loadButton.disabled = false;
      return true;
    } else {
      // this.loadButton.disabled = true;
      alert("Isilah inputan tipe driver, tanggal, waktu, dan jumlah penumpang");
      return false;
    }
  };
}
