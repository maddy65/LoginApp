Ext.define('LoginApp.view.Panel.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.FormController',
    init: function() {
        //debugger;
        var me = this;
        var savebtn = me.view.down('button[name = savebtn]');
        var clearbtn = me.view.down('button[name = clearbtn]');
        me.control({
            "button[name = savebtn]": {
                click: me.saveHandler
            }, 
			"button[name = clearbtn]": {
                click: me.clearHandler
            }
    });
	},
    clearHandler: function(button) {
        debugger;
        var form = button.up('form').getForm();
        var vals = (form.getValues());
        var a = (form.reset(vals));
    },
    saveHandler: function(button) {
        debugger;
        var form = button.up('form').getForm();
        var vals = (form.getValues());
        var grid = Ext.ComponentQuery.query('gridpanel')[0];
        if (form.isValid()) {
            var b = grid.getStore();
            b.insert(0, vals);
			Ext.Msg.alert('Status', ' Saved successfully.');
        }
    }
});