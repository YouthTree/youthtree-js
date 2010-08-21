class YouthTreeJS
  VERSION = "0.2.0".freeze

  def self.register_framework!
    Barista::Framework.register 'youthtree', File.expand_path('../coffeescripts', File.dirname(__FILE__))
  end

  register_framework! if defined? Barista::Framework

end
