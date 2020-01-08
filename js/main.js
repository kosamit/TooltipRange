$(document).ready(function() {
  tooltipRange.options({
    selecter: "#tooltip-range",
    tooltip: true,
    value: 43,
    min: 20,
    step: 1
  });

  tooltipRange.options({
    selecter: "#tooltip-range2",
    tooltip: true,
    value: 60,
    min: 20,
    max: 70,
    step: 1
  });
});