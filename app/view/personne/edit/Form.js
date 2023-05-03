/**
 * Form used for creating and editing Personne Members
 */
Ext.define('Compare.view.personne.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.personne.edit.form',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'Compare.ux.form.field.RemoteComboBox'
    ],
    bodyPadding: 5,
    initComponent: function() {
        Ext.apply(Ext.form.VTypes, {
            daterange: function(val, field) {
                var date = field.parseDate(val);
        
                if (!date) {
                    return false;
                }
                if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
                    var start = field.up('form').down('#' + field.startDateField);
                    start.setMaxValue(date);
                    start.validate();
                    this.dateRangeMax = date;
                }
                else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
                    var end = field.up('form').down('#' + field.endDateField);
                    end.setMinValue(date);
                    end.validate();
                    this.dateRangeMin = date;
                }
                /*
                 * Always return true since we're only using this vtype to set the
                 * min/max allowed values (these are tested for after the vtype test)
                 */
                return true;
            },
        
            daterangeText: 'Start date must be less than end date',
        });
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
                            name: 'nom',
                            fieldLabel: 'Nom ',
                            emptyText:'Name'
                        }, 
                        {
                            xtype: 'textfield',
                            name: 'prenom',
                            fieldLabel: 'Prenom',
                            emptyText:'Surname'

                        },
                        
                        
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'datefield',
                            name: 'date_naissance',
                            format:getDate(),
                            fieldLabel: 'Date de naissance',
                            emptyText:'2022/08/17',
                            itemId: 'date_naissance',
                            vtype: 'daterange',
                            endDateField: 'date_d_entree',

                        },
                        {
                            xtype: 'combobox',
                            name: 'sexe',
                            fieldLabel: 'Sexe',
                            displayField: 'name',
                            valueField: 'value',
                            emptyText:'Masculin / Feminin',

                            // store: {
                            //     type: 'day'
                            // },
                            store: [
                                ['Masculin','Masculin'],
                                ['Feminin','Feminin'],
                                
                            ],
                            queryMode:'local',
                            editable: false,
                            typeahead:true,
                            forceSelection: true,
                            // renderTo: 'multiSelectCombo',
                            // multiSelect: true,
                            // queryMode: 'local'
                        },  
                        {
                            xtype: 'combobox',
                            name: 'situation_matrimoniale',
                            fieldLabel: 'Situation matrimoniale',
                            emptyText:'Marié / Celibatiare / Aucun ',

                            // displayField: 'name',
                            // valueField: 'value',
                            // store: {
                            //     type: 'day'
                            // },
                            store: [
                                ['Marié','Marié'],
                                ['Celibatiare','Celibatiare'],
                                ['aucun','aucun'],
                                
                            ],
                            queryMode:'local',
                            editable: false,
                            typeahead:true,
                            forceSelection: true,
                            // renderTo: 'multiSelectCombo',
                            // multiSelect: true,
                            // queryMode: 'local'
                        },

                    ]
                } ,   
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'datefield',
                            name: 'date_d_entree',
                            format:getDate(),
                            fieldLabel: 'Date d\'entree',
                            emptyText:'2022/08/17',
                            itemId: 'date_d_entree',
                            vtype: 'daterange',
                            startDateField: 'date_naissance'
                        },
                        {
                            xtype: 'textfield',
                            name: 'telephone',
                            fieldLabel: 'Telephone',
                            emptyText:'+237_ _ _'
                        },
                        
                        
                        
                        
                    ]
                }
                
               
            ]
        });
        me.callParent( arguments );
    }
});