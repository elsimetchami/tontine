/**
 * Controller for all Suivi-related management functionality
 */
Ext.define('Compare.controller.aide.Suividddd', {
    extend: 'Compare.controller.Base',
    stores: [
        'aide.Suivi',
        'Type',
        // 'ide.Suivi'
    ],
    
 
    views: [
        'aide.suivi_aide.suivi_aide.List',
        
     
        // 'aide.tab.Window',
        // 'aide.tab.Window'
    ],
    refs: [
       
        {
            ref: 'Detail_aideList',
            selector: '[xtype=detail_aide.list]'
        },
        {
            ref: 'PersonneList',
            selector: '[xtype=personne.list]'
        },
        {
            ref: 'SuiviList',
            selector: '[xtype=aide.suivi.list]'
        },
        {
            ref: 'SuiviEditWindow',
            selector: '[xtype=aide.suivi.edit.window]'
        },
        // {
        //     ref: 'SuiviTabWindow',
        //     selector: '[xtype=aide.tab.window]'
        // },
        {
            ref: 'SuiviEditForm',
            selector: '[xtype=aide.suivi.edit.form]'
        },
        
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=aide.suivi.list]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    // itemclick: this.open,
                    itemcontextmenu: this.showContextMenu
                },
                'grid[xtype=aide.suivi.list] button#add': {
                    click: this.add
                },
                // 'form[xtype=aide.suivi.edit.form] combobox[name=session_p_a]':{
                //     select: this.avantcheck
                // },
                // 'form[xtype=aide.suivi.edit.form] combobox[name=id_categories_p_a]':{
                //     // beforerender: this.before
                //     beforequery:this.before
                // },
                'window[xtype=aide.suivi.edit.window] button#save': {
                    click: this.save
                },
                'window[xtype=aide.suivi.edit.window] button#cancel': {
                    click: this.close
                },
                'form[xtype=aide.aide.edit.form] combobox[name=id_personnes_s_a]':{
                    // beforerender: this.before
                    beforequery:this.beforeperso,
                },
            },
            global: {},
            store: {},
            proxy: {} 
        });
    },
    /**
     * Displays context menu 
     * @param {Ext.view.View} view
     * @param {Ext.data.Model} record 
     * @param {HTMLElement} item
     * @param {Number} index
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
   
    /**
     * Loads the grid's store
     * @param {Ext.grid.Panel} grid
     * @param {Object} eOpts
     */
    loadRecords: function( grid, eOpts ) {
        var me = this,
            store = grid.getStore();
        // clear any fliters that have been applied
        store.clearFilter( true );
        // load the store
        store.load();
    },
    avantcheck: function(combobox , combo, records, eOpts,record ){
        var me = this;
         combo = combobox.up('form').down( 'combobox[name=session_p_a]' ).getValue();
         console.log(combo);
        
    },
    // details:function (record){
    //     var me = this;
    //     // win = Ext.widget('detail_categorie.list')
    //     // store.clearFilter( true );
    //      win = Ext.widget('suivi.tab.window')
    //      win.show()
        
    //     var grid = win.down('grid');
    //     me.load_store(grid.getStore(),{id_categories_det_c:record.data.id});
    //     // alert('salut');  
      
    // },
    
   
    
});