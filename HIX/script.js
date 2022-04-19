TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205",
       "yaw": 165.42,
       "distance": 1,
       "backwardYaw": -3.8
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205",
       "yaw": 165.27,
       "distance": 1,
       "backwardYaw": -3.8
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1",
                "yaw": 171.34,
                "distance": 1,
                "backwardYaw": 54.53
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_D7A04082_DD6F_9435_41D2_3D698903E11A",
                "yaw": -127.57,
                "distance": 1,
                "backwardYaw": 156.76
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205",
                   "yaw": 157.67,
                   "distance": 1,
                   "backwardYaw": 97.97
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205",
                   "yaw": 157.39,
                   "distance": 1,
                   "backwardYaw": 97.97
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785",
                   "yaw": -133.97,
                   "distance": 1,
                   "backwardYaw": 87.06
                  }
                 ],
                 "partial": false,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "width": 5376,
                      "height": 2688,
                      "url": "media/panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1_hq.jpeg",
                      "tags": "oculusgo"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "width": 2048,
                      "height": 1024,
                      "url": "media/panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1_lq.jpeg",
                      "tags": "preload"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "width": 4002,
                      "height": 2001,
                      "url": "media/panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_C5719849_DDB5_FFD8_41D0_BB4149A49014",
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "width": 480,
                          "height": 300,
                          "url": "media/panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1_0_HS_0_0.png"
                         }
                        ],
                        "rowCount": 6,
                        "frameDuration": 41,
                        "class": "AnimatedImageResource",
                        "frameCount": 21,
                        "colCount": 4
                       },
                       "pitch": -18.61,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 20.73,
                       "yaw": 157.67,
                       "distance": 100
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205, this.camera_CC103DD9_E3B0_ABD0_41AA_6FE3FDB8EFED); this.mainPlayList.set('selectedIndex', 0)"
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     }
                    },
                    {
                     "rollOverDisplay": true,
                     "enabledInCardboard": true,
                     "id": "overlay_CD23EA28_DFA9_AEC0_41E6_7E1BF15EB41E",
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "width": 350,
                          "height": 199,
                          "url": "media/panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -20.44,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 21.96,
                       "yaw": 157.39,
                       "distance": 50
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 157.39,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "width": 28,
                          "height": 16,
                          "url": "media/panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -20.44,
                       "hfov": 21.96
                      }
                     ],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205, this.camera_CC14FDE4_E3B0_ABF0_41E7_B43F42CBA5C8); this.mainPlayList.set('selectedIndex', 0)"
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     }
                    },
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_C8C40420_E04A_703A_41D4_E12EB5EB3302",
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "width": 480,
                          "height": 300,
                          "url": "media/panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1_0_HS_2_0.png"
                         }
                        ],
                        "rowCount": 6,
                        "frameDuration": 41,
                        "class": "AnimatedImageResource",
                        "frameCount": 21,
                        "colCount": 4
                       },
                       "pitch": -24.23,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 19.95,
                       "yaw": -133.97,
                       "distance": 100
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785, this.camera_CC299DF0_E3B0_ABD0_41E7_0476A7542CF3); this.mainPlayList.set('selectedIndex', 31)"
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     }
                    }
                   ]
                  }
                 ],
                 "id": "panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1",
                 "hfovMax": 130,
                 "vfov": 180,
                 "pitch": 0,
                 "cardboardMenu": {
                  "fontColor": "#FFFFFF",
                  "opacity": 0.4,
                  "class": "Menu",
                  "fontFamily": "Arial",
                  "label": "Media",
                  "backgroundColor": "#404040",
                  "id": "Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                  "rollOverFontColor": "#FFFFFF",
                  "selectedFontColor": "#FFFFFF",
                  "children": [
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 0)",
                    "label": "Check In"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 1)",
                    "label": "Lobby"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 2)",
                    "label": "Restaurant"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 3)",
                    "label": "Restaurant"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 4)",
                    "label": "Restaurant"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 5)",
                    "label": "Restaurant"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 6)",
                    "label": "Patio"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 7)",
                    "label": "Patio"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 8)",
                    "label": "Business Center"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 9)",
                    "label": "Meeting Room"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 10)",
                    "label": "Fitness Center"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 11)",
                    "label": "Meeting Room"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 12)",
                    "label": "Swimming Pool"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 13)",
                    "label": "Swimming Pool"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 14)",
                    "label": "Swimming Pool"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 15)",
                    "label": "Swimming Pool"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 16)",
                    "label": "Exteriors"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 17)",
                    "label": "Exteriors"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 18)",
                    "label": "Exteriors"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 19)",
                    "label": "Exteriors"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 20)",
                    "label": "Exteriors"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 21)",
                    "label": "Exteriors"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 22)",
                    "label": "Exteriors"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 23)",
                    "label": "Exteriors"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 24)",
                    "label": "Exteriors"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 25)",
                    "label": "Exteriors"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 26)",
                    "label": "Exteriors"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 27)",
                    "label": "Exteriors"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 28)",
                    "label": "Exteriors"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 29)",
                    "label": "Exteriors"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 30)",
                    "label": "Exteriors"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 31)",
                    "label": "Lobby"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 32)",
                    "label": "Level1"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 33)",
                    "label": "Corridor"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 34)",
                    "label": "Corridor"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 35)",
                    "label": "King Suite"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 36)",
                    "label": "King Suite"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 37)",
                    "label": "King Suite"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 38)",
                    "label": "King Suite"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 39)",
                    "label": "Level 4 Corridor"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 40)",
                    "label": "Queen Room"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 41)",
                    "label": "Queen Room"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 42)",
                    "label": "Queen Room"
                   },
                   {
                    "class": "MenuItem",
                    "click": "this.mainPlayList.set('selectedIndex', 43)",
                    "label": "Queen Room"
                   }
                  ],
                  "rollOverBackgroundColor": "#000000",
                  "selectedBackgroundColor": "#202020",
                  "rollOverOpacity": 0.8
                 },
                 "class": "Panorama",
                 "hfov": 360,
                 "hfovMin": 60,
                 "thumbnailUrl": "media/panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1_t.jpg",
                 "label": "Business Center"
                },
                "yaw": 87.06,
                "distance": 1,
                "backwardYaw": -133.97
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785",
                   "yaw": 93.57,
                   "distance": 1,
                   "backwardYaw": -17.01
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB",
                            "yaw": 143.39,
                            "distance": 1,
                            "backwardYaw": -164.78
                           }
                          ],
                          "partial": false,
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_CBF1EC35_DD92_8C5F_41E4_392F270AEF09_t.jpg",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "width": 5376,
                               "height": 2688,
                               "url": "media/panorama_CBF1EC35_DD92_8C5F_41E4_392F270AEF09_hq.jpeg",
                               "tags": "oculusgo"
                              },
                              {
                               "class": "ImageResourceLevel",
                               "width": 2048,
                               "height": 1024,
                               "url": "media/panorama_CBF1EC35_DD92_8C5F_41E4_392F270AEF09_lq.jpeg",
                               "tags": "preload"
                              },
                              {
                               "class": "ImageResourceLevel",
                               "width": 4002,
                               "height": 2001,
                               "url": "media/panorama_CBF1EC35_DD92_8C5F_41E4_392F270AEF09.jpeg"
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "id": "overlay_CB8D2430_E05B_D01A_41E3_6B615DD263FA",
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "width": 480,
                                   "height": 300,
                                   "url": "media/panorama_CBF1EC35_DD92_8C5F_41E4_392F270AEF09_0_HS_0_0.png"
                                  }
                                 ],
                                 "rowCount": 6,
                                 "frameDuration": 41,
                                 "class": "AnimatedImageResource",
                                 "frameCount": 21,
                                 "colCount": 4
                                },
                                "pitch": -17.09,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 20.91,
                                "yaw": 143.39,
                                "distance": 100
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "maps": [],
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "image",
                                "click": "this.startPanoramaWithCamera(this.panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB, this.camera_D3033FD2_E3B0_A7D0_41DF_D7FAABC11E0A); this.mainPlayList.set('selectedIndex', 34)"
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              }
                             }
                            ]
                           }
                          ],
                          "id": "panorama_CBF1EC35_DD92_8C5F_41E4_392F270AEF09",
                          "hfovMax": 130,
                          "vfov": 180,
                          "pitch": 0,
                          "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                          "class": "Panorama",
                          "hfov": 360,
                          "hfovMin": 60,
                          "thumbnailUrl": "media/panorama_CBF1EC35_DD92_8C5F_41E4_392F270AEF09_t.jpg",
                          "label": "Fitness Center"
                         },
                         "yaw": -164.78,
                         "distance": 1,
                         "backwardYaw": 143.39
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_CBF4AF3A_DDAD_8C55_41B9_623F97D0E5FB",
                                  "yaw": -52.41,
                                  "distance": 1,
                                  "backwardYaw": 77.62
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_CBF1C718_DDAD_9C55_41E1_12BD06150836",
                                     "yaw": 153.42,
                                     "distance": 1,
                                     "backwardYaw": 42.53
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_CBF6D115_DD92_945F_4198_78411642ECFD",
                                     "yaw": -99.04,
                                     "distance": 1,
                                     "backwardYaw": 85.52
                                    }
                                   ],
                                   "partial": false,
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_C507F600_DD92_9C35_41C2_064D860CC824_t.jpg",
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "width": 5376,
                                        "height": 2688,
                                        "url": "media/panorama_C507F600_DD92_9C35_41C2_064D860CC824_hq.jpeg",
                                        "tags": "oculusgo"
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "width": 2048,
                                        "height": 1024,
                                        "url": "media/panorama_C507F600_DD92_9C35_41C2_064D860CC824_lq.jpeg",
                                        "tags": "preload"
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "width": 4002,
                                        "height": 2001,
                                        "url": "media/panorama_C507F600_DD92_9C35_41C2_064D860CC824.jpeg"
                                       }
                                      ]
                                     },
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "id": "overlay_F5F309BA_E045_F00E_41E8_55CB178B8B34",
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "width": 480,
                                            "height": 300,
                                            "url": "media/panorama_C507F600_DD92_9C35_41C2_064D860CC824_0_HS_0_0.png"
                                           }
                                          ],
                                          "rowCount": 6,
                                          "frameDuration": 41,
                                          "class": "AnimatedImageResource",
                                          "frameCount": 21,
                                          "colCount": 4
                                         },
                                         "pitch": -12.99,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 21.31,
                                         "yaw": -99.04,
                                         "distance": 100
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [],
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "image",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CBF6D115_DD92_945F_4198_78411642ECFD, this.camera_D4BFEBA6_E3B0_A870_41CE_881585B645E7); this.mainPlayList.set('selectedIndex', 12)"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "data": {
                                        "label": "Image"
                                       }
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "id": "overlay_F8C03501_E046_D1FA_41BC_E5EBCE429384",
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "width": 480,
                                            "height": 300,
                                            "url": "media/panorama_C507F600_DD92_9C35_41C2_064D860CC824_0_HS_1_0.png"
                                           }
                                          ],
                                          "rowCount": 6,
                                          "frameDuration": 41,
                                          "class": "AnimatedImageResource",
                                          "frameCount": 21,
                                          "colCount": 4
                                         },
                                         "pitch": -13.44,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 21.27,
                                         "yaw": 153.42,
                                         "distance": 100
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [],
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "image",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CBF1C718_DDAD_9C55_41E1_12BD06150836, this.camera_D4A4AB9A_E3B0_A850_41DD_F4040889FA64); this.mainPlayList.set('selectedIndex', 15)"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "data": {
                                        "label": "Image"
                                       }
                                      }
                                     ]
                                    }
                                   ],
                                   "id": "panorama_C507F600_DD92_9C35_41C2_064D860CC824",
                                   "hfovMax": 130,
                                   "vfov": 180,
                                   "pitch": 0,
                                   "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                                   "class": "Panorama",
                                   "hfov": 360,
                                   "hfovMin": 60,
                                   "thumbnailUrl": "media/panorama_C507F600_DD92_9C35_41C2_064D860CC824_t.jpg",
                                   "label": "Swimming Pool"
                                  },
                                  "yaw": 42.53,
                                  "distance": 1,
                                  "backwardYaw": 153.42
                                 }
                                ],
                                "partial": false,
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_CBF1C718_DDAD_9C55_41E1_12BD06150836_t.jpg",
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "class": "ImageResourceLevel",
                                     "width": 5376,
                                     "height": 2688,
                                     "url": "media/panorama_CBF1C718_DDAD_9C55_41E1_12BD06150836_hq.jpeg",
                                     "tags": "oculusgo"
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "width": 2048,
                                     "height": 1024,
                                     "url": "media/panorama_CBF1C718_DDAD_9C55_41E1_12BD06150836_lq.jpeg",
                                     "tags": "preload"
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "width": 4002,
                                     "height": 2001,
                                     "url": "media/panorama_CBF1C718_DDAD_9C55_41E1_12BD06150836.jpeg"
                                    }
                                   ]
                                  },
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "id": "overlay_F7071EB6_E04B_D006_41E5_5B34B702CD01",
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "width": 480,
                                         "height": 300,
                                         "url": "media/panorama_CBF1C718_DDAD_9C55_41E1_12BD06150836_0_HS_0_0.png"
                                        }
                                       ],
                                       "rowCount": 6,
                                       "frameDuration": 41,
                                       "class": "AnimatedImageResource",
                                       "frameCount": 21,
                                       "colCount": 4
                                      },
                                      "pitch": -11.16,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 21.46,
                                      "yaw": -52.41,
                                      "distance": 100
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [],
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "image",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CBF4AF3A_DDAD_8C55_41B9_623F97D0E5FB, this.camera_D3A31F20_E3B0_A870_41C5_E67E273AB16B); this.mainPlayList.set('selectedIndex', 14)"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    }
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "id": "overlay_F736C94D_E04A_D00A_41D6_42485D4BF793",
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "width": 480,
                                         "height": 300,
                                         "url": "media/panorama_CBF1C718_DDAD_9C55_41E1_12BD06150836_0_HS_1_0.png"
                                        }
                                       ],
                                       "rowCount": 6,
                                       "frameDuration": 41,
                                       "class": "AnimatedImageResource",
                                       "frameCount": 21,
                                       "colCount": 4
                                      },
                                      "pitch": -15.42,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 21.09,
                                      "yaw": 42.53,
                                      "distance": 100
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [],
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "image",
                                      "click": "this.startPanoramaWithCamera(this.panorama_C507F600_DD92_9C35_41C2_064D860CC824, this.camera_D3B81F2D_E3B0_A870_41B4_700843158DC2); this.mainPlayList.set('selectedIndex', 13)"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    }
                                   }
                                  ]
                                 }
                                ],
                                "id": "panorama_CBF1C718_DDAD_9C55_41E1_12BD06150836",
                                "hfovMax": 130,
                                "vfov": 180,
                                "pitch": 0,
                                "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                                "class": "Panorama",
                                "hfov": 360,
                                "hfovMin": 60,
                                "thumbnailUrl": "media/panorama_CBF1C718_DDAD_9C55_41E1_12BD06150836_t.jpg",
                                "label": "Swimming Pool"
                               },
                               "yaw": 77.62,
                               "distance": 1,
                               "backwardYaw": -52.41
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_CBF6D115_DD92_945F_4198_78411642ECFD",
                               "yaw": -25.22,
                               "distance": 1,
                               "backwardYaw": -159.19
                              }
                             ],
                             "partial": false,
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_CBF4AF3A_DDAD_8C55_41B9_623F97D0E5FB_t.jpg",
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "width": 5376,
                                  "height": 2688,
                                  "url": "media/panorama_CBF4AF3A_DDAD_8C55_41B9_623F97D0E5FB_hq.jpeg",
                                  "tags": "oculusgo"
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "width": 2048,
                                  "height": 1024,
                                  "url": "media/panorama_CBF4AF3A_DDAD_8C55_41B9_623F97D0E5FB_lq.jpeg",
                                  "tags": "preload"
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "width": 4002,
                                  "height": 2001,
                                  "url": "media/panorama_CBF4AF3A_DDAD_8C55_41B9_623F97D0E5FB.jpeg"
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "id": "overlay_F715A474_E046_F01A_41E1_FFF35DA97BA8",
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "width": 480,
                                      "height": 300,
                                      "url": "media/panorama_CBF4AF3A_DDAD_8C55_41B9_623F97D0E5FB_0_HS_0_0.png"
                                     }
                                    ],
                                    "rowCount": 6,
                                    "frameDuration": 41,
                                    "class": "AnimatedImageResource",
                                    "frameCount": 21,
                                    "colCount": 4
                                   },
                                   "pitch": -16.63,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 20.96,
                                   "yaw": 77.62,
                                   "distance": 100
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [],
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "image",
                                   "click": "this.startPanoramaWithCamera(this.panorama_CBF1C718_DDAD_9C55_41E1_12BD06150836, this.camera_D4908B82_E3B0_A830_41E3_E2A80FF8631E); this.mainPlayList.set('selectedIndex', 15)"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 }
                                },
                                {
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "id": "overlay_F7EA8A5D_E04A_D00A_41C0_600160F288C7",
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "width": 480,
                                      "height": 300,
                                      "url": "media/panorama_CBF4AF3A_DDAD_8C55_41B9_623F97D0E5FB_0_HS_1_0.png"
                                     }
                                    ],
                                    "rowCount": 6,
                                    "frameDuration": 41,
                                    "class": "AnimatedImageResource",
                                    "frameCount": 21,
                                    "colCount": 4
                                   },
                                   "pitch": -12.53,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 21.35,
                                   "yaw": -25.22,
                                   "distance": 100
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [],
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "image",
                                   "click": "this.startPanoramaWithCamera(this.panorama_CBF6D115_DD92_945F_4198_78411642ECFD, this.camera_D4ABCB8E_E3B0_A830_41D7_ABA605EE4071); this.mainPlayList.set('selectedIndex', 12)"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 }
                                }
                               ]
                              }
                             ],
                             "id": "panorama_CBF4AF3A_DDAD_8C55_41B9_623F97D0E5FB",
                             "hfovMax": 130,
                             "vfov": 180,
                             "pitch": 0,
                             "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                             "class": "Panorama",
                             "hfov": 360,
                             "hfovMin": 60,
                             "thumbnailUrl": "media/panorama_CBF4AF3A_DDAD_8C55_41B9_623F97D0E5FB_t.jpg",
                             "label": "Swimming Pool"
                            },
                            "yaw": -159.19,
                            "distance": 1,
                            "backwardYaw": -25.22
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB",
                            "yaw": -97.22,
                            "distance": 1,
                            "backwardYaw": 86
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_C507F600_DD92_9C35_41C2_064D860CC824",
                            "yaw": 85.52,
                            "distance": 1,
                            "backwardYaw": -99.04
                           }
                          ],
                          "partial": false,
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_CBF6D115_DD92_945F_4198_78411642ECFD_t.jpg",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "width": 5376,
                               "height": 2688,
                               "url": "media/panorama_CBF6D115_DD92_945F_4198_78411642ECFD_hq.jpeg",
                               "tags": "oculusgo"
                              },
                              {
                               "class": "ImageResourceLevel",
                               "width": 2048,
                               "height": 1024,
                               "url": "media/panorama_CBF6D115_DD92_945F_4198_78411642ECFD_lq.jpeg",
                               "tags": "preload"
                              },
                              {
                               "class": "ImageResourceLevel",
                               "width": 4002,
                               "height": 2001,
                               "url": "media/panorama_CBF6D115_DD92_945F_4198_78411642ECFD.jpeg"
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "id": "overlay_F6E0709E_E03B_D006_41D4_762D17437051",
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "width": 480,
                                   "height": 300,
                                   "url": "media/panorama_CBF6D115_DD92_945F_4198_78411642ECFD_0_HS_0_0.png"
                                  }
                                 ],
                                 "rowCount": 6,
                                 "frameDuration": 41,
                                 "class": "AnimatedImageResource",
                                 "frameCount": 21,
                                 "colCount": 4
                                },
                                "pitch": -20.73,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 20.46,
                                "yaw": 85.52,
                                "distance": 100
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "maps": [],
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "image",
                                "click": "this.startPanoramaWithCamera(this.panorama_C507F600_DD92_9C35_41C2_064D860CC824, this.camera_CC346E35_E3B0_A853_41CB_E60EC2A644C0); this.mainPlayList.set('selectedIndex', 13)"
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              }
                             },
                             {
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "id": "overlay_F5CA19D4_E03A_501A_4179_1C0D48A32BEC",
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "width": 480,
                                   "height": 300,
                                   "url": "media/panorama_CBF6D115_DD92_945F_4198_78411642ECFD_0_HS_1_0.png"
                                  }
                                 ],
                                 "rowCount": 6,
                                 "frameDuration": 41,
                                 "class": "AnimatedImageResource",
                                 "frameCount": 21,
                                 "colCount": 4
                                },
                                "pitch": -13.29,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 21.29,
                                "yaw": -159.19,
                                "distance": 100
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "maps": [],
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "image",
                                "click": "this.startPanoramaWithCamera(this.panorama_CBF4AF3A_DDAD_8C55_41B9_623F97D0E5FB, this.camera_CC3B4E1E_E3B0_A850_41E5_E4EAE52E5200); this.mainPlayList.set('selectedIndex', 14)"
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              }
                             },
                             {
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "id": "overlay_CC79E1AC_E05A_B00A_41E3_E5EF0452B2E8",
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "width": 480,
                                   "height": 300,
                                   "url": "media/panorama_CBF6D115_DD92_945F_4198_78411642ECFD_0_HS_2_0.png"
                                  }
                                 ],
                                 "rowCount": 6,
                                 "frameDuration": 41,
                                 "class": "AnimatedImageResource",
                                 "frameCount": 21,
                                 "colCount": 4
                                },
                                "pitch": -32.43,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 18.46,
                                "yaw": -97.22,
                                "distance": 100
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "maps": [],
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "image",
                                "click": "this.startPanoramaWithCamera(this.panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB, this.camera_CC301E2A_E3B0_A870_4191_70C5DD031985); this.mainPlayList.set('selectedIndex', 34)"
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              }
                             }
                            ]
                           }
                          ],
                          "id": "panorama_CBF6D115_DD92_945F_4198_78411642ECFD",
                          "hfovMax": 130,
                          "vfov": 180,
                          "pitch": 0,
                          "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                          "class": "Panorama",
                          "hfov": 360,
                          "hfovMin": 60,
                          "thumbnailUrl": "media/panorama_CBF6D115_DD92_945F_4198_78411642ECFD_t.jpg",
                          "label": "Swimming Pool"
                         },
                         "yaw": 86,
                         "distance": 1,
                         "backwardYaw": -97.22
                        }
                       ],
                       "partial": false,
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB_t.jpg",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "width": 5376,
                            "height": 2688,
                            "url": "media/panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB_hq.jpeg",
                            "tags": "oculusgo"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "width": 2048,
                            "height": 1024,
                            "url": "media/panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB_lq.jpeg",
                            "tags": "preload"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "width": 4002,
                            "height": 2001,
                            "url": "media/panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB.jpeg"
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "image"
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "width": 480,
                                "height": 300,
                                "url": "media/panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB_0_HS_0_0.png"
                               }
                              ],
                              "rowCount": 6,
                              "frameDuration": 41,
                              "class": "AnimatedImageResource",
                              "frameCount": 21,
                              "colCount": 4
                             },
                             "pitch": -42,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 16.26,
                             "yaw": 85.06,
                             "distance": 100
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "maps": [],
                           "id": "overlay_CB3E63C0_E046_507A_41C6_F6C0BF102770",
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           }
                          },
                          {
                           "rollOverDisplay": true,
                           "enabledInCardboard": true,
                           "id": "overlay_CA433AF4_E047_F01A_41E0_893EBF89D96F",
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "width": 399,
                                "height": 250,
                                "url": "media/panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB_0_HS_1_0.png"
                               }
                              ]
                             },
                             "pitch": -45.81,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 18.67,
                             "yaw": 86,
                             "distance": 50
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 86,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "width": 25,
                                "height": 16,
                                "url": "media/panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -45.81,
                             "hfov": 18.67
                            }
                           ],
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_CBF6D115_DD92_945F_4198_78411642ECFD, this.camera_D5010AB1_E3B0_A850_41DA_EDC42B872C85); this.mainPlayList.set('selectedIndex', 12)"
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           }
                          },
                          {
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "image"
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "width": 480,
                                "height": 300,
                                "url": "media/panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB_0_HS_2_0.png"
                               }
                              ],
                              "rowCount": 6,
                              "frameDuration": 41,
                              "class": "AnimatedImageResource",
                              "frameCount": 21,
                              "colCount": 4
                             },
                             "pitch": -40.94,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 16.52,
                             "yaw": -165.42,
                             "distance": 100
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "maps": [],
                           "id": "overlay_CB9E3BFE_E046_5006_41DD_44C12A6A4BC4",
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           }
                          },
                          {
                           "rollOverDisplay": true,
                           "enabledInCardboard": true,
                           "id": "overlay_CAD6D98C_E045_B00A_41E9_2762A644CB24",
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "width": 399,
                                "height": 250,
                                "url": "media/panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB_0_HS_3_0.png"
                               }
                              ]
                             },
                             "pitch": -42.62,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 19.71,
                             "yaw": -164.78,
                             "distance": 50
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "maps": [
                            {
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -164.78,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "width": 25,
                                "height": 16,
                                "url": "media/panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB_0_HS_3_0_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -42.62,
                             "hfov": 19.71
                            }
                           ],
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_CBF1EC35_DD92_8C5F_41E4_392F270AEF09, this.camera_D577AA96_E3B0_A850_41BF_192EE3DCA252); this.mainPlayList.set('selectedIndex', 10)"
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           }
                          }
                         ]
                        }
                       ],
                       "id": "panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB",
                       "hfovMax": 130,
                       "vfov": 180,
                       "pitch": 0,
                       "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                       "class": "Panorama",
                       "hfov": 360,
                       "hfovMin": 60,
                       "thumbnailUrl": "media/panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB_t.jpg",
                       "label": "Corridor"
                      }
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_C63EE93A_E045_B00E_41C5_DCF633D66111",
                      "yaw": 149.32,
                      "distance": 1,
                      "backwardYaw": -76.1
                     }
                    ],
                    "partial": false,
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_C60E45C6_E045_D006_41C4_93EAC8E3A579_t.jpg",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "width": 5376,
                         "height": 2688,
                         "url": "media/panorama_C60E45C6_E045_D006_41C4_93EAC8E3A579_hq.jpeg",
                         "tags": "oculusgo"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "width": 2048,
                         "height": 1024,
                         "url": "media/panorama_C60E45C6_E045_D006_41C4_93EAC8E3A579_lq.jpeg",
                         "tags": "preload"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "width": 4002,
                         "height": 2001,
                         "url": "media/panorama_C60E45C6_E045_D006_41C4_93EAC8E3A579.jpeg"
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "id": "overlay_CABF1DF9_E045_F00A_41E5_9E8E68D37ACA",
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "width": 480,
                             "height": 300,
                             "url": "media/panorama_C60E45C6_E045_D006_41C4_93EAC8E3A579_0_HS_0_0.png"
                            }
                           ],
                           "rowCount": 6,
                           "frameDuration": 41,
                           "class": "AnimatedImageResource",
                           "frameCount": 21,
                           "colCount": 4
                          },
                          "pitch": -13.75,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 21.25,
                          "yaw": 0.3,
                          "distance": 100
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "image",
                          "click": "this.mainPlayList.set('selectedIndex', 34)"
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        }
                       },
                       {
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "id": "overlay_CA99051C_E046_D00A_41C8_AC40CB013170",
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "width": 480,
                             "height": 300,
                             "url": "media/panorama_C60E45C6_E045_D006_41C4_93EAC8E3A579_0_HS_1_0.png"
                            }
                           ],
                           "rowCount": 6,
                           "frameDuration": 41,
                           "class": "AnimatedImageResource",
                           "frameCount": 21,
                           "colCount": 4
                          },
                          "pitch": -36.38,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 17.61,
                          "yaw": 149.32,
                          "distance": 100
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_C63EE93A_E045_B00E_41C5_DCF633D66111, this.camera_D4863B76_E3B0_A8D0_41D5_2344E2687A3B); this.mainPlayList.set('selectedIndex', 32)"
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        }
                       }
                      ]
                     }
                    ],
                    "id": "panorama_C60E45C6_E045_D006_41C4_93EAC8E3A579",
                    "hfovMax": 130,
                    "vfov": 180,
                    "pitch": 0,
                    "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                    "class": "Panorama",
                    "hfov": 360,
                    "hfovMin": 60,
                    "thumbnailUrl": "media/panorama_C60E45C6_E045_D006_41C4_93EAC8E3A579_t.jpg",
                    "label": "Corridor"
                   },
                   "yaw": -76.1,
                   "distance": 1,
                   "backwardYaw": 149.32
                  }
                 ],
                 "partial": false,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_C63EE93A_E045_B00E_41C5_DCF633D66111_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "width": 5376,
                      "height": 2688,
                      "url": "media/panorama_C63EE93A_E045_B00E_41C5_DCF633D66111_hq.jpeg",
                      "tags": "oculusgo"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "width": 2048,
                      "height": 1024,
                      "url": "media/panorama_C63EE93A_E045_B00E_41C5_DCF633D66111_lq.jpeg",
                      "tags": "preload"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "width": 4002,
                      "height": 2001,
                      "url": "media/panorama_C63EE93A_E045_B00E_41C5_DCF633D66111.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_C9DB56B6_E04A_5007_41D9_7BBE52FE8331",
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "width": 480,
                          "height": 300,
                          "url": "media/panorama_C63EE93A_E045_B00E_41C5_DCF633D66111_0_HS_0_0.png"
                         }
                        ],
                        "rowCount": 6,
                        "frameDuration": 41,
                        "class": "AnimatedImageResource",
                        "frameCount": 21,
                        "colCount": 4
                       },
                       "pitch": -21.19,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 20.39,
                       "yaw": 93.57,
                       "distance": 100
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785, this.camera_CC229E07_E3B0_A830_41E1_3C279DC6CE99); this.mainPlayList.set('selectedIndex', 31)"
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     }
                    },
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_CAB4F047_E04A_5006_41B2_02F83986209C",
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "width": 480,
                          "height": 300,
                          "url": "media/panorama_C63EE93A_E045_B00E_41C5_DCF633D66111_0_HS_1_0.png"
                         }
                        ],
                        "rowCount": 6,
                        "frameDuration": 41,
                        "class": "AnimatedImageResource",
                        "frameCount": 21,
                        "colCount": 4
                       },
                       "pitch": -19.22,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 20.65,
                       "yaw": -76.1,
                       "distance": 100
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_C60E45C6_E045_D006_41C4_93EAC8E3A579, this.camera_CC277E13_E3B0_A850_41CC_D1977E5B2237); this.mainPlayList.set('selectedIndex', 33)"
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     }
                    }
                   ]
                  }
                 ],
                 "id": "panorama_C63EE93A_E045_B00E_41C5_DCF633D66111",
                 "hfovMax": 130,
                 "vfov": 180,
                 "pitch": 0,
                 "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                 "class": "Panorama",
                 "hfov": 360,
                 "hfovMin": 60,
                 "thumbnailUrl": "media/panorama_C63EE93A_E045_B00E_41C5_DCF633D66111_t.jpg",
                 "label": "Level1"
                },
                "yaw": -17.01,
                "distance": 1,
                "backwardYaw": 93.57
               }
              ],
              "partial": false,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "width": 5376,
                   "height": 2688,
                   "url": "media/panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785_hq.jpeg",
                   "tags": "oculusgo"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "width": 2048,
                   "height": 1024,
                   "url": "media/panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785_lq.jpeg",
                   "tags": "preload"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "height": 2001,
                   "url": "media/panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "width": 480,
                       "height": 300,
                       "url": "media/panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785_0_HS_0_0.png"
                      }
                     ],
                     "rowCount": 6,
                     "frameDuration": 41,
                     "class": "AnimatedImageResource",
                     "frameCount": 21,
                     "colCount": 4
                    },
                    "pitch": -28.48,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 19.23,
                    "yaw": -126.84,
                    "distance": 100
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "id": "overlay_C73199D7_E04A_5006_41C3_A0E3B17FA1EB",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  }
                 },
                 {
                  "rollOverDisplay": true,
                  "enabledInCardboard": true,
                  "id": "overlay_C80A8BAE_E04A_B006_41C9_2E4C7F2F4D11",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "width": 399,
                       "height": 250,
                       "url": "media/panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -30.47,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 23.09,
                    "yaw": -127.57,
                    "distance": 50
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -127.57,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "width": 25,
                       "height": 16,
                       "url": "media/panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -30.47,
                    "hfov": 23.09
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_D7A04082_DD6F_9435_41D2_3D698903E11A, this.camera_D4DA4B2A_E3B0_A870_41BB_A6F73B188A89); this.mainPlayList.set('selectedIndex', 4)"
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  }
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "width": 480,
                       "height": 300,
                       "url": "media/panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785_0_HS_2_0.png"
                      }
                     ],
                     "rowCount": 6,
                     "frameDuration": 41,
                     "class": "AnimatedImageResource",
                     "frameCount": 21,
                     "colCount": 4
                    },
                    "pitch": -30.91,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 18.77,
                    "yaw": 87.34,
                    "distance": 100
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "id": "overlay_C78F8D12_E04A_D01E_41E1_4F067AC6B124",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  }
                 },
                 {
                  "rollOverDisplay": true,
                  "enabledInCardboard": true,
                  "id": "overlay_C8592CDF_E04A_B006_41E4_45B1A0F85680",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "width": 399,
                       "height": 250,
                       "url": "media/panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785_0_HS_3_0.png"
                      }
                     ]
                    },
                    "pitch": -33.81,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 22.25,
                    "yaw": 87.06,
                    "distance": 50
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 87.06,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "width": 25,
                       "height": 16,
                       "url": "media/panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785_0_HS_3_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -33.81,
                    "hfov": 22.25
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1, this.camera_D4D42B36_E3B0_A850_41DB_322251007950); this.mainPlayList.set('selectedIndex', 8)"
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  }
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_C78384A4_E04E_503A_41DF_AF86CEBD8DB3",
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "width": 480,
                       "height": 300,
                       "url": "media/panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785_0_HS_4_0.png"
                      }
                     ],
                     "rowCount": 6,
                     "frameDuration": 41,
                     "class": "AnimatedImageResource",
                     "frameCount": 21,
                     "colCount": 4
                    },
                    "pitch": -19.64,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 11.73,
                    "yaw": 171.34,
                    "distance": 100
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1, this.camera_D4C17B1E_E3B0_A850_41E5_671231DB6C34); this.mainPlayList.set('selectedIndex', 1)"
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  }
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_C9649AE5_E04A_703A_41D8_E063DC6AB85A",
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "width": 480,
                       "height": 300,
                       "url": "media/panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785_0_HS_5_0.png"
                      }
                     ],
                     "rowCount": 6,
                     "frameDuration": 41,
                     "class": "AnimatedImageResource",
                     "frameCount": 21,
                     "colCount": 4
                    },
                    "pitch": -15.57,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 21.07,
                    "yaw": -17.01,
                    "distance": 100
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_C63EE93A_E045_B00E_41C5_DCF633D66111, this.camera_D4ED2B42_E3B0_A830_41AB_F386167BE3F4); this.mainPlayList.set('selectedIndex', 32)"
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  }
                 }
                ]
               }
              ],
              "id": "panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785",
              "hfovMax": 130,
              "vfov": 180,
              "pitch": 0,
              "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
              "class": "Panorama",
              "hfov": 360,
              "hfovMin": 60,
              "thumbnailUrl": "media/panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785_t.jpg",
              "label": "Lobby"
             },
             "yaw": 156.76,
             "distance": 1,
             "backwardYaw": -127.57
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67",
             "yaw": -107.09,
             "distance": 1,
             "backwardYaw": 70.48
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_D7A04082_DD6F_9435_41D2_3D698903E11A",
                "yaw": 47.7,
                "distance": 1,
                "backwardYaw": 86.13
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_D7A04082_DD6F_9435_41D2_3D698903E11A",
                "yaw": 47.27,
                "distance": 1,
                "backwardYaw": 86.13
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31",
                   "yaw": -12.15,
                   "distance": 1,
                   "backwardYaw": 166.63
                  }
                 ],
                 "partial": false,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_CBF1E0A6_DD95_947A_41C4_9D6CC9ECEEF2_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "width": 5376,
                      "height": 2688,
                      "url": "media/panorama_CBF1E0A6_DD95_947A_41C4_9D6CC9ECEEF2_hq.jpeg",
                      "tags": "oculusgo"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "width": 2048,
                      "height": 1024,
                      "url": "media/panorama_CBF1E0A6_DD95_947A_41C4_9D6CC9ECEEF2_lq.jpeg",
                      "tags": "preload"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "width": 4002,
                      "height": 2001,
                      "url": "media/panorama_CBF1E0A6_DD95_947A_41C4_9D6CC9ECEEF2.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_C40CF572_DDB3_91C8_41E3_4CB20FD59877",
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "width": 480,
                          "height": 300,
                          "url": "media/panorama_CBF1E0A6_DD95_947A_41C4_9D6CC9ECEEF2_0_HS_0_0.png"
                         }
                        ],
                        "rowCount": 6,
                        "frameDuration": 41,
                        "class": "AnimatedImageResource",
                        "frameCount": 21,
                        "colCount": 4
                       },
                       "pitch": -29.85,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 18.97,
                       "yaw": -12.15,
                       "distance": 100
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31, this.camera_D4365C3E_E3B0_A850_41CB_2A6FAE9F7348); this.mainPlayList.set('selectedIndex', 9)"
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     }
                    }
                   ]
                  }
                 ],
                 "id": "panorama_CBF1E0A6_DD95_947A_41C4_9D6CC9ECEEF2",
                 "hfovMax": 130,
                 "vfov": 180,
                 "pitch": 0,
                 "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                 "class": "Panorama",
                 "hfov": 360,
                 "hfovMin": 60,
                 "thumbnailUrl": "media/panorama_CBF1E0A6_DD95_947A_41C4_9D6CC9ECEEF2_t.jpg",
                 "label": "Meeting Room"
                },
                "yaw": 166.63,
                "distance": 1,
                "backwardYaw": -12.15
               }
              ],
              "partial": false,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "width": 5376,
                   "height": 2688,
                   "url": "media/panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31_hq.jpeg",
                   "tags": "oculusgo"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "width": 2048,
                   "height": 1024,
                   "url": "media/panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31_lq.jpeg",
                   "tags": "preload"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "height": 2001,
                   "url": "media/panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_C48415A2_DDB4_9148_41E2_921BC0D1A5F3",
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "width": 480,
                       "height": 300,
                       "url": "media/panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31_0_HS_0_0.png"
                      }
                     ],
                     "rowCount": 6,
                     "frameDuration": 41,
                     "class": "AnimatedImageResource",
                     "frameCount": 21,
                     "colCount": 4
                    },
                    "pitch": -16.03,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 21.02,
                    "yaw": 47.7,
                    "distance": 100
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_D7A04082_DD6F_9435_41D2_3D698903E11A, this.camera_D3FA1EAA_E3B0_A870_41DA_215782263D39); this.mainPlayList.set('selectedIndex', 4)"
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  }
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_C41636E3_DDB3_90C8_41E1_4D7E72E4897F",
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "width": 480,
                       "height": 300,
                       "url": "media/panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31_0_HS_1_0.png"
                      }
                     ],
                     "rowCount": 6,
                     "frameDuration": 41,
                     "class": "AnimatedImageResource",
                     "frameCount": 21,
                     "colCount": 4
                    },
                    "pitch": -14.48,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 14.71,
                    "yaw": 166.63,
                    "distance": 100
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_CBF1E0A6_DD95_947A_41C4_9D6CC9ECEEF2, this.camera_D3F55EC0_E3B0_A830_41D3_42A68B694229); this.mainPlayList.set('selectedIndex', 11)"
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  }
                 },
                 {
                  "rollOverDisplay": true,
                  "enabledInCardboard": true,
                  "id": "overlay_CD599BB4_DFAF_EDC0_41C1_2F52CBCD8976",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "width": 399,
                       "height": 250,
                       "url": "media/panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": -17.86,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 25.49,
                    "yaw": 47.27,
                    "distance": 50
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 47.27,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "width": 25,
                       "height": 16,
                       "url": "media/panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -17.86,
                    "hfov": 25.49
                   }
                  ],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_D7A04082_DD6F_9435_41D2_3D698903E11A, this.camera_D3F1DEB5_E3B0_A850_419D_58767B0858AE); this.mainPlayList.set('selectedIndex', 4)"
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  }
                 }
                ]
               }
              ],
              "id": "panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31",
              "hfovMax": 130,
              "vfov": 180,
              "pitch": 0,
              "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
              "class": "Panorama",
              "hfov": 360,
              "hfovMin": 60,
              "thumbnailUrl": "media/panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31_t.jpg",
              "label": "Meeting Room"
             },
             "yaw": 86.13,
             "distance": 1,
             "backwardYaw": 47.7
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31",
             "yaw": 86.15,
             "distance": 1,
             "backwardYaw": 47.7
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E",
                         "yaw": -108,
                         "distance": 1,
                         "backwardYaw": 93.11
                        }
                       ],
                       "partial": false,
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_D7BEB0AB_DD6F_944B_41C0_25F4C9ACE188_t.jpg",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "width": 5376,
                            "height": 2688,
                            "url": "media/panorama_D7BEB0AB_DD6F_944B_41C0_25F4C9ACE188_hq.jpeg",
                            "tags": "oculusgo"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "width": 2048,
                            "height": 1024,
                            "url": "media/panorama_D7BEB0AB_DD6F_944B_41C0_25F4C9ACE188_lq.jpeg",
                            "tags": "preload"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "width": 4002,
                            "height": 2001,
                            "url": "media/panorama_D7BEB0AB_DD6F_944B_41C0_25F4C9ACE188.jpeg"
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "id": "overlay_C597119B_DDB4_B178_41DB_F06706F59175",
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "width": 480,
                                "height": 300,
                                "url": "media/panorama_D7BEB0AB_DD6F_944B_41C0_25F4C9ACE188_0_HS_0_0.png"
                               }
                              ],
                              "rowCount": 6,
                              "frameDuration": 41,
                              "class": "AnimatedImageResource",
                              "frameCount": 21,
                              "colCount": 4
                             },
                             "pitch": -13.9,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 21.23,
                             "yaw": -108,
                             "distance": 100
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "maps": [],
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "image",
                             "click": "this.startPanoramaWithCamera(this.panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E, this.camera_DB692CE2_E3B0_A9F0_41E3_6D58B5384C29); this.mainPlayList.set('selectedIndex', 6)"
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           }
                          }
                         ]
                        }
                       ],
                       "id": "panorama_D7BEB0AB_DD6F_944B_41C0_25F4C9ACE188",
                       "hfovMax": 130,
                       "vfov": 180,
                       "pitch": 0,
                       "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                       "class": "Panorama",
                       "hfov": 360,
                       "hfovMin": 60,
                       "thumbnailUrl": "media/panorama_D7BEB0AB_DD6F_944B_41C0_25F4C9ACE188_t.jpg",
                       "label": "Patio"
                      },
                      "yaw": 93.11,
                      "distance": 1,
                      "backwardYaw": -108
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6",
                      "yaw": 164.89,
                      "distance": 1,
                      "backwardYaw": -29.47
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6",
                      "yaw": 164.68,
                      "distance": 1,
                      "backwardYaw": -29.47
                     }
                    ],
                    "partial": false,
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E_t.jpg",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "width": 5376,
                         "height": 2688,
                         "url": "media/panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E_hq.jpeg",
                         "tags": "oculusgo"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "width": 2048,
                         "height": 1024,
                         "url": "media/panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E_lq.jpeg",
                         "tags": "preload"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "width": 4002,
                         "height": 2001,
                         "url": "media/panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E.jpeg"
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "id": "overlay_CA0847E4_DDB4_F0C8_41E6_FDDABF7E389E",
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "width": 480,
                             "height": 300,
                             "url": "media/panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E_0_HS_0_0.png"
                            }
                           ],
                           "rowCount": 6,
                           "frameDuration": 41,
                           "class": "AnimatedImageResource",
                           "frameCount": 21,
                           "colCount": 4
                          },
                          "pitch": -14.51,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 21.18,
                          "yaw": 93.11,
                          "distance": 100
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_D7BEB0AB_DD6F_944B_41C0_25F4C9ACE188, this.camera_D5192AC8_E3B0_A830_41E5_D8B32C48E137); this.mainPlayList.set('selectedIndex', 7)"
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        }
                       },
                       {
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "id": "overlay_C53F2792_DDB7_9148_41D3_6D01F49FAD9A",
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "width": 480,
                             "height": 300,
                             "url": "media/panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E_0_HS_1_0.png"
                            }
                           ],
                           "rowCount": 6,
                           "frameDuration": 41,
                           "class": "AnimatedImageResource",
                           "frameCount": 21,
                           "colCount": 4
                          },
                          "pitch": -14.47,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 13.97,
                          "yaw": 164.89,
                          "distance": 100
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6, this.camera_D5137AE0_E3B0_A9F0_41D0_2B08414794EF); this.mainPlayList.set('selectedIndex', 3)"
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        }
                       },
                       {
                        "rollOverDisplay": true,
                        "enabledInCardboard": true,
                        "id": "overlay_CD891C71_DFAB_EB40_41C4_3FB35C7B42BD",
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "width": 300,
                             "height": 180,
                             "url": "media/panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E_0_HS_2_0.png"
                            }
                           ]
                          },
                          "pitch": -15.98,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 19.31,
                          "yaw": 164.68,
                          "distance": 50
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 164.68,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "width": 26,
                             "height": 16,
                             "url": "media/panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E_0_HS_2_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -15.98,
                          "hfov": 19.31
                         }
                        ],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6, this.camera_D52B3AEC_E3B0_A9F0_41B8_677B9FA39AB1); this.mainPlayList.set('selectedIndex', 3)"
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        }
                       }
                      ]
                     }
                    ],
                    "id": "panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E",
                    "hfovMax": 130,
                    "vfov": 180,
                    "pitch": 0,
                    "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                    "class": "Panorama",
                    "hfov": 360,
                    "hfovMin": 60,
                    "thumbnailUrl": "media/panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E_t.jpg",
                    "label": "Patio"
                   },
                   "yaw": -29.47,
                   "distance": 1,
                   "backwardYaw": 164.89
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E",
                   "yaw": -28.83,
                   "distance": 1,
                   "backwardYaw": 164.89
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67",
                   "yaw": 146.28,
                   "distance": 1,
                   "backwardYaw": -1.22
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_D7A37B1A_DD6F_9455_41BB_D7D536FD0F2E",
                   "yaw": 36.76,
                   "distance": 1,
                   "backwardYaw": 172.94
                  }
                 ],
                 "partial": false,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "width": 5376,
                      "height": 2688,
                      "url": "media/panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6_hq.jpeg",
                      "tags": "oculusgo"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "width": 2048,
                      "height": 1024,
                      "url": "media/panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6_lq.jpeg",
                      "tags": "preload"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "width": 4002,
                      "height": 2001,
                      "url": "media/panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_CEE3A783_DDBC_9148_41E9_B71821EF3C32",
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "width": 480,
                          "height": 300,
                          "url": "media/panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6_0_HS_0_0.png"
                         }
                        ],
                        "rowCount": 6,
                        "frameDuration": 41,
                        "class": "AnimatedImageResource",
                        "frameCount": 21,
                        "colCount": 4
                       },
                       "pitch": -21.65,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 20.33,
                       "yaw": 146.28,
                       "distance": 100
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67, this.camera_D41CDC0F_E3B0_A830_41E1_DC31E0C33C5D); this.mainPlayList.set('selectedIndex', 2)"
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     }
                    },
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_CBFDA1BF_DDBF_90B8_41D4_EDE0BB2D0755",
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "width": 480,
                          "height": 300,
                          "url": "media/panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6_0_HS_1_0.png"
                         }
                        ],
                        "rowCount": 6,
                        "frameDuration": 41,
                        "class": "AnimatedImageResource",
                        "frameCount": 21,
                        "colCount": 4
                       },
                       "pitch": -20.89,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 20.44,
                       "yaw": -29.47,
                       "distance": 100
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E, this.camera_D4760BF8_E3B0_AFD0_41E8_375EF31A2666); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     }
                    },
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_C8F47721_DDBC_B148_41D1_75FBE302E36E",
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "width": 480,
                          "height": 300,
                          "url": "media/panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6_0_HS_2_0.png"
                         }
                        ],
                        "rowCount": 6,
                        "frameDuration": 41,
                        "class": "AnimatedImageResource",
                        "frameCount": 21,
                        "colCount": 4
                       },
                       "pitch": -23.77,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 20.02,
                       "yaw": 36.76,
                       "distance": 100
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_D7A37B1A_DD6F_9455_41BB_D7D536FD0F2E, this.camera_D4179C1A_E3B0_A850_416A_E48BED0027B6); this.mainPlayList.set('selectedIndex', 5)"
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     }
                    },
                    {
                     "rollOverDisplay": true,
                     "enabledInCardboard": true,
                     "id": "overlay_CDA40400_DFA9_BAC0_41DD_FC1ACD3A5B84",
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "width": 399,
                          "height": 250,
                          "url": "media/panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6_0_HS_3_0.png"
                         }
                        ]
                       },
                       "pitch": -21.81,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 24.87,
                       "yaw": -28.83,
                       "distance": 50
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -28.83,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "width": 25,
                          "height": 16,
                          "url": "media/panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6_0_HS_3_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -21.81,
                       "hfov": 24.87
                      }
                     ],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E, this.camera_D4029C03_E3B0_A830_41E6_C7B1F67ECE17); this.mainPlayList.set('selectedIndex', 6)"
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     }
                    }
                   ]
                  }
                 ],
                 "id": "panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6",
                 "hfovMax": 130,
                 "vfov": 180,
                 "pitch": 0,
                 "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                 "class": "Panorama",
                 "hfov": 360,
                 "hfovMin": 60,
                 "thumbnailUrl": "media/panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6_t.jpg",
                 "label": "Restaurant"
                },
                "yaw": 172.94,
                "distance": 1,
                "backwardYaw": 36.76
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_D7A04082_DD6F_9435_41D2_3D698903E11A",
                "yaw": 116.81,
                "distance": 1,
                "backwardYaw": -55.9
               }
              ],
              "partial": false,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_D7A37B1A_DD6F_9455_41BB_D7D536FD0F2E_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "width": 5376,
                   "height": 2688,
                   "url": "media/panorama_D7A37B1A_DD6F_9455_41BB_D7D536FD0F2E_hq.jpeg",
                   "tags": "oculusgo"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "width": 2048,
                   "height": 1024,
                   "url": "media/panorama_D7A37B1A_DD6F_9455_41BB_D7D536FD0F2E_lq.jpeg",
                   "tags": "preload"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "height": 2001,
                   "url": "media/panorama_D7A37B1A_DD6F_9455_41BB_D7D536FD0F2E.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_CB4F98C5_DDB4_F0C8_41DA_B9165B5908B5",
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "width": 480,
                       "height": 300,
                       "url": "media/panorama_D7A37B1A_DD6F_9455_41BB_D7D536FD0F2E_0_HS_0_0.png"
                      }
                     ],
                     "rowCount": 6,
                     "frameDuration": 41,
                     "class": "AnimatedImageResource",
                     "frameCount": 21,
                     "colCount": 4
                    },
                    "pitch": -21.94,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 10.29,
                    "yaw": 172.94,
                    "distance": 100
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6, this.camera_DB668CEE_E3B0_A9F0_41B7_7D538B8C30EB); this.mainPlayList.set('selectedIndex', 3)"
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  }
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_CA8DE19A_DDB5_9178_41D5_1022A28918D2",
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "width": 480,
                       "height": 300,
                       "url": "media/panorama_D7A37B1A_DD6F_9455_41BB_D7D536FD0F2E_0_HS_1_0.png"
                      }
                     ],
                     "rowCount": 6,
                     "frameDuration": 41,
                     "class": "AnimatedImageResource",
                     "frameCount": 21,
                     "colCount": 4
                    },
                    "pitch": -27.27,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 19.44,
                    "yaw": 116.81,
                    "distance": 100
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_D7A04082_DD6F_9435_41D2_3D698903E11A, this.camera_DB729CFA_E3B0_A9D0_41C9_D1073A1E9DE3); this.mainPlayList.set('selectedIndex', 4)"
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  }
                 }
                ]
               }
              ],
              "id": "panorama_D7A37B1A_DD6F_9455_41BB_D7D536FD0F2E",
              "hfovMax": 130,
              "vfov": 180,
              "pitch": 0,
              "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
              "class": "Panorama",
              "hfov": 360,
              "hfovMin": 60,
              "thumbnailUrl": "media/panorama_D7A37B1A_DD6F_9455_41BB_D7D536FD0F2E_t.jpg",
              "label": "Restaurant"
             },
             "yaw": -55.9,
             "distance": 1,
             "backwardYaw": 116.81
            }
           ],
           "partial": false,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_D7A04082_DD6F_9435_41D2_3D698903E11A_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "width": 5376,
                "height": 2688,
                "url": "media/panorama_D7A04082_DD6F_9435_41D2_3D698903E11A_hq.jpeg",
                "tags": "oculusgo"
               },
               {
                "class": "ImageResourceLevel",
                "width": 2048,
                "height": 1024,
                "url": "media/panorama_D7A04082_DD6F_9435_41D2_3D698903E11A_lq.jpeg",
                "tags": "preload"
               },
               {
                "class": "ImageResourceLevel",
                "width": 4002,
                "height": 2001,
                "url": "media/panorama_D7A04082_DD6F_9435_41D2_3D698903E11A.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_C935C2FD_DDBD_F0B8_41D5_48A268D9B6E4",
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "width": 480,
                    "height": 300,
                    "url": "media/panorama_D7A04082_DD6F_9435_41D2_3D698903E11A_0_HS_0_0.png"
                   }
                  ],
                  "rowCount": 6,
                  "frameDuration": 41,
                  "class": "AnimatedImageResource",
                  "frameCount": 21,
                  "colCount": 4
                 },
                 "pitch": -21.8,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 20.31,
                 "yaw": -107.09,
                 "distance": 100
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67, this.camera_D3CEBE4C_E3B0_A831_41A6_436BACD2FAFE); this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               }
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_C948096D_DDBC_91D8_41E4_0A9BCC762A53",
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "width": 480,
                    "height": 300,
                    "url": "media/panorama_D7A04082_DD6F_9435_41D2_3D698903E11A_0_HS_1_0.png"
                   }
                  ],
                  "rowCount": 6,
                  "frameDuration": 41,
                  "class": "AnimatedImageResource",
                  "frameCount": 21,
                  "colCount": 4
                 },
                 "pitch": -31.06,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 18.74,
                 "yaw": -55.9,
                 "distance": 100
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_D7A37B1A_DD6F_9455_41BB_D7D536FD0F2E, this.camera_D3DFCE6F_E3B0_A8CF_41DA_3D43DB36C912); this.mainPlayList.set('selectedIndex', 5)"
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               }
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_C8BF495C_DDBC_91F8_41E5_D0BD52F37C01",
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "width": 480,
                    "height": 300,
                    "url": "media/panorama_D7A04082_DD6F_9435_41D2_3D698903E11A_0_HS_2_0.png"
                   }
                  ],
                  "rowCount": 6,
                  "frameDuration": 41,
                  "class": "AnimatedImageResource",
                  "frameCount": 21,
                  "colCount": 4
                 },
                 "pitch": -31.67,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 18.62,
                 "yaw": 86.13,
                 "distance": 100
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31, this.camera_D3C44E58_E3B0_A8D0_41D1_99547ED642F7); this.mainPlayList.set('selectedIndex', 9)"
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               }
              },
              {
               "rollOverDisplay": true,
               "enabledInCardboard": true,
               "id": "overlay_CD83AE16_DFA8_E6C0_41CA_978861CEA57B",
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "width": 399,
                    "height": 250,
                    "url": "media/panorama_D7A04082_DD6F_9435_41D2_3D698903E11A_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": -34.57,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 22.06,
                 "yaw": 86.15,
                 "distance": 50
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 86.15,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "width": 25,
                    "height": 16,
                    "url": "media/panorama_D7A04082_DD6F_9435_41D2_3D698903E11A_0_HS_3_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -34.57,
                 "hfov": 22.06
                }
               ],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31, this.camera_D3DABE64_E3B0_A8F0_41C3_4E985F6AEDBB); this.mainPlayList.set('selectedIndex', 9)"
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               }
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_C82680AC_E04E_500A_41E5_C0105F267452",
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "width": 480,
                    "height": 300,
                    "url": "media/panorama_D7A04082_DD6F_9435_41D2_3D698903E11A_0_HS_4_0.png"
                   }
                  ],
                  "rowCount": 6,
                  "frameDuration": 41,
                  "class": "AnimatedImageResource",
                  "frameCount": 21,
                  "colCount": 4
                 },
                 "pitch": -26.05,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 19.65,
                 "yaw": 156.76,
                 "distance": 100
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785, this.camera_D3CADE41_E3B0_A830_41D4_1C6572E0BF44); this.mainPlayList.set('selectedIndex', 31)"
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               }
              }
             ]
            }
           ],
           "id": "panorama_D7A04082_DD6F_9435_41D2_3D698903E11A",
           "hfovMax": 130,
           "vfov": 180,
           "pitch": 0,
           "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
           "class": "Panorama",
           "hfov": 360,
           "hfovMin": 60,
           "thumbnailUrl": "media/panorama_D7A04082_DD6F_9435_41D2_3D698903E11A_t.jpg",
           "label": "Restaurant"
          },
          "yaw": 70.48,
          "distance": 1,
          "backwardYaw": -107.09
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1",
          "yaw": 165.95,
          "distance": 1,
          "backwardYaw": -21.42
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6",
          "yaw": -1.22,
          "distance": 1,
          "backwardYaw": 146.28
         }
        ],
        "partial": false,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "width": 5376,
             "height": 2688,
             "url": "media/panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67_hq.jpeg",
             "tags": "oculusgo"
            },
            {
             "class": "ImageResourceLevel",
             "width": 2048,
             "height": 1024,
             "url": "media/panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67_lq.jpeg",
             "tags": "preload"
            },
            {
             "class": "ImageResourceLevel",
             "width": 4002,
             "height": 2001,
             "url": "media/panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_CF3C8ED2_DDB3_70C8_41DA_0D36FDE384D6",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 480,
                 "height": 300,
                 "url": "media/panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67_0_HS_0_0.png"
                }
               ],
               "rowCount": 6,
               "frameDuration": 41,
               "class": "AnimatedImageResource",
               "frameCount": 21,
               "colCount": 4
              },
              "pitch": -16.33,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 20.99,
              "yaw": -1.22,
              "distance": 100
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6, this.camera_D5373B0F_E3B0_A830_41D0_AB2EEAF82A15); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            }
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_CF5E1B2B_DDBC_B158_41AE_6E179B055FC3",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 480,
                 "height": 300,
                 "url": "media/panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67_0_HS_1_0.png"
                }
               ],
               "rowCount": 6,
               "frameDuration": 41,
               "class": "AnimatedImageResource",
               "frameCount": 21,
               "colCount": 4
              },
              "pitch": -20.73,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 20.46,
              "yaw": 70.48,
              "distance": 100
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_D7A04082_DD6F_9435_41D2_3D698903E11A, this.camera_D5250AF7_E3B0_A9D0_41E7_59331AFE90D5); this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            }
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_CE2A3EC6_DDBD_90C8_41E0_B1F1D58705C4",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 480,
                 "height": 300,
                 "url": "media/panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67_0_HS_2_0.png"
                }
               ],
               "rowCount": 6,
               "frameDuration": 41,
               "class": "AnimatedImageResource",
               "frameCount": 21,
               "colCount": 4
              },
              "pitch": -35.3,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 13.02,
              "yaw": 165.95,
              "distance": 100
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1, this.camera_D53EEB03_E3B0_A830_41E2_E25F8893D5CB); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            }
           }
          ]
         }
        ],
        "id": "panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67",
        "hfovMax": 130,
        "vfov": 180,
        "pitch": 0,
        "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
        "class": "Panorama",
        "hfov": 360,
        "hfovMin": 60,
        "thumbnailUrl": "media/panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67_t.jpg",
        "label": "Restaurant"
       },
       "yaw": -21.42,
       "distance": 1,
       "backwardYaw": 165.95
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67",
       "yaw": -21.24,
       "distance": 1,
       "backwardYaw": 165.95
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785",
       "yaw": 54.53,
       "distance": 1,
       "backwardYaw": 171.34
      }
     ],
     "partial": false,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "width": 5376,
          "height": 2688,
          "url": "media/panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1_hq.jpeg",
          "tags": "oculusgo"
         },
         {
          "class": "ImageResourceLevel",
          "width": 2048,
          "height": 1024,
          "url": "media/panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1_lq.jpeg",
          "tags": "preload"
         },
         {
          "class": "ImageResourceLevel",
          "width": 4002,
          "height": 2001,
          "url": "media/panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_CC8EC125_DDB4_9148_41C2_6ABF45A7D670",
         "items": [
          {
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "width": 480,
              "height": 300,
              "url": "media/panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1_0_HS_0_0.png"
             }
            ],
            "rowCount": 6,
            "frameDuration": 41,
            "class": "AnimatedImageResource",
            "frameCount": 21,
            "colCount": 4
           },
           "pitch": -17.85,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 20.82,
           "yaw": -21.42,
           "distance": 100
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67, this.camera_D3678FA3_E3B0_A870_41BA_3BFD74095E67); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         }
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_CC75E3A7_DDB3_9148_41E2_9C44C155DE31",
         "items": [
          {
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "width": 480,
              "height": 300,
              "url": "media/panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1_0_HS_1_0.png"
             }
            ],
            "rowCount": 6,
            "frameDuration": 41,
            "class": "AnimatedImageResource",
            "frameCount": 21,
            "colCount": 4
           },
           "pitch": -21.29,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 11.32,
           "yaw": 165.42,
           "distance": 100
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205, this.camera_D36A1F8D_E3B0_A830_41DA_992D9EE4AD4C); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         }
        },
        {
         "rollOverDisplay": true,
         "enabledInCardboard": true,
         "id": "overlay_CFC106B2_DFB9_A7C0_41CE_4CFE799B78DE",
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "width": 399,
              "height": 250,
              "url": "media/panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -19.99,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 25.17,
           "yaw": -21.24,
           "distance": 50
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -21.24,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "width": 25,
              "height": 16,
              "url": "media/panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -19.99,
           "hfov": 25.17
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67, this.camera_D37FFFAF_E3B0_A870_41E2_2D667BA80032); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         }
        },
        {
         "rollOverDisplay": true,
         "enabledInCardboard": true,
         "id": "overlay_CE1F0703_DFB7_A6C0_41E9_D6B279C4AED4",
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "width": 231,
              "height": 153,
              "url": "media/panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -22.37,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 14.33,
           "yaw": 165.27,
           "distance": 50
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 165.27,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "width": 24,
              "height": 16,
              "url": "media/panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "pitch": -22.37,
           "hfov": 14.33
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205, this.camera_D3617F98_E3B0_A850_41E7_6116C0B3CD53); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         }
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_C858DC8B_E04E_D00E_41C3_A172CF788B02",
         "items": [
          {
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "width": 480,
              "height": 300,
              "url": "media/panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1_0_HS_4_0.png"
             }
            ],
            "rowCount": 6,
            "frameDuration": 41,
            "class": "AnimatedImageResource",
            "frameCount": 21,
            "colCount": 4
           },
           "pitch": -13.75,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 21.25,
           "yaw": 54.53,
           "distance": 100
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785, this.camera_D3756FBA_E3B0_A850_41EC_752B2EBC7CD1); this.mainPlayList.set('selectedIndex', 31)"
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         }
        }
       ]
      }
     ],
     "id": "panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1",
     "hfovMax": 130,
     "vfov": 180,
     "pitch": 0,
     "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
     "class": "Panorama",
     "hfov": 360,
     "hfovMin": 60,
     "thumbnailUrl": "media/panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1_t.jpg",
     "label": "Lobby"
    },
    "yaw": -3.8,
    "distance": 1,
    "backwardYaw": 165.42
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1",
    "yaw": 97.97,
    "distance": 1,
    "backwardYaw": 157.67
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1",
    "yaw": 98.82,
    "distance": 1,
    "backwardYaw": 157.67
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584",
             "yaw": 7.75,
             "distance": 1,
             "backwardYaw": -96.91
            }
           ],
           "partial": false,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_C5D4611E_DDAE_944D_41C8_5DB5BFCC735A_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "width": 5376,
                "height": 2688,
                "url": "media/panorama_C5D4611E_DDAE_944D_41C8_5DB5BFCC735A_hq.jpeg",
                "tags": "oculusgo"
               },
               {
                "class": "ImageResourceLevel",
                "width": 2048,
                "height": 1024,
                "url": "media/panorama_C5D4611E_DDAE_944D_41C8_5DB5BFCC735A_lq.jpeg",
                "tags": "preload"
               },
               {
                "class": "ImageResourceLevel",
                "width": 4002,
                "height": 2001,
                "url": "media/panorama_C5D4611E_DDAE_944D_41C8_5DB5BFCC735A.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_F875F73D_E05E_700A_4189_35080485A685",
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "width": 480,
                    "height": 300,
                    "url": "media/panorama_C5D4611E_DDAE_944D_41C8_5DB5BFCC735A_0_HS_0_0.png"
                   }
                  ],
                  "rowCount": 6,
                  "frameDuration": 41,
                  "class": "AnimatedImageResource",
                  "frameCount": 21,
                  "colCount": 4
                 },
                 "pitch": -8.28,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 21.65,
                 "yaw": 7.75,
                 "distance": 100
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584, this.camera_CC1C8DCD_E3B0_A830_41E2_9C6F3EDB5E96); this.mainPlayList.set('selectedIndex', 17)"
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               }
              }
             ]
            }
           ],
           "id": "panorama_C5D4611E_DDAE_944D_41C8_5DB5BFCC735A",
           "hfovMax": 130,
           "vfov": 180,
           "pitch": 0,
           "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
           "class": "Panorama",
           "hfov": 360,
           "hfovMin": 60,
           "thumbnailUrl": "media/panorama_C5D4611E_DDAE_944D_41C8_5DB5BFCC735A_t.jpg",
           "label": "Exteriors"
          },
          "yaw": -96.91,
          "distance": 1,
          "backwardYaw": 7.75
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584",
             "yaw": 39.19,
             "distance": 1,
             "backwardYaw": -62.89
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_CAC34B9F_DDB2_B44B_41E8_88BBF20A62BF",
                      "yaw": 85.82,
                      "distance": 1,
                      "backwardYaw": -95.54
                     },
                     {
                      "class": "AdjacentPanorama",
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "class": "AdjacentPanorama",
                         "panorama": "this.panorama_CAC2A28C_DDB2_944D_41D6_C8F69D658B13",
                         "yaw": 70.33,
                         "distance": 1,
                         "backwardYaw": -68.51
                        },
                        {
                         "class": "AdjacentPanorama",
                         "panorama": {
                          "adjacentPanoramas": [
                           {
                            "class": "AdjacentPanorama",
                            "panorama": {
                             "adjacentPanoramas": [
                              {
                               "class": "AdjacentPanorama",
                               "panorama": {
                                "adjacentPanoramas": [
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": {
                                   "adjacentPanoramas": [
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": "this.panorama_CADC0CFE_DDAD_8DCD_41E9_12A06B7F42D3",
                                     "yaw": 50.13,
                                     "distance": 1,
                                     "backwardYaw": -22.18
                                    },
                                    {
                                     "class": "AdjacentPanorama",
                                     "panorama": {
                                      "adjacentPanoramas": [
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": "this.panorama_CADDC27B_DDAD_94CB_41DB_BCD42BD932EE",
                                        "yaw": 89.77,
                                        "distance": 1,
                                        "backwardYaw": -68.66
                                       },
                                       {
                                        "class": "AdjacentPanorama",
                                        "panorama": {
                                         "adjacentPanoramas": [
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584",
                                           "yaw": -84.61,
                                           "distance": 1,
                                           "backwardYaw": 115.44
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": {
                                            "adjacentPanoramas": [
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584"
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A",
                                              "yaw": -45.42,
                                              "distance": 1,
                                              "backwardYaw": 113.92
                                             },
                                             {
                                              "class": "AdjacentPanorama",
                                              "panorama": "this.panorama_CADBCBC2_DDAD_9435_41B7_CC92B1FC3646",
                                              "yaw": 92.96,
                                              "distance": 1,
                                              "backwardYaw": -19.44
                                             }
                                            ],
                                            "partial": false,
                                            "frames": [
                                             {
                                              "class": "SphericPanoramaFrame",
                                              "thumbnailUrl": "media/panorama_CADC01B2_DDAE_7455_41BB_4C410595CF44_t.jpg",
                                              "sphere": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "width": 5376,
                                                 "height": 2688,
                                                 "url": "media/panorama_CADC01B2_DDAE_7455_41BB_4C410595CF44_hq.jpeg",
                                                 "tags": "oculusgo"
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "width": 2048,
                                                 "height": 1024,
                                                 "url": "media/panorama_CADC01B2_DDAE_7455_41BB_4C410595CF44_lq.jpeg",
                                                 "tags": "preload"
                                                },
                                                {
                                                 "class": "ImageResourceLevel",
                                                 "width": 4002,
                                                 "height": 2001,
                                                 "url": "media/panorama_CADC01B2_DDAE_7455_41BB_4C410595CF44.jpeg"
                                                }
                                               ]
                                              },
                                              "overlays": [
                                               {
                                                "rollOverDisplay": false,
                                                "enabledInCardboard": true,
                                                "id": "overlay_FA19F5AB_E046_D00E_41E0_05FBFADBCF85",
                                                "items": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "width": 480,
                                                     "height": 300,
                                                     "url": "media/panorama_CADC01B2_DDAE_7455_41BB_4C410595CF44_0_HS_0_0.png"
                                                    }
                                                   ],
                                                   "rowCount": 6,
                                                   "frameDuration": 41,
                                                   "class": "AnimatedImageResource",
                                                   "frameCount": 21,
                                                   "colCount": 4
                                                  },
                                                  "pitch": -13.75,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "hfov": 21.25,
                                                  "yaw": -45.42,
                                                  "distance": 100
                                                 }
                                                ],
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [],
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "image",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A, this.camera_D3D5FE7B_E3B0_A8D0_41E9_811147726239); this.mainPlayList.set('selectedIndex', 18)"
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "data": {
                                                 "label": "Image"
                                                }
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "enabledInCardboard": true,
                                                "id": "overlay_FB189BAE_E045_D006_41DB_7C19008C206C",
                                                "items": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "width": 480,
                                                     "height": 300,
                                                     "url": "media/panorama_CADC01B2_DDAE_7455_41BB_4C410595CF44_0_HS_1_0.png"
                                                    }
                                                   ],
                                                   "rowCount": 6,
                                                   "frameDuration": 41,
                                                   "class": "AnimatedImageResource",
                                                   "frameCount": 21,
                                                   "colCount": 4
                                                  },
                                                  "pitch": -9.04,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "hfov": 21.6,
                                                  "yaw": -116.81,
                                                  "distance": 100
                                                 }
                                                ],
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [],
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "image",
                                                  "click": "this.mainPlayList.set('selectedIndex', 17)"
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "data": {
                                                 "label": "Image"
                                                }
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "enabledInCardboard": true,
                                                "id": "overlay_FAB68207_E04A_B006_41E4_B256731AA717",
                                                "items": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "class": "ImageResourceLevel",
                                                     "width": 480,
                                                     "height": 300,
                                                     "url": "media/panorama_CADC01B2_DDAE_7455_41BB_4C410595CF44_0_HS_2_0.png"
                                                    }
                                                   ],
                                                   "rowCount": 6,
                                                   "frameDuration": 41,
                                                   "class": "AnimatedImageResource",
                                                   "frameCount": 21,
                                                   "colCount": 4
                                                  },
                                                  "pitch": -14.81,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "hfov": 21.15,
                                                  "yaw": 92.96,
                                                  "distance": 100
                                                 }
                                                ],
                                                "class": "HotspotPanoramaOverlay",
                                                "maps": [],
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "image",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_CADBCBC2_DDAD_9435_41B7_CC92B1FC3646, this.camera_D3E90E86_E3B0_A830_41D7_B3D3DC3C8738); this.mainPlayList.set('selectedIndex', 20)"
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "data": {
                                                 "label": "Image"
                                                }
                                               }
                                              ]
                                             }
                                            ],
                                            "id": "panorama_CADC01B2_DDAE_7455_41BB_4C410595CF44",
                                            "hfovMax": 130,
                                            "vfov": 180,
                                            "pitch": 0,
                                            "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                                            "class": "Panorama",
                                            "hfov": 360,
                                            "hfovMin": 60,
                                            "thumbnailUrl": "media/panorama_CADC01B2_DDAE_7455_41BB_4C410595CF44_t.jpg",
                                            "label": "Exteriors"
                                           },
                                           "yaw": -19.44,
                                           "distance": 1,
                                           "backwardYaw": 92.96
                                          },
                                          {
                                           "class": "AdjacentPanorama",
                                           "panorama": "this.panorama_CADE77AE_DDAD_9C4D_41D1_FF92D176B50E",
                                           "yaw": 90.84,
                                           "distance": 1,
                                           "backwardYaw": -48.3
                                          }
                                         ],
                                         "partial": false,
                                         "frames": [
                                          {
                                           "class": "SphericPanoramaFrame",
                                           "thumbnailUrl": "media/panorama_CADBCBC2_DDAD_9435_41B7_CC92B1FC3646_t.jpg",
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "class": "ImageResourceLevel",
                                              "width": 5376,
                                              "height": 2688,
                                              "url": "media/panorama_CADBCBC2_DDAD_9435_41B7_CC92B1FC3646_hq.jpeg",
                                              "tags": "oculusgo"
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "width": 2048,
                                              "height": 1024,
                                              "url": "media/panorama_CADBCBC2_DDAD_9435_41B7_CC92B1FC3646_lq.jpeg",
                                              "tags": "preload"
                                             },
                                             {
                                              "class": "ImageResourceLevel",
                                              "width": 4002,
                                              "height": 2001,
                                              "url": "media/panorama_CADBCBC2_DDAD_9435_41B7_CC92B1FC3646.jpeg"
                                             }
                                            ]
                                           },
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
                                             "enabledInCardboard": true,
                                             "id": "overlay_FB06170B_E04A_500E_41E2_169A20975B1A",
                                             "items": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "width": 480,
                                                  "height": 300,
                                                  "url": "media/panorama_CADBCBC2_DDAD_9435_41B7_CC92B1FC3646_0_HS_0_0.png"
                                                 }
                                                ],
                                                "rowCount": 6,
                                                "frameDuration": 41,
                                                "class": "AnimatedImageResource",
                                                "frameCount": 21,
                                                "colCount": 4
                                               },
                                               "pitch": -13.59,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 21.26,
                                               "yaw": -19.44,
                                               "distance": 100
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [],
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "image",
                                               "click": "this.startPanoramaWithCamera(this.panorama_CADC01B2_DDAE_7455_41BB_4C410595CF44, this.camera_D322B002_E3B0_B830_418C_5DA7F104F44F); this.mainPlayList.set('selectedIndex', 19)"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "data": {
                                              "label": "Image"
                                             }
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "enabledInCardboard": true,
                                             "id": "overlay_FBD3D99D_E04A_500A_41E0_B9A28C95CD7D",
                                             "items": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "width": 480,
                                                  "height": 300,
                                                  "url": "media/panorama_CADBCBC2_DDAD_9435_41B7_CC92B1FC3646_0_HS_1_0.png"
                                                 }
                                                ],
                                                "rowCount": 6,
                                                "frameDuration": 41,
                                                "class": "AnimatedImageResource",
                                                "frameCount": 21,
                                                "colCount": 4
                                               },
                                               "pitch": -8.43,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 21.64,
                                               "yaw": -84.61,
                                               "distance": 100
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [],
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "image",
                                               "click": "this.startPanoramaWithCamera(this.panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584, this.camera_D32A6FF6_E3B0_A7D0_41C2_D5EED2CB01B2); this.mainPlayList.set('selectedIndex', 17)"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "data": {
                                              "label": "Image"
                                             }
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "enabledInCardboard": true,
                                             "id": "overlay_FC849574_E04A_F01A_41AB_1C14D65C45EB",
                                             "items": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "class": "ImageResourceLevel",
                                                  "width": 480,
                                                  "height": 300,
                                                  "url": "media/panorama_CADBCBC2_DDAD_9435_41B7_CC92B1FC3646_0_HS_2_0.png"
                                                 }
                                                ],
                                                "rowCount": 6,
                                                "frameDuration": 41,
                                                "class": "AnimatedImageResource",
                                                "frameCount": 21,
                                                "colCount": 4
                                               },
                                               "pitch": -8.89,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "hfov": 21.61,
                                               "yaw": 90.84,
                                               "distance": 100
                                              }
                                             ],
                                             "class": "HotspotPanoramaOverlay",
                                             "maps": [],
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "image",
                                               "click": "this.startPanoramaWithCamera(this.panorama_CADE77AE_DDAD_9C4D_41D1_FF92D176B50E, this.camera_D338300D_E3B0_B830_41D9_35FE034BE8EC); this.mainPlayList.set('selectedIndex', 21)"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "data": {
                                              "label": "Image"
                                             }
                                            }
                                           ]
                                          }
                                         ],
                                         "id": "panorama_CADBCBC2_DDAD_9435_41B7_CC92B1FC3646",
                                         "hfovMax": 130,
                                         "vfov": 180,
                                         "pitch": 0,
                                         "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                                         "class": "Panorama",
                                         "hfov": 360,
                                         "hfovMin": 60,
                                         "thumbnailUrl": "media/panorama_CADBCBC2_DDAD_9435_41B7_CC92B1FC3646_t.jpg",
                                         "label": "Exteriors"
                                        },
                                        "yaw": -48.3,
                                        "distance": 1,
                                        "backwardYaw": 90.84
                                       }
                                      ],
                                      "partial": false,
                                      "frames": [
                                       {
                                        "class": "SphericPanoramaFrame",
                                        "thumbnailUrl": "media/panorama_CADE77AE_DDAD_9C4D_41D1_FF92D176B50E_t.jpg",
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "class": "ImageResourceLevel",
                                           "width": 5376,
                                           "height": 2688,
                                           "url": "media/panorama_CADE77AE_DDAD_9C4D_41D1_FF92D176B50E_hq.jpeg",
                                           "tags": "oculusgo"
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "width": 2048,
                                           "height": 1024,
                                           "url": "media/panorama_CADE77AE_DDAD_9C4D_41D1_FF92D176B50E_lq.jpeg",
                                           "tags": "preload"
                                          },
                                          {
                                           "class": "ImageResourceLevel",
                                           "width": 4002,
                                           "height": 2001,
                                           "url": "media/panorama_CADE77AE_DDAD_9C4D_41D1_FF92D176B50E.jpeg"
                                          }
                                         ]
                                        },
                                        "overlays": [
                                         {
                                          "rollOverDisplay": false,
                                          "enabledInCardboard": true,
                                          "id": "overlay_FC56E47B_E04D_D00E_41BA_9932C95D99CC",
                                          "items": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "width": 480,
                                               "height": 300,
                                               "url": "media/panorama_CADE77AE_DDAD_9C4D_41D1_FF92D176B50E_0_HS_0_0.png"
                                              }
                                             ],
                                             "rowCount": 6,
                                             "frameDuration": 41,
                                             "class": "AnimatedImageResource",
                                             "frameCount": 21,
                                             "colCount": 4
                                            },
                                            "pitch": -9.8,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 21.55,
                                            "yaw": -48.3,
                                            "distance": 100
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [],
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "image",
                                            "click": "this.startPanoramaWithCamera(this.panorama_CADBCBC2_DDAD_9435_41B7_CC92B1FC3646, this.camera_D4F16B5E_E3B0_A8D0_41CA_22006BF8FD54); this.mainPlayList.set('selectedIndex', 20)"
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "data": {
                                           "label": "Image"
                                          }
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "enabledInCardboard": true,
                                          "id": "overlay_FF05D595_E04E_701A_41C8_39FA75989E15",
                                          "items": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "class": "ImageResourceLevel",
                                               "width": 480,
                                               "height": 300,
                                               "url": "media/panorama_CADE77AE_DDAD_9C4D_41D1_FF92D176B50E_0_HS_1_0.png"
                                              }
                                             ],
                                             "rowCount": 6,
                                             "frameDuration": 41,
                                             "class": "AnimatedImageResource",
                                             "frameCount": 21,
                                             "colCount": 4
                                            },
                                            "pitch": -6.76,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "hfov": 21.72,
                                            "yaw": 89.77,
                                            "distance": 100
                                           }
                                          ],
                                          "class": "HotspotPanoramaOverlay",
                                          "maps": [],
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "image",
                                            "click": "this.startPanoramaWithCamera(this.panorama_CADDC27B_DDAD_94CB_41DB_BCD42BD932EE, this.camera_D4F84B4E_E3B0_A830_41E7_E70523C63845); this.mainPlayList.set('selectedIndex', 22)"
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "data": {
                                           "label": "Image"
                                          }
                                         }
                                        ]
                                       }
                                      ],
                                      "id": "panorama_CADE77AE_DDAD_9C4D_41D1_FF92D176B50E",
                                      "hfovMax": 130,
                                      "vfov": 180,
                                      "pitch": 0,
                                      "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                                      "class": "Panorama",
                                      "hfov": 360,
                                      "hfovMin": 60,
                                      "thumbnailUrl": "media/panorama_CADE77AE_DDAD_9C4D_41D1_FF92D176B50E_t.jpg",
                                      "label": "Exteriors"
                                     },
                                     "yaw": -68.66,
                                     "distance": 1,
                                     "backwardYaw": 89.77
                                    }
                                   ],
                                   "partial": false,
                                   "frames": [
                                    {
                                     "class": "SphericPanoramaFrame",
                                     "thumbnailUrl": "media/panorama_CADDC27B_DDAD_94CB_41DB_BCD42BD932EE_t.jpg",
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "class": "ImageResourceLevel",
                                        "width": 5376,
                                        "height": 2688,
                                        "url": "media/panorama_CADDC27B_DDAD_94CB_41DB_BCD42BD932EE_hq.jpeg",
                                        "tags": "oculusgo"
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "width": 2048,
                                        "height": 1024,
                                        "url": "media/panorama_CADDC27B_DDAD_94CB_41DB_BCD42BD932EE_lq.jpeg",
                                        "tags": "preload"
                                       },
                                       {
                                        "class": "ImageResourceLevel",
                                        "width": 4002,
                                        "height": 2001,
                                        "url": "media/panorama_CADDC27B_DDAD_94CB_41DB_BCD42BD932EE.jpeg"
                                       }
                                      ]
                                     },
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "id": "overlay_FD4544D7_E04E_B006_41E7_4768AE8B92E4",
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "width": 480,
                                            "height": 300,
                                            "url": "media/panorama_CADDC27B_DDAD_94CB_41DB_BCD42BD932EE_0_HS_0_0.png"
                                           }
                                          ],
                                          "rowCount": 6,
                                          "frameDuration": 41,
                                          "class": "AnimatedImageResource",
                                          "frameCount": 21,
                                          "colCount": 4
                                         },
                                         "pitch": -9.04,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 21.6,
                                         "yaw": -68.66,
                                         "distance": 100
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [],
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "image",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CADE77AE_DDAD_9C4D_41D1_FF92D176B50E, this.camera_D3475F6A_E3B0_A8F0_41EA_B1A599BBFEAA); this.mainPlayList.set('selectedIndex', 21)"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "data": {
                                        "label": "Image"
                                       }
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "id": "overlay_FDA4F90C_E04F_D00A_41B8_F8709F961F3B",
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "class": "ImageResourceLevel",
                                            "width": 480,
                                            "height": 300,
                                            "url": "media/panorama_CADDC27B_DDAD_94CB_41DB_BCD42BD932EE_0_HS_1_0.png"
                                           }
                                          ],
                                          "rowCount": 6,
                                          "frameDuration": 41,
                                          "class": "AnimatedImageResource",
                                          "frameCount": 21,
                                          "colCount": 4
                                         },
                                         "pitch": -4.78,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "hfov": 21.8,
                                         "yaw": 50.13,
                                         "distance": 100
                                        }
                                       ],
                                       "class": "HotspotPanoramaOverlay",
                                       "maps": [],
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "image",
                                         "click": "this.startPanoramaWithCamera(this.panorama_CADC0CFE_DDAD_8DCD_41E9_12A06B7F42D3, this.camera_D3413F5E_E3B0_A8D0_41E3_983EA5D21748); this.mainPlayList.set('selectedIndex', 23)"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "data": {
                                        "label": "Image"
                                       }
                                      }
                                     ]
                                    }
                                   ],
                                   "id": "panorama_CADDC27B_DDAD_94CB_41DB_BCD42BD932EE",
                                   "hfovMax": 130,
                                   "vfov": 180,
                                   "pitch": 0,
                                   "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                                   "class": "Panorama",
                                   "hfov": 360,
                                   "hfovMin": 60,
                                   "thumbnailUrl": "media/panorama_CADDC27B_DDAD_94CB_41DB_BCD42BD932EE_t.jpg",
                                   "label": "Exteriors"
                                  },
                                  "yaw": -22.18,
                                  "distance": 1,
                                  "backwardYaw": 50.13
                                 },
                                 {
                                  "class": "AdjacentPanorama",
                                  "panorama": "this.panorama_CAC1F537_DDB2_7C5B_41C4_AAA50F947CE5",
                                  "yaw": 102.68,
                                  "distance": 1,
                                  "backwardYaw": -86.43
                                 }
                                ],
                                "partial": false,
                                "frames": [
                                 {
                                  "class": "SphericPanoramaFrame",
                                  "thumbnailUrl": "media/panorama_CADC0CFE_DDAD_8DCD_41E9_12A06B7F42D3_t.jpg",
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "class": "ImageResourceLevel",
                                     "width": 5376,
                                     "height": 2688,
                                     "url": "media/panorama_CADC0CFE_DDAD_8DCD_41E9_12A06B7F42D3_hq.jpeg",
                                     "tags": "oculusgo"
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "width": 2048,
                                     "height": 1024,
                                     "url": "media/panorama_CADC0CFE_DDAD_8DCD_41E9_12A06B7F42D3_lq.jpeg",
                                     "tags": "preload"
                                    },
                                    {
                                     "class": "ImageResourceLevel",
                                     "width": 4002,
                                     "height": 2001,
                                     "url": "media/panorama_CADC0CFE_DDAD_8DCD_41E9_12A06B7F42D3.jpeg"
                                    }
                                   ]
                                  },
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "id": "overlay_FDEBB5E4_E04E_B03A_41D2_D313E437A9EA",
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "width": 480,
                                         "height": 300,
                                         "url": "media/panorama_CADC0CFE_DDAD_8DCD_41E9_12A06B7F42D3_0_HS_0_0.png"
                                        }
                                       ],
                                       "rowCount": 6,
                                       "frameDuration": 41,
                                       "class": "AnimatedImageResource",
                                       "frameCount": 21,
                                       "colCount": 4
                                      },
                                      "pitch": -5.85,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 21.76,
                                      "yaw": -22.18,
                                      "distance": 100
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [],
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "image",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CADDC27B_DDAD_94CB_41DB_BCD42BD932EE, this.camera_D4625BE0_E3B0_AFF0_41E0_929C7EE7880B); this.mainPlayList.set('selectedIndex', 22)"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    }
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "id": "overlay_C09A35CE_E04E_5006_41DF_C33A63858E5E",
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "class": "ImageResourceLevel",
                                         "width": 480,
                                         "height": 300,
                                         "url": "media/panorama_CADC0CFE_DDAD_8DCD_41E9_12A06B7F42D3_0_HS_1_0.png"
                                        }
                                       ],
                                       "rowCount": 6,
                                       "frameDuration": 41,
                                       "class": "AnimatedImageResource",
                                       "frameCount": 21,
                                       "colCount": 4
                                      },
                                      "pitch": -11.32,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "hfov": 21.45,
                                      "yaw": 102.68,
                                      "distance": 100
                                     }
                                    ],
                                    "class": "HotspotPanoramaOverlay",
                                    "maps": [],
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "image",
                                      "click": "this.startPanoramaWithCamera(this.panorama_CAC1F537_DDB2_7C5B_41C4_AAA50F947CE5, this.camera_D47B5BEC_E3B0_AFF0_41D1_E1C9D794DD6B); this.mainPlayList.set('selectedIndex', 24)"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "data": {
                                     "label": "Image"
                                    }
                                   }
                                  ]
                                 }
                                ],
                                "id": "panorama_CADC0CFE_DDAD_8DCD_41E9_12A06B7F42D3",
                                "hfovMax": 130,
                                "vfov": 180,
                                "pitch": 0,
                                "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                                "class": "Panorama",
                                "hfov": 360,
                                "hfovMin": 60,
                                "thumbnailUrl": "media/panorama_CADC0CFE_DDAD_8DCD_41E9_12A06B7F42D3_t.jpg",
                                "label": "Exteriors"
                               },
                               "yaw": -86.43,
                               "distance": 1,
                               "backwardYaw": 102.68
                              },
                              {
                               "class": "AdjacentPanorama",
                               "panorama": "this.panorama_CAC23F83_DDB2_8C3B_41C4_3093907CC858",
                               "yaw": 54.68,
                               "distance": 1,
                               "backwardYaw": -51.04
                              }
                             ],
                             "partial": false,
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_CAC1F537_DDB2_7C5B_41C4_AAA50F947CE5_t.jpg",
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "class": "ImageResourceLevel",
                                  "width": 5376,
                                  "height": 2688,
                                  "url": "media/panorama_CAC1F537_DDB2_7C5B_41C4_AAA50F947CE5_hq.jpeg",
                                  "tags": "oculusgo"
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "width": 2048,
                                  "height": 1024,
                                  "url": "media/panorama_CAC1F537_DDB2_7C5B_41C4_AAA50F947CE5_lq.jpeg",
                                  "tags": "preload"
                                 },
                                 {
                                  "class": "ImageResourceLevel",
                                  "width": 4002,
                                  "height": 2001,
                                  "url": "media/panorama_CAC1F537_DDB2_7C5B_41C4_AAA50F947CE5.jpeg"
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "id": "overlay_FF0C9B21_E04D_D03A_41E9_083B84639049",
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "width": 480,
                                      "height": 300,
                                      "url": "media/panorama_CAC1F537_DDB2_7C5B_41C4_AAA50F947CE5_0_HS_0_0.png"
                                     }
                                    ],
                                    "rowCount": 6,
                                    "frameDuration": 41,
                                    "class": "AnimatedImageResource",
                                    "frameCount": 21,
                                    "colCount": 4
                                   },
                                   "pitch": -7.06,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 21.71,
                                   "yaw": -86.43,
                                   "distance": 100
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [],
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "image",
                                   "click": "this.startPanoramaWithCamera(this.panorama_CADC0CFE_DDAD_8DCD_41E9_12A06B7F42D3, this.camera_D35E5F75_E3B0_A8D0_41DC_21F13E458C69); this.mainPlayList.set('selectedIndex', 23)"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 }
                                },
                                {
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "id": "overlay_C17E7810_E04A_B01B_41E5_C840AC57E0E2",
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "class": "ImageResourceLevel",
                                      "width": 480,
                                      "height": 300,
                                      "url": "media/panorama_CAC1F537_DDB2_7C5B_41C4_AAA50F947CE5_0_HS_1_0.png"
                                     }
                                    ],
                                    "rowCount": 6,
                                    "frameDuration": 41,
                                    "class": "AnimatedImageResource",
                                    "frameCount": 21,
                                    "colCount": 4
                                   },
                                   "pitch": -14.96,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "hfov": 21.13,
                                   "yaw": 54.68,
                                   "distance": 100
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "maps": [],
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "image",
                                   "click": "this.startPanoramaWithCamera(this.panorama_CAC23F83_DDB2_8C3B_41C4_3093907CC858, this.camera_D3533F81_E3B0_A830_41E1_BA2A3B5A2CA2); this.mainPlayList.set('selectedIndex', 25)"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "data": {
                                  "label": "Image"
                                 }
                                }
                               ]
                              }
                             ],
                             "id": "panorama_CAC1F537_DDB2_7C5B_41C4_AAA50F947CE5",
                             "hfovMax": 130,
                             "vfov": 180,
                             "pitch": 0,
                             "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                             "class": "Panorama",
                             "hfov": 360,
                             "hfovMin": 60,
                             "thumbnailUrl": "media/panorama_CAC1F537_DDB2_7C5B_41C4_AAA50F947CE5_t.jpg",
                             "label": "Exteriors"
                            },
                            "yaw": -51.04,
                            "distance": 1,
                            "backwardYaw": 54.68
                           },
                           {
                            "class": "AdjacentPanorama",
                            "panorama": "this.panorama_CAC43919_DDB2_9457_41CC_D3D70954931A",
                            "yaw": 77.32,
                            "distance": 1,
                            "backwardYaw": -82.03
                           }
                          ],
                          "partial": false,
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_CAC23F83_DDB2_8C3B_41C4_3093907CC858_t.jpg",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "class": "ImageResourceLevel",
                               "width": 5376,
                               "height": 2688,
                               "url": "media/panorama_CAC23F83_DDB2_8C3B_41C4_3093907CC858_hq.jpeg",
                               "tags": "oculusgo"
                              },
                              {
                               "class": "ImageResourceLevel",
                               "width": 2048,
                               "height": 1024,
                               "url": "media/panorama_CAC23F83_DDB2_8C3B_41C4_3093907CC858_lq.jpeg",
                               "tags": "preload"
                              },
                              {
                               "class": "ImageResourceLevel",
                               "width": 4002,
                               "height": 2001,
                               "url": "media/panorama_CAC23F83_DDB2_8C3B_41C4_3093907CC858.jpeg"
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "id": "overlay_C01A1B79_E04A_500A_41D4_498A4DEC3F99",
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "width": 480,
                                   "height": 300,
                                   "url": "media/panorama_CAC23F83_DDB2_8C3B_41C4_3093907CC858_0_HS_0_0.png"
                                  }
                                 ],
                                 "rowCount": 6,
                                 "frameDuration": 41,
                                 "class": "AnimatedImageResource",
                                 "frameCount": 21,
                                 "colCount": 4
                                },
                                "pitch": -8.43,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 21.64,
                                "yaw": -51.04,
                                "distance": 100
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "maps": [],
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "image",
                                "click": "this.startPanoramaWithCamera(this.panorama_CAC1F537_DDB2_7C5B_41C4_AAA50F947CE5, this.camera_DBAFECA8_E3B0_A870_41DC_851B7A98D1CB); this.mainPlayList.set('selectedIndex', 24)"
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              }
                             },
                             {
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "id": "overlay_C1ECB806_E04B_B006_41C9_D3D9074D956E",
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "class": "ImageResourceLevel",
                                   "width": 480,
                                   "height": 300,
                                   "url": "media/panorama_CAC23F83_DDB2_8C3B_41C4_3093907CC858_0_HS_1_0.png"
                                  }
                                 ],
                                 "rowCount": 6,
                                 "frameDuration": 41,
                                 "class": "AnimatedImageResource",
                                 "frameCount": 21,
                                 "colCount": 4
                                },
                                "pitch": -7.22,
                                "class": "HotspotPanoramaOverlayImage",
                                "hfov": 21.7,
                                "yaw": 77.32,
                                "distance": 100
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "maps": [],
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "image",
                                "click": "this.startPanoramaWithCamera(this.panorama_CAC43919_DDB2_9457_41CC_D3D70954931A, this.camera_DBBA8CB3_E3B0_A850_41BE_F149A7A41395); this.mainPlayList.set('selectedIndex', 26)"
                               }
                              ],
                              "useHandCursor": true,
                              "data": {
                               "label": "Image"
                              }
                             }
                            ]
                           }
                          ],
                          "id": "panorama_CAC23F83_DDB2_8C3B_41C4_3093907CC858",
                          "hfovMax": 130,
                          "vfov": 180,
                          "pitch": 0,
                          "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                          "class": "Panorama",
                          "hfov": 360,
                          "hfovMin": 60,
                          "thumbnailUrl": "media/panorama_CAC23F83_DDB2_8C3B_41C4_3093907CC858_t.jpg",
                          "label": "Exteriors"
                         },
                         "yaw": -82.03,
                         "distance": 1,
                         "backwardYaw": 77.32
                        }
                       ],
                       "partial": false,
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_CAC43919_DDB2_9457_41CC_D3D70954931A_t.jpg",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "class": "ImageResourceLevel",
                            "width": 5376,
                            "height": 2688,
                            "url": "media/panorama_CAC43919_DDB2_9457_41CC_D3D70954931A_hq.jpeg",
                            "tags": "oculusgo"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "width": 2048,
                            "height": 1024,
                            "url": "media/panorama_CAC43919_DDB2_9457_41CC_D3D70954931A_lq.jpeg",
                            "tags": "preload"
                           },
                           {
                            "class": "ImageResourceLevel",
                            "width": 4002,
                            "height": 2001,
                            "url": "media/panorama_CAC43919_DDB2_9457_41CC_D3D70954931A.jpeg"
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "id": "overlay_C0C91794_E04A_D01A_41E7_E1A5488DFE61",
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "width": 480,
                                "height": 300,
                                "url": "media/panorama_CAC43919_DDB2_9457_41CC_D3D70954931A_0_HS_0_0.png"
                               }
                              ],
                              "rowCount": 6,
                              "frameDuration": 41,
                              "class": "AnimatedImageResource",
                              "frameCount": 21,
                              "colCount": 4
                             },
                             "pitch": -8.28,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 21.65,
                             "yaw": -82.03,
                             "distance": 100
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "maps": [],
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "image",
                             "click": "this.startPanoramaWithCamera(this.panorama_CAC23F83_DDB2_8C3B_41C4_3093907CC858, this.camera_D3AD9F14_E3B0_A850_41D7_ED1F0216AF9B); this.mainPlayList.set('selectedIndex', 25)"
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           }
                          },
                          {
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "id": "overlay_C31B67AC_E04A_500A_41C5_E03DE903EC03",
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "class": "ImageResourceLevel",
                                "width": 480,
                                "height": 300,
                                "url": "media/panorama_CAC43919_DDB2_9457_41CC_D3D70954931A_0_HS_1_0.png"
                               }
                              ],
                              "rowCount": 6,
                              "frameDuration": 41,
                              "class": "AnimatedImageResource",
                              "frameCount": 21,
                              "colCount": 4
                             },
                             "pitch": -5.24,
                             "class": "HotspotPanoramaOverlayImage",
                             "hfov": 21.78,
                             "yaw": 70.33,
                             "distance": 100
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "maps": [],
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "image",
                             "click": "this.startPanoramaWithCamera(this.panorama_CAC2A28C_DDB2_944D_41D6_C8F69D658B13, this.camera_D3A8BF08_E3B0_A830_41E5_2761BE9A7F19); this.mainPlayList.set('selectedIndex', 27)"
                            }
                           ],
                           "useHandCursor": true,
                           "data": {
                            "label": "Image"
                           }
                          }
                         ]
                        }
                       ],
                       "id": "panorama_CAC43919_DDB2_9457_41CC_D3D70954931A",
                       "hfovMax": 130,
                       "vfov": 180,
                       "pitch": 0,
                       "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                       "class": "Panorama",
                       "hfov": 360,
                       "hfovMin": 60,
                       "thumbnailUrl": "media/panorama_CAC43919_DDB2_9457_41CC_D3D70954931A_t.jpg",
                       "label": "Exteriors"
                      },
                      "yaw": -68.51,
                      "distance": 1,
                      "backwardYaw": 70.33
                     }
                    ],
                    "partial": false,
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_CAC2A28C_DDB2_944D_41D6_C8F69D658B13_t.jpg",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "class": "ImageResourceLevel",
                         "width": 5376,
                         "height": 2688,
                         "url": "media/panorama_CAC2A28C_DDB2_944D_41D6_C8F69D658B13_hq.jpeg",
                         "tags": "oculusgo"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "width": 2048,
                         "height": 1024,
                         "url": "media/panorama_CAC2A28C_DDB2_944D_41D6_C8F69D658B13_lq.jpeg",
                         "tags": "preload"
                        },
                        {
                         "class": "ImageResourceLevel",
                         "width": 4002,
                         "height": 2001,
                         "url": "media/panorama_CAC2A28C_DDB2_944D_41D6_C8F69D658B13.jpeg"
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "id": "overlay_C1F2348B_E046_F00E_41C5_2CEFEA5C277A",
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "width": 480,
                             "height": 300,
                             "url": "media/panorama_CAC2A28C_DDB2_944D_41D6_C8F69D658B13_0_HS_0_0.png"
                            }
                           ],
                           "rowCount": 6,
                           "frameDuration": 41,
                           "class": "AnimatedImageResource",
                           "frameCount": 21,
                           "colCount": 4
                          },
                          "pitch": -7.52,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 21.69,
                          "yaw": -68.51,
                          "distance": 100
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_CAC43919_DDB2_9457_41CC_D3D70954931A, this.camera_D43C3C32_E3B0_A850_41E1_E458E4A17230); this.mainPlayList.set('selectedIndex', 26)"
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        }
                       },
                       {
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "id": "overlay_C1E7DE90_E047_B01A_41E1_57941AB53AC3",
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "class": "ImageResourceLevel",
                             "width": 480,
                             "height": 300,
                             "url": "media/panorama_CAC2A28C_DDB2_944D_41D6_C8F69D658B13_0_HS_1_0.png"
                            }
                           ],
                           "rowCount": 6,
                           "frameDuration": 41,
                           "class": "AnimatedImageResource",
                           "frameCount": 21,
                           "colCount": 4
                          },
                          "pitch": -9.04,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 21.6,
                          "yaw": 85.82,
                          "distance": 100
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "maps": [],
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "image",
                          "click": "this.startPanoramaWithCamera(this.panorama_CAC34B9F_DDB2_B44B_41E8_88BBF20A62BF, this.camera_D421AC26_E3B0_A870_41E1_BC7A0AC0DE66); this.mainPlayList.set('selectedIndex', 28)"
                         }
                        ],
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        }
                       }
                      ]
                     }
                    ],
                    "id": "panorama_CAC2A28C_DDB2_944D_41D6_C8F69D658B13",
                    "hfovMax": 130,
                    "vfov": 180,
                    "pitch": 0,
                    "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                    "class": "Panorama",
                    "hfov": 360,
                    "hfovMin": 60,
                    "thumbnailUrl": "media/panorama_CAC2A28C_DDB2_944D_41D6_C8F69D658B13_t.jpg",
                    "label": "Exteriors"
                   },
                   "yaw": -95.54,
                   "distance": 1,
                   "backwardYaw": 85.82
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_CAC16582_DDB2_7C35_41C1_C81F659D1B46",
                   "yaw": 24,
                   "distance": 1,
                   "backwardYaw": -27.04
                  }
                 ],
                 "partial": false,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_CAC34B9F_DDB2_B44B_41E8_88BBF20A62BF_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "width": 5376,
                      "height": 2688,
                      "url": "media/panorama_CAC34B9F_DDB2_B44B_41E8_88BBF20A62BF_hq.jpeg",
                      "tags": "oculusgo"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "width": 2048,
                      "height": 1024,
                      "url": "media/panorama_CAC34B9F_DDB2_B44B_41E8_88BBF20A62BF_lq.jpeg",
                      "tags": "preload"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "width": 4002,
                      "height": 2001,
                      "url": "media/panorama_CAC34B9F_DDB2_B44B_41E8_88BBF20A62BF.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_C239A5C9_E046_700A_41D6_44C1F1D699C9",
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "width": 480,
                          "height": 300,
                          "url": "media/panorama_CAC34B9F_DDB2_B44B_41E8_88BBF20A62BF_0_HS_0_0.png"
                         }
                        ],
                        "rowCount": 6,
                        "frameDuration": 41,
                        "class": "AnimatedImageResource",
                        "frameCount": 21,
                        "colCount": 4
                       },
                       "pitch": -11.77,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 21.41,
                       "yaw": -95.54,
                       "distance": 100
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_CAC2A28C_DDB2_944D_41D6_C8F69D658B13, this.camera_D4488BB2_E3B0_A850_41E8_FEFE57487F5A); this.mainPlayList.set('selectedIndex', 27)"
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     }
                    },
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_C2ED9201_E046_B3FA_41E5_71AC6AECDC9C",
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "width": 480,
                          "height": 300,
                          "url": "media/panorama_CAC34B9F_DDB2_B44B_41E8_88BBF20A62BF_0_HS_1_0.png"
                         }
                        ],
                        "rowCount": 6,
                        "frameDuration": 41,
                        "class": "AnimatedImageResource",
                        "frameCount": 21,
                        "colCount": 4
                       },
                       "pitch": -8.43,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 21.64,
                       "yaw": 24,
                       "distance": 100
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_CAC16582_DDB2_7C35_41C1_C81F659D1B46, this.camera_D4438BBE_E3B0_A850_41BF_5451F848F7C6); this.mainPlayList.set('selectedIndex', 29)"
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     }
                    }
                   ]
                  }
                 ],
                 "id": "panorama_CAC34B9F_DDB2_B44B_41E8_88BBF20A62BF",
                 "hfovMax": 130,
                 "vfov": 180,
                 "pitch": 0,
                 "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                 "class": "Panorama",
                 "hfov": 360,
                 "hfovMin": 60,
                 "thumbnailUrl": "media/panorama_CAC34B9F_DDB2_B44B_41E8_88BBF20A62BF_t.jpg",
                 "label": "Exteriors"
                },
                "yaw": -27.04,
                "distance": 1,
                "backwardYaw": 24
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_CAC2DE39_DDB3_8C57_41EA_CC36B38734DC",
                "yaw": 73.67,
                "distance": 1,
                "backwardYaw": -48.91
               }
              ],
              "partial": false,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_CAC16582_DDB2_7C35_41C1_C81F659D1B46_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "width": 5376,
                   "height": 2688,
                   "url": "media/panorama_CAC16582_DDB2_7C35_41C1_C81F659D1B46_hq.jpeg",
                   "tags": "oculusgo"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "width": 2048,
                   "height": 1024,
                   "url": "media/panorama_CAC16582_DDB2_7C35_41C1_C81F659D1B46_lq.jpeg",
                   "tags": "preload"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "height": 2001,
                   "url": "media/panorama_CAC16582_DDB2_7C35_41C1_C81F659D1B46.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_C2B8C1A2_E045_F03E_41C6_2091F8A4D26B",
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "width": 480,
                       "height": 300,
                       "url": "media/panorama_CAC16582_DDB2_7C35_41C1_C81F659D1B46_0_HS_0_0.png"
                      }
                     ],
                     "rowCount": 6,
                     "frameDuration": 41,
                     "class": "AnimatedImageResource",
                     "frameCount": 21,
                     "colCount": 4
                    },
                    "pitch": -4.48,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 21.81,
                    "yaw": -27.04,
                    "distance": 100
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_CAC34B9F_DDB2_B44B_41E8_88BBF20A62BF, this.camera_D566CA63_E3B0_A8F0_41C4_8805A7642BED); this.mainPlayList.set('selectedIndex', 28)"
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  }
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_C2CB0829_E07A_D00A_41DE_5DBCA67F3AAD",
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "width": 480,
                       "height": 300,
                       "url": "media/panorama_CAC16582_DDB2_7C35_41C1_C81F659D1B46_0_HS_1_0.png"
                      }
                     ],
                     "rowCount": 6,
                     "frameDuration": 41,
                     "class": "AnimatedImageResource",
                     "frameCount": 21,
                     "colCount": 4
                    },
                    "pitch": -6.76,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 21.72,
                    "yaw": 73.67,
                    "distance": 100
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_CAC2DE39_DDB3_8C57_41EA_CC36B38734DC, this.camera_D57EDA7A_E3B0_A8D0_41D9_6B4BA62142AE); this.mainPlayList.set('selectedIndex', 30)"
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  }
                 }
                ]
               }
              ],
              "id": "panorama_CAC16582_DDB2_7C35_41C1_C81F659D1B46",
              "hfovMax": 130,
              "vfov": 180,
              "pitch": 0,
              "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
              "class": "Panorama",
              "hfov": 360,
              "hfovMin": 60,
              "thumbnailUrl": "media/panorama_CAC16582_DDB2_7C35_41C1_C81F659D1B46_t.jpg",
              "label": "Exteriors"
             },
             "yaw": -48.91,
             "distance": 1,
             "backwardYaw": 73.67
            }
           ],
           "partial": false,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_CAC2DE39_DDB3_8C57_41EA_CC36B38734DC_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "width": 5376,
                "height": 2688,
                "url": "media/panorama_CAC2DE39_DDB3_8C57_41EA_CC36B38734DC_hq.jpeg",
                "tags": "oculusgo"
               },
               {
                "class": "ImageResourceLevel",
                "width": 2048,
                "height": 1024,
                "url": "media/panorama_CAC2DE39_DDB3_8C57_41EA_CC36B38734DC_lq.jpeg",
                "tags": "preload"
               },
               {
                "class": "ImageResourceLevel",
                "width": 4002,
                "height": 2001,
                "url": "media/panorama_CAC2DE39_DDB3_8C57_41EA_CC36B38734DC.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_C3168806_E07B_B006_41E2_11D6567E3F48",
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "width": 480,
                    "height": 300,
                    "url": "media/panorama_CAC2DE39_DDB3_8C57_41EA_CC36B38734DC_0_HS_0_0.png"
                   }
                  ],
                  "rowCount": 6,
                  "frameDuration": 41,
                  "class": "AnimatedImageResource",
                  "frameCount": 21,
                  "colCount": 4
                 },
                 "pitch": -9.95,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 21.54,
                 "yaw": -48.91,
                 "distance": 100
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_CAC16582_DDB2_7C35_41C1_C81F659D1B46, this.camera_D314DFEA_E3B0_A7F0_41E7_4B3845FA202A); this.mainPlayList.set('selectedIndex', 29)"
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               }
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_C4C7FED7_E07D_B006_41B9_3D8F0F2C8520",
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "width": 480,
                    "height": 300,
                    "url": "media/panorama_CAC2DE39_DDB3_8C57_41EA_CC36B38734DC_0_HS_1_0.png"
                   }
                  ],
                  "rowCount": 6,
                  "frameDuration": 41,
                  "class": "AnimatedImageResource",
                  "frameCount": 21,
                  "colCount": 4
                 },
                 "pitch": -5.09,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 21.79,
                 "yaw": 39.19,
                 "distance": 100
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584, this.camera_D31CCFDD_E3B0_A7D0_41E0_533C6E7920FF); this.mainPlayList.set('selectedIndex', 17)"
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               }
              }
             ]
            }
           ],
           "id": "panorama_CAC2DE39_DDB3_8C57_41EA_CC36B38734DC",
           "hfovMax": 130,
           "vfov": 180,
           "pitch": 0,
           "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
           "class": "Panorama",
           "hfov": 360,
           "hfovMin": 60,
           "thumbnailUrl": "media/panorama_CAC2DE39_DDB3_8C57_41EA_CC36B38734DC_t.jpg",
           "label": "Exteriors"
          },
          "yaw": -62.89,
          "distance": 1,
          "backwardYaw": 39.19
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A",
          "yaw": 53.62,
          "distance": 1,
          "backwardYaw": -139.14
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_CADBCBC2_DDAD_9435_41B7_CC92B1FC3646",
          "yaw": 115.44,
          "distance": 1,
          "backwardYaw": -84.61
         }
        ],
        "partial": false,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "width": 5376,
             "height": 2688,
             "url": "media/panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584_hq.jpeg",
             "tags": "oculusgo"
            },
            {
             "class": "ImageResourceLevel",
             "width": 2048,
             "height": 1024,
             "url": "media/panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584_lq.jpeg",
             "tags": "preload"
            },
            {
             "class": "ImageResourceLevel",
             "width": 4002,
             "height": 2001,
             "url": "media/panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_F7DF63BB_E05A_500E_41D5_BD5CD57D974E",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 480,
                 "height": 300,
                 "url": "media/panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584_0_HS_0_0.png"
                }
               ],
               "rowCount": 6,
               "frameDuration": 41,
               "class": "AnimatedImageResource",
               "frameCount": 21,
               "colCount": 4
              },
              "pitch": -16.94,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 20.92,
              "yaw": 53.62,
              "distance": 100
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A, this.camera_DBD72C61_E3B0_A8F0_41C4_0D9C171D1D45); this.mainPlayList.set('selectedIndex', 18)"
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            }
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_F8B870F4_E05A_501A_41A7_1124FBC43B24",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 480,
                 "height": 300,
                 "url": "media/panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584_0_HS_1_0.png"
                }
               ],
               "rowCount": 6,
               "frameDuration": 41,
               "class": "AnimatedImageResource",
               "frameCount": 21,
               "colCount": 4
              },
              "pitch": -2.35,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 21.85,
              "yaw": -96.91,
              "distance": 100
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_C5D4611E_DDAE_944D_41C8_5DB5BFCC735A, this.camera_DBC2DC4A_E3B0_A830_41DA_64173551A5E7); this.mainPlayList.set('selectedIndex', 16)"
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            }
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_F898E563_E05B_B03E_41B8_CDB298529554",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 480,
                 "height": 300,
                 "url": "media/panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584_0_HS_2_0.png"
                }
               ],
               "rowCount": 6,
               "frameDuration": 41,
               "class": "AnimatedImageResource",
               "frameCount": 21,
               "colCount": 4
              },
              "pitch": -3.87,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 21.82,
              "yaw": -62.89,
              "distance": 100
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_CAC2DE39_DDB3_8C57_41EA_CC36B38734DC, this.camera_DBDD4C55_E3B0_A8D0_41B0_5C790F61A804); this.mainPlayList.set('selectedIndex', 30)"
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            }
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_F8DF0032_E05A_D01E_41BC_EC9F9AECC92D",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 480,
                 "height": 300,
                 "url": "media/panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584_0_HS_3_0.png"
                }
               ],
               "rowCount": 6,
               "frameDuration": 41,
               "class": "AnimatedImageResource",
               "frameCount": 21,
               "colCount": 4
              },
              "pitch": -9.34,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 21.58,
              "yaw": 115.44,
              "distance": 100
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_CADBCBC2_DDAD_9435_41B7_CC92B1FC3646, this.camera_DBE4DC6D_E3B0_A8F0_41E4_89DFC88AD8D7); this.mainPlayList.set('selectedIndex', 20)"
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            }
           }
          ]
         }
        ],
        "id": "panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584",
        "hfovMax": 130,
        "vfov": 180,
        "pitch": 0,
        "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
        "class": "Panorama",
        "hfov": 360,
        "hfovMin": 60,
        "thumbnailUrl": "media/panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584_t.jpg",
        "label": "Exteriors"
       },
       "yaw": -139.14,
       "distance": 1,
       "backwardYaw": 53.62
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205",
       "yaw": 9.9,
       "distance": 1,
       "backwardYaw": 172.71
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_CADC01B2_DDAE_7455_41BB_4C410595CF44",
       "yaw": 113.92,
       "distance": 1,
       "backwardYaw": -45.42
      }
     ],
     "partial": false,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "width": 5376,
          "height": 2688,
          "url": "media/panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A_hq.jpeg",
          "tags": "oculusgo"
         },
         {
          "class": "ImageResourceLevel",
          "width": 2048,
          "height": 1024,
          "url": "media/panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A_lq.jpeg",
          "tags": "preload"
         },
         {
          "class": "ImageResourceLevel",
          "width": 4002,
          "height": 2001,
          "url": "media/panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "width": 480,
              "height": 300,
              "url": "media/panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A_0_HS_0_0.png"
             }
            ],
            "rowCount": 6,
            "frameDuration": 41,
            "class": "AnimatedImageResource",
            "frameCount": 21,
            "colCount": 4
           },
           "pitch": -37.75,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 17.3,
           "yaw": 10.63,
           "distance": 100
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "id": "overlay_F905FD43_E045_D07E_41E5_EE14BC0A4F6B",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         }
        },
        {
         "rollOverDisplay": true,
         "enabledInCardboard": true,
         "id": "overlay_FA3C78C0_E045_B07A_4188_01630E949500",
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "width": 399,
              "height": 250,
              "url": "media/panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -39.89,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 20.55,
           "yaw": 9.9,
           "distance": 50
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 9.9,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "width": 25,
              "height": 16,
              "url": "media/panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -39.89,
           "hfov": 20.55
          }
         ],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205, this.camera_D3B6CF47_E3B0_A830_41BE_BCAF79A0AA99); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         }
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_F966003D_E046_500A_41CA_EFBFD4021282",
         "items": [
          {
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "width": 480,
              "height": 300,
              "url": "media/panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A_0_HS_2_0.png"
             }
            ],
            "rowCount": 6,
            "frameDuration": 41,
            "class": "AnimatedImageResource",
            "frameCount": 21,
            "colCount": 4
           },
           "pitch": -12.99,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 21.31,
           "yaw": 113.92,
           "distance": 100
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_CADC01B2_DDAE_7455_41BB_4C410595CF44, this.camera_D34BFF53_E3B0_A8D0_41E1_7283F43E9BEB); this.mainPlayList.set('selectedIndex', 19)"
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         }
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_F96F2446_E047_B006_41DC_E9D6C7C01F7D",
         "items": [
          {
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "width": 480,
              "height": 300,
              "url": "media/panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A_0_HS_3_0.png"
             }
            ],
            "rowCount": 6,
            "frameDuration": 41,
            "class": "AnimatedImageResource",
            "frameCount": 21,
            "colCount": 4
           },
           "pitch": -23.62,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 20.04,
           "yaw": -139.14,
           "distance": 100
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584, this.camera_D3BFEF39_E3B0_A850_41D9_DD8501B519FE); this.mainPlayList.set('selectedIndex', 17)"
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         }
        }
       ]
      }
     ],
     "id": "panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A",
     "hfovMax": 130,
     "vfov": 180,
     "pitch": 0,
     "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
     "class": "Panorama",
     "hfov": 360,
     "hfovMin": 60,
     "thumbnailUrl": "media/panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A_t.jpg",
     "label": "Exteriors"
    },
    "yaw": 172.71,
    "distance": 1,
    "backwardYaw": 9.9
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205"
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B",
          "yaw": 175.7,
          "distance": 1,
          "backwardYaw": 109.22
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_EC107D15_E350_A850_41EA_AD8D0247247A",
             "yaw": 107.85,
             "distance": 1,
             "backwardYaw": 112.73
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_EE2C6014_E350_9850_41E6_64C8E8839E0A",
                   "yaw": 155.09,
                   "distance": 1,
                   "backwardYaw": -0.15
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_F35A202E_E35F_B870_41D9_700532564C0E"
                  }
                 ],
                 "partial": false,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_EE318363_E350_B8F0_41D8_008DE2D66DA9_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "class": "ImageResourceLevel",
                      "width": 5376,
                      "height": 2688,
                      "url": "media/panorama_EE318363_E350_B8F0_41D8_008DE2D66DA9_hq.jpeg",
                      "tags": "oculusgo"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "width": 2048,
                      "height": 1024,
                      "url": "media/panorama_EE318363_E350_B8F0_41D8_008DE2D66DA9_lq.jpeg",
                      "tags": "preload"
                     },
                     {
                      "class": "ImageResourceLevel",
                      "width": 4002,
                      "height": 2001,
                      "url": "media/panorama_EE318363_E350_B8F0_41D8_008DE2D66DA9.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_F0076C42_E370_E830_41C0_7F5F5E4F02CE",
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "width": 480,
                          "height": 300,
                          "url": "media/panorama_EE318363_E350_B8F0_41D8_008DE2D66DA9_0_HS_0_0.png"
                         }
                        ],
                        "rowCount": 6,
                        "frameDuration": 41,
                        "class": "AnimatedImageResource",
                        "frameCount": 21,
                        "colCount": 4
                       },
                       "pitch": -35.7,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 15.05,
                       "yaw": -101.77,
                       "distance": 100
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image",
                       "click": "this.mainPlayList.set('selectedIndex', 35)"
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     }
                    },
                    {
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "id": "overlay_F7323D47_E370_6830_41C8_6E0978719ECD",
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "class": "ImageResourceLevel",
                          "width": 480,
                          "height": 300,
                          "url": "media/panorama_EE318363_E350_B8F0_41D8_008DE2D66DA9_0_HS_1_0.png"
                         }
                        ],
                        "rowCount": 6,
                        "frameDuration": 41,
                        "class": "AnimatedImageResource",
                        "frameCount": 21,
                        "colCount": 4
                       },
                       "pitch": -13.59,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 21.26,
                       "yaw": 155.09,
                       "distance": 100
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "maps": [],
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "image",
                       "click": "this.startPanoramaWithCamera(this.panorama_EE2C6014_E350_9850_41E6_64C8E8839E0A, this.camera_CC2DCDFB_E3B0_ABD0_41C8_4C2A96BA5C95); this.mainPlayList.set('selectedIndex', 37)"
                      }
                     ],
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     }
                    }
                   ]
                  }
                 ],
                 "id": "panorama_EE318363_E350_B8F0_41D8_008DE2D66DA9",
                 "hfovMax": 130,
                 "vfov": 180,
                 "pitch": 0,
                 "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
                 "class": "Panorama",
                 "hfov": 360,
                 "hfovMin": 60,
                 "thumbnailUrl": "media/panorama_EE318363_E350_B8F0_41D8_008DE2D66DA9_t.jpg",
                 "label": "King Suite"
                },
                "yaw": -0.15,
                "distance": 1,
                "backwardYaw": 155.09
               },
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_F35A202E_E35F_B870_41D9_700532564C0E",
                "yaw": -24.91,
                "distance": 1,
                "backwardYaw": -23.39
               }
              ],
              "partial": false,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_EE2C6014_E350_9850_41E6_64C8E8839E0A_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "width": 5376,
                   "height": 2688,
                   "url": "media/panorama_EE2C6014_E350_9850_41E6_64C8E8839E0A_hq.jpeg",
                   "tags": "oculusgo"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "width": 2048,
                   "height": 1024,
                   "url": "media/panorama_EE2C6014_E350_9850_41E6_64C8E8839E0A_lq.jpeg",
                   "tags": "preload"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "height": 2001,
                   "url": "media/panorama_EE2C6014_E350_9850_41E6_64C8E8839E0A.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_F7D5A8BA_E373_A850_41CB_B94A2AE91869",
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "width": 480,
                       "height": 300,
                       "url": "media/panorama_EE2C6014_E350_9850_41E6_64C8E8839E0A_0_HS_0_0.png"
                      }
                     ],
                     "rowCount": 6,
                     "frameDuration": 41,
                     "class": "AnimatedImageResource",
                     "frameCount": 21,
                     "colCount": 4
                    },
                    "pitch": -14.2,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 21.2,
                    "yaw": -24.91,
                    "distance": 100
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_F35A202E_E35F_B870_41D9_700532564C0E, this.camera_D3E6CE9E_E3B0_A850_41DA_1FA67A4A3CAD); this.mainPlayList.set('selectedIndex', 35)"
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  }
                 },
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_F65C03DC_E370_9FD0_41EA_7A44D654820C",
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "width": 480,
                       "height": 300,
                       "url": "media/panorama_EE2C6014_E350_9850_41E6_64C8E8839E0A_0_HS_1_0.png"
                      }
                     ],
                     "rowCount": 6,
                     "frameDuration": 41,
                     "class": "AnimatedImageResource",
                     "frameCount": 21,
                     "colCount": 4
                    },
                    "pitch": -25.14,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 19.8,
                    "yaw": -0.15,
                    "distance": 100
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_EE318363_E350_B8F0_41D8_008DE2D66DA9, this.camera_D3EF1E92_E3B0_A850_41E5_C0F5D1F1ABCE); this.mainPlayList.set('selectedIndex', 36)"
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  }
                 }
                ]
               }
              ],
              "id": "panorama_EE2C6014_E350_9850_41E6_64C8E8839E0A",
              "hfovMax": 130,
              "vfov": 180,
              "pitch": 0,
              "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
              "class": "Panorama",
              "hfov": 360,
              "hfovMin": 60,
              "thumbnailUrl": "media/panorama_EE2C6014_E350_9850_41E6_64C8E8839E0A_t.jpg",
              "label": "King Suite"
             },
             "yaw": -23.39,
             "distance": 1,
             "backwardYaw": -24.91
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_F35A202E_E35F_B870_41D9_700532564C0E",
                "yaw": 3.49,
                "distance": 1,
                "backwardYaw": -83.85
               }
              ],
              "partial": false,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_EE214A39_E351_A850_41D5_17A6AD20962B_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "class": "ImageResourceLevel",
                   "width": 5376,
                   "height": 2688,
                   "url": "media/panorama_EE214A39_E351_A850_41D5_17A6AD20962B_hq.jpeg",
                   "tags": "oculusgo"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "width": 2048,
                   "height": 1024,
                   "url": "media/panorama_EE214A39_E351_A850_41D5_17A6AD20962B_lq.jpeg",
                   "tags": "preload"
                  },
                  {
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "height": 2001,
                   "url": "media/panorama_EE214A39_E351_A850_41D5_17A6AD20962B.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_F6BA2F6E_E370_E8F0_41E0_77EB03ECE33E",
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "class": "ImageResourceLevel",
                       "width": 480,
                       "height": 300,
                       "url": "media/panorama_EE214A39_E351_A850_41D5_17A6AD20962B_0_HS_0_0.png"
                      }
                     ],
                     "rowCount": 6,
                     "frameDuration": 41,
                     "class": "AnimatedImageResource",
                     "frameCount": 21,
                     "colCount": 4
                    },
                    "pitch": -26.2,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 19.63,
                    "yaw": 3.49,
                    "distance": 100
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "maps": [],
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "image",
                    "click": "this.startPanoramaWithCamera(this.panorama_F35A202E_E35F_B870_41D9_700532564C0E, this.camera_D331D019_E3B0_B850_41D9_F3060A3B64E0); this.mainPlayList.set('selectedIndex', 35)"
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  }
                 }
                ]
               }
              ],
              "id": "panorama_EE214A39_E351_A850_41D5_17A6AD20962B",
              "hfovMax": 130,
              "vfov": 180,
              "pitch": 0,
              "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
              "class": "Panorama",
              "hfov": 360,
              "hfovMin": 60,
              "thumbnailUrl": "media/panorama_EE214A39_E351_A850_41D5_17A6AD20962B_t.jpg",
              "label": "King Suite"
             },
             "yaw": -83.85,
             "distance": 1,
             "backwardYaw": 3.49
            }
           ],
           "partial": false,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_F35A202E_E35F_B870_41D9_700532564C0E_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "width": 5376,
                "height": 2688,
                "url": "media/panorama_F35A202E_E35F_B870_41D9_700532564C0E_hq.jpeg",
                "tags": "oculusgo"
               },
               {
                "class": "ImageResourceLevel",
                "width": 2048,
                "height": 1024,
                "url": "media/panorama_F35A202E_E35F_B870_41D9_700532564C0E_lq.jpeg",
                "tags": "preload"
               },
               {
                "class": "ImageResourceLevel",
                "width": 4002,
                "height": 2001,
                "url": "media/panorama_F35A202E_E35F_B870_41D9_700532564C0E.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_F2F66D59_E370_68D0_41D9_5552B7E61B9D",
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "width": 480,
                    "height": 300,
                    "url": "media/panorama_F35A202E_E35F_B870_41D9_700532564C0E_0_HS_0_0.png"
                   }
                  ],
                  "rowCount": 6,
                  "frameDuration": 41,
                  "class": "AnimatedImageResource",
                  "frameCount": 21,
                  "colCount": 4
                 },
                 "pitch": -17.39,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 20.87,
                 "yaw": -23.39,
                 "distance": 100
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_EE2C6014_E350_9850_41E6_64C8E8839E0A, this.camera_DB42DCCA_E3B0_A830_41EA_78DFC37EE37E); this.mainPlayList.set('selectedIndex', 37)"
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               }
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_F6FFCC44_E371_E830_41D3_3D5A3464900D",
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "width": 480,
                    "height": 300,
                    "url": "media/panorama_F35A202E_E35F_B870_41D9_700532564C0E_0_HS_1_0.png"
                   }
                  ],
                  "rowCount": 6,
                  "frameDuration": 41,
                  "class": "AnimatedImageResource",
                  "frameCount": 21,
                  "colCount": 4
                 },
                 "pitch": -28.63,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 19.2,
                 "yaw": -83.85,
                 "distance": 100
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_EE214A39_E351_A850_41D5_17A6AD20962B, this.camera_DB5E5CD6_E3B0_A9D0_41DF_33FC291D6698); this.mainPlayList.set('selectedIndex', 38)"
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               }
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_F5239B28_E377_A870_41DC_2F3576932F98",
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "width": 480,
                    "height": 300,
                    "url": "media/panorama_F35A202E_E35F_B870_41D9_700532564C0E_0_HS_2_0.png"
                   }
                  ],
                  "rowCount": 6,
                  "frameDuration": 41,
                  "class": "AnimatedImageResource",
                  "frameCount": 21,
                  "colCount": 4
                 },
                 "pitch": -41.39,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 16.41,
                 "yaw": 107.85,
                 "distance": 100
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_EC107D15_E350_A850_41EA_AD8D0247247A, this.camera_DBB63CBF_E3B0_A850_41DD_7FBF0F43D4E9); this.mainPlayList.set('selectedIndex', 39)"
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               }
              }
             ]
            }
           ],
           "id": "panorama_F35A202E_E35F_B870_41D9_700532564C0E",
           "hfovMax": 130,
           "vfov": 180,
           "pitch": 0,
           "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
           "class": "Panorama",
           "hfov": 360,
           "hfovMin": 60,
           "thumbnailUrl": "media/panorama_F35A202E_E35F_B870_41D9_700532564C0E_t.jpg",
           "label": "King Suite"
          },
          "yaw": 112.73,
          "distance": 1,
          "backwardYaw": 107.85
         }
        ],
        "partial": false,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_EC107D15_E350_A850_41EA_AD8D0247247A_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "width": 5376,
             "height": 2688,
             "url": "media/panorama_EC107D15_E350_A850_41EA_AD8D0247247A_hq.jpeg",
             "tags": "oculusgo"
            },
            {
             "class": "ImageResourceLevel",
             "width": 2048,
             "height": 1024,
             "url": "media/panorama_EC107D15_E350_A850_41EA_AD8D0247247A_lq.jpeg",
             "tags": "preload"
            },
            {
             "class": "ImageResourceLevel",
             "width": 4002,
             "height": 2001,
             "url": "media/panorama_EC107D15_E350_A850_41EA_AD8D0247247A.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 480,
                 "height": 300,
                 "url": "media/panorama_EC107D15_E350_A850_41EA_AD8D0247247A_0_HS_0_0.png"
                }
               ],
               "rowCount": 6,
               "frameDuration": 41,
               "class": "AnimatedImageResource",
               "frameCount": 21,
               "colCount": 4
              },
              "pitch": -35.47,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 17.81,
              "yaw": 111.65,
              "distance": 100
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "id": "overlay_EC37397A_E370_A8D0_41EB_DA852638DF67",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            }
           },
           {
            "rollOverDisplay": true,
            "enabledInCardboard": true,
            "id": "overlay_ECD87D0C_E371_E830_41C4_21949BC209F2",
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 399,
                 "height": 250,
                 "url": "media/panorama_EC107D15_E350_A850_41EA_AD8D0247247A_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -36.85,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 21.43,
              "yaw": 112.73,
              "distance": 50
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 112.73,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 25,
                 "height": 16,
                 "url": "media/panorama_EC107D15_E350_A850_41EA_AD8D0247247A_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -36.85,
              "hfov": 21.43
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_F35A202E_E35F_B870_41D9_700532564C0E, this.camera_D4576BD5_E3B0_AFD0_41B5_B41B54ED2F61); this.mainPlayList.set('selectedIndex', 35)"
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            }
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 1080,
                 "height": 600,
                 "url": "media/panorama_EC107D15_E350_A850_41EA_AD8D0247247A_0_HS_2_0.png"
                }
               ],
               "rowCount": 5,
               "frameDuration": 41,
               "class": "AnimatedImageResource",
               "frameCount": 20,
               "colCount": 4
              },
              "pitch": -12.68,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 20.01,
              "yaw": -6,
              "distance": 100
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "id": "overlay_F5EF083A_E370_6850_41D3_E5334F977380",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            }
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_F6D1900E_E370_B830_41DF_A1C38FC07277",
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 399,
                 "height": 250,
                 "url": "media/panorama_EC107D15_E350_A850_41EA_AD8D0247247A_0_HS_3_0.png"
                }
               ]
              },
              "pitch": -14.83,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 25.89,
              "yaw": -5.59,
              "distance": 50
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -5.59,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 25,
                 "height": 16,
                 "url": "media/panorama_EC107D15_E350_A850_41EA_AD8D0247247A_0_HS_3_0_0_map.gif"
                }
               ]
              },
              "pitch": -14.83,
              "hfov": 25.89
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 0)"
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            }
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 480,
                 "height": 300,
                 "url": "media/panorama_EC107D15_E350_A850_41EA_AD8D0247247A_0_HS_4_0.png"
                }
               ],
               "rowCount": 6,
               "frameDuration": 41,
               "class": "AnimatedImageResource",
               "frameCount": 21,
               "colCount": 4
              },
              "pitch": -10.92,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 8.05,
              "yaw": 175.9,
              "distance": 100
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "id": "overlay_C2610B29_E3D3_A870_41C1_6733BFAF4159",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            }
           },
           {
            "rollOverDisplay": true,
            "enabledInCardboard": true,
            "id": "overlay_C0A21253_E3D3_B8D0_41B0_1FA31B07569D",
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 179,
                 "height": 134,
                 "url": "media/panorama_EC107D15_E350_A850_41EA_AD8D0247247A_0_HS_5_0.png"
                }
               ]
              },
              "pitch": -12.32,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 11.77,
              "yaw": 175.7,
              "distance": 50
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 175.7,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 21,
                 "height": 16,
                 "url": "media/panorama_EC107D15_E350_A850_41EA_AD8D0247247A_0_HS_5_0_0_map.gif"
                }
               ]
              },
              "pitch": -12.32,
              "hfov": 11.77
             }
            ],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B, this.camera_D45D2BC9_E3B0_A830_41D5_4337FAA812E7); this.mainPlayList.set('selectedIndex', 40)"
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            }
           }
          ]
         }
        ],
        "id": "panorama_EC107D15_E350_A850_41EA_AD8D0247247A",
        "hfovMax": 130,
        "vfov": 180,
        "pitch": 0,
        "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
        "class": "Panorama",
        "hfov": 360,
        "hfovMin": 60,
        "thumbnailUrl": "media/panorama_EC107D15_E350_A850_41EA_AD8D0247247A_t.jpg",
        "label": "Level 4 Corridor"
       },
       "yaw": 109.22,
       "distance": 1,
       "backwardYaw": 175.7
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B",
          "yaw": 153.27,
          "distance": 1,
          "backwardYaw": -83.09
         }
        ],
        "partial": false,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_C27F5156_E3D1_F8D0_4183_11DB6730E03F_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "width": 5376,
             "height": 2688,
             "url": "media/panorama_C27F5156_E3D1_F8D0_4183_11DB6730E03F_hq.jpeg",
             "tags": "oculusgo"
            },
            {
             "class": "ImageResourceLevel",
             "width": 2048,
             "height": 1024,
             "url": "media/panorama_C27F5156_E3D1_F8D0_4183_11DB6730E03F_lq.jpeg",
             "tags": "preload"
            },
            {
             "class": "ImageResourceLevel",
             "width": 4002,
             "height": 2001,
             "url": "media/panorama_C27F5156_E3D1_F8D0_4183_11DB6730E03F.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_C6C5D47B_E3D1_B8D0_4198_4C5574488EA6",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 480,
                 "height": 300,
                 "url": "media/panorama_C27F5156_E3D1_F8D0_4183_11DB6730E03F_0_HS_0_0.png"
                }
               ],
               "rowCount": 6,
               "frameDuration": 41,
               "class": "AnimatedImageResource",
               "frameCount": 21,
               "colCount": 4
              },
              "pitch": -29.54,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 19.03,
              "yaw": 153.27,
              "distance": 100
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B, this.camera_D48CFB6A_E3B0_A8F0_41D2_90BD3351FE81); this.mainPlayList.set('selectedIndex', 40)"
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            }
           }
          ]
         }
        ],
        "id": "panorama_C27F5156_E3D1_F8D0_4183_11DB6730E03F",
        "hfovMax": 130,
        "vfov": 180,
        "pitch": 0,
        "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
        "class": "Panorama",
        "hfov": 360,
        "hfovMin": 60,
        "thumbnailUrl": "media/panorama_C27F5156_E3D1_F8D0_4183_11DB6730E03F_t.jpg",
        "label": "Queen Room"
       },
       "yaw": -83.09,
       "distance": 1,
       "backwardYaw": 153.27
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_FC929735_E3D0_9850_41EC_25CF37423A69",
             "yaw": -2.73,
             "distance": 1,
             "backwardYaw": -172.86
            }
           ],
           "partial": false,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_FC918AA9_E3D0_A870_41EB_D5B5850A3D8F_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "class": "ImageResourceLevel",
                "width": 5376,
                "height": 2688,
                "url": "media/panorama_FC918AA9_E3D0_A870_41EB_D5B5850A3D8F_hq.jpeg",
                "tags": "oculusgo"
               },
               {
                "class": "ImageResourceLevel",
                "width": 2048,
                "height": 1024,
                "url": "media/panorama_FC918AA9_E3D0_A870_41EB_D5B5850A3D8F_lq.jpeg",
                "tags": "preload"
               },
               {
                "class": "ImageResourceLevel",
                "width": 4002,
                "height": 2001,
                "url": "media/panorama_FC918AA9_E3D0_A870_41EB_D5B5850A3D8F.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_C50CB21A_E3D0_7850_41E0_D15F6448ED46",
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "class": "ImageResourceLevel",
                    "width": 480,
                    "height": 300,
                    "url": "media/panorama_FC918AA9_E3D0_A870_41EB_D5B5850A3D8F_0_HS_0_0.png"
                   }
                  ],
                  "rowCount": 6,
                  "frameDuration": 41,
                  "class": "AnimatedImageResource",
                  "frameCount": 21,
                  "colCount": 4
                 },
                 "pitch": -18.15,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 20.78,
                 "yaw": -2.73,
                 "distance": 100
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "maps": [],
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "image",
                 "click": "this.startPanoramaWithCamera(this.panorama_FC929735_E3D0_9850_41EC_25CF37423A69, this.camera_D30DAFC6_E3B0_A830_41D4_9CB0A6B45C31); this.mainPlayList.set('selectedIndex', 42)"
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               }
              }
             ]
            }
           ],
           "id": "panorama_FC918AA9_E3D0_A870_41EB_D5B5850A3D8F",
           "hfovMax": 130,
           "vfov": 180,
           "pitch": 0,
           "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
           "class": "Panorama",
           "hfov": 360,
           "hfovMin": 60,
           "thumbnailUrl": "media/panorama_FC918AA9_E3D0_A870_41EB_D5B5850A3D8F_t.jpg",
           "label": "Queen Room"
          },
          "yaw": -172.86,
          "distance": 1,
          "backwardYaw": -2.73
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B",
          "yaw": -11.24,
          "distance": 1,
          "backwardYaw": -21.87
         }
        ],
        "partial": false,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_FC929735_E3D0_9850_41EC_25CF37423A69_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "width": 5376,
             "height": 2688,
             "url": "media/panorama_FC929735_E3D0_9850_41EC_25CF37423A69_hq.jpeg",
             "tags": "oculusgo"
            },
            {
             "class": "ImageResourceLevel",
             "width": 2048,
             "height": 1024,
             "url": "media/panorama_FC929735_E3D0_9850_41EC_25CF37423A69_lq.jpeg",
             "tags": "preload"
            },
            {
             "class": "ImageResourceLevel",
             "width": 4002,
             "height": 2001,
             "url": "media/panorama_FC929735_E3D0_9850_41EC_25CF37423A69.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_C067DCE2_E3D7_E9F0_41E1_9B3B77B728EE",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 480,
                 "height": 300,
                 "url": "media/panorama_FC929735_E3D0_9850_41EC_25CF37423A69_0_HS_0_0.png"
                }
               ],
               "rowCount": 6,
               "frameDuration": 41,
               "class": "AnimatedImageResource",
               "frameCount": 21,
               "colCount": 4
              },
              "pitch": -32.58,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 18.43,
              "yaw": -11.24,
              "distance": 100
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B, this.camera_D3800ED7_E3B0_A9D0_41C8_E7C5D580FE61); this.mainPlayList.set('selectedIndex', 40)"
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            }
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_C4C60164_E3D0_B8F0_41CD_70DC25F8B2F1",
            "items": [
             {
              "image": {
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "width": 480,
                 "height": 300,
                 "url": "media/panorama_FC929735_E3D0_9850_41EC_25CF37423A69_0_HS_1_0.png"
                }
               ],
               "rowCount": 6,
               "frameDuration": 41,
               "class": "AnimatedImageResource",
               "frameCount": 21,
               "colCount": 4
              },
              "pitch": -25.9,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 19.68,
              "yaw": -172.86,
              "distance": 100
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "maps": [],
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image",
              "click": "this.startPanoramaWithCamera(this.panorama_FC918AA9_E3D0_A870_41EB_D5B5850A3D8F, this.camera_D38B3ECC_E3B0_A830_41E1_D61D0E5F366B); this.mainPlayList.set('selectedIndex', 41)"
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            }
           }
          ]
         }
        ],
        "id": "panorama_FC929735_E3D0_9850_41EC_25CF37423A69",
        "hfovMax": 130,
        "vfov": 180,
        "pitch": 0,
        "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
        "class": "Panorama",
        "hfov": 360,
        "hfovMin": 60,
        "thumbnailUrl": "media/panorama_FC929735_E3D0_9850_41EC_25CF37423A69_t.jpg",
        "label": "Queen Room"
       },
       "yaw": -21.87,
       "distance": 1,
       "backwardYaw": -11.24
      }
     ],
     "partial": false,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "width": 5376,
          "height": 2688,
          "url": "media/panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B_hq.jpeg",
          "tags": "oculusgo"
         },
         {
          "class": "ImageResourceLevel",
          "width": 2048,
          "height": 1024,
          "url": "media/panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B_lq.jpeg",
          "tags": "preload"
         },
         {
          "class": "ImageResourceLevel",
          "width": 4002,
          "height": 2001,
          "url": "media/panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_C1E26E0B_E3D1_A830_41EB_9D1C695B21D7",
         "items": [
          {
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "width": 480,
              "height": 300,
              "url": "media/panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B_0_HS_0_0.png"
             }
            ],
            "rowCount": 6,
            "frameDuration": 41,
            "class": "AnimatedImageResource",
            "frameCount": 21,
            "colCount": 4
           },
           "pitch": -28.03,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 19.31,
           "yaw": 109.22,
           "distance": 100
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_EC107D15_E350_A850_41EA_AD8D0247247A, this.camera_D3862EE3_E3B0_A9F0_41E5_9610625E49EF); this.mainPlayList.set('selectedIndex', 39)"
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         }
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_C0D508C6_E3D0_6830_419D_8B2B15044675",
         "items": [
          {
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "width": 480,
              "height": 300,
              "url": "media/panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B_0_HS_1_0.png"
             }
            ],
            "rowCount": 6,
            "frameDuration": 41,
            "class": "AnimatedImageResource",
            "frameCount": 21,
            "colCount": 4
           },
           "pitch": -31.52,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 18.65,
           "yaw": -83.09,
           "distance": 100
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_C27F5156_E3D1_F8D0_4183_11DB6730E03F, this.camera_D39DBEEE_E3B0_A9F0_41C1_30D7F00664A8); this.mainPlayList.set('selectedIndex', 43)"
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         }
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_C78B8162_E3D0_98F0_41DA_8155DA01ACCF",
         "items": [
          {
           "image": {
            "levels": [
             {
              "class": "ImageResourceLevel",
              "width": 480,
              "height": 300,
              "url": "media/panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B_0_HS_2_0.png"
             }
            ],
            "rowCount": 6,
            "frameDuration": 41,
            "class": "AnimatedImageResource",
            "frameCount": 21,
            "colCount": 4
           },
           "pitch": -21.34,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 20.37,
           "yaw": -21.87,
           "distance": 100
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "maps": [],
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "image",
           "click": "this.startPanoramaWithCamera(this.panorama_FC929735_E3D0_9850_41EC_25CF37423A69, this.camera_D392FEFA_E3B0_A9D0_41D9_0A7BDA5F1F50); this.mainPlayList.set('selectedIndex', 42)"
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         }
        }
       ]
      }
     ],
     "id": "panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B",
     "hfovMax": 130,
     "vfov": 180,
     "pitch": 0,
     "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
     "class": "Panorama",
     "hfov": 360,
     "hfovMin": 60,
     "thumbnailUrl": "media/panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B_t.jpg",
     "label": "Queen Room"
    }
   },
   {
    "class": "AdjacentPanorama",
    "panorama": "this.panorama_F35A202E_E35F_B870_41D9_700532564C0E"
   }
  ],
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "width": 5376,
       "height": 2688,
       "url": "media/panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205_hq.jpeg",
       "tags": "oculusgo"
      },
      {
       "class": "ImageResourceLevel",
       "width": 2048,
       "height": 1024,
       "url": "media/panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205_lq.jpeg",
       "tags": "preload"
      },
      {
       "class": "ImageResourceLevel",
       "width": 4002,
       "height": 2001,
       "url": "media/panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_CD1E2174_DDB5_91C8_41E5_38BA5FF9A186",
      "items": [
       {
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 480,
           "height": 300,
           "url": "media/panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205_0_HS_0_0.png"
          }
         ],
         "rowCount": 6,
         "frameDuration": 41,
         "class": "AnimatedImageResource",
         "frameCount": 21,
         "colCount": 4
        },
        "pitch": -14.66,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 21.16,
        "yaw": -3.8,
        "distance": 100
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1, this.camera_DBFFEC78_E3B0_A8D0_41B0_67D7472A9E74); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      }
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D246DF19_DDD8_044C_41BA_7B8369A972B5",
      "items": [
       {
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 480,
           "height": 300,
           "url": "media/panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205_0_HS_1_0.png"
          }
         ],
         "rowCount": 6,
         "frameDuration": 41,
         "class": "AnimatedImageResource",
         "frameCount": 21,
         "colCount": 4
        },
        "pitch": -29.24,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 19.09,
        "yaw": 97.97,
        "distance": 100
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image",
        "click": "this.startPanoramaWithCamera(this.panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1, this.camera_DB8B9C84_E3B0_A830_41D5_E64F345431B2); this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      }
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_CF67E888_DE2B_E1F5_41D3_CFBB7935AE38",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 401,
           "height": 249,
           "url": "media/panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -31.37,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 22.97,
        "yaw": 98.82,
        "distance": 50
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 98.82,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 25,
           "height": 15,
           "url": "media/panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -31.37,
        "hfov": 22.97
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1, this.camera_DB869C90_E3B0_A850_41CF_79D140CB6A24); this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      }
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 480,
           "height": 300,
           "url": "media/panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205_0_HS_3_0.png"
          }
         ],
         "rowCount": 6,
         "frameDuration": 41,
         "class": "AnimatedImageResource",
         "frameCount": 21,
         "colCount": 4
        },
        "pitch": -23.77,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 20.02,
        "yaw": 173.62,
        "distance": 100
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "id": "overlay_F3DA6166_E03F_D006_41B8_E417BB9A8144",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      }
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_F40F61B4_E03E_D01B_41E9_2FBEBFC5B264",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 208,
           "height": 179,
           "url": "media/panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205_0_HS_4_0.png"
          }
         ]
        },
        "pitch": -24.77,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.69,
        "yaw": 172.71,
        "distance": 50
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 172.71,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 18,
           "height": 16,
           "url": "media/panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205_0_HS_4_0_0_map.gif"
          }
         ]
        },
        "pitch": -24.77,
        "hfov": 12.69
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A, this.camera_DB923C9C_E3B0_A850_4165_1400F8425F60); this.mainPlayList.set('selectedIndex', 18)"
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      }
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 1080,
           "height": 750,
           "url": "media/panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205_0_HS_5_0.png"
          }
         ],
         "rowCount": 5,
         "frameDuration": 41,
         "class": "AnimatedImageResource",
         "frameCount": 20,
         "colCount": 4
        },
        "pitch": -29.4,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.31,
        "yaw": -30.91,
        "distance": 100
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "id": "overlay_F511EB0B_E370_6830_4197_BD1A932E575B",
      "useHandCursor": true,
      "data": {
       "label": "1a"
      }
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_F5081690_E371_9850_41CC_0DD30415FC40",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 399,
           "height": 250,
           "url": "media/panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205_0_HS_6_0.png"
          }
         ]
        },
        "pitch": -30.93,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 22.98,
        "yaw": -30.05,
        "distance": 50
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -30.05,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 25,
           "height": 16,
           "url": "media/panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205_0_HS_6_0_0_map.gif"
          }
         ]
        },
        "pitch": -30.93,
        "hfov": 22.98
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 35)"
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      }
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 1080,
           "height": 750,
           "url": "media/panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205_0_HS_7_0.png"
          }
         ],
         "rowCount": 5,
         "frameDuration": 41,
         "class": "AnimatedImageResource",
         "frameCount": 20,
         "colCount": 4
        },
        "pitch": -38.14,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.04,
        "yaw": -65.01,
        "distance": 100
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [],
      "id": "overlay_C58192C6_E3D3_B830_41E9_333B1E246C21",
      "useHandCursor": true,
      "data": {
       "label": "1a"
      }
     },
     {
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "id": "overlay_C5CADC5F_E3D0_A8D0_41EB_EFE7A045865F",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 399,
           "height": 250,
           "url": "media/panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205_0_HS_8_0.png"
          }
         ]
        },
        "pitch": -39.89,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 20.55,
        "yaw": -66.05,
        "distance": 50
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -66.05,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "width": 25,
           "height": 16,
           "url": "media/panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205_0_HS_8_0_0_map.gif"
          }
         ]
        },
        "pitch": -39.89,
        "hfov": 20.55
       }
      ],
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 40)"
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      }
     }
    ]
   }
  ],
  "id": "panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205",
  "hfovMax": 130,
  "vfov": 180,
  "pitch": 0,
  "cardboardMenu": "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205_t.jpg",
  "label": "Check In"
 },
 {
  "mouseControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "buttonToggleGyroscope": {
   "paddingTop": 0,
   "paddingLeft": 0,
   "width": 58,
   "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
   "mode": "toggle",
   "maxWidth": 58,
   "borderRadius": 0,
   "maxHeight": 58,
   "height": 58,
   "pressedRollOverIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed_rollover.png",
   "horizontalAlign": "center",
   "propagateClick": true,
   "verticalAlign": "middle",
   "minHeight": 1,
   "paddingRight": 0,
   "paddingBottom": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
   "cursor": "hand",
   "minWidth": 1,
   "data": {
    "name": "IconButton GYRO"
   },
   "class": "IconButton",
   "transparencyActive": true,
   "backgroundOpacity": 0,
   "borderSize": 0,
   "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png"
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "buttonToggleHotspots": {
   "paddingTop": 0,
   "paddingLeft": 0,
   "width": 58,
   "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
   "mode": "toggle",
   "maxWidth": 58,
   "borderRadius": 0,
   "maxHeight": 58,
   "height": 58,
   "pressedRollOverIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed_rollover.png",
   "horizontalAlign": "center",
   "propagateClick": true,
   "verticalAlign": "middle",
   "minHeight": 1,
   "paddingRight": 0,
   "paddingBottom": 0,
   "shadow": false,
   "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
   "cursor": "hand",
   "minWidth": 1,
   "data": {
    "name": "IconButton HS "
   },
   "class": "IconButton",
   "transparencyActive": true,
   "backgroundOpacity": 0,
   "borderSize": 0,
   "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png"
  },
  "buttonCardboardView": {
   "paddingTop": 0,
   "paddingLeft": 0,
   "width": 58,
   "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
   "mode": "push",
   "maxWidth": 58,
   "borderRadius": 0,
   "maxHeight": 58,
   "height": 58,
   "horizontalAlign": "center",
   "propagateClick": true,
   "verticalAlign": "middle",
   "minHeight": 1,
   "paddingRight": 0,
   "paddingBottom": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
   "cursor": "hand",
   "minWidth": 1,
   "data": {
    "name": "IconButton VR"
   },
   "class": "IconButton",
   "transparencyActive": true,
   "backgroundOpacity": 0,
   "borderSize": 0,
   "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png"
  }
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_D7A04082_DD6F_9435_41D2_3D698903E11A",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_D7A04082_DD6F_9435_41D2_3D698903E11A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_D7A37B1A_DD6F_9455_41BB_D7D536FD0F2E",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_D7A37B1A_DD6F_9455_41BB_D7D536FD0F2E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -111.99,
   "pitch": 1.81
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 24.98,
   "pitch": 3.5
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_D7BEB0AB_DD6F_944B_41C0_25F4C9ACE188",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_D7BEB0AB_DD6F_944B_41C0_25F4C9ACE188_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -112.6,
   "pitch": -12.36
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -123.53,
   "pitch": -4.51
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_CBF1EC35_DD92_8C5F_41E4_392F270AEF09",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_CBF1EC35_DD92_8C5F_41E4_392F270AEF09_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 173.31,
   "pitch": 1.74
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_CBF1E0A6_DD95_947A_41C4_9D6CC9ECEEF2",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_CBF1E0A6_DD95_947A_41C4_9D6CC9ECEEF2_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -2.71,
   "pitch": 0.31
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_CBF6D115_DD92_945F_4198_78411642ECFD",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_CBF6D115_DD92_945F_4198_78411642ECFD_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 103.54,
   "pitch": 1.19
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_C507F600_DD92_9C35_41C2_064D860CC824",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_C507F600_DD92_9C35_41C2_064D860CC824_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 166.98,
   "pitch": -6.7
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_CBF4AF3A_DDAD_8C55_41B9_623F97D0E5FB",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_CBF4AF3A_DDAD_8C55_41B9_623F97D0E5FB_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_CBF1C718_DDAD_9C55_41E1_12BD06150836",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_CBF1C718_DDAD_9C55_41E1_12BD06150836_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_C5D4611E_DDAE_944D_41C8_5DB5BFCC735A",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_C5D4611E_DDAE_944D_41C8_5DB5BFCC735A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_CADC01B2_DDAE_7455_41BB_4C410595CF44",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_CADC01B2_DDAE_7455_41BB_4C410595CF44_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_CADBCBC2_DDAD_9435_41B7_CC92B1FC3646",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_CADBCBC2_DDAD_9435_41B7_CC92B1FC3646_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_CADE77AE_DDAD_9C4D_41D1_FF92D176B50E",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_CADE77AE_DDAD_9C4D_41D1_FF92D176B50E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_CADDC27B_DDAD_94CB_41DB_BCD42BD932EE",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_CADDC27B_DDAD_94CB_41DB_BCD42BD932EE_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_CADC0CFE_DDAD_8DCD_41E9_12A06B7F42D3",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_CADC0CFE_DDAD_8DCD_41E9_12A06B7F42D3_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_CAC1F537_DDB2_7C5B_41C4_AAA50F947CE5",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_CAC1F537_DDB2_7C5B_41C4_AAA50F947CE5_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_CAC23F83_DDB2_8C3B_41C4_3093907CC858",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_CAC23F83_DDB2_8C3B_41C4_3093907CC858_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_CAC43919_DDB2_9457_41CC_D3D70954931A",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_CAC43919_DDB2_9457_41CC_D3D70954931A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_CAC2A28C_DDB2_944D_41D6_C8F69D658B13",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_CAC2A28C_DDB2_944D_41D6_C8F69D658B13_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_CAC34B9F_DDB2_B44B_41E8_88BBF20A62BF",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_CAC34B9F_DDB2_B44B_41E8_88BBF20A62BF_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_CAC16582_DDB2_7C35_41C1_C81F659D1B46",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_CAC16582_DDB2_7C35_41C1_C81F659D1B46_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_CAC2DE39_DDB3_8C57_41EA_CC36B38734DC",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_CAC2DE39_DDB3_8C57_41EA_CC36B38734DC_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_C63EE93A_E045_B00E_41C5_DCF633D66111",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_C63EE93A_E045_B00E_41C5_DCF633D66111_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_C60E45C6_E045_D006_41C4_93EAC8E3A579",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_C60E45C6_E045_D006_41C4_93EAC8E3A579_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_F35A202E_E35F_B870_41D9_700532564C0E",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_F35A202E_E35F_B870_41D9_700532564C0E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -34,
   "pitch": -0.21
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_EE318363_E350_B8F0_41D8_008DE2D66DA9",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EE318363_E350_B8F0_41D8_008DE2D66DA9_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 145.11,
   "pitch": -0.84
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_EE2C6014_E350_9850_41E6_64C8E8839E0A",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EE2C6014_E350_9850_41E6_64C8E8839E0A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -23.45,
   "pitch": -3.97
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_EE214A39_E351_A850_41D5_17A6AD20962B",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EE214A39_E351_A850_41D5_17A6AD20962B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -179.14,
   "pitch": -9.95
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_EC107D15_E350_A850_41EA_AD8D0247247A",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_EC107D15_E350_A850_41EA_AD8D0247247A_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 159.91,
   "pitch": -2.8
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -24.55,
   "pitch": -4.83
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_FC918AA9_E3D0_A870_41EB_D5B5850A3D8F",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_FC918AA9_E3D0_A870_41EB_D5B5850A3D8F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 24.53,
   "pitch": 2.85
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_FC929735_E3D0_9850_41EC_25CF37423A69",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_FC929735_E3D0_9850_41EC_25CF37423A69_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 172.11,
   "pitch": 4.96
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_C27F5156_E3D1_F8D0_4183_11DB6730E03F",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "panorama_C27F5156_E3D1_F8D0_4183_11DB6730E03F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -40.99,
   "pitch": -3.11
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "camera": "this.panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205_camera",
    "id": "PanoramaPlayListItem_D5BC29F3_E3B0_ABD0_41D0_1287E6DF7022",
    "media": "this.panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CE54A9E6_DFCA_5006_41E9_9A934826CD14, false, -1, this.effect_CAD53233_DFCA_D01E_41D8_9A0DF48FA3DF, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.Image_CE54A9E6_DFCA_5006_41E9_9A934826CD14, true, -1, this.effect_CAD54232_DFCA_D01E_41EB_5E97F3467642, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1_camera",
    "media": "this.panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "camera": "this.panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67_camera",
    "id": "PanoramaPlayListItem_D5BB29F2_E3B0_ABD0_41D8_DE25E2AE3E24",
    "media": "this.panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CEC09C0E_DFCA_5006_41E1_67F39A3F6CC3, false, -1, this.effect_CAD6E234_DFCA_D01A_41E5_BD6CC7BC377C, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3); this.setComponentVisibility(this.Image_CEC09C0E_DFCA_5006_41E1_67F39A3F6CC3, true, -1, this.effect_CAD61234_DFCA_D01A_41D9_2917B781A0C9, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6_camera",
    "media": "this.panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CEC09C0E_DFCA_5006_41E1_67F39A3F6CC3, false, -1, this.effect_CAD05235_DFCA_D01A_41C2_3B1BEAE52FDF, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4); this.setComponentVisibility(this.Image_CEC09C0E_DFCA_5006_41E1_67F39A3F6CC3, true, -1, this.effect_CAD04235_DFCA_D01A_41D5_50D16EE0F53C, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_D7A04082_DD6F_9435_41D2_3D698903E11A_camera",
    "media": "this.panorama_D7A04082_DD6F_9435_41D2_3D698903E11A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CEC09C0E_DFCA_5006_41E1_67F39A3F6CC3, false, -1, this.effect_CAD39235_DFCA_D01A_41E1_8A559FE85B92, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.setComponentVisibility(this.Image_CEC09C0E_DFCA_5006_41E1_67F39A3F6CC3, true, -1, this.effect_CAD3B235_DFCA_D01A_41E2_DBE6287669E2, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_D7A37B1A_DD6F_9455_41BB_D7D536FD0F2E_camera",
    "media": "this.panorama_D7A37B1A_DD6F_9455_41BB_D7D536FD0F2E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CEC09C0E_DFCA_5006_41E1_67F39A3F6CC3, false, -1, this.effect_CACDC236_DFCA_D006_41E0_255F99CCFB11, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6); this.setComponentVisibility(this.Image_CEC09C0E_DFCA_5006_41E1_67F39A3F6CC3, true, -1, this.effect_CACDF236_DFCA_D006_41E8_B94E831833D4, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E_camera",
    "media": "this.panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CF3D85DE_DFC5_F006_41BD_BFFFFC34A6C0, false, -1, this.effect_CACF0237_DFCA_D006_41EA_B3B11EDCBC9A, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7); this.setComponentVisibility(this.Image_CF3D85DE_DFC5_F006_41BD_BFFFFC34A6C0, true, -1, this.effect_CACF2237_DFCA_D006_41C8_8BAEDE997F4D, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_D7BEB0AB_DD6F_944B_41C0_25F4C9ACE188_camera",
    "media": "this.panorama_D7BEB0AB_DD6F_944B_41C0_25F4C9ACE188",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CF3D85DE_DFC5_F006_41BD_BFFFFC34A6C0, false, -1, this.effect_CAC95237_DFCA_D006_41E7_F610BDEE62CE, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8); this.setComponentVisibility(this.Image_CF3D85DE_DFC5_F006_41BD_BFFFFC34A6C0, true, -1, this.effect_CAC97237_DFCA_D006_41E2_93CDA8970C50, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1_camera",
    "media": "this.panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CED383D7_DFCA_7006_41B2_9A511CB7E1BF, false, -1, this.effect_CAC89238_DFCA_D00A_41E7_093808EB9747, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9); this.setComponentVisibility(this.Image_CED383D7_DFCA_7006_41B2_9A511CB7E1BF, true, -1, this.effect_CAC8A238_DFCA_D00A_41E9_57AF8FF1A42C, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31_camera",
    "id": "PanoramaPlayListItem_D5BB89F2_E3B0_ABD0_41E6_DEF8B9BA6E22",
    "media": "this.panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CE4F77E3_DFC6_503E_41E1_520044FD779C, false, -1, this.effect_CACAD239_DFCA_D00A_41CF_1808476D0E9F, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10); this.setComponentVisibility(this.Image_CE4F77E3_DFC6_503E_41E1_520044FD779C, true, -1, this.effect_CACAF239_DFCA_D00A_41E5_11B3879DFF1E, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_CBF1EC35_DD92_8C5F_41E4_392F270AEF09_camera",
    "id": "PanoramaPlayListItem_D5BB69F2_E3B0_ABD0_41BD_9696A1FFB9E5",
    "media": "this.panorama_CBF1EC35_DD92_8C5F_41E4_392F270AEF09",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CF370408_DFC6_B00A_41E8_3A1672CF74FE, false, -1, this.effect_CAC3C23C_DFCA_D00A_41B1_A13A7FF7BAD2, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11); this.setComponentVisibility(this.Image_CF370408_DFC6_B00A_41E8_3A1672CF74FE, true, -1, this.effect_CAC3F23B_DFCA_D00E_41D4_20FF21DE2D0A, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_CBF1E0A6_DD95_947A_41C4_9D6CC9ECEEF2_camera",
    "media": "this.panorama_CBF1E0A6_DD95_947A_41C4_9D6CC9ECEEF2",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CE4F77E3_DFC6_503E_41E1_520044FD779C, false, -1, this.effect_CAC41239_DFCA_D00A_41BD_E86FFDDD5654, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12); this.setComponentVisibility(this.Image_CE4F77E3_DFC6_503E_41E1_520044FD779C, true, -1, this.effect_CAC43239_DFCA_D00A_41E1_8B1CD8C4D534, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_CBF6D115_DD92_945F_4198_78411642ECFD_camera",
    "id": "PanoramaPlayListItem_D5BCF9F2_E3B0_ABD0_41D3_A9FD1E40BB44",
    "media": "this.panorama_CBF6D115_DD92_945F_4198_78411642ECFD",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CE9FBCB0_DFCB_B01A_41CD_993611125E8B, false, -1, this.effect_CAC1923B_DFCA_D00E_41C6_DE76A91B34EF, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13); this.setComponentVisibility(this.Image_CE9FBCB0_DFCB_B01A_41CD_993611125E8B, true, -1, this.effect_CAC1B23B_DFCA_D00E_41BA_80044B535F42, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_C507F600_DD92_9C35_41C2_064D860CC824_camera",
    "media": "this.panorama_C507F600_DD92_9C35_41C2_064D860CC824",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CE9FBCB0_DFCB_B01A_41CD_993611125E8B, false, -1, this.effect_CAC6423A_DFCA_D00E_41D8_2062ED14351B, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14); this.setComponentVisibility(this.Image_CE9FBCB0_DFCB_B01A_41CD_993611125E8B, true, -1, this.effect_CAC6723A_DFCA_D00E_41EB_03790BF8BE5B, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_CBF4AF3A_DDAD_8C55_41B9_623F97D0E5FB_camera",
    "media": "this.panorama_CBF4AF3A_DDAD_8C55_41B9_623F97D0E5FB",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CE9FBCB0_DFCB_B01A_41CD_993611125E8B, false, -1, this.effect_CAC3B23C_DFCA_D00A_41D9_58E42CEAB33D, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15); this.setComponentVisibility(this.Image_CE9FBCB0_DFCB_B01A_41CD_993611125E8B, true, -1, this.effect_CAC3C23C_DFCA_D00A_41C9_46E66A96A9F1, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_CBF1C718_DDAD_9C55_41E1_12BD06150836_camera",
    "media": "this.panorama_CBF1C718_DDAD_9C55_41E1_12BD06150836",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CE9FBCB0_DFCB_B01A_41CD_993611125E8B, false, -1, this.effect_CABDF23D_DFCA_D00A_41C1_1DCE7BE455E2, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16); this.setComponentVisibility(this.Image_CE9FBCB0_DFCB_B01A_41CD_993611125E8B, true, -1, this.effect_CABD123D_DFCA_D00A_41DE_C2868738B8FD, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_C5D4611E_DDAE_944D_41C8_5DB5BFCC735A_camera",
    "media": "this.panorama_C5D4611E_DDAE_944D_41C8_5DB5BFCC735A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "camera": "this.panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584_camera",
    "media": "this.panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "camera": "this.panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A_camera",
    "id": "PanoramaPlayListItem_D5BC69F3_E3B0_ABD0_41BB_3EADB50F7F76",
    "media": "this.panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "camera": "this.panorama_CADC01B2_DDAE_7455_41BB_4C410595CF44_camera",
    "media": "this.panorama_CADC01B2_DDAE_7455_41BB_4C410595CF44",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "camera": "this.panorama_CADBCBC2_DDAD_9435_41B7_CC92B1FC3646_camera",
    "media": "this.panorama_CADBCBC2_DDAD_9435_41B7_CC92B1FC3646",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "camera": "this.panorama_CADE77AE_DDAD_9C4D_41D1_FF92D176B50E_camera",
    "media": "this.panorama_CADE77AE_DDAD_9C4D_41D1_FF92D176B50E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)"
   },
   {
    "camera": "this.panorama_CADDC27B_DDAD_94CB_41DB_BCD42BD932EE_camera",
    "media": "this.panorama_CADDC27B_DDAD_94CB_41DB_BCD42BD932EE",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)"
   },
   {
    "camera": "this.panorama_CADC0CFE_DDAD_8DCD_41E9_12A06B7F42D3_camera",
    "media": "this.panorama_CADC0CFE_DDAD_8DCD_41E9_12A06B7F42D3",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)"
   },
   {
    "camera": "this.panorama_CAC1F537_DDB2_7C5B_41C4_AAA50F947CE5_camera",
    "media": "this.panorama_CAC1F537_DDB2_7C5B_41C4_AAA50F947CE5",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)"
   },
   {
    "camera": "this.panorama_CAC23F83_DDB2_8C3B_41C4_3093907CC858_camera",
    "media": "this.panorama_CAC23F83_DDB2_8C3B_41C4_3093907CC858",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)"
   },
   {
    "camera": "this.panorama_CAC43919_DDB2_9457_41CC_D3D70954931A_camera",
    "media": "this.panorama_CAC43919_DDB2_9457_41CC_D3D70954931A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)"
   },
   {
    "camera": "this.panorama_CAC2A28C_DDB2_944D_41D6_C8F69D658B13_camera",
    "media": "this.panorama_CAC2A28C_DDB2_944D_41D6_C8F69D658B13",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)"
   },
   {
    "camera": "this.panorama_CAC34B9F_DDB2_B44B_41E8_88BBF20A62BF_camera",
    "media": "this.panorama_CAC34B9F_DDB2_B44B_41E8_88BBF20A62BF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)"
   },
   {
    "camera": "this.panorama_CAC16582_DDB2_7C35_41C1_C81F659D1B46_camera",
    "media": "this.panorama_CAC16582_DDB2_7C35_41C1_C81F659D1B46",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)"
   },
   {
    "camera": "this.panorama_CAC2DE39_DDB3_8C57_41EA_CC36B38734DC_camera",
    "media": "this.panorama_CAC2DE39_DDB3_8C57_41EA_CC36B38734DC",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)"
   },
   {
    "camera": "this.panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785_camera",
    "media": "this.panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)"
   },
   {
    "camera": "this.panorama_C63EE93A_E045_B00E_41C5_DCF633D66111_camera",
    "media": "this.panorama_C63EE93A_E045_B00E_41C5_DCF633D66111",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)"
   },
   {
    "camera": "this.panorama_C60E45C6_E045_D006_41C4_93EAC8E3A579_camera",
    "media": "this.panorama_C60E45C6_E045_D006_41C4_93EAC8E3A579",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)"
   },
   {
    "camera": "this.panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB_camera",
    "media": "this.panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)"
   },
   {
    "camera": "this.panorama_F35A202E_E35F_B870_41D9_700532564C0E_camera",
    "media": "this.panorama_F35A202E_E35F_B870_41D9_700532564C0E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CBBD61BE_E3F3_9850_41B8_4405A7465314, false, -1, this.effect_CE03ACE8_E3F1_A9F0_41D4_1D9D79FC3040, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36); this.setComponentVisibility(this.Image_CBBD61BE_E3F3_9850_41B8_4405A7465314, true, -1, this.effect_CE03BCE8_E3F1_A9F0_41D2_EA3895A59507, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_EE318363_E350_B8F0_41D8_008DE2D66DA9_camera",
    "media": "this.panorama_EE318363_E350_B8F0_41D8_008DE2D66DA9",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CBBD61BE_E3F3_9850_41B8_4405A7465314, false, -1, this.effect_CE058CE9_E3F1_A9F0_41EB_E6BC09BFBF21, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37); this.setComponentVisibility(this.Image_CBBD61BE_E3F3_9850_41B8_4405A7465314, true, -1, this.effect_CE054CE9_E3F1_A9F0_41E9_F682F0E9BAED, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_EE2C6014_E350_9850_41E6_64C8E8839E0A_camera",
    "media": "this.panorama_EE2C6014_E350_9850_41E6_64C8E8839E0A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CBBD61BE_E3F3_9850_41B8_4405A7465314, false, -1, this.effect_CE074CEA_E3F1_A9F0_41DD_7636162E3B69, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38); this.setComponentVisibility(this.Image_CBBD61BE_E3F3_9850_41B8_4405A7465314, true, -1, this.effect_CE075CEA_E3F1_A9F0_41E1_1095EF169343, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_EE214A39_E351_A850_41D5_17A6AD20962B_camera",
    "media": "this.panorama_EE214A39_E351_A850_41D5_17A6AD20962B",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CBBD61BE_E3F3_9850_41B8_4405A7465314, false, -1, this.effect_CE191CEB_E3F1_A9F0_41C0_57E9AD39604A, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39); this.setComponentVisibility(this.Image_CBBD61BE_E3F3_9850_41B8_4405A7465314, true, -1, this.effect_CE06ECEB_E3F1_A9F0_4179_B77D83F15DAE, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_EC107D15_E350_A850_41EA_AD8D0247247A_camera",
    "media": "this.panorama_EC107D15_E350_A850_41EA_AD8D0247247A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)"
   },
   {
    "camera": "this.panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B_camera",
    "media": "this.panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_C402A797_E3F0_B850_41DD_CA01DB1F3931, false, -1, this.effect_CE18DCEC_E3F1_A9F0_41DC_E0F11DB2DD98, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41); this.setComponentVisibility(this.Image_C402A797_E3F0_B850_41DD_CA01DB1F3931, true, -1, this.effect_CE18BCEC_E3F1_A9F0_41C2_B20BDA06ACD7, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_FC918AA9_E3D0_A870_41EB_D5B5850A3D8F_camera",
    "media": "this.panorama_FC918AA9_E3D0_A870_41EB_D5B5850A3D8F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_C402A797_E3F0_B850_41DD_CA01DB1F3931, false, -1, this.effect_CE1ABCED_E3F1_A9F0_41E2_AB9E2DF27BB5, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42); this.setComponentVisibility(this.Image_C402A797_E3F0_B850_41DD_CA01DB1F3931, true, -1, this.effect_CE1A9CED_E3F1_A9F0_41C6_A1D6E3EA2B85, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_FC929735_E3D0_9850_41EC_25CF37423A69_camera",
    "media": "this.panorama_FC929735_E3D0_9850_41EC_25CF37423A69",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_C402A797_E3F0_B850_41DD_CA01DB1F3931, false, -1, this.effect_CE1C4CEE_E3F1_A9F0_41D1_E8FA78EE5C89, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43); this.setComponentVisibility(this.Image_C402A797_E3F0_B850_41DD_CA01DB1F3931, true, -1, this.effect_CE1C2CEE_E3F1_A9F0_41EA_21B7473D5F80, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_C27F5156_E3D1_F8D0_4183_11DB6730E03F_camera",
    "media": "this.panorama_C27F5156_E3D1_F8D0_4183_11DB6730E03F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_C402A797_E3F0_B850_41DD_CA01DB1F3931, false, -1, this.effect_CE1E3CF0_E3F1_A9D0_41E8_DB81753BDF29, 'hideEffect', false); this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 0); this.setComponentVisibility(this.Image_C402A797_E3F0_B850_41DD_CA01DB1F3931, true, -1, this.effect_CE1E0CF0_E3F1_A9D0_41E3_48F82F8E7942, 'showEffect', false)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist",
  "items": [
   {
    "camera": "this.panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205_camera",
    "media": "this.panorama_D6F135E0_DD6F_9FF5_41CA_CE414091C205",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CE54A9E6_DFCA_5006_41E9_9A934826CD14, false, -1, this.effect_CAD53233_DFCA_D01E_41D8_9A0DF48FA3DF, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 0, 1); this.setComponentVisibility(this.Image_CE54A9E6_DFCA_5006_41E9_9A934826CD14, true, -1, this.effect_CAD54232_DFCA_D01E_41EB_5E97F3467642, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1_camera",
    "media": "this.panorama_D7A35D6A_DD6F_8CF5_41E2_DB50432FE9C1",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 1, 2)"
   },
   {
    "camera": "this.panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67_camera",
    "media": "this.panorama_D7A19AB4_DD6F_945D_41EA_728ADDF6CB67",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CEC09C0E_DFCA_5006_41E1_67F39A3F6CC3, false, -1, this.effect_CAD6E234_DFCA_D01A_41E5_BD6CC7BC377C, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 2, 3); this.setComponentVisibility(this.Image_CEC09C0E_DFCA_5006_41E1_67F39A3F6CC3, true, -1, this.effect_CAD61234_DFCA_D01A_41D9_2917B781A0C9, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6_camera",
    "media": "this.panorama_D7A0D5BF_DD6F_FC4B_41E2_F494E52FBCE6",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CEC09C0E_DFCA_5006_41E1_67F39A3F6CC3, false, -1, this.effect_CAD05235_DFCA_D01A_41C2_3B1BEAE52FDF, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 3, 4); this.setComponentVisibility(this.Image_CEC09C0E_DFCA_5006_41E1_67F39A3F6CC3, true, -1, this.effect_CAD04235_DFCA_D01A_41D5_50D16EE0F53C, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_D7A04082_DD6F_9435_41D2_3D698903E11A_camera",
    "media": "this.panorama_D7A04082_DD6F_9435_41D2_3D698903E11A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CEC09C0E_DFCA_5006_41E1_67F39A3F6CC3, false, -1, this.effect_CAD39235_DFCA_D01A_41E1_8A559FE85B92, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 4, 5); this.setComponentVisibility(this.Image_CEC09C0E_DFCA_5006_41E1_67F39A3F6CC3, true, -1, this.effect_CAD3B235_DFCA_D01A_41E2_DBE6287669E2, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_D7A37B1A_DD6F_9455_41BB_D7D536FD0F2E_camera",
    "media": "this.panorama_D7A37B1A_DD6F_9455_41BB_D7D536FD0F2E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CEC09C0E_DFCA_5006_41E1_67F39A3F6CC3, false, -1, this.effect_CACDC236_DFCA_D006_41E0_255F99CCFB11, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 5, 6); this.setComponentVisibility(this.Image_CEC09C0E_DFCA_5006_41E1_67F39A3F6CC3, true, -1, this.effect_CACDF236_DFCA_D006_41E8_B94E831833D4, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E_camera",
    "media": "this.panorama_D7A095DB_DD6F_BFCB_41E3_2D038329700E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CF3D85DE_DFC5_F006_41BD_BFFFFC34A6C0, false, -1, this.effect_CACF0237_DFCA_D006_41EA_B3B11EDCBC9A, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 6, 7); this.setComponentVisibility(this.Image_CF3D85DE_DFC5_F006_41BD_BFFFFC34A6C0, true, -1, this.effect_CACF2237_DFCA_D006_41C8_8BAEDE997F4D, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_D7BEB0AB_DD6F_944B_41C0_25F4C9ACE188_camera",
    "media": "this.panorama_D7BEB0AB_DD6F_944B_41C0_25F4C9ACE188",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CF3D85DE_DFC5_F006_41BD_BFFFFC34A6C0, false, -1, this.effect_CAC95237_DFCA_D006_41E7_F610BDEE62CE, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 7, 8); this.setComponentVisibility(this.Image_CF3D85DE_DFC5_F006_41BD_BFFFFC34A6C0, true, -1, this.effect_CAC97237_DFCA_D006_41E2_93CDA8970C50, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1_camera",
    "media": "this.panorama_D7BF8BE0_DD6F_8BF5_41E7_BD5E27692FB1",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CED383D7_DFCA_7006_41B2_9A511CB7E1BF, false, -1, this.effect_CAC89238_DFCA_D00A_41E7_093808EB9747, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 8, 9); this.setComponentVisibility(this.Image_CED383D7_DFCA_7006_41B2_9A511CB7E1BF, true, -1, this.effect_CAC8A238_DFCA_D00A_41E9_57AF8FF1A42C, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31_camera",
    "media": "this.panorama_CB6DAFC0_DD95_8C35_41DB_821D63DFAB31",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CE4F77E3_DFC6_503E_41E1_520044FD779C, false, -1, this.effect_CACAD239_DFCA_D00A_41CF_1808476D0E9F, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 9, 10); this.setComponentVisibility(this.Image_CE4F77E3_DFC6_503E_41E1_520044FD779C, true, -1, this.effect_CACAF239_DFCA_D00A_41E5_11B3879DFF1E, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_CBF1EC35_DD92_8C5F_41E4_392F270AEF09_camera",
    "media": "this.panorama_CBF1EC35_DD92_8C5F_41E4_392F270AEF09",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CF370408_DFC6_B00A_41E8_3A1672CF74FE, false, -1, this.effect_CAC3C23C_DFCA_D00A_41B1_A13A7FF7BAD2, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 10, 11); this.setComponentVisibility(this.Image_CF370408_DFC6_B00A_41E8_3A1672CF74FE, true, -1, this.effect_CAC3F23B_DFCA_D00E_41D4_20FF21DE2D0A, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_CBF1E0A6_DD95_947A_41C4_9D6CC9ECEEF2_camera",
    "media": "this.panorama_CBF1E0A6_DD95_947A_41C4_9D6CC9ECEEF2",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CE4F77E3_DFC6_503E_41E1_520044FD779C, false, -1, this.effect_CAC41239_DFCA_D00A_41BD_E86FFDDD5654, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 11, 12); this.setComponentVisibility(this.Image_CE4F77E3_DFC6_503E_41E1_520044FD779C, true, -1, this.effect_CAC43239_DFCA_D00A_41E1_8B1CD8C4D534, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_CBF6D115_DD92_945F_4198_78411642ECFD_camera",
    "media": "this.panorama_CBF6D115_DD92_945F_4198_78411642ECFD",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CE9FBCB0_DFCB_B01A_41CD_993611125E8B, false, -1, this.effect_CAC1923B_DFCA_D00E_41C6_DE76A91B34EF, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 12, 13); this.setComponentVisibility(this.Image_CE9FBCB0_DFCB_B01A_41CD_993611125E8B, true, -1, this.effect_CAC1B23B_DFCA_D00E_41BA_80044B535F42, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_C507F600_DD92_9C35_41C2_064D860CC824_camera",
    "media": "this.panorama_C507F600_DD92_9C35_41C2_064D860CC824",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CE9FBCB0_DFCB_B01A_41CD_993611125E8B, false, -1, this.effect_CAC6423A_DFCA_D00E_41D8_2062ED14351B, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 13, 14); this.setComponentVisibility(this.Image_CE9FBCB0_DFCB_B01A_41CD_993611125E8B, true, -1, this.effect_CAC6723A_DFCA_D00E_41EB_03790BF8BE5B, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_CBF4AF3A_DDAD_8C55_41B9_623F97D0E5FB_camera",
    "media": "this.panorama_CBF4AF3A_DDAD_8C55_41B9_623F97D0E5FB",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CE9FBCB0_DFCB_B01A_41CD_993611125E8B, false, -1, this.effect_CAC3B23C_DFCA_D00A_41D9_58E42CEAB33D, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 14, 15); this.setComponentVisibility(this.Image_CE9FBCB0_DFCB_B01A_41CD_993611125E8B, true, -1, this.effect_CAC3C23C_DFCA_D00A_41C9_46E66A96A9F1, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_CBF1C718_DDAD_9C55_41E1_12BD06150836_camera",
    "media": "this.panorama_CBF1C718_DDAD_9C55_41E1_12BD06150836",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CE9FBCB0_DFCB_B01A_41CD_993611125E8B, false, -1, this.effect_CABDF23D_DFCA_D00A_41C1_1DCE7BE455E2, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 15, 16); this.setComponentVisibility(this.Image_CE9FBCB0_DFCB_B01A_41CD_993611125E8B, true, -1, this.effect_CABD123D_DFCA_D00A_41DE_C2868738B8FD, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_C5D4611E_DDAE_944D_41C8_5DB5BFCC735A_camera",
    "media": "this.panorama_C5D4611E_DDAE_944D_41C8_5DB5BFCC735A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 16, 17)"
   },
   {
    "camera": "this.panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584_camera",
    "media": "this.panorama_CADE7CA3_DDAE_8C7B_41E7_5BC09C318584",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 17, 18)"
   },
   {
    "camera": "this.panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A_camera",
    "media": "this.panorama_CADD0627_DDAE_BC7B_4196_50E0C477C20A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 18, 19)"
   },
   {
    "camera": "this.panorama_CADC01B2_DDAE_7455_41BB_4C410595CF44_camera",
    "media": "this.panorama_CADC01B2_DDAE_7455_41BB_4C410595CF44",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 19, 20)"
   },
   {
    "camera": "this.panorama_CADBCBC2_DDAD_9435_41B7_CC92B1FC3646_camera",
    "media": "this.panorama_CADBCBC2_DDAD_9435_41B7_CC92B1FC3646",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 20, 21)"
   },
   {
    "camera": "this.panorama_CADE77AE_DDAD_9C4D_41D1_FF92D176B50E_camera",
    "media": "this.panorama_CADE77AE_DDAD_9C4D_41D1_FF92D176B50E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 21, 22)"
   },
   {
    "camera": "this.panorama_CADDC27B_DDAD_94CB_41DB_BCD42BD932EE_camera",
    "media": "this.panorama_CADDC27B_DDAD_94CB_41DB_BCD42BD932EE",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 22, 23)"
   },
   {
    "camera": "this.panorama_CADC0CFE_DDAD_8DCD_41E9_12A06B7F42D3_camera",
    "media": "this.panorama_CADC0CFE_DDAD_8DCD_41E9_12A06B7F42D3",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 23, 24)"
   },
   {
    "camera": "this.panorama_CAC1F537_DDB2_7C5B_41C4_AAA50F947CE5_camera",
    "media": "this.panorama_CAC1F537_DDB2_7C5B_41C4_AAA50F947CE5",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 24, 25)"
   },
   {
    "camera": "this.panorama_CAC23F83_DDB2_8C3B_41C4_3093907CC858_camera",
    "media": "this.panorama_CAC23F83_DDB2_8C3B_41C4_3093907CC858",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 25, 26)"
   },
   {
    "camera": "this.panorama_CAC43919_DDB2_9457_41CC_D3D70954931A_camera",
    "media": "this.panorama_CAC43919_DDB2_9457_41CC_D3D70954931A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 26, 27)"
   },
   {
    "camera": "this.panorama_CAC2A28C_DDB2_944D_41D6_C8F69D658B13_camera",
    "media": "this.panorama_CAC2A28C_DDB2_944D_41D6_C8F69D658B13",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 27, 28)"
   },
   {
    "camera": "this.panorama_CAC34B9F_DDB2_B44B_41E8_88BBF20A62BF_camera",
    "media": "this.panorama_CAC34B9F_DDB2_B44B_41E8_88BBF20A62BF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 28, 29)"
   },
   {
    "camera": "this.panorama_CAC16582_DDB2_7C35_41C1_C81F659D1B46_camera",
    "media": "this.panorama_CAC16582_DDB2_7C35_41C1_C81F659D1B46",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 29, 30)"
   },
   {
    "camera": "this.panorama_CAC2DE39_DDB3_8C57_41EA_CC36B38734DC_camera",
    "media": "this.panorama_CAC2DE39_DDB3_8C57_41EA_CC36B38734DC",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 30, 31)"
   },
   {
    "camera": "this.panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785_camera",
    "media": "this.panorama_C6C6FCDC_E046_500A_41E8_E154E63BB785",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 31, 32)"
   },
   {
    "camera": "this.panorama_C63EE93A_E045_B00E_41C5_DCF633D66111_camera",
    "media": "this.panorama_C63EE93A_E045_B00E_41C5_DCF633D66111",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 32, 33)"
   },
   {
    "camera": "this.panorama_C60E45C6_E045_D006_41C4_93EAC8E3A579_camera",
    "media": "this.panorama_C60E45C6_E045_D006_41C4_93EAC8E3A579",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 33, 34)"
   },
   {
    "camera": "this.panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB_camera",
    "media": "this.panorama_C60F5165_E045_F03A_41EA_4A6F8D34A7DB",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 34, 35)"
   },
   {
    "camera": "this.panorama_F35A202E_E35F_B870_41D9_700532564C0E_camera",
    "media": "this.panorama_F35A202E_E35F_B870_41D9_700532564C0E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CBBD61BE_E3F3_9850_41B8_4405A7465314, false, -1, this.effect_CE03ACE8_E3F1_A9F0_41D4_1D9D79FC3040, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 35, 36); this.setComponentVisibility(this.Image_CBBD61BE_E3F3_9850_41B8_4405A7465314, true, -1, this.effect_CE03BCE8_E3F1_A9F0_41D2_EA3895A59507, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_EE318363_E350_B8F0_41D8_008DE2D66DA9_camera",
    "media": "this.panorama_EE318363_E350_B8F0_41D8_008DE2D66DA9",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CBBD61BE_E3F3_9850_41B8_4405A7465314, false, -1, this.effect_CE058CE9_E3F1_A9F0_41EB_E6BC09BFBF21, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 36, 37); this.setComponentVisibility(this.Image_CBBD61BE_E3F3_9850_41B8_4405A7465314, true, -1, this.effect_CE054CE9_E3F1_A9F0_41E9_F682F0E9BAED, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_EE2C6014_E350_9850_41E6_64C8E8839E0A_camera",
    "media": "this.panorama_EE2C6014_E350_9850_41E6_64C8E8839E0A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CBBD61BE_E3F3_9850_41B8_4405A7465314, false, -1, this.effect_CE074CEA_E3F1_A9F0_41DD_7636162E3B69, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 37, 38); this.setComponentVisibility(this.Image_CBBD61BE_E3F3_9850_41B8_4405A7465314, true, -1, this.effect_CE075CEA_E3F1_A9F0_41E1_1095EF169343, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_EE214A39_E351_A850_41D5_17A6AD20962B_camera",
    "media": "this.panorama_EE214A39_E351_A850_41D5_17A6AD20962B",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_CBBD61BE_E3F3_9850_41B8_4405A7465314, false, -1, this.effect_CE191CEB_E3F1_A9F0_41C0_57E9AD39604A, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 38, 39); this.setComponentVisibility(this.Image_CBBD61BE_E3F3_9850_41B8_4405A7465314, true, -1, this.effect_CE06ECEB_E3F1_A9F0_4179_B77D83F15DAE, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_EC107D15_E350_A850_41EA_AD8D0247247A_camera",
    "media": "this.panorama_EC107D15_E350_A850_41EA_AD8D0247247A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 39, 40)"
   },
   {
    "camera": "this.panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B_camera",
    "media": "this.panorama_FD6EAFFE_E3D1_A7D0_41E0_A13816E7A07B",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_C402A797_E3F0_B850_41DD_CA01DB1F3931, false, -1, this.effect_CE18DCEC_E3F1_A9F0_41DC_E0F11DB2DD98, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 40, 41); this.setComponentVisibility(this.Image_C402A797_E3F0_B850_41DD_CA01DB1F3931, true, -1, this.effect_CE18BCEC_E3F1_A9F0_41C2_B20BDA06ACD7, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_FC918AA9_E3D0_A870_41EB_D5B5850A3D8F_camera",
    "media": "this.panorama_FC918AA9_E3D0_A870_41EB_D5B5850A3D8F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_C402A797_E3F0_B850_41DD_CA01DB1F3931, false, -1, this.effect_CE1ABCED_E3F1_A9F0_41E2_AB9E2DF27BB5, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 41, 42); this.setComponentVisibility(this.Image_C402A797_E3F0_B850_41DD_CA01DB1F3931, true, -1, this.effect_CE1A9CED_E3F1_A9F0_41C6_A1D6E3EA2B85, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_FC929735_E3D0_9850_41EC_25CF37423A69_camera",
    "media": "this.panorama_FC929735_E3D0_9850_41EC_25CF37423A69",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_C402A797_E3F0_B850_41DD_CA01DB1F3931, false, -1, this.effect_CE1C4CEE_E3F1_A9F0_41D1_E8FA78EE5C89, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 42, 43); this.setComponentVisibility(this.Image_C402A797_E3F0_B850_41DD_CA01DB1F3931, true, -1, this.effect_CE1C2CEE_E3F1_A9F0_41EA_21B7473D5F80, 'showEffect', false)"
   },
   {
    "camera": "this.panorama_C27F5156_E3D1_F8D0_4183_11DB6730E03F_camera",
    "media": "this.panorama_C27F5156_E3D1_F8D0_4183_11DB6730E03F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "end": "this.setComponentVisibility(this.Image_C402A797_E3F0_B850_41DD_CA01DB1F3931, false, -1, this.effect_CE1E3CF0_E3F1_A9D0_41E8_DB81753BDF29, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist, 43, 0); this.setComponentVisibility(this.Image_C402A797_E3F0_B850_41DD_CA01DB1F3931, true, -1, this.effect_CE1E0CF0_E3F1_A9D0_41E3_48F82F8E7942, 'showEffect', false)"
   }
  ]
 },
 {
  "minimumZoomFactor": 0.5,
  "fieldOfViewOverlayOutsideOpacity": 0,
  "width": 1250,
  "initialZoomFactor": 1,
  "id": "map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E",
  "overlays": [
   {
    "rollOverDisplay": false,
    "image": {
     "x": 405.52,
     "y": 603.87,
     "class": "HotspotMapOverlayImage",
     "height": 30,
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 30,
        "height": 30,
        "url": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E_HS_0.png"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "id": "overlay_FFAABD15_E3B0_E850_41DC_D77B71381B6C",
    "useHandCursor": true,
    "map": {
     "offsetX": 0,
     "height": 30,
     "x": 405.52,
     "offsetY": 0,
     "y": 603.87,
     "class": "HotspotMapOverlayMap",
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 15,
        "height": 15,
        "url": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E_HS_0_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "toolTip": "CHECK IN",
      "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)"
     }
    ]
   },
   {
    "rollOverDisplay": false,
    "image": {
     "x": 521.13,
     "y": 423.71,
     "class": "HotspotMapOverlayImage",
     "height": 30,
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 30,
        "height": 30,
        "url": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E_HS_1.png"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "id": "overlay_FFD166AE_E3B0_B870_41D0_D5E8A06C8757",
    "useHandCursor": true,
    "map": {
     "offsetX": 0,
     "height": 30,
     "x": 521.13,
     "offsetY": 0,
     "y": 423.71,
     "class": "HotspotMapOverlayMap",
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 15,
        "height": 15,
        "url": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E_HS_1_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "toolTip": "MEETING ROOM",
      "click": "this.mainPlayList.set('selectedIndex', 11); this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)"
     }
    ]
   },
   {
    "rollOverDisplay": false,
    "image": {
     "x": 406.69,
     "y": 494.72,
     "class": "HotspotMapOverlayImage",
     "height": 30,
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 30,
        "height": 30,
        "url": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E_HS_2.png"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "id": "overlay_FF3545F4_E3B1_BBD0_41E8_34895ABED1C6",
    "useHandCursor": true,
    "map": {
     "offsetX": 0,
     "height": 30,
     "x": 406.69,
     "offsetY": 0,
     "y": 494.72,
     "class": "HotspotMapOverlayMap",
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 15,
        "height": 15,
        "url": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E_HS_2_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "toolTip": "LOBBY",
      "click": "this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)"
     }
    ]
   },
   {
    "rollOverDisplay": false,
    "image": {
     "x": 813.38,
     "y": 421.36,
     "class": "HotspotMapOverlayImage",
     "height": 30,
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 30,
        "height": 30,
        "url": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E_HS_3.png"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "id": "overlay_FFD3218C_E3B0_9830_41B6_9AA48F66AADE",
    "useHandCursor": true,
    "map": {
     "offsetX": 0,
     "height": 30,
     "x": 813.38,
     "offsetY": 0,
     "y": 421.36,
     "class": "HotspotMapOverlayMap",
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 15,
        "height": 15,
        "url": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E_HS_3_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "toolTip": "FITNESS CENTER",
      "click": "this.mainPlayList.set('selectedIndex', 10); this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)"
     }
    ]
   },
   {
    "rollOverDisplay": false,
    "image": {
     "x": 909.62,
     "y": 360.92,
     "class": "HotspotMapOverlayImage",
     "height": 30,
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 30,
        "height": 30,
        "url": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E_HS_4.png"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "id": "overlay_FE2713A9_E3B3_9870_41E7_0F2BFB12D582",
    "useHandCursor": true,
    "map": {
     "offsetX": 0,
     "height": 30,
     "x": 909.62,
     "offsetY": 0,
     "y": 360.92,
     "class": "HotspotMapOverlayMap",
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 15,
        "height": 15,
        "url": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E_HS_4_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "toolTip": "SWIMMING POOL",
      "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, false, 0, null, null, false)"
     }
    ]
   },
   {
    "rollOverDisplay": false,
    "image": {
     "x": 485.92,
     "y": 593.9,
     "class": "HotspotMapOverlayImage",
     "height": 30,
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 30,
        "height": 30,
        "url": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E_HS_5.png"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "id": "overlay_FEDA9778_E3B0_B8D0_418D_3DDBB958A8A3",
    "useHandCursor": true,
    "map": {
     "offsetX": 0,
     "height": 30,
     "x": 485.92,
     "offsetY": 0,
     "y": 593.9,
     "class": "HotspotMapOverlayMap",
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 15,
        "height": 15,
        "url": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E_HS_5_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "toolTip": "BUSINESS CENTER",
      "click": "this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)"
     }
    ]
   },
   {
    "rollOverDisplay": false,
    "image": {
     "x": 407.86,
     "y": 367.37,
     "class": "HotspotMapOverlayImage",
     "height": 30,
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 30,
        "height": 30,
        "url": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E_HS_6.png"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "id": "overlay_FE7EA744_E3B1_9830_41CF_E07658C63641",
    "useHandCursor": true,
    "map": {
     "offsetX": 0,
     "height": 30,
     "x": 407.86,
     "offsetY": 0,
     "y": 367.37,
     "class": "HotspotMapOverlayMap",
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 15,
        "height": 15,
        "url": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E_HS_6_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "toolTip": "RESTAURANT",
      "click": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)"
     }
    ]
   },
   {
    "rollOverDisplay": false,
    "image": {
     "x": 406.69,
     "y": 288.73,
     "class": "HotspotMapOverlayImage",
     "height": 30,
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 30,
        "height": 30,
        "url": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E_HS_7.png"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "id": "overlay_FDAC21DA_E3B0_9BD0_417F_BA3BA94CDD80",
    "useHandCursor": true,
    "map": {
     "offsetX": 0,
     "height": 30,
     "x": 406.69,
     "offsetY": 0,
     "y": 288.73,
     "class": "HotspotMapOverlayMap",
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 15,
        "height": 15,
        "url": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E_HS_7_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "toolTip": "PATIO",
      "click": "this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)"
     }
    ]
   },
   {
    "rollOverDisplay": false,
    "image": {
     "x": 400.23,
     "y": 731.22,
     "class": "HotspotMapOverlayImage",
     "height": 30,
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 30,
        "height": 30,
        "url": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E_HS_8.png"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "id": "overlay_FD464FED_E3BF_E7F0_41D9_F9632E1F76A5",
    "useHandCursor": true,
    "map": {
     "offsetX": 0,
     "height": 30,
     "x": 400.23,
     "offsetY": 0,
     "y": 731.22,
     "class": "HotspotMapOverlayMap",
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 15,
        "height": 15,
        "url": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E_HS_8_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "toolTip": "EXTERIOR ENTRY",
      "click": "this.mainPlayList.set('selectedIndex', 18); this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)"
     }
    ]
   }
  ],
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 1250,
     "height": 1000,
     "url": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E.png"
    },
    {
     "class": "ImageResourceLevel",
     "width": 572,
     "height": 458,
     "url": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E_lq.png",
     "tags": "preload"
    }
   ]
  },
  "maximumZoomFactor": 1.2,
  "fieldOfViewOverlayInsideColor": "#FFFFFF",
  "scaleMode": "fit_inside",
  "class": "Map",
  "height": 1000,
  "label": "HotelFloorplan",
  "thumbnailUrl": "media/map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E_t.png",
  "fieldOfViewOverlayRadiusScale": 0.3
 },
 {
  "class": "MapPlayer",
  "movementMode": "constrained",
  "viewerArea": {
   "toolTipBorderColor": "#767676",
   "paddingLeft": 0,
   "toolTipTextShadowBlurRadius": 3,
   "progressBorderSize": 0,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarHeight": 10,
   "playbackBarHeadWidth": 6,
   "toolTipShadowVerticalLength": 0,
   "height": "100%",
   "toolTipPaddingBottom": 4,
   "playbackBarProgressOpacity": 1,
   "toolTipFontStyle": "normal",
   "playbackBarBorderSize": 0,
   "toolTipFontFamily": "Arial",
   "propagateClick": false,
   "progressBottom": 2,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarRight": 0,
   "toolTipShadowOpacity": 1,
   "paddingRight": 0,
   "toolTipFontColor": "#606060",
   "playbackBarBackgroundColorDirection": "vertical",
   "toolTipBackgroundColor": "#F6F6F6",
   "shadow": false,
   "toolTipPaddingRight": 6,
   "progressBarBorderSize": 0,
   "playbackBarProgressBorderSize": 0,
   "playbackBarHeadShadowColor": "#000000",
   "progressBarBorderRadius": 0,
   "toolTipPaddingTop": 4,
   "playbackBarProgressBorderRadius": 0,
   "toolTipOpacity": 1,
   "progressBorderRadius": 0,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipFontWeight": "normal",
   "playbackBarHeadShadowVerticalLength": 0,
   "toolTipShadowColor": "#333333",
   "progressRight": 0,
   "progressHeight": 10,
   "playbackBarHeadShadowBlurRadius": 3,
   "progressBarBorderColor": "#0066FF",
   "progressOpacity": 1,
   "playbackBarBorderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "displayTooltipInTouchScreens": true,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadOpacity": 1,
   "top": "0%",
   "playbackBarHeadShadow": true,
   "paddingTop": 0,
   "toolTipPaddingLeft": 6,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "toolTipShadowHorizontalLength": 0,
   "width": "100%",
   "toolTipDisplayTime": 600,
   "id": "MapViewer",
   "playbackBarHeadBorderRadius": 0,
   "progressBackgroundColorDirection": "vertical",
   "toolTipTextShadowOpacity": 0,
   "toolTipBorderRadius": 3,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "borderRadius": 0,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarBottom": 0,
   "toolTipShadowSpread": 0,
   "progressBackgroundOpacity": 1,
   "playbackBarOpacity": 1,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadShadowOpacity": 0.7,
   "progressBorderColor": "#FFFFFF",
   "toolTipShadowBlurRadius": 3,
   "progressBarOpacity": 1,
   "toolTipFontSize": 12,
   "paddingBottom": 0,
   "minHeight": 1,
   "transitionMode": "blending",
   "playbackBarBorderColor": "#FFFFFF",
   "toolTipBorderSize": 1,
   "toolTipTextShadowColor": "#000000",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarHeadBorderSize": 0,
   "minWidth": 1,
   "data": {
    "name": "Floor Plan"
   },
   "playbackBarHeadBorderColor": "#000000",
   "progressBackgroundColorRatios": [
    0.01
   ],
   "class": "ViewerArea",
   "transitionDuration": 500,
   "progressLeft": 0,
   "left": "0%",
   "playbackBarLeft": 0,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarHeadHeight": 15,
   "borderSize": 0
  },
  "id": "MapViewerMapPlayer"
 },
 {
  "minimumZoomFactor": 0.5,
  "fieldOfViewOverlayOutsideOpacity": 0,
  "width": 1250,
  "initialZoomFactor": 1,
  "id": "map_CBD92CF8_E3F0_A9D0_41D0_FE49716441AD",
  "overlays": [
   {
    "rollOverDisplay": false,
    "image": {
     "x": 468.9,
     "y": 490.61,
     "class": "HotspotMapOverlayImage",
     "height": 30,
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 30,
        "height": 30,
        "url": "media/map_CBD92CF8_E3F0_A9D0_41D0_FE49716441AD_HS_0.png"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "id": "overlay_CBBFC133_E3EF_9850_41B9_5F2D22B9CFC0",
    "useHandCursor": true,
    "map": {
     "offsetX": 0,
     "height": 30,
     "x": 468.9,
     "offsetY": 0,
     "y": 490.61,
     "class": "HotspotMapOverlayMap",
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 15,
        "height": 15,
        "url": "media/map_CBD92CF8_E3F0_A9D0_41D0_FE49716441AD_HS_0_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "toolTip": "LEVEL 4 CORRIDOR",
      "click": "this.mainPlayList.set('selectedIndex', 39); this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)"
     }
    ]
   },
   {
    "rollOverDisplay": false,
    "image": {
     "x": 461.85,
     "y": 575.12,
     "class": "HotspotMapOverlayImage",
     "height": 30,
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 30,
        "height": 30,
        "url": "media/map_CBD92CF8_E3F0_A9D0_41D0_FE49716441AD_HS_1.png"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "id": "overlay_CC4C770A_E3D0_B830_41D9_E2643A9C57CF",
    "useHandCursor": true,
    "map": {
     "offsetX": 0,
     "height": 30,
     "x": 461.85,
     "offsetY": 0,
     "y": 575.12,
     "class": "HotspotMapOverlayMap",
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 15,
        "height": 15,
        "url": "media/map_CBD92CF8_E3F0_A9D0_41D0_FE49716441AD_HS_1_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "toolTip": "KING SUITE",
      "click": "this.mainPlayList.set('selectedIndex', 36); this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)"
     }
    ]
   },
   {
    "rollOverDisplay": false,
    "image": {
     "x": 262.32,
     "y": 410.8,
     "class": "HotspotMapOverlayImage",
     "height": 30,
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 30,
        "height": 30,
        "url": "media/map_CBD92CF8_E3F0_A9D0_41D0_FE49716441AD_HS_2.png"
       }
      ]
     }
    },
    "data": {
     "label": "Image"
    },
    "id": "overlay_D28A04E9_E3D0_99F0_41DB_0532D8F566C3",
    "useHandCursor": true,
    "map": {
     "offsetX": 0,
     "height": 30,
     "x": 262.32,
     "offsetY": 0,
     "y": 410.8,
     "class": "HotspotMapOverlayMap",
     "width": 30,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "width": 15,
        "height": 15,
        "url": "media/map_CBD92CF8_E3F0_A9D0_41D0_FE49716441AD_HS_2_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "class": "HotspotMapOverlayArea",
      "mapColor": "#FF0000",
      "toolTip": "QUEEN ROOM",
      "click": "this.mainPlayList.set('selectedIndex', 42); this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)"
     }
    ]
   }
  ],
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 1250,
     "height": 1000,
     "url": "media/map_CBD92CF8_E3F0_A9D0_41D0_FE49716441AD.png"
    },
    {
     "class": "ImageResourceLevel",
     "width": 572,
     "height": 458,
     "url": "media/map_CBD92CF8_E3F0_A9D0_41D0_FE49716441AD_lq.png",
     "tags": "preload"
    }
   ]
  },
  "maximumZoomFactor": 1.2,
  "fieldOfViewOverlayInsideColor": "#FFFFFF",
  "scaleMode": "fit_inside",
  "class": "Map",
  "height": 1000,
  "label": "Level4",
  "thumbnailUrl": "media/map_CBD92CF8_E3F0_A9D0_41D0_FE49716441AD_t.png",
  "fieldOfViewOverlayRadiusScale": 0.3
 },
 {
  "class": "PlayList",
  "id": "DropDown_CFA46741_E3D0_9830_41D3_36CCB08ACA00_playlist",
  "items": [
   {
    "class": "MapPlayListItem",
    "media": "this.map_F88F3CEF_E350_E9F0_41E4_56BB433F6F8E",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": "this.MapViewerMapPlayer"
   },
   {
    "class": "MapPlayListItem",
    "media": "this.map_CBD92CF8_E3F0_A9D0_41D0_FE49716441AD",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": "this.MapViewerMapPlayer"
   }
  ]
 },
 "this.Menu_D5B909F0_E3B0_ABD0_41E0_1E02FA8FE5B2",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D566CA63_E3B0_A8F0_41C4_8805A7642BED",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -156,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D57EDA7A_E3B0_A8D0_41D9_6B4BA62142AE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 131.09,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D577AA96_E3B0_A850_41BF_192EE3DCA252",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -36.61,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D5010AB1_E3B0_A850_41DA_EDC42B872C85",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 82.78,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D5192AC8_E3B0_A830_41E5_D8B32C48E137",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 72,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D5137AE0_E3B0_A9F0_41D0_2B08414794EF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 150.53,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D52B3AEC_E3B0_A9F0_41B8_677B9FA39AB1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 150.53,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D5250AF7_E3B0_A9D0_41E7_59331AFE90D5",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 72.91,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D53EEB03_E3B0_A830_41E2_E25F8893D5CB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 158.58,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D5373B0F_E3B0_A830_41D0_AB2EEAF82A15",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -33.72,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D4C17B1E_E3B0_A850_41E5_671231DB6C34",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -125.47,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D4DA4B2A_E3B0_A870_41BB_A6F73B188A89",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -23.24,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D4D42B36_E3B0_A850_41DB_322251007950",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 46.03,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D4ED2B42_E3B0_A830_41AB_F386167BE3F4",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -86.43,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D4F84B4E_E3B0_A830_41E7_E70523C63845",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 111.34,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D4F16B5E_E3B0_A8D0_41CA_22006BF8FD54",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -89.16,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D48CFB6A_E3B0_A8F0_41D2_90BD3351FE81",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 96.91,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D4863B76_E3B0_A8D0_41D5_2344E2687A3B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 103.9,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D4908B82_E3B0_A830_41E3_E2A80FF8631E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 127.59,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D4ABCB8E_E3B0_A830_41D7_ABA605EE4071",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 20.81,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D4A4AB9A_E3B0_A850_41DD_F4040889FA64",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -137.47,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D4BFEBA6_E3B0_A870_41CE_881585B645E7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -94.48,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D4488BB2_E3B0_A850_41E8_FEFE57487F5A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -94.18,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D4438BBE_E3B0_A850_41BF_5451F848F7C6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 152.96,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D45D2BC9_E3B0_A830_41D5_4337FAA812E7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -70.78,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D4576BD5_E3B0_AFD0_41B5_B41B54ED2F61",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -72.15,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D4625BE0_E3B0_AFF0_41E0_929C7EE7880B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -129.87,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D47B5BEC_E3B0_AFF0_41D1_E1C9D794DD6B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 93.57,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D4760BF8_E3B0_AFD0_41E8_375EF31A2666",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -15.11,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D4029C03_E3B0_A830_41E6_C7B1F67ECE17",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -15.11,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D41CDC0F_E3B0_A830_41E1_DC31E0C33C5D",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 178.78,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D4179C1A_E3B0_A850_416A_E48BED0027B6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -7.06,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D421AC26_E3B0_A870_41E1_BC7A0AC0DE66",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 84.46,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D43C3C32_E3B0_A850_41E1_E458E4A17230",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -109.67,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D4365C3E_E3B0_A850_41CB_2A6FAE9F7348",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -13.37,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_DBC2DC4A_E3B0_A830_41DA_64173551A5E7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.25,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_DBDD4C55_E3B0_A8D0_41B0_5C790F61A804",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -140.81,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_DBD72C61_E3B0_A8F0_41C4_0D9C171D1D45",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 40.86,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_DBE4DC6D_E3B0_A8F0_41E4_89DFC88AD8D7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 95.39,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_DBFFEC78_E3B0_A8D0_41B0_67D7472A9E74",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -14.58,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_DB8B9C84_E3B0_A830_41D5_E64F345431B2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -22.33,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_DB869C90_E3B0_A850_41CF_79D140CB6A24",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -22.33,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_DB923C9C_E3B0_A850_4165_1400F8425F60",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -170.1,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_DBAFECA8_E3B0_A870_41DC_851B7A98D1CB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -125.32,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_DBBA8CB3_E3B0_A850_41BE_F149A7A41395",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 97.97,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_DBB63CBF_E3B0_A850_41DD_7FBF0F43D4E9",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -67.27,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_DB42DCCA_E3B0_A830_41EA_78DFC37EE37E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 155.09,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_DB5E5CD6_E3B0_A9D0_41DF_33FC291D6698",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -176.51,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_DB692CE2_E3B0_A9F0_41E3_6D58B5384C29",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -86.89,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_DB668CEE_E3B0_A9F0_41B7_7D538B8C30EB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -143.24,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_DB729CFA_E3B0_A9D0_41C9_D1073A1E9DE3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 124.1,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_CC1C8DCD_E3B0_A830_41E2_9C6F3EDB5E96",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 83.09,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_CC103DD9_E3B0_ABD0_41AA_6FE3FDB8EFED",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -82.03,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_CC14FDE4_E3B0_ABF0_41E7_B43F42CBA5C8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -82.03,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_CC299DF0_E3B0_ABD0_41E7_0476A7542CF3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -92.94,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_CC2DCDFB_E3B0_ABD0_41C8_4C2A96BA5C95",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.85,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_CC229E07_E3B0_A830_41E1_3C279DC6CE99",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 162.99,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_CC277E13_E3B0_A850_41CC_D1977E5B2237",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -30.68,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_CC3B4E1E_E3B0_A850_41E5_E4EAE52E5200",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 154.78,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_CC301E2A_E3B0_A870_4191_70C5DD031985",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -94,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_CC346E35_E3B0_A853_41CB_E60EC2A644C0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 80.96,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3CADE41_E3B0_A830_41D4_1C6572E0BF44",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 52.43,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3CEBE4C_E3B0_A831_41A6_436BACD2FAFE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -109.52,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3C44E58_E3B0_A8D0_41D1_99547ED642F7",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -132.3,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3DABE64_E3B0_A8F0_41C3_4E985F6AEDBB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -132.3,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3DFCE6F_E3B0_A8CF_41DA_3D43DB36C912",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -63.19,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3D5FE7B_E3B0_A8D0_41E9_811147726239",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -66.08,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3E90E86_E3B0_A830_41D7_B3D3DC3C8738",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 160.56,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3EF1E92_E3B0_A850_41E5_C0F5D1F1ABCE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -24.91,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3E6CE9E_E3B0_A850_41DA_1FA67A4A3CAD",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 156.61,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3FA1EAA_E3B0_A870_41DA_215782263D39",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -93.87,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3F1DEB5_E3B0_A850_419D_58767B0858AE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -93.87,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3F55EC0_E3B0_A830_41D3_42A68B694229",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 167.85,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D38B3ECC_E3B0_A830_41E1_D61D0E5F366B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.27,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3800ED7_E3B0_A9D0_41C8_E7C5D580FE61",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 158.13,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3862EE3_E3B0_A9F0_41E5_9610625E49EF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -4.3,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D39DBEEE_E3B0_A9F0_41C1_30D7F00664A8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -26.73,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D392FEFA_E3B0_A9D0_41D9_0A7BDA5F1F50",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 168.76,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3A8BF08_E3B0_A830_41E5_2761BE9A7F19",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 111.49,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3AD9F14_E3B0_A850_41D7_ED1F0216AF9B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -102.68,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3A31F20_E3B0_A870_41C5_E67E273AB16B",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -102.38,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3B81F2D_E3B0_A870_41B4_700843158DC2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -26.58,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3BFEF39_E3B0_A850_41D9_DD8501B519FE",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -126.38,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3B6CF47_E3B0_A830_41BE_BCAF79A0AA99",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -7.29,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D34BFF53_E3B0_A8D0_41E1_7283F43E9BEB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 134.58,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3413F5E_E3B0_A8D0_41E3_983EA5D21748",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 157.82,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3475F6A_E3B0_A8F0_41EA_B1A599BBFEAA",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -90.23,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D35E5F75_E3B0_A8D0_41DC_21F13E458C69",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -77.32,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3533F81_E3B0_A830_41E1_BA2A3B5A2CA2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 128.96,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D36A1F8D_E3B0_A830_41DA_992D9EE4AD4C",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.2,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3617F98_E3B0_A850_41E7_6116C0B3CD53",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.2,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3678FA3_E3B0_A870_41BA_3BFD74095E67",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -14.05,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D37FFFAF_E3B0_A870_41E2_2D667BA80032",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -14.05,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3756FBA_E3B0_A850_41EC_752B2EBC7CD1",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -8.66,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D30DAFC6_E3B0_A830_41D4_9CB0A6B45C31",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.14,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D3033FD2_E3B0_A7D0_41DF_D7FAABC11E0A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 15.22,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D31CCFDD_E3B0_A7D0_41E0_533C6E7920FF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 117.11,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D314DFEA_E3B0_A7F0_41E7_4B3845FA202A",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -106.33,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D32A6FF6_E3B0_A7D0_41C2_D5EED2CB01B2",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -64.56,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D322B002_E3B0_B830_418C_5DA7F104F44F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -87.04,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D338300D_E3B0_B830_41D9_35FE034BE8EC",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 131.7,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ]
  },
  "id": "camera_D331D019_E3B0_B850_41D9_F3060A3B64E0",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 96.15,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CAD54232_DFCA_D01E_41EB_5E97F3467642",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CAD53233_DFCA_D01E_41D8_9A0DF48FA3DF",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CAD61234_DFCA_D01A_41D9_2917B781A0C9",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CAD6E234_DFCA_D01A_41E5_BD6CC7BC377C",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CAD04235_DFCA_D01A_41D5_50D16EE0F53C",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CAD05235_DFCA_D01A_41C2_3B1BEAE52FDF",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CAD3B235_DFCA_D01A_41E2_DBE6287669E2",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CAD39235_DFCA_D01A_41E1_8A559FE85B92",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CACDF236_DFCA_D006_41E8_B94E831833D4",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CACDC236_DFCA_D006_41E0_255F99CCFB11",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CACF2237_DFCA_D006_41C8_8BAEDE997F4D",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CACF0237_DFCA_D006_41EA_B3B11EDCBC9A",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CAC97237_DFCA_D006_41E2_93CDA8970C50",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CAC95237_DFCA_D006_41E7_F610BDEE62CE",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CAC8A238_DFCA_D00A_41E9_57AF8FF1A42C",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CAC89238_DFCA_D00A_41E7_093808EB9747",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CACAF239_DFCA_D00A_41E5_11B3879DFF1E",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CACAD239_DFCA_D00A_41CF_1808476D0E9F",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CAC3F23B_DFCA_D00E_41D4_20FF21DE2D0A",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CAC3C23C_DFCA_D00A_41B1_A13A7FF7BAD2",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CAC43239_DFCA_D00A_41E1_8B1CD8C4D534",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CAC41239_DFCA_D00A_41BD_E86FFDDD5654",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CAC1B23B_DFCA_D00E_41BA_80044B535F42",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CAC1923B_DFCA_D00E_41C6_DE76A91B34EF",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CAC6723A_DFCA_D00E_41EB_03790BF8BE5B",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CAC6423A_DFCA_D00E_41D8_2062ED14351B",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CAC3C23C_DFCA_D00A_41C9_46E66A96A9F1",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CAC3B23C_DFCA_D00A_41D9_58E42CEAB33D",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CABD123D_DFCA_D00A_41DE_C2868738B8FD",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CABDF23D_DFCA_D00A_41C1_1DCE7BE455E2",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CE03BCE8_E3F1_A9F0_41D2_EA3895A59507",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CE03ACE8_E3F1_A9F0_41D4_1D9D79FC3040",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CE054CE9_E3F1_A9F0_41E9_F682F0E9BAED",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CE058CE9_E3F1_A9F0_41EB_E6BC09BFBF21",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CE075CEA_E3F1_A9F0_41E1_1095EF169343",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CE074CEA_E3F1_A9F0_41DD_7636162E3B69",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CE06ECEB_E3F1_A9F0_4179_B77D83F15DAE",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CE191CEB_E3F1_A9F0_41C0_57E9AD39604A",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CE18BCEC_E3F1_A9F0_41C2_B20BDA06ACD7",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CE18DCEC_E3F1_A9F0_41DC_E0F11DB2DD98",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CE1A9CED_E3F1_A9F0_41C6_A1D6E3EA2B85",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CE1ABCED_E3F1_A9F0_41E2_AB9E2DF27BB5",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CE1C2CEE_E3F1_A9F0_41EA_21B7473D5F80",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CE1C4CEE_E3F1_A9F0_41D1_E8FA78EE5C89",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "id": "effect_CE1E0CF0_E3F1_A9D0_41E3_48F82F8E7942",
  "easing": "cubic_in_out"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "id": "effect_CE1E3CF0_E3F1_A9D0_41E8_DB81753BDF29",
  "easing": "cubic_in_out"
 },
 "this.effect_CAD54232_DFCA_D01E_41EB_5E97F3467642",
 "this.effect_CAD53233_DFCA_D01E_41D8_9A0DF48FA3DF",
 "this.effect_CAD61234_DFCA_D01A_41D9_2917B781A0C9",
 "this.effect_CAD6E234_DFCA_D01A_41E5_BD6CC7BC377C",
 "this.effect_CAD04235_DFCA_D01A_41D5_50D16EE0F53C",
 "this.effect_CAD05235_DFCA_D01A_41C2_3B1BEAE52FDF",
 "this.effect_CAD3B235_DFCA_D01A_41E2_DBE6287669E2",
 "this.effect_CAD39235_DFCA_D01A_41E1_8A559FE85B92",
 "this.effect_CACDF236_DFCA_D006_41E8_B94E831833D4",
 "this.effect_CACDC236_DFCA_D006_41E0_255F99CCFB11",
 "this.effect_CACF2237_DFCA_D006_41C8_8BAEDE997F4D",
 "this.effect_CACF0237_DFCA_D006_41EA_B3B11EDCBC9A",
 "this.effect_CAC97237_DFCA_D006_41E2_93CDA8970C50",
 "this.effect_CAC95237_DFCA_D006_41E7_F610BDEE62CE",
 "this.effect_CAC8A238_DFCA_D00A_41E9_57AF8FF1A42C",
 "this.effect_CAC89238_DFCA_D00A_41E7_093808EB9747",
 "this.effect_CACAF239_DFCA_D00A_41E5_11B3879DFF1E",
 "this.effect_CACAD239_DFCA_D00A_41CF_1808476D0E9F",
 "this.effect_CAC3F23B_DFCA_D00E_41D4_20FF21DE2D0A",
 "this.effect_CAC3C23C_DFCA_D00A_41B1_A13A7FF7BAD2",
 "this.effect_CAC43239_DFCA_D00A_41E1_8B1CD8C4D534",
 "this.effect_CAC41239_DFCA_D00A_41BD_E86FFDDD5654",
 "this.effect_CAC1B23B_DFCA_D00E_41BA_80044B535F42",
 "this.effect_CAC1923B_DFCA_D00E_41C6_DE76A91B34EF",
 "this.effect_CAC6723A_DFCA_D00E_41EB_03790BF8BE5B",
 "this.effect_CAC6423A_DFCA_D00E_41D8_2062ED14351B",
 "this.effect_CAC3C23C_DFCA_D00A_41C9_46E66A96A9F1",
 "this.effect_CAC3B23C_DFCA_D00A_41D9_58E42CEAB33D",
 "this.effect_CABD123D_DFCA_D00A_41DE_C2868738B8FD",
 "this.effect_CABDF23D_DFCA_D00A_41C1_1DCE7BE455E2",
 "this.effect_CE03BCE8_E3F1_A9F0_41D2_EA3895A59507",
 "this.effect_CE03ACE8_E3F1_A9F0_41D4_1D9D79FC3040",
 "this.effect_CE054CE9_E3F1_A9F0_41E9_F682F0E9BAED",
 "this.effect_CE058CE9_E3F1_A9F0_41EB_E6BC09BFBF21",
 "this.effect_CE075CEA_E3F1_A9F0_41E1_1095EF169343",
 "this.effect_CE074CEA_E3F1_A9F0_41DD_7636162E3B69",
 "this.effect_CE06ECEB_E3F1_A9F0_4179_B77D83F15DAE",
 "this.effect_CE191CEB_E3F1_A9F0_41C0_57E9AD39604A",
 "this.effect_CE18BCEC_E3F1_A9F0_41C2_B20BDA06ACD7",
 "this.effect_CE18DCEC_E3F1_A9F0_41DC_E0F11DB2DD98",
 "this.effect_CE1A9CED_E3F1_A9F0_41C6_A1D6E3EA2B85",
 "this.effect_CE1ABCED_E3F1_A9F0_41E2_AB9E2DF27BB5",
 "this.effect_CE1C2CEE_E3F1_A9F0_41EA_21B7473D5F80",
 "this.effect_CE1C4CEE_E3F1_A9F0_41D1_E8FA78EE5C89",
 "this.effect_CE1E0CF0_E3F1_A9D0_41E3_48F82F8E7942",
 "this.effect_CE1E3CF0_E3F1_A9D0_41E8_DB81753BDF29"
], "children": [
 {
  "toolTipBorderColor": "#767676",
  "paddingLeft": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBorderSize": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeight": 10,
  "playbackBarHeadWidth": 6,
  "height": "100%",
  "toolTipPaddingBottom": 7,
  "playbackBarProgressOpacity": 1,
  "toolTipFontStyle": "normal",
  "playbackBarBorderSize": 0,
  "toolTipFontFamily": "Georgia",
  "propagateClick": true,
  "progressBottom": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarRight": 0,
  "toolTipShadowOpacity": 0,
  "paddingRight": 0,
  "toolTipFontColor": "#FFFFFF",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBackgroundColor": "#000000",
  "shadow": false,
  "toolTipPaddingRight": 10,
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBorderRadius": 0,
  "toolTipPaddingTop": 7,
  "playbackBarProgressBorderRadius": 0,
  "toolTipOpacity": 0.5,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipFontWeight": "normal",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowColor": "#333333",
  "progressRight": 0,
  "progressHeight": 10,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBarBorderColor": "#0066FF",
  "progressOpacity": 1,
  "playbackBarBorderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "displayTooltipInTouchScreens": true,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "top": 0,
  "playbackBarHeadShadow": true,
  "paddingTop": 0,
  "toolTipPaddingLeft": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "width": "100%",
  "toolTipDisplayTime": 600,
  "id": "MainViewer",
  "playbackBarHeadBorderRadius": 0,
  "progressBackgroundColorDirection": "vertical",
  "toolTipTextShadowOpacity": 0,
  "toolTipBorderRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "borderRadius": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBottom": 5,
  "toolTipShadowSpread": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarOpacity": 1,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderColor": "#FFFFFF",
  "toolTipShadowBlurRadius": 3,
  "progressBarOpacity": 1,
  "toolTipFontSize": 13,
  "paddingBottom": 0,
  "minHeight": 50,
  "transitionMode": "blending",
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipBorderSize": 1,
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadBorderSize": 0,
  "minWidth": 100,
  "data": {
   "name": "Main Viewer"
  },
  "playbackBarHeadBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0.01
  ],
  "class": "ViewerArea",
  "transitionDuration": 500,
  "progressLeft": 0,
  "left": 0,
  "playbackBarLeft": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadHeight": 15,
  "borderSize": 0
 },
 {
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "paddingTop": 0,
  "paddingLeft": 0,
  "creationPolicy": "delayed",
  "width": 330,
  "id": "Container_54B2586A_750B_85DC_41D9_68368732F926",
  "gap": 10,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "height": "100%",
  "horizontalAlign": "left",
  "propagateClick": false,
  "verticalAlign": "top",
  "children": [
   {
    "scrollBarOpacity": 0.5,
    "top": "0%",
    "paddingTop": 0,
    "paddingLeft": 0,
    "creationPolicy": "delayed",
    "width": 66,
    "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
    "gap": 10,
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "height": "100%",
    "visible": false,
    "horizontalAlign": "left",
    "propagateClick": true,
    "verticalAlign": "top",
    "children": [
     {
      "scrollBarOpacity": 0.5,
      "top": "0%",
      "paddingTop": 0,
      "paddingLeft": 0,
      "backgroundColor": [
       "#3F4B87"
      ],
      "width": 30,
      "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
      "backgroundColorDirection": "vertical",
      "scrollBarMargin": 2,
      "gap": 10,
      "borderRadius": 0,
      "height": "100%",
      "horizontalAlign": "left",
      "propagateClick": true,
      "verticalAlign": "top",
      "minHeight": 1,
      "paddingRight": 0,
      "overflow": "scroll",
      "paddingBottom": 0,
      "shadow": false,
      "layout": "absolute",
      "minWidth": 1,
      "data": {
       "name": "Container blue"
      },
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarColor": "#000000",
      "scrollBarVisible": "rollOver",
      "backgroundOpacity": 0.7,
      "creationPolicy": "delayed",
      "left": "0%",
      "backgroundColorRatios": [
       0
      ],
      "contentOpaque": false,
      "borderSize": 0
     },
     {
      "top": "40%",
      "paddingTop": 0,
      "paddingLeft": 0,
      "bottom": "40%",
      "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
      "mode": "push",
      "width": 50,
      "maxWidth": 80,
      "borderRadius": 0,
      "maxHeight": 80,
      "horizontalAlign": "center",
      "propagateClick": true,
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingRight": 0,
      "paddingBottom": 0,
      "shadow": false,
      "cursor": "hand",
      "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_498E74F4_545B_B067_41CC_63589B8419E3, true, 0, null, null, false)",
      "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
      "minWidth": 1,
      "data": {
       "name": "IconButton arrow"
      },
      "class": "IconButton",
      "transparencyActive": true,
      "backgroundOpacity": 0,
      "borderSize": 0,
      "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
      "left": 4
     }
    ],
    "minHeight": 1,
    "paddingRight": 0,
    "overflow": "scroll",
    "paddingBottom": 0,
    "shadow": false,
    "layout": "absolute",
    "minWidth": 1,
    "data": {
     "name": "- COLLAPSE"
    },
    "class": "Container",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "left": "0%",
    "contentOpaque": false,
    "borderSize": 0
   },
   {
    "scrollBarOpacity": 0.5,
    "top": "0%",
    "paddingTop": 0,
    "paddingLeft": 0,
    "creationPolicy": "delayed",
    "width": 330,
    "id": "Container_498E74F4_545B_B067_41CC_63589B8419E3",
    "gap": 10,
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "height": "100%",
    "horizontalAlign": "left",
    "propagateClick": false,
    "verticalAlign": "top",
    "children": [
     {
      "scrollBarOpacity": 0.5,
      "top": "0%",
      "paddingTop": 40,
      "paddingLeft": 40,
      "backgroundColor": [
       "#3F4B87"
      ],
      "width": 300,
      "id": "Container_498C54F0_545B_B07F_41AD_BD74D9355024",
      "backgroundColorDirection": "vertical",
      "scrollBarMargin": 2,
      "gap": 10,
      "borderRadius": 0,
      "height": "100%",
      "horizontalAlign": "left",
      "propagateClick": true,
      "verticalAlign": "top",
      "children": [
       {
        "top": "0%",
        "paddingTop": 0,
        "paddingLeft": 0,
        "width": "57.045%",
        "id": "Image_498C24F0_545B_B07F_41B7_1D145AB03D4A",
        "maxWidth": 1095,
        "borderRadius": 0,
        "maxHeight": 1095,
        "height": "5.583%",
        "horizontalAlign": "left",
        "propagateClick": true,
        "verticalAlign": "top",
        "minHeight": 30,
        "paddingRight": 0,
        "paddingBottom": 0,
        "shadow": false,
        "minWidth": 40,
        "data": {
         "name": "Image Company"
        },
        "url": "skin/Image_498C24F0_545B_B07F_41B7_1D145AB03D4A.png",
        "scaleMode": "fit_inside",
        "class": "Image",
        "backgroundOpacity": 0,
        "left": "0%",
        "borderSize": 0
       },
       {
        "scrollBarOpacity": 0.15,
        "top": "21.35%",
        "paddingTop": 0,
        "paddingLeft": 0,
        "bottom": "26%",
        "id": "Container_498C34F0_545B_B07F_41BD_B58E63E0B3FC",
        "gap": 0,
        "width": "100%",
        "scrollBarMargin": 2,
        "borderRadius": 0,
        "horizontalAlign": "left",
        "propagateClick": true,
        "verticalAlign": "middle",
        "children": [
         {
          "scrollBarOpacity": 0.5,
          "paddingTop": 0,
          "paddingLeft": 0,
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "width": "100%",
          "id": "Container_498C04F0_545B_B07F_41C8_91BCDF503CDE",
          "backgroundColorDirection": "vertical",
          "scrollBarMargin": 2,
          "gap": 10,
          "borderRadius": 0,
          "height": 1,
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "top",
          "minHeight": 1,
          "paddingRight": 0,
          "overflow": "scroll",
          "paddingBottom": 0,
          "shadow": false,
          "minWidth": 1,
          "scrollBarVisible": "rollOver",
          "data": {
           "name": "line"
          },
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0.3,
          "layout": "absolute",
          "creationPolicy": "delayed",
          "borderSize": 0,
          "backgroundColorRatios": [
           0,
           1
          ],
          "contentOpaque": false
         },
         {
          "paddingTop": 0,
          "paddingLeft": 10,
          "width": "100%",
          "id": "Button_498C14F0_545B_B07F_41C7_C938E2EB46DE",
          "backgroundColorDirection": "vertical",
          "mode": "toggle",
          "backgroundColor": [
           "#000000",
           "#000000"
          ],
          "shadowSpread": 1,
          "textDecoration": "none",
          "borderRadius": 0,
          "gap": 5,
          "height": 50,
          "iconWidth": 32,
          "rollOverBackgroundColorRatios": [
           0
          ],
          "fontFamily": "Vision Bold",
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "middle",
          "fontColor": "#FFFFFF",
          "minHeight": 1,
          "paddingRight": 0,
          "paddingBottom": 0,
          "shadow": false,
          "click": "this.mainPlayList.set('selectedIndex', 35)",
          "iconHeight": 32,
          "borderColor": "#000000",
          "cursor": "hand",
          "minWidth": 1,
          "fontSize": 18,
          "data": {
           "name": "Button 1 - King"
          },
          "shadowBlurRadius": 6,
          "class": "Button",
          "shadowColor": "#000000",
          "fontStyle": "normal",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "label": "KING SUITE",
          "iconBeforeLabel": true,
          "borderSize": 0,
          "backgroundColorRatios": [
           0,
           1
          ],
          "rollOverBackgroundOpacity": 0.8,
          "rollOverBackgroundColor": [
           "#5CA1DE"
          ],
          "fontWeight": "normal",
          "pressedBackgroundOpacity": 0
         },
         {
          "scrollBarOpacity": 0.5,
          "paddingTop": 0,
          "paddingLeft": 0,
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "width": "100%",
          "id": "Container_498D54F1_545B_B061_41D3_D6C6823E053E",
          "backgroundColorDirection": "vertical",
          "scrollBarMargin": 2,
          "gap": 10,
          "borderRadius": 0,
          "height": 1,
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "top",
          "minHeight": 1,
          "paddingRight": 0,
          "overflow": "scroll",
          "paddingBottom": 0,
          "shadow": false,
          "minWidth": 1,
          "scrollBarVisible": "rollOver",
          "data": {
           "name": "line"
          },
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0.3,
          "layout": "absolute",
          "creationPolicy": "delayed",
          "borderSize": 0,
          "backgroundColorRatios": [
           0,
           1
          ],
          "contentOpaque": false
         },
         {
          "paddingTop": 0,
          "paddingLeft": 10,
          "width": "100%",
          "id": "Button_498D34F1_545B_B061_41CC_C7FA4D74A601",
          "backgroundColorDirection": "vertical",
          "mode": "toggle",
          "backgroundColor": [
           "#000000",
           "#000000"
          ],
          "shadowSpread": 1,
          "textDecoration": "none",
          "borderRadius": 0,
          "gap": 23,
          "height": 50,
          "iconWidth": 32,
          "rollOverBackgroundColorRatios": [
           0
          ],
          "fontFamily": "Vision Bold",
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "middle",
          "fontColor": "#FFFFFF",
          "minHeight": 1,
          "paddingRight": 0,
          "paddingBottom": 0,
          "shadow": false,
          "click": "this.mainPlayList.set('selectedIndex', 40)",
          "iconHeight": 32,
          "borderColor": "#000000",
          "cursor": "hand",
          "minWidth": 1,
          "fontSize": 18,
          "data": {
           "name": "Button 2 - Queen Room"
          },
          "shadowBlurRadius": 6,
          "class": "Button",
          "shadowColor": "#000000",
          "fontStyle": "normal",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "label": "QUEEN ROOM",
          "iconBeforeLabel": true,
          "borderSize": 0,
          "backgroundColorRatios": [
           0,
           1
          ],
          "rollOverBackgroundOpacity": 0.8,
          "rollOverBackgroundColor": [
           "#5CA1DE"
          ],
          "fontWeight": "normal",
          "pressedBackgroundOpacity": 0
         },
         {
          "scrollBarOpacity": 0.5,
          "paddingTop": 0,
          "paddingLeft": 0,
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "width": "100%",
          "id": "Container_498C14F1_545B_B061_41C8_E3BA647331FB",
          "backgroundColorDirection": "vertical",
          "scrollBarMargin": 2,
          "gap": 10,
          "borderRadius": 0,
          "height": 1,
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "top",
          "minHeight": 1,
          "paddingRight": 0,
          "overflow": "scroll",
          "paddingBottom": 0,
          "shadow": false,
          "minWidth": 1,
          "scrollBarVisible": "rollOver",
          "data": {
           "name": "line"
          },
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0.3,
          "layout": "absolute",
          "creationPolicy": "delayed",
          "borderSize": 0,
          "backgroundColorRatios": [
           0,
           1
          ],
          "contentOpaque": false
         },
         {
          "paddingTop": 0,
          "paddingLeft": 10,
          "width": "100%",
          "id": "Button_498DE4F1_545B_B061_41D3_63DE2518EDC5",
          "backgroundColorDirection": "vertical",
          "mode": "toggle",
          "backgroundColor": [
           "#000000",
           "#000000"
          ],
          "shadowSpread": 1,
          "textDecoration": "none",
          "borderRadius": 0,
          "gap": 23,
          "height": 50,
          "iconWidth": 32,
          "rollOverBackgroundColorRatios": [
           0
          ],
          "fontFamily": "Vision Bold",
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "middle",
          "fontColor": "#FFFFFF",
          "minHeight": 1,
          "paddingRight": 0,
          "paddingBottom": 0,
          "shadow": false,
          "click": "this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_D5BB89F2_E3B0_ABD0_41E6_DEF8B9BA6E22, 9.183673469387756, -0.9183673469387756);; this.mainPlayList.set('selectedIndex', 9)",
          "iconHeight": 32,
          "borderColor": "#000000",
          "cursor": "hand",
          "minWidth": 1,
          "fontSize": 18,
          "data": {
           "name": "Button 3 - Meeting Room"
          },
          "shadowBlurRadius": 6,
          "class": "Button",
          "shadowColor": "#000000",
          "fontStyle": "normal",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "label": "MEETING ROOM",
          "iconBeforeLabel": true,
          "borderSize": 0,
          "backgroundColorRatios": [
           0,
           1
          ],
          "rollOverBackgroundOpacity": 0.8,
          "rollOverBackgroundColor": [
           "#5CA1DE"
          ],
          "fontWeight": "normal",
          "pressedBackgroundOpacity": 0
         },
         {
          "scrollBarOpacity": 0.5,
          "paddingTop": 0,
          "paddingLeft": 0,
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "width": "100%",
          "id": "Container_498D34F2_545B_B063_41CE_EF1298571ABE",
          "backgroundColorDirection": "vertical",
          "scrollBarMargin": 2,
          "gap": 10,
          "borderRadius": 0,
          "height": 1,
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "top",
          "minHeight": 1,
          "paddingRight": 0,
          "overflow": "scroll",
          "paddingBottom": 0,
          "shadow": false,
          "minWidth": 1,
          "scrollBarVisible": "rollOver",
          "data": {
           "name": "line"
          },
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0.3,
          "layout": "absolute",
          "creationPolicy": "delayed",
          "borderSize": 0,
          "backgroundColorRatios": [
           0,
           1
          ],
          "contentOpaque": false
         },
         {
          "paddingTop": 0,
          "paddingLeft": 10,
          "width": "100%",
          "id": "Button_498D04F2_545B_B063_41CA_0925CE4010D5",
          "backgroundColorDirection": "vertical",
          "mode": "toggle",
          "backgroundColor": [
           "#000000",
           "#000000"
          ],
          "shadowSpread": 1,
          "textDecoration": "none",
          "borderRadius": 0,
          "gap": 5,
          "height": 50,
          "iconWidth": 32,
          "rollOverBackgroundColorRatios": [
           0
          ],
          "fontFamily": "Vision Bold",
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "middle",
          "fontColor": "#FFFFFF",
          "minHeight": 1,
          "paddingRight": 0,
          "paddingBottom": 0,
          "shadow": false,
          "click": "this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_D5BB69F2_E3B0_ABD0_41BD_9696A1FFB9E5, -28.928571428571427, -2.295918367346939);; this.mainPlayList.set('selectedIndex', 10)",
          "iconHeight": 32,
          "borderColor": "#000000",
          "cursor": "hand",
          "minWidth": 1,
          "fontSize": 18,
          "data": {
           "name": "Button 4 - Fitness Center"
          },
          "shadowBlurRadius": 6,
          "class": "Button",
          "shadowColor": "#000000",
          "fontStyle": "normal",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "label": "FITNESS CENTER",
          "iconBeforeLabel": true,
          "borderSize": 0,
          "backgroundColorRatios": [
           0,
           1
          ],
          "rollOverBackgroundOpacity": 0.8,
          "rollOverBackgroundColor": [
           "#5CA1DE"
          ],
          "fontWeight": "normal",
          "pressedBackgroundOpacity": 0
         },
         {
          "scrollBarOpacity": 0.5,
          "paddingTop": 0,
          "paddingLeft": 0,
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "width": "100%",
          "id": "Container_498EE4F2_545B_B063_41CC_AAA0CAD20379",
          "backgroundColorDirection": "vertical",
          "scrollBarMargin": 2,
          "gap": 10,
          "borderRadius": 0,
          "height": 1,
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "top",
          "minHeight": 1,
          "paddingRight": 0,
          "overflow": "scroll",
          "paddingBottom": 0,
          "shadow": false,
          "minWidth": 1,
          "scrollBarVisible": "rollOver",
          "data": {
           "name": "line"
          },
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0.3,
          "layout": "absolute",
          "creationPolicy": "delayed",
          "borderSize": 0,
          "backgroundColorRatios": [
           0,
           1
          ],
          "contentOpaque": false
         },
         {
          "scrollBarOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "width": "100%",
          "id": "Container_498EF4F2_545B_B063_41CC_405F62610B94",
          "gap": 0,
          "scrollBarMargin": 10,
          "borderRadius": 0,
          "height": 200,
          "visible": false,
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "middle",
          "children": [
           {
            "scrollBarOpacity": 0.5,
            "paddingTop": 0,
            "paddingLeft": 0,
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "width": "100%",
            "id": "Container_498EC4F2_545B_B063_41C2_565A53FBACC9",
            "backgroundColorDirection": "vertical",
            "scrollBarMargin": 2,
            "gap": 10,
            "borderRadius": 0,
            "height": 1,
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingRight": 0,
            "overflow": "scroll",
            "paddingBottom": 0,
            "shadow": false,
            "minWidth": 1,
            "scrollBarVisible": "rollOver",
            "data": {
             "name": "line"
            },
            "class": "Container",
            "scrollBarWidth": 10,
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0.5,
            "layout": "absolute",
            "creationPolicy": "delayed",
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "contentOpaque": false
           },
           {
            "scrollBarOpacity": 0.5,
            "paddingTop": 0,
            "paddingLeft": 0,
            "width": "100%",
            "id": "Container_498ED4F2_545B_B063_41C4_E13B7162CADD",
            "gap": 10,
            "scrollBarMargin": 2,
            "borderRadius": 0,
            "height": 8,
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingRight": 0,
            "overflow": "scroll",
            "paddingBottom": 0,
            "shadow": false,
            "minWidth": 1,
            "scrollBarVisible": "rollOver",
            "data": {
             "name": "line separator"
            },
            "class": "Container",
            "scrollBarWidth": 10,
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "creationPolicy": "delayed",
            "borderSize": 0,
            "contentOpaque": false
           },
           {
            "iconBeforeLabel": true,
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498EA4F2_545B_B063_41D1_F0BD4276FFEB",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 1"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 15,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "rollOverShadowBlurRadius": 18,
            "rollOverShadow": false,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498EB4F2_545B_B063_41B6_DA15C685A014",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 23,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 2"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498E84F2_545B_B063_41C9_7111AEB16F5F",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "pressedLabel": "Lorem Ipsum",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 3"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498E94F2_545B_B063_41CD_75FF248F56BE",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 4"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498E64F2_545B_B063_41C3_38648966AA37",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 5"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498E74F2_545B_B063_41D1_21A868CAE3B3",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 6"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498E44F2_545B_B063_41C5_A6AB96EDB240",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 7"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498E54F2_545B_B063_41D2_B53F96A7986D",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 8"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           }
          ],
          "minHeight": 1,
          "paddingRight": 0,
          "overflow": "scroll",
          "paddingBottom": 0,
          "shadow": false,
          "scrollBarWidth": 7,
          "scrollBarVisible": "rollOver",
          "data": {
           "name": "-Level 4-1"
          },
          "minWidth": 1,
          "class": "Container",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "layout": "vertical",
          "creationPolicy": "delayed",
          "borderSize": 0,
          "contentOpaque": false
         },
         {
          "paddingTop": 0,
          "paddingLeft": 10,
          "width": "100%",
          "id": "Button_498E34F2_545B_B063_41C6_44A1C5C4635E",
          "backgroundColorDirection": "vertical",
          "mode": "toggle",
          "backgroundColor": [
           "#000000",
           "#000000"
          ],
          "shadowSpread": 1,
          "textDecoration": "none",
          "borderRadius": 0,
          "gap": 5,
          "height": 50,
          "iconWidth": 32,
          "rollOverBackgroundColorRatios": [
           0
          ],
          "fontFamily": "Vision Bold",
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "middle",
          "fontColor": "#FFFFFF",
          "minHeight": 1,
          "paddingRight": 0,
          "paddingBottom": 0,
          "shadow": false,
          "click": "this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_D5BB29F2_E3B0_ABD0_41D8_DE25E2AE3E24, 0, 0);; this.mainPlayList.set('selectedIndex', 2)",
          "iconHeight": 32,
          "borderColor": "#000000",
          "cursor": "hand",
          "minWidth": 1,
          "fontSize": 18,
          "data": {
           "name": "Button 5 - Swimming"
          },
          "shadowBlurRadius": 6,
          "class": "Button",
          "shadowColor": "#000000",
          "fontStyle": "normal",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "label": "RESTAURANT",
          "iconBeforeLabel": true,
          "borderSize": 0,
          "backgroundColorRatios": [
           0,
           1
          ],
          "rollOverBackgroundOpacity": 0.8,
          "rollOverBackgroundColor": [
           "#5CA1DE"
          ],
          "fontWeight": "normal",
          "pressedBackgroundOpacity": 0
         },
         {
          "scrollBarOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "width": "100%",
          "id": "Container_498E14F2_545B_B063_41BB_494D2838A4CD",
          "gap": 0,
          "scrollBarMargin": 10,
          "borderRadius": 0,
          "height": 200,
          "visible": false,
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "middle",
          "children": [
           {
            "scrollBarOpacity": 0.5,
            "paddingTop": 0,
            "paddingLeft": 0,
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "width": "100%",
            "id": "Container_498FE4F2_545B_B063_41BA_D8235AF33884",
            "backgroundColorDirection": "vertical",
            "scrollBarMargin": 2,
            "gap": 10,
            "borderRadius": 0,
            "height": 1,
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingRight": 0,
            "overflow": "scroll",
            "paddingBottom": 0,
            "shadow": false,
            "minWidth": 1,
            "scrollBarVisible": "rollOver",
            "data": {
             "name": "line"
            },
            "class": "Container",
            "scrollBarWidth": 10,
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0.5,
            "layout": "absolute",
            "creationPolicy": "delayed",
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "contentOpaque": false
           },
           {
            "scrollBarOpacity": 0.5,
            "paddingTop": 0,
            "paddingLeft": 0,
            "width": "100%",
            "id": "Container_498FF4F2_545B_B063_41D3_4A4582DF8AEC",
            "gap": 10,
            "scrollBarMargin": 2,
            "borderRadius": 0,
            "height": 8,
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingRight": 0,
            "overflow": "scroll",
            "paddingBottom": 0,
            "shadow": false,
            "minWidth": 1,
            "scrollBarVisible": "rollOver",
            "data": {
             "name": "line separator"
            },
            "class": "Container",
            "scrollBarWidth": 10,
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "creationPolicy": "delayed",
            "borderSize": 0,
            "contentOpaque": false
           },
           {
            "iconBeforeLabel": true,
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498D74F3_545B_B061_41D0_2FA576471727",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 1"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 15,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "rollOverShadowBlurRadius": 18,
            "rollOverShadow": false,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498D44F3_545B_B061_418E_015D63C61CD1",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 23,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 2"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498D54F3_545B_B061_41A8_427049DCFFEF",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "pressedLabel": "Lorem Ipsum",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 3"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498D24F3_545B_B061_41C3_2F27F2C4BC83",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 4"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498D34F3_545B_B061_41CC_B17EC474B478",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 5"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498D04F3_545B_B061_41C2_2D555AAB9750",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 6"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498D14F3_545B_B061_41C6_DAC15BDEC9C9",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 7"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498EE4F3_545B_B061_41A2_3B3923D5CE0B",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 8"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           }
          ],
          "minHeight": 1,
          "paddingRight": 0,
          "overflow": "scroll",
          "paddingBottom": 0,
          "shadow": false,
          "scrollBarWidth": 7,
          "scrollBarVisible": "rollOver",
          "data": {
           "name": "-Level 5-1"
          },
          "minWidth": 1,
          "class": "Container",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "layout": "vertical",
          "creationPolicy": "delayed",
          "borderSize": 0,
          "contentOpaque": false
         },
         {
          "scrollBarOpacity": 0.5,
          "paddingTop": 0,
          "paddingLeft": 0,
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "width": "100%",
          "id": "Container_498EC4F3_545B_B061_41C7_5B45D376F74D",
          "backgroundColorDirection": "vertical",
          "scrollBarMargin": 2,
          "gap": 10,
          "borderRadius": 0,
          "height": 1,
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "top",
          "minHeight": 1,
          "paddingRight": 0,
          "overflow": "scroll",
          "paddingBottom": 0,
          "shadow": false,
          "minWidth": 1,
          "scrollBarVisible": "rollOver",
          "data": {
           "name": "line"
          },
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0.3,
          "layout": "absolute",
          "creationPolicy": "delayed",
          "borderSize": 0,
          "backgroundColorRatios": [
           0,
           1
          ],
          "contentOpaque": false
         },
         {
          "paddingTop": 0,
          "paddingLeft": 10,
          "width": "100%",
          "id": "Button_498ED4F3_545B_B061_41A5_94E9C4493623",
          "backgroundColorDirection": "vertical",
          "mode": "toggle",
          "backgroundColor": [
           "#000000",
           "#000000"
          ],
          "shadowSpread": 1,
          "textDecoration": "none",
          "borderRadius": 0,
          "gap": 5,
          "height": 50,
          "iconWidth": 32,
          "rollOverBackgroundColorRatios": [
           0
          ],
          "fontFamily": "Vision Bold",
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "middle",
          "fontColor": "#FFFFFF",
          "minHeight": 1,
          "paddingRight": 0,
          "paddingBottom": 0,
          "shadow": false,
          "click": "this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_D5BCF9F2_E3B0_ABD0_41D3_A9FD1E40BB44, 118.92857142857144, -5.969387755102041);; this.mainPlayList.set('selectedIndex', 12)",
          "iconHeight": 32,
          "borderColor": "#000000",
          "cursor": "hand",
          "minWidth": 1,
          "fontSize": 18,
          "data": {
           "name": "Button 6 - Restaurants"
          },
          "shadowBlurRadius": 6,
          "class": "Button",
          "shadowColor": "#000000",
          "fontStyle": "normal",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "label": "SWIMMING POOL",
          "iconBeforeLabel": true,
          "borderSize": 0,
          "backgroundColorRatios": [
           0,
           1
          ],
          "rollOverBackgroundOpacity": 0.8,
          "rollOverBackgroundColor": [
           "#5CA1DE"
          ],
          "fontWeight": "normal",
          "pressedBackgroundOpacity": 0
         },
         {
          "scrollBarOpacity": 0.5,
          "paddingTop": 0,
          "paddingLeft": 0,
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "width": "100%",
          "id": "Container_498EA4F3_545B_B061_41C1_2FA3B75745E0",
          "backgroundColorDirection": "vertical",
          "scrollBarMargin": 2,
          "gap": 10,
          "borderRadius": 0,
          "height": 1,
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "top",
          "minHeight": 1,
          "paddingRight": 0,
          "overflow": "scroll",
          "paddingBottom": 0,
          "shadow": false,
          "minWidth": 1,
          "scrollBarVisible": "rollOver",
          "data": {
           "name": "line"
          },
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0.3,
          "layout": "absolute",
          "creationPolicy": "delayed",
          "borderSize": 0,
          "backgroundColorRatios": [
           0,
           1
          ],
          "contentOpaque": false
         },
         {
          "scrollBarOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "width": "100%",
          "id": "Container_498EB4F3_545B_B061_41AD_F46F3D463910",
          "gap": 0,
          "scrollBarMargin": 10,
          "borderRadius": 0,
          "height": 200,
          "visible": false,
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "middle",
          "children": [
           {
            "scrollBarOpacity": 0.5,
            "paddingTop": 0,
            "paddingLeft": 0,
            "backgroundColor": [
             "#FFFFFF",
             "#FFFFFF"
            ],
            "width": "100%",
            "id": "Container_498E84F3_545B_B061_41A0_8CC1746BA4CA",
            "backgroundColorDirection": "vertical",
            "scrollBarMargin": 2,
            "gap": 10,
            "borderRadius": 0,
            "height": 1,
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingRight": 0,
            "overflow": "scroll",
            "paddingBottom": 0,
            "shadow": false,
            "minWidth": 1,
            "scrollBarVisible": "rollOver",
            "data": {
             "name": "line"
            },
            "class": "Container",
            "scrollBarWidth": 10,
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0.5,
            "layout": "absolute",
            "creationPolicy": "delayed",
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "contentOpaque": false
           },
           {
            "scrollBarOpacity": 0.5,
            "paddingTop": 0,
            "paddingLeft": 0,
            "width": "100%",
            "id": "Container_498E64F3_545B_B061_41D4_E9B700D178A7",
            "gap": 10,
            "scrollBarMargin": 2,
            "borderRadius": 0,
            "height": 8,
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingRight": 0,
            "overflow": "scroll",
            "paddingBottom": 0,
            "shadow": false,
            "minWidth": 1,
            "scrollBarVisible": "rollOver",
            "data": {
             "name": "line separator"
            },
            "class": "Container",
            "scrollBarWidth": 10,
            "scrollBarColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "absolute",
            "creationPolicy": "delayed",
            "borderSize": 0,
            "contentOpaque": false
           },
           {
            "iconBeforeLabel": true,
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498E74F3_545B_B061_41D4_88AA10D1405C",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 1"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 15,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "rollOverShadowBlurRadius": 18,
            "rollOverShadow": false,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498E44F3_545B_B061_41C5_2EC265C539DA",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 23,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 2"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498E54F3_545B_B061_41A3_BA66D67FA350",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "pressedLabel": "Lorem Ipsum",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 3"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498DD4F3_545B_B061_41D2_F08403E9AB59",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 4"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498DA4F3_545B_B061_41D5_184F93E11E98",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 5"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498DB4F3_545B_B061_41D0_2E6D24EE3A99",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 6"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498D94F3_545B_B061_41B1_2861D2B7324D",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 7"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           },
           {
            "paddingTop": 0,
            "paddingLeft": 20,
            "width": "100%",
            "id": "Button_498D64F4_545B_B067_41C8_30068856A4A6",
            "backgroundColorDirection": "vertical",
            "mode": "push",
            "backgroundColor": [
             "#000000",
             "#000000"
            ],
            "shadowSpread": 1,
            "textDecoration": "none",
            "borderRadius": 0,
            "gap": 5,
            "height": 36,
            "iconWidth": 32,
            "rollOverBackgroundColorRatios": [
             0
            ],
            "fontFamily": "Oswald",
            "horizontalAlign": "left",
            "propagateClick": true,
            "verticalAlign": "middle",
            "fontColor": "#FFFFFF",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "iconHeight": 32,
            "borderColor": "#000000",
            "cursor": "hand",
            "minWidth": 1,
            "fontSize": 18,
            "data": {
             "name": "Button text 8"
            },
            "fontStyle": "italic",
            "shadowBlurRadius": 6,
            "class": "Button",
            "shadowColor": "#000000",
            "backgroundOpacity": 0,
            "layout": "horizontal",
            "label": "Lorem Ipsum",
            "iconBeforeLabel": true,
            "borderSize": 0,
            "backgroundColorRatios": [
             0,
             1
            ],
            "rollOverBackgroundOpacity": 0.3,
            "rollOverBackgroundColor": [
             "#000000"
            ],
            "fontWeight": "normal",
            "pressedBackgroundOpacity": 1
           }
          ],
          "minHeight": 1,
          "paddingRight": 0,
          "overflow": "scroll",
          "paddingBottom": 0,
          "shadow": false,
          "scrollBarWidth": 7,
          "scrollBarVisible": "rollOver",
          "data": {
           "name": "-Level 6-1"
          },
          "minWidth": 1,
          "class": "Container",
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "layout": "vertical",
          "creationPolicy": "delayed",
          "borderSize": 0,
          "contentOpaque": false
         },
         {
          "paddingTop": 0,
          "paddingLeft": 10,
          "width": "100%",
          "id": "Button_CE494700_DD96_BC35_41DB_D336F50ECACF",
          "backgroundColorDirection": "vertical",
          "mode": "toggle",
          "backgroundColor": [
           "#000000",
           "#000000"
          ],
          "shadowSpread": 1,
          "textDecoration": "none",
          "borderRadius": 0,
          "gap": 5,
          "height": 50,
          "iconWidth": 32,
          "rollOverBackgroundColorRatios": [
           0
          ],
          "fontFamily": "Vision Bold",
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "middle",
          "fontColor": "#FFFFFF",
          "minHeight": 1,
          "paddingRight": 0,
          "paddingBottom": 0,
          "shadow": false,
          "click": "this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_D5BC69F3_E3B0_ABD0_41BB_3EADB50F7F76, 108.36734693877553, -8.724489795918368);; this.mainPlayList.set('selectedIndex', 18)",
          "iconHeight": 32,
          "borderColor": "#000000",
          "cursor": "hand",
          "minWidth": 1,
          "fontSize": 18,
          "data": {
           "name": "Button 6 - Exterior"
          },
          "shadowBlurRadius": 6,
          "class": "Button",
          "shadowColor": "#000000",
          "fontStyle": "normal",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "label": "EXTERIOR",
          "iconBeforeLabel": true,
          "borderSize": 0,
          "backgroundColorRatios": [
           0,
           1
          ],
          "rollOverBackgroundOpacity": 0.8,
          "rollOverBackgroundColor": [
           "#5CA1DE"
          ],
          "fontWeight": "normal",
          "pressedBackgroundOpacity": 0
         },
         {
          "scrollBarOpacity": 0.5,
          "paddingTop": 0,
          "paddingLeft": 0,
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "width": "100%",
          "id": "Container_C95E7CE8_DD96_8DF5_41C3_CBB7C3D18F24",
          "backgroundColorDirection": "vertical",
          "scrollBarMargin": 2,
          "gap": 10,
          "borderRadius": 0,
          "height": 1,
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "top",
          "minHeight": 1,
          "paddingRight": 0,
          "overflow": "scroll",
          "paddingBottom": 0,
          "shadow": false,
          "minWidth": 1,
          "scrollBarVisible": "rollOver",
          "data": {
           "name": "line"
          },
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0.3,
          "layout": "absolute",
          "creationPolicy": "delayed",
          "borderSize": 0,
          "backgroundColorRatios": [
           0,
           1
          ],
          "contentOpaque": false
         },
         {
          "paddingTop": 0,
          "paddingLeft": 10,
          "width": "100%",
          "id": "Button_CBD3E5B4_DD9F_BC5D_41E3_B9FD9CFAF0C7",
          "backgroundColorDirection": "vertical",
          "mode": "toggle",
          "backgroundColor": [
           "#000000",
           "#000000"
          ],
          "shadowSpread": 1,
          "textDecoration": "none",
          "borderRadius": 0,
          "gap": 5,
          "height": 50,
          "iconWidth": 32,
          "rollOverBackgroundColorRatios": [
           0
          ],
          "fontFamily": "Vision Bold",
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "middle",
          "fontColor": "#FFFFFF",
          "minHeight": 1,
          "paddingRight": 0,
          "paddingBottom": 0,
          "shadow": false,
          "click": "this.setPanoramaCameraWithSpot(this.PanoramaPlayListItem_D5BC29F3_E3B0_ABD0_41D0_1287E6DF7022, 0, 0);; this.mainPlayList.set('selectedIndex', 0)",
          "iconHeight": 32,
          "borderColor": "#000000",
          "cursor": "hand",
          "minWidth": 1,
          "fontSize": 18,
          "data": {
           "name": "Button 1 - Check In"
          },
          "shadowBlurRadius": 6,
          "class": "Button",
          "shadowColor": "#000000",
          "fontStyle": "normal",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "label": "CHECK IN",
          "iconBeforeLabel": true,
          "borderSize": 0,
          "backgroundColorRatios": [
           0,
           1
          ],
          "rollOverBackgroundOpacity": 0.8,
          "rollOverBackgroundColor": [
           "#5CA1DE"
          ],
          "fontWeight": "normal",
          "pressedBackgroundOpacity": 0
         },
         {
          "scrollBarOpacity": 0.5,
          "paddingTop": 0,
          "paddingLeft": 0,
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "width": "100%",
          "id": "Container_C5BE0B1F_DD9E_944B_41D1_044A2C9F51B2",
          "backgroundColorDirection": "vertical",
          "scrollBarMargin": 2,
          "gap": 10,
          "borderRadius": 0,
          "height": 1,
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "top",
          "minHeight": 1,
          "paddingRight": 0,
          "overflow": "scroll",
          "paddingBottom": 0,
          "shadow": false,
          "minWidth": 1,
          "scrollBarVisible": "rollOver",
          "data": {
           "name": "line"
          },
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0.3,
          "layout": "absolute",
          "creationPolicy": "delayed",
          "borderSize": 0,
          "backgroundColorRatios": [
           0,
           1
          ],
          "contentOpaque": false
         }
        ],
        "minHeight": 1,
        "paddingRight": 0,
        "overflow": "scroll",
        "paddingBottom": 0,
        "shadow": false,
        "minWidth": 1,
        "scrollBarVisible": "rollOver",
        "data": {
         "name": "-Level 1"
        },
        "class": "Container",
        "scrollBarWidth": 6,
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0,
        "layout": "vertical",
        "creationPolicy": "delayed",
        "borderSize": 0,
        "contentOpaque": false,
        "left": "0%"
       },
       {
        "scrollBarOpacity": 0.5,
        "paddingTop": 0,
        "paddingLeft": 0,
        "bottom": "0%",
        "id": "Container_498D74F4_545B_B067_41D3_9F91485C184B",
        "gap": 5,
        "width": "100%",
        "scrollBarMargin": 2,
        "borderRadius": 0,
        "height": 130,
        "horizontalAlign": "left",
        "propagateClick": true,
        "verticalAlign": "bottom",
        "children": [
         {
          "scrollBarOpacity": 0.5,
          "paddingTop": 0,
          "paddingLeft": 0,
          "backgroundColor": [
           "#5CA1DE"
          ],
          "width": 40,
          "id": "Container_498D44F4_545B_B067_41D4_A2F9D126AD50",
          "backgroundColorDirection": "vertical",
          "scrollBarMargin": 2,
          "gap": 10,
          "borderRadius": 0,
          "height": 2,
          "horizontalAlign": "left",
          "propagateClick": true,
          "verticalAlign": "top",
          "minHeight": 1,
          "paddingRight": 0,
          "overflow": "visible",
          "paddingBottom": 0,
          "shadow": false,
          "layout": "horizontal",
          "minWidth": 1,
          "scrollBarVisible": "rollOver",
          "data": {
           "name": "blue line"
          },
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarColor": "#000000",
          "backgroundOpacity": 1,
          "creationPolicy": "delayed",
          "borderSize": 0,
          "backgroundColorRatios": [
           0
          ],
          "contentOpaque": false
         },
         {
          "scrollBarOpacity": 0.5,
          "paddingTop": 0,
          "paddingLeft": 0,
          "width": "100%",
          "id": "HTMLText_498D54F4_545B_B067_41D1_C6FF626B4D08",
          "scrollBarMargin": 2,
          "borderRadius": 0,
          "height": 78,
          "visible": false,
          "propagateClick": true,
          "minHeight": 1,
          "paddingRight": 0,
          "paddingBottom": 0,
          "shadow": false,
          "minWidth": 1,
          "scrollBarVisible": "rollOver",
          "data": {
           "name": "HTMLText47602"
          },
          "class": "HTMLText",
          "scrollBarWidth": 10,
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
          "borderSize": 0
         },
         {
          "scrollBarOpacity": 0.5,
          "paddingTop": 0,
          "paddingLeft": 0,
          "width": "100%",
          "id": "Container_498D24F4_545B_B067_41D3_1E56603A1693",
          "gap": 7,
          "scrollBarMargin": 2,
          "borderRadius": 0,
          "height": 56,
          "horizontalAlign": "left",
          "propagateClick": false,
          "verticalAlign": "bottom",
          "children": [
           {
            "paddingTop": 0,
            "paddingLeft": 0,
            "width": 44,
            "id": "IconButton_498D34F4_545B_B067_41AD_1AFF68E406D9",
            "mode": "push",
            "maxWidth": 101,
            "borderRadius": 0,
            "maxHeight": 101,
            "height": 44,
            "horizontalAlign": "center",
            "propagateClick": false,
            "verticalAlign": "middle",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "click": "this.setComponentVisibility(this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821, true, 0, null, null, false)",
            "rollOverIconURL": "skin/IconButton_498D34F4_545B_B067_41AD_1AFF68E406D9_rollover.png",
            "cursor": "hand",
            "minWidth": 1,
            "data": {
             "name": "IconButton Info"
            },
            "class": "IconButton",
            "transparencyActive": true,
            "backgroundOpacity": 0,
            "borderSize": 0,
            "iconURL": "skin/IconButton_498D34F4_545B_B067_41AD_1AFF68E406D9.png"
           },
           {
            "paddingTop": 0,
            "paddingLeft": 0,
            "width": 44,
            "id": "IconButton_498D04F4_545B_B067_41CA_4475BC565319",
            "mode": "push",
            "maxWidth": 101,
            "borderRadius": 0,
            "maxHeight": 101,
            "height": 44,
            "visible": false,
            "horizontalAlign": "center",
            "propagateClick": false,
            "verticalAlign": "middle",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, true, 0, null, null, false)",
            "rollOverIconURL": "skin/IconButton_498D04F4_545B_B067_41CA_4475BC565319_rollover.png",
            "cursor": "hand",
            "minWidth": 1,
            "data": {
             "name": "IconButton Thumblist"
            },
            "class": "IconButton",
            "transparencyActive": false,
            "backgroundOpacity": 0,
            "borderSize": 0,
            "iconURL": "skin/IconButton_498D04F4_545B_B067_41CA_4475BC565319.png"
           },
           {
            "paddingTop": 0,
            "paddingLeft": 0,
            "width": 44,
            "id": "IconButton_498D14F4_545B_B067_41B9_1C7612F1D7EC",
            "mode": "push",
            "maxWidth": 101,
            "borderRadius": 0,
            "maxHeight": 101,
            "height": 44,
            "horizontalAlign": "center",
            "propagateClick": false,
            "verticalAlign": "middle",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, true, 0, null, null, false)",
            "rollOverIconURL": "skin/IconButton_498D14F4_545B_B067_41B9_1C7612F1D7EC_rollover.png",
            "cursor": "hand",
            "minWidth": 1,
            "data": {
             "name": "IconButton Location"
            },
            "class": "IconButton",
            "transparencyActive": false,
            "backgroundOpacity": 0,
            "borderSize": 0,
            "iconURL": "skin/IconButton_498D14F4_545B_B067_41B9_1C7612F1D7EC.png"
           },
           {
            "paddingTop": 0,
            "paddingLeft": 0,
            "width": 44,
            "id": "IconButton_498ED4F4_545B_B067_41D0_C741994A9846",
            "mode": "push",
            "maxWidth": 101,
            "borderRadius": 0,
            "maxHeight": 101,
            "height": 44,
            "horizontalAlign": "center",
            "propagateClick": false,
            "verticalAlign": "middle",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, true, 0, null, null, false)",
            "rollOverIconURL": "skin/IconButton_498ED4F4_545B_B067_41D0_C741994A9846_rollover.png",
            "cursor": "hand",
            "minWidth": 1,
            "data": {
             "name": "IconButton Floorplan"
            },
            "class": "IconButton",
            "transparencyActive": true,
            "backgroundOpacity": 0,
            "borderSize": 0,
            "iconURL": "skin/IconButton_498ED4F4_545B_B067_41D0_C741994A9846.png"
           },
           {
            "paddingTop": 0,
            "paddingLeft": 0,
            "width": 44,
            "id": "IconButton_498E84F4_545B_B067_41C1_9FE1D4A6C9B0",
            "mode": "push",
            "maxWidth": 101,
            "borderRadius": 0,
            "maxHeight": 101,
            "height": 44,
            "horizontalAlign": "center",
            "propagateClick": false,
            "verticalAlign": "middle",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "rollOverIconURL": "skin/IconButton_498E84F4_545B_B067_41C1_9FE1D4A6C9B0_rollover.png",
            "cursor": "hand",
            "minWidth": 1,
            "data": {
             "name": "IconButton Video"
            },
            "class": "IconButton",
            "transparencyActive": false,
            "backgroundOpacity": 0,
            "borderSize": 0,
            "iconURL": "skin/IconButton_498E84F4_545B_B067_41C1_9FE1D4A6C9B0.png"
           },
           {
            "paddingTop": 0,
            "paddingLeft": 0,
            "width": 44,
            "id": "IconButton_498EF4F4_545B_B067_41D4_C2F893A39E01",
            "mode": "push",
            "maxWidth": 101,
            "borderRadius": 0,
            "maxHeight": 101,
            "height": 44,
            "visible": false,
            "horizontalAlign": "center",
            "propagateClick": false,
            "verticalAlign": "middle",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, true, 0, null, null, false)",
            "rollOverIconURL": "skin/IconButton_498EF4F4_545B_B067_41D4_C2F893A39E01_rollover.png",
            "cursor": "hand",
            "minWidth": 1,
            "data": {
             "name": "IconButton Photoalbum"
            },
            "class": "IconButton",
            "transparencyActive": false,
            "backgroundOpacity": 0,
            "borderSize": 0,
            "iconURL": "skin/IconButton_498EF4F4_545B_B067_41D4_C2F893A39E01.png"
           }
          ],
          "minHeight": 1,
          "paddingRight": 0,
          "overflow": "visible",
          "paddingBottom": 0,
          "shadow": false,
          "minWidth": 1,
          "scrollBarVisible": "rollOver",
          "data": {
           "name": "-Container Icons 1"
          },
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "creationPolicy": "delayed",
          "borderSize": 0,
          "contentOpaque": false
         },
         {
          "scrollBarOpacity": 0.5,
          "paddingTop": 0,
          "paddingLeft": 0,
          "width": "100%",
          "id": "Container_498EC4F4_545B_B067_41D4_A0AFD617DEA5",
          "gap": 7,
          "scrollBarMargin": 2,
          "borderRadius": 0,
          "height": 44,
          "horizontalAlign": "left",
          "propagateClick": false,
          "verticalAlign": "top",
          "children": [
           {
            "paddingTop": 0,
            "paddingLeft": 0,
            "width": 44,
            "id": "IconButton_498EB4F4_545B_B067_41D5_019C59361AB8",
            "mode": "push",
            "maxWidth": 101,
            "borderRadius": 0,
            "maxHeight": 101,
            "height": 44,
            "visible": false,
            "pressedRollOverIconURL": "skin/IconButton_498EB4F4_545B_B067_41D5_019C59361AB8_pressed_rollover.png",
            "horizontalAlign": "center",
            "propagateClick": false,
            "verticalAlign": "middle",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "click": "this.setComponentVisibility(this.Container_6E64E913_57DF_81FB_41BB_A44D0D3B4129, true, 0, null, null, false)",
            "pressedIconURL": "skin/IconButton_498EB4F4_545B_B067_41D5_019C59361AB8_pressed.png",
            "rollOverIconURL": "skin/IconButton_498EB4F4_545B_B067_41D5_019C59361AB8_rollover.png",
            "cursor": "hand",
            "minWidth": 1,
            "data": {
             "name": "IconButton Realtor"
            },
            "class": "IconButton",
            "transparencyActive": false,
            "backgroundOpacity": 0,
            "borderSize": 0,
            "iconURL": "skin/IconButton_498EB4F4_545B_B067_41D5_019C59361AB8.png"
           },
           {
            "paddingTop": 0,
            "paddingLeft": 0,
            "width": 50,
            "id": "IconButton_498E94F4_545B_B067_41B9_5C26D93BABA8",
            "mode": "push",
            "maxWidth": 101,
            "borderRadius": 0,
            "maxHeight": 101,
            "height": 50,
            "visible": false,
            "pressedRollOverIconURL": "skin/IconButton_498E94F4_545B_B067_41B9_5C26D93BABA8_pressed_rollover.png",
            "horizontalAlign": "center",
            "propagateClick": false,
            "verticalAlign": "middle",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "pressedIconURL": "skin/IconButton_498E94F4_545B_B067_41B9_5C26D93BABA8_pressed.png",
            "cursor": "hand",
            "minWidth": 1,
            "data": {
             "name": "IconButton --"
            },
            "class": "IconButton",
            "transparencyActive": false,
            "backgroundOpacity": 0,
            "borderSize": 0,
            "iconURL": "skin/IconButton_498E94F4_545B_B067_41B9_5C26D93BABA8.png"
           }
          ],
          "minHeight": 1,
          "paddingRight": 0,
          "overflow": "visible",
          "paddingBottom": 0,
          "shadow": false,
          "minWidth": 1,
          "scrollBarVisible": "rollOver",
          "data": {
           "name": "-Container Icons 2"
          },
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarColor": "#000000",
          "backgroundOpacity": 0,
          "layout": "horizontal",
          "creationPolicy": "delayed",
          "borderSize": 0,
          "contentOpaque": false
         }
        ],
        "minHeight": 1,
        "paddingRight": 0,
        "overflow": "scroll",
        "paddingBottom": 0,
        "shadow": false,
        "scrollBarColor": "#000000",
        "minWidth": 1,
        "scrollBarVisible": "rollOver",
        "data": {
         "name": "-Container footer"
        },
        "class": "Container",
        "scrollBarWidth": 10,
        "backgroundOpacity": 0,
        "layout": "vertical",
        "creationPolicy": "delayed",
        "borderSize": 0,
        "contentOpaque": false,
        "left": "0%"
       },
       {
        "scrollBarOpacity": 0.5,
        "top": "5.28%",
        "paddingTop": 20,
        "paddingLeft": 20,
        "width": "5.932%",
        "id": "HTMLText_CBE73577_DD92_FCDB_41DE_73115B8DC1C3",
        "scrollBarMargin": 2,
        "borderRadius": 0,
        "height": "21.957%",
        "propagateClick": false,
        "minHeight": 1,
        "paddingRight": 20,
        "paddingBottom": 20,
        "shadow": false,
        "minWidth": 1,
        "data": {
         "name": "HTMLText53815"
        },
        "class": "HTMLText",
        "scrollBarWidth": 10,
        "scrollBarVisible": "rollOver",
        "backgroundOpacity": 0,
        "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:37px;\"><B>TITLE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:18px;\"><B>Subtitle</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. </SPAN></DIV></div>",
        "scrollBarColor": "#000000",
        "left": "-9.09%",
        "borderSize": 0
       },
       {
        "top": "5.96%",
        "paddingTop": 0,
        "paddingLeft": 0,
        "right": "0.45%",
        "id": "Label_CA96535E_DD93_B4CD_41E6_81EBE5DAF381",
        "textDecoration": "none",
        "width": "98.636%",
        "borderRadius": 0,
        "text": "HOLIDAY INN EXPRESS",
        "fontFamily": "Vision Bold",
        "height": "4.141%",
        "horizontalAlign": "left",
        "propagateClick": false,
        "verticalAlign": "middle",
        "fontColor": "#FFFFFF",
        "minHeight": 1,
        "paddingRight": 0,
        "paddingBottom": 0,
        "shadow": false,
        "minWidth": 1,
        "data": {
         "name": "HotelName"
        },
        "fontStyle": "normal",
        "fontWeight": "normal",
        "class": "Label",
        "fontSize": "18px",
        "backgroundOpacity": 0,
        "borderSize": 0
       }
      ],
      "minHeight": 1,
      "paddingRight": 40,
      "overflow": "scroll",
      "paddingBottom": 40,
      "shadow": false,
      "layout": "absolute",
      "minWidth": 1,
      "data": {
       "name": "Buttons set"
      },
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarColor": "#000000",
      "scrollBarVisible": "rollOver",
      "backgroundOpacity": 1,
      "creationPolicy": "delayed",
      "left": "0%",
      "backgroundColorRatios": [
       0
      ],
      "contentOpaque": false,
      "borderSize": 0
     },
     {
      "top": "40%",
      "paddingTop": 0,
      "paddingLeft": 0,
      "bottom": "40%",
      "id": "IconButton_498E64F4_545B_B067_41C8_E0221EDD8242",
      "mode": "push",
      "width": 50,
      "maxWidth": 40,
      "borderRadius": 0,
      "maxHeight": 40,
      "horizontalAlign": "center",
      "propagateClick": true,
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingRight": 0,
      "paddingBottom": 0,
      "shadow": false,
      "click": "this.setComponentVisibility(this.Container_498E74F4_545B_B067_41CC_63589B8419E3, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
      "rollOverIconURL": "skin/IconButton_498E64F4_545B_B067_41C8_E0221EDD8242_rollover.png",
      "cursor": "hand",
      "minWidth": 1,
      "data": {
       "name": "IconButton collapse"
      },
      "class": "IconButton",
      "transparencyActive": true,
      "backgroundOpacity": 0,
      "borderSize": 0,
      "iconURL": "skin/IconButton_498E64F4_545B_B067_41C8_E0221EDD8242.png",
      "left": 280
     }
    ],
    "minHeight": 1,
    "paddingRight": 0,
    "overflow": "visible",
    "paddingBottom": 0,
    "shadow": false,
    "layout": "absolute",
    "minWidth": 1,
    "data": {
     "name": "- EXPANDED"
    },
    "class": "Container",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "left": 0,
    "contentOpaque": false,
    "borderSize": 0
   }
  ],
  "minHeight": 1,
  "paddingRight": 0,
  "overflow": "scroll",
  "paddingBottom": 0,
  "shadow": false,
  "layout": "absolute",
  "minWidth": 1,
  "data": {
   "name": "--- LEFT PANEL 6"
  },
  "class": "Container",
  "scrollBarWidth": 10,
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0,
  "scrollBarColor": "#000000",
  "left": "0%",
  "contentOpaque": false,
  "borderSize": 0
 },
 {
  "scrollBarOpacity": 0.5,
  "top": 34,
  "paddingTop": 0,
  "paddingLeft": 0,
  "creationPolicy": "delayed",
  "width": 550,
  "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "gap": 10,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "height": 140,
  "visible": false,
  "horizontalAlign": "left",
  "propagateClick": true,
  "verticalAlign": "top",
  "children": [
   {
    "scrollBarOpacity": 0.5,
    "top": 2,
    "overflow": "scroll",
    "paddingTop": 0,
    "paddingLeft": 0,
    "shadowHorizontalLength": 0,
    "shadowVerticalLength": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "width": 366,
    "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
    "backgroundColorDirection": "vertical",
    "shadowSpread": 1,
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "gap": 10,
    "height": 78,
    "creationPolicy": "delayed",
    "horizontalAlign": "left",
    "propagateClick": true,
    "verticalAlign": "top",
    "minHeight": 1,
    "paddingRight": 0,
    "paddingBottom": 0,
    "shadow": true,
    "layout": "absolute",
    "minWidth": 1,
    "shadowOpacity": 0.3,
    "shadowColor": "#000000",
    "data": {
     "name": "white block"
    },
    "shadowBlurRadius": 7,
    "class": "Container",
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 1,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "contentOpaque": false,
    "left": "0%"
   },
   {
    "scrollBarOpacity": 0.5,
    "top": 86,
    "overflow": "scroll",
    "paddingTop": 0,
    "paddingLeft": 0,
    "shadowHorizontalLength": 0,
    "shadowVerticalLength": 0,
    "backgroundColor": [
     "#3F4B87"
    ],
    "width": 366,
    "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
    "backgroundColorDirection": "vertical",
    "shadowSpread": 1,
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "gap": 10,
    "height": 46,
    "creationPolicy": "delayed",
    "horizontalAlign": "left",
    "propagateClick": true,
    "verticalAlign": "top",
    "minHeight": 1,
    "paddingRight": 0,
    "paddingBottom": 0,
    "shadow": true,
    "layout": "absolute",
    "minWidth": 1,
    "shadowOpacity": 0.3,
    "shadowColor": "#000000",
    "data": {
     "name": "blue block"
    },
    "shadowBlurRadius": 7,
    "class": "Container",
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 1,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "backgroundColorRatios": [
     0.01
    ],
    "contentOpaque": false,
    "left": 0
   },
   {
    "top": 0,
    "paddingTop": 0,
    "paddingLeft": 0,
    "width": 391,
    "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
    "textDecoration": "none",
    "borderRadius": 0,
    "text": "LOREM IPSUM",
    "height": 75,
    "fontFamily": "Oswald",
    "horizontalAlign": "left",
    "propagateClick": true,
    "verticalAlign": "top",
    "fontColor": "#000000",
    "minHeight": 1,
    "paddingRight": 0,
    "paddingBottom": 0,
    "shadow": false,
    "minWidth": 1,
    "fontSize": 61,
    "data": {
     "name": "text 1"
    },
    "fontStyle": "italic",
    "fontWeight": "bold",
    "class": "Label",
    "backgroundOpacity": 0,
    "borderSize": 0,
    "left": 10
   },
   {
    "top": 90,
    "paddingTop": 0,
    "paddingLeft": 0,
    "width": 385,
    "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
    "textDecoration": "none",
    "textShadowOpacity": 1,
    "textShadowHorizontalLength": 0,
    "borderRadius": 0,
    "textShadowVerticalLength": 0,
    "text": "DOLOR SIT AMET, CONSECTETUR",
    "height": 44,
    "fontFamily": "Oswald",
    "horizontalAlign": "left",
    "propagateClick": true,
    "verticalAlign": "top",
    "fontColor": "#FFFFFF",
    "minHeight": 1,
    "paddingRight": 0,
    "paddingBottom": 0,
    "shadow": false,
    "textShadowBlurRadius": 10,
    "minWidth": 1,
    "fontSize": 29,
    "data": {
     "name": "text 2"
    },
    "fontStyle": "italic",
    "fontWeight": "normal",
    "class": "Label",
    "backgroundOpacity": 0,
    "textShadowColor": "#000000",
    "borderSize": 0,
    "left": 12
   }
  ],
  "minHeight": 1,
  "paddingRight": 0,
  "overflow": "visible",
  "paddingBottom": 0,
  "shadow": false,
  "layout": "absolute",
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "data": {
   "name": "--STICKER"
  },
  "class": "Container",
  "scrollBarWidth": 10,
  "backgroundOpacity": 0,
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "left": 64
 },
 {
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "paddingTop": 0,
  "paddingLeft": 0,
  "right": "0%",
  "width": 115.05,
  "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "gap": 10,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "height": 641,
  "horizontalAlign": "left",
  "propagateClick": true,
  "verticalAlign": "top",
  "children": [
   {
    "scrollBarOpacity": 0.5,
    "top": "0%",
    "paddingTop": 0,
    "paddingLeft": 0,
    "right": "0%",
    "width": 110,
    "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
    "gap": 10,
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "height": 110,
    "horizontalAlign": "center",
    "propagateClick": true,
    "verticalAlign": "middle",
    "children": [
     {
      "paddingTop": 0,
      "paddingLeft": 0,
      "width": 60,
      "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
      "mode": "toggle",
      "maxWidth": 60,
      "borderRadius": 0,
      "maxHeight": 60,
      "height": 60,
      "pressedRollOverIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed_rollover.png",
      "horizontalAlign": "center",
      "propagateClick": true,
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingRight": 0,
      "paddingBottom": 0,
      "shadow": false,
      "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
      "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
      "cursor": "hand",
      "minWidth": 1,
      "data": {
       "name": "image button menu"
      },
      "class": "IconButton",
      "transparencyActive": true,
      "backgroundOpacity": 0,
      "borderSize": 0,
      "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png"
     }
    ],
    "minHeight": 1,
    "paddingRight": 0,
    "overflow": "visible",
    "paddingBottom": 0,
    "shadow": false,
    "layout": "horizontal",
    "minWidth": 1,
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "button menu sup"
    },
    "class": "Container",
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "creationPolicy": "delayed",
    "borderSize": 0,
    "contentOpaque": false
   },
   {
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "paddingLeft": 0,
    "right": "0%",
    "bottom": "0%",
    "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
    "gap": 3,
    "width": "91.304%",
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "height": "85.959%",
    "visible": false,
    "horizontalAlign": "center",
    "propagateClick": true,
    "verticalAlign": "top",
    "children": [
     "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
     "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
     {
      "paddingTop": 0,
      "paddingLeft": 0,
      "width": 58,
      "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
      "mode": "toggle",
      "maxWidth": 58,
      "borderRadius": 0,
      "maxHeight": 58,
      "height": 58,
      "visible": false,
      "pressedRollOverIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed_rollover.png",
      "horizontalAlign": "center",
      "propagateClick": true,
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingRight": 0,
      "paddingBottom": 0,
      "shadow": false,
      "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
      "cursor": "hand",
      "minWidth": 1,
      "data": {
       "name": "IconButton MUTE"
      },
      "class": "IconButton",
      "transparencyActive": true,
      "backgroundOpacity": 0,
      "borderSize": 0,
      "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png"
     },
     "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
     {
      "paddingTop": 0,
      "paddingLeft": 0,
      "width": 58,
      "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
      "mode": "toggle",
      "maxWidth": 58,
      "borderRadius": 0,
      "maxHeight": 58,
      "height": 58,
      "pressedRollOverIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed_rollover.png",
      "horizontalAlign": "center",
      "propagateClick": true,
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingRight": 0,
      "paddingBottom": 0,
      "shadow": false,
      "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
      "cursor": "hand",
      "minWidth": 1,
      "data": {
       "name": "IconButton FULLSCREEN"
      },
      "class": "IconButton",
      "transparencyActive": true,
      "backgroundOpacity": 0,
      "borderSize": 0,
      "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png"
     },
     {
      "paddingTop": 0,
      "paddingLeft": 0,
      "width": 58,
      "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
      "mode": "push",
      "maxWidth": 58,
      "borderRadius": 0,
      "maxHeight": 58,
      "height": 58,
      "visible": false,
      "horizontalAlign": "center",
      "propagateClick": true,
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingRight": 0,
      "paddingBottom": 0,
      "shadow": false,
      "click": "this.shareTwitter(location.href)",
      "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
      "cursor": "hand",
      "minWidth": 1,
      "data": {
       "name": "IconButton TWITTER"
      },
      "class": "IconButton",
      "transparencyActive": true,
      "backgroundOpacity": 0,
      "borderSize": 0,
      "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png"
     },
     {
      "paddingTop": 0,
      "paddingLeft": 0,
      "width": 58,
      "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
      "mode": "push",
      "maxWidth": 58,
      "borderRadius": 0,
      "maxHeight": 58,
      "height": 58,
      "visible": false,
      "horizontalAlign": "center",
      "propagateClick": true,
      "verticalAlign": "middle",
      "minHeight": 1,
      "paddingRight": 0,
      "paddingBottom": 0,
      "shadow": false,
      "click": "this.shareFacebook(location.href)",
      "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
      "cursor": "hand",
      "minWidth": 1,
      "data": {
       "name": "IconButton FB"
      },
      "class": "IconButton",
      "transparencyActive": true,
      "backgroundOpacity": 0,
      "borderSize": 0,
      "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png"
     }
    ],
    "minHeight": 1,
    "paddingRight": 0,
    "overflow": "scroll",
    "paddingBottom": 0,
    "shadow": false,
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "data": {
     "name": "-button set"
    },
    "class": "Container",
    "scrollBarWidth": 10,
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 0,
    "layout": "vertical",
    "creationPolicy": "delayed",
    "borderSize": 0,
    "contentOpaque": false
   }
  ],
  "minHeight": 1,
  "paddingRight": 0,
  "overflow": "scroll",
  "paddingBottom": 0,
  "shadow": false,
  "layout": "absolute",
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "data": {
   "name": "-- SETTINGS"
  },
  "class": "Container",
  "scrollBarWidth": 10,
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0,
  "creationPolicy": "delayed",
  "borderSize": 0,
  "contentOpaque": false
 },
 {
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "paddingTop": 0,
  "paddingLeft": 0,
  "right": "0%",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "bottom": "0%",
  "id": "Container_6EC9D199_4F7D_CE01_41CD_90869FADC821",
  "backgroundColorDirection": "vertical",
  "scrollBarMargin": 2,
  "gap": 10,
  "borderRadius": 0,
  "visible": false,
  "horizontalAlign": "left",
  "propagateClick": true,
  "verticalAlign": "top",
  "children": [
   {
    "scrollBarOpacity": 0.5,
    "top": "10%",
    "overflow": "scroll",
    "paddingTop": 0,
    "paddingLeft": 0,
    "right": "15%",
    "shadowHorizontalLength": 0,
    "shadowVerticalLength": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "bottom": "10%",
    "id": "Container_6ECE8198_4F7D_CE0F_41B6_C7C8D7E8FF58",
    "backgroundColorDirection": "vertical",
    "shadowSpread": 1,
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "gap": 10,
    "creationPolicy": "delayed",
    "horizontalAlign": "left",
    "propagateClick": false,
    "verticalAlign": "top",
    "children": [
     {
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "paddingLeft": 0,
      "backgroundColor": [
       "#000000"
      ],
      "width": "85%",
      "id": "Container_6ECE7198_4F7D_CE0F_41B4_ED3C974BE2A1",
      "backgroundColorDirection": "vertical",
      "scrollBarMargin": 2,
      "gap": 10,
      "borderRadius": 0,
      "height": "100%",
      "horizontalAlign": "center",
      "propagateClick": false,
      "verticalAlign": "middle",
      "children": [
       {
        "top": "0%",
        "paddingTop": 0,
        "paddingLeft": 0,
        "width": "100%",
        "id": "Image_6ECE6198_4F7D_CE0F_41B0_5E88CBDCBBB2",
        "maxWidth": 2000,
        "borderRadius": 0,
        "maxHeight": 1000,
        "height": "100%",
        "horizontalAlign": "center",
        "propagateClick": false,
        "verticalAlign": "middle",
        "minHeight": 1,
        "paddingRight": 0,
        "paddingBottom": 0,
        "shadow": false,
        "minWidth": 1,
        "data": {
         "name": "Image"
        },
        "url": "skin/Image_6ECE6198_4F7D_CE0F_41B0_5E88CBDCBBB2.jpg",
        "scaleMode": "fit_outside",
        "class": "Image",
        "backgroundOpacity": 0,
        "left": "0%",
        "borderSize": 0
       }
      ],
      "minHeight": 1,
      "paddingRight": 0,
      "overflow": "scroll",
      "paddingBottom": 0,
      "shadow": false,
      "minWidth": 1,
      "data": {
       "name": "-left"
      },
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarColor": "#000000",
      "scrollBarVisible": "rollOver",
      "backgroundOpacity": 1,
      "layout": "absolute",
      "creationPolicy": "delayed",
      "borderSize": 0,
      "backgroundColorRatios": [
       0
      ],
      "contentOpaque": false
     },
     {
      "scrollBarOpacity": 0.51,
      "paddingTop": 20,
      "paddingLeft": 50,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "width": "50%",
      "id": "Container_6ECE5198_4F7D_CE0F_416D_84774E7F2542",
      "backgroundColorDirection": "vertical",
      "scrollBarMargin": 2,
      "gap": 0,
      "borderRadius": 0,
      "height": "100%",
      "horizontalAlign": "left",
      "propagateClick": false,
      "verticalAlign": "top",
      "children": [
       {
        "scrollBarOpacity": 0.5,
        "paddingTop": 20,
        "paddingLeft": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "width": "100%",
        "id": "Container_6ECE4198_4F7D_CE0F_41A0_688A405FA9A1",
        "backgroundColorDirection": "vertical",
        "scrollBarMargin": 2,
        "gap": 0,
        "borderRadius": 0,
        "height": 60,
        "horizontalAlign": "right",
        "propagateClick": false,
        "verticalAlign": "top",
        "minHeight": 0,
        "paddingRight": 0,
        "overflow": "scroll",
        "paddingBottom": 0,
        "shadow": false,
        "minWidth": 1,
        "scrollBarVisible": "rollOver",
        "data": {
         "name": "Container space"
        },
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0.3,
        "layout": "horizontal",
        "creationPolicy": "delayed",
        "borderSize": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "contentOpaque": false
       },
       {
        "scrollBarOpacity": 0.79,
        "paddingTop": 0,
        "paddingLeft": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "width": "100%",
        "id": "Container_6ECE3198_4F7D_CE0F_41B9_971123164DFE",
        "backgroundColorDirection": "vertical",
        "scrollBarMargin": 2,
        "gap": 10,
        "borderRadius": 0,
        "height": "100%",
        "horizontalAlign": "left",
        "propagateClick": false,
        "verticalAlign": "top",
        "children": [
         {
          "scrollBarOpacity": 0.5,
          "paddingTop": 0,
          "paddingLeft": 10,
          "width": "100%",
          "id": "HTMLText_6ECE2198_4F7D_CE0F_41C1_6D512C0D0B76",
          "scrollBarMargin": 2,
          "borderRadius": 0,
          "height": "100%",
          "propagateClick": false,
          "minHeight": 1,
          "paddingRight": 10,
          "paddingBottom": 20,
          "shadow": false,
          "scrollBarColor": "#04A3E1",
          "minWidth": 1,
          "data": {
           "name": "HTMLText"
          },
          "class": "HTMLText",
          "scrollBarWidth": 10,
          "scrollBarVisible": "rollOver",
          "backgroundOpacity": 0,
          "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.44vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.79vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.79vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.51vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin. </SPAN></DIV><p STYLE=\"margin:0; line-height:2.51vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.51vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.6vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.51vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.51vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.74vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
          "borderSize": 0
         },
         {
          "paddingTop": 0,
          "paddingLeft": 0,
          "backgroundColor": [
           "#04A3E1"
          ],
          "width": 180,
          "id": "Button_6ECE1198_4F7D_CE0F_41D1_D607B97BA20A",
          "backgroundColorDirection": "vertical",
          "mode": "push",
          "shadowSpread": 1,
          "textDecoration": "none",
          "borderRadius": 50,
          "gap": 5,
          "height": 50,
          "iconWidth": 32,
          "fontFamily": "Oswald",
          "horizontalAlign": "center",
          "propagateClick": false,
          "verticalAlign": "middle",
          "fontColor": "#FFFFFF",
          "minHeight": 1,
          "paddingRight": 0,
          "paddingBottom": 0,
          "shadow": false,
          "iconHeight": 32,
          "borderColor": "#000000",
          "cursor": "hand",
          "pressedBackgroundColor": [
           "#000000"
          ],
          "layout": "horizontal",
          "minWidth": 1,
          "fontSize": "2.39vh",
          "fontStyle": "italic",
          "shadowBlurRadius": 6,
          "class": "Button",
          "shadowColor": "#000000",
          "data": {
           "name": "Button"
          },
          "backgroundOpacity": 0.7,
          "label": "LOREM IPSUM",
          "iconBeforeLabel": true,
          "pressedBackgroundColorRatios": [
           0
          ],
          "borderSize": 0,
          "backgroundColorRatios": [
           0
          ],
          "rollOverBackgroundOpacity": 1,
          "fontWeight": "bold",
          "pressedBackgroundOpacity": 1
         }
        ],
        "minHeight": 520,
        "paddingRight": 0,
        "overflow": "scroll",
        "paddingBottom": 30,
        "shadow": false,
        "minWidth": 100,
        "data": {
         "name": "Container text"
        },
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarColor": "#E73B2C",
        "scrollBarVisible": "rollOver",
        "backgroundOpacity": 0.3,
        "layout": "vertical",
        "creationPolicy": "delayed",
        "borderSize": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "contentOpaque": false
       },
       {
        "scrollBarOpacity": 0.5,
        "paddingTop": 0,
        "paddingLeft": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "width": 370,
        "id": "Container_6ECE0198_4F7D_CE0F_41C2_173DE9AC91EC",
        "backgroundColorDirection": "vertical",
        "scrollBarMargin": 2,
        "gap": 10,
        "borderRadius": 0,
        "height": 40,
        "horizontalAlign": "left",
        "propagateClick": false,
        "verticalAlign": "top",
        "minHeight": 1,
        "paddingRight": 0,
        "overflow": "scroll",
        "paddingBottom": 0,
        "shadow": false,
        "layout": "horizontal",
        "minWidth": 1,
        "scrollBarVisible": "rollOver",
        "data": {
         "name": "Container space"
        },
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0.3,
        "creationPolicy": "delayed",
        "borderSize": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "contentOpaque": false
       }
      ],
      "minHeight": 1,
      "paddingRight": 50,
      "overflow": "visible",
      "paddingBottom": 20,
      "shadow": false,
      "minWidth": 460,
      "data": {
       "name": "-right"
      },
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarColor": "#0069A3",
      "scrollBarVisible": "rollOver",
      "backgroundOpacity": 1,
      "layout": "vertical",
      "creationPolicy": "delayed",
      "borderSize": 0,
      "backgroundColorRatios": [
       0,
       1
      ],
      "contentOpaque": false
     }
    ],
    "minHeight": 1,
    "paddingRight": 0,
    "paddingBottom": 0,
    "shadow": true,
    "layout": "horizontal",
    "minWidth": 1,
    "shadowOpacity": 0.3,
    "shadowColor": "#000000",
    "data": {
     "name": "Global"
    },
    "shadowBlurRadius": 25,
    "class": "Container",
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 1,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "contentOpaque": false,
    "left": "15%"
   },
   {
    "scrollBarOpacity": 0.5,
    "top": "10%",
    "paddingTop": 20,
    "paddingLeft": 0,
    "right": "15%",
    "bottom": "80%",
    "id": "Container_6EC9F199_4F7D_CE01_41C8_1A8AEA0A382B",
    "gap": 10,
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "horizontalAlign": "right",
    "propagateClick": false,
    "verticalAlign": "top",
    "children": [
     {
      "paddingTop": 0,
      "paddingLeft": 0,
      "width": "25%",
      "id": "IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C",
      "mode": "push",
      "maxWidth": 50,
      "borderRadius": 0,
      "maxHeight": 50,
      "height": "75%",
      "pressedRollOverIconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C_pressed_rollover.jpg",
      "horizontalAlign": "center",
      "propagateClick": false,
      "verticalAlign": "middle",
      "minHeight": 50,
      "paddingRight": 0,
      "paddingBottom": 0,
      "shadow": false,
      "cursor": "hand",
      "click": "this.setComponentVisibility(this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821, false, 0, null, null, false)",
      "pressedIconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C_pressed.jpg",
      "rollOverIconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C_rollover.jpg",
      "minWidth": 50,
      "data": {
       "name": "X"
      },
      "class": "IconButton",
      "transparencyActive": false,
      "backgroundOpacity": 0,
      "borderSize": 0,
      "iconURL": "skin/IconButton_6EC9E199_4F7D_CE01_41C3_2462FBBEDC4C.jpg"
     }
    ],
    "minHeight": 1,
    "paddingRight": 20,
    "overflow": "visible",
    "paddingBottom": 0,
    "shadow": false,
    "scrollBarColor": "#000000",
    "layout": "vertical",
    "minWidth": 1,
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "Container X global"
    },
    "class": "Container",
    "scrollBarWidth": 10,
    "backgroundOpacity": 0,
    "creationPolicy": "delayed",
    "borderSize": 0,
    "contentOpaque": false,
    "left": "15%"
   }
  ],
  "minHeight": 1,
  "paddingRight": 0,
  "overflow": "scroll",
  "paddingBottom": 0,
  "shadow": false,
  "click": "this.setComponentVisibility(this.Container_6EC9D199_4F7D_CE01_41CD_90869FADC821, false, 0, null, null, false)",
  "layout": "absolute",
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "data": {
   "name": "---INFO photo"
  },
  "class": "Container",
  "scrollBarWidth": 10,
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.6,
  "creationPolicy": "delayed",
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "contentOpaque": false,
  "left": "0%"
 },
 {
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "paddingTop": 0,
  "paddingLeft": 0,
  "right": "0%",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "bottom": "0%",
  "id": "Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2",
  "backgroundColorDirection": "vertical",
  "scrollBarMargin": 2,
  "gap": 10,
  "borderRadius": 0,
  "visible": false,
  "horizontalAlign": "left",
  "propagateClick": true,
  "verticalAlign": "top",
  "children": [
   {
    "scrollBarOpacity": 0.5,
    "top": "10%",
    "overflow": "visible",
    "paddingTop": 0,
    "paddingLeft": 0,
    "right": "15%",
    "shadowHorizontalLength": 0,
    "shadowVerticalLength": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "bottom": "10%",
    "id": "Container_6DF721BC_4F7E_CE07_41B3_A48ABF3626BB",
    "backgroundColorDirection": "vertical",
    "shadowSpread": 1,
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "gap": 10,
    "creationPolicy": "delayed",
    "horizontalAlign": "center",
    "propagateClick": false,
    "verticalAlign": "top",
    "children": [
     {
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "paddingLeft": 0,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "width": "100%",
      "id": "Container_6DF7C1BC_4F7E_CE07_41B8_32B44A9C9C65",
      "backgroundColorDirection": "vertical",
      "scrollBarMargin": 2,
      "gap": 10,
      "borderRadius": 0,
      "height": 140,
      "horizontalAlign": "left",
      "propagateClick": false,
      "verticalAlign": "top",
      "children": [
       {
        "top": 20,
        "paddingTop": 0,
        "paddingLeft": 0,
        "right": 20,
        "width": "100%",
        "id": "IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633",
        "mode": "push",
        "maxWidth": 50,
        "borderRadius": 0,
        "maxHeight": 50,
        "height": "36.14%",
        "pressedRollOverIconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633_pressed_rollover.jpg",
        "horizontalAlign": "right",
        "propagateClick": false,
        "verticalAlign": "top",
        "minHeight": 50,
        "paddingRight": 0,
        "paddingBottom": 0,
        "shadow": false,
        "cursor": "hand",
        "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, false, 0, null, null, false)",
        "pressedIconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633_pressed.jpg",
        "rollOverIconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633_rollover.jpg",
        "minWidth": 50,
        "data": {
         "name": "IconButton X"
        },
        "class": "IconButton",
        "transparencyActive": false,
        "backgroundOpacity": 0,
        "borderSize": 0,
        "iconURL": "skin/IconButton_6DF7D1BC_4F7E_CE07_41CB_E7433D78A633.jpg"
       }
      ],
      "minHeight": 1,
      "paddingRight": 0,
      "overflow": "scroll",
      "paddingBottom": 0,
      "shadow": false,
      "minWidth": 1,
      "scrollBarVisible": "rollOver",
      "data": {
       "name": "header"
      },
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0.3,
      "layout": "absolute",
      "creationPolicy": "delayed",
      "borderSize": 0,
      "backgroundColorRatios": [
       0,
       1
      ],
      "contentOpaque": false
     },
     {
      "itemOpacity": 1,
      "paddingLeft": 70,
      "playList": "this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist",
      "selectedItemThumbnailShadowVerticalLength": 0,
      "itemMaxWidth": 1000,
      "itemMinWidth": 50,
      "itemThumbnailOpacity": 1,
      "rollOverItemThumbnailShadowBlurRadius": 0,
      "itemBackgroundColor": [],
      "selectedItemThumbnailShadowHorizontalLength": 0,
      "height": "92%",
      "rollOverItemLabelFontColor": "#04A3E1",
      "propagateClick": false,
      "itemLabelFontFamily": "Oswald",
      "itemLabelPosition": "bottom",
      "itemWidth": 220,
      "selectedItemThumbnailShadowBlurRadius": 16,
      "paddingRight": 70,
      "shadow": false,
      "rollOverItemThumbnailShadowVerticalLength": 0,
      "itemHorizontalAlign": "center",
      "itemThumbnailWidth": 220,
      "itemVerticalAlign": "top",
      "itemLabelFontWeight": "normal",
      "rollOverItemThumbnailShadowHorizontalLength": 8,
      "itemMode": "normal",
      "itemBorderRadius": 0,
      "itemPaddingRight": 3,
      "selectedItemLabelFontColor": "#04A3E1",
      "itemLabelFontStyle": "italic",
      "selectedItemThumbnailShadow": true,
      "itemLabelGap": 7,
      "selectedItemLabelFontWeight": "bold",
      "rollOverItemThumbnailShadowColor": "#04A3E1",
      "itemThumbnailBorderRadius": 0,
      "scrollBarOpacity": 0.5,
      "itemMaxHeight": 1000,
      "itemPaddingTop": 3,
      "itemHeight": 160,
      "paddingTop": 10,
      "itemLabelTextDecoration": "none",
      "itemPaddingLeft": 3,
      "itemBackgroundColorRatios": [],
      "bottom": -0.2,
      "id": "ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9",
      "gap": 26,
      "itemThumbnailHeight": 125,
      "scrollBarMargin": 2,
      "itemLabelHorizontalAlign": "center",
      "borderRadius": 5,
      "rollOverItemThumbnailShadow": true,
      "itemLabelFontSize": 16,
      "width": "100%",
      "itemThumbnailScaleMode": "fit_outside",
      "horizontalAlign": "center",
      "verticalAlign": "middle",
      "paddingBottom": 70,
      "itemLabelFontColor": "#666666",
      "minHeight": 1,
      "itemBackgroundColorDirection": "vertical",
      "scrollBarVisible": "rollOver",
      "itemBackgroundOpacity": 0,
      "scrollBarColor": "#04A3E1",
      "itemPaddingBottom": 3,
      "minWidth": 1,
      "scrollBarWidth": 10,
      "data": {
       "name": "ThumbnailList"
      },
      "class": "ThumbnailGrid",
      "itemMinHeight": 50,
      "backgroundOpacity": 0,
      "itemThumbnailShadow": false,
      "borderSize": 0,
      "left": 0
     }
    ],
    "minHeight": 1,
    "paddingRight": 0,
    "paddingBottom": 0,
    "shadow": true,
    "layout": "absolute",
    "minWidth": 1,
    "shadowOpacity": 0.3,
    "shadowColor": "#000000",
    "data": {
     "name": "Global"
    },
    "shadowBlurRadius": 25,
    "class": "Container",
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 1,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "contentOpaque": false,
    "left": "15%"
   }
  ],
  "minHeight": 1,
  "paddingRight": 0,
  "overflow": "scroll",
  "paddingBottom": 0,
  "shadow": false,
  "click": "this.setComponentVisibility(this.Container_6DF7F1BD_4F7E_CE06_41CE_CAC865A256B2, false, 0, null, null, false)",
  "layout": "absolute",
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "data": {
   "name": "---PANORAMA LIST"
  },
  "class": "Container",
  "scrollBarWidth": 10,
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.6,
  "creationPolicy": "delayed",
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "contentOpaque": false,
  "left": "0%"
 },
 {
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "paddingTop": 0,
  "paddingLeft": 0,
  "right": "0%",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "bottom": "0%",
  "id": "Container_6FFBDC7E_4F7E_B603_419C_369C462C516C",
  "backgroundColorDirection": "vertical",
  "scrollBarMargin": 2,
  "gap": 10,
  "borderRadius": 0,
  "visible": false,
  "horizontalAlign": "left",
  "propagateClick": true,
  "verticalAlign": "top",
  "children": [
   {
    "scrollBarOpacity": 0.5,
    "top": "15%",
    "overflow": "scroll",
    "paddingTop": 0,
    "paddingLeft": 0,
    "right": "15%",
    "shadowHorizontalLength": 0,
    "shadowVerticalLength": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "bottom": "15%",
    "id": "Container_6FFB1C7E_4F7E_B603_41CC_6FEE622C6989",
    "backgroundColorDirection": "vertical",
    "shadowSpread": 1,
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "gap": 10,
    "creationPolicy": "delayed",
    "horizontalAlign": "left",
    "propagateClick": false,
    "verticalAlign": "top",
    "children": [
     {
      "paddingTop": 0,
      "paddingLeft": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "width": "100%",
      "id": "WebFrame_6FFB0C7E_4F7E_B603_41AD_F367B1D68E70",
      "backgroundColorDirection": "vertical",
      "borderRadius": 0,
      "height": "100%",
      "propagateClick": false,
      "minHeight": 1,
      "paddingRight": 0,
      "insetBorder": false,
      "paddingBottom": 0,
      "shadow": false,
      "scrollEnabled": true,
      "minWidth": 1,
      "data": {
       "name": "WebFrame"
      },
      "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1675.3378402177266!2d-96.6885456105574!3d32.88029936621429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea0bfee873763%3A0x683b3dbda3053db3!2sHoliday+Inn+Express+%26+Suites+Dallas+Northeast-Arboretum!5e0!3m2!1sen!2sus!4v1549950104641\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
      "class": "WebFrame",
      "backgroundOpacity": 1,
      "borderSize": 0,
      "backgroundColorRatios": [
       0
      ]
     }
    ],
    "minHeight": 1,
    "paddingRight": 0,
    "paddingBottom": 0,
    "shadow": true,
    "layout": "horizontal",
    "minWidth": 1,
    "shadowOpacity": 0.3,
    "shadowColor": "#000000",
    "data": {
     "name": "Global"
    },
    "shadowBlurRadius": 25,
    "class": "Container",
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 1,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "contentOpaque": false,
    "left": "15%"
   },
   {
    "scrollBarOpacity": 0.5,
    "top": "15%",
    "paddingTop": 20,
    "paddingLeft": 0,
    "right": "15%",
    "bottom": "75%",
    "id": "Container_6FFBFC7E_4F7E_B603_41B1_0E24EB521F6F",
    "gap": 10,
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "horizontalAlign": "right",
    "propagateClick": false,
    "verticalAlign": "top",
    "children": [
     {
      "paddingTop": 0,
      "paddingLeft": 0,
      "width": "25%",
      "id": "IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848",
      "mode": "push",
      "maxWidth": 50,
      "borderRadius": 0,
      "maxHeight": 50,
      "height": "75%",
      "pressedRollOverIconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848_pressed_rollover.jpg",
      "horizontalAlign": "center",
      "propagateClick": false,
      "verticalAlign": "middle",
      "minHeight": 50,
      "paddingRight": 0,
      "paddingBottom": 0,
      "shadow": false,
      "cursor": "hand",
      "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, false, 0, null, null, false)",
      "pressedIconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848_pressed.jpg",
      "rollOverIconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848_rollover.jpg",
      "minWidth": 50,
      "data": {
       "name": "X"
      },
      "class": "IconButton",
      "transparencyActive": false,
      "backgroundOpacity": 0,
      "borderSize": 0,
      "iconURL": "skin/IconButton_6FFBEC7E_4F7E_B603_41CD_2667D7EA7848.jpg"
     }
    ],
    "minHeight": 1,
    "paddingRight": 20,
    "overflow": "visible",
    "paddingBottom": 0,
    "shadow": false,
    "layout": "vertical",
    "minWidth": 1,
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "Container X global"
    },
    "class": "Container",
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "creationPolicy": "delayed",
    "borderSize": 0,
    "contentOpaque": false,
    "left": "15%"
   }
  ],
  "minHeight": 1,
  "paddingRight": 0,
  "overflow": "scroll",
  "paddingBottom": 0,
  "shadow": false,
  "click": "this.setComponentVisibility(this.Container_6FFBDC7E_4F7E_B603_419C_369C462C516C, false, 0, null, null, false)",
  "layout": "absolute",
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "data": {
   "name": "---LOCATION"
  },
  "class": "Container",
  "scrollBarWidth": 10,
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.6,
  "creationPolicy": "delayed",
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "contentOpaque": false,
  "left": "0%"
 },
 {
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "paddingTop": 0,
  "paddingLeft": 0,
  "right": "0%",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "bottom": "0%",
  "id": "Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2",
  "backgroundColorDirection": "vertical",
  "scrollBarMargin": 2,
  "gap": 10,
  "borderRadius": 0,
  "visible": false,
  "horizontalAlign": "left",
  "propagateClick": true,
  "verticalAlign": "top",
  "children": [
   {
    "scrollBarOpacity": 0.5,
    "top": "10%",
    "overflow": "visible",
    "paddingTop": 0,
    "paddingLeft": 0,
    "right": "15%",
    "shadowHorizontalLength": 0,
    "shadowVerticalLength": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "bottom": "10%",
    "id": "Container_6DF6322B_4F7F_B201_41CE_B6377ACA2E73",
    "backgroundColorDirection": "vertical",
    "shadowSpread": 1,
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "gap": 10,
    "creationPolicy": "delayed",
    "horizontalAlign": "center",
    "propagateClick": false,
    "verticalAlign": "top",
    "children": [
     {
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "paddingLeft": 0,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "width": "100%",
      "id": "Container_6DF6222B_4F7F_B201_41C7_D51BB78CA3C1",
      "backgroundColorDirection": "vertical",
      "scrollBarMargin": 2,
      "gap": 10,
      "borderRadius": 0,
      "height": "100%",
      "horizontalAlign": "left",
      "propagateClick": false,
      "verticalAlign": "top",
      "children": [
       {
        "toolTipBorderColor": "#767676",
        "paddingLeft": 0,
        "toolTipTextShadowBlurRadius": 3,
        "progressBorderSize": 0,
        "playbackBarBackgroundColor": [
         "#FFFFFF"
        ],
        "playbackBarProgressBackgroundColorDirection": "vertical",
        "playbackBarHeight": 10,
        "playbackBarHeadWidth": 6,
        "toolTipShadowVerticalLength": 0,
        "height": "100%",
        "toolTipPaddingBottom": 4,
        "playbackBarProgressOpacity": 1,
        "toolTipFontStyle": "normal",
        "playbackBarBorderSize": 0,
        "toolTipFontFamily": "Arial",
        "propagateClick": false,
        "progressBottom": 2,
        "playbackBarBackgroundOpacity": 1,
        "playbackBarRight": 0,
        "toolTipShadowOpacity": 1,
        "paddingRight": 0,
        "toolTipFontColor": "#606060",
        "playbackBarBackgroundColorDirection": "vertical",
        "toolTipBackgroundColor": "#F6F6F6",
        "shadow": false,
        "toolTipPaddingRight": 6,
        "progressBarBorderSize": 0,
        "playbackBarProgressBorderSize": 0,
        "playbackBarHeadShadowColor": "#000000",
        "progressBarBorderRadius": 0,
        "toolTipPaddingTop": 4,
        "playbackBarProgressBorderRadius": 0,
        "toolTipOpacity": 1,
        "progressBorderRadius": 0,
        "playbackBarProgressBackgroundColorRatios": [
         0
        ],
        "playbackBarHeadShadowHorizontalLength": 0,
        "toolTipFontWeight": "normal",
        "playbackBarHeadShadowVerticalLength": 0,
        "toolTipShadowColor": "#333333",
        "progressRight": 0,
        "progressHeight": 10,
        "playbackBarHeadShadowBlurRadius": 3,
        "progressBarBorderColor": "#0066FF",
        "progressOpacity": 1,
        "playbackBarBorderRadius": 0,
        "progressBarBackgroundColorDirection": "vertical",
        "playbackBarHeadBackgroundColorRatios": [
         0,
         1
        ],
        "displayTooltipInTouchScreens": true,
        "progressBarBackgroundColorRatios": [
         0
        ],
        "playbackBarHeadOpacity": 1,
        "top": "0%",
        "playbackBarHeadShadow": true,
        "paddingTop": 0,
        "toolTipPaddingLeft": 6,
        "playbackBarHeadBackgroundColorDirection": "vertical",
        "toolTipShadowHorizontalLength": 0,
        "width": "100%",
        "toolTipDisplayTime": 600,
        "id": "ViewerAreaLabeled_6DF6122B_4F7F_B201_41D0_F98C2AA2D32F",
        "playbackBarHeadBorderRadius": 0,
        "progressBackgroundColorDirection": "vertical",
        "toolTipTextShadowOpacity": 0,
        "toolTipBorderRadius": 3,
        "playbackBarProgressBackgroundColor": [
         "#3399FF"
        ],
        "borderRadius": 0,
        "progressBarBackgroundColor": [
         "#3399FF"
        ],
        "playbackBarBottom": 0,
        "toolTipShadowSpread": 0,
        "progressBackgroundOpacity": 1,
        "playbackBarOpacity": 1,
        "playbackBarProgressBorderColor": "#000000",
        "playbackBarHeadShadowOpacity": 0.7,
        "progressBorderColor": "#FFFFFF",
        "toolTipShadowBlurRadius": 3,
        "progressBarOpacity": 1,
        "toolTipFontSize": 12,
        "paddingBottom": 0,
        "minHeight": 1,
        "transitionMode": "blending",
        "playbackBarBorderColor": "#FFFFFF",
        "toolTipBorderSize": 1,
        "toolTipTextShadowColor": "#000000",
        "progressBackgroundColor": [
         "#FFFFFF"
        ],
        "playbackBarHeadBorderSize": 0,
        "minWidth": 1,
        "data": {
         "name": "Viewer photoalbum 1"
        },
        "playbackBarHeadBorderColor": "#000000",
        "progressBackgroundColorRatios": [
         0.01
        ],
        "class": "ViewerArea",
        "transitionDuration": 500,
        "progressLeft": 0,
        "left": "0%",
        "playbackBarLeft": 0,
        "playbackBarHeadBackgroundColor": [
         "#111111",
         "#666666"
        ],
        "playbackBarHeadHeight": 15,
        "borderSize": 0
       },
       {
        "top": "20%",
        "paddingTop": 0,
        "paddingLeft": 0,
        "bottom": "20%",
        "id": "IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742",
        "mode": "push",
        "width": "14.22%",
        "maxWidth": 60,
        "borderRadius": 0,
        "maxHeight": 60,
        "pressedRollOverIconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742_pressed_rollover.png",
        "horizontalAlign": "center",
        "propagateClick": false,
        "verticalAlign": "middle",
        "minHeight": 50,
        "paddingRight": 0,
        "paddingBottom": 0,
        "shadow": false,
        "pressedIconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742_pressed.png",
        "rollOverIconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742_rollover.png",
        "cursor": "hand",
        "minWidth": 50,
        "data": {
         "name": "IconButton <"
        },
        "class": "IconButton",
        "transparencyActive": false,
        "backgroundOpacity": 0,
        "borderSize": 0,
        "iconURL": "skin/IconButton_6DF6022B_4F7F_B201_41B9_C7C53D531742.png",
        "left": 10
       },
       {
        "top": "20%",
        "paddingTop": 0,
        "paddingLeft": 0,
        "right": 10,
        "bottom": "20%",
        "id": "IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2",
        "mode": "push",
        "width": "14.22%",
        "maxWidth": 60,
        "borderRadius": 0,
        "maxHeight": 60,
        "pressedRollOverIconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2_pressed_rollover.png",
        "horizontalAlign": "center",
        "propagateClick": false,
        "verticalAlign": "middle",
        "minHeight": 50,
        "paddingRight": 0,
        "paddingBottom": 0,
        "shadow": false,
        "pressedIconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2_pressed.png",
        "rollOverIconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2_rollover.png",
        "cursor": "hand",
        "minWidth": 50,
        "data": {
         "name": "IconButton >"
        },
        "class": "IconButton",
        "transparencyActive": false,
        "backgroundOpacity": 0,
        "borderSize": 0,
        "iconURL": "skin/IconButton_6DF6722B_4F7F_B201_41BE_198E4261DEC2.png"
       },
       {
        "top": 20,
        "paddingTop": 0,
        "paddingLeft": 0,
        "right": 20,
        "width": "10%",
        "id": "IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F",
        "mode": "push",
        "maxWidth": 50,
        "borderRadius": 0,
        "maxHeight": 50,
        "height": "10%",
        "pressedRollOverIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_pressed_rollover.jpg",
        "horizontalAlign": "right",
        "propagateClick": false,
        "verticalAlign": "top",
        "minHeight": 50,
        "paddingRight": 0,
        "paddingBottom": 0,
        "shadow": false,
        "cursor": "hand",
        "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, false, 0, null, null, false)",
        "pressedIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_pressed.jpg",
        "rollOverIconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F_rollover.jpg",
        "minWidth": 50,
        "data": {
         "name": "IconButton X"
        },
        "class": "IconButton",
        "transparencyActive": false,
        "backgroundOpacity": 0,
        "borderSize": 0,
        "iconURL": "skin/IconButton_6DF6622B_4F7F_B201_41D0_BAFCFF98DE5F.jpg"
       }
      ],
      "minHeight": 1,
      "paddingRight": 0,
      "overflow": "visible",
      "paddingBottom": 0,
      "shadow": false,
      "minWidth": 1,
      "data": {
       "name": "Container photo"
      },
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarColor": "#000000",
      "scrollBarVisible": "rollOver",
      "backgroundOpacity": 0.3,
      "layout": "absolute",
      "creationPolicy": "delayed",
      "borderSize": 0,
      "backgroundColorRatios": [
       0,
       1
      ],
      "contentOpaque": false
     }
    ],
    "minHeight": 1,
    "paddingRight": 0,
    "paddingBottom": 0,
    "shadow": true,
    "layout": "vertical",
    "minWidth": 1,
    "shadowOpacity": 0.3,
    "shadowColor": "#000000",
    "data": {
     "name": "Global"
    },
    "shadowBlurRadius": 25,
    "class": "Container",
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 1,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "contentOpaque": false,
    "left": "15%"
   }
  ],
  "minHeight": 1,
  "paddingRight": 0,
  "overflow": "scroll",
  "paddingBottom": 0,
  "shadow": false,
  "click": "this.setComponentVisibility(this.Container_6DF6422B_4F7F_B201_41BD_56474A79F4E2, false, 0, null, null, false)",
  "layout": "absolute",
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "data": {
   "name": "---PHOTOALBUM"
  },
  "class": "Container",
  "scrollBarWidth": 10,
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.6,
  "creationPolicy": "delayed",
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "contentOpaque": false,
  "left": "0%"
 },
 {
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "paddingTop": 0,
  "paddingLeft": 0,
  "right": "0%",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "bottom": "0%",
  "id": "Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08",
  "backgroundColorDirection": "vertical",
  "scrollBarMargin": 2,
  "gap": 10,
  "borderRadius": 0,
  "visible": false,
  "horizontalAlign": "left",
  "propagateClick": true,
  "verticalAlign": "top",
  "children": [
   {
    "scrollBarOpacity": 0.5,
    "top": "15%",
    "overflow": "visible",
    "paddingTop": 0,
    "paddingLeft": 0,
    "right": "15%",
    "shadowHorizontalLength": 0,
    "shadowVerticalLength": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "bottom": "15%",
    "id": "Container_6FD227C1_4F7F_B27E_41A4_4340D943D7A5",
    "backgroundColorDirection": "vertical",
    "shadowSpread": 1,
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "gap": 10,
    "creationPolicy": "delayed",
    "horizontalAlign": "center",
    "propagateClick": false,
    "verticalAlign": "top",
    "children": [
     "this.MapViewer",
     {
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "paddingLeft": 0,
      "width": "100%",
      "id": "Container_6FD207C1_4F7F_B27E_41CC_18278046BDCA",
      "gap": 10,
      "scrollBarMargin": 2,
      "borderRadius": 0,
      "height": 140,
      "horizontalAlign": "left",
      "propagateClick": false,
      "verticalAlign": "top",
      "children": [
       {
        "top": 20,
        "paddingTop": 0,
        "paddingLeft": 0,
        "right": 20,
        "width": "100%",
        "id": "IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54",
        "mode": "push",
        "maxWidth": 50,
        "borderRadius": 0,
        "maxHeight": 50,
        "height": "36.14%",
        "pressedRollOverIconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54_pressed_rollover.jpg",
        "horizontalAlign": "right",
        "propagateClick": false,
        "verticalAlign": "top",
        "minHeight": 50,
        "paddingRight": 0,
        "paddingBottom": 0,
        "shadow": false,
        "cursor": "hand",
        "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)",
        "pressedIconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54_pressed.jpg",
        "rollOverIconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54_rollover.jpg",
        "minWidth": 50,
        "data": {
         "name": "IconButton X"
        },
        "class": "IconButton",
        "transparencyActive": false,
        "backgroundOpacity": 0,
        "borderSize": 0,
        "iconURL": "skin/IconButton_6FD3F7C1_4F7F_B27E_41C6_14939894DA54.jpg"
       },
       {
        "top": "16.36%",
        "paddingTop": 0,
        "paddingLeft": 5,
        "right": "7.9%",
        "popUpShadowOpacity": 0,
        "backgroundColor": [
         "#3F4B87"
        ],
        "playList": "this.DropDown_CFA46741_E3D0_9830_41D3_36CCB08ACA00_playlist",
        "id": "DropDown_CFA46741_E3D0_9830_41D3_36CCB08ACA00",
        "backgroundColorDirection": "vertical",
        "popUpBackgroundColor": "#FFFFFF",
        "popUpBackgroundOpacity": 0.9,
        "textDecoration": "none",
        "gap": 0,
        "borderRadius": 4,
        "arrowBeforeLabel": false,
        "fontFamily": "Vision Bold",
        "width": "27.254%",
        "popUpShadow": false,
        "height": "33.214%",
        "propagateClick": false,
        "fontColor": "#FFFFFF",
        "minHeight": 20,
        "paddingRight": 5,
        "paddingBottom": 0,
        "shadow": false,
        "popUpFontColor": "#000000",
        "arrowColor": "#8A8A8A",
        "minWidth": 200,
        "data": {
         "name": "DropDown1204"
        },
        "fontStyle": "normal",
        "popUpBorderRadius": 0,
        "class": "DropDown",
        "selectedPopUpBackgroundColor": "#CCCCCC",
        "fontSize": "14.032px",
        "popUpGap": 0,
        "backgroundOpacity": 0.9,
        "popUpShadowSpread": 1,
        "popUpShadowColor": "#000000",
        "borderSize": 0,
        "backgroundColorRatios": [
         0
        ],
        "rollOverPopUpBackgroundColor": "#CCCCCC",
        "popUpShadowBlurRadius": 6,
        "fontWeight": "normal"
       }
      ],
      "minHeight": 1,
      "paddingRight": 0,
      "overflow": "scroll",
      "paddingBottom": 0,
      "shadow": false,
      "minWidth": 1,
      "scrollBarVisible": "rollOver",
      "data": {
       "name": "header"
      },
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarColor": "#000000",
      "backgroundOpacity": 0,
      "layout": "absolute",
      "creationPolicy": "delayed",
      "borderSize": 0,
      "contentOpaque": false
     }
    ],
    "minHeight": 1,
    "paddingRight": 0,
    "paddingBottom": 0,
    "shadow": true,
    "layout": "absolute",
    "minWidth": 1,
    "shadowOpacity": 0.3,
    "shadowColor": "#000000",
    "data": {
     "name": "Global"
    },
    "shadowBlurRadius": 25,
    "class": "Container",
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 1,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "contentOpaque": false,
    "left": "15%"
   }
  ],
  "minHeight": 1,
  "paddingRight": 0,
  "overflow": "scroll",
  "paddingBottom": 0,
  "shadow": false,
  "click": "this.setComponentVisibility(this.Container_6FD3E7C1_4F7F_B27E_41C8_1E5E2C3EBE08, false, 0, null, null, false)",
  "layout": "absolute",
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "data": {
   "name": "---FLOORPLAN"
  },
  "class": "Container",
  "scrollBarWidth": 10,
  "scrollBarColor": "#000000",
  "backgroundOpacity": 0.6,
  "creationPolicy": "delayed",
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "contentOpaque": false,
  "left": "0%"
 },
 {
  "scrollBarOpacity": 0.5,
  "top": "0%",
  "paddingTop": 0,
  "paddingLeft": 0,
  "right": "0%",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "bottom": "0%",
  "id": "Container_6E64E913_57DF_81FB_41BB_A44D0D3B4129",
  "backgroundColorDirection": "vertical",
  "scrollBarMargin": 2,
  "gap": 10,
  "borderRadius": 0,
  "visible": false,
  "horizontalAlign": "left",
  "propagateClick": true,
  "verticalAlign": "top",
  "children": [
   {
    "scrollBarOpacity": 0.5,
    "top": "10%",
    "overflow": "scroll",
    "paddingTop": 0,
    "paddingLeft": 0,
    "right": "15%",
    "shadowHorizontalLength": 0,
    "shadowVerticalLength": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "bottom": "10%",
    "id": "Container_6E63C913_57DF_81FB_41B3_4FCBC143F4CB",
    "backgroundColorDirection": "vertical",
    "shadowSpread": 1,
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "gap": 10,
    "creationPolicy": "delayed",
    "horizontalAlign": "left",
    "propagateClick": false,
    "verticalAlign": "top",
    "children": [
     {
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "paddingLeft": 0,
      "backgroundColor": [
       "#000000"
      ],
      "width": "55%",
      "id": "Container_6E63B913_57DF_81FB_4140_DE29A26883D1",
      "backgroundColorDirection": "vertical",
      "scrollBarMargin": 2,
      "gap": 10,
      "borderRadius": 0,
      "height": "100%",
      "horizontalAlign": "center",
      "propagateClick": false,
      "verticalAlign": "middle",
      "children": [
       {
        "top": "0%",
        "paddingTop": 0,
        "paddingLeft": 0,
        "width": "100%",
        "id": "Image_6E63A913_57DF_81FB_41BC_B86096336E5C",
        "maxWidth": 2000,
        "borderRadius": 0,
        "maxHeight": 1000,
        "height": "100%",
        "horizontalAlign": "center",
        "propagateClick": false,
        "verticalAlign": "bottom",
        "minHeight": 1,
        "paddingRight": 0,
        "paddingBottom": 0,
        "shadow": false,
        "minWidth": 1,
        "data": {
         "name": "Image40635"
        },
        "url": "skin/Image_6E63A913_57DF_81FB_41BC_B86096336E5C.jpg",
        "scaleMode": "fit_outside",
        "class": "Image",
        "backgroundOpacity": 0,
        "left": "0%",
        "borderSize": 0
       }
      ],
      "minHeight": 1,
      "paddingRight": 0,
      "overflow": "scroll",
      "paddingBottom": 0,
      "shadow": false,
      "minWidth": 1,
      "data": {
       "name": "-left"
      },
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarColor": "#000000",
      "scrollBarVisible": "rollOver",
      "backgroundOpacity": 1,
      "layout": "absolute",
      "creationPolicy": "delayed",
      "borderSize": 0,
      "backgroundColorRatios": [
       0
      ],
      "contentOpaque": false
     },
     {
      "scrollBarOpacity": 0.51,
      "paddingTop": 20,
      "paddingLeft": 60,
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "width": "45%",
      "id": "Container_6E639913_57DF_81FB_41C0_78531DDF94D0",
      "backgroundColorDirection": "vertical",
      "scrollBarMargin": 2,
      "gap": 0,
      "borderRadius": 0,
      "height": "100%",
      "horizontalAlign": "left",
      "propagateClick": false,
      "verticalAlign": "top",
      "children": [
       {
        "scrollBarOpacity": 0.5,
        "paddingTop": 20,
        "paddingLeft": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "width": "100%",
        "id": "Container_6E638913_57DF_81FB_41BC_06F02A7D7EF7",
        "backgroundColorDirection": "vertical",
        "scrollBarMargin": 2,
        "gap": 0,
        "borderRadius": 0,
        "height": "5%",
        "horizontalAlign": "right",
        "propagateClick": false,
        "verticalAlign": "top",
        "minHeight": 0,
        "paddingRight": 0,
        "overflow": "scroll",
        "paddingBottom": 0,
        "shadow": false,
        "minWidth": 1,
        "data": {
         "name": "Container space"
        },
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarColor": "#000000",
        "scrollBarVisible": "rollOver",
        "backgroundOpacity": 0.3,
        "layout": "horizontal",
        "creationPolicy": "delayed",
        "borderSize": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "contentOpaque": false
       },
       {
        "scrollBarOpacity": 0.79,
        "paddingTop": 0,
        "paddingLeft": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "width": "100%",
        "id": "Container_6E647913_57DF_81FB_41BD_582A8B4B2793",
        "backgroundColorDirection": "vertical",
        "scrollBarMargin": 2,
        "gap": 10,
        "borderRadius": 0,
        "height": "100%",
        "horizontalAlign": "left",
        "propagateClick": false,
        "verticalAlign": "top",
        "children": [
         {
          "scrollBarOpacity": 0,
          "paddingTop": 0,
          "paddingLeft": 0,
          "width": "100%",
          "id": "HTMLText_6E646913_57DF_81FB_4164_71AB73EE8EC3",
          "scrollBarMargin": 2,
          "borderRadius": 0,
          "height": "46%",
          "propagateClick": false,
          "minHeight": 1,
          "paddingRight": 0,
          "paddingBottom": 0,
          "shadow": false,
          "scrollBarColor": "#04A3E1",
          "minWidth": 1,
          "data": {
           "name": "HTMLText18899"
          },
          "class": "HTMLText",
          "scrollBarWidth": 10,
          "scrollBarVisible": "rollOver",
          "backgroundOpacity": 0,
          "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.44vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.79vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.79vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
          "borderSize": 0
         },
         {
          "scrollBarOpacity": 0.5,
          "paddingTop": 0,
          "paddingLeft": 0,
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "width": "100%",
          "id": "Container_6E644913_57DF_81FB_41C4_A4AB18133F07",
          "backgroundColorDirection": "vertical",
          "scrollBarMargin": 2,
          "gap": 10,
          "borderRadius": 0,
          "height": "75%",
          "horizontalAlign": "left",
          "propagateClick": false,
          "verticalAlign": "top",
          "children": [
           {
            "paddingTop": 0,
            "paddingLeft": 0,
            "width": "25%",
            "id": "Image_6E643913_57DF_81FB_41D0_88956FE4F3F8",
            "maxWidth": 200,
            "borderRadius": 0,
            "maxHeight": 200,
            "height": "100%",
            "horizontalAlign": "left",
            "propagateClick": false,
            "verticalAlign": "top",
            "minHeight": 1,
            "paddingRight": 0,
            "paddingBottom": 0,
            "shadow": false,
            "minWidth": 1,
            "data": {
             "name": "agent photo"
            },
            "url": "skin/Image_6E643913_57DF_81FB_41D0_88956FE4F3F8.jpg",
            "scaleMode": "fit_inside",
            "class": "Image",
            "backgroundOpacity": 0,
            "borderSize": 0
           },
           {
            "scrollBarOpacity": 0.5,
            "paddingTop": 0,
            "paddingLeft": 10,
            "width": "75%",
            "id": "HTMLText_6E642913_57DF_81FB_41C3_C6B6AB4A596F",
            "scrollBarMargin": 2,
            "borderRadius": 0,
            "height": "100%",
            "propagateClick": false,
            "minHeight": 1,
            "paddingRight": 10,
            "paddingBottom": 10,
            "shadow": false,
            "scrollBarColor": "#04A3E1",
            "minWidth": 1,
            "data": {
             "name": "HTMLText19460"
            },
            "class": "HTMLText",
            "scrollBarWidth": 10,
            "scrollBarVisible": "rollOver",
            "backgroundOpacity": 0,
            "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.51vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.17vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.94vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.94vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.94vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.94vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.03vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
            "borderSize": 0
           }
          ],
          "minHeight": 1,
          "paddingRight": 0,
          "overflow": "scroll",
          "paddingBottom": 0,
          "shadow": false,
          "minWidth": 1,
          "data": {
           "name": "- content"
          },
          "class": "Container",
          "scrollBarWidth": 10,
          "scrollBarColor": "#000000",
          "scrollBarVisible": "rollOver",
          "backgroundOpacity": 0.3,
          "layout": "horizontal",
          "creationPolicy": "delayed",
          "borderSize": 0,
          "backgroundColorRatios": [
           0,
           1
          ],
          "contentOpaque": false
         }
        ],
        "minHeight": 520,
        "paddingRight": 0,
        "overflow": "scroll",
        "paddingBottom": 30,
        "shadow": false,
        "minWidth": 100,
        "data": {
         "name": "Container text"
        },
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarColor": "#E73B2C",
        "scrollBarVisible": "rollOver",
        "backgroundOpacity": 0.3,
        "layout": "vertical",
        "creationPolicy": "delayed",
        "borderSize": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "contentOpaque": false
       },
       {
        "scrollBarOpacity": 0.5,
        "paddingTop": 0,
        "paddingLeft": 0,
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "width": 370,
        "id": "Container_6E641913_57DF_81FB_41C9_2B69E82BC251",
        "backgroundColorDirection": "vertical",
        "scrollBarMargin": 2,
        "gap": 10,
        "borderRadius": 0,
        "height": 40,
        "horizontalAlign": "left",
        "propagateClick": false,
        "verticalAlign": "top",
        "minHeight": 1,
        "paddingRight": 0,
        "overflow": "scroll",
        "paddingBottom": 0,
        "shadow": false,
        "layout": "horizontal",
        "minWidth": 1,
        "scrollBarVisible": "rollOver",
        "data": {
         "name": "Container space"
        },
        "class": "Container",
        "scrollBarWidth": 10,
        "scrollBarColor": "#000000",
        "backgroundOpacity": 0.3,
        "creationPolicy": "delayed",
        "borderSize": 0,
        "backgroundColorRatios": [
         0,
         1
        ],
        "contentOpaque": false
       }
      ],
      "minHeight": 1,
      "paddingRight": 60,
      "overflow": "visible",
      "paddingBottom": 20,
      "shadow": false,
      "minWidth": 460,
      "data": {
       "name": "-right"
      },
      "class": "Container",
      "scrollBarWidth": 10,
      "scrollBarColor": "#0069A3",
      "scrollBarVisible": "rollOver",
      "backgroundOpacity": 1,
      "layout": "vertical",
      "creationPolicy": "delayed",
      "borderSize": 0,
      "backgroundColorRatios": [
       0,
       1
      ],
      "contentOpaque": false
     }
    ],
    "minHeight": 1,
    "paddingRight": 0,
    "paddingBottom": 0,
    "shadow": true,
    "layout": "horizontal",
    "minWidth": 1,
    "shadowOpacity": 0.3,
    "shadowColor": "#000000",
    "data": {
     "name": "Global"
    },
    "shadowBlurRadius": 25,
    "class": "Container",
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 1,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "contentOpaque": false,
    "left": "15%"
   },
   {
    "scrollBarOpacity": 0.5,
    "top": "10%",
    "paddingTop": 20,
    "paddingLeft": 0,
    "right": "15%",
    "bottom": "80%",
    "id": "Container_6E640913_57DF_81FB_41AB_7A46A483589F",
    "gap": 10,
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "horizontalAlign": "right",
    "propagateClick": false,
    "verticalAlign": "top",
    "children": [
     {
      "paddingTop": 0,
      "paddingLeft": 0,
      "width": "25%",
      "id": "IconButton_6E64F913_57DF_81FB_41C7_E74DC08D4B38",
      "mode": "push",
      "maxWidth": 60,
      "borderRadius": 0,
      "maxHeight": 60,
      "height": "75%",
      "pressedRollOverIconURL": "skin/IconButton_6E64F913_57DF_81FB_41C7_E74DC08D4B38_pressed_rollover.jpg",
      "horizontalAlign": "center",
      "propagateClick": false,
      "verticalAlign": "middle",
      "minHeight": 50,
      "paddingRight": 0,
      "paddingBottom": 0,
      "shadow": false,
      "cursor": "hand",
      "click": "this.setComponentVisibility(this.Container_6E64E913_57DF_81FB_41BB_A44D0D3B4129, false, 0, null, null, false)",
      "pressedIconURL": "skin/IconButton_6E64F913_57DF_81FB_41C7_E74DC08D4B38_pressed.jpg",
      "rollOverIconURL": "skin/IconButton_6E64F913_57DF_81FB_41C7_E74DC08D4B38_rollover.jpg",
      "minWidth": 50,
      "data": {
       "name": "X"
      },
      "class": "IconButton",
      "transparencyActive": false,
      "backgroundOpacity": 0,
      "borderSize": 0,
      "iconURL": "skin/IconButton_6E64F913_57DF_81FB_41C7_E74DC08D4B38.jpg"
     }
    ],
    "minHeight": 1,
    "paddingRight": 20,
    "overflow": "visible",
    "paddingBottom": 0,
    "shadow": false,
    "scrollBarColor": "#000000",
    "layout": "vertical",
    "minWidth": 1,
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "Container X global"
    },
    "class": "Container",
    "scrollBarWidth": 10,
    "backgroundOpacity": 0,
    "creationPolicy": "delayed",
    "borderSize": 0,
    "contentOpaque": false,
    "left": "15%"
   }
  ],
  "minHeight": 1,
  "paddingRight": 0,
  "overflow": "scroll",
  "paddingBottom": 0,
  "shadow": false,
  "click": "this.setComponentVisibility(this.Container_6E64E913_57DF_81FB_41BB_A44D0D3B4129, false, 0, null, null, false)",
  "layout": "absolute",
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "data": {
   "name": "--REALTOR"
  },
  "class": "Container",
  "scrollBarWidth": 10,
  "scrollBarColor": "#04A3E1",
  "backgroundOpacity": 0.6,
  "creationPolicy": "delayed",
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "contentOpaque": false,
  "left": "0%"
 },
 {
  "paddingTop": 0,
  "paddingLeft": 0,
  "right": "0.9%",
  "bottom": "1.5%",
  "id": "Image_CF370408_DFC6_B00A_41E8_3A1672CF74FE",
  "width": "20%",
  "maxWidth": 400,
  "borderRadius": 0,
  "maxHeight": 150,
  "height": "12%",
  "visible": false,
  "horizontalAlign": "center",
  "propagateClick": false,
  "verticalAlign": "middle",
  "minHeight": 1,
  "paddingRight": 0,
  "paddingBottom": 0,
  "shadow": false,
  "minWidth": 1,
  "data": {
   "name": "FitnessCenterLabel"
  },
  "url": "skin/Image_CF370408_DFC6_B00A_41E8_3A1672CF74FE.png",
  "scaleMode": "fit_inside",
  "class": "Image",
  "backgroundOpacity": 0,
  "borderSize": 0
 },
 {
  "paddingTop": 0,
  "paddingLeft": 0,
  "right": "0.9%",
  "bottom": "1.5%",
  "id": "Image_CE4F77E3_DFC6_503E_41E1_520044FD779C",
  "width": "20%",
  "maxWidth": 400,
  "borderRadius": 0,
  "maxHeight": 150,
  "height": "12%",
  "visible": false,
  "horizontalAlign": "center",
  "propagateClick": false,
  "verticalAlign": "middle",
  "minHeight": 1,
  "paddingRight": 0,
  "paddingBottom": 0,
  "shadow": false,
  "minWidth": 1,
  "data": {
   "name": "MeetingRoomLabel"
  },
  "url": "skin/Image_CE4F77E3_DFC6_503E_41E1_520044FD779C.png",
  "scaleMode": "fit_inside",
  "class": "Image",
  "backgroundOpacity": 0,
  "borderSize": 0
 },
 {
  "paddingTop": 0,
  "paddingLeft": 0,
  "right": "0.9%",
  "bottom": "1.5%",
  "id": "Image_CF3D85DE_DFC5_F006_41BD_BFFFFC34A6C0",
  "width": "20%",
  "maxWidth": 400,
  "borderRadius": 0,
  "maxHeight": 150,
  "height": "12%",
  "visible": false,
  "horizontalAlign": "center",
  "propagateClick": false,
  "verticalAlign": "middle",
  "minHeight": 1,
  "paddingRight": 0,
  "paddingBottom": 0,
  "shadow": false,
  "minWidth": 1,
  "data": {
   "name": "PatioLabel"
  },
  "url": "skin/Image_CF3D85DE_DFC5_F006_41BD_BFFFFC34A6C0.png",
  "scaleMode": "fit_inside",
  "class": "Image",
  "backgroundOpacity": 0,
  "borderSize": 0
 },
 {
  "paddingTop": 0,
  "paddingLeft": 0,
  "right": "0.9%",
  "bottom": "1.5%",
  "id": "Image_CEC09C0E_DFCA_5006_41E1_67F39A3F6CC3",
  "width": "20%",
  "maxWidth": 400,
  "borderRadius": 0,
  "maxHeight": 150,
  "height": "12%",
  "visible": false,
  "horizontalAlign": "center",
  "propagateClick": false,
  "verticalAlign": "middle",
  "minHeight": 1,
  "paddingRight": 0,
  "paddingBottom": 0,
  "shadow": false,
  "minWidth": 1,
  "data": {
   "name": "RestuarantLabel"
  },
  "url": "skin/Image_CEC09C0E_DFCA_5006_41E1_67F39A3F6CC3.png",
  "scaleMode": "fit_inside",
  "class": "Image",
  "backgroundOpacity": 0,
  "borderSize": 0
 },
 {
  "paddingTop": 0,
  "paddingLeft": 0,
  "right": "0.9%",
  "bottom": "1.5%",
  "id": "Image_CE9FBCB0_DFCB_B01A_41CD_993611125E8B",
  "width": "20%",
  "maxWidth": 400,
  "borderRadius": 0,
  "maxHeight": 150,
  "height": "12%",
  "visible": false,
  "horizontalAlign": "center",
  "propagateClick": false,
  "verticalAlign": "middle",
  "minHeight": 1,
  "paddingRight": 0,
  "paddingBottom": 0,
  "shadow": false,
  "minWidth": 1,
  "data": {
   "name": "SwimmingPoolLabel"
  },
  "url": "skin/Image_CE9FBCB0_DFCB_B01A_41CD_993611125E8B.png",
  "scaleMode": "fit_inside",
  "class": "Image",
  "backgroundOpacity": 0,
  "borderSize": 0
 },
 {
  "paddingTop": 0,
  "paddingLeft": 0,
  "right": "0.9%",
  "bottom": "1.5%",
  "id": "Image_CE9DA0B1_DFCA_D01A_41DB_E2DBF6DD980B",
  "width": "20%",
  "maxWidth": 400,
  "borderRadius": 0,
  "maxHeight": 150,
  "height": "12%",
  "visible": false,
  "horizontalAlign": "center",
  "propagateClick": false,
  "verticalAlign": "middle",
  "minHeight": 1,
  "paddingRight": 0,
  "paddingBottom": 0,
  "shadow": false,
  "minWidth": 1,
  "data": {
   "name": "ToiletLabel"
  },
  "url": "skin/Image_CE9DA0B1_DFCA_D01A_41DB_E2DBF6DD980B.png",
  "scaleMode": "fit_inside",
  "class": "Image",
  "backgroundOpacity": 0,
  "borderSize": 0
 },
 {
  "paddingTop": 0,
  "paddingLeft": 0,
  "right": "0.9%",
  "bottom": "1.5%",
  "id": "Image_CED383D7_DFCA_7006_41B2_9A511CB7E1BF",
  "width": "20%",
  "maxWidth": 400,
  "borderRadius": 0,
  "maxHeight": 150,
  "height": "12%",
  "visible": false,
  "horizontalAlign": "center",
  "propagateClick": false,
  "verticalAlign": "middle",
  "minHeight": 1,
  "paddingRight": 0,
  "paddingBottom": 0,
  "shadow": false,
  "minWidth": 1,
  "data": {
   "name": "BusinessCenterLabel"
  },
  "url": "skin/Image_CED383D7_DFCA_7006_41B2_9A511CB7E1BF.png",
  "scaleMode": "fit_inside",
  "class": "Image",
  "backgroundOpacity": 0,
  "borderSize": 0
 },
 {
  "paddingTop": 0,
  "paddingLeft": 0,
  "right": "0.9%",
  "bottom": "1.5%",
  "id": "Image_CE54A9E6_DFCA_5006_41E9_9A934826CD14",
  "width": "20%",
  "maxWidth": 400,
  "borderRadius": 0,
  "maxHeight": 150,
  "height": "12%",
  "visible": false,
  "horizontalAlign": "center",
  "propagateClick": false,
  "verticalAlign": "middle",
  "minHeight": 1,
  "paddingRight": 0,
  "paddingBottom": 0,
  "shadow": false,
  "minWidth": 1,
  "data": {
   "name": "CheckInLabel"
  },
  "url": "skin/Image_CE54A9E6_DFCA_5006_41E9_9A934826CD14.png",
  "scaleMode": "fit_inside",
  "class": "Image",
  "backgroundOpacity": 0,
  "borderSize": 0
 },
 {
  "paddingTop": 0,
  "paddingLeft": 0,
  "right": "0.9%",
  "bottom": "1.5%",
  "id": "Image_CBBD61BE_E3F3_9850_41B8_4405A7465314",
  "width": "20%",
  "maxWidth": 400,
  "borderRadius": 0,
  "maxHeight": 150,
  "height": "12%",
  "visible": false,
  "horizontalAlign": "center",
  "propagateClick": false,
  "verticalAlign": "middle",
  "minHeight": 1,
  "paddingRight": 0,
  "paddingBottom": 0,
  "shadow": false,
  "minWidth": 1,
  "data": {
   "name": "KingLabel"
  },
  "url": "skin/Image_CBBD61BE_E3F3_9850_41B8_4405A7465314.png",
  "scaleMode": "fit_inside",
  "class": "Image",
  "backgroundOpacity": 0,
  "borderSize": 0
 },
 {
  "paddingTop": 0,
  "paddingLeft": 0,
  "right": "0.9%",
  "bottom": "1.5%",
  "id": "Image_C402A797_E3F0_B850_41DD_CA01DB1F3931",
  "width": "20%",
  "maxWidth": 400,
  "borderRadius": 0,
  "maxHeight": 150,
  "height": "12%",
  "visible": false,
  "horizontalAlign": "center",
  "propagateClick": false,
  "verticalAlign": "middle",
  "minHeight": 1,
  "paddingRight": 0,
  "paddingBottom": 0,
  "shadow": false,
  "minWidth": 1,
  "data": {
   "name": "Queenlabel"
  },
  "url": "skin/Image_C402A797_E3F0_B850_41DD_CA01DB1F3931.png",
  "scaleMode": "fit_inside",
  "class": "Image",
  "backgroundOpacity": 0,
  "borderSize": 0
 }
], 
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_6DF7E1BC_4F7E_CE07_41CA_1DDA9B238BC9_playlist,this.DropDown_CFA46741_E3D0_9830_41D3_36CCB08ACA00_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.DropDown_CFA46741_E3D0_9830_41D3_36CCB08ACA00_playlist.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "paddingLeft": 0,
 "scripts": {
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getKey": function(key){  return window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } var currentMedia = this.getMediaFromPlayer(item.get('player')); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(player){ player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { var self = this; setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "existsKey": function(key){  return key in window; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } }
 },
 "vrPolyfillScale": 0.5,
 "id": "rootPlayer",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "mobileMipmappingEnabled": true,
 "scrollBarMargin": 2,
 "gap": 10,
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "height": "100%",
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "horizontalAlign": "left",
 "propagateClick": true,
 "verticalAlign": "top",
 "minHeight": 20,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingBottom": 0,
 "shadow": false,
 "minWidth": 20,
 "data": {
  "name": "Player468"
 },
 "class": "Player",
 "scrollBarWidth": 10,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "creationPolicy": "delayed",
 "desktopMipmappingEnabled": true,
 "borderSize": 0,
 "contentOpaque": false
})