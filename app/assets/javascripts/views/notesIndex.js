Hopscotch.Views.NotesIndex = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addNote);
    this.collection.each(this.addNote.bind(this));
    this.listenTo(this.collection, "remove", this.removeNote);
  },
  template: JST['notes/index'],
  events: {
    "click button.new-note": "newNote",
  },
  render: function() {
    var content = this.template({collection: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
  addNote: function(note) {
    var subview = new Hopscotch.Views.Note({model: note});
    this.addSubview('.notes-index', subview);
  },
  removeNote: function(note) {
    this.removeModelSubview('.notes-index', note);
  },
  newNote: function() {
    var newNote = new Hopscotch.Models.Note();
    this.collection.add(newNote);
  }
});
