YouthTree.withNS('Flickr.Gallery', function(ns) {
  var InnerFlickrGallery, flickr;
  flickr = YouthTree.Flickr;
  ns.navigationClass = 'flickr-gallery-navigation';
  ns.containerClass = 'flickr-gallery';
  InnerFlickrGallery = function(_arg, _arg2) {
    this.user = _arg2;
    this.selector = _arg;
    $(this.selector).addClass(ns.containerClass);
    this.feed = this.buildFeed();
    return this;
  };
  InnerFlickrGallery.prototype.buildFeed = function() {
    return "" + (ns.apiBaseURL) + "?id=" + (this.user) + "&format=json&jsoncallback=?";
  };
  InnerFlickrGallery.prototype.fetchPhotoset = function(photosetId) {
    var params;
    params = {
      photoset_id: photosetId,
      extras: 'url_sq,url_m'
    };
    return flickr.apiCall('flickr.photosets.getPhotos', params, function(response) {
      return ns.process(response.photoset.photo);
    });
  };
  InnerFlickrGallery.prototype.fetchUserTagged = function(user, tag) {
    var params;
    params = {
      tags: tag,
      user_id: user,
      sort: 'interestingness-desc',
      content_type: '1',
      media: 'photos'
    };
    return flickr.apiCall('flickr.photos.search', params, function(response) {
      return ns.process(response.photos.photo);
    });
  };
  InnerFlickrGallery.prototype.process = function(photos) {
    var container;
    container = $(selector);
    $.each(photos, function(i, item) {
      var a, img;
      img = $('<img/>').attr('src', item.url_sq);
      a = $('<a></a>').attr('href', item.url_m).append(img);
      return container.append($('<li></li>').append(a.append(img)));
    });
    return self.cyclify();
  };
  InnerFlickrGallery.prototype.cyclify = function(container) {
    container.before($('<div></div>').addClass(ns.containerClass));
    return container.cycle({
      fx: 'zoom',
      speedIn: 2500,
      speedOut: 500,
      timeOut: 300,
      pager: ns.navigationID
    });
  };
  ns.fromPhotoset = function(selector, photoset) {
    var flickr_gallery;
    flickr_gallery = new InnerFlickrGallery(selector);
    flickr_gallery.fetchPhotoset(photoset);
    return flickr_gallery;
  };
  return (ns.fromUserTag = function(selector, user, tag) {
    var flickr_gallery;
    flickr_gallery = new InnerFlickrGallery(selector);
    flickr_gallery.fetchUserTagged(user, tag);
    return flickr_gallery;
  });
});