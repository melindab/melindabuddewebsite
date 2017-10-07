var _ = require( 'underscore' );
var $ = require( 'jquery' );
var Backbone = require( 'backbone' );
var Marionette = require( 'backbone.marionette' );
var Radio = require( 'backbone.radio' );
var mainTemplate = require( '../../templates/mainTemplate.hbs' );
var MainContent = require( '../models/MainContent' );

module.exports = Marionette.View.extend({

    model: new MainContent(),

    channel: Radio.channel( 'app' ),

    el: '#main-region',

    template: mainTemplate,

    initialize: function() {
        var that = this;

        this.channel.on( 'navigate', function( page ) {
            that.model.fetchContent( page );
            // make this a promise when this is changed to ajax
            that.render();
        });
    },

    onDomRefresh: function() {
        $( '.scrollspy' ).scrollSpy();
    }

});
