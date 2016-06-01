Ext.define('LoginApp.view.login.Login', {
    extend: 'Ext.window.Window',
	requires: [
        'LoginApp.view.login.LoginController'
    ],

    controller: 'LoginController',
    bodyPadding: 10,
    alias:  'widget.login',
    title: 'Login Window',
    closable: false,
    autoShow: true,
	layout:'fit',
	height:200,
	width:500,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});
