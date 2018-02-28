/* jshint esversion: 6 */
export default ($scope, $timeout, WorkService, BreakService) => {
  const me = $scope;
  const timeout = 2000;

  me.$on("break_stopped", () => {
    me.clock = WorkService.timer;
    $timeout(WorkService.start(), timeout);
  });

  me.$on("work_stopped", () => {
    me.clock = BreakService.timer;
    $timeout(BreakService.start(), timeout);
  });
};
