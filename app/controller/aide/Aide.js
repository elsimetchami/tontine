/**
 * Controller for all aide-related management functionality
 */
Ext.define('Compare.controller.aide.Aide', {
    extend: 'Compare.controller.Base',
    stores: [
        'aide.Aide',
        'Type'
    ],
    views: [
        'aide.aide.List',
        'aide.aide.edit.Form',
        'aide.aide.edit.Window',
        'personne.List',
        // 'aide.tab.Window',
        // 'aide.tab.Window'
        'aide.suivi_aide.List',
        'aide.suivi_aide.Suivi_aide'
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
        // {
        //     ref: 'Suivi_aideList',
        //     selector: '[xtype=aide.suivi_aide.tab.list]'
        // },
        {
            ref: 'CategorietabWindow',
            selector: '[xtype=tab.suivi_aide.list]'
        },
        {
            ref: 'AideList',
            selector: '[xtype=aide.aide.list]'
        },
        {
            ref: 'AideEditWindow',
            selector: '[xtype=aide.aide.edit.window]'
        },
        {
            ref: 'AideEditForm',
            selector: '[xtype=aide.aide.edit.form]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'grid[xtype=aide.aide.list]': 
                {
                    beforerender: this.loadRecords,
                    itemdblclick: this.edit,
                    // itemclick: this.suivi,
                    // itemclick: this.open,
                    itemcontextmenu: this.showContextMenu
                },
                'grid[xtype=aide.aide.list] button#add': {
                    click: this.add
                },
                // 'form[xtype=aide.aide.edit.form] combobox[name=personne]':{
                //     beforequery:this.CheckAvant
                // },
                'window[xtype=aide.aide.edit.window] button#save': {
                    click: this.save
                },
                'window[xtype=aide.aide.edit.window] button#cancel': {
                    click: this.close
                },
                // 'form[xtype=aide.aide.edit.form] combobox[name=id_categories_det_c]':{
                //     select: this.selectCat,
                //     // click: this. changecat
                // },
                'form[xtype=aide.aide.edit.form] combobox[name=id_param_aides]':{
                    change: this.chargefield,
                    // change: this.charge,
                },
                // 'form[xtype=aide.aide.edit.form] combobox[name=id_personnes_a]':{
                //     select: this.selectPers
                // },
                // 'form[xtype=detail_categorie.edit.form] combobox[name=id_personnes_det_c]':{
                //     // beforerender: this.before
                //     beforequery: this.before
                // },
                'form[xtype=aide.aide.edit.form] combobox[name=id_personnes_a]':{
                    // beforerender: this.before
                    beforequery:this.beforeperso,
                },
                
                
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
                        text: 'Edit Aide Member',
                        iconCls: 'icon_edit',
                        handler: function( item, e ) {
                            me.edit( view, record, item, index, e, eOpts );
                        }
                    },
                    {
                        text: 'Delete Aide Member',
                        iconCls: 'icon_delete',
                        handler: function( item, e ) {
                            me.remove( record );
                        }
                    },
                    // {
                    //     text: ' Suivi Aide',
                    //     iconCls: 'icon_loan',
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
    selectPers:function( combo, record, eOpts ){
        var me = this, form = combo.up("form"),comboperso = form.down("[name=id_sessions_a]"),storeperso = comboperso.getStore();
        console.log(record[0].data.id_categories_p_a);
        // console.log('hello');
        me.load_store(storeperso,{id_categories_det_c:record[0].data.id_sessions_cat });
        // id_categories_det_c
     },
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
    selectCat:function( combo, record, eOpts ){
        var me = this, form = combo.up("form"),comboperso = form.down("[name=id_detail_sessions_det_c]"),storeperso = comboperso.getStore();
        console.log(record[0].data.id_sessions_cat);
        me.load_store(storeperso,{id_sessions_det:record[0].data.id_sessions_cat });
     },
    chargefield:function(field, newValue, oldValue, eOpts) {
        var me = this, form = field.up('form'), combopro = form.down('combo[name=id_param_aides]'), data = field.valueModels[0].data;
        console.log("field"); console.log(data);
        // id_sessions_a
        // id_categories_p_a
        // form.down('[name=id_sessions_a]').setValue(data.id_sessions_p_a),
        form.down('[name=id_sessions_a]').setValue(data.id_categories_p_a),
        form.down('[name=montant_a]').setValue(data.montant_cat),
        form.down('[name=type_a]').setValue(data.type_p_a);
    },
    charge: function(combobox , combo, records, eOpts,record ){
        var me = this;
         combo = combobox.up('form').down( 'combobox[name=id_param_aides]').getValue();
         console.log(combo);
         combo_cat = combobox.up('form').down( 'combobox[name=id_categories_p_a]').getValue();
         console.log(combo);;
    },
    // {"data":[{"id":1,"id_personnes_a":1,"id_param_aides":1,"id_sessions_a":1,"lib_a":"première aide","montant_a":50000,"type_a": "Dec\u00e9s","date_a":"2000-10-10","lib_session":"première session","montant_p_a":50000,"type_p_a":"Dec\u00e9s","code_categorie":"semaine" ,"lib_cat":"semaine","nom":"ana","prenom":"anabel"}],"count":1,"success":true}
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
            record = Ext.create( 'Compare.model.aide.Aide' );
        // show window
        me.showEditWindow( record );
    },
    
    suivi:function (record){
        var me = this;
        // win = Ext.widget('detail_categorie.list')
        // store.clearFilter( true );
        new Ext.window.Window({
            autoShow: true,
            title: 'Session Changes',
            modal: false,
            closable: true,
            closeAction: 'destroy',
            width: 600,
            height: 400,
            layout: 'fit',
            items:[
        //         win = Ext.widget('aide.suivi_aide.list')
        //     win.show()
        
        // var grid = win.down('grid');
        // me.load_store(grid.getStore(),{id_aides_s_a:record.data.id});
            ],
            //    win = Ext.widget('aide.suivi_aide.list');
            // win.show();
            
            // items: {
            //     xtype: 'textarea',
            //     value: JSON.stringify(changes, null, 4)
            // }
        });
        //  win = Ext.widget('aide.suivi_aide.list')
        //  win.show()
        
        // var grid = win.down('grid');
        // me.load_store(grid.getStore(),{id_aides_s_a:record.data.id});
        // alert('salut');  
      
    },
    details:function (record){
        var me = this;
        // win = Ext.widget('detail_categorie.list')
        // store.clearFilter( true );
         win = Ext.widget('aide.aide.tab.window')
         win.show()
        
        var grid = win.down('grid');
        me.load_store(grid.getStore(),{id_aides_s_a:record.data.id});
        // alert('salut');  
      
    },
    /**
     * Persists edited record
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
     save: function( button, e, eOpts ) {
        var me = this,
            grid = me.getAideList(),
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
       store.restPath= urllink+'api/updateaide';
   else store.restPath= urllink+'api/createaide';
   autre["win"]=win;
  
  
       me.SaveDataApi(store,obj,record,autre,form,parseFloat(obj.id) >0 ? 'PUT':'POST');
   return;
        
        
    },
    beforeperso:function(queryPlan, eOpts,combobox){
        var me =this;
        var cb = queryPlan.combo.up('form').down('combobox[name=id_sessions_a]');
        console.log(cb)
        cbcat = queryPlan.combo.up('form').down('combobox[name=id_personnes_a]');
        console.log(cbcat)
        cbcat.getStore().removeAll();
        cbcat.setValue("");
        if(Ext.isEmpty(cb.getValue())){
            
            Ext.Msg.alert("Alert","Svp veillez choisir une session");
            queryPlan.cancel = true;
            
        }
         me.load_store(cbcat.getStore(),{id_categories_det_c:cb.getValue()});
         
        
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
            store.restPath=urllink+'api/destroyaide';
            // +record.data.reunionid
        // show confirmation before continuing
        Ext.Msg.confirm( 'Attention', 'Are you sure you want to delete this Reunion? Cette action ne peut pas etre reversible.', function( buttonId, text, opt ) {
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
            win = me.getAideEditWindow(),
            isNew = record.phantom;
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'aide.aide.edit.window', {
                title: isNew ? 'Add Aide ' : 'Edit Aide '
            });
        }
        // show window
        win.show();
        // load form with data
        win.down( 'form' ).loadRecord( record );
    }
});