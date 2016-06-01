Ext.define('LoginApp.view.main.MainController',{
 });
/*Ext.create('Ext.panel.Panel', {
    width: '100%',
    height: '100%',
    id:'panel1',
    alias: 'widget.mainPanel',
	name:'mainPanel',
    layout: 'border',
    docked: 'top',
    floating: true,
	items: [{
		xtype:'toolbar',
		height: 50,
		region: 'north', 
		split: true,         // enable resizing
		margin: '0 5 5 5',
        items:[
        	{	
				xtype : 'image',
				width:160,    
				src :'resources/images/newpowered.gif',
				style: "height: 30px;  left: auto; right: 1066px; top: 20px; margin: 0px;"
			},'->',{
			xtype:'button',
			aling:'right',
			text:'Log Off',
			handler:function(button){
				//debugger;
			}
			},{
				xtype : 'image',
				height :30,
				width : 30,
				tooltip:'About',
				position:'right', 	
				margin : '0 4 0 0',
				hidden : false,
				src :'resources/images/icon16_info.png'
			},{
				xtype : 'image',
				height :30,
				width : 30,
				tooltip:'Settings',
				position:'right', 	
				margin : '0 4 0 0',
				hidden : false,
				src :'resources/images/more.png'
			}
        ]

	},
    {
        title: 'Employee Details',
        region:'west',
        xtype: 'panel',
        margin: '5 0 0 5',
        width: 200,
		split:true,
        collapsible:false,   // make collapsible
		items:[
		{
			xtype:'button',
			text:'Enter Details',
			width:190,
			height:40,
			margin: '5 0 0 5',
			handler:function(button){
				var center = Ext.getCmp('center');
					center.add(Ext.ComponentMgr.create({
					    itemId: 'despanel',
            			xtype: 'despanel'
					}));
					center.getLayout().setActiveItem('despanel');
					center.remove('ascpanel', true);
			}
		},
		{
			xtype:'button',
			 margin: '5 0 0 5',
			text:'Display Details',
			width:190,
			height:40,
			handler:function(button){
				//debugger;
				var center = Ext.getCmp('center');
					center.add(Ext.ComponentMgr.create({
					    itemId: 'ascpanel',
            			xtype: 'ascpanel'
					}));
					center.getLayout().setActiveItem('ascpanel');
					center.remove('despanel', true);
			}
		}
	]
		
    },
	{
      id: 'center',
      region: 'center',
      layout: 'card',
      border:true,
	  title:'User Form',
      activeItem:0,
      items:[{
	    		itemId: 'despanel',        //form
	        	xtype: 'despanel'
        	},{
	        	itemId: 'ascpanel',        //grid
	            xtype: 'ascpanel'
       		 }]
    }],
    renderTo: Ext.getBody()
});*/