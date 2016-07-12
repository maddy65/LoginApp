Ext.define('LoginApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'age', 'companyname','designation','birthdate'
    ],

    data: { items: [  
        { name: 'a', age: 20, companyname:'PC',designation:'Developer',birthdate:1/1/1995},
        { name: 'b', age: 25, companyname:'PC',designation:'Tester',birthdate:20/10/1991}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
