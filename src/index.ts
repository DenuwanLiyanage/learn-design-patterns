interface IObservable {
    subscribe(iObserver:IObserver):void;
    notifyAll():void;
}
interface IObserver {
    notifyChange(val:number):void;
}

class Ac implements IObserver{

    notifyChange(val: number): void {
        console.log(`notifying change for Ac, value ${val}`);
    }
}

class Heater implements IObserver{
    notifyChange(val: number): void {
        console.log(`notifying change for Heater, value ${val}`);
    }
}

class TemperatureSensor implements IObservable{
    public subscribers:IObserver[] = [];
    public val:number = 24;

    notifyAll(): void {
        for (const subscriber of this.subscribers) {
            subscriber.notifyChange(this.val);
        }
    }

    subscribe(iObserver: IObserver): void {
        this.subscribers.push(iObserver);
    }

    setTemperature(val:number):void{
        this.val = val;
        this.notifyAll();

    }
}

let ac = new Ac();
let heater = new Heater();

let temperatureSensor = new TemperatureSensor();

temperatureSensor.subscribe(ac);
temperatureSensor.subscribe(heater);

temperatureSensor.setTemperature(16);
