/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('app1.Application', {
    extend: 'Ext.app.Application',
    
    name: 'app1',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        var loggedIn;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("LoggedIn",true);

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.widget(loggedIn ? 'mainpanel' : 'login');

    }
});
