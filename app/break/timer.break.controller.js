/* jshint esversion: 6 */
/**
 * @controller timer.break.controller
 * @name timer.break.controller.BreakController
 * @param {service} BreakService
 * @description break controller's function
 */
export default ($scope, BreakService) => {
  $scope.timer = {
    name: "break",
    minutes: 0,
    seconds: 0,
    length: 0,
    percentage: 0,
    increase: BreakService.increase,
    decrease: BreakService.decrease,
    start: BreakService.start,
    toggle: BreakService.toggle
  };
  BreakService.listen($scope, "break");
};
