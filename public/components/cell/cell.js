var appModule;
(function (appModule) {
    class CellControler {
        constructor() {
        }
        $onInit() {
        }
    }
    appModule.CellControler = CellControler;
    class CellComponent {
        constructor() {
            this.bindings = {};
            this.controller = CellControler;
            this.controllerAs = "$ctrl";
            this.templateUrl = "components/cell/cell.template.html";
        }
    }
    appModule.CellComponent = CellComponent;
    class cell {
        constructor(isBomb, isClicked, innerHtml, position) {
            this.isBomb = isBomb;
            this.isClicked = isClicked;
            this.innerHtml = innerHtml;
            this.position = position;
        }
    }
    appModule.cell = cell;
    class PositionCell {
        constructor(x, y) {
            this.X = x;
            this.Y = y;
        }
    }
    appModule.PositionCell = PositionCell;
})(appModule || (appModule = {}));
