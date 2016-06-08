Ext.define('LoginApp.view.Panel.MainPanelController', {
	extend : 'Ext.app.ViewController',
	alias:'controller.MainPanelController',
	init: function() {
		debugger;
		var me = this;
		var EnterDetails = me.view.down('button[name = EnterDetails]');
		var DisplayDetails = me.view.down('button[name = DisplayDetails]');
		me.control({
            "button[name = DisplayDetails]": {
                click: me.DisplayDetailsHandler
			}
            },{
            "button[name = EnterDetails]": {
                click: me.EnterDetailsHandler
            }
		});
	
	},
	DisplayDetailsHandler:function(button){
			debugger;
			var center = Ext.getCmp('center');
				center.add(Ext.ComponentMgr.create({
					itemId: 'ascpanel',
					xtype: 'ascpanel'
				}));
				center.getLayout().setActiveItem('ascpanel');
				center.remove('despanel', true);
	}, 
	EnterDetailsHandler: function(button){
					debugger;
					var center = Ext.getCmp('center');
					center.add(Ext.ComponentMgr.create({
					    itemId: 'despanel',
            			xtype: 'despanel'
					}));
					center.getLayout().setActiveItem('despanel');
					center.remove('ascpanel', true);
			}
});
