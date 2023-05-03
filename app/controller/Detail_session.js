/**
 * Controller for all Detail_session-related management functionality
 */
Ext.define('Compare.controller.Detail_session', {
    extend: 'Compare.controller.Base',
    stores: [
        'Detail_session',
        'Personne',
        'Session',
        'Role'
        
        // 'Typecompte',
        
    ],
    views: [
        'detail_session.List',
        'personne.List',
        'detail_session.edit.Form',
        'detail_session.edit.Window'
    ],
    refs: [
        {
            ref: 'PersonneList',
            selector: '[xtype=personne.list]'
        },
        {
            ref: 'Detail_sessionList',
            selector: '[xtype=detail_session.list]'
        },
        {
            ref: 'Detail_sessionEditWindow',
            selector: '[xtype=detail_session.edit.window]'
        },
        {
            ref: 'Detail_sessionEditForm',
            selector: '[xtype=detail_session.edit.form]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=detail_session.list]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    // itemdblclick: this.change,
                    // itemclick: this.open,
                    itemcontextmenu: this.showContextMenu
                },
                'grid[xtype=detail_session.list] button#add': {
                    click: this.add
                },
                'window[xtype=detail_session.edit.window] button#save': {
                    click: this.save
                },
             /*   'window[xtype=detail_session.edit.window] button#update': {
                    click: this.update,
                    // change:this.change,
                },*/
                
                'window[xtype=detail_session.edit.window] button#cancel': {
                    click: this.close
                },
                // 'window[xtype=detail_session.edit.window] form [name=prenom]': {
                //     change: this.chargeNomPrenom
                // },
                // 'window[xtype=detail_session.edit.window] form [name=nom]': {
                //     change: this.chargeNomPrenom
                // },
                // 'window[xtype=detail_session.edit.window] form [name=datedenaissance]': {
                //     select: this.CalculAge
                // },
               
                // 'window[xtype=detail_session.edit.window] form [name=datedenaissance]': {
                //     select: this.calculAge
                // },
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
                        text: 'Edit account',
                        iconCls: 'icon_edit',
                        handler: function( item, e ) {
                            me.edit( view, record, item, index, e, eOpts );
                        }
                    },
                    {
                        text: 'Delete detail_session',
                        iconCls: 'icon_delete',
                        handler: function( item, e ) {
                            me.remove( record );
                        }
                    }
                ]
            })
        }
        // show menu relative to item which was right-clicked
        // item.contextMenu.showBy( item );
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
    /**
     * Creates a new record and prepares it for editing
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
     
     
    // update:function(button, e, eOpts){
    //     var me = this,
    //         grid = me.getDetail_sessionList(),
    //         store = grid.getStore(),
    //         win = button.up( 'window' ),
    //         form = win.down( 'form' ),
    //         record = form.getRecord(),
    //         values = form.getValues(),   
    //         callbacks,
    //         obj;
    //         autre={};

    //     // set values of record from form
    //     record.set( values );
    //     obj=record.data;  
    //     store.restPath= urllink+'api/updatedetail_session';
    //     autre["win"]=win;
    //    if()
       
    //         me.SaveDataApi(store,obj,record,autre,form);
    //     return;  
    //         var novo = false;
            
    //         if (obj.id > 0){
    //             record.set(values);
    //             // console.log(values);
    //         } else{
    //             record = Ext.create('Compare.model.Detail_session');
    //             record.set(values);
    //             this.getDetail_sessionStore().add(record);
    //             novo = true;
    //         }
    //          console.log(values);

    //         win.close();
    //         this.getDetail_sessionStore().sync();
    
    //         if (novo){ //faz reload para atualziar
    //             this.getDetail_sessionStore().load();
    //         }
        
    // },
    add: function( button, e, eOpts ) {
        var me = this,
            record = Ext.create( 'Compare.model.Detail_session' );
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
            grid = me.getDetail_sessionList(),
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
      /* obj = {code_detail_session: "QQQ",
       date_creation: "2022/07/28 00:00:00",
       heure: "2022/07/28 00:00:00",
       jour: "Dimanche",
       libelle: "HGFRDF"};*/
        obj=record.data;
        if(parseFloat(obj.id) >0)
            store.restPath= urllink+'api/updatedetail_session';
        else store.restPath= urllink+'api/createdetail_session';
        autre["win"]=win;
       
       
            me.SaveDataApi(store,obj,record,autre,form,parseFloat(obj.id) >0 ? 'PUT':'POST');
        return;
        
        
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
    // remove: function( record ) {
    //     var me = this,
    //         store = record.store,
    //         autre={},obj,
    //         id=record.data.id;
    //         // console.log(id)
    //         obj=record.data;
    //         store.restPath=urllink+'api/destroydetail_session';
    //         // +record.data.detail_sessionid
    //     // show confirmation before continuing
    //     Ext.Msg.confirm( 'Attention', 'Are you sure you want to delete this Detail_session? This action cannot be undone.', function( buttonId, text, opt ) {
    //         if( buttonId=='yes' ) {
    //             store.remove( record );
    //             //me.DeleteDataApi(store,record,autre);
    //             me.DeleteDataApi(store,obj,record,autre);
    //         };
    //         return;
    //     })
    // },
    remove: function( record ) {
        var me = this,
            store = record.store,
            autre={},obj,
            id=record.data.id;
            // console.log(id)
            obj=record.data;
            store.restPath=urllink+'api/destroydetail_session';
            // +record.data.detail_sessionid
        // show confirmation before continuing
        Ext.Msg.confirm( 'Attention', 'Are you sure you want to delete this Detail_session? This action cannot be undone.', function( buttonId, text, opt ) {
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
            win = me.getDetail_sessionEditWindow(),
            isNew = record.phantom;
            
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'detail_session.edit.window', {
                title: isNew ? 'Add Detail_session' : 'Edit Detail_session',
               
            });
        }
        // show window
        win.show();
        // load form with data
        win.down( 'form' ).loadRecord( record );
    }
});