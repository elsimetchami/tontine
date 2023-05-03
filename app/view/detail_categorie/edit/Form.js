/**
 * Form used for creating and editing Reunion Members
 */
Ext.define('Compare.view.detail_categorie.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.detail_categorie.edit.form',
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
                    
                       // {id: null, id_personnes_det_c: 0, id_detail_sessions_det_c: 0, id_categories_det_c: 0, date_d_entree_det_c: '', …}
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'id_categories_det_c',
                            fieldLabel: 'categorie',
                            // displayField: 'code_reunion',
                            queryMode:'remote',
                            valueField: 'id',
                            store: {
                                type: 'categorie',
                                pageSize: 150
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
                            editable: false,
                            forceSelection: true
                        },
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'id_detail_sessions_det_c',
                            fieldLabel: 'Menbres',
                            // displayField: 'code_reunion',
                            queryMode:'remote',
                            // pageSize:true,
                            // pageSize: 150,
                            valueField: 'id',
                            // valueField: 'id_personnes_sess',
                            // id_personnes_sess
                            store: {
                                type: 'detail_session',
                                pageSize: 150
                            },
                            plugins: [
                                { ptype: 'cleartrigger' }
                            ],
                            tpl:Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                              '<div class="x-boundlist-item">{nom} {prenom}</div>',
                                         '</tpl>'),
                            displayTpl:Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                            '{nom} {prenom}',
                                        '</tpl>'),
                            editable: false,
                            forceSelection: true
                        },
                        
                    ]},
                    
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'datefield',
                            name: 'date_d_entree_det_c',
                            format:getDate(),
                            fieldLabel: 'date d\'entrée',
                            // hidden: true,
                            // width: '17%',
                            // editable: false,
                            // tabIndex: 6,
                            // id: 'start',
                            itemId: 'date_d_entree_det_c',
                            vtype: 'daterange',
                            endDateField: 'date_passage',
                            
                        },
                        {
                            xtype: 'datefield',
                            name: 'date_passage',
                            format:getDate(),
                            fieldLabel: 'Date de passage',
                            itemId: 'date_passage',
                            vtype: 'daterange',
                            startDateField: 'date_d_entree_det_c',
                            
                        },
                        {
                            xtype: 'numberfield',
                            name: 'numero_d_ordre',
                            fieldLabel: 'numero d\'ordre'
                        },
                        
                        
                    ]
                },
                    
                
            ]
        });
        me.callParent( arguments );
    }
});