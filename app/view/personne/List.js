/**
 * Grid for displaying Personne details
 */
Ext.define('Compare.view.personne.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.personne.list',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
       'Ext.grid.column.RowNumberer',
       'Ext.grid.column.Template'
    ],
    title: 'liste Personne ',
    iconCls: 'icon_user',
    store: 'Personne',
    selType: 'checkboxmodel',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                defaults: {},
                items: [
                    {
                        xtype:'templatecolumn',
                        text: 'Nom et Prenom',
                        // dataIndex: 'situation_matrimoniale',
                        tpl:'{nom} {prenom}',
                        align:'left',
                        flex:1,                       
                    },
                    {
                        text: 'date de naissance',
                        dataIndex: 'date_naissance',
                        flex:1,
                        dateFormat: 'Y-m-d',
                    },
                    {
                        text: 'date d\'entree',
                        dataIndex: 'date_d_entree',
                        flex:1,
                        align:'center',
                        // dateFormat: 'Y-m-d',
                    },
                    {
                        text: 'Telephone',
                        dataIndex: 'telephone',
                        flex:1,        
                        align:'center',               
                    },
                    {
                        text: 'Sexe',
                        dataIndex: 'sexe',
                        flex:0.7, 
                        align:'right',
                    },
                    {
                        text: 'Situation matrimoniale',
                        dataIndex: 'situation_matrimoniale',
                        flex:.7,      
                        align:'right',                
                    },
                    {
                        menuDisabled: true,
                        sortable: false,
                        xtype: 'actioncolumn',
                        width: 50,
                        items: [{
                            iconCls: 'sell-col',
                            tooltip: 'Sell stock',
                            // handler: function(grid, rowIndex, colIndex) {
                            //     var rec = grid.getStore().getAt(rowIndex);
                            //     Ext.Msg.alert('Sell', 'Sell ' + rec.get('lib_reunion'));
                            // }
                            handler: function(grid, rowIndex, colIndex) {
                                var rec = grid.getStore().getAt(rowIndex);
                                Ext.Msg.alert('Sell', 'Sell ' + rec.get('nom'));
                            }
                        }, {
                            getClass: function(v, meta, rec) {
                                if (rec.get('prenom') < 0) {
                                    return 'alert-col';
                                } else {
                                    return 'buy-col';
                                }
                            },
                            getTip: function(v, meta, rec) {
                                if (rec.get('prenom') < 0) {
                                    return 'Hold stock';
                                } else {
                                    return 'Buy stock';
                                }
                            },
                            handler: function(grid, rowIndex, colIndex) {
                                var rec = grid.getStore().getAt(rowIndex),
                                    action = (rec.get('prenom') < 0 ? 'Hold' : 'Buy');
        
                                Ext.Msg.alert(action, action + ' ' + rec.get('company'));
                            }
                        
                    }
                        
                    
                     ],
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
                            text: 'Add Personne '
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
