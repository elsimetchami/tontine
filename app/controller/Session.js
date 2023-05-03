/**
 * Controller for all session-related management functionality
 */
Ext.define('Compare.controller.Session', {
    extend: 'Compare.controller.Base',
    stores: [
        'Session'
    ],
    views: [
        'session.List',
        'session.edit.Form',
        'session.edit.Window',
        'personne.List',
        'session.tab.Window',
        'session.tab.Window'
    ],
    refs: [
       
        {
            ref: 'Detail_sessionList',
            selector: '[xtype=detail_session.list]'
        },
        {
            ref: 'PersonneList',
            selector: '[xtype=personne.list]'
        },
        {
            ref: 'SessionList',
            selector: '[xtype=session.list]'
        },
        {
            ref: 'SessionEditWindow',
            selector: '[xtype=session.edit.window]'
        },
        {
            ref: 'SessionTabWindow',
            selector: '[xtype=session.tab.window]'
        },
        {
            ref: 'SessionEditForm',
            selector: '[xtype=session.edit.form]'
        },
        {
            ref: 'ReunionEditWindow',
            selector: '[xtype=reunion.edit.window]'
        },
        {
            ref: 'ReunionEditForm',
            selector: '[xtype=reunion.edit.form]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=session.list]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    // itemclick: this.open,
                    itemcontextmenu: this.showContextMenu
                },
                'grid[xtype=session.list] button#add': {
                    click: this.add
                },
                'window[xtype=session.edit.window] button#save': {
                    click: this.save
                },
                'window[xtype=session.edit.window] button#cancel': {
                    click: this.close
                },
                'form[xtype=session.edit.form] combobox[name=id_reunions_sess]':{
                    // select: this.selectMin,
                    change: this.chargefield
                    // click: this. changecat
                },
                // 'form[xtype=session.edit.form] datefield[name=date_debut]':{
                //     select: this.selectMin,
                //     // change: this.chargefield
                //     // click: this. changecat
                // },
                // 'form[xtype=aide.parametre.edit.form] combobox[name=id_categories_p_a]':{
                //     // beforerender: this.before
                //     beforequery:this.before,
                //     change: this.chargefield
                // }
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
                        text: 'Edit Session Member',
                        iconCls: 'icon_edit',
                        handler: function( item, e ) {
                            me.edit( view, record, item, index, e, eOpts );
                        }
                    },
                    {
                        text: 'Delete Session Member',
                        iconCls: 'icon_delete',
                        handler: function( item, e ) {
                            me.remove( record );
                        }
                    },
                    {
                        text: ' Session Member',
                        iconCls: 'icon_group',
                        handler: function( item, e ) {
                            me.details( record );
                        }
                    }
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
    details:function (record){
        var me = this;
        // win = Ext.widget('detail_session.list')
        // store.clearFilter( true );
         win = Ext.widget('session.tab.window')
         win.show()
        
        var grid = win.down('grid');
        me.load_store(grid.getStore(),{id_sessions_det:record.data.id});
        // alert('salut');  
      
    },
    chargefield:function(field, newValue, oldValue, eOpts) {

       
        var me = this, form = field.up('form'), combopro = form.down('combo[name=id_reunions_sess]'), data = field.valueModels[0].data;
        // console.log("field"); console.log(data);
        form.down('[name=date_debut]').setValue(data.date_creation).setMinValue(data.date_creation);
        // form.down('[name=date_debut]').setMinValue(data.date_creation);
        
    },
    // selectMin: function (field, value, eOpts) {
    //     var me = this, form = field.up('form'), combopro = form.down('combo[name=id_reunions_sess]'), data = field.valueModels[0].data;
    //     form.down('[name=date_debut]').setMinValue(data.date_creation);

    // },
    // changeSuiv: function (dat, newValue, oldValue, eOpts) {
    //     if (!newValue) return;
    //     var me = this;
    //     if (!dat.isValid()) return;
    //     me.Loadsuivi(dat, newValue, eOpts);
    // },
    /**
     * Creates a new record and prepares it for editing
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    add: function( button, e, eOpts ) {
        var me = this,
            record = Ext.create( 'Compare.model.Session' );
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
            grid = me.getSessionList(),
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
       store.restPath= urllink+'api/updatesession';
   else store.restPath= urllink+'api/createsession';
   autre["win"]=win;
  
  
       me.SaveDataApi(store,obj,record,autre,form,parseFloat(obj.id) >0 ? 'PUT':'POST');
   return;
        // store.restPath= urllink+'api/createsession';
        // autre["win"]=win;
        // me.SaveDataApi(store,obj,record,autre,form);
        // return;
        // // check if form is even dirty...if not, just close window and stop everything...nothing to see here
        // if( !record.dirty ) {
        //     win.close();
        //     return;
        // }
        // // setup generic callback config for create/save methods
        // callbacks ={
        //     success: function( records, operation ) {
        //         win.close();
        //     },
        //     failure: function( records, operation ) {
        //         // if failure, reject changes in store
        //         store.rejectChanges();
        //     }
        // };
        // // mask to prevent extra submits
        // Ext.getBody().mask( 'Saving taxe...' );
        // // if new record...
        // if( record.phantom ) {
        //     // reject any other changes
        //     store.rejectChanges();
        //     // add the new record
        //     store.add( record );
        // }
        // // persist the record
        // store.sync( callbacks );
        // autre["win"] = win ; 
        // me.SaveDataApi (store, values, record, null, form);
        // return;
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
            store.restPath=urllink+'api/destroysession';
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
            win = me.getSessionEditWindow(),
            isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'session.edit.window', {
                title: isNew ? 'Add Session ' : 'Edit Session '
            });
        }
        // show window
        win.show();
        // load form with data
        win.down( 'form' ).loadRecord( record );
    }
});