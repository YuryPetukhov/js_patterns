// this is base configuration of Tesla
class TeslaCar {
  constructor(model, price, interior, autopilot) {
    this.model = model;
    this.price = price;
    this.interior = interior;
    this.autopilot = autopilot;
  }

  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
  }
}

const prototype = new TeslaCar('S', 10000, 'black', false);

// create this cars
const car1 = prototype.produce();
const car2 = prototype.produce();
const car3 = prototype.produce();

// change base car config for certain car

car1.autopilot(true);
car1.interior('white');
