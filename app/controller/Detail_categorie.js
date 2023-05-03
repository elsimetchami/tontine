/**
 * Controller for all Detail_categorie-related management functionality
 */
Ext.define('Compare.controller.Detail_categorie', {
    extend: 'Compare.controller.Base',
    stores: [
        'Detail_categorie',
        'Personne',
        'Categorie',
        // 'Role'
        
        // 'Typecompte',
        
    ],
    views: [
        'detail_categorie.List',
        'personne.List',
        'detail_categorie.edit.Form',
        'detail_categorie.edit.Window'
    ],
    refs: [
        {
            ref: 'PersonneList',
            selector: '[xtype=personne.list]'
        },
        {
            ref: 'Detail_categorieList',
            selector: '[xtype=detail_categorie.list]'
        },
        {
            ref: 'Detail_categorieEditWindow',
            selector: '[xtype=detail_categorie.edit.window]'
        },
        {
            ref: 'Detail_categorieEditForm',
            selector: '[xtype=detail_categorie.edit.form]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=detail_categorie.list]': {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    // itemdblclick: this.change,
                    // itemclick: this.open,
                    itemcontextmenu: this.showContextMenu
                },
                'grid[xtype=detail_categorie.list] button#add': {
                    click: this.add,
                    // change: this.chargefield,
                },
                'window[xtype=detail_categorie.edit.window] button#save': {
                    click: this.save
                },
                'form[xtype=detail_categorie.edit.form] combobox[name=id_categories_det_c]':{
                  
                    change: this.selectMin
                    // click: this. changecat
                },
                'form[xtype=detail_categorie.edit.form] [name=numero_d_ordre]':{
                  
                    // beforequery:this.beforeDate,
                    change:this.affichdate 
                    // click: this. changecat
                },
                'window[xtype=detail_categorie.edit.window] button#cancel': {
                    click: this.close,
                },
                

            },
            global: {},
            store: {},
            proxy: {} 
        });
    },
    // recCat:"",
    // recMbre:"",
    selectMin: function (field, value, eOpts){
        var me = this;
        // no=numero_d_ordre
         form = field.up('form'), data = field.valueModels[0].data;
        console.log("field"); console.log(data);
        form.down('[name=date_d_entree_det_c]').setMinValue(data.date_debut);

    },

    
    Contient: function (tab,val){
        var test = false;
        for(var i=0;i<tab.length;i++){
            if(tab[i]==val) return true;
        }
        return test;
    },
    affichdate:function( dt, newValue, oldValue, eOpts ){
        var me = this, form = dt.up("form");
        console.log('Tabuse,newValue');console.log(Tabuse);console.log(newValue);
        if(me.Contient(Tabuse,newValue)) {dt.reset(); return;}
        // cat=form.down('[name=id_categories_det_c]'),
        data = recCat.data;
        // data = cat.valueModels[0]
        ; console.log(data),
        dte_dbt=data.date_debut;
        prd= data.periode;
        dte_pa=form.down('[name=date_passage]')
        console.log(dte_dbt),
        no=dt.getValue();
        if(prd=='Jour'){
            dte_pa.setValue(Ext.Date.add(new Date(dte_dbt), Ext.Date.DAY, (1 * no)));
            }
        else if(prd=='Semaine'){
        dte_pa.setValue(Ext.Date.add(new Date(dte_dbt), Ext.Date.DAY, (7 * no)));
        }
        if(prd=='Mois'){
            dte_pa.setValue(Ext.Date.add(new Date(dte_dbt), Ext.Date.MONTH, (1 * no)));
            }
        else if(prd=='Trimestre'){
            dte_pa.setValue(Ext.Date.add(new Date(dte_dbt), Ext.Date.MONTH, (3 * no)));
            }
        if(prd=='Semestre'){
            dte_pa.setValue(Ext.Date.add(new Date(dte_dbt), Ext.Date.MONTH, (6 * no)));
            }
        else if(prd=='Année'){
            dte_pa.setValue(Ext.Date.add(new Date(dte_dbt), Ext.Date.YEAR, (1 * no)));
            }
             
        
        // form.down('[name=date_d_entree_det_c]').setValue(Ext.Date.add(new date(), Ext.Date.DAY,(7)),)
        // dt.setMinValue(Ext.Date.add(due.valu.getDate() + (7 * i));
        // packEndDate.setDate(pae, Ext.Date.DAY, 1),)
        // packStartDate.setDate(startDateckStartDate.getDate() + 7);
        console.log(no)

    },
  selectCat:function( combo, record, eOpts ){
     var me = this, form = combo.up("form"),comboperso = form.down("[name=id_detail_sessions_det_c]"),storeperso = comboperso.getStore();
     console.log(record[0].data.id_sessions_cat);
     me.load_store(storeperso,{id_sessions_det:record[0].data.id_sessions_cat });
  },
  changecat:function( combo, newValue, oldValue, eOpts ){
    var me=this;
    alert('hello');
    // render
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
                            me.recMbre= record;
                            me.edit( view, record, item, index, e, eOpts );
                        }
                    },
                    {
                        text: 'Delete detail_categorie',
                        iconCls: 'icon_delete',
                        handler: function( item, e ) {
                            me.recMbre= null;
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
        console.log("me.recMbre");console.log(me.recMbre);
        console.log("me.recCat");console.log(recCat);
      
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
            record = Ext.create( 'Compare.model.Detail_categorie' );
        //  form = field.up('form'), combopro = form.down('combo[name=id_param_aides]'), data = field.valueModels[0].data;
        //  form.down('[name=type_a]').setValue(data.type_p_a);
        // show window
        console.log("record");console.log(record);
        me.showEditWindow( record );
    },
    selectCat:function( combo, record, eOpts ){
        var me = this, form = combo.up("form"),comboperso = form.down("[name=id_detail_sessions_det_c]"),storeperso = comboperso.getStore();
        console.log(record[0].data.id_sessions_cat);
        me.load_store(storeperso,{id_sessions_det:record[0].data.id_sessions_cat });
     },
   
    /**
     * Persists edited record
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    //  {"id":1,"id_detail_sessions_det_c":1,"id_categories_det_c":1,"date_d_entree_det_c":"2000-01-04","date_passage":"2000-02-04"," numero_d_ordre":1,"nom":"ana","prenom":"anabel"},id_categories_det_c

    // {id: null, id_personnes_det_c: 0, id_detail_sessions_det_c: 0, id_categories_det_c: 0, date_d_entree_det_c: '', …}

    // {"id":1,"code_categorie":"Q01","lib_cat":"premiere categorie","periodicite":"Mardi","montant_cat":5000,"code_session":"J50 ","id_sessions_cat":1},
     before:function(queryPlan, eOpts,combobox){
        var me =this;
        var cb = queryPlan.combo.up('form').down('combobox[name=id_categories_det_c]'),
        // console.log(cb);
        cbcat = queryPlan.combo.up('form').down('combobox[name=id_personnes_det_c]');
        cbcat.getStore().removeAll();
        cbcat.setValue("");
        if(Ext.isEmpty(cb.getValue())){
            
            Ext.Msg.alert("Alert","Svp veillez choisir une categorie");
            queryPlan.cancel = true;
            
        }
       
        //  me.load_store(cbcat.getStore(),{id_sessions_cat:cb.getValue()});
         me.load_store(cbcat.getStore(),{id_sessions_det:cb.getValue()});
         
         
        
    },
     save: function( button, e, eOpts ) {
        var me = this,
            grid = me.getDetail_categorieList(),
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
       
      /* obj = {code_detail_categorie: "QQQ",
       date_creation: "2022/07/28 00:00:00",
       heure: "2022/07/28 00:00:00",
       jour: "Dimanche",
       libelle: "HGFRDF"};*/
        obj=record.data;
        console.log(obj.numero_d_ordre)
        // if(parseFloat(obj.numero_d_ordre) >0)
        // alert('mise a jour')
        // else alert('good')
        
        if(parseFloat(obj.id) >0)
            store.restPath= urllink+'api/updatedetail_categorie';
        else store.restPath= urllink+'api/createdetail_categorie';
        autre["win"]=win;
       
       
            me.SaveDataApi(store,obj,record,autre,form,parseFloat(obj.id) >0 ? 'PUT':'POST');
        return;
        // var recordIndex = DepartmentMemberStore.findBy(
        //     function(record, id){
        //         if(record.get('date') === date_from_form && 
        //            record.get('time') === time_from_form &&
        //            record.get('type') === type_from_form){
        //               return true;  // a record with this data exists
        //         }
        //         return false;  // there is no record in the store with this data
        //     }
        // );
        
        // if(recordIndex != -1){
        //     alert("We have a duplicate, abort!");
        // }
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
    //         store.restPath=urllink+'api/destroydetail_categorie';
    //         // +record.data.detail_categorieid
    //     // show confirmation before continuing
    //     Ext.Msg.confirm( 'Attention', 'Are you sure you want to delete this Detail_categorie? This action cannot be undone.', function( buttonId, text, opt ) {
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
            store.restPath=urllink+'api/destroydetail_categorie';
            // +record.data.detail_categorieid
        // show confirmation before continuing
        Ext.Msg.confirm( 'Attention', 'Are you sure you want to delete this Detail_categorie? This action cannot be undone.', function( buttonId, text, opt ) {
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
            win = me.getDetail_categorieEditWindow(),
            isNew = record.phantom;
            
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'detail_categorie.edit.window', {
                title: isNew ? 'Add Detail_categorie' : 'Edit Detail_categorie',
               
            });
        }
        // show window
        win.show();
        // load form with data
        win.down( 'form' ).loadRecord( record );
    }
});