export default {
  dashboard: {
    widgets: {
      0: {
        title: "Cyber Threats Detected Over Time",
        componentName: "CTI.CyberThreatsOverTime",
        action: "getCyberThreatsOverTime",
        display: true,
        flags: {
          showHiddensButton: true,
          showOptionsMenu: true,
        },
        extraButtons: {
          0: {
            componentName: "widgetManager.WidgetDropMenu",
            default: "collectionReasons.section",
            label: "Sections",
            options: {
              0: {
                title: "Categories",
                key: "collectionReasons.categoryType",
              },
              1: {
                title: "Sections",
                key: "collectionReasons.section",
              },
            },
          },
        },
        placement: {
          w: 6,
          h: 11,
          x: 0,
          y: 0,
          i: "0",
          minW: 3,
          maxW: 13,
          minH: 10,
          maxH: 20,
          moved: false,
          static: false,
          isDraggable: true,
          isResizable: true,
        },
      },
      1: {
        title: "High-Risk Personnel",
        componentName: "CTI.HighRiskPersonnel",
        action: "getHighRiskPersonnel",
        display: true,
        buttons: {},
        flags: {
          showSearchButton: true,
        },
        extraButtons: {
          0: {
            componentName: "widgetManager.WidgetIconMenu",
            icon: "general.sort",
            default: "threatLevel:desc",
            label: "Sort by",
            options: {
              0: {
                title: "Personnel Name",
                key: "hrpFullName:asc",
              },
              1: {
                title: "Threat Level",
                key: "threatLevel:desc",
              },
            },
          },
        },
        placement: {
          w: 3,
          h: 11,
          x: 6,
          y: 0,
          i: "1",
          minW: 3,
          maxW: 13,
          minH: 10,
          maxH: 20,
          moved: false,
          static: false,
          isDraggable: true,
          isResizable: true,
        },
      },
      2: {
        title: "Daily Cyber Feed",
        componentName: "CTI.DailyCyberFeedWidget",
        action: "getDailyCyberFeed",
        flags: {
          showSearchButton: true,
        },
        extraButtons: {
          0: {
            componentName: "widgetManager.WidgetIconMenu",
            icon: "general.sort",
            default: "sort:threatLevel:desc",
            label: "Sort by",
            options: {
              0: {
                title: "Publish date",
                key: "sort:publishDate:desc",
              },
              1: {
                title: "Threat Level",
                key: "sort:threatLevel:desc",
              },
            },
          },
          1: {
            componentName: "widgetManager.WidgetIcon",
            icon: "discovery.markAsRead",
            default: "isRead:true",
            label: "Show unread feeds::Show all feeds",
          },
        },
        display: true,
        placement: {
          w: 3,
          h: 23,
          x: 9,
          y: 0,
          i: "2",
          minW: 3,
          maxW: 13,
          minH: 10,
          maxH: 30,
          moved: false,
          static: false,
          isDraggable: true,
          isResizable: true,
        },
      },
      3: {
        title: "Threat Intelligence Hub",
        componentName: "CTI.ThreatIntelHub",
        action: "getThreatIntegrationHub",
        flags: {
          showSearchButton: true,
        },
        extraButtons: {
          0: {
            componentName: "widgetManager.WidgetIconMenu",
            icon: "general.sort",
            default: "sort:threatLevel",
            label: "Sort by",
            options: {
              0: {
                title: "Publish date",
                key: "sort:publishDate",
              },
              1: {
                title: "Threat Level",
                key: "sort:threatLevel",
              },
            },
          },
          1: {
            componentName: "widgetManager.WidgetIcon",
            icon: "discovery.markAsRead",
            default: "isRead:true",
            label: "Show Unread feeds::Show all feeds",
          },
        },
        display: true,
        placement: {
          w: 6,
          h: 12,
          x: 0,
          y: 11,
          i: "3",
          minW: 6,
          maxW: 12,
          minH: 10,
          maxH: 28,
          moved: false,
          static: false,
          isDraggable: true,
          isResizable: true,
        },
      },
      4: {
        title: "Leaked Records",
        componentName: "CTI.LeakedRecords",
        action: "getTopLeakedRecords",
        flags: {
          showSearchButton: true,
        },
        extraButtons: {
          0: {
            componentName: "widgetManager.WidgetDropMenu",
            default: "facet:leakedRecordBreaches.domain",
            label: "Conventions",
            options: {
              0: {
                title: "Addresses",
                key: "facet:leakedRecordBreaches.email",
              },
              1: {
                title: "Conventions",
                key: "facet:leakedRecordBreaches.domain",
              },
            },
          },
        },
        display: true,
        placement: {
          w: 3,
          h: 12,
          x: 6,
          y: 11,
          i: "LeakedRecordsConventions",
          minW: 3,
          maxW: 13,
          minH: 10,
          maxH: 20,
          moved: false,
          static: false,
          isDraggable: true,
          isResizable: true,
        },
      },
      5: {
        title: "Top Dark Web Authors",
        componentName: "CTI.TopDarkWebAuthors",
        action: "getTopDarkWebAuthors",
        flags: {},
        extraButtons: {
          0: {
            componentName: "widgetManager.WidgetIconMenu",
            icon: "general.sort",
            default: "sortBy:activity",
            label: "Sort by",
            options: {
              0: {
                title: "Activities",
                key: "sortBy:activity",
              },
              1: {
                title: "Name",
                key: "sortBy:author",
              },
            },
          },
          1: {
            componentName: "widgetManager.WidgetGraphMenu",
            default: "graph:bar",
            defaultIcon: "charts.bar",
            label: "Bar",
            options: {
              2: {
                title: "Bar",
                icon: "charts.bar",
                key: "graph:bar",
              },
              3: {
                title: "Column",
                icon: "charts.column",
                key: "graph:column",
              },
            },
          },
        },
        display: false,
        placement: {
          w: 3,
          h: 11,
          x: 0,
          y: 21,
          i: "5",
          minW: 3,
          maxW: 13,
          minH: 10,
          maxH: 20,
          moved: false,
          static: false,
          isDraggable: true,
          isResizable: true,
        },
      },
      6: {
        title: "Top Terms",
        componentName: "CTI.TopTermsWidget",
        action: "getTopTerms",
        flags: {},
        extraButtons: {
          0: {
            componentName: "widgetManager.WidgetGraphMenu",
            default: "graph:bubbles",
            defaultIcon: "charts.bubbles",
            label: "Bubbles",
            options: {
              0: {
                title: "Bubbles",
                icon: "charts.bubbles",
                key: "graph:bubbles",
              },
              1: {
                title: "Pie",
                icon: "charts.pie",
                key: "graph:pie",
              },
              2: {
                title: "Bar",
                icon: "charts.bar",
                key: "graph:bar",
              },
              3: {
                title: "Column",
                icon: "charts.column",
                key: "graph:column",
              },
            },
          },
        },
        display: false,
        placement: {
          w: 3,
          h: 11,
          x: 9,
          y: 21,
          i: "6",
          minW: 3,
          maxW: 13,
          minH: 10,
          maxH: 20,
          moved: false,
          static: false,
          isDraggable: true,
          isResizable: true,
        },
      },
      7: {
        title: "Sources",
        componentName: "CTI.GenericChartWidget",
        action: "getDataSources",
        flags: {
          queryField: "datasource",
        },
        extraButtons: {
          0: {
            componentName: "widgetManager.WidgetGraphMenu",
            default: "graph:pie",
            defaultIcon: "charts.pie",
            label: "Pie",
            options: {
              0: {
                title: "Pie",
                icon: "charts.pie",
                key: "graph:pie",
              },
              1: {
                title: "Bar",
                icon: "charts.bar",
                key: "graph:bar",
              },
              2: {
                title: "Column",
                icon: "charts.column",
                key: "graph:column",
              },
            },
          },
        },
        display: false,
        placement: {
          w: 3,
          h: 11,
          x: 3,
          y: 21,
          i: "DataSourcesWidget",
          minW: 3,
          maxW: 13,
          minH: 10,
          maxH: 20,
          moved: false,
          static: false,
          isDraggable: true,
          isResizable: true,
        },
      },
      8: {
        title: "Monitoring Plan",
        componentName: "CTI.GenericChartWidget",
        action: "getMonitorPlan",
        flags: {
          queryField: "collectionReasons.categoryType",
        },
        extraButtons: {
          0: {
            componentName: "widgetManager.WidgetGraphMenu",
            default: "graph:sunburst",
            defaultIcon: "charts.sunburst",
            label: "Sunburst",
            options: {
              0: {
                title: "Sunburst",
                icon: "charts.sunburst",
                key: "graph:sunburst",
              },
              1: {
                title: "Column",
                icon: "charts.column",
                key: "graph:stackedColumn",
              },
            },
          },
        },
        display: false,
        placement: {
          w: 3,
          h: 11,
          x: 6,
          y: 21,
          i: "MonitoringPlanWidget",
          minW: 3,
          maxW: 13,
          minH: 10,
          maxH: 20,
          moved: false,
          static: false,
          isDraggable: true,
          isResizable: true,
        },
      },
      22: {
        title: "Open Mitigations",
        componentName: "CTI.OpenMitigationsWidget",
        action: "getOpenMitigations",
        display: false,
        flags: {
          useLoader: false,
        },
        extraButtons: {
          0: {
            componentName: "widgetManager.WidgetThreatMenu",
            default: "all",
          },
          1: {
            componentName: "widgetManager.WidgetIconMenu",
            icon: "table.filter",
            default: "related:all",
            label: "Filter by",
            options: {
              0: {
                title: "All",
                key: "related:all",
              },
              1: {
                title: "Related to Feeds",
                key: "related:feeds",
              },
              2: {
                title: "Related to Incidents",
                key: "related:incidents",
              },
            },
          },
        },
        placement: {
          w: 3,
          h: 12,
          x: 0,
          y: 23,
          i: "22",
          minW: 3,
          maxW: 14,
          minH: 10,
          maxH: 22,
          moved: false,
          static: false,
          isDraggable: true,
          isResizable: true,
        },
      },
    },
  },
  discovery: {
    0: {
      display: true,
      chartType: "sunburst",
      id: "collectionReasons.categoryType",
      title: "Monitoring Plan",
      chartTypes: {
        0: "sunburst",
        1: "stackedColumn",
      },
      api: {
        action: "getDiscoveryFacets",
        facet: {
          facetField: "collectionReasons.section",
          max: 100,
          countChildren: false,
          facets: [
            {
              facetField: "collectionReasons.categoryType",
              max: 100,
              countChildren: false,
            },
          ],
        },
      },
    },
    1: {
      display: true,
      chartType: "pie",
      chartTypes: {
        0: "pie",
        1: "bar",
        2: "column",
      },
      id: "datasource",
      title: "Sources",
      api: {
        action: "getDiscoveryFacets",
        facet: {
          facetField: "datasource",
          max: 20,
        },
      },
    },
    2: {
      display: true,
      chartType: "bubbles",
      chartTypes: {
        0: "bubbles",
        1: "pie",
        2: "bar",
        3: "column",
      },
      id: "collectionReasons.term",
      title: "Top Terms",
      api: {
        action: "getDiscoveryFacets",
        facet: {
          facetField: "collectionReasons.term",
          max: 6,
        },
      },
    },
  },
  alert: {
    0: {
      display: true,
      chartType: "sunburst",
      id: "collectionReasons.categoryType",
      title: "Monitoring Plan",
      chartTypes: {
        0: "sunburst",
        1: "stackedColumn",
      },
      api: {
        action: "getDiscoveryFacets",
        facet: {
          facetField: "collectionReasons.section",
          max: 100,
          countChildren: false,
          facets: [
            {
              facetField: "collectionReasons.categoryType",
              max: 100,
              countChildren: false,
            },
          ],
        },
      },
    },
    1: {
      display: true,
      chartType: "pie",
      chartTypes: {
        0: "pie",
        1: "bar",
        2: "column",
      },
      id: "datasource",
      title: "Sources",
      api: {
        action: "getDiscoveryFacets",
        facet: {
          facetField: "datasource",
          max: 20,
        },
      },
    },
    2: {
      display: true,
      chartType: "bubbles",
      chartTypes: {
        0: "bubbles",
        1: "pie",
        2: "bar",
        3: "column",
      },
      id: "collectionReasons.term",
      title: "Top Terms",
      api: {
        action: "getDiscoveryFacets",
        facet: {
          facetField: "collectionReasons.term",
          max: 6,
        },
      },
    },
  },
};
