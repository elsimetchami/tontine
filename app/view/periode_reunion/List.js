/**
 * Grid for displaying Periode_reunion details
 */
Ext.define('Compare.view.periode_reunion.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.periode_reunion.list',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
       'Ext.grid.column.RowNumberer'
    ],
    title: 'Manage Periode_reunion ',
    iconCls: 'icon_user',
    store: 'Periode_reunion',
    Plugins:[{
        ftype: 'filters',
        local: true
    },],
    
    selType: 'checkboxmodel',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                defaults: {},
//                 `id` int(10) UNSIGNED NOT NULL,
//   `date_jour` date NOT NULL,
//   `id_categories_p` int(10) UNSIGNED NOT NULL,
//   `id_beneficier` int(10) UNSIGNED NOT NULL,
//   `periode_cotisation` date NOT NULL,
//   `beneficier` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
//   `montantp` double(8,2) NOT NULL,
//   `created_at` timestamp NULL DEFAULT NULL,
//   `updated_at` 
// [{"id":1,"id_categories_p":1,"date_jour":"2000-02-04","periode_cotisation":"2000-02-04",
// "beneficier":"ANA anabel","id_beneficier":2,"montantp":2000,"code_categorie":"J50","lib_cat":"premiere categorie"}]
                items: [
                    // {
                    //     xtype: 'rownumberer',
                    //     width: 30,
                    //     sortable: false,
                    //     // locked: true
                    // },
                    {
                        text: 'date jour',
                        dataIndex: 'date_jour',
                        flex:1,
                    },
                    {
                        text: 'periode_cotisation',
                        dataIndex: 'periode_cotisation',
                        flex:1,
                       
                    },
                    {
                        text: ' Montant',
                        dataIndex: 'montantp',
                        flex:1,
                    },
                    // {
                    //     xtype:'templatecolumn',
                    //     text: 'beneficier',
                    //     dataIndex: 'beneficier',
                    //     // model:'Personne',
                    //     // dataIndex: 'situation_matrimoniale',
                    //     tpl:'{nom} {prenom}',
                    //     flex:1,                       
                    // },
                    {
                        text: ' beneficier',
                        dataIndex: 'beneficier',
                        flex:1,
                    },
                    {
                        xtype:'templatecolumn',
                        text: 'beneficier',
                        // dataIndex: 'situation_matrimoniale',
                        tpl:'{nom} {prenom}',
                        flex:1,                       
                    },
                    {
                        text: ' code categorie',
                        dataIndex: 'code_categorie',
                        flex:1,
                    },
                    {
                        text: ' libelle categorie',
                        dataIndex: 'lib_cat',
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
                            text: 'Add Periode_reunion '
                        },
                       
                       
                        '->',
                        {
                            xtype: 'combo',
                            store: {type:'periode_reunion'},
                            displayField: 'code_periode_reunion',
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