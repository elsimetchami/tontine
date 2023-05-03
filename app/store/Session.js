/**
 * Store for managing session
 */
Ext.define('Compare.store.Session', {
	extend: 'Compare.store.Base',
    alias: 'store.session',
    requires: [
        'Compare.model.Session'
    ],
    // restPath: '/api/session',
    restPath: urllink+'api/listsession',
    storeId: 'Session',
    model: 'Compare.model.Session'
});