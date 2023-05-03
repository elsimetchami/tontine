/**
 * Store for managing cars
 */
Ext.define('Compare.store.dashboard.Atelier', {
    extend: 'Compare.store.Base',
    alias: 'store.dashboard.atelier',
    requires: [
        'Compare.model.dashboard.Atelier'
    ],
    tablos: 'car_Atelier',
    clous: 'AtelierID',
    jpref: 'car',
    restPath: urllink+ 'api/listsite',
    storeId: 'dashboard_Atelier',
    model: 'Compare.model.dashboard.Atelier',
    remoteSort: false,
    remoteGroup: false,
    groupField: 'typesite'
});