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
        'Compare.ux.form.field.RemoteComboBox',
        'Ext.XTemplate'
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
                        //
                          // `id` int(10) UNSIGNED NOT NULL,
                    //   `id_reunions` int(10) UNSIGNED NOT NULL,
                    //   `code_session` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                    //   `libelle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                    //
                    {
                        xtype: 'ux.form.field.remotecombobox',
                        name: 'id_reunions_sess',
                        fieldLabel: 'Reunion',
                        // displayField: 'code_reunion',
                        queryMode:'remote',
                        valueField: 'id',
                        store: {
                            type: 'reunion'
                        },
                        plugins: [
                            { ptype: 'cleartrigger' }
                        ],
                        tpl:Ext.create('Ext.XTemplate',
                                    '<tpl for=".">',
                                          '<div class="x-boundlist-item">{lib_reunion}</div>',
                                     '</tpl>'),
                        displayTpl:Ext.create('Ext.XTemplate',
                                    '<tpl for=".">',
                                        '{code_reunion}  | {lib_reunion}',
                                    '</tpl>'),
                        //editable: false,
                        forceSelection: true
                    }
                        
                        
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                       
                        {
                            xtype: 'textfield',
                            name: 'code_session',
                            fieldLabel: 'Code Session '
                        },
                        {
                            xtype: 'textfield',
                            name: 'lib_session',
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
                            format:getDate(),
                            fieldLabel: 'date de debut',
                            // hidden: true,
                            // width: '17%',
                            editable: false,
                            tabIndex: 6,
                            // id: 'start',
                            itemId: 'date_debut',
                            vtype: 'daterange',
                            endDateField: 'date_fin',
                            // readOnly:true,
                            // format: 'Y-m-d',
                            // minDate: new Date(),
                            // name: 'start_date',
                            // onTriggerClick: function() {
                            //     var dt = this;
                            //     var gridfin = me.getReunionEditForm().down('[name=date_creation]')
                            //     var gridfin = Ext.getCmp('gridfin');
                            //     console.log(gridfin)
                            //     // store = gridfin.getStore(),
                            //     // var reunion =getReunionEditForm
                            //     // var due = Ext.getCmp('Due');
                            //     // dt.setMaxValue(due.value);
                            //     Ext.form.DateField.prototype.onTriggerClick.apply(dt, arguments);
                            // },
                            // listeners: {
                            //     change: function(dp, date) {
                            //         var due = Ext.getCmp('Due');
                            //         due.setValue(date);
                            //     }
                            // }
                        },
                        {
                            xtype: 'datefield',
                            name: 'date_fin',
                            format:getDate(),
                            fieldLabel: 'date de fin',
                            itemId: 'date_fin',
                            vtype: 'daterange',
                            startDateField: 'date_debut'
                            // maxValue: Ext.Date.add(due, Ext.Date.MONTH, 1),
                            // minValue:new Date(),
                            // onTriggerClick: function() {
                            //     var dt = this;
                            //     var due = Ext.getCmp('start');
                            //     // dt.setMinValue(due.value);
                            //     dt.setMinValue(Ext.Date.add(due.value, Ext.Date.DAY, 1),) 
                            //     // dt.setMaxValue(Ext.Date.add(due.value, Ext.Date.MONTH, 1),) 
                            //     Ext.form.DateField.prototype.onTriggerClick.apply(dt, arguments);
                            //     // dt.setMValue(due.value);
                                
                            // },
                            
                        },
                        
                        
                    ]
                },
               
            ]
        });
        me.callParent( arguments );
    }
});