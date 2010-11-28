YouthTree.withNS('Flickr', function(ns) {
  ns.apiBaseURL = 'http://api.flickr.com/services/rest/';
  ns.defaultOptions = {
    jsoncallback: '?',
    format: 'json',
    apiKey: ''
  };
  ns.defaultErrorHandler = function(response) {
    var _ref;
    return (typeof (_ref = window.console) !== "undefined" && _ref !== null) ? ns.log("Error: " + (response.code) + " - " + (response.message)) : null;
  };
  ns.apiCall = function(name, options, callback, errback) {
    var _ref, apiOptions;
    if (!(typeof (_ref = ns.apiKey) !== "undefined" && _ref !== null)) {
      return null;
    }
    errback = (typeof errback !== "undefined" && errback !== null) ? errback : ns.defaultErrorHandler;
    apiOptions = {
      method: name
    };
    $.extend(apiOptions, options, ns.defaultOptions);
    return $.getJSON(ns.apiBaseURL, apiOptions, function(data) {
      return data.stat === 'ok' ? callback(data) : errback(data);
    });
  };
  return (ns.setup = function() {
    ns.apiKey = $.metaAttr('flickr-api-key');
    return (ns.defaultOptions.api_key = ns.apiKey);
  });
});