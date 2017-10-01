var _ = require( 'underscore' );
var $ = require( 'jquery' );
var Backbone = require( 'backbone' );
var Marionette = require( 'backbone.marionette' );
var Radio = require( 'backbone.radio' );
var NavItemView = require( './NavItemView' );
var RoutesCollection = require( '../collections/RoutesCollection' );

module.exports = Marionette.CollectionView.extend({

    el: '#nav-items-region',

    channel: Radio.channel( 'app' ),

    childView: NavItemView,

    collection: new RoutesCollection(),

    selectedItem: null,

    ui: {
        navItem: 'a'
    },

    initialize: function() {
        var that = this;

        this.channel.on( 'navigate', function( page ) {
            that.activateItem( page );
        });
    },

    activateItem: function( page ) {
        if ( this.selectedItem ) {
            $( this.selectedItem ).parent().removeClass( 'active' );
        }

        this.selectedItem = '#' + page;
        $( this.selectedItem ).parent().addClass( 'active' );
    }

});
