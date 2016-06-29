Ext.define('LoginApp.view.main.CheckBoxController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.CheckBoxController',
    /*  
     *  The code below is for the controller of window.
     */
    init: function() {
       // debugger;
    	var me = this.view;
        var abc = this.view.down().up().down();
        var xyz = this.view.down().up().down('checkboxfield[name = ctrlPanel]');
        /*if(xyz.checked == true){
            debugger;
        }*/
    }
});    