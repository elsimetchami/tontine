/**
 * Window for adding/editing {@link Compare.model.Session} records
 */
Ext.define('Compare.view.session.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.session.edit.window',
    requires: [
        'Compare.view.session.edit.Form'
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
                    xtype: 'session.edit.form'
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