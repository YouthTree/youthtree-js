YouthTree.withNS 'Flickr', (ns) ->

  ns.apiBaseURL = 'http://api.flickr.com/services/rest/'

  ns.defaultOptions =
    format: 'json'
    api_key: ''

  ns.defaultErrorHandler = (response) ->
    if window.console?
      ns.log "Error: #{response.code} - #{response.message}"

  ns.apiCall = (name, options, callback, errback) ->
    return unless ns.apiKey?
    errback?= ns.defaultErrorHandler
    # Do something here,
    apiOptions = method: name
    $.extend apiOptions, options, ns.defaultOptions
    $.ajax
      url:      ns.apiBaseURL
      dataType: 'jsonp',
      jsonp:    'jsoncallback'
      data:     apiOptions
      success:  (data) ->
        if data.stat is 'ok'
          callback data
        else
          errback data

  ns.setup = ->
    # Get the current api key
    ns.apiKey = $.metaAttr 'flickr-api-key'
    # Set it for requests.
    ns.defaultOptions.api_key = ns.apiKey
    