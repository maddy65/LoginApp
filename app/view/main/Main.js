/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('LoginApp.view.main.Main', {
    requires: ['Igo.*', 'PCIGO.view.main.MainModel', 'Ext.plugin.Viewport'],
    extend: 'Ext.container.Container',
    ui: 'navigation',
    height: '100%',
    width: '100%',
    layout: 'border',
    floating: true,
    controller: 'MainController',
    items: [{
        xtype: 'toolbar',
        height: 50,
        region: 'north',
        split: true, // enable resizing
        //margin: '0 5 5 5',
        items: [{
            xtype: 'image',
            width: 160,
            src: 'resources/images/newpowered.gif',
            style: "height: 30px;  left: auto; right: 1066px; top: 20px; margin: 0px;"
        }, '->', {
            xtype: 'image',
            height: 30,
            width: 30,
            tooltip: 'About',
            position: 'right',
            margin: '0 4 0 0',
            hidden: false,
            src: 'resources/images/a.png'
        }]

    }, {
        title: 'Charts',
        region: 'west',
        xtype: 'panel',
        width: 230,
        split: true,
        items: [{
            xtype: 'button',
            height: 50,
            width: 220,
            text: 'Line Chart',
            name: 'linechart',
            icon: 'resources/images/line.png',
            iconAlign: 'left',
            textAlign: 'left',
            scale: 'large',
            margin: '5 0 0 5',
            handler: 'onLineChartClick'
        }, {
            xtype: 'button',
            height: 50,
            width: 220,
            text: 'Bar Chart',
            textAlign: 'left',
            name: 'barchart',
            icon: 'resources/images/bar.png',
            iconAlign: 'left',
            scale: 'large',
            margin: '5 0 0 5',
            handler: 'onBarChartClick'
        }, {
            xtype: 'button',
            height: 50,
            width: 220,
            textAlign: 'left',
            text: 'Scatter Plot',
            name: 'scatterplot',
            icon: 'resources/images/scatterC.png',
            iconAlign: 'left',
            scale: 'large',
            margin: '5 0 0 5'
                //handler: 'onBoxPlotClick'
        }, {
            xtype: 'button',
            height: 50,
            width: 220,
            textAlign: 'left',
            text: 'Whisker Plot Horizontal',
            name: 'whiskerplothori',
            icon: 'resources/images/hboxPlot.png',
            iconAlign: 'left',
            scale: 'large',
            margin: '5 0 0 5',
            handler: 'onBoxPlotClick'

        }, {
            xtype: 'button',
            height: 50,
            width: 220,
            text: 'Whisker Plot Vertical',
            textAlign: 'left',
            name: 'whiskerplot',
            icon: 'resources/images/boxPlot.png',
            iconAlign: 'left',
            scale: 'large',
            margin: '5 0 0 5'
        }, {
            xtype: 'button',
            height: 50,
            width: 220,
            text: 'Settings',
            textAlign: 'left',
            name: 'settings',
            icon: 'resources/images/settings.png',
            iconAlign: 'left',
            scale: 'large',
            margin: '5 0 0 5'
        }]
    }, {
        xtype: 'panel',
        region: 'center',
        height : '100%',
        id: 'center',
        layout: 'card',
        border: true,
        items: [{
            xtype : 'om',
            id : 'om'
        },{
            xtype : 'off',
            id : 'off'
        }]
    }]
});