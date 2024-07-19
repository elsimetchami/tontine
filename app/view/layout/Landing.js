/**
 * Generic landing page for application
 */
Ext.define('Compare.view.layout.Landing', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.layout.landing',
    // title: 'Welcome!',
    title:{
        items:[
            {
                xtype:'button',
                // text:'hello',
                style: 'width: 60px;height:60px;background-image:url(resources/images/picture.jpeg) !important; background-size:cover;',
                
            }
            
        ]

    },
    bodyPadding: 10,
    html: 'Welcome to the Car Tracker Administration Site!',
    items:[
        {
            xtype:'button',
            text:'hello',
            style: 'width: 60px;height:60px;background-image:url(resources/images/picture.jpeg) !important; background-size:cover;',
            
        }
    ],
    // {
    //     xtype:'button',
    //     // text:'hello',
    //     style: 'width: 60px;height:60px;background-image:url(resources/images/picture.jpeg) !important; background-size:cover;',
        
    // },
    Header:{
        items:[
            {
                xtype:'button',
                text:'hello',
                style: 'width: 60px;height:60px;background-image:url(resources/images/picture.jpeg) !important; background-size:cover;',
                listeners: {
                    render: function () {
                        console.log(this);
                        this.getEl().on('onclick', function () {
                            var menut= Ext.create('Ext.menu.Menu', {
                                        width: 100,
                                        plain: true,
                                        autoDestroy:true,
                                        floating: false,  // usually you want this set to True (default)
                                        renderTo: Ext.getBody(),  // usually rendered by it's containing component
                                        items: [{
                                            text: 'plain item 1'
                                        },{
                                            text: 'plain item 2'
                                        },{
                                            text: 'plain item 3'
                                        }]
                                    });
                                    // menut.showAt( this.getXY() )
                        }
                    )}
                }
                // showAt( e.getXY() )
            }
        ]
    },
    initComponent: function(){
        var me = this;
        Ext.applyIf(me,{

        });
        me.callParent( arguments );
    } 
});