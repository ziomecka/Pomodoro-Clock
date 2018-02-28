/* jshint esversion: 6 */
import MyTimer from "../../../mytimer/app/mytimer.class";

export default function($rootScope, options) {
  let timer = new MyTimer(options.timer);
  let listener = null;

  timer.event.subscribe(this, "currentTime", "currentTime");
  timer.event.subscribe(this, "sessionChanged", "sessionChanged");
  timer.event.subscribe(this, "sessionStopped", "sessionStopped");

  let getTime = () => {
    this.timer.minutes = timer.currentTime_minutes();
    this.timer.seconds = timer.currentTime_seconds();
    if (!$rootScope.$$phase) $rootScope.$apply();
  };

  this.increase = function() {
    timer.changeStep(options.increase);
    getTime();
  };

  this.decrease = function() {
    timer.changeStep(options.decrease);
    getTime();
  };

  this.start = () => timer.start();
  this.toggle = () => timer.toggle("pause");

  this.currentTime = () => getTime();
  this.sessionChanged = () => this.timer.length = timer.sessionLength_minutes();
  this.sessionStopped = () => listener.$emit(`${this.timer.name}_stopped`);

  this.listen = function($scope, timer) {
    this.timer = $scope.timer;
    listener = $scope;
    /* Get actual values. */
    this.sessionChanged();
    this.currentTime();
  };
}
