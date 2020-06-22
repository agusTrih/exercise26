class TwoDimentional {
    constructor(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }
    // persegi
    squareArea() {
        return this.value1 * this.value1;
    }
    aroundTheSquare() {
        return this.value1 * 4;
    }

    // persegi panjang
    areaOfRectangle() {
        return this.value1 * this.value2;
    }
    aroundTheRectangle() {
        return this.value1 + this.value2 + this.value1 + this.value2;
    }

    // segitiga siku-siku
    areaOfTriangle() {
        return (this.value1 * this.value2) / 2;
    }
    aroundTheTriangle() {
        let ckuadrat = this.value1 * this.value1 + this.value2 * this.value2;
        return this.value1 + this.value2 + Math.sqrt(ckuadrat);
    }
    // lingkaran
    areaOfCircle() {
        return Math.PI * (this.value1 * this.value1);
    }

    circumference() {
        return 2 * Math.PI * this.value1;
    }
}

const two = new TwoDimentional(3, 4);
// persegi
console.log(two.squareArea());
console.log(two.aroundTheSquare());
// persegi panjang
console.log(two.areaOfRectangle());
console.log(two.aroundTheRectangle());
//segitiga siku-siku
console.log(two.areaOfTriangle());
console.log(two.aroundTheTriangle());
// lingkaran
console.log(two.areaOfCircle());
console.log(two.circumference());

// inheritance
class ThreeDimentional extends TwoDimentional {
    constructor(value1, value2, value3) {
        super(value1, value2);
        this.value3 = value3;
    }

    // kubus
    volumeOfTheCube() {
        return this.value1 * this.value1 * this.value1;
    }
    aroundOfTheCube() {
        return 6 * (this.value1 * this.value1);
    }
    // balok

    // kubus
    volumeOfTheBeam() {
        return this.value1 * this.value2 * this.value3;
    }
    aroundOfTheBeam() {
        return (
            2 *
            (this.value1 * this.value2 +
                this.value1 * this.value2 +
                this.value2 * this.value3)
        );
    }
}

const three = new ThreeDimentional(5, 6, 7);
// kubus
console.log(three.volumeOfTheCube());
console.log(three.aroundOfTheCube());
// balok
console.log(three.volumeOfTheBeam());
console.log(three.aroundOfTheBeam());
