var _ = require( 'underscore' );
var $ = require( 'jquery' );
var Backbone = require( 'backbone' );
var Marionette = require( 'backbone.marionette' );
var Radio = require( 'backbone.radio' );
var mainTemplate = require( '../../templates/mainTemplate.hbs' );
var MainContent = require( '../models/MainContent' );

module.exports = Marionette.View.extend({

    model: new Backbone.Model(),

    channel: Radio.channel( 'app' ),

    el: '#main-region',

    template: mainTemplate,

    allContent: new MainContent(),

    initialize: function() {
        var that = this;

        this.channel.on( 'navigate', function( page ) {
            that.showContent( page );
        });
    },

    showContent: function( page ) {
        if ( this.allContent.get( page ) ) {
            this.model.set( this.allContent.get( page ) );
        } else {
            // send non-existent urls to homepage (change to error page?)
            Backbone.history.navigate( '#/about' );
        }

        this.render();
    }

});
