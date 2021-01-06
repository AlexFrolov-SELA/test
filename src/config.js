export default {
  manager: {
    name: 'WidgetsManager-1',
    flags: {
      enableAutoSave: true,
      autosize: false,
      compactType: 'vertical',
    },
  },
  widgets: [
    {
      title: 'Cyber Threats Detected Over Time',
      componentName: 'components/MockComponent',
      action: 'getCyberThreatsOverTime',
      display: true,
      flags: {
        showHiddensButton: true,
        showOptionsMenu: true,
        showMaximize: true,
        showRemove: true,
      },
      extraButtons: [
        {
          componentName: 'widgetManager.WidgetDropMenu',
          default: 'collectionReasons.section',
          label: 'Sections',
          options: {
            0: {
              title: 'Categories',
              key: 'collectionReasons.categoryType',
            },
            1: {
              title: 'Sections',
              key: 'collectionReasons.section',
            },
          },
        },
      ],
      layout: {
        w: 4,
        h: 6,
        x: 0,
        y: 0,
        i: '0',
        minW: 3,
        maxW: 12,
        minH: 1,
        maxH: 12,
        moved: false,
        static: false,
        isDraggable: true,
        isResizable: true,
        resizeHandles: ['w', 'e', 'se', 'sw'],
      },
    },
    {
      title: 'Rick Sanches whereabouts',
      componentName: 'components/RickLocator',
      action: 'getRickSanchezLocation',
      display: true,
      flags: {
        showHiddensButton: true,
        showOptionsMenu: true,
        showMaximize: true,
        showRemove: true,
      },
      extraButtons: {
        0: {
          componentName: 'widgetManager.WidgetDropMenu',
          default: 'collectionReasons.section',
          label: 'Sections',
          options: {
            0: {
              title: 'Categories',
              key: 'collectionReasons.categoryType',
            },
            1: {
              title: 'Sections',
              key: 'collectionReasons.section',
            },
          },
        },
      },
      layout: {
        w: 8,
        h: 3,
        x: 6,
        y: 0,
        i: '1',
        minW: 3,
        maxW: 12,
        minH: 1,
        maxH: 12,
        moved: false,
        static: false,
        isDraggable: true,
        isResizable: true,
        resizeHandles: ['w', 'e', 'se', 'sw'],
      },
    },
    {
      title: 'Rick Sanches whereabouts - 2',
      componentName: 'components/RickLocator',
      action: 'getRickSanchezLocation',
      display: true,
      flags: {
        showHiddensButton: true,
        showOptionsMenu: true,
        showMaximize: true,
        showRemove: true,
      },
      extraButtons: {
        0: {
          componentName: 'widgetManager.WidgetDropMenu',
          default: 'collectionReasons.section',
          label: 'Sections',
          options: {
            0: {
              title: 'Categories',
              key: 'collectionReasons.categoryType',
            },
            1: {
              title: 'Sections',
              key: 'collectionReasons.section',
            },
          },
        },
      },
      layout: {
        w: 8,
        h: 3,
        x: 6,
        y: 3,
        i: '2',
        minW: 3,
        maxW: 12,
        minH: 1,
        maxH: 12,
        moved: false,
        static: false,
        isDraggable: true,
        isResizable: true,
        resizeHandles: ['w', 'e', 'se', 'sw'],
      },
    },
  ],
};
