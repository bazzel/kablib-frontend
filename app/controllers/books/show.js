import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['login'],
  currentUser: Ember.computed.alias('controllers.login.currentUser'),
  isEditing: false,
  tags: function() {
    return this.get('tagList').split(',');
  }.property('tagList'),
  actions: {
    toggleEditing: function() {
      this.toggleProperty('isEditing');
      this.get('model').rollback();
    },
    submit: function() {
      var book = this.model,
         _this = this;

      book.save().then(function() {
        _this.clearValidationErrors();
        _this.set('isEditing', false);
      }, function(reason) {
        _this.set('validationErrors', reason.errors);
      });
    },
    checkOut: function() {
      var book = this.model;
      var borrow = this.store.createRecord('borrow', {
        book: book,
        user: this.get('currentUser')
      });
      borrow.save().then(function() {
        book.set('latestBorrow', borrow);
      });
    },
    returnBook: function() {
      var book = this.model;
      var borrow = book.get('latestBorrow');
      var _this = this;

      borrow.set('finishedOn', new Date());
      borrow.save().then(function() {
        book.set('latestBorrow', null);
        var review = _this.store.createRecord('review', {
          book: book,
          user: _this.get('currentUser')
        });
        _this.send('openModal', 'reviews/new', review);
      });
    },
    delete: function() {
      var _this = this;

      this.model.destroyRecord().then(function() {
        _this.transitionToRoute('books');
      });
    },
    removeCoverImage: function() {
      this.model.set('coverImage', null);
    }
  },
  isCheckedOutByCurrentUser: function() {
    return this.get('borrowedBy') === this.get('currentUser');
  }.property('currentUser', 'borrowedBy'),
  clearValidationErrors: function() {
    this.set('validationErrors', null);
  }
});
