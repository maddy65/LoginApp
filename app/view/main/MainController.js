/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('LoginApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.MainController',
    init: function() {
        var Settings = this.view.down('button[name = settings]');
        this.control({
            "button[name =settings]": {
                click: this.onSettingsClick
            },
        });

        
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