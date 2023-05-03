/**
 * Store for managing car colors
 */
Ext.define('Compare.store.option.Colors', {
    extend: 'Compare.store.option.Base',
    alias: 'store.option.color',
    requires: [
        'Compare.model.option.Color'
    ],
    restPath: '/api/option/colors',
    storeId: 'Colors',
    model: 'Compare.model.option.Color'
});