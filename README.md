
# fasteragile-overlap

An Ember CLI addon that provides a component to display a full/half/empty overlap icon.
Uses font-awesome, and is configurable.

The icon was designed for a mobile application using ember-cli-ratchet, but
it should also work with webapps.

## Usage

```
// In your .hbs template
{{fa-overlap match="full|partial|none" full='fa-circle', partial='fa-adjust' none='fa-times' size='3'}}
```
The `match` attribute is reaquired to trigger an icon.

The attributes `size`, `full`, `partial`, and `none` can be specified to
override the default icons and sizes. They are listed above with their defaults.

Produces output similar to this:

![icon](https://raw.githubusercontent.com/fasteragile/fasteragile-overlap/master/vendor/fasteragile-overlap-example.png)

## Installation

```
ember install fasteragile-overlap
```

OR

```
npm install fasteragile-overlap
```

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

Built with <3 by [FasterAgile](http://www.fasteragile.com).
