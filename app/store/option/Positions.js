/**
 * Store for managing staff positions
 */
Ext.define('Compare.store.option.Positions', {
    extend: 'Compare.store.option.Base',
    alias: 'store.option.position',
    requires: [
        'Compare.model.option.Position'
    ],
    restPath: '/api/option/positions',
    storeId: 'Positions',
    model: 'Compare.model.option.Position'
});