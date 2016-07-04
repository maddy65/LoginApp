
Ext.define('LoginApp.view.main.onController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.onController',
    init: function() {
        
        this.listen({
            component: {
                '#igp1': {
                    onboxplotclick: this.onBoxPlotClick
                },
                '#igp2': {
                    onbarchartclick: this.onBarChartClick
                },
                '#igp3': {
                    onwhiskerplotclick: this.onWhiskerPlotClick
                },
                '#igp4': {
                    onlinechartclick: this.onLineChartClick
                },

            }
        });
    },
    onShowDefinites: function(rec, chart) {

        var definitesWin = Ext.ComponentQuery.query('#' + chart.graphId + 'DefinitesWindow')[0];

        if (!definitesWin) {
            definitesWin = new IGO6.view.DefinitesWindow({
                itemId: chart.graphId + 'DefinitesWindow'
            });
            definitesWin.setWidth(1100);
            definitesWin.setHeight(600);
        }
        definitesWin.show();

        IgoChartFactory.createChartFromUrl('igp2', 'http://localhost:85/IGO6.0/Pdf_Sample1A.json');
        IgoChartFactory.createChartFromUrl('igp3', 'http://localhost:85/IGO6.0/Pdf_Sample1A.json');
    },
    onBoxPlotClick: function() {
        IgoChartFactory.createChartFromUrl('igp1', 'http://localhost:85/IGO6.0/output1A.json', 'linear');

    },
    onLineChartClick: function() {
        IgoChartFactory.createChartFromUrl('igp4', 'http://localhost:85/IGO6.0/Pdf_Sample1A.json', 'linear');
    },
    onWhiskerPlotClick: function() {
        debugger;
        IgoChartFactory.createChartFromUrl('igp3', 'http://localhost:85/IGO6.0/output1A.json', 'linear');

    },
    onBarChartClick:function(){
        debugger;
        IgoChartFactory.createChartFromUrl('igp2', 'http://localhost:85/IGO6.0/output1A.json','linear');
    },
    onSettingsClick: function() {
        Ext.create('Ext.window.Window', {
            items: [{
                xtype: 'checkboxPanel',
            }]
        }).show();

    },

    afterIgoReady: function(pnl, width, height, eOpts) {}
});