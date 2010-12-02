class YouthTreeJS
  VERSION = "0.4.0".freeze

  def self.coffeescripts_root
    File.expand_path('../coffeescripts', File.dirname(__FILE__))
  end

  def self.register_framework!
    Barista::Framework.register 'youthtree', coffeescripts_root
  end

  register_framework! if defined? Barista::Framework

end
