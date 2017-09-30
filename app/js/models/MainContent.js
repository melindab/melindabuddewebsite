var Backbone = require( 'backbone' );
var content = require( '../json/content.json' );

module.exports = Backbone.Model.extend({

    initialize: function() {
        // when server is created, add url and then fetch in view
        this.set( content );
    }

});
