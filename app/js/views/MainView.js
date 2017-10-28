var $ = require( 'jquery' );
var Backbone = require( 'backbone' );
var Marionette = require( 'backbone.marionette' );
var Radio = require( 'backbone.radio' );
// var mainTemplate = require( '../../templates/mainTemplate.hbs' );
// var MainContent = require( '../models/MainContent' );
// page templates
var about = require( '../../pageTemplates/about.hbs' );
var backboneMarionetteAppExample = require( '../../pageTemplates/backboneMarionetteAppExample.hbs' );
var settingUpAFrontEndEnvironment = require( '../../pageTemplates/settingUpAFrontEndEnvironment.hbs' );
var managingDependenciesWithNpm = require( '../../pageTemplates/managingDependenciesWithNpm.hbs' );
// Page Not Found error template
var pageNotFoundError = require( '../../pageTemplates/pageNotFoundError.hbs' );

module.exports = Marionette.View.extend({

    // model: new MainContent(),

    model: new Backbone.Model({
        'about': about,
        'backbone-marionette-app-example': backboneMarionetteAppExample,
        'managing-dependencies-with-npm': managingDependenciesWithNpm,
        'setting-up-a-front-end-environment': settingUpAFrontEndEnvironment,
        'page-not-found-error': pageNotFoundError
    }),

    channel: Radio.channel( 'app' ),

    el: '#main-region',

    // template: mainTemplate,

    template: about,

    initialize: function() {
        var that = this;

        this.channel.on( 'navigate', function( page ) {
            // that.model.fetchContent( page );
            // make this a promise when this is changed to ajax
            that.showPage( page );
            // that.render();
        });
    },

    onDomRefresh: function() {
        $( '.scrollspy' ).scrollSpy();
    },

    showPage: function( page ) {
        // temporary method to use until backend created
        if ( this.model.get( page ) ) {
            this.template = this.model.get( page );
        } else {
            this.template = this.model.get( 'page-not-found-error' );
        }

        this.render();
    }

});
