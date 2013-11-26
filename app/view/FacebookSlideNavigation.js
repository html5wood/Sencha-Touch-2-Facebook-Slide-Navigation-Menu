Ext.define('FBSlideNavigation.view.FacebookSlideNavigation', {
    requires: ['Ext.Menu'],
    singleton: true,
    constructor: function(config) {
        this.initConfig(config);
    },
    config: {
    },
    setMenu: function() {
		Ext.Viewport.setMenu(this.createMenu('left'), {
			side: 'left',
			reveal: true
		});

		Ext.Viewport.setMenu(this.createMenu('right'), {
			side: 'right',
			reveal: true
		});
    },

    createMenu: function(side) {
        var items = [
            {
                text: 'Settings',
                iconCls: 'settings',
                scope: this,
                handler: function() {
                    Ext.Viewport.hideMenu();
                }
            },
            {
                text: 'New Item',
                iconCls: 'compose',
                scope: this,
                handler: function() {
                    Ext.Viewport.hideMenu();
                }
            },
            {
                xtype: 'button',
                text: 'Star',
                iconCls: 'star',
                scope: this,
                handler: function() {
                    Ext.Viewport.hideMenu();
                }
            }
        ];

        var className = 'Ext.Menu';

        return Ext.create(className, {
            items: items
        });
    }
});
