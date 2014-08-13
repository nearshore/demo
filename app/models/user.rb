class User < ActiveRecord::Base

  # Variables with permission to read/write in this model.
  attr_accessible   :name,
                    :lastname,
                    :email

  # Validation to force the email address for the user as unique.
  validates         :email,
                    :uniqueness => { :case_sensitive => false }
end
