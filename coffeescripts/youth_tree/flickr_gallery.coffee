YouthTree.withNS 'FlickrGallery', (ns) ->
  
  class InnerFlickrGallery
    
    constructor: (selector, user) ->
      @selector:  selector
      @item:      $(@selector)[0]
      @user:      user
      @feed:      @buildFeed()

      
    buildFeed: ->
      protocol:   'http://'
      domain:     'api.flickr.com'
      path:       '/services/feeds/'
      method:     'photos_public.gne'
      feed:       protocol + domain + path + method + '?id=' + @user + '&format=json&jsoncallback=?'
      
    buildElements: ->
      selector: @selector
      feed: $.getJSON @feed, (data) ->
        items: $.each data.items, (i,item) ->
          li:   $('<li></li>')
          img:  $('<img/>').attr('src', item.media.m)
          a:    $('<a></a>').attr('href', item.link)
          
          $(selector).append(img.wrap(a.wrap(li)))
      
  ns.setup: (user) ->
    @user:        user
    
  ns.create: (selector) ->
    flickr_gallery: new InnerFlickrGallery selector, @user, @api_key
    flickr_gallery.buildElements()
    console.log($(flickr_gallery.selector))
    
  # FlickrGallery.new('34474603@N02')
  