/**
 * Store for managing car categories
 */
Ext.define('Compare.store.option.Categories', {
    extend: 'Compare.store.option.Base',
    alias: 'store.option.category',
    requires: [
        'Compare.model.option.Category'
    ],
    restPath: '/api/option/categories',
    storeId: 'Categories',
    model: 'Compare.model.option.Category'
});