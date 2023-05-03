/**
 * Grid for displaying Session details
 */
Ext.define('Compare.view.session.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.session.list',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
       'Ext.grid.column.RowNumberer'
    ],
    title: 'liste Session ',
    iconCls: 'icon_user',
    store: 'Session',
    selType: 'checkboxmodel',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                defaults: {},
                items: [
                  
                    {
                        xtype: 'rownumberer',
                        width: 30,
                        sortable: false,
                        // locked: true
                    },
                    {
                        text: 'Reunion',
                        dataIndex: 'id_reunions',
                        flex:1,
                    },
                    {
                        text: 'Code',
                        dataIndex: 'code_session',
                        flex:1,
                    },
                    {
                        text: 'Libelle',
                        dataIndex: 'libelle',
                        flex:1,
                    },
                    {
                        text: 'date_debut',
                        dataIndex: 'date_debut',
                        flex:1,
                    },
                    {
                        text: 'date de Fin',
                        dataIndex: 'date_fin',
                        flex:1,                        // hidden: true
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