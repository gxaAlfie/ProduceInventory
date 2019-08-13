class Search::Query
  attr_reader :query

  def initialize(params)
    @query = {
      text: params[:text]
    }
  end
end
