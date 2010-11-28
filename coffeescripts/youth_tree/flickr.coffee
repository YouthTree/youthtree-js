YouthTree.withNS 'Flickr', (ns) ->

  ns.apiBaseURL = 'http://api.flickr.com/services/rest/'

  ns.defaultOptions =
    jsoncallback: '?'
    format: 'json'
    apiKey: ''

  ns.defaultErrorHandler = (response) ->
    if window.console?
      ns.log "Error: #{response.code} - #{response.message}"

  ns.apiCall = (name, options, callback, errback) ->
    return unless ns.apiKey?
    errback?= ns.defaultErrorHandler
    # Do something here,
    apiOptions = method: name
    $.extend apiOptions, options, ns.defaultOptions
    $.getJSON ns.apiBaseURL, apiOptions, (data) ->
      if data.stat is 'ok'
        callback data
      else
        errback data

  ns.setup = ->
    # Get the current api key
    ns.apiKey = $.metaAttr 'flickr-api-key'
    # Set it for requests.
    ns.defaultOptions.api_key = ns.apiKey
    