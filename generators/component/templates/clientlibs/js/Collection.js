CTC.define('<%= constructorName%>Collection',
            ['Backbone', '<%= constructorName%>Model'],
    function (Backbone, Model) {
        return Backbone.Collection.extend({
            model: Model
        })
    }
);