var _ = require( 'underscore' );
var Marionette = require( 'backbone.marionette' );
var contentTemplate = require( '../templates/contentTemplate.hbs' );

module.exports = Marionette.View.extend({

    template: contentTemplate

});
