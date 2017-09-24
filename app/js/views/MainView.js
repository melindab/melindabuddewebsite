var _ = require( 'underscore' );
var $ = require( 'jquery' );
var Marionette = require( 'backbone.marionette' );
var Radio = require( 'backbone.radio' );
var mainTemplate = require( '../../templates/mainTemplate.hbs' );

module.exports = Marionette.View.extend({

    channel: Radio.channel( 'app' ),

    el: '#main-region',

    template: mainTemplate,

    initialize: function() {
        this.channel.on( 'navigate', function( page ) {
            console.log('event triggered and caught', page)
        });
    }

});
