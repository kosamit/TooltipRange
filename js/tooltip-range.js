/*!
 * tooltip-range.js
 *
 * Copyright (c) 2020 kosamit
 * Released under the MIT license.
 * see https://opensource.org/licenses/MIT
 *
 */
var tooltipRange = {
  onChange(selecter, min, max) {
    $(selecter).each(function(){
      $(this).on("input change", function(){
        if ($(this).val() < min) {
          $(this).val(min);
        }
        if ($(this).val() > max) {
          $(this).val(max);
        }
        var tooltip = ($(this).parent()).find('.tooltip')[0]
        var tracker = $($(this).parent()).find('.tooltip-range-tracker-thumb')[0]
        $(tooltip).css('left',$(this).val() + '%');
        $(tooltip).text($(this).val() + '%');
        $(tracker).css('width', $(this).val() + '%');
      })
    })
  },
  options (inputs) {
    var options = inputs;
    var inputRanges = $(options.selecter);
    var min = options.min ? options.min : 0
    var value = options.value ? options.value : min
    var max = options.max ? options.max : 100;
    inputRanges.attr({
      min: 0,
      max: 100,
      value: value,
      step: (options.step ? options.step : 1)
    });
    inputRanges.parent().addClass('tooltip-range');
    inputRanges.parent().addClass('tooltip-range-custom');
    var tracker = $('<div class="tooltip-range-tracker-thumb"></div>')
    $(tracker).css('width', value + '%');
    inputRanges.parent().append('<div class="tooltip-range-tracker-bg"></div>');
    inputRanges.parent().append(tracker);
    if (options.tooltip === true) {
      var tooltip = $('<div class="tooltip">'+ value +'%</div>')
      tooltip.css('left', value + '%');
      inputRanges.parent().append(tooltip);
    }
    this.onChange(options.selecter, min, max)
  }
}
