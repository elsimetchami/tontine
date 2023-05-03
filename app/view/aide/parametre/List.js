/**
 * Grid for displaying Parametre details
 */
Ext.define('Compare.view.aide.parametre.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.aide.parametre.list',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
       'Ext.grid.column.RowNumberer',
       'Ext.grid.column.Action'
    ],
    title: 'liste Parametre ',
    // html:'<i class="fi fi-sr-camera">',
    iconCls: 'icon_camera',
    store: 'aide.Parametre',
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
                        text: 'Session',
                        dataIndex: 'lib_session',
                        flex:1,
                    },
                    {
                        text: 'Categorie',
                        dataIndex: 'lib_cat',
                        flex:1,
                    },
                    {
                        text: 'Montant',
                        dataIndex: 'montant_p_a',
                        flex:1,
                    },
                    
                    {
                        text: 'Type',
                        dataIndex: 'type_p_a',
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
                            text: 'Add Parametre '
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