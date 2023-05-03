/**
 * Store for managing periode_reunion
 */
Ext.define('Compare.store.Periode_reunion', {
	extend: 'Compare.store.Base',
    alias: 'store.periode_reunion',
    requires: [
        'Compare.model.Periode_reunion'
    ],
    // restPath: '/api/periode_reunion',
    restPath: urllink+'api/listperiode_reunion',
    storeId: 'Periode_reunion',
    model: 'Compare.model.Periode_reunion'
});