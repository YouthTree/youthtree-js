YouthTree.withNS('Forms.ValueCloner', function(ns) {
  ns.cloneValue = function(from, to) {
    if (from.length && to.length) {
      return to.val(from.val());
    }
  };
  return (ns.setup = function() {
    return $('a.clone-form-value').each(function() {
      var current, from_selector, to_selector;
      current = $(this);
      from_selector = current.dataAttr('clone-from');
      to_selector = current.dataAttr('clone-to');
      return current.click(function() {
        if ((typeof from_selector !== "undefined" && from_selector !== null) && (typeof to_selector !== "undefined" && to_selector !== null)) {
          ns.cloneValue($(from_selector), $(to_selector));
        }
        return false;
      });
    });
  });
});