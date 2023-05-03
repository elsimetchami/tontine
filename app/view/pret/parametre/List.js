/**
 * Grid for displaying Parametre details
 */
Ext.define('Compare.view.pret.parametre.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.pret.parametre.list',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
       'Ext.grid.column.RowNumberer',
       'Ext.grid.column.Action'
    ],
    title: 'liste Parametre ',
    // html:'<i class="fi fi-sr-camera">',
    iconCls: 'icon_camera',
    store: 'pret.Parametre',
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
                 
                    {
                        text: 'Categorie',
                        dataIndex: 'lib_cat',
                        flex:1,
                    },
                    
                    
                    {
                        text: 'Taux de interet (%)',
                        dataIndex: 'taux_interet',
                        flex:1, 
                        renderer: function(value){
                            if (value !== 0) {
                                return  value + '%';
                            }
                            return value;
                        }  
                    },
                    {
                        text: 'Taux de penalite (%)',
                        dataIndex: 'taux_penalite',
                        flex:1, 
                        renderer: function(value){
                            if (value !== 0) {
                                return  value + '%';
                            }
                            return value;
                        }               
                    },
                    {
                        text: 'Montant',
                        dataIndex: 'montant_max_p_p',
                        flex:1,
                    },
                   
                ]
                
            },
            // columns:{
            //     anchor: '50% 100%',
            //     items:[
            //     {
            //             xtype: 'detail_pret.list'
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