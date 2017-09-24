var _ = require( 'underscore' );
var $ = require( 'jquery' );
var Backbone = require( 'backbone' );
var Marionette = require( 'backbone.marionette' );
var NavItemView = require( './NavItemView' );

module.exports = Marionette.CollectionView.extend({

    el: '#nav-items-region',

    model: new Backbone.Model(), // need model or collection will not render

    childView: NavItemView,

    collection: new Backbone.Collection(),

    initialize: function() {
        this.collection.set([
            {
                href: '#/about',
                text: 'About'
            },
            {
                href: '#/backbone-marionette-app-example',
                text: 'Backbone Marionette App Example'
            },
            {
                href: '#/c-for-javaScript-programmers',
                text: 'C for JavaScript Programmers'
            },
            {
                href: '#/react-native',
                text: 'React Native'
            }
        ]);
    }

});
