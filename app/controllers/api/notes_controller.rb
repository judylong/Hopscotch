module Api
  class NotesController < ApiController
    def index
      @notes = Note.all
      render json: @notes
    end

    def update
      @note = Note.find(params[:id])
      if @note.update_attributes(note_params)
        render json: @note
      else
        render json: @note.errors.full_messages, :status => 422
      end
    end

    def create
      @note = Note.new(note_params)
      if @note.save
        render json: @note
      else
        render json: @note.errors.full_messages, :status => 422
      end
    end

    def destroy
      @note = Note.find(params[:id])
      @note.destroy if @note
      render json: {}
    end

    private
    def note_params
      params.require(:note).permit(:words)
    end
  end
end
