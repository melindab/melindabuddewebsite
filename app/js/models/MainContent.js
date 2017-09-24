var Backbone = require( 'backbone' );

module.exports = Backbone.Model.extend({

    defaults: {
        page1: {
            heading: 'Page 1 Heading',
            content: '<div>Page 1 content</div>'
        },
        page2: {
            heading: 'Page 2 Heading',
            content: '<div>Page 2 content</div>'
        },
        page3: {
            heading: 'Page 3 Heading',
            content: '<div>Page 3 content</div>'
        }
    }

});
