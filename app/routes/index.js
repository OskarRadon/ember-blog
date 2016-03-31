import Ember from 'ember';

export default Ember.Route.extend({
  // sortedComments: Ember.computed.sort('comments', 'timestamp:desc'),
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment')
    });
  }
  // actions: {
  //   displayComments() {
  //     for (var i = 0; i = comments.length; i++) {
  //
  //     }
  //   }
  // }
});
