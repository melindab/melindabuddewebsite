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

    content: new MainContent(),

    initialize: function() {
        var that = this;

        this.channel.on( 'navigate', function( page ) {
            that.showContent( page );
        });
    },

    showContent: function( page ) {
        if ( this.content.get( page ) ) {
            this.model.set( this.content.get( page ) );
        } else {
            this.model.set( this.content.get( 'page-not-found' ) );
        }

        this.render();
    }

});
