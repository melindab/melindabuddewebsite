var _ = require( 'underscore' );
var $ = require( 'jquery' );
var Marionette = require( 'backbone.marionette' );
var headerTemplate = require( '../../templates/headerTemplate.hbs' );

module.exports = Marionette.View.extend({

    template: headerTemplate,

    ui: {
        menuButton: '.button-collapse'
    },

    onAttach: function() {
        this.getUI( 'menuButton' ).sideNav();
    }

});
