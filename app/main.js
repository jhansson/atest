System.register(['angular2/platform/browser', './little-tour.components'], function(exports_1) {
    "use strict";
    var browser_1, little_tour_components_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (little_tour_components_1_1) {
                little_tour_components_1 = little_tour_components_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(little_tour_components_1.LittleTourComponent);
        }
    }
});
//# sourceMappingURL=main.js.map