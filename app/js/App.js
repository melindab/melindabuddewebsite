var Backbone = require( 'backbone' );
var Marionette = require( 'backbone.marionette' );
var AppView = require( './views/AppView' );
// var AppRouter = require( '../routers/AppRouter' );

var App = Marionette.Application.extend({

    region: '#app',

    // router: new AppRouter(),

    onStart: function() {
        this.showView( new AppView() );
        // Backbone.history.start();
    }

});


module.exports = new App();
