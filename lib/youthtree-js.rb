class YouthTreeJS
  VERSION = "0.3.0.pre".freeze

  def self.coffeescripts_root
    File.expand_path('../coffeescripts', File.dirname(__FILE__))
  end

  def self.register_framework!
    Barista::Framework.register :name => 'youthtree', 
                                :root => coffeescripts_root
  end

  register_framework! if defined? Barista::Framework

end
