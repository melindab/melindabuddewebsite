var _ = require( 'underscore' );
var $ = require( 'jquery' );
var Marionette = require( 'backbone.marionette' );
var hammer = require( 'hammerjs' );
var materialize = require( 'materialize-css' );
var contentTemplate = require( '../templates/contentTemplate.hbs' );

module.exports = Marionette.View.extend({

    template: contentTemplate,

    onAttach: function() {
        $(".button-collapse").sideNav();
    }

});
