/**
 * Store for managing parametre
 */
Ext.define('Compare.store.pret.Parametre', {
	extend: 'Compare.store.Base',
    alias: 'store.pret.parametre',
    requires: [
        'Compare.model.pret.Parametre'
    ],
    // restPath: '/api/parametre',
    restPath: urllink+'api/listparam_pret',
    storeId: 'Parametre',
    model: 'Compare.model.pret.Parametre'
});