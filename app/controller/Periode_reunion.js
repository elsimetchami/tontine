/**
 * Controller for all Periode_reunion-related management functionality
 */
Ext.define('Compare.controller.Periode_reunion', {
    extend: 'Compare.controller.Base',
    stores: [
        'Periode_reunion',
        'Detail_categorie',
        'Categorie'
        
        // 'Typecompte',
        
    ],
    views: [
        'periode_reunion.List',
        'personne.List',
        'periode_reunion.edit.Form',
        'periode_reunion.edit.Window',
        'periode_reunion.tab.Window'
    ],
    refs: [
        {
            ref: 'PersonneList',
            selector: '[xtype=personne.list]'
        },
        {
            ref: 'Periode_reunionList',
            selector: '[xtype=periode_reunion.list]'
        },
        {
            ref: 'Periode_reunionEditWindow',
            selector: '[xtype=periode_reunion.edit.window]'
        },
        {
            ref: 'Periode_reuniontabWindow',
            selector: '[xtype=tab.detail_periode_reunion.list]'
        },
        {
            ref: 'Periode_reunionEditForm',
            selector: '[xtype=periode_reunion.edit.form]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=periode_reunion.list]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    // itemdblclick: this.change,
                    // itemclick: this.open,
                    itemcontextmenu: this.showContextMenu
                },
                'grid[xtype=periode_reunion.list] button#add': {
                    click: this.add
                },
                'window[xtype=periode_reunion.edit.window] button#save': {
                    click: this.save
                },
                // 'window[xtype=ville.edit.window] form [name=prenom]': {
                //     change: this.chargeNomPrenom
                // },
             /*   'window[xtype=periode_reunion.edit.window] button#update': {
                    click: this.update,
                    // change:this.change,
                },*/
                'form[xtype=periode_reunion.edit.form] combobox[name=id_categories_p]':{
                    // beforerender: this.before
                    change: this.chargefield
                },
                'form[xtype=periode_reunion.edit.form] datefield[name=date_jour]':{
                    // beforerender: this.before
                    change: this.chargedate,
                    // select:this.selectBEN
                },
                'window[xtype=periode_reunion.edit.window] button#cancel': {
                    click: this.close
                },
                'form[xtype=periode_reunion.edit.form] combobox[name=id_beneficier]':{
                    // beforerender: this.before
                    beforequery:this.beforeBEN,
                },

                // 'form[xtype=periode_reunion.edit.form] combobox[name=id_categories_p]':{
                //     // beforerender: this.before
                //     change: this.chargefield
                // },
                // 'window[xtype=periode_reunion.edit.window] form [name=prenom]': {
                //     change: this.chargeNomPrenom
                // },
                // 'window[xtype=periode_reunion.edit.window] form [name=nom]': {
                //     change: this.chargeNomPrenom
                // },
                // 'window[xtype=periode_reunion.edit.window] form [name=datedenaissance]': {
                //     select: this.CalculAge
                // },
               
                // 'window[xtype=periode_reunion.edit.window] form [name=datedenaissance]': {
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
                        text: 'Delete periode_reunion',
                        iconCls: 'icon_delete',
                        handler: function( item, e ) {
                            me.remove( record );
                        }
                    },
                    {
                        text: ' Periode reunion Member',
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
    //  Position:[],
    //  Contient: function (tab,val){
    //      var test = false;
    //      for(var i=0;i<tab.length;i++){
    //          if(tab[i]==val) return true;
    //      }
    //      return test;
    //  },
    loadRecords: function( grid, eOpts ) {
        var me = this,
            store = grid.getStore();
        // clear any fliters that have been applied
        store.clearFilter( true );
        // load the 
        
        store.load();
        // me.Position=[];Tabuse=[];
        // grid.getStore().load({
        //     callback: function (records, operation, success) {
        //         grid.getStore().each(function (rec) {
        //             me.Position.push(rec.get('numero_d_ordre'));
        //             Tabuse.push(rec.get('numero_d_ordre'));
        //         });
        //     },
        //     scope: this
        // });
        // console.log('Tabuse,newValue');console.log(Tabuse);console.log(newValue);
        // if(me.Contient(Tabuse,newValue)) {dt.reset(); return;}
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
    //         grid = me.getPeriode_reunionList(),
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
    //     store.restPath= urllink+'api/updateperiode_reunion';
    //     autre["win"]=win;
    //    if()
       
    //         me.SaveDataApi(store,obj,record,autre,form);
    //     return;  
    //         var novo = false;
            
    //         if (obj.id > 0){
    //             record.set(values);
    //             // console.log(values);
    //         } else{
    //             record = Ext.create('Compare.model.Periode_reunion');
    //             record.set(values);
    //             this.getPeriode_reunionStore().add(record);
    //             novo = true;
    //         }
    //          console.log(values);

    //         win.close();
    //         this.getPeriode_reunionStore().sync();
    
    //         if (novo){ //faz reload para atualziar
    //             this.getPeriode_reunionStore().load();
    //         }
        
    // },
    // chargeNomPrenom: function (field, newValue, oldValue, eOpts) {
    //     var me = this, form = field.up('form'), noma = form.down('[name=nom]').getValue(),prenoma=form.down('[name=prenom]').getValue()/* data = field.valueModels[0].data*/;
    //     //console.log("field"); console.log(noma);
    //     nomprenom = noma+'  '+prenoma;
    //     me.prenom = newValue;
    //     //console.log("field"); console.log(nomprenom);
    //     //console.log("field"); console.log(nom);
    //     //var store = Ext.create('Compare.store.Personne');
    //      form.down('[name=nom_prenom]').setValue(nomprenom);
        
    // },
    add: function( button, e, eOpts ) {
        var me = this,
            record = Ext.create( 'Compare.model.Periode_reunion' );
        // show window
        console.log("record");console.log(record);
        me.showEditWindow( record );
    },
    details:function (record){
        var me = this;
        // win = Ext.widget('detail_categorie.list')
        // store.clearFilter( true );
         win = Ext.widget('periode_reunion.tab.window')
         win.show()
        
        var grid = win.down('grid');
        me.load_store(grid.getStore(),{id_periode_reunions_det:record.data.id});
        // alert('salut');  
      
    },
    // CHARGER AUTOMATIQUEMENT LS SECOND DATEFIELD
    chargedate:function( dj, newValue, oldValue, eOpts ){
        var me = this; form = dj.up('form'),combopro = form.down('combo[name=id_categories_p]'), data = dj.valueModels[0].data; 
        console.log(data)
        dt=dj.getValue();
        form.down('[name=periode_cotisation]').setValue(dt);
    },
    chargefield:function(field, newValue, oldValue, eOpts) {
        var me = this, form = field.up('form'), combopro = form.down('combo[name=id_categories_p]'), data = field.valueModels[0].data;
        console.log("field"); console.log(data);
        form.down('[name=montantp]').setValue(data.montant_cat);
       
    },
    selectBEN:function( comb, record, eOpts ){
        var me = this, form = comb.up("form"),comboperso = form.down("[name=id_beneficier]"),storeperso = comboperso.getStore();
        dt=comb.getValue();
        console.log(dt);
        // console.log(record[0]);
        me.load_store(storeperso,{date_passage:comb});
     },
    
     beforeBEN:function(queryPlan, eOpts,){
        var me =this;
        var cb = queryPlan.combo.up('form').down('datefield[name=date_jour]');
        console.log(cb.getValue())
        cbcat = queryPlan.combo.up('form').down('combobox[name=id_beneficier]');
        console.log(cbcat.getValue())
        cbcat.getStore().removeAll();
        cbcat.setValue("");
        if(Ext.isEmpty(cb.getValue())){
            
            Ext.Msg.alert("Alert","Svp veillez choisir une date");
            queryPlan.cancel = true;
            
        }
       
        //  me.load_store(cbcat.getStore(),{id_sessions_cat:cb.getValue()});
         me.load_store(cbcat.getStore(),{date_passage:cb.getValue()});
         
         
        
    },
   
    /**
     * Persists edited record
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
     save: function( button, e, eOpts ) {
        var me = this,
            grid = me.getPeriode_reunionList(),
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
      /* obj = {code_periode_reunion: "QQQ",
       date_creation: "2022/07/28 00:00:00",
       heure: "2022/07/28 00:00:00",
       jour: "Dimanche",
       libelle: "HGFRDF"};*/
        obj=record.data;
        if(parseFloat(obj.id) >0)
            store.restPath= urllink+'api/updateperiode_reunion';
        else store.restPath= urllink+'api/createperiode_reunion';
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
    //         store.restPath=urllink+'api/destroyperiode_reunion';
    //         // +record.data.periode_reunionid
    //     // show confirmation before continuing
    //     Ext.Msg.confirm( 'Attention', 'Are you sure you want to delete this Periode_reunion? This action cannot be undone.', function( buttonId, text, opt ) {
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
            store.restPath=urllink+'api/destroyperiode_reunion';
            // +record.data.periode_reunionid
        // show confirmation before continuing
        Ext.Msg.confirm( 'Attention', 'Are you sure you want to delete this Periode_reunion? This action cannot be undone.', function( buttonId, text, opt ) {
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
            win = me.getPeriode_reunionEditWindow(),
            isNew = record.phantom;
            
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'periode_reunion.edit.window', {
                title: isNew ? 'Add Periode_reunion' : 'Edit Periode_reunion',
               
            });
        }
        // show window
        win.show();
        // load form with data
        win.down( 'form' ).loadRecord( record );
    }
});