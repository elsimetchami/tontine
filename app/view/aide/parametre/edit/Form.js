/**
 * Form used for creating and editing Aide Members
 */
Ext.define('Compare.view.aide.parametre.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.aide.parametre.edit.form',
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
            
            items: [
                // {
                //     xtype:'',
                //     items:[
                //         ,{                         
                //             fieldLabel: 'Select Test',
                //             id:'secondComboID',                                
                //             store:testsStore,
                //             valueField: 'id',
                //             displayField: 'test',
                //             typeAhead: true,
                //             forceSelection: true,
                //             allowBlank: false,
                //             editable: true,
                //             triggerAction:'all',
                //             lastQuery:''
                //         }
                //     ]

                // },
                {
                    xtype: 'fieldcontainer',
                    items: [
                         // "id":1,"id_sessions_p_a":"1","id_categories_p_a":1,"montant_p_a":20000,"type_p_a":"mariage","lib_session":"première session", "lib_cat":"première catégorie","montant_cat":5000
                    {
                        xtype: 'ux.form.field.remotecombobox',
                        name: 'id_sessions_p_a',
                        fieldLabel: 'Session',                        
                        typeAhead: true,                                
                        forceSelection: true,                   
                        allowBlank: false,
                        editable: true,
                        triggerAction: 'all',
                        // displayField: 'code_reunion',
                        queryMode:'remote',
                        valueField: 'id',
                        store: {
                            type: 'session'
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
                    {
                        xtype: 'ux.form.field.remotecombobox',
                        name: 'id_categories_p_a',
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
                        //editable: false,
                        forceSelection: true,
                        anyMatch:true,
                        allowBlank: false,
                        editable: true,
                        triggerAction:'all',
                        // lastQuery:'',
                        
                    } 
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                       
                        {
                            xtype: 'combobox',
                            name: 'type_p_a',
                            fieldLabel: 'Type',
                            displayField: 'name',
                            valueField: 'name',
                            store: {
                                type: 'type'
                            },
                            queryMode:'local',
                            editable: true,
                            triggerAction: 'all',
                            typeahead:true,
                            forceSelection: true,
                            anyMatch:true,
                            
                        },
                        {
                            xtype: 'textfield',
                            name: 'montant_p_a',
                            fieldLabel: 'Montant'
                        },
                        
                        
                    ]
                },
                
               
                
               
            ]
        });
        me.callParent( arguments );
    }
});