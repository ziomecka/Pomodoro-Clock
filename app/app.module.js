/* jshint esversion: 6 */
/**
 *  @module       app.module
 *  @name         app.module.AppModule
 *  @requires     {@link app.controller.js AppController}
 *  @requires     {@link work/timer.work.component.js workComponent}
 *  @requires     {@link break/timer.break.component.js breakComponent}
 *  @description  Creates, registers and retrievs AngularJS module, controller, services, components and values
 *  @author       Katarzyna Ziomek-Zdanowicz
 *
 */
import angular from "angular";
import AppController from "./app.controller";
import AppTimerService from "./core/timer.service";
import workComponent from "./work/timer.work.component";
import breakComponent from "./break/timer.break.component";
/**
 * @typedef      TimerOptions
 * @type         {object}
 * @property     {string} id - an ID
 */
import workOptions from "./work/timer.work.options";
import breakOptions from "./break/timer.break.options";

export default angular
.module("App", [])
.controller("AppController", ["$scope", "$timeout", "WorkService", "BreakService", AppController])
.service("WorkService", ["$rootScope", "workOptions", AppTimerService])
.service("BreakService", ["$rootScope", "breakOptions", AppTimerService])
.component("workComponent", workComponent)
.component("breakComponent", breakComponent)

/**
 * @param {TimerOptions} workOptions
 * @description register work options
 */
.value("workOptions", workOptions)
/**
* @param {TimerOptions} breakOptions
* @description register break options
*/
.value("breakOptions", breakOptions);
