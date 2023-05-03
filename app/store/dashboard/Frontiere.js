/**
 * Store for managing cars
 */
Ext.define('Compare.store.dashboard.Frontiere', {
    extend: 'Compare.store.Base',
    alias: 'store.dashboard.frontiere',
    requires: [
        'Compare.model.dashboard.Frontiere'
    ],
    tablos: 'car_Frontiere',
    clous: 'FrontiereID',
    jpref: 'car',
    restPath:urllink+ 'api/listsite', 
    storeId: 'dashboard_Frontiere',
    model: 'Compare.model.dashboard.Frontiere',
    remoteSort: false,
    remoteGroup: false,
    groupField:'typesite'
});