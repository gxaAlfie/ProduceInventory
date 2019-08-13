class Produce::SearchesController < ApplicationController
  def show
    search_query       = Search::Query.new(params).query
    @produce_container = Produce::Paginator.new(search_query)
    render json: {
      produce: @produce_container.produce_list
    }
  end
end
