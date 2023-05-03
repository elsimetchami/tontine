/**
 * Grid for displaying suivi_pret details
 */
 Ext.define('Compare.view.pret.suivi_pret.Suivi_pret', {
    extend: 'Ext.panel.Panel',
    // extend: 'Ext.panel.Panel',
    
    alias: 'widget.pret.suivi_pret.suivi_pret',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
       'Ext.grid.column.RowNumberer',
       'Ext.grid.column.Action',
       'Compare.view.pret.pret.List',
       'Compare.view.pret.suivi_pret.List'
    ],
     iconCls: 'icon_loan',
    title: 'suivi pret  ',
    layout:'border',
    // layout: {
    //     type: 'hbox',
    //     // align: 'stretch'
    // },
    // html:'<i class="fi fi-sr-camera">',
    // iconCls: 'icon_camera',
    // store: 'pret.suivi_pret',
    // selType: 'checkboxmodel',
    controller: 'Compare.controller.pret.Suivi',
    // controller: 'suivi',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            actions:{

            },
            items: [
                {
                    region:'west',
                    xtype:'pret.pret.list',
                    flex:1,
                    split:true,
                    affichajout:false,
                    name:'pret'
                },
                
                {
                    region:'center',
                    xtype:'pret.suivi_pret.list',
                    flex:1
                },
                
			]
        });
        me.callParent( arguments );
    }
});