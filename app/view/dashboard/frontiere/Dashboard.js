Ext.define('Compare.view.dashboard.frontiere.Dashboard', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.dashboard.frontiere.dashboard',
	layout: 'hbox',
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
			items: [
				
				{
					// region: 'center',
					flex:1,
					split: true,
					itemId:'chart1',
					xtype: 'dashboard.frontiere.list',
				},
				{
					// region: 'south',
					flex:1,
					xtype: 'dashboard.frontiere.chart',
				},
				{
					// region: 'south',
					flex:1,
					itemId:'list2',
					xtype: 'dashboard.frontiere.list',
				}
					
					],
			dockedItems: [
				{
					xtype: 'toolbar',
					dock: 'top',
					ui: 'footer',
					items: [
						{
							xtype: 'button',
							iconCls: 'icon_refresh',
							text: 'Reload Data',
							itemId: 'refresh'
						}
					]
				}
			]
		});
		me.callParent();
	}
})