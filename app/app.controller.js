/* jshint esversion: 6 */
/**
 * @controller app.controller
 * @name app.controller
 * @description app controller's function
 */
export default ($scope, $timeout, WorkService, BreakService) => {
  const me = $scope;
  const timeout = 1000;

  me.$on("break_stopped", () => {
    me.clock = WorkService.timer;
    $timeout(WorkService.toggle(), timeout);
  });

  me.$on("work_stopped", () => {
    me.clock = BreakService.timer;
    $timeout(BreakService.toggle(), timeout);
  });
};
