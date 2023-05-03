/**
 * Form used for creating and editing Reunion Members
 */
Ext.define('Compare.view.detail_session.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.detail_session.edit.form',
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
                // flex: 1,
                margins: 5
            },
            defaults: {
                layout: 'hbox',
                             
            },
            items: [
                {
                    xtype: 'fieldcontainer',
                    items: [
                    // {
                    //         xtype: 'itemselectorfield',
                    //         name: 'id_personnes_sess',
                    //         anchor: '100%',
                    //         // queryMode:'remote',
                    //         store: {
                    //             type: 'personne'
                    //         },
                    //         // store: [
                    //         //     ['M','Masculin'],
                    //         //     ['F','Feminin'],
                                
                    //         // ],
                    //         displayField: 'nom',
                    //         valueField: 'nom',
                    //         allowBlank: false,
                    //         // msgTarget: 'side',
                    //         fromTitle: 'Available Features',
                    //         toTitle: 'Selected Features',
                    //         buttons: [ 'add', 'remove' ],
                    //         // delimiter: null
                    //     },
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'id_sessions_det',
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
                                              '<div class="x-boundlist-item">{lib_session}</div>',
                                         '</tpl>'),
                            displayTpl:Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                            '{code_session}  | {lib_session}',
                                        '</tpl>'),
                            editable: false,
                            forceSelection: true,
                            flex:1,
                        },
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'id_personnes_sess',
                            fieldLabel: 'Personne',
                            // displayField: 'code_reunion',
                            queryMode:'remote',
                            mode : 'remote',
                            // pageSize:true,
                            // pageSize: 150,
                             // listWidth     : 1,
                            width         : 600,
                            triggerAction : 'all',
                            valueField: 'id',
                            store: {
                                type: 'personne',
                                pageSize: 150
                            },
                            plugins: [
                                { ptype: 'cleartrigger' }
                            ],
                            tpl:Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                              '<div class="x-boundlist-item">{nom}{prenom}</div>',
                                         '</tpl>'),
                            displayTpl:Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                            '{nom} {prenom}',
                                        '</tpl>'),
                            editable: false,
                            forceSelection: true,
                            flex:2,
                        },
                        {
                            xtype: 'combobox',
                            name: 'role',
                            fieldLabel: 'role',
                            displayField: 'name',
                            valueField: 'name',
                            store: {
                                type: 'role'
                            },
                            //  store: [
                            //     ['M','Masculin'],
                            //     ['F','Feminin'],
                                
                            // ],
                            // queryMode:'remote',
                            queryMode:'local',
                            editable: false,
                            typeahead:true,
                            forceSelection: true,
                            // renderTo: 'multiSelectCombo',
                            // multiSelect: true,
                            // queryMode: 'local'
                            flex:1,
                        },
                    ]},
                
            ]
        });
        me.callParent( arguments );
    }
});