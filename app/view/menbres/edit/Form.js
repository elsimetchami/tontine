/**
 * Form used for creating and editing Session Members
 */
Ext.define('Compare.view.session.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.session.edit.form',
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
                             
            },
            items: [
                {
                    xtype: 'fieldcontainer',
                    items: [
                        //
                          // `id` int(10) UNSIGNED NOT NULL,
                    //   `id_reunions` int(10) UNSIGNED NOT NULL,
                    //   `code_session` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                    //   `libelle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                    //
                        {
                            xtype: 'textfield',
                            name: 'id_reunions',
                            fieldLabel: ' Reunion '
                        }, 
                        {
                            xtype: 'textfield',
                            name: 'code_session',
                            fieldLabel: 'Code Session '
                        },
                        {
                            xtype: 'textfield',
                            name: 'libelle',
                            fieldLabel: 'Libelle'
                        },
                        
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'datefield',
                            name: 'date_debut',
                            fieldLabel: 'date de debut'
                        },
                        {
                            xtype: 'datefield',
                            name: 'date_fin',
                            fieldLabel: 'date de fin'
                        },
                        
                        
                    ]
                },
               
            ]
        });
        me.callParent( arguments );
    }
});