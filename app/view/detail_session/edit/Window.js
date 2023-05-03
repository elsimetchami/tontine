/**
 * Window for adding/editing {@link Compare.model.Detail_session} records
 */
Ext.define('Compare.view.detail_session.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.detail_session.edit.window',
    requires: [
        'Compare.view.detail_session.edit.Form'
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
                    xtype: 'detail_session.edit.form'
                }
                // {
				// 	xtype: 'itemselectorfield',
				// 	name: 'id_personnes_sess',
		        //     anchor: '100%',
		        //     store: {
		        //     	type: 'personne'
		        //     },
		        //     displayField: 'id',
		        //     valueField: 'id',
		        //     allowBlank: false,
		        //     msgTarget: 'side',
		        //     fromTitle: 'Available Features',
		        //     toTitle: 'Selected Features',
		        //     buttons: [ 'add', 'remove' ],
		        //     delimiter: null
				// }
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