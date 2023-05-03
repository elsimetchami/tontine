/**
 * Window for adding/editing {@link Compare.model.Parametre} records
 */
Ext.define('Compare.view.aide.parametre.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.aide.parametre.edit.window',
    requires: [
        'Compare.view.aide.parametre.edit.Form'
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
                    xtype: 'aide.parametre.edit.form'
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