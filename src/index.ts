enum CakeType {
    ChocolateCake,
    VanillaCake,
    FruitCake
}

class Order {
    public constructor(
        public orderNum: number,
        public cakeType: CakeType,
        public customer: string,
    ) {
    }

    public toString():string{
        return `Order number is ${this.orderNum}, cake type is ${this.cakeType}, customer is ${this.customer}`;
    }
}

abstract class CakeBase {
    public constructor(public order: Order, public weight: number) {
    }

    public toString(): string {
        return `Cake made for order ${this.order}`;
    }

}

class ChocolateCake extends CakeBase {
}

class VanillaCake extends CakeBase {
}

class FruitCake extends CakeBase {
}

class CakeFactory {
    public constructor(public readonly gramsPerCake: number) {
    }

    public bakeCake(order: Order): CakeBase {
        switch (order.cakeType) {
            case CakeType.ChocolateCake:
                return new ChocolateCake(order, this.gramsPerCake);
            case CakeType.VanillaCake:
                return new VanillaCake(order, this.gramsPerCake);
            case CakeType.FruitCake:
                return new FruitCake(order, this.gramsPerCake);
        }
    }
}

let factory = new CakeFactory(150);
let order = new Order(1, CakeType.ChocolateCake, "Sunimal");
let cake =factory.bakeCake(order);
console.log(cake.toString());





