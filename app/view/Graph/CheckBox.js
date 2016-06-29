Ext.define('LoginApp.view.main.CheckBox', {
    extend: 'Ext.form.Panel',
    alias: 'widget.checkboxPanel',
    requires: [
        "PCIGO.view.main.CheckBoxController"
    ],
    controller: 'CheckBoxController',
    height: 300,
    width: 400,
    layout: 'fit',
    bodyPadding: 10,
    items: [{
        xtype: 'fieldcontainer',
        fieldLabel: 'Select Panels',
        defaultType: 'checkboxfield',
        items: [{
            boxLabel: 'Control Panel',
            name: 'ctrlPanel',
            inputValue: '1',
            id: 'checkbox1',
             handler: function (field, value) {
                debugger;
                var center=Ext.getCmp('center');
                var ctrl = center.items.items;
                var data = true; /*{
                            controller: true
                        };*/
                if (this.checked == true) {
                    for(var i=0; i<ctrl.length; i++){
                        ctrl[i].controller = data;
                    }
                    
                }/*else{
                    debugger;
                    for(var i=0; i<ctrl.length; i++){
                        ctrl[i].controller = false;
                    }
                }
            }*/
        }},{
            boxLabel: 'Legend Panel',
            name: 'legendPanel',
            inputValue: '2',
            id: 'checkbox2'
        }, {
            boxLabel: 'Selection Panel',
            name: 'selectPanel',
            inputValue: '3',
            id: 'checkbox3'
        }, {
            boxLabel: 'Slider Panel',
            name: 'sliderPanel',
            inputValue: '4',
            id: 'checkbox4'
        }, {
            boxLabel: 'Zoom Panel',
            name: 'zoomPanel',
            inputValue: '5',
            id: 'checkbox5'
        }]
    }],
    /*bbar: [
        {
            //text: 'Select Bacon',
            handler: function() {
                if(Ext.getCmp('checkbox1').setValue(true)){
                    debugger;
                }
                
            }
        },
        '-',
        {
            text: 'Select All',
            handler: function() {
                Ext.getCmp('checkbox1').setValue(true);
                Ext.getCmp('checkbox2').setValue(true);
                Ext.getCmp('checkbox3').setValue(true);
            }
        },
        {
            text: 'Deselect All',
            handler: function() {
                Ext.getCmp('checkbox1').setValue(false);
                Ext.getCmp('checkbox2').setValue(false);
                Ext.getCmp('checkbox3').setValue(false);
            }
        }
    ],*/
    /*onBoxPlot: function() {
        IgoChartFactory.createChartFromUrl('igp5', 'http://localhost:85/IGO6.0/output1A.json', 'linear');

    },*/
    renderTo: Ext.getBody()
});