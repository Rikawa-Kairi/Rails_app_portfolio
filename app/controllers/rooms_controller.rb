class RoomsController < ApplicationController
  before_action :authenticate_user!

  def index
    @rooms = current_user.rooms.joins(:messages).includes(:messages).order("messages.created_at DESC")
    @rooms.each do |room|
      pp room
    end

    @currentEntries = current_user.entries #ログインユーザーの入っているroomをすべて取得
    myRoomIds = []

    @currentEntries.each do |entry|
      myRoomIds << entry.room.id #配列の中にログインuserのroom.idを代入,[32, 33]
    end
    
    @anotherEntries = Entry.where(room_id: myRoomIds).where('user_id != ?',current_user.id)
    
  end

  def create
    @room = Room.create
    @entry1 = Entry.create(user_create1)
    @entry2 = Entry.create(user_create2)
    redirect_to "/rooms/#{@room.id}"
  end
# @entry1にも同じpost_idを保存するか。imageがnilの時に投稿相手の画像を参照するか。相手からチャットが来た場合のみimgが表示できない。
  def show
    @room = Room.find(params[:id])
    if Entry.where(:user_id => current_user.id, :room_id => @room.id).present? #オブジェクトが存在すればtrueを返す
      @messages = @room.messages
      @message = Message.new
      @entries = @room.entries
      # pp @entries
      myRoomIds = []
      
      @entries.each do |entry|
        myRoomIds << entry.room.id #配列の中にログインuserのroom.idを代入,[32, 33]
      end
      @anotherEntries = Entry.where(room_id: myRoomIds).where('user_id != ?',current_user.id)
    else
      redirect_back(fallback_location: root_path)
    end
  end
  

  def destroy
    room = Room.find(params[:id])
    if room.destroy
      redirect_to root_path
    end
  end
    # @currentEntries = current_user.entries #ログインユーザーの入っているroomをすべて取得
    # myRoomIds = []
    # #  @currentEntries id: 65,user_id: 6,room_id: 33,

    # @currentEntries.each do |entry|
    #   myRoomIds << entry.room.id #配列の中にログインuserのroom.idを代入,[32, 33]
    # end
    
    # @anotherEntries = Entry.where(room_id: myRoomIds).where('user_id != ?',current_user.id)
    # #@anotherEntriesでEntryからdm相手を取得
    # pp @anotherEntries

    # @posts = Message.where(room_id: myRoomIds).order(updated_at: :desc) #room_idからログインユーザーが関わっているすべてのcontent取得
    # pp @posts

    private
    def user_create1
      params.require(:entry).permit(:user_id, :room_id, :post_id).merge(room_id: @room.id, user_id: current_user.id)
    end
  
    private
    def user_create2
      params.require(:entry).permit(:user_id, :room_id, :post_id).merge(room_id: @room.id)
    end

end