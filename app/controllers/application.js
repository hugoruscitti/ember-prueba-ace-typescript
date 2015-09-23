import Ember from 'ember';

export default Ember.Controller.extend({
  value: "// asdasdad",
  actions: {
    aceInit(editor) {
      editor.setHighlightActiveLine(false);
      editor.setShowPrintMargin(false);
      editor.getSession().setTabSize(2);
      //editor.getSession().setMode("ace/mode/javascript");
    }
  }
});
