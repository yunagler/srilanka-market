/* SriLanka Market — i18n, language switch, WhatsApp registration. */
(function () {
  "use strict";
  var DEFAULT_TO = "972544567610"; // registration WhatsApp; overridden by ?to=<digits>
  var SURVEY_API = "https://app.ymarket.co.il/api/public/community-survey"; // CRM endpoint that stores survey answers
  var SHOP_API = "https://app.ymarket.co.il/api/public/shop/srilanka-market/catalog"; // live points + products (CRM)
  var PRODUCTS = ["rice_samba","rice_nadu","rice_basmati","dhal_red","flour_atta","flour_white","sugar","coconut_milk","oil_coconut","oil_cooking","curry_powder","chili","turmeric","spices_whole","maldive_fish","tea_ceylon","noodles","sardines","tuna","milk_powder","biscuits","jaggery","papadam","toilet_paper","paper_towel","dish_soap","laundry","trash_bags","disposables","food_boxes","soap"];
  var DAYS = ["sat","sun","fri","other","none"], SPENDS = ["lt300","300_600","600_1000","gt1000"], PAYS = ["cash","card","link","any"];
  var T = {
    en: {
      brand: "SriLanka Market", nav_home: "Home", nav_work: "Work", nav_shop: "Shop", nav_trips: "Trips", nav_services: "Help", nav_about: "About", nav_register: "Register",
      foot1: "A private initiative of an Israeli business. We are not a government agency and not a manpower corporation.", foot2: "Registration is free and voluntary. We never take money from workers.", foot_privacy: "Privacy",
      // home
      h_eyebrow: "For Sri Lankans working in Israel", h_title: "Work, food, trips and help. In your language.", h_lead: "We are an Israeli building and distribution business. We are building a Sri Lankan work team through the legal route, and a community service for Sri Lankans in Israel: food and goods, day-off trips, rides and help.",
      h_work_t: "Work on big projects", h_work_p: "Legal placement only, through a licensed corporation and a registered contractor.", h_shop_t: "Sri Lankan food and daily goods", h_shop_p: "Weekly pickup near you, or delivery anywhere in Israel.", h_trips_t: "Trips on your day off", h_trips_p: "Organised buses with a guide. Sea, Jerusalem, the north, the Dead Sea.", h_serv_t: "Rides and help", h_serv_p: "Licensed drivers, help with forms, someone who answers in Sinhala or Tamil.", more: "Read more",
      h_trust_t: "What we never do", h_trust1: "We never take money from a worker. Not for a job, not for a transfer, not for registration.", h_trust2: "We never promise a job, a visa or a salary.", h_trust3: "We never ask for your passport or a photo of your work permit.", h_trust4: "Your details are used only to contact you, and deleted on request.",
      h_cta: "Register on WhatsApp",
      // work
      w_title: "Work with us, the legal way", w_lead: "In Israel a foreign construction worker may work only through a licensed manpower corporation, placed at a registered contractor. We do not bend this. Here is exactly how it works.",
      w_s1: "You stay a legal worker. Your corporation, your permit and your rights do not change until a transfer is approved.", w_s2: "A transfer to the corporation we work with happens at the end of a quarter (March, June, September, December), or earlier if your current corporation agrees in writing. You sign a consent form in your language.", w_s3: "The corporation we work with becomes your employer: salary by the construction sector wage, pension deposit, health insurance, housing, as the law requires.", w_s4: "You are placed at our registered contractor's sites. Wet works: formwork, rebar, plaster, tiling. Residential and infrastructure projects.",
      w_facts_t: "Good to know", w_f1: "A foreign worker may stay in Israel up to 63 months in total. Tell us your arrival date so we plan with you.", w_f2: "Nobody may take payment for a transfer. If someone asks you for money for a job, walk away.", w_f3: "Your current corporation cannot refuse a quarterly transfer and cannot hold your last salary.", w_f4: "It takes time. We will tell you the truth about dates. We promise nothing we cannot keep.",
      w_who_t: "Who we are looking for", w_who: "Plasterers, tilers, formwork and rebar workers with a valid construction or renovation permit, who want steady work on serious projects and a team that speaks their language.",
      // shop
      s_title: "Sri Lankan food and daily goods", s_lead: "Rice, dhal, spices, tea, coconut products, biscuits. Plus toilet paper, cleaning and disposables at wholesale prices from an Israeli distributor.",
      s_how_t: "How it works", s_h1: "Order on WhatsApp or in the app, in your language.", s_h2: "Pay by card or cash at pickup.", s_h3: "Collect once a week at the pickup point near your housing, or get delivery anywhere in Israel.", s_soon: "The shop opens area by area. Register and tell us where you live, and we open a pickup point when there are enough people.",
      // trips
      t_title: "Trips on your day off", t_lead: "Organised day trips with a bus and a guide, for groups from the same area. Booked and paid in advance, so the day is simple.",
      t_list_t: "Where", t_l1: "Tel Aviv beach and the old port of Jaffa", t_l2: "Jerusalem: Old City, churches, Mount of Olives", t_l3: "The north: Sea of Galilee, Jordan River, Rosh Hanikra", t_l4: "Dead Sea and Masada", t_l5: "Eilat (two days)", t_l6: "Community days: Vesak, Christmas, Sinhala and Tamil New Year",
      t_rules_t: "Rules", t_r1: "Licensed bus operator and insured bus only.", t_r2: "Seats are sold in advance. No cash collected on the bus.", t_r3: "Tell us your day off and your area when you register.",
      // services
      v_title: "Rides and help", v_lead: "Small things that are hard in a foreign country, made easy in your language.",
      v_1t: "Rides", v_1p: "Rides with licensed taxi and transport drivers at an agreed price. Never private cars for pay; that is illegal in Israel and unsafe for you.", v_2t: "Forms and questions", v_2p: "Help understanding a letter, a payslip, a form. We explain; a lawyer decides when needed.", v_3t: "Money and post", v_3p: "Planned, not yet open. These need licences in Israel and we do only what is licensed.", v_4t: "A person who answers", v_4p: "WhatsApp in Sinhala or Tamil. We answer within a day.",
      // about
      a_title: "About us", a_p1: "We are an Israeli family business from the centre of Israel: a wholesale distributor of cleaning, paper and food products to businesses, and a building business registering as a contractor.", a_p2: "The idea for this service came from a Sri Lankan worker on one of our sites, who saw that his friends needed work they can trust, food from home, and someone who answers. We are building it with him.", a_p3: "We work only with licensed corporations and registered professionals. We publish no names of workers or partners.",
      a_priv_t: "Privacy", a_priv: "We keep only what you send us on WhatsApp: name, phone, trade, permit type, corporation, arrival month, area, interests. It is used to contact you about work and services. Write 'delete' and we delete it.",
      // register
      // survey
      nav_survey: "Survey", sv_title: "2 minutes: what should we bring?", sv_lead: "We are opening weekly pickup points for Sri Lankan food and daily goods. Tell us what you need and where you are. No name needed unless you want us to call you.",
      sv_city: "Where do you live? (city / area)", sv_day: "Your day off", sv_buy: "Where do you buy Sri Lankan food today? (shop, city, WhatsApp group)", sv_spend: "How much do you spend on food per month (per person)?",
      sv_products: "Tick what you would buy every week", sv_missing: "What is missing or too expensive in Israel? (write freely)", sv_pay: "How do you prefer to pay?", sv_host: "I could be the contact person for a pickup point where I live (storage for one day a week).",
      sv_name: "Name (optional)", sv_phone: "Phone (optional, if you want us to call)", sv_note: "Anything else", sv_consent: "If I gave my phone: I agree that you contact me about the shop. My details are kept for that only and deleted on request.",
      sv_btn: "Send", sv_sending: "Sending…", sv_ok_t: "Thank you! 🙏", sv_ok: "Your answers reached us. We open a pickup point in your area when there are enough people. If you left a phone, we will write to you in your language.",
      sv_err: "Could not send. Check your connection and try again, or send it on WhatsApp.", sv_err_consent: "You wrote a phone — please tick the consent box, or clear the phone.", sv_wa: "Send on WhatsApp instead",
      d_sat: "Saturday", d_sun: "Sunday", d_fri: "Friday", d_other: "Another day / changes", d_none: "No fixed day",
      sp_lt300: "Under 300 ₪", sp_300_600: "300–600 ₪", sp_600_1000: "600–1,000 ₪", sp_gt1000: "Over 1,000 ₪",
      pay_cash: "Cash at pickup", pay_card: "Card", pay_link: "Payment link in advance", pay_any: "Any",
      pr_rice_samba: "Samba rice", pr_rice_nadu: "Nadu / red rice", pr_rice_basmati: "Basmati rice", pr_dhal_red: "Red dhal (lentils)", pr_flour_atta: "Atta flour", pr_flour_white: "White flour", pr_sugar: "Sugar",
      pr_coconut_milk: "Coconut milk", pr_oil_coconut: "Coconut oil", pr_oil_cooking: "Cooking oil", pr_curry_powder: "Curry powder (roasted)", pr_chili: "Chili powder / flakes", pr_turmeric: "Turmeric", pr_spices_whole: "Whole spices (cardamom, cinnamon, cloves)",
      pr_maldive_fish: "Maldive fish", pr_tea_ceylon: "Ceylon tea", pr_noodles: "Instant noodles", pr_sardines: "Canned sardines / mackerel", pr_tuna: "Canned tuna", pr_milk_powder: "Milk powder", pr_biscuits: "Biscuits / snacks", pr_jaggery: "Jaggery", pr_papadam: "Papadam",
      pr_toilet_paper: "Toilet paper", pr_paper_towel: "Paper towels", pr_dish_soap: "Dish soap", pr_laundry: "Laundry powder", pr_trash_bags: "Trash bags", pr_disposables: "Plates, cups, cutlery", pr_food_boxes: "Food boxes", pr_soap: "Soap / shampoo",
      s_points_t: "Pickup points", s_items_t: "Some of our products", s_order: "Order now", s_next: "Next pickup: ", s_survey_cta: "Tell us what to bring (2 min)",
      r_title: "Register", r_lead: "Fill in the form. The green button opens WhatsApp with your message ready. Send it, and we call you back within a few days in your language.",
      r_name: "Full name", r_phone: "Phone (Israel)", r_trade: "Trade", r_permit: "Permit type", r_corp: "Current corporation (company name)", r_arrived: "Arrived in Israel", r_region: "Where you want to work", r_interests: "I am interested in", r_note: "Anything else",
      r_consent: "I agree that you contact me about work and services. My details are kept for that only and deleted on request.", r_btn: "Send on WhatsApp", r_err_name: "Please write your full name.", r_err_consent: "Please tick the consent box.",
      r_msg_head: "Hello, I want to register.", r_m_name: "Name", r_m_phone: "Phone", r_m_trade: "Trade", r_m_permit: "Permit", r_m_corp: "Corporation", r_m_arrived: "Arrived", r_m_region: "Area", r_m_int: "Interested in", r_m_note: "Note", r_m_consent: "I agree to be contacted about work and services.",
      o_none: "—", t_formwork: "Formwork", t_rebar: "Rebar (iron)", t_plaster: "Plaster", t_tiling: "Tiling / flooring", t_gypsum: "Gypsum", t_waterproof: "Waterproofing", t_plumbing: "Plumbing", t_painting: "Painting", t_general: "General",
      p_construction: "Construction (B/1)", p_renovation: "Renovation", p_other: "Other / not sure",
      g_center: "Center (Tel Aviv)", g_sharon: "Sharon / Netanya", g_jerusalem: "Jerusalem", g_north: "North / Haifa", g_south: "South / Beer Sheva", g_any: "Anywhere",
      i_work: "Work", i_shop: "Shop", i_trips: "Trips", i_transport: "Rides", i_help: "Help",
      resp_t: "Our respect for the people of Sri Lanka",
      resp_1t: "An old civilisation", resp_1p: "Over 2,500 years of recorded history. Anuradhapura, Sigiriya and Kandy are world heritage. Sri Lanka built irrigation reservoirs when much of the world had none. We know who we are talking to.",
      resp_2t: "Educated and skilled", resp_2p: "One of the highest literacy rates in Asia. Sri Lankan builders, carers and tradespeople are respected in the Gulf, in Korea, in Italy and in Israel for precision and reliability. You are professionals, not cheap hands.",
      resp_3t: "Faith and respect for others", resp_3p: "Buddhists, Hindus, Muslims and Christians live side by side on one island. Sinhala and Tamil. Ayubowan and Vanakkam. We will respect your faith, your food and your holy days.",
      resp_4t: "Family first", resp_4p: "Most of you are here for a family at home. We understand that every month matters, and that trust is worth more than promises. We will deal with you straight.",
      resp_fest_t: "Your days, in our calendar", resp_fest: "Vesak and Poson full moons, Sinhala and Tamil New Year in April, Thai Pongal, Deepavali, Christmas. We plan trips and community days around them, and we will never ask you to work on a day you hold sacred."
    },
    si: {
      brand: "SriLanka Market", nav_home: "මුල් පිටුව", nav_work: "රැකියා", nav_shop: "කඩේ", nav_trips: "චාරිකා", nav_services: "උදව්", nav_about: "අපි ගැන", nav_register: "ලියාපදිංචි",
      foot1: "ඊශ්‍රායල ව්‍යාපාරයක පෞද්ගලික මුලපිරීමක්. අපි රජයේ ආයතනයක් හෝ මිනිස් බල සමාගමක් නොවේ.", foot2: "ලියාපදිංචිය නොමිලේ සහ ස්වේච්ඡාවෙන්. අපි කම්කරුවන්ගෙන් කවදාවත් මුදල් ගන්නේ නැහැ.", foot_privacy: "පෞද්ගලිකත්වය",
      h_eyebrow: "ඊශ්‍රායලයේ වැඩ කරන ශ්‍රී ලාංකිකයන් සඳහා", h_title: "රැකියාව, ආහාර, චාරිකා සහ උදව්. ඔබේ භාෂාවෙන්.", h_lead: "අපි ඊශ්‍රායල ඉදිකිරීම් සහ බෙදාහැරීම් ව්‍යාපාරයක්. අපි නීත්‍යානුකූල මාර්ගයෙන් ශ්‍රී ලාංකික වැඩ කණ්ඩායමක් සහ ඊශ්‍රායලයේ ශ්‍රී ලාංකිකයන් සඳහා ප්‍රජා සේවාවක් ගොඩනඟනවා: ආහාර සහ බඩු, නිවාඩු දවසේ චාරිකා, ගමන් සහ උදව්.",
      h_work_t: "විශාල ව්‍යාපෘතිවල වැඩ", h_work_p: "බලපත්‍රලාභී සමාගමක් සහ ලියාපදිංචි කොන්ත්‍රාත්කරුවෙකු හරහා නීත්‍යානුකූල පත්වීම් පමණයි.", h_shop_t: "ශ්‍රී ලාංකික ආහාර සහ දෛනික බඩු", h_shop_p: "ඔබ ළඟින් සතිපතා pickup, නැත්නම් ඊශ්‍රායලයේ ඕනෑම තැනකට බෙදාහැරීම.", h_trips_t: "නිවාඩු දවසේ චාරිකා", h_trips_p: "මඟපෙන්වන්නෙකු සමඟ සංවිධානාත්මක බස්. මුහුද, ජෙරුසලම, උතුර, මළ මුහුද.", h_serv_t: "ගමන් සහ උදව්", h_serv_p: "බලපත්‍රලාභී රියදුරන්, ෆෝම්වලට උදව්, සිංහලෙන් හෝ දෙමළෙන් උත්තර දෙන කෙනෙක්.", more: "තව කියවන්න",
      h_trust_t: "අපි කවදාවත් නොකරන දේ", h_trust1: "අපි කම්කරුවෙකුගෙන් කවදාවත් මුදල් ගන්නේ නැහැ. රැකියාවට නැහැ, මාරුවීමට නැහැ, ලියාපදිංචියට නැහැ.", h_trust2: "අපි රැකියාවක්, වීසා එකක් හෝ වැටුපක් කවදාවත් පොරොන්දු වෙන්නේ නැහැ.", h_trust3: "අපි ඔබේ passport එක හෝ වැඩ බලපත්‍රයේ ඡායාරූපයක් කවදාවත් ඉල්ලන්නේ නැහැ.", h_trust4: "ඔබේ විස්තර ඔබව සම්බන්ධ කර ගැනීමට පමණයි, ඉල්ලූ විට මකනවා.",
      h_cta: "WhatsApp හරහා ලියාපදිංචි වන්න",
      w_title: "අප සමඟ වැඩ, නීත්‍යානුකූල ක්‍රමයට", w_lead: "ඊශ්‍රායලයේ විදේශීය ඉදිකිරීම් කම්කරුවෙකුට වැඩ කරන්න පුළුවන් බලපත්‍රලාභී මිනිස් බල සමාගමක් හරහා, ලියාපදිංචි කොන්ත්‍රාත්කරුවෙකු ළඟ පත් කර පමණයි. අපි මේක නවන්නේ නැහැ. ඒක වැඩ කරන හැටි හරියටම මෙන්න.",
      w_s1: "ඔබ නීත්‍යානුකූල කම්කරුවෙක් ලෙසම ඉන්නවා. මාරුවීමක් අනුමත වෙනකම් ඔබේ සමාගම, බලපත්‍රය සහ අයිතිවාසිකම් වෙනස් වෙන්නේ නැහැ.", w_s2: "අපි වැඩ කරන සමාගමට මාරුවීම කාර්තුවක් අවසානයේ (මාර්තු, ජූනි, සැප්තැම්බර්, දෙසැම්බර්) සිදු වෙනවා, නැත්නම් ඔබේ දැන් සමාගම ලිඛිතව එකඟ වුණොත් ඊට කලින්. ඔබ ඔබේ භාෂාවෙන් එකඟතා ෆෝම් එකක් අත්සන් කරනවා.", w_s3: "අපි වැඩ කරන සමාගම ඔබේ සේවායෝජකයා වෙනවා: ඉදිකිරීම් අංශයේ වැටුප, විශ්‍රාම තැන්පතුව, සෞඛ්‍ය රක්ෂණය, නවාතැන් — නීතියට අනුව.", w_s4: "ඔබ අපේ ලියාපදිංචි කොන්ත්‍රාත්කරුගේ site වලට පත් වෙනවා. තෙත් වැඩ: ෆෝම්වර්ක්, යකඩ, ප්ලාස්ටර්, ටයිල්. නිවාස සහ යටිතල පහසුකම් ව්‍යාපෘති.",
      w_facts_t: "දැනගන්න හොඳයි", w_f1: "විදේශීය කම්කරුවෙකුට ඊශ්‍රායලයේ මුළු මාස 63 ක් දක්වා ඉන්න පුළුවන්. ඔබ ආපු දිනය කියන්න, අපි ඔබ සමඟ සැලසුම් කරනවා.", w_f2: "මාරුවීමකට කිසිවෙකුට මුදල් ගන්න බැහැ. රැකියාවකට කවුරුහරි මුදල් ඉල්ලුවොත්, ඉවත් වෙන්න.", w_f3: "ඔබේ දැන් සමාගමට කාර්තු මාරුවීමක් ප්‍රතික්ෂේප කරන්න බැහැ, අවසන් වැටුප රඳවා ගන්නත් බැහැ.", w_f4: "කාලය ගත වෙනවා. දින ගැන අපි ඇත්ත කියනවා. තියාගන්න බැරි දෙයක් අපි පොරොන්දු වෙන්නේ නැහැ.",
      w_who_t: "අපි හොයන්නේ කවුද", w_who: "වලංගු ඉදිකිරීම් හෝ අලුත්වැඩියා බලපත්‍රයක් තියෙන, බරපතළ ව්‍යාපෘතිවල ස්ථාවර වැඩක් සහ තමන්ගේ භාෂාව කතා කරන කණ්ඩායමක් ඕන ප්ලාස්ටර්, ටයිල්, ෆෝම්වර්ක් සහ යකඩ කම්කරුවන්.",
      s_title: "ශ්‍රී ලාංකික ආහාර සහ දෛනික බඩු", s_lead: "සහල්, පරිප්පු, කුළුබඩු, තේ, පොල් නිෂ්පාදන, බිස්කට්. ඊට අමතරව ඊශ්‍රායල බෙදාහරින්නෙකුගෙන් තොග මිලට ටොයිලට් පේපර්, පිරිසිදු කිරීමේ බඩු සහ එක් වරක් භාවිත බඩු.",
      s_how_t: "වැඩ කරන හැටි", s_h1: "WhatsApp හරහා හෝ app එකෙන්, ඔබේ භාෂාවෙන් order කරන්න.", s_h2: "කාඩ් එකෙන් හෝ pickup වෙලාවේ මුදලින් ගෙවන්න.", s_h3: "ඔබේ නවාතැන ළඟ pickup point එකෙන් සතියකට වරක් ගන්න, නැත්නම් ඊශ්‍රායලයේ ඕනෑම තැනකට බෙදාහැරීම.", s_soon: "කඩේ ප්‍රදේශයෙන් ප්‍රදේශයට විවෘත වෙනවා. ලියාපදිංචි වෙලා ඔබ ඉන්න තැන කියන්න — ප්‍රමාණවත් අය ඉන්නකොට අපි pickup point එකක් විවෘත කරනවා.",
      t_title: "නිවාඩු දවසේ චාරිකා", t_lead: "එකම ප්‍රදේශයේ කණ්ඩායම් සඳහා බස් සහ මඟපෙන්වන්නෙකු සමඟ සංවිධානාත්මක දින චාරිකා. කලින් වෙන් කර ගෙවනවා, ඒ නිසා දවස සරලයි.",
      t_list_t: "කොහේද", t_l1: "ටෙල් අවිව් වෙරළ සහ ජාෆා පැරණි වරාය", t_l2: "ජෙරුසලම: පැරණි නගරය, පල්ලි, ඔලීව කන්ද", t_l3: "උතුර: ගලීල මුහුද, ජෝර්දාන් ගඟ, රොෂ් හනික්රා", t_l4: "මළ මුහුද සහ මසාඩා", t_l5: "එයිලට් (දින දෙකක්)", t_l6: "ප්‍රජා දින: වෙසක්, නත්තල්, සිංහල සහ දෙමළ අලුත් අවුරුද්ද",
      t_rules_t: "නීති", t_r1: "බලපත්‍රලාභී බස් ක්‍රියාකරු සහ රක්ෂිත බස් පමණයි.", t_r2: "ආසන කලින් විකුණනවා. බස් එකේ මුදල් එකතු කරන්නේ නැහැ.", t_r3: "ලියාපදිංචි වෙනකොට ඔබේ නිවාඩු දවස සහ ප්‍රදේශය කියන්න.",
      v_title: "ගමන් සහ උදව්", v_lead: "විදේශ රටක අමාරු පොඩි දේවල්, ඔබේ භාෂාවෙන් පහසු කරනවා.",
      v_1t: "ගමන්", v_1p: "එකඟ වූ මිලකට බලපත්‍රලාභී ටැක්සි සහ ප්‍රවාහන රියදුරන් සමඟ ගමන්. මුදලට පෞද්ගලික වාහන කවදාවත් නැහැ — ඊශ්‍රායලයේ ඒක නීති විරෝධීයි සහ ඔබට අනාරක්ෂිතයි.", v_2t: "ෆෝම් සහ ප්‍රශ්න", v_2p: "ලිපියක්, වැටුප් පත්‍රිකාවක්, ෆෝම් එකක් තේරුම් ගන්න උදව්. අපි පැහැදිලි කරනවා; අවශ්‍ය විට නීතිඥයා තීරණය කරනවා.", v_3t: "මුදල් සහ තැපැල්", v_3p: "සැලසුම් කර ඇත, තවම විවෘත නැහැ. ඊශ්‍රායලයේ මේවාට බලපත්‍ර ඕනේ, අපි බලපත්‍ර ඇති දේ පමණයි කරන්නේ.", v_4t: "උත්තර දෙන කෙනෙක්", v_4p: "සිංහලෙන් හෝ දෙමළෙන් WhatsApp. දවසක් ඇතුළත උත්තර දෙනවා.",
      a_title: "අපි ගැන", a_p1: "අපි ඊශ්‍රායලයේ මැද පළාතේ ඊශ්‍රායල පවුල් ව්‍යාපාරයක්: ව්‍යාපාරවලට පිරිසිදු කිරීමේ, කඩදාසි සහ ආහාර නිෂ්පාදන තොග බෙදාහරින්නෙක්, සහ කොන්ත්‍රාත්කරුවෙකු ලෙස ලියාපදිංචි වෙමින් ඉන්න ගොඩනැඟිලි ව්‍යාපාරයක්.", a_p2: "මේ සේවාවේ අදහස ආවේ අපේ site එකක ශ්‍රී ලාංකික කම්කරුවෙකුගෙන් — ඔහුගේ යාළුවන්ට විශ්වාස කරන්න පුළුවන් වැඩක්, ගෙදර ආහාර සහ උත්තර දෙන කෙනෙක් ඕන බව ඔහු දැක්කා. අපි ඒක ඔහු සමඟ ගොඩනඟනවා.", a_p3: "අපි වැඩ කරන්නේ බලපත්‍රලාභී සමාගම් සහ ලියාපදිංචි වෘත්තිකයන් සමඟ පමණයි. කම්කරුවන්ගේ හෝ හවුල්කරුවන්ගේ නම් අපි ප්‍රකාශ කරන්නේ නැහැ.",
      a_priv_t: "පෞද්ගලිකත්වය", a_priv: "ඔබ WhatsApp හරහා එවන දේ පමණයි අපි තබාගන්නේ: නම, දුරකථන, රැකියාව, බලපත්‍ර වර්ගය, සමාගම, ආපු මාසය, ප්‍රදේශය, කැමැත්ත. රැකියා සහ සේවා ගැන ඔබව සම්බන්ධ කර ගන්න ඒක භාවිත වෙනවා. 'delete' කියලා ලියන්න, අපි මකනවා.",
      nav_survey: "සමීක්ෂණය", sv_title: "මිනිත්තු 2යි: අපි මොනවද ගේන්න ඕනේ?", sv_lead: "ශ්‍රී ලාංකික ආහාර සහ දෛනික බඩු සඳහා සතිපතා pickup ස්ථාන අපි විවෘත කරනවා. ඔයාට මොනවද ඕනේ, ඔයා ඉන්නේ කොහෙද කියන්න. නම අවශ්‍ය නැහැ – අපි කතා කරනවට කැමති නම් විතරයි.",
      sv_city: "ඔයා ජීවත් වෙන්නේ කොහෙද? (නගරය / ප්‍රදේශය)", sv_day: "ඔයාගේ නිවාඩු දවස", sv_buy: "දැන් ශ්‍රී ලාංකික ආහාර ගන්නේ කොහෙන්ද? (කඩේ, නගරය, WhatsApp group)", sv_spend: "මාසෙකට ආහාර වලට කීයක් වියදම් කරනවද (එක්කෙනෙකුට)?",
      sv_products: "හැම සතියෙම ගන්න ඒවා ලකුණු කරන්න", sv_missing: "ඊශ්‍රායලයේ නැති හෝ ගණන් වැඩි දේවල් මොනවද? (නිදහසේ ලියන්න)", sv_pay: "ගෙවන්න කැමති විදිහ", sv_host: "මම ජීවත් වෙන තැන pickup ස්ථානයක සම්බන්ධ පුද්ගලයා වෙන්න මට පුළුවන් (සතියකට එක දවසක් බඩු තියාගන්න ඉඩ).",
      sv_name: "නම (අත්‍යවශ්‍ය නැහැ)", sv_phone: "දුරකථනය (අපි කතා කරනවට කැමති නම් විතරයි)", sv_note: "වෙනත් දෙයක්", sv_consent: "දුරකථන අංකය දුන්නා නම්: කඩේ ගැන මට සම්බන්ධ වෙන්න එකඟයි. විස්තර ඒකට විතරයි, ඉල්ලුවොත් මකනවා.",
      sv_btn: "යවන්න", sv_sending: "යවමින්…", sv_ok_t: "ස්තූතියි! 🙏", sv_ok: "ඔයාගේ උත්තර අපිට ලැබුණා. ප්‍රමාණවත් අය ඉන්න කොට ඔයාගේ ප්‍රදේශයේ pickup ස්ථානයක් විවෘත කරනවා. දුරකථන අංකය දුන්නා නම් ඔයාගේ භාෂාවෙන් ලියනවා.",
      sv_err: "යවන්න බැරි වුණා. සම්බන්ධතාවය බලලා ආයෙ උත්සාහ කරන්න, නැත්නම් WhatsApp එකෙන් යවන්න.", sv_err_consent: "දුරකථන අංකයක් ලිව්වා – කරුණාකර එකඟතා කොටුව ලකුණු කරන්න, නැත්නම් අංකය මකන්න.", sv_wa: "ඒ වෙනුවට WhatsApp එකෙන් යවන්න",
      d_sat: "සෙනසුරාදා", d_sun: "ඉරිදා", d_fri: "සිකුරාදා", d_other: "වෙනත් දවසක් / වෙනස් වෙනවා", d_none: "ස්ථිර දවසක් නැහැ",
      sp_lt300: "₪300ට අඩු", sp_300_600: "₪300–600", sp_600_1000: "₪600–1,000", sp_gt1000: "₪1,000ට වැඩි",
      pay_cash: "ගන්න කොට මුදලින්", pay_card: "කාඩ්", pay_link: "කලින් ගෙවීමේ link එකක්", pay_any: "ඕනෑම එකක්",
      pr_rice_samba: "සම්බා හාල්", pr_rice_nadu: "නාඩු / රතු හාල්", pr_rice_basmati: "බාස්මතී හාල්", pr_dhal_red: "රතු පරිප්පු", pr_flour_atta: "ආටා පිටි", pr_flour_white: "සුදු පිටි", pr_sugar: "සීනි",
      pr_coconut_milk: "පොල් කිරි", pr_oil_coconut: "පොල් තෙල්", pr_oil_cooking: "ඉවුම් තෙල්", pr_curry_powder: "තුනපහ (බැදපු)", pr_chili: "මිරිස් කුඩු / පියලි", pr_turmeric: "කහ", pr_spices_whole: "මුළු කුළුබඩු (එනසාල්, කුරුඳු, කරාබුනැටි)",
      pr_maldive_fish: "උම්බලකඩ", pr_tea_ceylon: "ලංකා තේ", pr_noodles: "ක්ෂණික නූඩ්ල්ස්", pr_sardines: "ටින් සාඩින් / මැකරල්", pr_tuna: "ටින් ටූනා", pr_milk_powder: "කිරි පිටි", pr_biscuits: "බිස්කට් / කෑම", pr_jaggery: "හකුරු", pr_papadam: "පපඩම්",
      pr_toilet_paper: "ටොයිලට් පේපර්", pr_paper_towel: "කඩදාසි තුවා", pr_dish_soap: "පිඟන් සෝදන දියර", pr_laundry: "රෙදි සෝදන කුඩු", pr_trash_bags: "කුණු බෑග්", pr_disposables: "පිඟන්, කෝප්ප, හැඳි", pr_food_boxes: "කෑම පෙට්ටි", pr_soap: "සබන් / ෂැම්පු",
      s_points_t: "ලබා ගන්නා ස්ථාන", s_items_t: "අපේ බඩු කිහිපයක්", s_order: "දැන් ඇණවුම් කරන්න", s_next: "ඊළඟ ලබා ගැනීම: ", s_survey_cta: "අපි මොනවද ගේන්න ඕනේ කියන්න (මිනිත්තු 2)",
      r_title: "ලියාපදිංචි වන්න", r_lead: "ෆෝම් එක පුරවන්න. කොළ බොත්තම ඔබේ message එක සූදානම්ව WhatsApp විවෘත කරනවා. යවන්න — දවස් කිහිපයක් ඇතුළත අපි ඔබේ භාෂාවෙන් ආපසු කතා කරනවා.",
      r_name: "සම්පූර්ණ නම", r_phone: "දුරකථන (ඊශ්‍රායල)", r_trade: "රැකියාව", r_permit: "බලපත්‍ර වර්ගය", r_corp: "දැන් ඉන්න සමාගම (නම)", r_arrived: "ඊශ්‍රායලයට ආවේ", r_region: "වැඩ කරන්න කැමති තැන", r_interests: "මම කැමතියි", r_note: "වෙනත් දෙයක්",
      r_consent: "රැකියා සහ සේවා ගැන මාව සම්බන්ධ කර ගන්න මම එකඟයි. මගේ විස්තර ඒ සඳහා පමණයි තබාගන්නේ, ඉල්ලූ විට මකනවා.", r_btn: "WhatsApp හරහා යවන්න", r_err_name: "කරුණාකර ඔබේ සම්පූර්ණ නම ලියන්න.", r_err_consent: "කරුණාකර එකඟතා කොටුව ලකුණු කරන්න.",
      r_msg_head: "ආයුබෝවන්, මම ලියාපදිංචි වෙන්න කැමතියි.", r_m_name: "නම", r_m_phone: "දුරකථන", r_m_trade: "රැකියාව", r_m_permit: "බලපත්‍රය", r_m_corp: "සමාගම", r_m_arrived: "ආවේ", r_m_region: "ප්‍රදේශය", r_m_int: "කැමැත්ත", r_m_note: "සටහන", r_m_consent: "රැකියා සහ සේවා ගැන මාව සම්බන්ධ කර ගන්න මම එකඟයි.",
      o_none: "—", t_formwork: "ෆෝම්වර්ක්", t_rebar: "යකඩ", t_plaster: "ප්ලාස්ටර්", t_tiling: "ටයිල් / බිම", t_gypsum: "ජිප්සම්", t_waterproof: "ජල ආරක්ෂණ", t_plumbing: "නල", t_painting: "පේන්ට්", t_general: "සාමාන්‍ය",
      p_construction: "ඉදිකිරීම් (B/1)", p_renovation: "අලුත්වැඩියා", p_other: "වෙනත් / විශ්වාස නැහැ",
      g_center: "මැද (ටෙල් අවිව්)", g_sharon: "ෂරොන් / නෙතන්යා", g_jerusalem: "ජෙරුසලම", g_north: "උතුර / හයිෆා", g_south: "දකුණ / බීර්ෂෙවා", g_any: "ඕනෑම තැනක",
      i_work: "වැඩ", i_shop: "කඩේ", i_trips: "චාරිකා", i_transport: "ගමන්", i_help: "උදව්",
      resp_t: "ශ්‍රී ලාංකික ජනතාවට අපේ ගෞරවය",
      resp_1t: "පැරණි ශිෂ්ටාචාරයක්", resp_1p: "වාර්තාගත ඉතිහාසයේ අවුරුදු 2,500 කට වැඩි. අනුරාධපුරය, සීගිරිය සහ මහනුවර ලෝක උරුමයන්. ලෝකයේ බොහෝ තැන්වල නොතිබුණු කාලයේ ශ්‍රී ලංකාව වැව් හැදුවා. අපි කතා කරන්නේ කාටද කියලා අපි දන්නවා.",
      resp_2t: "උගත් සහ දක්ෂ", resp_2p: "ආසියාවේ ඉහළම සාක්ෂරතා අනුපාතවලින් එකක්. ශ්‍රී ලාංකික ගොඩනඟන්නන්, සත්කාරකයින් සහ වෘත්තිකයන් ගල්ෆ්, කොරියාව, ඉතාලිය සහ ඊශ්‍රායලයේ නිරවද්‍යතාව සහ විශ්වාසනීයත්වය සඳහා ගෞරවයට පාත්‍රයි. ඔබ වෘත්තිකයෝ, ලාභ ශ්‍රමය නොවේ.",
      resp_3t: "ඇදහිල්ල සහ අන් අයට ගෞරවය", resp_3p: "බෞද්ධ, හින්දු, මුස්ලිම් සහ ක්‍රිස්තියානි එක දිවයිනක එකට ජීවත් වෙනවා. සිංහල සහ දෙමළ. ආයුබෝවන් සහ වණක්කම්. ඔබේ ඇදහිල්ලට, ඔබේ ආහාරයට සහ ඔබේ පූජනීය දිනවලට අපි ගෞරව කරනවා.",
      resp_4t: "පවුල පළමුව", resp_4p: "ඔබගෙන් බොහෝ දෙනෙක් මෙහි ඉන්නේ ගෙදර පවුලක් වෙනුවෙන්. හැම මාසයක්ම වැදගත් බවත්, පොරොන්දුවලට වඩා විශ්වාසය වටිනා බවත් අපි තේරුම් ගන්නවා. අපි ඔබ සමඟ කෙළින්ම කටයුතු කරනවා.",
      resp_fest_t: "ඔබේ දවස්, අපේ දින දර්ශනයේ", resp_fest: "වෙසක් සහ පොසොන් පොහොය, අප්‍රේල් සිංහල සහ දෙමළ අලුත් අවුරුද්ද, තෛපොංගල්, දීපවාලි, නත්තල්. ඒවා වටා අපි චාරිකා සහ ප්‍රජා දින සැලසුම් කරනවා, ඔබට පූජනීය දවසක වැඩ කරන්න කියලා අපි කවදාවත් ඉල්ලන්නේ නැහැ."
    },
    ta: {
      brand: "SriLanka Market", nav_home: "முகப்பு", nav_work: "வேலை", nav_shop: "கடை", nav_trips: "பயணங்கள்", nav_services: "உதவி", nav_about: "எங்களைப் பற்றி", nav_register: "பதிவு",
      foot1: "ஒரு இஸ்ரேலிய நிறுவனத்தின் தனியார் முயற்சி. நாங்கள் அரசு நிறுவனமோ பணியாளர் நிறுவனமோ அல்ல.", foot2: "பதிவு இலவசம், விருப்பப்படி. தொழிலாளர்களிடம் ஒருபோதும் பணம் வாங்க மாட்டோம்.", foot_privacy: "தனியுரிமை",
      h_eyebrow: "இஸ்ரேலில் பணிபுரியும் இலங்கையர்களுக்கு", h_title: "வேலை, உணவு, பயணங்கள், உதவி. உங்கள் மொழியில்.", h_lead: "நாங்கள் இஸ்ரேலிய கட்டுமான மற்றும் விநியோக நிறுவனம். சட்ட வழியில் இலங்கைத் தொழிலாளர் குழுவையும், இஸ்ரேலில் உள்ள இலங்கையர்களுக்கான சமூக சேவையையும் உருவாக்குகிறோம்: உணவு மற்றும் பொருட்கள், விடுமுறை நாள் பயணங்கள், பயணம் மற்றும் உதவி.",
      h_work_t: "பெரிய திட்டங்களில் வேலை", h_work_p: "உரிமம் பெற்ற நிறுவனம் மற்றும் பதிவு செய்யப்பட்ட ஒப்பந்ததாரர் வழியாக சட்டப்படியான நியமனம் மட்டும்.", h_shop_t: "இலங்கை உணவு மற்றும் அன்றாடப் பொருட்கள்", h_shop_p: "அருகில் வாரந்தோறும் pickup, அல்லது இஸ்ரேலில் எங்கும் விநியோகம்.", h_trips_t: "விடுமுறை நாளில் பயணங்கள்", h_trips_p: "வழிகாட்டியுடன் ஒழுங்கமைக்கப்பட்ட பேருந்துகள். கடல், ஜெருசலேம், வடக்கு, சாக்கடல்.", h_serv_t: "பயணம் மற்றும் உதவி", h_serv_p: "உரிமம் பெற்ற ஓட்டுநர்கள், படிவங்களுக்கு உதவி, தமிழில் அல்லது சிங்களத்தில் பதிலளிப்பவர்.", more: "மேலும் படிக்க",
      h_trust_t: "நாங்கள் ஒருபோதும் செய்யாதவை", h_trust1: "தொழிலாளரிடம் ஒருபோதும் பணம் வாங்க மாட்டோம். வேலைக்கும், மாற்றத்திற்கும், பதிவுக்கும் இல்லை.", h_trust2: "வேலை, விசா அல்லது சம்பளத்தை ஒருபோதும் உறுதியளிக்க மாட்டோம்.", h_trust3: "உங்கள் பாஸ்போர்ட் அல்லது பணி அனுமதியின் புகைப்படத்தை ஒருபோதும் கேட்க மாட்டோம்.", h_trust4: "உங்கள் விவரங்கள் தொடர்பு கொள்ள மட்டுமே; கேட்டால் நீக்கப்படும்.",
      h_cta: "WhatsApp-இல் பதிவு செய்",
      w_title: "எங்களுடன் வேலை, சட்ட வழியில்", w_lead: "இஸ்ரேலில் வெளிநாட்டுக் கட்டுமானத் தொழிலாளர் உரிமம் பெற்ற பணியாளர் நிறுவனம் வழியாக, பதிவு செய்யப்பட்ட ஒப்பந்ததாரரிடம் மட்டுமே வேலை செய்யலாம். இதை நாங்கள் மீறுவதில்லை. இது எப்படி வேலை செய்கிறது என்பது இதோ.",
      w_s1: "நீங்கள் சட்டப்படியான தொழிலாளராகவே இருக்கிறீர்கள். மாற்றம் அங்கீகரிக்கப்படும் வரை உங்கள் நிறுவனம், அனுமதி, உரிமைகள் மாறாது.", w_s2: "நாங்கள் பணிபுரியும் நிறுவனத்திற்கு மாற்றம் காலாண்டு இறுதியில் (மார்ச், ஜூன், செப்டம்பர், டிசம்பர்) அல்லது உங்கள் தற்போதைய நிறுவனம் எழுத்துப்பூர்வமாக ஒப்புக்கொண்டால் முன்னதாக. உங்கள் மொழியில் ஒப்புதல் படிவத்தில் கையெழுத்திடுவீர்கள்.", w_s3: "நாங்கள் பணிபுரியும் நிறுவனம் உங்கள் முதலாளி ஆகும்: கட்டுமானத் துறை ஊதியம், ஓய்வூதிய வைப்பு, சுகாதாரக் காப்பீடு, தங்குமிடம் — சட்டப்படி.", w_s4: "எங்கள் பதிவு செய்யப்பட்ட ஒப்பந்ததாரரின் தளங்களில் நியமிக்கப்படுவீர்கள். ஈரப் பணிகள்: ஃபார்ம்வொர்க், இரும்பு, பிளாஸ்டர், டைல்ஸ். குடியிருப்பு மற்றும் உள்கட்டமைப்புத் திட்டங்கள்.",
      w_facts_t: "தெரிந்துகொள்ள", w_f1: "வெளிநாட்டுத் தொழிலாளர் இஸ்ரேலில் மொத்தம் 63 மாதங்கள் வரை இருக்கலாம். வந்த தேதியைச் சொல்லுங்கள், உங்களுடன் திட்டமிடுவோம்.", w_f2: "மாற்றத்திற்கு யாரும் பணம் வாங்க முடியாது. வேலைக்காக யாராவது பணம் கேட்டால் விலகிச் செல்லுங்கள்.", w_f3: "உங்கள் தற்போதைய நிறுவனம் காலாண்டு மாற்றத்தை மறுக்க முடியாது, கடைசி சம்பளத்தை நிறுத்தவும் முடியாது.", w_f4: "நேரம் எடுக்கும். தேதிகள் பற்றி உண்மையைச் சொல்வோம். காப்பாற்ற முடியாததை உறுதியளிக்க மாட்டோம்.",
      w_who_t: "யாரைத் தேடுகிறோம்", w_who: "செல்லுபடியாகும் கட்டுமான அல்லது புதுப்பிப்பு அனுமதியுடன், தீவிரமான திட்டங்களில் நிலையான வேலையும் தங்கள் மொழி பேசும் குழுவும் விரும்பும் பிளாஸ்டர், டைல்ஸ், ஃபார்ம்வொர்க், இரும்புத் தொழிலாளர்கள்.",
      s_title: "இலங்கை உணவு மற்றும் அன்றாடப் பொருட்கள்", s_lead: "அரிசி, பருப்பு, மசாலா, தேநீர், தேங்காய்ப் பொருட்கள், பிஸ்கட். கூடுதலாக இஸ்ரேலிய விநியோகஸ்தரிடமிருந்து மொத்த விலையில் டாய்லெட் பேப்பர், சுத்தம் மற்றும் ஒருமுறை பயன்பாட்டுப் பொருட்கள்.",
      s_how_t: "எப்படி வேலை செய்கிறது", s_h1: "WhatsApp-இல் அல்லது ஆப்பில், உங்கள் மொழியில் ஆர்டர் செய்யுங்கள்.", s_h2: "கார்டில் அல்லது pickup-இல் பணமாகச் செலுத்துங்கள்.", s_h3: "உங்கள் தங்குமிடத்திற்கு அருகில் உள்ள pickup point-இல் வாரம் ஒருமுறை பெறுங்கள், அல்லது இஸ்ரேலில் எங்கும் விநியோகம்.", s_soon: "கடை பகுதி வாரியாகத் திறக்கிறது. பதிவு செய்து நீங்கள் வசிக்கும் இடத்தைச் சொல்லுங்கள்; போதுமானவர்கள் இருக்கும்போது pickup point திறக்கிறோம்.",
      t_title: "விடுமுறை நாளில் பயணங்கள்", t_lead: "ஒரே பகுதி குழுக்களுக்கு பேருந்து மற்றும் வழிகாட்டியுடன் ஒழுங்கமைக்கப்பட்ட ஒரு நாள் பயணங்கள். முன்பதிவு செய்து பணம் செலுத்தப்படுகிறது, எனவே நாள் எளிது.",
      t_list_t: "எங்கே", t_l1: "டெல் அவிவ் கடற்கரை மற்றும் யாஃபா பழைய துறைமுகம்", t_l2: "ஜெருசலேம்: பழைய நகரம், தேவாலயங்கள், ஆலிவ் மலை", t_l3: "வடக்கு: கலிலேயா கடல், ஜோர்டான் நதி, ரோஷ் ஹனிக்ரா", t_l4: "சாக்கடல் மற்றும் மசாடா", t_l5: "எய்லாட் (இரண்டு நாட்கள்)", t_l6: "சமூக நாட்கள்: வெசாக், கிறிஸ்துமஸ், சிங்கள மற்றும் தமிழ் புத்தாண்டு",
      t_rules_t: "விதிகள்", t_r1: "உரிமம் பெற்ற பேருந்து ஆபரேட்டர் மற்றும் காப்பீடு செய்யப்பட்ட பேருந்து மட்டும்.", t_r2: "இருக்கைகள் முன்கூட்டியே விற்கப்படும். பேருந்தில் பணம் வசூலிக்கப்படாது.", t_r3: "பதிவு செய்யும்போது உங்கள் விடுமுறை நாளையும் பகுதியையும் சொல்லுங்கள்.",
      v_title: "பயணம் மற்றும் உதவி", v_lead: "வெளிநாட்டில் கடினமான சிறிய விஷயங்கள், உங்கள் மொழியில் எளிதாக.",
      v_1t: "பயணம்", v_1p: "ஒப்புக்கொண்ட விலையில் உரிமம் பெற்ற டாக்ஸி மற்றும் போக்குவரத்து ஓட்டுநர்களுடன். பணத்திற்காக தனியார் கார்கள் ஒருபோதும் இல்லை — இஸ்ரேலில் அது சட்டவிரோதம், உங்களுக்குப் பாதுகாப்பற்றது.", v_2t: "படிவங்கள் மற்றும் கேள்விகள்", v_2p: "கடிதம், சம்பளச் சீட்டு, படிவத்தைப் புரிந்துகொள்ள உதவி. நாங்கள் விளக்குகிறோம்; தேவைப்பட்டால் வழக்கறிஞர் முடிவு செய்கிறார்.", v_3t: "பணம் மற்றும் அஞ்சல்", v_3p: "திட்டமிடப்பட்டது, இன்னும் திறக்கவில்லை. இஸ்ரேலில் இவற்றுக்கு உரிமங்கள் தேவை; உரிமம் உள்ளதை மட்டுமே செய்கிறோம்.", v_4t: "பதிலளிக்கும் நபர்", v_4p: "தமிழில் அல்லது சிங்களத்தில் WhatsApp. ஒரு நாளுக்குள் பதில்.",
      a_title: "எங்களைப் பற்றி", a_p1: "நாங்கள் மத்திய இஸ்ரேலில் உள்ள இஸ்ரேலிய குடும்ப நிறுவனம்: வணிகங்களுக்கு சுத்தம், காகிதம், உணவுப் பொருட்களின் மொத்த விநியோகஸ்தர், மற்றும் ஒப்பந்ததாரராகப் பதிவு செய்யும் கட்டுமான நிறுவனம்.", a_p2: "இந்தச் சேவையின் யோசனை எங்கள் தளத்தில் உள்ள ஒரு இலங்கைத் தொழிலாளரிடமிருந்து வந்தது; அவரது நண்பர்களுக்கு நம்பக்கூடிய வேலை, வீட்டு உணவு, பதிலளிக்கும் ஒருவர் தேவை என்று அவர் கண்டார். அவருடன் சேர்ந்து உருவாக்குகிறோம்.", a_p3: "உரிமம் பெற்ற நிறுவனங்கள் மற்றும் பதிவு செய்யப்பட்ட நிபுணர்களுடன் மட்டுமே பணிபுரிகிறோம். தொழிலாளர்கள் அல்லது கூட்டாளிகளின் பெயர்களை வெளியிடுவதில்லை.",
      a_priv_t: "தனியுரிமை", a_priv: "WhatsApp-இல் நீங்கள் அனுப்புவதை மட்டுமே வைத்திருக்கிறோம்: பெயர், தொலைபேசி, தொழில், அனுமதி வகை, நிறுவனம், வந்த மாதம், பகுதி, ஆர்வங்கள். வேலை மற்றும் சேவைகள் குறித்து உங்களைத் தொடர்பு கொள்ள மட்டுமே. 'delete' என்று எழுதுங்கள், நீக்குகிறோம்.",
      nav_survey: "கணக்கெடுப்பு", sv_title: "2 நிமிடம்: நாங்கள் என்ன கொண்டு வர வேண்டும்?", sv_lead: "இலங்கை உணவு மற்றும் அன்றாடப் பொருட்களுக்கு வாராந்திர pickup இடங்களைத் திறக்கிறோம். உங்களுக்கு என்ன தேவை, நீங்கள் எங்கே இருக்கிறீர்கள் என்று சொல்லுங்கள். நாங்கள் அழைக்க வேண்டுமென்றால் மட்டுமே பெயர் தேவை.",
      sv_city: "நீங்கள் எங்கே வசிக்கிறீர்கள்? (நகரம் / பகுதி)", sv_day: "உங்கள் விடுமுறை நாள்", sv_buy: "இப்போது இலங்கை உணவை எங்கே வாங்குகிறீர்கள்? (கடை, நகரம், WhatsApp குழு)", sv_spend: "மாதத்திற்கு உணவுக்கு எவ்வளவு செலவு (ஒருவருக்கு)?",
      sv_products: "ஒவ்வொரு வாரமும் வாங்குவதைத் தேர்ந்தெடுங்கள்", sv_missing: "இஸ்ரேலில் கிடைக்காதது அல்லது விலை அதிகமானது எது? (சுதந்திரமாக எழுதுங்கள்)", sv_pay: "எப்படிப் பணம் செலுத்த விரும்புகிறீர்கள்?", sv_host: "நான் வசிக்கும் இடத்தில் pickup இடத்திற்கான தொடர்பு நபராக இருக்க முடியும் (வாரத்திற்கு ஒரு நாள் சேமிப்பு இடம்).",
      sv_name: "பெயர் (விருப்பத்திற்கு)", sv_phone: "தொலைபேசி (நாங்கள் அழைக்க வேண்டுமென்றால் மட்டும்)", sv_note: "வேறு ஏதாவது", sv_consent: "தொலைபேசி எண் கொடுத்திருந்தால்: கடை பற்றி என்னைத் தொடர்பு கொள்ள சம்மதிக்கிறேன். விவரங்கள் அதற்காக மட்டுமே, கேட்டால் நீக்கப்படும்.",
      sv_btn: "அனுப்பு", sv_sending: "அனுப்புகிறது…", sv_ok_t: "நன்றி! 🙏", sv_ok: "உங்கள் பதில்கள் எங்களை அடைந்தன. போதுமான மக்கள் இருக்கும்போது உங்கள் பகுதியில் pickup இடத்தைத் திறப்போம். தொலைபேசி கொடுத்திருந்தால் உங்கள் மொழியில் எழுதுவோம்.",
      sv_err: "அனுப்ப முடியவில்லை. இணைப்பைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும், அல்லது WhatsApp-இல் அனுப்பவும்.", sv_err_consent: "தொலைபேசி எண் எழுதியுள்ளீர்கள் – சம்மதப் பெட்டியைத் தேர்ந்தெடுக்கவும், அல்லது எண்ணை நீக்கவும்.", sv_wa: "அதற்குப் பதிலாக WhatsApp-இல் அனுப்பு",
      d_sat: "சனிக்கிழமை", d_sun: "ஞாயிறு", d_fri: "வெள்ளி", d_other: "வேறு நாள் / மாறும்", d_none: "நிலையான நாள் இல்லை",
      sp_lt300: "₪300க்கும் குறைவு", sp_300_600: "₪300–600", sp_600_1000: "₪600–1,000", sp_gt1000: "₪1,000க்கும் மேல்",
      pay_cash: "எடுக்கும்போது ரொக்கம்", pay_card: "அட்டை", pay_link: "முன்கூட்டியே payment link", pay_any: "எதுவும்",
      pr_rice_samba: "சம்பா அரிசி", pr_rice_nadu: "நாடு / சிவப்பு அரிசி", pr_rice_basmati: "பாஸ்மதி அரிசி", pr_dhal_red: "சிவப்பு பருப்பு", pr_flour_atta: "ஆட்டா மாவு", pr_flour_white: "வெள்ளை மாவு", pr_sugar: "சர்க்கரை",
      pr_coconut_milk: "தேங்காய்ப் பால்", pr_oil_coconut: "தேங்காய் எண்ணெய்", pr_oil_cooking: "சமையல் எண்ணெய்", pr_curry_powder: "கறித்தூள் (வறுத்தது)", pr_chili: "மிளகாய்த் தூள் / செதில்", pr_turmeric: "மஞ்சள்", pr_spices_whole: "முழு மசாலா (ஏலக்காய், கறுவா, கிராம்பு)",
      pr_maldive_fish: "மாசிக்கருவாடு (Maldive fish)", pr_tea_ceylon: "இலங்கைத் தேயிலை", pr_noodles: "உடனடி நூடுல்ஸ்", pr_sardines: "டின் சார்டின் / மக்கரல்", pr_tuna: "டின் டூனா", pr_milk_powder: "பால் பவுடர்", pr_biscuits: "பிஸ்கட் / சிற்றுண்டி", pr_jaggery: "வெல்லம்", pr_papadam: "பப்படம்",
      pr_toilet_paper: "டாய்லெட் பேப்பர்", pr_paper_towel: "பேப்பர் டவல்", pr_dish_soap: "பாத்திரம் கழுவும் திரவம்", pr_laundry: "சலவைத் தூள்", pr_trash_bags: "குப்பைப் பைகள்", pr_disposables: "தட்டுகள், கோப்பைகள், கரண்டிகள்", pr_food_boxes: "உணவுப் பெட்டிகள்", pr_soap: "சோப்பு / ஷாம்பு",
      s_points_t: "பெறும் இடங்கள்", s_items_t: "எங்கள் சில பொருட்கள்", s_order: "இப்போது ஆர்டர் செய்", s_next: "அடுத்த பெறுதல்: ", s_survey_cta: "என்ன கொண்டு வர வேண்டும் என்று சொல்லுங்கள் (2 நிமி)",
      r_title: "பதிவு செய்", r_lead: "படிவத்தை நிரப்புங்கள். பச்சை பொத்தான் உங்கள் செய்தி தயாராக WhatsApp-ஐத் திறக்கும். அனுப்புங்கள்; சில நாட்களுக்குள் உங்கள் மொழியில் திரும்ப அழைப்போம்.",
      r_name: "முழுப் பெயர்", r_phone: "தொலைபேசி (இஸ்ரேல்)", r_trade: "தொழில்", r_permit: "அனுமதி வகை", r_corp: "தற்போதைய நிறுவனம் (பெயர்)", r_arrived: "இஸ்ரேலுக்கு வந்தது", r_region: "வேலை செய்ய விரும்பும் இடம்", r_interests: "எனக்கு ஆர்வம்", r_note: "வேறு ஏதேனும்",
      r_consent: "வேலை மற்றும் சேவைகள் குறித்து என்னைத் தொடர்பு கொள்ள ஒப்புக்கொள்கிறேன். என் விவரங்கள் அதற்காக மட்டுமே; கேட்டால் நீக்கப்படும்.", r_btn: "WhatsApp-இல் அனுப்பு", r_err_name: "உங்கள் முழுப் பெயரை எழுதுங்கள்.", r_err_consent: "ஒப்புதல் பெட்டியைத் தேர்வு செய்யுங்கள்.",
      r_msg_head: "வணக்கம், நான் பதிவு செய்ய விரும்புகிறேன்.", r_m_name: "பெயர்", r_m_phone: "தொலைபேசி", r_m_trade: "தொழில்", r_m_permit: "அனுமதி", r_m_corp: "நிறுவனம்", r_m_arrived: "வந்தது", r_m_region: "பகுதி", r_m_int: "ஆர்வம்", r_m_note: "குறிப்பு", r_m_consent: "வேலை மற்றும் சேவைகள் குறித்து தொடர்பு கொள்ள ஒப்புக்கொள்கிறேன்.",
      o_none: "—", t_formwork: "ஃபார்ம்வொர்க்", t_rebar: "இரும்பு", t_plaster: "பிளாஸ்டர்", t_tiling: "டைல்ஸ் / தரை", t_gypsum: "ஜிப்சம்", t_waterproof: "நீர்ப்புகாமை", t_plumbing: "குழாய்", t_painting: "பெயிண்டிங்", t_general: "பொது",
      p_construction: "கட்டுமானம் (B/1)", p_renovation: "புதுப்பிப்பு", p_other: "மற்றவை / தெரியவில்லை",
      g_center: "மையம் (டெல் அவிவ்)", g_sharon: "ஷரோன் / நெதன்யா", g_jerusalem: "ஜெருசலேம்", g_north: "வடக்கு / ஹைஃபா", g_south: "தெற்கு / பீர்ஷெவா", g_any: "எங்கும்",
      i_work: "வேலை", i_shop: "கடை", i_trips: "பயணங்கள்", i_transport: "பயணம்", i_help: "உதவி",
      resp_t: "இலங்கை மக்கள் மீது எங்கள் மரியாதை",
      resp_1t: "பழமையான நாகரிகம்", resp_1p: "2,500 ஆண்டுகளுக்கும் மேலான பதிவு செய்யப்பட்ட வரலாறு. அனுராதபுரம், சிகிரியா, கண்டி உலகப் பாரம்பரியம். உலகின் பெரும்பகுதியில் இல்லாத காலத்தில் இலங்கை நீர்த்தேக்கங்களைக் கட்டியது. யாரிடம் பேசுகிறோம் என்பது எங்களுக்குத் தெரியும்.",
      resp_2t: "கல்வியும் திறமையும்", resp_2p: "ஆசியாவின் மிக உயர்ந்த கல்வியறிவு விகிதங்களில் ஒன்று. இலங்கைக் கட்டுநர்கள், பராமரிப்பாளர்கள், தொழில் வல்லுநர்கள் வளைகுடா, கொரியா, இத்தாலி, இஸ்ரேலில் துல்லியம் மற்றும் நம்பகத்தன்மைக்காக மதிக்கப்படுகிறார்கள். நீங்கள் நிபுணர்கள், மலிவான கைகள் அல்ல.",
      resp_3t: "நம்பிக்கையும் பிறருக்கு மரியாதையும்", resp_3p: "பௌத்தர்கள், இந்துக்கள், முஸ்லிம்கள், கிறிஸ்தவர்கள் ஒரே தீவில் அருகருகே வாழ்கிறார்கள். சிங்களமும் தமிழும். ஆயுபோவன், வணக்கம். உங்கள் நம்பிக்கை, உணவு, புனித நாட்களை மதிப்போம்.",
      resp_4t: "குடும்பம் முதலில்", resp_4p: "உங்களில் பெரும்பாலோர் ஊரில் உள்ள குடும்பத்திற்காக இங்கே இருக்கிறீர்கள். ஒவ்வொரு மாதமும் முக்கியம் என்றும், வாக்குறுதிகளை விட நம்பிக்கை மதிப்புமிக்கது என்றும் புரிந்துகொள்கிறோம். உங்களுடன் நேர்மையாக நடந்துகொள்வோம்.",
      resp_fest_t: "உங்கள் நாட்கள், எங்கள் நாட்காட்டியில்", resp_fest: "வெசாக் மற்றும் பொசொன் பௌர்ணமி, ஏப்ரல் சிங்கள தமிழ் புத்தாண்டு, தைப்பொங்கல், தீபாவளி, கிறிஸ்துமஸ். அவற்றைச் சுற்றி பயணங்களையும் சமூக நாட்களையும் திட்டமிடுகிறோம்; நீங்கள் புனிதமாகக் கருதும் நாளில் வேலை செய்யக் கேட்க மாட்டோம்."
    },
    he: {
      brand: "SriLanka Market", nav_home: "ראשי", nav_work: "עבודה", nav_shop: "חנות", nav_trips: "טיולים", nav_services: "עזרה", nav_about: "עלינו", nav_register: "הרשמה",
      foot1: "יוזמה פרטית של עסק ישראלי. אנחנו לא גוף ממשלתי ולא תאגיד כוח אדם.", foot2: "הרישום חינם ומרצון. לעולם לא לוקחים כסף מפועלים.", foot_privacy: "פרטיות",
      h_eyebrow: "לסרילנקים שעובדים בישראל", h_title: "עבודה, אוכל, טיולים ועזרה. בשפה שלך.", h_lead: "אנחנו עסק ישראלי לבנייה ולהפצה. אנחנו בונים צוות עבודה סרילנקי במסלול החוקי, ושירות קהילתי לסרילנקים בישראל: אוכל ומוצרים, טיולים ביום החופשי, הסעות ועזרה.",
      h_work_t: "עבודה בפרויקטים גדולים", h_work_p: "הצבה חוקית בלבד, דרך תאגיד מורשה וקבלן רשום.", h_shop_t: "אוכל סרילנקי ומוצרי יום-יום", h_shop_p: "איסוף שבועי קרוב אליך, או משלוח לכל הארץ.", h_trips_t: "טיולים ביום החופשי", h_trips_p: "אוטובוסים מאורגנים עם מדריך. ים, ירושלים, הצפון, ים המלח.", h_serv_t: "הסעות ועזרה", h_serv_p: "נהגים מורשים, עזרה בטפסים, מישהו שעונה בסינהלית או בטמילית.", more: "לקריאה",
      h_trust_t: "מה אנחנו לעולם לא עושים", h_trust1: "לא לוקחים כסף מפועל. לא על עבודה, לא על מעבר, לא על רישום.", h_trust2: "לא מבטיחים עבודה, אשרה או שכר.", h_trust3: "לא מבקשים דרכון או צילום של אישור העבודה.", h_trust4: "הפרטים משמשים רק ליצירת קשר, ונמחקים לפי בקשה.",
      h_cta: "הרשמה בוואטסאפ",
      w_title: "עבודה איתנו, בדרך החוקית", w_lead: "בישראל פועל בניין זר רשאי לעבוד רק דרך תאגיד כוח אדם מורשה, בהצבה אצל קבלן רשום. אנחנו לא מכופפים את זה. כך זה עובד בדיוק.",
      w_s1: "אתה נשאר פועל חוקי. התאגיד, ההיתר והזכויות שלך לא משתנים עד שמעבר מאושר.", w_s2: "מעבר לתאגיד שאיתו אנחנו עובדים נעשה בסוף רבעון (מרץ, יוני, ספטמבר, דצמבר), או מוקדם יותר אם התאגיד הנוכחי מסכים בכתב. אתה חותם על טופס הסכמה בשפה שלך.", w_s3: "התאגיד שאיתו אנחנו עובדים הופך למעסיק שלך: שכר לפי ענף הבניין, פיקדון פנסיוני, ביטוח בריאות, מגורים, כפי שהחוק מחייב.", w_s4: "אתה מוצב באתרים של הקבלן הרשום שלנו. עבודות רטובות: טפסנות, ברזלנות, טיח, ריצוף. פרויקטי מגורים ותשתיות.",
      w_facts_t: "טוב לדעת", w_f1: "פועל זר רשאי לשהות בישראל עד 63 חודשים בסך הכל. תגיד לנו מתי הגעת ונתכנן איתך.", w_f2: "אסור לאף אחד לקחת תשלום על מעבר. אם מישהו מבקש ממך כסף על עבודה, תתרחק.", w_f3: "התאגיד הנוכחי לא יכול לסרב למעבר רבעוני ולא לעכב את השכר האחרון.", w_f4: "זה לוקח זמן. נגיד לך את האמת על תאריכים. לא נבטיח מה שלא נוכל לקיים.",
      w_who_t: "את מי אנחנו מחפשים", w_who: "טייחים, רצפים, טפסנים וברזלנים עם היתר בניין או שיפוצים בתוקף, שרוצים עבודה קבועה בפרויקטים רציניים וצוות שמדבר את השפה שלהם.",
      s_title: "אוכל סרילנקי ומוצרי יום-יום", s_lead: "אורז, דאל, תבלינים, תה, מוצרי קוקוס, ביסקוויטים. וגם נייר טואלט, ניקיון וחד-פעמי במחירים סיטונאיים ממפיץ ישראלי.",
      s_how_t: "איך זה עובד", s_h1: "מזמינים בוואטסאפ או באפליקציה, בשפה שלך.", s_h2: "משלמים בכרטיס או במזומן באיסוף.", s_h3: "אוספים פעם בשבוע בנקודת האיסוף ליד המגורים, או מקבלים משלוח לכל הארץ.", s_soon: "החנות נפתחת אזור אחרי אזור. תירשם ותגיד איפה אתה גר, ונפתח נקודת איסוף כשיש מספיק אנשים.",
      t_title: "טיולים ביום החופשי", t_lead: "טיולי יום מאורגנים עם אוטובוס ומדריך, לקבוצות מאותו אזור. בהזמנה ובתשלום מראש, כדי שהיום יהיה פשוט.",
      t_list_t: "לאן", t_l1: "חוף תל אביב ונמל יפו", t_l2: "ירושלים: העיר העתיקה, כנסיות, הר הזיתים", t_l3: "הצפון: הכנרת, הירדן, ראש הנקרה", t_l4: "ים המלח ומצדה", t_l5: "אילת (יומיים)", t_l6: "ימי קהילה: וסאק, חג המולד, ראש השנה הסינהלי והטמילי",
      t_rules_t: "כללים", t_r1: "רק מפעיל הסעות מורשה ואוטובוס מבוטח.", t_r2: "המושבים נמכרים מראש. לא גובים מזומן באוטובוס.", t_r3: "תגיד לנו את יום החופש והאזור שלך בהרשמה.",
      v_title: "הסעות ועזרה", v_lead: "הדברים הקטנים שקשים במדינה זרה, פשוטים בשפה שלך.",
      v_1t: "הסעות", v_1p: "נסיעות עם נהגי מונית ומסיעים מורשים במחיר מוסכם. לעולם לא רכב פרטי בתשלום; זה לא חוקי בישראל ולא בטוח לך.", v_2t: "טפסים ושאלות", v_2p: "עזרה להבין מכתב, תלוש, טופס. אנחנו מסבירים; עורך דין מחליט כשצריך.", v_3t: "כסף ודואר", v_3p: "מתוכנן, עדיין לא פתוח. אלה דורשים רישיונות בישראל ואנחנו עושים רק מה שמורשה.", v_4t: "מישהו שעונה", v_4p: "וואטסאפ בסינהלית או בטמילית. עונים תוך יום.",
      a_title: "עלינו", a_p1: "אנחנו עסק משפחתי ישראלי ממרכז הארץ: מפיץ סיטונאי של מוצרי ניקיון, נייר ומזון לעסקים, ועסק בנייה שנרשם כקבלן.", a_p2: "הרעיון לשירות הזה הגיע מפועל סרילנקי באחד האתרים שלנו, שראה שהחברים שלו צריכים עבודה שאפשר לסמוך עליה, אוכל מהבית, ומישהו שעונה. אנחנו בונים את זה איתו.", a_p3: "אנחנו עובדים רק עם תאגידים מורשים ואנשי מקצוע רשומים. אנחנו לא מפרסמים שמות של פועלים או שותפים.",
      a_priv_t: "פרטיות", a_priv: "אנחנו שומרים רק מה ששלחת בוואטסאפ: שם, טלפון, מקצוע, סוג היתר, תאגיד, חודש הגעה, אזור, תחומי עניין. זה משמש ליצירת קשר בעניין עבודה ושירותים. תכתוב 'delete' ונמחק.",
      nav_survey: "סקר", sv_title: "2 דקות: מה להביא לכם?", sv_lead: "אנחנו פותחים נקודות איסוף שבועיות למזון סרילנקי ומוצרים יומיומיים. ספרו לנו מה אתם צריכים ואיפה אתם. לא צריך שם, אלא אם אתם רוצים שנתקשר.",
      sv_city: "איפה אתם גרים? (עיר / אזור)", sv_day: "היום החופשי שלכם", sv_buy: "איפה אתם קונים היום מזון סרילנקי? (חנות, עיר, קבוצת וואטסאפ)", sv_spend: "כמה אתם מוציאים על אוכל בחודש (לאדם)?",
      sv_products: "סמנו מה הייתם קונים כל שבוע", sv_missing: "מה חסר או יקר מדי בישראל? (כתבו חופשי)", sv_pay: "איך נוח לכם לשלם?", sv_host: "אני יכול להיות איש הקשר לנקודת איסוף במקום מגוריי (מקום אחסון ליום אחד בשבוע).",
      sv_name: "שם (לא חובה)", sv_phone: "טלפון (לא חובה, אם תרצו שנתקשר)", sv_note: "עוד משהו", sv_consent: "אם נתתי טלפון: אני מסכים שתיצרו איתי קשר בעניין החנות. הפרטים נשמרים לכך בלבד ונמחקים לפי בקשה.",
      sv_btn: "שליחה", sv_sending: "שולח…", sv_ok_t: "תודה! 🙏", sv_ok: "התשובות הגיעו אלינו. נפתח נקודת איסוף באזור שלכם כשיהיו מספיק אנשים. אם השארתם טלפון, נכתוב לכם בשפה שלכם.",
      sv_err: "לא הצלחנו לשלוח. בדקו חיבור ונסו שוב, או שלחו בוואטסאפ.", sv_err_consent: "כתבתם טלפון — סמנו את תיבת ההסכמה, או מחקו את הטלפון.", sv_wa: "לשלוח בוואטסאפ במקום",
      d_sat: "שבת", d_sun: "ראשון", d_fri: "שישי", d_other: "יום אחר / משתנה", d_none: "אין יום קבוע",
      sp_lt300: "פחות מ-300 ₪", sp_300_600: "300–600 ₪", sp_600_1000: "600–1,000 ₪", sp_gt1000: "יותר מ-1,000 ₪",
      pay_cash: "מזומן באיסוף", pay_card: "כרטיס", pay_link: "לינק תשלום מראש", pay_any: "לא משנה",
      pr_rice_samba: "אורז סמבה", pr_rice_nadu: "אורז נאדו / אדום", pr_rice_basmati: "אורז בסמטי", pr_dhal_red: "עדשים אדומות (דאל)", pr_flour_atta: "קמח אטה", pr_flour_white: "קמח לבן", pr_sugar: "סוכר",
      pr_coconut_milk: "חלב קוקוס", pr_oil_coconut: "שמן קוקוס", pr_oil_cooking: "שמן בישול", pr_curry_powder: "אבקת קארי (קלויה)", pr_chili: "צ'ילי טחון / פתיתים", pr_turmeric: "כורכום", pr_spices_whole: "תבלינים שלמים (הל, קינמון, ציפורן)",
      pr_maldive_fish: "Maldive fish (דג מיובש)", pr_tea_ceylon: "תה ציילון", pr_noodles: "נודלס מהיר", pr_sardines: "סרדינים / מקרל בקופסה", pr_tuna: "טונה בקופסה", pr_milk_powder: "אבקת חלב", pr_biscuits: "ביסקוויטים / חטיפים", pr_jaggery: "ג'אגרי", pr_papadam: "פפדם",
      pr_toilet_paper: "נייר טואלט", pr_paper_towel: "מגבות נייר", pr_dish_soap: "סבון כלים", pr_laundry: "אבקת כביסה", pr_trash_bags: "שקיות אשפה", pr_disposables: "צלחות, כוסות, סכו\"ם", pr_food_boxes: "קופסאות אוכל", pr_soap: "סבון / שמפו",
      s_points_t: "נקודות איסוף", s_items_t: "חלק מהמוצרים שלנו", s_order: "להזמנה עכשיו", s_next: "האיסוף הבא: ", s_survey_cta: "ספרו לנו מה להביא (2 דקות)",
      r_title: "הרשמה", r_lead: "ממלאים את הטופס. הכפתור הירוק פותח וואטסאפ עם ההודעה מוכנה. שולחים, ואנחנו חוזרים תוך כמה ימים בשפה שלך.",
      r_name: "שם מלא", r_phone: "טלפון (ישראל)", r_trade: "מקצוע", r_permit: "סוג היתר", r_corp: "התאגיד הנוכחי (שם החברה)", r_arrived: "הגעתי לישראל", r_region: "איפה אני רוצה לעבוד", r_interests: "מתעניין ב", r_note: "עוד משהו",
      r_consent: "אני מסכים שתיצרו איתי קשר בעניין עבודה ושירותים. הפרטים נשמרים רק לזה ונמחקים לפי בקשה.", r_btn: "שליחה בוואטסאפ", r_err_name: "נא לכתוב שם מלא.", r_err_consent: "נא לסמן את תיבת ההסכמה.",
      r_msg_head: "שלום, אני רוצה להירשם.", r_m_name: "שם", r_m_phone: "טלפון", r_m_trade: "מקצוע", r_m_permit: "היתר", r_m_corp: "תאגיד", r_m_arrived: "הגעתי", r_m_region: "אזור", r_m_int: "מתעניין ב", r_m_note: "הערה", r_m_consent: "אני מסכים שתיצרו איתי קשר בעניין עבודה ושירותים.",
      o_none: "—", t_formwork: "טפסנות", t_rebar: "ברזלנות", t_plaster: "טיח", t_tiling: "ריצוף", t_gypsum: "גבס", t_waterproof: "איטום", t_plumbing: "אינסטלציה", t_painting: "צבע", t_general: "כללי",
      p_construction: "בניין (ב/1)", p_renovation: "שיפוצים", p_other: "אחר / לא בטוח",
      g_center: "מרכז (תל אביב)", g_sharon: "שרון / נתניה", g_jerusalem: "ירושלים", g_north: "צפון / חיפה", g_south: "דרום / באר שבע", g_any: "בכל מקום",
      i_work: "עבודה", i_shop: "חנות", i_trips: "טיולים", i_transport: "הסעות", i_help: "עזרה",
      resp_t: "הכבוד שלנו לעם הסרילנקי",
      resp_1t: "ציוויליזציה עתיקה", resp_1p: "יותר מ-2,500 שנות היסטוריה כתובה. אנורדפורה, סיגיריה וקנדי הן אתרי מורשת עולמית. סרי לנקה בנתה מאגרי השקיה כשברוב העולם לא היו. אנחנו יודעים עם מי אנחנו מדברים.",
      resp_2t: "משכילים ומיומנים", resp_2p: "משיעורי האוריינות הגבוהים באסיה. בנאים, מטפלים ובעלי מקצוע סרילנקים זוכים להערכה במפרץ, בקוריאה, באיטליה ובישראל על דיוק ואמינות. אתם אנשי מקצוע, לא ידיים זולות.",
      resp_3t: "אמונה וכבוד לזולת", resp_3p: "בודהיסטים, הינדים, מוסלמים ונוצרים חיים זה לצד זה על אי אחד. סינהלית וטמילית. איובובאן ווונאקאם. נכבד את האמונה שלך, את האוכל שלך ואת הימים הקדושים לך.",
      resp_4t: "המשפחה קודמת", resp_4p: "רובכם כאן בשביל משפחה בבית. אנחנו מבינים שכל חודש חשוב, ושאמון שווה יותר מהבטחות. נתנהל איתך ישר.",
      resp_fest_t: "הימים שלך, בלוח השנה שלנו", resp_fest: "ירח מלא של וסאק ופוסון, ראש השנה הסינהלי והטמילי באפריל, תאי פונגל, דיוואלי, חג המולד. אנחנו מתכננים סביבם טיולים וימי קהילה, ולעולם לא נבקש ממך לעבוד ביום שקדוש לך."
    }
  };
  var TRADES = ["formwork", "rebar", "plaster", "tiling", "gypsum", "waterproof", "plumbing", "painting", "general"];
  var PERMITS = ["construction", "renovation", "other"];
  var REGIONS = ["center", "sharon", "jerusalem", "north", "south", "any"];
  var INTERESTS = ["work", "shop", "trips", "transport", "help"];

  var params = new URLSearchParams(location.search);
  var to = params.get("to") || "";
  try { if (to && /^\d{9,15}$/.test(to)) sessionStorage.setItem("sm-to", to); else to = sessionStorage.getItem("sm-to") || ""; } catch (e) {}
  if (!/^\d{9,15}$/.test(to)) to = DEFAULT_TO;

  var lang = params.get("lang") || "";
  try { if (!lang) lang = localStorage.getItem("sm-lang") || ""; } catch (e) {}
  if (!T[lang]) lang = "si";
  function t(k) { return (T[lang] && T[lang][k]) || T.en[k] || k; }
  function $(id) { return document.getElementById(id); }

  function fill(sel, keys, prefix) { if (!sel) return; var cur = sel.value; sel.textContent = ""; var o0 = document.createElement("option"); o0.value = ""; o0.textContent = t("o_none"); sel.appendChild(o0); keys.forEach(function (k) { var o = document.createElement("option"); o.value = k; o.textContent = t(prefix + k); sel.appendChild(o); }); sel.value = cur; }
  function fillChecks(c) { if (!c) return; var checked = {}; c.querySelectorAll("input").forEach(function (i) { checked[i.value] = i.checked; }); c.textContent = ""; INTERESTS.forEach(function (k) { var l = document.createElement("label"); var i = document.createElement("input"); i.type = "checkbox"; i.value = k; i.id = "int-" + k; i.checked = !!checked[k]; l.appendChild(i); var s = document.createElement("span"); s.textContent = t("i_" + k); l.appendChild(s); c.appendChild(l); }); }

  function fillProducts(c) { if (!c) return; var checked = {}; c.querySelectorAll("input").forEach(function (i) { checked[i.value] = i.checked; }); c.textContent = ""; PRODUCTS.forEach(function (k) { var l = document.createElement("label"); var i = document.createElement("input"); i.type = "checkbox"; i.value = k; i.id = "pr-" + k; i.checked = !!checked[k]; l.appendChild(i); var s = document.createElement("span"); s.textContent = t("pr_" + k); l.appendChild(s); c.appendChild(l); }); }

  function apply() {
    document.documentElement.setAttribute("dir", lang === "he" ? "rtl" : "ltr"); document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(function (e) { e.textContent = t(e.getAttribute("data-i18n")); });
    document.querySelectorAll(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang)); });
    // keep ?to= on internal links
    document.querySelectorAll("a[data-internal]").forEach(function (a) { var href = a.getAttribute("data-internal"); a.href = href + (to !== DEFAULT_TO ? "?to=" + to : ""); });
    document.querySelectorAll("a[data-wa]").forEach(function (a) { a.href = "https://wa.me/" + to; });
    document.querySelectorAll("[data-num]").forEach(function (e) { e.textContent = "WhatsApp: +" + to; });
    fill($("r-trade"), TRADES, "t_"); fill($("r-permit"), PERMITS, "p_"); fill($("r-region"), REGIONS, "g_"); fillChecks($("r-interests"));
    fill($("sv-day"), DAYS, "d_"); fill($("sv-spend"), SPENDS, "sp_"); fill($("sv-pay"), PAYS, "pay_"); fillProducts($("sv-products"));
  }
  document.querySelectorAll(".lang button").forEach(function (b) { b.addEventListener("click", function () { lang = b.getAttribute("data-lang"); try { localStorage.setItem("sm-lang", lang); } catch (e) {} apply(); }); });

  // registration form → WhatsApp
  var form = $("reg");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault(); var err = $("r-err"); err.textContent = "";
      var name = $("r-name").value.trim(); if (name.split(/\s+/).length < 2 || name.length < 4) { err.textContent = t("r_err_name"); $("r-name").focus(); return; }
      if (!$("r-consent").checked) { err.textContent = t("r_err_consent"); return; }
      var ints = []; form.querySelectorAll("#r-interests input:checked").forEach(function (i) { ints.push(t("i_" + i.value)); });
      var lines = [t("r_msg_head"), t("r_m_name") + ": " + name, t("r_m_phone") + ": " + $("r-phone").value.trim(),
        t("r_m_trade") + ": " + ($("r-trade").value ? t("t_" + $("r-trade").value) : "-"), t("r_m_permit") + ": " + ($("r-permit").value ? t("p_" + $("r-permit").value) : "-"),
        t("r_m_corp") + ": " + ($("r-corp").value.trim() || "-"), t("r_m_arrived") + ": " + ($("r-arrived").value || "-"), t("r_m_region") + ": " + ($("r-region").value ? t("g_" + $("r-region").value) : "-"),
        t("r_m_int") + ": " + (ints.join(", ") || "-")];
      var note = $("r-note").value.trim(); if (note) lines.push(t("r_m_note") + ": " + note);
      lines.push(t("r_m_consent"));
      var url = "https://wa.me/" + to + "?text=" + encodeURIComponent(lines.join("\n"));
      var a = document.createElement("a"); a.href = url; a.target = "_blank"; a.rel = "noopener"; document.body.appendChild(a); a.click(); a.remove();
    });
  }
  // community survey → CRM (stored), WhatsApp as fallback
  var sv = $("survey");
  if (sv) {
    var busy = false;
    sv.addEventListener("submit", function (ev) {
      ev.preventDefault(); if (busy) return;
      var err = $("sv-err"); err.textContent = "";
      var phone = $("sv-phone").value.trim();
      if (phone && !$("sv-consent").checked) { err.textContent = t("sv_err_consent"); return; }
      var products = []; sv.querySelectorAll("#sv-products input:checked").forEach(function (i) { products.push(i.value); });
      var payload = { lang: lang, city: $("sv-city").value.trim(), dayOff: $("sv-day").value, buysWhere: $("sv-buy").value.trim(), monthlySpend: $("sv-spend").value,
        products: products, missing: $("sv-missing").value.trim(), payPref: $("sv-pay").value, pointHost: $("sv-host").checked,
        name: $("sv-name").value.trim(), phone: phone, note: $("sv-note").value.trim(), consent: $("sv-consent").checked, website: $("sv-website").value, source: "brochure", to: to };
      var btn = sv.querySelector("button[type=submit]"); busy = true; btn.disabled = true; btn.textContent = t("sv_sending");
      fetch(SURVEY_API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
        .then(function (r) { if (!r.ok) throw new Error("http " + r.status); return r.json(); })
        .then(function () { sv.hidden = true; var ok = $("sv-ok"); ok.hidden = false; ok.scrollIntoView(); try { localStorage.setItem("sm-survey-done", "1"); } catch (e) {} })
        .catch(function () {
          err.textContent = t("sv_err");
          var lines = [t("sv_title"), t("sv_city") + ": " + (payload.city || "-"), t("sv_day") + ": " + (payload.dayOff ? t("d_" + payload.dayOff) : "-"), t("sv_buy") + ": " + (payload.buysWhere || "-"),
            t("sv_spend") + ": " + (payload.monthlySpend ? t("sp_" + payload.monthlySpend) : "-"), t("sv_products") + ": " + (products.map(function (k) { return t("pr_" + k); }).join(", ") || "-"),
            t("sv_missing") + ": " + (payload.missing || "-"), t("sv_pay") + ": " + (payload.payPref ? t("pay_" + payload.payPref) : "-")];
          if (payload.pointHost) lines.push(t("sv_host"));
          if (payload.name) lines.push(t("sv_name") + ": " + payload.name); if (phone) lines.push(t("sv_phone") + ": " + phone); if (payload.note) lines.push(t("sv_note") + ": " + payload.note);
          var wa = $("sv-wa"); wa.hidden = false; wa.href = "https://wa.me/" + to + "?text=" + encodeURIComponent(lines.join("\n"));
        })
        .then(function () { busy = false; btn.disabled = false; btn.textContent = t("sv_btn"); });
    });
  }
  // live shop showcase (shop.html): points + products from the CRM; hidden until the shop is open
  function loadShowcase() {
    var box = $("live"); if (!box) return;
    fetch(SHOP_API + "?lang=" + lang).then(function (r) { if (!r.ok) throw new Error(); return r.json(); }).then(function (d) {
      if (!d || !d.shop || !d.shop.active || !d.points || !d.points.length) { box.hidden = true; return; }
      var pts = $("live-points"); pts.textContent = "";
      d.points.forEach(function (p) {
        var c = document.createElement("div"); c.className = "card";
        var b = document.createElement("b"); b.textContent = p.name + (p.area ? " · " + p.area : ""); c.appendChild(b);
        if (p.address) { var a = document.createElement("p"); a.textContent = p.address; c.appendChild(a); }
        if (p.nextDrop) { var n = document.createElement("p"); n.textContent = t("s_next") + new Date(p.nextDrop).toLocaleDateString(lang === "he" ? "he-IL" : "en-GB", { weekday: "long", day: "2-digit", month: "2-digit", timeZone: "Asia/Jerusalem" }); c.appendChild(n); }
        var o = document.createElement("a"); o.className = "more"; o.href = p.orderUrl; o.textContent = t("s_order"); c.appendChild(o);
        pts.appendChild(c);
      });
      var it = $("live-items"); it.textContent = "";
      (d.items || []).slice(0, 12).forEach(function (i) {
        var c = document.createElement("div"); c.className = "card";
        if (i.imageUrl) { var im = document.createElement("img"); im.src = i.imageUrl; im.alt = ""; im.loading = "lazy"; im.style.cssText = "width:100%;aspect-ratio:1;object-fit:contain"; c.appendChild(im); }
        var nm = document.createElement("b"); nm.textContent = i.name; c.appendChild(nm);
        var pr = document.createElement("p"); pr.textContent = i.priceNis.toFixed(2) + " ₪"; c.appendChild(pr);
        it.appendChild(c);
      });
      $("live-order").href = d.orderUrl;
      box.hidden = false; var soon = $("live-soon"); if (soon) soon.hidden = true;
    }).catch(function () { box.hidden = true; });
  }
  apply();
  loadShowcase();
  document.querySelectorAll(".lang button").forEach(function (b) { b.addEventListener("click", loadShowcase); });
})();
