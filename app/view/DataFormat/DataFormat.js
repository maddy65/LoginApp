Ext.define("LoginApp.view.DataFormat.DataFormat", {
    extend: "Ext.window.Window",
    alias: 'widget.DataFormat',
    layout: 'fit',
    scrollable: true,
    layout: 'fit',
    modal: true,
    requires: [
        "LoginApp.view.DataFormat.DataFormat"
    ],
    controller: 'DataFormat',
    /*
     * The code below is for view of new dataset.
     */
    initComponent: function() {
        var me = this, 
        var url = MyURl
        combstore = Ext.create('Ext.data.Store', {
            autoLoad: true,
            fields: [{
                name: 'value',
                mapping: "ITEMID",
                type: 'string'
            }, {
                name: 'name',
                mapping: "TITLE",
                type: 'string'
            }],
            proxy: new Ext.data.HttpProxy({
                type: 'PCAajax',
                actionMethods: {
                    read: "POST"
                },
                url: filepath.GET_CHILD_ELEMENTS,
                headers: {
                    'Accept': 'application/json; charset=utf-8'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'R.D.Result'
                },
                extraParams: {
                    strIPXML: strIPXML
                }
            })
        });
        me.tbar = [
            {
                xtype: 'textfield',
                labelAlign: "left",
                name: "NameD",
                maxLength : 2,
                enforceMaxLength : true,
                fieldLabel: NAME
            }, {
                fieldLabel: CLASS,
                xtype: 'combobox',
                queryMode: 'local',
                editable: false,
                window: me,
                name: 'class',
                forceSelection: true,
                allowBlank: false,
                displayField: 'name',
                valueField: 'value',
                disabled: true,
                store: combstore
            }
        ];
        me.items = [{
            xtype: 'container',
            name: 'gridtabs',
            layout:'fit',
            autoScroll:true
        }];
        me.buttons = ['->', {
            text: SUBMIT,
            name: "submit",
            hidden: me.readOnly,
            disabled: true
        }, {
            text: CLOSE,
            name: "cancel"
        }];
        me.callParent(arguments);
    }
})
