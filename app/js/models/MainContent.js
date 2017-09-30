var Backbone = require( 'backbone' );
var content = require( '../json/content.json' );

module.exports = Backbone.Model.extend({

    fetchContent: function( page ) {
        // when server is created, add url and then fetch in view
        if ( content[page] ) {
            this.set( content[page] );
        } else {
            this.set({
                content: '<h2>Error: Page Not Found</h2><p>Sorry! No such page exists.</p>'
            });
        }
    }

});
