/* global PluginArray:true*/
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('parallax-content', 'Integration | Component | parallax content', {
  integration: true
});

test('it renders', function(assert) {
  // Template block usage:
  this.render(hbs`
    {{#parallax-content}}
      template block text
    {{/parallax-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('offsetTop is handled properly', function(assert) {
  // Template block usage:
  this.set('top', 120);

  this.render(hbs`
    {{#parallax-content speed=0.3 offsetTop=top}}
      template block text
    {{/parallax-content}}
  `);

  assert.equal(this.$('.parallax-content').css('position'), 'absolute');
  assert.equal(this.$('.parallax-content .scroll-speed-adjust').css('top'), '120px');
  this.set('top', -50);
  assert.equal(this.$('.parallax-content .scroll-speed-adjust').css('top'), '-50px');
});

test('scrolling is handled properly', function(assert) {
  // Template block usage:
  // let done = assert.async();

  this.set('windoc', {
    scrollTop: 0
  });

  this.render(hbs`
    <div style="height: 2000px">
    {{#parallax-content speed=-0.5 windoc=windoc}}
      template block text
    {{/parallax-content}}
    </div>
  `);
  assert.equal(this.$('.parallax-content .scroll-speed-adjust').css('top'), '0px');
  this.set('windoc.scrollTop', 400);
  assert.equal(this.$('.parallax-content .scroll-speed-adjust').css('top'), '200px');

});

test('string height is handled properly', function(assert) {
  this.render(hbs`
    <div style="height: 2000px">
    {{#parallax-content height="100vh"}}
      template block text
    {{/parallax-content}}
    </div>
  `);
  assert.equal(this.$('.parallax-content')
    .css('height'), `${window.innerHeight}px`);
});

test('numeric height is handled properly', function(assert) {
  this.render(hbs`
    <div style="height: 2000px">
    {{#parallax-content height=100}}
      template block text
    {{/parallax-content}}
    </div>
  `);
  assert.equal(this.$('.parallax-content')
    .css('height'), '100px');
});
