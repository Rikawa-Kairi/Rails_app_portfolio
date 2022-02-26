class MessagesController < ApplicationController
  before_action :authenticate_user!, :only => [:create]

  def create
    if Entry.where(:user_id => current_user.id, :room_id => params[:message][:room_id]).present?
      @message = Message.new(message_create)
      if @message.save
        redirect_to room_path(@message.room_id),notice: 'メッセージを送信しました'
      else
        redirect_to room_path(@message.room_id),alert: 'メッセージの送信に失敗しました'
      end
    else
      redirect_back(fallback_location: root_path)
    end
  end

  

  private
  def message_create
    params.require(:message).permit(:user_id, :content, :room_id).merge(user_id: current_user.id)
  end
end

