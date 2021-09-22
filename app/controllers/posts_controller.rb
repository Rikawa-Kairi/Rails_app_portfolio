class PostsController < ApplicationController

  def index
    @posts = Post.all.order(updated_at: 'desc')
  end

  def new
  end

  def create
    @post = Post.create(title: params[:title],content: params[:content],price: params[:price],city_id: params[:city_id],town_id: params[:town_id])
    if @post
      redirect_to "/"
    end
  end

  def show
    @post = Post.find_by(id: params[:id])
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    if @post.destroy
      redirect_to "/"
    end
  end

  def edit
    @post = Post.find_by(id: params[:id])
  end

  def update
    @post = Post.find_by(id: params[:id])
    @post.content = params[:content]
    @post.save
    redirect_to "/"
  end

end
