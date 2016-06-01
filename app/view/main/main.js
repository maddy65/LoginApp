/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('LoginApp.view.main.Main', {
    extend: 'Ext.container.Container',
    

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },
	centerElCls:'LoginApp.view.grouptabPanel.Container',
    initComponent: function(){
        var p = this;
        p.callParent(arguments);
    }

/*    items: [{        
        xtype: 'panel',
        bind: {
            title: 'Basic Panel'
        },
        region: 'center ',
       html: '<ul><li>click button to view result</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Button',
            //handler: 'onClickButton'
        }]
    },{
       region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Tab 1',
            html: '<h2>Content appropriate for the current navigation.</h2>'
        }]
    }]*/
});
