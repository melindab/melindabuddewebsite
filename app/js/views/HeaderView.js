var _ = require( 'underscore' );
var $ = require( 'jquery' );
var Marionette = require( 'backbone.marionette' );
var headerTemplate = require( '../../templates/headerTemplate.hbs' );

module.exports = Marionette.View.extend({

    template: headerTemplate,

    onAttach: function() {
        $( '.button-collapse' ).sideNav();
    }

});
