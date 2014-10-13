class List < ActiveRecord::Base
  validates :title, :board, :ord, presence: true

  belongs_to :board
  has_many :cards, dependent: :destroy

  default_scope { order(:ord) }
end
