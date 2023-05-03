/**
 * Form used for creating and editing Reunion Members
 */
Ext.define('Compare.view.reunion.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.reunion.edit.form',
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
                            name: 'code_reunion',
                            fieldLabel: 'Code Reunion '
                        },
                        {
                            xtype: 'textfield',
                            name: 'lib_reunion',
                            fieldLabel: 'Libelle'
                        },
                        
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'datefield',
                            name: 'date_creation',
                            format:getDate(),
                            maxValue: new Date(),
                            fieldLabel: 'Date de Creation'
                        },
                        {
                            xtype: 'datefield',
                            name: 'heure',
                            // format:getHeure(),
                            format:getDate(),
                            allowBlank: true,
                            fieldLabel: 'Heure',
                        //    minValue: '6:00:00AM',
                        //    maxValue:'10:00:00 PM',
                           // format:'H:i'
                        }
                        
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
                            name: 'jour',
                            fieldLabel: 'Jour de Reunion',
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
                            // renderTo: 'multiSelectCombo',
                            // multiSelect: true,
                            // queryMode: 'local'
                        },
                       
                    ]
                },
               
            ]
        });
        me.callParent( arguments );
    }
});