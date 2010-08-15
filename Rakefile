require 'rubygems'
require 'rake'

require 'lib/youthtree-js'

begin
  require 'jeweler'
  Jeweler::Tasks.new do |gem|
    gem.name        = "youthtree-js"
    gem.summary     = %Q{Shared Javascript tools across YouthTree apps.}
    gem.description = %Q{Shared Javascript tools across YouthTree apps.}
    gem.email       = "sutto@sutto.net"
    gem.homepage    = "http://github.com/YouthTree/youthtree-js"
    gem.version     = YouthTreeJS::VERSION
    gem.authors     = ["Darcy Laycock"]
  end
  Jeweler::GemcutterTasks.new
rescue LoadError
  puts "Jeweler (or a dependency) not available. Install it with: gem install jeweler"
end

desc "Compiles the javascript from Coffeescript to Javascript"
task :compile_scripts do
  Dir["coffeescripts/**/*.coffee"].each do |cs|
    output = File.dirname(cs).gsub("coffeescripts", "javascripts")
    system "coffee", "-c", "--no-wrap", '-o', output, cs
  end
end

