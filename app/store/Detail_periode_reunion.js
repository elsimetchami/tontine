/**
 * Store for managing detail_periode_reunion
 */
Ext.define('Compare.store.Detail_periode_reunion', {
	extend: 'Compare.store.Base',
    alias: 'store.detail_periode_reunion',
    requires: [
        'Compare.model.Detail_periode_reunion'
    ],
    // restPath: '/api/detail_periode_reunion',
    restPath: urllink+'api/listdetail_periode_reunion',
    storeId: 'Detail_periode_reunion',
    model: 'Compare.model.Detail_periode_reunion'
});