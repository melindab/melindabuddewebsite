var _ = require( 'underscore' );
var $ = require( 'jquery' );
var Marionette = require( 'backbone.marionette' );
var footerTemplate = require( '../../templates/footerTemplate.hbs' );

module.exports = Marionette.View.extend({

    template: footerTemplate

});
