/**
 * Store for managing suivi_pret
 */
Ext.define('Compare.store.pret.Suivi_pret', {
	extend: 'Compare.store.Base',
    alias: 'store.pret.suivi_pret',
    requires: [
        'Compare.model.pret.Suivi_pret'
    ],
    // restPath: '/api/suivi_pret',
    restPath: urllink+'api/listsuivi_pret',
    storeId: 'Suivi_pret',
    model: 'Compare.model.pret.Suivi_pret'
});