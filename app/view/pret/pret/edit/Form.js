/**
 * Form used for creating and editing Pret Members
 */
Ext.define('Compare.view.pret.pret.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.pret.pret.edit.form',
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
            // `id_personnes_p` 
            //   `id_param_prets` 
            //   `id_sessions_p` 
            //   `lib_p` 
            //   `date_debut_p` 
            //   `date_remb_p` 
            //   `montant_p` 
            //   `montant_interet_p` 
            //   `nature` 
            // {"data":[{"id":2,"id_personnes_p":3,"id_param_prets":1,"id_sessions_p":1,"lib_p":"pour maladie","date_debut_p":"2000-05-05 ","montant_p":15000,"montant_interet_p":300,"nature":"pret","lib_session":"première session","taux_interet":0.02,"taux_penalite":0.5,"montant_max_p_p":30000," code_categorie":"Q01","lib_cat":"premiere categorie","nom":"ana2","prenom":"anabel2"}],"count":1,"success":true}
            items: [
                
                {
                    xtype: 'fieldcontainer',
                    items: [
                        
                    {
                        xtype: 'ux.form.field.remotecombobox',
                        name: 'id_param_prets',
                        fieldLabel: 'Parametre pret',
                        // displayField: 'code_reunion',
                        queryMode:'remote',
                        valueField: 'id',
                        store: {
                            type: 'pret.parametre'
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
                        name: 'id_sessions_p',
                        fieldLabel: 'Categorie',
                        // displayField: 'code_reunion',
                        queryMode:'remote',
                        // disabled:true,
                        readOnly:true,
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
                    }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'id_personnes_p',
                            fieldLabel: 'Personne',
                            // displayField: 'code_reunion',
                            queryMode:'remote',
                            // readOnly:true,
                            valueField: 'id',
                            store: {
                                type: 'detail_categorie'
                            },
                            plugins: [
                                { ptype: 'cleartrigger' }
                            ],
                            tpl:Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                              '<div class="x-boundlist-item">{nom} | {prenom} </div>',
                                         '</tpl>'),
                            displayTpl:Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                            '{nom}  | {prenom}',
                                        '</tpl>'),
                            //editable: false,
                            forceSelection: true
                        },
                        {
                            xtype: 'textfield',
                            name: 'lib_p',
                            fieldLabel: 'Libelle'
                        },
                        {
                            xtype: 'textfield',
                            name: 'nature',
                            fieldLabel: 'Nature'
                        },
                    ]
                },
                // {
                //     xtype: 'fieldcontainer',
                //     items: [
                       
                        
                        
                //     ]
                // },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'montant_p',
                            fieldLabel: 'Montant du Pret',
                            maskRe: /\d/ 
                        },
                        {
                            xtype: 'textfield',
                            name: 'montant_interet_p',
                            fieldLabel: 'Montant Interet',
                            maskRe: /\d/ 
                        },
                        

                    ]
                },
  
                {
                    xtype: 'fieldcontainer',
                    items: [
                        
                        {
                            xtype: 'textfield',
                            name: 'taux_interet',
                            fieldLabel: 'taux d\'interet ',
                            readOnly:true,
                        },
                        {
                            xtype: 'textfield',
                            name: 'taux_penalite',
                            fieldLabel: 'taux de penalite ',
                            readOnly:true,
                        },
                        
                        
                    ]
                },// {"data":[{"id":2,"id_personnes_p":3,"id_param_prets":1,"id_sessions_p":1,"lib_p":"pour maladie","date_debut_p":"2000-05-05 ","montant_p":15000,"montant_interet_p":300,"nature":"pret","lib_session":"première session","taux_interet":0.02,"taux_penalite":0.5,"montant_max_p_p":30000," code_categorie":"Q01","lib_cat":"premiere categorie","nom":"ana2","prenom":"anabel2"}],"count":1,"success":true}
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'datefield',
                            name: 'date_debut_p',
                            format:getDate(),
                            fieldLabel: 'date de debut'
                        },
                        {
                            xtype: 'datefield',
                            name: 'date_remb_p',
                            format:getDate(),
                            fieldLabel: 'date de rembouserment'
                        },
                        

                    ]
                },
               
               
            ]
        });
        me.callParent( arguments );
    }
});