/**
 * Store for managing personne
 */
Ext.define('Compare.store.Personne', {
	extend: 'Compare.store.Base',
    alias: 'store.personne',
    requires: [
        'Compare.model.Personne'
    ],
    // restPath: '/api/personne',
    restPath: urllink+'api/listpersonne',
    storeId: 'Personne',
    model: 'Compare.model.Personne'
});