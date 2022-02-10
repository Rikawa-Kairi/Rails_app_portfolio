class RoomsController < ApplicationController
  before_action :authenticate_user!

  def index
    @rooms = current_user.rooms.joins(:messages).includes(:messages).order("messages.created_at DESC")
  end

  def create
    @room = Room.create
    @entry1 = Entry.create(:room_id => @room.id, :user_id => current_user.id)
    @entry2 = Entry.create(params.require(:entry).permit(:user_id, :room_id).merge(:room_id => @room.id))
    redirect_to "/rooms/#{@room.id}"
  end

  def show
    @room = Room.find(params[:id])

    if Entry.where(:user_id => current_user.id, :room_id => @room.id).present? #オブジェクトが存在すればtrueを返す
      @messages = @room.messages
      @message = Message.new
      @entries = @room.entries
      pp @entries
      myRoomIds = []
      #  @currentEntries id: 65,user_id: 6,room_id: 33,

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

end