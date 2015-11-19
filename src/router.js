import PostListCollection from './collections/post-list';
import PostIndexView from './views/posts-index';
import PostFormView from './views/post-form';

var Router = Backbone.Router.extend({
  routes: {
    '': 'listAllPosts',
    new: 'newPost',
    ':id': 'showOnePost',
    ':id/edit': 'editPost',
  },

  listAllPosts() {
    // Need a Backbone Collection
    var posts = new PostListCollection();

    // Create an instance of PostIndexView
    var postIndex = new PostIndexView({collection: posts});
    $('#outlet').html(postIndex.$el);

    // Get all posts from server
    posts.fetch();
  },

  newPost() {
    var postForm = new PostFormView({});

    $('#outlet').html(postForm.$el);
  },
});

export default Router;
