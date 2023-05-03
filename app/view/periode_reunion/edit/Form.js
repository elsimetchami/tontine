/**
 * Form used for creating and editing Periode_periode_reunion Members
 */
Ext.define('Compare.view.periode_reunion.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.periode_reunion.edit.form',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'Compare.ux.form.field.RemoteComboBox',
        'Ext.form.CheckboxGroup',
        'Ext.form.field.Time'
    ],
    bodyPadding: 5,
    initLabelable: function () {
        this.callParent(arguments);

        if (this.fieldLabel && this.allowBlank === false) {
            this.labelSeparator += '<span class="mandatory">*</span>';
        }
    },
    initComponent: function() {
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
//             {id: 2, id_sessions_cat: 1, code_categorie: 'Q02', lib_cat: 'deuxieme categorie', periodicite: 'Jeudi', …}
// code_categorie
// : 
// "Q02"
// code_session
// : 
// "J50"
// date_debut
// : 
// "2000-01-19"
// date_fin
// : 
// "2000-12-02"
// id
// : 
// 2
// id_sessions_cat
// : 
// 1
// lib_cat
// : 
// "deuxieme categorie"
// montant_cat
// : 
// "20000"
// periode
// : 
// "Jour"
// periodicite
// : 
// "Jeudi"
            items: [
                //`id` int(10) UNSIGNED NOT NULL,
        //   `date_jour` date NOT NULL,
        //   `id_categories_p` int(10) UNSIGNED NOT NULL,
        //   `id_beneficier` int(10) UNSIGNED NOT NULL,
        //   `periode_cotisation` date NOT NULL,
        //   `beneficier` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        //   `montantp`
        // [{"id":1,"id_categories_p":1,"date_jour":"2000-02-04","periode_cotisation":"2000-02-04",
// "beneficier":"ANA anabel","id_beneficier":2,"montantp":2000,"code_categorie":"J50",}]

// `id` int(10) UNSIGNED NOT NULL,
//   `date_jour` date NOT NULL,
//   `id_categories_p` int(10) UNSIGNED NOT NULL,
//   `id_beneficier` int(10) UNSIGNED NOT NULL,
//   `periode_cotisation` date NOT NULL,
//   `beneficier` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
//   `montantp`
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'id_categories_p',
                            fieldLabel: 'Categorie',
                            // displayField: 'code_reunion',
                            queryMode:'remote',
                            valueField: 'id',
                            store: {
                                type: 'categorie'
                            },
                            plugins: [
                                { ptype: 'cleartrigger' }
                            ],
                            tpl:Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                              '<div class="x-boundlist-item">{lib_cat}</div>',
                                         '</tpl>'),
                            displayTpl:Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                            '{code_categorie}  | {lib_cat}',
                                        '</tpl>'),
                            editable: false,
                            forceSelection: true
                        },
                        {
                            xtype: 'textfield',
                            name: 'montantp',
                            fieldLabel: 'montant',
                            invalidText: 'montant',
                            // fieldStyle: 'background-color: #ddd; background-image: none;'
                        },
                        
                        
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'datefield',
                            name: 'date_jour',
                            format:getDate(),
                            // maxValue: new Date(),
                            fieldLabel: 'date de jour',
                            // invalidText: 'date de jour',
                        },
                        {
                            xtype: 'datefield',
                            name: 'periode_cotisation',
                            format:getDate(),
                            // maxValue: new Date(),
                            fieldLabel: 'periode cotisation'
                        },
                        
                        
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    // width: 240,
                    labelWidth: 130,
                    items: [
                        // {
                        //     xtype: 'ux.form.field.remotecombobox',
                        //     name: 'id_beneficier',
                        //     fieldLabel: 'beneficier',
                        //     // displayField: 'code_reunion',
                        //     queryMode:'remote',
                        //     valueField: 'id',
                        //     store: {
                        //         type: 'personne'
                        //     },
                        //     plugins: [
                        //         { ptype: 'cleartrigger' }
                        //     ],
                        //     tpl:Ext.create('Ext.XTemplate',
                        //                 '<tpl for=".">',
                        //                       '<div class="x-boundlist-item">{nom} {prenom}</div>',
                        //                  '</tpl>'),
                        //     displayTpl:Ext.create('Ext.XTemplate',
                        //                 '<tpl for=".">',
                        //                     '{nom} {prenom}',
                        //                 '</tpl>'),
                        //     editable: false,
                        //     forceSelection: true
                        // },
                        // {
                        //     xtype: 'ux.form.field.remotecombobox',
                        //     name: 'id_beneficier',
                        //     fieldLabel: 'Beneficier',
                        //     // displayField: 'code_reunion',
                        //     queryMode:'remote',
                        //     valueField: 'id',
                        //     // valueField: 'id_personnes_det_c',
                        //     store: {
                        //         type: 'detail_categorie',
                        //         pageSize: 150
                        //     },
                        //     plugins: [
                        //         { ptype: 'cleartrigger' }
                        //     ],
                        //     tpl:Ext.create('Ext.XTemplate',
                        //                 '<tpl for=".">',
                        //                       '<div class="x-boundlist-item">{nom} {prenom}</div>',
                        //                  '</tpl>'),
                        //     displayTpl:Ext.create('Ext.XTemplate',
                        //                 '<tpl for=".">',
                        //                     '{nom} {prenom}',
                        //                 '</tpl>'),
                        //     editable: false,
                        //     forceSelection: true
                        // },
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'id_beneficier',
                            fieldLabel: 'beneficier',
                            // displayField: 'code_reunion',
                            queryMode:'remote',
                            // disabled:true,
                            valueField: 'id',
                            store: {
                                type: 'detail_categorie'
                            },
                            plugins: [
                                { ptype: 'cleartrigger' }
                            ],
                            tpl:Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                              '<div class="x-boundlist-item">{nom} | {prenom}</div>',
                                         '</tpl>'),
                            displayTpl:Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                            '{nom}  | {prenom}',
                                        '</tpl>'),
                            //editable: false,
                            forceSelection: true
                        },
                       
                    ]
                },
               
            ]
        });
        me.callParent( arguments );
    }
});