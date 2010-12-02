YouthTree.withNS('Forms.DatePicker', function(ns) {
  ns.timeFormat = 'hh:mm TT';
  ns.dateFormat = 'dd MM yy';
  ns.makeDatePickers = function() {
    var _ref;
    if (!(typeof (_ref = $.fn.datepicker) !== "undefined" && _ref !== null)) {
      return null;
    }
    return $('input.ui-date-picker').datepicker({
      dateFormat: ns.dateFormat
    });
  };
  ns.makeDateTimePickers = function() {
    var _ref;
    if (!(typeof (_ref = $.fn.datetimepicker) !== "undefined" && _ref !== null)) {
      return null;
    }
    return $('input.ui-date-picker').datetimepicker({
      dateFormat: ns.dateFormat,
      timeFormat: ns.timeFormat,
      ampm: true
    });
  };
  return (ns.setup = function() {
    return $(document).ready(function() {
      ns.makeDatePickers();
      return ns.makeDateTimePickers();
    });
  });
});