var ListItem = Backbone.View.extend({
  model: null,

  tagName: 'li',

  initialize() {
    // Wire up model events
  },

  events: {
    'click .delete-item': 'delete',
  },

  delete() {
    if (confirm(`Are you sure you want to delete this?`)) {
      // Delete the record on the server
      this.model.destroy();

      // Remove this view from the list
      this.remove();
    }
  },

  render() {
    // Sets up the DOM
    this.$el.html(`
      ${this.model.get('title')} - ${this.model.get('body')}

      <a class="delete-item" href="#">Delete</a>
    `);

    return this.$el;
  },
});

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
      var listItem = new ListItem({model: post});

      this.$el.append(listItem.render());
    });
  },
});
