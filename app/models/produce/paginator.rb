class Produce::Paginator
  def initialize
    @produce = Produce.all
  end

  def produce_list
    @produce
  end
end
