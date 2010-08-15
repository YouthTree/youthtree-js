YouthTree.withNS 'FlickrGallery', (ns) ->
  
  class InnerFlickerGallery
    
    constructor: (selector, user) ->
      @selector:  selector
      @item:      $(@selector)[0]
      @feed:      self.buildFeed
      @user:      user
      
    buildFeed: ->
      protocol:   'http://'
      domain:     'api.flickr.com'
      path:       '/services/feeds/'
      method:     'photos_public.gne'
      feed:       protocol + domain + path + method + '?id=' + @user + '&format=json&jsoncallback=?'
      
    buildElements: ->
      $.getJSON @feed, (data) ->
        $.each data.items, (i,items) ->
          $('<img/>')
            .attr('src', item.media.m)
            .wrap('<a href="' + item.link + '"/></a>')
            .appendTo(@selector)
      
  ns.setup: (user) ->
    @user:        user
    
  ns.create: (selector) ->
    flickr_gallery: new FlickrGallery selector, @user, @api_key
    
  # FlickrGallery.new('34474603@N02')
  