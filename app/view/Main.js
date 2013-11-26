Ext.define('FBSlideNavigation.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    config: {
        items: [
            {   
                docked: 'top',
                xtype: 'toolbar',
                title: 'Slidenavigation Demo',
                items: [{
                        xtype: 'button',
                        iconCls: 'more',
						iconMask: true,
                        handler: function() {
                            Ext.Viewport.toggleMenu('left');
                        }
                    },{
                        xtype: 'spacer'
                    },{
                        xtype: 'button',
						iconCls: 'more',
						iconMask: true,
                        handler: function() {
                            Ext.Viewport.toggleMenu('right');
                        }
                }]
            },{
				html: '<center><a href="http://html5wood.com/facebook-slide-navigation-menu-with-sencha-touch-2">Tutorial for Facebook Slide Navigation Menu</a></center> '
			}
        ]
    }
});
