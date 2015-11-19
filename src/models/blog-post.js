export default Backbone.Model.extend({
  idAttribute: '_id',

  urlRoot: 'http://tiny-lr.herokuapp.com/collections/posts-rt',

  defaults: {
    title: '',
    body: '',
  },
});
