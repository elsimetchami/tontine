/**
 * Grid for displaying Reunion details
 */
Ext.define('Compare.view.reunion.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.reunion.list',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
       'Ext.grid.column.RowNumberer',
       'Ext.ux.grid.GridFilter',
       'Ext.ux.grid.FiltersFeature',
    ],
    title: 'Manage Reunion ',
    iconCls: 'icon_user',
    store: 'Reunion',
    features: [
    //     {
    //     ftype : 'groupingsummary',
    //     groupHeaderTpl : '{code_reunion}',
    //     hideGroupedHeader : false,
    //     enableGroupingMenu : false
    // }, 
    {
        ftype: 'filters',
        local: true
    }],
    Plugins:[

    {ptype:"gridFilter"}
],
    // plugins:[{ptype:"gridFilter"}],
    
    selType: 'checkboxmodel',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                
                defaults: {},
                items: [
                    // {
                    //     xtype: 'rownumberer',
                    //     width: 30,
                    //     sortable: false,
                    //     // locked: true
                    // },
                    // {
                    //     text: 'Code',
                    //     dataIndex: 'code_reunion',
                    //     flex:1,
                    //     // sortable : true,
                    //     // filter: true,
                    //     filter: {

                    //     }
                    // },
                    {
                        text: "code reunion",
                        dataIndex: 'code_reunion', 
                        filter: true,
                        },
                    // {
                    //     text: 'code reunion (Filter)',
                    //     sortable: true,
                    //     dataIndex: 'code_reunion',
                    //     groupable: false,
                    //     width: 120,
                    //     filter: {

                    //         //     }
                    // },
                    //     locked: true,
                    //     editor: {
                    //         xtype: 'textfield'
                    //     },
                    //     items    : 
                    //     {
                    //         xtype: 'textfield',
                    //         flex : 1,
                    //         margin: 2,
                    //         enableKeyEvents: true,
                    //         listeners: {
                    //             keyup: function() {
                    //                 var store = this.up('tablepanel').store;
                    //                 store.clearFilter();
                    //                 if (this.value) {
                    //                     store.filter({
                    //                         property     : 'code_reunion',
                    //                         value         : this.value,
                    //                         anyMatch      : true,
                    //                         caseSensitive : false
                    //                     });
                    //                 }
                    //             },
                    //             buffer: 500
                    //         }
                    //     }
                        
                    // },
                    
                    {
                        text: 'Libelle',
                        dataIndex: 'lib_reunion',
                        flex:1,
                        filter: true,
                        // filter: 'lib_reunion',
                    //     items    : {
                    //         xtype: 'textfield',
                    //         flex : 1,
                    //         margin: 2,
                    //         enableKeyEvents: true,
                    //         listeners: {
                    //             keyup: function() {
                    //                 var store = this.up('panel').store;
                    //                 store.clearFilter();
                    //                 if (this.value) {
                    //                     store.filter({
                    //                         property     : 'lib_reunion',
                    //                         value         : this.value,
                    //                         anyMatch      : true,
                    //                         caseSensitive : false
                    //                     });
                    //                 }
                    //             },
                    //             buffer: 500
            
                        
                    // },}
                },
                    {
                        text: ' Jour de Reunion',
                        dataIndex: 'jour',
                        flex:1,
                    },
                    {
                        text: 'Heure',
                        dataIndex: 'heure',
                        // Format: getHeure(),
                        // dateWriteFormat: getdate(),
                        flex:1,                        // hidden: true
                    },
                    {
                        xtype: 'datecolumn',
                        text: 'date de creation',
                        dataIndex: 'date_creation',
                        dateFormat: 'Y-m-d',
                        flex:1,
                        // hidden: true
                    },
                   
                    
                ]
            },
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
                            text: 'Add Reunion '
                        },
                       
                       
                        '->',
                        {
                            xtype: 'combo',
                            store: {type:'reunion'},
                            displayField: 'code_reunion',
                            typeAhead: false,
                            hideLabel: true,
                            hideTrigger:true,
                            anchor: '100%',
                
                            listConfig: {
                                loadingText: 'Searching...',
                                emptyText: 'No matching posts found.',
                
                                // Custom rendering template for each item
                                // getInnerTpl: function() {
                                //     return '<a class="search-item" href="http://www.sencha.com/forum/showthread.php?t={topicId}&p={id}">' +
                                //         '<h3><span>{[Ext.Date.format(values.lastPost, "M j, Y")]}<br />by {author}</span>{title}</h3>' +
                                //         '{excerpt}' +
                                //     '</a>';
                                // }
                            },
                            pageSize: 10
                        },
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