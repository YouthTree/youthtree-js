YouthTree.withNS 'Disqus', (ns) ->
  
  ns.collectionSelector = '#posts'
  
  ns.currentIdentifier = ->
    $.metaAttr "disqus-identifier"
  
  ns.currentSite = ->
    $.metaAttr "disqus-site"
  
  ns.isDebug = ->
    $.metaAttr("disqus-developer") is "true"
  
  ns.configureDisqus = ->
    window.disqus_identifier = ns.currentIdentifier()
    window.disqus_developer =  1 if ns.isDebug()
  
  ns.addScripts = ->
    ns.configureDisqus()
    script = $ "<script />", type: "text/javascript", async: true
    if $(ns.collectionSelector).size() > 0
      script.attr "src", "http://disqus.com/forums/#{ns.currentSite()}/count.js"
    else
      script.attr "src", "http://#{ns.currentSite()}.disqus.com/embed.js"
    script.appendTo $ "head"
    
  ns.setup = -> ns.addScripts()