/**
 * Form used for creating and editing Categorie Members
 */
Ext.define('Compare.view.categorie.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.categorie.edit.form',
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
            items: [
        
                {
                    xtype: 'fieldcontainer',
                    items: [
                    
                        {
                            xtype: 'textfield',
                            name: 'code_categorie',
                            fieldLabel: 'Code Categorie '
                        },
                        {
                            xtype: 'textfield',
                            name: 'lib_cat',
                            fieldLabel: 'Libelle categorie'
                        },
                        
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        // {
                        //     xtype: 'ux.form.field.remotecombobox',
                        //     name: 'id_sessions_cat',
                        //     fieldLabel: 'Session',
                        //     // displayField: 'code_reunion',
                        //     queryMode:'remote',
                        //     valueField: 'id',
                        //     store: {
                        //         type: 'session'
                        //     },
                        //     plugins: [
                        //         { ptype: 'cleartrigger' }
                        //     ],
                        //     tpl:Ext.create('Ext.XTemplate',
                        //                 '<tpl for=".">',
                        //                       '<div class="x-boundlist-item">{lib_session} | {code_session}</div>',
                        //                  '</tpl>'),
                        //     displayTpl:Ext.create('Ext.XTemplate',
                        //                 '<tpl for=".">',
                        //                     '{lib_session}|{code_session}',
                        //                 '</tpl>'),
                        //     editable: false,
                        //     forceSelection: true
                        // },
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'id_sessions_cat',
                            fieldLabel: 'Session',
                            // displayField: 'code_reunion',
                            queryMode:'remote',
                            valueField: 'id',
                            store: {
                                type: 'session',
                                pageSize: 150
                            },
                            plugins: [
                                { ptype: 'cleartrigger' }
                            ],
                            tpl:Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                              '<div class="x-boundlist-item">{code_session} | {lib_session}</div>',
                                         '</tpl>'),
                            displayTpl:Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                            '{code_session}  | {lib_session}',
                                        '</tpl>'),
                            editable: true,
                            forceSelection: true
                        },
                        {
                            xtype: 'textfield',
                            name: 'montant_cat',
                            fieldLabel: 'montant categorie'
                        },
                      
                        
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    // width: 240,
                    labelWidth: 130,
                    items: [
                        {
                            xtype: 'combobox',
                            name: 'periode',
                            fieldLabel: 'Periode',
                            displayField: 'name',
                            valueField: 'name',
                            store: {
                                type: 'periode'
                            },
                            queryMode:'local',
                            editable: false,
                            typeahead:true,
                            forceSelection: true,
                        },
                        {
                            xtype: 'combobox',
                            name: 'periodicite',
                            fieldLabel: 'Periodicite',
                            displayField: 'name',
                            valueField: 'name',
                            store: {
                                type: 'day'
                            },
                            //  store: [
                            //     ['M','Masculin'],
                            //     ['F','Feminin'],
                                
                            // ],
                            queryMode:'local',
                            editable: false,
                            typeahead:true,
                            forceSelection: true,
                        },
                       
                    ]
                },
               
            ]
        });
        me.callParent( arguments );
    }
});