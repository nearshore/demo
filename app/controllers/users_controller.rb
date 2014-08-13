class UsersController < ApplicationController

  # Return the exception description depends on the web service.
  def record_exception(error)
    render :status => 402,
           :json => {
             :exception => error
           }
    true
  end

  # Return all the users using pagination
  def index
    user_list   = User.order("created_at").page(params[:page] ||= 1).per(params[:per_page] ||= 10) 
    respond_to do |format|
      format.html {}
      format.json {
        total_pages = user_list.num_pages
        render :json => {
          :users     => user_list.as_json(:only => [:id, :name, :lastname, :email]),
          :total_pages => total_pages
        }
      }
    end
  end

  # Return a specific user
  def show
    respond_to do |format|
      format.json {
        begin
          user   = User.find(params[:id])
          status = 200
          error  = nil
          json   = user.as_json(
                     :only => [
                       :id,
                       :name,
                       :lastname,
                       :email
                     ]
                   )
        render :status => status,
               :json => { 
                 :user => json,
                 :error => error
               }
        rescue ActiveRecord::RecordNotFound 
          error  = 'The user was not found in the system. Please try again!'
          record_exception(error)
        end
      }
    end  
  end

  # Create a new user
  def create
    user = User.new(params[:user])

    respond_to do |format|
      format.json {
        if user.save
          render  :status => 201,
                  :json => {
                    :message => "Account created, welcome to demo App."
                  }
        else
          record_exception(user.errors)
        end
      }
    end
  end

  # Destroy user
  def destroy
    begin
      User.find(params[:id]).destroy
      respond_to do |format|
        format.json {
          render  :status => 200,
                  :json => {
                    :message => "Account deleted successfully."
                  }
        }
      end
    rescue ActiveRecord::RecordNotFound
      error  = "User was not deleted because it not exist."
      record_exception(error)
    end
  end
end
