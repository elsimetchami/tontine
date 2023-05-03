/**
 * Store for managing Typesexe
 */
Ext.define('Compare.store.Periode', {
	extend: 'Ext.data.Store',
    alias: 'store.periode',
    requires: [
        'Compare.model.Basearray'
    ],
    model: 'Compare.model.Basearray',
    data: [
        {"value":"Jour","name":"Jour"},
        {"value":"Semaine", "name":"Semaine"},
        {"value":"Mois","name":"Mois"},
        {"value":"Trimestre","name":"Trimestre"},
        {"value":"Semestre","name":"Semestre "},
        {"value":"Année","name":"Année"},
        
    ]
});