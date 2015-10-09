var CreateMessageView = Backbone.View.extend({
  template: JST['message/create'],

  events: {
    'submit form': 'createMessage'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  createMessage: function(e) {
    e.preventDefault();
    var user = this.$('input[name=user]').val();
    var message = Message(this.$('input[message=message]').val());
    this.collection.create({
      user: user,
      message: message
    });

    this.$('input').not('[type=submit]').val('');
  }

});

export default CreateMessageView;
