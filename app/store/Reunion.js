/**
 * Store for managing reunion
 */
Ext.define('Compare.store.Reunion', {
	extend: 'Compare.store.Base',
    alias: 'store.reunion',
    requires: [
        'Compare.model.Reunion'
    ],
    // restPath: '/api/reunion',
    restPath: urllink+'api/listreunion',
    storeId: 'Reunion',
    model: 'Compare.model.Reunion'
});