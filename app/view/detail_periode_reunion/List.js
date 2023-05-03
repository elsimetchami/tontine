/**
 * Grid for displaying detail_periode_reunion details
 */
Ext.define('Compare.view.detail_periode_reunion.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.detail_periode_reunion.list',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
       'Ext.grid.column.RowNumberer'
    ],
    // title: 'Manage detail_periode_reunion ',
    // iconCls: 'icon_user',
    store: 'Detail_periode_reunion',
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
//                     `id` int(10) UNSIGNED NOT NULL,
//   `id_personnes_det_p` int(10) UNSIGNED NOT NULL,
//   `id_periode_reunions_det` int(10) UNSIGNED NOT NULL,
//   `montant_d_p` double(8,2) NOT NULL,
//   `statut`
                    // [{"id":1,"id_periode_reunions_det":1,"id_personnes_det_p":2,"montant_d_p":20000,"statut":"valide","id_categories_p":1,
                    // "date_jour":"2000-02-04","beneficier":"ANA anabel","nom":"ANA","prenom":"anabel"}]
                    {
                        xtype:'templatecolumn',
                        text: 'Nom  Prenom',
                        model:'Personne',
                        // dataIndex: 'situation_matrimoniale',
                        tpl:'{nom} {prenom}',
                        flex:1,                       
                    },
                    {
                        text: 'Montant',
                        dataIndex: 'montant_d_p',
                        flex:1,
                    },
                    {
                        text: 'Date de jour',
                        dataIndex: 'date_jour',
                        flex:1,
                    },
                    {
                        text: 'Status',
                        dataIndex: 'statut',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'statut' )
                        },
                        width: 200
                    }
                    
                   
                    // {
                    //     text: 'Heure',
                    //     dataIndex: 'heure',
                    //     // Format: getHeure(),
                    //     // dateWriteFormat: getdate(),
                    //     flex:1,                        // hidden: true
                    // },
                    // {
                    //     xtype: 'datecolumn',
                    //     text: 'date de creation',
                    //     dataIndex: 'date_creation',
                    //     dateFormat: 'Y-m-d',
                    //     flex:1,
                    //     // hidden: true
                    // },
                   
                    
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
                            text: 'Add detail_periode_reunion '
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