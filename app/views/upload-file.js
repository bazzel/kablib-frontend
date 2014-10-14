import Ember from 'ember';

export default Ember.TextField.extend({
  tagName: 'input',
  type: 'file',
  attributeBindings: ['name'],
  change: function (e) {
    var reader = new FileReader(),
    that = this;
    reader.onload = function (e) {
      var fileToUpload = e.srcElement.result;
      Ember.run(function() {
        that.set('file', fileToUpload);
      });
    };
    return reader.readAsDataURL(e.target.files[0]);
  }
});
