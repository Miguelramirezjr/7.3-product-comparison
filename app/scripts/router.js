import MessageCollection from 'models/message-collection';
import MessageIndexView from 'views/message/index';

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'compare': 'compare'
  },

  initialize: function() {
    $('#container').html(JST['application']());
    this.message = new MessageCollection();
  },

  index: function() {
    var view = new MessageIndexView({
      collection: this.message
    });
    this.message.fetch();
    this.showView(view);
  },

  compare: function() {
    console.log('route:compare');
  },

  /*
   * Helper functions
   */

  showView: function(view) {
    if(this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#container').html(view.render().el);
    return view;
  }

});

export default AppRouter;
