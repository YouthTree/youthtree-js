YouthTree.withNS 'Forms.ValueCloner', (ns) ->

  ns.cloneValue = (from, to) ->
    to.val from.val() if from.length and to.length
    
  ns.setup = ->
    $('a.clone-form-value').each ->
      current = $ this
      from_selector = current.dataAttr 'clone-from'
      to_selector = current.dataAttr 'clone-to'
      current.click ->
        if from_selector? and to_selector?
          ns.cloneValue $(from_selector), $(to_selector)
        false