class Component {
  constructor() {}
  render() {
    return;
  }
}

class Car extends Component {
  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    super();
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = new Intl.NumberFormat("in-ID", {
      maximumSignificantDigits: 10,
    }).format(rentPerDay);
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  static init(cars) {
    this.list = cars.map((car) => new this(car));
  }

  render() {
    return `
      <div class="card box-shadow__low border-0">
        <div class="container_image">
          <img src="${this.image}" class="card-img-top" id="card_imageMobil" alt="${this.manufacture}"/>
        </div>
        <div class="card-body">
          <div class="card-content">
            <h6 class="card-title">${this.manufacture}/${this.model}</h6>
            <h5>Rp. ${this.rentPerDay}/hari</h5>
            <p class="card-text">${this.description}</p>
            <div>
              <span>
                <i data-feather="users"></i>
                <span>${this.capacity} orang</span>
              </span>
              <span>
                <i data-feather="settings"></i>
                <span>${this.transmission}</span>
              </span>
              <span>
                <i data-feather="calendar"></i>
                <span>Tahun ${this.year}</span>
              </span>
            </div>
          </div>
          <button type="submit" class="btn btn-success">Pilih Mobil</button>
        </div>
      </div>
    `;
  }

  errorRender() {
    return `<div class="alert alert-danger"><h5>Mobil tidak dapat ditemukan</h5></div>`;
  }
}
