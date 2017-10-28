var Marionette = require( 'backbone.marionette' );
var footerTemplate = require( '../../templates/footerTemplate.hbs' );

module.exports = Marionette.View.extend({

    el: '#footer-region',

    template: footerTemplate

});
