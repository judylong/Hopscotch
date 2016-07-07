module Api
  class NotesController < ApiController
    def index
      @notes = Note.all
      render json: @notes
    end
  end
end
