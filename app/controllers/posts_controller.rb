class PostsController < ApplicationController
  before_action :ensure_correct_user, only:[:destroy, :edit]

  def index
    @posts = Post.all.order(updated_at: 'desc')
  end

  def search
    @posts = Post.search(params[:keyword]).order(updated_at: 'desc')
    @keyword = params[:keyword]
    render :index
  end

  def inquiry
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to root_path
    else
      render new_post_path
    end
  end

  def show
    @post = Post.find(params[:id]) #投稿情報取得
    pp @post
    @user = User.find(@post.user_id) #投稿主のデータ取得
    @comments = @post.comments
    @comment = Comment.new
    @currentUserEntry=Entry.where(user_id: current_user.id) #ログイン主userのroomをすべて取得
    @userEntry=Entry.where(user_id: @user.id) #投稿主の入っているトークルームを取得
    if @user.id == current_user.id #投稿主とログイン主のidが等しかったら
    else
      @currentUserEntry.each do |cu| #ログイン主の入っているトークルームを
        @userEntry.each do |u| #投稿主の入っているトークルームを
          if cu.room_id == u.room_id then #ログ主の入っている部屋と投稿主の入っている部屋が等しかったら
            @isRoom = true 
            @roomId = cu.room_id #ログ主のroom_id
          end
        end
      end

      if @isRoom
      else
        @room = Room.new
        @entry = Entry.new
      end
    end
  end

  def destroy
    post = Post.find(params[:id])
    if post.destroy
      redirect_to root_path
    end
  end

  def edit
    @post = Post.find(params[:id])
    @town_id = @post.town_id
  end

  def update
    @post = Post.find(params[:id])
    @post.update(update_params)
    redirect_to root_path
  end

  def mypage
    @posts = Post.where(user_id: current_user.id).includes(:user).order("created_at DESC")
  end

  def ensure_correct_user
    @post = Post.find(params[:id])
     unless @post.user_id == current_user.id
     redirect_to root_path, alert: "権限がありません"
   end
  end


  
  private
  def post_params
    params.require(:post).permit(:title, :content, :price, :image_name, :image, :prefectures, :city_id, :town_id ).merge(user_id: current_user.id)
  end

  private
  def update_params
    params.require(:post).permit(:title, :content, :price, :image, :prefectures, :city_id, :town_id)
  end
  
end


