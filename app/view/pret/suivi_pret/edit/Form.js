/**
 * Form used for creating and editing Pret Members
 */
Ext.define('Compare.view.pret.suivi_pret.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.pret.suivi_pret.edit.form',
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
                //         `id`
//   `id_prets_suivi`
//   `id_personnes_s_p`
//   `date_suivi`
//   `date_paiement`
//   `montant_s_p`
//   `interet_s_p`
//   `statut`

// `id` int(10) UNSIGNED NOT NULL,
        // `id_prets_suivi` int(10) UNSIGNED NOT NULL,
        // `id_personnes_s_p` int(10) UNSIGNED NOT NULL,
        // `date_suivi` date NOT NULL,
        // `date_paiement` date NOT NULL,
        // `montant_s_p` double(8,2) NOT NULL,
        // `interet_s_p` double(8,2) NOT NULL,
        // `statut` 
                
                // {"data":[{"id":3,"id_prets_suivi":2,"id_personnes_s_p":3,"date_suivi":"2000-06-06","date_paiement":"2000-06-06"," montant_s_p":7500,"interet_s_p":150,"statut":"en cours","lib_p":"pour maladie","montant_p":15000,"montant_interet_p":300,"nom":"ana2"," prenom":"anabel2"}],"count":1,"success":true}
                {
                    xtype: 'fieldcontainer',
                    items: [
                    {
                        xtype: 'ux.form.field.remotecombobox',
                        name: 'id_prets_suivi',
                        fieldLabel: 'pret',                        
                        typeAhead: true,                                
                        forceSelection: true,                   
                        allowBlank: false,
                        editable: true,
                        triggerAction: 'all',
                        // displayField: 'code_reunion',
                        queryMode:'remote',
                        valueField: 'id',
                        store: {
                            type: 'pret.pret'
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
                        name: 'id_personnes_s_p',
                        fieldLabel: 'Personne',                        
                        typeAhead: true,                                
                        forceSelection: true,                   
                        allowBlank: false,
                        editable: true,
                        triggerAction: 'all',
                        // displayField: 'code_reunion',
                        queryMode:'remote',
                        valueField: 'id',
                        store: {
                            type: 'detail_categorie'
                        },
                        plugins: [
                            { ptype: 'cleartrigger' }
                        ],
                        tpl:Ext.create('Ext.XTemplate',
                                    '<tpl for=".">',
                                          '<div class="x-boundlist-item">{nom}|{prenom}</div>',
                                     '</tpl>'),
                        displayTpl:Ext.create('Ext.XTemplate',
                                    '<tpl for=".">',
                                        '{nom}  | {prenom}',
                                    '</tpl>'),
                        //editable: false,
                        forceSelection: true,
                           
                            
                    },
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'datefield',
                            name: 'date_paiement',
                            fieldLabel: 'Date de paiement',
                            format:getDate(),
                        },
                        {
                            xtype: 'datefield',
                            name: 'date_suivi',
                            fieldLabel: 'Date suivi',
                            format:getDate(),
                        },
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
                        // {"data":[{"id":3,"id_prets_suivi":2,"id_personnes_s_p":3,"date_suivi":"2000-06-06","date_paiement":"2000-06-06"," montant_s_p":7500,"interet_s_p":150,"statut":"en cours","lib_p":"pour maladie","montant_p":15000,"montant_interet_p":300,"nom":"ana"," prenom":"anabel"}],"count":1,"success":true}
                        {
                            xtype: 'textfield',
                            name: 'montant_s_p',
                            fieldLabel: 'Montant'
                        },
                        {
                            xtype: 'textfield',
                            name: 'interet_s_p',
                            fieldLabel: 'Interet'
                        },
                        {
                            xtype: 'textfield',
                            name: 'statut',
                            fieldLabel: 'Statu'
                        },
                      
                        
                        
                    ]
                },
                
               
                
               
            ]
        });
        me.callParent( arguments );
    }
});