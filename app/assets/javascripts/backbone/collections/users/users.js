Demo.Collections.Users.Users = Backbone.Collection.extend({

  model      : Demo.Models.Users.User,
  name       : 'users',
  page       : 1,
  totalPages : 1,

  /**
   * Return the users using pagination through the User Actions implemented in the namespace Demo.Actions.Users
   **/
  fetch : function () {
    var _this = this;

    if(_this.page <= _this.totalPages) {
      Demo.Actions.Users.all(_this.page, function(response) {
        _this.totalPages = response.total_pages;
        $.each(response.users, function(index, user) {
          var model = new Demo.Models.Users.User({ user : user });
          _this.add(model);
        });
        _this.page = _this.page + 1;
        _this.fetch();
      });
    }
  }
});
