TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EDB839A9_FECB_A117_41E9_2DE07876348F",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "maps": [],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 5.25,
        "hfov": 11.35,
        "image": {
         "levels": [
          {
           "height": 213,
           "width": 218,
           "url": "media/panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.92
       }
      ]
     },
     {
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_EA790F6B_FEDF_A114_41EB_EFA9EEE11348",
      "bleaching": 0.42,
      "bleachingDistance": 0.59,
      "yaw": -16.92,
      "pitch": 79.02
     }
    ]
   }
  ],
  "hfovMax": 149,
  "id": "panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D",
  "thumbnailUrl": "media/panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "VISTA EXTERIOR",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "displayPlaybackBar": true,
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -5.29,
   "hfov": 124,
   "pitch": -0.91
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_E3A46036_EEC1_746E_41C4_895255B2DE43_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_E3A46036_EEC1_746E_41C4_895255B2DE43.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_E3A46036_EEC1_746E_41C4_895255B2DE43_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_FD5DF6DE_F36A_6FA4_41E2_858982D814A8",
      "useHandCursor": true,
      "rollOverDisplay": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 129,
           "url": "media/panorama_E3A46036_EEC1_746E_41C4_895255B2DE43_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -47.87,
        "hfov": 36.55,
        "pitch": -4.38
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E32E157A_F4EA_ED6C_41E5_155984C7F781",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 82,
           "url": "media/panorama_E3A46036_EEC1_746E_41C4_895255B2DE43_0_HS_3_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 6.35,
        "hfov": 20.77,
        "pitch": 9.18
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EA8A23A2_FDD4_6BAB_41E7_3B5DCF34954B",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D, this.camera_05000D66_158B_E916_41A3_9DD57EAA1C87); this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 62,
           "url": "media/panorama_E3A46036_EEC1_746E_41C4_895255B2DE43_0_HS_4_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -118.74,
        "hfov": 32.94,
        "pitch": -4.16
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 150,
  "id": "panorama_E3A46036_EEC1_746E_41C4_895255B2DE43",
  "thumbnailUrl": "media/panorama_E3A46036_EEC1_746E_41C4_895255B2DE43_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "ENTRADA",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_E3A46036_EEC1_746E_41C4_895255B2DE43_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -37.46,
   "hfov": 132,
   "pitch": -14.24
  }
 },
 {
  "adjacentPanoramas": [
   {
    "panorama": {
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D",
       "class": "AdjacentPanorama",
       "yaw": -177.25,
       "backwardYaw": 69.15,
       "distance": 1
      }
     ],
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "height": 3456,
          "width": 6912,
          "url": "media/panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "data": {
          "label": "Polygon"
         },
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_EA30ED18_FDD4_5C67_41EC_0C59318831C1",
         "useHandCursor": true,
         "rollOverDisplay": false,
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D, this.camera_05181D58_158B_E93A_4183_169F9D29B864); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 200,
              "width": 62,
              "url": "media/panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079_0_HS_2_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -177.25,
           "hfov": 28.35,
           "pitch": -5.41
          }
         ]
        },
        {
         "class": "TripodCapPanoramaOverlay",
         "id": "panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079_tcap0",
         "hfov": 88.8,
         "rotate": false,
         "image": {
          "levels": [
           {
            "height": 1200,
            "width": 1200,
            "url": "media/panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079_tcap0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "angle": 0,
         "inertia": false
        }
       ]
      }
     ],
     "hfovMax": 131,
     "id": "panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079",
     "thumbnailUrl": "media/panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079_t.jpg",
     "pitch": 0,
     "vfov": 180,
     "partial": false,
     "label": "BA\u00d1O PRINCIPAL",
     "class": "Panorama",
     "hfov": 360,
     "hfovMin": 60
    },
    "class": "AdjacentPanorama",
    "yaw": 69.15,
    "backwardYaw": -177.25,
    "distance": 1
   }
  ],
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E2B17C52_F4EA_62BD_41DB_3BE70129775A",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 57,
           "url": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 20.76,
        "hfov": 31.92,
        "pitch": -4.55
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EC2318F9_F4FF_E36C_41EC_51E766D43EE0",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079, this.camera_05661DA5_158B_E90A_41B0_5241B8DCDE54); this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 68,
           "url": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 69.15,
        "hfov": 43.01,
        "pitch": -2.79
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EC6C4FD0_F4FE_3DBD_41E5_F10DD516100E",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D, this.camera_055BBDBE_158B_E976_41B0_460DE0742784); this.mainPlayList.set('selectedIndex', 11)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 162,
           "url": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_0_HS_3_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 145,
        "hfov": 18.91,
        "pitch": -1.46
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EE78C238_F4FA_E6EE_41D3_85DB7B66D744",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB, this.camera_05500DB2_158B_E90E_4192_73E7106AB2F7); this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 64,
           "url": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_0_HS_4_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -143.28,
        "hfov": 16.5,
        "pitch": -5.58
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_ED1ED8D8_F4FB_E3AD_41E6_10EE0E320237",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 171,
           "url": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_0_HS_5_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -124.23,
        "hfov": 20.46,
        "pitch": 0.43
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E9A7924E_F973_7586_41D5_68AA0A1C2E7E",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 56,
           "url": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_0_HS_6_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -70.7,
        "hfov": 25.38,
        "pitch": -5.06
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E41D4E79_FDD4_DC99_41C7_72FF81BF5C9D",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 72,
           "url": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_0_HS_7_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 119.08,
        "hfov": 26.22,
        "pitch": -2.83
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 143,
  "id": "panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D",
  "thumbnailUrl": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "PASILLOS",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 72.07,
   "hfov": 136,
   "pitch": -2.85
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E10CDE9D_F3A9_DFA4_41CF_76AC07167BA5",
      "useHandCursor": true,
      "rollOverDisplay": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 171,
           "width": 200,
           "url": "media/panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -16.82,
        "hfov": 57.6,
        "pitch": -2.79
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EE341417_F4EA_62A3_41DC_9424A56F43C6",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D, this.camera_06417C84_158B_EF0B_41AA_008BF1517688); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 83,
           "url": "media/panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -94.03,
        "hfov": 24.34,
        "pitch": -3.17
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 140,
  "id": "panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917",
  "thumbnailUrl": "media/panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "LIVING",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -10.84,
   "hfov": 133,
   "pitch": -2.59
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E2BD5639_F4E9_EEEF_41EE_1F353F8EA465",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 181,
           "width": 200,
           "url": "media/panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -26.77,
        "hfov": 42.11,
        "pitch": -2.67
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E2FDD311_F4EE_66BF_41D6_CA5231BC88A7",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 69,
           "url": "media/panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 26.94,
        "hfov": 14.9,
        "pitch": -2.14
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 136,
  "id": "panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282",
  "thumbnailUrl": "media/panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "COMEDOR",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 134,
   "pitch": 0
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E30D87DA_F4EE_EDAC_41C0_13DEA03ABF5A",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 51,
           "url": "media/panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -164.21,
        "hfov": 10.8,
        "pitch": -3.69
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 143,
  "id": "panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45",
  "thumbnailUrl": "media/panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "DORMITORIO PRINCIPAL",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -111.22,
   "hfov": 136,
   "pitch": -5.35
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E8264AD9_F96D_4A8B_41BE_22F9F6FA3C77",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D, this.camera_05118D4A_158B_E91E_4161_32D7D608CC74); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 82,
           "url": "media/panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 140.02,
        "hfov": 24.95,
        "pitch": -15.01
       }
      ]
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB_tcap0",
      "hfov": 88.8,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 1200,
         "width": 1200,
         "url": "media/panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     }
    ]
   }
  ],
  "hfovMax": 130,
  "id": "panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB",
  "thumbnailUrl": "media/panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "COCINA",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079",
 {
  "class": "PanoramaCamera",
  "id": "panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 85.32,
   "hfov": 127,
   "pitch": 2.17
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F9143214_F376_E6A4_41BD_90B89494E183_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F9143214_F376_E6A4_41BD_90B89494E183.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_F9143214_F376_E6A4_41BD_90B89494E183_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EE5889E7_F4EA_6563_41EB_6E5F527F1918",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 76,
           "url": "media/panorama_F9143214_F376_E6A4_41BD_90B89494E183_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -22.82,
        "hfov": 24.67,
        "pitch": -3.86
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E8E539BD_F955_B68B_41D8_309B8BECB110",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D, this.camera_05CEBD09_158B_E91D_41B4_F1437DCD947C); this.mainPlayList.set('selectedIndex', 11)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 78,
           "url": "media/panorama_F9143214_F376_E6A4_41BD_90B89494E183_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -22.48,
        "hfov": 25.39,
        "pitch": -4.13
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 136,
  "id": "panorama_F9143214_F376_E6A4_41BD_90B89494E183",
  "thumbnailUrl": "media/panorama_F9143214_F376_E6A4_41BD_90B89494E183_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "DORMITORIO 1",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F9143214_F376_E6A4_41BD_90B89494E183_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -10.24,
   "hfov": 133,
   "pitch": -3.71
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F9149E80_F376_3F9C_41E3_848496A17D94_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F9149E80_F376_3F9C_41E3_848496A17D94.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_F9149E80_F376_3F9C_41E3_848496A17D94_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EB400F4C_F956_CB8A_41E1_1C8A4DA00ED4",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D, this.camera_05C8CCFD_158B_E8F5_4194_FD9B4126CEFD); this.mainPlayList.set('selectedIndex', 11)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 75,
           "url": "media/panorama_F9149E80_F376_3F9C_41E3_848496A17D94_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -10.64,
        "hfov": 21.24,
        "pitch": -2.14
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 134,
  "id": "panorama_F9149E80_F376_3F9C_41E3_848496A17D94",
  "thumbnailUrl": "media/panorama_F9149E80_F376_3F9C_41E3_848496A17D94_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "DORMITORIO 2",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F9149E80_F376_3F9C_41E3_848496A17D94_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -9.37,
   "hfov": 130,
   "pitch": 0.49
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EB847D4D_F955_CF8A_41E9_574103CC4DA7",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D, this.camera_05D8CCC7_158B_EF15_4194_6F04120A4FA4); this.mainPlayList.set('selectedIndex', 11)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 84,
           "url": "media/panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -8.75,
        "hfov": 22.32,
        "pitch": -3.11
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 132,
  "id": "panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D",
  "thumbnailUrl": "media/panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "DORMITORIO 3",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 69.64,
   "hfov": 130,
   "pitch": 0.66
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EA2BE93D_F953_578A_41EB_50963BC7DD2E",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D, this.camera_0523BD30_158B_E90A_41B2_D33EF1635CE4); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 188,
           "width": 132,
           "url": "media/panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -22.65,
        "hfov": 13.7,
        "pitch": -2.32
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EAA7179C_F953_DA8A_41A5_4CF7588562D1",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D, this.camera_053C5D23_158B_E90E_41AF_6694FB07E5BE); this.mainPlayList.set('selectedIndex', 10)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 89,
           "url": "media/panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 60.74,
        "hfov": 46.75,
        "pitch": -13.94
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_ED8D484C_F952_D58A_41EB_A937EAA9F668",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3, this.camera_052A6D3D_158B_E97A_41A1_AECD4BD75D44); this.mainPlayList.set('selectedIndex', 12)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 44,
           "url": "media/panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -169.7,
        "hfov": 21.07,
        "pitch": -11.75
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EDA0583D_F95D_758A_41ED_AD4F861FA0E5",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F9149E80_F376_3F9C_41E3_848496A17D94, this.camera_0534FD17_158B_E936_41B2_42EA0148594D); this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 36,
           "url": "media/panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_0_HS_3_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -9.44,
        "hfov": 7.01,
        "pitch": -9.87
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 130,
  "id": "panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D",
  "thumbnailUrl": "media/panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "GALER\u00cdA",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EC3E4C65_F952_CDBA_41E5_00B74B2AF069",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D, this.camera_05459DCB_158B_E91E_41AA_06BFE4E3BD27); this.mainPlayList.set('selectedIndex', 18)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 143,
           "width": 200,
           "url": "media/panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 75.5,
        "hfov": 43.61,
        "pitch": 2.37
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EFBDF0F5_F92D_B69B_41E5_C54DAFC76D69",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D, this.camera_04BC8DE2_158B_E90F_4189_4466B2DC9E1C); this.mainPlayList.set('selectedIndex', 11)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 145,
           "url": "media/panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -107.93,
        "hfov": 77.5,
        "pitch": -6.75
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EBA03888_FDEC_6467_41BA_198EEC875382",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F91A19D2_F376_65BC_41D4_63C57FC02695, this.camera_04B17DD6_158B_E937_41A8_15CB2C8D6A91); this.mainPlayList.set('selectedIndex', 13)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 197,
           "width": 200,
           "url": "media/panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 123.2,
        "hfov": 46.41,
        "pitch": -14.33
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 130,
  "id": "panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3",
  "thumbnailUrl": "media/panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "Z\u00d3CALO",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F91A19D2_F376_65BC_41D4_63C57FC02695_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F91A19D2_F376_65BC_41D4_63C57FC02695.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_F91A19D2_F376_65BC_41D4_63C57FC02695_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EDB888A3_F496_63E3_41E0_3CEFC6957950",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D, this.camera_05DB4CD5_158B_EF35_4196_C1E2994A5C29); this.mainPlayList.set('selectedIndex', 18)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 156,
           "width": 200,
           "url": "media/panorama_F91A19D2_F376_65BC_41D4_63C57FC02695_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -103.47,
        "hfov": 52.16,
        "pitch": -6.42
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 130,
  "id": "panorama_F91A19D2_F376_65BC_41D4_63C57FC02695",
  "thumbnailUrl": "media/panorama_F91A19D2_F376_65BC_41D4_63C57FC02695_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "PATIO CERRADO",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F91A19D2_F376_65BC_41D4_63C57FC02695_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.07,
   "hfov": 127,
   "pitch": 3.78
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EE7FEF87_F496_3DA4_41C4_EF16D48D800E",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 17)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 112,
           "url": "media/panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -125.78,
        "hfov": 19.61,
        "pitch": -1.19
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E80AED37_F49A_62E4_41E3_87A3BE0A2BFD",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 16)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 136,
           "width": 200,
           "url": "media/panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 156.66,
        "hfov": 47.62,
        "pitch": 4.25
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E8D5A7A7_FDF4_ABA9_41E9_D4859BDCE56A",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F904D25F_F376_66A4_41E0_2C261E370374, this.camera_05DF7CE2_158B_EF0F_41AF_EF173F65A5ED); this.mainPlayList.set('selectedIndex', 15)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 109,
           "url": "media/panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -66.58,
        "hfov": 11.93,
        "pitch": 0.6
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EBCE0808_FDEF_A467_41A2_FC4FF9B61DE5",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F91A19D2_F376_65BC_41D4_63C57FC02695, this.camera_05C43CEF_158B_EF15_41B3_8B03EA207094); this.mainPlayList.set('selectedIndex', 13)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 88,
           "width": 200,
           "url": "media/panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_0_HS_3_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -29,
        "hfov": 42.56,
        "pitch": 2.71
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 136,
  "id": "panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6",
  "thumbnailUrl": "media/panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "PATIO DELANTERO",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -123.43,
   "hfov": 131,
   "pitch": 0.23
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F904D25F_F376_66A4_41E0_2C261E370374_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F904D25F_F376_66A4_41E0_2C261E370374.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_F904D25F_F376_66A4_41E0_2C261E370374_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EE28BAFD_F92E_CA8B_41E3_18D86F8D7B56",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6, this.camera_06576C76_158B_EFF7_41B0_297BC2E1A430); this.mainPlayList.set('selectedIndex', 14)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 93,
           "url": "media/panorama_F904D25F_F376_66A4_41E0_2C261E370374_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 161.47,
        "hfov": 26.84,
        "pitch": -5.06
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 136,
  "id": "panorama_F904D25F_F376_66A4_41E0_2C261E370374",
  "thumbnailUrl": "media/panorama_F904D25F_F376_66A4_41E0_2C261E370374_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "LAVADERO",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F904D25F_F376_66A4_41E0_2C261E370374_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -146.82,
   "hfov": 132,
   "pitch": -0.23
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F915C16E_F376_2564_41DC_D2B559D98F09_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F915C16E_F376_2564_41DC_D2B559D98F09.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_F915C16E_F376_2564_41DC_D2B559D98F09_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EE0984E0_F497_E39C_41E5_A6EDBFB51483",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 14)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 167,
           "width": 200,
           "url": "media/panorama_F915C16E_F376_2564_41DC_D2B559D98F09_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 139.68,
        "hfov": 27.9,
        "pitch": -2.32
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 139,
  "id": "panorama_F915C16E_F376_2564_41DC_D2B559D98F09",
  "thumbnailUrl": "media/panorama_F915C16E_F376_2564_41DC_D2B559D98F09_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "PATIO TRASERO",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F915C16E_F376_2564_41DC_D2B559D98F09_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -84.47,
   "hfov": 136,
   "pitch": -6.24
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F90FFA40_F376_269C_41D1_74BD7304D802_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F90FFA40_F376_269C_41D1_74BD7304D802.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_F90FFA40_F376_269C_41D1_74BD7304D802_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_E8EFC88E_FDEC_647B_41AC_CFC099294395",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6, this.camera_057D9D99_158B_E93A_41A9_BC5CFFCBE59D); this.mainPlayList.set('selectedIndex', 14)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 101,
           "url": "media/panorama_F90FFA40_F376_269C_41D1_74BD7304D802_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -124.58,
        "hfov": 27.5,
        "pitch": -6.09
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 134,
  "id": "panorama_F90FFA40_F376_269C_41D1_74BD7304D802",
  "thumbnailUrl": "media/panorama_F90FFA40_F376_269C_41D1_74BD7304D802_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "BODEGA ",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F90FFA40_F376_269C_41D1_74BD7304D802_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -46.45,
   "hfov": 131,
   "pitch": -2.73
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_ECBAD79D_F956_BA8B_41EB_CCE6316D1FE1",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6, this.camera_0506ED73_158B_E90E_41A6_C8200C6D6DD5); this.mainPlayList.set('selectedIndex', 14)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 107,
           "url": "media/panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 155.98,
        "hfov": 43.03,
        "pitch": -13.23
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EF471945_F957_57FB_41EE_F5B1A9208121",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F91A19D2_F376_65BC_41D4_63C57FC02695, this.camera_050EFD7F_158B_E9F6_41B3_F19C84A6A2D4); this.mainPlayList.set('selectedIndex', 13)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 163,
           "url": "media/panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D_0_HS_1_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -71.55,
        "hfov": 80.92,
        "pitch": -15.01
       }
      ]
     },
     {
      "data": {
       "label": "Polygon"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_EFC90D0C_F957_CF8A_41E9_D1A2F120B55F",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3, this.camera_05768D8C_158B_E91A_41A6_AE8DCB86F33C); this.mainPlayList.set('selectedIndex', 12)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 162,
           "width": 199,
           "url": "media/panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D_0_HS_2_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -18.7,
        "hfov": 34.12,
        "pitch": -1.64
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 130,
  "id": "panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D",
  "thumbnailUrl": "media/panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "BA\u00d1O PATIO",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D",
    "end": "this.setComponentVisibility(this.Label_E37B942A_F937_BD8E_41CC_E81A582CCD88, false, -1, this.effect_EE08373E_FE38_616C_41DF_E1C686CB0FF1, 'hideEffect', false); this.setComponentVisibility(this.Label_E37B942A_F937_BD8E_41CC_E81A582CCD88, false, -1, this.effect_EE08373E_FE38_616C_41DF_E1C686CB0FF1, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.Label_E37B942A_F937_BD8E_41CC_E81A582CCD88, true, -1, this.effect_EE08073E_FE38_616C_41DC_B89D7B9B8B49, 'showEffect', false)",
    "camera": "this.panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E3A46036_EEC1_746E_41C4_895255B2DE43",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_E3A46036_EEC1_746E_41C4_895255B2DE43_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F9143214_F376_E6A4_41BD_90B89494E183",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_F9143214_F376_E6A4_41BD_90B89494E183_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F9149E80_F376_3F9C_41E3_848496A17D94",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "camera": "this.panorama_F9149E80_F376_3F9C_41E3_848496A17D94_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "camera": "this.panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "camera": "this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "camera": "this.panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F91A19D2_F376_65BC_41D4_63C57FC02695",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "camera": "this.panorama_F91A19D2_F376_65BC_41D4_63C57FC02695_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "camera": "this.panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F904D25F_F376_66A4_41E0_2C261E370374",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "camera": "this.panorama_F904D25F_F376_66A4_41E0_2C261E370374_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F915C16E_F376_2564_41DC_D2B559D98F09",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "camera": "this.panorama_F915C16E_F376_2564_41DC_D2B559D98F09_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F90FFA40_F376_269C_41D1_74BD7304D802",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "camera": "this.panorama_F90FFA40_F376_269C_41D1_74BD7304D802_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 0)",
    "camera": "this.panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D_camera"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D",
    "end": "this.setComponentVisibility(this.Label_E37B942A_F937_BD8E_41CC_E81A582CCD88, false, -1, this.effect_EE08373E_FE38_616C_41DF_E1C686CB0FF1, 'hideEffect', false); this.setComponentVisibility(this.Label_E37B942A_F937_BD8E_41CC_E81A582CCD88, false, -1, this.effect_EE08373E_FE38_616C_41DF_E1C686CB0FF1, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 0, 1); this.setComponentVisibility(this.Label_E37B942A_F937_BD8E_41CC_E81A582CCD88, true, -1, this.effect_EE08073E_FE38_616C_41DC_B89D7B9B8B49, 'showEffect', false)",
    "camera": "this.panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E3A46036_EEC1_746E_41C4_895255B2DE43",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 1, 2)",
    "camera": "this.panorama_E3A46036_EEC1_746E_41C4_895255B2DE43_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 2, 3)",
    "camera": "this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 3, 4)",
    "camera": "this.panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 4, 5)",
    "camera": "this.panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 5, 6)",
    "camera": "this.panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 6, 7)",
    "camera": "this.panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 7, 8)",
    "camera": "this.panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F9143214_F376_E6A4_41BD_90B89494E183",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 8, 9)",
    "camera": "this.panorama_F9143214_F376_E6A4_41BD_90B89494E183_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F9149E80_F376_3F9C_41E3_848496A17D94",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 9, 10)",
    "camera": "this.panorama_F9149E80_F376_3F9C_41E3_848496A17D94_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 10, 11)",
    "camera": "this.panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 11, 12)",
    "camera": "this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 12, 13)",
    "camera": "this.panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F91A19D2_F376_65BC_41D4_63C57FC02695",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 13, 14)",
    "camera": "this.panorama_F91A19D2_F376_65BC_41D4_63C57FC02695_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 14, 15)",
    "camera": "this.panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F904D25F_F376_66A4_41E0_2C261E370374",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 15, 16)",
    "camera": "this.panorama_F904D25F_F376_66A4_41E0_2C261E370374_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F915C16E_F376_2564_41DC_D2B559D98F09",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 16, 17)",
    "camera": "this.panorama_F915C16E_F376_2564_41DC_D2B559D98F09_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F90FFA40_F376_269C_41D1_74BD7304D802",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 17, 18)",
    "camera": "this.panorama_F90FFA40_F376_269C_41D1_74BD7304D802_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 18, 0)",
    "camera": "this.panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D_camera"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D",
    "end": "this.setComponentVisibility(this.Label_E37B942A_F937_BD8E_41CC_E81A582CCD88, false, -1, this.effect_EE08373E_FE38_616C_41DF_E1C686CB0FF1, 'hideEffect', false); this.setComponentVisibility(this.Label_E37B942A_F937_BD8E_41CC_E81A582CCD88, false, -1, this.effect_EE08373E_FE38_616C_41DF_E1C686CB0FF1, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 0, 1); this.setComponentVisibility(this.Label_E37B942A_F937_BD8E_41CC_E81A582CCD88, true, -1, this.effect_EE08073E_FE38_616C_41DC_B89D7B9B8B49, 'showEffect', false)",
    "camera": "this.panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E3A46036_EEC1_746E_41C4_895255B2DE43",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 1, 2)",
    "camera": "this.panorama_E3A46036_EEC1_746E_41C4_895255B2DE43_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 2, 3)",
    "camera": "this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 3, 4)",
    "camera": "this.panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 4, 5)",
    "camera": "this.panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 5, 6)",
    "camera": "this.panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 6, 7)",
    "camera": "this.panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 7, 8)",
    "camera": "this.panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F9143214_F376_E6A4_41BD_90B89494E183",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 8, 9)",
    "camera": "this.panorama_F9143214_F376_E6A4_41BD_90B89494E183_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F9149E80_F376_3F9C_41E3_848496A17D94",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 9, 10)",
    "camera": "this.panorama_F9149E80_F376_3F9C_41E3_848496A17D94_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 10, 11)",
    "camera": "this.panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 11, 12)",
    "camera": "this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 12, 13)",
    "camera": "this.panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F91A19D2_F376_65BC_41D4_63C57FC02695",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 13, 14)",
    "camera": "this.panorama_F91A19D2_F376_65BC_41D4_63C57FC02695_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 14, 15)",
    "camera": "this.panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F904D25F_F376_66A4_41E0_2C261E370374",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 15, 16)",
    "camera": "this.panorama_F904D25F_F376_66A4_41E0_2C261E370374_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F915C16E_F376_2564_41DC_D2B559D98F09",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 16, 17)",
    "camera": "this.panorama_F915C16E_F376_2564_41DC_D2B559D98F09_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F90FFA40_F376_269C_41D1_74BD7304D802",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 17, 18)",
    "camera": "this.panorama_F90FFA40_F376_269C_41D1_74BD7304D802_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 18, 0)",
    "camera": "this.panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D_camera"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_06576C76_158B_EFF7_41B0_297BC2E1A430",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -13.22,
   "hfov": 131,
   "pitch": -2.2
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_06417C84_158B_EF0B_41AA_008BF1517688",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -138.86,
   "hfov": 136,
   "pitch": 3.67
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_05D8CCC7_158B_EF15_4194_6F04120A4FA4",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -174.86,
   "pitch": 8.08
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_05DB4CD5_158B_EF35_4196_C1E2994A5C29",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 161.63,
   "pitch": 9.55
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_05DF7CE2_158B_EF0F_41AF_EF173F65A5ED",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -129.31,
   "hfov": 132,
   "pitch": 17.63
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_05C43CEF_158B_EF15_41B3_8B03EA207094",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 50.69,
   "hfov": 127,
   "pitch": 15.43
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_05C8CCFD_158B_E8F5_4194_FD9B4126CEFD",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 53.63,
   "pitch": -2.2
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_05CEBD09_158B_E91D_41B4_F1437DCD947C",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -9.55,
   "pitch": -5.14
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0534FD17_158B_E936_41B2_42EA0148594D",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 13.96,
   "hfov": 130,
   "pitch": 7.35
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_053C5D23_158B_E90E_41AF_6694FB07E5BE",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 42.61,
   "hfov": 130,
   "pitch": 9.55
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0523BD30_158B_E90A_41B2_D33EF1635CE4",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -32.33,
   "hfov": 136,
   "pitch": 2.94
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_052A6D3D_158B_E97A_41A1_AECD4BD75D44",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -6.61,
   "pitch": 3.67
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_05118D4A_158B_E91E_4161_32D7D608CC74",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 68.33,
   "hfov": 136,
   "pitch": -2.2
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_05181D58_158B_E93A_4183_169F9D29B864",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -110.85,
   "hfov": 136,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_05000D66_158B_E916_41A3_9DD57EAA1C87",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -148.41,
   "hfov": 124,
   "pitch": 8.82
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_0506ED73_158B_E90E_41A6_C8200C6D6DD5",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -122.69,
   "hfov": 131,
   "pitch": 2.2
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_050EFD7F_158B_E9F6_41B3_F19C84A6A2D4",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -15.43,
   "hfov": 127,
   "pitch": 5.14
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_05768D8C_158B_E91A_41A6_AE8DCB86F33C",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -65.39,
   "pitch": 1.47
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_057D9D99_158B_E93A_41A9_BC5CFFCBE59D",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -63.92,
   "hfov": 131,
   "pitch": 9.55
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_05661DA5_158B_E90A_41B0_5241B8DCDE54",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 2.75,
   "hfov": 127,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_05500DB2_158B_E90E_4192_73E7106AB2F7",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 166.78,
   "pitch": 9.55
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_055BBDBE_158B_E976_41B0_460DE0742784",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -8.82,
   "pitch": -4.41
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_05459DCB_158B_E91E_41AA_06BFE4E3BD27",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 74.2,
   "pitch": 11.02
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_04B17DD6_158B_E937_41A8_15CB2C8D6A91",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -11.76,
   "hfov": 127,
   "pitch": 2.2
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_04BC8DE2_158B_E90F_4189_4466B2DC9E1C",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -19.84,
   "pitch": 1.47
  }
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_EE08073E_FE38_616C_41DC_B89D7B9B8B49",
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_EE08373E_FE38_616C_41DF_E1C686CB0FF1",
  "class": "FadeOutEffect"
 },
 "this.effect_EE08073E_FE38_616C_41DC_B89D7B9B8B49",
 "this.effect_EE08373E_FE38_616C_41DF_E1C686CB0FF1",
 "this.effect_EE08073E_FE38_616C_41DC_B89D7B9B8B49",
 "this.effect_EE08373E_FE38_616C_41DF_E1C686CB0FF1",
 {
  "data": {
   "label": "ES_Sun Melt Waves"
  },
  "class": "MediaAudio",
  "id": "audio_074A2F7B_158B_A9FD_41B1_19A050A03CCD",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_074A2F7B_158B_A9FD_41B1_19A050A03CCD.mp3",
   "oggUrl": "media/audio_074A2F7B_158B_A9FD_41B1_19A050A03CCD.ogg"
  }
 }
], "children": [
 {
  "transitionDuration": 500,
  "toolTipBorderRadius": 3,
  "toolTipShadowVerticalLength": 0,
  "progressBorderRadius": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowColor": "#333333",
  "progressBarBorderColor": "#000000",
  "playbackBarBottom": 5,
  "toolTipPaddingBottom": 4,
  "toolTipShadowHorizontalLength": 0,
  "progressBorderColor": "#000000",
  "paddingTop": 0,
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "borderRadius": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "transitionMode": "blending",
  "minHeight": 50,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadWidth": 6,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "minWidth": 100,
  "playbackBarProgressBorderRadius": 0,
  "toolTipDisplayTime": 600,
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderRadius": 0,
  "progressBarBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowSpread": 0,
  "toolTipOpacity": 1,
  "playbackBarProgressBorderColor": "#000000",
  "borderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "width": "100%",
  "toolTipFontColor": "#606060",
  "toolTipBorderColor": "#767676",
  "paddingRight": 0,
  "playbackBarHeadBorderSize": 0,
  "toolTipBorderSize": 1,
  "toolTipPaddingRight": 6,
  "playbackBarProgressOpacity": 1,
  "paddingBottom": 0,
  "progressLeft": 0,
  "playbackBarBorderSize": 0,
  "shadow": false,
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontFamily": "Arial",
  "progressBottom": 0,
  "progressHeight": 10,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowColor": "#000000",
  "top": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "toolTipTextShadowOpacity": 0,
  "progressOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "id": "MainViewer",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarBorderColor": "#FFFFFF",
  "progressBackgroundOpacity": 1,
  "height": "100%",
  "paddingLeft": 0,
  "toolTipFontStyle": "normal",
  "left": 0,
  "progressBarOpacity": 1,
  "toolTipFontSize": 12,
  "class": "ViewerArea",
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBorderSize": 0,
  "playbackBarOpacity": 1,
  "playbackBarLeft": 0,
  "propagateClick": false,
  "toolTipFontWeight": "normal"
 },
 {
  "propagateClick": false,
  "toolTipBorderRadius": 3,
  "horizontalAlign": "center",
  "borderSize": 0,
  "mode": "toggle",
  "toolTipOpacity": 1,
  "width": 56,
  "toolTipShadowBlurRadius": 3,
  "toolTipFontColor": "#606060",
  "toolTipBorderColor": "#767676",
  "toolTipShadowSpread": 0,
  "paddingRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingRight": 6,
  "verticalAlign": "middle",
  "toolTipShadowColor": "#333333",
  "toolTipFontFamily": "Arial",
  "toolTipBorderSize": 1,
  "maxHeight": 128,
  "maxWidth": 128,
  "toolTipShadowHorizontalLength": 0,
  "paddingTop": 0,
  "shadow": false,
  "toolTipTextShadowColor": "#000000",
  "toolTipPaddingBottom": 4,
  "height": 40,
  "toolTipPaddingTop": 4,
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "cursor": "hand",
  "transparencyActive": true,
  "toolTipTextShadowOpacity": 0,
  "minHeight": 1,
  "bottom": "3.27%",
  "id": "IconButton_E282985B_F3BA_E2A3_41E5_3A41E4E15E78",
  "paddingBottom": 0,
  "data": {
   "name": "IconButton1493"
  },
  "toolTipBackgroundColor": "#F6F6F6",
  "iconURL": "skin/IconButton_E282985B_F3BA_E2A3_41E5_3A41E4E15E78.png",
  "toolTip": "Fullscreen",
  "toolTipShadowOpacity": 1,
  "toolTipFontWeight": "normal",
  "paddingLeft": 0,
  "minWidth": 1,
  "toolTipFontStyle": "normal",
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "toolTipDisplayTime": 600,
  "right": "1.24%",
  "class": "IconButton"
 },
 {
  "backgroundColor": [
   "#FFFFFF"
  ],
  "fontColor": "#000000",
  "fontSize": 22,
  "width": "15.7%",
  "rollOverPopUpBackgroundColor": "#CCCCCC",
  "borderSize": 0,
  "paddingRight": 5,
  "paddingBottom": 0,
  "textDecoration": "none",
  "fontFamily": "Rockwell Condensed",
  "backgroundColorRatios": [
   0
  ],
  "popUpFontColor": "#000000",
  "fontStyle": "normal",
  "popUpShadowVerticalLength": 0,
  "paddingTop": 0,
  "popUpShadowColor": "#000000",
  "popUpBackgroundColor": "#FFFFFF",
  "shadowBlurRadius": 6,
  "playList": "this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist",
  "popUpShadow": true,
  "shadow": true,
  "shadowHorizontalLength": 3,
  "backgroundOpacity": 0.72,
  "top": "9.08%",
  "fontWeight": "normal",
  "shadowOpacity": 0,
  "selectedPopUpBackgroundColor": "#33CCFF",
  "borderRadius": 4,
  "shadowSpread": 1,
  "click": "this.setComponentVisibility(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2, true, 0, null, null, false); this.setComponentVisibility(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2, false, 9300, null, 'hideEffect', false)",
  "minHeight": 20,
  "popUpBorderRadius": 0,
  "popUpShadowOpacity": 0,
  "id": "DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5",
  "data": {
   "name": "DropDown1204"
  },
  "shadowVerticalLength": 0,
  "shadowColor": "#000000",
  "gap": 0,
  "prompt": "HABITACIONES",
  "popUpBackgroundOpacity": 0.72,
  "popUpShadowSpread": 1,
  "paddingLeft": 5,
  "minWidth": 200,
  "class": "DropDown",
  "backgroundColorDirection": "vertical",
  "arrowColor": "#8A8A8A",
  "popUpShadowHorizontalLength": 3,
  "right": "2.19%",
  "arrowBeforeLabel": false,
  "height": "5.54%",
  "propagateClick": false,
  "popUpShadowBlurRadius": 6
 },
 {
  "propagateClick": false,
  "itemLabelFontStyle": "normal",
  "itemThumbnailShadowSpread": 1,
  "itemThumbnailShadowColor": "#000000",
  "itemLabelHorizontalAlign": "center",
  "itemMode": "thumbnail-only",
  "itemThumbnailBorderRadius": 5,
  "paddingTop": 10,
  "itemThumbnailWidth": 100,
  "itemPaddingRight": 3,
  "scrollBarVisible": "rollOver",
  "borderRadius": 5,
  "itemPaddingTop": 3,
  "itemThumbnailHeight": 75,
  "playList": "this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist",
  "itemThumbnailShadowHorizontalLength": 3,
  "scrollBarColor": "#FFFFFF",
  "minHeight": 1,
  "itemThumbnailShadowVerticalLength": 3,
  "itemOpacity": 1,
  "gap": 13,
  "selectedItemLabelFontWeight": "bold",
  "layout": "horizontal",
  "itemHorizontalAlign": "center",
  "itemBorderRadius": 0,
  "itemLabelFontFamily": "Ink Free",
  "minWidth": 1,
  "itemLabelGap": 8,
  "itemPaddingBottom": 3,
  "itemThumbnailShadow": true,
  "itemPaddingLeft": 3,
  "horizontalAlign": "left",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "itemVerticalAlign": "middle",
  "width": "90.204%",
  "itemBackgroundColor": [],
  "itemThumbnailOpacity": 1,
  "scrollBarWidth": 10,
  "paddingRight": 20,
  "verticalAlign": "top",
  "height": 133,
  "shadow": false,
  "paddingBottom": 10,
  "itemBackgroundColorRatios": [],
  "scrollBarOpacity": 0.5,
  "itemLabelPosition": "bottom",
  "rollOverItemLabelFontWeight": "bold",
  "itemLabelTextDecoration": "none",
  "backgroundOpacity": 0,
  "itemThumbnailShadowBlurRadius": 8,
  "visible": false,
  "bottom": "0.14%",
  "itemThumbnailScaleMode": "fit_outside",
  "id": "ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2",
  "itemBackgroundOpacity": 0,
  "data": {
   "name": "ThumbnailList35762"
  },
  "itemBackgroundColorDirection": "vertical",
  "itemLabelFontWeight": "normal",
  "selectedItemLabelFontColor": "#FFCC00",
  "left": "0.03%",
  "itemLabelFontSize": 14,
  "paddingLeft": 20,
  "class": "ThumbnailList",
  "itemLabelFontColor": "#FFFFFF",
  "itemThumbnailShadowOpacity": 0.57
 },
 {
  "textShadowVerticalLength": 1,
  "propagateClick": false,
  "horizontalAlign": "center",
  "fontColor": "#000000",
  "borderSize": 0,
  "fontSize": 56,
  "width": "39.861%",
  "textShadowColor": "#FFFFFF",
  "paddingRight": 0,
  "textDecoration": "none",
  "fontFamily": "Rockwell Condensed",
  "text": "CAMUS 120, PUTAENDO",
  "rollOut": "this.setComponentVisibility(this.Label_E37B942A_F937_BD8E_41CC_E81A582CCD88, false, 0, null, null, false)",
  "paddingBottom": 0,
  "fontStyle": "normal",
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 0,
  "textShadowOpacity": 0.7,
  "borderRadius": 0,
  "fontWeight": "normal",
  "backgroundOpacity": 0,
  "top": "1.15%",
  "minHeight": 1,
  "textShadowBlurRadius": 3,
  "id": "Label_E37B942A_F937_BD8E_41CC_E81A582CCD88",
  "height": "11.395%",
  "data": {
   "name": "Label19258"
  },
  "textShadowHorizontalLength": 1,
  "paddingLeft": 0,
  "minWidth": 1,
  "class": "Label",
  "left": "23.79%"
 },
 {
  "iconBeforeLabel": true,
  "propagateClick": false,
  "horizontalAlign": "center",
  "backgroundColor": [
   "#5794FE",
   "#0065CD"
  ],
  "fontColor": "#FFFFFF",
  "borderSize": 0,
  "rollOverBackgroundOpacity": 0,
  "fontSize": 12,
  "mode": "toggle",
  "width": 40,
  "paddingRight": 0,
  "textDecoration": "none",
  "fontFamily": "Arial",
  "verticalAlign": "middle",
  "height": 40,
  "fontStyle": "normal",
  "pressedIconWidth": 40,
  "shadow": false,
  "pressedIconURL": "skin/Button_1AC07451_158B_7F0D_41AC_0B4D4E169ECD_pressed.png",
  "paddingBottom": 0,
  "paddingTop": 0,
  "rollOverIconHeight": 40,
  "backgroundColorRatios": [
   0,
   1
  ],
  "borderRadius": 0,
  "fontWeight": "normal",
  "shadowBlurRadius": 6,
  "backgroundOpacity": 0,
  "cursor": "hand",
  "borderColor": "#000000",
  "iconWidth": 40,
  "minHeight": 0,
  "bottom": "12.3%",
  "id": "Button_1AC07451_158B_7F0D_41AC_0B4D4E169ECD",
  "gap": 0,
  "shadowSpread": 1,
  "data": {
   "name": "Button8714"
  },
  "rollOverIconWidth": 40,
  "pressedBackgroundOpacity": 0,
  "shadowColor": "#000000",
  "iconHeight": 40,
  "layout": "horizontal",
  "iconURL": "skin/Button_1AC07451_158B_7F0D_41AC_0B4D4E169ECD.png",
  "paddingLeft": 0,
  "minWidth": 0,
  "class": "Button",
  "backgroundColorDirection": "vertical",
  "pressedIconHeight": 40,
  "right": "2.03%"
 }
], 
 "start": "this.set('mute', true); this.syncPlaylists([this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist,this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_E282985B_F3BA_E2A3_41E5_3A41E4E15E78].forEach(function(component) { component.set('visible', false); }) }; this.playAudioList([this.audio_074A2F7B_158B_A9FD_41B1_19A050A03CCD])",
 "propagateClick": false,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "mobileMipmappingEnabled": false,
 "width": "100%",
 "borderSize": 0,
 "paddingRight": 0,
 "creationPolicy": "delayed",
 "verticalAlign": "top",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "scripts": {
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "existsKey": function(key){  return key in window; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getKey": function(key){  return window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; }
 },
 "borderRadius": 0,
 "height": "100%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "buttonToggleMute": "this.Button_1AC07451_158B_7F0D_41AC_0B4D4E169ECD",
 "minHeight": 20,
 "id": "rootPlayer",
 "data": {
  "name": "Player3308"
 },
 "contentOpaque": false,
 "gap": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "minWidth": 20,
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 0.5,
 "buttonToggleFullscreen": "this.IconButton_E282985B_F3BA_E2A3_41E5_3A41E4E15E78",
 "backgroundPreloadEnabled": true
})