Ext.define('LoginApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.LoginController',
    
    onLoginClick: function() {
		//debugger;
        var me =this;
       // this.getView().destroy();
       // me.setView('mainPanel');
        //Ext.widget('logpanel');
        var wdw = Ext.create("LoginApp.view.Panel.Mainpanel", {
            xtype: 'mainPanel'
        });
        this.view.destroy();
       //this.getView().destroy();


      

    }
});