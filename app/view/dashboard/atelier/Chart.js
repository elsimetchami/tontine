Ext.define('Compare.view.dashboard.atelier.Chart', { 
    extend: 'Ext.chart.Chart',
    alias: 'widget.dashboard.atelier.chart',
    requires: [
        'Ext.data.JsonStore',
        'Ext.chart.series.Column',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category'
    ],
     
      
    // maximizable: true,   
    // autoShow: true,
    // layout: 'fit',
    // 'libsite stockenvoie
    store: Ext.create('Ext.data.JsonStore', {
        fields: ['libsite', 'stockenvoie', ]   
    }),
    cls: 'x-panel-body-default',
    renderTo:Ext.getBody(),
    animate: true,
    // theme:'RE',
    border: false,
    // height:170,
    legend: {
        position: "top"
    },
    shadow: true,
    axes: [
        { 
            type: 'Numeric',
            position: 'bottom',
            fields: ['stockenvoie'],
            title: 'stockenvoie',         
            minimum: '0',
            label: {
                renderer: Ext.util.Format.numberRenderer('0,0')
            },
        }, 
        {
            type: 'Category',
            position: 'left',
            fields: 'libsite',
            grid: true,
            title: 'sites',
            minimum: 0,
                
        }
    ],
    series: [
         {
             type: 'bar',
            axis: 'bottom',
            highlight: true,
            tips: {
                trackMouse: true,
                width: 200,
                height: 20,
                renderer: function( storeItem, item ) {
                    this.setTitle( storeItem.get( 'libsite' ) + "-" + ( storeItem.get( 'stockenvoie','stockenattente' )) );
                }
            },
            label: {
                display: 'insideEnd',
                // 'text-anchor': 'middle',
                field:['stockenvoie',],
                 renderer: Ext.util.Format.numberRenderer( '0,000' ),
                color: '#f33'
            },
            xField:'libsite',
            yField:'stockenvoie',
        }
    ]
});