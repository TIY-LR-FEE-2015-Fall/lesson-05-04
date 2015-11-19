export default Backbone.Model.extend({
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/posts-rt',

  defaults: {
    title: '',
    body: '',
  },
});
