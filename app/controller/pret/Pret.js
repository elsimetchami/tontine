/**
 * Controller for all pret-related management functionality
 */
Ext.define('Compare.controller.pret.Pret', {
    extend: 'Compare.controller.Base',
    stores: [
        'pret.Pret',
        'Type'
    ],
    views: [
        'pret.pret.List',
        'pret.pret.edit.Form',
        'pret.pret.edit.Window',
        'personne.List',
        // 'pret.pret.tab.Window'
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
            ref: 'PretList',
            selector: '[xtype=pret.pret.list]'
        },
        {
            ref: 'PretEditWindow',
            selector: '[xtype=pret.pret.edit.window]'
        },
        // {
        //     ref: 'PretTabWindow',
        //     selector: '[xtype=pret.tab.window]'
        // },
        {
            ref: 'PretEditForm',
            selector: '[xtype=pret.pret.edit.form]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=pret.pret.list]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    // itemclick: this.open,
                    itemcontextmenu: this.showContextMenu
                },
                'grid[xtype=pret.pret.list] button#add': {
                    click: this.add
                },
                // 'form[xtype=pret.pret.edit.form] combobox[name=personne]':{
                //     beforequery:this.CheckAvant
                // },
                'window[xtype=pret.pret.edit.window] button#save': {
                    click: this.save
                },
                'form[xtype=pret.pret.edit.form] combobox[name=id_param_prets]':{
                    change: this.chargefield,
                },
                'form[xtype=pret.pret.edit.form] combobox[name=id_personnes_p]':{
                    // beforerender: this.before
                    beforequery:this.beforeperso,
                },
                'window[xtype=pret.pret.edit.window] button#cancel': {
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
                        text: 'Edit Pret Member',
                        iconCls: 'icon_edit',
                        handler: function( item, e ) {
                            me.edit( view, record, item, index, e, eOpts );
                        }
                    },
                    {
                        text: 'Delete Pret Member',
                        iconCls: 'icon_delete',
                        handler: function( item, e ) {
                            me.remove( record );
                        }
                    },
                    // {
                    //     text: ' Suivi pret',
                    //     iconCls: 'icon_loan',
                    //     handler: function( item, e ) {
                    //         me.details( record );
                    //     }
                    // }
                    // {
                    //     text: ' Pret Member',
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
    chargefield:function(field, newValue, oldValue, eOpts) {
        var me = this, form = field.up('form'), combopro = form.down('combo[name=id_param_prets]'), data = field.valueModels[0].data;
        console.log("field"); console.log(data);


        // {id: 1, id_sessions_p_p: 5, id_categories_p_p: 6, taux_interet: '2', taux_penalite: '2', …


          // {"data":[{"id":2,"id_personnes_p":3,"id_param_prets":1,"id_sessions_p":1,"lib_p":"pour maladie","date_debut_p":"2000-05-05 ","montant_p":15000,"montant_interet_p":300,"nature":"pret","lib_session":"première session","taux_interet":0.02,"taux_penalite":0.5,"montant_max_p_p":30000," code_categorie":"Q01","lib_cat":"premiere categorie","nom":"ana2","prenom":"anabel2"}],"count":1,"success":true}
        // form.down('[name=id_sessions_a]').setValue(data.id_sessions_p_a),
        form.down('[name=id_sessions_p]').setValue(data.id_categories_p_p),
        form.down('[name=taux_penalite]').setValue(data.taux_penalite),
        form.down('[name=taux_interet]').setValue(data.taux_interet);
    },
    beforeperso:function(queryPlan, eOpts,combobox){
        var me =this;
        var cb = queryPlan.combo.up('form').down('combobox[name=id_sessions_p]'),
        cbcat = queryPlan.combo.up('form').down('combobox[name=id_personnes_p]');
        cbcat.getStore().removeAll();
        cbcat.setValue("");
        if(Ext.isEmpty(cb.getValue())){
            
            Ext.Msg.alert("Alert","Svp veillez choisir une session");
            queryPlan.cancel = true;
            
        }
         me.load_store(cbcat.getStore(),{id_categories_det_c:cb.getValue()});
         
        
    },
    details:function (record){
        var me = this;
        // win = Ext.widget('detail_pret.list')
        // store.clearFilter( true );
         win = Ext.widget('pret.pret.tab.window')
         win.show()
        
        var grid = win.down('grid');
        me.load_store(grid.getStore(),{id_prets_suivi:record.data.id});
        // alert('salut');  
      
    },
    /**
     * Creates a new record and prepares it for editing
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    add: function( button, e, eOpts ) {
        var me = this,
            record = Ext.create( 'Compare.model.pret.Pret' );
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
            grid = me.getPretList(),
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
       store.restPath= urllink+'api/updatepret';
   else store.restPath= urllink+'api/createpret';
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
            store.restPath=urllink+'api/destroypret';
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
            win = me.getPretEditWindow(),
            isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'pret.pret.edit.window', {
                title: isNew ? 'Add Pret ' : 'Edit Pret '
            });
        }
        // show window
        win.show();
        // load form with data
        win.down( 'form' ).loadRecord( record );
    }
});