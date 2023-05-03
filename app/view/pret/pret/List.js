/**
 * Grid for displaying Pret details
 */
Ext.define('Compare.view.pret.pret.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.pret.pret.list',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
       'Ext.grid.column.RowNumberer',
       'Ext.grid.column.Action'
    ],
    title: 'liste Pret ',
    affichajout:true,
    // html:'<i class="fi fi-sr-camera">',
    iconCls: 'icon_camera',
    store: 'pret.Pret',
    selType: 'checkboxmodel',
    // layout:'vbox',
    layout: 'anchor',
    groupField: 'code_reunion',
    // features: [groupingFeature],
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            actions:{

            },
            columns: {
                anchor: '75% 50%',
                defaults: {},
                items: [
                  
                    // {
                    //     xtype: 'rownumberer',
                    //     width: 30,
                    //     sortable: false,
                    //     // locked: true
                    // },
                   
//                     `id_personnes_p` 
//   `id_param_prets` 
//   `id_sessions_p` 
//   `lib_p` 
//   `date_debut_p` 
//   `date_remb_p` 
//   `montant_p` 
//   `montant_interet_p` 
//   `nature` 
                    // {"data":[{"id":2,"id_personnes_p":3,"id_param_prets":1,"id_sessions_p":1,"lib_p":"pour maladie","date_debut_p":"2000-05-05 ","montant_p":15000,"montant_interet_p":300,"nature":"pret","lib_session":"première session","taux_interet":0.02,"taux_penalite":0.5,"montant_max_p_p":30000," code_categorie":"Q01","lib_cat":"premiere categorie","nom":"ana2","prenom":"anabel2"}],"count":1,"success":true}
                    {
                        xtype:'templatecolumn',
                        text: 'Nom et Prenom',
                        // dataIndex: 'situation_matrimoniale',
                        tpl:'{nom} {prenom}',
                        align:'left',
                        flex:1,                       
                    },
                    {
                        text: 'Libelle pret',
                        dataIndex: 'lib_p',
                        flex:1,
                    },
                    {
                        text: 'Nature',
                        dataIndex: 'nature',
                        flex:1,
                    },
                    {
                        text: 'Montant',
                        dataIndex: 'montant_p',
                        flex:1,
                    },
                    {
                        text: '% d\'interet',
                        dataIndex: 'taux_interet',
                        flex:1,
                        renderer: function(value){
                            if (value !== 0) {
                                return  value + '%';
                            }
                            return value;
                        }  
                    },
                    {
                        text: 'montant_max du pret',
                        dataIndex: 'montant_interet_p',
                        flex:1,
                    },
                    {
                        text: '% de penalite',
                        dataIndex: 'taux_penalite',
                        flex:1,
                        renderer: function(value){
                            if (value !== 0) {
                                return  value + '%';
                            }
                            return value;
                        }  
                    },
                    {
                        text: 'date',
                        dataIndex: 'date_debut_p',
                        flex:1,                        
                    },
                    {
                        text: 'date de remboursement',
                        dataIndex: 'date_remb_p',
                        flex:1,                      
                    },
                    // {
                    //     text: 'menbres',
                    //     dataIndex: 'code_reunion',
                    //     flex:1,
                    // },
                    // {
                    //     text: 'Libelle reunion',
                    //     dataIndex: 'lib_reunion',
                    //     flex:1,
                    // },
                    //
                   
                ]
                
            },
            // columns:{
            //     anchor: '50% 100%',
            //     items:[
            //     {
            //             xtype: 'detail_pret.list'
            //         }
            // ]},
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Add Pret ',
                            hidden: !me.affichajout,
                        }
                    ]
                    
                },
                {
                    xtype: 'pagingtoolbar',
                    ui: 'footer',
                    defaultButtonUI: 'default',
                    dock: 'bottom',
                    displayInfo: true,
                    store: me.getStore()
                }
            ]
        });
        me.callParent( arguments );
    }
});