var Backbone = require( 'backbone' );

module.exports = Backbone.Model.extend({

    defaults: {
        'about': {
            heading: 'About',
            content: '<div>About Website content</div>'
        },
        'backbone-marionette-app-example': {
            heading: 'Backbone Marionette App Example',
            content: '<div>Backbone Marionette App Example content</div>'
        },
        'c-for-javaScript-programmers': {
            heading: 'C for JavaScript Programmers',
            content: '<div>' +
                        '<ul class="toc white-text">' +
                            '<li>1. Section Name</li>' +
                            '<li>2. Section Name</li>' +
                            '<li>3. Section Name</li>' +
                        '</ul>' +
                        '<p>' +
                            '<em>This teaches C programming to JavaScript developers.</em> This teaches C programming to JavaScript developers. This teaches C programming to JavaScript developers. This teaches C programming to JavaScript developers. This teaches C programming to JavaScript developers.' +
                        '</p>' +

                        '<div class="quick-steps_container">' +
                            '<h4 class="quick-steps_head">Quick Steps</h4>' +
                            '<ul class="quick-steps_text">' +
                                '<li>Do step 1</li>' +
                                '<li>Do step 2</li>' +
                                '<li>Do step 3</li>' +
                            '</ul>' +
                        '</div>' +

                        '<h3>Getting Started</h3>' +
                        '<p>' +
                            'This teaches C programming to JavaScript developers. This teaches C programming to JavaScript developers. This teaches C programming to JavaScript developers. This teaches C programming to JavaScript developers. This teaches C programming to JavaScript developers.' +
                        '</p>' +
                        '<p>' +
                            'This teaches C programming to JavaScript developers. This teaches C programming to JavaScript developers. This teaches C programming to JavaScript developers. This teaches C programming to JavaScript developers. This teaches C programming to JavaScript developers.' +
                        '</p>' +
                        '<div class="code-block">' +
                            '<code>' +
                                '#include &lt;stdio.h&gt;<br>int main (void) &#123;<br><span class="tab-1">return 0;</span><br>&#125;<br>' +
                            '</code>' +
                        '</div>' +
                        '<h3>Basics</h3>' +
                        '<p>' +
                            'This teaches C programming to JavaScript developers. This teaches C programming to JavaScript developers. This teaches C programming to JavaScript developers. This teaches C programming to JavaScript developers. This teaches C programming to JavaScript developers.' +
                        '</p>' +
                    '</div>'
        },
        'react-native': {
            heading: 'React Native',
            content: '<div>React Native content</div>'
        }
    }

});
