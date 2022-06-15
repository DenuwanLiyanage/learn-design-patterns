interface ICommand {
    execute(input: string): string;
}

class Append implements ICommand {

    public constructor(public appendText: string) {
    }

    execute(input: string): string {
        return input + this.appendText;
    }
}

class Backspace implements ICommand {

    public constructor(public val: number = 1) {
    }

    execute(input: string): string {
        return input.slice(0, input.length - this.val);
    }
}

class Clear implements ICommand {

    public constructor() {
    }

    execute(input: string): string {
        return "";
    }
}

class TextEditor {
    private currentText: string = "";

    public executeCommand(iCommand: ICommand) {
        this.currentText = iCommand.execute(this.currentText);
    }

    public display(): void {
        console.log(this.currentText);
    }
}


let textEditor = new TextEditor();

let append = new Append("hell");
textEditor.executeCommand(append);
textEditor.display();

let backSpace = new Backspace(2);
textEditor.executeCommand(backSpace);
textEditor.display();

let clear = new Clear();
textEditor.executeCommand(clear);
textEditor.display();




