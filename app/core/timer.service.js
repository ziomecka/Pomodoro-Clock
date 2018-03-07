/* jshint esversion: 6 */
import MyTimer from "../../../mytimer/app/mytimer.class";

export default function($rootScope, options) {
  let timer = new MyTimer(options.timer);
  let listener = null;
  let unsubscribe = {};

  timer.event.subscribe(this, "sessionChanged", "sessionChanged");

  let getTime = () => {
    this.timer.minutes = timer.currentTime_minutes();
    this.timer.seconds = timer.currentTime_seconds();
    this.timer.percentage = timer.ellapsed / timer.session;
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

  this.toggle = () => {
    if (timer.status === "stopped")  {
      unsubscribe.currentTime = timer.event.subscribe(this, "currentTime", "currentTime");
      unsubscribe.stopped = timer.event.subscribe(this, "sessionStopped", "sessionStopped");
    }
    timer.toggle("pause");
  };

  this.currentTime = () => getTime();

  this.sessionChanged = () => {
    this.timer.length = timer.sessionLength_minutes();
    getTime();
  };

  this.sessionStopped = () => {
    unsubscribe.currentTime();
    unsubscribe.stopped();
    delete unsubscribe.start;
    delete unsubscribe.stop;
    listener.$emit(`${this.timer.name}_stopped`);
  };

  this.listen = function($scope, timer) {
    this.timer = $scope.timer;
    listener = $scope;
    /* Get actual values. */
    this.sessionChanged();
    this.currentTime();
  };
}
