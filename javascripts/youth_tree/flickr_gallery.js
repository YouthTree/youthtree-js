YouthTree.withNS('FlickrGallery', function(ns) {
  var InnerFlickerGallery;
  InnerFlickerGallery = function(selector, user) {
    this.selector = selector;
    this.item = $(this.selector)[0];
    this.feed = self.buildFeed;
    this.user = user;
    return this;
  };
  InnerFlickerGallery.prototype.buildFeed = function() {
    var domain, feed, method, path, protocol;
    protocol = 'http://';
    domain = 'api.flickr.com';
    path = '/services/feeds/';
    method = 'photos_public.gne';
    feed = protocol + domain + path + method + '?id=' + this.user + '&format=json&jsoncallback=?';
    return feed;
  };
  InnerFlickerGallery.prototype.buildElements = function() {
    return $.getJSON(this.feed, function(data) {
      return $.each(data.items, function(i, items) {
        return $('<img/>').attr('src', item.media.m).wrap('<a href="' + item.link + '"/></a>').appendTo(this.selector);
      });
    });
  };

  ns.setup = function(user) {
    this.user = user;
    return this.user;
  };
  ns.create = function(selector) {
    var flickr_gallery;
    flickr_gallery = new FlickrGallery(selector, this.user, this.api_key);
    return flickr_gallery;
  };
  return ns.create;
});