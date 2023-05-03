/**
 * Store for managing car makes
 */
Ext.define('Compare.store.option.Makes', {
    extend: 'Compare.store.option.Base',
    alias: 'store.option.make',
    requires: [
        'Compare.model.option.Make'
    ],
    restPath: '/api/option/makes',
    storeId: 'Makes',
    model: 'Compare.model.option.Make'
});