import PostFormView from './views/post-form';
import Router from './router';

export default function() {
  var r = new Router();

  Backbone.history.start();

  var pf = new PostFormView({el: '.blog-form'});
}
