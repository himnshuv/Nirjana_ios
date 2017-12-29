// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'spotify', 'ionic-audio', 'chart.js', 'ehFilters', 'ion-floating-menu', 'ui.calendar'])

.run(function($ionicPlatform, $ionicPopup) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
      if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
      // Check for network connection
    if (window.Connection) {
        if (navigator.connection.type == Connection.NONE) {
            $ionicPopup.alert({
                title: 'No Internet Connection',
                content: 'Sorry, No Internet connectivity detected. Please reconnect and try again.'
            })
            .then(function (result) {
                if (result) {
                    ionic.Platform.exitApp();
                }
            });
        }
    }
  

  });
})
    .config(function ($translateProvider) {
        $translateProvider.translations('en', translations_en);
        $translateProvider.translations('hi', translations_hi);
        $translateProvider.translations('gu', translations_gu);
        $translateProvider.preferredLanguage('en');
        // console.log("$translateProvider initialized");
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

          .state('app', {
              url: '/app',
              abstract: true,
              templateUrl: 'templates/menu.html',
              controller: 'AppCtrl',
              cache: false
     
          })

    .state('app.search', {
        url: '/search',
        views: {
            'menuContent': {
                templateUrl: 'templates/search.html'
            }
        }
    })
        .state('app.pachkan', {
            url: '/pachkan.html',
            views: {
                'menuContent': {
                    templateUrl: 'templates/pachkan.html'
                }
            }
        })

    .state('app.browse', {
        url: '/browse',
        views: {
            'menuContent': {
                templateUrl: 'templates/browse.html'
            }
        }
    })
         .state('app.jain_kids_name', {
             url: '/jain_kids_name',
             views: {
                 'menuContent': {
                     templateUrl: 'templates/jain_kids_name.html',
                     controller: 'JainKidsCntrl'
                 }
             }
         })
      .state('app.playlists', {
          url: '/playlists',
          views: {
              'menuContent': {
                  templateUrl: 'templates/playlists.html',
                  controller: 'HomePageCtrl'

              }
          }
      })
          .state('app.upload_image', {
              url: '/upload_image',
              views: {
                  'menuContent': {
                      templateUrl: 'templates/upload_image.html',
                      controller: 'ImageCtrl'

                  }
              }
          })

             .state('app.upload_gallery_image', {
                 url: '/upload_gallery_image',
                 views: {
                     'menuContent': {
                         templateUrl: 'templates/upload_gallery_image.html',
                         controller: 'AddImageGalleryCtrl'

                     }
                 }
             })

   .state('app.daily_news', {
       url: '/daily_news',
       views: {
           'menuContent': {
               templateUrl: 'templates/daily_news.html',
               controller: 'DailyNewsCtrl'
           }
       }
   })
        .state('app.event_list', {
            url: '/event_list',
            views: {
                'menuContent': {
                    templateUrl: 'templates/event_list.html',
                    controller: 'EventCtrl'
                }
            }
        })
        .state('app.panchkavani', {
            url: '/panchkavani',
            views: {
                'menuContent': {
                    templateUrl: 'templates/panchkavani.html',
                    controller: 'PachkavaniCtrl'
                }
            }
        })
        .state('app.jain-mantras', {
            url: '/jain-mantras',
            views: {
                'menuContent': {
                    templateUrl: 'templates/jain-mantras.html',
                    controller: 'JainMantraCtrl'
                }
            }
        })
        .state('app.daily_new_detail_page', {
            url: '/daily_new_detail_page/:newsId',
     
            views: {
                'menuContent': {
                    templateUrl: 'templates/daily_new_detail_page.html',
            
                    controller: 'specificNewsDetailsCtrl'
                }
            }
        
        })
        .state('app.event_detail_page', {
            url: '/event_detail_page',

            views: {
                'menuContent': {
                    templateUrl: 'templates/event_detail_page.html',

                    controller: 'specificEventDetailsCtrl'
                }
            }

        })

        /******Login*****
        
        .state('login', {
            url: "/login",
            templateUrl: "login.html",
            controller: 'LoginCtrl'
        })
  
         /******Register******/

   
      .state('app.business', {
          url: '/business',

          views: {
              'menuContent': {
                  templateUrl: 'templates/business.html',
                  controller: 'BusinessCategotyCtrl',
                  cache: false
              }
          }

      })
        .state('app.business_search', {
            url: '/business_search',

            views: {
                'menuContent': {
                    templateUrl: 'templates/business_search.html',
                    controller: 'BusinessSearch',
                    cache: false
                }
            }

        })
        .state('app.business_listing', {
            url: '/business_listing',

            views: {
                'menuContent': {
                    templateUrl: 'templates/business_listing.html',
                    controller: 'BusinessListCntrl',
                    cache: false
                 
                }
            }

        })
        .state('app.business_details', {
            url: '/business_details',

            views: {
                'menuContent': {
                    templateUrl: 'templates/business_details.html',
                    controller: 'BusinessDetailCntrl',
                    cache:false
                }
            }

        })
     .state('app.business_detail_page', {
         url: '/business_detail_page',

         views: {
             'menuContent': {
                 templateUrl: 'templates/business_detail_page.html',
                 controller: 'ExampleController',
                 cache: false
             }
         }

     })
          //business package controller
          .state('app.packages', {
              url: '/packages',

              views: {
                  'menuContent': {
                      templateUrl: 'templates/packages.html',
                      controller: 'BusinessPackageCtrl'
                  }
              }

          })

          //add business page controller
         .state('app.business-information', {
             url: '/business-information',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/business-information.html',
                     controller: 'AddBusinessCtrl'
                 }
             }

         })
        .state('app.donation_page', {
            url: '/donation_page',

            views: {
                'menuContent': {
                    templateUrl: 'templates/donation_page.html',
                    controller: 'DonationCtrl'
                }
            }

        })
        .state('app.guru-bhagawant-tracking', {
            url: '/guru-bhagawant-tracking',

            views: {
                'menuContent': {
                    templateUrl: 'templates/guru-bhagawant-tracking.html',
                    controller: 'GuruTrackingController'
                }
            }

        })
        //add temple

         .state('app.add-temple', {
             url: '/add-temple',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/add-temple.html',
                     controller: 'AddTempleCtrl'
                 }
             }

         })

        .state('app.temple-tracking', {
            url: '/temple-tracking',

            views: {
                'menuContent': {
                    templateUrl: 'templates/temple-tracking.html',
                    controller: 'TempleCtrl',
                    cache: false
                }
            }

        })
         .state('app.temple-listing', {
             url: '/temple-listing',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/temple-listing.html',
                     controller: 'templeListControl',
                     cache:false
                 }
             }

         })
        .state('app.temple-details', {
            url: '/temple-details',

            views: {
                'menuContent': {
                    templateUrl: 'templates/temple-details.html',
                    controller: 'specificTempleDetailsCtrl'

                }
            }

        })
           .state('app.active-samajseva', {
               url: '/active-samajseva',

               views: {
                   'menuContent': {
                       templateUrl: 'templates/active-samajseva.html',
                       controller: 'addSamajsevaCtrl'
                   }
               }

           })

          .state('app.temple-information', {
              url: '/temple-information',

              views: {
                  'menuContent': {
                      templateUrl: 'templates/temple-information.html',
                  }
              }

          })
        .state('app.langauge', {
            url: '/langauge',

            views: {
                'menuContent': {
                    templateUrl: 'templates/langauge.html',
                    controller: 'LanguageCtrl'
                }
            }

        })
        .state('app.tapasvi-profile', {
            url: '/tapasvi-profile',

            views: {
                'menuContent': {
                    templateUrl: 'templates/tapasvi-profile.html',
                    controller: 'TapasviProfileCtrl'
                }
            }

        })
        .state('app.tapasvi-sukh-sath', {
            url: '/tapasvi-sukh-sath',

            views: {
                'menuContent': {
                    templateUrl: 'templates/tapasvi-sukh-sath.html',
                    controller: 'TapasviSukhSataCtrl'
                }
            }

        })

          .state('app.user_profile', {
              url: '/user_profile',

              views: {
                  'menuContent': {
                      templateUrl: 'templates/user_profile.html',
                      controller:  'UserProfileController'
                   
                  }
              }

          })
         .state('app.edit_profile', {
             url: '/edit_profile',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/edit_profile.html',
                     controller: 'EditProfileController'

                 }
             }

         })
        .state('app.mobile-purchase', {
            url: '/mobile-purchase',

            views: {
                'menuContent': {
                    templateUrl: 'templates/mobile-purchase.html',
                    controller:  'MobilePurchaseCtrl'
                 
                }
            }

        })
         .state('app.car-purchase', {
             url: '/car-purchase',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/car-purchase.html',
                     controller: 'CarPurchaseCtrl'
                 }
             }

         })
        .state('app.international-holiday', {
            url: '/international-holiday',

            views: {
                'menuContent': {
                    templateUrl: 'templates/international-holiday.html',
                    controller: 'HolidayPurchaseCtrl'
                }
            }

        })
        .state('app.special-offer', {
            url: '/special-offer',

            views: {
                'menuContent': {
                    templateUrl: 'templates/special-offer.html',
                    controller: 'SpecialOffereListCtrl'
                }
            }

        })
        .state('app.offer-details', {
            url: '/offer-details',

            views: {
                'menuContent': {
                    templateUrl: 'templates/offer-details.html',
                    controller: 'specialOfferDetailsCtrl'
                }
            }

        })

          .state('login', {
              url: "/login",
              templateUrl: "templates/login.html",
              controller: 'LoginCntrl',
              cache: false
          })

          .state('register', {
              url: "/register",
              templateUrl: "templates/register.html",
              controller: 'RegistrationCtrl',
              cache:false
       	   
          })

              .state('language_register', {
                  url: "/language_register",
                  templateUrl: "templates/language_register.html",
                  controller: 'LanguageRegisterCtrl',
                  cache: false

              })

          .state('app.ipad', {
              url: '/ipad',

              views: {
                  'menuContent': {
                      templateUrl: 'templates/ipad.html',
                      controller: 'iPadPurchaseCtrl',
                      cache: false
                  }
              }

          })
        .state('app.jewellary', {
            url: '/jewellary',

            views: {
                'menuContent': {
                    templateUrl: 'templates/jewellary.html',
                    controller: 'JewelleryCtrl',
                    cache: false
                }
            }

        })
          .state('app.wedding-event', {
              url: '/wedding-event',

              views: {
                  'menuContent': {
                      templateUrl: 'templates/wedding-event.html',
                      controller: 'WeddingEventCtrl',
                  }
              }

          })
        .state('app.coming-soon', {
            url: '/coming-soon',

            views: {
                'menuContent': {
                    templateUrl: 'templates/coming-soon.html',
                }
            }

        })

       

             //Add Vihar
          .state('app.vihar-stay', {
              url: '/vihar-stay',

              views: {
                  'menuContent': {
                      templateUrl: 'templates/vihar-stay.html',
                      controller: 'ViharStayListCtrl'

                  }
              }

          })

        //edit vihar stay

         .state('app.edit_my_vihar_stay', {
             url: '/edit_my_vihar_stay',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/edit_my_vihar_stay.html',
                     controller: 'EditViharCtrl'
                 }
             }

         })

        .state('app.vihar-stay-map', {
            url: '/vihar-stay-map',

            views: {
                'menuContent': {
                    templateUrl: 'templates/vihar-stay-map.html',
                }
            }

        })
        .state('app.chaturmas', {
            url: '/chaturmas',

            views: {
                'menuContent': {
                    templateUrl: 'templates/chaturmas.html',
                    controller: 'ChaturmasListCtrl'
                  
                }
            }

        })
        .state('app.add-chaturmas-member', {
            url: '/add-chaturmas-member',

            views: {
                'menuContent': {
                    templateUrl: 'templates/add-chaturmas-member.html',
                    controller: 'AddChaturmasCtrl'
                }
            }

        })
 
        .state('app.job-seeker', {
            url: '/job-seeker',

            views: {
                'menuContent': {
                    templateUrl: 'templates/job-seeker.html',
                    controller : 'jobSeekerCtrl'
                }
            }

        })

     .state('app.job-available', {
         url: '/job-available',

         views: {
             'menuContent': {
                 templateUrl: 'templates/job-available.html',
                 controller: 'JobAvailableCtrl'
             }
         }

     })
        .state('app.add-job', {
            url: '/add-job',

            views: {
                'menuContent': {
                    templateUrl: 'templates/add-job.html',
                    controller: 'AddNewJobCtrl'
                }
            }

        })
        .state('app.single', {
            url: '/playlists/:playlistId',
            views: {
                'menuContent': {
                    templateUrl: 'templates/playlist.html',
                    controller: 'PlaylistCtrl'
                }
            }
        })
        .state('app.map', {
            url: '/map',
            views: {
                'menuContent': {
                    templateUrl: 'templates/map.html',
                    controller: 'MapCtrl'
                }
            
            }
        })
        .state('app.vsadd', {
              url: '/vsadd',
              views: {
                  'menuContent': {
                      templateUrl: 'templates/add-vihar.html',
                      controller: 'AddViharStayCtrl'

                  }
              }
          })
        .state('app.my-stay-listing', {
            url: '/my-stay-listing',

            views: {
                'menuContent': {
                    templateUrl: 'templates/my-stay-listing.html',
                    controller: 'MyViharStayListCtrl'
                }
            }

        })
      .state('forgot-password', {
          url: "/forgot-password",
          templateUrl: "templates/forgot-password.html",
          controller: 'ForgotPwdCtrl',
          cache: false
      })
      
       .state('app.guru', {
           url: '/guru',
           views: {
               'menuContent': {
                   templateUrl: 'templates/guru_tracking.html',
                   controller: 'GuruCtrl'

               }
           }
       })
      .state('app.varthPachkan', {
          url: '/varthPachkan',

          views: {
              'menuContent': {
                  templateUrl: 'templates/varthPachkan.html',
                  controller: 'VartaPachkanCtrl'
              }
          }

      })
            .state('app.my-temple-listing', {
                url: '/my-temple-listing',

                views: {
                    'menuContent': {
                        templateUrl: 'templates/my-temple-listing.html',
                        controller: 'Mytemplelist'

                    }
                }

            })

       .state('app.gallary_details', {
           url: '/gallary_details',

           views: {
               'menuContent': {
                   templateUrl: 'templates/gallary_details.html',

                   controller: 'gallarydetails'
               }
           }

       })
           //add temple image

         .state('app.temple_image', {
             url: '/temple_image',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/temple_image.html',
                     controller: 'AddTempleImageCtrl'
                 }
             }

         })
       
           //add tab

         .state('app.add_tab', {
             url: '/add_tab',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/add_tab.html',
                     controller: 'AddTabCtrl',
                     cache: false
                         }
           }

         })
            //setting

         .state('app.setting', {
             url: '/setting',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/setting.html',
                     controller: 'SettingCtrl',
                     cache: false
                 }
             }

         })
        //add business image controller
         .state('app.business-image', {
             url: '/business-image',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/business-image.html',
                     controller: 'AddBusniessImageCtrl'
                 }
             }

         })
     .state('app.add-security-number', {
         url: '/add-security-number',

         views: {
             'menuContent': {
                 templateUrl: 'templates/add-security-number.html',
                 controller : 'AddSecurityNumberCtrl'
             }
         }

     })

      .state('app.add-tap-listing', {
                url: '/add-tap-listing',

                views: {
                    'menuContent': {
                        templateUrl: 'templates/add-tap-listing.html',
                        controller : 'AddTapOfTheDay'
                    }
                }

      })
        .state('app.read_and_play_jainmantra', {
            url: '/read_and_play_jainmantra',

            views: {
                'menuContent': {
                    templateUrl: 'templates/read_and_play_jainmantra.html',
                    controller: 'DetailJainMantraCtrl'

                }
            }

        })

        .state('app.calendar', {
            url: '/calendar',

            views: {
                'menuContent': {
                    templateUrl: 'templates/calendar.html',
                    controller: 'CalendarCtrl'

                }
            }

        })

         .state('app.knowledge', {
             url: '/knowledge',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/knowledge.html',
                     controller: 'KnowledgeCtrl'
                 }
             }

         })

          .state('app.gyan_shala', {
              url: '/gyan_shala',

              views: {
                  'menuContent': {
                      templateUrl: 'templates/gyan_shala.html',
                      
                  }
              }

          })

         .state('app.tapRecordOfTapasvi', {
             url: '/tapRecordOfTapasvi',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/tapRecordOfTapasvi.html',
                     controller: 'TapRecordCtrl'
                 }
             }

         })

        .state('app.comments', {
            url: '/comments',

            views: {
                'menuContent': {
                    templateUrl: 'templates/comments.html',
                    controller: 'CommentsCtrl'
                }
            }

        })

        .state('app.add_events', {
            url: '/add_events',

            views: {
                'menuContent': {
                    templateUrl: 'templates/add_events.html',
                    controller: 'AddEventsCtrl'
                }
            }

        })

         .state('app.event_image', {
             url: '/event_image',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/event_image.html',
                     controller: 'AddEventsImageCtrl'
                 }
             }

         })

         .state('app.upload_event_image', {
             url: '/upload_event_image',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/upload_event_image.html',
                     controller: 'AddImageEventCtrl'
                 }
             }

         })
         .state('app.anupurvi', {
             url: '/anupurvi',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/anupurvi.html',
                     controller: 'AnupurviDetailctrl'
                 }
             }

         })
          .state('app.add_tap_record', {
              url: '/add_tap_record',

              views: {
                  'menuContent': {
                      templateUrl: 'templates/add_tap_record.html',
                      controller: 'AddTapFromProfileCtrl'
                  }
              }

          })

         .state('app.samajseva_list', {
             url: '/samajseva_list',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/samajseva_list.html',
                     controller: 'SamajSevaListCtrl'
                 }
             }

         })

         .state('app.knowledgeOfTapasvi', {
             url: '/knowledgeOfTapasvi',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/knowledgeOfTapasvi.html',
                     controller: 'KnowledgeOfTapCtrl'
                 }
             }

         })

         .state('app.likes_detail', {
             url: '/likes_detail',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/likes_detail.html',
                     controller: 'LikesDetailCtrl'
                 }
             }

         })

         .state('app.follower_graph_detail', {
             url: '/follower_graph_detail',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/follower_graph_detail.html',
                     controller: 'FollowerDetailCtrl'
                 }
             }

         })

        .state('app.details_popularity', {
            url: '/details_popularity',

            views: {
                'menuContent': {
                    templateUrl: 'templates/details_popularity.html',
                    controller: 'DetailsPopularityGraph'
                }
            }

        })

         .state('app.detail_chaturmas', {
             url: '/detail_chaturmas',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/detail_chaturmas.html',
                     controller: 'DetailsChaturmasCtrl'
                 }
             }

         })

        .state('app.change_password', {
            url: '/change_password',

            views: {
                'menuContent': {
                    templateUrl: 'templates/change_password.html',
                    controller: 'ChangePwdCtrl'
                }
            }

        })

        .state('app.read_play_varth_pachkan', {
            url: '/read_play_varth_pachkan',

            views: {
                'menuContent': {
                    templateUrl: 'templates/read_play_varth_pachkan.html',
                    controller: 'ReadPlayVarthPachkanCtrl'
                }
            }

        })

         .state('app.my_post_list', {
             url: '/my_post_list',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/my_post_list.html',
                     controller: 'MyPostsCtrl'
                 }
             }

         })

         .state('app.addFunds', {
             url: '/addFunds',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/addFunds.html',
                     controller: 'AddFundsCtrl'
                 }
             }

         })

        .state('app.edit_temple', {
            url: '/edit_temple',

            views: {
                'menuContent': {
                    templateUrl: 'templates/edit_temple.html',
                    controller: 'EditTempleCtrl'
                }
            }

        })

        .state('app.withdrawPoint', {
            url: '/withdrawPoint',

            views: {
                'menuContent': {
                    templateUrl: 'templates/withdrawPoint.html',
                    controller: 'WithdrawController'
                }
            }

        })
        .state('app.edit_business_listing', {
            url: '/edit_business_listing',

            views: {
                'menuContent': {
                    templateUrl: 'templates/edit_business_listing.html',
                    controller: 'MyBusinessListCtrl'
                }
            }

        })
         .state('app.edit_business', {
             url: '/edit_business',

             views: {
                 'menuContent': {
                     templateUrl: 'templates/edit_business.html',
                     controller: 'EditBusinessCtrl'
                 }
             }

         })
        .state('app.contact_us', {
            url: '/contact_us',

            views: {
                'menuContent': {
                    templateUrl: 'templates/contact_us.html',
                    controller: 'ContactusController'
                }
            }

        })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
