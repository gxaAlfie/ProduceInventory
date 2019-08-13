class Produce::Paginator
  def initialize(query={})
    @produce = Produce.all
  end

  def produce_list
    @produce
  end
end
