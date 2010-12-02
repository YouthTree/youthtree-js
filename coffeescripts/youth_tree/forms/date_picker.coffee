YouthTree.withNS 'Forms.DatePicker', (ns) ->

  ns.timeFormat = 'hh:mm TT'
  ns.dateFormat = 'dd MM yy'

  ns.makeDatePickers = ->
    return unless $.fn.datepicker?
    $('input.ui-date-picker').datepicker dateFormat: ns.dateFormat
  
  ns.makeDateTimePickers = ->
    return unless $.fn.datetimepicker?
    $('input.ui-datetime-picker').datetimepicker
      dateFormat: ns.dateFormat
      timeFormat: ns.timeFormat
      ampm: true

  ns.setup = ->
    $(document).ready ->
      ns.makeDatePickers()
      ns.makeDateTimePickers()