# ember-parallax [![Build Status](https://travis-ci.org/levanto-financial/ember-parallax.svg?branch=master)](https://travis-ci.org/levanto-financial/ember-parallax)

Parallax support for ember.js apps

![ember-parallax](http://i65.tinypic.com/rs4zzs.gif)

## Use

### Installation
Install this addon using ember-cli

```
ember install ember-parallax
```

Wrap whatever content you like in the `{{parallax-content}}` component, specifying a speed and a height

```hbs
{{#parallax-content speed=0.5 height=400 }}
  <img src="./img/stellar-spire-eagle-nebula-1400x900.jpg">
{{/parallax-content}}
```

## Contributing

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
