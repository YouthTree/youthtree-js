YouthTree.withNS 'Gallery', (ns) ->

  class InnerGallery

    constructor: (selector) ->
      @selector = selector
      @items    = $ @selector
      @urls     = @items.map(-> @href).toArray()
      @bindEvents()

    bindEvents: ->
      self = @
      @items.click (e) ->
        e.preventDefault()
        self.showFor @
        false

    showFor: (element) ->
      href  = element.href
      index = @urls.indexOf href
      if index >= 0
        @showImages @urls.slice(index).concat(@urls.slice(0, index))

    showImages: (images) ->
      $.facybox images: images

  ns.galleries = {}

  ns.create = (name, selector) ->
    gallery = new InnerGallery selector
    ns.galleries[name] = gallery
    gallery

  ns.get = (name) ->
    ns.galleries[name]


