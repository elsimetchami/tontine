/**
 * Form used for creating and editing Reunion Members
 */
Ext.define('Compare.view.detail_periode_reunion.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.detail_periode_reunion.edit.form',
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
  // {"data":[{"id":3,"id_periode_reunions_det":2,"id_personnes_det_p":3,"montant_d_p":20000,"statut":"cotiser","id_categories_p":2,"date_jour":" 2000-04-02","beneficier":"ana4 anabel4","nom":"ana2","prenom":"anabel2"}],"count":1,"success":true}
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'id_periode_reunions_det',
                            fieldLabel: 'periode reunion',
                            // displayField: 'code_reunion',
                            queryMode:'remote',
                            valueField: 'id',
                            store: {
                                type: 'periode_reunion',
                                pageSize: 150
                            },
                            plugins: [
                                { ptype: 'cleartrigger' }
                            ],
                            tpl:Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                              '<div class="x-boundlist-item">{nom}</div>',
                                         '</tpl>'),
                            displayTpl:Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                            '{nom}  | {prenom}',
                                        '</tpl>'),
                            editable: false,
                            forceSelection: true
                        },
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'id_personnes_det_p',
                            fieldLabel: 'Personne',
                            // displayField: 'code_reunion',
                            queryMode:'remote',
                            valueField: 'id',
                            store: {
                                type: 'detail_categorie',
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
                            forceSelection: true
                        },
                        {
                            xtype: 'combobox',
                            name: 'statut',
                            fieldLabel: 'statut',
                            displayField: 'name',
                            valueField: 'name',
                            // store: {
                            //     type: 'role'
                            // },
                             store: [
                                ['cotisé','cotisé'],
                                ['non-cotisé','non-cotisé'],
                                
                            ],
                            queryMode:'local',
                            editable: false,
                            typeahead:true,
                            forceSelection: true,
                            // renderTo: 'multiSelectCombo',
                            // multiSelect: true,
                            // queryMode: 'local'
                        },
                        
                    ]},
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'montant_d_p',
                            // format:getDate(),
                            // maxValue: new Date(),
                            fieldLabel: 'montant_d_p'
                        },
                        {
                            xtype: 'datefield',
                            name: 'date_jour',
                            format:getDate(),
                            // maxValue: new Date(),
                            fieldLabel: 'date de jour'
                        },
                    ]}
                
            ]
        });
        me.callParent( arguments );
    }
});