/**
 * Store for managing detail_categorie
 */
Ext.define('Compare.store.Detail_categorie', {
	extend: 'Compare.store.Base',
    alias: 'store.detail_categorie',
    requires: [
        'Compare.model.Detail_categorie'
    ],
    // restPath: '/api/detail_categorie',
    restPath: urllink+'api/listdetail_categorie',
    storeId: 'Detail_categorie',
    model: 'Compare.model.Detail_categorie'
});