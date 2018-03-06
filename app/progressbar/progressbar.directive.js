/* jshint esversion: 6 */
/** !! for disabling other configured loaders */
const colorAccent = require("!!sass-variable-loader?preserveVariableNames!../css/base/_variables.sass")["t-color-clock"];
const colorSecondary = require("!!sass-variable-loader?preserveVariableNames!../css/base/_variables.sass")["t-color-fill"];

export default function () {
  function link(scope, element, attrs) {
    scope.$watch(attrs.progressbar, function (newValue) {
      element.css({
        "background-image": `linear-gradient(to top, ${colorSecondary} ${newValue  * 100}%, ${colorAccent} ${newValue  * 100}%)`
      });
    });
  }
  return {
    link: link
  };
}
