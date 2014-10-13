import AuthenticatedRoute from './authenticated-route';

export default AuthenticatedRoute.extend({
  model: function() {
    this.store.find('book');

    return this.store.filter('book', function(book) {
      return !book.get('isNew');
    });
  }
});
