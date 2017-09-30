var _ = require( 'underscore' );
var $ = require( 'jquery' );
var Backbone = require( 'backbone' );
var Marionette = require( 'backbone.marionette' );
var NavItemView = require( './NavItemView' );
var RoutesCollection = require( '../collections/RoutesCollection' );

module.exports = Marionette.CollectionView.extend({

    el: '#nav-items-region',

    childView: NavItemView,

    collection: new RoutesCollection()

});
