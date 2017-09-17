var _ = require( 'underscore' );
var Marionette = require( 'backbone.marionette' );

module.exports = Marionette.View.extend({

    template: _.template('<h1>Welcome to my app!</h1>')

});
