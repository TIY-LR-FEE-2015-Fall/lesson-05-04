import PostListCollection from './collections/post-list';

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

    // Get all posts from server
    posts.fetch();

    // Show the Posts to the user
  },
});

export default Router;
