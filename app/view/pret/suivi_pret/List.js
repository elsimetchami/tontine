/**
 * Grid for displaying Suivi_pret details
 */
Ext.define('Compare.view.pret.suivi_pret.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.pret.suivi_pret.list',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
       'Ext.grid.column.RowNumberer',
       'Ext.grid.column.Action'
    ],
    title: 'liste Suivi_pret ',
    store: 'pret.Suivi_pret',
    selType: 'checkboxmodel',
    // layout:'vbox',
    layout: 'anchor',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            actions:{

            },
            columns: {
                anchor: '75% 50%',
                defaults: {},
                items: [
//         `id`
//   `id_prets_suivi`
//   `id_personnes_s_p`
//   `date_suivi`
//   `date_paiement`
//   `montant_s_p`
//   `interet_s_p`
//   `statut`
                    {
                        xtype:'templatecolumn',
                        text: 'Nom et Prenom',
                        // dataIndex: 'situation_matrimoniale',
                        tpl:'{nom} {prenom}',
                        align:'left',
                        flex:1,                       
                    },
                     // {"data":[{"id":3,"id_prets_suivi":2,"id_personnes_s_p":3,"date_suivi":"2000-06-06","date_paiement":"2000-06-06"," montant_s_p":7500,"interet_s_p":150,"statut":"en cours","lib_p":"pour maladie","montant_p":15000,"montant_interet_p":300,"nom":"ana2"," prenom":"anabel2"}],"count":1,"success":true}
                    
                    
                    {
                        text: 'libelle pret',
                        dataIndex: 'lib_p',
                        flex:1,
                    },
                    {
                        text: 'interet',
                        dataIndex: 'interet_s_p',
                        flex:1,
                    },
                    {
                        text: 'Montant',
                        dataIndex: 'montant_s_p',
                        flex:1,
                    },
                    // {
                    //     text: 'Montant et interet',
                    //     dataIndex: 'montant_interet_p',
                    //     flex:1,
                    // },
                    {
                        text: 'statut',
                        dataIndex: 'statut',
                        flex:1,
                    },
                    {
                        text: 'Date suivi',
                        dataIndex: 'date_suivi',
                        flex:1,
                    },
                    {
                        text: 'Date paiement',
                        dataIndex: 'date_paiement',
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
                            text: 'Add Suivi_pret '
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