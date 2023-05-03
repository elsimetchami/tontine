/**
 * Window for adding/editing {@link Compare.model.Session} records
 */
Ext.define('Compare.view.categorie.tab.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.categorie.tab.window',
    requires: [
        'Compare.view.detail_categorie.List'
    ],
 
    iconCls: 'icon_group',
    title: 'Manage Menbres',
    // iconCls: 'icon_user',
    modal: true,
    width: 600,
    height:600,
    autoScroll:true,
    align:'center',
    // resizable: true,
    // draggable: true,
    // constrainHeader: true,
    layout: 'fit',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    
                    xtype: 'detail_categorie.list',
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