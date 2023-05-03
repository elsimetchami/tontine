/**
 * Controller for all car-related management functionality
 */
Ext.define('Compare.controller.Dashboard', {
    extend: 'Compare.controller.Base',
    stores: [
        'dashboard.Atelier',
        'dashboard.Frontiere',
        'dashboard.Pose',
        'dashboard.Atelierbis'
    ],
    views: [
        'dashboard.atelier.Dashboard',
        'dashboard.atelier.List',
        'dashboard.atelier.Chart',
        'dashboard.frontiere.Dashboard',
        'dashboard.frontiere.List',
        'dashboard.frontiere.Chart',
        'dashboard.pose.Dashboard',
        'dashboard.pose.List',
        'dashboard.pose.Chart'
    ],
    refs: [
        {
            ref: 'SalesByAtelierDashboard',
            selector: '[xtype=dashboard.atelier.dashboard]'
        },
        {
            ref: 'SalesByFrontiereDashboard',
            selector: '[xtype=dashboard.frontiere.dashboard]'
        },
        // pose
        {
            ref: 'SalesByPoseDashboard',
            selector: '[xtype=dashboard.pose.dashboard]'
        }
    ],
    requires: [
        'Ext.data.JsonStore'
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                '[xtype=dashboard.atelier.dashboard]': {
                    beforerender: this.loadSalesByAtelier
                },
                '[xtype=dashboard.frontiere.dashboard]': {
                    beforerender: this.loadSalesByFrontiere
                },
                // pose
                '[xtype=dashboard.pose.dashboard]': {
                    beforerender: this.loadSalesByPose
                },
                '[xtype=dashboard.atelier.dashboard] button#refresh': {
                    click: this.loadSalesByAtelierFullChart
                },
                '[xtype=dashboard.atelier.list]': {
                    itemclick: this.loadSalesByAtelierDetailChart
                }
            },
            global: {},
            store: {},
            proxy: {} 
        });
    },
    /**
     * Loads the component's store
     * @param {Ext.panel.Panel} panel
     * @param {Object} eOpts
     */
    loadSalesByAtelier: function( panel, eOpts ) {
        var me = this,
            store = panel.down( 'grid' ).getStore(),
            chart = panel.down( 'chart' ),
            data=[];
        // add extra params
        store.getProxy().extraParams = {
            filter: Ext.encode([
                {
                    property: 'SalesByAtelier',
                    value: true
                },
                {
                    property: 'IsSold',
                    value: true
                }
            ])
        };
        store.getProxy().setExtraParam("action", "LIST");
        store.getProxy().setExtraParam("jtab", store.tablos);
        store.getProxy().setExtraParam("jpref", store.jpref); 
        // load the store
        store.load({
            callback: function( records, operation, success ) {
                me.loadSalesByAtelierFullChart();
            }
        });
    },
    /**
     * Reloads chart from full grid data
     */
    loadSalesByAtelierFullChart: function() {
        var me = this,
            view = me.getSalesByAtelierDashboard(),
            grid = view.down( 'grid' ),
            store = grid.getStore(),
            chart = view.down( 'chart' ),
            chartStore = chart.getStore();
        // clear any filters
        chartStore.clearFilter( false );
        // load full range of data
        chartStore.loadData( store.getRange() );
    },
    /**
     * Filters chart store by selected Atelier
     * @param {Ext.view.View} view
     * @param {Ext.data.Model} record
     * @param {Object} item
     * @param {Number} index
     * @param {Object} e
     * @param {Object} eOpts
     */
    //  itemclick ( this, record, item, index, e, eOpts )
    loadSalesByAtelierDetailChart: function( view, record, item, index, e, eOpts ) {
        var me = this,
            atelier = record.get( 'Atelier' ),
            data = [],
            chart = view.up( '[xtype=dashboard.atelier.dashboard]' ).down( 'chart' ),
            store = chart.getStore();
        // clear filter
        store.clearFilter( true );
        // filter by atelier
        store.filter( 'Atelier', atelier );
    },
    /**
     * Loads the component's store
     * @param {Ext.panel.Panel} panel
     * @param {Object} eOpts
     */
    loadSalesByFrontiere: function( panel, eOpts ) {
        var me = this,
            view = me.getSalesByFrontiereDashboard(),
            store = view.down( 'grid' ).getStore(),
            chart = view.down( 'chart' ),
            data=[];
        // add extra params
        store.getProxy().extraParams = {
            filter: Ext.encode([
                {
                    property: 'SalesByFrontiere',
                    value: true
                },
                {
                    property: 'IsSold',
                    value: true
                }
            ])
        };
        store.getProxy().setExtraParam("action", "LIST");
        store.getProxy().setExtraParam("jtab", store.tablos);
        store.getProxy().setExtraParam("jpref", store.jpref); 
        // load the store
        store.load({
            callback: function( records, operation, success ) {
                chart.getStore().loadData( store.getRange() );
            }
        });
    },
    // pose
    loadSalesByPose: function( panel, eOpts ) {
        var me = this,
            view = me.getSalesByPoseDashboard(),
            store = view.down( 'grid' ).getStore(),
            chart = view.down( 'chart' ),
            data=[];
        // add extra params
        store.getProxy().extraParams = {
            filter: Ext.encode([
                {
                    property: 'SalesByPose',
                    value: true
                },
                {
                    property: 'IsSold',
                    value: true
                }
            ])
        };
        store.getProxy().setExtraParam("action", "LIST");
        store.getProxy().setExtraParam("jtab", store.tablos);
        store.getProxy().setExtraParam("jpref", store.jpref); 
        // load the store
        store.load({
            callback: function( records, operation, success ) {
                chart.getStore().loadData( store.getRange() );
            }
        });
    },
});