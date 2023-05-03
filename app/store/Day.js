/**
 * Store for managing Typesexe
 */
Ext.define('Compare.store.Day', {
	extend: 'Ext.data.Store',
    alias: 'store.day',
    requires: [
        'Compare.model.Basearray'
    ],
    model: 'Compare.model.Basearray',
    data: [
        {"value":"Lun","name":"Lundi"},
        {"value":"Mar","name":"Mardi"},
        {"value":"Mer","name":"Mercredi"},
        {"value":"Jeu","name":"Jeudi"},
        {"value":"Ven","name":"Vendredi"},
        {"value":"Sam","name":"Samedi"},
        {"value":"Dim","name":"Dimanche"}
    ]
});