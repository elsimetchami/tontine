Ext.define('Compare.view.dashboard.atelier.Dashboard', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.dashboard.atelier.dashboard',
	requires:['Compare.view.dashboard.atelier.List'],
	layout:'border',
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype:'container',
					width:'50%',
					region:'center',
					layout:'anchor',
					items:[
						{
							xtype:'panel',
							iconCls: 'icon_user',
							id: 'dashboard-content',
							title: 'sites ateliers',
							autoScroll: true,
							anchor:'100% 50%',
							layout:'fit',
							margin:'10',
							flex: 1,
							items:[
								{
									xtype: 'dashboard.atelier.list',
									split: true,
									flex: 1
								},			
							]
						},
						{
							xtype:'panel',
							iconCls: 'icon_user',
							id: 'dashboard-content1',
							title: 'sites s',
							autoScroll: true,
							anchor:'100% 50%',
							layout:'fit',
							margin:'10',
							flex: 1,
							items:[
								{
									xtype: 'dashboard.atelier.chart',
									split: true,
									flex: 1
								},			
							]
						},

					]
					

				},
				{
					xtype:'container',
					// region:'east',
					width:'50%',
					region:'east',
					layout:'anchor',
					items:[
						{
							xtype:'panel',
							iconCls: 'icon_user',
							id: 'dashboard',
							title: 'sites eliers',
							autoScroll: true,
							anchor:'100% 50%',
							margin:'10',
							flex: 1,
							items:[
								{
									xtype: 'dashboard.atelier.list',
									store:{
										type:'dashboard.atelierbis'
									},
									// scroll: 'vertical',
									id:'char',
									split: true,
									flex: 1
									// anchor: '25% 70%'
								},			
							]
						},
						{
							xtype:'panel',
							iconCls: 'icon_user',
							id: 'dashboard1-content',
							title: 'sites ateliers',
							autoScroll: true,
							anchor:'100% 50%',
							margin:'10',
							flex: 1,
							items:[
								{
									xtype: 'dashboard.atelier.list',
									// scroll: 'vertical',
									id:'list',
									split: true,
									flex: 1
									// anchor: '25% 70%'
								},			
							]
						},

					]
					

				},
				
				
					
				
						
			]
		});
		me.callParent();
	}
})