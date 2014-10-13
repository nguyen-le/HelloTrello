class Board < ActiveRecord::Base
  belongs_to :user

  validates :title, :user, presence: true

  def is_member?(user)
    return true if user.id == self.user_id
    board_memberships.where(user_id: user.id).exists?
  end
end
