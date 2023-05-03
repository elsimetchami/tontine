/**
 * Window for adding/editing {@link Compare.model.Suivi_aide} records
 */
Ext.define('Compare.view.aide.suivi_aide.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.aide.suivi_aide.edit.window',
    requires: [
        'Compare.view.aide.suivi_aide.edit.Form'
    ],
    iconCls: 'icon_user',
    width: 600,
    modal: true,
    // resizable: true,
    // draggable: true,
    // constrainHeader: true,
    layout: 'fit',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'aide.suivi_aide.edit.form'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'cancel',
                            cls: 'x-btn-delete',
                            overCls:"overbtn-delete",
                            text: 'Cancel',
                            iconCls: 'icon_delete'
                        },
                        '->',
                        {
                            xtype: 'button',
                            itemId: 'save',
                            text: 'Save',
                            iconCls: 'icon_save'
                        }
                    ]
                }
            ]
        });
        me.callParent( arguments );
    }
});