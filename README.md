# YouthTree JS #

A set of tools for common javascript functionality shared across YouthTree applications.

Developed primarily for [TEDxPerth](http://tedxperth.org/) and [Big Help Mob](http://bighelpmob.org/)

Relies on [Shuriken](http://github.com/Sutto/shuriken/).

## Currently provided tools

YouthTree JS provides a small number of different pieces of code for a variety of common tasks.

Out of the box, the main namespaces are:

### YouthTree.Forms.CKEditor

A simple wrapper around CKEditor that unobtrusively sets up the jQuery adapter on fields
with a class of `.ckeditor` on the container. Also, the width is set to deal with the
common [bhm-admin](http://github.com/YouthTree/bhm-admin) sides images.

### YouthTree.Forms.ConvertableEditor

Even more magic for YouthTree.CKEditor. Let's you mark a fieldset wrapper with `.convertable` and it'll
automatically find the select and textarea, showing when the select has a format of "raw". Designed
to work out of the box with how most [almost-happy](http://github.com/Sutto/almost-happy) editors work.

### YouthTree.Forms.ValueCloner

Unobtrusive support for a simple way to clone the value between two different fields.

Ideally useful for things with a start and end time where you want to make it possible
to provide a button to clone the value into the second.

### YouthTree.Forms.DatePicker

Simple support for http://trentrichardson.com/examples/timepicker/ being unobtrusively
added to a given form.

Also, will hook up jQuery UI datepickers.

### YouthTree.Disqus

Unobtrusively adds the Disqus html based on the presence of meta tags in the page with the names:

* `disqus-identifier`
* `disqus-site`
* `disqus-developer`

Aka, super simple Disqus commenting for pretty much any website.

### YouthTree.Flickr

Simple, unobtrusive wrapper around the flickr api for use with the Flickr Gallery.

### YouthTree.Flickr.Gallery

Gives the ability to pull in simple HTML from given flickr tags / photo set ids.

### YouthTree.Gallery

Generic facy-boxed autosetup and gallery features based on simple markup.

### YouthTree.Util

A set of common JS helper methods similar to their Rails counterparts,
exposed via JS for use in arbitrary rails apps frontends.

## Contributing ##

We encourage all community contributions. Keeping this in mind, please follow these general guidelines when contributing:

* Fork the project
* Create a topic branch for what you’re working on (git checkout -b awesome_feature)
* Commit away, push that up (git push your\_remote awesome\_feature)
* Create a new GitHub Issue with the commit, asking for review. Alternatively, send a pull request with details of what you added.
* Once it’s accepted, if you want access to the core repository feel free to ask! Otherwise, you can continue to hack away in your own fork.

Other than that, our guidelines very closely match the GemCutter guidelines [here](http://wiki.github.com/qrush/gemcutter/contribution-guidelines).

(Thanks to [GemCutter](http://wiki.github.com/qrush/gemcutter/) for the contribution guide)

## License ##

All code is licensed under the New BSD License and is copyright YouthTree. Please keep this
in mind when contributing.

