class Tv{
    public turnOn():void{
        console.log("Tv on");
    }
    public turnOff():void{
        console.log("Tv off");
    }
    public changeChannel():void{
        console.log("Change tv channel");
    }
}

class DvdPlayer{
    public turnOn():void{
        console.log("Dvd player on");
    }
    public turnOff():void{
        console.log("Dvd player off");
    }
    public ejectTray():void{
        console.log("DVD player eject tray");
    }
}

class AirCondition{
    private temp:number = 27;
    public turnOn():void{
        console.log("Air condition on");
    }
    public turnOff():void{
        console.log("Air condition off");
    }
    public setTemperature(temp:number):void{
        this.temp = temp;
        console.log(`Air condition set temperature to ${temp}`);
    }
}

class HomeAppliance{
    public constructor(public tv:Tv, public dvd:DvdPlayer, public ac:AirCondition) {
    }

    public setupForMovie():void{
        console.log("Movie setup");
        this.tv.turnOn();
        this.dvd.turnOn();
        this.ac.turnOn();
        this.ac.setTemperature(25);
    }
    public setupForSleep():void{
        console.log("Sleep setup");
        this.tv.turnOff();
        this.dvd.turnOff();
        this.ac.setTemperature(20);
    }
    public setupForLeave():void{
        console.log("Leave setup");
        this.tv.turnOff();
        this.dvd.turnOff();
        this.ac.turnOff();
    }
}

let tv = new Tv();
let dvd = new DvdPlayer();
let ac = new AirCondition();
let homeAppliance = new HomeAppliance(tv, dvd, ac);

homeAppliance.setupForMovie();
homeAppliance.setupForSleep();
homeAppliance.setupForLeave();