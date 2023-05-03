Ext.define('Compare.view.dashboard.pose.Chart', {
    extend: 'Ext.chart.Chart',
    alias: 'widget.dashboard.pose.chart',
    requires: [
        'Ext.chart.series.Pie',
        'Ext.data.JsonStore'
    ],
    // stockenattente libsite
    renderTo:Ext.getBody(),
    store: Ext.create('Ext.data.JsonStore', {
        fields: ['stockenattente','libsite'],
    }),
    cls: 'x-panel-body-default',
    animate: true,
    border: false,
    shadow: true,
     width: 200,
    height: 400,
    legend: {
        position: 'top',
        // isVertical:'true',
        // docked: 'bottom'
        // width:50,
    },
    insetPadding: 60,
    theme: 'Base:gradients',
    series: [
        {
            type: 'pie',
            field: 'stockenattente',
            groupField: 'libsite',
            summaryType: 'sum',
            summaryRenderer: function( value, summaryData, dataIndex ) {
                return '<strong> stockenattente: ' + ( value ) + '</strong>'; 
            },
            showInLegend: true,
            donut: 9,
            tips: {
                trackMouse: true,
                width: 170,
                height: 28,
                renderer: function (storeItem, item) {
                    //calculate percentage.
                    var total = 0;
                    storeItem.store.each(function (rec) {
                        total += rec.get('stockenattente');
                    }); 
                    this.setTitle(storeItem.get('libsite') +':' + Math.round(storeItem.get('stockenattente') / total * 100) + '% (' + (storeItem.get('stockenattente')) + ')');
                }
            },
            highlight: {
                segment: {
                    margin: 20
                }
            },
            label: {
                field: 'libsite',
                groupField: 'libsite',
                display: 'rotate',
                contrast: true,
                font: '10px Arial'
            }
        }
    ]
});