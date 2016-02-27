import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'i',
  classNames: ['fa', 'fasteragile-overlap'],
  classNameBindings: ['iconClass', 'sizeClass', 'match'],

  iconClass: function() {
    let iconType = this.get('match');
    return this.get(iconType);
  }.property('match'),

  full: 'fa-circle',
  partial: 'fa-adjust',
  none: 'fa-times',

  size: '3',
  sizeClass: function() {
    return 'fa-' + this.get('size') + 'x';
  }.property('size'),
});
