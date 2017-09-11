// var Marionette = require( 'backbone.marionette' );

var AppView = Marionette.View.extend({

    template: _.template('<h1>Welcome to my app!</h1>')

});

AppView.render();
