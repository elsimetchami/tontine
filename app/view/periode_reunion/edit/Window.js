/**
 * Window for adding/editing {@link Compare.model.Periode_periode_reunion} records
 */
Ext.define('Compare.view.periode_reunion.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.periode_reunion.edit.window',
    requires: [
        'Compare.view.periode_reunion.edit.Form'
    ],
    iconCls: 'icon_user',
    width: 500,
    modal: true,
    // resizable: true,
    // draggable: true,
    // constrainHeader: true,
    frame:false,
    layout: 'fit',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'periode_reunion.edit.form'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    items: [
                        /*{
                            iconCls: 'icon_save',
                            itemId: 'update',
                            text: 'update',
                            // disabled: true,
            
                            
                        },*/
                        {
                            xtype: 'button',
                            itemId: 'cancel',
                            cls: 'x-btn-delete',
                            overcls:"overbtn-delete",
                            text: 'Cancel',
                            iconCls: 'icon_delete'
                        },
                        '->',
                        {
                            xtype: 'button',
                            itemId: 'save',
                            text: 'create',
                            iconCls: 'icon_save'
                        }
                    ]
                }
            ]
        });
        me.callParent( arguments );
    }
});