/**
 * Controller for all Parametre-related management functionality
 */
Ext.define('Compare.controller.aide.Parametre', {
    extend: 'Compare.controller.Base',
    stores: [
        'aide.Parametre',
        'Type',
        // 'ide.Parametre'
    ],
    views: [
        'aide.parametre.List',
        'aide.parametre.edit.Form',
        'aide.parametre.edit.Window',
        'personne.List',
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
            ref: 'ParametreList',
            selector: '[xtype=aide.parametre.list]'
        },
        {
            ref: 'ParametreEditWindow',
            selector: '[xtype=aide.parametre.edit.window]'
        },
        // {
        //     ref: 'ParametreTabWindow',
        //     selector: '[xtype=aide.tab.window]'
        // },
        {
            ref: 'ParametreEditForm',
            selector: '[xtype=aide.parametre.edit.form]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=aide.parametre.list]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    // itemclick: this.open,
                    itemcontextmenu: this.showContextMenu
                },
                'grid[xtype=aide.parametre.list] button#add': {
                    click: this.add
                },
                // 'form[xtype=aide.parametre.edit.form] combobox[name=id_sessions_p_a]':{
                //     select: this.avantcheck
                // },
                'form[xtype=aide.parametre.edit.form] combobox[name=id_categories_p_a]':{
                    // beforerender: this.before
                    beforequery:this.before,
                    change: this.chargefield
                },
                'window[xtype=aide.parametre.edit.window] button#save': {
                    click: this.save
                },
                'window[xtype=aide.parametre.edit.window] button#cancel': {
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
                        text: 'Edit Parametre Member',
                        iconCls: 'icon_edit',
                        handler: function( item, e ) {
                            me.edit( view, record, item, index, e, eOpts );
                        }
                    },
                    {
                        text: 'Delete Parametre Member',
                        iconCls: 'icon_delete',
                        handler: function( item, e ) {
                            me.remove( record );
                        }
                    },
                    // {
                    //     text: ' Parametre Member',
                    //     iconCls: 'icon_group',
                    //     handler: function( item, e ) {
                    //         me.details( record );
                    //     }
                    // }
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
    chargefield:function(field, newValue, oldValue, eOpts) {

       
        var me = this, form = field.up('form'), combopro = form.down('combo[name=id_categories_p_a]'), data = field.valueModels[0].data;
        // console.log("field"); console.log(data);
        form.down('[name=montant_p_a]').setValue(data.montant_cat);
        
    },
//     avantcheck: function(combobox , combo, records, eOpts,record ){
//         var me = this;
//          combo = combobox.up('form').down( 'combobox[name=id_sessions_p_a]' ).getValue();
//         //  console.log(combo);
         
//         //  alert(combo);
//         //  comb_cate=combobox.up('form').down('[name=id_categories_p_a]')
//         //  me.load_store(comb_cate.getStore(),{combo:record.data.id});
//          //     // me.load_store(combo.getStore(),{id_sessions_det:record.data.id});
//         //  .setValue(this.before(combo));
// //         Ext.getCmp('combo_session').getStore().load(); 
// // combo.getStore().load();
//         // var v = combobox.getRawValue();
//         // var combo = combobox.up('form').down( 'combobox[name=id_sessions_p_a]' );
//         // var grid = win.down('grid');
//         // me.load_store(combo.getStore(),{id_sessions_det:record.data.id});
//         // combo.getCmp('id_sessions_p_a').getValues();
//         // console.log(v);
        

// //  var comb_sess = combobox.getValue();
// //     console.log(comb_sess);
//     // var postGrid = this.lookupReference('postgrid');
//     // if (comb_sess != 0) {
//     //     postGrid.store.filter('ProvinceCode', comb_sess);
//     // } else {
//     //     postGrid.store.filters.clear();
//     //     postGrid.getStore().load();
//     // } 
//     },
    before:function(queryPlan, eOpts,combobox){
        var me =this;
        var cb = queryPlan.combo.up('form').down('combobox[name=id_sessions_p_a]'),
        cbcat = queryPlan.combo.up('form').down('combobox[name=id_categories_p_a]');
        cbcat.getStore().removeAll();
        cbcat.setValue("");
        if(Ext.isEmpty(cb.getValue())){
            
            Ext.Msg.alert("Alert","Svp veillez choisir une session");
            queryPlan.cancel = true;
            
        }
         me.load_store(cbcat.getStore(),{id_sessions_cat:cb.getValue()});
         
        
    },
    // before: function ( newValue, oldValue, eOpts,combo) {
    //     // var combo = combobox.up( 'form' ).down( 'combobox[name=id_categories_p_a]' );
    //     if( newValue ) {
    //         combo.enable();
    //     }
    //     else {
    //         combo.disable();
    //     }
    // },
    // before:function(){
    //     var me = this;
    //     store = combobox.getStore();
    //     // clear any fliters that have been applied
    //     store.clearFilter( true );
    //     store.filter('id_sessions_p_a', combo.getValue());
    //     // load the store
    //     store.load();
    //     // win = Ext.widget('detail_session.list')
    //     // store.clearFilter( true );
    //     //  win = Ext.widget('session.tab.window')
    //     // //  win.show()
    //     //  var sample = Ext.getCmp('id_sessions_p_a'); 
        
    //     // var grid = win.down('grid');
    //     // me.load_store(combo.getStore(),{id_sessions_det:record.data.id});
    //     alert('hello');
    //     //     var sample = Ext.getCmp('combo_cat');  
    //     //     // console.log('id_sessions_p_a') ;
    //     //         sample.store.clearFilter();
    //     //         sample.store.filter('id_sessions_p_a', combo.getValue());   
    //     //         sample.store.load(),                     
    //     //         sample.clearValue();                                    
            

    // },
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
    // details:function (record){
    //     var me = this;
    //     // win = Ext.widget('detail_aide.list')
    //     // store.clearFilter( true );
    //      win = Ext.widget('aide.tab.window')
    //      win.show()
        
    //     var grid = win.down('grid');
    //     me.load_store(grid.getStore(),{id_aides_det:record.data.id});
    //     // alert('salut');  
      
    // },
    /**
     * Creates a new record and prepares it for editing
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    add: function( button, e, eOpts ) {
        var me = this,
            record = Ext.create( 'Compare.model.aide.Parametre' );
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
            grid = me.getParametreList(),
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
       store.restPath= urllink+'api/updateparam_aide';
   else store.restPath= urllink+'api/createparam_aide';
   autre["win"]=win;
  
  
       me.SaveDataApi(store,obj,record,autre,form,parseFloat(obj.id) >0 ? 'PUT':'POST');
   return;
        // store.restPath= urllink+'api/createaide';
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
            store.restPath=urllink+'api/destroyparam_aide';
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
            win = me.getParametreEditWindow(),
            isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'aide.parametre.edit.window', {
                title: isNew ? 'Add Parametre ' : 'Edit Parametre '
            });
        }
        // show window
        win.show();
        // load form with data
        win.down( 'form' ).loadRecord( record );
    }
});