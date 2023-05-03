/**
 * Store for managing cars
 */
Ext.define('Compare.store.Cars', {
	extend: 'Compare.store.Base',
    alias: 'store.car',
    requires: [
        'Compare.model.Car'
    ],
    restPath: '/api/cars',
    storeId: 'Cars',
    model: 'Compare.model.Car'
});