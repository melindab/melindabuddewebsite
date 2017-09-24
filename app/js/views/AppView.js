var _ = require( 'underscore' );
var $ = require( 'jquery' );
var Marionette = require( 'backbone.marionette' );
var hammer = require( 'hammerjs' );
var materialize = require( 'materialize-css' );
var appTemplate = require( '../../templates/appTemplate.hbs' );
var HeaderView = require( './HeaderView' );
var MainView = require( './MainView' );
var FooterView = require( './FooterView' );

module.exports = Marionette.View.extend({

    template: appTemplate,

    regions: {
        headerRegion: '#headerRegion',
        mainRegion: '#mainRegion',
        footerRegion: '#footerRegion'
    },

    onRender: function() {
        this.showChildView( 'headerRegion', new HeaderView() );
        this.showChildView( 'mainRegion', new MainView() );
        this.showChildView( 'footerRegion', new FooterView() );
    }

});
