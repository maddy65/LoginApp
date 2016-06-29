/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('LoginApp.view.main.off', {
    requires: ['Igo.*', 'PCIGO.view.main.MainModel', 'Ext.plugin.Viewport'],
    extend: 'Ext.container.Container',
    height: '100%',
    width: '100%',
    alias: 'widget.off',
    region: 'center',
    border: true,
    controller: 'onController',
    items: [{
            xtype: 'igoPanel',
            itemId: 'igp1',
            showZoom: true,
            showLegends: true,
            showSlider: false,
            height: '100%',
            showDataGrid: true,
            chartType: 'groupedBoxPlot',
            controlPanel: true,
            orientation: 'x'
        }, {
            xtype: 'igoPanel',
            itemId: 'igp4',
            showZoom: false,
            showLegends: true,
            showSlider: false,
            showDataGrid: true,
            chartType: 'line',
            height: '100%',
            controlPanel: true,
            orientation: 'x'
        },{
            xtype: 'igoPanel',
            itemId: 'igp2',
            showZoom: true,
            showLegends: true,
            height: '100%',
            showSlider: false,
            showDataGrid: true,
            chartType: 'bar',
            controlPanel: true,
            orientation: 'x'
        },{
            xtype: 'igoPanel',
            itemId: 'igp3',
            showZoom: true,
            showLegends: true,
            showSlider: false,
            height: '100%',
            showDataGrid: true,
            chartType: 'Box Plot',
            controlPanel: true,
            orientation: 'y'
        },{
            xtype: 'igoPanel',
            itemId: 'igp5',
            showZoom: true,
            height: '100%',
            showLegends: true,
            showSlider: false,
            showDataGrid: true,
            chartType: 'groupedBoxPlot',
            controlPanel: true,
            orientation: 'x'
        }]
});
