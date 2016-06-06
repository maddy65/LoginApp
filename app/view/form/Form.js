/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('LoginApp.view.form.Form', {
    extend: 'Ext.form.Panel',
    ui: 'formnavigationbtn',
    alias: 'widget.despanel',
    height: 150,
    width: 300,
    region: 'center',
    bodyPadding: 20,
    controller: 'FormController',
    border: true,
    initComponent: function() {
       var me = this;
        this.on('beforeadd', function(me, field) {
            if (!field.allowBlank)
                field.labelSeparator += '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>';
        });
        var designation = Ext.create('Ext.data.Store', {
            fields: ['abbr', 'name'],
            data: [{
                "abbr": "dev",
                "name": "Developer"
            }, {
                "abbr": "hr",
                "name": "Human Resource"
            }, {
                "abbr": "tes",
                "name": "Tester"
            }, {
                "abbr": "tl",
                "name": "Technical Lead"
            }]
        });
        var sex = Ext.create('Ext.data.Store', {
            fields: ['abbr', 'name'],
            data: [{
                "abbr": "M",
                "name": "Male"
            }, {
                "abbr": "F",
                "name": "Female"
            }]
        });
        me.items = [{
                xtype: 'textfield',
                fieldLabel: 'Name',
                name: 'firstname',
                allowBlank: false
            }, {
                xtype: 'numberfield',
                fieldLabel: 'Age',
                name: 'age',
                value: '25',
                minValue: 0,
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Organization',
                name: 'companyname',
                allowBlank: false
            }, {
                xtype: 'combobox',
                fieldLabel: 'Designation',
                name: 'designation',
                allowBlank: false,
                store: designation,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'name',
				listeners: {
					change: function(ele, newValue, oldValue) {
					if ((oldValue != null) && (newValue != oldValue)) {
					alert('Desigation Changed');
					}
					}
				}
				
            }, {
                xtype: 'datefield',
                fieldLabel: 'DOB',
                allowBlank: false,
                name: 'birthdate'
            }, {
                xtype: 'radiogroup',
                fieldLabel: 'Sex',
                allowBlank: false,
                name: 'sex',
                layout: {
                    type: 'vbox'
                },
                items: [{
                    inputValue: 'M',
                    boxLabel: 'M',
                    name: 'sex'
                }, {
                    inputValue: 'F',
                    boxLabel: 'F',
                    name: 'sex'
                }]
            }],
            me.dockedItems = [{
                xtype: 'toolbar',
                dock: 'bottom',
                items: [{
                    text: 'Save',
                    disabled: true,
                    formBind: true,
                    name: 'savebtn'
                }, {
                    text: 'Clear',
					name:'clearbtn'
                }]
            }]
        this.callParent(arguments);
    }

});
