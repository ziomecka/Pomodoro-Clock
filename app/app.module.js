/* jshint esversion: 6 */
import angular from "angular";
import AppController from "./app.controller";
import AppTimerService from "./core/timer.service";
import workComponent from "./work/timer.work.component";
import breakComponent from "./break/timer.break.component";
import workOptions from  "./work/timer.work.options";
import breakOptions from  "./break/timer.break.options";
import "./index.html";

export default angular
.module("App", [])
.controller("AppController", ["$scope", "$timeout", "WorkService", "BreakService", AppController])
.service("WorkService", ["$rootScope", "workOptions", AppTimerService])
.service("BreakService", ["$rootScope", "breakOptions", AppTimerService])
.component("workComponent", workComponent)
.component("breakComponent", breakComponent)
.value("workOptions", workOptions)
.value("breakOptions", breakOptions);
