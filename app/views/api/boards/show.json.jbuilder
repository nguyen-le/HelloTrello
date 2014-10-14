json.extract!(@board, :title)

json.lists @board.lists do |list|
  json.extract!(list, :title, :ord)

  json.cards list.cards do |card|
    json.extract!(card, :title, :description, :ord)
    json.items card.items do |item|
      json.extract!(item, :title, :done)
    end
  end

end
