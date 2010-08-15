YouthTree.withNS('FlickrGallery', function(ns) {
  var InnerFlickrGallery;
  InnerFlickrGallery = function(selector, user) {
    this.selector = selector;
    this.item = $(this.selector)[0];
    this.user = user;
    this.feed = this.buildFeed();
    return this;
  };
  InnerFlickrGallery.prototype.buildFeed = function() {
    var domain, feed, method, path, protocol;
    protocol = 'http://';
    domain = 'api.flickr.com';
    path = '/services/feeds/';
    method = 'photos_public.gne';
    feed = protocol + domain + path + method + '?id=' + this.user + '&format=json&jsoncallback=?';
    return feed;
  };
  InnerFlickrGallery.prototype.buildElements = function() {
    var feed, selector;
    selector = this.selector;
    feed = $.getJSON(this.feed, function(data) {
      var items;
      items = $.each(data.items, function(i, item) {
        var a, img, li;
        li = $('<li></li>');
        img = $('<img/>').attr('src', item.media.m);
        a = $('<a></a>').attr('href', item.link);
        return $(selector).append(li.append(a.append(img)));
      });
      return items;
    });
    return feed;
  };

  ns.setup = function(user) {
    this.user = user;
    return this.user;
  };
  ns.create = function(selector) {
    var flickr_gallery;
    flickr_gallery = new InnerFlickrGallery(selector, this.user, this.api_key);
    flickr_gallery.buildElements();
    return console.log($(flickr_gallery.selector));
  };
  return ns.create;
});