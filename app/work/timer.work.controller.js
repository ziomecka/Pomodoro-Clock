/* jshint esversion: 6 */
export default ($scope, $rootScope, WorkService) => {
  $scope.timer = {
    name: "work",
    minutes: 0,
    seconds: 0,
    length: 0,
    increase: WorkService.increase,
    decrease: WorkService.decrease,
    start: WorkService.start,
    toggle: WorkService.toggle
  };
  WorkService.listen($scope, "break");
  /* Display the work timer's time. */
  $rootScope.clock = $scope.timer;
};
