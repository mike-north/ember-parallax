/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-parallax',
  normalizeEntityName: function() {},
  beforeInstall: function() {
    return this.addAddonToProject('ember-windoc', '~0.1.1');
  }

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
