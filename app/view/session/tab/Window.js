/**
 * Window for adding/editing {@link Compare.model.Session} records
 */
Ext.define('Compare.view.session.tab.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.session.tab.window',
    requires: [
        'Compare.view.detail_session.List'
    ],
    iconCls: 'icon_group',
    title: 'Manage Menbres',
    // iconCls: 'icon_user',
    width: 600,
    height:600,
    modal: true,
    autoScroll:true,
    // resizable: true,
    // draggable: true,
    // constrainHeader: true,
    layout: 'fit',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    
                    xtype: 'detail_session.list'
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