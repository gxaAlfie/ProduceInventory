produce_names = ["Potato", "Carrot", "Cabbage", "Onion", "Garlic"]

produce_list = produce_names.map do |produce_name|
  Produce.where(name: produce_name).first_or_create do |produce|
    produce.quantity = 5
    produce.price    = 50
    produce.measurement_unit = "kg"
    produce.avatar = File.open(File.join(Rails.root, "app/assets/images/vegetables.jpg"))
    produce.banner = File.open(File.join(Rails.root, "app/assets/images/no-banner.png"))
  end
end
