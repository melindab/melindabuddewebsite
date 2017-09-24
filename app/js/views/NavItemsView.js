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
                href: 'page1.html',
                text: 'Link to Page 1'
            },
            {
                href: 'page2.html',
                text: 'Link to Page 2'
            },
            {
                href: 'page3.html',
                text: 'Link to Page 3'
            }
        ]);
    }

});
