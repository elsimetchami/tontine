/**
 * Store for managing staff
 */
Ext.define('Compare.store.Staff', {
	 extend: 'Compare.store.Base',
    alias: 'store.staff',
    requires: [
        'Compare.model.Staff'
    ],
    // storeId: 'Staff',
    model: 'Compare.model.Staff',
    autoload:true,
    // data: [
    //     { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
    //     { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
    //     { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
    //     { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
    // ]
    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]},
    
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
   
});
