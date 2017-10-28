var Marionette = require( 'backbone.marionette' );
var appTemplate = require( '../../templates/appTemplate.hbs' );
var HeaderView = require( './HeaderView' );
var MainView = require( './MainView' );
var FooterView = require( './FooterView' );

module.exports = Marionette.View.extend({

    el: '#app',

    template: appTemplate,

    regions: {
        headerRegion: '#header-region',
        mainRegion: '#main-region',
        footerRegion: '#footer-region'
    },

    onRender: function() {
        this.showChildView( 'headerRegion', new HeaderView() );
        this.showChildView( 'mainRegion', new MainView() );
        this.showChildView( 'footerRegion', new FooterView() );
    }

});
