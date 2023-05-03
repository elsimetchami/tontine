/**
 * Grid for displaying Session details
 */
Ext.define('Compare.view.session.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.session.list',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
       'Ext.grid.column.RowNumberer',
       'Ext.grid.column.Action'
    ],
    title: 'liste Session ',
    // html:'<i class="fi fi-sr-camera">',
    iconCls: 'icon_camera',
    store: 'Session',
    selType: 'checkboxmodel',
    features: [ {
        ftype: 'filters',
        local: true
    }],
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
                        text: 'Code session',
                        dataIndex: 'code_session',
                        flex:1,
                        editor: {
                            xtype: 'textfield'
                        },
                        items    : {
                            xtype: 'textfield',
                            flex : 1,
                            margin: 2,
                            enableKeyEvents: true,
                            listeners: {
                                keyup: function() {
                                    var store = this.up('grid').store;
                                    store.clearFilter();
                                    if (this.value) {
                                        store.filter({
                                            property     : 'name',
                                            value         : this.value,
                                            anyMatch      : true,
                                            caseSensitive : false
                                        });
                                    }
                                },
                                buffer: 500
                            }
                        }
                    },
                    {
                        text: 'Libelle session',
                        dataIndex: 'lib_session',
                        flex:1,
                    },
                    {
                        text: 'date debut',
                        dataIndex: 'date_debut',
                        flex:1,
                    },
                    {
                        text: 'date de Fin',
                        dataIndex: 'date_fin',
                        flex:1,                        // hidden: true
                    },
                    {
                        text: 'Reunion',
                        dataIndex: 'code_reunion',
                        flex:1,
                    },
                    {
                        text: 'Libelle reunion',
                        dataIndex: 'lib_reunion',
                        flex:1,
                    },
                    //
                   
                ]
                
            },
            // columns:{
            //     anchor: '50% 100%',
            //     items:[
            //     {
            //             xtype: 'detail_session.list'
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
                            text: 'Add Session '
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