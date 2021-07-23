module appModule {
class GridControler implements ng.IComponentController {
    private gridSize = 8;
    public cellsGrid :  cell[][];
    public isGameOver : boolean;
    public event : PointerEvent;
    
    $onInit() { 
        this.isGameOver = false; 

    }
    constructor() {
        this.cellsGrid = [];
        for(let i = 0; i < this.gridSize; i++)
        {
            this.cellsGrid[i] = [];
            for(let j = 0; j < this.gridSize; j++)
            {
                this.cellsGrid[i][j] = new cell(false, false, "", new PositionCell(i, j))
            }
        }
        this.addBombs();

    }

    public onCellClicked = (cell) => {
        if(cell.cell.isClicked) {
            return;
        }
        cell.cell.isClicked = true;
        
        if(cell.cell.isBomb) {
            console.log("your loss the game")
            this.isGameOver = true;
            for(var i = 0; i < this.gridSize; i++) {
                for(var j = 0; j < this.gridSize; j++) {
                    if(this.cellsGrid[i][j].isBomb) {
                        this.cellsGrid[i][j].isClicked = true;
                    }
                }
            }
            
        }
        else {
            var neighborBombsCount = 0;
            
            for (var i=Math.max(cell.cell.position.X-1,0); i<=Math.min(cell.cell.position.X+1,this.gridSize - 1); i++) {
              for(var j=Math.max(cell.cell.position.Y-1,0); j<=Math.min(cell.cell.position.Y+1,this.gridSize - 1); j++) {
                    if(this.cellsGrid[i][j].isBomb) {
                        neighborBombsCount++;    
                    }
                }
            }
            cell.cell.innerHtml = neighborBombsCount;
        }
        //console.log(cell.cell.position)
    }

    public addBombs = () => {
        var bombsAmount = this.gridSize;
        var count = 0;
        while(count < bombsAmount) {
        var randomCell = new PositionCell(Math.floor(Math.random() * this.gridSize), (Math.floor(Math.random() * this.gridSize)));
            if(!this.cellsGrid[randomCell.X][randomCell.Y].isBomb) {
                this.cellsGrid[randomCell.X][randomCell.Y].isBomb = true;
                count++
            }
        }
    }
}

class GridComponent implements ng.IComponentOptions {

    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    public templateUrl: string;
    public bindings: any;
    
    constructor() {
        this.bindings = {
            isGameOver : '<'
        }
        this.controller = GridControler;
        this.controllerAs = "$ctrl";
        this.templateUrl = "components/grid/grid.template.html";

    }
}
app.component('gridComponent', new GridComponent());
}