class DeviseRegistrationsController < Devise::RegistrationsController

	def index

	end

	def new
		super
	end


	def create

	# render json: ENV

		user = User.new
		user.first_name = params[:user][:first_name]
		user.last_name = params[:user][:last_name]
		user.username = params[:user][:username]
		user.email = params[:user][:email]
		user.password = params[:user][:password]
    user.avatar = params[:user][:avatar]
    if user.save!
      redirect_to posts_path
    else
      render text: "Woops!"
    end

	end

	def show

		@users = User.all
		@user = User.find(params[:id])
		
	end


	private

	# def user_params
	# 	params.require(:user).permit(:first_name, :last_name, :username, :email, :password)
	# end





end
