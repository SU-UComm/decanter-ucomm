/**
 * Tailwind Configuration.
 */

var path = require('path');
var dir = path.resolve(__dirname, 'src/plugins');

module.exports = {

  // Our own prefix.
  prefix: 'su-',

  // The theme section is where you define your color palette, font stacks,
  // type scale, border sizes, breakpoints — anything related to the visual
  // design of your site.
  // https://tailwindcss.com/docs/configuration/#theme
  theme: {
    // Overrides.
    boxShadow:  require(dir + '/theme/boxshadow.js')(),
    colors:     require(dir + '/theme/colors.js')(),
    screens:    require(dir + '/theme/screens.js')(),
    fontFamily: require(dir + '/theme/fontfamily.js')(),

    // Extentions of tailwind core config.
    extend: {},
  },

  // The corePlugins section lets you completely disable classes that Tailwind
  // would normally generate by default if you don't need them for your project.
  // https://tailwindcss.com/docs/configuration/#core-plugins
  corePlugins: {
    // preflight: false,
  },

  // The plugins section allows you to register third-party plugins with
  // Tailwind that can be used to generate extra utilities, components, base
  // styles, or custom variants.
  // https://tailwindcss.com/docs/configuration/#plugins
  plugins: [
    // @tailwind base;
    require(dir + '/base/base.js')(),
    // @tailwind components;
    require(dir + '/components/alert/alert.js')(),
    // @tailwind utilities;
    require(dir + '/utilities/accessibility/accessibily-hidden.js')(),
    // 3rd Party Plugins;
    require('tailwindcss-visuallyhidden')()
  ],

  // The variants section lets you control which variants are generated for each
  // core utility plugin.
  // https://tailwindcss.com/docs/configuration/#variants
  // variants: {},

}
