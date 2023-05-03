/**
 * Store for managing pret
 */
Ext.define('Compare.store.pret.Pret', {
	extend: 'Compare.store.Base',
    alias: 'store.pret.pret',
    requires: [
        'Compare.model.pret.Pret'
    ],
    // restPath: '/api/pret',
    restPath: urllink+'api/listpret',
    storeId: 'Pret',
    model: 'Compare.model.pret.Pret'
});