/**
 * Store for managing cars
 */
Ext.define('Compare.store.dashboard.Atelierbis', {
    extend: 'Compare.store.Base',
    alias: 'store.dashboard.atelierbis',
    requires: [
        'Compare.model.dashboard.Atelier'
    ],
    tablos: 'car_Atelier',
    clous: 'AtelierID',
    jpref: 'car',
    restPath: urllink+ 'api/listsite',
    storeId: 'dashboard_Atelierbis',
    model: 'Compare.model.dashboard.Atelier',
    remoteSort: false,
    remoteGroup: false,
    groupField: 'typesite'
});