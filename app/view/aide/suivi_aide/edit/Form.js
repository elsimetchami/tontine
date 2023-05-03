/**
 * Form used for creating and editing Aide Members
 */
Ext.define('Compare.view.aide.suivi_aide.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.aide.suivi_aide.edit.form',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'Compare.ux.form.field.RemoteComboBox',
        'Ext.XTemplate'
    ],
    bodyPadding: 5,
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                allowBlank: false,
                labelAlign: 'top',
                flex: 1,
                margins: 5
            },
            defaults: {
                layout: 'hbox',

            },
            // `id` 
            // `id_aides_s_a`
            // `date_s_a`
            // `id_personnes_s_a`
            // `montant_s_a`
            // `statut_s_a`

            items: [

                {
                    xtype: 'fieldcontainer',
                    items: [

                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'id_aides_s_a',
                            fieldLabel: 'Aide',
                            typeAhead: true,
                        typeAhead: true,                                
                            typeAhead: true,
                            forceSelection: true,
                        forceSelection: true,                   
                            forceSelection: true,
                            allowBlank: false,
                            editable: true,
                            triggerAction: 'all',
                            // displayField: 'code_reunion',
                            queryMode: 'remote',
                            valueField: 'id',
                            store: {
                                type: 'aide.aide'
                            },
                            plugins: [
                                { ptype: 'cleartrigger' }
                            ],
                            tpl: Ext.create('Ext.XTemplate',
                                '<tpl for=".">',
                                '<div class="x-boundlist-item">{lib_a}</div>',
                                '</tpl>'),
                            displayTpl: Ext.create('Ext.XTemplate',
                                '<tpl for=".">',
                                '{lib_a}',
                                '</tpl>'),
                            //editable: false,
                            forceSelection: true,


                        },
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'id_personnes_s_a',
                            fieldLabel: 'Personne',
                            // displayField: 'code_reunion',
                            queryMode: 'remote',
                            // disabled:true,
                            valueField: 'id',
                            store: {
                                type: 'detail_categorie'
                            },
                            plugins: [
                                { ptype: 'cleartrigger' }
                            ],
                            tpl: Ext.create('Ext.XTemplate',
                                '<tpl for=".">',
                                '<div class="x-boundlist-item">{nom} | {prenom}</div>',
                                '</tpl>'),
                            displayTpl: Ext.create('Ext.XTemplate',
                                '<tpl for=".">',
                                '{nom}  | {prenom}',
                                '</tpl>'),
                            //editable: false,
                            forceSelection: true
                        },
                        // {
                        //     xtype: 'ux.form.field.remotecombobox',
                        //     name: 'id_personnes_s_a',
                        //     fieldLabel: 'Personne',
                        //     // displayField: 'code_reunion',
                        //     queryMode:'remote',
                        //     valueField: 'id',
                        //     store: {
                        //         type: 'detail_categorie'
                        //     },
                        //     plugins: [
                        //         { ptype: 'cleartrigger' }
                        //     ],
                        //     tpl:Ext.create('Ext.XTemplate',
                        //                 '<tpl for=".">',
                        //                       '<div class="x-boundlist-item">{lib_cat}</div>',
                        //                  '</tpl>'),
                        //     displayTpl:Ext.create('Ext.XTemplate',
                        //                 '<tpl for=".">',
                        //                     '{nom}  | {prenom}',
                        //                 '</tpl>'),
                        //     //editable: false,
                        //     forceSelection: true,
                        //     anyMatch:true,
                        //     allowBlank: false,
                        //     editable: true,
                        //     triggerAction:'all',

                        // } 
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [

                        // {
                        //     xtype: 'combobox',
                        //     name: 'type_p_a',
                        //     fieldLabel: 'Type',
                        //     displayField: 'name',
                        //     valueField: 'name',
                        //     store: {
                        //         type: 'type'
                        //     },
                        //     queryMode:'local',
                        //     editable: true,
                        //     triggerAction: 'all',
                        //     typeahead:true,
                        //     forceSelection: true,
                        //     anyMatch:true,

                        // },

                        // {"data":[{"id":1,"id_aides_s_a":1,"id_personnes_s_a":1,"date_s_a":"2000-01-16","montant_s_a":15000,"statut_s_a":"en cours de validation","id_sessions_a":1,"lib_a":"premiere aide","montant_a":30000,"type_a":"deces membre","nom":"ana","prenom":"anabel"} ],"count":1,"success":true}Texte d'origineProposer une meilleure traduction
                        {
                            xtype: 'textfield',
                            name: 'montant_s_a',
                            fieldLabel: 'Montant'
                        },
                        {
                            xtype: 'textfield',
                            name: 'statut_s_a',
                            fieldLabel: 'Statu'
                        },
                        {
                            xtype: 'datefield',
                            name: 'date_s_a',
                            format: getDate(),
                            fieldLabel: 'Date'
                        },

                    ]
                },




            ]
        });
        me.callParent(arguments);
    }
});