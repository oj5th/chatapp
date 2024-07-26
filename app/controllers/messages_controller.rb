class MessagesController < ApplicationController
	def create
		@chatroom = Chatroom.find(params[:chatroom_id])
		@message = @chatroom.messages.build(message_params)
		if @message.save
			ChatroomChannel.broadcast_to(@chatroom, message: render_message(@message))
		end
	end

	private

	def message_params
		params.require(:message).permit(:content)
	end

	def render_message(message)
		render(partial: 'message', locals: { message: message })
	end
end
