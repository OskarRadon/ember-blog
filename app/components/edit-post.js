import Ember from 'ember';

export default Ember.Component.extend({
  showPostForm: false,
  actions: {
    updatePostForm() {
      this.set('showPostForm', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        text: this.get('text'),
        image: this.get('image')
      };
      this.set('showPostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
