import PostListCollection from './collections/post-list';
import PostIndexView from './views/posts-index';
import PostSidebarView from './views/posts-sidebar';
import PostFormView from './views/post-form';

var Router = Backbone.Router.extend({
  routes: {
    '': 'listAllPosts',
    new: 'newPost',
    ':id': 'showOnePost',
    ':id/edit': 'editPost',
  },

  posts: null,

  initialize() {
    this.posts = new PostListCollection();
    this.posts.fetch();

    // Making the sidebar
    this.sidebar = new PostSidebarView({collection: this.posts});

    $('#side-bar').html(this.sidebar.$el);
  },

  listAllPosts() {
    // Create an instance of PostIndexView
    var postIndex = new PostIndexView({collection: this.posts});

    $('#outlet').html(postIndex.$el);
  },

  newPost() {
    var postForm = new PostFormView({});

    $('#outlet').html(postForm.$el);
  },
});

export default Router;
