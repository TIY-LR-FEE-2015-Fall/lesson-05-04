var ListItem = Backbone.View.extend({
  model: null,

  tagName: 'li',

  initialize() {
    // Wire up model events
  },

  render() {
    // Sets up the DOM
    this.$el.html(`${this.model.get('title')}`);

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
    this.collection.slice(0, 5).forEach((post) => {
      var listItem = new ListItem({model: post});

      this.$el.append(listItem.render());
    });
  },
});
