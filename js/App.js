// var Backbone = require( 'backbone' );
// var Marionette = require( 'backbone.marionette' );
// var AppView = require( '../views/AppView' );
// var AppRouter = require( '../routers/AppRouter' );

var App = new Marionette.Application({

    region: '#content',

    // router: new AppRouter(),

    onStart: function() {
        this.showView( new AppView() );
        // Backbone.history.start();
    }

});

App.start();
