class Board < ActiveRecord::Base
  belongs_to :user
  has_many :lists, dependent: :destroy
  has_many :board_memberships, dependent: :destroy
  has_many :members, through: :board_memberships, source: :user

  validates :title, :user, presence: true

  def is_member?(user)
    return true if user.id == self.user_id
    board_memberships.where(user_id: user.id).exists?
  end
end
