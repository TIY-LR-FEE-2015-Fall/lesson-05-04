import BlogPost from '../models/blog-post';

export default Backbone.View.extend({
  model: null,

  initialize() {
    this.resetForm();
  },

  resetForm() {
    this.model = new BlogPost();

    this.listenTo(this.model, 'change', this.render);
  },

  render() {
    var title = this.model.get('title');
    var body = this.model.get('body');

    // Update the h2
    this.$el.find('h2').text(title);

    // Update the h3
    this.$el.find('h3').text(body);
  },

  events: {
    input() {
      // Get the title
      var title = this.$el.find('.post-title').val();

      // Get the description
      var body = this.$el.find('.post-body').val();

      this.model.set({title, body});
    },
  },
});
