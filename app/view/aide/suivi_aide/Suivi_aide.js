/**
 * Grid for displaying Suivi_aide details
 */
 Ext.define('Compare.view.aide.suivi_aide.Suivi_aide', {
    extend: 'Ext.panel.Panel',
    // extend: 'Ext.panel.Panel',
    
    alias: 'widget.aide.suivi_aide.suivi_aide',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
       'Ext.grid.column.RowNumberer',
       'Ext.grid.column.Action',
       'Compare.view.aide.aide.List',
       'Compare.view.aide.suivi_aide.List'
    ],
     iconCls: 'icon_loan',
    title: 'suivi_aidee  ',
    layout:'border',
    // layout: {
    //     type: 'hbox',
    //     // align: 'stretch'
    // },
    // html:'<i class="fi fi-sr-camera">',
    // iconCls: 'icon_camera',
    // store: 'aide.Suivi_aide',
    // selType: 'checkboxmodel',
    controller: 'Compare.controller.aide.Suivi',
    // controller: 'suivi',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            actions:{

            },
            items: [
                {
                    region:'west',
                    xtype:'aide.aide.list',
                    flex:1,
                    split:true,
                    affichajout:false,
                    name: 'aide',
                },
                {
                    region:'center',
                    xtype:'aide.suivi_aide.list',
                    flex:1
                },
			]
        });
        me.callParent( arguments );
    }
});