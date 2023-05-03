/**
 * Store for managing suivi_aide
 */
Ext.define('Compare.store.aide.Suivi_aide', {
	extend: 'Compare.store.Base',
    alias: 'store.aide.suivi_aide',
    requires: [
        'Compare.model.aide.Suivi_aide'
    ],
    // restPath: '/api/suivi_aide',
    restPath: urllink+'api/listsuivi_aide',
    storeId: 'Suivi_aide',
    model: 'Compare.model.aide.Suivi_aide'
});