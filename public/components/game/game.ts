module appModule {
class GameControler implements ng.IComponentController {
    public isGameOver : boolean;
    $onInit() { 
    }
    constructor() {
    }
}

class GameComponent implements ng.IComponentOptions {

    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    public templateUrl: string;
    public bindings: any;
    
    constructor() {
        this.bindings = {
            isGameOver : '@'
        }        
        this.controller = GameControler;
        this.controllerAs = "$ctrl";
        this.templateUrl = "components/game/game.template.html";

    }
}
app.component('gameComponent', new GameComponent());
}