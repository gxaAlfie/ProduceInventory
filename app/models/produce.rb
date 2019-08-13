class Produce < ApplicationRecord
  mount_uploader :avatar, AvatarUploader
  mount_uploader :banner, BannerUploader
end
