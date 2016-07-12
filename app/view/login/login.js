Ext.create('LoginApp.store.login',{
extend : 'Ext.window.Panel',
ui : 'formnavigationbtn',
alias: 'widget.newdatasetwindow',
height:200,
width:200,
region:'center',
bodyPadding:20,
title:'Login Form',
//xtype:'form',
initComponent : function () {
	//debugger;
	var me = this;
	
	me.items = [{
	xtype:'textfield',
	fieldLabel:"Username",
	name:'username'
	},
	{
	xtype:'textfield',
	fieldLabel:"Password",
	name:'password'
	}],
	me.dockedItems = [{
				xtype: 'toolbar',
				dock: 'bottom',
				items:[{
					text:'Login',
					handler:function(){
						//debugger;
					}
				},
				{
					text:'Cancel',
					handler:function(){
						//debugger;
					}
				}]
	}]
			this.callParent(arguments);
}

});