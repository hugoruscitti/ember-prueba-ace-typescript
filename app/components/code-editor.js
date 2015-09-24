import Ember from 'ember';

export default Ember.Component.extend({
  value: "",

  didInsertElement: function() {
    this.editor = window.ace.edit(this.$('#editor')[0]);

    this.editor.getSession().setValue(this.get('value'));
    this.sendAction('aceInit', this.editor);

    this.editor.on('change', () => {
      this.set('value', this.editor.getSession().getValue());
    });
  },

  valueChanged: function () {
    if (!this.get('value')) {
      this.editor.getSession().setValue('');
    } else {
      if (this.editor.getSession().getValue() !== this.get('value')) {
        this.editor.getSession().setValue(this.get('value'));
      }
    }
  }.observes('value')
});
