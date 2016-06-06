/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
 Ext.define('LoginApp.store.userStore',{
  extend : 'Ext.container.Container',
    ui : 'formnavigationbtn',
    alias: 'widget.ascpanel',
    height : 300,
    width : 300,
    region : 'center',
	controller:'gridController',
    bodyPadding : 20,
    items:[{
        xtype:'grid',
		selType: 'checkboxmodel',
        width: 600,
        height: 200,
        title: 'User Details',
        store: Ext.create('Ext.data.Store', {
        fields: ['active', 'firstname', 'age', 'companyname','designation','birthdate','sex'],
        data: [
				{active:false, firstname: 'a', age: 20, companyname:'PC',designation:'Developer',birthdate:'1/1/1995',sex:'M'},
                {active:true, firstname: 'b', age: 25, companyname:'PC',designation:'Tester',birthdate:'10/20/1991',sex:'F'}
                
			  ]
			}),
        columns:[{
            text: 'Name',
            width: 100,
            sortable: false,
            hideable: false,
            dataIndex: 'firstname'
        },
        {
            text: 'Age',
            width: 50,
            dataIndex: 'age',
            hidden:false
        },
        {
            text: 'Organization',
            width: 150,
            dataIndex: 'companyname',
            hidden:false
        },
        {
            text: 'Designation',
            width: 150,
            dataIndex: 'designation',
            hidden:false
        },
        {
            text: 'DOB',
            width: 100,
            dataIndex: 'birthdate',
            hidden:false,
            dateFormat: 'm/d/Y'
        },
        { 
            text: 'Sex',
            width: 50,
            dataIndex: 'sex',
            hidden:false
        }],
		dockedItems: [{
				xtype: 'toolbar',
				dock: 'bottom',
				items: [{
							text:'Delete',
							name:'delbtn'
						}]
		}]
    }]
    });
