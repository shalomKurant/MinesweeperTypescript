var appModule;
(function (appModule) {
    class GameControler {
        constructor() {
        }
        $onInit() {
        }
    }
    class GameComponent {
        constructor() {
            this.bindings = {
                isGameOver: '@'
            };
            this.controller = GameControler;
            this.controllerAs = "$ctrl";
            this.templateUrl = "components/game/game.template.html";
        }
    }
    appModule.app.component('gameComponent', new GameComponent());
})(appModule || (appModule = {}));
