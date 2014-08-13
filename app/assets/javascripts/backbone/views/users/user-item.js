Demo.Views.Users.UserItem = Backbone.View.extend({

  events : {
    'click a.delete' : 'delete',
  },

  tagName : 'tr',

  /**
   * Constructor of UserItem
   **/
  initialize : function () {
    this.template = _.template( $('#user_row').html() );
  },

  /**
   * Responsible to generate the template and insert the html to the DOM
   **/
  render : function () {
    var data  = this.model.toJSON();
    var html  = this.template(data);
    var _this = this;
    this.$el.html( html );
  },

  /**
   * Delete by itself using an Action to destroy the user record in the database implemented in the namespace Demo.Actions.Users
   **/
  delete : function(e) {
    e.preventDefault();

    var _this = this;

    Demo.Actions.Users.destroy(_this.model.get('user').id, function (response) {
      if(response) {
        $(_this.$el).remove();
      }
    }); 
  }

});
