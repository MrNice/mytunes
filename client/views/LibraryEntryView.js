// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<img src="<%= image %>" height="50" width="50"><td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      // Have the model trigger itself
      this.model.trigger('addToQueue', this.model);
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
