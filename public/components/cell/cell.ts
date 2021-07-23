module appModule {
export class CellControler implements ng.IComponentController {

    public cell : cell;
    $onInit() {
    }

    constructor() {
    }
}

export class CellComponent implements ng.IComponentOptions {

    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    public templateUrl: string;
    public bindings: any;
    
    constructor() {
        this.bindings = {
        }
        
        this.controller = CellControler;
        this.controllerAs = "$ctrl";
        this.templateUrl = "components/cell/cell.template.html";

    }
}

    export class cell {
        public isClicked : boolean;
        public isBomb : boolean;
        public innerHtml : any;
        public position : any;
        
        constructor(isBomb?:boolean , isClicked?: boolean , innerHtml?: string , position?: PositionCell)
        {
            this.isBomb = isBomb;
            this.isClicked = isClicked;
            this.innerHtml = innerHtml;
            this.position = position;
        }
    }

    export class PositionCell {        
        public X : number;
        public Y : number;

        constructor(x : number, y : number) {
            this.X = x;
            this.Y = y;
        }
    }
}