var Backbone = require( 'backbone' );
var routes = require( '../json/routes.json' );

module.exports = Backbone.Collection.extend({

    initialize: function() {
        // when server is created, add url and then fetch in view
        this.set( routes );
    }

});
