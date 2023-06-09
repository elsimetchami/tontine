/**
 * Form used for creating and editing Staff Members
 */
Ext.define('Compare.view.staff.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.staff.edit.form',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'Compare.ux.form.field.RemoteComboBox'
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
                margins: '0 10 0 10'                
            },
            items: [
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'FirstName',
                            fieldLabel: 'First Name'
                        },
                        {
                            xtype: 'textfield',
                            name: 'LastName',
                            fieldLabel: 'Last Name'
                        },
                        {
                            xtype: 'datefield',
                            name: 'DOB',
                            fieldLabel: 'DOB'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'Address1',
                            fieldLabel: 'Address1'
                        },
                        {
                            xtype: 'textfield',
                            name: 'Address2',
                            allowBlank: true,
                            fieldLabel: 'Address2'
                        },
                       
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'City',
                            fieldLabel: 'City'
                        },
                        {
                            xtype: 'textfield',
                            name: 'State',
                            fieldLabel: 'State'
                        },
                        {
                            xtype: 'textfield',
                            name: 'PostalCode',
                            fieldLabel: 'Postal Code'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'Phone',
                            fieldLabel: 'Phone'
                        },
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'Position',
                            fieldLabel: 'Position',
                            displayField: 'LongName',
                            valueField: 'PositionID',
                            store: {
                                type: 'option.position'
                            },
                            editable: false,
                            forceSelection: true
                        },
                        {
                            xtype: 'datefield',
                            name: 'HireDate',
                            allowBlank: false,
                            fieldLabel: 'Hire Date'
                        },
                        {
                            xtype: 'datefield',
                            name: 'test',
                            allowBlank: false,
                            fieldLabel: 'Hire Date',
                            // format: 'l/d/m/y',
                            format:"F d",
                            // l' }         
                        minValue: '01/01/06',
                        disabledDays: [0, 6],
                        }
                    ]
                }
            ]
        });
        me.callParent( arguments );
    }
});