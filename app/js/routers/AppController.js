var Backbone = require( 'backbone' );
var Marionette = require( 'backbone.marionette' );
var Radio = require( 'backbone.radio' );

module.exports = Marionette.Object.extend({

    channel: Radio.channel( 'app' ),

    showDefault: function() {
        console.log( 'showing page 1' );
    },

    showPage: function( page ) {
        // in actual implementation, send non-existent urls to homepage or error page
        console.log( 'showing page ' + page );
        this.channel.trigger( 'navigate', page );
    }

});
