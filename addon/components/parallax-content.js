import Ember from 'ember';
import layout from '../templates/components/parallax-content';

const { Component, computed, inject, String: { htmlSafe } } = Ember;

export default Component.extend({
  classNames: ['parallax-content'],
  attributeBindings: ['style'],
  windoc: inject.service(),
  offsetTop: 0,
  layout,
  cssHeight: computed('height', function() {
    if (typeof this.get('height') === 'string') {
      return this.get('height');
    }
    return `${this.get('height')}px`;
  }),
  style: computed('cssHeight', function() {
    let cssAttrs = [];

    cssAttrs.push(['height', this.get('cssHeight')]);
    cssAttrs.push(['overflow', 'hidden']);
    cssAttrs.push(['transform', 'translate3d(0,0,0)']);
    cssAttrs.push(['position', 'absolute']);
    cssAttrs.push(['width', '100%']);

    return htmlSafe(cssAttrs.map((a) => {
      return `${a[0]}: ${a[1]}`;
    }).join('; '));
  })
});
