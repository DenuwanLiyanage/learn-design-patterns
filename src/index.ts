interface ICommand {
    execute(input: string): string;
    undo(input: string):string;


}

class AppendCommand implements ICommand {
    private appendedLength:number;

    public constructor(public appendText: string) {
        this.appendedLength = appendText.length;
    }

    execute(input: string): string {
        return input + this.appendText;
    }

    undo(input: string): string {
        let original = input.slice(0,input.length-this.appendedLength)
        return original;
    }
}

class BackspaceCommand implements ICommand {
    private removedString:string = "";

    public constructor(public val: number = 1) {
    }

    execute(input: string): string {
        this.removedString = input.slice(input.length - this.val,input.length)
        return input.slice(0, input.length - this.val);
    }

    undo(input: string): string {
        return input + this.removedString;
    }
}

class ClearCommand implements ICommand {

    private clearedText:string = "";
    public constructor() {
    }

    execute(input: string): string {
        this.clearedText = input;
        return "";
    }

    undo(input: string): string {
        return this.clearedText;
    }
}

class TextEditor {
    private currentText: string = "";
    public commandList : ICommand[] = [];

    public executeCommand(iCommand: ICommand) {
        this.commandList.push(iCommand);
        this.currentText = iCommand.execute(this.currentText);
    }

    public undo(){

        let lastCommand:ICommand | undefined = this.commandList.pop();
        if(!lastCommand){
            return
        }
        this.currentText = lastCommand.undo(this.currentText)
    }

    public display(): void {
        console.log(this.currentText);
    }
}


let textEditor = new TextEditor();

let append = new AppendCommand("hello");
textEditor.executeCommand(append);
textEditor.display();

let append2 = new AppendCommand(" saman")
textEditor.executeCommand(append2);
textEditor.display();

textEditor.undo();
textEditor.display();

let backSpace = new BackspaceCommand(2);
textEditor.executeCommand(backSpace);
textEditor.display();

textEditor.undo();
textEditor.display();


let clear = new ClearCommand();
textEditor.executeCommand(clear);
textEditor.display();

textEditor.undo();
textEditor.display();


