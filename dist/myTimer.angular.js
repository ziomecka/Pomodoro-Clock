webpackJsonp([0],{127:function(e,t,n){"use strict";var s=n(128);!function(e){e&&e.__esModule}(s);n(344)},128:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(63),r=s(i),u=n(131),o=(s(u),n(133)),a=(s(o),n(339)),c=(s(a),n(342)),l=s(c),d=n(343),f=s(d);t.default=r.default.module("app",["ngResource","timerSession","timerBreak"]).controller("appController",l.default).factory("appService",f.default)},133:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(63),r=s(i),u=n(134),o=s(u),a=n(135),c=s(a);t.default=r.default.module("timerBreak",[]).value("breakOptions",o.default).controller("TimerBreak",c.default)},134:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={timer:{steps:{session:{value:2,units:"seconds"}},countUnits:["minutes","seconds"],direction:"down"},increase:{step:"session",value:1,units:"minutes",increment:1},decrease:{step:"session",value:1,units:"minutes",increment:1,sign:-1}};t.default=s},135:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(91),i=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default=function(e,t){var n=e,s=new i.default(t.timer);s.events.subscribe(n,"currentTime","currentTime"),s.events.subscribe(n,"sessionChanged","sessionChanged"),s.events.subscribe(n,"sessionStopped","sessionStopped"),n.length=s.session_minutes(),n.increase=function(){return s.changeStep(t.increase)},n.decrease=function(){return s.changeStep(t.decrease)},n.getTime=function(){n.minutes=s.time_minutes(),n.seconds=s.time_seconds()},n.start=function(){return s.start()},n.toggle=function(){return s.toggle()},n.currentTime=function(){n.getTime(),n.$$phase||n.$apply()},n.sessionStopped=function(){return n.$emit("breakStopped")},n.sessionChanged=function(){n.length=s.session_minutes(),n.$$phase||n.$apply()},n.$on("startBreak",function(){return n.start()}),n.getTime()}},338:function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),r=function(){function e(){s(this,e),this.steps=["session","interval"],this.session=6e4,this.interval=1,this.countUnits=["hours","minutes","seconds","milliseconds"],this.unitsOrder=["hours","minutes","seconds","milliseconds"],this.units={hours:36e5,minutes:6e4,seconds:1e3,milliseconds:1},this.statuses=new Map([["stop",Symbol("stop")],["count",Symbol("count")],["pause",Symbol("pause")]]),this.status=this.statuses.get("stop"),this.direction="up",this.start=Date.now(),this.now=Date.now()}return i(e,[{key:"hours",value:function(e){var t=e;return Math.floor(t/this.units.hours)}},{key:"minutes",value:function(e){var t=e%this.units.hours;return Math.floor(t/this.units.minutes)}},{key:"seconds",value:function(e){var t=e%this.units.minutes;return Math.floor(t/this.units.seconds)}},{key:"milliseconds",value:function(e){var t=e%this.units.seconds;return Math.floor(t/this.units.milliseconds)}},{key:"smoothInterval",value:function(){var e=this.countUnits[this.countUnits.length-1];this.interval>e/2&&(this.interval=e/2*this.units[unit[0]])}},{key:"convertToMilliseconds",value:function(e){if(e.units&&e.value)return"milliseconds"!==e.units?e.value*this.units[e.units]:e.value}},{key:"isCounting",get:function(){return this.status===this.statuses.get("count")},set:function(e){this.status=this.statuses.get("count")}},{key:"isStopped",get:function(){return this.status===this.statuses.get("stop")},set:function(e){this.status=this.statuses.get("stop")}},{key:"isPaused",get:function(){return this.status===this.statuses.get("pause")},set:function(e){this.status=this.statuses.get("pause")}},{key:"ellapsed",get:function(){return this.now-this.start}}]),e}();t.default=r},339:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(63),r=s(i),u=n(340),o=s(u),a=n(341),c=s(a);t.default=r.default.module("timerSession",[]).value("sessionOptions",o.default).controller("TimerSession",c.default)},340:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={timer:{steps:{session:{value:10,units:"seconds"}},countUnits:["minutes","seconds"],direction:"down"},increase:{step:"session",value:1,units:"minutes",increment:1},decrease:{step:"session",value:1,units:"minutes",increment:1,sign:-1}};t.default=s},341:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(91),i=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default=function(e,t){var n=e,s=new i.default(t.timer);s.events.subscribe(n,"currentTime","currentTime"),s.events.subscribe(n,"sessionChanged","sessionChanged"),s.events.subscribe(n,"sessionStopped","sessionStopped"),n.length=s.session_minutes(),n.increase=function(){return s.changeStep(t.increase)},n.decrease=function(){return s.changeStep(t.decrease)},n.getTime=function(){n.minutes=s.time_minutes(),n.seconds=s.time_seconds()},n.start=function(){return s.start()},n.toggle=function(){return s.toggle()},n.currentTime=function(){n.getTime(),n.$$phase||n.$apply()},n.sessionStopped=function(){return n.$emit("timerStopped")},n.sessionChanged=function(){n.length=s.session_minutes(),n.$$phase||n.$apply()},n.$on("startSession",function(){return n.start()}),n.getTime()}},342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e;t.$on("timerStopped",function(){return t.$broadcast("startBreak")}),t.$on("breakStopped",function(){return t.$broadcast("startSession")}),t=null}},343:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=function(){return e.changeStep(breakOptions.increase)},n=function(){return e.changeStep(breakOptions.decrease)};return{increase:t,decrease:n,getTime:function(){return{minutes:e.time_minutes(),seconds:e.time_seconds()}},start:function(){return e.start()},toggle:function(){return e.toggle()}}}},344:function(e,t){e.exports='<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n  <meta charset="UTF-8">\r\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n  <title>Document</title>\r\n</head>\r\n<body ng-app="app" ng-controller="appController">\r\n  <div ng-controller="TimerBreak">\r\n    <p>Break length</p>\r\n    <button ng-click="decrease()">-</button>\r\n    <p ng-bind="length"></p>\r\n    <button ng-click="increase()">+</button>\r\n    <div>\r\n      <p>Break</p>\r\n      <p ng-bind="minutes"></p>\r\n      <p ng-bind="seconds"></p>\r\n    </div>\r\n  </div>\r\n  <div ng-controller="TimerSession">\r\n    <div>\r\n      <p>Session length</p>\r\n      <button ng-click="decrease()">-</button>\r\n      <p ng-bind="length"></p>\r\n      <button ng-click="increase()">+</button>\r\n    </div>\r\n    <div ng-click="toggle()">\r\n      <p>Session</p>\r\n      <p ng-bind="minutes"></p>\r\n      <p ng-bind="seconds"></p>\r\n    </div>\r\n  </div>\r\n    \x3c!-- <div>\r\n      <input type="radio" value="Yes" ng-model="answear">Yes</input>\r\n      <input type="radio" value="No" ng-model="answear">No</input>\r\n    </div>\r\n    <form action="" ng-submit="addTask()" ng-show="answear">\r\n      <input type="text" ng-model="taskDescription">\r\n      <input type="submit">\r\n    </form>\r\n  </div>\r\n  <div ng-controller="timerTasks">\r\n    <ul>\r\n      <li ng-repeat="task in tasks" class="task-{{task.done}}">{{task.description}}</li>\r\n    </ul>\r\n  </div> --\x3e\r\n</body>\r\n</html>\r\n'},91:function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}();n(136);var r=n(338),u=function(e){return e&&e.__esModule?e:{default:e}}(r),o=new WeakMap,a=function(e){return o.set(e,new u.default),function(){return o.get(e)}},c=function(){function e(t){var n=this;s(this,e);var i=a(this)();if(this._this=i,t){if(i.steps.forEach(function(e){var n=t.steps[e];n&&(n.value&&n.units&&"number"==typeof n.value&&!Number.isNaN(n.value)&&n.units in i.units?"milliseconds"!==n.units?i[e]=i.convertToMilliseconds(n):i[e]=n.value:console.warn("Timer has been initialised with different values than those specified in constructor's call."),n=null)}),t.direction&&(i.direction=t.direction),!t.countUnits||!t.countUnits.every(function(e){return i.unitsOrder.indexOf(e)>=0}))throw TypeError("Timer has not been initialised because of incorrect argument countUnits");var r=i.unitsOrder;i.countUnits=t.countUnits.sort(function(e,t){return r.indexOf(e)-r.indexOf(t)}),r=null}i.countUnits.forEach(function(e,t,s){n["time_"+e]=function(){var t=void 0;return t="up"===i.direction?i.ellapsed:i.session-i.ellapsed,i[e](t)},n["session_"+e]=function(){return i[e](i.session)}}),this.events=function(){var e={currentTime:[],sessionChanged:[],sessionStopped:[],sessionPaused:[]};return{subscribe:function(t,n,s){var i=e[n].push({listener:t,method:s})-1;return{remove:function(){return delete e[n][i]}}},publish:function(t){e[t].forEach(function(e){e.listener[e.method]()})}}}(),"yes"===i.smooth&&i.smoothInterval()}return i(e,[{key:"changeStep",value:function(e){var t=o.get(this),n=e.step,s=0,i=void 0,r=void 0,u=void 0;(function(){if(t.steps.indexOf(n)>=0&&e&&e.value&&e.units){i=e.value;var s=e.sign;r=void 0===s?1:s;var o=e.increment;return u=void 0===o?0:o,"milliseconds"!==e.units&&(i=t.convertToMilliseconds(e)),r&&1===Math.abs(r)||(r=1),(!u||0!==u&&1!==u)&&(u=0),i*=r,!0}})()&&(s=u?t[n]+i:i,s=s>0?s:0,"session"===n&&(t.isCounting&&t.ellapsed,t[n]=s,this.events.publish("sessionChanged"),this.events.publish("currentTime"))),t=null}},{key:"start",value:function(){var e=this,t=o.get(this),n=function(){t.now=Date.now(),e.events.publish("currentTime"),t.ellapsed>=t.session&&(t=null,e.stop())};return t.isCounting?(t=null,!1):(t.start=Date.now(),t.isCounting=!0,t.countDown=setInterval(function(){return n()},t.interval),!0)}},{key:"stop",value:function(){var e=o.get(this);if(e.isCounting){var t=e.countDown;return t&&clearInterval(t),e.countDown=null,e.now=e.start+e.session,e.isStopped=!0,e=null,this.events.publish("sessionStopped"),!0}return e=null,!1}},{key:"pause",value:function(){var e=o.get(this);if(e.isCounting){var t=e.countDown;return t&&clearInterval(t),e.isPaused=!0,e=null,this.events.publish("sessionPaused"),!0}return e=null,!1}},{key:"reset",value:function(){var e=o.get(this);this.stop(),e.start=Date.now(),e.now=Date.now(),e=null,this.events.publish("currentTime")}},{key:"toggle",value:function(){this[arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pause"]()||this.start()}},{key:"status",get:function(){return o.get(this).status}},{key:"session",get:function(){return o.get(this).session}}]),e}();t.default=c}},[127]);