var _ = require( 'underscore' );
var $ = require( 'jquery' );
var Marionette = require( 'backbone.marionette' );
var AppController = require( './AppController' );

module.exports = Marionette.AppRouter.extend({

    controller: new AppController(),

    appRoutes: {
        '': 'showDefault',
        ':page': 'showPage'
    }

});
