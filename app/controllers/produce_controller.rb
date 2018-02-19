class ProduceController < ApplicationController
  def index
    @produce_container = Produce::Paginator.new
  end

  def show
  end

  def new
  end

  def edit
  end

  def create
  end

  def update
  end

  def destroy
  end
end
