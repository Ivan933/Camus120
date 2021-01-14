TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 149,
  "thumbnailUrl": "media/panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D_t.jpg",
  "id": "panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "VISTA EXTERIOR",
  "class": "Panorama",
  "audios": [
   {
    "class": "PanoramaAudio",
    "id": "audio_EA8E35ED_FEC8_60EC_41ED_3FABBE0F22D9",
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "oggUrl": "media/audio_EA8E35ED_FEC8_60EC_41ED_3FABBE0F22D9.ogg",
     "mp3Url": "media/audio_EA8E35ED_FEC8_60EC_41ED_3FABBE0F22D9.mp3"
    },
    "data": {
     "label": "ES_Sun Melt Waves"
    }
   }
  ],
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Image"
      },
      "maps": [],
      "id": "overlay_EDB839A9_FECB_A117_41E9_2DE07876348F",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "image"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 5.25,
        "hfov": 11.35,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 213,
           "width": 218,
           "url": "media/panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D_0_HS_1_0.png"
          }
         ]
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
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "touchControlMode": "drag_rotation",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -5.29,
   "pitch": -0.91
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMax": 150,
  "thumbnailUrl": "media/panorama_E3A46036_EEC1_746E_41C4_895255B2DE43_t.jpg",
  "id": "panorama_E3A46036_EEC1_746E_41C4_895255B2DE43",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "ENTRADA",
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_E3A46036_EEC1_746E_41C4_895255B2DE43_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 36.55,
        "yaw": -47.87,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 129,
           "url": "media/panorama_E3A46036_EEC1_746E_41C4_895255B2DE43_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "pitch": -4.38
       }
      ],
      "id": "overlay_FD5DF6DE_F36A_6FA4_41E2_858982D814A8",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": true
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 20.77,
        "yaw": 6.35,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 82,
           "url": "media/panorama_E3A46036_EEC1_746E_41C4_895255B2DE43_0_HS_3_1_0_map.gif"
          }
         ]
        },
        "pitch": 9.18
       }
      ],
      "id": "overlay_E32E157A_F4EA_ED6C_41E5_155984C7F781",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 32.94,
        "yaw": -118.74,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 62,
           "url": "media/panorama_E3A46036_EEC1_746E_41C4_895255B2DE43_0_HS_4_1_0_map.gif"
          }
         ]
        },
        "pitch": -4.16
       }
      ],
      "id": "overlay_EA8A23A2_FDD4_6BAB_41E7_3B5DCF34954B",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D, this.camera_E8665755_FE48_A13F_41D3_2941400558E2); this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_E3A46036_EEC1_746E_41C4_895255B2DE43_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_E3A46036_EEC1_746E_41C4_895255B2DE43.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_E3A46036_EEC1_746E_41C4_895255B2DE43_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 132,
   "yaw": -37.46,
   "pitch": -14.24
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMax": 143,
  "thumbnailUrl": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_t.jpg",
  "id": "panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "PASILLOS",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "yaw": 69.15,
    "panorama": {
     "hfovMax": 131,
     "thumbnailUrl": "media/panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079_t.jpg",
     "id": "panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079",
     "partial": false,
     "vfov": 180,
     "pitch": 0,
     "hfovMin": 60,
     "hfov": 360,
     "label": "BA\u00d1O PRINCIPAL",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "yaw": -177.25,
       "panorama": "this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D",
       "backwardYaw": 69.15,
       "distance": 1
      }
     ],
     "class": "Panorama",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079_t.jpg",
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "data": {
          "label": "Polygon"
         },
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 28.35,
           "yaw": -177.25,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 200,
              "width": 62,
              "url": "media/panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079_0_HS_2_1_0_map.gif"
             }
            ]
           },
           "pitch": -5.41
          }
         ],
         "id": "overlay_EA30ED18_FDD4_5C67_41EC_0C59318831C1",
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D, this.camera_E827F7D2_FE48_A135_41E3_FB2BB089DF7F); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "rollOverDisplay": false
        },
        {
         "class": "TripodCapPanoramaOverlay",
         "id": "panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079_tcap0",
         "inertia": false,
         "hfov": 88.8,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 1200,
            "width": 1200,
            "url": "media/panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079_tcap0.png"
           }
          ]
         },
         "angle": 0,
         "rotate": false
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3456,
          "width": 6912,
          "url": "media/panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079.jpeg"
         }
        ]
       }
      }
     ]
    },
    "backwardYaw": -177.25,
    "distance": 1
   }
  ],
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 31.92,
        "yaw": 20.76,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 57,
           "url": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "pitch": -4.55
       }
      ],
      "id": "overlay_E2B17C52_F4EA_62BD_41DB_3BE70129775A",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 43.01,
        "yaw": 69.15,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 68,
           "url": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_0_HS_2_1_0_map.gif"
          }
         ]
        },
        "pitch": -2.79
       }
      ],
      "id": "overlay_EC2318F9_F4FF_E36C_41EC_51E766D43EE0",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079, this.camera_E9CE1811_FE48_AF34_41EA_8AD31AE02724); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 18.91,
        "yaw": 145,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 162,
           "url": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_0_HS_3_1_0_map.gif"
          }
         ]
        },
        "pitch": -1.46
       }
      ],
      "id": "overlay_EC6C4FD0_F4FE_3DBD_41E5_F10DD516100E",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D, this.camera_E9D6F820_FE48_AF15_41CA_370AA5069B6A); this.mainPlayList.set('selectedIndex', 11)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 16.5,
        "yaw": -143.28,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 64,
           "url": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_0_HS_4_1_0_map.gif"
          }
         ]
        },
        "pitch": -5.58
       }
      ],
      "id": "overlay_EE78C238_F4FA_E6EE_41D3_85DB7B66D744",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB, this.camera_E9DF6820_FE48_AF15_417D_8A097CAC6CBC); this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 20.46,
        "yaw": -124.23,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 171,
           "url": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_0_HS_5_1_0_map.gif"
          }
         ]
        },
        "pitch": 0.43
       }
      ],
      "id": "overlay_ED1ED8D8_F4FB_E3AD_41E6_10EE0E320237",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 25.38,
        "yaw": -70.7,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 56,
           "url": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_0_HS_6_1_0_map.gif"
          }
         ]
        },
        "pitch": -5.06
       }
      ],
      "id": "overlay_E9A7924E_F973_7586_41D5_68AA0A1C2E7E",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 26.22,
        "yaw": 119.08,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 72,
           "url": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_0_HS_7_1_0_map.gif"
          }
         ]
        },
        "pitch": -2.83
       }
      ],
      "id": "overlay_E41D4E79_FDD4_DC99_41C7_72FF81BF5C9D",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 136,
   "yaw": 72.07,
   "pitch": -2.85
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMax": 140,
  "thumbnailUrl": "media/panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917_t.jpg",
  "id": "panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "LIVING",
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 57.6,
        "yaw": -16.82,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 171,
           "width": 200,
           "url": "media/panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "pitch": -2.79
       }
      ],
      "id": "overlay_E10CDE9D_F3A9_DFA4_41CF_76AC07167BA5",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": true
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 24.34,
        "yaw": -94.03,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 83,
           "url": "media/panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "pitch": -3.17
       }
      ],
      "id": "overlay_EE341417_F4EA_62A3_41DC_9424A56F43C6",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D, this.camera_E9E6983F_FE48_AF6B_41EB_E515422442AD); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 133,
   "yaw": -10.84,
   "pitch": -2.59
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMax": 136,
  "thumbnailUrl": "media/panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282_t.jpg",
  "id": "panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "COMEDOR",
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 42.11,
        "yaw": -26.77,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 181,
           "width": 200,
           "url": "media/panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "pitch": -2.67
       }
      ],
      "id": "overlay_E2BD5639_F4E9_EEEF_41EE_1F353F8EA465",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 14.9,
        "yaw": 26.94,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 69,
           "url": "media/panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "pitch": -2.14
       }
      ],
      "id": "overlay_E2FDD311_F4EE_66BF_41D6_CA5231BC88A7",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 134,
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMax": 143,
  "thumbnailUrl": "media/panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45_t.jpg",
  "id": "panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "DORMITORIO PRINCIPAL",
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.8,
        "yaw": -164.21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 51,
           "url": "media/panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "pitch": -3.69
       }
      ],
      "id": "overlay_E30D87DA_F4EE_EDAC_41C0_13DEA03ABF5A",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 136,
   "yaw": -111.22,
   "pitch": -5.35
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB_t.jpg",
  "id": "panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB",
  "vfov": 180,
  "partial": false,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "COCINA",
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 24.95,
        "yaw": 140.02,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 82,
           "url": "media/panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "pitch": -15.01
       }
      ],
      "id": "overlay_E8264AD9_F96D_4A8B_41BE_22F9F6FA3C77",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D, this.camera_E81017B3_FE48_A174_41E7_E0D8ACCCD9B2); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB_tcap0",
      "inertia": false,
      "hfov": 88.8,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 1200,
         "width": 1200,
         "url": "media/panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB_tcap0.png"
        }
       ]
      },
      "angle": 0,
      "rotate": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 "this.panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079",
 {
  "class": "PanoramaCamera",
  "id": "panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 127,
   "yaw": 85.32,
   "pitch": 2.17
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMax": 136,
  "thumbnailUrl": "media/panorama_F9143214_F376_E6A4_41BD_90B89494E183_t.jpg",
  "id": "panorama_F9143214_F376_E6A4_41BD_90B89494E183",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "DORMITORIO 1",
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F9143214_F376_E6A4_41BD_90B89494E183_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "id": "overlay_EE5889E7_F4EA_6563_41EB_6E5F527F1918",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 24.67,
        "yaw": -22.82,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 76,
           "url": "media/panorama_F9143214_F376_E6A4_41BD_90B89494E183_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "pitch": -3.86
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 25.39,
        "yaw": -22.48,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 78,
           "url": "media/panorama_F9143214_F376_E6A4_41BD_90B89494E183_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "pitch": -4.13
       }
      ],
      "id": "overlay_E8E539BD_F955_B68B_41D8_309B8BECB110",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D, this.camera_E808B7A3_FE48_A11B_41C8_63BB3596D374); this.mainPlayList.set('selectedIndex', 11)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F9143214_F376_E6A4_41BD_90B89494E183_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F9143214_F376_E6A4_41BD_90B89494E183.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F9143214_F376_E6A4_41BD_90B89494E183_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 133,
   "yaw": -10.24,
   "pitch": -3.71
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMax": 134,
  "thumbnailUrl": "media/panorama_F9149E80_F376_3F9C_41E3_848496A17D94_t.jpg",
  "id": "panorama_F9149E80_F376_3F9C_41E3_848496A17D94",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "DORMITORIO 2",
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F9149E80_F376_3F9C_41E3_848496A17D94_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 21.24,
        "yaw": -10.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 75,
           "url": "media/panorama_F9149E80_F376_3F9C_41E3_848496A17D94_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "pitch": -2.14
       }
      ],
      "id": "overlay_EB400F4C_F956_CB8A_41E1_1C8A4DA00ED4",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D, this.camera_E802D794_FE48_A13C_41A2_B45042FF6A04); this.mainPlayList.set('selectedIndex', 11)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F9149E80_F376_3F9C_41E3_848496A17D94_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F9149E80_F376_3F9C_41E3_848496A17D94.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F9149E80_F376_3F9C_41E3_848496A17D94_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -9.37,
   "pitch": 0.49
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMax": 132,
  "thumbnailUrl": "media/panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D_t.jpg",
  "id": "panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "DORMITORIO 3",
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 22.32,
        "yaw": -8.75,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 84,
           "url": "media/panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "pitch": -3.11
       }
      ],
      "id": "overlay_EB847D4D_F955_CF8A_41E9_574103CC4DA7",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D, this.camera_E85EF745_FE48_A11F_41EE_50159DF41C67); this.mainPlayList.set('selectedIndex', 11)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 69.64,
   "pitch": 0.66
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_t.jpg",
  "id": "panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D",
  "vfov": 180,
  "partial": false,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "GALER\u00cdA",
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 13.7,
        "yaw": -22.65,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 188,
           "width": 132,
           "url": "media/panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "pitch": -2.32
       }
      ],
      "id": "overlay_EA2BE93D_F953_578A_41EB_50963BC7DD2E",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D, this.camera_E86A6765_FE48_A11C_41E3_F641E3D680F9); this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 46.75,
        "yaw": 60.74,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 89,
           "url": "media/panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "pitch": -13.94
       }
      ],
      "id": "overlay_EAA7179C_F953_DA8A_41A5_4CF7588562D1",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D, this.camera_E8766774_FE48_A1FD_41E3_67CAB4485050); this.mainPlayList.set('selectedIndex', 10)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 21.07,
        "yaw": -169.7,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 44,
           "url": "media/panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_0_HS_2_1_0_map.gif"
          }
         ]
        },
        "pitch": -11.75
       }
      ],
      "id": "overlay_ED8D484C_F952_D58A_41EB_A937EAA9F668",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3, this.camera_E87BE784_FE48_A11C_41D0_54FB0CF1E381); this.mainPlayList.set('selectedIndex', 12)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 7.01,
        "yaw": -9.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 36,
           "url": "media/panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_0_HS_3_1_0_map.gif"
          }
         ]
        },
        "pitch": -9.87
       }
      ],
      "id": "overlay_EDA0583D_F95D_758A_41ED_AD4F861FA0E5",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F9149E80_F376_3F9C_41E3_848496A17D94, this.camera_E86FC774_FE48_A1FD_41E4_AB123CBAA23F); this.mainPlayList.set('selectedIndex', 9)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3_t.jpg",
  "id": "panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3",
  "vfov": 180,
  "partial": false,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "Z\u00d3CALO",
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 43.61,
        "yaw": 75.5,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 143,
           "width": 200,
           "url": "media/panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "pitch": 2.37
       }
      ],
      "id": "overlay_EC3E4C65_F952_CDBA_41E5_00B74B2AF069",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D, this.camera_E9F7D87E_FE48_AFEC_41E7_CC26061F25DA); this.mainPlayList.set('selectedIndex', 18)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 77.5,
        "yaw": -107.93,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 145,
           "url": "media/panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "pitch": -6.75
       }
      ],
      "id": "overlay_EFBDF0F5_F92D_B69B_41E5_C54DAFC76D69",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D, this.camera_E9EFA85F_FE48_AF2C_41E0_32759B2321C1); this.mainPlayList.set('selectedIndex', 11)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 46.41,
        "yaw": 123.2,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 197,
           "width": 200,
           "url": "media/panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3_0_HS_2_1_0_map.gif"
          }
         ]
        },
        "pitch": -14.33
       }
      ],
      "id": "overlay_EBA03888_FDEC_6467_41BA_198EEC875382",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F91A19D2_F376_65BC_41D4_63C57FC02695, this.camera_E981489D_FE48_AF2F_41DD_176F1F0C6DC1); this.mainPlayList.set('selectedIndex', 13)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_F91A19D2_F376_65BC_41D4_63C57FC02695_t.jpg",
  "id": "panorama_F91A19D2_F376_65BC_41D4_63C57FC02695",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "PATIO CERRADO",
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F91A19D2_F376_65BC_41D4_63C57FC02695_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 52.16,
        "yaw": -103.47,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 156,
           "width": 200,
           "url": "media/panorama_F91A19D2_F376_65BC_41D4_63C57FC02695_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "pitch": -6.42
       }
      ],
      "id": "overlay_EDB888A3_F496_63E3_41E0_3CEFC6957950",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D, this.camera_E8615745_FE48_A11F_41B7_0C9F14A43692); this.mainPlayList.set('selectedIndex', 18)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F91A19D2_F376_65BC_41D4_63C57FC02695_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F91A19D2_F376_65BC_41D4_63C57FC02695.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F91A19D2_F376_65BC_41D4_63C57FC02695_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 127,
   "yaw": -16.07,
   "pitch": 3.78
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMax": 136,
  "thumbnailUrl": "media/panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_t.jpg",
  "id": "panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "PATIO DELANTERO",
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 19.61,
        "yaw": -125.78,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 112,
           "url": "media/panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "pitch": -1.19
       }
      ],
      "id": "overlay_EE7FEF87_F496_3DA4_41C4_EF16D48D800E",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 17)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 47.62,
        "yaw": 156.66,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 136,
           "width": 200,
           "url": "media/panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "pitch": 4.25
       }
      ],
      "id": "overlay_E80AED37_F49A_62E4_41E3_87A3BE0A2BFD",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 16)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 11.93,
        "yaw": -66.58,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 109,
           "url": "media/panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_0_HS_2_1_0_map.gif"
          }
         ]
        },
        "pitch": 0.6
       }
      ],
      "id": "overlay_E8D5A7A7_FDF4_ABA9_41E9_D4859BDCE56A",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F904D25F_F376_66A4_41E0_2C261E370374, this.camera_E816F7B3_FE48_A174_41EA_4DC5D1572C31); this.mainPlayList.set('selectedIndex', 15)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 42.56,
        "yaw": -29,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 88,
           "width": 200,
           "url": "media/panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_0_HS_3_1_0_map.gif"
          }
         ]
        },
        "pitch": 2.71
       }
      ],
      "id": "overlay_EBCE0808_FDEF_A467_41A2_FC4FF9B61DE5",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F91A19D2_F376_65BC_41D4_63C57FC02695, this.camera_E81F07C2_FE48_A115_41D9_ED76854EBF72); this.mainPlayList.set('selectedIndex', 13)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 131,
   "yaw": -123.43,
   "pitch": 0.23
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMax": 136,
  "thumbnailUrl": "media/panorama_F904D25F_F376_66A4_41E0_2C261E370374_t.jpg",
  "id": "panorama_F904D25F_F376_66A4_41E0_2C261E370374",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "LAVADERO",
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F904D25F_F376_66A4_41E0_2C261E370374_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 26.84,
        "yaw": 161.47,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 93,
           "url": "media/panorama_F904D25F_F376_66A4_41E0_2C261E370374_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "pitch": -5.06
       }
      ],
      "id": "overlay_EE28BAFD_F92E_CA8B_41E3_18D86F8D7B56",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6, this.camera_E85AD736_FE48_A17C_41EA_C041D8030011); this.mainPlayList.set('selectedIndex', 14)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F904D25F_F376_66A4_41E0_2C261E370374_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F904D25F_F376_66A4_41E0_2C261E370374.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F904D25F_F376_66A4_41E0_2C261E370374_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 132,
   "yaw": -146.82,
   "pitch": -0.23
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMax": 139,
  "thumbnailUrl": "media/panorama_F915C16E_F376_2564_41DC_D2B559D98F09_t.jpg",
  "id": "panorama_F915C16E_F376_2564_41DC_D2B559D98F09",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "PATIO TRASERO",
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F915C16E_F376_2564_41DC_D2B559D98F09_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 27.9,
        "yaw": 139.68,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 167,
           "width": 200,
           "url": "media/panorama_F915C16E_F376_2564_41DC_D2B559D98F09_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "pitch": -2.32
       }
      ],
      "id": "overlay_EE0984E0_F497_E39C_41E5_A6EDBFB51483",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 14)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F915C16E_F376_2564_41DC_D2B559D98F09_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F915C16E_F376_2564_41DC_D2B559D98F09.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F915C16E_F376_2564_41DC_D2B559D98F09_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 136,
   "yaw": -84.47,
   "pitch": -6.24
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMax": 134,
  "thumbnailUrl": "media/panorama_F90FFA40_F376_269C_41D1_74BD7304D802_t.jpg",
  "id": "panorama_F90FFA40_F376_269C_41D1_74BD7304D802",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "BODEGA ",
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F90FFA40_F376_269C_41D1_74BD7304D802_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 27.5,
        "yaw": -124.58,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 101,
           "url": "media/panorama_F90FFA40_F376_269C_41D1_74BD7304D802_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "pitch": -6.09
       }
      ],
      "id": "overlay_E8EFC88E_FDEC_647B_41AC_CFC099294395",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6, this.camera_E9C73801_FE48_AF14_41DB_FFB880D28F0A); this.mainPlayList.set('selectedIndex', 14)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_F90FFA40_F376_269C_41D1_74BD7304D802_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F90FFA40_F376_269C_41D1_74BD7304D802.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F90FFA40_F376_269C_41D1_74BD7304D802_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 131,
   "yaw": -46.45,
   "pitch": -2.73
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfovMax": 130,
  "thumbnailUrl": "media/panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D_t.jpg",
  "id": "panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D",
  "vfov": 180,
  "partial": false,
  "pitch": 0,
  "hfovMin": 60,
  "hfov": 360,
  "label": "BA\u00d1O PATIO",
  "class": "Panorama",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D_t.jpg",
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 43.03,
        "yaw": 155.98,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 107,
           "url": "media/panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "pitch": -13.23
       }
      ],
      "id": "overlay_ECBAD79D_F956_BA8B_41EB_CCE6316D1FE1",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6, this.camera_E82EC7E2_FE48_A114_41BE_3852E27668A2); this.mainPlayList.set('selectedIndex', 14)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 80.92,
        "yaw": -71.55,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 200,
           "width": 163,
           "url": "media/panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D_0_HS_1_1_0_map.gif"
          }
         ]
        },
        "pitch": -15.01
       }
      ],
      "id": "overlay_EF471945_F957_57FB_41EE_F5B1A9208121",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F91A19D2_F376_65BC_41D4_63C57FC02695, this.camera_E83767F1_FE48_A0F7_41D4_4D16C98FABEE); this.mainPlayList.set('selectedIndex', 13)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     },
     {
      "class": "HotspotPanoramaOverlay",
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 34.12,
        "yaw": -18.7,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 162,
           "width": 199,
           "url": "media/panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D_0_HS_2_1_0_map.gif"
          }
         ]
        },
        "pitch": -1.64
       }
      ],
      "id": "overlay_EFC90D0C_F957_CF8A_41E9_D1A2F120B55F",
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3, this.camera_E83E07F1_FE48_A0F7_41EF_B53D842A5C53); this.mainPlayList.set('selectedIndex', 12)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
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
    "camera": "this.panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.Label_E37B942A_F937_BD8E_41CC_E81A582CCD88, true, -1, this.effect_EE08073E_FE38_616C_41DC_B89D7B9B8B49, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.Label_E37B942A_F937_BD8E_41CC_E81A582CCD88, false, -1, this.effect_EE08373E_FE38_616C_41DF_E1C686CB0FF1, 'hideEffect', false); this.setComponentVisibility(this.Label_E37B942A_F937_BD8E_41CC_E81A582CCD88, false, -1, this.effect_EE08373E_FE38_616C_41DF_E1C686CB0FF1, 'hideEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E3A46036_EEC1_746E_41C4_895255B2DE43",
    "camera": "this.panorama_E3A46036_EEC1_746E_41C4_895255B2DE43_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.setComponentVisibility(this.HTMLText_E96D59D9_FECB_E137_41E5_35C0C986D02D, true, -1, this.effect_EBCECA5F_FEC8_A32B_41D9_20FBF3B9CBE7, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_E96D59D9_FECB_E137_41E5_35C0C986D02D, false, -1, this.effect_EBCF3A5F_FEC8_A32B_41E1_8E7ED7071510, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E96D59D9_FECB_E137_41E5_35C0C986D02D, false, -1, this.effect_EBCF3A5F_FEC8_A32B_41E1_8E7ED7071510, 'hideEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D",
    "camera": "this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917",
    "camera": "this.panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282",
    "camera": "this.panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45",
    "camera": "this.panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB",
    "camera": "this.panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079",
    "camera": "this.panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_F9143214_F376_E6A4_41BD_90B89494E183",
    "camera": "this.panorama_F9143214_F376_E6A4_41BD_90B89494E183_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_F9149E80_F376_3F9C_41E3_848496A17D94",
    "camera": "this.panorama_F9149E80_F376_3F9C_41E3_848496A17D94_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D",
    "camera": "this.panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D",
    "camera": "this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3",
    "camera": "this.panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "media": "this.panorama_F91A19D2_F376_65BC_41D4_63C57FC02695",
    "camera": "this.panorama_F91A19D2_F376_65BC_41D4_63C57FC02695_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "media": "this.panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6",
    "camera": "this.panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_F904D25F_F376_66A4_41E0_2C261E370374",
    "camera": "this.panorama_F904D25F_F376_66A4_41E0_2C261E370374_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "media": "this.panorama_F915C16E_F376_2564_41DC_D2B559D98F09",
    "camera": "this.panorama_F915C16E_F376_2564_41DC_D2B559D98F09_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "media": "this.panorama_F90FFA40_F376_269C_41D1_74BD7304D802",
    "camera": "this.panorama_F90FFA40_F376_269C_41D1_74BD7304D802_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D",
    "camera": "this.panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 0)",
    "end": "this.trigger('tourEnded')"
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
    "camera": "this.panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 0, 1); this.setComponentVisibility(this.Label_E37B942A_F937_BD8E_41CC_E81A582CCD88, true, -1, this.effect_EE08073E_FE38_616C_41DC_B89D7B9B8B49, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.Label_E37B942A_F937_BD8E_41CC_E81A582CCD88, false, -1, this.effect_EE08373E_FE38_616C_41DF_E1C686CB0FF1, 'hideEffect', false); this.setComponentVisibility(this.Label_E37B942A_F937_BD8E_41CC_E81A582CCD88, false, -1, this.effect_EE08373E_FE38_616C_41DF_E1C686CB0FF1, 'hideEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E3A46036_EEC1_746E_41C4_895255B2DE43",
    "camera": "this.panorama_E3A46036_EEC1_746E_41C4_895255B2DE43_camera",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 1, 2); this.setComponentVisibility(this.HTMLText_E96D59D9_FECB_E137_41E5_35C0C986D02D, true, -1, this.effect_EBCECA5F_FEC8_A32B_41D9_20FBF3B9CBE7, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_E96D59D9_FECB_E137_41E5_35C0C986D02D, false, -1, this.effect_EBCF3A5F_FEC8_A32B_41E1_8E7ED7071510, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E96D59D9_FECB_E137_41E5_35C0C986D02D, false, -1, this.effect_EBCF3A5F_FEC8_A32B_41E1_8E7ED7071510, 'hideEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 2, 3)",
    "media": "this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D",
    "camera": "this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 3, 4)",
    "media": "this.panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917",
    "camera": "this.panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 4, 5)",
    "media": "this.panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282",
    "camera": "this.panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 5, 6)",
    "media": "this.panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45",
    "camera": "this.panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 6, 7)",
    "media": "this.panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB",
    "camera": "this.panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 7, 8)",
    "media": "this.panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079",
    "camera": "this.panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 8, 9)",
    "media": "this.panorama_F9143214_F376_E6A4_41BD_90B89494E183",
    "camera": "this.panorama_F9143214_F376_E6A4_41BD_90B89494E183_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 9, 10)",
    "media": "this.panorama_F9149E80_F376_3F9C_41E3_848496A17D94",
    "camera": "this.panorama_F9149E80_F376_3F9C_41E3_848496A17D94_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 10, 11)",
    "media": "this.panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D",
    "camera": "this.panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 11, 12)",
    "media": "this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D",
    "camera": "this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 12, 13)",
    "media": "this.panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3",
    "camera": "this.panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 13, 14)",
    "media": "this.panorama_F91A19D2_F376_65BC_41D4_63C57FC02695",
    "camera": "this.panorama_F91A19D2_F376_65BC_41D4_63C57FC02695_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 14, 15)",
    "media": "this.panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6",
    "camera": "this.panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 15, 16)",
    "media": "this.panorama_F904D25F_F376_66A4_41E0_2C261E370374",
    "camera": "this.panorama_F904D25F_F376_66A4_41E0_2C261E370374_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 16, 17)",
    "media": "this.panorama_F915C16E_F376_2564_41DC_D2B559D98F09",
    "camera": "this.panorama_F915C16E_F376_2564_41DC_D2B559D98F09_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 17, 18)",
    "media": "this.panorama_F90FFA40_F376_269C_41D1_74BD7304D802",
    "camera": "this.panorama_F90FFA40_F376_269C_41D1_74BD7304D802_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist, 18, 0)",
    "media": "this.panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D",
    "camera": "this.panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D_camera",
    "player": "this.MainViewerPanoramaPlayer"
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
    "camera": "this.panorama_F1E90ED7_FDB5_FDE9_41D0_4B69D2251B4D_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 0, 1); this.setComponentVisibility(this.Label_E37B942A_F937_BD8E_41CC_E81A582CCD88, true, -1, this.effect_EE08073E_FE38_616C_41DC_B89D7B9B8B49, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.Label_E37B942A_F937_BD8E_41CC_E81A582CCD88, false, -1, this.effect_EE08373E_FE38_616C_41DF_E1C686CB0FF1, 'hideEffect', false); this.setComponentVisibility(this.Label_E37B942A_F937_BD8E_41CC_E81A582CCD88, false, -1, this.effect_EE08373E_FE38_616C_41DF_E1C686CB0FF1, 'hideEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_E3A46036_EEC1_746E_41C4_895255B2DE43",
    "camera": "this.panorama_E3A46036_EEC1_746E_41C4_895255B2DE43_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 1, 2); this.setComponentVisibility(this.HTMLText_E96D59D9_FECB_E137_41E5_35C0C986D02D, true, -1, this.effect_EBCECA5F_FEC8_A32B_41D9_20FBF3B9CBE7, 'showEffect', false)",
    "end": "this.setComponentVisibility(this.HTMLText_E96D59D9_FECB_E137_41E5_35C0C986D02D, false, -1, this.effect_EBCF3A5F_FEC8_A32B_41E1_8E7ED7071510, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E96D59D9_FECB_E137_41E5_35C0C986D02D, false, -1, this.effect_EBCF3A5F_FEC8_A32B_41E1_8E7ED7071510, 'hideEffect', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 2, 3)",
    "media": "this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D",
    "camera": "this.panorama_FCC72D29_F39A_22EF_41E7_93AA49F8846D_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 3, 4)",
    "media": "this.panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917",
    "camera": "this.panorama_F9B68AF8_F36A_676C_41D8_A561BCEDE917_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 4, 5)",
    "media": "this.panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282",
    "camera": "this.panorama_F92E2552_F36A_22BD_41DA_C0D6DB1B7282_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 5, 6)",
    "media": "this.panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45",
    "camera": "this.panorama_E2B94FA9_F3AE_5DEF_41E4_3A83D4337F45_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 6, 7)",
    "media": "this.panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB",
    "camera": "this.panorama_F72F63B3_F953_5A9E_41E7_2CC66E9136EB_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 7, 8)",
    "media": "this.panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079",
    "camera": "this.panorama_E10F6ECE_F39A_DFA5_41E9_597D2D2C2079_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 8, 9)",
    "media": "this.panorama_F9143214_F376_E6A4_41BD_90B89494E183",
    "camera": "this.panorama_F9143214_F376_E6A4_41BD_90B89494E183_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 9, 10)",
    "media": "this.panorama_F9149E80_F376_3F9C_41E3_848496A17D94",
    "camera": "this.panorama_F9149E80_F376_3F9C_41E3_848496A17D94_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 10, 11)",
    "media": "this.panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D",
    "camera": "this.panorama_F9151A66_F376_6765_41B8_9A3076BEDA1D_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 11, 12)",
    "media": "this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D",
    "camera": "this.panorama_F72E0EBA_F956_CA8E_41E9_630B6E64F49D_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 12, 13)",
    "media": "this.panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3",
    "camera": "this.panorama_F6A52BD2_F977_CA9E_41E5_E72D735084A3_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 13, 14)",
    "media": "this.panorama_F91A19D2_F376_65BC_41D4_63C57FC02695",
    "camera": "this.panorama_F91A19D2_F376_65BC_41D4_63C57FC02695_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 14, 15)",
    "media": "this.panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6",
    "camera": "this.panorama_F90E21D6_F377_E5A5_41CB_4F64270439E6_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 15, 16)",
    "media": "this.panorama_F904D25F_F376_66A4_41E0_2C261E370374",
    "camera": "this.panorama_F904D25F_F376_66A4_41E0_2C261E370374_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 16, 17)",
    "media": "this.panorama_F915C16E_F376_2564_41DC_D2B559D98F09",
    "camera": "this.panorama_F915C16E_F376_2564_41DC_D2B559D98F09_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 17, 18)",
    "media": "this.panorama_F90FFA40_F376_269C_41D1_74BD7304D802",
    "camera": "this.panorama_F90FFA40_F376_269C_41D1_74BD7304D802_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist, 18, 0)",
    "media": "this.panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D",
    "camera": "this.panorama_EC09CB12_F955_4B99_41ED_EE2162F90E1D_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "class": "FadeOutEffect",
  "duration": 4000,
  "id": "effect_E8E84ABE_FE38_A36D_41E1_33E1F080AD0E",
  "easing": "linear"
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E85AD736_FE48_A17C_41EA_C041D8030011",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 131,
   "yaw": -13.22,
   "pitch": -2.2
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E85EF745_FE48_A11F_41EE_50159DF41C67",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -174.86,
   "pitch": 8.08
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E8615745_FE48_A11F_41B7_0C9F14A43692",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 161.63,
   "pitch": 9.55
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E8665755_FE48_A13F_41D3_2941400558E2",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -148.41,
   "pitch": 8.82
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E86A6765_FE48_A11C_41E3_F641E3D680F9",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 136,
   "yaw": -32.33,
   "pitch": 2.94
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E86FC774_FE48_A1FD_41E4_AB123CBAA23F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 13.96,
   "pitch": 7.35
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E8766774_FE48_A1FD_41E3_67CAB4485050",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 42.61,
   "pitch": 9.55
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E87BE784_FE48_A11C_41D0_54FB0CF1E381",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -6.61,
   "pitch": 3.67
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E802D794_FE48_A13C_41A2_B45042FF6A04",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 53.63,
   "pitch": -2.2
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E808B7A3_FE48_A11B_41C8_63BB3596D374",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -9.55,
   "pitch": -5.14
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E81017B3_FE48_A174_41E7_E0D8ACCCD9B2",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 136,
   "yaw": 68.33,
   "pitch": -2.2
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E816F7B3_FE48_A174_41EA_4DC5D1572C31",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 132,
   "yaw": -129.31,
   "pitch": 17.63
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E81F07C2_FE48_A115_41D9_ED76854EBF72",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 127,
   "yaw": 50.69,
   "pitch": 15.43
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E827F7D2_FE48_A135_41E3_FB2BB089DF7F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 136,
   "yaw": -110.85,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E82EC7E2_FE48_A114_41BE_3852E27668A2",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 131,
   "yaw": -122.69,
   "pitch": 2.2
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E83767F1_FE48_A0F7_41D4_4D16C98FABEE",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 127,
   "yaw": -15.43,
   "pitch": 5.14
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E83E07F1_FE48_A0F7_41EF_B53D842A5C53",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -65.39,
   "pitch": 1.47
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E9C73801_FE48_AF14_41DB_FFB880D28F0A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 131,
   "yaw": -63.92,
   "pitch": 9.55
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E9CE1811_FE48_AF34_41EA_8AD31AE02724",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 127,
   "yaw": 2.75,
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E9D6F820_FE48_AF15_41CA_370AA5069B6A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -8.82,
   "pitch": -4.41
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E9DF6820_FE48_AF15_417D_8A097CAC6CBC",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 166.78,
   "pitch": 9.55
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E9E6983F_FE48_AF6B_41EB_E515422442AD",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 136,
   "yaw": -138.86,
   "pitch": 3.67
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E9EFA85F_FE48_AF2C_41E0_32759B2321C1",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -19.84,
   "pitch": 1.47
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E9F7D87E_FE48_AFEC_41E7_CC26061F25DA",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 74.2,
   "pitch": 11.02
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_E981489D_FE48_AF2F_41DD_176F1F0C6DC1",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 127,
   "yaw": -11.76,
   "pitch": 2.2
  },
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_EE08073E_FE38_616C_41DC_B89D7B9B8B49",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_EE08373E_FE38_616C_41DF_E1C686CB0FF1",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_EBCECA5F_FEC8_A32B_41D9_20FBF3B9CBE7",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_EBCF3A5F_FEC8_A32B_41E1_8E7ED7071510",
  "easing": "cubic_in_out"
 },
 "this.effect_EE08073E_FE38_616C_41DC_B89D7B9B8B49",
 "this.effect_EE08373E_FE38_616C_41DF_E1C686CB0FF1",
 "this.effect_EBCECA5F_FEC8_A32B_41D9_20FBF3B9CBE7",
 "this.effect_EBCF3A5F_FEC8_A32B_41E1_8E7ED7071510",
 "this.effect_EE08073E_FE38_616C_41DC_B89D7B9B8B49",
 "this.effect_EE08373E_FE38_616C_41DF_E1C686CB0FF1",
 "this.effect_EBCECA5F_FEC8_A32B_41D9_20FBF3B9CBE7",
 "this.effect_EBCF3A5F_FEC8_A32B_41E1_8E7ED7071510",
 "this.audio_EA8E35ED_FEC8_60EC_41ED_3FABBE0F22D9"
], "children": [
 {
  "playbackBarBorderSize": 0,
  "toolTipBorderSize": 1,
  "toolTipFontStyle": "normal",
  "toolTipFontColor": "#606060",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontWeight": "normal",
  "toolTipFontSize": 12,
  "toolTipShadowOpacity": 1,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadHeight": 15,
  "toolTipDisplayTime": 600,
  "propagateClick": false,
  "paddingBottom": 0,
  "toolTipPaddingRight": 6,
  "shadow": false,
  "toolTipFontFamily": "Arial",
  "transitionMode": "blending",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBorderRadius": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressRight": 0,
  "playbackBarBottom": 5,
  "toolTipPaddingBottom": 4,
  "progressBorderColor": "#000000",
  "toolTipTextShadowOpacity": 0,
  "minWidth": 100,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "borderRadius": 0,
  "playbackBarHeadShadow": true,
  "playbackBarHeadOpacity": 1,
  "progressBarBorderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingLeft": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipTextShadowBlurRadius": 3,
  "progressBackgroundOpacity": 1,
  "class": "ViewerArea",
  "playbackBarBorderRadius": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarOpacity": 1,
  "width": "100%",
  "progressBarOpacity": 1,
  "progressBorderSize": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBottom": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "height": "100%",
  "toolTipPaddingTop": 4,
  "toolTipOpacity": 1,
  "progressHeight": 10,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowVerticalLength": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadWidth": 6,
  "progressBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "borderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "transitionDuration": 500,
  "top": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeight": 10,
  "paddingRight": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "id": "MainViewer",
  "progressLeft": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderSize": 0,
  "toolTipShadowSpread": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarRight": 0,
  "toolTipBorderRadius": 3,
  "playbackBarProgressBorderRadius": 0,
  "left": 0,
  "playbackBarLeft": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "minHeight": 50,
  "paddingTop": 0,
  "playbackBarBorderColor": "#FFFFFF"
 },
 {
  "transparencyActive": true,
  "mode": "toggle",
  "width": 56,
  "toolTipBorderSize": 1,
  "toolTipFontStyle": "normal",
  "toolTipShadowBlurRadius": 3,
  "toolTipFontSize": 12,
  "height": 34,
  "toolTipPaddingTop": 4,
  "maxHeight": 128,
  "toolTipShadowOpacity": 1,
  "toolTipPaddingLeft": 6,
  "toolTipTextShadowColor": "#000000",
  "toolTipFontWeight": "normal",
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#606060",
  "toolTip": "Fullscreen",
  "propagateClick": false,
  "paddingBottom": 0,
  "toolTipBorderColor": "#767676",
  "toolTipPaddingRight": 6,
  "shadow": false,
  "verticalAlign": "middle",
  "toolTipFontFamily": "Arial",
  "toolTipOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "borderSize": 0,
  "paddingRight": 0,
  "cursor": "hand",
  "toolTipPaddingBottom": 4,
  "bottom": "2.78%",
  "id": "IconButton_E282985B_F3BA_E2A3_41E5_3A41E4E15E78",
  "maxWidth": 128,
  "minWidth": 1,
  "iconURL": "skin/IconButton_E282985B_F3BA_E2A3_41E5_3A41E4E15E78.png",
  "toolTipShadowSpread": 0,
  "toolTipTextShadowOpacity": 0,
  "borderRadius": 0,
  "toolTipShadowHorizontalLength": 0,
  "backgroundOpacity": 0,
  "horizontalAlign": "center",
  "paddingLeft": 0,
  "toolTipBorderRadius": 3,
  "data": {
   "name": "IconButton1493"
  },
  "toolTipShadowColor": "#333333",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipTextShadowBlurRadius": 3,
  "right": "1.55%",
  "paddingTop": 0,
  "class": "IconButton",
  "minHeight": 1
 },
 {
  "arrowBeforeLabel": false,
  "height": "5.54%",
  "shadowHorizontalLength": 3,
  "playList": "this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist",
  "backgroundColor": [
   "#FFFFFF"
  ],
  "backgroundColorRatios": [
   0
  ],
  "shadowOpacity": 0,
  "popUpShadowBlurRadius": 6,
  "width": "15.699%",
  "shadowVerticalLength": 0,
  "gap": 0,
  "fontFamily": "Rockwell Condensed",
  "propagateClick": false,
  "rollOverPopUpBackgroundColor": "#CCCCCC",
  "paddingBottom": 0,
  "shadow": true,
  "fontColor": "#000000",
  "popUpShadow": true,
  "click": "this.setComponentVisibility(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2, true, 0, null, null, false); this.setComponentVisibility(this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2, false, 5000, null, 'hideEffect', false)",
  "fontWeight": "normal",
  "borderSize": 0,
  "popUpShadowHorizontalLength": 3,
  "popUpBackgroundColor": "#FFFFFF",
  "arrowColor": "#8A8A8A",
  "top": "7.23%",
  "selectedPopUpBackgroundColor": "#33CCFF",
  "paddingRight": 5,
  "popUpBorderRadius": 0,
  "fontSize": 22,
  "prompt": "HABITACIONES",
  "shadowSpread": 1,
  "id": "DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5",
  "minWidth": 200,
  "shadowBlurRadius": 6,
  "backgroundColorDirection": "vertical",
  "popUpShadowColor": "#000000",
  "shadowColor": "#000000",
  "textDecoration": "none",
  "borderRadius": 4,
  "popUpShadowOpacity": 0,
  "backgroundOpacity": 0.72,
  "fontStyle": "normal",
  "paddingLeft": 5,
  "left": "1.97%",
  "popUpFontColor": "#000000",
  "popUpShadowVerticalLength": 0,
  "popUpBackgroundOpacity": 0.72,
  "data": {
   "name": "DropDown1204"
  },
  "minHeight": 20,
  "paddingTop": 0,
  "class": "DropDown",
  "popUpShadowSpread": 1
 },
 {
  "playList": "this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist",
  "itemLabelFontWeight": "normal",
  "itemThumbnailShadowColor": "#000000",
  "itemLabelFontStyle": "normal",
  "gap": 13,
  "itemLabelTextDecoration": "none",
  "itemMode": "thumbnail-only",
  "propagateClick": false,
  "itemBackgroundColorRatios": [],
  "selectedItemLabelFontColor": "#FFCC00",
  "paddingBottom": 10,
  "shadow": false,
  "verticalAlign": "top",
  "itemThumbnailHeight": 75,
  "itemLabelFontSize": 14,
  "scrollBarVisible": "rollOver",
  "itemBackgroundColorDirection": "vertical",
  "itemHorizontalAlign": "center",
  "minWidth": 1,
  "horizontalAlign": "left",
  "borderRadius": 5,
  "itemBackgroundColor": [],
  "backgroundOpacity": 0,
  "paddingLeft": 20,
  "itemLabelPosition": "bottom",
  "itemLabelHorizontalAlign": "center",
  "itemThumbnailShadowVerticalLength": 3,
  "itemLabelFontFamily": "Ink Free",
  "itemBorderRadius": 0,
  "itemPaddingTop": 3,
  "selectedItemLabelFontWeight": "bold",
  "itemThumbnailShadowHorizontalLength": 3,
  "class": "ThumbnailList",
  "scrollBarColor": "#FFFFFF",
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "height": 133,
  "itemThumbnailShadow": true,
  "rollOverItemLabelFontWeight": "bold",
  "width": "90.204%",
  "itemThumbnailWidth": 100,
  "itemThumbnailShadowBlurRadius": 8,
  "itemBackgroundOpacity": 0,
  "layout": "horizontal",
  "itemLabelFontColor": "#FFFFFF",
  "borderSize": 0,
  "itemOpacity": 1,
  "paddingRight": 20,
  "visible": false,
  "itemThumbnailBorderRadius": 5,
  "itemVerticalAlign": "middle",
  "itemLabelGap": 8,
  "bottom": "0.14%",
  "id": "ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2",
  "itemPaddingLeft": 3,
  "itemThumbnailShadowOpacity": 0.57,
  "itemThumbnailScaleMode": "fit_outside",
  "data": {
   "name": "ThumbnailList35762"
  },
  "itemThumbnailOpacity": 1,
  "itemPaddingRight": 3,
  "left": "0.03%",
  "scrollBarWidth": 10,
  "itemPaddingBottom": 3,
  "paddingTop": 10,
  "itemThumbnailShadowSpread": 1,
  "minHeight": 1
 },
 {
  "height": "11.395%",
  "fontSize": 56,
  "width": "39.861%",
  "textShadowOpacity": 0.7,
  "textShadowHorizontalLength": 1,
  "rollOut": "this.setComponentVisibility(this.Label_E37B942A_F937_BD8E_41CC_E81A582CCD88, false, 0, null, null, false)",
  "fontFamily": "Rockwell Condensed",
  "propagateClick": false,
  "text": "CAMUS 120, PUTAENDO",
  "paddingBottom": 0,
  "shadow": false,
  "fontColor": "#000000",
  "fontWeight": "normal",
  "borderSize": 0,
  "verticalAlign": "middle",
  "top": "1.01%",
  "paddingRight": 0,
  "visible": false,
  "textShadowBlurRadius": 3,
  "textDecoration": "none",
  "id": "Label_E37B942A_F937_BD8E_41CC_E81A582CCD88",
  "minWidth": 1,
  "data": {
   "name": "Label19258"
  },
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "horizontalAlign": "center",
  "fontStyle": "normal",
  "paddingLeft": 0,
  "textShadowVerticalLength": 1,
  "textShadowColor": "#FFFFFF",
  "left": "24.34%",
  "minHeight": 1,
  "paddingTop": 0,
  "class": "Label"
 },
 {
  "scrollBarColor": "#000000",
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "width": "26.142%",
  "rollOver": "this.setComponentVisibility(this.HTMLText_E96D59D9_FECB_E137_41E5_35C0C986D02D, false, 0, this.effect_E8E84ABE_FE38_A36D_41E1_33E1F080AD0E, 'hideEffect', false)",
  "propagateClick": false,
  "paddingBottom": 20,
  "shadow": false,
  "height": "32.983%",
  "borderSize": 0,
  "top": "0.14%",
  "paddingRight": 20,
  "visible": false,
  "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:right;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:29px;font-family:'Rockwell Condensed';\">Dormitorios 4</SPAN></SPAN></DIV><DIV STYLE=\"text-align:right;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:29px;font-family:'Rockwell Condensed';\">Ba\u00f1os 2</SPAN></SPAN></DIV><DIV STYLE=\"text-align:right;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:29px;font-family:'Rockwell Condensed';\">Metros construidos: 483 m\u00b2</SPAN></SPAN></DIV><DIV STYLE=\"text-align:right;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:29px;font-family:'Rockwell Condensed';\">Superficie Terreno: 678 m\u00b2</SPAN></SPAN></DIV></div>",
  "scrollBarVisible": "rollOver",
  "id": "HTMLText_E96D59D9_FECB_E137_41E5_35C0C986D02D",
  "minWidth": 1,
  "data": {
   "name": "HTMLText53815"
  },
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "paddingLeft": 20,
  "scrollBarWidth": 10,
  "minHeight": 1,
  "paddingTop": 20,
  "class": "HTMLText",
  "right": "0.2%"
 }
], 
 "start": "this.syncPlaylists([this.DropDown_E7BEC502_F3AE_229C_41E7_AD25FEFA7BC5_playlist,this.ThumbnailList_E7955801_F3A9_E29C_41E4_812A0BE09AF2_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_E282985B_F3BA_E2A3_41E5_3A41E4E15E78].forEach(function(component) { component.set('visible', false); }) }",
 "mobileMipmappingEnabled": false,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "creationPolicy": "delayed",
 "gap": 10,
 "propagateClick": false,
 "vrPolyfillScale": 0.5,
 "paddingBottom": 0,
 "shadow": false,
 "verticalAlign": "top",
 "height": "100%",
 "borderSize": 0,
 "overflow": "visible",
 "layout": "absolute",
 "scripts": {
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "existsKey": function(key){  return key in window; },
  "unregisterKey": function(key){  delete window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; }
 },
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "id": "rootPlayer",
 "minWidth": 20,
 "data": {
  "name": "Player3308"
 },
 "buttonToggleFullscreen": "this.IconButton_E282985B_F3BA_E2A3_41E5_3A41E4E15E78",
 "borderRadius": 0,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "minHeight": 20,
 "paddingTop": 0,
 "class": "Player",
 "mouseWheelEnabled": true
})