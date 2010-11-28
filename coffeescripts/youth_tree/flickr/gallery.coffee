YouthTree.withNS 'Flickr.Gallery', (ns) ->
  
  flickr = YouthTree.Flickr
  
  ns.navigationClass = 'flickr-gallery-navigation'
  ns.containerClass  = 'flickr-gallery'
  
  class InnerFlickrGallery
    
    constructor: (@selector, @user) ->
      $(@selector).addClass ns.containerClass
      @feed = @buildFeed()
      
    buildFeed: -> "#{ns.apiBaseURL}?id=#{@user}&format=json&jsoncallback=?"
      
    fetchPhotoset: (photosetId) ->
      params = 
        photoset_id: photosetId
        extras:      'url_sq,url_m'
      flickr.apiCall 'flickr.photosets.getPhotos', params, (response) ->
        ns.process response.photoset.photo
    
    fetchUserTagged: (user, tag) ->
      params =
        tags: tag
        user_id: user
        sort: 'interestingness-desc'
        content_type: '1'
        media: 'photos'
      flickr.apiCall 'flickr.photos.search', params, (response) ->
        ns.process response.photos.photo
      
    process: (photos) ->
      container = $ selector
      $.each photos, (i, item) ->
        img = $('<img/>').attr('src', item.url_sq)
        a = $('<a></a>').attr('href', item.url_m).append img
        container.append $('<li></li>').append(a.append(img))
      self.cyclify()
          
    
    cyclify: (container) ->
      container.before $('<div></div>').addClass(ns.containerClass)
      container.cycle
        fx:      'zoom',
        speedIn:  2500, 
        speedOut: 500,
        timeOut:  300,
        pager:    ns.navigationID
    
  ns.fromPhotoset = (selector, photoset) ->
    flickr_gallery = new InnerFlickrGallery selector
    flickr_gallery.fetchPhotoset photoset
    flickr_gallery
    
  ns.fromUserTag = (selector, user, tag) ->
    flickr_gallery = new InnerFlickrGallery selector
    flickr_gallery.fetchUserTagged user, tag
    flickr_gallery