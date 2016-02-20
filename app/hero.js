System.register([], function(exports_1) {
    "use strict";
    var Hero;
    return {
        setters:[],
        execute: function() {
            Hero = (function () {
                function Hero(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Hero;
            }());
            exports_1("Hero", Hero);
        }
    }
});
//# sourceMappingURL=hero.js.map