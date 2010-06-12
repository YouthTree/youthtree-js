YouthTree.withNS('Gallery', function(ns) {
  var InnerGallery;
  InnerGallery = function(selector) {
    this.selector = selector;
    this.items = $(this.selector);
    this.urls = this.items.map(function() {
      return this.href;
    }).toArray();
    return this;
  };
  InnerGallery.prototype.bindEvents = function() {
    return this.items.click(function() {
      showFor(this);
      return false;
    });
  };
  InnerGallery.prototype.showFor = function(element) {
    var href, index;
    href = element.href;
    index = this.urls.indexOf(href);
    if (index >= 0) {
      return showImages(this.urls.slice(index).concat(this.urls.slice(0, index)));
    }
  };
  InnerGallery.prototype.showImages = function(images) {
    return $.facybox({
      images: images
    });
  };

  ns.galleries = {};
  ns.create = function(name, selector) {
    var gallery;
    gallery = new InnerGallery(selector);
    ns.galleries[name] = gallery;
    return gallery;
  };
  ns.get = function(name) {
    return ns.galleries[name];
  };
  return ns.get;
});