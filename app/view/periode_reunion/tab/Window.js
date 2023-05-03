/**
 * Window for adding/editing {@link Compare.model.Session} records
 */
Ext.define('Compare.view.periode_reunion.tab.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.periode_reunion.tab.window',
    requires: [
        'Compare.view.detail_periode_reunion.List'
    ],
    iconCls: 'icon_group',
    title: 'Manage Menbres',
    // iconCls: 'icon_user',
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
                    
                    xtype: 'detail_periode_reunion.list'
                }
            ],
            // dockedItems: [
            //     {
            //         xtype: 'toolbar',
            //         dock: 'bottom',
            //         ui: 'footer',
            //         items: [
            //             {
            //                 xtype: 'button',
            //                 itemId: 'cancel',
            //                 cls: 'x-btn-delete',
            //                 overCls:"overbtn-delete",
            //                 text: 'Cancel',
            //                 iconCls: 'icon_delete'
            //             },
            //             '->',
            //             {
            //                 xtype: 'button',
            //                 itemId: 'save',
            //                 text: 'Save',
            //                 iconCls: 'icon_save'
            //             }
            //         ]
            //     }
            // ]
        });
        me.callParent( arguments );
    }
});