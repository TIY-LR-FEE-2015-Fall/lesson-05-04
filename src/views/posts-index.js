export default Backbone.View.extend({
  collection: null,

  tagName: 'ul',

  initialize() {
    // Setup events
    this.listenTo(this.collection, 'change reset add remove', this.render);

    this.render();
  },

  render() {
    this.$el.empty();

    // For each item in collection make a new `li`
    this.collection.forEach((post) => {
      $('<li></li>')
        .html(`${post.get('title')} - ${post.get('body')}`)
        .appendTo(this.$el);
    });
  },
});
