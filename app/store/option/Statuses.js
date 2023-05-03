/**
 * Store for managing statuses
 */
Ext.define('Compare.store.option.Statuses', {
    extend: 'Compare.store.option.Base',
    alias: 'store.option.status',
    requires: [
        'Compare.model.option.Status'
    ],
    restPath: '/api/option/statuses',
    storeId: 'Statuses',
    model: 'Compare.model.option.Status'
});