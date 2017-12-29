angular.module('starter.controllers', ['angucomplete-alt', 'autocomplete', 'pascalprecht.translate'])
    .constant('APP_CONSTANT', {
        message: 'Hello'
    })
    .constant('config', {
        appName: 'Nirjara',
        TAPASVI: 'user',
        MEMBER_NAME: 'member_name',
        CONTACT: 'contact',
        EMAIL_ID: 'emailId',
        MEMBER_ID: 'memberId',
        GENDER: 'gender',
        CITYID: 'cityId',
        STATEID: 'stateId',
        COUNTRYID: 'countryId',
        CITY_NAME: 'cityName',
        STATE_NAME: 'stateName',
        COUNTRY_NAME: 'countryName',
        USER_TYPE: 'user_type',
        Event_Id: 'Event_Id',
        Event_File: 'Event_File',
        //
        LANGUAGE_NAME:'',
        UploadFlag: 'UploadFlag',
        upload_business_flag : 'upload_business_flag',
        AddedTemple : 'AddedTemple',
        vihar_longitude: '',

        vihar_latitude:'',
        vihar_address: '',
        viharId: 'vihar_stay_id',
        TEMP_CITY_ID:'temp_city_id',
        USER_EMAIL_ALREADY_EXIXTS: 'User mail id already registered!!..',
        FAIL : 'fail',
        LOCAL_STORAGE: '$localstorage',
        time_status : '0',
        appVersion: 1.0,
        tapassya_id: 'tapassya_id',
        tap_id: 'tap_id',
        tapassya_flag: false,
        get_daily_news_url: 'http://nirjaraap.com/api/get_news.php',
        get_events_url: 'http://nirjaraap.com/api/get_event.php?',
        get_category_url: 'http://nirjaraap.com/api/get_category.php',
        get_car_brand: 'http://nirjaraap.com/api/get_car.php',
        get_car_model_url: 'http://nirjaraap.com/api/get_car.php?key=model&',
        get_mobile_brand: 'http://nirjaraap.com/api/get_mobile_brand.php',
        get_mobile_model: 'http://nirjaraap.com/api/get_mobile_brand.php?key=model&',
        post_mobile_url : 'http://nirjaraap.com/api/post_mobile_enquiry.php?',
        post_car_url: 'http://nirjaraap.com/api/post_car_enquiry.php?',
        get_holiday_destination: 'http://nirjaraap.com/api/get_holiday_destination.php',
        post_holiday_url: 'http://nirjaraap.com/api/post_international_holiday.php?',
        get_special_offer: 'http://nirjaraap.com/api/get_special_offer.php',
        post_offer_url: 'http://nirjaraap.com/api/post_special_offer.php?',
        // post_offer_url_test: 'http://nirjaraap.com/api/post_special_offer.php?member_id=3&special_offer_id=3',
        get_iPad_model: 'http://nirjaraap.com/api/get_ipad_brand.php',
        //get_iPad_model: 'http://nirjaraap.com/api/get_ipad_brand.php?key=model&',
        post_iPad_url: 'http://nirjaraap.com/api/post_ipad_enquiry.php?',
        post_jewellery_url: 'http://nirjaraap.com/api/post_jwellery_enquiry.php?',
        get_wedding_event_url: 'http://nirjaraap.com/api/get_wedding_services.php',
        post_wedding_event_url: 'http://nirjaraap.com/api/post_wedding_ser_enquiry.php?',
        //get business owner list
        get_country_url: 'http://nirjaraap.com/api/commen_function.php',
        get_state_url: 'http://nirjaraap.com/api/commen_function.php?key=state&country_id=',
        get_city_url: 'http://nirjaraap.com/api/commen_function.php?key=city&state_id=',
        get_businessowner_url: 'http://nirjaraap.com/api/get_business.php?business_cat_id=',

        //get Business Package
        get_business_package_url: 'http://nirjaraap.com/api/get_package.php',
        //get business category
        get_business_category : 'http://nirjaraap.com/api/get_business_cat.php?',
        //post new Business
        post_new_business_url: 'http://nirjaraap.com/api/post_business.php?',
        // test url post_new_business : 'http://nirjaraap.com/api/post_business.php?business_owner_name=abc&business_title=developement&business_description=adasdasdasd&image=abc.jpg&country=99&state=25&city=351&address=asdasdasdasdasd&contact_no=1234567890&email_id=arun@omwebsolution.com&product1=abc&product2=lmn&product3=lkjljl&product4=asdjajsd'
        //Login url for new user 
        new_user_login_url : 'http://nirjaraap.com/api/user_login.php?',
        get_user_profile: 'http://nirjaraap.com/api/get_user_profile.php?member_id=',

        //post user profile
        post_user_profile:  'http://nirjaraap.com/api/post_user_profile.php?',
        // get Sampraday url 
        get_sampraday_url: 'http://nirjaraap.com/api/get_group.php?',
        //get all upvas
        get_all_upvas: 'http://nirjaraap.com/api/get_tapassya_all.php',
        get_guru_by_subGroupId: 'http://nirjaraap.com/api/get_guru.php?sub_group_id=',
        
        //post add temple url
        post_add_temple_url: 'http://nirjaraap.com/api/post_temple.php?',
        //get temple list
        get_temple_list : 'http://nirjaraap.com/api/commen_function.php?key=temple&city_id=',
        //imAGE UPLOAD URL
        upload_img_url: 'http://nirjaraap.com/api/upload.php',
       
        //post add vihar url
        post_add_vihar_url: 'http://nirjaraap.com/api/post_vihar_stay.php?',

        //get vihar stay list url
        get_vihar_stay_url: 'http://nirjaraap.com/api/get_vihar_stay.php?',

        //get vihar stay by city url
        get_vihar_by_city_url: 'http://nirjaraap.com/api/get_vihar_stay_location_wise.php?',

        //get_vihar_stay_member_wise url
        get_vihar_stay_member_wise: 'http://nirjaraap.com/api/get_vihar_stay_member_wise.php?member_id=',

        //delete_vihar_stay
        delete_vihar_stay: 'http://nirjaraap.com/api/delete_vihar_stay.php?vihar_stay_id=',

        //edit vihar_stay url
        edit_vihar_stay: 'http://nirjaraap.com/api/post_vihar_stay_edit.php?',

        //post_jobseeker url
        post_job_seeker: 'http://nirjaraap.com/api/post_jobseeker_details.php?',
        //post_jobavailable url
        add_new_job: 'http://nirjaraap.com/api/post_job.php?',
        //get_jobavailable url
        get_job_available: 'http://nirjaraap.com/api/get_jobs.php?',
        //find business by city
        business_by_city: 'http://nirjaraap.com/api/post_citywise_business.php?city=',
        //get business list by city
        get_search_business_url: 'http://nirjaraap.com/api/post_citywise_business.php?',
        //get temple list by city
        get_search_temple_url: 'http://nirjaraap.com/api/get_temples_by_location_wise.php?',
        //get temple by city id 
        get_temple_by_city_id: 'http://nirjaraap.com/api/commen_function.php?key=temple&city_id=',

        //get tapasvi sukh sata
        get_tapasvi_sukh_sata_url: 'http://nirjaraap.com/api/get_tapasvi.php',
        //post add chaturmas url
        post_add_chaturmas_url: 'http://nirjaraap.com/api/post_chaturmas.php?',

        //vihar stay postion 
        get_vihar_stay_position: 'http://nirjaraap.com/api/vihar_position.php',
        //forgot password url
        forgot_password_url: 'http://nirjaraap.com/api/post_forget_pass.php?',
        //Error Messages
        // post registration url
        post_registration_url: 'http://nirjaraap.com/api/post_reg_member.php',
        //post active samaj seva
        post_active_samaj_seva: 'http://nirjaraap.com/api/post_active_for_samaj.php?',

        //get chaturmas list url
        get_chaturmas_list: 'http://nirjaraap.com/api/get_chaturmas.php?',

        //get latitude and laongitude of all vihars
        get_vihar_lat_long: 'http://nirjaraap.com/api/get_vihar_all.php',

        //get_vrath_pachkan
        get_vrath_pachkan:'http://nirjaraap.com/api/get_vrath_pachkan.php?',//longitude=19.997402&latitude=73.787341&timezone=Asia/Kolkata&city=Nashik;
        //google autoselect
        autoselect: 'https://maps.googleapis.com/maps/api/timezone/json?timestamp=1331161200&key=AIzaSyAGsd-SIR89ivS8igyXS0TfCL9lC48I85g&location=',

        //save registration token
        save_device_token_url: 'http://nirjaraap.com/api/post_fcm_user.php',

        //my_temple_listing
        my_temple_list: 'http://nirjaraap.com/api/get_temples_by_member.php?member_id=',

        //post_guru_tracking_of_user member_id=5&main_group_id=2&sub_group_id=4&mod=off
        post_guru_tracking: 'http://nirjaraap.com/api/post_guru_tracking.php?',
        //get _guru_tracking (for user) parametre = member_id=5
        get_guru_tracking: 'http://nirjaraap.com/api/post_guru_tracking.php?',
       
        //get all sampraday
        get_sampraday_tracking_url : 'http://nirjaraap.com/api/guru_tracking.php',

        //get graph values
        get_graph_values: 'http://nirjaraap.com/api/get_follower_graph.php?',

        //upload user image url
        upload_user_profile_image: 'http://nirjaraap.com/api/post_profile_image.php',

        //post temple image
        post_temple_image: 'http://nirjaraap.com/api/post_temple_image.php',

        //post business image
        post_business_image: 'http://nirjaraap.com/api/post_business_image.php',

        //get setting url
        get_setting_url: 'http://nirjaraap.com/api/get_notification_on_off.php?',

        //post setting url
        post_setting_url: 'http://nirjaraap.com/api/notification_on_off.php?',
        //Error Messageshttp:

        //get chaturmas list url
        get_chaturmas_location: 'http://nirjaraap.com/api/get_chaturmas_location_wise.php?', //location=nashik

        //At guru login self tracking
        guru_self_traking: 'http://nirjaraap.com/api/post_guru_on_off.php?',

        //get perticular business image list
        get_image_list: 'http://nirjaraap.com/api/get_bussiness_image_list.php?business_id=',

        // get gallary images
        get_gallary_url :'http://nirjaraap.com/api/get_gallery.php',

        // post add security number
        post_security_number: 'http://nirjaraap.com/api/post_guru_security_contacts.php?',

        //get guru contacts
        get_guru_contacts: 'http://nirjaraap.com/api/get_guru_security_contacts.php?member_id=',

        // delete guru contact
        delete_guru_contact: 'http://nirjaraap.com/api/delete_guru_security_contacts.php?guru_security_contact_id=',

        //edit guru contact
        edit_guru_contact: 'http://nirjaraap.com/api/edit_guru_security_contacts.php?guru_security_contact_id=',

        //post_add_tapasya: 'http://nirjaraap.com/api/post_tapassya.php?key=add_tap&member_id=5&tapassya_id=6&lang=hi',
        post_add_tapasya: 'http://nirjaraap.com/api/post_tapassya.php?key=add_tap',

        //get user upvas list http://nirjaraap.com/api/post_tapassya.php?key=add_tap&member_id=5&tapassya_id=31
        get_user_upvas_list: 'http://nirjaraap.com/api/post_tapassya.php?',

        //add gallery image
        post_gallery_image: 'http://nirjaraap.com/api/post_gallery_image.php?',

        //get population_graph
        get_population_graph: 'http://nirjaraap.com/api/get_popularity_chart.php?',

        //post apply job
        post_apply_job: 'http://nirjaraap.com/api/post_apply_job.php?',

        //post knowledge url
        post_knowledge_url: 'http://nirjaraap.com/api/post_knowledge.php?',

        //get knowledge url
        get_knowledge_url: 'http://nirjaraap.com/api/get_knowledge.php?member_id=',

        //get all knowledge
        get_all_knowledge:'http://nirjaraap.com/api/get_knowledge_all.php',

        // post tapasvi likes
        post_tapasvi_likes: 'http://nirjaraap.com/api/post_tapasvi_likes.php?',

        //get tapasvi likes
        get_tapasvi_likes: 'http://nirjaraap.com/api/get_tapasvi_likes.php',

       // GET Comments
        get_tapasvi_comments: 'http://nirjaraap.com/api/get_tapasvi_comments.php?',

        //Post Comments
        post_tapasvi_comments: 'http://nirjaraap.com/api/post_tapasvi_comments.php?',

        //Post Events
        post_add_events: 'http://nirjaraap.com/api/post_event.php?',

        //Post event image:
        post_event_image: 'http://nirjaraap.com/api/post_event_images.php?',

        //get all mantra type
        get_all_mantratype: 'http://nirjaraap.com/api/get_mantra_type.php?',

        //get all jainmantra 
        get_all_jainmantra: 'http://nirjaraap.com/api/get_jainmantra.php?',

        //get mantra by lang 
        get_mantra_by_lang: 'http://nirjaraap.com/api/get_mantr_by_id.php?',

        //Tithi api
        get_tithi_api: 'http://nirjaraap.com/api/tithi/panchang/panchang.php?',

        //add tapassya count
        add_tapassya_count: 'http://nirjaraap.com/api/post_tapassya_count.php?',

        //get_home_page_business_cat
        get_home_page_business_cat: 'http://nirjaraap.com/api/get_business_cat_home.php?limit=16',

        //get_home_gallary
        get_home_gallary: 'http://nirjaraap.com/api/get_home_gallary.php?limit=5',

        //advertisement_list_url 
        get_advertisement_url: 'http://nirjaraap.com/api/get_advertisement.php',

        //get likes detail
        get_likes_details: 'http://nirjaraap.com/api/get_tapasvi_likes_detail.php?',

         //get tapassya from profile
        get_tapassya_for_profile: 'http://nirjaraap.com/api/get_tapassya_for_profile.php?',

        //follower graph detail
        get_follower_detail: 'http://nirjaraap.com/api/get_follower_graph_details.php',

        //population graph detail
        get_details_popularity_graph: 'http://nirjaraap.com/api/get_popularity_chart_details.php',

        // get current position
        get_current_position: 'http://nirjaraap.com/api/get_current_position.php?',

        //change password
        get_current_password: 'http://nirjaraap.com/api/change_password.php?',

        //get varth pachkan by id
        get_varth_pachkan_by_id: 'http://nirjaraap.com/api/get_vrath_pachkan_by_id.php?',

        // get my post
        get_my_post: 'http://nirjaraap.com/api/get_tapasvi_by_id.php?member_id=',

        //block image post
        block_gallary_image: 'http://nirjaraap.com/api/post_objection.php?',//gallery_id=1&objection_mem_id=2',

        //edit temple
        edit_temple: 'http://nirjaraap.com/api/post_temple_edit.php?',

        //get location wise advertisement
        get_location_wise_add: 'http://nirjaraap.com/api/get_advertisement_by_location.php?',//location=dhule

        // check reference code
        check_reference_code: 'http://nirjaraap.com/api/check_referal_code.php?', //reference_code=rahul123456

        //withdraw point http://nirjaraap.com/api/post_cash_withdrawal_request.php?member_id=5&account_number=7894561230&ifsc_code=abc123456&bank_name=sbi&amount=500

        request_withdraw_my_points: 'http://nirjaraap.com/api/post_cash_withdrawal_request.php?',

        // get default temples
        get_default_temple: 'http://nirjaraap.com/api/get_temples_default.php?',

        //guru tracking notification
        get_guru_tracking_notification: 'http://nirjaraap.com/api/notification_guru.php?member_id=',

        //active samaj seva notification
        get_samaj_seva_notification: 'http://nirjaraap.com/api/notification_active_samajseva.php?member_id=',

        //temple notification
        get_temple_notification: 'http://nirjaraap.com/api/notification_temples.php?member_id=',

        //vrath pachkan notification
        get_pachkan_notification: 'http://nirjaraap.com/api/notification_vrath_pachkan.php?pachkan_title=',

        //get business by member id
        get_businessBy_member_wise: 'http://nirjaraap.com/api/get_business_by_id.php?member_id=',

        //edit my business
        edit_my_business: 'http://nirjaraap.com/api/edit_business.php?',

        //contact_us

        post_Enquiry: 'http://nirjaraap.com/api/contact_us.php?',

        //delete my business
        delete_my_business: 'http://nirjaraap.com/api/delete_business.php?business_id=',

        //deactive fcm token:

        deactive_fcm_token: 'http://nirjaraap.com/api/deactivate_fcm_user.php?',

        //varth pachkan notification api 
        // http://nirjaraap.com/api/vrath_notification.php?longitude=73.76947704&latitude=19.9673897&timezone=Asia/Calcutta&lang=en
        varth_pachkan_notification_api : 'http://nirjaraap.com/api/vrath_notification.php?'  ,

        share_app: 'https://play.google.com/store/apps/details?id=io.cordova.myapp01e9b4&hl=en',

        vihar_latitude: "",
        vihar_longitude: "",
        vihar_address: "",

        PLEASE_SELECT_SAMPRADAY: 'Please select sampraday',
        PLEASE_SELECT_SUBGROUP: 'Please select sub-group',
        PLEASE_MEMBER_TYPE: 'Please select member type',
        PLEASE_SELECT_SAMPRADAY: 'Please select sampraday',
        PLEASE_SELECT_SUBGROUP: 'Please select sub-group',
        PLEASE_ENTER_NAME: 'Please enter your name',
        PLEASE_ENTER_NUMBER: 'Please enter your mobile number',
        PLEASE_ENTER_MEMBER: 'Please enter number of members',
        PLEASE_ENTER_MEMBER_NAME: 'Please enter your name',
        PLEASE_ENTER_EMAIL: 'Please enter your email address',
        PLEASE_ENTER_RELIGION: 'Please select your religion',
        PLEASE_ENTER_EXP: 'Please enter your experiance',
        PLEASE_ENTER_WORK: 'Please enter your work details',

        PLEASE_ENTER_TITLE: 'Please enter your job title',
        PLEASE_ENTER_COMAPNY_NAME: 'Please enter your company name',
        PLEASE_ENTER_LOCATION: 'Please enter your job location',
        PLEASE_ENTER_JOB_DETAILS: 'Please enter your job details',
        PLEASE_ENTER_CONTACT_PERSON: 'Please enter contact person',

        INVALID_OTP: 'Otp Not Matched! Please Enter Valid Otp',
        PLEASE_SELECT_LANGUAGE: 'Please select language',
        INAVALID_MOBILE_NUMBER: 'Invalid mobile number',

        PENDING: 'PENDING',
        FAILED: 'FAILED',
        SUCCESS: 'SUCCSESS',
        nextId: 1,
        GlobalLattitude: 'GlobalLatlong',
        GlobalLongitude: 'GlobalLongitude',

   
    })

    .factory('LocationService', function ($q) {

        var latLong = null;

        var getLatLong = function (refresh) {

            var deferred = $q.defer();

            if (latLong === null || refresh) {

                console.log('Getting lat long');
                navigator.geolocation.getCurrentPosition(function (pos) {
                    console.log('Position=')
                    console.log(pos);
                    latLong = { 'lat': pos.coords.latitude, 'long': pos.coords.longitude }
                    deferred.resolve(latLong);

                }, function (error) {
                    console.log('Got error!');
                    console.log(error);
                    latLong = null

                    deferred.reject('Failed to Get Lat Long')

                });

            } else {
                deferred.resolve(latLong);
            }

            return deferred.promise;

        };

        return {

            getLatLong: getLatLong

        }
    })

    .controller('MyCtrl', function ($scope) {
        $scope.tracks = [
        {
            url: 'https://ionic-audio.s3.amazonaws.com/Message%20in%20a%20bottle.mp3',
           
        }
       
        ];
    })

    .directive('audios', function ($sce) {
        return {
            restrict: 'A',
            scope: { code: '=' },
            replace: true,
            template: '<audio ng-src="{{url}}" controls></audio>',
            link: function (scope) {
                scope.$watch('code', function (newVal, oldVal) {
                    if (newVal !== undefined) {
                        scope.url = $sce.trustAsResourceUrl("/data/media/" + newVal);
                    }
                });
            }
        };
    })

    //Language Controller
    .controller('LanguageCtrl', ['$state', 'config', '$scope', '$translate', '$localstorage', '$location', function ($state, config, $scope, $translate, $localstorage, $location)

        
        //  ['$scope', '$state', '$stateParams', 'DailyNewsModel', function ($scope, $state, $stateParams, DailyNewsModel) {
    {
        $localstorage.internetConnection();
        $scope.curlang = $translate.use();
        $scope.changeLanguage = function (key) {
            $translate.use(key);
            $scope.curlang = key;
            $localstorage.set(config.LANGUAGE_NAME, key);
            $state.go('app.playlists');
        }
    }])

    //Map markers
    .factory('Markers', function($http) {
 
              var markers = [];
 
              return {
                getMarkers: function(){
 
                },
                getMarker: function(id){
 
                }
              }
        })

    //////////////factory for cordova socail sharing
    .factory('$cordovaSocialSharing', ['$q', '$window', function ($q, $window) {

        return {
            share: function (message, subject, file, link) {
                var q = $q.defer();
                subject = subject || null;
                file = file || null;
                link = link || null;
                $window.plugins.socialsharing.share(message, subject, file, link, function () {
                    q.resolve(true);
                }, function () {
                    q.reject(false);
                });
                return q.promise;
            },

            shareWithOptions: function (options) {
                var q = $q.defer();
                $window.plugins.socialsharing.shareWithOptions(options, function () {
                    q.resolve(true);
                }, function () {
                    q.reject(false);
                });
                return q.promise;
            },

            shareViaTwitter: function (message, file, link) {
                var q = $q.defer();
                file = file || null;
                link = link || null;
                $window.plugins.socialsharing.shareViaTwitter(message, file, link, function () {
                    q.resolve(true);
                }, function () {
                    q.reject(false);
                });
                return q.promise;
            },

            shareViaWhatsApp: function (message, file, link) {
                var q = $q.defer();
                file = file || null;
                link = link || null;
                $window.plugins.socialsharing.shareViaWhatsApp(message, file, link, function () {
                    q.resolve(true);
                }, function () {
                    q.reject(false);
                });
                return q.promise;
            },

            shareViaFacebook: function (message, file, link) {
                var q = $q.defer();
                message = message || null;
                file = file || null;
                link = link || null;
                $window.plugins.socialsharing.shareViaFacebook(message, file, link, function () {
                    q.resolve(true);
                }, function () {
                    q.reject(false);
                });
                return q.promise;
            },

            shareViaFacebookWithPasteMessageHint: function (message, file, link, pasteMessageHint) {
                var q = $q.defer();
                file = file || null;
                link = link || null;
                $window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(message, file, link, pasteMessageHint, function () {
                    q.resolve(true);
                }, function () {
                    q.reject(false);
                });
                return q.promise;
            },

            shareViaSMS: function (message, commaSeparatedPhoneNumbers) {
                var q = $q.defer();
                $window.plugins.socialsharing.shareViaSMS(message, commaSeparatedPhoneNumbers, function () {
                    q.resolve(true);
                }, function () {
                    q.reject(false);
                });
                return q.promise;
            },

            shareViaEmail: function (message, subject, toArr, ccArr, bccArr, fileArr) {
                var q = $q.defer();
                toArr = toArr || null;
                ccArr = ccArr || null;
                bccArr = bccArr || null;
                fileArr = fileArr || null;
                $window.plugins.socialsharing.shareViaEmail(message, subject, toArr, ccArr, bccArr, fileArr, function () {
                    q.resolve(true);
                }, function () {
                    q.reject(false);
                });
                return q.promise;
            },

            shareVia: function (via, message, subject, file, link) {
                var q = $q.defer();
                message = message || null;
                subject = subject || null;
                file = file || null;
                link = link || null;
                $window.plugins.socialsharing.shareVia(via, message, subject, file, link, function () {
                    q.resolve(true);
                }, function () {
                    q.reject(false);
                });
                return q.promise;
            },

            canShareViaEmail: function () {
                var q = $q.defer();
                $window.plugins.socialsharing.canShareViaEmail(function () {
                    q.resolve(true);
                }, function () {
                    q.reject(false);
                });
                return q.promise;
            },

            canShareVia: function (via, message, subject, file, link) {
                var q = $q.defer();
                $window.plugins.socialsharing.canShareVia(via, message, subject, file, link, function (success) {
                    q.resolve(success);
                }, function (error) {
                    q.reject(error);
                });
                return q.promise;
            },

            available: function () {
                var q = $q.defer();
                window.plugins.socialsharing.available(function (isAvailable) {
                    if (isAvailable) {
                        q.resolve();
                    }
                    else {
                        q.reject();
                    }
                });

                return q.promise;
            }
        };
    }])

    // demo controller
    .controller('DemoController', ['$scope', '$ionicSideMenuDelegate', function ($scope, $ionicSideMenuDelegate) {
  
    $ionicSideMenuDelegate.canDragContent(false);
  
    $scope.selectedGroup = {};  
    $scope.groups = [];
    for(var i = 0; i<50;i++){
        $scope.groups.push({
            "user_id":i,
            "name":"Nicholls"+i,
            "mention_name":"chris",
            "email":"chris@hipchat.com",
            "title":"Developer",
            "photo_url":"https:\/\/www.hipchat.com\/chris.png",
            "last_active":1360031425,
            "created":1315711352,
            "status":"away",
            "status_message":"gym, bbl",
            "is_group_admin":1,
            "is_deleted":0
        });
    }
  
    $scope.selectedMovie = "";
    $scope.movies = ["Lord of the Rings",
                     "Drive",
                     "Science of Sleep",
                     "Back to the Future",
                     "Oldboy"];
  
    $scope.selectedOtherMovie = "";
    $scope.othermovies = ["Harry Potter",
                     "Yes Man",
                     "Terminator",
                     "The Day After Tomorrow",
                     "Monster Inc"];
  
    $scope.updateMovies = function(){
        //alert("Movie selected");
    };
    }])

    .run(function ($ionicPlatform, $ionicPopup) {
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

      
  });
    })

    //factory utility
     .factory('$Utility', ['$window', '$state', '$stateParams', '$ionicPopup', '$ionicLoading', function ($window, $state, $stateParams, $ionicPopup, $ionicLoading) {
         return {
            
            showProgressDialog: function (message) {
                 $ionicLoading.show({
                     template: message,
                     duration: 3000
                 }).then(function () {
                     console.log("The loading indicator is now displayed");
                 });
             },
             hideprogressDialog: function () {
                 $ionicLoading.hide().then(function () {
                     console.log("The loading indicator is now hidden");
                 });
             },

             isEmptyOrNull : function (value) {
                 return !value;
             },
             showAlert: function (title, message) {

                 var alertPopup = $ionicPopup.alert({
                     title: title,
                     template: message
                 });

                 alertPopup.then(function (res) {
                     //  $state.go('app.playlists');
                 });
             },

             internetConnection: function(){
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
         }
         }
     }])

     // local strorage
    .factory('$localstorage', ['$window', '$state', '$stateParams', '$ionicPopup', '$ionicLoading', function ($window, $state, $stateParams, $ionicPopup, $ionicLoading) {
        return {
            set: function (key, value) {
                $window.localStorage[key] = value;
            },
            get: function (key, defaultValue) {
                return $window.localStorage[key] || defaultValue;
            },
            setObject: function (key, value) {
                $window.localStorage[key] = value;
            },
            getObject: function (key) {
                return $window.localStorage[key] || defaultValue;
            },

            showProgressDialog: function (message) {
                $ionicLoading.show({
                    template: message,
                    duration: 3000
                }).then(function () {
                    console.log("The loading indicator is now displayed");
                });
            },
            hideprogressDialog: function () {
                $ionicLoading.hide().then(function () {
                    console.log("The loading indicator is now hidden");
                });
            },
            showAlert: function (title, message, redirectPageName) {

                var alertPopup = $ionicPopup.alert({
                    title: title,
                    template: message
                });

                alertPopup.then(function (res) {
                    try {
                        if (angular.isDefined(redirectPageName) && redirectPageName != '')
                            $state.go(redirectPageName);
                    } catch (e)
                    { }
                });
            },
            internetConnection: function(){
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
        }
        }
    }])

    .controller('AppCtrl', ['$ionicHistory', '$window', '$scope', '$ionicModal', '$timeout', '$ionicPopup', '$state', '$stateParams', '$ionicPopup', '$localstorage', 'config', '$cordovaSocialSharing', '$http', '$translate', function ($ionicHistory,$window, $scope, $ionicModal, $timeout, $ionicPopup, $state, $stateParams, $ionicPopup, $localstorage, config, $cordovaSocialSharing, $http, $translate) {

       // With the new view caching in Ionic, Controllers are only called
       // when they are recreated or on app start, instead of every page change.
       // To listen for when this page is active (for example, to refresh data),
       // listen for the $ionicView.enter event:
       //$scope.$on('$ionicView.enter', function(e) {
       //});

       // Form data for the login modal
        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            var memberId = $localstorage.get(config.MEMBER_ID);
           
            // share app link
               $scope.shareApp = function () {
                  
                       // Custom popup
                       $translate(['AddCount', 'Save', 'Cancel']).then(function (translations) {

                           $scope.Whatsapp = translations.Save;
                           $scope.Message = translations.Save;
                           $scope.cancle = translations.Cancel;
                           $scope.addCount = translations.AddCount;

                           var myPopup = $ionicPopup.show({
                               
                               title: "Share Via",
                               scope: $scope,

                               buttons: [
                                  //{ text: $scope.cancle },
 {
     text: '<i class="icon twt ion-social-twitter"></i>',
                                      type: 'button-positive',
                                      onTap: function (e) {

                                          $cordovaSocialSharing
                 .shareViaTwitter("Nirjara Ap", "", config.share_app)
                 .then(function (result) {
                     // Success!
                 }, function (err) {

                     // An error occurred. Show a message to the user
                 });
                                      }
                                  },
{
    text: '<i class="icon wa ion-social-whatsapp-outline"></i>',
    type: 'button-balanced',
    onTap: function (e) {
        $cordovaSocialSharing
                   .shareViaWhatsApp("Nirjara Ap" , "", config.share_app)
                   .then(function (result) {
                       // Success!
                   },
                   function (err) {

                       // An error occurred. Show a message to the user
                   });
        
    }
},
{
    text: '<i class="icon  ion-android-textsms"></i>',
    type: 'button-energized',
    onTap: function (e) {
        $cordovaSocialSharing
                     .shareViaSMS("Nirjara Ap" , "", config.share_app)
                     .then(function (result) {
                         // Success!
                     }, function (err) {

                         // An error occurred. Show a message to the user
                     });
        
    }
}
                               ]
                           });
                           myPopup.then(function (res) {
                               console.log('Tapped!', res);
                           });

                       });

                   }

            $scope.curlang = $translate.use();
            $scope.changeLanguage = function (key) {
                $translate.use(key);
                $scope.curlang = key;
                $localstorage.set(config.LANGUAGE_NAME, key);
                $state.go('app.playlists');
            }
            var lang=$localstorage.get(config.LANGUAGE_NAME);
            if (lang === '0') {

                $scope.changeLanguage('en');
            }
           

            $scope.shouldHide = function () {
                var name = $state.current.name;
                switch ($state.current.name) {
                    case 'app.read_play_varth_pachkan':
                        return true;
                    case 'app.read_and_play_jainmantra':
                        return true;
                    default:
                        return false;
                }
            }


           $scope.loginData = {};

           // Create the login modal that we will use later
           $ionicModal.fromTemplateUrl('templates/login.html', {
               scope: $scope
           }).then(function (modal) {
               $scope.modal = modal;
           });

           // Triggered in the login modal to close it
           $scope.closeLogin = function () {
               $scope.modal.hide();
           };

           // Open the login modal
           $scope.login = function () {
               $scope.modal.show();
           };

           // Perform the login action when the user submits the login form
           $scope.doLogin = function () {
               console.log('Doing login', $scope.loginData);

               // Simulate a login delay. Remove this and replace with your login
               // code if using a login system
               $timeout(function () {
                   $scope.closeLogin();
               }, 1000);
           };
           $scope.showConfirm = function () {

               var confirmPopup = $ionicPopup.confirm({
                   title: 'Logout',
                   template: 'Do you want to logout?'
               });

               confirmPopup.then(function (res) {
                   if (res) {
                       //clear all local storage
                      
                       var member_id = $localstorage.get(config.MEMBER_ID);
                       var deactive_fcm_user = config.deactive_fcm_token + 'member_id=' + member_id;
                       $http.get(deactive_fcm_user)
                  .then(function (response) {
                      console.log(JSON.stringify(response));
                      $window.localStorage.clear();
                       $ionicHistory.clearCache();
                       $ionicHistory.clearHistory();
                      $state.go('login');
                  });
                   } else {
                       console.log('Not sure!');
                   }
               });

           };

           //logout
           $scope.logout = function () {
               $scope.showConfirm();

           }

           $scope.home = function () {
               $state.go('app.playlists', {});

           }

           $scope.add = function () {
               $state.go('app.add_tab', {});

           }
           $scope.calendar = function () {
               $state.go('app.calendar', {});

           }

           $scope.profile = function () {
               $state.go('app.user_profile', {});

           }
           
               $scope.securityList = {};
               $scope.contacts = '';
               var contact_url = config.get_guru_contacts + memberId;
               $http.get(contact_url)
                   .then(function (response) {

                       $scope.error_msg = response.data.error_msg;
                       $scope.message = response.data.message;

                       if ($scope.message === 'success') {
                           $scope.errorTextVisible = false;
                           $scope.noerror = false;
                           $scope.securityList = response.data.data;
                           for (var i = 0; i < $scope.securityList.length; i++) {
                               if ($scope.contacts == '')
                                   $scope.contacts = $scope.securityList[i].contact_no;
                               else
                                   $scope.contacts = $scope.contacts + "," + $scope.securityList[i].contact_no;

                           }
                       }
                       else {
                           if ($scope.error_msg === 'Records not found') {
                               $scope.errorTextVisible = true;
                               $scope.noerror = true;
                               $scope.errorMessage = $scope.error_msg;
                           }
                       }
                   })


               // share on message
               $scope.shareTextSms = function () {

                   $cordovaSocialSharing
                 .shareViaSMS("", $scope.contacts)
                 .then(function (result) {
                     // Success!
                 }, function (err) {

                     // An error occurred. Show a message to the user
                 });
             
           }
       })
    }])

    .factory('DailyNewsModel', function () {

        var news = {};
        return {
            getNews: function () {
                return news;
            },
            setNews: function (newsparameter) {
                news = newsparameter;
            }
        };
    })

    //dailynews ctrl
    .controller('DailyNewsCtrl', ['config', '$scope', '$http', '$state', '$stateParams', 'DailyNewsModel', '$localstorage', function (config, $scope, $http, $state, $stateParams, DailyNewsModel, $localstorage) {

        $localstorage.internetConnection();
        $scope.tapasviDetails = $localstorage.getObject(config.TAPASVI);

        $http.get(config.get_daily_news_url)
        .then(function (response) {

            $scope.dailyNewsList = response.data.result;

        });
        $http.get(config.get_category_url)
       .then(function (response) {

           $scope.category_list = response.data.result;

       });
        $scope.setNewsFilter = function (filterValue) {
            $scope.filterBy = filterValue;
        };

        $scope.openDetailPage = function (detailNews) {

            DailyNewsModel.setNews(detailNews);
            $state.go("app.daily_new_detail_page");
        };

    }])

    .controller('ExampleCtrl', function($scope) {

        $scope.countries =[{"id_country":"1","sortname":"AF","name":"Afghanistan"},
                          {"id_country":"2","sortname":"AL","name":"Albania"},
                          {"id_country":"3","sortname":"DZ","name":"Algeria"},
                          {"id_country":"4","sortname":"AS","name":"American Samoa"},
                          {"id_country":"5","sortname":"IN","name":"India"}];


        $scope.initialCountry = ["2"];

        $scope.getCountries = function(query, isInitializing) {
            var returnValue = { items: [],selectedItems:[] };
            $scope.countries.forEach(function(item){
                if (item.name.indexOf(query) > -1 ){
                    returnValue.items.push(item);
                }
                else if (item.id_country.indexOf(query) > -1 ){
                    returnValue.items.push(item);
                }
            });

            return returnValue;
        };

        $scope.modelToItemMethod = function (modelValue) {

            for(var i = 0; i < $scope.countries.length; i++){
                if($scope.countries[i].id_country == modelValue){
                    return $scope.countries[i];
                }
            }
            return {};
        };
    })

    //example ctrl
    .controller("ExampleController", function ($scope, $cordovaMedia, $ionicLoading, $ionicSlideBoxDelegate) {
        $scope.$on('$ionicView.enter', function () {
            $scope.navSlide = function (index) {
                $ionicSlideBoxDelegate.slide(index, 500);
            }
        });
    })

    //pachakavani ctrl
    .controller('PachkavaniCtrl', function ($scope, $http, $localstorage) {
        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            $http.get('http://nirjaraap.com/api/get_panchkavani.php')
            .then(function (response) {

                $scope.pachkanList = response.data.result;

            }); 
            var audio = null;
            $scope.playAudio = function (url) {

                if (audio != null) {
                    audio.pause();
                    audio.stop();
                    audio.release();
                    audio = null;

                }
                if (url != null) {
                    audio = new Audio(url);
                    audio.play();
                }
            }
            $scope.stopAudio = function () {

                audio.pause();
                audio.stop();
                audio.release();
                audio = null;
            }

            angular.isUndefinedOrNull = function (val) {
                return angular.isUndefined(val) || val === null
            }
            var urlprefix = '/android_asset/www/audio/';
            $scope.tracks = [
                  {
                      url: urlprefix+'bahu.mp3',
                      artist: 'The Police',
                      title: 'Message in a bottle',
                      art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
                  },
                  {
                      url: 'https://ionic-audio.s3.amazonaws.com/Roxane.mp3',
                      artist: 'The Police',
                      title: 'Roxane',
                      art: 'https://ionic-audio.s3.amazonaws.com/The_Police_Greatest_Hits.jpg'
                  }
            ];

         
        });
    })
   
// jain mantras
    .controller('JainMantraCtrl', ['$ionicModal', 'config', '$cordovaFile', '$ionicLoading', '$ionicPopup', '$cordovaMedia', '$timeout', '$ionicPlatform', '$cordovaFileTransfer', '$scope', '$http', '$state', '$stateParams', 'MantraModel', '$localstorage', function ($ionicModal,config, $cordovaFile, $ionicLoading, $ionicPopup, $cordovaMedia, $timeout, $ionicPlatform, $cordovaFileTransfer, $scope, $http, $state, $stateParams, MantraModel, $localstorage) {
        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();

            $scope.anupurviSlide = [[1, 2, 4, 5, 6], [1, 2, 4, 5, 6], [1, 2, 4, 5, 6], [1, 2, 4, 5, 6]];
            $scope.showFlag = '';
            $scope.mantraType = {};

            var lang = $localstorage.get(config.LANGUAGE_NAME);

            $scope.openAnupurviPage = function () {
                $state.go("app.anupurvi", {});
            }

            $scope.showImage = function (img) {

               if (img != '')
                   $scope.imageSrc = img;
               else
                   $scope.imageSrc = '';
               if (img != '') {
                   $scope.openModal();
               }

           }

            $ionicModal.fromTemplateUrl('templates/image_pachkan.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });

            $scope.openModal = function () {
                $scope.modal.show();
            };

            $scope.closeModal = function () {
                $scope.modal.hide();
            };

            //Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function () {
                $scope.modal.remove();
            });

            var get_mantra_type = config.get_all_mantratype + 'lang=' + lang;
            $http.get(get_mantra_type)
            .then(function (response) {
                $scope.mantraType = response.data.result;
                try {
                    for (var i = 0; i < $scope.mantraType.length; i++) {
                        $scope.mantraType[i].isVisible = false;
                    }
                } catch (e)
                {

                }
            });
            $scope.show = function () {
                $ionicLoading.show({
                    template: 'Loading...',
                    duration: 3000
                }).then(function () {
                    console.log("The loading indicator is now displayed");
                });
            };
            $scope.hide = function () {
                $ionicLoading.hide().then(function () {
                    console.log("The loading indicator is now hidden");
                });
            };
            $scope.showMantra = function (title, pachkan_mantra) {

                $localstorage.showAlert(title, pachkan_mantra);

            }
            $scope.openReadMantraPage = function (mantra) {


                MantraModel.setMantra(mantra);
                $state.go("app.read_and_play_jainmantra", {});
            }
            var get_all_jainmantra = config.get_all_jainmantra + "lang=" + lang;
            $http.get(config.get_all_jainmantra + "lang=" + lang)
            .then(function (response) {


                $scope.jainMantraList = response.data.result;
                for (var i = 0; i < $scope.jainMantraList.length; i++) {
                    $scope.checkFileIsExists($scope.jainMantraList[i].audio, i);
                }

            });

            $scope.checkFileIsExists = function (url, index) {
                var filename = url.substring(url.lastIndexOf('/') + 1);
                var downloadPath = cordova.file.dataDirectory + filename;
                console.log("file exists :" + downloadPath);
                $cordovaFile.checkFile(cordova.file.dataDirectory, filename)
                  .then(function (success) {
                      $scope.pathurl = downloadPath.replace('file://', '');
                      console.log("file exists");
                      $scope.jainMantraList[index].setPathUrl = $scope.pathurl;

                  }, function (error) {
                      console.log("file not exists");
                      $scope.jainMantraList[index].setPathUrl = '';
                  });
            }

            $scope.showPopup = function () {
                var alertPopup = $ionicPopup.alert({
                    title: 'Done!',
                    template: 'File downloaded successfully!'
                });
                alertPopup.then(function (res) {

                });
            };

            var flag = $cordovaFile.checkFile(cordova.file.dataDirectory, "kk.mp3");

            $scope.downloadFile = function (downloadUrl, mantra) {


                if (downloadUrl == "") {
                    console.log("error : ");
                    return;
                }

                console.log("result some : ");
                var filename = downloadUrl.substring(downloadUrl.lastIndexOf('/') + 1);

                var fileTransfer = new FileTransfer();
                var uri = encodeURI(downloadUrl);
                var downloadPath = cordova.file.dataDirectory + filename;
                $cordovaFile.checkFile(cordova.file.dataDirectory, filename)
                  .then(function (success) {
                      // don't download if file already exists!
                      console.log(filename + " file found");
                      $scope.pathurl = downloadPath.replace('file://', '');
                      console.log($scope.pathurl);
                      mantra.setPathUrl = $scope.pathurl;
                      $scope.showFlag = '';
                      $scope.openReadMantraPage(mantra);

                      // 
                  }, function (error) {
                      // download if file is not exists!
                      $scope.showFlag = mantra.title;
                      console.log("downloadPath : " + downloadPath);
                      fileTransfer.download(
                       uri,
                       downloadPath,
                       function (entry) {

                           $scope.showFlag = '';
                           $scope.savepath = entry.toURL();
                           console.log("result : " + $scope.savepath);
                           $scope.pathurl = downloadPath.replace('file://', '');
                           console.log("after download:" + $scope.pathurl);
                           mantra.setPathUrl = $scope.pathurl;
                           $scope.openReadMantraPage(mantra);


                       },
                       function (error) {
                           $scope.showFlag = '';
                           $scope.hide();
                           window.alert("No audio present");
                           console.log("result : " + error);
                       }

                   );
                      console.log("before :kml file NOT found");
                      console.log(error);
                  });;

            }


            angular.isUndefinedOrNull = function (val) {
                return angular.isUndefined(val) || val === null
            }
        });
    }])

    // sepecific news details ctrl
    .controller('specificNewsDetailsCtrl', ['$scope', '$state', '$stateParams', 'DailyNewsModel', '$localstorage', function ($scope, $state, $stateParams, DailyNewsModel, $localstorage) {
        $localstorage.internetConnection();
        $scope.newsDetail = DailyNewsModel.getNews();
        $scope.newTitle = $scope.newsDetail.news_title;
        $scope.news_short_description = $scope.newsDetail.news_short_description;
        $scope.news_description = $scope.newsDetail.news_description;
        $scope.new_photo = $scope.newsDetail.news_photo;
        $scope.date = $scope.newsDetail.date_added;
        $scope.time = $scope.newsDetail.date_time;

    }])

    /************Event Module************/
    .factory('EventModel', function () {

        var event = {};
        return {
            getEvent: function () {
                return event;
            },
            setEvent: function (eventparameter) {
                event = eventparameter;
            }
        };
    })

    /* 1)event List Controller */
    .controller('EventCtrl', ['config', '$scope', '$http', '$state', '$stateParams', 'EventModel', '$localstorage', function (config, $scope, $http, $state, $stateParams, EventModel, $localstorage) {
        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();

            var lang = $localstorage.get(config.LANGUAGE_NAME);
            var url = config.get_events_url+'lang='+lang;
            $http.get(url)
        .then(function (response) {
            $scope.eventList = response.data.result;
        });

            $scope.openDetailPage = function (event) {

                EventModel.setEvent(event);
                $state.go("app.event_detail_page", {});
            };
        })
    }])

    /* 2)Specific Event Controller */
   .controller('specificEventDetailsCtrl', ['$scope', '$state', '$stateParams', 'EventModel', '$cordovaSocialSharing', '$localstorage', '$ionicModal', function ($scope, $state, $stateParams, EventModel, $cordovaSocialSharing, $localstorage, $ionicModal) {

       $scope.$on('$ionicView.enter', function () {

           $localstorage.internetConnection();
           $scope.eventDetail = EventModel.getEvent();
           $scope.event_title = $scope.eventDetail.event_title;
           var text = $scope.eventDetail.event_description;


           $ionicModal.fromTemplateUrl('templates/image-modal.html', {
               scope: $scope,
               animation: 'slide-in-up'
           }).then(function (modal) {
               $scope.modal = modal;
           });

           $scope.openModal = function () {
               $scope.modal.show();
           };

           $scope.closeModal = function () {
               $scope.modal.hide();
           };

           //Cleanup the modal when we're done with it!
           $scope.$on('$destroy', function () {
               $scope.modal.remove();
           });
           // Execute action on hide modal
           $scope.$on('modal.hide', function () {
               // Execute action
           });
           // Execute action on remove modal
           $scope.$on('modal.removed', function () {
               // Execute action
           });
           $scope.$on('modal.shown', function () {
               console.log('Modal is shown!');
           });

           $scope.imageSrc = 'https://ionicframework.com/img/ionic-logo-blog.png';

           $scope.showImage = function (img) {

               if (img != '')
                   $scope.imageSrc = img;
               else
                   $scope.imageSrc = '';
               if (img != '') {
                   $scope.openModal();
               }

           }

           var noHTML = text.replace(/(<([^>]+)>)/ig, "");
           $scope.event_description = noHTML;

           $scope.contact_person = $scope.eventDetail.contact_person;
           $scope.event_where = $scope.eventDetail.event_where;
           $scope.event_venue = $scope.eventDetail.event_venue;
           $scope.event_to = $scope.eventDetail.event_to;
           $scope.event_from = $scope.eventDetail.event_from;
           $scope.event_organizer = $scope.eventDetail.event_organizer;
           $scope.contact = $scope.eventDetail.contact;
           $scope.email = $scope.eventDetail.email;
           $scope.date = $scope.eventDetail.date_added;
           $scope.time = $scope.eventDetail.date_time;
           $scope.event_photo1_large = $scope.eventDetail.event_photo1_large;
           $scope.event_photo2 = $scope.eventDetail.event_photo2_large;
           $scope.event_photo3 = $scope.eventDetail.event_photo3_large;

           // share on whats app
           $scope.shareWhatsApp = function () {

               $cordovaSocialSharing
            .shareViaWhatsApp($scope.eventDetail.event_title + " " + $scope.eventDetail.contact_person + " " + $scope.eventDetail.event_to + " " + $scope.eventDetail.event_from + " " + $scope.eventDetail.event_venue, $scope.eventDetail.event_photo1, "https://drive.google.com/file/d/0BxjKI-HO4CNOUjNSNWpjaFZwZUk/view?usp=sharing")
            .then(function (result) {
                // Success!
            },
            function (err) {
                // An error occurred. Show a message to the user
            });

           }
           //share on twitter
           $scope.shareTwitter = function () {
               $cordovaSocialSharing
             .shareViaTwitter($scope.eventDetail.event_title + " " + $scope.eventDetail.contact_person + " " + $scope.eventDetail.event_to + " " + $scope.eventDetail.event_from + " " + $scope.eventDetail.event_venue, $scope.eventDetail.event_photo1, "https://drive.google.com/file/d/0BxjKI-HO4CNOUjNSNWpjaFZwZUk/view?usp=sharing")
             .then(function (result) {
                 // Success!
             }, function (err) {

                 // An error occurred. Show a message to the user
             });
           }
           //share on facebook
           $scope.shareFacebook = function () {
               $cordovaSocialSharing
             .shareViaFacebookWithPasteMessageHint($scope.eventDetail.event_title + " " + $scope.eventDetail.contact_person + " " + $scope.eventDetail.event_to + " " + $scope.eventDetail.event_from + " " + $scope.eventDetail.event_venue, $scope.eventDetail.event_photo1, "https://drive.google.com/file/d/0BxjKI-HO4CNOUjNSNWpjaFZwZUk/view?usp=sharing")
             .then(function (result) {
                 // Success!
             }, function (err) {

                 // An error occurred. Show a message to the user
             });
           }
           //share on email
           $scope.shareEmail = function () {
               $cordovaSocialSharing
             .shareViaEmail($scope.eventDetail.event_title + " " + $scope.eventDetail.contact_person + " " + $scope.eventDetail.event_to + " " + $scope.eventDetail.event_from + " " + $scope.eventDetail.event_venue, $scope.eventDetail.event_photo1, "https://drive.google.com/file/d/0BxjKI-HO4CNOUjNSNWpjaFZwZUk/view?usp=sharing")
             .then(function (result) {
                 // Success!
             }, function (err) {

                 // An error occurred. Show a message to the user
             });
           }
           // share on message
           $scope.shareTextSms = function () {
               $cordovaSocialSharing
             .shareViaSMS($scope.eventDetail.event_title + " " + $scope.eventDetail.contact_person + " " + $scope.eventDetail.event_to + " " + $scope.eventDetail.event_from + " " + $scope.eventDetail.event_venue, $scope.eventDetail.event_photo1, "https://drive.google.com/file/d/0BxjKI-HO4CNOUjNSNWpjaFZwZUk/view?usp=sharing")
             .then(function (result) {
                 // Success!
             }, function (err) {

                 // An error occurred. Show a message to the user
             });
           }
           $scope.shareVia = function () {
               $cordovaSocialSharing
        .canShareVia(socialType, $scope.eventDetail.event_title + " " + $scope.eventDetail.contact_person + " " + $scope.eventDetail.event_to + " " + $scope.eventDetail.event_from + " " + $scope.eventDetail.event_venue, $scope.eventDetail.event_photo1, "https://drive.google.com/file/d/0BxjKI-HO4CNOUjNSNWpjaFZwZUk/view?usp=sharing")
        .then(function (result) {
            // Success!
        }, function (err) {
            // An error occurred. Show a message to the user
        });
           }

       })
   }])

    /***********  Temple Module ***********/
    .factory('TempletModel', function () {

         var templeList = {};
         return {
             getTempleList: function () {
                 return templeList;
             },
             setTempleList: function (templeParam) {
                 templeList = templeParam;
             }
         };
    })

    //rotate directive
    .directive('rotate', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                scope.$watch(attrs.degrees, function (rotateDegrees) {
                    console.log(rotateDegrees);
                    var r = 'rotate(' + rotateDegrees + 'deg)';
                    element.css({
                        '-moz-transform': r,
                        '-webkit-transform': r,
                        '-o-transform': r,
                        '-ms-transform': r
                    });
                });
            }
        }
    })

   .controller('ImageCtrl', ['$translate', 'config', '$scope', '$cordovaCamera', '$cordovaFile', '$cordovaFileTransfer', '$cordovaDevice', '$ionicPopup', '$cordovaActionSheet', '$localstorage', 'BusinessModel', '$cordovaInAppBrowser', function ($translate, config, $scope, $cordovaCamera, $cordovaFile, $cordovaFileTransfer, $cordovaDevice, $ionicPopup, $cordovaActionSheet, $localstorage, BusinessModel, $cordovaInAppBrowser) {
    $scope.$on('$ionicView.enter', function () {
        $scope.image = null;
        $localstorage.internetConnection();
     
        $scope.showAlert = function (title, msg) {
            var alertPopup = $ionicPopup.alert({
                title: title,
                template: msg
            });
        }
        $scope.loadImage = function () {
            var options = {
                title: 'Select Image Source',
                buttonLabels: ['Load from Library', 'Use Camera'],
                addCancelButtonWithLabel: 'Cancel',
                androidEnableCancelButton: true,
            };
            $cordovaActionSheet.show(options).then(function (btnIndex) {
                var type = null;
                if (btnIndex === 1) {
                    type = Camera.PictureSourceType.PHOTOLIBRARY;
                } else if (btnIndex === 2) {
                    type = Camera.PictureSourceType.CAMERA;
                }
                if (type !== null) {
                    $scope.selectPicture(type);
                }
            })

        }

        $scope.selectPicture = function (sourceType) {

           /*  var options = {
                quality: 100,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: sourceType,
                saveToPhotoAlbum: false,
                correctOrientation: true,

            };*/
            var options = {
                quality: 100,
                allowEdit: true,
                correctOrientation: true,
                targetHeight: 500,
                targetWidth: 500,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: sourceType,
                saveToPhotoAlbum: false
            };

            $cordovaCamera.getPicture(options).then(function (imagePath) {
                // Grab the file name of the photo in the temporary directory
                var currentName = imagePath.replace(/^.*[\\\/]/, '');

                //Create a new name for the photo
                var d = new Date(),
                n = d.getTime(),
                newFileName = n + ".jpg";

                // If you are trying to load image from the gallery on Android we need special treatment!
                if ($cordovaDevice.getPlatform() == 'Android' && sourceType === Camera.PictureSourceType.PHOTOLIBRARY) {
                    window.FilePath.resolveNativePath(imagePath, function (entry) {
                        window.resolveLocalFileSystemURL(entry, success, fail);
                        function fail(e) {
                            console.error('Error: ', e);
                        }

                        function success(fileEntry) {
                            var namePath = fileEntry.nativeURL.substr(0, fileEntry.nativeURL.lastIndexOf('/') + 1);
                            // Only copy because of access rights
                            $cordovaFile.copyFile(namePath, fileEntry.name, cordova.file.dataDirectory, newFileName).then(function (success) {
                                $scope.image = newFileName;
                            }, function (error) {
                                $scope.showAlert('Error', error.exception);
                            });
                        };
                    }
                  );
                } else {
                    var namePath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                    // Move the file to permanent storage
                    $cordovaFile.moveFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
                        $scope.image = newFileName;
                    }, function (error) {
                        $scope.showAlert('Error', error.exception);
                    });
                }
            },
            function (err) {
                // Not always an error, maybe cancel was pressed...
            })
        };
        $scope.pathForImage = function (image) {
            if (image === null) {
                return '';
            } else {
                return cordova.file.dataDirectory + image;
            }
        };
        $scope.uploadImage = function () {
            // Destination URL
            $localstorage.showProgressDialog("Image Uploading...");
            $scope.upload_flag = $localstorage.get(config.UploadFlag);
            $scope.upload_business_flag = $localstorage.get(config.upload_business_flag);
            console.log("temple flag:" + $scope.upload_flag);
            console.log("business flag:" + $scope.upload_business_flag);
           
            var url = '';
            var businessId = '';
            if ($scope.upload_flag == 'true') {
                var temple_id = $localstorage.get(config.AddedTemple);
                url = config.post_temple_image;
                console.log("temple url:" + url);
                console.log("temple id:" + temple_id);
               
            }
                
            else
            {
                if ($scope.upload_business_flag == 'true') {

                    businessId = BusinessModel.getBusinessId();
                    url = config.post_business_image;
                    console.log("Business url:" + config.post_business_image);
                    console.log("Business id:" + businessId);

                }
                else {
                    url = config.upload_user_profile_image;
                    console.log("Profile url:" + url);
                    console.log("Memeber id:" + $scope.memberId);
                }
            }

            $scope.memberId = $localstorage.get(config.MEMBER_ID);
            var temple_id = $localstorage.get(config.AddedTemple);
            
            console.log("Uploading url:" + url);
            // File for Upload
            var targetPath = $scope.pathForImage($scope.image);

            // File name only
            var filename = $scope.image;;

            var options = {
                fileKey: "file",
                fileName: filename,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                params: { 'fileName': filename, 'member_id': $scope.memberId, 'temple_id': temple_id, 'business_id': businessId,'temple_photo': 'image1' }
            };

            $cordovaFileTransfer.upload(url, targetPath, options).then(function (result) {
              
                console.log(result);

                $translate(['Success', 'Imageuploadfinished']).then(function (translations) {
                    $scope.headline = translations.Success;
                    $scope.paragraph = translations.Imageuploadfinished;

                    if ($scope.upload_flag == 'true') {
                        $localstorage.showAlert($scope.headline, $scope.paragraph, 'app.temple-listing');
                    }
                    else if ($scope.upload_business_flag == 'true') {
                        $localstorage.showAlert($scope.headline, $scope.paragraph, 'app.business_listing');
                    }
                    else {
                        $localstorage.showAlert($scope.headline, $scope.paragraph, 'app.edit_profile');
                    }

                });
              //  $scope.showAlert('Success', 'Image upload finished.');
                $scope.upload_flag = false;
                $localstorage.set(config.UploadFlag, $scope.upload_flag);
               
                $localstorage.set(config.UploadFlag, false);
                $localstorage.hideprogressDialog();
                $state.go("app.playlists", {});
            });
        }
    })
    }])

   .controller('AddImageGalleryCtrl', ['$translate', 'config', '$scope', '$cordovaCamera', '$cordovaFile', '$cordovaFileTransfer', '$cordovaDevice', '$ionicPopup', '$cordovaActionSheet', '$localstorage', 'BusinessModel', '$cordovaInAppBrowser', function ($translate, config, $scope, $cordovaCamera, $cordovaFile, $cordovaFileTransfer, $cordovaDevice, $ionicPopup, $cordovaActionSheet, $localstorage, BusinessModel, $cordovaInAppBrowser) {
      $scope.$on('$ionicView.enter', function () {
          $scope.image = null;
          $localstorage.internetConnection();

          $scope.showAlert = function (title, msg) {

              var alertPopup = $ionicPopup.alert({
                  title: title,
                  template: msg
              });
          };

          $scope.takeImage = function () {

              console.log("take pic");
              $translate(['SelectImageSource', 'LoadfromLibrary', 'UseCamera', 'Cancel']).then(function (translations) {

                  console.log("2.take pic");
                  $scope.selectImage = translations.SelectImageSource;
                  $scope.loadImage = translations.LoadfromLibrary;
                  $scope.useCamera = translations.UseCamera;
                  $scope.cancle = translations.Cancel;
                  var options = {
                      title: $scope.selectImage,

                      buttonLabels: [$scope.loadImage, $scope.useCamera],
                      addCancelButtonWithLabel: $scope.cancle,
                      androidEnableCancelButton: true,
                  };
                  $cordovaActionSheet.show(options).then(function (btnIndex) {
                      var type = null;
                      if (btnIndex === 1) {
                          type = Camera.PictureSourceType.PHOTOLIBRARY;
                      } else if (btnIndex === 2) {
                          type = Camera.PictureSourceType.CAMERA;
                      }
                      if (type !== null) {
                          $scope.selectPicture(type);
                      }
                  })

              })

          }

          $scope.rotate = function (angle) {
              console.log("rotate");
              $scope.angle = angle;
          };

          $scope.selectPicture = function (sourceType) {

             /* var options = {
                  quality: 100,
                  destinationType: Camera.DestinationType.FILE_URI,
                  sourceType: sourceType,
                  saveToPhotoAlbum: false,
                  correctOrientation: true,

              };*/ var options = {
                  quality: 100,
                  allowEdit: true,
                  correctOrientation: true,
                  targetHeight: 500,
                  targetWidth: 500,
                  destinationType: Camera.DestinationType.FILE_URI,
                  sourceType: sourceType,
                  
                  saveToPhotoAlbum: false
              };

              $cordovaCamera.getPicture(options).then(function (imagePath) {
                  // Grab the file name of the photo in the temporary directory
                  var currentName = imagePath.replace(/^.*[\\\/]/, '');

                  //Create a new name for the photo
                  var d = new Date(),
                  n = d.getTime(),
                  newFileName = n + ".jpg";

                  // If you are trying to load image from the gallery on Android we need special treatment!
                  if ($cordovaDevice.getPlatform() == 'Android' && sourceType === Camera.PictureSourceType.PHOTOLIBRARY) {
                      window.FilePath.resolveNativePath(imagePath, function (entry) {
                          window.resolveLocalFileSystemURL(entry, success, fail);
                          function fail(e) {
                              console.error('Error: ', e);
                          }

                          function success(fileEntry) {
                              var namePath = fileEntry.nativeURL.substr(0, fileEntry.nativeURL.lastIndexOf('/') + 1);
                              // Only copy because of access rights
                              $cordovaFile.copyFile(namePath, fileEntry.name, cordova.file.dataDirectory, newFileName).then(function (success) {
                                  $scope.image = newFileName;
                                  console.log("image path:" + $scope.image);

                              }, function (error) {
                                  console.log("image error:" + $scope.image);
                                  $scope.showAlert('Error', error.exception);
                              });
                          };
                      }
                    );
                  } else {
                      var namePath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                      // Move the file to permanent storage
                      $cordovaFile.moveFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
                          $scope.image = newFileName;
                          console.log("image path:" + $scope.image);
                      }, function (error) {
                          console.log("image error:" + $scope.image);
                          $scope.showAlert('Error', error.exception);
                      });
                  }
              },
              function (err) {
                  // Not always an error, maybe cancel was pressed...
              })
          };
          $scope.pathForImage = function (image) {
              if (image === null) {
                  return '';
              } else {
                  return cordova.file.dataDirectory + image;
              }
          };
          $scope.uploadImage = function () {
              // Destination URL
              $localstorage.showProgressDialog("Image Uploading...");

              var url = '';

              url = config.post_gallery_image;
              console.log("url:" + url);

              $scope.memberId = $localstorage.get(config.MEMBER_ID);

              // File for Upload
              var targetPath = $scope.pathForImage($scope.image);

              // File name only
              var filename = $scope.image;
              

              var options = {
                  fileKey: "file",
                  fileName: filename,
                  chunkedMode: false,
                  mimeType: "multipart/form-data",
                  params: { 'image': filename, 'member_id': $scope.memberId }
              };

              $cordovaFileTransfer.upload(url, targetPath, options).then(function (result) {
                  console.log(result);
                  console.log(result.byteSend);
                  $translate(['Success', 'Imageuploadfinished']).then(function (translations) {
                      $scope.headline = translations.Success;
                      $scope.paragraph = translations.Imageuploadfinished;

                      $localstorage.showAlert($scope.headline, $scope.paragraph, 'app.playlists');
                      $scope.upload_flag = false;
                      $localstorage.set(config.UploadFlag, $scope.upload_flag);

                      $localstorage.set(config.UploadFlag, false);
                      $localstorage.hideprogressDialog();
                      $state.go("app.playlists", {});

                  });


                  // $scope.showAlert('Success', 'Image upload finished.');
                 
              });
          }
      })
  }])

   .controller('AddImageEventCtrl', ['$translate', 'config', '$scope', '$cordovaCamera', '$cordovaFile', '$cordovaFileTransfer', '$cordovaDevice', '$ionicPopup', '$cordovaActionSheet', '$localstorage', 'BusinessModel', '$cordovaInAppBrowser', function ($translate,config, $scope, $cordovaCamera, $cordovaFile, $cordovaFileTransfer, $cordovaDevice, $ionicPopup, $cordovaActionSheet, $localstorage, BusinessModel, $cordovaInAppBrowser) {
    $scope.$on('$ionicView.enter', function () {
        $scope.image = null;
        $localstorage.internetConnection();


        $scope.showAlert = function (title, msg) {
            var alertPopup = $ionicPopup.alert({
                title: title,
                template: msg
            });
        }
        $scope.loadImage = function () {
            var options = {
                title: 'Select Image Source',
                buttonLabels: ['Load from Library', 'Use Camera'],
                addCancelButtonWithLabel: 'Cancel',
                androidEnableCancelButton: true,
            };
            $cordovaActionSheet.show(options).then(function (btnIndex) {
                var type = null;
                if (btnIndex === 1) {
                    type = Camera.PictureSourceType.PHOTOLIBRARY;
                } else if (btnIndex === 2) {
                    type = Camera.PictureSourceType.CAMERA;
                }
                if (type !== null) {
                    $scope.selectPicture(type);
                }
            })

        }

        $scope.selectPicture = function (sourceType) {
            var options = {
                quality: 100,
                allowEdit: true,
                correctOrientation: true,
                targetHeight: 500,
                targetWidth: 500,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: sourceType,
                saveToPhotoAlbum: false
            };

            $cordovaCamera.getPicture(options).then(function (imagePath) {
                // Grab the file name of the photo in the temporary directory
                var currentName = imagePath.replace(/^.*[\\\/]/, '');

                //Create a new name for the photo
                var d = new Date(),
                n = d.getTime(),
                newFileName = n + ".jpg";

                // If you are trying to load image from the gallery on Android we need special treatment!
                if ($cordovaDevice.getPlatform() == 'Android' && sourceType === Camera.PictureSourceType.PHOTOLIBRARY) {
                    window.FilePath.resolveNativePath(imagePath, function (entry) {
                        window.resolveLocalFileSystemURL(entry, success, fail);
                        function fail(e) {
                            console.error('image Error: ', e);
                        }

                        function success(fileEntry) {
                            var namePath = fileEntry.nativeURL.substr(0, fileEntry.nativeURL.lastIndexOf('/') + 1);
                            // Only copy because of access rights
                            $cordovaFile.copyFile(namePath, fileEntry.name, cordova.file.dataDirectory, newFileName).then(function (success) {
                                $scope.image = newFileName;
                                console.log("image path:" + $scope.image);
                            }, function (error) {
                                $scope.showAlert('Error', error.exception);
                            });
                        };
                    }
                  );
                } else {
                    var namePath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                    // Move the file to permanent storage
                    $cordovaFile.moveFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
                        $scope.image = newFileName;
                    }, function (error) {
                        $scope.showAlert('Error', error.exception);
                    });
                }
            },
            function (err) {
                // Not always an error, maybe cancel was pressed...
            })
        };
        $scope.pathForImage = function (image) {
            if (image === null) {
                return '';
            } else {
                return cordova.file.dataDirectory + image;
            }
        };
        $scope.uploadImage = function () {
            // Destination URL
            $localstorage.showProgressDialog("Image Uploading...");

            var url = '';

            url = config.post_event_image;
            console.log("url:" + url);

            $scope.memberId = $localstorage.get(config.MEMBER_ID);
            $scope.eventId = $localstorage.get(config.Event_Id);
            console.log("evntid:" + $scope.eventId);
            console.log("memberid:" + $scope.memberId);
            $scope.fileNo = $localstorage.get(config.Event_File);

            // File for Upload
            var targetPath = $scope.pathForImage($scope.image);

            // File name only
            var filename = $scope.image;
            console.log("filename:" + filename);

            //  if ($scope.fileNo == 'image1'){
            var options = {
                fileKey: "file",
                fileName: filename,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                params: { 'fileName': filename, 'member_id': $scope.memberId, 'events_id': $scope.eventId, 'event_photo': 'image1' }
            };
            // }
            

            $cordovaFileTransfer.upload(url, targetPath, options).then(function (result) {

                console.log(result);

                $translate(['Success', 'Imageuploadfinished']).then(function (translations) {
                    $scope.headline = translations.Success;
                    $scope.paragraph = translations.Imageuploadfinished;

                    $localstorage.showAlert($scope.headline, $scope.paragraph, 'app.event_list');

                });
               // $scope.showAlert('Success', 'Image upload finished.');

                $localstorage.hideprogressDialog();
                //$state.go("app.playlists", {});
            });
        }
    })
}])

    // temple ctrl
    .controller('TempleCtrl', ['config', '$scope', '$http', '$state', '$stateParams', 'TempletModel', '$localstorage', function (config, $scope, $http, $state, $stateParams, TempletModel, $localstorage) {
        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            $scope.selectedCity = null;
            var get_country_url = config.get_country_url;
            $http.get(get_country_url)
        .then(function (response) {
            $scope.countryList = response.data.result;
        });

            $scope.getStates = function (countryId) {
                var get_state_url = config.get_state_url + countryId;
                $http.get(get_state_url)
    .then(function (response) {
        $scope.stateList = response.data.result;
    });
            }

            $scope.getcities = function (stateId) {
                var get_city_url = config.get_city_url + stateId;
                $http.get(get_city_url)
    .then(function (response) {
        $scope.cityList = response.data.result;


    });
            }

            $scope.openTempleList = function (cityId) {

                $localstorage.set(config.TEMP_CITY_ID, $scope.selectedCity);
                $state.go("app.temple-listing", {});
                /*   var get_temple_url = "http://nirjaraap.com/api/commen_function.php?key=temple&city_id=" + $scope.selectedCity;
      
                   $http.get(get_temple_url).then(function (response) {
      
                       $scope.templeList = response.data.result;
                       TempletModel.setTempleList($scope.templeList);
                       $state.go("app.temple-listing", {});
                   });*/

            };

            $scope.setCity = function (cityId) {
                $scope.selectedCity = cityId;
                   // $localstorage.set(config.TEMP_CITY_ID, cityId);
            }
        });
    }])

// temple list ctrl
  .controller('templeListControl', ['$Utility', 'config', '$scope', '$state', '$stateParams', 'TempletModel', 'Temple', '$localstorage', '$http', function ($Utility, config, $scope, $state, $stateParams, TempletModel, Temple, $localstorage, $http) {

      $scope.errorMessage = '';
      $scope.errorTextVisible = false;
      $scope.noerror = false;

      $scope.$on('$ionicView.enter', function () {
          // $scope.templelists = TempletModel.getTempleList();
          //  $scope.templelists = TempletModel.getTempleList();
          $localstorage.internetConnection();
          $scope.disableTap = function () {
              var container = document.getElementsByClassName('pac-container');
              angular.element(container).attr('data-tap-disabled', 'true');
              var backdrop = document.getElementsByClassName('backdrop');
              angular.element(backdrop).attr('data-tap-disabled', 'true');
              angular.element(container).on("click", function () {
                  document.getElementById('pac-input-temple-search').blur();
              });
          };


          var cityId;
          $scope.templelists = {};


          var input = (document.getElementById('pac-input-temple-search'));

          // Create the autocomplete helper, and associate it with 
          // an HTML text input box. 

          var autocomplete = new google.maps.places.Autocomplete(input);

          autocomplete.setComponentRestrictions(
          { 'country': ['in'] });

          // Search temple list
          var address = $scope.search;
          var lang = $localstorage.get(config.LANGUAGE_NAME);
          $scope.searchList = function (address) {

              $scope.templelists = {};
              //open business list page
              var add1 = autocomplete.getPlace();
              var add = add1.name;
              $scope.templeCity = add;
              var parameter = '&location=' + add + '&lang=' + lang;
              var get_search_temple_url = config.get_search_temple_url + parameter;

              $http.get(get_search_temple_url).then(function (response) {

                  $scope.error_msg = response.data.error_msg;
                  $scope.message = response.data.message;

                  if ($scope.message === 'success') {
                      $scope.errorTextVisible = false;
                      $scope.noerror = false;
                      $scope.templelists = response.data.result;
                      Temple.setTempleList($scope.templelists);
                      Temple.setTempleCity($scope.templeCity);
                  }
                  else {
                      if ($scope.error_msg === 'Records not found') {
                          $scope.errorTextVisible = true;
                          $scope.noerror = true;
                          $scope.errorMessage = $scope.error_msg;
                      }
                  }

              });
          };

          try {
              cityId = $localstorage.get(config.TEMP_CITY_ID);
              if ($Utility.isEmptyOrNull(cityId) || cityId === "null") {
                  cityId = $localstorage.get(config.CITYID);
              }
          }
          catch (e) {
              cityId = $localstorage.get(config.CITYID);
          }

          $scope.memberId = $localstorage.get(config.MEMBER_ID);

          $scope.getTempleList = function (city) {
              var get_temple_url = config.get_search_temple_url + '&location=' + city + '&lang=' + lang;

              $http.get(get_temple_url).then(function (response) {

                  $scope.error_msg = response.data.error_msg;
                  $scope.message = response.data.message;

                  if ($scope.message === 'success') {
                      $scope.errorTextVisible = false;
                      $scope.noerror = false;
                      $scope.templelists = response.data.result;
                      Temple.setTempleList($scope.templelists);
                      Temple.setTempleCity($scope.templeCity);
                  }
                  else {
                      if ($scope.error_msg === 'Records not found') {
                          $scope.errorTextVisible = true;
                          $scope.noerror = true;
                          $scope.errorMessage = $scope.error_msg;
                      }
                  }

              })
          }

          $scope.getDefaulTempleList = function (city) {
              var memberId = $localstorage.get(config.MEMBER_ID);
              var lang = $localstorage.get(config.LANGUAGE_NAME);
              var get_temple_url = config.get_default_temple + '&member_id=' + memberId + 'lang=' + lang;

              $http.get(get_temple_url).then(function (response) {

                  $scope.error_msg = response.data.error_msg;
                  $scope.message = response.data.message;

                  if ($scope.message === 'success') {
                      $scope.errorTextVisible = false;
                      $scope.noerror = false;
                      $scope.templelists = response.data.result[0].temples;
                      Temple.setTempleList($scope.templelists);
                      Temple.setTempleCity($scope.templeCity);
                  }
                  else {
                      if ($scope.error_msg === 'Records not found') {
                          $scope.errorTextVisible = true;
                          $scope.noerror = true;
                          $scope.errorMessage = $scope.error_msg;
                      }
                  }

              })
          }

          var populateDefaultTempleList = function (latlng) {

              console.log("displaying Default list");
              var geocoder;
              geocoder = new google.maps.Geocoder();
              geocoder.geocode(
                       { 'latLng': latlng },
                       function (results, status) {
                           if (status == google.maps.GeocoderStatus.OK) {
                               if (results[0]) {
                                   var add = results[0].formatted_address;
                                   var value = add.split(",");

                                   count = value.length;
                                   country = value[count - 1];
                                   state = value[count - 2];
                                   city = value[count - 3];
                                   cityId = city.trim();
                                   $scope.templeCity = cityId; //city name updated
                                   String.prototype.trim = function () {
                                       return this.replace(/^\s+|\s+$/g, '');
                                   };

                                   //get temple 

                                   $scope.getDefaulTempleList(cityId);

                               }
                               else {
                                   alert("address not found");
                               }
                           }
                           else {
                               alert("Geocoder failed due to: " + status);
                           }
                       }
                   );

          }
          var datalist = { member_id: $scope.memberId };
          $scope.markers = [];
          var memberId = $localstorage.get(config.MEMBER_ID);
          var lang = $localstorage.get(config.LANGUAGE_NAME);
          var get_default_temple_url = config.get_default_temple + '&member_id=' + memberId + '&lang=' + lang;
          console.log("default url:" + get_default_temple_url);;

          $http({
              url: "http://nirjaraap.com/api/user_position.php",
              method: "POST",
              params: datalist
          }).then(function (res) {
              $scope.response = res.data;
              console.log(res.data.latitide);
              console.log(res.data.longitude);

              var templeCityName = Temple.getTempleCity();
              if (angular.isDefined(templeCityName) && templeCityName != '') {
                  $scope.templeCity = templeCityName;
                  $scope.templelists = Temple.getTempleList();
              }
              else {
                  var latlng = new google.maps.LatLng(res.data.latitide, res.data.longitude);

                  populateDefaultTempleList(latlng);
              }

              var myLatlng = new google.maps.LatLng(res.data.latitide, res.data.longitude);
              var mapOptions = {
                  center: myLatlng,
                  zoom: 16,
                  mapTypeId: google.maps.MapTypeId.ROADMAP
              };
              $scope.map = new google.maps.Map(document.getElementById("map-temple-location"),
                     mapOptions);
              var iconBase = 'img/';
              var geocoder = new google.maps.Geocoder;
              var infoWindow = new google.maps.InfoWindow;

              google.maps.event.addListenerOnce($scope.map, 'idle', function () {

                  console.log(myLatlng);
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      animation: google.maps.Animation.DROP,
                      position: myLatlng
                  });
              });

              for (var i = 0, length = res.data.data.length; i < length; i++) {
                  var json = res.data.data[i];
                  var latLng = new google.maps.LatLng(json.temple_latitude, json.temple_longitude);
                  var icon = {
                      url: iconBase + 'icon/map-temple.svg',
                      scaledSize: new google.maps.Size(42, 42),
                      origin: new google.maps.Point(0, 0),
                      anchor: new google.maps.Point(0, 0)
                  }
                  console.log(json.temple_latitude);
                  console.log(json.temple_longitude);
                  console.log(icon);
                  // Creating a marker and putting it on the map
                  var marker = new google.maps.Marker({
                      position: latLng,
                      icon: icon,
                      map: $scope.map,
                      optimized: false
                  });

                  var infowindow = new google.maps.InfoWindow({});

                  google.maps.event.addListener(marker, 'click', (function (marker, i) {
                      return function () {
                          var path = res.data.data[i].temple_photo1;

                          infowindow.setContent('<div style="float:left"><img src="' + path + '" style="height:40px; width:40px;"></div>' + res.data.data[i].temple_name_english + "\n" + res.data.data[i].location_english);

                          infowindow.open($scope.map, marker);
                      }
                  })(marker, i));

              }
              geocoder.geocode({ 'location': myLatlng }, function (results, status) {
                  if (status === 'OK') {
                      if (results[1]) {
                          $scope.map.setZoom(11);
                          var marker = new google.maps.Marker({
                              position: myLatlng,
                              map: $scope.map
                          });

                          infoWindow.setContent(results[1].formatted_address);
                          infoWindow.open($scope.map, marker);
                      } else {
                          window.alert('No results found');
                      }
                  } else {
                      window.alert('Geocoder failed due to: ' + status);
                  }
              });
          });

          $scope.openTempleDetail = function (temple) {

              Temple.setTempleList($scope.templelists);
              Temple.setTempleCity($scope.templeCity);
              Temple.setTemple(temple);

              $state.go("app.temple-details", {});


          };

          $scope.openTempleEdit = function (temple) {

              Temple.setTemple(temple);
              $state.go("app.edit_temple");
          };

      });

  }])


   .factory('Temple', function () {

       var temple = {};
       var templeCity = "";
       var templeList = {};
       return {
           getTemple: function () {
               return temple;
           },
           setTemple: function (templeParam) {
               temple = templeParam;
           },
           getTempleCity: function () {
               return templeCity;
           },
           setTempleCity: function (templeParam) {
               templeCity = templeParam;
           },
           getTempleList: function () {
               return templeList;
           },
           setTempleList: function (templeParam) {
               templeList = templeParam;
           },
       };
   })

    .controller('AddTempleCtrl', ['$translate', 'config', '$scope', '$http', '$state', '$stateParams', '$localstorage', '$ionicPopup', function ($translate, config, $scope, $http, $state, $stateParams, $localstorage, $ionicPopup) {
        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            var contact = $localstorage.get(config.CONTACT);
            $scope.data = {};
            $scope.data.mobileNo = '';
            $scope.data.templeName = '';
            $scope.data.type = '';
            $scope.data.food = '';
            $scope.data.stay = '';
            $scope.data.countryId = '';
            $scope.data.stateId = '';
            $scope.data.cityId = '';
            $scope.data.pincode = '';
            $scope.data.location = '';
            $scope.data.longitude = '';
            $scope.data.latitude = '';
            $scope.errorMessage = '';
            $scope.errorTextVisible = false;
            $scope.noerror = true;
            $scope.upload_flag = false;

            $scope.isDisabled = false;
            $scope.userDetail = $localstorage.getObject(config.TAPASVI);
            var memberId = $localstorage.get(config.MEMBER_ID);

            $scope.countrySelected = function (selected) {
                if (selected) {

                    $scope.getStates(selected.originalObject.country_id);
                    $scope.data.countryId = selected.originalObject.country_id
                } else {
                    console.log('cleared');
                }
            };
            $scope.stateSelected = function (selected) {
                if (selected) {

                    $scope.getcities(selected.originalObject.sid);
                    $scope.data.stateId = selected.originalObject.sid;
                } else {
                    console.log('cleared');
                }
            };
            $scope.citySelected = function (selected) {
                if (selected) {

                    $scope.data.cityId = selected.originalObject.city_id;
                } else {
                    console.log('cleared');
                }
            };

            var getCountryUrl = config.get_country_url;
            $http.get(getCountryUrl)
            .then(function (response) {

                $scope.countryList = response.data.result;

                var i = $scope.countryList.length;
                var defaultCountry = 'INDIA'
                while (i--) {
                    if ($scope.countryList[i].country_name.toUpperCase() === defaultCountry) {

                        $scope.$broadcast('angucomplete-alt:changeInput', 'tcountry', $scope.countryList[i]);
                        break;
                    }
                }
            });

            $scope.getStates = function (countryId) {

                var get_state_url = config.get_state_url + countryId;
                $http.get(get_state_url)
               .then(function (response) {
                   $scope.stateList = response.data.result;
                   if (angular.isDefined($scope.stateList)) {
                       //  $scope.defaultState = $scope.stateList[0];
                       $scope.changeInput('tstate');
                       $scope.getcities($scope.stateList[0].sid);
                   }
                   else {
                       $scope.clearInput('tstate');
                       $scope.clearInput('tcity');
                       $scope.data.stateId = '';
                       $scope.data.cityId = '';
                       $localstorage.showAlert("Oops!", "Selected Country does't have cities");
                   }
               });
            }

            $scope.clearInput = function (id) {

                $scope.$broadcast('angucomplete-alt:clearInput', id);

            }

            $scope.changeInput = function (id) {
                if (id) {
                    if (id === 'tstate')
                        $scope.$broadcast('angucomplete-alt:changeInput', id, $scope.stateList[0]);
                    if (id === 'tcity')
                        $scope.$broadcast('angucomplete-alt:changeInput', id, $scope.cityList[0]);

                }
            }

            $scope.getcities = function (stateId) {

                var get_city_url = config.get_city_url + stateId;
                $http.get(get_city_url)
                .then(function (response) {
                    $scope.cityList = response.data.result;
                    $scope.cities = response.data.result;
                    if (angular.isDefined($scope.cityList)) {
                        //  $scope.defaultCity = $scope.cityList[0];
                        $scope.changeInput('tcity');
                        var name = $scope.name;
                        var emailId = $scope.emailId;
                    }

                });

            }

            $scope.disableTap = function () {
                var container = document.getElementsByClassName('pac-container');
                angular.element(container).attr('data-tap-disabled', 'true');
                var backdrop = document.getElementsByClassName('backdrop');
                angular.element(backdrop).attr('data-tap-disabled', 'true');
                angular.element(container).on("click", function () {
                    document.getElementById('pac-input-temple-location').blur();
                });
            };

            var input = (document.getElementById('pac-input-temple-location'));

            // Create the autocomplete helper, and associate it with 
            // an HTML text input box. 

            var autocomplete = new google.maps.places.Autocomplete(input);

            autocomplete.setComponentRestrictions(
            { 'country': ['in'] });

            // Search temple list
            var address = $scope.search;

            var locate = config.get_current_position + 'member_id=' + memberId;
            $http.get(locate).then(function (response) {

                var latitude = response.data.latitide;
                var longitude = response.data.longitude;
                $scope.data.latitude = latitude;
                $scope.data.longitude = longitude;

                var geocoder;
                geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(latitude, longitude);
                console.log("location value received" + longitude + ',' + latitude);;
                if (latitude != 'null' && longitude != 'null' && latitude != '' && longitude != '') {
                    geocoder.geocode(
                        { 'latLng': latlng },
                        function (results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                if (results[0]) {
                                    var add = results[0].formatted_address;
                                    $scope.data.location = add;
                                   
                                }
                                else {
                                    // alert("address not found");
                                }
                            }
                            else {
                                // alert("Geocoder failed due to: " + status);
                            }
                        }
                    );
                }


            });
            $scope.saveDetailsOnServer = function () {

                if ($scope.data.templeInfo === '' || $scope.data.templeName === '' || $scope.data.type === '' || $scope.data.food === '' || $scope.data.stay === ''|| $scope.data.location === '' || $scope.data.mobileNo === '') {
                    $scope.errorTextVisible = true;
                    $scope.noerror = true;

                    $translate(['Warning', 'SomeFields']).then(function (translations) {
                        $scope.headline = translations.Warning;
                        $scope.paragraph = translations.SomeFields;

                        $localstorage.showAlert($scope.headline, $scope.paragraph);

                    });
                    // $localstorage.showAlert('Warning', 'Some required fields are empty');

                }
                else {

                    /* var add1 = autocomplete.getPlace();
                    for (var j = add1.address_components.length - 1 ; j >= add1.address_components.length - add1.address_components.length; j--) {
                        var add = add1.address_components[j].long_name;
                    }
                    var city = '';
                    for (var i = 0; i < $scope.cities.length; i++) {
                        if ($scope.data.cityId == '') {
                            return;
                        }
                        else {
                            if ($scope.data.cityId == $scope.cities[i].city_id) {
                                city = $scope.cities[i].city_name;

                            }
                        }
                    } */
                    //var addressText = autocomplete.getPlace();
                    var latitude = $scope.data.latitude;
                    var longitude = $scope.data.longitude;
                    //var formatted_address = addressText.formatted_address;
                    var name = $localstorage.get(config.MEMBER_NAME);
                    var emailId = $localstorage.get(config.EMAIL_ID);
                   
                    var contact = $localstorage.get(config.CONTACT);
                    var food = $scope.data.food.replace(/[\s]/g, '');
                    var stay = $scope.data.stay.replace(/[\s]/g, '');
                    var parameter = 'member_id=' + memberId + '&temple_info=' + $scope.data.templeInfo + '&temple_name=' + $scope.data.templeName + '&type=' + $scope.data.type + '&is_food_available=' + food + '&is_stay_available=' + stay + '&contact_number=' + $scope.data.mobileNo + '&location=' + $scope.data.location + '&longitude=' + longitude + '&latitude=' + latitude;

                    var url = config.post_add_temple_url + parameter;

                    
                        $http.get(url)
                        .then(function (response) {
                            $scope.message = response.data.message;

                            $scope.data.fromDate = '';
                            $scope.data.toDate = '';
                            if ($scope.message === 'Success') {
                                var temple_id = response.data.data;
                                $localstorage.set(config.AddedTemple, temple_id);
                                $scope.isDisabled = true;

                                $scope.errorTextVisible = false;
                                $scope.noerror = false;

                                $scope.data.mobileNo = '';
                                $scope.data.templeName = '';
                                $scope.data.type = '';
                                $scope.data.food = '';
                                $scope.data.stay = '';
                                $scope.data.countryId = '';
                                $scope.data.stateId = '';
                                $scope.data.cityId = '';
                                $scope.data.pincode = '';
                                $scope.data.location = '';
                                $scope.data.longitude = '';
                                $scope.data.latitude = '';
                                $scope.errorMessage = '';
                                console.log('no error');

                                $translate(['Welldone', 'Templeadded']).then(function (translations) {
                                    $scope.headline = translations.Welldone;
                                    $scope.paragraph = translations.Templeadded;

                                    $localstorage.showAlert($scope.headline, $scope.paragraph);

                                });


                                //$localstorage.showAlert('Welldone', 'Temple is added successfully!');
                                $state.go("app.temple_image", {});
                            }

                            else {
                                $scope.isDisabled = true;
                                $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                    $scope.headline = translations.Oops;
                                    $scope.paragraph = translations.Somethingwentwrong;

                                    $localstorage.showAlert($scope.headline, $scope.paragraph);

                                });

                                // $localstorage.showAlert('Oops!', 'Something went wrong!');
                            }


                        });
                    
                }
            }


        });
    }])

    // add temple image ctrl
     .controller('AddTempleImageCtrl', ['config', '$scope', '$http', '$state', '$stateParams', '$localstorage', '$ionicPopup', function (config, $scope, $http, $state, $stateParams, $localstorage, $ionicPopup) {
         $scope.$on('$ionicView.enter', function () {

             $localstorage.internetConnection();
             $scope.uploadImage = function () {
                 $scope.upload_flag = true;
                 $localstorage.set(config.UploadFlag, $scope.upload_flag);
                 $localstorage.set(config.upload_business_flag, false);
                 $state.go("app.upload_image", {});
             }
         })
     }])

    // specific temple details ctrl
    .controller('specificTempleDetailsCtrl', ['$http', 'config', '$scope', '$state', '$stateParams', 'Temple', '$cordovaSocialSharing', '$localstorage', function ($http, config, $scope, $state, $stateParams, Temple, $cordovaSocialSharing, $localstorage) {
        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            $scope.templeDetail = Temple.getTemple();


            $scope.temple_name = $scope.templeDetail.temple_name;
            var text = $scope.templeDetail.temple_info;

            var url = config.get_image_list + '70';

            $http.get(url)
        .then(function (response) {
            $scope.imagelist = response.data.result;
        });

            var noHTML = text.replace(/(<([^>]+)>)/ig, "");
            $scope.temple_info = noHTML;

            $scope.location = $scope.templeDetail.location;
            $scope.contact = $scope.templeDetail.contact_no;
            $scope.food_available = $scope.templeDetail.food_available;
            $scope.stay_available = $scope.templeDetail.stay_available;

            $scope.temple_photo = $scope.templeDetail.temple_photo;
            $scope.temple_photo2 = $scope.templeDetail.temple_photo2;
            $scope.temple_photo3 = $scope.templeDetail.temple_photo3;
            $scope.longitude = $scope.templeDetail.longitude;
            $scope.latitude = $scope.templeDetail.latitude;
            $scope.cityname = $scope.templeDetail.city_name;


            $scope.shareWhatsApp = function () {

                $cordovaSocialSharing
             .shareViaWhatsApp($scope.templeDetail.temple_name + " " + $scope.templeDetail.temple_info + " " + $scope.templeDetail.location + " " + $scope.templeDetail.city_name, $scope.templeDetail.temple_photo, "https://drive.google.com/file/d/0BxjKI-HO4CNOUjNSNWpjaFZwZUk/view?usp=sharing")
             .then(function (result) {
                 // Success!
             },
             function (err) {

                 // An error occurred. Show a message to the user
             });



            }
            //share on twitter
            $scope.shareTwitter = function () {
                $cordovaSocialSharing
              .shareViaTwitter($scope.templeDetail.temple_name + " " + $scope.templeDetail.temple_info + " " + $scope.templeDetail.location + " " + $scope.templeDetail.city_name, $scope.templeDetail.temple_photo, "https://drive.google.com/file/d/0BxjKI-HO4CNOUjNSNWpjaFZwZUk/view?usp=sharing")
              .then(function (result) {
                  // Success!
              }, function (err) {

                  // An error occurred. Show a message to the user
              });
            }
            //share on facebook
            $scope.shareFacebook = function () {
                $cordovaSocialSharing
              .shareViaFacebookWithPasteMessageHint($scope.templeDetail.temple_name + " " + $scope.templeDetail.temple_info + " " + $scope.templeDetail.location + " " + $scope.templeDetail.city_name, $scope.templeDetail.temple_photo, "https://drive.google.com/file/d/0BxjKI-HO4CNOUjNSNWpjaFZwZUk/view?usp=sharing")
              .then(function (result) {
                  // Success!
              }, function (err) {

                  // An error occurred. Show a message to the user
              });
            }
            //share on email
            $scope.shareEmail = function () {
                $cordovaSocialSharing
              .shareViaEmail($scope.templeDetail.temple_name + " " + $scope.templeDetail.temple_info + " " + $scope.templeDetail.location + " " + $scope.templeDetail.city_name, $scope.templeDetail.temple_photo, "https://drive.google.com/file/d/0BxjKI-HO4CNOUjNSNWpjaFZwZUk/view?usp=sharing")
              .then(function (result) {
                  // Success!
              }, function (err) {

                  // An error occurred. Show a message to the user
              });
            }
            // share on message
            $scope.shareTextSms = function () {
                $cordovaSocialSharing
              .shareViaSMS($scope.templeDetail.temple_name + " " + $scope.templeDetail.temple_info + " " + $scope.templeDetail.location + " " + $scope.templeDetail.city_name, $scope.templeDetail.temple_photo, "https://drive.google.com/file/d/0BxjKI-HO4CNOUjNSNWpjaFZwZUk/view?usp=sharing")
              .then(function (result) {
                  // Success!
              }, function (err) {

                  // An error occurred. Show a message to the user
              });
            }
            $scope.shareVia = function () {
                $cordovaSocialSharing
         .canShareVia(socialType, $scope.templeDetail.temple_name + " " + $scope.templeDetail.temple_info + " " + $scope.templeDetail.location + " " + $scope.templeDetail.city_name, $scope.templeDetail.temple_photo, "https://drive.google.com/file/d/0BxjKI-HO4CNOUjNSNWpjaFZwZUk/view?usp=sharing")
         .then(function (result) {
             // Success!
         }, function (err) {
             // An error occurred. Show a message to the user
         });
            }

        });
    }])

     .factory('BusinessModel', function () {

         var business = {};
         var businessCatId = "";
         var businessId = "";
         var businesscityName = "";
         var businessPackage = "";
         var businessOwnerName = "";
         var businessPurpose = "";
         var businessOwneremail = "";
         var businessownercontact = "";
         var businessPackageAmt = "";
         var paymentStatus = "";
         var businessCategory = "";
         return {
             getPaymentStatus: function () {
                 return paymentStatus;
             },
             setPaymentStatus: function (param) {
                 paymentStatus = param;

             },
             getBusinessPackageAmt: function () {
                 return businessPackageAmt;
             },
             setBusinessPackageAmt: function (param) {
                 businessPackageAmt = param;

             },
             getBusinessOwnercontact: function () {
                 return businessownercontact;
             },
             setBusinessOwnercontact: function (param) {
                 businessownercontact = param;

             },
             getBusinessOwneremail: function () {
                 return businessOwneremail;
             },
             setBusinessOwneremail: function (param) {
                 businessOwneremail = param;

             },
             getBusinessPurpose: function () {
                 return businessPurpose;
             },
             setBusinessPurpose: function (param) {
                 businessPurpose = param;

             },
             getBusinessOwnerName: function () {
                 return businessOwnerName;
             },
             setBusinessOwnerName: function (param) {
                 businessOwnerName = param;

             },
             getBusinessPackage: function () {
                 return businessPackage;
             },
             setBusinessPackage: function (param) {
                 businessPackage = param;

             },
             getBusinessDetail: function () {
                 return business;
             },
             setBusinessDetail: function (businessparameter) {
                 business = businessparameter;

             },
             getBusinessId: function () {
                 return businessId;
             },
             setBusinessId: function (businessIdparameter) {
                 businessId = businessIdparameter;

             },
             getBusinessCity: function () {
                 return businesscityName;
             },
             setBusinessCity: function (businesscity) {
                 businesscityName = businesscity;

             },

             getBusinessCategory: function () {
                 return businessCategory;
             },
             setBusinessCategory: function (businessCategoryName) {
                 businessCategory = businessCategoryName;

             },

             getbusinessCat: function () {
                 try {
                     if (angular.isDefined(business.businessCat))
                         return business.businessCat;
                     else
                         return this.businessCatId;
                 }
                 catch (e) {
                     return this.businessCatId;
                 }
             },
             setbusinessCat: function (businessCat) {
                 try {
                     this.businessCatId = businessCat;
                     business.businessCat = businessCat;

                 } catch (e) {
                     this.businessCatId = businessCat;
                 }

             },
             getbusinessCity: function () {
                 return business.businessCity;
             },
             setbusinessCity: function (businessCity) {
                 business.businessCity = businessCity;
             }
         };
     })

    // busniess category ctrl
    .controller('BusinessCategotyCtrl', ['config', '$scope', '$http', '$state', '$stateParams', 'BusinessModel', '$localstorage', function (config, $scope, $http, $state, $stateParams, BusinessModel, $localstorage) {
        $scope.$on('$ionicView.enter', function () {

            var lang = $localstorage.get(config.LANGUAGE_NAME);

            $localstorage.internetConnection();
               
                   $scope.selectedGroup = {};
                   $scope.getBusinessCategory = function (lang) {
                    var getBusinessCategoriesUrl = config.get_business_category + 'lang='+lang;

                    $http.get(getBusinessCategoriesUrl)
                .then(function (response) {
                    if(lang!='en')
                        $scope.businessCatList = response.data.result;
                    else
                    {
                        console.log("language english");
                        $scope.businessList = response.data.result;
                    }
                });
                }
                if (lang != 'en') {
                    var lang = $localstorage.get(config.LANGUAGE_NAME);
                    $scope.getBusinessCategory();
                }
                    // for dropdown list
                    $scope.getBusinessCategory('en');
               
                $scope.countries = [{ "id_country": "1", "sortname": "AF", "name": "Afghanistan" },
                            { "id_country": "2", "sortname": "AL", "name": "Albania" },
                            { "id_country": "3", "sortname": "DZ", "name": "Algeria" },
                            { "id_country": "4", "sortname": "AS", "name": "American Samoa" },
                            { "id_country": "5", "sortname": "IN", "name": "India" }];


                $scope.initialCountry = ["2"];

                $scope.getCountries = function (query, isInitializing) {
                    var returnValue = { items: [], selectedItems: [] };
                    $scope.countries.forEach(function (item) {
                        if (item.name.indexOf(query) > -1) {
                            returnValue.items.push(item);
                        }
                        else if (item.id_country.indexOf(query) > -1) {
                            returnValue.items.push(item);
                        }
                    });

                    return returnValue;
                };

                $scope.modelToItemMethod = function (modelValue) {

                    for (var i = 0; i < $scope.countries.length; i++) {
                        if ($scope.countries[i].id_country == modelValue) {
                            return $scope.countries[i];
                        }
                    }
                    return {};
                };

            

                $scope.openDetailPage = function (business_cat_id, business_category) {
                    console.log(config.GlobalLattitude +'GlobalLattitude' +config.GlobalLongitude +'GlobalLongitude')
                if (config.GlobalLattitude != 'GlobalLattitude' && config.GlobalLongitude != 'GlobalLongitude')
                {
                    var geocoder;
                    var latlng = new google.maps.LatLng(config.GlobalLattitude, config.GlobalLongitude);
               geocoder = new google.maps.Geocoder();
               geocoder.geocode(
                        { 'latLng': latlng },
                        function (results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                if (results[0]) {
                                    var add = results[0].formatted_address;
                                    var value = add.split(",");

                                    count = value.length;
                                    country = value[count - 1];
                                    state = value[count - 2];
                                    city = value[count - 3];
                                    cityId = city.trim();
                                    $scope.businessCity = cityId; //city name updated
                                    String.prototype.trim = function () {
                                        return this.replace(/^\s+|\s+$/g, '');
                                    };

                                 
                                    // var url = config.get_search_business_url + 'city=' + cityId + '&business_cat_id=' + business_cat_id;
                                    var url = config.get_businessowner_url + business_cat_id + '&city=' + $scope.businessCity + '&lang=' + 'en';
                                    console.log("business url:" + url);
                                    $http.get(url)
                             .then(function (response) {

                                
                                 $scope.businessList = response.data.result;
                                 BusinessModel.setBusinessCity($scope.businessCity);
                                 BusinessModel.setBusinessCategory(business_category);
                                 BusinessModel.setbusinessCat(business_cat_id);
                                 BusinessModel.setBusinessDetail($scope.businessList);
                                 $state.go("app.business_listing", {});
                             });

                                }
                                else {
                                  //  alert("address not found");
                                }
                            }
                            else {
                                alert("Can't Getting Your location");
                            }
                        }
                    );
                }
                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

             /*   var locate = "http://ipinfo.io/json";
                $http.get(locate).then(function (response) {
                    
                    $scope.location = response.data.city;


                    cityId = $scope.location;

                  //  var url = config.get_search_business_url + 'city=' + cityId + '&business_cat_id=' + business_cat_id;
                    var url = config.get_businessowner_url +business_cat_id+ '&city=' + cityId +'&lang='+lang;
                    console.log('business url :' + url);
                    $http.get(url)
                     .then(function (response) {

                         $scope.businessList = response.data.result;
                         BusinessModel.setbusinessCat(business_cat_id);
                         BusinessModel.setBusinessDetail($scope.businessList);
                         BusinessModel.setBusinessCity($scope.location);
                         $state.go("app.business_listing", {});
                     });
                });*/
                //$state.go("app.business_search", {});
            };
        });
    }])

   /* .factory('Business', function () {

           var temple = {};
           return {
               getTemple: function () {
                   return temple;
               },
               setTemple: function (templeParam) {
                   temple = templeParam;
               }
           };
       })*/

    // buiness search ctrl
    .controller('BusinessSearch', ['config', '$scope', '$http', '$state', '$stateParams', 'BusinessModel', '$localstorage', function (config, $scope, $http, $state, $stateParams, BusinessModel, $localstorage)
    {
        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            $scope.selectedCity = null;
            $scope.businessCat = BusinessModel.getbusinessCat();

            var getCountryUrl = config.get_country_url;

            $http.get(getCountryUrl)
        .then(function (response)
        {
            $scope.countryList = response.data.result;
        });

            $scope.getStates = function (countryId)
            {
                var get_state_url = config.get_state_url + countryId;
                $http.get(get_state_url)
    .then(function (response)
    {
        $scope.stateList = response.data.result;
    });
            }

            $scope.getcities = function (stateId)
            {
                var get_city_url = config.get_city_url + stateId;
                $http.get(get_city_url)
    .then(function (response)
    {
        $scope.cityList = response.data.result;


    });
            }

            $scope.setCity = function (cityId) {
                $scope.selectedCity = cityId;
            }

            $scope.openDetailPage = function () {

                //open business list page
                var url = config.get_businessowner_url + $scope.businessCat + '&city=' + $scope.selectedCity;
                $http.get(url)
         .then(function (response) {
             $scope.businessList = response.data.result;
             BusinessModel.setBusinessCity($scope.selectedCity);
             BusinessModel.setbusinessCat($scope.businessCat);
             BusinessModel.setBusinessDetail($scope.businessList);
             $state.go("app.business_listing", {});
         });

            };
        });
    }])
      
    .factory('Business', function () {

        var business = {};
        var packageId = '';
        var packageName = '';
        var packageamount = '';
           return {
               getBusiness: function () {
                   return business;
               },
               setBusiness: function (businessParam) {
                   business = businessParam;
               },
               setPackageId: function (pId)
               {
                   packageId = pId;
               },
               getPackageId: function ()
               {
                   return packageId;
               },
               setPackageAmt: function (amt) {
                   packageamount = amt;
               },
               getPackageAmt: function () {
                   return packageamount;
               },
               setPackage: function (packageName)
               {
                   this.packageName = packageName;
               },
               getPackage: function ()
               {
                  return this.packageName;
               }
           };
    })

    // businesslist ctrl
    .controller('BusinessListCntrl', ['config', '$scope', '$http', '$state', '$stateParams', 'BusinessModel', 'Business', '$ionicPopover', '$localstorage', function (config, $scope, $http, $state, $stateParams, BusinessModel, Business, $ionicPopover, $localstorage) {
        $scope.$on('$ionicView.enter', function () {


            var lang = $localstorage.get(config.LANGUAGE_NAME);

            $localstorage.internetConnection();
            (document.getElementById('pac-input-business-list-search')).value = "";
            $scope.$broadcast('angucomplete-alt:clearInput');
            $scope.data = {};
            $scope.errorMessage = '';
            $scope.errorTextVisible = false;
            $scope.noerror = false;

            $scope.businessList = BusinessModel.getBusinessDetail();
            $scope.businessCatId = BusinessModel.getbusinessCat();
            $scope.business = BusinessModel.getBusinessCategory();

            $scope.business = BusinessModel.getBusinessCategory();
            console.log($scope.businessCatId + "getBusinessCategory" + $scope.business);

            $scope.data.search = BusinessModel.getBusinessCity();
            //if ($scope.businesslist.length != 0) {
            //    $scope.businesscatid = $scope.businesslist[0].business_cat_id;
            //}
           
            $scope.getBusinessCategory = function (lang) {
                var getBusinessCategoriesUrl = config.get_business_category + 'lang =' + lang;


                $http.get(getBusinessCategoriesUrl)
            .then(function (response) {
                $scope.selected = {};
                $scope.businessCatList = response.data.result;


                var i = $scope.businessCatList.length;

                while (i--) {
                    if ($scope.businessCatList[i].business_category === $scope.business) {
                        //  $scope.defaultCountry = $scope.countryList[i];
                        console.log('business found');
                        $scope.$broadcast('angucomplete-alt:changeInput', 'ex2', $scope.businessCatList[i]);
                        break;
                    }
                }

            });
            }
            $scope.getBusinessCategory('en');


            $scope.disableTap = function () {
                var container = document.getElementsByClassName('pac-container');
                angular.element(container).attr('data-tap-disabled', 'true');
                var backdrop = document.getElementsByClassName('backdrop');
                angular.element(backdrop).attr('data-tap-disabled', 'true');
                angular.element(container).on("click", function () {
                    document.getElementById('pac-input-business-list-search').blur();
                });
            };

            $scope.input = (document.getElementById('pac-input-business-list-search'));

            // Create the autocomplete helper, and associate it with 
            // an HTML text input box. 

            var autocomplete = new google.maps.places.Autocomplete($scope.input);
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var places = autocomplete.getPlace();


                // (document.getElementById('pac-input-business-list-search')).value = "";

            }
            );

            autocomplete.setComponentRestrictions(
               { 'country': ['in'] });

            $scope.data.search = BusinessModel.getBusinessCity();
            if (angular.isUndefined($scope.businessList)) {
                $scope.errorMessage = 'Records not found';
                $scope.errorTextVisible = true;
                $scope.noerror = true;
            }
            else {
                $scope.errorMessage = '';
                $scope.errorTextVisible = false;
                $scope.noerror = false;
            }

            // Search business list
            var address = $scope.data.search;


            $scope.focusOut = function (selectedBusiness) {
                if (!angular.isDefined(selectedBusiness.originalObject.business_cat_id))
                    $scope.$broadcast('angucomplete-alt:clearInput');
            }

            $scope.searchList = function (cityname, business, bname) {

                try {
                    var businessmodel = $scope.selected;
                    $scope.businessList = {};

                    var add1 = autocomplete.getPlace();
                    var add = add1.name;

                    $scope.businessCatId = business.originalObject.business_cat_id;

                } catch (e) {
                    if (e.message == "Cannot read property 'originalObject' of undefined") {

                        $scope.errorTextVisible = true;
                        $scope.noerror = true;
                        $scope.errorMessage = "Please Select Business Category";
                        return;
                    }
                    if (e.message == "Cannot read property 'business_cat_id' of undefined") {

                        $scope.errorTextVisible = true;
                        $scope.noerror = true;
                        $scope.errorMessage = "Please Select Business Category";
                        return;
                    }
                }


                var parameter = 'city=' + add + '&business_cat_id=' + $scope.businessCatId;
                var get_search_business_url = config.get_search_business_url + parameter;
                var url = config.get_businessowner_url + $scope.businessCatId + '&city=' + add + '&lang=' + lang;
                $http.get(url).then(function (response) {

                    $scope.error_msg = response.data.error_msg;
                    $scope.message = response.data.message;

                    if ($scope.message === 'success') {
                        $scope.errorTextVisible = false;
                        $scope.noerror = false;
                        $scope.businessList = response.data.result;
                    }
                    else {
                        if ($scope.error_msg === 'Records not found') {
                            $scope.errorTextVisible = true;
                            $scope.noerror = true;
                            $scope.errorMessage = $scope.error_msg;
                        }
                    }

                });
            };


            $scope.openDetailPage = function (business) {

                BusinessModel.setbusinessCat($scope.businessCatId);
                BusinessModel.setBusinessDetail($scope.businessList);
                Business.setBusiness(business);
                $state.go("app.business_details", {});


            };

            $scope.openfilterPage = function () {

                BusinessModel.setbusinessCat($scope.businessCatId);
                $state.go("app.business_search", {});

            };

            $ionicPopover.fromTemplateUrl('templates/popover.html', function (popover) {
                $scope.popover = popover;
                popover.show(".ion-more");
            });

            $scope.demo = 'ios';
            $scope.setPlatform = function (p) {
                document.body.classList.remove('platform-ios');
                document.body.classList.remove('platform-android');
                document.body.classList.add('platform-' + p);
                $scope.demo = p;
            }


        });

        $scope.$on('$ionicView.leave', function () {
            // Anything you can think of
           // $scope.input.val('');
            $scope.input.focus();


        });
    }])

    // business details ctrl
    .controller('BusinessDetailCntrl', ['$ionicSlideBoxDelegate', 'config', '$scope', '$http', '$state', '$stateParams', 'BusinessModel', 'Business', '$cordovaSocialSharing', '$localstorage', function ($ionicSlideBoxDelegate, config, $scope, $http, $state, $stateParams, BusinessModel, Business, $cordovaSocialSharing, $localstorage) {
        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            $scope.upload_business_flag = false;

            $scope.navSlide = function (index) {
                $ionicSlideBoxDelegate.slide(index, 500);
            }

            $scope.business = Business.getBusiness();
          
            if ($scope.business.package_id == '3' || $scope.business.package_id == '4') {
                $scope.upload_business_flag = true;
            }
            $scope.imagelist = {};
            var bussiness_id = $scope.business.business_id;

            var url = config.get_image_list + bussiness_id;

            $http.get(url)
        .then(function (response) {
            $scope.imagelist

                = response.data.result;
            $ionicSlideBoxDelegate.update();
        });

            $scope.shareWhatsApp = function () {

                $cordovaSocialSharing
             .shareViaWhatsApp($scope.business.business_title + " " + $scope.business.business_owner_name + " " + $scope.business.business_description + " " + $scope.business.address + " " + $scope.business.contact_no, $scope.business.image, "https://drive.google.com/file/d/0BxjKI-HO4CNOUjNSNWpjaFZwZUk/view?usp=sharing")
             .then(function (result) {
                 // Success!
             },
             function (err) {

                 // An error occurred. Show a message to the user
             });



            }
            //share on twitter
            $scope.shareTwitter = function () {
                $cordovaSocialSharing
              .shareViaTwitter($scope.business.business_title + " " + $scope.business.business_owner_name + " " + $scope.business.business_description + " " + $scope.business.address + " " + $scope.business.contact_no, $scope.business.image, "https://drive.google.com/file/d/0BxjKI-HO4CNOUjNSNWpjaFZwZUk/view?usp=sharing")
              .then(function (result) {
                  // Success!
              }, function (err) {

                  // An error occurred. Show a message to the user
              });
            }
            //share on facebook
            $scope.shareFacebook = function () {
                $cordovaSocialSharing
              .shareViaFacebookWithPasteMessageHint($scope.business.business_title + " " + $scope.business.business_owner_name + " " + $scope.business.business_description + " " + $scope.business.address + " " + $scope.business.contact_no, $scope.business.image, "https://drive.google.com/file/d/0BxjKI-HO4CNOUjNSNWpjaFZwZUk/view?usp=sharing")
              .then(function (result) {
                  // Success!
              }, function (err) {

                  // An error occurred. Show a message to the user
              });
            }
            //share on email
            $scope.shareEmail = function () {
                $cordovaSocialSharing
              .shareViaEmail($scope.business.business_title + " " + $scope.business.business_owner_name + " " + $scope.business.business_description + " " + $scope.business.address + " " + $scope.business.contact_no, $scope.business.image, "https://drive.google.com/file/d/0BxjKI-HO4CNOUjNSNWpjaFZwZUk/view?usp=sharing")
              .then(function (result) {
                  // Success!
              }, function (err) {

                  // An error occurred. Show a message to the user
              });
            }
            // share on message
            $scope.shareTextSms = function () {
                $cordovaSocialSharing
              .shareViaSMS($scope.business.business_title + " " + $scope.business.business_owner_name + " " + $scope.business.business_description + " " + $scope.business.address + " " + $scope.business.contact_no, $scope.business.image, "https://drive.google.com/file/d/0BxjKI-HO4CNOUjNSNWpjaFZwZUk/view?usp=sharing")
              .then(function (result) {
                  // Success!
              }, function (err) {

                  // An error occurred. Show a message to the user
              });
            }
            $scope.shareVia = function () {
                $cordovaSocialSharing
         .canShareVia(socialType, $scope.business.business_title + " " + $scope.business.business_owner_name + " " + $scope.business.business_description + " " + $scope.business.address + " " + $scope.business.contact_no, $scope.business.image, "https://drive.google.com/file/d/0BxjKI-HO4CNOUjNSNWpjaFZwZUk/view?usp=sharing")
         .then(function (result) {
             // Success!
         }, function (err) {
             // An error occurred. Show a message to the user
         });
            }
        });
    }])

    //Add new business
    .controller('BusinessPackageCtrl', ['config', '$scope', '$http', '$state', '$stateParams', 'Business', '$localstorage', function (config, $scope, $http, $state, $stateParams, Business, $localstorage) {
        $localstorage.internetConnection();
         $scope.packageId = '';

         var lang = $localstorage.get(config.LANGUAGE_NAME);

         var getPackageUrl = config.get_business_package_url+'?lang='+lang;

         $http.get(getPackageUrl)
     .then(function (response) {
         $scope.packageList = response.data.result;
     });

       
         $scope.openAddBusinessPage = function (packageId,packageNAme,packagecost) {

             Business.setPackageId(packageId);
             Business.setPackage(packageNAme);
             Business.setPackageAmt(packagecost);
                 $state.go("app.business-information", {});
           
         };

    }])

       // add business ctrl
    .controller('AddBusinessCtrl', ['$translate', '$Utility', 'config', '$scope', '$http', '$state', '$stateParams', '$localstorage', 'Business', '$cordovaInAppBrowser', 'BusinessModel', function ($translate, $Utility, config, $scope, $http, $state, $stateParams, $localstorage, Business, $cordovaInAppBrowser, BusinessModel) {

        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            
            $scope.data = {};
            $scope.name = $localstorage.get(config.MEMBER_NAME);
            $scope.emailId = $localstorage.get(config.EMAIL_ID);
            $scope.memberId = $localstorage.get(config.MEMBER_ID);
            $scope.contact = $localstorage.get(config.CONTACT);
            $scope.data.contactNo = '';
            $scope.data.packageName = Business.getPackage();
            $scope.data.packId = Business.getPackageId();

            var lang = $localstorage.get(config.LANGUAGE_NAME);
            var amount = Business.getPackageAmt();

            $scope.data.personName = "";
            $scope.data.email = "";
            $scope.data.contactNo = "";
            $scope.data.businessName = "";
            $scope.selectedCity = null;
            $scope.data.countryId = "";
            $scope.data.cityId = "";
            $scope.data.stateId = "";
            $scope.data.address = "";
            $scope.data.product = "";
            $scope.data.businessCat = "";

            $scope.isDisabled = false;
            $scope.errorMessage = '';
            $scope.errorTextVisible = false;
            $scope.noerror = true;
            $scope.validCode = false;

            $scope.countrySelected = function (selected) {
                if (selected) {

                    $scope.getStates(selected.originalObject.country_id);
                    $scope.data.countryId = selected.originalObject.country_id

                } else {
                    console.log('cleared');
                }
            };
            $scope.stateSelected = function (selected) {
                if (selected) {
                    $scope.getcities(selected.originalObject.sid);

                    $scope.data.stateId = selected.originalObject.sid;

                } else {
                    console.log('cleared');
                }
            };
            $scope.citySelected = function (selected) {
                if (selected) {


                    $scope.data.cityId = selected.originalObject.city_id;
                } else {
                    console.log('cleared');
                }
            };

            var getCountryUrl = config.get_country_url;
            $http.get(getCountryUrl)
            .then(function (response) {

                $scope.countryList = response.data.result;

                var i = $scope.countryList.length;
                var defaultCountry = 'INDIA'
                while (i--) {
                    if ($scope.countryList[i].country_name.toUpperCase() === defaultCountry) {
                        //  $scope.defaultCountry = $scope.countryList[i];

                        $scope.$broadcast('angucomplete-alt:changeInput', 'bcountry', $scope.countryList[i]);
                        break;
                    }
                }
            });

            $scope.getStates = function (countryId) {

                var get_state_url = config.get_state_url + countryId;
                $http.get(get_state_url)
               .then(function (response) {
                   $scope.stateList = response.data.result;
                   if (angular.isDefined($scope.stateList)) {
                       //  $scope.defaultState = $scope.stateList[0];
                       $scope.changeInput('bstate');
                       $scope.getcities($scope.stateList[0].sid);
                   }
                   else {
                       $scope.clearInput('bstate');
                       $scope.clearInput('bcity');
                       $scope.data.stateId = '';
                       $scope.data.cityId = '';
                       $localstorage.showAlert("Oops!", "Selected Country does't have States");
                   }
               });
            }

            $scope.clearInput = function (id) {

                $scope.$broadcast('angucomplete-alt:clearInput', id);

            }

            $scope.changeInput = function (id) {
                if (id) {
                    if (id === 'bstate')
                        $scope.$broadcast('angucomplete-alt:changeInput', id, $scope.stateList[0]);
                    if (id === 'bcity')
                        $scope.$broadcast('angucomplete-alt:changeInput', id, $scope.cityList[0]);

                }
            }

            $scope.getcities = function (stateId) {

                var get_city_url = config.get_city_url + stateId;
                $http.get(get_city_url)
                .then(function (response) {
                    $scope.cityList = response.data.result;
                    if (angular.isDefined($scope.cityList)) {
                        //  $scope.defaultCity = $scope.cityList[0];
                        $scope.changeInput('bcity');
                        var name = $scope.name;
                        var emailId = $scope.emailId;
                    }

                });

            }
            $scope.getBusinessCategory = function () {
                var getBusinessCategoriesUrl = config.get_business_category;

                $http.get(getBusinessCategoriesUrl)
            .then(function (response) {
                $scope.businessCatList = response.data.result;
            });
            }

            $scope.getBusinessCategory();

            $scope.showAlert = function (title, message) {

                var alertPopup = $ionicPopup.alert({
                    title: title,
                    template: message
                });

                alertPopup.then(function (res) {
                    $state.go('app.playlists');
                });
            };
            console.log("reference code:"+$scope.data.refcode);
            $scope.checkReference = function () {
                if ($scope.data.refcode == '' || !angular.isDefined($scope.data.refcode)) {
                    $scope.data.refcode = "";
                     $scope.validCode = false;
                   
                }
                else {
                    var refenceUrl = config.check_reference_code + 'reference_code=' + $scope.data.refcode + '&lang=' + lang;

                    $http.get(refenceUrl)
                                    .then(function (response) {
                                        $scope.message = response.data.message;
                                        $scope.err_message = response.data.error_msg;

                                        if ($scope.message === 'success') {
                                            $scope.errorTextVisible = false;
                                            $scope.validCode = false;
                                            $scope.data.ValidMember = response.data.member_name;
                                        }
                                        else {
                                            $localstorage.showAlert('Oops', $scope.err_message);
                                            $scope.validCode = true;
                                        }
                                    });
                }
            }
            $scope.saveDetailsOnServer = function () {
                if ($scope.validCode) {
                    $scope.errorMessage = "Referral Code is invalid!";
                    $scope.errorTextVisible = true;

                }
                else {
                    var name = $localstorage.get(config.MEMBER_NAME);
                    var emailId = $localstorage.get(config.EMAIL_ID);
                    var memberId = $localstorage.get(config.MEMBER_ID);
                    var contact = $localstorage.get(config.CONTACT);
                    var amount = Business.getPackageAmt();


                    var parameter = 'reference_code=' + $scope.data.refcode + '&business_owner_name=' + $scope.data.personName + '&contact_no=' + $scope.data.contactNo + '&business_title=' + $scope.data.businessName + '&business_description=' + $scope.data.businessName + '&country=' + $scope.data.countryId + '&city=' + $scope.data.cityId + '&state=' + $scope.data.stateId + '&address=' + $scope.data.address + '&email_id=' + $scope.data.email + '&member_id=' + memberId + '&product1=' + $scope.data.product + '&business_cat_id=' + $scope.data.businessCat + '&package_id=' + $scope.data.packId;
                    var url = config.post_new_business_url + parameter;

                    if ($Utility.isEmptyOrNull($scope.data.personName) || $Utility.isEmptyOrNull($scope.data.contactNo) || $Utility.isEmptyOrNull($scope.data.businessName) || $Utility.isEmptyOrNull($scope.data.countryId) || $Utility.isEmptyOrNull($scope.data.cityId) || $Utility.isEmptyOrNull($scope.data.stateId) || $Utility.isEmptyOrNull($scope.data.address) || $Utility.isEmptyOrNull($scope.data.email) || $Utility.isEmptyOrNull($scope.data.product) || $Utility.isEmptyOrNull($scope.data.businessCat)) {
                        $scope.errorTextVisible = true;
                        $scope.noerror = true;
                        $translate(['Warning', 'SomeFields']).then(function (translations) {
                            $scope.headline = translations.Warning;
                            $scope.paragraph = translations.SomeFields;

                            $localstorage.showAlert($scope.headline, $scope.paragraph);

                        });
                        // $localstorage.showAlert('Warning', 'Some required fields are empty');
                    }
                    else {
                        $http.get(url)
                                     .then(function (response) {
                                         $scope.message = response.data.message;
                                         console.log("business response :"+JSON.stringify(response.data));
                                         if ($scope.message === 'success') {
                                             var businessId = response.data.data.last_inserted_id;

                                             $scope.isDisabled = true;
                                             $scope.errorTextVisible = false;
                                             $scope.noerror = false;

                                             $translate(['Welldone', 'Businessadded']).then(function (translations) {
                                                 $scope.headline = translations.Welldone;
                                                 $scope.paragraph = translations.Businessadded;

                                                 $localstorage.showAlert($scope.headline, $scope.paragraph);

                                             });


                                             //  $localstorage.showAlert('Welldone', 'Business is added successfully!');
                                             BusinessModel.setBusinessId(businessId);
                                             BusinessModel.setBusinessPackageAmt(amount);
                                             BusinessModel.setBusinessPurpose($scope.data.packageName);
                                             BusinessModel.setBusinessOwnerName($scope.data.personName);
                                             BusinessModel.setBusinessOwneremail($scope.data.email);
                                             BusinessModel.setBusinessOwnercontact($scope.data.contactNo);
                                             BusinessModel.setPaymentStatus('pending');

                                             $scope.data.personName = '';
                                             $scope.data.contactNo = '';
                                             $scope.data.businessName = '';
                                             $scope.data.address = '';
                                             $scope.data.email = '';
                                             $scope.data.product = '';
                                             $scope.data.businessCat = '';

                                             $state.go("app.business-image", {});
                                         }

                                         else {
                                             $scope.isDisabled = true;
                                             $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                                 $scope.headline = translations.Oops;
                                                 $scope.paragraph = translations.Somethingwentwrong;

                                                 $localstorage.showAlert($scope.headline, $scope.paragraph);

                                             });

                                             //  $localstorage.showAlert('Oops!', 'Something went wrong!');
                                         }


                                     });
                    }

                }
            }

        });
    }])

      //Add business image ctrl
    .controller('AddBusniessImageCtrl', ['$cordovaInAppBrowser', 'config', '$scope', '$http', '$state', '$stateParams', '$localstorage', '$ionicPopup', 'BusinessModel', function ($cordovaInAppBrowser, config, $scope, $http, $state, $stateParams, $localstorage, $ionicPopup, BusinessModel) {
        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            var purpose = BusinessModel.getBusinessPurpose();
            $scope.isVisible = false;
            var paymentStatus = BusinessModel.getPaymentStatus().toUpperCase();;

            if (BusinessModel.getPaymentStatus() != config.SUCCESS) {
                $scope.isVisible = true;
            }

            if (purpose == 'Regular' || purpose == 'Silver') {
                $scope.upload_business_flag = true;
            }


            $scope.makeAPayment = function () {



                $scope.memberId = $localstorage.get(config.MEMBER_ID);

                var amount = BusinessModel.getBusinessPackageAmt();
               
                var name = BusinessModel.getBusinessOwnerName();
                var emailId = BusinessModel.getBusinessOwneremail();
                var contactNo = BusinessModel.getBusinessOwnercontact();
                var businessId = BusinessModel.getBusinessId();

                var datalist = { amount: amount, memberId: $scope.memberId, purpose: purpose, name: name, email: emailId, contact: contactNo, business_id: businessId };
                console.log("make payment :" + datalist + " " + datalist.memberId);

                $http({
                    url: "http://nirjaraap.com/nirjara-pay/createRequest",
                    method: "GET",
                    params: datalist,
                }).then(function (res) {
                    try {
                        var url = res.data;
                    }
                    catch (e) { }
                    var options = {
                        location: 'yes',
                        clearcache: 'yes',
                        toolbar: 'no'
                    };
                    console.log("response : " + res.data);
                    $ref = $cordovaInAppBrowser.open(url, '_blank', options)

                    $scope.$on('$cordovaInAppBrowser:exit', function (e, event) {
                        $state.go("app.packages", {});
                    });

                });
            }
            $scope.uploadImage = function (imgNo) {

                $scope.upload_business_flag = true;
                $localstorage.set(config.upload_business_flag, $scope.upload_business_flag);
                $localstorage.set(config.upload_flag, false);

                $state.go("app.upload_image", {});

            }
        })
    }])

     // jain kids ctrl
    .controller('JainKidsCntrl', ['$scope', '$http', '$state', '$stateParams', '$localstorage', 'config', function ($scope, $http, $state, $stateParams, $localstorage, config) {

        $localstorage.internetConnection();
        var lang = $localstorage.get(config.LANGUAGE_NAME);

        var get_kids = 'http://nirjaraap.com/api/get_babynames.php?lang=' + lang;
        $http.get(get_kids)
    .then(function (response) {
        $scope.babyNameList = response.data.result;
        $scope.setFilter = function (filterValue) {
            $scope.filterBy = filterValue;
        };
    });


    }])

    // user_profile_controller
    .controller('UserProfileController', ['config', '$scope', '$http', '$state', '$stateParams', '$localstorage', '$ionicPopup', 'TapasviModel', function (config, $scope, $http, $state, $stateParams, $localstorage, $ionicPopup, TapasviModel) {

        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            var data = {};
            $scope.user = {};
            var memberId = $localstorage.get(config.MEMBER_ID);
            var selectedLanguage = $localstorage.get(config.LANGUAGE_NAME);
            var tapassya_id = $localstorage.get(config.tapassya_id);
            $scope.flag = $localstorage.get(config.tapassya_flag);
            $scope.tap_id = tapassya_id;
            $scope.editflag = false;
            if ($scope.flag == 'true') {
                var getUserProfile = config.get_user_profile + tapassya_id + '&lang=' + selectedLanguage;
                $scope.editflag = true;
                $localstorage.set(config.tapassya_flag, false);
               
            }
            else {
                var getUserProfile = config.get_user_profile + memberId + '&lang=' + selectedLanguage;
                $scope.editflag = false;
                
            }

            $scope.showTap = function()
            {
                TapasviModel.setTapasvi($scope.tap_id);
                $state.go("app.tapRecordOfTapasvi", {});
                $localstorage.set(config.tapassya_flag, true);
            }

            $scope.showKnowledge = function () {
                TapasviModel.setTapasvi($scope.tap_id);
                $state.go("app.knowledgeOfTapasvi", {});
                $localstorage.set(config.tapassya_flag, true);
            }

            $http.get(getUserProfile)
            .then(function (response) {
                $scope.user = response.data.result[0];

            });
        });

        $scope.OpenPosts = function () {
            $state.go("app.my_post_list", {});
           
        }



    }])

    //edit user profile
   .controller('EditProfileController', ['$translate', '$filter', '$cordovaCamera', '$Utility', 'config', '$scope', '$http', '$state', '$stateParams', '$localstorage', '$ionicPopup', function ($translate, $filter, $cordovaCamera, $Utility, config, $scope, $http, $state, $stateParams, $localstorage, $ionicPopup) {

       $scope.$on('$ionicView.enter', function () {
           console.log("EditProfileController :");
           var lang = $localstorage.get(config.LANGUAGE_NAME);
           $localstorage.internetConnection();
           var data = {};
           $scope.user = {};
           $scope.data = {};
           $scope.subGroupList = {};
           $scope.sampraday = {};
           $scope.updatedUpvasList = {};
           $scope.stateId = "";
           $scope.countryId = "";
           $scope.cityId = "";
           $scope.selectedMainGrou = {};
           $scope.selectedSubGroup = {};
           $scope.selectedGuru = {};
           $scope.MyValue = false;
           $scope.errorMessage = '';
           $scope.errorTextVisible = false;
           $scope.noerror = true;
           console.log('cleared');



           $scope.countrySelected = function (selected, defaultCountry) {
               if (selected) {

                   $scope.clearInput('cstate');
                   $scope.clearInput('ccity');
                   $scope.getStates(selected.originalObject.country_id);
                   $scope.data.countryId = selected.originalObject.country_id;

               } else {
                   console.log('cleared');
               }
           };
           $scope.stateSelected = function (selected, defaultState) {
               if (selected) {
                   $scope.getcities(selected.originalObject.sid);

                   $scope.data.stateId = selected.originalObject.sid;

               } else {
                   console.log('cleared');
               }
           };
           $scope.citySelected = function (selected, defaultCity) {
               if (selected) {


                   $scope.data.cityId = selected.originalObject.city_id;
               } else {
                   console.log('cleared');
               }
           };

           $scope.getcountry = function (countryId) {
               var getCountryUrl = config.get_country_url;
               $http.get(getCountryUrl)
               .then(function (response) {

                   console.log('country received');
                   $scope.countryList = response.data.result;

                   var i = $scope.countryList.length;


                   /*  if (!$scope.isEmptyOrNull(countryId))
                     {
                         while (i--) {
                             console.log('1country found!.Setting user country');
      
                             if ($scope.countryList[i].country_id === countryId || $scope.countryList[i].country_id == countryId) {
                                 //  $scope.defaultCountry = $scope.countryList[i];
                                 console.log('2country found!.Setting user country');
                                 $scope.userCid = $scope.countryList[i].country_id;
                                 $scope.$broadcast('angucomplete-alt:changeInput', 'ccountry', $scope.countryList[i]);
                                 break;
                             }
                         }
                     }
                     else {
                             while (i--) {
      
                                 var defaultCountry = 'INDIA';
                                 console.log('1country found!.Setting user country');
                                 if ($scope.countryList[i].country_name.toUpperCase() === defaultCountry) {
                                     //  $scope.defaultCountry = $scope.countryList[i];
                                    console.log('2country found!.Setting user country');
                                     $scope.$broadcast('angucomplete-alt:changeInput', 'ccountry', $scope.countryList[i]);
                                     break;
                                 }
                             }
                          }*/



               });
           }
           var getCountryUrl = config.get_country_url;
           $http.get(getCountryUrl)
           .then(function (response) {

               console.log('country received');
               $scope.countryList = response.data.result;

               var i = $scope.countryList.length;
               var defaultCountry = 'INDIA'
               while (i--) {
                   if ($scope.countryList[i].country_name.toUpperCase() === defaultCountry) {
                       //  $scope.defaultCountry = $scope.countryList[i];
                       console.log('country found');
                       $scope.$broadcast('angucomplete-alt:changeInput', 'ccountry', $scope.countryList[i]);
                       break;
                   }
               }
           });

           $scope.getStates = function (countryId) {

               var get_state_url = config.get_state_url + countryId;
               $http.get(get_state_url)
              .then(function (response) {
                  $scope.stateList = response.data.result;

              });
           }

           $scope.clearInput = function (id) {

               $scope.$broadcast('angucomplete-alt:clearInput', id);

           }

           $scope.changeInput = function (id) {
               if (id) {
                   if (id === 'cstate')
                       $scope.$broadcast('angucomplete-alt:changeInput', id, $scope.stateList[0]);
                   if (id === 'ccity')
                       $scope.$broadcast('angucomplete-alt:changeInput', id, $scope.cityList[0]);

               }
           }

           $scope.getcities = function (stateId) {

               var get_city_url = config.get_city_url + stateId;
               $http.get(get_city_url)
               .then(function (response) {
                   $scope.cityList = response.data.result;
                   if (angular.isDefined($scope.cityList)) {
                       //  $scope.defaultCity = $scope.cityList[0];
                       // $scope.changeInput('ccity');
                       var name = $scope.name;
                       var emailId = $scope.emailId;
                   }

               });

           }




           $scope.isEmptyOrNull = function (value) {
               return !value;
           }

           $scope.openCaptureImagePage = function () {

               $scope.upload_flag = false;
               $localstorage.set(config.UploadFlag, $scope.upload_flag);
               $localstorage.set(config.upload_business_flag, false);
               $state.go("app.upload_image", {});
           };

           $scope.takePicture = function () {
               var options = {
                   quality: 75,
                   destinationType: Camera.DestinationType.DATA_URL,
                   sourceType: Camera.PictureSourceType.CAMERA,
                   allowEdit: true,
                   encodingType: Camera.EncodingType.JPEG,
                   targetWidth: 500,
                   targetHeight: 500,
                   popoverOptions: CameraPopoverOptions,
                   saveToPhotoAlbum: false
               };

               $cordovaCamera.getPicture(options).then(function (imageData) {
                   $scope.imgURI = "data:image/jpeg;base64," + imageData;
               }, function (err) {
                   // An error occured. Show a message to the user
               });
           }


           var memberId = $localstorage.get(config.MEMBER_ID);

           var getUserProfile = config.get_user_profile + memberId + '&lang=' + lang;
           console.log("url :" + getUserProfile);
           $http.get(getUserProfile)
           .then(function (response) {
               console.log("response :" + response);
               $scope.user = response.data.result[0];

               var a = $scope.user.dob;

               var b = a.split('-');

               $scope.user.contact = parseInt($scope.user.contact);

               $scope.user.dob = new Date(b[2], b[1] - 1, b[0]);

               var x = $scope.user.anniversary;

               var y = x.split('-');

               $scope.user.anniversary = new Date(y[2], y[1] - 1, y[0]);

               console.log(response);
               //show user upvas
               var getAllUpvas = config.get_all_upvas + '?lang=' + lang;
               $http.get(getAllUpvas)
              .then(function (response) {
                  $scope.upvasList = response.data.result;
                  for (var i = 0; i < $scope.upvasList.length; i++) {
                      var flag = $scope.isChecked($scope.upvasList[i].tapassya_id);

                      $scope.upvasList[i].isChecked = flag;
                      if (flag) {
                          $scope.upvasList[i].isDisabled = true;
                      }
                      else
                          $scope.upvasList[i].isDisabled = false;
                  }

              });

               //set user main group
               var mainGroupId = $scope.user.main_group_id;

               if (!$scope.isEmptyOrNull(mainGroupId)) {

                   $scope.subGroupList = {};
                   $scope.guruList = {};
                   $scope.mainGroupList = {};

                   //get Sampraday
                   var getSampradayUrl = config.get_sampraday_url + "lang=" + lang;
                   $http.get(getSampradayUrl)
                   .then(function (response) {
                       $scope.mainGroupList = {};
                       $scope.mainGroupList = response.data.result;

                       //$scope.mainGroupList.filter(function (maingroup) {
                       //    if (maingroup.main_group_id === mainGroupId) {
                       //        $scope.selectedMainGroup = maingroup;

                       //        return maingroup.main_group_id === mainGroupId;

                       //    }
                       //    else
                       //    return maingroup.main_group_id === mainGroupId;
                       //})[0];

                       var i = $scope.mainGroupList.length;

                       while (i--) {
                           if (mainGroupId == $scope.mainGroupList[i].main_group_id) {
                               $scope.selectedMainGroup = $scope.mainGroupList[i];
                               break;
                           }
                       }


                       $scope.subGroupList = {};
                       for (var i = 0; i < $scope.mainGroupList.length; i++) {
                           var mainId = $scope.mainGroupList[i].main_group_id;
                           if (mainId === mainGroupId) {
                               $scope.subGroupList = $scope.mainGroupList[i].sub_group_data;
                               //   $scope.selectedSubGroup = $scope.subGroupList[0];
                               var i = $scope.subGroupList.length;

                               while (i--) {
                                   if ($scope.user.sub_group_id == $scope.subGroupList[i].sub_group_id) {
                                       $scope.selectedSubGroup = $scope.subGroupList[i];
                                       break;
                                   }
                               }
                               break;
                           }

                       }

                       //set user sub
                       var subGroupId = $scope.user.sub_group_id;
                       if (subGroupId != "") {
                           $scope.guruList = {};
                           var getguruList = config.get_guru_by_subGroupId + subGroupId + "lang=" + lang;;
                           $http.get(getguruList)
                           .then(function (response) {
                               $scope.guruList = response.data.result;
                               //   $scope.selectedGuru = $scope.guruList[0];
                               try {
                                   var i = $scope.guruList.length;

                                   while (i--) {
                                       if ($scope.user.guru_id == $scope.guruList[i].guru_id) {
                                           $scope.selectedGuru = $scope.guruList[i];
                                           break;
                                       }
                                   }
                               } catch (e)
                               {
                                   console.log("Exception:" + e.message);
                               }

                           });

                       }

                   });

               }
               else {

                   //get Sampraday
                   var getSampradayUrl = config.get_sampraday_url + "lang=" + lang;
                   $http.get(getSampradayUrl)
                   .then(function (response) {
                       $scope.mainGroupList = {};
                       console.log("default :" + response);
                       $scope.mainGroupList = response.data.result;


                   });
               }
               var countryId = $scope.user.country_id;
               $scope.getcountry(countryId);
               //set user state
               var countryId = $scope.user.country_id;


               var getCountryUrl = config.get_country_url;
               $http.get(getCountryUrl)
           .then(function (response) {

               $scope.countryList = {};
               $scope.countryList = response.data.result;

               var i = $scope.countryList.length;

               if (!$scope.isEmptyOrNull(countryId)) {
                   while (i--) {
                       console.log('1country found!.Setting user country');

                       if ($scope.countryList[i].country_id === countryId || $scope.countryList[i].country_id == countryId) {
                           //  $scope.defaultCountry = $scope.countryList[i];
                           console.log('2country found!.Setting user country');
                           $scope.userCid = $scope.countryList[i].country_id;
                           $scope.$broadcast('angucomplete-alt:changeInput', 'ccountry', $scope.countryList[i]);

                           var get_state_url = config.get_state_url + countryId;
                           console.log('country:' + countryId);
                           $http.get(get_state_url)
                          .then(function (response) {
                              $scope.stateList = {};
                              $scope.stateList = response.data.result;
                              var i = $scope.stateList.length;

                              while (i--) {
                                  if ($scope.user.state_id == $scope.stateList[i].sid) {
                                      console.log('state received');
                                      $scope.$broadcast('angucomplete-alt:changeInput', 'cstate', $scope.stateList[i]);
                                      break;
                                  }
                              }

                              //set user city
                              var stateId = $scope.user.state_id;
                              console.log('state:' + stateId);
                              if (stateId != "") {
                                  var get_city_url = config.get_city_url + stateId;
                                  $http.get(get_city_url)
                                  .then(function (response) {
                                      $scope.cityList = {};
                                      $scope.cityList = response.data.result;
                                      console.log('city received');
                                      var i = $scope.cityList.length;

                                      while (i--) {
                                          if ($scope.user.city_id == $scope.cityList[i].city_id) {
                                              $scope.$broadcast('angucomplete-alt:changeInput', 'ccity', $scope.cityList[i]);
                                              break;
                                          }
                                      }

                                  });
                              }


                          });

                           break;
                       }
                   }
               }
               else {
                   while (i--) {

                       var defaultCountry = 'INDIA';
                       console.log('1country found!.Setting default user country');
                       if ($scope.countryList[i].country_name.toUpperCase() === defaultCountry) {
                           //  $scope.defaultCountry = $scope.countryList[i];
                           console.log('2country found!. Setting default user country');
                           $scope.$broadcast('angucomplete-alt:changeInput', 'ccountry', $scope.countryList[i]);
                           break;
                       }
                   }
               }

           });





           });

           $scope.getUser = function () {
               return $scope.user;
           }

           //get Sampraday
           /* var getSampradayUrl = config.get_sampraday_url;
            $http.get(getSampradayUrl)
            .then(function (response) {
                $scope.mainGroupList = {};
                $scope.mainGroupList = response.data.result;
                $scope.selectedOption = $scope.mainGroupList[2];
    
            });*/

           //get all upvas

           $scope.isChecked = function (value) {
               var upvaschecked = false;
               var userdata = $scope.user;
               userdata = $scope.getUser();
               var len = userdata.tapassya_id;

               for (var i = 0; i < len.length; i++) {
                   var upvasId = userdata.tapassya_id[i].tapassya_id;
                   if (upvasId == value) {
                       upvaschecked = true;
                       return upvaschecked;
                   }
                   else {
                       upvaschecked = false;

                   }

               }
               return upvaschecked;

           }

           $scope.getSubGroup = function (mainGroupId) {

               $scope.subGroupList = {};
               for (var i = 0; i < $scope.mainGroupList.length; i++) {
                   var mainId = $scope.mainGroupList[i].main_group_id;
                   if (mainId === mainGroupId) {
                       $scope.subGroupList = $scope.mainGroupList[i].sub_group_data;
                       break;
                   }

               }
           }

           $scope.getGuruList = function (subGroupId) {
               $scope.guruList = {};
               var getguruList = config.get_guru_by_subGroupId + subGroupId + "lang=" + lang;;
               $http.get(getguruList)
               .then(function (response) {
                   $scope.guruList = response.data.result;
                   //   $scope.selectedGuru = $scope.guruList[0];

               });
           }


           $scope.saveDetailsOnServer = function (cityId, stateId, countryId, mainGroupId, subGroupId, guruId) {

               var name = $localstorage.get(config.MEMBER_NAME);
               var emailId = $localstorage.get(config.EMAIL_ID);
               var memberId = $localstorage.get(config.MEMBER_ID);
               var contact = $localstorage.get(config.CONTACT);
               var selectedLanguage = $localstorage.get(config.LANGUAGE_NAME);
               var userType = $localstorage.get(config.USER_TYPE);
               var tapassya_id = "";
               var upvas = "";


               for (var t = 0; t < $scope.upvasList.length; t++) {

                   if ($scope.upvasList[t].isChecked) {

                       upvas = upvas + $scope.upvasList[t].tapassya_id + ",";

                   }

               }

               upvas = upvas.replace(/,\s*$/, "");

               var todayDate = new Date();
               var d = $filter('date')(todayDate, "yyyy-MM-dd");
               var appDate = $filter('date')($scope.user.dob, "yyyy-MM-dd");
               var anniversaryDate = $filter('date')($scope.user.anniversary, "yyyy-MM-dd");
               var lang = $localstorage.get(config.LANGUAGE_NAME);
               var parameter = 'member_id=' + memberId + '&member_name=' + $scope.user.member_name + '&gender=' + $scope.user.gender + '&dob=' + appDate + '&member_city=' + $scope.data.cityId + '&country=' + $scope.data.countryId + '&state=' + $scope.data.stateId + '&member_type=' + userType + '&account_number=' + $scope.user.account_number + '&main_group=' + mainGroupId + '&sub_group=' + subGroupId + '&guru_name=' + guruId + '&tapassya_id=' + upvas + '&anniversary=' + anniversaryDate + '&fathers_name=' + $scope.user.fathers_name
                              + '&knowledge=' + $scope.user.knowledge + '&slogan=' + $scope.user.slogan + '&religion=' + $scope.user.religion + '&contact=' + $scope.user.contact + '&work=' + $scope.user.work + '&ifsc=' + $scope.user.ifsc + '&bank_name=' + $scope.user.bank_name + '&wife_name=' + $scope.user.wife_name + '&kids1_name=' + $scope.user.kids1_name + '&kids2_name=' + $scope.user.kids2_name + '&kids3_name=' + $scope.user.kids3_name + '&lang=' + lang;

               /*  var parameter = 'account_number=' + $scope.user.account_number + '&member_name=' + $scope.user.member_name + '&gender=' + $scope.user.gender + '&dob=' + appDate + '&member_city=' + cityId + '&country=' + countryId + '&state=' + stateId + '&email_id=' + emailId + '&member_id=' + memberId + "&tapassya_id=" + upvas + "&main_group=" + mainGroupId + "&sub_group=" + subGroupId + "&guru_name=" + guruId + '&contact=' + $scope.user.contact + '&fathers_name=' + $scope.user.fathers_name + '&mothers_name=' + $scope.user.mothers_name
                                  + '&wife_name=' + $scope.user.wife_name + '&kids1_name=' + $scope.user.kids1_name + '&kids2_name=' + $scope.user.kids2_name + '&kids3_name=' + $scope.user.kids3_name + '&knowledge=' + $scope.user.knowledge;*/
               var url = config.post_user_profile + parameter;
               if (appDate > d) {
                   $localstorage.showAlert("Enter valid birth date");
               }
               else {
                   if ($scope.user.religion === '' || $scope.user.member_name === '' || $scope.user.gender === '' || $scope.data.stateId === '' || $scope.data.cityId === '' || $scope.user.contact === '' || $scope.data.countryId === '') {
                       $scope.errorTextVisible = true;
                       $scope.noerror = true;

                       $translate(['Warning', 'SomeFields']).then(function (translations) {
                           $scope.headline = translations.Warning;
                           $scope.paragraph = translations.SomeFields;

                           $localstorage.showAlert($scope.headline, $scope.paragraph);

                       });
                       // $localstorage.showAlert('Warning', 'Some required fields are empty');

                   }

                   else {
                       $Utility.showProgressDialog("Updating your Profile....");
                       $http.get(url)
                       .then(function (response) {

                           $Utility.hideprogressDialog();

                           $scope.message = response.data.message;


                           if ($scope.message == "success") {

                               $scope.errorTextVisible = false;
                               $scope.noerror = true;

                               $scope.userNewData = {};
                               $scope.userNewData = response.data.data[0];

                               $localstorage.set(config.MEMBER_NAME, $scope.userNewData.member_name);

                               $localstorage.set(config.CITYID, cityId);
                               $localstorage.set(config.TEMP_CITY_ID, cityId);

                               $translate(['Welldone', 'ProfileUpdated']).then(function (translations) {
                                   $scope.headline = translations.Welldone;
                                   $scope.paragraph = translations.ProfileUpdated;

                                   $localstorage.showAlert($scope.headline, $scope.paragraph);

                               });

                               //      $localstorage.showAlert('Welldone', 'Your Profile Updated Successfully!');


                           }
                           else
                               $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                   $scope.headline = translations.Oops;
                                   $scope.paragraph = translations.Somethingwentwrong;

                                   $localstorage.showAlert($scope.headline, $scope.paragraph);

                               });

                           // $localstorage.showAlert('Oops!', 'Something Went Wrong!');

                       });
                   }
               }
           }
       });
   }])

    //Tapasvi sukh sata controller
     .controller('TapasviSukhSataCtrl', ['config', '$scope', '$http', '$state', '$stateParams', '$localstorage', '$cordovaClipboard', function (config, $scope, $http, $state, $stateParams, $localstorage, $cordovaClipboard) {
         $scope.$on('$ionicView.enter', function ()
         {
             $localstorage.internetConnection();
             $scope.selectedCity = null;
             $scope.liked = false;
             $scope.name = $localstorage.get(config.MEMBER_NAME);
             $scope.emailId = $localstorage.get(config.EMAIL_ID);
             $scope.memberId = $localstorage.get(config.MEMBER_ID);
             $scope.contact = $localstorage.get(config.CONTACT);
             var lang = $localstorage.get(config.LANGUAGE_NAME);

             /////////////
             $scope.copyText = function (value) {
                 $cordovaClipboard.copy(value).then(function () {
                     console.log("Copied text");
                 }, function () {
                     console.error("There was an error copying");
                 });
             }


            $scope.openExternalUrl = function (url) {
               window.open(url, '_system', 'location=yes');

                 }

             $scope.checkUserLikes = function (tid, index)

             {
                 var getLikes = config.get_likes_details + "tapasvi_id=" + tid;

                 $http.get(getLikes).then(function (res) {

                     $scope.error_msg = res.data.error_msg;
                     $scope.message = res.data.message;

                     if ($scope.message == 'success') {
                         $scope.errorTextVisible = false;
                         $scope.likesList = res.data.result;
                         $scope.tapasviList[index].liked = false;
                         for (var i = 0; i < res.data.result.length; i++) {
                             if (res.data.result[i].member_id === $scope.memberId) {
                                 $scope.tapasviList[index].liked = true;
                                 var k = index;
                                 break;

                             }

                         }
                     }

                     else {
                         $scope.errorTextVisible = true;
                         $scope.likesList = {};
                         $scope.errorMessage = res.data.error_msg;
                     }
                 });
             }

             var url = config.get_tapasvi_sukh_sata_url + '?lang=' + lang;
             $scope.callFunction = function () {
                 $http.get(url)
             .then(function (response) {

                 $scope.tapasviList = response.data.result;
                 for (var j = 0; j < $scope.tapasviList.length; j++)
                 {
                     if ($scope.tapasviList[j].main_group_name == 'Sthanakwasi')
                     {
                         $scope.tapasviList[j].sampraday_img = 'img/sthanakwasi.png';
                     }
                     if ($scope.tapasviList[j].main_group_name == 'Murtipujak')
                     {
                         $scope.tapasviList[j].sampraday_img = 'img/murtipujak.png';
                     }
                     if ($scope.tapasviList[j].main_group_name == 'Terapanthi')
                     {
                         $scope.tapasviList[j].sampraday_img = 'img/terapanthi.png';
                     }
                     if ($scope.tapasviList[j].main_group_name == 'Digambar')
                     {
                         $scope.tapasviList[j].sampraday_img = 'img/digambar.png';
                     }
                     if ($scope.tapasviList[j].main_group_name == '') 
                     {
                         $scope.tapasviList[j].sampraday_img = 'img/info_icon.png';
                     }
                     $scope.checkUserLikes($scope.tapasviList[j].tapasvi_id, j);

                 }
                 
             });
             }

             $scope.callFunction();

             $scope.openDetailPage = function (id) {
                 $localstorage.set(config.tapassya_id, id);
                 $localstorage.set(config.tapassya_flag, true);

                 $state.go("app.user_profile", {});

             };

             $scope.openCommentPage = function (id, tapassyaId) {
                 $localstorage.set(config.tapassya_id, id);
                 $localstorage.set(config.tap_id, tapassyaId);
                 $state.go("app.comments", {});

             };

             $scope.openLikes = function (id) {
                 $localstorage.set(config.tapassya_id, id);

                 $state.go("app.likes_detail", {});

             };

             //post likes
             $scope.postLikes = function (id, tapassya_id) {

                 var post_likes = config.post_tapasvi_likes + 'member_id=' + $scope.memberId + '&tapasvi_id=' + id + '&lang=' + lang + '&tapassya_id=' + tapassya_id;
                 console.log(post_likes);
                 $http.get(post_likes).then(function (res) {
                     console.log(res.data);
                     try {
                         $scope.data = res.data.error_msg;
                         if (res.data.message == 'success') {
                             var url = config.get_tapasvi_sukh_sata_url + '?lang=' + lang;
                             $http.get(url)
                         .then(function (response) {

                             $scope.tapasviList = response.data.result;
                             for (var j = 0; j < $scope.tapasviList.length; j++) {
                                 $scope.checkUserLikes($scope.tapasviList[j].tapasvi_id, j);
                             }

                         });
                         }
                     }
                     catch (e) {

                     }
                 })
             }

         })
     }])

    .factory('Gallerymodel', function () {

        var imagelist = {};
        return {
            getimagelist: function () {
                return imagelist;
            },
            setimagelist: function (imageparemeter) {
                imagelist = imageparemeter;
            }
        };
    })

    .factory('TapasviModel', function () {

        var tapasviId = '';
        return {
            getTapasvi: function () {
                return tapasviId;
            },
            setTapasvi: function (idparemeter) {
                tapasviId = idparemeter;
            }
        };
    })

 //home page cntrl
   .controller('HomePageCtrl', ['$interval', '$ionicPlatform', 'Gallerymodel', '$localstorage', 'config', '$scope', '$http', '$state', '$stateParams', 'BusinessModel', 'DailyNewsModel', '$cordovaSocialSharing', '$ionicPlatform', '$ionicHistory', '$ionicPopup', '$cordovaToast', '$translate', '$cordovaLocalNotification', function ($interval,$ionicPlatform, Gallerymodel, $localstorage, config, $scope, $http, $state, $stateParams, BusinessModel, DailyNewsModel, $cordovaSocialSharing, $ionicPlatform, $ionicHistory, $ionicPopup, $cordovaToast, $translate, $cordovaLocalNotification) {

       try {
           FCMPlugin.onTokenRefresh(function (token) {
               //Hom alert(token);
               var memberId = $localstorage.get(config.MEMBER_ID, '');
               var save_device_token_url = config.save_device_token_url;
               console.log(save_device_token_url);
               var datalist = { token: token, member_id: memberId };
               $http({
                   url: save_device_token_url,
                   method: "POST",
                   params: datalist
               }).then(function (response) {
                   $scope.res = response.data.message;
                   console.log($scope.res);
                   alert($scope.res);

               });
           });
           FCMPlugin.getToken(function (token) {
               //alert(token);
               var memberId = $localstorage.get(config.MEMBER_ID, '');
               var save_device_token_url = config.save_device_token_url;
               console.log(save_device_token_url);
               var datalist = { token: token, member_id: memberId };
               $http({
                   url: save_device_token_url,
                   method: "POST",
                   params: datalist
               }).then(function (response) {
                   $scope.res = response.data.message;
                   console.log($scope.res);

                

                   // Join BBM Meeting when user has clicked on the notification 
                   cordova.plugins.notification.local.on("click", function (notification) {
                       if (notification.id == 10) {
                           //joinMeeting(notification.data.meetingId);
                       }
                   });
                   // alert($scope.res);

               });
           });
           FCMPlugin.subscribeToTopic('sharawak');
           FCMPlugin.onNotification(function (data) {
               if (data.wasTapped) {
                   console.log('Notification was received on device tray and tapped by the user. ');
                   console.log(JSON.stringify(data));
                   console.log(data.param1);
               } else {
                   console.log('Notification was received on device tray and tapped by the user. ');
                   console.log(JSON.stringify(data));
                   console.log(data.param2);
               }
           });
       } catch (e)
       { }

       $scope.$on('$ionicView.enter', function () {
           $localstorage.internetConnection();

           $scope.add = function () {
               var alarmTime = new Date();
               alarmTime.setMinutes(alarmTime.getMinutes());
               console.log("testing notification" + alarmTime);
               cordova.plugins.notification.local.schedule({
                   id: '8989898989',
                   // title: pachkan + ' @ ' + pachkanTime,
                   title: 'Nirjara Alerts :',
                   message: 'message',
                   // firstAt and at properties must be an IETF-compliant RFC 2822 timestamp
                   
                  
                   color: "#FFDD30",


               });
              
           };
          // $scope.add();

           $ionicPlatform.ready(function () {
               console.log('ionic platform');
           });

           $scope.pachkanNoti = function () {

               var getUniqueId = function () {
                   return config.nextId++;
               }

               console.log('pachkan latlong :' + $scope.latitude + ',' + $scope.longitude);
               if ($scope.latitude != '' && $scope.longitude != '') {
                   var parameter = $scope.latitude + "," + $scope.longitude
                   var get_time_zone_url = config.autoselect + parameter;
                   $http({
                       url: get_time_zone_url,
                       method: "GET",

                   }).then(function (res) {
                       var result = res;

                       console.log(res);
                       var timeStamp = res.data.timeZoneId;
                       var datalist = { longitude: $scope.longitude, latitude: $scope.latitude, timezone: timeStamp, lang: 'en' };
                       console.log(config.varth_pachkan_notification_api + "longitude=" + $scope.longitude + "&latitude=" + $scope.latitude + "&timezone=" + timeStamp + "&lang=hi");
                       $http({
                           url: config.varth_pachkan_notification_api,
                           method: "GET",
                           params: datalist
                       }).then(function (response) {

                           $scope.error_msg = response.data.error_msg;
                           $scope.message = response.data.message;
                           console.log("message:" + $scope.message);

                           if ($scope.message === 'success') {
                               $scope.errorTextVisible = false;
                               $scope.noerror = false;
                               $scope.pachkanList = response.data.result;
                              
                               for (var i = 0; i < $scope.pachkanList.length; i++) {
                                   
                                   var pachkan = $scope.pachkanList[i].Title;
                                   var messagefield = $scope.pachkanList[i].note;
                                   var timefield = $scope.pachkanList[i].Time;
                                 //  console.log('pachkan Id :'+$scope.pachkanList[i].vrat_pachkan_id)
                                   if (($scope.pachkanList[i].vrat_pachkan_id==1 || $scope.pachkanList[i].vrat_pachkan_id==20 || $scope.pachkanList[i].vrat_pachkan_id== 3 || $scope.pachkanList[i].vrat_pachkan_id==21 || $scope.pachkanList[i].vrat_pachkan_id==2 || $scope.pachkanList[i].vrat_pachkan_id==7)) {
                                       var pachkanTime = $scope.pachkanList[i].notification_time;
                                       console.log(pachkan + "time:" + i + " " + pachkanTime);
                                       var time = pachkanTime.split(':');
                                       var hours = time[0];
                                       var min = time[1];
                                       var title = $scope.pachkanList[i].Title;
                                       console.log("spilt time:" + hours + " " + min);
                                       var today = new Date();
                                       var tomorrow = new Date();
                                       tomorrow.setDate(today.getDate());
                                       tomorrow.setHours(hours);
                                       tomorrow.setMinutes(min);
                                       tomorrow.setSeconds(0);
                                       var notificationTime = new Date(tomorrow);

                                       var today1 = new Date();
                                       today1.setDate(today.getDate());
                                       today1.setHours(today.getHours());
                                       today1.setMinutes(today.getMinutes());
                                       today1.setSeconds(today.getSeconds());

                                       if (notificationTime >= today1) {
                                           console.log("scheduled notification of" + title)
                                           cordova.plugins.notification.local.schedule({
                                               id: i,
                                               // title: pachkan + ' @ ' + pachkanTime,
                                               title: 'Nirjara Alerts :' + pachkan,
                                               message: messagefield,
                                               at: notificationTime, // firstAt and at properties must be an IETF-compliant RFC 2822 timestamp
                                               every: 'day', // this also could be minutes i.e. 25 (int)
                                              


                                           });
                                       }
                                   }
                               }
                           }
                           else {
                               if ($scope.error_msg === 'Records not found') {
                                   $scope.errorTextVisible = true;
                                   $scope.noerror = true;
                                   $scope.errorMessage = $scope.error_msg;
                               }
                           }
                       });

                   })
               }
           }

           //var time_status = $localstorage.get(config.time_status);

           document.addEventListener('deviceready', function () {
             
               function callAtInterval() {
                   console.log("in bACKGROUD");
                   $scope.pachkanNoti();
               }
               $interval(callAtInterval, 72000);
               // Called when background mode has been activated

           }, false);

           /* start advertisement marquee scrolling*/
           document.getElementById('allAdvmarquee').start();
           document.getElementById('cityAdvmarquee').start();

      
           var lang = $localstorage.get(config.LANGUAGE_NAME);
           var currentLang = $localstorage.get(config.LANGUAGE_NAME);
           try {
               cordova.plugins.diagnostic.isLocationEnabled(function (enabled) {
                   console.log("Location is " + (enabled ? "enabled" : "disabled"));
                   cordova.plugins.diagnostic.requestLocationAuthorization(function (status) {
                       switch (status) {
                           case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
                               console.log("Permission not requested");
                               break;
                           case cordova.plugins.diagnostic.permissionStatus.GRANTED:
                               console.log("Permission granted");
                               break;
                           case cordova.plugins.diagnostic.permissionStatus.DENIED:
                               console.log("Permission denied");
                               break;
                           case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
                               console.log("Permission permanently denied");
                               break;
                       }
                   }, function (error) {
                       console.error(error);
                   });

               }, function (error) {
                   console.error("The following error occurred: " + error);

               });
           } catch (e)
           { }

           $scope.memberId = $localstorage.get(config.MEMBER_ID, '');

           var locate = config.get_current_position + 'member_id=' + $scope.memberId;
           $http.get(locate).then(function (response) {

               var latitude = response.data.latitide;
               var longitude = response.data.longitude;

               $scope.latitude = latitude;
               $scope.longitude = longitude;

               var geocoder;
               geocoder = new google.maps.Geocoder();
               var latlng = new google.maps.LatLng(latitude, longitude);
               console.log("location value received" + longitude + ',' + latitude);;
               if (latitude != 'null' && longitude != 'null' && latitude != '' && longitude != '') {
                   geocoder.geocode(
                       { 'latLng': latlng },
                       function (results, status) {
                           if (status == google.maps.GeocoderStatus.OK) {
                               if (results[0]) {
                                   var add = results[0].formatted_address;

                                   var value = add.split(",");

                                   count = value.length;
                                   country = value[count - 1];
                                   state = value[count - 2];
                                   city = value[count - 3];
                                   $scope.currentLocation = city;
                                   cityId = city.trim();
                                   $scope.templeCity = cityId; //city name updated
                                   String.prototype.trim = function () {
                                       return this.replace(/^\s+|\s+$/g, '');
                                   };

                                   console.log("city name received:" + $scope.templeCity);;

                                   var lang = $localstorage.get(config.LANGUAGE_NAME);

                                   var get_location_wise_add = config.get_location_wise_add + 'location=' + $scope.templeCity;
                                   console.log("url:" + get_location_wise_add);;
                                   $http.get(get_location_wise_add).then(function (response) {

                                       $scope.error_msg = response.data.error_msg;
                                       $scope.message = response.data.message;

                                       if ($scope.message === 'success') {
                                           console.log("add recevied:");;
                                           $scope.errorTextVisible = false;
                                           $scope.noerror = false;
                                           $scope.currenCityAddList = response.data.result;
                                       }
                                       else {
                                           if ($scope.error_msg === 'No Advertisement Found') {
                                               $scope.errorTextVisible = true;
                                               $scope.noerror = true;
                                               $scope.errorMessage = $scope.error_msg;
                                           }
                                       }

                                   })

                               }
                               else {
                                   // alert("address not found");
                               }
                           }
                           else {
                               // alert("Geocoder failed due to: " + status);
                           }
                       }
                   );
               }


           });

       

           var memberId = $localstorage.get(config.MEMBER_ID);

           var getUserProfile = config.get_user_profile + memberId + '&lang=' + lang;
           console.log("url :" + getUserProfile);
           $http.get(getUserProfile)
           .then(function (response) {
               console.log("response :" + response);
               $scope.user = response.data.result[0];
           });

           document.addEventListener('deviceready', onDeviceReady, false);

           function onDeviceReady() {

               /**
               * This callback will be executed every time a geolocation is recorded in the background.
               */
               var callbackFn = function (location) {
                   console.log('home [js] BackgroundGeolocation callback:  ' + location.latitude + ',' + location.longitude);

                   config.GlobalLattitude = location.latitude;
                   config.GlobalLongitude = location.longitude;

                   $scope.memberId = $localstorage.get(config.MEMBER_ID);
                   var datalist = { member_id: $scope.memberId, latitude: location.latitude, longitude: location.longitude };
                   $scope.markers = [];

                   $http({
                       url: "http://nirjaraap.com/api/update_position.php",
                       method: "POST",
                       params: datalist
                   }).then(function (res) {
                       $scope.response = res.data;
                       console.log(res.data);
                       console.log(res.data.latitide);
                       console.log(res.data.longitude);
                   });
                   /*
                   IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
                   and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
                   IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
                   */
                   backgroundGeolocation.finish();
               };

               var failureFn = function (error) {
                   console.log('BackgroundGeolocation error');
               };

               // BackgroundGeolocation is highly configurable. See platform specific configuration options
               backgroundGeolocation.configure(callbackFn, failureFn, {
                   desiredAccuracy: 10,
                   stationaryRadius: 20,
                   distanceFilter: 30,
                   interval: 60000
               });

               // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
               backgroundGeolocation.start();

               // If you wish to turn OFF background-tracking, call the #stop method.
               // backgroundGeolocation.stop();
           }

           $scope.openDetails = function () {
               $state.go("app.details_popularity");
           }
           $scope.openImaagegallery = function (image) {

               var get_gallary_url = config.get_gallary_url;
               $http.get(get_gallary_url)
              .then(function (response) {


                  $scope.imagelist = response.data.result;

                  Gallerymodel.setimagelist($scope.imagelist);


                  $state.go("app.gallary_details");
              });

           }

           $scope.uploadImage = function () {

               $state.go("app.upload_gallery_image", {});
           }

           var usertype = $localstorage.get(config.USER_TYPE);


           $scope.data = {};
           $scope.guruisChecked = false;

           var guruid = $localstorage.get(config.MEMBER_ID);
           var usertype = $localstorage.get(config.USER_TYPE);


           $scope.gurutraking = false;

           if (usertype == 'Guru') {
               $scope.gurutraking = true;
           }
           else {
               $scope.gurutraking = false;
           }

           $scope.setNotificationStatus = function (statusvalue, keyValue) {
               if (statusvalue)
                   status = 'ON';
               else
                   status = 'OFF';

               var post_guru = config.guru_self_traking + 'guru_id=' + guruid + '&trace_status=' + status;

               $http.get(post_guru).then(function (res) {
                   console.log(res.data);
                   $scope.data = res.data.error_msg;
               })
           }

           var getGraphUrl = config.get_graph_values + "lang=" + lang;
           $http.get(getGraphUrl)
           .then(function (response) {
               $scope.followerList = {};
               $scope.labels = [];
               $scope.data1 = {};
               $scope.followerList = response.data.result.group_followers;
               $scope.series = ['Series A'];
               $scope.colours = ["#FF0000", "#00FF00", "#0000FF", "#00FFFF", "#FFFF00"];
               if (angular.isDefined($scope.followerList)) {
               for (var i = 0; i < $scope.followerList.length; i++) {
                   $scope.labels[i] = $scope.followerList[i].sub_group_name;

                   var tot = response.data.result.total_members;
                   var follower = $scope.followerList[i].num_of_follower;
                   var per = (follower / tot) * 100;
                   $scope.data1[i] = per;
               }

               for (var i = 0; i < 5; i++) {
                   if (!angular.isDefined($scope.labels[i])) {
                       $scope.labels[i] = "";
                   }
               }
               var horizontalBarChartData = {
                   labels: [$scope.labels[0], $scope.labels[1], $scope.labels[2], $scope.labels[3], $scope.labels[4]],
                   datasets: [{
                       backgroundColor: ["#FF0000", "#00FF00", "#0000FF", "#00FFFF", "#FFFF00"],
                       data: [$scope.data1[0], $scope.data1[1], $scope.data1[2], $scope.data1[3], $scope.data1[4]]
                   }]

               };
               var ctx = document.getElementById("bar").getContext("2d");
               var myHorizontalBar = new Chart(ctx, {
                   type: 'horizontalBar',
                   data: horizontalBarChartData,
                   options: {

                       scales: {
                           yAxes: [{
                               barThickness: 20,
                               ticks: {
                                   beginAtZero: true,
                                   mirror: true,
                                   display: false,
                               },
                           }],
                       },
                       responsive: true,
                       legend: {
                           display: false,
                       },
                       title: {
                           display: false,
                           text: 'Horizontal Bar Chart'
                       },
                       
                       animation: {
                           
                       }
                   }
               });
           }
           });

           $scope.openFollowerDetail = function () {
               $state.go("app.follower_graph_detail", {});
           }

           //Jain Population Graph
           var getGraphUrl = config.get_population_graph + "lang=" + lang;
           $http.get(getGraphUrl)
           .then(function (response) {
               $scope.stateList = {};
               $scope.labels = [];
               $scope.data1 = {};
               $scope.stateList = response.data.data;
               $scope.series = ['Series A'];
               $scope.colours = ["#FF0000", "#00FF00", "#0000FF", "#00FFFF", "#FFFF00"];
               for (var i = 0; i < $scope.stateList.length; i++) {
                   $scope.labels[i] = $scope.stateList[i].state;

                   var tot = $scope.stateList[i].count;
                   // var follower = $scope.stateList[i].num_of_follower;
                   // var per = (follower / tot) * 100;
                   $scope.data1[i] = tot;
               }

               for (var i = 0; i < 5; i++) {
                   if (!angular.isDefined($scope.labels[i])) {
                       $scope.labels[i] = "";
                   }
               }

               var horizontalBarChartData = {
                   labels: [$scope.labels[0], $scope.labels[1], $scope.labels[2], $scope.labels[3], $scope.labels[4]],
                   datasets: [{
                       backgroundColor: ["#FF0000", "#00FF00", "#0000FF", "#00FFFF", "#FFFF00"],
                       data: [$scope.data1[0], $scope.data1[1], $scope.data1[2], $scope.data1[3], $scope.data1[4]]
                   }]

               };
               var ctx = document.getElementById("bar1").getContext("2d");
               var myHorizontalBar = new Chart(ctx, {
                   type: 'horizontalBar',
                   data: horizontalBarChartData,
                   options: {

                       scales: {
                           yAxes: [{
                               barThickness: 20,
                               ticks: {
                                   beginAtZero: true,
                                   mirror: true,
                                   display: false,
                               },
                           }],
                       },
                       responsive: true,
                       legend: {
                           display: false,
                       },
                       title: {
                           display: false,
                           text: 'Horizontal Bar Chart'
                       },
                       animation: {
                           
                           
                       }
                   }
               });
           });

           // save device token to server
           $scope.data = {};

           $scope.TOP = "Top";
           $scope.BOTTOM = "Bottom";
           $scope.INNER_BOTTOM = "Inner Bottom";


           var business_cat = config.get_home_page_business_cat + '&lang=' + currentLang;

           $http.get(business_cat)
           .then(function (response) {
               $scope.businessCatList = response.data.result;
           });

           var get_advertisement = config.get_advertisement_url

           $http.get(get_advertisement)
           .then(function (response) {

               $scope.addnewList = response.data.result;

           });

          
           ///gallery
           var get_home_gallary = config.get_gallary_url;
           $http.get(get_home_gallary)
          .then(function (response) {

              $scope.imagelists = response.data.result;
              $scope.imagelist = {};
              for (var i = 0; i < $scope.imagelists.length; i++) {
                  if ($scope.imagelists[i].gallery_id === '67' || $scope.imagelists[i].gallery_id === '68' || $scope.imagelists[i].gallery_id === '69') {

                  }
                  else {
                      $scope.imagelist[i] = $scope.imagelists[i];
                  }
              }

          });

           $http.get("http://nirjaraap.com/api/get_homepage_news.php")
           .then(function (response) {

               $scope.dailyNewsList = response.data.result;

           });

           $scope.openExternalUrl = function (url) {
               window.open(url, '_system', 'location=yes');

           }

           $scope.openDetailPage = function (detailNews) {

               var url = config.get_business_category + 'lang=' + lang;

               $http.get(url)
             .then(function (response) {
                 $scope.businessCatList = response.data.result;
             });

               DailyNewsModel.setNews(detailNews);
               $state.go("app.page", { newsId: 1 });
           }

           //Business Category Click
           $scope.openBusinessPage = function (business_cat_id, business_category) {

       
               var geocoder;
               var latlng = new google.maps.LatLng($scope.latitude, $scope.longitude);
               geocoder = new google.maps.Geocoder();
               geocoder.geocode(
                        { 'latLng': latlng },
                        function (results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                if (results[0]) {
                                    var add = results[0].formatted_address;
                                    var value = add.split(",");

                                    count = value.length;
                                    country = value[count - 1];
                                    state = value[count - 2];
                                    city = value[count - 3];
                                    cityId = city.trim();
                                    $scope.businessCity = cityId; //city name updated
                                    String.prototype.trim = function () {
                                        return this.replace(/^\s+|\s+$/g, '');
                                    };

                                 
                                    // var url = config.get_search_business_url + 'city=' + cityId + '&business_cat_id=' + business_cat_id;
                                    var url = config.get_businessowner_url + business_cat_id + '&city=' + $scope.businessCity + '&lang=' + 'en';
                                    console.log("business url:" + url);
                                    $http.get(url)
                             .then(function (response) {

                                 $scope.businessList = response.data.result;
                                 BusinessModel.setBusinessCity($scope.businessCity);
                                 BusinessModel.setBusinessCategory(business_category);
                                 BusinessModel.setbusinessCat(business_cat_id);
                                 BusinessModel.setBusinessDetail($scope.businessList);
                                 $state.go("app.business_listing", {});
                             });

                                }
                                else {
                                    alert("address not found");
                                }
                            }
                            else {
                                alert("Geocoder failed due to: " + status);
                            }
                        }
                    );
               //BusinessModel.setbusinessCat(business_cat_id);
               //$state.go("app.business_search", {});

            

           }
           //News click
           $scope.openNewsDetailPage = function (detailNews) {

               DailyNewsModel.setNews(detailNews);
               $state.go("app.daily_new_detail_page");
           }

           // For exit on back button press
           $ionicPlatform.registerBackButtonAction(function (e) {
               if ($scope.backButtonPressedOnceToExit) {
                   navigator.app.exitApp(); // or // ionic.Platform.exitApp(); both work
               } else if ($ionicHistory.backView()) {
                   $ionicHistory.goBack();
               } else {
                   $scope.backButtonPressedOnceToExit = true;
                   $scope.showToast = function () {
                       $cordovaToast.show('Press back button again to exit', 'short', 'bottom').then(function (success) {
                           console.log("The toast was shown");
                       }, function (error) {
                           console.log("The toast was not shown due to " + error);
                       });

                   }
                   $scope.showToast();
                   // "Press back button again to exit" : show toast                
                   setTimeout(function () {
                       $scope.backButtonPressedOnceToExit = false;
                   }, 2000); // reset if user doesn't press back within 2 seconds, to fire exit
               }
               e.preventDefault();
               return false;
           }, 101);

           $scope.showAlert = function (title, message) {

               var alertPopup = $ionicPopup.alert({
                   title: title,
                   template: message
               });

               alertPopup.then(function (res) {
                 
               });
              
           };
           
           $scope.showpurchasePopup = function () {

               $translate(['Hurry', 'NewPurchaseNote']).then(function (translations) {
                   $scope.headline = translations.Hurry;
                   $scope.paragraph = translations.NewPurchaseNote;

                   $localstorage.showAlert($scope.headline, $scope.paragraph);
               });

           }
           //show popup
           $scope.showPopUp = function () {
               
                   $translate(['Hurry', 'hurryup']).then(function (translations) {
                       $scope.headline = translations.Hurry;
                       $scope.paragraph = translations.hurryup;

                       $localstorage.showAlert($scope.headline, $scope.paragraph);
                   });
                  
           }
       });

   }])

     //registration ctrl
    .controller('RegistrationCtrl', ['config', '$scope', '$http', '$state', '$stateParams', '$ionicPopup', '$localstorage', '$ionicLoading', function (config, $scope, $http, $state, $stateParams, $ionicPopup, $localstorage, $ionicLoading) {

        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            $scope.data = {};
            $scope.otpTextVisible = false;
            $scope.errorTextVisible = false;
            $scope.data.otp = '';
            $scope.otpInvalid = false;
            $scope.errorText = '';
            $scope.subGroupList = {};
            $scope.mainGroupList = {};
            $scope.isGuru = false;
            $scope.userType = "";
            $scope.selectedCity = null;
            $scope.data.countryId = "";
            $scope.data.cityId = "";
            $scope.data.stateId = "";
            $scope.localOtpText = "";
            var lang = $localstorage.get(config.LANGUAGE_NAME);

            $scope.countrySelected = function (selected) {
                if (selected) {

                    $scope.getStates(selected.originalObject.country_id);
                    $scope.data.countryId = selected.originalObject.country_id

                } else {
                    console.log('cleared');
                }
            };
            $scope.stateSelected = function (selected) {
                if (selected) {
                    $scope.getcities(selected.originalObject.sid);

                    $scope.data.stateId = selected.originalObject.sid;

                } else {
                    console.log('cleared');
                }
            };
            $scope.citySelected = function (selected) {
                if (selected) {


                    $scope.data.cityId = selected.originalObject.city_id;
                } else {
                    console.log('cleared');
                }
            };

            var getCountryUrl = config.get_country_url;
            $http.get(getCountryUrl)
            .then(function (response) {

                $scope.countryList = response.data.result;

                var i = $scope.countryList.length;
                var defaultCountry = 'INDIA'
                while (i--) {
                    if ($scope.countryList[i].country_name.toUpperCase() === defaultCountry) {
                        //  $scope.defaultCountry = $scope.countryList[i];

                        $scope.$broadcast('angucomplete-alt:changeInput', 'rcountry', $scope.countryList[i]);
                        break;
                    }
                }
            });

            $scope.getStates = function (countryId) {

                var get_state_url = config.get_state_url + countryId;
                $http.get(get_state_url)
               .then(function (response) {
                   $scope.stateList = response.data.result;
                   if (angular.isDefined($scope.stateList)) {
                       //  $scope.defaultState = $scope.stateList[0];
                       $scope.changeInput('rstate');
                       $scope.getcities($scope.stateList[0].sid);
                   }
                   else {
                       $scope.clearInput('rstate');
                       $scope.clearInput('rcity');
                       $scope.data.stateId = '';
                       $scope.data.cityId = '';
                       $localstorage.showAlert("Oops!", "Selected Country does't have States");
                   }
               });
            }

            $scope.clearInput = function (id) {

                $scope.$broadcast('angucomplete-alt:clearInput', id);

            }

            $scope.changeInput = function (id) {
                if (id) {
                    if (id === 'rstate')
                        $scope.$broadcast('angucomplete-alt:changeInput', id, $scope.stateList[0]);
                    if (id === 'rcity')
                        $scope.$broadcast('angucomplete-alt:changeInput', id, $scope.cityList[0]);

                }
            }

            $scope.getcities = function (stateId) {

                var get_city_url = config.get_city_url + stateId;
                $http.get(get_city_url)
                .then(function (response) {
                    $scope.cityList = response.data.result;
                    if (angular.isDefined($scope.cityList)) {
                        //  $scope.defaultCity = $scope.cityList[0];
                        $scope.changeInput('rcity');
                        var name = $scope.name;
                        var emailId = $scope.emailId;
                    }

                });

            }

            //get Sampraday
            var getSampradayUrl = config.get_sampraday_url + 'lang=' + lang;
            $http.get(getSampradayUrl)
            .then(function (response) {
                $scope.mainGroupList = {};
                $scope.mainGroupList = response.data.result;

            });

            $scope.isEmptyOrNull = function (value) {
                return !value;
            }

            $scope.getSubGroup = function (mainGroupId) {

                $scope.subGroupList = {};
                for (var i = 0; i < $scope.mainGroupList.length; i++) {
                    var mainId = $scope.mainGroupList[i].main_group_id;
                    if (mainId === mainGroupId) {
                        $scope.subGroupList = $scope.mainGroupList[i].sub_group_data;
                        break;
                    }

                }
            }


            

            $scope.showAlert = function (title, message) {

                var alertPopup = $ionicPopup.alert({
                    title: title,
                    template: message
                });

                alertPopup.then(function (res) {

                });
            };

            $scope.setIsGuruOrNot = function (userType) {

                if (userType == 'Guru')
                    $scope.isGuru = true;
                else
                    $scope.isGuru = false;
            };


            $scope.doRegistration = function (userType, mainGroupId, subGroupId) {

                $scope.errorTextVisible = false;
                $scope.show = function () {
                    $ionicLoading.show({
                        template: 'Loading...',
                        duration: 3000
                    }).then(function () {
                        console.log("The loading indicator is now displayed");
                    });
                };
                $scope.hide = function () {
                    $ionicLoading.hide().then(function () {
                        console.log("The loading indicator is now hidden");
                    });
                };
                $scope.show();


                var mobile = $scope.data.contact;
                var member_name = $scope.data.member_name;
                var username = $scope.data.username;
                //var lang = $scope.data.language;

                console.log("registration data:"+JSON.stringify($scope.data))

                if ($scope.isEmptyOrNull(member_name)) {
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_MEMBER_NAME;
                    return;
                }

                if ($scope.isEmptyOrNull(username)) {
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_USER_NAME;
                    return;
                }

                if ($scope.isEmptyOrNull(mobile)) {
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_NUMBER;
                    return;
                }
                if ($scope.data.male_members_below18 === '' || !angular.isDefined($scope.data.male_members_below18)) {
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_MEMBER;
                    return;
                }
                if ($scope.data.female_members_below18 === '' || !angular.isDefined($scope.data.female_members_below18)) {
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_MEMBER;
                    return;
                }
                if ($scope.data.male_members_18to25 === '' || !angular.isDefined($scope.data.male_members_18to25)) {
               
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_MEMBER;
                    return;
                }
                if ($scope.data.female_members_18to25 === '' || !angular.isDefined($scope.data.female_members_18to25)) {
              
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_MEMBER;
                    return;
                }
                if ($scope.data.male_members_25to40 === '' || !angular.isDefined($scope.data.male_members_25to40)) {
              
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_MEMBER;
                    return;
                }
                if ($scope.data.female_members_25to40 === '' || !angular.isDefined($scope.data.female_members_25to40)) {
            
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_MEMBER;
                    return;
                }
                if ($scope.data.male_members_40to60 === '' || !angular.isDefined($scope.data.male_members_40to60)) {
              
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_MEMBER;
                    return;
                }
                if ($scope.data.female_members_40to60 === '' || !angular.isDefined($scope.data.female_members_40to60)) {
              
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_NUMBER;
                    return;
                }
                if ($scope.data.male_members_above60 === '' || !angular.isDefined($scope.data.male_members_above60)) {
               
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_NUMBER;
                    return;
                }
                if ($scope.data.female_members_above60 === '' || !angular.isDefined($scope.data.female_members_above60)) {
               
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_NUMBER;
                    return;
                }
                if ($scope.isEmptyOrNull(userType)) {
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_MEMBER_TYPE;
                    return;
                }
                if (userType == "Guru") {
                    if ($scope.isEmptyOrNull(mainGroupId)) {
                        $scope.errorTextVisible = true;
                        $scope.errorText = config.PLEASE_SELECT_SAMPRADAY;
                        return;
                    }
                    if ($scope.isEmptyOrNull(subGroupId)) {
                        $scope.errorTextVisible = true;
                        $scope.errorText = config.PLEASE_SELECT_SUBGROUP;
                        return;
                    }
                }
              

                if (lang == 'English') {
                    lang = 'en';
                }
                if (lang == 'Hindi') {
                    lang = 'hi';
                }
                if (lang == 'Gujarathi') {
                    lang = 'gu';
                }

                console.log("selected lang:" + lang);
               

                var datalist = {
                    member_city :$scope.data.cityId,
                    state : $scope.data.stateId,
                    country: $scope.data.countryId,
                    member_name: $scope.data.member_name, username: $scope.data.username, contact: $scope.data.contact,
                    password: $scope.data.password,
                    male_members_below18: $scope.data.male_members_below18,
                    female_members_below18: $scope.data.female_members_below18,
                    male_members_18to25: $scope.data.male_members_18to25,
                    female_members_18to25: $scope.data.female_members_18to25,
                    male_members_25to40: $scope.data.male_members_25to40,
                    female_members_25to40: $scope.data.female_members_25to40,
                    male_members_40to60: $scope.data.male_members_40to60,
                    female_members_40to60: $scope.data.female_members_40to60,
                    male_members_above60: $scope.data.male_members_above60,
                    female_members_above60: $scope.data.female_members_above60,
                    member_type: userType, main_group: mainGroupId, sub_group: subGroupId, language: lang
                };

                console.log("registration data:"+datalist);
                $http({
                    url: config.post_registration_url,
                    method: "POST",
                    params: datalist
                }).then(function (res) {


                    $scope.hide();
                    $scope.response = res.data;
                    if ($scope.response.message === 'success') {
                       

                        $scope.otpTextVisible = false;
                        $scope.data = {};
                        $scope.errorTextVisible = false;
                        $scope.otpInvalid = false;
                        $localstorage.showAlert('Welcome', 'Your are Registered suceessful', 'login');


                    }
                    else {

                        $scope.otpInvalid = true;
                        $scope.errorTextVisible = true;
                        $scope.errorText = $scope.response.error_msg;
                        $scope.data.otp = '';
                    }


                });


            }

            $scope.openDetailPage = function (businessCategory) {


                $state.go("app.event_detail_page", {});
            };
        });
    }])

    // login ctrl
    .controller('LoginCntrl', ['$ionicPlatform', '$scope', '$http', '$state', '$localstorage', 'config', '$ionicLoading', '$translate', '$ionicHistory', '$ionicPopup', function ($ionicPlatform,$scope, $http, $state, $localstorage, config, $ionicLoading, $translate, $ionicHistory, $ionicPopup) {

        $scope.$on('$ionicView.enter', function () {

            $ionicPlatform.ready(function () {
                console.log('ionic platform');
            });
            $localstorage.internetConnection();
            $scope.data = {};
            $scope.isInvalidUser = false;
            $scope.errorMessage = '';
            $scope.response = {};

            $scope.curlang = $translate.use();
            $scope.changeLanguage = function (key) {
                $translate.use(key);
                $scope.curlang = key;

            }
            $scope.changeLanguage("en");
             
          /*  if ($localstorage.get(config.LANGUAGE_NAME) === 'language') {
               
                    $ionicPopup.alert({
                        title: 'Choose Language',
                        template: '<input type="radio" name = "group1" ng-model="choice" ng-value="en-US" ng-click="changeLanguage("en")">English</input>'
                         + '<input type="radio" name = "group1" ng-model="choice" ng-value="hi-IN" ng-click="changeLanguage("hi")">Hindi</input>' +
                         '<input type="radio" name = "group1" ng-model="choice" ng-value="hi-IN" ng-click="changeLanguage("gu")">Gujarati</input>'
                    });
                
            }
            else {
                $ionicPopup.alert({
                    title: 'Choose Language',
                    template: '<input type="radio" ng-model="choice" ng-value="en-US" ng-click="changeLanguage("en")">English</input>'
                       + '<input type="radio" ng-model="choice" ng-value="hi-IN" ng-click="changeLanguage("hi")">Hindi</input>' +
                       '<input type="radio" ng-model="choice" ng-value="hi-IN" ng-click="changeLanguage("gu")">Gujarati</input>'
                });
            } */

            //if user is logged already. then redirect it to homepage
            var memberId = $localstorage.get(config.MEMBER_ID, '');
            if (memberId != '') {

                //set app lang that user selected already

                var lang = $localstorage.get(config.LANGUAGE_NAME);

                $scope.changeLanguage(lang);
                $state.go('app.playlists');
                $ionicHistory.nextViewOptions({
                    disableBack: true
                });
            }

            $scope.show = function () {
                $ionicLoading.show({
                    template: 'Loading...',
                    duration: 3000
                }).then(function () {
                    console.log("The loading indicator is now displayed");
                });
            };
            $scope.hide = function () {
                $ionicLoading.hide().then(function () {
                    console.log("The loading indicator is now hidden");
                });
            };


            $scope.newRegistration = function () {
                var lang = $localstorage.get(config.LANGUAGE_NAME, '');
                if (lang === '') {
                    $state.go('language_register');
                }
                else
                $state.go('register');
            }
            $scope.openForgetPwdPage = function () {
                $state.go('forgot-password');
            }
            $scope.submit = function () {
                $scope.show();

                $scope.parameter = "username=" + $scope.data.username + "&password=" + $scope.data.password;
                var url = config.new_user_login_url + $scope.parameter;
                $http.get(url)
                .then(function (response) {
                    $scope.hide();
                    $scope.response = response.data.result;
                    $scope.responseMessage = response.data.message;
                    $scope.errorMessage = response.data.error_msg;

                    if ($scope.responseMessage === 'fail') {

                        $scope.errorMessage = $scope.errorMessage;
                        $scope.isInvalidUser = true;

                    }
                    else {
                        $scope.data = {};

                        $scope.isInvalidUser = false;
                        $scope.errorMessage = '';
                        $scope.data.username = '';
                        $scope.data.password = '';
                        var userDetail = $scope.response[0];
                        var memberName = userDetail.member_name;
                        $localstorage.set(config.MEMBER_NAME, memberName);
                        var memberId = userDetail.member_id;
                        $localstorage.set(config.MEMBER_ID, memberId);
                        var emailId = userDetail.email_id;
                        $localstorage.set(config.EMAIL_ID, emailId);
                        var contact = userDetail.contact;
                        $localstorage.set(config.CONTACT, contact);;
                        $localstorage.set('user', userDetail);
                        var cityId = userDetail.city_id;
                        $localstorage.set(config.CITYID, cityId);
                        $localstorage.set(config.TEMP_CITY_ID, cityId);
                        var cityName = userDetail.city_name;
                        $localstorage.set(config.CITY_NAME, cityName);
                        var stateId = userDetail.state_id;
                        $localstorage.set(config.STATEID, stateId);
                        var state = userDetail.state;
                        $localstorage.set(config.STATE_NAME, state);
                        var countryId = userDetail.country_id;
                        $localstorage.set(config.COUNTRYID, countryId);
                        var countryName = userDetail.country_name;
                        $localstorage.set(config.COUNTRY_NAME, countryName);
                        var userType = userDetail.member_type;
                        $localstorage.set(config.USER_TYPE, userType);

                        try {
                            var languageName = userDetail.language;
                            $localstorage.set(config.LANGUAGE_NAME, languageName);
                            if (languageName == 'gt') {
                                languageName = 'gu';

                            }
                        } catch (e) {
                            languageName = 'en';

                        }
                        $scope.changeLanguage(languageName);

                        $state.go('app.playlists');
                    }


                });

            }
            $scope.openDetailPage = function (detailNews) {

                //  DailyNewsModel.setNews(detailNews);
                //   $state.go("app.page", {newsId:1});
            }


        });
        document.addEventListener('deviceready', onDeviceReady, false);

        function onDeviceReady() {

            /**
            * This callback will be executed every time a geolocation is recorded in the background.
            */
            var callbackFn = function (location) {
                console.log('[js] BackgroundGeolocation callback:  ' + location.latitude + ',' + location.longitude);

                $scope.memberId = $localstorage.get(config.MEMBER_ID);
                var datalist = { member_id: $scope.memberId, latitude: location.latitude, longitude: location.longitude };
                $scope.markers = [];

                /*
                IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
                and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
                IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
                */
                backgroundGeolocation.finish();
            };

            var failureFn = function (error) {
                console.log('BackgroundGeolocation error');
            };

            // BackgroundGeolocation is highly configurable. See platform specific configuration options
            backgroundGeolocation.configure(callbackFn, failureFn, {
                desiredAccuracy: 10,
                stationaryRadius: 20,
                distanceFilter: 30,
                interval: 60000
            });

            // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
            backgroundGeolocation.start();

            // If you wish to turn OFF background-tracking, call the #stop method.
            // backgroundGeolocation.stop();
        }


    }])

     //Forgot Password 
    .controller('ForgotPwdCtrl', ['$scope', '$ionicHistory','$http', '$state', '$localstorage', 'config', '$ionicLoading', function ($scope,$ionicHistory, $http, $state, $localstorage, config, $ionicLoading) {

       
        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
             $scope.data = {};
             $scope.isInvalidUser = false;
             $scope.errorMessage = '';
             $scope.response = {};
             $scope.noerror = false;
             $scope.localPwd = '';
             $scope.otpTextVisible = false;

             $scope.goBack = function () {
                 $ionicHistory.goBack();
             }
             $scope.show = function (message) {
                 $ionicLoading.show({
                     template: message,
                     duration: 3000
                 }).then(function () {
                     console.log("The loading indicator is now displayed");
                 });
             };
             $scope.hide = function () {
                 $ionicLoading.hide().then(function () {
                     console.log("The loading indicator is now hidden");
                 });
             };

             $scope.showAlert = function (title, message) {

                 var alertPopup = $ionicPopup.alert({
                     title: title,
                     template: message
                 });

                 alertPopup.then(function (res) {

                 });
             }

             $scope.submit = function () {
                 $scope.show('Loading...');
                 if ($scope.otpTextVisible === false) {
                   
                     $scope.parameter = "username=" + $scope.data.username + "&contact=" + $scope.data.contact;
                     var url = config.forgot_password_url + $scope.parameter;
                     $http.get(url)
                     .then(function (response) {
                         $scope.hide();
                         $scope.response = response.data.result;
                         $scope.responseMessage = response.data.message;
                         $scope.errorMessage = response.data.error_msg;

                         if ($scope.responseMessage === 'success') {

                             //save password to local variable
                             $scope.localOtpText = response.data.data;
                             $scope.data.otp = $scope.localOtpText;
                             $localstorage.showAlert('Success', $scope.errorMessage);
                             $scope.otpTextVisible = true;
                             $scope.isInvalidUser = false;
                             $scope.noerror = false;

                         }
                         else {
                             $scope.data = {};
                             $scope.otpTextVisible = false;
                             $scope.isInvalidUser = true;
                             $scope.errorMessage = response.data.error_msg;
                             $scope.data.username = '';
                             $scope.data.password = '';
                             $scope.noerror = true;
                         }


                     });
                 }
                 else {
                       $scope.hide();
                     if ($scope.localOtpText == $scope.data.otp) {
                     
                         $state.go('login');
                     }
                     else {
                         $scope.otpTextVisible = true;
                         $scope.errorMessage = config.INVALID_OTP;
                         $scope.noerror = true;
                         $scope.isInvalidUser = true;
                     }

                 }
             }

             $scope.openDetailPage = function (detailNews) {

                 //  DailyNewsModel.setNews(detailNews);
                 //   $state.go("app.page", {newsId:1});
             }


         });

    }])

    .factory('getDataService', function ($http) {
      

        return {
            getUsers: function (url) {
                return $http.get(url).then(function (response) {
                    
                 return response.data.result;
                  
                });
            }
        }
    })

    //Holiday-international
    .controller('HolidayPurchaseCtrl', ['$translate', '$filter', '$scope', '$http', '$state', '$stateParams', 'config', '$localstorage', '$ionicPopup', function ($translate,$filter, $scope, $http, $state, $stateParams, config, $localstorage, $ionicPopup) {

        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            var contact = $localstorage.get(config.CONTACT);
            $scope.data = {};
            $scope.data.destinationId = '';
            $scope.data.whenDate = '';
            $scope.data.howManyPeople = '';
            $scope.data.noOfDays = '';
            $scope.data.foodType = '';
            $scope.errorMessage = '';
            $scope.errorTextVisible = false;
            $scope.noerror = true;

            $scope.userDetail = $localstorage.getObject(config.TAPASVI);

            var url = config.get_holiday_destination;
            $http.get(url)
           .then(function (response) {
               $scope.destinationList = response.data.result;

           });

            $scope.showAlert = function (title, message) {

                var alertPopup = $ionicPopup.alert({
                    title: title,
                    template: message
                });

                alertPopup.then(function (res) {
                    $state.go('app.playlists');
                });
            };
            $scope.saveDetailsOnServer = function () {

                var name = $localstorage.get(config.MEMBER_NAME);
                var emailId = $localstorage.get(config.EMAIL_ID);
                var memberId = $localstorage.get(config.MEMBER_ID);
                var contact = $localstorage.get(config.CONTACT);
                var appDate = $filter('date')($scope.data.whenDate, "yyyy-MM-dd");
                var parameter = 'destination_id=' + $scope.data.destinationId + '&when=' + appDate + '&how_many_people=' + $scope.data.howManyPeople + '&no_of_days=' + $scope.data.noOfDays + '&food_preference=' + $scope.data.foodType + '&member_name=' + name + '&member_id=' + memberId + '&email_id=' + emailId;
                var url = config.post_holiday_url + parameter;

                if ($scope.data.destinationId === '' || $scope.data.whenDate === '' || $scope.data.howManyPeople === '' || $scope.data.noOfDays === '' || $scope.data.foodType === '') {
                    $scope.errorTextVisible = true;
                    $scope.noerror = true;

                    $translate(['Warning', 'Somethingwentwrong']).then(function (translations) {
                        $scope.headline = translations.Warning;
                        $scope.paragraph = translations.Somethingwentwrong;

                        $localstorage.showAlert($scope.headline, $scope.paragraph);

                         });

                  //  $localstorage.showAlert('Warning', 'Some required fields are empty');
                }
                else {
                    $http.get(url)
                    .then(function (response) {
                        $scope.message = response.data.message;
                        $scope.errorTextVisible = false;
                        $scope.noerror = false;

                        $scope.data.destinationId = '';
                        $scope.data.whenDate = '';
                        $scope.data.howManyPeople = '';
                        $scope.data.noOfDays = '';
                        $scope.data.foodType = '';
                        if ($scope.message === 'success')
                            
                            $translate(['Welldone', 'YourEnquiry']).then(function (translations) {
                                $scope.headline = translations.Welldone;
                                $scope.paragraph = translations.YourEnquiry;

                                $localstorage.showAlert($scope.headline, $scope.paragraph);

                            });
                           // $localstorage.showAlert('Welldone', 'Your Enquiry Sent Successfully!');
                        else
                            $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                $scope.headline = translations.Oops;
                                $scope.paragraph = translations.Somethingwentwrong;

                                $localstorage.showAlert($scope.headline, $scope.paragraph);

                            });

                           // $localstorage.showAlert('Oops!', 'Something Went Wrong!');

                    });
                }
            }
        })
    }])

    //Special Offer Model
     .factory('SpecialOfferModel', function () {

         var offer = {};
         return {
             getOffer: function () {
                 return offer;
             },
             setOffer: function (offerParam) {
                 offer = offerParam;
             }
         };
     })

    //Special -offer
    .controller('SpecialOffereListCtrl', ['config', '$scope', '$http', '$state', '$stateParams', 'SpecialOfferModel', function (config, $scope, $http, $state, $stateParams, SpecialOfferModel) {
        $localstorage.internetConnection();
        $http.get(config.get_special_offer)
       .then(function (response) {

           $scope.specialOfferList = response.data.result;

       });

        $scope.openDetailPage = function (offer) {

            SpecialOfferModel.setOffer(offer);

            $state.go("app.offer-details", {});


        };

    }])

    //Special offer Detail page
     .controller('specialOfferDetailsCtrl', ['$translate', 'config', '$scope', '$state', '$stateParams', 'SpecialOfferModel', '$localstorage', '$ionicPopup', '$http', function ($translate,config, $scope, $state, $stateParams, SpecialOfferModel, $localstorage, $ionicPopup, $http) {
         $localstorage.internetConnection();
         $scope.specialOffer = SpecialOfferModel.getOffer();
         $scope.isDisabled = false;
         var offerId = $scope.specialOffer.special_offer_id;
         $scope.message = '';
         $scope.showAlert = function (title,message) {

             var alertPopup = $ionicPopup.alert({
                 title: title,
                 template:message 
             });

             alertPopup.then(function (res) {
                 
             });
         }

         $scope.saveDetailsOnServer = function () {

             var name = $localstorage.get(config.MEMBER_NAME);
             var emailId = $localstorage.get(config.EMAIL_ID);
             var memberId = $localstorage.get(config.MEMBER_ID);
             var contact = $localstorage.get(config.CONTACT);
             var parameter = 'special_offer_id=' + offerId + '&member_id=' + memberId + '&contact_no=' + contact + '&email_id=' + emailId + '&message= Done&member_name=' + name;
             var url = config.post_offer_url + parameter;
             $http.get(url)
             .then(function (response) {
                 $scope.message = response.data.message;
                
                 if ($scope.message === 'success') {

                     $scope.isDisabled = true;

                     $translate(['Welldone', 'YourResponse']).then(function (translations) {
                         $scope.headline = translations.Welldone;
                         $scope.paragraph = translations.YourResponse;

                         $localstorage.showAlert($scope.headline, $scope.paragraph);

                     });
                    /// $localstorage.showAlert('Welldone', 'Your Response Sent Successfully!');
                 }
                 else {
                     $scope.isDisabled = false;
                     $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                         $scope.headline = translations.Oops;
                         $scope.paragraph = translations.Somethingwentwrong;

                         $localstorage.showAlert($scope.headline, $scope.paragraph);

                     });

                    // $localstorage.showAlert('Oops!', 'Something Went Wrong!');
                 }
             });

         }


     }])

      //Mobile-Purchase controller
    .controller('MobilePurchaseCtrl', ['$translate','$filter', '$scope', '$http', '$state', '$stateParams', 'config', '$localstorage', '$ionicPopup', function ($translate,$filter,$scope, $http, $state, $stateParams, config, $localstorage, $ionicPopup) {

        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            var contact = $localstorage.get(config.CONTACT);
            $scope.data = {};
            $scope.data.mobileNo = '';
            $scope.data.brandId = '';
            $scope.data.modelId = '';
            $scope.data.fromDate = '';
            $scope.data.toDate = '';
            $scope.data.cityName = '';
            $scope.errorMessage = '';
            $scope.errorTextVisible = false;
            $scope.noerror = true;
            $scope.isDisabled = false;
            $scope.userDetail = $localstorage.getObject(config.TAPASVI);

            var lang = $localstorage.get(config.LANGUAGE_NAME);

            var url = config.get_mobile_brand;
            $http.get(url)
           .then(function (response) {
               $scope.mobileBrandList = response.data.result;

           });

            $scope.getModelList = function (brandId) {

                var get_model = config.get_mobile_model + 'mobile_brand_id=' + brandId + '&lang=' +lang;
                $http.get(get_model)
                .then(function (response) {
                    $scope.mobileModelList = response.data.result;

                });
            }

            $scope.showAlert = function (title, message) {

                var alertPopup = $ionicPopup.alert({
                    title: title,
                    template: message
                });

                alertPopup.then(function (res) {

                });
            };
            $scope.saveDetailsOnServer = function () {


                var name = $localstorage.get(config.MEMBER_NAME);
                var emailId = $localstorage.get(config.EMAIL_ID);
                var memberId = $localstorage.get(config.MEMBER_ID);
                var contact = $localstorage.get(config.CONTACT);

                var from = $filter('date')($scope.data.fromDate, "yyyy-MM-dd");
                var to = $filter('date')($scope.data.toDate, "yyyy-MM-dd");

                var parameter = 'mobile_brand=' + $scope.data.brandId + '&mobile_model=' + $scope.data.modelId + '&member_id=' + memberId + '&contact_no=' + $scope.data.mobileNo + '&email_id=' + emailId + '&from_date=' + from + '&to_date=' + to + '&city=' + $scope.data.cityName + '&message= Done&member_name=' + name;
                var url = config.post_mobile_url + parameter;

                if ($scope.data.modelId === '' || $scope.data.brandId === '' || $scope.data.fromDate === '' || $scope.data.toDate === '' || $scope.data.cityName === '' || $scope.data.mobileNo === '') 
                {
                    $scope.errorTextVisible = true;
                    $scope.noerror = true;
                    $translate(['Warning', 'SomeFields']).then(function (translations) {
                        $scope.headline = translations.Warning;
                        $scope.paragraph = translations.SomeFields;

                        $localstorage.showAlert($scope.headline, $scope.paragraph);

                    });

                    //$localstorage.showAlert('Warning', 'Some required fields are empty');
                }
                else {
                    $http.get(url)
                    .then(function (response) {
                        $scope.message = response.data.message;

                        if ($scope.message === 'success') {
                            $scope.isDisabled = true;
                            $scope.errorTextVisible = false;
                            $scope.noerror = false;

                            $scope.data.brandId = '';
                            $scope.data.modelId = '';
                            $scope.data.cityName = '';
                            $scope.data.fromDate = '';
                            $scope.data.toDate = '';
                            $scope.data.mobileNo = '';

                            $translate(['Welldone', 'YourEnquiry']).then(function (translations) {
                                $scope.headline = translations.Welldone;
                                $scope.paragraph = translations.YourEnquiry;

                                $localstorage.showAlert($scope.headline, $scope.paragraph);

                            });
                          //  $localstorage.showAlert('Welldone', 'Your Enquiry has been sent successfully!');
                        }

                        else {
                            $scope.isDisabled = true;
                            $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                $scope.headline = translations.Oops;
                                $scope.paragraph = translations.Somethingwentwrong;

                                $localstorage.showAlert($scope.headline, $scope.paragraph);

                            });

                            //$localstorage.showAlert('Oops!', 'something went wrong!');
                        }


                    });
                }
            }
        })
    }])

     //iPad-Purchase controller
    .controller('iPadPurchaseCtrl', ['$translate','$filter', '$scope', '$http', '$state', '$stateParams', 'config', '$localstorage', '$ionicPopup', function ($translate,$filter,$scope, $http, $state, $stateParams, config, $localstorage, $ionicPopup) {
        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            var contact = $localstorage.get(config.CONTACT);
            $scope.data = {};
            $scope.data.mobileNo = '';
            $scope.data.modelId = '';
            $scope.data.fromDate = '';
            $scope.data.toDate = '';
            $scope.data.cityName = '';
            $scope.errorMessage = '';
            $scope.errorTextVisible = false;
            $scope.noerror = true;
            $scope.isDisabled = false;
            $scope.userDetail = $localstorage.getObject(config.TAPASVI);

            var url = config.get_iPad_model;
            $http.get(url)
           .then(function (response) {
               $scope.iPadModelList = response.data.result;

           });


            $scope.showAlert = function (title, message) {

                var alertPopup = $ionicPopup.alert({
                    title: title,
                    template: message
                });

                alertPopup.then(function (res) {

                });
            };
            $scope.saveDetailsOnServer = function () {


                var name = $localstorage.get(config.MEMBER_NAME);
                var emailId = $localstorage.get(config.EMAIL_ID);
                var memberId = $localstorage.get(config.MEMBER_ID);
                var contact = $localstorage.get(config.CONTACT);

                var from = $filter('date')($scope.data.fromDate, "yyyy-MM-dd");
                var to = $filter('date')($scope.data.toDate, "yyyy-MM-dd");

                var parameter = 'ipad_id=' + $scope.data.modelId + '&member_id=' + memberId + '&from=' + from + '&to=' + to + '&city=' + $scope.data.cityName + '&message=testing';
                var url = config.post_iPad_url + parameter;

                if ($scope.data.modelId === '' || $scope.data.fromDate === '' || $scope.data.toDate === '' || $scope.data.cityName === '' || $scope.data.mobileNo === '') {
                    $scope.errorTextVisible = true;
                    $scope.noerror = true;
                    $translate(['Warning', 'SomeFields']).then(function (translations) {
                        $scope.headline = translations.Warning;
                        $scope.paragraph = translations.SomeFields;

                        $localstorage.showAlert($scope.headline, $scope.paragraph);

                    });

                    //$localstorage.showAlert('Warning', 'Some required fields are empty');
                }
                else {
                    $http.get(url)
                    .then(function (response) {
                        $scope.message = response.data.message;


                        if ($scope.message === 'success') {
                            $scope.isDisabled = true;
                            $scope.errorTextVisible = false;
                            $scope.noerror = false;
                            $translate(['Welldone', 'YourEnquiry']).then(function (translations) {
                                $scope.headline = translations.Welldone;
                                $scope.paragraph = translations.YourEnquiry;

                                $localstorage.showAlert($scope.headline, $scope.paragraph);

                            });
                          //  $localstorage.showAlert('Welldone', 'Your Enquiry has been sent successfully!');
                            $scope.data.modelId = '';
                            $scope.data.cityName = '';
                            $scope.data.fromDate = '';
                            $scope.data.toDate = '';
                            $scope.data.mobileNo = '';
                        }

                        else {
                            $scope.isDisabled = true;

                            $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                $scope.headline = translations.Oops;
                                $scope.paragraph = translations.Somethingwentwrong;

                                $localstorage.showAlert($scope.headline, $scope.paragraph);

                            });

                           // $localstorage.showAlert('Oops!', 'something went wrong!');
                        }


                    });
                }

            }

        })
    }])

    //Jewllery Purchase controller
    .controller('JewelleryCtrl', ['$translate','$filter', '$scope', '$http', '$state', '$stateParams', 'config', '$localstorage', '$ionicPopup', function ($translate,$filter,$scope, $http, $state, $stateParams, config, $localstorage, $ionicPopup) {
        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            var contact = $localstorage.get(config.CONTACT);
            $scope.data = {};
            $scope.data.mobileNo = '';
            $scope.data.type = '';
            $scope.data.budget = '';
            $scope.data.quantity = '';
            $scope.data.bullion = '';
            $scope.data.fromDate = '';
            $scope.data.toDate = '';
            $scope.data.cityName = '';
            $scope.errorMessage = '';
            $scope.errorTextVisible = false;
            $scope.noerror = true;
            $scope.isDisabled = false;
            $scope.userDetail = $localstorage.getObject(config.TAPASVI);


            $scope.saveDetailsOnServer = function () {


                var name = $localstorage.get(config.MEMBER_NAME);
                var emailId = $localstorage.get(config.EMAIL_ID);
                var memberId = $localstorage.get(config.MEMBER_ID);
                var contact = $localstorage.get(config.CONTACT);

                var from = $filter('date')($scope.data.fromDate, "yyyy-MM-dd");
                var to = $filter('date')($scope.data.toDate, "yyyy-MM-dd");

                var parameter = 'jwellery_type=' + $scope.data.type + '&budget=' + $scope.data.budget + '&member_id=' + memberId + '&quantity=' + $scope.data.quantity + '&bullion=' + $scope.data.bullion + '&from=' + from + '&to=' + to + '&city=' + $scope.data.cityName + '&message=testing';

                var url = config.post_jewellery_url + parameter;

                if ($scope.data.type === '' || $scope.data.budget === '' || $scope.data.quantity === '' || $scope.data.bullion === '' || $scope.data.fromDate === '' || $scope.data.toDate === '' || $scope.data.cityName === '') {
                    $scope.errorTextVisible = true;
                    $scope.noerror = true;

                    $translate(['Warning', 'SomeFields']).then(function (translations) {
                        $scope.headline = translations.Warning;
                        $scope.paragraph = translations.SomeFields;

                        $localstorage.showAlert($scope.headline, $scope.paragraph);

                    });
                   // $localstorage.showAlert('Warning', 'Some required fields are empty');
                }
                else {
                    $http.get(url)
                    .then(function (response) {
                        $scope.message = response.data.message;

                        if ($scope.message === 'success') {
                            $scope.isDisabled = true;
                            $scope.errorTextVisible = false;
                            $scope.noerror = false;

                            $scope.data.type = '';
                            $scope.data.budget = '';
                            $scope.data.quantity = '';
                            $scope.data.bullion = '';
                            $scope.data.fromDate = '';
                            $scope.data.toDate = '';
                            $scope.data.cityName = '';

                            $translate(['Welldone', 'YourEnquiry']).then(function (translations) {
                                $scope.headline = translations.Welldone;
                                $scope.paragraph = translations.YourEnquiry;

                                $localstorage.showAlert($scope.headline, $scope.paragraph);

                            });
                          //  $localstorage.showAlert('Welldone', 'Your Enquiry has been sent successfully!');
                        }

                        else {
                            $scope.isDisabled = true;
                            $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                $scope.headline = translations.Oops;
                                $scope.paragraph = translations.Somethingwentwrong;

                                $localstorage.showAlert($scope.headline, $scope.paragraph);

                            });

                            //$localstorage.showAlert('Oops!', 'something went wrong!');
                        }


                    });
                }
            }

        })
    }])

    //Wedding Event controller
    .controller('WeddingEventCtrl', ['$translate','$filter', '$scope', '$http', '$state', '$stateParams', 'config', '$localstorage', '$ionicPopup', function ($translate,$filter,$scope, $http, $state, $stateParams, config, $localstorage, $ionicPopup) {
        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            var contact = $localstorage.get(config.CONTACT);
            $scope.data = {};
            $scope.data.mobileNo = contact;

            $scope.data.budget = '';
            $scope.data.fromDate = '';
            $scope.data.cityName = '';
            $scope.errorMessage = '';
            $scope.errorTextVisible = false;
            $scope.noerror = true;
            $scope.isDisabled = false;
            $scope.userDetail = $localstorage.getObject(config.TAPASVI);

            var getweddingevent = config.get_wedding_event_url;
            $http.get(getweddingevent)
           .then(function (response) {
               $scope.serviceList = response.data.result;
               for (var i = 0; i < $scope.serviceList.length; i++) {
                   var flag = $scope.isChecked($scope.serviceList[i].service_id);

                   $scope.serviceList[i].isChecked = flag;
               }

           });

            $scope.showAlert = function (title, message) {

                var alertPopup = $ionicPopup.alert({
                    title: title,
                    template: message
                });

                alertPopup.then(function (res) {

                });
            };


            $scope.saveDetailsOnServer = function () {


                var name = $localstorage.get(config.MEMBER_NAME);
                var emailId = $localstorage.get(config.EMAIL_ID);
                var memberId = $localstorage.get(config.MEMBER_ID);
                var contact = $localstorage.get(config.CONTACT);
                var serviceid = "";
                for (var t = 0; t < $scope.serviceList.length; t++) {

                    if ($scope.serviceList[t].isChecked) {

                        serviceid = serviceid + $scope.serviceList[t].service_id + ",";

                    }

                }
                serviceid = serviceid.replace(/,\s*$/, "");

                var from = $filter('date')($scope.data.fromDate, "yyyy-MM-dd");

                var parameter = 'service_id=' + serviceid + '&member_id=' + memberId + '&date=' + from + '&city=' + $scope.data.cityName + '&message=testing' + '&budget=' + $scope.data.budget;

                var url = config.post_wedding_event_url + parameter;

                if (serviceid === '' || $scope.data.budget === '' || $scope.data.fromDate === '' || $scope.data.cityName === '') {
                    $scope.errorTextVisible = true;
                    $scope.noerror = true;
                    $translate(['Warning', 'SomeFields']).then(function (translations) {
                        $scope.headline = translations.Warning;
                        $scope.paragraph = translations.SomeFields;

                        $localstorage.showAlert($scope.headline, $scope.paragraph);

                    });
                    //$localstorage.showAlert('Warning', 'Some required fields are empty');
                }
                else {
                    $http.get(url)
                    .then(function (response) {
                        $scope.message = response.data.message;
                        $scope.data.fromDate = '';

                        if ($scope.message === 'success') {
                            $scope.isDisabled = true;
                            $scope.errorTextVisible = false;
                            $scope.noerror = false;

                            for (var t = 0; t < $scope.serviceList.length; t++) {

                                if ($scope.serviceList[t].isChecked) {

                                    $scope.serviceList[t].isChecked = false;

                                }

                            }
                            $scope.data.budget = '';
                            $scope.data.fromDate = '';
                            $scope.data.cityName = '';

                            $translate(['Welldone', 'YourEnquiry']).then(function (translations) {
                                $scope.headline = translations.Welldone;
                                $scope.paragraph = translations.YourEnquiry;

                                $localstorage.showAlert($scope.headline, $scope.paragraph);

                            });
                           // $localstorage.showAlert('Welldone', 'Your Enquiry has been sent successfully!');
                        }

                        else {
                            $scope.isDisabled = true;
                            $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                $scope.headline = translations.Oops;
                                $scope.paragraph = translations.Somethingwentwrong;

                                $localstorage.showAlert($scope.headline, $scope.paragraph);

                            });
                           // $localstorage.showAlert('Oops!', 'something went wrong!');
                        }


                    });
                }
            }
        })
    }])

    //Car-purchase controller
    .controller('CarPurchaseCtrl', ['$translate', '$filter', '$scope', '$http', '$state', '$stateParams', 'config', '$localstorage', '$ionicPopup', function ($translate, $filter, $scope, $http, $state, $stateParams, config, $localstorage, $ionicPopup) {

        $localstorage.internetConnection();
        var url = config.get_car_brand;
        var contact = $localstorage.get(config.CONTACT);
        $scope.data = {};
        $scope.data.mobileNo = '';
        $scope.data.brandId = '';
        $scope.data.modelId = '';
        $scope.data.fromDate = '';
        $scope.data.toDate = '';
        $scope.data.cityName = '';
        $scope.errorMessage = '';
        $scope.errorTextVisible = false;
        $scope.noerror = true;
        $scope.isDisabled = false;
        var lang = $localstorage.get(config.LANGUAGE_NAME);

        $scope.userDetail = $localstorage.getObject(config.TAPASVI);
        $http.get(url)
       .then(function (response) {
           $scope.carBrandList = response.data.result;

       });
        $scope.showAlert = function (title, message) {

            var alertPopup = $ionicPopup.alert({
                title: title,
                template: message
            });

            alertPopup.then(function (res) {

            });
        };
        $scope.saveDetailsOnServer = function () {


            var name = $localstorage.get(config.MEMBER_NAME);
            var emailId = $localstorage.get(config.EMAIL_ID);
            var memberId = $localstorage.get(config.MEMBER_ID);
            var contact = $localstorage.get(config.CONTACT);



            var from = $filter('date')($scope.data.fromDate, "yyyy-MM-dd");
            var to = $filter('date')($scope.data.toDate, "yyyy-MM-dd");

            var parameter = 'car_brand=' + $scope.data.brandId + '&car_model=' + $scope.data.modelId + '&member_id=' + memberId + '&contact_no=' + $scope.data.mobileNo + '&email_id=' + emailId + '&from_date=' + from + '&to_date=' + to + '&city=' + $scope.data.cityName + '&message= Done&member_name=' + name;
            var url = config.post_car_url + parameter;

            if ($scope.data.brandId === '' || $scope.data.fromDate === '' || $scope.data.toDate === '' || $scope.data.cityName === '' || $scope.data.mobileNo === '') {
                $scope.errorTextVisible = true;
                $scope.noerror = true;
                $translate(['Warning', 'SomeFields']).then(function (translations) {
                    $scope.headline = translations.Warning;
                    $scope.paragraph = translations.SomeFields;

                    $localstorage.showAlert($scope.headline, $scope.paragraph);

                });
                //$localstorage.showAlert('Warning', 'Some required fields are empty');
            }
            else {
                $http.get(url)
                .then(function (response) {
                    $scope.message = response.data.message;
                    $scope.errorTextVisible = false;
                    $scope.noerror = false;

                    $scope.data.brandId = '';
                    
                    $scope.data.fromDate = '';
                    $scope.data.toDate = '';
                    $scope.data.cityName = '';
                    $scope.data.mobileNo = '';

                    if ($scope.message === 'success') {
                        $scope.isDisabled = false;

                        $translate(['Welldone', 'YourEnquiry']).then(function (translations) {
                            $scope.headline = translations.Welldone;
                            $scope.paragraph = translations.YourEnquiry;

                            $localstorage.showAlert($scope.headline, $scope.paragraph);

                        });
                        //   $scope.showAlert('Welldone', 'Your Enquiry sent successfully!');
                    }
                    else {
                        $scope.isDisabled = true;
                        $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                            $scope.headline = translations.Oops;
                            $scope.paragraph = translations.Somethingwentwrong;

                            $localstorage.showAlert($scope.headline, $scope.paragraph);

                        });
                        //  $scope.showAlert('Oops!', 'something went wrong!');
                    }

                });
            }
        }
       /* $scope.getModelList = function (brandId) {


            var get_model = config.get_car_model_url + 'car_brand_id=' + brandId + '&lang=' + lang;
            $http.get(get_model)
            .then(function (response) {
                $scope.carModelList = response.data.result;

            });
        } */

    }])

    .controller('TapasviProfileCtrl', ['config','$scope', '$http', '$state', '$stateParams', '$localstorage', function (config,$scope, $http, $state, $stateParams, $localstorage) {

        $localstorage.internetConnection();
         $scope.selectedCity = null;

         $scope.name = $localstorage.get(config.MEMBER_NAME);
         $scope.emailId = $localstorage.get(config.EMAIL_ID);
         $scope.memberId = $localstorage.get(config.MEMBER_ID);
         
         $scope.contact = $localstorage.get(config.CONTACT);
         var lang = $localstorage.get(config.LANGUAGE_NAME);
         $http.get('http://nirjaraap.com/api/commen_function.php')
     .then(function (response) {
         $scope.countryList = response.data.result;
     });

         $scope.getStates = function (countryId) {
         var get_state_url = "http://nirjaraap.com/api/commen_function.php?key=state&country_id=" + countryId;
         $http.get(get_state_url)
        .then(function (response) {
         $scope.stateList = response.data.result;
     });
         }

         $scope.getcities = function (stateId) {

             var get_city_url = "http://nirjaraap.com/api/commen_function.php?key=city&state_id=" + stateId;
             $http.get(get_city_url)
             .then(function (response) {
             $scope.cityList = response.data.result;
             var name = $scope.name;
             var emailId = $scope.emailId;


        });

         }
         $scope.getguru = function (stateId) {
             var get_city_url = "http://nirjaraap.com/api/commen_function.php?key=city&state_id=" + stateId;
             $http.get(get_city_url)
 .then(function (response) {
     $scope.cityList = response.data.result;
     var name = $scope.name;
     var emailId = $scope.emailId;


 });

         }

         $scope.openTempleList = function (cityId) {

             var get_temple_url = "http://nirjaraap.com/api/commen_function.php?key=temple&city_id=" + $scope.selectedCity;

             $http.get(get_temple_url).then(function (response) {

                 $scope.templeList = response.data.result;
                 TempletModel.setTempleList($scope.templeList);

                 $state.go("app.temple-listing", {});
             });

         };

         $scope.setCity = function (cityId) {
             $scope.selectedCity = cityId;
             var name = $scope.name;
             var emailId = $scope.emailId;
         }

     }])

    //guru Group Controller
     .controller('GuruTrackingController', ['config', '$scope', '$http', '$state', '$stateParams', 'BusinessModel','$localstorage', function (config, $scope, $http, $state, $stateParams, BusinessModel,$localstorage) {

         $scope.$on('$ionicView.enter', function () {
             $localstorage.internetConnection();
             $scope.valueData = true;
             var memberId = $localstorage.get(config.MEMBER_ID);
             var lang = $localstorage.get(config.LANGUAGE_NAME);

             $scope.getSampradayList = function () {
                 var get_sampraday_url = config.get_sampraday_url + "lang=" +lang;
                 /*  $http.get(get_sampraday_url)
               .then(function (response) {
                   $scope.sampradayList = response.data.result;
               });*/

                 $http.get(get_sampraday_url)
                .then(function (response) {
                    $scope.sampradayList = response.data.result;

                    
                    var get_tarcking_subgroupList_url = config.get_guru_tracking + 'member_id=' + memberId + "&lang=" +lang;
                    $http.get(get_tarcking_subgroupList_url)
                   .then(function (response) {
                       // list of subgroup that user is allowed to track 
                       $scope.usersubgroupTrackingList = response.data.data;

                       for (var i = 0; i < $scope.sampradayList.length; i++) {

                           for (var j = 0; j < $scope.sampradayList[i].sub_group_data.length; j++) {

                               var flag = $scope.isChecked($scope.sampradayList[i].sub_group_data[j].sub_group_id);

                               $scope.sampradayList[i].sub_group_data[j].isChecked = flag;
                           }

                       }

                   });


                });

             }

             $scope.setsubGroupTrackingStatus = function(statusvalue,maingroupId,subGroupId)
             {
                 if (statusvalue)
                     status = 'on';
                 else
                     status = 'off';


                 var post_guru_tracking = config.post_guru_tracking + 'member_id=' + memberId + '&main_group_id=' + maingroupId + '&sub_group_id=' + subGroupId + '&mod=' + status;

                 $http.get(post_guru_tracking)
               .then(function (response) {
                   $scope.res = response.data.result;
               });
             }

             $scope.isChecked = function (subGroupIdValue) {
                 var subgroupChecked = false;

                 for (var j = 0; j < $scope.usersubgroupTrackingList.length; j++) {
                     var subgroupId = $scope.usersubgroupTrackingList[j].sub_group_id;
                     if ((subgroupId == subGroupIdValue) && ($scope.usersubgroupTrackingList[j].mod == 'on')) {
                         subgroupChecked = true;
                         return subgroupChecked;
                     }
                     else {
                         subgroupChecked = false;

                     }

                 }


                 return subgroupChecked;

             }


             $scope.getSampradayList();
             $scope.openDetailPage = function (business_cat_id) {

                 BusinessModel.setbusinessCat(business_cat_id);
                 $state.go("app.business_search", {});
             };
             $scope.user = {};
             $scope.memberId = $localstorage.get(config.MEMBER_ID);

             var datalist = { member_id: $scope.memberId };
             $scope.markers = [];

             var getSampradayUrl = config.get_sampraday_tracking_url + '?lang=' + lang;

             $http({
                 url: getSampradayUrl,
                 method: "POST",
                 params: datalist
             }).then(function (res) {
                 $scope.response = res.data;
                 config.vihar_latitude = res.data.longitude;
                 config.vihar_longitude = res.data.latitude;
                 var myLatlng = new google.maps.LatLng(res.data.latitide, res.data.longitude);
                 var mapOptions = {
                     center: myLatlng,
                     zoom: 16,
                     mapTypeId: google.maps.MapTypeId.ROADMAP,
                     animation: google.maps.Animation.DROP,
                 };
                 $scope.map = new google.maps.Map(document.getElementById("gap"),
                        mapOptions);
                 var iconBase = 'img/';
                 var geocoder = new google.maps.Geocoder;
                 var infoWindow = new google.maps.InfoWindow;

                 marker = new google.maps.Marker({
                     position: myLatlng,
                     map: $scope.map,
                 });

                 for (var i = 0, length = res.data.data.length; i < length; i++) {
                     var json = res.data.data[i];
                     var latLng = new google.maps.LatLng(json.guru_latitude, json.guru_longitude);
                     var icon = {
                         url: 'http://osc.dotphi.com/d4/nirjara-icon/d1-blue.svg',
                         scaledSize: new google.maps.Size(42, 42),
                         origin: new google.maps.Point(0, 0),
                         anchor: new google.maps.Point(0, 0)
                     }

                     // Creating a marker and putting it on the map
                     var marker = new google.maps.Marker({
                         position: latLng,
                         icon: icon,
                         map: $scope.map,
                         optimized: false
                     });


                 }
                 geocoder.geocode({ 'location': myLatlng }, function (results, status) {
                     if (status === 'OK') {
                         if (results[1]) {
                             $scope.map.setZoom(11);
                             var marker = new google.maps.Marker({
                                 position: myLatlng,
                                 map: $scope.map
                             });
                             config.vihar_address = results[1].formatted_address;
                             infoWindow.setContent(results[1].formatted_address);
                             infoWindow.open($scope.map, marker);
                         } else {
                             window.alert('No results found');
                         }
                     } else {
                         window.alert('Geocoder failed due to: ' + status);
                     }
                 });


             });


             $scope.saveDetails = function () {
                 var lat = config.vihar_latitude;
                 var lgt = config.vihar_longitude;
                 var des = $scope.user.desc;
                 var contact = $scope.user.contact;
                 var member_id = $scope.memberId;
                 var member_name = $scope.membername;
                 var location = $scope.user.location;
                 var address = config.vihar_address;



                 var datalist = { lat: lat, lgt: lgt, des: des, contact: contact, member_id: member_id, name: member_name, location: location, vihar_address: address };
                 $scope.markers = [];
                 console.log(datalist);
                 $http({
                     url: "http://nirjaraap.com/api/post_vihar_stay.php",
                     method: "POST",
                     params: datalist
                 }).then(function (res) {
                     $scope.response = res.data;

                     if (res.data != '') {

                         $scope.showConfirm = function () {

                             var confirmPopup = $ionicPopup.confirm({
                                 title: 'Title',
                                 template: 'Are you sure?'
                             });

                             confirmPopup.then(function (res) {
                                 if (res) {
                                     console.log('Sure!');
                                 } else {
                                     console.log('Not sure!');
                                 }
                             });

                         };
                     }

                 });

                 // Code to write to Firebase will be here
             }
         });
     }])

/****************get chaturmas listing**************/
      .controller('ChaturmasListCtrl', ['ChaturmasModel', 'config', '$scope', '$http', '$state', '$stateParams', '$localstorage', function (ChaturmasModel, config, $scope, $http, $state, $stateParams, $localstorage) {

          $scope.$on('$ionicView.enter', function () {
              $localstorage.internetConnection();
              //(document.getElementById('pac-input-chaturmas')).value = "";
              $scope.chaturmasList = {};
              $scope.errorMessage = '';
              $scope.errorTextVisible = false;
              $scope.noerror = true;

              $scope.memberId = $localstorage.get(config.MEMBER_ID);

              $scope.openDetailPage = function (chaturmas) {
                  ChaturmasModel.setChaturmas(chaturmas);
                  ChaturmasModel.setCity($scope.templeCity);
                  $state.go('app.detail_chaturmas');
              }

              $scope.disableTap = function () {
                  var container = document.getElementsByClassName('pac-container');
                  angular.element(container).attr('data-tap-disabled', 'true');
                  var backdrop = document.getElementsByClassName('backdrop');
                  angular.element(backdrop).attr('data-tap-disabled', 'true');
                  angular.element(container).on("click", function () {
                      document.getElementById('pac-input-chaturmas').blur();
                  });
              };


              var cityId;
              $scope.templelists = {};


              var input = (document.getElementById('pac-input-chaturmas'));

              // Create the autocomplete helper, and associate it with 
              // an HTML text input box. 

              var autocomplete = new google.maps.places.Autocomplete(input);

              autocomplete.setComponentRestrictions(
              { 'country': ['in'] });


              var locate = config.get_current_position + 'member_id=' + $scope.memberId;
              $http.get(locate).then(function (response) {



                  var latitude = response.data.latitide;
                  var longitude = response.data.longitude;

                  var geocoder;
                  geocoder = new google.maps.Geocoder();
                  var latlng = new google.maps.LatLng(latitude, longitude);



                  geocoder.geocode(
                      { 'latLng': latlng },
                      function (results, status) {
                          if (status == google.maps.GeocoderStatus.OK) {
                              if (results[0]) {
                                  var add = results[0].formatted_address;

                                  var value = add.split(",");

                                  count = value.length;
                                  country = value[count - 1];
                                  state = value[count - 2];
                                  city = value[count - 3];
                                  $scope.currentLocation = city;
                                  cityId = city.trim();
                                  $scope.templeCity = cityId; //city name updated
                                  String.prototype.trim = function () {
                                      return this.replace(/^\s+|\s+$/g, '');
                                  };

                                  var cityName = ChaturmasModel.getCity();
                                  console.log(cityName);
                                  if (angular.isDefined(cityName) && cityName != '') {
                                      $scope.templeCity = cityName;

                                  }


                                  var lang = $localstorage.get(config.LANGUAGE_NAME);

                                  var get_chaturnas_url = config.get_chaturmas_location + 'location=' + $scope.templeCity + '&lang=' + lang;

                                  $http.get(get_chaturnas_url).then(function (response) {

                                      $scope.error_msg = response.data.error_msg;
                                      $scope.message = response.data.message;

                                      if ($scope.message === 'success') {
                                          $scope.errorTextVisible = false;
                                          $scope.noerror = false;
                                          $scope.chaturmasList = response.data.result;
                                      }
                                      else {
                                          if ($scope.error_msg === 'Records not found') {
                                              $scope.errorTextVisible = true;
                                              $scope.noerror = true;
                                              $scope.errorMessage = $scope.error_msg;
                                          }
                                      }

                                  })

                              }
                              else {
                                  alert("address not found");
                              }
                          }
                          else {
                              alert("Geocoder failed due to: " + status);
                          }
                      }
                  );



              });




              $scope.searchList = function (address) {

                  $scope.chaturmasList = {};
                  //open business list page
                  var add1 = autocomplete.getPlace();
                  var add = add1.name;
                  var lang = $localstorage.get(config.LANGUAGE_NAME);
                  $scope.templeCity = add;
                  var parameter = 'location=' + add + '&lang=' + lang;
                  var get_search_chaturmas_url = config.get_chaturmas_location + parameter;

                  $http.get(get_search_chaturmas_url).then(function (response) {

                      $scope.error_msg = response.data.error_msg;
                      $scope.message = response.data.message;

                      if ($scope.message === 'success') {
                          $scope.errorTextVisible = false;
                          $scope.noerror = false;
                          $scope.chaturmasList = response.data.result;
                      }
                      else {
                          if ($scope.error_msg === 'Records not found') {
                              $scope.errorTextVisible = true;
                              $scope.noerror = true;
                              $scope.errorMessage = $scope.error_msg;
                          }
                      }

                  });
              };


          })
      }])

    //add vihar stay ctrl
     .controller('AddViharStayCtrl', ['$translate', '$scope', '$localstorage', 'config', '$http', '$rootScope', function ($translate, $scope, $localstorage, config, $http, $rootScope) {
         $scope.$on('$ionicView.enter', function () {
             $localstorage.internetConnection();
             $scope.data = {};
             $scope.user = {};
             $scope.user = {};
             $scope.errorTextVisible = true;
             $scope.isVisible = true;

             $scope.errorText = '';

             $scope.disableTap = function () {
                 var container = document.getElementsByClassName('pac-container');
                 angular.element(container).attr('data-tap-disabled', 'true');
                 var backdrop = document.getElementsByClassName('backdrop');
                 angular.element(backdrop).attr('data-tap-disabled', 'true');
                 angular.element(container).on("click", function () {
                     document.getElementById('pac-input').blur();
                 });
             };

             var input = (document.getElementById('pac-input'));

             // Create the autocomplete helper, and associate it with 
             // an HTML text input box. 

             var autocomplete = new google.maps.places.Autocomplete(input);

             autocomplete.setComponentRestrictions(
                { 'country': ['in'] });

             $scope.memberId = $localstorage.get(config.MEMBER_ID);
             var datalist = { member_id: $scope.memberId };
             $scope.markers = [];
             var getviharStayPosition = config.get_vihar_stay_position;
             $http({
                 url: getviharStayPosition,
                 method: "POST",
                 params: datalist
             }).then(function (res) {

                 $scope.response = res.data;
                 config.vihar_latitude = res.data.latitide
                 config.vihar_longitude = res.data.longitude;
                 var myLatlng = new google.maps.LatLng(res.data.latitide, res.data.longitude);
                 var mapOptions = {
                     center: myLatlng,
                     zoom: 16,
                     mapTypeId: google.maps.MapTypeId.ROADMAP,
                     animation: google.maps.Animation.DROP,
                 };
                 $scope.map = new google.maps.Map(document.getElementById("tapaddvihar"),
                        mapOptions);
                 var iconBase = 'img/';
                 var geocoder = new google.maps.Geocoder;
                 var infoWindow = new google.maps.InfoWindow;

                 marker = new google.maps.Marker({
                     position: myLatlng,
                     map: $scope.map,
                 });

                 for (var i = 0, length = res.data.data.length; i < length; i++) {
                     var json = res.data.data[i];
                     var latLng = new google.maps.LatLng(json.vihar_latitude, json.vihar_longitude);
                     var icon = {
                         url: iconBase + 'karamicon/d2-blue.svg',
                         scaledSize: new google.maps.Size(42, 42),
                         origin: new google.maps.Point(0, 0),
                         anchor: new google.maps.Point(0, 0)
                     }

                     // Creating a marker and putting it on the map
                     var marker = new google.maps.Marker({
                         position: latLng,
                         icon: icon,
                         map: $scope.map,
                         optimized: false
                     });


                 }
                 geocoder.geocode({ 'location': myLatlng }, function (results, status) {
                     if (status === 'OK') {
                         if (results[1]) {
                             $scope.map.setZoom(11);
                             var marker = new google.maps.Marker({
                                 position: myLatlng,
                                 map: $scope.map
                             });
                             config.vihar_address = results[1].formatted_address;
                             $scope.data.search = config.vihar_address;
                             infoWindow.setContent(results[1].formatted_address);
                             infoWindow.open($scope.map, marker);
                         } else {
                             window.alert('No results found');
                         }
                     } else {
                         window.alert('Geocoder failed due to: ' + status);
                     }
                 });


             });

             $scope.isEmptyOrNull = function (value) {
                 return !value;
             },

             $scope.saveDetailsOnServer = function () {
                 var name = $scope.data.Name;
                 var contact = $scope.data.contact;
                 var family = $scope.data.jain_family_around;
                 $scope.isVisible = false;
                 $scope.errorText = '';

                 if ($scope.isEmptyOrNull(name)) {
                     $scope.isVisible = true;

                     $translate(['SomeFields']).
                         then(function (translations) {

                             $scope.errorText = translations.SomeFields;



                         });
                     return;
                 }
                 if ($scope.isEmptyOrNull(contact)) {
                     $scope.isVisible = true;
                     $translate(['SomeFields']).
                          then(function (translations) {

                              $scope.errorText = translations.SomeFields;



                          });
                     return;

                 }
                 if ($scope.isEmptyOrNull(family)) {
                     $scope.isVisible = true;
                     $translate(['SomeFields']).
                         then(function (translations) {

                             $scope.errorText = translations.SomeFields;

                         });
                     return;
                 }
                 else {
                     try {
                         var addressText = autocomplete.getPlace();
                         var latitude = addressText.geometry.location.lat();
                         var longitude = addressText.geometry.location.lng();
                         var formatted_address = addressText.formatted_address;
                         var city = addressText.vicinity;
                     } catch (e)
                     { }
                     var lat = config.vihar_latitude;
                     var parameter = 'name=' + $scope.data.Name + '&contact=' + $scope.data.contact + '&city=' + config.vihar_address + '&member_id=' + $scope.memberId + "&vihar_latitude=" + lat + "&vihar_longitude=" + config.vihar_longitude
                         + "&vihar_description=" + "" + "&vihar_address=" + config.vihar_address + "&jain_family_around=" + $scope.data.jain_family_around;
                     //osc.dotphi.com/nirjna-app/api/post_vihar_stay.php?name=sumedh&contact=1234567891&city=nashik
                     var url = config.post_add_vihar_url + parameter;


                     $http.get(url)
                     .then(function (response) {
                         $scope.message = response.data.message;

                         if ($scope.message === 'Success') {
                             $scope.isDisabled = true;

                             $scope.errorTextVisible = false;
                             $scope.noerror = false;

                             $scope.data.contact = '';
                             $scope.data.name = '';
                             $scope.data.jainfamilies = '';
                             $scope.data.location = '';

                             $translate(['Welldone', 'Viharadded']).then(function (translations) {
                                 $scope.headline = translations.Welldone;
                                 $scope.paragraph = translations.Viharadded;

                                 $localstorage.showAlert($scope.headline, $scope.paragraph, 'app.my-stay-listing');

                             });
                             //  $localstorage.showAlert('Welldone', 'Vihar is added successfully!');
                         }

                         else {
                             $scope.isDisabled = true;
                             $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                 $scope.headline = translations.Oops;
                                 $scope.paragraph = translations.Somethingwentwrong;

                                 $localstorage.showAlert($scope.headline, $scope.paragraph);

                             });
                             //    $localstorage.showAlert('Oops!', response.data.error_msg);
                         }


                     });

                 }
             }

         });

         // Code will be here
     }])

    //Vihar Stay Controller
   .controller('ViharStayListCtrl', ['$localstorage', 'config', '$scope', '$http', '$state', '$stateParams', function ($localstorage, config, $scope, $http, $state, $stateParams) {

       $scope.$on('$ionicView.enter', function () {
           $localstorage.internetConnection();
           $scope.viharList = {};
           $scope.errorMessage = '';
           $scope.errorTextVisible = false;
           $scope.noerror = true;
           var lang = $localstorage.get(config.LANGUAGE_NAME);
           $scope.addVihar = function () {

               $state.go("app.add-vihar", {});

           };

           (document.getElementById('pac-input-vihar-search')).value = "";

           $scope.disableTap = function () {
               var container = document.getElementsByClassName('pac-container');
               angular.element(container).attr('data-tap-disabled', 'true');
               var backdrop = document.getElementsByClassName('backdrop');
               angular.element(backdrop).attr('data-tap-disabled', 'true');
               angular.element(container).on("click", function () {
                   document.getElementById('pac-input-vihar-search').blur();
               });
           };

           var input = (document.getElementById('pac-input-vihar-search'));

           // Create the autocomplete helper, and associate it with 
           // an HTML text input box. 

           var autocomplete = new google.maps.places.Autocomplete(input);

           autocomplete.setComponentRestrictions(
              { 'country': ['in'] });


           $scope.searchList = function (address) {

               $scope.viharList = {};
               //open business list page
               var add1 = autocomplete.getPlace();
               var latitude = add1.geometry.location.lat();
               var longitude = add1.geometry.location.lng();
               var add = add1.name;
               $scope.getviharList(add);

           };

           $scope.memberId = $localstorage.get(config.MEMBER_ID);
           $scope.getviharList = function (add) {
               var parameter = 'city_english=' + add + '&lang=' + lang;
               var get_vihar_by_city = config.get_vihar_by_city_url + parameter;

               $http.get(get_vihar_by_city).then(function (response) {

                   $scope.error_msg = response.data.error_msg;
                   $scope.message = response.data.message;

                   if ($scope.message === 'success') {
                       $scope.errorTextVisible = false;
                       $scope.noerror = false;
                       $scope.viharList = response.data.result;
                   }
                   else {
                       if ($scope.error_msg === 'Records not found') {
                           $scope.errorTextVisible = true;
                           $scope.noerror = true;
                           $scope.errorMessage = $scope.error_msg;
                       }
                   }

               });
           }
          
           $scope.user = {};
         
           var datalist = { member_id: $scope.memberId };
           $scope.markers = [];
           var url = config.get_vihar_lat_long;
           $http({
               url: url,
               method: "POST",
               params: datalist
           }).then(function (res) {
               $scope.response = res.data;
               config.vihar_latitude = res.data.longitude;
               config.vihar_longitude = res.data.latitude;

              /* $scope.error_msg = res.data.data.error_msg;
               $scope.message = res.data.data.message;

               if ($scope.message === 'success') {
                   $scope.errorTextVisible = false;
                   $scope.noerror = false;
                   $scope.viharList = res.data.data.result;
               }
               else {
                   if ($scope.error_msg === 'Records not found') {
                       $scope.errorTextVisible = true;
                       $scope.noerror = true;
                       $scope.errorMessage = $scope.error_msg;
                   }
               } */
               var myLatlng = new google.maps.LatLng(res.data.latitide, res.data.longitude);
               var mapOptions = {
                   center: myLatlng,
                   zoom: 24,
                   mapTypeId: google.maps.MapTypeId.ROADMAP,
                   animation: google.maps.Animation.DROP,
               };
               $scope.map = new google.maps.Map(document.getElementById("map-vihar-location"),
                      mapOptions);
               var iconBase = 'img/';
               var geocoder = new google.maps.Geocoder;
               var infoWindow = new google.maps.InfoWindow;

               marker = new google.maps.Marker({
                   position: myLatlng,
                   map: $scope.map,
               });

               for (var i = 0, length = res.data.data.result.length; i < length; i++) {
                   var json = res.data.data.result[i];
                   var latLng = new google.maps.LatLng(json.vihar_latitude, json.vihar_longitude);
                   var icon = {
                       url: 'http://osc.dotphi.com/d4/nirjara-icon/d2-blue.svg',
                       scaledSize: new google.maps.Size(42, 42),
                       origin: new google.maps.Point(0, 0),
                       anchor: new google.maps.Point(0, 0)
                   }

                   // Creating a marker and putting it on the map
                   var marker = new google.maps.Marker({
                       position: latLng,
                       icon: icon,
                       map: $scope.map,
                       optimized: false
                   });

                   var infowindow = new google.maps.InfoWindow({});

                   google.maps.event.addListener(marker, 'click', (function (marker, i) {
                       return function () {

                           infowindow.setContent(res.data.data.result[i].name + '<br>' + res.data.data.result[i].contact + '<br>' + res.data.data.result[i].vihar_address + '<br>' + res.data.data.result[i].jain_family_around);

                           infowindow.open($scope.map, marker);
                       }
                   })(marker, i));
               }
               geocoder.geocode({ 'location': myLatlng }, function (results, status) {
                   if (status === 'OK') {
                       if (results[1]) {
                           $scope.map.setZoom(11);
                           var marker = new google.maps.Marker({
                               position: myLatlng,
                               map: $scope.map
                           });
                           config.vihar_address = results[1].formatted_address;
                           infoWindow.setContent(results[1].formatted_address);
                           infoWindow.open($scope.map, marker);
                       } else {
                           window.alert('No results found');
                       }
                   } else {
                       window.alert('Geocoder failed due to: ' + status);
                   }
               });


               var geocoder;
               geocoder = new google.maps.Geocoder();
               var latlng = new google.maps.LatLng(res.data.latitide, res.data.longitude);


               geocoder.geocode(
                   { 'latLng': latlng },
                   function (results, status) {
                       if (status == google.maps.GeocoderStatus.OK) {
                           if (results[0]) {
                               var add = results[0].formatted_address;
                               var value = add.split(",");

                               count = value.length;
                               country = value[count - 1];
                               state = value[count - 2];
                               city = value[count - 3];
                               cityId = city.trim();
                               $scope.templeCity = cityId; //city name updated
                               String.prototype.trim = function () {
                                   return this.replace(/^\s+|\s+$/g, '');
                               };

                               //get temple 
                              $scope.getviharList(cityId);

                           }
                           else {
                               alert("address not found");
                           }
                       }
                       else {
                           alert("Geocoder failed due to: " + status);
                       }
                   }
               );


           });

       })


   }])

    //my vihar stay listing
   .controller('MyViharStayListCtrl', ['$translate', 'config', '$scope', '$http', '$state', '$localstorage', '$stateParams', 'ViharModel', function ($translate, config, $scope, $http, $state, $localstorage, $stateParams, ViharModel) {

       $scope.$on('$ionicView.enter', function () {
           $localstorage.internetConnection();
           $scope.viharList = {};
           $scope.errorMessage = '';
           $scope.errorTextVisible = false;
           $scope.noerror = true;

           var memberId = $localstorage.get(config.MEMBER_ID);
           var lang = $localstorage.get(config.LANGUAGE_NAME);
           var url = config.get_vihar_stay_member_wise + memberId+'&lang='+lang;
           $http.get(url).then(function (response) {

               $scope.error_msg = response.data.error_msg;
               $scope.message = response.data.message;

               if ($scope.message === 'success') {
                   $scope.errorTextVisible = false;
                   $scope.noerror = false;
                   $scope.viharList = response.data.result;
               }
               else {
                   if ($scope.error_msg === 'Records not found') {
                       $scope.errorTextVisible = true;
                       $scope.noerror = true;
                       $scope.errorMessage = $scope.error_msg;
                   }
               }

           });

           var input = (document.getElementById('pac-input'));

           var autocomplete = new google.maps.places.Autocomplete(input);

           autocomplete.setComponentRestrictions(
           { 'country': ['in'] });

           // Search temple list
           var address = $scope.search;

           $scope.searchList = function (address) {

               $scope.viharList = {};
               //open business list page
               var add1 = autocomplete.getPlace();
               var latitude = add1.geometry.location.lat();
               var longitude = add1.geometry.location.lng();
               var add = add1.name;

               var parameter = 'city_english=' + add;
               var get_vihar_by_city = config.get_vihar_by_city_url + parameter+'&lang='+lang;

               $http.get(get_vihar_by_city).then(function (response) {

                   $scope.error_msg = response.data.error_msg;
                   $scope.message = response.data.message;

                   if ($scope.message === 'success') {
                       $scope.errorTextVisible = false;
                       $scope.noerror = false;
                       $scope.viharList = response.data.result;
                   }
                   else {
                       if ($scope.error_msg === 'Records not found') {
                           $scope.errorTextVisible = true;
                           $scope.noerror = true;
                           $scope.errorMessage = $scope.error_msg;
                       }
                   }

               });
           };
           $scope.addMember = function () {

               $state.go("app.add-vihar", {});

           };

           $scope.openViharEdit = function (vihar) {

               ViharModel.setVihar(vihar);
               $state.go("app.edit_my_vihar_stay");
           };

           ///////////// delete my vihar stay

           $scope.saveDetailsOnServer = function (vihar_stay_id) {

               var parameter = vihar_stay_id + "&member_id=" + memberId+'&lang='+lang;
               var url = config.delete_vihar_stay + parameter;

               $http.get(url)
               .then(function (response) {
                   $scope.message = response.data.message;


                   if ($scope.message === 'success') {
                       $scope.isDisabled = true;
                       $scope.errorTextVisible = false;
                       $scope.noerror = false;
                       $scope.viharList = response.data.error_msg;

                       $translate(['Welldone', 'Vihardelete']).then(function (translations) {
                           $scope.headline = translations.Welldone;
                           $scope.paragraph = translations.Vihardelete;

                           $localstorage.showAlert($scope.headline, $scope.paragraph);

                       });
                       //  $localstorage.showAlert('Welldone', 'Your Vihar Stay  has been delete successfully!');

                   }

                   else {
                       $scope.isDisabled = true;
                       $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                           $scope.headline = translations.Oops;
                           $scope.paragraph = translations.Somethingwentwrong;

                           $localstorage.showAlert($scope.headline, $scope.paragraph);

                       });
                       //  $localstorage.showAlert('Oops!', 'something went wrong!');
                   }


               });
           }


       })
       $scope.user = {};
       $scope.user = {};
       $scope.user = {};
       $scope.memberId = $localstorage.get(config.MEMBER_ID);
       var datalist = { member_id: $scope.memberId };
       $scope.markers = [];

       $http({
           url: "http://nirjaraap.com/api/vihar_position.php",
           method: "POST",
           params: datalist
       }).then(function (res) {
           $scope.response = res.data;
           config.vihar_latitude = res.data.longitude;
           config.vihar_longitude = res.data.latitude;
           var myLatlng = new google.maps.LatLng(res.data.latitide, res.data.longitude);
           var mapOptions = {
               center: myLatlng,
               zoom: 24,
               mapTypeId: google.maps.MapTypeId.ROADMAP,
               animation: google.maps.Animation.DROP,
           };
           $scope.map = new google.maps.Map(document.getElementById("tap"),
                  mapOptions);
           var iconBase = 'img/';
           var geocoder = new google.maps.Geocoder;
           var infoWindow = new google.maps.InfoWindow;

           marker = new google.maps.Marker({
               position: myLatlng,
               map: $scope.map,
           });

           for (var i = 0, length = res.data.data.length; i < length; i++) {
               var json = res.data.data[i];
               var latLng = new google.maps.LatLng(json.vihar_latitude, json.vihar_longitude);
               var icon = {
                   url: iconBase + 'vihar_stay.png',
                   scaledSize: new google.maps.Size(42, 42),
                   origin: new google.maps.Point(0, 0),
                   anchor: new google.maps.Point(0, 0)
               }

               // Creating a marker and putting it on the map
               var marker = new google.maps.Marker({
                   position: latLng,
                   icon: icon,
                   map: $scope.map,
                   optimized: false
               });


           }
           geocoder.geocode({ 'location': myLatlng }, function (results, status) {
               if (status === 'OK') {
                   if (results[1]) {
                       $scope.map.setZoom(11);
                       var marker = new google.maps.Marker({
                           position: myLatlng,
                           map: $scope.map
                       });
                       config.vihar_address = results[1].formatted_address;
                       infoWindow.setContent(results[1].formatted_address);
                       infoWindow.open($scope.map, marker);
                   } else {
                       window.alert('No results found');
                   }
               } else {
                   window.alert('Geocoder failed due to: ' + status);
               }
           });


       });



       $scope.saveDetails = function () {
           var vihar_latitude = config.vihar_latitude;
           var vihar_longitude = config.vihar_longitude;
           var vihar_description = $scope.user.desc;
           var contact = $scope.user.contact;
           var member_id = $scope.memberId;
           var name = $scope.user.name;
           var city = $scope.user.location;
           var address = config.vihar_address;
           var address_2 = $scope.user.address;



           var datalist = { vihar_latitude: vihar_latitude, vihar_longitude: vihar_longitude, vihar_description: vihar_description, contact: contact, member_id: member_id, name: name, city: city, vihar_address: address };
           $scope.markers = [];
           console.log(datalist);
           $http({
               url: "http://nirjaraap.com/api/post_vihar_stay.php",
               method: "POST",
               params: datalist
           }).then(function (res) {
               $scope.response = res.data;

           });

           geocoder.geocode({ 'address': address_2 }, function (results, status) {
               if (status === 'OK') {
                   if (results[1]) {


                   } else {
                       window.alert('No results found');
                   }
               } else {
                   window.alert('Geocoder failed due to: ' + status);
               }
           });

           // Code to write to Firebase will be here
       }



   }])

    ///////////edit vihar stay
    .factory('ViharModel', function ()
    {

        var vihar = {};
        return {
            getVihar: function () {
                return vihar;
            },
            setVihar: function (viharparameter) {
                vihar = viharparameter;
            }
        };
    })

     ///////edit vihar stay controller
     .controller('EditViharCtrl', ['$translate', '$scope', '$http', '$state', '$stateParams', 'config', '$localstorage', '$ionicPopup', 'ViharModel', function ($translate, $scope, $http, $state, $stateParams, config, $localstorage, $ionicPopup, ViharModel) {
         $scope.$on('$ionicView.enter', function () {
             $localstorage.internetConnection();
             var contact = $localstorage.get(config.CONTACT);
             $scope.data = ViharModel.getVihar();

             $scope.errorMessage = '';
             $scope.errorTextVisible = false;
             $scope.noerror = true;
             $scope.isVisible = false;
             $scope.errorText = '';

             $scope.isDisabled = false;
             $scope.memberId = $localstorage.get(config.MEMBER_ID);

             $scope.isEmptyOrNull = function (value) {
                 return !value;
             },


             $scope.showAlert = function (title, message) {

                 var alertPopup = $ionicPopup.alert({
                     title: title,
                     template: message
                 });

                 alertPopup.then(function (res) {

                 });
             };

             $scope.saveDetailsEditOnServer = function () {
                 var vihar_latitude = config.vihar_latitude;
                 var vihar_longitude = config.vihar_longitude;
                 var name = $localstorage.get(config.MEMBER_NAME);
                 var emailId = $localstorage.get(config.EMAIL_ID);
                 var memberId = $localstorage.get(config.MEMBER_ID);
                 var contact = $localstorage.get(config.CONTACT);

                 var name = $scope.data.name;
                 var contact = $scope.data.contact;
                 var family = $scope.data.jain_family_around;

                 $scope.isVisible = false;
                 $scope.errorText = '';



                 var address = config.vihar_address;
                 var address = config.vihar_address;

                 if ($scope.isEmptyOrNull(name)) {
                     $scope.isVisible = true;
                     $translate(['SomeFields']).
                         then(function (translations) {
                             $scope.errorText = translations.SomeFields;

                         });
                     return;
                 }
                 if ($scope.isEmptyOrNull(contact)) {
                     $scope.isVisible = true;
                     $translate(['SomeFields']).
                          then(function (translations) {

                              $scope.errorText = translations.SomeFields;
                          });
                     return;

                 }
                 if ($scope.isEmptyOrNull(family)) {
                     $scope.isVisible = true;
                     $translate(['SomeFields']).
                         then(function (translations) {
                             $scope.errorText = translations.SomeFields;

                         });
                     return;
                 }

                 else {
                     var parameter = 'vihar_stay_id=' + $scope.data.vihar_stay_id + '&name=' + $scope.data.name + '&contact=' + $scope.data.contact + '&city=' + $scope.data.city + '&member_id=' + memberId + "&vihar_latitude=" + $scope.data.vihar_latitude + "&vihar_longitude=" + $scope.data.vihar_longitude + "&vihar_address=" + $scope.data.vihar_address + "&jain_family_around=" + $scope.data.jain_family_around;
                     var url = config.edit_vihar_stay + parameter;


                     $http.get(url)
                     .then(function (response) {
                         $scope.message = response.data.message;

                         if ($scope.message === 'Success') {
                             $scope.isDisabled = true;

                             $scope.errorTextVisible = false;
                             $scope.noerror = false;


                             $translate(['Welldone', 'Viharadded']).then(function (translations) {
                                 $scope.headline = translations.Welldone;
                                 $scope.paragraph = translations.Viharadded;

                                 $localstorage.showAlert($scope.headline, $scope.paragraph, 'app.my-stay-listing');

                             });
                             //  $localstorage.showAlert('Welldone', 'Vihar is updated successfully!');
                         }

                         else {
                             $scope.isDisabled = true;
                             $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                 $scope.headline = translations.Oops;
                                 $scope.paragraph = translations.Somethingwentwrong;

                                 $localstorage.showAlert($scope.headline, $scope.paragraph);

                             });
                             //  $localstorage.showAlert('Oops!', 'Something went wrong!');
                         }


                     });
                 }
             }
         })

     }])

    //Job seeker controller
     .controller('jobSeekerCtrl', ['$translate', '$scope', '$http', '$state', '$stateParams', 'config', '$localstorage', '$ionicPopup', function ($translate,$scope, $http, $state, $stateParams, config, $localstorage, $ionicPopup)
     {
         $scope.$on('$ionicView.enter', function ()
         {
             $localstorage.internetConnection();
             var contact = $localstorage.get(config.CONTACT);
             var lang = $localstorage.get(config.LANGUAGE_NAME);
             $scope.data = {};
             $scope.data.name = '';
             $scope.data.emailID = '';
             $scope.data.religionID = '';
             $scope.data.experiance = '';
             $scope.data.work = '';
             $scope.errorMessage = '';
             //    $scope.errorTextVisible = false;
             $scope.noerror = true;
             $scope.isDisabled = false;
             $scope.userDetail = $localstorage.getObject(config.TAPASVI);
             var memberId = $localstorage.get(config.MEMBER_ID);
             var url = config.get_country_url;

             $http.get(url)
             .then(function (response) {
                 $scope.message = response.data.message;

             });

             $scope.isEmptyOrNull = function (value) {
                 return !value;
             }


             $scope.showAlert = function (title, message) {

                 var alertPopup = $ionicPopup.alert({
                     title: title,
                     template: message
                 });

                 alertPopup.then(function (res) {

                 });
             };


             $scope.saveDetailsOnServer = function ()
             {
                 var name = $scope.data.name;
                 var emailID = $scope.data.emailID;
                 var religionID = $scope.data.religionID;
                 var experiance = $scope.data.experiance;
                 var work = $scope.data.work;

                 if ($scope.isEmptyOrNull(name))
                 {
                     $scope.errorTextVisible = true;
                     $scope.errorText = config.PLEASE_ENTER_MEMBER_NAME;
                     return;
                 }
                 if ($scope.isEmptyOrNull(emailID))
                 {
                     $scope.errorTextVisible = true;
                     $scope.errorText = config.PLEASE_ENTER_EMAIL;
                     return;
                 }
                 if ($scope.isEmptyOrNull(religionID))
                 {
                     $scope.errorTextVisible = true;
                     $scope.errorText = config.PLEASE_ENTER_RELIGION;
                     return;
                 }
                 if ($scope.isEmptyOrNull(experiance))
                 {
                     $scope.errorTextVisible = true;
                     $scope.errorText = config.PLEASE_ENTER_EXP;
                     return;
                 }
                 if ($scope.isEmptyOrNull(work))
                 {
                     $scope.errorTextVisible = true;
                     $scope.errorText = config.PLEASE_ENTER_WORK;
                     return;
                 }
                 else

                     var parameter = 'jobseeker_name=' + $scope.data.name + '&member_id=' + memberId + '&email_id=' + $scope.data.emailID + '&jain_religion=' + $scope.data.religionID + '&experiance=' + $scope.data.experiance + '&work_details=' + $scope.data.work + '&message=testing';
                 var url = config.post_job_seeker + parameter;

                 if ($scope.data.name === '' || $scope.data.emailID === '' || $scope.data.religionID === '' || $scope.data.experiance === '' || $scope.data.work === '') {
                     $scope.errorTextVisible = true;
                     $scope.noerror = true;
                     $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                         $scope.headline = translations.Oops;
                         $scope.paragraph = translations.Somethingwentwrong;

                         $localstorage.showAlert($scope.headline, $scope.paragraph);

                     });
                   //  $localstorage.showAlert('Warning', 'Some required fields are empty');
                 }
                 else {
                     $http.get(url)
                     .then(function (response) {
                         $scope.message = response.data.message;


                         if ($scope.message === 'Success') {
                             $scope.isDisabled = true;
                             $scope.errorTextVisible = false;
                             $scope.noerror = false;

                             $translate(['Welldone', 'YourRegistrationdone']).then(function (translations) {
                                 $scope.headline = translations.Welldone;
                                 $scope.paragraph = translations.YourRegistrationdone;

                                 $localstorage.showAlert($scope.headline, $scope.paragraph);

                             });
                             //$localstorage.showAlert('Welldone', 'Your Registration has been done successfully!');
                             $scope.data.name = '';
                             $scope.data.emailID = '';
                             $scope.data.religionID = '';
                             $scope.data.experiance = '';
                             $scope.data.work = '';
                         }

                         else {
                             $scope.isDisabled = true;
                             $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                 $scope.headline = translations.Oops;
                                 $scope.paragraph = translations.Somethingwentwrong;

                                 $localstorage.showAlert($scope.headline, $scope.paragraph);

                             });
                           //  $localstorage.showAlert('Oops!', 'something went wrong!');
                         }


                     });
                 }

             }

         })
     }])

    //job post controller
    .controller('AddNewJobCtrl', ['$translate','$scope', '$http', '$state', '$stateParams', 'config', '$localstorage', '$ionicPopup', function ($translate,$scope, $http, $state, $stateParams, config, $localstorage, $ionicPopup) {
        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            var contact = $localstorage.get(config.CONTACT);
            $scope.data = {};
            $scope.data.jobTitle = '';
            $scope.data.companyName = '';
            $scope.data.experiance = '';
            $scope.data.location = '';
            $scope.errorMessage = '';
            $scope.errorTextVisible = false;
            $scope.noerror = true;
            $scope.isDisabled = false;
            $scope.userDetail = $localstorage.getObject(config.TAPASVI);

            var memberId = $localstorage.get(config.MEMBER_ID);
            var url = config.add_new_job;

            $http.get(url)
            .then(function (response) {
                $scope.message = response.data.message;

            });

            $scope.isEmptyOrNull = function (value) {
                return !value;
            }


            $scope.showAlert = function (title, message) {

                var alertPopup = $ionicPopup.alert({
                    title: title,
                    template: message
                });

                alertPopup.then(function (res) {

                });
            };


            $scope.saveDetailsOnServer = function () {
                var jobTitle = $scope.data.jobTitle;
                var companyName = $scope.data.companyName;
                var experiance = $scope.data.experiance;
                var location = $scope.data.location;


                if ($scope.isEmptyOrNull(jobTitle)) {
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_TITLE;
                    return;
                }
                if ($scope.isEmptyOrNull(companyName)) {
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_COMAPNY_NAME;
                    return;
                }
                if ($scope.isEmptyOrNull(experiance)) {
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_EXP;
                    return;
                }
                if ($scope.isEmptyOrNull(location)) {
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_LOCATION;
                    return;
                }

                else

                    var parameter = 'job_position=' + $scope.data.jobTitle + '&member_id=' + memberId + '&company_name=' + $scope.data.companyName + '&experiance_required=' + $scope.data.experiance + '&job_location=' + $scope.data.location + '&message=testing' + '&contact_person=' + $scope.data.contact_person + '&mobile_number=' + $scope.data.mobileNumber + '&job_details=' + $scope.data.jobDetail;

                var url = config.add_new_job + parameter;

                if ($scope.data.jobTitle === '' || $scope.data.companyName === '' || $scope.data.experiance === '' || $scope.data.location === '') {
                    $scope.errorTextVisible = true;
                    $scope.noerror = true;
                    $translate(['Warning', 'SomeFields']).then(function (translations) {
                        $scope.headline = translations.Warning;
                        $scope.paragraph = translations.SomeFields;

                        $localstorage.showAlert($scope.headline, $scope.paragraph);

                    });
                    //$localstorage.showAlert('Warning', 'Some required fields are empty');
                }
                else {
                    $http.get(url)
                    .then(function (response) {
                        $scope.message = response.data.message;


                        if ($scope.message === 'Success') {
                            $scope.isDisabled = true;
                            $scope.errorTextVisible = false;
                            $scope.noerror = false;

                            $translate(['Welldone', 'JobPost']).then(function (translations) {
                                $scope.headline = translations.Welldone;
                                $scope.paragraph = translations.JobPost;

                                $localstorage.showAlert($scope.headline, $scope.paragraph);

                            });
                          //  $localstorage.showAlert('Welldone', 'Your Job Post has been done successfully!');
                            $scope.data.jobTitle = '';
                            $scope.data.companyName = '';
                            $scope.data.experiance = '';
                            $scope.data.location = '';

                        }

                        else {
                            $scope.isDisabled = true;
                            $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                $scope.headline = translations.Oops;
                                $scope.paragraph = translations.Somethingwentwrong;

                                $localstorage.showAlert($scope.headline, $scope.paragraph);

                            });
                          //  $localstorage.showAlert('Oops!', 'something went wrong!');
                        }


                    });
                }

            }

        })
    }])

     //job available controller
    .controller('JobAvailableCtrl', ['$translate', '$scope', '$http', '$state', '$stateParams', 'config', '$localstorage', '$ionicPopup', function ($translate,$scope, $http, $state, $stateParams, config, $localstorage, $ionicPopup) {
        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            $scope.jobList = {};
            $scope.errorMessage = '';
            $scope.errorTextVisible = false;
            $scope.noerror = true;
            $scope.jobFlag = false;

            var memberId = $localstorage.get(config.MEMBER_ID);
            var lang = $localstorage.get(config.LANGUAGE_NAME);
            var url = config.get_job_available + 'member_id=' + memberId+'&lang='+lang;
            $http.get(url).then(function (response) {

                $scope.error_msg = response.data.error_msg;
                $scope.message = response.data.message;

                if ($scope.message === 'success') {
                    $scope.errorTextVisible = false;
                    $scope.noerror = false;
                    $scope.jobList = response.data.result;
                    for(var i=0; i<$scope.jobList.length; i++){
                        if($scope.jobList[i].job_status == "Applied"){
                            $scope.jobList[i].isApplied = true;
                            $scope.jobList[i].isNotApplied = false;
                        }
                        else{
                            $scope.jobList[i].isApplied = false;
                            $scope.jobList[i].isNotApplied = true;
                        }
                    }
                }
                else {
                    if ($scope.error_msg === 'Records not found') {
                        $scope.errorTextVisible = true;
                        $scope.noerror = true;
                        $scope.errorMessage = $scope.error_msg;
                    }
                }
            });

            $scope.apply = function (id) {
             
                    var parameter = 'member_id=' + memberId + '&job_id=' + id+'&lang='+lang;
                    var url = config.post_apply_job + parameter;

                        $http.get(url)
                        .then(function (response) {
                            $scope.message = response.data.message;


                            if ($scope.message === 'Success') {
                                $scope.isDisabled = true;
                                $scope.errorTextVisible = false;
                                $scope.noerror = false;

                                $translate(['Welldone', 'Jobapplied']).then(function (translations) {
                                    $scope.headline = translations.Welldone;
                                    $scope.paragraph = translations.Jobapplied;

                                    $localstorage.showAlert($scope.headline, $scope.paragraph);

                                });
                              //  $localstorage.showAlert('Welldone', 'Job applied successfully!');
                                $scope.jobList = response.data.data;
                                for (var i = 0; i < $scope.jobList.length; i++) {
                                    if ($scope.jobList[i].job_status == "Applied") {
                                        $scope.jobList[i].isApplied = true;
                                        $scope.jobList[i].isNotApplied = false;
                                    }
                                    else {
                                        $scope.jobList[i].isApplied = false;
                                        $scope.jobList[i].isNotApplied = true;
                                    }
                                }

                            }

                            else {
                                $scope.isDisabled = true;
                                $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                    $scope.headline = translations.Oops;
                                    $scope.paragraph = translations.Somethingwentwrong;

                                    $localstorage.showAlert($scope.headline, $scope.paragraph);

                                });
                                //$localstorage.showAlert('Oops!', 'something went wrong!');
                            }


                        });
                   
                }
         

        })
    }])

   //add chaturmas controller
    .controller('AddChaturmasCtrl', ['$translate', '$scope', '$http', '$state', '$stateParams', 'config', '$localstorage', '$ionicPopup', '$filter', function ($translate,$scope, $http, $state, $stateParams, config, $localstorage, $ionicPopup, $filter) {
        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            var contact = $localstorage.get(config.CONTACT);
            $scope.data = {};
            $scope.data.maharajName = '';
            $scope.data.memberName = '';
            $scope.data.date = '';
            $scope.data.place = '';
            $scope.errorMessage = '';
            $scope.errorTextVisible = false;
            $scope.noerror = true;
            $scope.isDisabled = false;
            $scope.userDetail = $localstorage.getObject(config.TAPASVI);

            var memberId = $localstorage.get(config.MEMBER_ID);

            $scope.isEmptyOrNull = function (value) {
                return !value;
            }


            $scope.showAlert = function (title, message) {

                var alertPopup = $ionicPopup.alert({
                    title: title,
                    template: message
                });

                alertPopup.then(function (res) {

                });
            };


            $scope.saveDetailsOnServer = function () {
                var maharajName = $scope.data.maharajName;
                var memberName = $scope.data.memberName;
                var date = $scope.data.date;
                var place = $scope.data.place;
                var appDate = $filter('date')(date, "yyyy-MM-dd");

                if ($scope.isEmptyOrNull(maharajName)) {
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_MAHARAJ;
                    return;
                }
                if ($scope.isEmptyOrNull(memberName)) {
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_MEMBER_NAME;
                    return;
                }
                if ($scope.isEmptyOrNull(date)) {
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_DATE;
                    return;
                }
                if ($scope.isEmptyOrNull(place)) {
                    $scope.errorTextVisible = true;
                    $scope.errorText = config.PLEASE_ENTER_PLACE;
                    return;
                }

                else {
                    var parameter = 'member_id=' + memberId + '&maharaj_name_english=' + maharajName + '&member_name_english=' + memberName + '&date=' + appDate + '&place_english=' + place;
                    var url = config.post_add_chaturmas_url + parameter;

                    if ($scope.data.maharajName === '' || $scope.data.memberName === '' || $scope.data.date === '' || $scope.data.place === '') {
                        $scope.errorTextVisible = true;
                        $scope.noerror = true;
                        $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                            $scope.headline = translations.Oops;
                            $scope.paragraph = translations.Somethingwentwrong;

                            $localstorage.showAlert($scope.headline, $scope.paragraph);

                        });
                       // $localstorage.showAlert('Warning', 'Some required fields are empty');
                    }
                    else {
                        $http.get(url)
                        .then(function (response) {
                            $scope.message = response.data.message;


                            if ($scope.message === 'Success') {
                                $scope.isDisabled = true;
                                $scope.errorTextVisible = false;
                                $scope.noerror = false;
                                $translate(['Welldone', 'Chaturmasadded']).then(function (translations) {
                                    $scope.headline = translations.Welldone;
                                    $scope.paragraph = translations.Chaturmasadded;

                                    $localstorage.showAlert($scope.headline, $scope.paragraph);

                                });
                               // $localstorage.showAlert('Welldone', 'Chaturmas has been added successfully!');
                                $scope.data.maharajName = '';
                                $scope.data.memberName = '';
                                $scope.data.date = '';
                                $scope.data.place = '';

                            }

                            else {
                                $scope.isDisabled = true;
                                $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                    $scope.headline = translations.Oops;
                                    $scope.paragraph = translations.Somethingwentwrong;

                                    $localstorage.showAlert($scope.headline, $scope.paragraph);

                                });
                               // $localstorage.showAlert('Oops!', 'something went wrong!');
                            }


                        });
                    }
                }
            }

        })
    }])

    .controller('MapCtrl', function($scope, $compile,$stateParams,$localstorage,config,$http) {
        $localstorage.internetConnection();
             // Set Header
              $scope.memberId = $localstorage.get(config.MEMBER_ID);
             var datalist = {member_id:$scope.memberId};
              $scope.markers = [];

                  $http({
                      url: "http://nirjaraap.com/api/user_position.php",
                      method: "POST",
                      params: datalist
                  }).then(function (res) {
                      $scope.response = res.data;
                       var  myLatlng = new google.maps.LatLng(res.data.latitide,res.data.longitude);
                        var mapOptions = {
                          center: myLatlng,
                          zoom: 16,
                          mapTypeId: google.maps.MapTypeId.ROADMAP
                        };
                     $scope.map = new google.maps.Map(document.getElementById("map"),
                            mapOptions);
                        var iconBase = 'img/'; 

                        google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
                      var marker = new google.maps.Marker({
                          map: $scope.map,
                          animation: google.maps.Animation.DROP,
                          position:  myLatlng
                      });
                  });
    for (var i = 0, length =res.data.data.length; i < length; i++) 
      {   
                var json =res.data.data[i];
                  var latLng = new google.maps.LatLng(json.temple_latitude,json.temple_longitude);
                       var icon = {
                        url :iconBase+'three.png',
                        scaledSize: new google.maps.Size(42,42), 
                        origin: new google.maps.Point(0,0), 
                        anchor: new google.maps.Point(0, 0)
                      } 
                      console.log(json.temple_latitude);
                       console.log(json.temple_longitude);
                      console.log(icon);
                 // Creating a marker and putting it on the map
                var marker = new google.maps.Marker({
                  position:latLng,
                  icon:icon,
                  map:$scope.map,
                 optimized:false
                });  
               
                
            }
                  });

    })

    //vihar stay ctrl
   .controller('AddViharStayCtrl', ['$translate', '$scope', '$localstorage', 'config', '$http', '$rootScope', function ($translate, $scope, $localstorage, config, $http, $rootScope) {
       $scope.$on('$ionicView.enter', function () {
           $localstorage.internetConnection();
           $scope.data = {};
           $scope.user = {};
           $scope.user = {};


           $scope.disableTap = function () {
               var container = document.getElementsByClassName('pac-container');
               angular.element(container).attr('data-tap-disabled', 'true');
               var backdrop = document.getElementsByClassName('backdrop');
               angular.element(backdrop).attr('data-tap-disabled', 'true');
               angular.element(container).on("click", function () {
                   document.getElementById('pac-input').blur();
               });
           };

           var input = (document.getElementById('pac-input'));

           // Create the autocomplete helper, and associate it with 
           // an HTML text input box. 

           var autocomplete = new google.maps.places.Autocomplete(input);

           autocomplete.setComponentRestrictions(
              { 'country': ['in'] });

           $scope.memberId = $localstorage.get(config.MEMBER_ID);
           var datalist = { member_id: $scope.memberId };
           $scope.markers = [];
           var getviharStayPosition = config.get_vihar_stay_position;
           $http({
               url: getviharStayPosition,
               method: "POST",
               params: datalist
           }).then(function (res) {

               $scope.response = res.data;
               config.vihar_latitude = res.data.latitide
               config.vihar_longitude = res.data.longitude;
               var myLatlng = new google.maps.LatLng(res.data.latitide, res.data.longitude);
               var mapOptions = {
                   center: myLatlng,
                   zoom: 16,
                   mapTypeId: google.maps.MapTypeId.ROADMAP,
                   animation: google.maps.Animation.DROP,
               };
               $scope.map = new google.maps.Map(document.getElementById("tapaddvihar"),
                      mapOptions);
               var iconBase = 'img/';
               var geocoder = new google.maps.Geocoder;
               var infoWindow = new google.maps.InfoWindow;

               marker = new google.maps.Marker({
                   position: myLatlng,
                   map: $scope.map,
               });

               for (var i = 0, length = res.data.data.length; i < length; i++) {
                   var json = res.data.data[i];
                   var latLng = new google.maps.LatLng(json.vihar_latitude, json.vihar_longitude);
                   var icon = {
                       url: iconBase + 'karamicon/d2-blue.svg',
                       scaledSize: new google.maps.Size(42, 42),
                       origin: new google.maps.Point(0, 0),
                       anchor: new google.maps.Point(0, 0)
                   }

                   // Creating a marker and putting it on the map
                   var marker = new google.maps.Marker({
                       position: latLng,
                       icon: icon,
                       map: $scope.map,
                       optimized: false
                   });


               }
               geocoder.geocode({ 'location': myLatlng }, function (results, status) {
                   if (status === 'OK') {
                       if (results[1]) {
                           $scope.map.setZoom(11);
                           var marker = new google.maps.Marker({
                               position: myLatlng,
                               map: $scope.map
                           });
                           config.vihar_address = results[1].formatted_address;
                           $scope.data.search = config.vihar_address;
                           infoWindow.setContent(results[1].formatted_address);
                           infoWindow.open($scope.map, marker);
                       } else {
                           window.alert('No results found');
                       }
                   } else {
                       window.alert('Geocoder failed due to: ' + status);
                   }
               });


           });

           $scope.isEmptyOrNull = function (value) {
               return !value;
           },

                     $scope.saveDetailsOnServer = function () {

                         if ($scope.isEmptyOrNull($scope.data.Name) || $scope.isEmptyOrNull($scope.data.contact) || $scope.isEmptyOrNull($scope.data.jain_family_around)) {

                             $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                 $scope.headline = translations.Oops;
                                 $scope.paragraph = translations.Somethingwentwrong;

                                 $localstorage.showAlert($scope.headline, $scope.paragraph);

                             });
                             // $localstorage.showAlert("Oops!", "some required field are empty!");
                             return;
                         }
                         try {
                             var addressText = autocomplete.getPlace();
                             var latitude = addressText.geometry.location.lat();
                             var longitude = addressText.geometry.location.lng();
                             var formatted_address = addressText.formatted_address;
                             var city = addressText.vicinity;
                         } catch (e)
                         { }
                         var lat = config.vihar_latitude;
                         var parameter = 'name=' + $scope.data.Name + '&contact=' + $scope.data.contact + '&city=' + config.vihar_address + '&member_id=' + $scope.memberId + "&vihar_latitude=" + lat + "&vihar_longitude=" + config.vihar_longitude
                             + "&vihar_description=" + "" + "&vihar_address=" + config.vihar_address + "&jain_family_around=" + $scope.data.jain_family_around;
                         //osc.dotphi.com/nirjna-app/api/post_vihar_stay.php?name=sumedh&contact=1234567891&city=nashik
                         var url = config.post_add_vihar_url + parameter;

                         if ($scope.data.Name == '' || $scope.data.contact == '') {
                             $scope.errorTextVisible = true;
                             $scope.noerror = true;
                             $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                 $scope.headline = translations.Oops;
                                 $scope.paragraph = translations.Somethingwentwrong;

                                 $localstorage.showAlert($scope.headline, $scope.paragraph);

                             });
                             //  $localstorage.showAlert('Warning', 'Some required fields are empty');
                         }
                         else {
                             $http.get(url)
                             .then(function (response) {
                                 $scope.message = response.data.message;

                                 if ($scope.message === 'Success') {
                                     $scope.isDisabled = true;

                                     $scope.errorTextVisible = false;
                                     $scope.noerror = false;

                                     $scope.data.contact = '';
                                     $scope.data.name = '';
                                     $scope.data.jainfamilies = '';
                                     $scope.data.location = '';

                                     $translate(['Welldone', 'Viharadded']).then(function (translations) {
                                         $scope.headline = translations.Welldone;
                                         $scope.paragraph = translations.Viharadded;

                                         $localstorage.showAlert($scope.headline, $scope.paragraph, 'app.my-stay-listing');

                                     });
                                     //  $localstorage.showAlert('Welldone', 'Vihar is added successfully!');
                                 }

                                 else {
                                     $scope.isDisabled = true;
                                     $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                         $scope.headline = translations.Oops;
                                         $scope.paragraph = translations.Somethingwentwrong;

                                         $localstorage.showAlert($scope.headline, $scope.paragraph);

                                     });
                                     //    $localstorage.showAlert('Oops!', response.data.error_msg);
                                 }


                             });
                         }
                     }

       });

       // Code will be here
   }])

    //add samaj seva ctrl
   .controller('addSamajsevaCtrl', ['$translate', '$filter', '$scope', '$localstorage', 'config', '$http', '$rootScope', function ($translate, $filter, $scope, $localstorage, config, $http, $rootScope) {

       $scope.data = {};
       $localstorage.internetConnection();


       $scope.memberId = $localstorage.get(config.MEMBER_ID);
       $scope.data.name = $localstorage.get(config.MEMBER_NAME);
       // $scope.data.contact = parseInt('9638527412');
       $scope.data.contact = parseInt($localstorage.get(config.CONTACT));
       $scope.data.location = '';

       var datalist = { member_id: $scope.memberId };

       $scope.isEmptyOrNull = function (value) {
           return !value;
       },

       $scope.disableTap = function () {
           var container = document.getElementsByClassName('pac-container');
           angular.element(container).attr('data-tap-disabled', 'true');
           var backdrop = document.getElementsByClassName('backdrop');
           angular.element(backdrop).attr('data-tap-disabled', 'true');
           angular.element(container).on("click", function () {
               document.getElementById('pac-input').blur();
           });
       };


       var input = (document.getElementById('pac-input'));

       // Create the autocomplete helper, and associate it with 
       // an HTML text input box. 

       var autocomplete = new google.maps.places.Autocomplete(input);

       autocomplete.setComponentRestrictions(
       { 'country': ['in'] });

       // Search temple list

       // Code will be here
       $scope.user = {};
       $scope.user = {};
       $scope.user = {};
       $scope.memberId = $localstorage.get(config.MEMBER_ID);
       var datalist = { member_id: $scope.memberId };
       $scope.markers = [];

       $http({
           url: "http://nirjaraap.com/api/active_smajseva.php",
           method: "POST",
           params: datalist
       }).then(function (res) {
           $scope.response = res.data;
           console.log(res.data);
           config.vihar_latitude = res.data.longitude;
           config.vihar_longitude = res.data.latitude;
           $scope.data.lat = res.data.latitude;
           $scope.data.long = res.data.longitude;;

           var myLatlng = new google.maps.LatLng(res.data.latitude, res.data.longitude);
           var mapOptions = {
               center: myLatlng,
               zoom: 16,
               mapTypeId: google.maps.MapTypeId.ROADMAP,
               animation: google.maps.Animation.DROP,
           };

           var iconBase = 'img/';
           var geocoder = new google.maps.Geocoder;
           var infoWindow = new google.maps.InfoWindow;




           geocoder.geocode({ 'location': myLatlng }, function (results, status) {
               if (status === 'OK') {
                   if (results[1]) {

                       config.vihar_address = results[1].formatted_address;

                       $scope.data.location = results[1].formatted_address;
                   } else {
                       window.alert('No results found');
                   }
               } else {
                   window.alert('Geocoder failed due to: ' + status);
               }
           });


       });
       // var address = $scope.search;


       $scope.saveDetails = function () {

           var contact = $scope.data.contact;
           var member_id = $scope.memberId;
           var member_name = $scope.data.name;
           var km = $scope.data.kilometre;
           var from = $scope.data.timeFrom;
           var to = $scope.data.timeTo;
           var date = $scope.data.date;



           $scope.isVisible = false;
           $scope.errorText = '';


           $scope.markers = [];

           var sevaDate = $filter('date')(date, "yyyy-MM-dd");

           var fromTime = $filter('date')(from, "HH:mm a");
           var toTime = $filter('date')(to, "HH:mm a");
           if ($scope.isEmptyOrNull(contact)) {
               $scope.isVisible = true;
               $translate(['SomeFields']).
                   then(function (translations) {
                       $scope.errorText = translations.SomeFields;
                   });
               return;
           }
           if ($scope.isEmptyOrNull(member_name)) {
               $scope.isVisible = true;
               $translate(['SomeFields']).
                   then(function (translations) {
                       $scope.errorText = translations.SomeFields;
                   });
               return;
           }
           if ($scope.isEmptyOrNull(km)) {
               $scope.isVisible = true;
               $translate(['SomeFields']).
                   then(function (translations) {
                       $scope.errorText = translations.SomeFields;
                   });
               return;
           }

           if (to <= from) {
               $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                   $scope.headline = translations.Oops;
                   $scope.paragraph = translations.Somethingwentwrong;

                   $localstorage.showAlert($scope.headline, $scope.paragraph);

               });
               $localstorage.showAlert('Oops!', 'Please enter valid time interval!');
               return;
           }

           else {
               var datalist = 'member_id=' + member_id + '&name=' + member_name + '&km=' + km + '&time_from=' + fromTime + '&time_to=' + toTime + '&date=' + sevaDate + '&latitude=' + $scope.data.lat + '&longitude=' + $scope.data.long + '&address=' + $scope.data.location + '&contact=' + $scope.data.contact;
               var url = config.post_active_samaj_seva + datalist;
               console.log('samaj url :' + url);

               $http.get(url)
                          .then(function (response) {
                              $scope.message = response.data.message;
                              if ($scope.message === 'Success') {
                                  $scope.isDisabled = true;
                                  $scope.errorTextVisible = false;
                                  $scope.noerror = false;

                                  $translate(['Welldone', 'Samajsevaadded']).then(function (translations) {
                                      $scope.headline = translations.Oops;
                                      $scope.paragraph = translations.Samajsevaadded;

                                      $localstorage.showAlert($scope.headline, $scope.paragraph, 'app.samajseva_list');

                                  });
                                  // $localstorage.showAlert('Welldone', 'Samajseva has been added successfully!');
                                  $scope.data.timeTo = "";
                                  $scope.data.timeFrom = "";
                                  $scope.data.date = "";
                                  $scope.data.kilometre = "";
                                  $scope.data.search = "";
                                  $scope.data.name = "";
                                  $scope.data.contact = "";
                                  $scope.data.date = "";
                                  $scope.data.kilometre = "";

                              }

                              else {
                                  $scope.isDisabled = true;
                                  $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                      $scope.headline = translations.Oops;
                                      $scope.paragraph = translations.Somethingwentwrong;

                                      $localstorage.showAlert($scope.headline, $scope.paragraph);

                                  });
                                  // $localstorage.showAlert('Oops!', 'something went wrong!');
                              }

                          })

           };

           // Code to write to Firebase will be here
       }




   }])

   .controller('PlaylistCtrl', function ($scope, $stateParams) {
    })

    .controller('LoginCtrl', function ($scope, $state) {
        $scope.internetConnection();
        $scope.LogIn = function (user) {
            $state.go('app.playlists');
        };

    })
 
    //VatratPachakan Controller
    .controller('VartaPachkanCtrl', ['$state', 'PachkanModel', '$cordovaFile', '$cordovaMedia', '$sce', '$scope', '$localstorage', 'config', '$http', '$rootScope', '$ionicModal', function ($state, PachkanModel, $cordovaFile, $cordovaMedia, $sce, $scope, $localstorage, config, $http, $rootScope, $ionicModal) {

        $scope.$on('$ionicView.beforeLeave', function () {
            $localstorage.internetConnection();
            // Anything you can think of
            try {
                $scope.media.stop();
                $scope.media.release();
            }
            catch (e) {
            }
        });

        $scope.$on('$ionicView.enter', function () {

            $scope.data = {};
            $scope.showFlag = '';
            $scope.currentLocation = '';
            $localstorage.internetConnection();
            $scope.memberId = $localstorage.get(config.MEMBER_ID);

            $scope.add = function () {
                var alarmTime = new Date();
                alarmTime.setMinutes(alarmTime.getMinutes() + 1);
                $cordovaLocalNotification.add({
                    id: "1234",
                    date: alarmTime,
                    message: "This is a message",
                    title: "This is a title",
                    autoCancel: true,
                    sound: null
                }).then(function () {
                    alert("Notification 1234 Scheduled: ");
                });
            };

            $scope.isScheduled = function () {
                $cordovaLocalNotification.isScheduled("1234").then(function (isScheduled) {
                    alert("Notification 1234 Scheduled: " + isScheduled);
                });
            }

            $scope.playMedia = function () {
                $scope.showPlayBtn = false;
                $scope.media.play();
            };

            $scope.pauseMedia = function () {
                $scope.showPlayBtn = true;
                $scope.media.pause();
            };

            $scope.stopMedia = function () {
                $scope.showPlayBtn = true;
                $scope.media.stop();
            };
            $scope.$on('destroy', function () {
                $scope.media.release();
            })

            var get_advertisement = config.get_advertisement_url;
            $http.get(get_advertisement)
               .then(function (response) {

                   $scope.addList = response.data.result;

               });

            var locate = config.get_current_position + 'member_id=' + $scope.memberId;
            console.log(locate);
            $http.get(locate).then(function (response) {

                var latitude = response.data.latitide;
                var longitude = response.data.longitude;
                var lang = $localstorage.get(config.LANGUAGE_NAME);
                console.log("latlong:" + response.data.latitide + ' ' + response.data.longitude);
                var geocoder;
                geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(latitude, longitude);

                geocoder.geocode(
                    { 'latLng': latlng },
                    function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[0]) {
                                var add = results[0].formatted_address;

                                var value = add.split(",");

                                count = value.length;
                                country = value[count - 1];
                                state = value[count - 2];
                                city = value[count - 3];
                                $scope.currentLocation = city;
                                cityId = city.trim();
                                $scope.templeCity = cityId; //city name updated
                                String.prototype.trim = function () {
                                    return this.replace(/^\s+|\s+$/g, '');
                                };

                            }
                            else {
                                alert("address not found");
                            }
                        }
                        else {
                            alert("Geocoder failed due to: " + status);
                        }
                    }
                );

                var parameter = latitude + "," + longitude
                var URL = config.autoselect + parameter;
                $http({
                    url: URL,
                    method: "GET",

                }).then(function (res) {
                    var result = res;

                    console.log(res);
                    var timeStamp = res.data.timeZoneId;
                    var datalist = { longitude: longitude, latitude: latitude, timezone: timeStamp, lang: lang };
                    console.log();
                    $http({
                        url: config.get_vrath_pachkan,
                        method: "GET",
                        params: datalist
                    }).then(function (response) {

                        $scope.error_msg = response.data.error_msg;
                        $scope.message = response.data.message;

                        if ($scope.message === 'success') {
                            $scope.errorTextVisible = false;
                            $scope.noerror = false;
                            $scope.pachkanList = response.data.result;
                        }
                        else {
                            if ($scope.error_msg === 'Records not found') {
                                $scope.errorTextVisible = true;
                                $scope.noerror = true;
                                $scope.errorMessage = $scope.error_msg;
                            }
                        }
                    });

                })

            });


            $scope.disableTap = function () {
                var container = document.getElementsByClassName('pac-container');
                angular.element(container).attr('data-tap-disabled', 'true');
                var backdrop = document.getElementsByClassName('backdrop');
                angular.element(backdrop).attr('data-tap-disabled', 'true');
                angular.element(container).on("click", function () {
                    document.getElementById('pac-input-varth-pachkan').blur();
                });
            };


            var input = (document.getElementById('pac-input-varth-pachkan'));


            var autocomplete = new google.maps.places.Autocomplete(input);

            autocomplete.setComponentRestrictions(
            { 'country': ['in'] });

            $scope.user = {};
            $scope.user = {};
            $scope.user = {};
            $scope.memberId = $localstorage.get(config.MEMBER_ID);

            $scope.myFilter = function (item) {
                return item.Title == 'Sunset' || item.Title == 'Sunrise';
            };
            $scope.mantraFilter = function (item) {
                return item.Title != 'Sunset' && item.Title != 'Sunrise';
            };
            $scope.showMantra = function () {

                $localstorage.showAlertImg('Navkarsi');

            }

            $ionicModal.fromTemplateUrl('templates/image_pachkan.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
            });

            $scope.openModal = function () {
                $scope.modal.show();
            };

            $scope.closeModal = function () {
                $scope.modal.hide();
            };

            //Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function () {
                $scope.modal.remove();
            });
            // Execute action on hide modal
            $scope.$on('modal.hide', function () {
                // Execute action
            });
            // Execute action on remove modal
            $scope.$on('modal.removed', function () {
                // Execute action
            });
            $scope.$on('modal.shown', function () {
                console.log('Modal is shown!');
            });


            $scope.checkFileIsExists = function (url, index) {

                var filename = url.substring(url.lastIndexOf('/') + 1);
                var downloadPath = cordova.file.dataDirectory + filename;
                console.log("file exists :" + downloadPath);
                $cordovaFile.checkFile(cordova.file.dataDirectory, filename)
                  .then(function (success) {
                      $scope.pathurl = downloadPath.replace('file://', '');
                      console.log("file exists");
                      $scope.pachkanList[index].setPathUrl = $scope.pathurl;
                      $scope.media = $cordovaMedia.newMedia($scope.pathurl);

                  }, function (error) {
                      console.log("file not exists");
                      $scope.pachkanList[index].setPathUrl = '';
                  });
            }

            $scope.openReadMantraPage = function () {


                //PachkanModel.setMantra(mantra);

                $state.go("app.read_play_varth_pachkan", {});
            }


            $scope.downloadFileAndPlay = function (downloadUrl, index, pachakan, type) {


                if (downloadUrl == "") {
                    console.log("error : ");
                    return;
                }

                console.log("result some : " + downloadUrl);
                var filename = downloadUrl.substring(downloadUrl.lastIndexOf('/') + 1);

                var fileTransfer = new FileTransfer();
                var uri = encodeURI(downloadUrl);
                var downloadPath = cordova.file.dataDirectory + filename;
                $cordovaFile.checkFile(cordova.file.dataDirectory, filename)
                  .then(function (success) {
                      // don't download if file already exists!
                      console.log(filename + " file found");
                      $scope.pathurl = downloadPath.replace('file://', '');
                      console.log($scope.pathurl);
                      var mantra = {};
                      mantra.setPathUrl = $scope.pathurl;
                      mantra.description = pachakan.pachkan_mantra;
                      mantra.mantra_id = pachakan.vrat_pachkan_id;
                      mantra.title = pachakan.Title;
                      $scope.showFlag = '';
                      $scope.pachkanList[index].setPathUrl = $scope.pathurl;
                      $scope.openReadMantraPage(mantra);
                      // 
                  }, function (error) {
                      // download if file is not exists!
                      if (type == 'stanak' || type === 'stanak')
                          $scope.showFlag = pachakan.Title + 'stanak';
                      else
                          $scope.showFlag = pachakan.Title;
                      console.log("downloadPath : " + downloadPath + "$scope.showFlag:" + $scope.showFlag);
                      fileTransfer.download(
                       uri,
                       downloadPath,
                       function (entry) {

                           $scope.showFlag = '';
                           $scope.savepath = entry.toURL();
                           console.log("result : " + $scope.savepath);
                           $scope.pathurl = downloadPath.replace('file://', '');
                           console.log("after download:" + $scope.pathurl);
                           var mantra = {};
                           mantra.setPathUrl = $scope.pathurl;
                           mantra.description = pachakan.pachkan_mantra;
                           mantra.mantra_id = pachakan.vrat_pachkan_id;
                           mantra.title = pachakan.Title;
                           $scope.showFlag = '';
                           $scope.pachkanList[index].setPathUrl = $scope.pathurl;
                           $scope.openReadMantraPage(mantra);


                       },
                       function (error) {
                           $scope.showFlag = 'error';

                           window.alert("No audio present");
                           console.log("result : " + error);
                       }

                   );
                      console.log("before :kml file NOT found");
                      console.log(error);
                  });;

            }

            //audio function is here
            var audio = null;
            $scope.myTrack = [];
            $scope.playAudioTemple = function (pachkan) {
                console.log(pachkan.temple_audio);
                $scope.myTrack = {
                    url: pachkan.temple_audio,
                    artist: pachkan.Title,
                    title: pachkan.Title,

                }
                /* if (audio != null) {
                     audio.pause();
                     audio.stop();
                     audio.release();
                     audio = null;
 
                 }
                 if (templeAudio != null) {
 
                     audio = new Audio(templeAudio);
                     audio.play();
                 }*/

            }
            $scope.playAudioSathank = function (pachkan) {

                console.log(pachkan.sthanak_audio);
                $scope.myTrack = {
                    url: pachkan.sthanak_audio,
                    artist: pachkan.Title,
                    title: pachkan.Title,

                }

            }

            $scope.saveDetails = function () {
                var addressText = autocomplete.getPlace();
                var latitude = addressText.geometry.location.lat();
                var longitude = addressText.geometry.location.lng();

                var parameter = latitude + "," + longitude
                var URL = config.autoselect + parameter;
                $http({
                    url: URL,
                    method: "GET",

                }).then(function (res) {
                    var result = res;

                    console.log(res);
                    var timeStamp = res.data.timeZoneId;
                    var datalist = { longitude: longitude, latitude: latitude, timezone: timeStamp, lang: lang };
                    console.log();
                    $http({
                        url: config.get_vrath_pachkan,
                        method: "GET",
                        params: datalist
                    }).then(function (response) {

                        $scope.error_msg = response.data.error_msg;
                        $scope.message = response.data.message;

                        if ($scope.message === 'success') {
                            $scope.errorTextVisible = false;
                            $scope.noerror = false;
                            $scope.pachkanList = response.data.result;
                        }
                        else {
                            if ($scope.error_msg === 'Records not found') {
                                $scope.errorTextVisible = true;
                                $scope.noerror = true;
                                $scope.errorMessage = $scope.error_msg;
                            }
                        }
                    });

                });

                // Code to write to Firebase will be here
            }
        });
    }])

    //my temple listing
    .controller('Mytemplelist', ['config', '$localstorage', '$scope', '$http', '$state', '$stateParams', function (config, $localstorage, $scope, $http, $state, $stateParams) {

        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
                $scope.templelists = {};
                $scope.errorMessage = '';
                $scope.errorTextVisible = false;
                $scope.noerror = true;
                var lang = $localstorage.get(config.LANGUAGE_NAME);
                var memberId = $localstorage.get(config.MEMBER_ID);
                var url = config.my_temple_list + memberId+'&lang='+lang;

                $http.get(url).then(function (response) {

                    $scope.error_msg = response.data.error_msg;
                    $scope.message = response.data.message;

                    if ($scope.message === 'success') {
                        $scope.errorTextVisible = false;
                        $scope.noerror = false;
                        $scope.templelists = response.data.result;
                    }
                    else {
                        if ($scope.error_msg === 'Records not found') {
                            $scope.errorTextVisible = true;
                            $scope.noerror = true;
                            $scope.errorMessage = $scope.error_msg;
                        }
                    }
                    // TempletModel.setTempleList($scope.templeList);
                    // $state.go("app.temple-listing", {});
                });
            });
        }])

    //gallery section ctrl
   .controller('gallarydetails', ['config', '$http', '$scope', '$state', '$stateParams', 'Gallerymodel', '$localstorage', function (config, $http, $scope, $state, $stateParams, Gallerymodel, $localstorage) {
       $scope.$on('$ionicView.enter', function () {

           $localstorage.internetConnection();
           $scope.gallerylist = Gallerymodel.getimagelist();

           $scope.blockImage = function (imageId) {
               var member_id = $localstorage.get(config.LANGUAGE_NAME);
               var url = config.block_gallary_image + 'gallery_id=' + imageId + '&objection_mem_id=' + member_id;
               $http.get(url).then(function (response) {

                   $scope.error_msg = response.data.error_msg;
                   $scope.message = response.data.message;

                   if ($scope.message === 'Success') {
                       $localstorage.showAlert('Done!', 'Post is now blocked!');
                       $scope.gallerylist = response.data.data;
                   }
                   else {
                       if ($scope.error_msg === 'Records not found') {
                           $localstorage.showAlert('Oops!', 'Something Went Wrong');
                       }
                   }
                   // TempletModel.setTempleList($scope.templeList);
                   // $state.go("app.temple-listing", {});
               });
           }
       });

   }])

   //add tab ctrl
  .controller('AddTabCtrl', ['config', '$scope', '$http', '$state', '$stateParams', function (config, $scope, $http, $state, $stateParams) {

      $scope.$on('$ionicView.enter', function () {
         
         $scope.openPage = function (pageName) {
             $state.go(pageName, {});
         };

        
     })
  
  }])

   //SettingCtrl
  .controller('SettingCtrl', ['config', '$localstorage', '$scope', '$http', '$state', '$stateParams', function (config, $localstorage, $scope, $http, $state, $stateParams) {

         $scope.$on('$ionicView.enter', function () {
             $localstorage.internetConnection();
             $scope.data = {};
             $scope.guruisChecked = false;
             $scope.templeKey = "temple_notification";
             $scope.packanKey = "pachkan_samay_notification";
             $scope.activeKey = "active_samaj_seva_notification";
             $scope.guruKey = "guru_tracking_notification";
             var memberId = $localstorage.get(config.MEMBER_ID);


             var get_setting = config.get_setting_url + 'member_id=' + memberId;
             $http.get(get_setting).then(function (response) {
                 // list of subgroup that user is allowed to track 
                 $scope.message = response.data.message;

                 if ($scope.message == 'success') {
                     $scope.data = response.data.result;
                     $scope.temple = $scope.data[0].temple_notification;
                     $scope.pachkan = $scope.data[0].pachkan_samay_notification;
                     $scope.active = $scope.data[0].active_samaj_seva_notification;
                     $scope.guru = $scope.data[0].guru_tracking_notification;

                     if ($scope.temple == 'on')
                         $scope.templeisChecked = true;

                     else
                         $scope.templeisChecked = false;

                     if ($scope.pachkan == 'on')
                         $scope.pachkanisChecked = true;

                     else
                         $scope.pachkanisChecked = false;

                     if ($scope.active == 'on')
                         $scope.activeisChecked = true;

                     else
                         $scope.activeisChecked = false;

                     if ($scope.guru == 'on')
                         $scope.guruisChecked = true;

                     else
                         $scope.guruisChecked = false;
                 }
                 else {
                     $scope.error_msg = response.data.error_msg;
                 }
             });


             $scope.setNotificationStatus = function (statusvalue, keyValue) {
                 if (statusvalue)
                     status = 'on';
                 else
                     status = 'off';


                 var post_setting = config.post_setting_url + 'member_id=' + memberId + '&notification_status=' + status + '&key=' + keyValue;

                 $http.get(post_setting)
               .then(function (response) {
                   $scope.res = response.data.result;
               });
             }


         });
     }])
  
 //guru security ctrl
  .controller('AddSecurityNumberCtrl', ['$translate', 'config', '$localstorage', '$scope', '$http', '$state', '$stateParams', '$ionicPopup', function ($translate,config, $localstorage, $scope, $http, $state, $stateParams, $ionicPopup) {

      $scope.$on('$ionicView.enter', function () {
          $localstorage.internetConnection();
          $scope.errorTextVisible = false;
          $scope.noerror = true;
          $scope.isDisabled = false;
          $scope.editFlag = true;
          $scope.addFlag = false;
          var delete_id = '';
          var edit_id = '';
          $scope.data = {};
          $scope.securityList = {};
          $scope.memberId = $localstorage.get(config.MEMBER_ID);


          $scope.isEmptyOrNull = function (value) {
              return !value;
          }


          $scope.showAlert = function (title, message) {

              var alertPopup = $ionicPopup.alert({
                  title: title,
                  template: message
              });

              alertPopup.then(function (res) {

              });
          };

          var url = config.get_guru_contacts + $scope.memberId;
          $http.get(url).then(function (response) {

              $scope.error_msg = response.data.error_msg;
              $scope.message = response.data.message;

              if ($scope.message === 'success') {
                  $scope.errorTextVisible = false;
                  $scope.noerror = false;
                  $scope.securityList = response.data.data;
              }
              else {
                  if ($scope.error_msg === 'Records not found') {
                      $scope.errorTextVisible = true;
                      $scope.noerror = true;
                      $scope.errorMessage = $scope.error_msg;
                  }
              }
              // TempletModel.setTempleList($scope.templeList);
              // $state.go("app.temple-listing", {});
          });

          $scope.saveDetails = function () {

              if ($scope.isEmptyOrNull($scope.data.name)) {
                  $scope.errorTextVisible = true;
                  $scope.errorText = config.PLEASE_ENTER_CONTACT_PERSON;
                  return;
              }
              if ($scope.isEmptyOrNull($scope.data.number)) {
                  $scope.errorTextVisible = true;
                  $scope.errorText = config.PLEASE_ENTER_NUMBER;
                  return;
              }

              var post_number = config.post_security_number + 'member_id=' + $scope.memberId + '&contact_person_name=' + $scope.data.name + '&contact_no=' + $scope.data.number;

              if ($scope.data.name == '' || $scope.data.number == '') {
                  $scope.errorTextVisible = true;
                  $scope.noerror = true;
                  $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                      $scope.headline = translations.Oops;
                      $scope.paragraph = translations.Somethingwentwrong;

                      $localstorage.showAlert($scope.headline, $scope.paragraph);

                  });
                 // $localstorage.showAlert('Warning', 'Some required fields are empty');
              }
              $http.get(post_number)
                .then(function (response) {
                    $scope.message = response.data.message;

                    if ($scope.message == "success") {
                        $scope.securityList = response.data.data;
                        $scope.isDisabled = true;
                        $scope.errorTextVisible = false;
                        $scope.noerror = false;
                        $translate(['Welldone', 'Contactadded']).then(function (translations) {
                             $scope.headline = translations.Oops;
                             $scope.paragraph = translations.Contactadded;

                             $localstorage.showAlert($scope.headline, $scope.paragraph);

                         });

                   //     $localstorage.showAlert('Welldone', 'Contact has been added successfully!');
                        $scope.data.name = "";
                        $scope.data.number = "";
                    }
                    else {
                        $scope.isDisabled = true;
                        $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                            $scope.headline = translations.Oops;
                            $scope.paragraph = translations.Somethingwentwrong;

                            $localstorage.showAlert($scope.headline, $scope.paragraph);

                        });
                        //$localstorage.showAlert('Oops!', 'something went wrong!');
                    }
                });
          }

          $scope.editDetails = function (name, number, id) {
              edit_id = id;
              $scope.data.name = name;
              $scope.data.number = parseInt(number);
              $scope.editFlag = false;
              $scope.addFlag = true;
          }

          $scope.edit = function () {

              if ($scope.isEmptyOrNull($scope.data.name)) {
                  $scope.errorTextVisible = true;
                  $scope.errorText = config.PLEASE_ENTER_CONTACT_PERSON;
                  return;
              }
              if ($scope.isEmptyOrNull($scope.data.number)) {
                  $scope.errorTextVisible = true;
                  $scope.errorText = config.PLEASE_ENTER_NUMBER;
                  return;
              }

              var edit_number = config.edit_guru_contact + edit_id + '&contact_person_name=' + $scope.data.name + '&contact_no=' + $scope.data.number + "&member_id=" + $scope.memberId;

              if ($scope.data.name == '' || $scope.data.number == '') {
                  $scope.errorTextVisible = true;
                  $scope.noerror = true;
                  $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                      $scope.headline = translations.Oops;
                      $scope.paragraph = translations.Somethingwentwrong;

                      $localstorage.showAlert($scope.headline, $scope.paragraph);

                  });
                 // $localstorage.showAlert('Warning', 'Some required fields are empty');
              }
              $http.get(edit_number)
                .then(function (response) {
                    $scope.message = response.data.message;

                    if ($scope.message == "success") {
                        $scope.securityList = response.data.data;
                        $scope.editFlag = true;
                        $scope.addFlag = false;
                        $scope.isDisabled = true;
                        $scope.errorTextVisible = false;
                        $scope.noerror = false;

                        $translate(['Welldone', 'Contacteditted']).then(function (translations) {
                            $scope.headline = translations.Welldone;
                            $scope.paragraph = translations.Contacteditted;

                            $localstorage.showAlert($scope.headline, $scope.paragraph);

                        });
                       // $localstorage.showAlert('Welldone', 'Contact has been editted successfully!');
                        $scope.data.name = "";
                        $scope.data.number = "";
                    }
                    else {
                        $scope.isDisabled = true;
                        $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                            $scope.headline = translations.Oops;
                            $scope.paragraph = translations.Somethingwentwrong;

                            $localstorage.showAlert($scope.headline, $scope.paragraph);

                        });
                       // $localstorage.showAlert('Oops!', 'something went wrong!');
                    }
                });
          }

          $scope.showConfirm = function () {

              var confirmPopup = $ionicPopup.confirm({
                  title: 'Delete',
                  template: 'Are you sure you want to delete?'
              });

              confirmPopup.then(function (res) {
                  if (res) {
                      var delete_number = config.delete_guru_contact + delete_id + "&member_id=" + $scope.memberId;

                      $http.get(delete_number)
               .then(function (response) {
                   $scope.message = response.data.message;

                   if ($scope.message == "success") {
                       $scope.securityList = response.data.data;

                       $translate(['Welldone', 'Contactdeleted']).then(function (translations) {
                           $scope.headline = translations.Welldone;
                           $scope.paragraph = translations.Contactdeleted;

                           $localstorage.showAlert($scope.headline, $scope.paragraph);

                       });
                     ///  $localstorage.showAlert('Welldone', 'Contact has been deleted successfully!');

                   }
                   else {
                       $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                           $scope.headline = translations.Oops;
                           $scope.paragraph = translations.Somethingwentwrong;

                           $localstorage.showAlert($scope.headline, $scope.paragraph);

                       });
                      // $localstorage.showAlert('Oops!', 'something went wrong!');
                   }
               })

                  } else {
                      console.log('Not sure!');
                  }
              });

          };

          //delete
          $scope.delete = function (id) {
              delete_id = id;
              $scope.showConfirm();

          }

      });
  }])
  
 //Calendar Ctrl
  .controller('CalendarCtrl', ['$ionicPopup', 'config', '$localstorage', '$scope', '$http', '$state', '$ionicSlideBoxDelegate', function ($ionicPopup, config, $localstorage, $scope, $http, $state, $ionicSlideBoxDelegate) {

      $scope.$on('$ionicView.enter', function () {
          $localstorage.internetConnection();
          $scope.currentLocation = '';
          $scope.memberId = $localstorage.get(config.MEMBER_ID);
          $calendar = $('[ui-calendar]');
          $scope.data = {};
          $scope.pachkanList = {};
          $scope.tithi = '';
          var date = new Date(),
     d = date.getDate(),
     m = date.getMonth(),
     y = date.getFullYear();
          n = date.getTime();
          h = date.getHours();
          min = date.getMinutes();
          mnth = m + 1;

          $scope.changeView = function (view) {
              $calendar.fullCalendar('changeView', view);
          };

          var locate = config.get_current_position + 'member_id=' + $scope.memberId;
          $http.get(locate).then(function (response) {

              var latitude = response.data.latitide;
              var longitude = response.data.longitude;

              var geocoder;
              geocoder = new google.maps.Geocoder();
              var latlng = new google.maps.LatLng(latitude, longitude);
              console.log("location value received" + longitude + ',' + latitude);;
              if (latitude != 'null' && longitude != 'null' && latitude != '' && longitude != '') {
                  geocoder.geocode(
                      { 'latLng': latlng },
                      function (results, status) {
                          if (status == google.maps.GeocoderStatus.OK) {
                              if (results[0]) {
                                  var add = results[0].formatted_address;

                                  var value = add.split(",");

                                  count = value.length;
                                  country = value[count - 1];
                                  state = value[count - 2];
                                  city = value[count - 3];
                                  $scope.currentLocation = city;
                                  cityId = city.trim();
                                  $scope.templeCity = cityId; //city name updated
                                  String.prototype.trim = function () {
                                      return this.replace(/^\s+|\s+$/g, '');
                                  };

                                  console.log("city name received:" + $scope.templeCity);;

                                  var lang = $localstorage.get(config.LANGUAGE_NAME);

                                  var get_location_wise_add = config.get_location_wise_add + 'location=' + $scope.templeCity;
                                  console.log("url:" + get_location_wise_add);;
                                  $http.get(get_location_wise_add).then(function (response) {

                                      $scope.error_msg = response.data.error_msg;
                                      $scope.message = response.data.message;

                                      if ($scope.message === 'success') {
                                          console.log("add recevied:");;
                                          $scope.errorTextVisible = false;
                                          $scope.noerror = false;
                                          $scope.currenCityAddList = response.data.result;
                                      }
                                      else {
                                          if ($scope.error_msg === 'No Advertisement Found') {
                                              $scope.errorTextVisible = true;
                                              $scope.noerror = true;
                                              $scope.errorMessage = $scope.error_msg;
                                          }
                                      }

                                  })

                              }
                              else {
                                  // alert("address not found");
                              }
                          }
                          else {
                              // alert("Geocoder failed due to: " + status);
                          }
                      }
                  );
              }


          });

          /* config object */
          $scope.uiConfig = {

              eventClick: function (date) {
                  $scope.alertMessage = (date.title + ' was clicked ');
                  /* var alertPopup = $ionicPopup.alert({
                      title: date,
                      template: date
                  });

                  alertPopup.then(function (res) {
                     // $state.go('app.playlists');
                  });*/
              },
              dayClick: $scope.alertEventOnClick,
              eventDrop: $scope.alertOnDrop,
              eventResize: $scope.alertOnResize,
              eventRender: $scope.eventRender
          }
          $scope.events = [{
              title: 'All Day Event',
              start: new Date(y, m, 1)
          }, {
              title: 'Long Event',
              start: new Date(y, m, d - 5),
              end: new Date(y, m, d - 2)
          }, {
              id: 999,
              title: 'Repeating Event',
              start: new Date(y, m, d - 3, 16, 0),
              allDay: false
          }, {
              id: 999,
              title: 'Repeating Event',
              start: new Date(y, m, d + 4, 16, 0),
              allDay: false
          }, {
              title: 'Birthday Party',
              start: new Date(y, m, d + 1, 19, 0),
              end: new Date(y, m, d + 1, 22, 30),
              allDay: false
          }, {
              title: 'Click for Google',
              start: new Date(y, m, 28),
              end: new Date(y, m, 29),
              url: 'https://google.com/'
          }];

          $scope.eventSources = [$scope.events];

          //dd=11&mm=08&yyyy=2017&hour=11&min=19
          var parameter = 'dd=' + d + '&mm=' + mnth + '&yyyy=' + y + '&hour=' + h + '&min=' + min;
          var getTithi = config.get_tithi_api + parameter;

          $http.get(getTithi).then(function (response) {
              $scope.tithi = response.data.tithi;
          })

          var locate = config.get_current_position + 'member_id=' + $scope.memberId;
          $http.get(locate).then(function (response) {



              var latitude = response.data.latitide;
              var longitude = response.data.longitude;

              var geocoder;
              geocoder = new google.maps.Geocoder();
              var latlng = new google.maps.LatLng(latitude, longitude);



              /* geocoder.geocode(
                   { 'latLng': latlng },
                   function (results, status) {
                       if (status == google.maps.GeocoderStatus.OK) {
                           if (results[0]) {
                               var add = results[0].formatted_address;

                               var value = add.split(",");

                               count = value.length;
                               country = value[count - 1];
                               state = value[count - 2];
                               city = value[count - 3];
                               $scope.currentLocation = city;
                               cityId = city.trim();
                               $scope.templeCity = cityId; //city name updated
                               String.prototype.trim = function () {
                                   return this.replace(/^\s+|\s+$/g, '');
                               };
                           }
                           else {
                               alert("address not found");
                           }
                       }
                       else {
                           alert("Geocoder failed due to: " + status);
                       }
                   }
               );*/

              var parameter = latitude + "," + longitude
              var URL = config.autoselect + parameter;
              $http({
                  url: URL,
                  method: "GET",

              }).then(function (res) {
                  var result = res;

                  console.log(res);
                  var timeStamp = res.data.timeZoneId;
                  var datalist = { longitude: longitude, latitude: latitude, timezone: timeStamp };
                  console.log();
                  $http({
                      url: config.get_vrath_pachkan,
                      method: "GET",
                      params: datalist
                  }).then(function (response) {

                      $scope.error_msg = response.data.error_msg;


                      $scope.message = response.data.message;

                      if ($scope.message === 'success') {
                          $scope.errorTextVisible = false;
                          $scope.noerror = false;

                          $scope.pachkanList = response.data.result;



                      }
                      else {
                          if ($scope.error_msg === 'Records not found') {
                              $scope.errorTextVisible = true;
                              $scope.noerror = true;
                              $scope.errorMessage = $scope.error_msg;
                          }
                      }
                  });

              })

          });
      });
  }])

 //Knowledge Ctrl
  .controller('KnowledgeCtrl', ['$ionicPopup', 'config', '$localstorage', '$scope', '$http', '$state', '$stateParams', function ($ionicPopup, config, $localstorage, $scope, $http, $state, $stateParams) {

      $scope.$on('$ionicView.enter', function () {
          $localstorage.internetConnection();
          $scope.upvasList = {};
          $scope.errorMessage = '';
          $scope.data = {};
          $scope.errorTextVisible = false;
          $scope.noerror = true;
          $scope.userUpvasList = {};
          var lang = $localstorage.get(config.LANGUAGE_NAME);
          $scope.getKnowledge = function () {
              var getAllKnowledgeUrl = config.get_all_knowledge + '?lang=' + lang;;

              $http.get(getAllKnowledgeUrl).then(function (response) {

                  $scope.error_msg = response.data.error_msg;
                  $scope.message = response.data.message;

                  if ($scope.message === 'Success') {
                      $scope.errorTextVisible = false;
                      $scope.noerror = false;
                      $scope.knowledgList = response.data.data;

                      var getKnowledge = config.get_knowledge_url + memberId + '&lang=' + lang;;

                      $http.get(getKnowledge).then(function (response) {

                          $scope.error_msg = response.data.error_msg;
                          $scope.message = response.data.message;

                          if ($scope.message == 'Success') {
                              $scope.userknowledgList = response.data.data;
                              $scope.updateknowledgeList();
                          }
                      });
                  }
                  else {
                      if ($scope.error_msg === 'Records not found') {
                          $scope.errorTextVisible = true;
                          $scope.noerror = true;
                          $scope.errorMessage = $scope.error_msg;
                      }
                  }
                  // TempletModel.setTempleList($scope.templeList);
                  // $state.go("app.temple-listing", {});

              });
          }

          $scope.getKnowledge();
          var memberId = $localstorage.get(config.MEMBER_ID);
          $scope.addKnowledge = function (knowledge_id, knowledge_name) {

              //member_id=5&knowledge_id=1,2&knowledge=photography
              if(knowledge_id == "")
                  var url = config.post_knowledge_url + 'member_id=' + memberId + '&knowledge=' + knowledge_name + '&lang=' + lang;;

              if (knowledge_name == "")
                  var url = config.post_knowledge_url + 'member_id=' + memberId + '&knowledge_id=' + knowledge_id + '&lang=' + lang;;

              $http.get(url).then(function (response) {

                  $scope.error_msg = response.data.error_msg;
                  $scope.message = response.data.message;

                  if ($scope.message === 'Success') {
                      $scope.errorTextVisible = false;
                      $scope.noerror = false;
                      $scope.data.knowledge = '';
                      $scope.userknowledgList = response.data.data;
                      $scope.getKnowledge();

                  }
                  else {
                      if ($scope.message === 'fail') {
                          $scope.errorTextVisible = true;
                          $scope.noerror = true;
                          $scope.errorMessage = $scope.error_msg;
                      }
                  }

              });
          }


          $scope.showAlert = function (knowledge_id, knowledge_name) {

              var alertPopup = $ionicPopup.alert({
                  title: "Add Knowledge",
                  template: 'Are you sure you want to add ' + knowledge_name + ' knowledge?'
              });

              alertPopup.then(function (res) {
                  if (res)
                      $scope.addKnowledge(knowledge_id, "");
              });
          }

          $scope.isAddedInUserknowledgeList = function (value) {
              var knowledgechecked = false;

              for (var i = 0; i < $scope.userknowledgList.length; i++) {
                  var knowledgeId = $scope.userknowledgList[i].knowledge_id;
                  if (knowledgeId == value) {
                      knowledgechecked = true;
                      return knowledgechecked;
                  }
                  else {
                      knowledgechecked = false;

                  }

              }
              return knowledgechecked;

          }

          $scope.updateknowledgeList = function () {

              for (var i = 0; i < $scope.knowledgList.length; i++) {
                  var flag = $scope.isAddedInUserknowledgeList($scope.knowledgList[i].knowledge_id);
                  var id = i;
                  $scope.knowledgList[i].isAdded = flag;


              }
          }


          $scope.addNewKnowledge = function (knowledge_name) {

            
              if (knowledge_name == "" || !angular.isDefined(knowledge_name))
                  return;
              var alertPopup = $ionicPopup.alert({
                  title: "Add Knowledge",
                  template: 'Are you sure you want to add ' + knowledge_name + ' knowledge?'
              });

              alertPopup.then(function (res) {
                  if (res)
                      $scope.addKnowledge("", knowledge_name);
              });
          }


      });
  }])

    //tap record
    .controller('TapRecordCtrl', ['$ionicPopup', 'config', '$localstorage', '$scope', '$http', '$state', '$stateParams', 'TapasviModel', function ($ionicPopup, config, $localstorage, $scope, $http, $state, $stateParams, TapasviModel) {

        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            $scope.upvasList = {};
            $scope.errorMessage = '';
            $scope.errorTextVisible = false;
            $scope.noerror = true;
            $scope.userUpvasList = {};
            var lang = $localstorage.get(config.LANGUAGE_NAME);
            var member_id = TapasviModel.getTapasvi();
         

            var getUserTapasya = config.get_user_upvas_list + 'key=get_tap' + '&member_id=' + member_id + '&lang=' + lang;;;

                    $http.get(getUserTapasya).then(function (response) {

                        $scope.error_msg = response.data.error_msg;
                        $scope.message = response.data.message;

                        if ($scope.message == 'success') {
                            $scope.upvasList = response.data.result;
                           
                        }

                    });


        });
    }])

    //Comment Ctrl
    .controller('CommentsCtrl', ['$ionicPopup', 'config', '$localstorage', '$scope', '$http', '$state', '$stateParams', function ($ionicPopup, config, $localstorage, $scope, $http, $state, $stateParams) {

        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            $scope.upvasList = {};
            $scope.errorMessage = '';
            $scope.data = {};
            $scope.errorTextVisible = false;
            $scope.noerror = true;
            $scope.userUpvasList = {};
            tapasvi_id = $localstorage.get(config.tapassya_id);
            tap_id = $localstorage.get(config.tap_id);
            var lang = $localstorage.get(config.LANGUAGE_NAME);
            $scope.getTapComments = function () {
               
                var getComments = config.get_tapasvi_comments + "tapasvi_id=" + tapasvi_id + '&tapassya_id=' + tap_id + '&lang=' + lang;;;

                        $http.get(getComments).then(function (response) {

                            $scope.error_msg = response.data.error_msg;
                            $scope.message = response.data.message;

                            if ($scope.message == 'Success') {
                                $scope.errorTextVisible = false;
                                $scope.commentsList = response.data.data;
                               
                            }
                            else {
                                $scope.errorTextVisible = true;
                                $scope.commentsList = {};
                                $scope.errorMessage = response.data.error_msg;
                            }
                        });
                   
                    }
               
            $scope.getTapComments();
            var memberId = $localstorage.get(config.MEMBER_ID);
            $scope.addNewComment = function (comment) {

                var url = config.post_tapasvi_comments + 'member_id=' + memberId + '&tapasvi_id=' + tapasvi_id + '&tapassya_id=' + tap_id + '&comments=' + comment + '&lang=' + lang;;;

               
                $http.get(url).then(function (response) {

                    $scope.error_msg = response.data.error_msg;
                    $scope.message = response.data.message;

                    if ($scope.message === 'Success') {
                        $scope.errorTextVisible = false;
                        $scope.noerror = false;
                        $scope.data.comment = '';
                        $scope.commentsList = response.data.data;

                    }
                    else {
                        if ($scope.message === 'Fail') {
                            $scope.errorTextVisible = true;
                            $scope.noerror = true;
                            $scope.errorMessage = $scope.error_msg;
                        }
                    }

                });
            }

        });
    }])

     // add events ctrl
    .controller('AddEventsCtrl', ['$translate', '$Utility', 'config', '$scope', '$http', '$state', '$stateParams', '$localstorage', '$cordovaInAppBrowser', '$filter', function ($translate, $Utility, config, $scope, $http, $state, $stateParams, $localstorage, $cordovaInAppBrowser, $filter) {

        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            $scope.selectedCity = null;
            $scope.data = {};
            $scope.memberId = $localstorage.get(config.MEMBER_ID);

            $scope.data.contactNo = '';

            $scope.data.personName = "";
            $scope.data.email = "";
            $scope.data.contactNo = "";
            $scope.data.businessName = "";
            $scope.data.countryId = "";
            $scope.data.cityId = "";
            $scope.data.stateId = "";
            $scope.data.address = "";
            $scope.data.product = "";
            $scope.data.businessCat = "";

            $scope.isDisabled = false;
            $scope.errorMessage = '';
            $scope.errorTextVisible = false;
            $scope.noerror = true;

            $scope.showAlert = function (title, message) {

                var alertPopup = $ionicPopup.alert({
                    title: title,
                    template: message
                });

                alertPopup.then(function (res) {
                    $state.go('app.playlists');
                });
            };

            $scope.isEmptyOrNull = function (value) {
                return !value;
            },
            $scope.saveDetailsOnServer = function () {

                var memberId = $localstorage.get(config.MEMBER_ID);
                var from = $filter('date')($scope.data.fromDate, "dd MMM yyyy");
                var to = $filter('date')($scope.data.toDate, "dd MMM yyyy");
                var timefrom = $filter('date')($scope.data.timeFrom, "HH:mm a");
                var timeto = $filter('date')($scope.data.timeTo, "HH:mm a");
                var fromDt = from + " - " + timefrom;
                var toDt = to + " - " + timeto;

                var title = $scope.data.eventName;
                var info = $scope.data.eventInfo;
                var organiseBy = $scope.data.organisedBy;
                var address = $scope.data.address;
                var datefrom = $scope.data.fromDate;
                var dateto = $scope.data.toDate;
                var personContact = $scope.data.personName;
                var email = $scope.data.email;
                var contactNo = $scope.data.contactNo;


                $scope.isVisible = false;
                $scope.errorText = '';


                if ($scope.isEmptyOrNull(title)) {
                    $scope.isVisible = true;
                    $translate(['SomeFields']).
                        then(function (translations) {
                            $scope.errorText = translations.SomeFields;
                        });
                    return;
                }

                if ($scope.isEmptyOrNull(info)) {
                    $scope.isVisible = true;
                    $translate(['SomeFields']).
                        then(function (translations) {
                            $scope.errorText = translations.SomeFields;
                        });
                    return;
                }
                if ($scope.isEmptyOrNull(organiseBy)) {
                    $scope.isVisible = true;
                    $translate(['SomeFields']).
                        then(function (translations) {
                            $scope.errorText = translations.SomeFields;
                        });
                    return;
                }

                if ($scope.isEmptyOrNull(address)) {
                    $scope.isVisible = true;
                    $translate(['SomeFields']).
                        then(function (translations) {
                            $scope.errorText = translations.SomeFields;
                        });
                    return;
                }
                if ($scope.isEmptyOrNull(personContact)) {
                    $scope.isVisible = true;
                    $translate(['SomeFields']).
                        then(function (translations) {
                            $scope.errorText = translations.SomeFields;
                        });
                    return;
                }

                if ($scope.isEmptyOrNull(contactNo)) {
                    $scope.isVisible = true;
                    $translate(['SomeFields']).
                        then(function (translations) {
                            $scope.errorText = translations.SomeFields;
                        });
                    return;
                }

                if ($scope.isEmptyOrNull(datefrom)) {
                    $scope.isVisible = true;
                    $translate(['SomeFields']).
                        then(function (translations) {
                            $scope.errorText = translations.SomeFields;
                        });
                    return;
                }
                if ($scope.isEmptyOrNull(dateto)) {
                    $scope.isVisible = true;
                    $translate(['SomeFields']).
                        then(function (translations) {
                            $scope.errorText = translations.SomeFields;
                        });
                    return;
                }

                else {
                    var parameter = 'member_id=' + memberId + '&event_title=' + $scope.data.eventName + '&event_description=' + $scope.data.eventInfo + '&event_location=' + $scope.data.address + '&event_venue=' + $scope.data.address + '&event_from=' + fromDt + '&event_to=' + toDt + '&event_organizer=' + $scope.data.organisedBy + '&contact_person=' + $scope.data.personName + '&contact=' + $scope.data.contactNo + '&email=' + $scope.data.email;
                    var url = config.post_add_events + parameter;
                    $http.get(url)
                                 .then(function (response) {
                                     $scope.message = response.data.message;

                                     if ($scope.message === 'success') {
                                         var eventId = response.data.data.last_inserted_id;

                                         $scope.isDisabled = true;
                                         $scope.errorTextVisible = false;
                                         $scope.noerror = false;

                                         $translate(['Welldone', 'Eventadded']).then(function (translations) {
                                             $scope.headline = translations.Welldone;
                                             $scope.paragraph = translations.Eventadded;

                                             $localstorage.showAlert($scope.headline, $scope.paragraph);

                                         });
                                         //  $localstorage.showAlert('Welldone', 'Event is added successfully!'); 
                                         $localstorage.set(config.Event_Id, eventId);
                                         $scope.data.eventName = '';
                                         $scope.data.personName = '';
                                         $scope.data.contactNo = '';
                                         $scope.data.eventInfo = '';
                                         $scope.data.address = '';
                                         $scope.data.email = '';
                                         $scope.data.product = '';
                                         $scope.data.fromDate = '';
                                         $scope.data.toDate = '';
                                         $scope.data.organisedBy = '';

                                         $state.go("app.event_image", {});
                                     }

                                     else {
                                         $scope.isDisabled = true;
                                         $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                             $scope.headline = translations.Oops;
                                             $scope.paragraph = translations.Somethingwentwrong;

                                             $localstorage.showAlert($scope.headline, $scope.paragraph);

                                         });
                                         //$localstorage.showAlert('Oops!', 'Something went wrong!');
                                     }


                                 });
                }
            }

        });
    }])

    // add events image ctrl
     .controller('AddEventsImageCtrl', ['config', '$scope', '$http', '$state', '$stateParams', '$localstorage', '$ionicPopup', function (config, $scope, $http, $state, $stateParams, $localstorage, $ionicPopup) {
         $scope.$on('$ionicView.enter', function () {
             $localstorage.internetConnection();
             $scope.uploadImage = function (img) {
                 if (img == 'image1') {
                     $localstorage.set(config.Event_File, 'image1');
                 }
                 if (img == 'image2') {
                     $localstorage.set(config.Event_File, 'image2');
                 }
                 if (img == 'image3') {
                     $localstorage.set(config.Event_File, 'image3');
                 }

                 $scope.upload_flag = true;
                
                 $state.go("app.upload_event_image", {});
             }
         })
     }])

   //hide tab directive
    .directive('hideTabs', function ($rootScope) {
        return {
            restrict: 'A',
            link: function ($scope, $el) {
                $rootScope.hideTabs = 'tabs-item-hide';
                $scope.$on('$destroy', function () {
                    $rootScope.hideTabs = '';
                });
            }
        };
    })

     .factory('MantraModel', function ($http) {

        var mantra = {};

        return {
            getMantra: function () {
              
                return mantra;
            },
            setMantra: function (jainMantra) {

                mantra = jainMantra;

            }
        }
     })

     .factory('PachkanModel', function ($http) {

         var mantra = {};

         return {
             getMantra: function () {

                 return mantra;
             },
             setMantra: function (jainMantra) {

                 mantra = jainMantra;

             }
         }
     })

    //detail jain mantra
    .controller('DetailJainMantraCtrl', ['$cordovaMedia', '$sce', '$ionicPopup', 'config', '$localstorage', '$scope', '$http', '$state', '$stateParams', 'MantraModel', function ($cordovaMedia,$sce, $ionicPopup, config, $localstorage, $scope, $http, $state, $stateParams, MantraModel) {

        $scope.$on('$ionicView.beforeLeave', function () {
            $localstorage.internetConnection();
            // Anything you can think of
            try {
                $scope.media.stop();
                $scope.media.release();
            }
            catch (e) {
            }
        });
        $scope.$on('$ionicView.enter', function () {

            $scope.$sce = $sce;
            $scope.mantra = {};
            $scope.showPlayBtn = true;
            $scope.mantra = MantraModel.getMantra();
            $scope.mantra = MantraModel.getMantra();
            $scope.newpath = $scope.mantra.setPathUrl;
            console.log("path:" + $scope.newpath);

           

            $scope.getMantraByLang = function (lang)
            {
                var getMantraByLang = config.get_mantra_by_lang + 'mantra_id=' + $scope.mantra.mantra_id + '&lang=' + lang;
                $http.get(getMantraByLang).then(function (response) {
                    try {

                        $scope.mantra = response.data.result[0];
                    }
                    catch (e)
                    {
                        console.log(e);
                    }
                    
                })
            }
         
                $scope.media = $cordovaMedia.newMedia($scope.newpath);

                $scope.playMedia = function () {
                    $scope.showPlayBtn = false;
                    $scope.media.play();
                };

                $scope.pauseMedia = function () {
                    $scope.showPlayBtn = true;
                    $scope.media.pause();
                };

                $scope.stopMedia = function () {
                    $scope.showPlayBtn = true;
                    $scope.media.stop();
                };
                $scope.$on('destroy', function () {
                    $scope.media.release();
                })

            });

       
    }])
 
    //AnupurviDetailctrl
    .controller('AnupurviDetailctrl', ['$ionicPopup', 'config', '$localstorage', '$scope', '$http', '$state', '$stateParams', 'TapasviModel', function ($ionicPopup, config, $localstorage, $scope, $http, $state, $stateParams, TapasviModel) {

        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            $scope.showPrev = true;
            $scope.showNext = true;
            $scope.slide1 = {"slideNo":1,"slide":[[1, 2, 3, 4, 5], [2, 1, 3, 4, 5], [1, 3, 2, 4, 5], [3, 1, 2, 4, 5], [2, 3, 1, 4, 5], [3, 2, 1, 4, 5]]};
            $scope.slide2 = { "slideNo": 2, "slide": [[1, 2, 4, 3, 5], [2, 1, 4, 3, 5], [1, 4, 2, 3, 5], [4, 1, 2, 3, 5], [2, 4, 1, 3, 5], [4, 2, 1, 3, 5]] };
            $scope.slide3 = { "slideNo": 3, "slide": [[1, 3, 4, 2, 5], [3, 1, 4, 2, 5], [1, 4, 3, 2, 5], [4, 1, 3, 2, 5], [3, 4, 1, 2, 5], [4, 3, 1, 2, 5]] };
            $scope.slide4 = { "slideNo": 4, "slide": [[2, 3, 4, 1, 5], [3, 2, 4, 1, 5], [2, 4, 3, 1, 5], [4, 2, 3, 1, 5], [3, 4, 2, 1, 5], [4, 3, 2, 1, 5]] };
            $scope.slide5 = { "slideNo": 5, "slide":[[1, 2, 3, 5, 4], [2, 1, 3, 5, 4], [1, 3, 2, 5, 4], [3, 1, 2, 5, 4], [2, 3, 1, 5, 4], [3, 2, 1, 5, 4]]};
            $scope.slide6 = { "slideNo": 6, "slide":[[1, 2, 5, 3, 4], [2, 1, 5, 3, 4], [1, 5, 2, 3, 4], [5, 1, 2, 3, 4], [2, 5, 1, 3, 4], [5, 2, 1, 3, 4]]};
            $scope.slide7 = { "slideNo": 7, "slide":[[1, 3, 5, 2, 4], [3, 1, 5, 2, 4], [1, 5, 3, 2, 4], [5, 1, 3, 2, 4], [3, 5, 1, 2, 4], [5, 3, 1, 2, 4]]};
            $scope.slide8 = { "slideNo": 8, "slide":[[2, 3, 5, 1, 4], [3, 2, 5, 1, 4], [2, 5, 3, 1, 4], [5, 2, 3, 1, 4], [3, 5, 2, 1, 4], [5, 3, 2, 1, 4]]};
            $scope.slide9 = { "slideNo": 9, "slide":[[1, 2, 4, 5, 3], [2, 1, 4, 5, 3], [1, 4, 2, 5, 3], [4, 1, 2, 5, 3], [2, 4, 1, 5, 3], [4, 2, 1, 5, 3]]};
            $scope.slide10 = { "slideNo": 10, "slide":[[1, 2, 5, 4, 3], [2, 1, 5, 4, 3], [1, 5, 2, 4, 3], [5, 1, 2, 4, 3], [2, 5, 1, 4, 3], [5, 2, 1, 4, 3]]};
            $scope.slide11 = { "slideNo": 11, "slide": [[1, 4, 5, 2, 3], [4, 1, 5, 2, 3], [1, 5, 4, 2, 3], [5, 1, 4, 2, 3], [4, 5, 1, 2, 3], [5, 4, 1, 2, 3]] };
            $scope.slide12 = { "slideNo": 12, "slide":[[2, 4, 5, 1, 3], [4, 2, 5, 1, 3], [2, 5, 4, 1, 3], [5, 2, 4, 1, 3], [4, 5, 2, 1, 3], [5, 4, 2, 1, 3]]};
              $scope.slide13 = { "slideNo": 13, "slide":[[1, 3, 4, 5, 2], [3, 1, 4, 5, 2], [1, 4, 3, 5, 2], [4, 1, 3, 5, 2], [3, 4, 1, 5, 2], [4, 3, 1, 5, 2]]};
              $scope.slide14 = { "slideNo": 14, "slide":[[1, 3, 5, 4, 2], [3, 1, 5, 4, 2], [1, 5, 3, 4, 2], [5, 1, 3, 4, 2], [3, 5, 1, 4, 2], [5, 3, 1, 4, 2]]};
              $scope.slide15 = { "slideNo": 15, "slide":[[1, 4, 5, 3, 2], [4, 1, 5, 3, 2], [1, 5, 4, 3, 2], [5, 1, 4, 3, 2], [4, 5, 1, 3, 2], [5, 4, 1, 3, 2]]};
              $scope.slide16 = { "slideNo": 16, "slide":[[3, 4, 5, 1, 2], [4, 3, 5, 1, 2], [3, 5, 4, 1, 2], [5, 3, 4, 1, 2], [4, 5, 3, 1, 2], [5, 4, 3, 1, 2]]};
              $scope.slide17 = { "slideNo": 17, "slide":[[2, 3, 4, 5, 1], [3, 2, 4, 5, 1], [2, 4, 3, 5, 1], [4, 2, 3, 5, 1], [3, 4, 2, 5, 1], [4, 3, 2, 5, 1]]};
              $scope.slide18 = { "slideNo": 18, "slide":[[2, 3, 5, 4, 1], [3, 2, 5, 4, 1], [2, 5, 3, 4, 1], [5, 2, 3, 4, 1], [3, 5, 2, 4, 1], [5, 3, 2, 4, 1]]};
              $scope.slide19 = { "slideNo": 19, "slide":[[2, 4, 5, 3, 1], [4, 2, 5, 3, 1], [2, 5, 4, 3, 1], [5, 2, 4, 3, 1], [4, 5, 2, 3, 1], [5, 4, 2, 3, 1]]};
              $scope.slide20 = { "slideNo": 20, "slide": [[3, 4, 5, 2, 1], [4, 3, 5, 2, 1], [3, 5, 4, 2, 1], [5, 3, 4, 2, 1], [4, 5, 3, 2, 1], [5, 4, 3, 2, 1]] };
              
              $scope.currentSlide = $scope.slide1;

              $scope.showCurrentMantra = function (mantraNum,row,col)
              {
                  $scope.currentNum = row + '' + col;
                  if (mantraNum == 1)
                      $scope.currentMantra = '';
              }

              $scope.setCurrentSlide = function (slideNo) {

                
                  if (slideNo < 1) {
                      $scope.showPrev = false;
                      return;
                  }
                  else
                      $scope.showPrev = true;

                  if (slideNo > 20){
                      $scope.showNext = false;
                      return;
                  }
                  else
                      $scope.showNext = true;
                 
                      

                  switch (slideNo) {
                      case 1:
                          $scope.currentSlide = $scope.slide1;
                          break;
                      case 2:
                          $scope.currentSlide = $scope.slide2;
                          break;
                      case 3:
                          $scope.currentSlide = $scope.slide3;
                          break;
                      case 4:
                          $scope.currentSlide = $scope.slide4;
                          break;
                      case 5:
                          $scope.currentSlide = $scope.slide5;
                          break;
                      case 6:
                          $scope.currentSlide = $scope.slide6;
                          break;
                      case 7:
                          $scope.currentSlide = $scope.slide7;
                          break;
                      case 8:
                          $scope.currentSlide = $scope.slide8;
                          break;
                      case 9:
                          $scope.currentSlide = $scope.slide9;
                          break;
                      case 10:
                          $scope.currentSlide = $scope.slide10;
                          break;
                      case 11:
                          $scope.currentSlide = $scope.slide11;
                          break;
                      case 12:
                          $scope.currentSlide = $scope.slide12;
                          break;
                      case 13:
                          $scope.currentSlide = $scope.slide13;
                          break;
                      case 14:
                          $scope.currentSlide = $scope.slide14;
                          break;
                      case 15:
                          $scope.currentSlide = $scope.slide15;
                          break;
                      case 16:
                          $scope.currentSlide = $scope.slide16;
                          break;
                      case 17:
                          $scope.currentSlide = $scope.slide17;
                          break;
                      case 18:
                          $scope.currentSlide = $scope.slide18;
                          break;
                      case 19:
                          $scope.currentSlide = $scope.slide19;
                          break;
                      case 20:
                          $scope.currentSlide = $scope.slide20;
                          break;
                      default:
                          $scope.currentSlide = $scope.slide1;
                  }
              };

          });
      }])

// add tap from profile
    .controller('AddTapFromProfileCtrl', ['$translate', '$ionicPopup', 'config', '$localstorage', '$scope', '$http', '$state', '$stateParams', 'TapasviModel', function ($translate, $ionicPopup, config, $localstorage, $scope, $http, $state, $stateParams, TapasviModel) {

        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            $scope.upvasList = {};
            $scope.errorMessage = '';
            $scope.errorTextVisible = false;
            $scope.noerror = true;
            $scope.countFlag = true;
            $scope.userUpvasList = {};
            $scope.data = {};
            var member_id = $localstorage.get(config.MEMBER_ID);
            var lang = $localstorage.get(config.LANGUAGE_NAME);
            $scope.isAddedInUserUpvasList = function (value, index) {
                var upvaschecked = false;

                for (var i = 0; i < $scope.userUpvasList.length; i++) {
                    var upvasId = $scope.userUpvasList[i].tapassya_id;
                    if (upvasId == value) {
                        upvaschecked = true;
                        $scope.upvasList[index].tapassya_count = $scope.userUpvasList[i].tapassya_count;
                        return upvaschecked;
                    }
                    else {
                        upvaschecked = false;

                    }

                }
                return upvaschecked;

            }

            $scope.updateUpvasList = function () {

                for (var i = 0; i < $scope.upvasList.length; i++) {
                    var flag = $scope.isAddedInUserUpvasList($scope.upvasList[i].tapassya_id, i);

                    $scope.upvasList[i].isAdded = flag;
                    if (flag) {
                        $scope.upvasList[i].isDisabled = true;
                        $scope.countFlag = false;
                    }
                    else
                        $scope.upvasList[i].isDisabled = false;
                    $scope.countFlag = true;

                }
            }

            $scope.getUpvasList = function () {
                var getAllTapasyaUrl = config.get_all_upvas+'?lang='+lang;

                $http.get(getAllTapasyaUrl).then(function (response) {

                    $scope.error_msg = response.data.error_msg;
                    $scope.message = response.data.message;

                    if ($scope.message === 'success') {
                        $scope.errorTextVisible = false;
                        $scope.noerror = false;
                        $scope.upvasList = response.data.result;

                        var getUserTapasya = config.get_tapassya_for_profile + 'member_id=' + member_id + '&lang=' + lang;;

                        $http.get(getUserTapasya).then(function (response) {

                            $scope.error_msg = response.data.error_msg;
                            $scope.message = response.data.message;

                            if ($scope.message == 'success') {
                                $scope.userUpvasList = response.data.result;
                                $scope.updateUpvasList();
                            }

                        });


                    }
                    else {
                        if ($scope.error_msg === 'Records not found') {
                            $scope.errorTextVisible = true;
                            $scope.noerror = true;
                            $scope.errorMessage = $scope.error_msg;
                        }
                    }
                });
            }

            $scope.getUpvasList();

            $scope.showPopUp = function (Title, id) {
                // Custom popup
                $translate(['AddCount', 'Save', 'Cancel']).then(function (translations) {

                    $scope.save = translations.Save;
                    $scope.cancle = translations.Cancel;
                    $scope.addCount = translations.AddCount;

                    var myPopup = $ionicPopup.show({
                        template: '<input type = "text" placeholder ="' + $scope.addCount + '" ng-model = "data.model">',
                        title: Title,
                        scope: $scope,

                        buttons: [
                           { text: $scope.cancle }, {
                               text: '<b>' + $scope.save + '</b>',
                               type: 'button-positive',
                               onTap: function (e) {

                                   var postAddCount = config.add_tapassya_count + 'member_id=' + member_id + '&tapassya_id=' + id + '&tapassya_count=' + $scope.data.model;

                                   if (!$scope.data.model) {
                                       //don't allow the user to close unless he enters model...

                                       //member_id=51&tapassya_id=1&tapassya_count=10

                                       e.preventDefault();

                                   } else {
                                       $http.get(postAddCount).then(function (response) {

                                           $scope.error_msg = response.data.error_msg;
                                           $scope.message = response.data.message;

                                           if ($scope.message == 'success') {
                                               $translate(['Welldone', 'Tapassyaadded']).then(function (translations) {
                                                   $scope.headline = translations.Welldone;
                                                   $scope.paragraph = translations.Tapassyaadded;

                                                   $localstorage.showAlert($scope.headline, $scope.paragraph);

                                               });
                                              // $localstorage.showAlert('Welldone', 'Tapassya has been added successfully!');
                                               $scope.getUpvasList();
                                               return $scope.data.model;
                                           }
                                           else {
                                               $scope.errorMessage = $scope.error_msg;
                                               $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                                   $scope.headline = translations.Oops;
                                                   $scope.paragraph = translations.Somethingwentwrong;

                                                   $localstorage.showAlert($scope.headline, $scope.paragraph);

                                               });

                                             //  $localstorage.showAlert('Oops', 'Something went wrong');
                                           }
                                       })
                                       return $scope.data.model;

                                   }
                               }
                           }
                        ]
                    });
                    myPopup.then(function (res) {
                        console.log('Tapped!', res);
                    });

                });

            }


        });
    }])

//Samaj Seva list ctrl
  .controller('SamajSevaListCtrl', ['$filter', '$scope', '$localstorage', 'config', '$http', '$rootScope', '$compile', function ($filter, $scope, $localstorage, config, $http, $rootScope, $compile) {

      $scope.data = {};
      $localstorage.internetConnection();
      $scope.dialNumber = function (number) {
          console.log("calling..");
          window.open('tel:' + '7588832626', '_system');
      }

      $scope.memberId = $localstorage.get(config.MEMBER_ID);
      $scope.data.name = $localstorage.get(config.MEMBER_NAME);
      // $scope.data.contact = parseInt('9638527412');
      $scope.data.contact = parseInt($localstorage.get(config.CONTACT));
      $scope.data.location = '';

      var datalist = { member_id: $scope.memberId };
      var lang = $localstorage.get(config.LANGUAGE_NAME);
      $scope.disableTap = function () {
          var container = document.getElementsByClassName('pac-container');
          angular.element(container).attr('data-tap-disabled', 'true');
          var backdrop = document.getElementsByClassName('backdrop');
          angular.element(backdrop).attr('data-tap-disabled', 'true');
          angular.element(container).on("click", function () {
              document.getElementById('pac-input').blur();
          });
      };


      var input = (document.getElementById('pac-input'));

      // Create the autocomplete helper, and associate it with 
      // an HTML text input box. 

      var autocomplete = new google.maps.places.Autocomplete(input);

      autocomplete.setComponentRestrictions(
      { 'country': ['in'] });

      // Search temple list
      $scope.getactivePepoleBylocation = function (city) {
          $http({
              url: "http://nirjaraap.com/api/get_nearby_active_samaj_sewak.php?location=" + city + '&lang=' + lang,
              method: "GET",

          }).then(function (res) {
              $scope.sevaList = res.data.result;
              console.log(res.data);

          })
      }
      // Code will be here
      $scope.user = {};
      $scope.memberId = $localstorage.get(config.MEMBER_ID);
      var datalist = { member_id: $scope.memberId };
      $scope.markers = [];

      $http({
          url: "http://nirjaraap.com/api/active_smajseva.php?" + 'lang=' + lang,
          method: "POST",
          params: datalist
      }).then(function (res) {
          $scope.response = res.data;
          console.log(res.data);
          config.vihar_latitude = res.data.longitude;
          config.vihar_longitude = res.data.latitude;
          var myLatlng = new google.maps.LatLng(res.data.latitude, res.data.longitude);

          var mapOptions = {
              center: myLatlng,
              zoom: 16,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              animation: google.maps.Animation.DROP,
          };
          $scope.map = new google.maps.Map(document.getElementById("smap"),
          mapOptions);
          var iconBase = 'img/';
          var geocoder = new google.maps.Geocoder;
          var contentString = "<div><button class='button button-clear button-positive' ng-click='clickTest()'>Click Me</button></div>";
          var compiled = $compile(contentString)($scope);
          var infoWindow = new google.maps.InfoWindow();

          marker = new google.maps.Marker({
              position: myLatlng,
              map: $scope.map,
          });
          $scope.sevaList = res.data.data.result;
          for (var i = 0, length = res.data.data.result.length; i < length; i++) {
              var json = res.data.data.result[i];
              var latLng = new google.maps.LatLng(json.act_latitude, json.act_longitude);
              var icon = {
                  url: 'img/icon/d11-blue.svg',
                  scaledSize: new google.maps.Size(42, 42),
                  origin: new google.maps.Point(0, 0),
                  anchor: new google.maps.Point(0, 0)
              }

              // Creating a marker and putting it on the map
              var marker = new google.maps.Marker({
                  position: latLng,
                  icon: icon,
                  map: $scope.map,
                  optimized: false
              });

              google.maps.event.addListener(marker, 'click', (function (marker, i) {
                  return function () {
                      /* console.log("event click");
                       var tel = res.data.data[i].act_contact;
                       // $scope.dialNumber(tel);
                       document.location.href = 'tel:' + tel;
                       console.log("event click 1");*/
                      infoWindow.setContent(res.data.data.result[i].act_name + "<br>" + res.data.data.result[i].act_contact + "<br>" + res.data.data.result[i].act_address);

                      infoWindow.open($scope.map, marker);
                  }
              })(marker, i));

              google.maps.event.addListener(infoWindow, 'click', (function (infoWindow, i) {
                  return function () {
                      /* console.log("event click");
                       var tel = res.data.data[i].act_contact;
                       // $scope.dialNumber(tel);
                       document.location.href = 'tel:' + tel;
                       console.log("event click 1");*/
                      window.alert(res.data.data.result[i].act_address);

                      // infoWindow.open($scope.map, marker);
                  }
              })(infoWindow, i));
          }

          geocoder.geocode({ 'location': myLatlng }, function (results, status) {
              if (status === 'OK') {
                  if (results[1]) {
                      $scope.map.setZoom(11);
                      var marker = new google.maps.Marker({
                          position: myLatlng,
                          map: $scope.map
                      });
                      config.vihar_address = results[1].formatted_address;
                      //infoWindow.setContent(results[1].formatted_address);
                      //infoWindow.open($scope.map, marker);
                      $scope.data.location = results[1].formatted_address;
                  } else {
                      window.alert('No results found');
                  }
              } else {
                  window.alert('Geocoder failed due to: ' + status);
              }
          });

          var geocoder;
          geocoder = new google.maps.Geocoder();
          var latlng = new google.maps.LatLng(res.data.latitude, res.data.longitude);

          geocoder.geocode(
              { 'latLng': latlng },
              function (results, status) {
                  if (status == google.maps.GeocoderStatus.OK) {
                      if (results[0]) {
                          var add = results[0].formatted_address;
                          var value = add.split(",");

                          count = value.length;
                          country = value[count - 1];
                          state = value[count - 2];
                          city = value[count - 3];
                          cityId = city.trim();
                          $scope.templeCity = cityId; //city name updated
                          String.prototype.trim = function () {
                              return this.replace(/^\s+|\s+$/g, '');
                          };
                          console.log('xyz');
                          // call 
                          //$scope.getactivePepoleBylocation(cityId);
                      }
                      else {
                          alert("address not found");
                      }
                  }
                  else {
                      alert("Geocoder failed due to: " + status);
                  }
              }
          );

      });
      // var address = $scope.search;

  }])

 //Knowledge of tapasvi Ctrl
  .controller('KnowledgeOfTapCtrl', ['$ionicPopup', 'config', '$localstorage', '$scope', '$http', '$state', '$stateParams', 'TapasviModel', function ($ionicPopup, config, $localstorage, $scope, $http, $state, $stateParams, TapasviModel) {

      $scope.$on('$ionicView.enter', function () {
          $localstorage.internetConnection();
          $scope.upvasList = {};
          $scope.errorMessage = '';
          $scope.data = {};
          $scope.errorTextVisible = false;
          $scope.noerror = true;
          $scope.userUpvasList = {};
          var lang = $localstorage.get(config.LANGUAGE_NAME);
          var memberId = TapasviModel.getTapasvi();
                      var getKnowledge = config.get_knowledge_url + memberId+'&lang='+lang;

                      $http.get(getKnowledge).then(function (response) {

                          $scope.error_msg = response.data.error_msg;
                          $scope.message = response.data.message;

                          if ($scope.message == 'Success') {
                              $scope.userknowledgList = response.data.data;
                             
                          }
                      });
                
      });
  }])

//Likes Ctrl
    .controller('LikesDetailCtrl', ['$ionicPopup', 'config', '$localstorage', '$scope', '$http', '$state', '$stateParams', function ($ionicPopup, config, $localstorage, $scope, $http, $state, $stateParams) {

        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
            $scope.likesList = {};
            $scope.errorMessage = '';
            $scope.data = {};
            $scope.errorTextVisible = false;
            $scope.noerror = true;
            var lang = $localstorage.get(config.LANGUAGE_NAME);
            tapasvi_id = $localstorage.get(config.tapassya_id);

            var getLikes = config.get_likes_details + "tapasvi_id=" + tapasvi_id+'&lang='+lang;

            $http.get(getLikes).then(function (response) {

                $scope.error_msg = response.data.error_msg;
                $scope.message = response.data.message;

                if ($scope.message == 'success') {
                    $scope.errorTextVisible = false;
                    $scope.likesList = response.data.result;

                }
                else {
                    $scope.errorTextVisible = true;
                    $scope.likesList = {};
                    $scope.errorMessage = response.data.error_msg;
                }
            });

            $scope.openDetailPage = function (id) {
                $localstorage.set(config.tapassya_id, id);
                $localstorage.set(config.tapassya_flag, true);

                $state.go("app.user_profile", {});

            };

        });
    }])

 //add tap
  .controller('AddTapOfTheDay', ['$ionicPopup', 'config', '$localstorage', '$scope', '$http', '$state', '$stateParams', function ($ionicPopup, config, $localstorage, $scope, $http, $state, $stateParams) {

      $scope.$on('$ionicView.enter', function () {
          $localstorage.internetConnection();
          $scope.upvasList = {};
          $scope.errorMessage = '';
          $scope.errorTextVisible = false;
          $scope.noerror = true;
          $scope.userUpvasList = {};
          var lang = $localstorage.get(config.LANGUAGE_NAME);
          var memberId = $localstorage.get(config.MEMBER_ID);
          $scope.addTapasya = function (tapassya_id) {

              var url = config.post_add_tapasya + '&member_id=' + memberId + '&tapassya_id=' + tapassya_id + '&lang='+lang;

              $http.get(url).then(function (response) {

                  $scope.error_msg = response.data.error_msg;
                  $scope.message = response.data.message;

                  if ($scope.message === 'success') {
                      $scope.errorTextVisible = false;
                      $scope.noerror = false;
                      $scope.userUpvasList = response.data.result;
                      $scope.updateUpvasList();

                  }
                  else {
                      if ($scope.message === 'fail') {
                          $scope.errorTextVisible = true;
                          $scope.noerror = true;
                          var alertPopup = $ionicPopup.alert({
                              title: "Warning",
                              template: $scope.error_msg
                          });
                      }
                  }

              });
          }

          $scope.addRecordTapasya = function (tapassya_id, status) {

              var url = config.post_add_tapasya + '&member_id=' + memberId + '&tapassya_id=' + tapassya_id + '&tap_status=' + status + '&lang='+lang;

              $http.get(url).then(function (response) {

                  $scope.error_msg = response.data.error_msg;
                  $scope.message = response.data.message;

                  if ($scope.message === 'success') {
                      $scope.errorTextVisible = false;
                      $scope.noerror = false;
                     // $scope.userUpvasList = response.data.result;
                      // $scope.updateUpvasList();
                      $scope.getApi();
                      var alertPopup = $ionicPopup.alert({
                          title: "Add Tap To Record",
                          template: 'Tap is added to record successfully'
                      });


                  }
                  else {
                      if ($scope.message === 'fail') {
                          $scope.errorTextVisible = true;
                          $scope.noerror = true;
                          var alertPopup = $ionicPopup.alert({
                              title: "Warning",
                              template: $scope.error_msg
                          });
                      }
                  }

              });
          }
          $scope.isAddedInUserUpvasList = function (value, index) {
              var upvaschecked = false;

              for (var i = 0; i < $scope.userUpvasList.length; i++) {
                  var upvasId = $scope.userUpvasList[i].tapassya_id;
                  if (upvasId == value) {
                      upvaschecked = true;
                      $scope.upvasList[index].tapassya_count = $scope.userUpvasList[i].tapassya_count;
                      $scope.upvasList[index].tap_status = $scope.userUpvasList[i].tap_status;
                      return upvaschecked;
                  }
                  else {
                      upvaschecked = false;

                  }

              }
              return upvaschecked;

          }

          $scope.updateUpvasList = function () {

              for (var i = 0; i < $scope.upvasList.length; i++) {
                  var flag = $scope.isAddedInUserUpvasList($scope.upvasList[i].tapassya_id, i);

                  $scope.upvasList[i].isAdded = flag;
                  if (flag) {
                      $scope.upvasList[i].isDisabled = true;

                  }
                  else
                      $scope.upvasList[i].isDisabled = false;

              }
          }

          $scope.showAlert = function (tapassya_id, tapasyya_name) {

              var alertPopup = $ionicPopup.confirm({
                  title: "Add Tap",
                  template: 'Are you sure you want to add this ' + tapasyya_name + ' tap ?'
              });

              alertPopup.then(function (res) {
                  if (res)
                      $scope.addTapasya(tapassya_id);
              });
          }


          $scope.showAlertRecord = function (tapassya_id, tapasyya_name) {

              var alertPopup = $ionicPopup.confirm({
                  title: "Add Tap",
                  template: 'Are you sure you want to add this ' + tapasyya_name + ' tap to record?'
              });

              alertPopup.then(function (res) {
                  if (res) {
                      var status = 'done';
                      $scope.addRecordTapasya(tapassya_id, status);
                  }
              });
          }

          $scope.getApi = function () {
              var getAllTapasyaUrl = config.get_all_upvas +'?lang=' + lang;;

              $http.get(getAllTapasyaUrl).then(function (response) {

                  $scope.error_msg = response.data.error_msg;
                  $scope.message = response.data.message;

                  if ($scope.message === 'success') {
                      $scope.errorTextVisible = false;
                      $scope.noerror = false;
                      $scope.upvasList = response.data.result;

                      var getUserTapasya = config.get_user_upvas_list + 'key=get_tap' + '&member_id=' + memberId;

                      $http.get(getUserTapasya).then(function (response) {

                          $scope.error_msg = response.data.error_msg;
                          $scope.message = response.data.message;

                          if ($scope.message == 'success') {
                              $scope.userUpvasList = response.data.result;
                              $scope.updateUpvasList();
                          }

                      });


                  }
                  else {
                      if ($scope.error_msg === 'Records not found') {
                          $scope.errorTextVisible = true;
                          $scope.noerror = true;
                          $scope.errorMessage = $scope.error_msg;
                      }
                  }
                  // TempletModel.setTempleList($scope.templeList);
                  // $state.go("app.temple-listing", {});
              });

          }
          $scope.getApi();
      });
  }])

// follower graph detail
    .controller('FollowerDetailCtrl', ['$translate', '$ionicPopup', 'config', '$localstorage', '$scope', '$http', '$state', '$stateParams', 'TapasviModel', function ($translate, $ionicPopup, config, $localstorage, $scope, $http, $state, $stateParams, TapasviModel) {

        $scope.$on('$ionicView.enter', function () {
            $localstorage.internetConnection();
           
            $scope.errorMessage = '';
            $scope.errorTextVisible = false;
            $scope.noerror = true;
            $scope.countFlag = true;
            $scope.userUpvasList = {};
            $scope.data = {};
            var lang = $localstorage.get(config.LANGUAGE_NAME);
            var member_id = $localstorage.get(config.MEMBER_ID);

                var getFollowerDetail = config.get_follower_detail;

                $http.get(getFollowerDetail).then(function (response) {

                    $scope.error_msg = response.data.error_msg;
                    $scope.message = response.data.message;

                    if ($scope.message === 'success') {
                        $scope.errorTextVisible = false;
                        $scope.noerror = false;
                        $scope.followerList = response.data.result.group_followers;

                    }
                    else {
                        if ($scope.error_msg === 'Records not found') {
                            $scope.errorTextVisible = true;
                            $scope.noerror = true;
                            $scope.errorMessage = $scope.error_msg;
                        }
                    }
                });

                var locate = config.get_current_position + 'member_id=' + member_id;
                $http.get(locate).then(function (response) {

                    var latitude = response.data.latitide;
                    var longitude = response.data.longitude;

                    var geocoder;
                    geocoder = new google.maps.Geocoder();
                    var latlng = new google.maps.LatLng(latitude, longitude);
                    console.log("location value received" + longitude + ',' + latitude);;
                    if (latitude != 'null' && longitude != 'null' && latitude != '' && longitude != '') {
                        geocoder.geocode(
                            { 'latLng': latlng },
                            function (results, status) {
                                if (status == google.maps.GeocoderStatus.OK) {
                                    if (results[0]) {
                                        var add = results[0].formatted_address;

                                        var value = add.split(",");

                                        count = value.length;
                                        country = value[count - 1];
                                        state = value[count - 2];
                                        city = value[count - 3];
                                        $scope.currentLocation = city;
                                        cityId = city.trim();
                                        $scope.templeCity = cityId; //city name updated
                                        String.prototype.trim = function () {
                                            return this.replace(/^\s+|\s+$/g, '');
                                        };

                                        console.log("city name received:" + $scope.templeCity);;

                                        var lang = $localstorage.get(config.LANGUAGE_NAME);

                                        var get_location_wise_add = config.get_location_wise_add + 'location=' + $scope.templeCity;
                                        console.log("url:" + get_location_wise_add);;
                                        $http.get(get_location_wise_add).then(function (response) {

                                            $scope.error_msg = response.data.error_msg;
                                            $scope.message = response.data.message;

                                            if ($scope.message === 'success') {
                                                console.log("add recevied:");;
                                                $scope.errorTextVisible = false;
                                                $scope.noerror = false;
                                                $scope.currenCityAddList = response.data.result;
                                            }
                                            else {
                                                if ($scope.error_msg === 'No Advertisement Found') {
                                                    $scope.errorTextVisible = true;
                                                    $scope.noerror = true;
                                                    $scope.errorMessage = $scope.error_msg;
                                                }
                                            }

                                        })

                                    }
                                    else {
                                        // alert("address not found");
                                    }
                                }
                                else {
                                    // alert("Geocoder failed due to: " + status);
                                }
                            }
                        );
                    }


                });
            
        });
    }])

    //population graph
.controller('DetailsPopularityGraph', ['$ionicPopup', 'config', '$localstorage', '$scope', '$http', '$state', '$stateParams', function ($ionicPopup, config, $localstorage, $scope, $http, $state, $stateParams) {

    $scope.$on('$ionicView.enter', function () {

        $localstorage.internetConnection();
        $scope.peoplecountList = {};
        $scope.errorMessage = '';
        $scope.errorTextVisible = false;
        $scope.noerror = true;
        $scope.peoplecountList = {};
        var memberId = $localstorage.get(config.MEMBER_ID);
        var lang= $localstorage.get(config.LANGUAGE_NAME);

        var url = config.get_details_popularity_graph+'?lang='+lang;

        $http.get(url).then(function (response) {


            $scope.error_msg = response.data.error_msg;
            $scope.message = response.data.message;

            if ($scope.message === 'success') {
                $scope.errorTextVisible = false;
                $scope.noerror = false;
                $scope.peoplecountList = response.data.data;
                console.log('openDetailPage');



            }
            else {
                if ($scope.message === 'fail') {
                    $scope.errorTextVisible = true;
                    $scope.noerror = true;
                    $scope.errorMessage = $scope.error_msg;
                }
            }

        });

        var locate = config.get_current_position + 'member_id=' + memberId;
        $http.get(locate).then(function (response) {

            var latitude = response.data.latitide;
            var longitude = response.data.longitude;

            var geocoder;
            geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng(latitude, longitude);
            console.log("location value received" + longitude + ',' + latitude);;
            if (latitude != 'null' && longitude != 'null' && latitude != '' && longitude != '') {
                geocoder.geocode(
                    { 'latLng': latlng },
                    function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[0]) {
                                var add = results[0].formatted_address;

                                var value = add.split(",");

                                count = value.length;
                                country = value[count - 1];
                                state = value[count - 2];
                                city = value[count - 3];
                                $scope.currentLocation = city;
                                cityId = city.trim();
                                $scope.templeCity = cityId; //city name updated
                                String.prototype.trim = function () {
                                    return this.replace(/^\s+|\s+$/g, '');
                                };

                                console.log("city name received:" + $scope.templeCity);;

                                var lang = $localstorage.get(config.LANGUAGE_NAME);

                                var get_location_wise_add = config.get_location_wise_add + 'location=' + $scope.templeCity;
                                console.log("url:" + get_location_wise_add);;
                                $http.get(get_location_wise_add).then(function (response) {

                                    $scope.error_msg = response.data.error_msg;
                                    $scope.message = response.data.message;

                                    if ($scope.message === 'success') {
                                        console.log("add recevied:");;
                                        $scope.errorTextVisible = false;
                                        $scope.noerror = false;
                                        $scope.currenCityAddList = response.data.result;
                                    }
                                    else {
                                        if ($scope.error_msg === 'No Advertisement Found') {
                                            $scope.errorTextVisible = true;
                                            $scope.noerror = true;
                                            $scope.errorMessage = $scope.error_msg;
                                        }
                                    }

                                })

                            }
                            else {
                                // alert("address not found");
                            }
                        }
                        else {
                            // alert("Geocoder failed due to: " + status);
                        }
                    }
                );
            }


        });

    });
}])

//details of chaturmas
.factory('ChaturmasModel', function ($http) {

    var chaturmas = {};
    var city = '';

    return {
        getChaturmas: function () {

            return chaturmas;
        },
        setChaturmas: function (chaturmasParam) {

            chaturmas = chaturmasParam;

        },
        getCity: function () {

            return city;
        },
        setCity: function (chaturmasCity) {

            city = chaturmasCity;

        }
    }
})

    //details chaturmas list ctrl
.controller('DetailsChaturmasCtrl', ['ChaturmasModel', '$ionicPopup', 'config', '$localstorage', '$scope', '$http', '$state', '$stateParams', function (ChaturmasModel, $ionicPopup, config, $localstorage, $scope, $http, $state, $stateParams) {

    $scope.$on('$ionicView.enter', function () {

        $localstorage.internetConnection();

        $scope.chaturmas = {};
        var memberId = $localstorage.get(config.MEMBER_ID);


        $scope.chaturmas = ChaturmasModel.getChaturmas();
        if ($chaturmas.contact_number == "") {
            $scope.chaturmas.contact_number = 'Not available';
        }

    });
}])

//Change pwd ctrl
.controller('ChangePwdCtrl', ['$scope', '$ionicHistory', '$http', '$state', '$localstorage', 'config', '$ionicLoading', function ($scope, $ionicHistory, $http, $state, $localstorage, config, $ionicLoading) {


    $scope.$on('$ionicView.enter', function () {
        $localstorage.internetConnection();
        $scope.user = {};
        $scope.isInvalidUser = false;
        $scope.errorMessage = '';
        $scope.response = {};
        $scope.noerror = false;

        var memberId = $localstorage.get(config.MEMBER_ID);


        $scope.goBack = function () {
            $state.go("app.user_profile", {});
        }
        $scope.show = function (message) {
            $ionicLoading.show({
                template: message,
                duration: 3000
            }).then(function () {
                console.log("The loading indicator is now displayed");
            });
        };


        $scope.submit = function () {
            if ($scope.user.confirm_password == $scope.user.new_password) {
                $scope.parameter = "old_password=" + $scope.user.old_password + "&new_password=" + $scope.user.confirm_password + "&member_id=" + memberId;
                var url = config.get_current_password + $scope.parameter;
                $http.get(url)
                .then(function (response) {

                    $scope.response = response.data;
                    $scope.responseMessage = response.data.message;
                    $scope.errorMessage = response.data.error_msg;

                    if ($scope.responseMessage === 'success') {

                        //save password to local variable

                        $localstorage.showAlert('Success', $scope.errorMessage);
                        $scope.user.old_password = '';
                        $scope.user.confirm_password = '';
                        $scope.user.new_password = '';
                        $scope.noerror = false;

                    }
                    else {
                        $scope.user = {};

                        $scope.isInvalidUser = true;
                        $scope.errorMessage = response.user.error_msg;
                        $scope.user.old_password = '';
                        $scope.user.confirm_password = '';
                        $scope.user.new_password = '';
                        $scope.noerror = true;
                    }


                });


            }
            else {
                $localstorage.showAlert('Warning', "Please enter new password and confirm password same");
            }

        }

    });

}])

//detail varth pachkan
 .controller('ReadPlayVarthPachkanCtrl', ['$cordovaMedia', '$sce', '$ionicPopup', 'config', '$localstorage', '$scope', '$http', '$state', '$stateParams', 'PachkanModel', function ($cordovaMedia, $sce, $ionicPopup, config, $localstorage, $scope, $http, $state, $stateParams, PachkanModel) {

        $scope.$on('$ionicView.beforeLeave', function () {
            $localstorage.internetConnection();
            // Anything you can think of
            try {
                $scope.media.stop();
                $scope.media.release();
            }
            catch (e) {
            }
        });
        $scope.$on('$ionicView.enter', function () {

            $scope.$sce = $sce;
            $scope.mantra = {};
            $scope.showPlayBtn = true;
            $scope.mantra = PachkanModel.getMantra();
            
            $scope.newpath = $scope.mantra.setPathUrl;
            console.log("path:" + $scope.mantra);

            $scope.getMantraByLang = function (lang) {
                var getMantraByLang = config.get_varth_pachkan_by_id + 'vrat_pachkan_id=' + $scope.mantra.mantra_id + '&lang=' + lang;
                console.log("url:" + getMantraByLang);
                $http.get(getMantraByLang).then(function (response) {
                    try {
                        console.log("path:" + response);
                        $scope.mantra = response.data.result[0];
                    }
                    catch (e) {
                        console.log(e);
                    }

                })
            }

            $scope.media = $cordovaMedia.newMedia($scope.newpath);

            $scope.playMedia = function () {
                $scope.showPlayBtn = false;
                $scope.media.play();
            };

            $scope.pauseMedia = function () {
                $scope.showPlayBtn = true;
                $scope.media.pause();
            };

            $scope.stopMedia = function () {
                $scope.showPlayBtn = true;
                $scope.media.stop();
            };
            $scope.$on('destroy', function () {
                $scope.media.release();
            })

        });


    }])

  //my post controller
 .controller('MyPostsCtrl', ['config', '$scope', '$http', '$state', '$stateParams', '$localstorage', function (config, $scope, $http, $state, $stateParams, $localstorage) {
         $scope.$on('$ionicView.enter', function () {
             $localstorage.internetConnection();
             $scope.selectedCity = null;
             $scope.liked = false;
             $scope.name = $localstorage.get(config.MEMBER_NAME);
             $scope.emailId = $localstorage.get(config.EMAIL_ID);
             $scope.memberId = $localstorage.get(config.MEMBER_ID);
             $scope.contact = $localstorage.get(config.CONTACT);
             var lang = $localstorage.get(config.LANGUAGE_NAME);
             $scope.checkUserLikes = function (tid, index) {
                 var getLikes = config.get_likes_details + "tapasvi_id=" + tid;

                 $http.get(getLikes).then(function (res) {

                     $scope.error_msg = res.data.error_msg;
                     $scope.message = res.data.message;

                     if ($scope.message == 'success') {
                         $scope.errorTextVisible = false;
                         $scope.likesList = res.data.result;
                         $scope.tapasviList[index].liked = false;
                         for (var i = 0; i < res.data.result.length; i++) {
                             if (res.data.result[i].member_id === $scope.memberId) {
                                 $scope.tapasviList[index].liked = true;
                                 var k = index;
                                 break;

                             }

                         }
                     }

                     else {
                         $scope.errorTextVisible = true;
                         $scope.likesList = {};
                         $scope.errorMessage = response.data.error_msg;
                     }
                 });
             }

             var url = config.get_my_post + $scope.memberId +'&lang=' + lang;
             $scope.callFunction = function () {
                 $http.get(url)
             .then(function (response) {

                 $scope.tapasviList = response.data.result;
                 for (var j = 0; j < $scope.tapasviList.length; j++) {
                     $scope.checkUserLikes($scope.tapasviList[j].tapasvi_id, j);
                 }
             });
             }

             $scope.callFunction();

             $scope.openCommentPage = function (id) {
                 $localstorage.set(config.tapassya_id, id);

                 $state.go("app.comments", {});

             };

             $scope.openLikes = function (id) {
                 $localstorage.set(config.tapassya_id, id);

                 $state.go("app.likes_detail", {});

             };

             //post likes
             $scope.postLikes = function (id) {

                 var post_likes = config.post_tapasvi_likes + 'member_id=' + $scope.memberId + '&tapasvi_id=' + id + '&lang=' + lang;

                 $http.get(post_likes).then(function (res) {
                     console.log(res.data);
                     $scope.data = res.data.error_msg;
                     if (res.data.message == 'Success') {
                         var url = config.get_my_post + $scope.memberId + '?lang=' + lang;
                         $http.get(url)
                     .then(function (response) {

                         $scope.tapasviList = response.data.result;
                         for (var j = 0; j < $scope.tapasviList.length; j++) {
                             $scope.checkUserLikes($scope.tapasviList[j].tapasvi_id, j);
                         }

                     });
                     }

                 })
             }

         })
     }])

// Add funds ctrl
.controller('AddFundsCtrl', ['$scope', '$ionicHistory', '$http', '$state', '$localstorage', 'config', '$ionicLoading', function ($scope, $ionicHistory, $http, $state, $localstorage, config, $ionicLoading) {

    $scope.$on('$ionicView.enter', function () {
        $localstorage.internetConnection();
        $scope.user = {};
        $scope.isInvalidUser = false;
        $scope.errorMessage = '';
        $scope.response = {};
        $scope.noerror = false;

        var memberId = $localstorage.get(config.MEMBER_ID);

        $scope.show = function (message) {
            $ionicLoading.show({
                template: message,
                duration: 3000
            }).then(function () {
                console.log("The loading indicator is now displayed");
            });
        };


        $scope.saveDetailsOnServer = function () {
            if ($scope.user.member_name != '' || $scope.user.contact != '' || $scope.user.email != '' || $scope.user.amount != '') {
                $scope.memberId = $localstorage.get(config.MEMBER_ID);

                var amount = $scope.user.amount;
                var purpose = 'purchase points';
                var name = $scope.user.member_name;
                var emailId = $scope.user.email;
                var contactNo = $scope.user.contact;


                var datalist = { amount: amount, memberId: $scope.memberId, purpose: purpose, name: name, email: emailId, contact: contactNo };
                console.log("make payment :" + datalist + " " + datalist.memberId);

                $http({
                    url: "http://osc.dotphi.com/nirjara-pay/createRequestfor_points",
                    method: "GET",
                    params: datalist,
                }).then(function (res) {
                    try {
                        var url = res.data;
                    }
                    catch (e) { }
                    var options = {
                        location: 'yes',
                        clearcache: 'yes',
                        toolbar: 'no'
                    };
                    console.log("response : " + res.data);
                    $ref = $cordovaInAppBrowser.open(url, '_blank', options)



                });

            }
            else {
                $localstorage.showAlert('Warning', "Please enter all fields");
            }

        }

    });

}])

//Edit temple
.controller('EditTempleCtrl', ['$translate', 'config', '$scope', '$http', '$state', '$stateParams', '$localstorage', '$ionicPopup', 'Temple', function ($translate, config, $scope, $http, $state, $stateParams, $localstorage, $ionicPopup, Temple) {
    $scope.$on('$ionicView.enter', function () {
        $localstorage.internetConnection();
        var contact = $localstorage.get(config.CONTACT);
        $scope.data = {};
        $scope.data.contact = '';
        $scope.templeDetail = Temple.getTemple();

        $scope.temple_id = $scope.templeDetail.temple_id;
        $scope.temple_name = $scope.templeDetail.temple_name;
        var text = $scope.templeDetail.temple_info;

        var url = config.get_image_list + '70';

        $http.get(url)
    .then(function (response) {
        $scope.imagelist = response.data.result;
    });

        var noHTML = text.replace(/(<([^>]+)>)/ig, "");
        $scope.data.temple_info = noHTML;
        console.log($scope.templeDetail+JSON.stringify($scope.templeDetail));
        $scope.location = $scope.templeDetail.location;
        var cntct = $scope.templeDetail.contact;
        var mobile = cntct.replace(/ /g, '');
        $scope.data.contact = parseInt(mobile);

        var pincode = $scope.templeDetail.pin_code;
        var pin = pincode.replace(/ /g, '');
        $scope.data.pincode = parseInt(pin);
        $scope.type = $scope.templeDetail.type;
        $scope.food_available = $scope.templeDetail.food_available;
        $scope.stay_available = $scope.templeDetail.stay_available;

        $scope.temple_photo = $scope.templeDetail.temple_photo;
        $scope.temple_photo2 = $scope.templeDetail.temple_photo2;
        $scope.temple_photo3 = $scope.templeDetail.temple_photo3;
        $scope.longitude = $scope.templeDetail.longitude;
        $scope.latitude = $scope.templeDetail.latitude;
        $scope.cityname = $scope.templeDetail.city_name;
        $scope.errorMessage = '';
        $scope.errorTextVisible = false;
        $scope.noerror = true;
        $scope.upload_flag = false;

        $scope.isDisabled = false;
        $scope.userDetail = $localstorage.getObject(config.TAPASVI);

        $scope.countrySelected = function (selected) {
            if (selected) {

                $scope.getStates(selected.originalObject.country_id);
                $scope.data.countryId = selected.originalObject.country_id
            } else {
                console.log('cleared');
            }
        };
        $scope.stateSelected = function (selected) {
            if (selected) {

                $scope.getcities(selected.originalObject.sid);
                $scope.templeDetail.location = '';
                $scope.data.stateId = selected.originalObject.sid;
            } else {
                console.log('cleared');
            }
        };
        $scope.citySelected = function (selected) {
            if (selected) {

                $scope.data.cityId = selected.originalObject.city_id;

            } else {
                console.log('cleared');
            }
        };

        var getCountryUrl = config.get_country_url;
        $http.get(getCountryUrl)
        .then(function (response) {

            $scope.countryList = response.data.result;

            var i = $scope.countryList.length;
            var defaultCountry = 'INDIA'
            while (i--) {
                if ($scope.countryList[i].country_name.toUpperCase() === defaultCountry) {

                    $scope.$broadcast('angucomplete-alt:changeInput', 'tcountry', $scope.countryList[i]);
                    break;
                }
            }
        });

        $scope.getStates = function (countryId) {

            var get_state_url = config.get_state_url + countryId;
            $http.get(get_state_url)
           .then(function (response) {
               $scope.stateList = response.data.result;
               if (angular.isDefined($scope.stateList)) {
                   //  $scope.defaultState = $scope.stateList[0];
                   $scope.changeInput('tstate');
                   $scope.getcities($scope.stateList[0].sid);
               }
               else {
                   $scope.clearInput('tstate');
                   $scope.clearInput('tcity');
                   $scope.data.stateId = '';
                   $scope.data.cityId = '';
                   
                   $localstorage.showAlert("Oops!", "Selected Country does't have cities");
               }
           });
        }

        $scope.clearInput = function (id) {

            $scope.$broadcast('angucomplete-alt:clearInput', id);

        }

        $scope.changeInput = function (id) {
            if (id) {
                if (id === 'tstate')
                    $scope.$broadcast('angucomplete-alt:changeInput', id, $scope.stateList[0]);
                if (id === 'tcity')
                    $scope.$broadcast('angucomplete-alt:changeInput', id, $scope.cityList[0]);

            }
        }

        $scope.getcities = function (stateId) {

            var get_city_url = config.get_city_url + stateId;
            $http.get(get_city_url)
            .then(function (response) {
                $scope.cityList = response.data.result;
                $scope.cities = response.data.result;
                if (angular.isDefined($scope.cityList)) {
                    //  $scope.defaultCity = $scope.cityList[0];
                    $scope.changeInput('tcity');
                    
                    var name = $scope.name;
                    var emailId = $scope.emailId;
                }

            });

        }

        $scope.disableTap = function () {
            var container = document.getElementsByClassName('pac-container');
            angular.element(container).attr('data-tap-disabled', 'true');
            var backdrop = document.getElementsByClassName('backdrop');
            angular.element(backdrop).attr('data-tap-disabled', 'true');
            angular.element(container).on("click", function () {
                document.getElementById('pac-input-temple-location').blur();
            });
        };

        var input = (document.getElementById('pac-input-temple-location'));

        // Create the autocomplete helper, and associate it with 
        // an HTML text input box. 

        var autocomplete = new google.maps.places.Autocomplete(input);


        autocomplete.setComponentRestrictions(
        { 'country': ['in'] });

        // Search temple list
        var address = $scope.search;

        $scope.saveDetailsOnServer = function () {

            if ($scope.templeDetail.temple_name === '' || $scope.data.temple_info === '' || $scope.templeDetail.type === '' || $scope.templeDetail.stay_available === '' || $scope.templeDetail.food_available === '' || $scope.data.pincode === '' || formatted_address === '' || $scope.data.contact === '') {
                $scope.errorTextVisible = true;
                $scope.noerror = true;

                $translate(['Warning', 'SomeFields']).then(function (translations) {
                    $scope.headline = translations.Warning;
                    $scope.paragraph = translations.SomeFields;

                    $localstorage.showAlert($scope.headline, $scope.paragraph);

                });
                // $localstorage.showAlert('Warning', 'Some required fields are empty');

            }
            else {

               /* var add1 = autocomplete.getPlace();
                for (var j = add1.address_components.length - 1 ; j >= add1.address_components.length - add1.address_components.length; j--) {
                    var add = add1.address_components[j].long_name;
                }
                var city = '';
                for (var i = 0; i < $scope.cities.length; i++) {
                    if ($scope.data.cityId == '') {
                        return;
                    }
                    else {
                        if ($scope.data.cityId == $scope.cities[i].city_id) {
                            city = $scope.cities[i].city_name;

                        }
                    }
                }*/
                try {
                    var addressText = autocomplete.getPlace();
                    var latitude = addressText.geometry.location.lat();
                    var longitude = addressText.geometry.location.lng();
                    var formatted_address = addressText.formatted_address;
                }
                catch (e)
                {
                    if (e.message = 'Cannot read property \'geometry\' of undefined')
                    {
                       
                        var latitude = $scope.templeDetail.latitude;
                        var longitude = $scope.templeDetail.longitude;
                        var formatted_address = $scope.templeDetail.location;
                    }
                }
                var name = $localstorage.get(config.MEMBER_NAME);
                var emailId = $localstorage.get(config.EMAIL_ID);
                var memberId = $localstorage.get(config.MEMBER_ID);
                var contact = $localstorage.get(config.CONTACT);
                var food = $scope.templeDetail.food_available.replace(/[\s]/g, '');
                var stay = $scope.templeDetail.stay_available.replace(/[\s]/g, '');
                var parameter = 'member_id=' + memberId + '&temple_id=' + $scope.temple_id + '&temple_info=' + $scope.data.temple_info + '&temple_name=' + $scope.templeDetail.temple_name + '&type=' + $scope.templeDetail.type + '&is_food_available=' + food + '&is_stay_available=' + stay + '&pine_code=' + $scope.data.pincode + '&contact=' + $scope.data.contact + '&location=' + formatted_address + '&longitude=' + longitude + '&latitude=' + latitude;
                console.log(parameter);
                //temple_id=2&member_id=1&temple_name=Munisuvratswamiiii&type=Temple&temple_info=Shikharbadh%20Jinalay%20abc&is_food_available=No&is_stay_available=No&country=99&state=21&city=348&pine_code=111111&contact=1234567890&location=GULABSAV%20GALLI,%20ITWARI,NAGPUR&longitude=79.088155&latitude=21.145800
                var url = config.edit_temple + parameter;

              
                    $http.get(url)
                    .then(function (response) {
                        $scope.message = response.data.message;

                        if ($scope.message === 'Success') {
                            var temple_id = response.data.data;
                           // $localstorage.set(config.AddedTemple, temple_id);
                            $scope.isDisabled = true;

                            $scope.errorTextVisible = false;
                            $scope.noerror = false;

                            $scope.data.mobileNo = '';
                            $scope.data.templeName = '';
                            $scope.data.type = '';
                            $scope.data.food = '';
                            $scope.data.stay = '';
                            $scope.data.countryId = '';
                            $scope.data.stateId = '';
                            $scope.data.cityId = '';
                            $scope.data.pincode = '';
                            $scope.data.location = '';
                            $scope.data.longitude = '';
                            $scope.data.latitude = '';
                            $scope.errorMessage = '';
                            console.log('no error');

                            $translate(['Welldone', 'Templeeditted']).then(function (translations) {
                                $scope.headline = translations.Welldone;
                                $scope.paragraph = translations.Templeeditted;

                                $localstorage.showAlert($scope.headline, $scope.paragraph);

                            });


                            //$localstorage.showAlert('Welldone', 'Temple is added successfully!');
                            $state.go("app.temple-listing", {});
                        }

                        else {
                            $scope.isDisabled = true;
                            $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                $scope.headline = translations.Oops;
                                $scope.paragraph = translations.Somethingwentwrong;

                                $localstorage.showAlert($scope.headline, $scope.paragraph);

                            });

                            // $localstorage.showAlert('Oops!', 'Something went wrong!');
                        }


                    });
                
               
            }
        }

    });
}])

 //details chaturmas list ctrl
.controller('DonationCtrl', ['ChaturmasModel', '$ionicPopup', 'config', '$localstorage', '$scope', '$http', '$state', '$stateParams', function (ChaturmasModel, $ionicPopup, config, $localstorage, $scope, $http, $state, $stateParams) {

    $scope.$on('$ionicView.enter', function () {

        $localstorage.internetConnection();

        $scope.openExternalUrl = function (url) {
            window.open(url, '_system', 'location=yes');

        }

    });
}])

  //withdraw
.controller('WithdrawController', ['$translate', '$filter', '$cordovaCamera', '$Utility', 'config', '$scope', '$http', '$state', '$stateParams', '$localstorage', '$ionicPopup', function ($translate, $filter, $cordovaCamera, $Utility, config, $scope, $http, $state, $stateParams, $localstorage, $ionicPopup) {

    $scope.$on('$ionicView.enter', function () {
        console.log("Withdraw controller :");
        var lang = $localstorage.get(config.LANGUAGE_NAME);
        $localstorage.internetConnection();
        var data = {};
        $scope.user = {};
        $scope.data = {};

        $scope.errorMessage = '';
        $scope.errorTextVisible = false;
        $scope.noerror = true;
        console.log('cleared');
        var memberId = $localstorage.get(config.MEMBER_ID);
        var get_profile = config.get_user_profile + memberId;

        $scope.isEmptyOrNull = function (value) {
            return !value;
        }

        $http.get(get_profile)
                   .then(function (response) {

                       $scope.points = response.data.result[0].points;
                   });


        $scope.saveDetailsOnServer = function () {

            var contact = $localstorage.get(config.CONTACT);




            if ($scope.isEmptyOrNull($scope.user.account_number) || $scope.isEmptyOrNull($scope.user.bank_name) || $scope.isEmptyOrNull($scope.user.ifsc) || $scope.isEmptyOrNull($scope.user.point)) {
                if ($scope.user.point > $scope.points) {
                    $translate(['Oops', 'invalidpoints']).then(function (translations) {
                        console.log("if");
                        $scope.headline = translations.Oops;
                        $scope.paragraph = translations.invalidpoints;
                        $scope.user.point = '';
                        $localstorage.showAlert($scope.headline, $scope.paragraph);

                    });
                }
                else {
                    console.log("else");
                    if ($scope.user.point <= 0) {
                        $translate(['Oops', 'pointsareinvalid']).then(function (translations) {
                            $scope.headline = translations.Oops;
                            $scope.paragraph = translations.pointsareinvalid;
                            $scope.user.point = '';
                            $localstorage.showAlert($scope.headline, $scope.paragraph);

                        });
                    } else {

                        $scope.errorTextVisible = true;
                        console.log("withdraw:" + url);
                        $scope.noerror = true;

                        $translate(['Warning', 'SomeFields']).then(function (translations) {
                            $scope.headline = translations.Warning;
                            $scope.paragraph = translations.SomeFields;

                            $localstorage.showAlert($scope.headline, $scope.paragraph);

                        });
                    }
                }
                return;
                // $localstorage.showAlert('Warning', 'Some required fields are empty');

            }

            else {

                var parameter = 'member_id=' + memberId + '&account_number=' + $scope.user.account_number + '&ifsc_code=' + $scope.user.ifsc + '&bank_name=' + $scope.user.bank_name + '&amount=' + $scope.user.point;

                var url = config.request_withdraw_my_points + parameter;
                $http.get(url)
                .then(function (response) {

                    $Utility.hideprogressDialog();

                    $scope.message = response.data.message;


                    if ($scope.message == "success") {

                        $scope.errorTextVisible = false;
                        $scope.noerror = true;
                        $scope.user.account_number = '';
                        $scope.user.bank_name = '';
                        $scope.user.ifsc === '';
                        $scope.user.point = '';
                        console.log(response);



                        $translate(['Welldone', 'yourrequesthasbeensent']).then(function (translations) {
                            $scope.headline = translations.Welldone;
                            $scope.paragraph = translations.yourrequesthasbeensent;

                            $localstorage.showAlert($scope.headline, $scope.paragraph);

                        });

                        //      $localstorage.showAlert('Welldone', 'Your Profile Updated Successfully!');


                    }
                    else
                        $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                            $scope.headline = translations.Oops;
                            $scope.paragraph = translations.Somethingwentwrong;

                            $localstorage.showAlert($scope.headline, $scope.paragraph);

                        });

                    // $localstorage.showAlert('Oops!', 'Something Went Wrong!');

                });
            }

        }
    });
}])

//my business list ctrl
.controller('MyBusinessListCtrl', ['$translate', 'config', '$scope', '$http', '$state', '$localstorage', '$stateParams', 'ViharModel', 'Business', function ($translate, config, $scope, $http, $state, $localstorage, $stateParams, ViharModel, Business) {

    $scope.$on('$ionicView.enter', function () {
        $localstorage.internetConnection();
        $scope.businessList = {};
        $scope.errorMessage = '';
        $scope.errorTextVisible = false;
        $scope.noerror = true;

        var memberId = $localstorage.get(config.MEMBER_ID);
        //  var lang = $localstorage.get(config.LANGUAGE_NAME);
        var url = config.get_businessBy_member_wise + memberId;
        $http.get(url)
            .then(function (response) {

                $scope.error_msg = response.data.error_msg;
                $scope.message = response.data.message;

                if ($scope.message === 'success') {
                    $scope.errorTextVisible = false;
                    $scope.noerror = false;
                    $scope.businessList = response.data.result;


                }
                else {
                    if ($scope.error_msg === 'Records not found') {
                        $scope.errorTextVisible = true;
                        $scope.noerror = true;
                        $scope.errorMessage = $scope.error_msg;
                    }
                }

            });

        $scope.openEditbusiness = function (business) {

            Business.setBusiness(business);
            $state.go("app.edit_business");
        };

        $scope.deleteBusiness = function (business_id) {

            var parameter = business_id + "&member_id=" + memberId;
            var url = config.delete_my_business + parameter;



            $http.get(url)
            .then(function (response) {
                $scope.message = response.data.message;
                console.log(JSON.stringify(response.data));

                if ($scope.message === 'success') {
                    $scope.isDisabled = true;
                    $scope.errorTextVisible = false;
                    $scope.noerror = false;
                    $scope.businessList = response.data.error_msg;

                    $translate(['Welldone', 'Vihardelete']).then(function (translations) {
                        $scope.headline = translations.Welldone;
                        $scope.paragraph = translations.Vihardelete;

                        $localstorage.showAlert($scope.headline, $scope.paragraph);

                    });
                    //  $localstorage.showAlert('Welldone', 'Your Vihar Stay  has been delete successfully!');

                }

                else {
                    $scope.isDisabled = true;
                    $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                        $scope.headline = translations.Oops;
                        $scope.paragraph = translations.Somethingwentwrong;

                        $localstorage.showAlert($scope.headline, $scope.paragraph);

                    });
                    //  $localstorage.showAlert('Oops!', 'something went wrong!');
                }


            });
        }

    })

}])

   // edit business ctrl
 .controller('EditBusinessCtrl', ['$translate', '$Utility', 'config', '$scope', '$http', '$state', '$stateParams', '$localstorage', 'Business', '$cordovaInAppBrowser', 'BusinessModel', function ($translate, $Utility, config, $scope, $http, $state, $stateParams, $localstorage, Business, $cordovaInAppBrowser, BusinessModel) {

     $scope.$on('$ionicView.enter', function () {
         $localstorage.internetConnection();
         $scope.selectedCity = null;
         $scope.data = {};

         $scope.memberId = $localstorage.get(config.MEMBER_ID);
         $scope.data = Business.getBusiness();
         var contactno = parseInt($scope.data.contact_no);
         $scope.data.contactno = contactno;
         var getBusinessCategoriesUrl = config.get_business_category;



         $http.get(getBusinessCategoriesUrl)
         .then(function (response) {
             $scope.businessCatList = response.data.result;
             var i = $scope.businessCatList.length;
             var business_cat_id = $scope.data.business_cat_id;
             while (i--) {
                 if (business_cat_id == $scope.businessCatList[i].business_cat_id) {
                     $scope.selectedBusiness = $scope.businessCatList[i];
                     break;
                 }
             }

         });



         /*  var lang = $localstorage.get(config.LANGUAGE_NAME);
        

           

           $scope.isDisabled = false;
           $scope.errorMessage = '';
           $scope.errorTextVisible = false;
           $scope.noerror = true;
           $scope.validCode = false;
           */
         $scope.saveDetailsOnServer = function () {

             var memberId = $localstorage.get(config.MEMBER_ID);


             var parameter = 'business_id=' + $scope.data.business_id + '&business_cat_id=' + $scope.data.business_cat_id + '&package_id=' + $scope.data.package_id + '&business_owner_name=' + $scope.data.business_owner_name + '&business_title=' + $scope.data.business_title + '&business_description=' + $scope.data.business_description + '&country=' + $scope.data.country + '&city=' + $scope.data.city + '&state=' + $scope.data.state + '&address=' + $scope.data.address + '&email_id=' + $scope.data.email_id + '&member_id=' + memberId + '&product1=' + $scope.data.product1 + '&contact_no=' + $scope.data.contactno + '&product2=&product3=f&product4=';
             console.log(parameter);
             var url = 'http://nirjaraap.com/api/edit_business.php?' + parameter;
             console.log(url);

             $http.get(url).then(function (response) {
                 console.log("receiejhj");
             });
             if ($Utility.isEmptyOrNull($scope.data.business_title) || $Utility.isEmptyOrNull($scope.data.contactno) || $Utility.isEmptyOrNull($scope.data.product1) || $Utility.isEmptyOrNull($scope.data.address) || $Utility.isEmptyOrNull($scope.data.email_id) || $Utility.isEmptyOrNull($scope.data.product1)) {
                 $scope.errorTextVisible = true;
                 $scope.noerror = true;
                 $translate(['Warning', 'SomeFields']).then(function (translations) {
                     $scope.headline = translations.Warning;
                     $scope.paragraph = translations.SomeFields;

                     $localstorage.showAlert($scope.headline, $scope.paragraph);

                 });
                 // $localstorage.showAlert('Warning', 'Some required fields are empty');
             }
             else {
                 $http.get(url)
                              .then(function (response) {
                                  $scope.message = response.data.message;

                                  if ($scope.message === 'success') {
                                      var businessId = response.data.data.last_inserted_id;

                                      $scope.isDisabled = true;
                                      $scope.errorTextVisible = false;
                                      $scope.noerror = false;

                                      $translate(['Welldone', 'Businessadded']).then(function (translations) {
                                          $scope.headline = translations.Welldone;
                                          $scope.paragraph = translations.Businessadded;

                                          $localstorage.showAlert($scope.headline, $scope.paragraph);

                                      });


                                      //  $localstorage.showAlert('Welldone', 'Business is added successfully!');
                                      BusinessModel.setBusinessId($scope.data.business_id);
                                      BusinessModel.setBusinessPackageAmt($scope.data.package_cost);
                                      BusinessModel.setBusinessPurpose($scope.data.package_name);
                                      BusinessModel.setBusinessOwnerName($scope.data.business_owner_name);
                                      BusinessModel.setBusinessOwneremail($scope.data.email_id);

                                      BusinessModel.setBusinessOwnercontact($scope.data.contactno);
                                      BusinessModel.setPaymentStatus($scope.data.payment_status);


                                      $state.go("app.business-image", {});
                                  }

                                  else {
                                      $scope.isDisabled = true;
                                      $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                                          $scope.headline = translations.Oops;
                                          $scope.paragraph = translations.Somethingwentwrong;

                                          $localstorage.showAlert($scope.headline, $scope.paragraph);

                                      });

                                      //  $localstorage.showAlert('Oops!', 'Something went wrong!');
                                  }


                              });
             }


         }

     });
 }])

.controller('ContactusController', ['$translate', '$filter', '$cordovaCamera', '$Utility', 'config', '$scope', '$http', '$state', '$stateParams', '$localstorage', '$ionicPopup', function ($translate, $filter, $cordovaCamera, $Utility, config, $scope, $http, $state, $stateParams, $localstorage, $ionicPopup) {

    $scope.$on('$ionicView.enter', function () {

        var lang = $localstorage.get(config.LANGUAGE_NAME);
        $localstorage.internetConnection();
        var data = {};
        $scope.user = {};
        $scope.data = {};


        $scope.user.member_name = '';
        $scope.user.subject = '';
        $scope.user.message = '';
        $scope.user.mobile_no = '';
        $scope.errorMessage = '';
        $scope.errorTextVisible = false;
        $scope.noerror = true;
        console.log('cleared');
        var memberId = $localstorage.get(config.MEMBER_ID);
        //var post_Enquiry = config.post_Enquiry + memberId;

        $scope.isEmptyOrNull = function (value) {
            return !value;
        }

        $scope.saveDetailsOnServer = function () {
            var parameter = 'member_id=' + memberId + '&member_name=' + $scope.user.member_name + '&subject=' + $scope.user.subject + '&message=' + $scope.user.message + '&contact_no=' + $scope.user.mobile_no;

            var url = config.post_Enquiry + parameter;

            if ($scope.user.member_name === '' || $scope.user.subject === '' || $scope.user.message === '' || $scope.user.mobile_no === '') {
                $scope.errorTextVisible = true;
                $scope.noerror = true;
                $translate(['Warning', 'SomeFields']).then(function (translations) {
                    $scope.headline = translations.Warning;
                    $scope.paragraph = translations.SomeFields;

                    $localstorage.showAlert($scope.headline, $scope.paragraph);

                });

            }
            else {
                $http.get(url)
                .then(function (response) {

                    $Utility.hideprogressDialog();
                    $scope.message = response.data.message;
                    if ($scope.message == "success") {

                        $scope.errorTextVisible = false;
                        $scope.noerror = false;
                        $scope.user.member_name = '';
                        $scope.user.mobile_no = '';
                        $scope.user.subject = '';
                        $scope.user.message = '';
                        console.log(response);

                        $translate(['Welldone', 'yourrequesthasbeensent']).then(function (translations) {
                            $scope.headline = translations.Welldone;
                            $scope.paragraph = translations.yourrequesthasbeensent;

                            $localstorage.showAlert($scope.headline, $scope.paragraph);

                        });

                    }
                    else
                        $translate(['Oops', 'Somethingwentwrong']).then(function (translations) {
                            $scope.headline = translations.Oops;
                            $scope.paragraph = translations.Somethingwentwrong;

                            $localstorage.showAlert($scope.headline, $scope.paragraph);

                        });

                    // $localstorage.showAlert('Oops!', 'Something Went Wrong!');

                });
            }


        }

    });

}])

//Language Register Controller
    .controller('LanguageRegisterCtrl', ['$state', 'config', '$scope', '$translate', '$localstorage', '$location', function ($state, config, $scope, $translate, $localstorage, $location)


        //  ['$scope', '$state', '$stateParams', 'DailyNewsModel', function ($scope, $state, $stateParams, DailyNewsModel) {
    {
        $localstorage.internetConnection();
        $scope.curlang = $translate.use();
        $scope.changeLanguage = function (key) {
            $translate.use(key);
            $scope.curlang = key;
            $localstorage.set(config.LANGUAGE_NAME, key);
            $state.go('register');
        }
    }])
