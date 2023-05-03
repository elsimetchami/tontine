/**
 * Store for managing car features
 */
Ext.define('Compare.store.option.Features', {
    extend: 'Compare.store.option.Base',
    alias: 'store.option.feature',
    requires: [
        'Compare.model.option.Feature'
    ],
    restPath: '/api/option/features',
    storeId: 'Features',
    model: 'Compare.model.option.Feature'
});