var Marionette = require( 'backbone.marionette' );

module.exports = Marionette.Object.extend({

    showDefault: function() {
        console.log( 'showing page 1' );
    },

    showPage: function( page ) {
        // in actual implementation, send non-existent urls to homepage or error page
        console.log( 'showing page ' + page );
    }

});
