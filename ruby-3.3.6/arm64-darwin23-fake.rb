# frozen_string_literal: true
# shareable_constant_value: literal
baseruby="/usr/local/opt/ruby/bin/ruby --disable=gems"
_\
=begin
_=
ruby="${RUBY-$baseruby}"
case "$ruby" in "echo "*) $ruby; exit $?;; esac
case "$0" in /*) r=-r"$0";; *) r=-r"./$0";; esac
exec $ruby "$r" "$@"
=end
=baseruby
class Object
  remove_const :CROSS_COMPILING if defined?(CROSS_COMPILING)
  CROSS_COMPILING = RUBY_PLATFORM
  constants.grep(/^RUBY_/) {|n| remove_const n}
  RUBY_VERSION = "3.3.6"
  RUBY_RELEASE_DATE = "2024-11-05"
  RUBY_PLATFORM = "arm64-darwin23"
  RUBY_PATCHLEVEL = 108
  RUBY_REVISION = "75015d4c1f6965b5e85e96fb309f1f2129f933c0"
  RUBY_COPYRIGHT = "ruby - Copyright (C) 1993-2024 Yukihiro Matsumoto"
  RUBY_ENGINE = "ruby"
  RUBY_ENGINE_VERSION = "3.3.6"
  RUBY_DESCRIPTION = case
    when RubyVM.const_defined?(:RJIT) && RubyVM::RJIT.enabled?
      "description_with_rjit"
    when RubyVM.const_defined?(:YJIT) && RubyVM::YJIT.enabled?
      "description_with_yjit"
    else
      "ruby 3.3.6 (2024-11-05 revision 75015d4c1f) [arm64-darwin23]"
    end
end
builddir = File.dirname(File.expand_path(__FILE__))
libpathenv = libpathenv = "DYLD_LIBRARY_PATH"
preloadenv = preloadenv = "DYLD_INSERT_LIBRARIES"
libruby_so = libruby_so = "libruby.3.3.dylib.3.3.6"
srcdir = "."
top_srcdir = File.realpath(srcdir, builddir)
fake = File.join(top_srcdir, "tool/fake.rb")
eval(File.binread(fake), nil, fake)
ropt = "-r#{__FILE__}"
["RUBYOPT"].each do |flag|
  opt = ENV[flag]
  opt = opt ? ([ropt] | opt.b.split(/\s+/)).join(" ") : ropt
  ENV[flag] = opt
end
