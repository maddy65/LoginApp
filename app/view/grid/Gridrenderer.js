Ext.define("LoginApp.view.grid.Gridrenderer", {
    singleton: true,
    dataRender: function(value, metaData, record, rowIndex, colIndex, store, view) {
         return Ext.util.Format.htmlEncode(value);
        }
    },
  dateRender: function(value, metaData, record, rowIndex, colIndex, store, view) {
		    return Ext.util.Format.htmlEncode(value);
    },


    comboRender: function(value, metaData, record, rowIndex, colIndex, store, view) {
       return Ext.util.Format.htmlEncode(val);
    }
});
