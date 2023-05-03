/**
 * Main top-level navigation for application
 */
Ext.define('Compare.view.layout.Menu', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.layout.menu',
    floating: false,
    requires:[
        'Ext.tree.Panel'
    ],
    initComponent: function(){
        var me = this;
        Ext.applyIf(me,{
            items: [
                {
                    text: 'Options',
                    iconCls: 'icon_gear',
                    menu: [
                        {
                            text: 'Car Makes',
                            itemId: 'option/make',
                            iconCls: 'icon_make'
                        },
                        {
                            text: 'Car Models',
                            itemId: 'option/model',
                            iconCls: 'icon_model'
                        },
                        {
                            text: 'Car Categories',
                            itemId: 'option/category',
                            iconCls: 'icon_category'
                        },
                        {
                            text: 'Car Colors',
                            itemId: 'option/color',
                            iconCls: 'icon_color'
                        },
                        {
                            text: 'Car Features',
                            itemId: 'option/feature',
                            iconCls: 'icon_feature'
                        },
                        {
                            text: 'Staff Positions',
                            itemId: 'option/position',
                            iconCls: 'icon_position'
                        },
                        {
                            text: 'Statuses',
                            itemId: 'option/status',
                            iconCls: 'icon_status'
                        }
                    ]
                },
                // {
                //     xtype: 'menuseparator'
                // },
                // {
                //     text: 'Sales Staff',
                //     itemId: 'staff',
                //     iconCls: 'icon_user'
                // },
                // {
                //     xtype: 'menuseparator'
                // },
                // {
                //     text: 'Inventory',
                //     itemId: 'inventory',
                //     iconCls: 'icon_tag'
                // },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Reunion',
                    itemId: 'reunion',
                    iconCls: 'icon_user'
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Session',
                    itemId: 'session',
                    iconCls: 'icon_user'
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Personne',
                    itemId: 'personne',
                    iconCls: 'icon_people'
                },
                // {
                //     text: 'Detail_session',
                //     itemId: 'detail_session',
                //     iconCls: 'icon_user'
                // },
                // {
                //     xtype: 'menuseparator'
                // },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Categorie',
                    itemId: 'categorie',
                    iconCls: 'icon_category'
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Periode_reunion',
                    itemId: 'periode_reunion',
                    iconCls: 'icon_user'
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Aides',
                    iconCls: 'icon_help',
                
                        menu: [
                            {
                                text: 'Parametres',
                                itemId: 'aide/parametre',
                                iconCls: 'icon_gear'
                            },
                            
                            {
                                text: 'Aide',
                                itemId: 'aide/aide',
                                iconCls: 'icon_model'
                            },
                            {
                                text: 'Suivi d\'aide',
                                itemId: 'aide/suivi_aide',
                                iconCls: 'icon_model'
                            },
                        ]
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Prets',
                    iconCls: 'icon_loan',
                
                        menu: [
                            {
                                text: 'Parametres',
                                itemId: 'pret/parametre',
                                iconCls: 'icon_gear'
                            },
                            {
                                text: 'Pret',
                                itemId: 'pret/pret',
                                iconCls: 'icon_model'
                            },
                            {
                                text: ' Suivi pret',
                                itemId: 'pret/suivi_pret',
                                iconCls: 'icon_model'
                            },
                        ]
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'dashboard',
                    iconCls: 'icon_gear',
                    menu: [
                        {
                            text: 'Atelier',
                            itemId: 'dashboard/atelier',
                            iconCls: 'icon_make'
                        },
                        {
                            text: 'Frontiere',
                            itemId: 'dashboard/frontiere',
                            iconCls: 'icon_make'
                        },
                        {
                            text: 'Pose',
                            itemId: 'dashboard/pose',
                            iconCls: 'icon_make'
                        },
                    ]
                }
               
                // {
                //     text: 'Detail_categorie',
                //     itemId: 'detail_categorie',
                //     iconCls: 'icon_user'
                // },
                // {
                //     xtype: 'menuseparator'
                // },
                // {
                //     text: 'Detail periode reunion',
                //     itemId: 'detail_periode_reunion',
                //     iconCls: 'icon_user'
                // },
                
            ]
        });
        me.callParent( arguments );
    } 
});