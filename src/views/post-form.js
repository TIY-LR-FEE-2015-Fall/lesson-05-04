import BlogPost from '../models/blog-post';

export default Backbone.View.extend({
  model: null,
  collection: null,

  tagName: 'form',

  initialize() {
    this.resetForm();
  },

  resetForm() {
    this.model = new BlogPost();

    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render() {
    this.$el.html(`
      <h2>New Post</h2>

      <input type="text" class="post-title" value="${this.model.get('title')}">
      <textarea class="post-body">${this.model.get('body')}</textarea>

      <button>Submit</button>
    `);
  },

  events: {
    submit(ev) {
      ev.preventDefault();

      // Get the title
      var title = this.$el.find('.post-title').val();

      // Get the description
      var body = this.$el.find('.post-body').val();

      this.model.set({title, body});

      this.model.save();

      this.collection.add(this.model);

      Backbone.history.navigate('', {trigger: true});
    },
  },
});
