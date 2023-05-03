/**
 * Controller for all Suivi_pret-related management functionality
 */
Ext.define('Compare.controller.pret.Suivi_pret', {
    extend: 'Compare.controller.Base',
    stores: [
        'pret.Suivi_pret',
        'Type',
        // 'ide.Suivi_pret'
    ],
    views: [
        'pret.suivi_pret.List',
        'pret.suivi_pret.edit.Form',
        'pret.suivi_pret.edit.Window',
        'personne.List',
        // 'pret.tab.Window',
        // 'pret.tab.Window'
    ],
    refs: [
       
        {
            ref: 'Detail_pretList',
            selector: '[xtype=detail_pret.list]'
        },
        {
            ref: 'PersonneList',
            selector: '[xtype=personne.list]'
        },
        {
            ref: 'Suivi_pretList',
            selector: '[xtype=pret.suivi_pret.list]'
        },
        {
            ref: 'Suivi_pretEditWindow',
            selector: '[xtype=pret.suivi_pret.edit.window]'
        },
        // {
        //     ref: 'Suivi_pretTabWindow',
        //     selector: '[xtype=pret.tab.window]'
        // },
        {
            ref: 'Suivi_pretEditForm',
            selector: '[xtype=pret.suivi_pret.edit.form]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=pret.suivi_pret.list]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    // itemclick: this.open,
                    itemcontextmenu: this.showContextMenu
                },
                'grid[xtype=pret.suivi_pret.list] button#add': {
                    click: this.add
                },
                // 'form[xtype=pret.suivi_pret.edit.form] combobox[name=session_p_a]':{
                //     select: this.avantcheck
                // },
                // 'form[xtype=pret.suivi_pret.edit.form] combobox[name=id_categories_p_a]':{
                //     // beforerender: this.before
                //     beforequery:this.before
                // },
                'window[xtype=pret.suivi_pret.edit.window] button#save': {
                    click: this.save
                },
                'window[xtype=pret.suivi_pret.edit.window] button#cancel': {
                    click: this.close
                }
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
    showContextMenu: function( view, record, item, index, e, eOpts ) {
        var me = this;
        // stop event so browser's normal right-click action doesn't continue
        e.stopEvent();
        // if a menu doesn't already exist, create one
        if( !item.contextMenu ) {
            // add menu
            item.contextMenu = new Ext.menu.Menu({
                items: [
                    {
                        text: 'Edit Suivi_pret Member',
                        iconCls: 'icon_edit',
                        handler: function( item, e ) {
                            me.edit( view, record, item, index, e, eOpts );
                        }
                    },
                    {
                        text: 'Delete Suivi_pret Member',
                        iconCls: 'icon_delete',
                        handler: function( item, e ) {
                            me.remove( record );
                        }
                    },
                ]
            })
        }
        // show menu relative to item which was right-clicked
        item.contextMenu.showAt( e.getXY() );
    },
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
    before:function(queryPlan, eOpts,combobox){
        var me =this;
        var cb = queryPlan.combo.up('form').down('combobox[name=session_p_a]'),
        cbcat = queryPlan.combo.up('form').down('combobox[name=id_categories_p_a]');
        if(Ext.isEmpty(cb.getValue())){
            
            Ext.Msg.alert("Alert","Svp veillez choisir une session");
            queryPlan.cancel = true;
            
        }
        // me.load_param(cbcat.getStore(),{session_p_a:cb.getValue()});
        me.load_param(cbcat.getStore(),{id_sessions_cat:cb.getValue()});
        // me.load_store(cbcat.getStore(),{session_p_a:cb.getValue()});
        
    },
    
    /**
     * Handles request to edit
     * @param {Ext.view.View} view
     * @param {Ext.data.Model} record 
     * @param {HTMLElement} item
     * @param {Number} index
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    edit: function( view, record, item, index, e, eOpts ) {
        var me = this;
        // show window
        me.showEditWindow( record );
    },
    /**
     * Creates a new record and prepares it for editing
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    add: function( button, e, eOpts ) {
        var me = this,
            record = Ext.create( 'Compare.model.pret.Suivi_pret' );
        // show window
        me.showEditWindow( record );
    },
    /**
     * Persists edited record
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
     save: function( button, e, eOpts ) {
        var me = this,
            grid = me.getSuivi_pretList(),
            store = grid.getStore(),
            win = button.up( 'window' ),
            form = win.down( 'form' ),
            record = form.getRecord(),
            values = form.getValues(),
            
            callbacks,
            obj;
            autre={};

        // set values of record from form
        record.set( values );
        obj=record.data;
      /* obj = {code_reunion: "QQQ",
       date_creation: "2022/07/28 00:00:00",
       heure: "2022/07/28 00:00:00",
       jour: "Dimanche",
       libelle: "HGFRDF"};*/
       if(parseFloat(obj.id) >0)
       store.restPath= urllink+'api/updatesuivi_pret';
   else store.restPath= urllink+'api/createsuivi_pret';
   autre["win"]=win;
  
  
       me.SaveDataApi(store,obj,record,autre,form,parseFloat(obj.id) >0 ? 'PUT':'POST');
   return;
        
    },
    /**
     * Persists edited record
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    close: function( button, e, eOpts ) {
        var me = this,
            win = button.up( 'window' );
        // close the window
        win.close();
    },
    /**
     * Displays context menu 
     * @param {Ext.data.Model[]} record
     */
    remove: function( record ) {
        var me = this,
            store = record.store,
            autre={},obj,
            id=record.data.id;
            // console.log(id)
            obj=record.data;
            store.restPath=urllink+'api/destroysuivi_pret';
            // +record.data.reunionid
        // show confirmation before continuing
        Ext.Msg.confirm( 'Attention', 'Are you sure you want to delete this Reunion? This action cannot be undone.', function( buttonId, text, opt ) {
            if( buttonId=='yes' ) {
                store.remove( record );
                //me.DeleteDataApi(store,record,autre);
                me.SaveDataApi(store,obj,record,autre);
            };
            return;
        })
    },
    /**
     * Displays common editing form for add/edit operations
     * @param {Ext.data.Model} record
     */
    showEditWindow: function( record ) {
        var me = this,
            win = me.getSuivi_pretEditWindow(),
            isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'pret.suivi_pret.edit.window', {
                title: isNew ? 'Add Suivi_pret ' : 'Edit Suivi_pret '
            });
        }
        // show window
        win.show();
        // load form with data
        win.down( 'form' ).loadRecord( record );
    }
});