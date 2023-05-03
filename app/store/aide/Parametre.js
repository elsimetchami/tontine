/**
 * Store for managing parametre
 */
Ext.define('Compare.store.aide.Parametre', {
	extend: 'Compare.store.Base',
    alias: 'store.aide.parametre',
    requires: [
        'Compare.model.aide.Parametre'
    ],
    // restPath: '/api/parametre',
    restPath: urllink+'api/listparam_aide',
    storeId: 'Parametre',
    model: 'Compare.model.aide.Parametre'
});