var Backbone = require( 'backbone' );
var Marionette = require( 'backbone.marionette' );
var Radio = require( 'backbone.radio' );

module.exports = Marionette.Object.extend({

    channel: Radio.channel( 'app' ),

    showDefault: function() {
        this.channel.trigger( 'navigate', 1 );
    },

    showPage: function( page ) {
        this.channel.trigger( 'navigate', page );
    }

});
