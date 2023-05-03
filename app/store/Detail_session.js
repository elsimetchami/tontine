/**
 * Store for managing detail_session
 */
Ext.define('Compare.store.Detail_session', {
	extend: 'Compare.store.Base',
    alias: 'store.detail_session',
    groupField: 'code_session',
    requires: [
        'Compare.model.Detail_session'
    ],
    // restPath: '/api/detail_session',
    restPath: urllink+'api/listdetail_session',
    storeId: 'Detail_session',
    model: 'Compare.model.Detail_session'
});