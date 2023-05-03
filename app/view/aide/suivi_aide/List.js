/**
 * Grid for displaying Suivi_aide details
 */
 Ext.define('Compare.view.aide.suivi_aide.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.aide.suivi_aide.list',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
       'Ext.grid.column.RowNumberer',
       'Ext.grid.column.Action'
    ],
    title: 'liste Suivi_aide ',
    // html:'<i class="fi fi-sr-camera">',
    // iconCls: 'icon_camera',
    store: 'aide.Suivi_aide',
    selType: 'checkboxmodel',
    // layout:'vbox',
    layout: 'anchor',
    // groupField: 'code_reunion',
    // features: [groupingFeature],
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            actions:{

            },
            columns: {
                anchor: '75% 50%',
                defaults: {},
                // `id` 
        // `id_aides_s_a`
        // `date_s_a`
        // `id_personnes_s_a`
        // `montant_s_a`
        // `statut_s_a`
         // `id` 
        // `id_aides_s_a`
        // `date_s_a`
        // `id_personnes_s_a`
        // `montant_s_a`
        // `statut_s_a`
                items: [
                    {
                        xtype:'templatecolumn',
                        text: 'Nom et Prenom',
                        // dataIndex: 'situation_matrimoniale',
                        tpl:'{nom} {prenom}',
                        align:'left',
                        flex:1,                       
                    },
                    // {"data":[{"id":1,"id_aides_s_a":1,"id_personnes_s_a":1,"date_s_a":"2000-01-16","montant_s_a":15000,"statut_s_a":"en cours de validation","id_sessions_a":1,"lib_a":"premiere aide","montant_a":30000,"type_a":"deces membre","nom":"ana","prenom":"anabel"} ],"count":1,"success":true}Texte d'origineProposer une meilleure traduction
                    
                    
                    {
                        text: 'libelle aide',
                        dataIndex: 'lib_a',
                        flex:1,
                    },
                    // {
                    //     text: 'type',
                    //     dataIndex: 'type_a',
                    //     flex:0.5,
                    // },
                    {
                        text: 'Montant',
                        dataIndex: 'montant_s_a',
                        flex:1,
                    },
                    {
                        text: 'Date',
                        dataIndex: 'date_s_a',
                        flex:1,
                    },
                    {
                        text: 'statut',
                        dataIndex: 'statut_s_a',
                        flex:1,
                    },
                   
                ]
                
            },
            // columns:{
            //     anchor: '50% 100%',
            //     items:[
            //     {
            //             xtype: 'detail_aide.list'
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
                            text: 'Add Suivi_aide '
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