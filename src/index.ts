interface IUsbDevice {
    receiveDataAsAndroid(data: string): void;
}

class IPhone {
    receiveDataAsIos(data: string): void {
        console.log(`Receive ${data} as ios Apple`)
    }
}

class Galaxy implements IUsbDevice {
    receiveDataAsAndroid(data: string): void {
        console.log(`Receive ${data} as Android Galaxy`)
    }
}

class LightningToUsbAdapter implements IUsbDevice {

    public constructor(public apple: IPhone) {
    }

    receiveDataAsAndroid(data: string): void {
        this.apple.receiveDataAsIos(data.toUpperCase());
    }
}

class Computer {
    public constructor() {
    }

    public copyToDevice(usb: IUsbDevice): void {
        usb.receiveDataAsAndroid("saman")
    }
}

let galaxy = new Galaxy();
let apple = new IPhone();
let adapter = new LightningToUsbAdapter(apple)

let computer = new Computer();

computer.copyToDevice(galaxy);
computer.copyToDevice(adapter);