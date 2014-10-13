module Api
  class BoardsController < ApiController
    def create
      @board = current_user.boards.new(board_params)

      if @board.save
        render json: @board
      else
        render json: @board.errors.full_messages, status: 402
      end
    end

    def destroy
      @board = current_user.boards.find(params[:id])
      @board.destroy

      render json: {}
    end

    def index
      @boards = current_user.boards
      render json: @boards
    end

    def show
      @board = Board.includes(:members, lists: :cards).find(params[:id])

      render :show
    end

    private

    def board_params
      params.require(:board).permit(:title)
    end
  end
end
