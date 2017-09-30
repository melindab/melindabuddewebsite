var Backbone = require( 'backbone' );
var content = require( '../json/content.json' );

module.exports = Backbone.Model.extend({

    fetchContent: function( page ) {
        // when server is created, add url and then fetch in view
        if ( content[page] ) {
            this.set( content[page] );
        } else {
            this.set( content['page-not-found'] );
        }
    }

});
