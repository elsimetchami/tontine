/**
 * Grid for displaying detail_session details
 */
Ext.define('Compare.view.detail_session.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.detail_session.list',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
       'Ext.grid.column.RowNumberer',
       'Ext.grid.feature.Summary'
    ],
    features: [{ ftype: 'grouping' },
    {
        ftype: 'summary'
    }],
    store: 'Detail_session',
    selType: 'checkboxmodel',
    
    // width:600,
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
                    {
                        xtype:'templatecolumn',
                        text: 'Nom  Prenom',
                        model:'Personne',
                        // dataIndex: 'situation_matrimoniale',
                        tpl:'{nom} {prenom}',
                        flex:1, 
                        summaryType: 'count',
                        summaryRenderer: function(value, summaryData, dataIndex) {
                         return Ext.String.format('{0} Personne{1}', value, value !== 1 ? 's' : ''); 
                        }                      
                    },
                    {
                        text: 'Role',
                        dataIndex: 'role',
                        flex:1,
                    },
                   
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
                            text: 'Add detail_session '
                        },
                       
                       
                        '->',
                        {
                            xtype: 'combo',
                            store: {type:'detail_session'},
                            displayField: 'nom',
                            typeAhead: false,
                            hideLabel: true,
                            hideTrigger:true,
                            anchor: '100%',
                
                            listConfig: {
                                loadingText: 'Searching...',
                                emptyText: 'No matching posts found.',
                
                                // Custom rendering template for each item
                                getInnerTpl: function() {
                                    return '<a class="search-item" href="http://www.sencha.com/forum/showthread.php?t={topicId}&p={id}">' +
                                        '<h3><span><br />by {nom}</span>{prenom}</h3>' +
                                        '{excerpt}' +
                                    '</a>';
                                }
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