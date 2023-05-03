/**
 * Grid for displaying detail_categorie details
 */
Ext.define('Compare.view.detail_categorie.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.detail_categorie.list',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
       'Ext.grid.column.RowNumberer'
    ],
    // title: 'Manage detail_categorie ',
    // iconCls: 'icon_user',
    store: 'Detail_categorie',
    selType: 'checkboxmodel',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                defaults: {},
                items: [
                    // [{"id":2,"id_categories_det_c":1,"id_personnes_det_c":1,"date_d_entree_det_c":"2000-02-02",
                    // "date_passage":"2000-05-02","numero_d_ordre":3,"nom":"ANA","prenom":"anabel"}]
                    // {
                    //     xtype: 'rownumberer',
                    //     width: 30,
                    //     sortable: false,
                    //     // locked: true
                    // },
                    {
                        xtype:'templatecolumn',
                        text: 'Nom  Prenom',
                        model:'Personne',
                        sortable : true,
                        // dataIndex: 'situation_matrimoniale',
                        tpl:'{nom} {prenom}',
                        flex:1,      
                        // hidden: true,                 
                    },
                    {
                        text: 'date d entree',
                        dataIndex: 'date_d_entree_det_c',
                        flex:1,
                    },
                    {
                        text: 'date de passage',
                        dataIndex: 'date_passage',
                        flex:1,
                    },
                    {
                        text: 'numero d\'ordre',
                        dataIndex: 'numero_d_ordre',
                        flex:1,
                    }
                   
                    
                   
                    
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
                            text: 'Add detail_categorie '
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