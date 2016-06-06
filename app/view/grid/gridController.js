Ext.define('LoginApp.view.grid.gridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.gridController',
    init: function() {
        var me = this;
        var delbtn = me.view.down('button[name = delbtn]');
        me.control({
            "button[name = delbtn]": {
                click: me.delHandler
            }
        });
    },
    delHandler: function(button) {
        debugger;
        var store = button.up('grid').getStore();
        var xyz = button.up('grid');
        var selection = xyz.getSelectionModel().getSelection()
        store.remove(selection);
		Ext.Msg.alert('Status', 'Record Deleted!!');
    }
});