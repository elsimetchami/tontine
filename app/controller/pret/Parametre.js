/**
 * Controller for all Parametre-related management functionality
 */
Ext.define('Compare.controller.pret.Parametre', {
    extend: 'Compare.controller.Base',
    stores: [
        'pret.Parametre',
        'Type'
    ],
    views: [
        'pret.parametre.List',
        'pret.parametre.edit.Form',
        'pret.parametre.edit.Window',
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
            ref: 'ParametreList',
            selector: '[xtype=pret.parametre.list]'
        },
        {
            ref: 'ParametreEditWindow',
            selector: '[xtype=pret.parametre.edit.window]'
        },
        // {
        //     ref: 'ParametreTabWindow',
        //     selector: '[xtype=pret.tab.window]'
        // },
        {
            ref: 'ParametreEditForm',
            selector: '[xtype=pret.parametre.edit.form]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=pret.parametre.list]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    // itemclick: this.open,
                    itemcontextmenu: this.showContextMenu
                },
                'grid[xtype=pret.parametre.list] button#add': {
                    click: this.add
                },
                'form[xtype=pret.parametre.edit.form] combobox[name=id_sessions_p_p]':{
                    select: this.avantcheck
                },
                'form[xtype=pret.parametre.edit.form] combobox[name=id_categories_p_p]':{
                    // beforerender: this.before
                    beforequery:this.before,
                    // change: this.chargefield
                },
                // 'form[xtype=pret.parametre.edit.form] combobox[name=id_categories_p_p]':{
                //     // beforerender: this.before
                //     beforequery:this.before
                // },
                'window[xtype=pret.parametre.edit.window] button#save': {
                    click: this.save
                },
                'window[xtype=pret.parametre.edit.window] button#cancel': {
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
    avantcheck: function(combobox , combo, records, eOpts,record ){
        var me = this;
         combo = combobox.up('form').down( 'combobox[name=id_sessions_p_p]' ).getValue();
         console.log(combo);
         
        //  alert(combo);
     
        
    },
    before:function(queryPlan, eOpts,combobox){
        var me =this;
        var cb = queryPlan.combo.up('form').down('combobox[name=id_sessions_p_p]'),
        cbcat = queryPlan.combo.up('form').down('combobox[name=id_categories_p_p]');
        cbcat.getStore().removeAll();
        cbcat.setValue("");
        if(Ext.isEmpty(cb.getValue())){
            
            Ext.Msg.alert("Alert","Svp veillez choisir une session");
            queryPlan.cancel = true;
            
        }
        // me.load_param(cbcat.getStore(),{id_sessions_p_a:cb.getValue()});
       // me.load_param(cbcat.getStore(),{id_sessions_cat:cb.getValue()});
         me.load_store(cbcat.getStore(),{id_sessions_cat:cb.getValue()});
         
        
    },
    // chargefield:function(field, newValue, oldValue, eOpts) {

       
    //     var me = this, form = field.up('form'), combopro = form.down('combo[name=id_categories_p_p]'), data = field.valueModels[0].data;
    //     // console.log("field"); console.log(data);
    //     form.down('[name=montant_p_p]').setValue(data.montant_cat);
        
    // },
    // id: null, id_sessions_p_p: null, id_categories_p_p: null, taux_interet: '', taux_penalite: '', …}
    // before: function ( newValue, oldValue, eOpts,combo) {
    //     // var combo = combobox.up( 'form' ).down( 'combobox[name=id_categories_p_a]' );
    //     // if( newValue ) {
    //     //     combo.enable();
    //     // }
    //     // else {
    //     //     combo.disable();
    //     // }
    //     alert('hello');
    // },
    // before:function(){
    //     var me = this;
    //     store = combobox.getStore();
    //     // clear any fliters that have been applied
    //     store.clearFilter( true );
    //     store.filter('session_p_a', combo.getValue());
    //     // load the store
    //     store.load();
    //     // win = Ext.widget('detail_session.list')
    //     // store.clearFilter( true );
    //     //  win = Ext.widget('session.tab.window')
    //     // //  win.show()
    //     //  var sample = Ext.getCmp('session_p_a'); 
        
    //     // var grid = win.down('grid');
    //     // me.load_store(combo.getStore(),{id_sessions_det:record.data.id});
    //     alert('hello');
    //     //     var sample = Ext.getCmp('combo_cat');  
    //     //     // console.log('session_p_a') ;
    //     //         sample.store.clearFilter();
    //     //         sample.store.filter('session_p_a', combo.getValue());   
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
    //     // win = Ext.widget('detail_pret.list')
    //     // store.clearFilter( true );
    //      win = Ext.widget('pret.tab.window')
    //      win.show()
        
    //     var grid = win.down('grid');
    //     me.load_store(grid.getStore(),{id_prets_det:record.data.id});
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
            record = Ext.create( 'Compare.model.pret.Parametre' );
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
       store.restPath= urllink+'api/updateparam_pret';
   else store.restPath= urllink+'api/createparam_pret';
   autre["win"]=win;
  
  
       me.SaveDataApi(store,obj,record,autre,form,parseFloat(obj.id) >0 ? 'PUT':'POST');
   return;
        // store.restPath= urllink+'api/createpret';
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
            store.restPath=urllink+'api/destroyparam_pret';
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
            win = Ext.widget( 'pret.parametre.edit.window', {
                title: isNew ? 'Add Parametre ' : 'Edit Parametre '
            });
        }
        // show window
        win.show();
        // load form with data
        win.down( 'form' ).loadRecord( record );
    }
});