Ext.define('LoginApp.view.datasetLevel.DataFormatController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.DataFormatController',
   init: function() {
        var me = this;
        var modelDataObj = me.view.modelDataObj;
		var saveBtn=me.view.down('button[name=submit]');
		var textfield = me.view.down('textfield[name=Name]');
        me.control({
            "button[name=submit]": {
                click: me.onSaveBtns
            },
            "button[name=cancel]": {
                click: me.onClose
            },
            'grid[primary]': {
                selectionchange: function(cmp,selected) {
					saveBtn.setDisabled(!selected.length||textfield.getValue().length!=2);
                }
            }
        });
    },
    buildDatasetGrids: function(data, metaData) {
        var p = this,
            me = p.view,
            cnt = me.down("container[name=gridtabs]"),
            dName = me.down('textfield[name=Name]').value,
            datasettabpanel = Ext.create('Ext.tab.Panel', {
                layout: 'fit',
                scroll: false
            }),
            MyGrid = [];
        data = Ext.isObject(data) ? [data] : data;
        for (var i = 0; i < data.length; i++) {
            var value = data[i].DMNAME;
            var newgrids = Ext.create({
                xtype: 'grid',
                storeXml:{"ROOT":{ "DATA":data[i],"HEADER":metaData}},
                gridId: data[i]["ID"],
			 });
            MyGrid.push(newgrids);
        }
        cnt.removeAll();
        datasettabpanel.add(MyGrid);
        datasettabpanel.setActiveTab(0);
        cnt.add(datasettabpanel);
    },
   buildXmlDatasetBtns: function() {
        var me = this,
            grids = me.view.down('tabpanel').query("grid"),
            dName = me.view.down('textfield[name=Domain]').value,
            cName = me.view.down('combobox[name=class]').value,
            refdtid = me.view.mainData.ROOT.DATA.REFDTDID,
            refdtdver = me.view.mainData.ROOT.DATA.REFDTDVER;
       for(var i = 0;i<grids.length;i++){
            var selectedRecs = grids[i].getSelection();
            if(selectedRecs.length){
                var dObj = {
                    'GridID': grids[i].gridId,
                };
                for(var j=0;j<selectedRecs.length;j++){
                    dObj["I"].push({
                        '@REFOBJID': selectedRecs[j].get("ID")
                    })
                }
                rootObj.D.push(dObj);
            }
        }
        var rootXml = PC.Util.objectToElement('R', rootObj, []).join('');
        return rootXml;
    },
    /*
     * The code below will work on click of save.
     */
    onSaveBtns: function(btn) {
        var me = this,
            modelDataObj = me.view.modelDataObj,
            parentgrid = me.view.parentgrid,
            strIPXml = me.buildXmlDatasetBtns(),
            window = btn.up("window");
        var url = URL
        EXT.Ajax.request({
            url: url,
            params: {
                'strIPXML': strIPXml
            },
            me: me,
            parentgrid: parentgrid,
            headers: {
                "Accept": "application/json; charset=utf-8",
                'X-HTTP-Method-Override': "PUT"
            },
            _success: function(response, args) {
                this.parentgrid.getStore().reload();
                window.close();
            }
        });
    },
    onClose: function(btn) {
        var window = btn.up("window");
        window.close();
    }
});
