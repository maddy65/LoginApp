Ext.define("LoginApp.view.main.IgoPanel", {
	extend : "Ext.tab.Panel",
	alias : 'widget.IgoPanel',
	initComponent : function () {
		var me = this;
		me.items = [];
		me.callParent( arguments);
	},
	items:[{
			xtype: 'igoPanel',
            itemId: 'igp4',
            showZoom: true,
            showLegends: true,
            showSlider: false,
            showDataGrid: true,            
            chartType: 'line',
			controlPanel: false,
            orientation: 'x'
	}],
	
});