// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('addToQueue', function(song) {
      console.log(song);
      this.Add(song)
    });
    console.log('intialize');
  },

  next: function(){
    // Triggers the next song to play

    // If we know the index of the currently playing song, play next index

    // If this is the last song in the playlist
      // If repeat is on, goto beginning of list
  },

  previous: function() {
    // Triggers the previous song to play

    // If this is the first song in the queue
      // If repeat is on, goto end of list
  },

  changeSong: function(){
    // Triggers a new song to play
    // Contains the abstract selection logic
  },
  // At the moment, songs cannot be added multiple times to the collection
    // Collections are unique sets...

  // Free functions we don't need to implement
  // Add(model, options)
    // Options can include an index for splicing and merge: true
  // Remove
  // Push
  // Pop
  // Shuffle
    // Todo: Make shuffle not be destructive

});