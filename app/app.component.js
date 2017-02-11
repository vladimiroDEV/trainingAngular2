/// <reference path="../typings/tsd.d.ts" />
System.register(["angular2/core", "rxjs/Rx", "./post.service", "angular2/http"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, Rx_1, post_service_1, http_1, AppComponent, isLoading;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {/// <reference path="../typings/tsd.d.ts" />
            AppComponent = (function () {
                function AppComponent() {
                    var keyups = Rx_1.Observable
                        .fromEvent($("#search"), "keyup")
                        .map(function (e) { return e.target.value; })
                        .filter(function (text) { return text.length >= 3; })
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .flatMap(function (searchTerm) {
                        var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
                        var promise = $.getJSON(url);
                        return Rx_1.Observable.fromPromise(promise);
                    });
                    var subscription = keyups.subscribe(function (data) { return console.log(data); });
                    subscription.unsubscribe();
                    console.log(new Rx_1.Observable());
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: "\n        <input id=\"search\" type=\"text\"\n        placeholder =\"sarch\" class=\"form-control\">\n        <br />\n        <br />\n        <br />\n        <br />\n        <div *ngIf = \"isLoading\">\n            <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n        </div>\n\n          <br />\n        <br />\n        <br />\n        <hr />\n    ",
                    providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS]
                }),
                __metadata("design:paramtypes", [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
            isLoading = true;
        }
    };
});
//# sourceMappingURL=app.component.js.map