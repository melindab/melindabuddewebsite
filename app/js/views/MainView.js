var _ = require( 'underscore' );
var $ = require( 'jquery' );
var Marionette = require( 'backbone.marionette' );
var mainTemplate = require( '../../templates/mainTemplate.hbs' );

module.exports = Marionette.View.extend({

    el: '#main-region',

    template: mainTemplate

});
