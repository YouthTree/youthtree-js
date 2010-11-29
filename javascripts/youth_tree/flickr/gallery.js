var __bind = function(func, context) {
    return function(){ return func.apply(context, arguments); };
  };
YouthTree.withNS('Flickr.Gallery', function(ns) {
  var InnerFlickrGallery, flickr;
  flickr = YouthTree.Flickr;
  ns.navigationClass = 'flickr-gallery-navigation';
  ns.containerClass = 'flickr-gallery';
  InnerFlickrGallery = function(_arg, _arg2) {
    this.container = _arg2;
    this.name = _arg;
    this.container.addClass(ns.containerClass);
    return this;
  };
  InnerFlickrGallery.prototype.fetchPhotoset = function(photosetId, extraParams) {
    var params;
    params = {
      photoset_id: photosetId,
      extras: 'url_sq,url_m'
    };
    if (typeof extraParams !== "undefined" && extraParams !== null) {
      $.extend(params, extraParams);
    }
    return flickr.apiCall('flickr.photosets.getPhotos', params, __bind(function(response) {
      return this.process(response.photoset.photo);
    }, this));
  };
  InnerFlickrGallery.prototype.fetchUserTagged = function(user, tag, extraParams) {
    var params;
    params = {
      tags: tag,
      user_id: user,
      sort: 'interestingness-desc',
      content_type: '1',
      media: 'photos'
    };
    if (typeof extraParams !== "undefined" && extraParams !== null) {
      $.extend(params, extraParams);
    }
    return flickr.apiCall('flickr.photos.search', params, __bind(function(response) {
      return this.process(response.photos.photo);
    }, this));
  };
  InnerFlickrGallery.prototype.process = function(photos) {
    this.container.empty();
    $.each(photos, __bind(function(i, item) {
      var img, link;
      img = $('<img/>').attr('src', item.url_sq);
      link = $('<a></a>').attr('href', item.url_m).append(img);
      return this.container.append(link);
    }, this));
    return YouthTree.Gallery.create(this.name, this.container.find('a'));
  };
  ns.fromPhotoset = function(name, container, photoset, extraParams) {
    var flickr_gallery;
    flickr_gallery = new InnerFlickrGallery(name, container);
    flickr_gallery.fetchPhotoset(photoset, extraParams);
    return flickr_gallery;
  };
  return (ns.fromUserTag = function(name, container, user, tag, extraParams) {
    var flickr_gallery;
    flickr_gallery = new InnerFlickrGallery(name, container);
    flickr_gallery.fetchUserTagged(user, tag, extraParams);
    return flickr_gallery;
  });
});