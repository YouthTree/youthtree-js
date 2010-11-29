YouthTree.withNS 'Flickr.Gallery', (ns) ->
  
  flickr = YouthTree.Flickr
  
  ns.navigationClass = 'flickr-gallery-navigation'
  ns.containerClass  = 'flickr-gallery'
  
  class InnerFlickrGallery
    
    constructor: (@name, @container) ->
      @container.addClass ns.containerClass
      
    fetchPhotoset: (photosetId, extraParams) ->
      params = 
        photoset_id: photosetId
        extras:      'url_sq,url_m'
      $.extend params, extraParams if extraParams?
      flickr.apiCall 'flickr.photosets.getPhotos', params, (response) =>
        @process response.photoset.photo
    
    fetchUserTagged: (user, tag, extraParams) ->
      params =
        tags: tag
        user_id: user
        sort: 'interestingness-desc'
        content_type: '1'
        media: 'photos'
      $.extend params, extraParams if extraParams?
      flickr.apiCall 'flickr.photos.search', params, (response) =>
        @process response.photos.photo
      
    process: (photos) ->
      @container.empty()
      $.each photos, (i, item) =>
        img = $('<img/>').attr('src', item.url_sq)
        link = $('<a></a>').attr('href', item.url_m).append img
        @container.append link
      YouthTree.Gallery.create @name, @container.find('a')
    
  ns.fromPhotoset = (name, container, photoset, extraParams) ->
    flickr_gallery = new InnerFlickrGallery name, container
    flickr_gallery.fetchPhotoset photoset, extraParams
    flickr_gallery
    
  ns.fromUserTag = (name, container, user, tag, extraParams) ->
    flickr_gallery = new InnerFlickrGallery name, container
    flickr_gallery.fetchUserTagged user, tag, extraParams
    flickr_gallery