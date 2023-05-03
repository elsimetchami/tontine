
 Ext.define('Compare.controller.aide.Suivi', {
    // extend: 'Ext.app.Controller',
    extend: 'Compare.controller.Base',
    stores: [
        // 'aide.Aide',
        // 'aide.aide.',
        // 'suivi.Atelier',
        // 'dashboard.Frontiere',
        // 'dashboard.Pose',
        // 'dashboard.Atelierbis'
    ],
     views: [
        'aide.suivi_aide.List',
        'aide.aide.List',
        'aide.suivi_aide.Suivi_aide',
    ],
    refs: [
        {
            ref: 'AideaideList',
            selector: '[xtype=aide.aide.list]'
        },
        {
            ref: 'Aidesuivi_aideSuivi',
            selector: '[xtype=aide.suivi_aide.suivi_aide]'
        },
        {
            ref: 'Suivi_aideList',
            selector: '[xtype=aide.suivi_aide.list]'
        },
        
        // pose
        {
            ref: 'SalesByPoseDashboard',
            selector: '[xtype=dashboard.pose.dashboard]'
        }
    ],

    init: function() {
       
                    this.listen({
                        controller: {},
                        component: {
                           
                            // '[xtype=aide.suivi_aide.suivi_aide] panel': {
                            //     click: this.showImageContextMenu
                            // },
                            // '[xtype=aide.suivi_aide.suivi_aide.list]': {
                            //     itemclick: this.loadSalesByAtelierDetailChart
                            // },
                           
                            'grid[xtype=aide.aide.list][name=aide]': {
                                // beforerender: this.loadRecords,
                                // itemdblclick: this.edit,
                                itemclick: this.FilterGrid,
                                // select: this.open
                                // itemcontextmenu: this.showContextMenu
                            },
                            // 'grid[xtype=aide.suivi_aide.list]': {
                               
                            // },
                        },
                        global: {},
                        store: {},
                        proxy: {}
                    });
    },
    // filtrer la grid suivi_aide par rapport a l'aide choisi
    FilterGrid:function( view, record, item, index, e, eOpts ){
        var me= this;
             data = record.data;
             console.log("view"); console.log(data);
             var gridfin = me.getSuivi_aideList();
             store = gridfin.getStore(),
             me.load_store(store,{id_aides_s_a:record.data.id });
        
         
    },
    
     
    
    
});