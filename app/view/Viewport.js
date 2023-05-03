/**
 * Main application Viewport
 * Uses a {@link Ext.layout.container.Border} layout for ccontent organization
 */
Ext.define('Compare.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Border',
        'Compare.view.layout.North',
        'Compare.view.layout.West',
        'Compare.view.layout.Center',
        'Compare.view.aide.suivi_aide.Suivi_aide',
        'Compare.view.pret.suivi_pret.Suivi_pret'
    ],
    layout: {
        type: 'border'
    },
    items: [
        { xtype: 'layout.north' },
        { xtype: 'layout.west' },
        { xtype: 'layout.center' }
    ]
});