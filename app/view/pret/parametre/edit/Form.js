/**
 * Form used for creating and editing Aide Members
 */
Ext.define('Compare.view.pret.parametre.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.pret.parametre.edit.form',
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
        
                   // "id":1,"id_sessions_p_p":"1","id_categories_p_p":1,"taux_interet":0.02,"taux_penalite":0.5,"montant_max_p_p":30000,"lib_session":" premiere session","lib_cat":"premiere categorie","montant_cat":5000}],"count":1,"success":true}
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
                        xtype: 'ux.form.field.remotecombobox',
                        name: 'id_sessions_p_p',
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
                        name: 'id_categories_p_p',
                        fieldLabel: 'Categorie',
                        // displayField: 'code_reunion',
                        queryMode:'remote',
                        valueField: 'id',
                        store: {
                            type: 'categorie'
                        },
                        // id:'combo_cat',
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
                        // listeners: {
                        //     beforerender:function(combo, value) {
                        //         var sample = Ext.getCmp('combo_cat');  
                        //         // console.log('session_p_a') ;
                        //             sample.store.clearFilter();
                        //             sample.store.filter('session_p_a', combo.getValue());   
                        //             sample.store.load(),                     
                        //             sample.clearValue();                                    
                        //         }
                        //     }  
                    }
                    
                        
                        
                        
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'montant_max_p_p',
                            fieldLabel: 'montant max du pret',
                            maskRe: /\d/
                        },
                        {
                            xtype: 'numberfield',
                            name: 'taux_interet',
                            fieldLabel: 'taux d\'interet',
                            maskRe: /\d/,
                            minValue:0,
                            maxValue:100,
                            allowDecimals: true,
                            decimalPrecision: 1,
                        },
                         // "id":1,"session_p_p":"1","id_categories_p_p":1,"taux_interet":0.02,"taux_penalite":0.5,"montant_max_p_p":30000,"lib_cat":"premiere categorie","montant_cat":5000}],"count":1,"success":true}
                        {
                            xtype: 'numberfield',
                            name: 'taux_penalite',
                            fieldLabel: 'taux d\'penalite',
                            maskRe: /\d/,
                            minValue:0,
                            maxValue:100,
                        },
                        
                        
                    ]
                },
                
               
                
               
            ]
        });
        me.callParent( arguments );
    }
});