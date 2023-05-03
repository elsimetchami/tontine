/**
 * Controller for all Categorie-related management functionality
 */
Ext.define('Compare.controller.Categorie', {
    extend: 'Compare.controller.Base',
    stores: [
        'Categorie',
        'Day',
        'Periode'
        
        // 'Typecompte',
        
    ],
    views: [
        'categorie.List',
        'personne.List',
        'categorie.edit.Form',
        'categorie.edit.Window',
        // 'tab.detail_categorie.List',
        'categorie.tab.Window'
    ],
    refs: [
        {
            ref: 'Detail_categorieList',
            selector: '[xtype=detail_categorie.list]'
        },
        {
            ref: 'PersonneList',
            selector: '[xtype=personne.list]'
        },
        // tab.detail_categorie.List
        {
            ref: 'CategorieList',
            selector: '[xtype=categorie.list]'
        },
        {
            ref: 'CategorietabWindow',
            selector: '[xtype=tab.detail_categorie.list]'
        },
        {
            ref: 'CategorieEditWindow',
            selector: '[xtype=categorie.edit.window]'
        },
        {
            ref: 'CategorieEditForm',
            selector: '[xtype=categorie.edit.form]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=categorie.list]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    // itemdblclick: this.change,
                    // itemclick: this.open,
                    itemcontextmenu: this.showContextMenu
                },
                'grid[xtype=categorie.list] button#add': {
                    click: this.add
                },
                'window[xtype=categorie.edit.window] button#save': {
                    click: this.save
                },
             /*   'window[xtype=categorie.edit.window] button#update': {
                    click: this.update,
                    // change:this.change,
                },*/
                
                'window[xtype=categorie.edit.window] button#cancel': {
                    click: this.close
                },
                // 'window[xtype=categorie.edit.window] form [name=prenom]': {
                //     change: this.chargeNomPrenom
                // },
                // 'window[xtype=categorie.edit.window] form [name=nom]': {
                //     change: this.chargeNomPrenom
                // },
                // 'window[xtype=categorie.edit.window] form [name=datedenaissance]': {
                //     select: this.CalculAge
                // },
               
                // 'window[xtype=categorie.edit.window] form [name=datedenaissance]': {
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
                        text: 'Delete categorie',
                        iconCls: 'icon_delete',
                        handler: function( item, e ) {
                            me.remove( record );
                        }
                    },
                    {
                        text: ' Categorie Member',
                        iconCls: 'icon_group',
                        handler: function( item, e ) {
                            me.details( record );
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
    Position:[],
    Contient: function (tab,val){
        var test = false;
        for(var i=0;i<tab.length;i++){
            if(tab[i]==val) return true;
        }
        return test;
    },
    details:function (record){
        var me = this;
        // win = Ext.widget('detail_categorie.list')
        // store.clearFilter( true );
         win = Ext.widget('categorie.tab.window')
         win.show()
         recCat = record;
        var grid = win.down('grid');
        me.load_param(grid.getStore(),{id_categories_det_c:record.data.id});
        me.Position=[];Tabuse=[];
        grid.getStore().load({
            callback: function (records, operation, success) {
                grid.getStore().each(function (rec) {
                    me.Position.push(rec.get('numero_d_ordre'));
                    Tabuse.push(rec.get('numero_d_ordre'));
                });
            },
            scope: this
        });
        // alert('salut');  
      
    },
    // details:function (record){
    //     var me = this;
    //     myForm = new Ext.window.Window({
    //         width: 600,
    //         modal: true,
    //         // resizable: true,
    //         // draggable: true,
    //         // constrainHeader: true,
    //         layout: 'fit',
    //                 // floating: true,
    //                 // closable : true,
    //                 items:[
    //                     {
    //                                     xtype:'detail_categorie.list'
    //                                 }
                    
    //             ]
    //             });
    //     myForm.show();
    //     var grid = myForm.down('grid');
    //     me.load_store(grid.getStore(),{id_categories_det_c:record.data.id});
    //     // alert('salut');  
    //     // win = me.getDetail_categorieList();
    //     //         if( !win ) {
                    
    //     //   wind=  new Ext.window.Window({
    //     //     iconCls: 'icon_edite',
    //     //       title:'menbres categorie',
    //     //     //   modal: true,
    //     //       items:[
    //     //         // win = Ext.widget( 'staff.edit.panel', {
    //     //         //     // title: isNew ? 'Add Staff Member' : 'Edit Staff Member'
    //     //         // }),
                
    //     //         {
    //     //             xtype:'detail_categorie.list'
    //     //         }
               
    //     //       ]
    //     //   })
    //     // }
    //     // show window
    // //     var me = this,
    // //     win = me.getDetail_categorieList();
    // //     // isNew = record.phantom;
    // // // if window exists, show it; otherwise, create new instance
    // // if( !win ) {
    // //     win = Ext.widget( 'detail_categorie.list', {
            
    // //     });
    // // }
    // // // show window
    // // win.show();
    // // // load form with data
    // // // win.loadRecord( record );
    // //     win.show();
    // },
    /**
     * Creates a new record and prepares it for editing
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
     
     
   
    
    add: function( button, e, eOpts ) {
        var me = this,
            record = Ext.create( 'Compare.model.Categorie' );
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
            grid = me.getCategorieList(),
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
      /* obj = {code_categorie: "QQQ",
       date_creation: "2022/07/28 00:00:00",
       heure: "2022/07/28 00:00:00",
       jour: "Dimanche",
       libelle: "HGFRDF"};*/
        obj=record.data;
        if(parseFloat(obj.id) >0)
            store.restPath= urllink+'api/updatecategorie';
        else store.restPath= urllink+'api/createcategorie';
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
    //         store.restPath=urllink+'api/destroycategorie';
    //         // +record.data.categorieid
    //     // show confirmation before continuing
    //     Ext.Msg.confirm( 'Attention', 'Are you sure you want to delete this Categorie? This action cannot be undone.', function( buttonId, text, opt ) {
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
            store.restPath=urllink+'api/destroycategorie';
            // +record.data.categorieid
        // show confirmation before continuing
        Ext.Msg.confirm( 'Attention', 'Are you sure you want to delete this Categorie? This action cannot be undone.', function( buttonId, text, opt ) {
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
            win = me.getCategorieEditWindow(),
            isNew = record.phantom;
            
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'categorie.edit.window', {
                title: isNew ? 'Add Categorie' : 'Edit Categorie',
               
            });
        }
        // show window
        win.show();
        // load form with data
        win.down( 'form' ).loadRecord( record );
    }
});