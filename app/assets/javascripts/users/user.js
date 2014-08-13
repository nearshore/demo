Demo.User = {

  init : function() {
    this.loadAllUsers();
  },

  loadAllUsers : function() {
    $('.bordered tbody').html('');
    window.collections.users = new Demo.Collections.Users.Users();
    window.collections.users.fetch();
    window.collections.users.on('add', function (model) {
      var view = new Demo.Views.Users.UserItem({model:model});
      view.render();
      $('.bordered tbody').append(view.$el.fadeIn( 'slow' ).delay(1000));
    });
  }
};
