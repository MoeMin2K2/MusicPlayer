let songIndex = 0;
let imageItems = document.querySelectorAll('.image-item');
let songItemContainer = document.querySelector('.songItemContainer');
let upViewWrapper = document.querySelector(".upViewWrapper");
let bottom = document.querySelector(".bottom");
let songInfo = document.querySelector(".songInfo");
let songDetails = document.querySelector(".songDetails");
let timeInfo = document.querySelector(".timeInfo");
let icons = document.querySelector(".icons");
let sliderWrapper = document.querySelector(".slider-wrapper");
let upViewIcon = document.querySelector("#upView");
let audioElement = new Audio("mp3/a_chit_nae_pya_zat.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let currentTimeDisplay = document.getElementById('currentTime');
let durationTimeDisplay = document.getElementById('durationTime');
let repeatButton = document.getElementById('repeat');
let shuffleButton = document.getElementById('shuffle');
let singerImg = document.querySelector(".singerImg");
let singerImage = document.getElementById("singerImage");
let lyrics = document.getElementById("lyrics");
let expandedContent = document.querySelector('.expanded-content');
let isRepeating = false;
let isShuffling = false;

let songs = [
    {
        songName: "ကျွန်တော့်နဲ့ အချစ်ရဲ့ပြဇာတ်",filePath: "mp3/a_chit_nae_pya_zat.mp3", coverPath: "images/zaw_win_htut.jpg",artistName: "Zaw Win Htut",songLyrics: 
                    `လှတဲ့အချစ်နဲ့ ကျွန်တော့ရဲ့ ဒီပြဇာတ်<br>
                    အကြမ်းအရမ်း များနဲ့<br>
                    လွမ်းခန်းတွေ မပြတ်<br>
                    ကြမ်းခန်းလေး ရောက်ခဲ့ရင်<br>
                    အားလုံး လက်ခုပ် တီးကြတယ်<br>
                    တီးရင်း တီးရင်း<br>
                    လက်ခေါက်တွေ မှုတ်<br>
                    အလှည့် ကျ နွဲ့လို့ မရဘူးကွာ<br>
                    လူကြမ်းတွေ လဲရင် ကြိုက်လား<br>
                    လွမ်းခန်းတွေ ရောက်ရင်<br>
                    လူ သားတွေ မျက်ရည် ဝဲမယ်..<br>
                    လှတဲ့အချစ်နဲ့ ကျွန်တော့ရဲ့ ဒီပြဇာတ်<br>
                    အနမ်းလေး များနဲ့ လှပ သေသပ်<br>
                    သီချင်းလေး များလည်း<br>
                    အဆန်း တကြယ် တီးလုံး များထဲ<br>
                    ကြိုး စားဆို သီချင်းလေးဆုံးတော့<br>
                    အကြမ်း အရမ်း ပြန့် ကြဲ<br>
                    အလှည့် ကျ နွဲ့လို့ မရဘူးကွာ<br>
                    လူကြမ်း တွေ လဲရင် ကြိုက်လား<br>
                    လွမ်းခန်းတွေ ရောက်ရင်<br>
                    လူသားတွေ မျက်ရည် ဝဲမယ်..<br>
                    လှတဲ့အချစ်နဲ့ ကျွန်တော့ရဲ့ ဇာတ်လမ်း<br>
                    ကြမ်းခန်းနမ်းခန်း လွမ်းခန်း မှာလွမ်း<br>
                    တကယ့် အဖြစ်အပျက်ပဲ<br>
                    လူ့ ဇာတ်ခုံ နေ့ရက် များထဲ<br>
                    ဆန်းပြားစွာ ကြမ်းခန်း နမ်းခန်း<br>
                    လွမ်းခန်းတွေ မစဲ<br>
                    အလှည့်ကျ နွဲ့လို့ မရဘူးကွာ<br>
                    လူကြမ်းတွေ လဲရင် ကြိုက်လား<br>
                    လွမ်းခန်းတွေ ရောက်.. ရင်<br>
                    လူသားတွေ မျက်ရည် ဝဲမယ်..<br>
                    လူ့ရဲ့ဇာတ်ခုံ မီးလုံး အောက်မှာ ကနေဆဲ<br>
                    အဆုံး သတ်ရင် မေးရင် မသိပါ<br>
                    ဇာတ်သိမ်းရင် ကွဲ မလား<br>
                    ဇာတ်သိမ်း ရင် ပေါင်းမလား<br>
                    အချစ်နဲ့ ကျွန်တော့ရဲ့<br>
                    ချစ်ဇာတ် လမ်းစဉ် ထဲ ဝယ်...<br>
                    လှတဲ့ အချစ်နဲ့ ကျွန်တော့ ရဲ့ဇာတ်လမ်း<br>
                    ကြမ်းခန်း နမ်းခန်း လွမ်းခန်း မှာလွမ်း<br>
                    တကယ့်အဖြစ် အပျက် ပဲဟေ့..<br>
                    ဘယ်တော့မှ ပြီးမလဲ<br>
                    မင်းသမီး နဲ့များ ကွဲဦး မှာလား<br>
                    အလှည့် ကျ နွဲ့လို့ မရဘူးကွာ<br>
                    လူကြမ်းတွေ လဲရင် ကြိုက်လား<br>
                    လွမ်း ခန်းတွေ ရောက်ရင်<br>
                    လူသားတွေ မျက်ရည် ဝဲမယ်..<br>
                    လွမ်းခန်းတွေ ရောက် ရင်<br>
                    လူသားတွေ မျက်ရည် ဝဲမယ်..<br>
                    လွမ်းခန်းတွေ ရောက် ရင်<br>
                    လူ သားတွေ မျက်ရည် ဝဲ မယ်..
                    <br><br>`
    },
    {
        songName: "အချစ်ဆိုတာ", filePath: "mp3/a_chit_so_dr.mp3", coverPath: "images/phyu_phyu_kyaw_thein.jpg",artistName: "Sweety",
        songLyrics: ``
    },
    {
        songName: "အနီးဆုံးလား အဝေးဆုံးလား", filePath: "mp3/a_nee_sonr_lr_a_way_sone_lr.mp3", coverPath: "images/phyu_phyu_kyaw_thein.jpg",artistName: "Phyu Phyu Kyaw Thein",
        songLyrics: ``
    },
    {
        songName: "ဘာလိုလို", filePath: "mp3/br_lo_lo.mp3", coverPath: "images/zaw_win_htut.jpg",artistName: "Zaw Win Htut",
        songLyrics: `
                    တို့နှစ်ယောက်တကယ်ဝေးပြီးနောက်<br>
                    ရင်ခုန်သံပြတ်ဆဲသလား<br>
                    မညာချင်ဘူးကိုယ့်အချစ်လေး<br>
                    အချိန်တွေတိုင်းလွမ်းတာ<br>
                    မင်းငါ့ကိုထားခဲ့သလား<br>
                    ငါကပဲထားခဲ့တာလား<br>
                    မဆိုင်တော့ဘူးဆိုပေမယ့်<br>
                    ဘာလိုလိုပါ အချစ်ရယ်<br>
                    ဘာလိုလိုလားပြောကွယ်<br>
                    မင်းနဘေးကကွက်လပ်လေးများ<br>
                    သူမမြင်ချင်ယောင်ဆောင်တော့<br>
                    မငိုပါနဲ့ကိုယ့်အချစ်လေး<br>
                    လိုချင်တာကိုယ်ပေးမယ်<br>
                    မင်းငါ့ကိုရက်စက်နေသလား<br>
                    ငါကပဲရက်စက်တာလား<br>
                    မဆိုင်တော့ဘူးဆိုပေမယ့်<br>
                    ဘာလိုလိုပါ အချစ်ရယ်<br>
                    ဘာလိုလိုလားပြောကွယ်<br>
                    နွေကမ္ဘာလိုခြောက်သွေ့လွန်း<br>
                    မရှိတော့မှတန်ဖိုးလေးနားလည်<br>
                    ပြေလည်နိုင်ဖို့<br>
                    မင်းပြော အချစ်ကလေး<br>
                    ဘာလိုလိုပါ<br>
                    ဘာလိုလိုလားပြောကွယ်<br><br>
        `
    },
    {
        songName: "ကိုယ့်အတွက်အိပ်မက်မင်းမက်လား", filePath: "mp3/eain_matt_lrr.mp3", coverPath: "images/chaw_su_khin.jpg",artistName: "Chaw Su Khin",
        songLyrics: `
                    အား... အာ... <br>
                    အကြည့်များဆုံနေလား<br>     
                    အား ရင်ခုန်စေမယ့်ညှို့ချက်မှာ<br>
                    အပြန်အလှန်အကြည့်တို့ဆုံလာတုန်း<br>
                    နေနိုင်လား ကိုယ့်အကြည့်လေးများ<br>
                    အော်...<br>
                    ချစ်သူနေနိုင်လွန်းတဲ့သူတကယ်ဝေး<br>
                    ဒီလိုပုံစံအမုန်းဆုံးပဲ<br>
                    က္ကန္ဒြေများကဟန်ဆောင်ခြင်းနဲ့<br>
                    အမုန်းမီးဆွဲသွားတာဘာကြောင့်လဲ<br>
                    အပေါ်ယံတွေသွားပါဟေ့...ဟေ့<br>
                    ရင်မှာလေရှိတဲ့ဒီအတိုင်း,ဟိုင်း<br>
                    ဟန်ဆောင်တာဖယ်ပါ,ဟေ့ ဟေ့ ဟေ့<br>
                    ဟေ့ဟေဟေရေ့<br>
                    မင်းလေးမက်တဲ့အိမ်မက်ထဲ<br>
                    မင်းသမီးလေးဟာကိုယ်ပါပဲ<br>
                    စွဲလမ်းခြင်းရဲ့အဆုံးမဲ့ဒီခရီး<br>
                    ကိုယ့်ရဲ့အသည်းမှာဆွဲထင်ပြီး<br>
                    မင်းလေးမက်တဲ့အိမ်မက်ခရီး<br>
                    အနီးဆုံးပဲကိုယ်ရှိပြီး<br>
                    ကိုယ့်အတွက်အိမ်မက်<br>
                    မက်လိုက်ပေါ့ ဟေ့...ဟေ့<br>
                    အိမ်မက် မက်ဦး...<br>
                    ချစ်သူနေနိုင်လွန်းတဲ့သူတကယ်ဝေး<br>
                    ဒီလိုပုံစံအမုန်းဆုံးပဲ<br>
                    က္ကန္ဒြေများကဟန်ဆောင်ခြင်းနဲ့<br>
                    အမုန်းမီးဆွဲသွားတာဘာကြောင့်လဲ<br>
                    အပေါ်ယံတွေသွားပါဟေ,ဟေ<br>
                    ရင်မှာလေရှိတဲ့ဒီအတိုင်း<br>
                    ဟန်ဆောင်တာဖယ်ပါဟေ့,ဟေ့,ဟေ့<br>
                    ဟေ့ဟေဟေရေ့<br>
                    မင်းလေးမက်တဲ့အိမ်မက်ထဲ<br>
                    မင်းသမီးလေးဟာကိုယ်ပါပဲ<br>
                    စွဲလမ်းခြင်းရဲ့အဆုံးမဲ့ဒီခရီး<br>
                    ကိုယ့်ရဲ့အသည်းမှာဆွဲထင်ပြီး<br>
                    မင်းလေးမက်တဲ့အိမ်မက်ခရီး<br>
                    အနီးဆုံးပဲကိုယ်ရှိပြီး<br>
                    ကိုယ့်အတွက်အိမ်မက်<br>
                    မက်လိုက်ပေါ့...ဟေ့<br>
                    ဟေ့ အိမ်မက် မက်ဦး ...<br>
                    (မင်းအိမ်မက်ဘယ်သူ့အတွက်လဲ...ရေ့)<br>
                    အာ...အာ..အာ..အာ...<br>
                    (မင်းလေးမက်တဲ့အိမ်မက်ထဲ .... ဟေ့အိမ်မက် မက်ဦး ... မက်အုံး ...)<br><br>  
        `
    },
    {
        songName: "ဆု", filePath: "mp3/hsu.mp3", coverPath: "images/phyu_phyu_kyaw_thein.jpg",artistName: "Phyu Phyu Kyaw Thein",
        songLyrics: `
                    စိတ်မဆိုးနဲ့နော်<br>
                    ခွင့်လွှတ်ပါကွယ် ကိုယ်ရိုင်းနေရင်<br>
                    ကိုယ့်စိတ်က အရင်ဒီလို<br>
                    မဟုတ်ဘူးကွယ့် မင်းနဲ့မှ ပြောင်းလဲကုန်ပြီ<br>
                    အားလုံးလည်း ငါမယုံနိုင်<br>
                    မင်းလေးကို ဘယ်သူ့မှမပေး<br>
                    မပေး မပေးနိုင်ဘူး<br>
                    မင်းငါ့အသဲ ငါ့အချစ်ပဲ<br>
                    မင်းလေးဟာ ငါ့အတွက်ပဲ<br>
                    လွန်တယ်လို့ မင်းထင်လား<br>
                    အဘိဓမ္မာ တရားမှာ<br>
                    အချစ်မှာနှေးကန်ရင် ခံသွားနိုင်တယ်<br>
                    တစ်ယောက်ယောက်က ဝင်လာပြီး<br>
                    လုသွားမှာလည်း<br>
                    ဒီကောင်လေး ကြောက်နေတယ်<br>
                    ချစ်တဲ့သူ မင်းဟာလည်း<br>
                    ဘုရားပေးတဲ့ ဆုပါပဲ<br>
                    အိုး မရှိမဖြစ်ဘူး<br>
                    မင်းလေးဟာ ငါ့အချစ်ပဲ<br>
                    မင်းလေးဟာ ငါ့အတွက်ပဲ<br>
                    လွန်တယ်လို့ မင်းမထင်နဲ့<br>
                    မင်းနဲ့ကျမှပဲ သိပ်ချစ်သွားပြီကွယ်<br>
                    ဘယ်လိုဖြစ်တာလဲ<br>
                    မင်းက ထူးလို့လား<br>
                    ကိုယ်က ရူးလို့လား<br>
                    ဒါကိုတော့ မပြောနိုင်ဘူး<br>
                    မင်းလေးနဲ့ တွေ့ရတာဟာ<br>
                    ငါ့အတွက် အားလုံးမေ့ဖို့<br>
                    ဖြစ်များ ဖြစ်နေပြီလား<br>
                    မင်းငါ့အသဲ ငါ့အချစ်ပဲ<br>
                    မင်းလေးဟာ ငါ့အတွက်ပဲ<br>
                    လွန်တယ်လို့ မင်းမထင်နဲ့<br><br>
        `
    },
    {
        songName: "ကံကောင်းလို့", filePath: "mp3/kan_kaung_loh.mp3", coverPath: "images/soe_lwin_lwin.jpg",artistName: "Soe Lwin Lwin",
        songLyrics: `
        
        `
    },
    {
        songName: "ကောင်းကင်ပြာ", filePath: "mp3/kaung_kin_pyar.mp3", coverPath: "images/chaw_su_khin.jpg",artistName: "Chaw Su Khin",
        songLyrics: ``
    },
    {
        songName: "မေ့လိုက်တော့", filePath: "mp3/may_lay_tot.mp3", coverPath: "images/htoo_eain_thin.jpg",artistName: "Htoo Eain Thin",
        songLyrics: `
                    ယုံကြည်တာတွေအားလုံး<br>
                    စွန့်လွှတ်ခဲ့ပါတယ်<br>
                    တို့အချစ်ကဆုံနိုင်ဖို့ သိပ်မလွယ်<br>
                    ရေမှာအရုပ်ရေးမိသူလိုပဲ<br>
                    အချစ်ဟာအရာ မထင်တယ်<br>
                    ပျော်မယ်ဆိုနေခဲ့ပေါ့ ချစ်ရတဲ့သူရယ်<br>
                    အရှုံးပေးခဲ့ပြီ ကျေနပ်တော့ကွယ်<br>
                    ရေလိုဘဝအေးမြပါစေ အချစ်ရယ်<br>
                    တို့ဆုတောင်းပါတယ်...<br>
                    ပန်းခင်းလမ်းပဲလျှောက်ပါ<br>
                    အချစ်ကလေးရယ်<br>
                    ခရောင်းတောထဲကတို့ကို ထားခဲ့ကွယ်<br>
                    ချစ်ခဲ့ကြတဲ့အဖြစ်ဟာ အိမ်မက်ပဲ<br>
                    မင်းဘဝနေ့သစ်ရောက်ပြီ မေ့လိုက်ကွယ်<br>
                    အိုးးးဟိုး ဟို<br>
                    မေ့လိုက်တော့အချစ်ကလေးရယ်<br>
                    .....<br>
                    ကြင်နာတာတွေအားလုံး<br>
                    မေ့ပစ်လိုက်ပါကွယ်<br>
                    နိုးတစ်ဝက်တို့ အိမ်မက်ကလေးပျက်ပြယ်<br>
                    နာကြင်နေတဲ့ နှလုံးသားငိုနေလဲ<br>
                    မင်းပျော်ပါစေကွယ်<br>
                    ရင်မှာမျှော်လင့်ထားသမျှ<br>
                    ဆုံးရှုံးခဲ့ပေမယ့်<br>
                    မင်းဘဝအတွက်ကိုယ်ကျေနပ် မိတယ်<br>
                    ဒါတွေတစ်နေ့<br>
                    မင်းနားလည်မယ်ချစ်ရယ်<br>
                    နှုတ်ဆက်သွားပါကွယ်..<br>
                    ပန်းခင်းလမ်းပဲလျှောက်ပါ<br>
                    အချစ်ကလေးရယ်<br>
                    ခရောင်းတောထဲက တို့ကိုထားခဲ့ကွယ်<br>
                    ချစ်ခဲ့ကြတဲ့အဖြစ်ဟာ အိမ်မက်ပဲ<br>
                    မင်းဘဝနေ့သစ်ရောက်ပြီ မေ့လိုက်ကွယ်<br>
                    အိုးးးဟိုးးဟိုး<br>
                    မေ့လိုက်တော့အချစ်ကလေးရယ်..<br>
                    ယုံကြည်တာတွေအားလုံး ... အိုးးးဟိုး ဟိုမေ့လိုက်တော့အချစ်ကလေးရယ်<br>
                    (မေ့ပစ်လိုက်ချစ် ရယ် မေ့လိုက်တော့ ချစ်လေးရယ်)*5 <br><br>
        `
    },
    {
        songName: "မျက်၀န်းထဲမှာ အဖြေရှာ", filePath: "mp3/myat_wunn_htae_mr_aphyay_shar.mp3", coverPath: "images/ni_ni_khin_zaw.jpg",artistName: "Ni Ni Khin Zaw",
        songLyrics: ``
    },
    {
        songName: "မျက်ဝန်းလဲ့ပြာပြာ", filePath: "mp3/myat_wunn_lae_pyar_pyar.mp3", coverPath: "images/kyaw_thi_han.jpg",artistName: "Kyaw Thi Han",
        songLyrics: ``
    },
    {
        songName: "ပိုလာဘာလီ", filePath: "mp3/po_lr_br_li.mp3", coverPath: "images/kyaw_thi_han.jpg",artistName: "Kyaw Thi Han",
        songLyrics: ``
    },
    {
        songName: "တသိမ့်သိမ့်သူ", filePath: "mp3/ta_taint_taint_thu.mp3", coverPath: "images/kyaw_thi_han.jpg",artistName: "Kyaw Thi Han",
        songLyrics: ``
    },
    {
        songName: "အချိန်ရမှ နားထောင်ပါ", filePath: "mp3/a_chain_ya_ma.mp3", coverPath: "images/kyaw_thi_han.jpg",artistName: "Kyaw Thi Han",
        songLyrics: ``
    },
    {
        songName: "တယ်လီဖုန်းလေး", filePath: "mp3/telephone_lay.mp3",  coverPath: "images/shin_phone.jpg", artistName: "Shin Phone",
        songLyrics: ``
    },
    {
        songName: "ကိုကိုချစ်", filePath: "mp3/ko_ko_chit.mp3", coverPath: "images/shin_phone.jpg",artistName: "Shin Phone",
        songLyrics: ``
    },
    {
        songName: "ကိုယ်ပိုင်တဲ့နေရာ", filePath: "mp3/ko_paing_tat_nay_yr.mp3", coverPath: "images/shin_phone.jpg",artistName: "Shin Phone",
        songLyrics: ``
    },
    {
        songName: "တိုးတိတ်တမ်းတ", filePath: "mp3/toe_tate_tam_ta.mp3", coverPath: "images/shin_phone.jpg",artistName: "Shin Phone",
        songLyrics: ``
    },
    {
        songName: "ရင်ခုန်မြတ်နိုးခြင်း", filePath: "mp3/yin_khone_myat_noe_chin.mp3", coverPath: "images/chaw_su_khin.jpg",artistName: "Chaw Su Khin",
        songLyrics: ``
    },
    {
        songName: "အနန္ဓသစ္စာ", filePath: "mp3/a_nanda_thitsa.mp3", coverPath: "images/chaw_su_khin.jpg",artistName: "Chaw Su Khin",
        songLyrics: ``
    },
    {
        songName: "အတမ်းတဆုံး", filePath: "mp3/a_tam_ta_sone.mp3", coverPath: "images/chaw_su_khin.jpg",artistName: "Chaw Su Khin",
        songLyrics: ``
    },
    {
        songName: "ရှက်လဲရှက်ပါတယ်", filePath: "mp3/shatt_lal_spt.mp3", coverPath: "images/chaw_su_khin.jpg",artistName: "Chaw Su Khin",
        songLyrics: ``
    },
    {
        songName: "အချစ်တဲ့လား", filePath: "mp3/a_chit_tat_lr.mp3", coverPath: "images/zaw_win_htut.jpg",artistName: "Zaw Win Htut",
        songLyrics: ``
    },
    {
        songName: "အစမ်းသပ်ခံအသည်းနှလုံး", filePath: "mp3/a_san_tut_khan.mp3", coverPath: "images/zaw_win_htut.jpg",artistName: "Zaw Win Htut",
        songLyrics: ``
    },
    {
        songName: "အရက်ချိုချို အချစ်ခါးခါး", filePath: "mp3/a_yet_cho_cho.mp3", coverPath: "images/zaw_win_htut.jpg",artistName: "Zaw Win Htut",
        songLyrics: ``
    },
    {
        songName: "ပျားရည်", filePath: "mp3/pyar_yee.mp3", coverPath: "images/zaw_win_htut.jpg",artistName: "Zaw Win Htut",
        songLyrics: ``
    },
    {
        songName: "အလကားပဲ", filePath: "mp3/a_la_krr_pal.mp3", coverPath: "images/ni_ni_khin_zaw.jpg",artistName: "Ni Ni Khin Zaw",
        songLyrics: ``
    },
    {
        songName: "ဂယ်ပဲ", filePath: "mp3/gal_ba.mp3", coverPath: "images/ni_ni_khin_zaw.jpg",artistName: "Ni Ni Khin Zaw",
        songLyrics: ``
    },
    {
        songName: "မိုးကပြောတဲ့အလွမ်းဇာတ်လမ်း", filePath: "mp3/moe_ka_pyaw_tat.mp3", coverPath: "images/ni_ni_khin_zaw.jpg",artistName: "Ni Ni Khin Zaw",
        songLyrics: ``
    },
    {
        songName: "ရှင်ဘုရင်လေး", filePath: "mp3/shn_ba_yin_lay.mp3", coverPath: "images/ni_ni_khin_zaw.jpg",artistName: "Ni Ni Khin Zaw",
        songLyrics: ``
    },
    {
        songName: "ဘယ်သူကိုယ့်လောက်ချစ်လဲ", filePath: "mp3/bal_thu_ko_lout_chit.mp3", coverPath: "images/phyu_phyu_kyaw_thein.jpg",artistName: "Phyu Phyu Kyaw Thein",
        songLyrics: ``
    },
    {
        songName: "ထွက်သွားပါတော့", filePath: "mp3/htwet_twar.mp3", coverPath: "images/phyu_phyu_kyaw_thein.jpg",artistName: "Phyu Phyu Kyaw Thein",
        songLyrics: ``
    },
    {
        songName: "လှည့်စားလိုက်", filePath: "mp3/lae_srr_lite.mp3", coverPath: "images/phyu_phyu_kyaw_thein.jpg",artistName: "Phyu Phyu Kyaw Thein",
        songLyrics: ``
    },
    {
        songName: "ချစ်သူ့လက်ဆောင်", filePath: "mp3/chit_thu_latt_saung.mp3", coverPath: "images/htoo_eain_thin.jpg",artistName: "Htoo Eain Thin",
        songLyrics: ``
    },
    {
        songName: "ဂျပ်ဆင်ထိပ်က လိပ်ပြာ", filePath: "mp3/just_sin.mp3", coverPath: "images/htoo_eain_thin.jpg",artistName: "Htoo Eain Thin",
        songLyrics: ``
    },
    {
        songName: "ကျေးဇူးပါမေမေ", filePath: "mp3/kyae_zuu_pr_may_may.mp3", coverPath: "images/htoo_eain_thin.jpg",artistName: "Htoo Eain Thin",
        songLyrics: ``
    },
    {
        songName: "ပထမအသည်းကွဲဇာတ်လမ်း", filePath: "mp3/pa_hta_ma_a_thae.mp3", coverPath: "images/htoo_eain_thin.jpg",artistName: "Htoo Eain Thin",
        songLyrics: ``
    },
    {
        songName: "ဆွေးတယ်", filePath: "mp3/swal_tal.mp3", coverPath: "images/htoo_eain_thin.jpg",artistName: "Htoo Eain Thin",
        songLyrics: ``
    },
    {
        songName: "ကိုယ်ချင်းစာ နာခဲ့ရပြီလေ", filePath: "mp3/ko_chin_sar.mp3", coverPath: "images/soe_lwin_lwin.jpg",artistName: "Soe Lwin Lwin",
        songLyrics: ``
    },
    {
        songName: "ငယ်သူမို့", filePath: "mp3/ngal_thu_moh.mp3", coverPath: "images/soe_lwin_lwin.jpg",artistName: "Soe Lwin Lwin",
        songLyrics: ``
    },
    {
        songName: "စိတ်ကူးလေးရွက်လွင့်မယ်", filePath: "mp3/sate_kuu_lay.mp3", coverPath: "images/soe_lwin_lwin.jpg",artistName: "Soe Lwin Lwin",
        songLyrics: ``
    },
    {
        songName: "စာ",  filePath: "mp3/sar.mp3", coverPath: "images/soe_lwin_lwin.jpg", artistName: "Soe Lwin Lwin",
        songLyrics: ``
    },



];
let originalSongs = [...songs];
let topSongs = songs.slice(0,10);
console.log("originalSongs",originalSongs);

const limitedSongs = songs.slice(0, 10);

// Loop through the limited songs and create the HTML for each
limitedSongs.forEach((song, i) => {
    const songItem = document.createElement('div');
    songItem.className = 'songItem';

    const img = document.createElement('img');
    img.alt = i + 1;
    img.src = song.coverPath;

    const songName = document.createElement('span');
    songName.className = 'songName';
    songName.innerText = song.songName;

    const songlistplay = document.createElement('span');
    songlistplay.className = 'songlistplay';

    const timestamp = document.createElement('span');
    timestamp.className = 'timestamp';
    timestamp.innerHTML = `03:00 <i id="${i}" class="far songItemPlay fa-play-circle"></i>`;

    songlistplay.appendChild(timestamp);
    songItem.appendChild(img);
    songItem.appendChild(songName);
    songItem.appendChild(songlistplay);
    songItemContainer.appendChild(songItem);
});

let displaySongsByArtist = (artistName) => {
    try {
        songItemContainer.innerHTML = '';

        let filteredSongs = originalSongs.filter(song => song.artistName === artistName);
        console.log(originalSongs);
        console.log(filteredSongs);

        let topic = document.querySelector(".topic");
        topic.innerHTML = `${artistName}'s Songs`;

        filteredSongs.forEach((song, index) => {
            let songItem = document.createElement('div');
            songItem.className = 'songItem';
            songItem.innerHTML = `
                <img src="${song.coverPath}" alt="Song Cover ${index + 1}">
                <span class="songName">${song.songName}</span>
                <span class="songlistplay">
                    <span class="timestamp">05:34 <i id="play-${index}" class="far songItemPlay fa-play-circle"></i></span>
                </span>
            `;  
            songItemContainer.appendChild(songItem);
        });

        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
            element.addEventListener('click', (e) => {
                makeAllPlays();
                songIndex = parseInt(e.target.id.replace('play-', ''));
                e.target.classList.remove('fa-play-circle');
                e.target.classList.add('fa-pause-circle');
                audioElement.src = `${filteredSongs[songIndex].filePath}`;
                updateSongDetails(filteredSongs);
                audioElement.currentTime = 0;
                audioElement.play();
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
            });
        });

        console.log("filterSongs", filteredSongs);
        console.log("filteredSongs.length",filteredSongs.length);
        if(filteredSongs.length !== 0){
            songs = filteredSongs;
            console.log("songs",songs);
        }
        else {
            console.error(`No Songs found for ${artistName}`);
            location.reload();
            return;
        };
        console.log("songs", songs);
        songIndex = 0;
        updateSongDetails(songs);
        audioElement.src = `${songs[songIndex].filePath}`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    } catch (error) {
        console.error(`Error displaying songs for artist ${artistName}:`, error);
    }
};

let updateSongDetails = (songsList = songs) => {
    singerImage.src = songsList[songIndex].coverPath;
    masterSongName.innerText = songsList[songIndex].songName;
    if (songsList[songIndex].songLyrics) {
        lyrics.innerHTML = `
            <h3>${songsList[songIndex].songName}</h3>
            <br>
            <span>ဆို - ${songsList[songIndex].artistName}</span>
            <br><br>
            ${songsList[songIndex].songLyrics}`;
    } else {
        lyrics.innerHTML = `
            <h3>${songsList[songIndex].songName}</h3>
            <br>
            <span>ဆို - ${songsList[songIndex].artistName}</span>
            <br><br>
            <p>ဤသီချင်းအတွက် စာသားမရှိသေးပါ</p>`;
    }
};

imageItems.forEach(image => { 
    image.addEventListener('click', () => {
        let artistName = image.alt;
        console.log(artistName);
        displaySongsByArtist(artistName);
    });
});

masterPlay.addEventListener('click', () => {
    console.log("masterPlay is called.")
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

audioElement.addEventListener('timeupdate', () => { 
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100); 
    myProgressBar.value = progress;

    let currentMinutes = Math.floor(audioElement.currentTime / 60);
    console.log("currentMinutes from timeupdate",currentMinutes);
    let currentSeconds = Math.floor(audioElement.currentTime % 60);

    if (currentMinutes < 10) { currentMinutes = '0' + currentMinutes; }
    if (currentSeconds < 10) { currentSeconds = '0' + currentSeconds; }
    currentTimeDisplay.innerText = `${currentMinutes}:${currentSeconds}`;

    let durationMinutes = Math.floor(audioElement.duration / 60);
    let durationSeconds = Math.floor(audioElement.duration % 60);

    if (durationMinutes < 10) { durationMinutes = '0' + durationMinutes; }
    if (durationSeconds < 10) { durationSeconds = '0' + durationSeconds; }
    durationTimeDisplay.innerText = `${durationMinutes}:${durationSeconds}`;
});

document.getElementById('next').addEventListener('click', () => {
    console.log("next function is called");
    if (isShuffling) {
        songIndex = Math.floor(Math.random() * songs.length);
    } else {
        if (songIndex >= songs.length - 1) {
            songIndex = 0;
        } else {
            songIndex += 1;
        }
    }
    audioElement.src = `${songs[songIndex].filePath}`;
    updateSongDetails();
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
    console.log("previous function is called");
    if (isShuffling) {
        songIndex = Math.floor(Math.random() * songs.length);
    } else {
        if (songIndex <= 0) {
            songIndex = 0;
        } else {
            songIndex -= 1;
        }
    }
    audioElement.src = `${songs[songIndex].filePath}`;
    updateSongDetails();
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

repeatButton.addEventListener('click', () => {
    console.log("repeatButton function is called");
    isRepeating = !isRepeating;
    console.log("isRepeating", isRepeating);
    repeatButton.classList.toggle('active');
    repeatButton.style.color = isRepeating ? 'yellow' : '';
});

shuffleButton.addEventListener('click', () => {
    console.log("shuffleButton function is called");
    isShuffling = !isShuffling;
    console.log("isShuffling", isShuffling)
    shuffleButton.classList.toggle('active');
    shuffleButton.style.color = isShuffling ? 'yellow' : '';
});

audioElement.addEventListener('ended', () => {
    if (isRepeating) {
        audioElement.currentTime = 0;
        audioElement.play();
    } else {
        document.getElementById('next').click();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    upViewWrapper.addEventListener("click", () => {
        bottom.classList.toggle("expanded");

        if (bottom.classList.contains("expanded")) {
            updateSongDetails();
            sliderWrapper.style.display = "none";
            upViewIcon.classList.remove("fa-angle-up");
            upViewIcon.classList.add("fa-angle-down");
            songInfo.classList.add("hidden");
            singerImg.classList.remove("hidden");
            lyrics.classList.remove("hidden");
        } else {
            sliderWrapper.style.display = "block";
            upViewIcon.classList.remove("fa-angle-down");
            upViewIcon.classList.add("fa-angle-up");
            songInfo.classList.remove("hidden");
            singerImg.classList.add("hidden");
            lyrics.classList.add("hidden");
        }
    });
});
