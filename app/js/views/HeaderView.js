var _ = require( 'underscore' );
var $ = require( 'jquery' );
var Marionette = require( 'backbone.marionette' );
var headerTemplate = require( '../../templates/headerTemplate.hbs' );
var NavItemsView = require( './NavItemsView' );

module.exports = Marionette.View.extend({

    el: '#header-region',

    template: headerTemplate,

    regions: {
        navItemsRegion: '#nav-items-region'
    },

    ui: {
        menuButton: '.button-collapse'
    },

    onRender: function() {
        this.showChildView( 'navItemsRegion', new NavItemsView() );
        this.getUI( 'menuButton' ).sideNav();
    }

});
