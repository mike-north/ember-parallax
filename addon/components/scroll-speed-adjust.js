import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { computed } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import { htmlSafe } from '@ember/string';
import layout from '../templates/components/scroll-speed-adjust';

export default Component.extend({
  classNames: ['scroll-speed-adjust'],
  layout,
  windoc: service(),
  speed: 1,
  attributeBindings: ['style'],
  offsetTop: 0,
  didInsertElement() {
    this._super(...arguments);
    scheduleOnce('afterRender', () => {
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
      cssAttrs.push(['top', `${this.get('offsetTop') - this.get('windoc.scrollTop') * this.get('speed')}px`]);
    }
    return htmlSafe(
      cssAttrs
        .map(a => {
          return `${a[0]}: ${a[1]}`;
        })
        .join('; ')
    );
  })
});
