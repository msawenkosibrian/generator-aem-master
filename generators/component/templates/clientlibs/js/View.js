/**
 * Created by bohdan on 10/8/15.
 */
CTC.define('<%= constructorName%>View',
    ['Backbone'],
    function (Backbone) {
        return Backbone.View.extend({
            className: '.<%= componentName%>__',

            events: {

            },

            initialize: function () {
                this.listenTo(this.model, 'change', this.render);
            },

            render: function () {

            }
        })
    }
);