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
  InnerFlickrGallery.prototype.insert = function() {
    var feed, selector, that;
    selector = this.selector;
    that = this;
    feed = $.ajax({
      url: this.feed,
      dataType: 'json',
      success: function(data) {
        var items;
        items = $.each(data.items, function(i, item) {
          var a, img, li;
          li = $('<li></li>');
          img = $('<img/>').attr('src', item.media.m);
          a = $('<a></a>').attr('href', item.link);
          return $(selector).append(li.append(a.append(img)));
        });
        return that.cyclify();
      }
    });
    return feed;
  };
  InnerFlickrGallery.prototype.cyclify = function() {
    var nav, nav_id, options;
    nav_id = 'flickr_gallery_navigation';
    nav = $('<div></div>').attr('id', nav_id);
    $(this.selector).before(nav);
    options = {
      fx: 'zoom',
      speedIn: 2500,
      speedOut: 500,
      timeOut: 300,
      pager: nav_id
    };
    return $(this.selector).cycle(options);
  };

  ns.setup = function(user) {
    this.user = user;
    return this.user;
  };
  ns.create = function(selector) {
    var flickr_gallery;
    flickr_gallery = new InnerFlickrGallery(selector, this.user);
    return flickr_gallery.insert();
  };
  return ns.create;
});