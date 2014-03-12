// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'span',
  template: _.template('<span><%= artist + title %></span>'),

  events: {
    'click': function() {

    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  },
});
