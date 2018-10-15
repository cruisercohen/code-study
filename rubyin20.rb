#!/usr/bin/env ruby

# Quick walk trhough the ruby in 20 minutes tutorial

class Greeter
    attr_accessor :name
    def initialize(name = "World")
        @name = name
    end
    def sayHi
        puts "YO YO YO #{@name.capitalize}"
    end
    def sayBye
        puts "See Ya #{@name.capitalize}"
    end
end


greeter = Greeter.new("gary")
greeter.sayHi
greeter.sayBye
greeter.name = "lambrusco"
greeter.sayHi


# Mega greeter exercise

class MegaGreeter
    attr_accessor :names
  
    # Create the object
    def initialize(names = "World")
      @names = names
    end
  
    # Say hi to everybody
    def say_hi
      if @names.nil?
        puts "..."
      elsif @names.respond_to?("each")
        # @names is a list of some kind, iterate!
        @names.each do |name|
          puts "Hello #{name}!"
        end
      else
        puts "Hello #{@names}!"
      end
    end
  
    # Say bye to everybody
    def say_bye
      if @names.nil?
        puts "..."
      elsif @names.respond_to?("join")
        # Join the list elements with commas
        puts "Goodbye #{@names.join(", ")}.  Come back soon!"
      else
        puts "Goodbye #{@names}.  Come back soon!"
      end
    end
  end
  
  
  if __FILE__ == $0
    mg = MegaGreeter.new
    mg.say_hi
    mg.say_bye
  
    # Change name to be "Zeke"
    mg.names = "Zeke"
    mg.say_hi
    mg.say_bye
  
    # Change the name to an array of names
    mg.names = ["Albert", "Brenda", "Charles",
                "Dave", "Engelbert"]
    mg.say_hi
    mg.say_bye
  
    # Try a hash
    mg.names = { "Al" => "Albert", "Br" => "Brenda", "Chuck" => "Charles" }
    mg.say_hi
    mg.say_bye
    
    # Change to nil
    mg.names = nil
    mg.say_hi
    mg.say_bye
  end