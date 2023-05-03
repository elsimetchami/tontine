/**
 * Store for managing aide
 */
Ext.define('Compare.store.aide.Aide', {
	extend: 'Compare.store.Base',
    alias: 'store.aide.aide',
    requires: [
        'Compare.model.aide.Aide'
    ],
    // restPath: '/api/aide',
    restPath: urllink+'api/listaide',
    storeId: 'Aide',
    model: 'Compare.model.aide.Aide'
});