/**
 * Store for managing Typesexe
 */
Ext.define('Compare.store.Role', {
	extend: 'Ext.data.Store',
    alias: 'store.role',
    requires: [
        'Compare.model.Basearray'
    ],
    model: 'Compare.model.Basearray',
    data: [
        {"value":"President","name":"President"},
        {"value":"censeur","name":"censeur"},
        {"value":"menbres","name":"menbres"},
        {"value":"Tresorie","name":"Tresorie"},
        {"value":"Vice-president","name":"Vice-president"},
        {"value":"Secretaire","name":"Secretaire"},
        {"value":"Vice-censeur","name":"Vice-censeur"},
        {"value":"Vice-secretaire","name":"Vice-secretaire"}
    ]
});