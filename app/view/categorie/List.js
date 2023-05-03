/**
 * Grid for displaying Categorie details
 */
Ext.define('Compare.view.categorie.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.categorie.list',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
       'Ext.grid.column.RowNumberer',
       'Ext.grid.feature.Grouping'
    ],
    title: 'Manage Categorie ',
    // iconCls: 'icon_user',
    store: 'Categorie',
    // features: [
    //     //     {
    //     //     ftype : 'groupingsummary',
    //     //     groupHeaderTpl : '{code_reunion}',
    //     //     hideGroupedHeader : false,
    //     //     enableGroupingMenu : false
    //     // }, 
    //     { ftype: 'grouping',
    //     groupHeaderTpl: '{columnName}:  ({rows.length} Categorie{[values.rows.length > 1 ? "s" : ""]})',
    //     hideGroupedHeader: true,
    //     startCollapsed: true,
    //     id: 'sessionGrouping'},
    //     {
    //         ftype: 'filters',
    //         local: true
    //     }],
    Plugins:[{
        ftype: 'filters',
        local: true
    },],
    // features: [{
    //     ftype: 'grouping',
    //     groupHeaderTpl: '{columnName}: {name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})',
    //     hideGroupedHeader: true,
    //     startCollapsed: true,
    //     id: 'restaurantGrouping'
    // }],
    
    selType: 'checkboxmodel',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                defaults: {},
                items: [
                    //         `id` int(10) UNSIGNED NOT NULL,
//   `id_sessions_cat` int(10) UNSIGNED NOT NULL,
//   `code_categorie` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
//   `lib_cat` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
//   `periodicite` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
//   `montant_cat` double(8,2) NOT NULL,
//   `created_at` timestamp NULL DEFAULT NULL,
//   `updated_at`
                    // {
                    //     xtype: 'rownumberer',
                    //     width: 30,
                    //     sortable: false,
                    //     // locked: true
                    // },
                    {
                        text: 'Code',
                        dataIndex: 'code_categorie',
                        sortable: true,
                        flex:1,
                        filter: true,
                        editor: {
                            xtype: 'textfield'
                        },
                        items    : {
                            xtype: 'textfield',
                            flex : 1,
                            margin: 2,
                            enableKeyEvents: true,
                            // listeners: {
                            //     keyup: function() {
                            //         // var store = store ={ type:'reunion',};
                                    
                            //         var store = this.up('grid').store;
                            //         store.clearFilter();
                            //         if (this.value) {
                            //             store.filter({
                            //                 property     : 'code_categorie',
                            //                 value         : this.value,
                            //                 anyMatch      : true,
                            //                 caseSensitive : false
                            //             });
                            //         }
                            //     },
                            //     buffer: 500
                            // }
                        }
                    },
                    {
                        text: 'Libelle',
                        dataIndex: 'lib_cat',
                        sortable: true,
                        flex:1,
                        
                    },
                    {
                        text: 'periodicite',
                        dataIndex: 'periodicite',
                        flex:1,
                    },
                    {
                        text: ' montant_cat',
                        dataIndex: 'montant_cat',
                        flex:1,
                    },
                    {
                        text: ' code_session',
                        dataIndex: 'code_session',
                        flex:1,
                    },
                    {
                        text: ' Periode',
                        dataIndex: 'periode',
                        flex:1,
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
                            text: 'Add Categorie '
                        },
                       
                       
                        '->',
                        {
                            xtype: 'combo',
                            store: {type:'categorie'},
                            displayField: 'code_categorie',
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