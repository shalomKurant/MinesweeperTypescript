var appModule;
(function (appModule) {
    class GridControler {
        constructor() {
            this.gridSize = 8;
            this.onCellClicked = (cell) => {
                if (cell.cell.isClicked) {
                    return;
                }
                cell.cell.isClicked = true;
                if (cell.cell.isBomb) {
                    console.log("your loss the game");
                    this.isGameOver = true;
                    for (var i = 0; i < this.gridSize; i++) {
                        for (var j = 0; j < this.gridSize; j++) {
                            if (this.cellsGrid[i][j].isBomb) {
                                this.cellsGrid[i][j].isClicked = true;
                            }
                        }
                    }
                }
                else {
                    var neighborBombsCount = 0;
                    for (var i = Math.max(cell.cell.position.X - 1, 0); i <= Math.min(cell.cell.position.X + 1, this.gridSize - 1); i++) {
                        for (var j = Math.max(cell.cell.position.Y - 1, 0); j <= Math.min(cell.cell.position.Y + 1, this.gridSize - 1); j++) {
                            if (this.cellsGrid[i][j].isBomb) {
                                neighborBombsCount++;
                            }
                        }
                    }
                    cell.cell.innerHtml = neighborBombsCount;
                }
                //console.log(cell.cell.position)
            };
            this.addBombs = () => {
                var bombsAmount = this.gridSize;
                var count = 0;
                while (count < bombsAmount) {
                    var randomCell = new appModule.PositionCell(Math.floor(Math.random() * this.gridSize), (Math.floor(Math.random() * this.gridSize)));
                    if (!this.cellsGrid[randomCell.X][randomCell.Y].isBomb) {
                        this.cellsGrid[randomCell.X][randomCell.Y].isBomb = true;
                        count++;
                    }
                }
            };
            this.cellsGrid = [];
            for (let i = 0; i < this.gridSize; i++) {
                this.cellsGrid[i] = [];
                for (let j = 0; j < this.gridSize; j++) {
                    this.cellsGrid[i][j] = new appModule.cell(false, false, "", new appModule.PositionCell(i, j));
                }
            }
            this.addBombs();
        }
        $onInit() {
            this.isGameOver = false;
        }
    }
    class GridComponent {
        constructor() {
            this.bindings = {
                isGameOver: '<'
            };
            this.controller = GridControler;
            this.controllerAs = "$ctrl";
            this.templateUrl = "components/grid/grid.template.html";
        }
    }
    appModule.app.component('gridComponent', new GridComponent());
})(appModule || (appModule = {}));
