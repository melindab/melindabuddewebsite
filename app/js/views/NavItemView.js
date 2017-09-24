var _ = require( 'underscore' );
var $ = require( 'jquery' );
var Marionette = require( 'backbone.marionette' );
var navItemTemplate = require( '../../templates/navItemTemplate.hbs' );

module.exports = Marionette.View.extend({

    template: navItemTemplate

});
