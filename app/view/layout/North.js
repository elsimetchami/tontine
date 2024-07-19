/**
 * "Header" for the application (logo, title, etc.)
 */
Ext.define('Compare.view.layout.North', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.layout.north',
    region: 'north',
    // bodyPadding: 5,
    // html: '<img src="resources/images/comparable.png" /><h1>Comparable SARL</h1>',
    cls: 'header',    
    maxHeight: 70,
    // html:'<div><img src="resources/images/picture.jpeg" /></div>',
    
    
    // html:'<div><img src="resources/images/comparable.png" /></div>',       
    initComponent: function(){
        var me = this;
        Ext.applyIf(me,{
            items:[
                {
                    xtype:'button',
                    text:'hello',
                    style: 'width: 60px;height:60px;background-image:url(resources/images/picture.jpeg) !important; background-size:cover;',
                    listeners: {
                        render: function (e) {
                            // showAt( this.getXY() )
                            console.log(this);
                            this.on('click', function () {
                               var menu= Ext.create('Ext.menu.Menu', {
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
                                menu.showAt( e.getXY() )
                                
                            // alert('test');
                                //logic of whatever you want happening...
                            });
                        }
                    },
                    showDelay: 10,
                }
            ]
            
        });
        me.callParent( arguments );
    } 
});