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
      
    insert: ->
      selector: @selector
      feed: $.getJSON @feed, (data) ->
        items: $.each data.items, (i,item) ->
          li:     $('<li></li>')
          img:    $('<img/>').attr('src', item.media.m)
          a:      $('<a></a>').attr('href', item.link)
          
          $(selector).append(li.append(a.append(img)))
    
    cyclify: ->
      nav_id: 'flickr_gallery_navigation'
      nav:    $('<div></div>').attr('id', nav_id)
      
      @selector.before(nav)
      
      options = {
        fx:      'zoom',
        speedIn:  2500, 
        speedOut: 500,
        timeOut:  300,
        pager:    nav_id
      }
      
      @selector.cycle options
        
  ns.setup: (user) ->
    @user:        user
    
  ns.create: (selector) ->
    flickr_gallery: new InnerFlickrGallery selector, @user, @api_key
    flickr_gallery.insert()
    flickr_gallery.cyclify()