import Ember from 'ember';
import layout from '../templates/components/scroll-speed-adjust';

const { Component, computed, inject, run: { next }, String: { htmlSafe } } = Ember;

export default Component.extend({
  classNames: ['scroll-speed-adjust'],
  layout,
  windoc: inject.service(),
  speed: 1,
  attributeBindings: ['style'],
  offsetTop: 0,
  didInsertElement() {
    this._super(...arguments);
    next(() => {
      // if (this.get('offsetTop') === null || this.get('offsetTop') === null) {
      //   this.set('offsetTop', this.$().offset().top);
      // }
      this.$().css('position', 'relative');
      this.$().css('top', `${this.get('offsetTop')}px`);
    });
  },
  style: computed('offsetTop', 'windoc.scrollTop', 'speed', function() {
    let cssAttrs = [];
    if (this.get('offsetTop') !== null) {
      cssAttrs.push(['position', 'relative']);
      cssAttrs.push(['top', `${this.get('offsetTop') - (this.get('windoc.scrollTop') * this.get('speed'))}px`]);
    }
    return htmlSafe(cssAttrs.map((a) => {
      return `${a[0]}: ${a[1]}`;
    }).join('; '));
  })
});
