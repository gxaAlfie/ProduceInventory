class ProduceController < ApplicationController
  before_action :set_produce, only: [:show]

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

  private
  def set_produce
    @produce = Produce.find(params[:id])
  end
end
