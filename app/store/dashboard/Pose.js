/**
 * Store for managing cars
 */
Ext.define('Compare.store.dashboard.Pose', {
    extend: 'Compare.store.Base',
    alias: 'store.dashboard.pose',
    requires: [
        'Compare.model.dashboard.Pose'
    ],
    tablos: 'car_Pose',
    clous: 'PoseID',
    jpref: 'pose',
    restPath:urllink+ 'api/listsite', 
    storeId: 'dashboard_Pose',
    model: 'Compare.model.dashboard.Pose',
    remoteSort: false,
    remoteGroup: false,
    groupField:'typesite'
});