/**
 * Form used for creating and editing Aide Members
 */
Ext.define('Compare.view.aide.aide.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.aide.aide.edit.form',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'Compare.ux.form.field.RemoteComboBox',
        'Ext.XTemplate'
    ],
    bodyPadding: 5,
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
            // {"data":[{"id":1,"id_personnes_a":1,"id_param_aides":1,"id_sessions_a":1,"lib_a":"première aide",
        // "montant_a":30000,"type_a": "deces membre","date_a":"2000-10-10","lib_session":"première session","montant_p_a":20000,
        // "type_p_a":"mariage","code_categorie":"Q01","lib_cat ":"premiere categorie","nom":"ana","prenom":"anabel"}],"count":1,"success":true}
            items: [
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'id_param_aides',
                            fieldLabel: 'Parametre aide',
                            // displayField: 'code_reunion',
                            queryMode:'remote',
                            valueField: 'id',
                            // listeners: {
                            //     change: function (remotecombobox, newValue, oldValue, eOpts ) {
                            //         var combo = remotecombobox.up( 'form' ).down( 'combobox[name=id_sessions_a]' );
                            //         if( newValue ) {
                            //             combo.enable();
                            //         }
                            //         else {
                            //             combo.disable();
                            //         }
                            //     }
                            // },
                            store: {
                                type: 'aide.parametre'
                            },
                            plugins: [
                                { ptype: 'cleartrigger' }
                            ],
                            tpl:Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                              '<div class="x-boundlist-item">{lib_session}</div>',
                                         '</tpl>'),
                            displayTpl:Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                            '{code_session}  | {lib_session}',
                                        '</tpl>'),
                            //editable: false,
                            forceSelection: true,
                        },
                        // {
                        //     xtype: 'ux.form.field.remotecombobox',
                        //     name: 'id_sessions_a',
                        //     fieldLabel: 'session',
                        //     // displayField: 'code_reunion',
                        //     queryMode:'remote',
                        //     valueField: 'id',
                        //     listeners: {
                        //         change: function (remotecombobox, newValue, oldValue, eOpts ) {
                        //             var combo = remotecombobox.up( 'form' ).down( 'combobox[name=id_reunions_sess]' );
                        //             if( newValue ) {
                        //                 combo.enable();
                        //             }
                        //             else {
                        //                 combo.disable();
                        //             }
                        //         }
                        //     },
                        //     store: {
                        //         type: 'session'
                        //     },
                        //     plugins: [
                        //         { ptype: 'cleartrigger' }
                        //     ],
                        //     tpl:Ext.create('Ext.XTemplate',
                        //                 '<tpl for=".">',
                        //                       '<div class="x-boundlist-item">{lib_session}</div>',
                        //                  '</tpl>'),
                        //     displayTpl:Ext.create('Ext.XTemplate',
                        //                 '<tpl for=".">',
                        //                     '{code_session}  | {lib_session}',
                        //                 '</tpl>'),
                        //     //editable: false,
                        //     forceSelection: true,
                           
                        // },
                    
                    {
                        xtype: 'ux.form.field.remotecombobox',
                        name: 'id_sessions_a',
                        fieldLabel: 'Categorie',
                        // displayField: 'code_reunion',
                        queryMode:'remote',
                        // disabled:true,
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
                                        ' {lib_cat}',
                                    '</tpl>'),
                        //editable: false,
                        forceSelection: true,
                        readOnly:true
                    }
                    ]
                },
                
            // {"data":[{"id":1,"id_personnes_a":1,"id_param_aides":1,"id_sessions_a":1,"lib_a":"première aide",
        // "montant_a":30000,"type_a": "deces membre","date_a":"2000-10-10","lib_session":"première session","montant_p_a":20000,
        // "type_p_a":"mariage","code_categorie":"Q01","lib_cat ":"premiere categorie","nom":"ana","prenom":"anabel"}],"count":1,"success":true}
                {
                    xtype: 'fieldcontainer',
                    items: [
                       
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'id_personnes_a',
                            fieldLabel: 'Personne',
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
                        {
                            xtype: 'combobox',
                            name: 'type_a',
                            fieldLabel: 'Type',
                            displayField: 'name',
                            valueField: 'name',
                            store: {
                                type: 'type'
                            },
                            queryMode:'local',
                            // editable: true,
                            triggerAction: 'all',
                            typeahead:true,
                            forceSelection: true,
                            anyMatch:true,
                            // disabled:true,
                            readOnly:true
                        },
                    ]
                },
  
                {
                    xtype: 'fieldcontainer',
                    items: [
                       
                        {
                            xtype: 'textfield',
                            name: 'montant_a',
                            readOnly:true,
                            fieldLabel: 'montant '
                        },
                        {
                            xtype: 'datefield',
                            name: 'date_a',
                            format:getDate(),
                            fieldLabel: 'Date'
                        },
                        
                    ]
                },
                
               
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'lib_a',
                            fieldLabel: 'Libelle'
                        },
                    ]
                },
               
            ]
        });
        me.callParent( arguments );
    }
});