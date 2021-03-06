class CommentsController < ApplicationController
  before_action :set_post

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      redirect_to post_path(@post),notice: 'コメント投稿しました'
    else
      redirect_to post_path(@post),alert: '投稿に失敗しました'
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if current_user.id == @comment.user.id
      @comment.destroy
    redirect_to post_path(@post),notice: 'コメントを削除しました'
    else
      redirect_to post_path(@post),alert: '削除に失敗しました。'
    end
  end

  private

  def set_post
    @post = Post.find(params[:post_id])
  end

  def comment_params
    params.require(:comment).permit(:comment_content, :post_id)
  end
end
