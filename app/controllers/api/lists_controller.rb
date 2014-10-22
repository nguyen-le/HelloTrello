module Api
  class ListsController < ApplicationController
    def create
      @list = List.new(list_params)
      if @list.save
        render json: @list
      else
        render json: @list.errors.full_messages, status: 402
      end
    end

    private

    def list_params
      params.require(:list).permit(:title, :board_id, :ord)
    end
  end
end
