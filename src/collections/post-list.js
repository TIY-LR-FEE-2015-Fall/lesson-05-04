import BlogPost from '../models/blog-post';

export default Backbone.Collection.extend({
  url: 'http://tiny-lr.herokuapp.com/collections/posts-rt',

  model: BlogPost,
});
