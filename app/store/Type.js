/**
 * Store for managing Typesexe
 */
Ext.define('Compare.store.Type', {
	extend: 'Ext.data.Store',
    alias: 'store.type',
    requires: [
        'Compare.model.Basearray'
    ],
    model: 'Compare.model.Basearray',
    data: [
        {"value":"Maladie","name":"Maladie"},
        {"value":"Decés","name":"Decés",
    menu:[{"value":"menbre","name":"menbre",}]},
        {"value":"Mariage","name":"Mariage"},
        {"value":"Naissance","name":"Naissance"},
        {"value":"Enfant","name":"Enfant"},
        {"value":"Epoux","name":"Epoux"},
        {"value":"Adherant","name":"Adherant"},
        // {"value":"Vice-secretaire","name":"Vice-secretaire"}
    ]
});