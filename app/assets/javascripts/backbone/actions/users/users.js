/**
 * @description User Wrapper to include all the web services supported by the server.
 * @author <a href="mailto:ariel.parra@nearshoretechnology.com">Ariel Parra</a>
 */
Demo.Actions.Users = {

  config : {
    URL_USER_ALL        : '/users',
    URL_USER_SHOW       : '/users/{0}',
    URL_USER_CREATE     : '/users',
    URL_USER_DELETE     : '/users/{0}/destroy'
  },

  /**
   * Ajax Request to communicate with API
   */
  ajax : function(_url, _data, _type, results) {
    $.ajax({
      url: _url,
      type: _type,
      data: _data,
      dataType: 'json',
      beforeSend: function (xhr) { xhr.setRequestHeader('X-CSRF-Token', Demo.CSRFToken) },
      success: function(response) {
        results(response);
      },
      error: function(xhr, status, errorThrown) {
        console.log(status);
      }
    });
  },

  /**
   * Return all the users
   */
  all : function(page, results) {
    var _data = { page : page };

    this.ajax(this.config.URL_USER_ALL, _data, 'GET', function(response) {
      results(response);
    });
  },

  /**
   * Show a specific user
   */
  show : function(userId, results) {
    this.ajax(this.config.URL_USER_SHOW.format([userId]), null, 'GET', function(response) {
      results(response);
    });
  },

  /**
   * Create a new user in the system
   */
  create : function(user, results) {
    this.ajax(this.config.URL_USER_CREATE, user, 'POST', function(response) {
      results(response);
    });
  },

  /**
   * Delete an existing user in the system
   */
  destroy : function(userId, results) { 
    this.ajax(this.config.URL_USER_DELETE.format([userId]), null, 'GET', function(response) {
      results(response);
    });
  }

};
