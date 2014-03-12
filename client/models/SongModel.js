// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults: {
    thumbs = 'false',
    image = 'http://upload.wikimedia.org/wikipedia/en/3/38/GunsnRosesUseYourIllusionII.jpg',
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  }

});
