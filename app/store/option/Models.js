/**
 * Store for managing car models
 */
Ext.define('Compare.store.option.Models', {
    extend: 'Compare.store.option.Base',
    alias: 'store.option.model',
    requires: [
        'Compare.model.option.Model'
    ],
    restPath: '/api/option/models',
    storeId: 'Models',
    model: 'Compare.model.option.Model'
});