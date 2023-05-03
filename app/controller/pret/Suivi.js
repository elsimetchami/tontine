
 Ext.define('Compare.controller.pret.Suivi', {
    // extend: 'Ext.app.Controller',
    extend: 'Compare.controller.Base',
    stores: [
        // 'pret.pret',
        // 'pret.pret.',
        // 'suivi.Atelier',
        // 'dashboard.Frontiere',
        // 'dashboard.Pose',
        // 'dashboard.Atelierbis'
    ],
     views: [
        'pret.suivi_pret.List',
        'pret.pret.List',
        'pret.suivi_pret.Suivi_pret',
    ],
    refs: [
        {
            ref: 'AideaideList',
            selector: '[xtype=pret.pret.list]'
        },
        // {
        //     ref: 'Aidesuivi_aideSuivi',
        //     selector: '[xtype=pret.suivi_pret.suivi_pret]'
        // },
        {
            ref: 'Suivi_pretList',
            selector: '[xtype=pret.suivi_pret.list]'
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
                           
                            '[xtype=pret.suivi_pret.suivi_pret] panel': {
                                click: this.showImageContextMenu
                            },
                            '[xtype=pret.suivi_pret.suivi_pret.list]': {
                                itemclick: this.loadSalesByAtelierDetailChart
                            },
                            'grid[xtype=pret.pret.list][name=pret]': {
                                // beforerender: this.loadRecords,
                                // itemdblclick: this.edit,
                                itemclick: this.open,
                                // select: this.open
                                // itemcontextmenu: this.showContextMenu
                            },
                            'grid[xtype=pret.suivi_pret.list]': {
                                // beforerender: this.loadRecords,
                                // itemdblclick: this.edit,
                                // itemclick: this.open,
                                // beforerender: this.loadRecords,
                                // beforerender:this.beforer,
                                //  ( ceci, eOpts )
                                // itemcontextmenu: this.showContextMenu
                            },
                            // aide_list
                        },
                        global: {},
                        store: {},
                        proxy: {}
                    });
    },
    showImageContextMenu: function( grid, eOpts ) {
        var me = this;
        alert('Initialized Users! This happens before ' +
        'the Application launch() function is called');
    },
    loadSalesByAtelierDetailChart: function( view, record, item, index, e, eOpts ) {
        var me = this;
        alert("hellddddo")
    },
    open:function( view, record, item, index, e, eOpts ){
        var me= this;
             data = record.data;
             console.log("view"); console.log(data);
             var gridfin = me.getSuivi_pretList();
             store = gridfin.getStore(),
             me.load_store(store,{id_prets_suivi:record.data.id });
         
         
    },
    beforer:function( view, eOpts,record ){
        var me = this;
        
        var griddbt = me.getAideaideList().down('grid');
       grid= griddbt.down('lib_a').getGridColumns();
        console.log(grid);
        
    },
    loadRecords: function( grid, eOpts ) {
        var me = this,
            store = grid.getStore();
            me.load_store(store,{id_prets_suivi:record.data.id});
        // clear any fliters that have been applied
        store.clearFilter( true );
        // load the store
        store.load();
    },
    
    selectCat:function( combo, record, eOpts ){
        var me = this, form = combo.up("form"),comboperso = form.down("[name=id_detail_sessions_det_c]"),storeperso = comboperso.getStore();
        console.log(record[0].data.id_sessions_cat);
        me.load_store(storeperso,{id_sessions_det:record[0].data.id_sessions_cat });
     },
     
    
    
});