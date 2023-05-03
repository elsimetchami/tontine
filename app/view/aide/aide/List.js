/**
 * Grid for displaying Aide details
 */
Ext.define('Compare.view.aide.aide.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.aide.aide.list',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
       'Ext.grid.column.RowNumberer',
       'Ext.grid.column.Action'
    ],
    title: 'liste Aide ',
    affichajout:true,
    // html:'<i class="fi fi-sr-camera">',
    iconCls: 'icon_camera',
    store: 'aide.Aide',
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
                   
                    // {
                    //     text: 'Code reunion',
                    //     dataIndex: 'code_reunion',
                    //     flex:1,
                    // },
                    {
                        xtype:'templatecolumn',
                        text: 'Nom et Prenom',
                        // dataIndex: 'situation_matrimoniale',
                        tpl:'{nom} {prenom}',
                        align:'left',
                        flex:1,                       
                    },
                    
                    {
                        text: 'Libelle aide',
                        dataIndex: 'lib_a',
                        flex:1,
                    },
                    {
                        text: 'Type aide',
                        dataIndex: 'type_a',
                        flex:1,
                    },
                    {
                        text: 'Montant',
                        dataIndex: 'montant_a',
                        flex:1,
                    },
                    {
                        text: 'date',
                        dataIndex: 'date_a',
                        flex:1,                        // hidden: true
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
                            text: 'Add Aide ',
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