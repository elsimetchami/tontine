/**
 * Controller for all personne-related management functionality
 */
Ext.define('Compare.controller.Personne', {
    extend: 'Compare.controller.Base',
    stores: [
        'Personne'
    ],
    views: [
        'personne.List',
        'personne.edit.Form',
        'personne.edit.Window'
    ],
    refs: [
        {
            ref: 'PersonneList',
            selector: '[xtype=personne.list]'
        },
        {
            ref: 'PersonneEditWindow',
            selector: '[xtype=personne.edit.window]'
        },
        {
            ref: 'PersonneEditForm',
            selector: '[xtype=personne.edit.form]'
        },
        {
            ref: 'SessionEditForm',
            selector: '[xtype=session.edit.form]'
        },
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=personne.list]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    itemcontextmenu: this.showContextMenu
                },
                'grid[xtype=personne.list] button#add': {
                    click: this.add
                },
                'window[xtype=personne.edit.window] button#save': {
                    click: this.save
                },
                'window[xtype=personne.edit.window] button#cancel': {
                    click: this.close
                },
                // 'form[xtype=personne.edit.form] combobox[name=date_d_entree]':{
                //     select: this.selectMin,
                //     // change: this.chargefield
                //     // click: this. changecat
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
                        text: 'Edit Personne Member',
                        iconCls: 'icon_edit',
                        handler: function( item, e ) {
                            me.edit( view, record, item, index, e, eOpts );
                        }
                    },
                    {
                        text: 'Delete Personne ',
                        iconCls: 'icon_delete',
                        handler: function( item, e ) {
                            me.remove( record );
                        }
                    }
                ]
            })
        }
        // show menu relative to item which was right-clicked
        item.contextMenu.showBy( item );
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
        me.showEditWindow( record )
        
        // me.update(record);
    },
    // selectMin: function (field, value, eOpts) {
    //     var me = this;
    //     win = me.getSessionEditForm(), dte= win.down('datefield[name=date_debut]'),
    //     data = field.valueModels[0].data;
    //     console.log(data)
    //     // grid = me.getPersonneList(),
    //     // var me = this, form = field.up('form'), combopro = form.down('combo[name=id_reunions_sess]'), data = field.valueModels[0].data;
    //     // form.down('[name=date_debut]').setMinValue(data.date_creation);

    // },
    
    /**
     * Creates a new record and prepares it for editing
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    add: function( button, e, eOpts ) {
        var me = this,
            record = Ext.create( 'Compare.model.Personne' );
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
            grid = me.getPersonneList(),
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
        obj=record.data;
        if(parseFloat(obj.id) >0)
            store.restPath= urllink+'api/updatepersonne';
        else store.restPath= urllink+'api/createpersonne';
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
    // save: function( button, e, eOpts ) {
    //     var me = this,
    //         grid = me.getPersonneList(),
    //         store = grid.getStore(),
    //         win = button.up( 'window' ),
    //         form = win.down( 'form' ),
    //         record = form.getRecord(),
    //         values = form.getValues(),
    //         callbacks;

    //     // set values of record from form
    //     record.set( values );
    //     // check if form is even dirty...if not, just close window and stop everything...nothing to see here
    //     if( !record.dirty ) {
    //         win.close();
    //         return;
    //     }
    //     // setup generic callback config for create/save methods
    //     callbacks ={
    //         success: function( records, operation ) {
    //             win.close();
    //         },
    //         failure: function( records, operation ) {
    //             // if failure, reject changes in store
    //             store.rejectChanges();
    //         }
    //     };
    //     // mask to prevent extra submits
    //     Ext.getBody().mask( 'Saving Personne ...' );
    //     // if new record...
    //     if( record.phantom ) {
    //         // reject any other changes
    //         store.rejectChanges();
    //         // add the new record
    //         store.add( record );
    //     }
    //     // persist the record
    //     store.sync( callbacks );
    // },
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
            store.restPath=urllink+'api/destroypersonne';
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
            win = me.getPersonneEditWindow(),
            isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'personne.edit.window', {
                title: isNew ? 'Add Personne ' : 'Edit Personne '
            });
        }
        // show window
        win.show();
        // load form with data
        win.down( 'form' ).loadRecord( record );
    }
});