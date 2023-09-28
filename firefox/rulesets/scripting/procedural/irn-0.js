/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: irn-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"section#left-side > aside > h4\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\"aside\"]]}"],["{\"selector\":\".block > header > h2\",\"tasks\":[[\"has-text\",\"/وبگردی|نیازمندی|رپرتاژ/\"],[\"upward\",\".block\"]]}","{\"selector\":\".carousel-inner > .item > .row > .col-md-4 > article\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"aftabir.com/reportages\\\"]\"}],[\"upward\",\".col-md-4\"]]}","{\"selector\":\".carousel-inner > .item > .row > .col-md-8\",\"action\":[\"style\",\"width: 100% !important;\"],\"tasks\":[[\"has\",{\"selector\":\"article > a[href*=\\\"aftabir.com/news/view/\\\"]\"}]]}","{\"selector\":\".col-sm-3 > .block > .img\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"aftabir.com\\\"]\"}]]}]]}"],["{\"selector\":\".yn-bnr\",\"tasks\":[[\"upward\",\".custom\"]]}"],["{\"selector\":\".sidebar.col-4 > ul > li > h4\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"],[\"upward\",\"li\"]]}"],["{\"selector\":\".post-sticky\",\"tasks\":[[\"upward\",\".row\"]]}"],["{\"selector\":\"div[type=\\\"aparat\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .link\"}]]}"],["{\"selector\":\"#yektanet-pos-2\",\"tasks\":[[\"upward\",\".boxsh\"]]}","{\"selector\":\".menu_left-side-ads\",\"tasks\":[[\"upward\",\".boxsh\"]]}","{\"selector\":\".menu_right-side-ads\",\"tasks\":[[\"upward\",\".boxsh\"]]}"],["{\"selector\":\".widget-asan > span > a\",\"tasks\":[[\"upward\",\".widget-asan\"]]}","{\"selector\":\"article.post.game\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\".button, .post-cat\"}]]}]]}"],["{\"selector\":\".col-sm-12 span\",\"tasks\":[[\"has-text\",\"وبگردی\"],[\"upward\",\".col-sm-12\"]]}"],["{\"selector\":\"#yt_spotlight3 .klatest-items-div > .modtitle\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".klatest-items-div\"]]}"],["{\"selector\":\".mpbb_ads img\",\"tasks\":[[\"upward\",\".mp_box_x1\"]]}"],["{\"selector\":\".benawa_contentarea .benawa_treeads\",\"tasks\":[[\"upward\",\".benawa_contentarea\"]]}"],["{\"selector\":\"#macy-container > article > .articlebox > a[href*=\\\"/blogsazan.com/mag/reportage\\\"]\",\"tasks\":[[\"upward\",\"article\"]]}","{\"selector\":\".blog_center_bar > .main_title\",\"tasks\":[[\"has-text\",\"مطالب پیشنهادی\"]]}","{\"selector\":\".blog_right_bar > .main_title\",\"tasks\":[[\"has-text\",\"آخرین مطالب مجله\"],[\"spath\",\" + .main_content_free\"]]}","{\"selector\":\".blog_right_bar > .main_title\",\"tasks\":[[\"has-text\",\"آخرین مطالب مجله\"]]}","{\"selector\":\".main_content[style=\\\"border-radius:10px;\\\"] > div[style=\\\"padding: 10px; text-align:center; font-size:13px;\\\"] > a\",\"tasks\":[[\"upward\",\".main_content\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".widgettitle\",\"tasks\":[[\"has-text\",\"/پیشنهاد|مفید/\"]]}]]}"],["{\"selector\":\".linkbox\",\"tasks\":[[\"upward\",4]]}"],["{\"selector\":\".bd-sidebar > div > .widget > .block-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"#primary\",\"tasks\":[[\"not\",{\"selector\":\"> .categoriesPageHead\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"]]}],[\"spath\",\".rowList > li\"],[\"has\",{\"selector\":\"a[href*=\\\"/promoted/\\\"]\"}]]}"],["{\"selector\":\"#commentSection article\",\"action\":[\"style\",\"border-radius: 12px !important; background-color: rgba(var(--color-hint-object-caution-rgb),.1);\"],\"tasks\":[[\"has\",{\"selector\":\"p[class*=\\\"text-caption-strong color-500\\\"]\"}]]}","{\"selector\":\".mb-4\",\"tasks\":[[\"has\",{\"selector\":\".mr-auto.text-caption.ai-center\"}]]}","{\"selector\":\".radius-large-lg\",\"tasks\":[[\"has\",{\"selector\":\"[class*=\\\"SponsoredBrandCarousel\\\"]\"}]]}","{\"selector\":\"[class*=\\\"ProductContent\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".mr-auto.text-caption.ai-center\"}]]}","{\"selector\":\"[class*=\\\"VerticalProductCard\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".mr-auto.text-caption.ai-center\"}],[\"upward\",\"[class^=\\\"product-list\\\"]\"]]}"],["{\"selector\":\"a\",\"tasks\":[[\"has\",{\"selector\":\"> img.ads_pic\"}]]}","{\"selector\":\"a\",\"tasks\":[[\"has\",{\"selector\":\"> img.shbanner\"}]]}","{\"selector\":\"div.widget_content\",\"tasks\":[[\"has\",{\"selector\":\"> ul.blog_list\"}]]}","{\"selector\":\"form#captch_form > input[name=\\\"_wp_http_referer\\\"]\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"header.recent_news_wrapper > ul.news_text > li\",\"tasks\":[[\"has-text\",\"تبلیغ :\"]]}"],["{\"selector\":\".general-box\",\"tasks\":[[\"has\",{\"selector\":\".box-header\",\"tasks\":[[\"has-text\",\"وب گردی\"]]}]]}"],["{\"selector\":\".latestContents\",\"tasks\":[[\"has\",{\"selector\":\".bTitle\",\"tasks\":[[\"has-text\",\"وب گردی\"]]}]]}"],["{\"selector\":\".sidebar-home\",\"tasks\":[[\"has\",{\"selector\":\".ads_0\"}]]}"],["{\"selector\":\"#carousel\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".footer-content .tag-cloud\",\"tasks\":[[\"upward\",\".foot-col\"]]}"],["{\"selector\":\"div#macy-container > article\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> div.articlebox > div.icons\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}","{\"selector\":\"div.main_content[style=\\\"border-radius:10px;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[style=\\\"padding: 10px; text-align:center; font-size:13px;\\\"]\"}]]}","{\"selector\":\"div.main_title\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"مطالب پیشنهادی از سراسر وب\"]]}]]}"],["{\"selector\":\".r_box\",\"tasks\":[[\"has\",{\"selector\":\"p\"}]]}"],["{\"selector\":\".p-single.blog-post\",\"action\":[\"style\",\"width: 100% !important;\"],\"tasks\":[[\"upward\",1]]}","{\"selector\":\".sidebar > *\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\".swiper-wrapper > .swiper-slide\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"farsroid.com/\\\"]\"}]]}]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/author/post/\"]]}],[\"spath\",\" #posts-body > .posts > .box > .d-block > .border-bottom .row .image > span.text-white\"],[\"has-text\",\"رپرتاژ آگهی\"],[\"upward\",\".d-block\"]]}"],["{\"selector\":\"table > tbody > tr > td > .dagh > strong\",\"tasks\":[[\"has-text\",\"اخبار تبلیغاتی\"]]}"],["{\"selector\":\"div.post\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://www.tarhdokan.com/\\\"]\"}]]}","{\"selector\":\"div[id$=\\\"col-up\\\"]\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"spath\",\" + div[id$=\\\"col-body\\\"]\"]]}","{\"selector\":\"div[id$=\\\"col-up\\\"]\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}"],["{\"selector\":\"aside.sidebar .widget\",\"tasks\":[[\"has\",{\"selector\":\"a.external\"}]]}"],["{\"selector\":\"\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/reportage\"]]}],[\"spath\",\" .main-term-4998\"]]}","{\"selector\":\".primary-sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"a[rel*=\\\"sponsored\\\"]\"}]]}"],["{\"selector\":\"\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/reportage\"]]}],[\"spath\",\" .main-term-4662\"]]}","{\"selector\":\".secondary-sidebar-widget\",\"tasks\":[[\"has\",{\"selector\":\"a[rel*=\\\"sponsored\\\"]\"}]]}"],["{\"selector\":\".m-ads\",\"tasks\":[[\"upward\",\".sidebar-left-item.content\"]]}"],["{\"selector\":\".listing-item-blog\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"/author/ads/\\\"]\"}]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"@media print\"]]}","{\"selector\":\"style\",\"tasks\":[[\"has-text\",\"@media print\"]]}"],["{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"[href^=\\\"https://jalebamooz.com/reportage/\\\"]\"}]]}"],["{\"selector\":\".rbox .rbox-h\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".rbox\"]]}"],["{\"selector\":\".bahavadaran-news > .header-section\",\"tasks\":[[\"has-text\",\"دیگر رسانه ها\"]]}"],["{\"selector\":\"[onclick^=\\\"sendBannerDataLayer\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}","{\"selector\":\"[onclick^=\\\"sendCardDataLayer\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}","{\"selector\":\"[onclick^=\\\"sendDataLayer\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}","{\"selector\":\"[onclick^=\\\"sendViewMoreDataLayer\\\"]\",\"action\":[\"remove-attr\",\"onclick\"]}"],["{\"selector\":\"section.other_news > header\",\"tasks\":[[\"has-text\",\"رپرتاژ\"],[\"spath\",\" + div\"]]}","{\"selector\":\"section.other_news > header\",\"tasks\":[[\"has-text\",\"رپرتاژ\"]]}"],["{\"selector\":\".footer_column > div > ul > li > a\",\"tasks\":[[\"has-text\",\"طراحی سایت\"]]}","{\"selector\":\".lnk > center > a > img[alt=\\\"ADS\\\"]\",\"tasks\":[[\"upward\",\"center\"]]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has\",{\"selector\":\"aside > div > div > span\",\"tasks\":[[\"has-text\",\"تبلیغ\"]]}]]}"],["{\"selector\":\".sidebar_item > .sidebar_item__inner > .sidebar_item__title\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".sidebar_item\"]]}"],["{\"selector\":\"aside#left > .box > .title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".box\"]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"pa_vc_url\"]]}"],["{\"selector\":\"div.box\",\"tasks\":[[\"has\",{\"selector\":\"img[alt=\\\"icon_ads\\\"]\"}]]}","{\"selector\":\"div.col-xs-36.col-md-24\",\"action\":[\"style\",\"width: 83% !important;\"],\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\".gutter_xs\"}]]}]]}"],["{\"selector\":\"div.up-ad\",\"tasks\":[[\"has\",{\"selector\":\"div.ad-wrapper\"}]]}"],["{\"selector\":\"#p30konkor-ads-p div\",\"tasks\":[[\"has\",{\"selector\":\"p > a[rel]\"}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"p30konkor.com\\\"]\"}]]}]]}","{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".h-text\",\"tasks\":[[\"has-text\",\"لینک های پیشنهادی\"]]}]]}"],["{\"selector\":\".right-sidebar > aside > .tit-side\",\"tasks\":[[\"has-text\",\"لینک های مفید\"],[\"upward\",\"aside\"]]}"],["{\"selector\":\".dinu\",\"tasks\":[[\"upward\",\".widget\"]]}"],["{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\"header\",\"tasks\":[[\"has-text\",\"مفید\"]]}]]}"],["{\"selector\":\".widget > h3\",\"tasks\":[[\"has-text\",\"مطالب مفید\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\".GSBlock > div > .title > h3\",\"tasks\":[[\"has-text\",\"لینک های ویژه\"],[\"upward\",\".GSBlock\"]]}","{\"selector\":\".GSLiveTab > .tab_container1 > #tab3 > h2\",\"tasks\":[[\"has-text\",\"مقالات\"],[\"upward\",\".GSLiveTab\"]]}","{\"selector\":\".OpenTable > div > center > a[rel=\\\"nofollow\\\"] > .img-responsive\",\"tasks\":[[\"upward\",\".OpenTable\"]]}","{\"selector\":\".OpenTable > h2\",\"tasks\":[[\"has-text\",\"مقالات\"],[\"upward\",\".OpenTable\"]]}"],["{\"selector\":\"div[style=\\\"margin-bottom:10px\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .txt_adv_content\"}]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/fa/news/pr\"]]}],[\"spath\",\" .items-row\"],[\"has\",{\"selector\":\".sazitem_imgcat\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"]]}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".widget_title\",\"tasks\":[[\"has-text\",\"پیوند\"]]}]]}"],["{\"selector\":\"input.filter\",\"action\":[\"remove-attr\",\"disabled\"]}","{\"selector\":\"input.filter\",\"action\":[\"remove-class\",\"filter\"]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"user-select\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"wccp\"]]}"],["{\"selector\":\"div.col-md-3 > .box.style-1 > .box-header\",\"tasks\":[[\"has-text\",\"/تبلیغات رپورتاژ|لوگو اسپانسر/\"],[\"upward\",\".box\"]]}"],["{\"selector\":\".column-side > .block > .block-title\",\"tasks\":[[\"has-text\",\"وبگردی\"],[\"upward\",\".block\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/category/website/reportage/\"]]}],[\"spath\",\" .box\"],[\"has-text\",\"رپورتاژ آگهی\"]]}"],["{\"selector\":\".col-xs-12 > article\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"/category/pr/\\\"]\"}]]}","{\"selector\":\".sidebar > .d-flex > aside > section > figure\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"ad.technews-iran.com/\\\"]\"}],[\"upward\",\".sidebar\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/tag/رپورتاژ-آگهی/\"]]}],[\"spath\",\" .posts-list > article.tag-8164 > .clearfix > a[class=\\\"title\\\"][href$=\\\"reportage/\\\"]\"],[\"upward\",\"article\"]]}","{\"selector\":\".widget > p > #KajAds_Panel\",\"tasks\":[[\"upward\",\".widget\"]]}"],["{\"selector\":\"div.buy_box > a.cheapest-seller-wrapper > div.online_seller div.online_badge\",\"tasks\":[[\"has-text\",\"آگهی\"],[\"upward\",\"div.buy_box\"]]}","{\"selector\":\"div.shop-card.seller-element\",\"tasks\":[[\"has\",{\"selector\":\"> div.shop-info > div#vijhe_small\"}]]}"],["{\"selector\":\"input[type=\\\"hidden\\\"]:is(input[name=\\\"usr_login\\\"], input[name=\\\"referer\\\"], input#usr_resolution, input#usr_os, input#usr_browser)\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div.col-ms-36 > section\",\"tasks\":[[\"has\",{\"selector\":\"div.txt_adv_content\"}]]}","{\"selector\":\"div.row > section\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"/ads/redirect/\\\"]\"}]]}"],["{\"selector\":\"div.mnb\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"/advertisements/triggered/\\\"]\"}]]}"],["{\"selector\":\"aside > .title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\"aside\"]]}"],["{\"selector\":\".LeftSide > .TableOfContent > div[style=\\\"text-align:center;\\\"]\",\"tasks\":[[\"has-text\",\"صفحات مرتبط\"],[\"upward\",\".TableOfContent\"]]}"],["{\"selector\":\".part-content-wordpres > .title-section\",\"tasks\":[[\"has-text\",\"پست تبلیغاتی\"],[\"upward\",\".part-content-wordpres\"]]}","{\"selector\":\".small-tab-news > .sidebar-news > ul\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".small-tab-news\"]]}","{\"selector\":\"section.tabliqat-text > header\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\"section.tabliqat-text\"]]}"],["{\"selector\":\"#site-footer .col-sm-4\",\"tasks\":[[\"has\",{\"selector\":\"a[rel=\\\"noopener\\\"][target=\\\"_blank\\\"]\"}]]}","{\"selector\":\".content-column\",\"tasks\":[[\"not\",{\"selector\":\"> .archive-title\",\"tasks\":[[\"has-text\",\"رپرتاژ تبلیغاتی\"]]}],[\"spath\",\" .item-inner\"],[\"has\",{\"selector\":\"a[href*=\\\"/pr/\\\"]\"}]]}","{\"selector\":\".eif\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"farnet.io\\\"]\"}]]}]]}"],["{\"selector\":\"aside[class]\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://l.vrgl.ir/r?l=http\\\"][target=\\\"_blank\\\"]\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}","{\"selector\":\"input[type=\\\"hidden\\\"]:is(input#log_id, input#log_code)\",\"action\":[\"remove-attr\",\"value\"]}"],["{\"selector\":\".skip-container p\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"1da.ir\\\"]\"}]]}],[\"has\",{\"selector\":\"img\"}]]}"],["{\"selector\":\".herald-ad\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"kurdsoft\\\"]\"}]]}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"7ganj.ir\\\"]\"}]]}]]}","{\"selector\":\".herald-sidebar .widget\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}],[\"spath\",\" p\"],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"kurdsoft\\\"]\"}]]}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"7ganj.ir\\\"]\"}]]}]]}"],["{\"selector\":\"input[id=\\\"PreparePrint\\\"]\",\"action\":[\"remove-attr\",\"disabled\"],\"tasks\":[[\"watch-attr\",[\"disabled\"]]]}"],["{\"selector\":\".widget > .widget-top\",\"tasks\":[[\"has-text\",\"آگهی متنی\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"vc_url\"]]}"],["{\"selector\":\"#sidebar .widget a[href*=\\\"faradars.org\\\"] > img[alt*=\\\"فرادرس\\\"]\",\"tasks\":[[\"upward\",\".widget\"]]}","{\"selector\":\"#sidebar .widget div[id^=\\\"kaprila_linktable\\\"]\",\"tasks\":[[\"upward\",\".widget\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/category/رپرتاژ/\"]]}],[\"spath\",\" article > footer > span.post-meta-cat\"],[\"has-text\",\"رپرتاژ\"],[\"upward\",\"article\"]]}","{\"selector\":\"aside > div > span > a.ani[target=\\\"_blank\\\"][title]\",\"tasks\":[[\"upward\",\"div\"]]}"],["{\"selector\":\".apktops-slider-section ul > li\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href=\\\"https://t.me/+UgVXT9YqXOs0MQTy\\\"]\"}]]}]]}","{\"selector\":\".post-article > .content > .row .entry-content\",\"tasks\":[[\"has-text\",\"اسپاتیفای پرمیوم از APKTOPS\"],[\"upward\",\".post-article\"]]}","{\"selector\":\".spcontent\",\"tasks\":[[\"upward\",\".post\"]]}","{\"selector\":\"[id^=\\\"linkcat\\\"] > ul > li\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"apktops.ir\\\"]\"}]]}]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/category/رپرتاژ-آگهی\"]]}],[\"spath\",\" .archive-blog > article > figure > .entry-category\"],[\"has-text\",\"رپرتاژ آگهی\"],[\"upward\",\"article\"]]}"],["{\"selector\":\".page-body > .post:not(article) > .yn-bnr:empty\",\"tasks\":[[\"upward\",\".post\"]]}","{\"selector\":\".page-body > .post:not(article) > [id^=\\\"pos-article-\\\"]:empty\",\"tasks\":[[\"upward\",\".post\"]]}","{\"selector\":\".sidebar-right > .box > .title\",\"tasks\":[[\"has-text\",\"لینک های مفید\"],[\"upward\",\".box\"]]}"],["{\"selector\":\"section.text_type_holder\",\"tasks\":[[\"has\",{\"selector\":\"> header.header_section > h4\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\"#sidebar > .block > h5\",\"tasks\":[[\"has-text\",\"لینک های متنی\"],[\"upward\",\".block\"]]}"],["{\"selector\":\"div[style*=\\\"position: fixed; right: 0px; bottom: 0px;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .close-fixedSd\"}]]}"],["{\"selector\":\".slider-tab-ring\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"> *\",\"tasks\":[[\"has-text\",\"دیدگاه\"]]}]]}]]}"],["{\"selector\":\".main-term-none > .listing > .type-post > .item-inner > .featured > .term-badges\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"],[\"upward\",\".type-post\"]]}","{\"selector\":\".main-term-none > .listing > .type-post > .item-inner > .post-meta > .post-author-a > .author\",\"tasks\":[[\"has-text\",\"واحد تبلیغات\"],[\"upward\",\".type-post\"]]}"],["{\"selector\":\".linkbox > header\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".linkbox\"]]}"],["{\"selector\":\".parsi-ads\",\"tasks\":[[\"upward\",\".widget\"]]}","{\"selector\":\"aside > .widget .textwidget-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"section li\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"[href^=\\\"https://download1music.ir/\\\"]\"}]]}]]}"],["{\"selector\":\"#kaprila_downloadly_ir_side-2\",\"tasks\":[[\"upward\",\".g-cols\"]]}","{\"selector\":\"#kaprila_downloadly_ir_static-post\",\"tasks\":[[\"upward\",\".g-cols\"]]}","{\"selector\":\"#kaprila_downloadly_ir_top-side\",\"tasks\":[[\"upward\",\".g-cols\"]]}","{\"selector\":\"#kaprila_linktable\",\"tasks\":[[\"upward\",\".g-cols\"]]}","{\"selector\":\"#page-content > .wpb_row\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"faradars.org\\\"]\"}]]}","{\"selector\":\".postfixedafterpost\",\"tasks\":[[\"upward\",\".g-cols\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/رپورتاژ\"]]}],[\"spath\",\" .art-post > .head-post > .cat-post\"],[\"has-text\",\"رپورتاژ\"],[\"upward\",\".art-post\"]]}"],["{\"selector\":\"main > div\",\"tasks\":[[\"has\",{\"selector\":\"[href*=\\\"/advertising/\\\"]\"}]]}"],["{\"selector\":\".attention > header\",\"tasks\":[[\"has-text\",\"وبگردی\"],[\"upward\",\".attention\"]]}"],["{\"selector\":\".aside-inner > .widget-sidebar > .title\",\"tasks\":[[\"has-text\",\"/بنر شماره|تبلیغات متنی/\"],[\"upward\",\".widget-sidebar\"]]}"],["{\"selector\":\"div#player-container svg[width=\\\"48\\\"][height=\\\"48\\\"][viewBox=\\\"0 0 64 64\\\"] > g[opacity=\\\"0.6\\\"]\",\"tasks\":[[\"upward\",\"svg\"]]}"],["{\"selector\":\".widget > .widget_title\",\"tasks\":[[\"has-text\",\"پیوندهای مفید\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"div.col-md-12 > div.card\",\"tasks\":[[\"has\",{\"selector\":\"> a > img[src$=\\\".gif\\\"]\"}]]}"],["{\"selector\":\"a[target=\\\"_blank\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> img[src*=\\\"/Gif/\\\"][src$=\\\".gif\\\"]\"}]]}","{\"selector\":\"a[target=\\\"_blank\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> img[src*=\\\"/files/\\\"][src$=\\\".gif\\\"]\"}]]}"],["{\"selector\":\".sidebar > .box > .behtarinbacklink\",\"tasks\":[[\"upward\",\".box\"]]}"],["{\"selector\":\"#ads-container > .box > header\",\"tasks\":[[\"has-text\",\"وبگردی\"],[\"upward\",\".box\"]]}"],["{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\"header\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\"div[style=\\\"display: flex; flex-flow: column nowrap; justify-content: center; align-items: center;\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"img[alt=\\\"Advertisement\\\"]\"}]]}","{\"selector\":\"div[tabindex]\",\"tasks\":[[\"has\",{\"selector\":\"div[data-testid^=\\\"specialServices\\\"]\"}]]}"],["{\"selector\":\"div#column3 > table.sidea > tbody > tr\",\"tasks\":[[\"has\",{\"selector\":\"> td > div.mybox > h4\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}"],["{\"selector\":\"div.owl-item\",\"tasks\":[[\"has\",{\"selector\":\"> li[id^=\\\"ad\\\"]\"}]]}"],["{\"selector\":\".aside_boxs > .title_nt_box\",\"tasks\":[[\"has-text\",\"تبلیغ\"],[\"upward\",\".aside_boxs\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.oncontextmenu=\"]]}","{\"selector\":\"style\",\"tasks\":[[\"has-text\",\"user-select\"]]}","{\"selector\":\"style[media=\\\"print\\\"]\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"display:none\"]]}","{\"selector\":\"style[media=\\\"print\\\"]\",\"tasks\":[[\"has-text\",\"display:none\"]]}"],["{\"selector\":\".side_left > .side > .title\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\".side_left\"]]}"],["{\"selector\":\".entry\",\"tasks\":[[\"has\",{\"selector\":\".title\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\".sticky-column\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"modirnameh.ir\\\"]\"}]]}]]}"],["{\"selector\":\".banneritem\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"/banners/click/\\\"]\"}]]}"],["{\"selector\":\".txt-box\",\"tasks\":[[\"has\",{\"selector\":\"> .txt_adv_content\"}]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"window.location=\"]]}"],["{\"selector\":\"div.side_left > div.side > div.title\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\"div.side\"]]}"],["{\"selector\":\"div.fixed-post\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"mtm_campaign=p30download\\\"]\"}]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\"img[src*=\\\".gif\\\"]\"}]]}"],["{\"selector\":\".post > .post__content > .post__category\",\"tasks\":[[\"has-text\",\"رپورتاژ آگهی\"],[\"upward\",\".post\"]]}"],["{\"selector\":\".sidbar > p > strong\",\"tasks\":[[\"has-text\",\"پیوندها\"],[\"upward\",\".sidbar\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.oncontextmenu =\"]]}"],["{\"selector\":\"div.footer-block-1\",\"tasks\":[[\"has\",{\"selector\":\"> a[class^=\\\"text-ads\\\"]\"}]]}","{\"selector\":\"div.left-body\",\"tasks\":[[\"has\",{\"selector\":\"> div.left-title\",\"tasks\":[[\"has-text\",\"لینک دوستان\"]]}]]}","{\"selector\":\"div.left-body\",\"tasks\":[[\"has\",{\"selector\":\"> div.text div.text-ads\"}]]}","{\"selector\":\"div.right-body\",\"tasks\":[[\"has\",{\"selector\":\"> div.text div.adsr\"}]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://shirazsocial.com\\\"]\"}]]}"],["{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\".top_title\",\"tasks\":[[\"has-text\",\"نیازمندیها\"]]}]]}","{\"selector\":\".film_box\",\"tasks\":[[\"has-text\",\"مدرسه آنلاین\"]]}","{\"selector\":\".stitle_box\",\"tasks\":[[\"has\",{\"selector\":\".top_title\",\"tasks\":[[\"has-text\",\"وب گردی\"]]}]]}"],["{\"selector\":\"section#RightPanel > div.RBC > div.CCTS\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"],[\"upward\",\"div.RBC\"]]}"],["{\"selector\":\"div.col3\",\"tasks\":[[\"has\",{\"selector\":\"div.txt_adv_content\"}]]}"],["{\"selector\":\".side1\",\"tasks\":[[\"has\",{\"selector\":\"a[title][rel=\\\"noopener noreferrer\\\"]\"}]]}"],["{\"selector\":\"#mostvisited\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"تبلیغات متنی\"]]}]]}","{\"selector\":\".content-container\",\"tasks\":[[\"has\",{\"selector\":\".ad-reportage\"}]]}","{\"selector\":\".square-ad\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"#featured-posts\"}]]}]]}"],["{\"selector\":\"aside.widget_text > div.aside_box_title\",\"tasks\":[[\"has-text\",\"لینک های ویژه\"],[\"upward\",\"aside.widget_text\"]]}"],["{\"selector\":\".stream-item-widget\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"faradars.org\\\"]\"}]]}"],["{\"selector\":\"\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/author/d-reportages\"]]}],[\"spath\",\" ul#posts-container > li.post-item > .post-details > .post-meta > .author-meta\"],[\"has-text\",\"دپارتمان تبلیغات\"],[\"upward\",\"li.post-item\"]]}","{\"selector\":\".widget > .widget-title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"bannersAsJson\"]]}"],["{\"selector\":\".form-inline\",\"tasks\":[[\"others\",\"\"]]}"],["{\"selector\":\"form[action^=\\\"link/topPageSubmit/\\\"], div#linkStr\",\"tasks\":[[\"others\",\"\"]]}"],["{\"selector\":\".col-md-12 > .title\",\"tasks\":[[\"has-text\",\"لینک دوستان\"]]}"],["{\"selector\":\".content_item\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"/category/ads/\\\"]\"}]]}"],["{\"selector\":\"div.sidebar-home\",\"tasks\":[[\"has\",{\"selector\":\"> div.wbox > strong\",\"tasks\":[[\"has-text\",\"تبلیغات\"]]}]]}"],["{\"selector\":\".fixedadv\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"noscript\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".box-doc > .documentary-news-cnt > header\",\"tasks\":[[\"has-text\",\"بازرگانی\"],[\"upward\",\".box-doc\"]]}","{\"selector\":\".news-col-1 #rssbank\",\"tasks\":[[\"upward\",\".container\"]]}","{\"selector\":\".various-cnt > header\",\"tasks\":[[\"has-text\",\"بازرگانی\"],[\"upward\",\".various-cnt\"]]}"],["{\"selector\":\"#webgardi_list\",\"tasks\":[[\"upward\",\".section_cnt\"]]}"],["{\"selector\":\"li[id^=\\\"ad\\\"]\",\"tasks\":[[\"upward\",\"section.box\"]]}","{\"selector\":\"section.box ul > li.bklnk\",\"tasks\":[[\"upward\",\"section.box\"]]}"],["{\"selector\":\"[class=\\\"widget_text sidebar-box\\\"]\",\"tasks\":[[\"has-text\",\"تبلیغ\"]]}","{\"selector\":\"[class=\\\"widget_text sidebar-box\\\"]\",\"tasks\":[[\"has-text\",\"وبگردی\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"protoUrl\"]]}"],["{\"selector\":\"div.banner\",\"tasks\":[[\"has\",{\"selector\":\"> a > img\"}]]}"],["{\"selector\":\".widget > .section-heading > .h-text\",\"tasks\":[[\"has-text\",\"لینکستون\"],[\"upward\",\".widget\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"ad.setAttribute\"]]}"],["{\"selector\":\"a[name^=\\\"Advertisement\\\"]\",\"tasks\":[[\"upward\",\".wb_element\"]]}"],["{\"selector\":\"aside.left > div.box > div.title\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\"div.box\"]]}"],["{\"selector\":\".cside1 > .hside2\",\"tasks\":[[\"has-text\",\"تبلیغات\"],[\"upward\",\".cside1\"]]}"]];

const hostnamesMap = new Map([["aftabir.com",1],["akharinnews.com",2],["alamto.com",3],["androidgozar.com",4],["aparat.com",5],["arga-mag.com",6],["asandl.com",7],["asriran.com",8],["bazimag.com",9],["behmusic.com",10],["benawa.com",11],["blogsazan.com",12],["charbzaban.com",13],["chetor.com",14],["deltapayam.com",15],["digiato.com",16],["digikala.com",17],["dlfox.com",18],["donya-e-eqtesad.com",19],["ecoiran.com",20],["eghtesademeli.com",21],["eghtesadonline.com",22],["elmevarzesh.com",23],["eramblog.com",24],["etelanews.com",25],["farachart.com",26],["farsroid.com",27],["gamefa.com",28],["ghatreh.com",29],["graphiran.com",30],["honarfardi.com",31],["idehalmag.com",32],["idehaltech.com",33],["iranidata.com",34],["itresan.com",35],["jafekri.com",36],["coffeeapps.ir",[36,85]],["sclinic.ir",[36,120]],["jalebamooz.com",37],["khabarpu.com",38],["khanefootball.com",39],["khanoumi.com",40],["khodrotak.com",41],["lordroid.com",42],["marzfun.com",43],["moderndl.com",44],["mybia4music.com",45],["niniban.com",46],["ninisite.com",47],["p30konkor.com",48],["par30media.com",49],["sakhtafzarmag.com",50],["salameno.com",51],["sariasan.com",52],["sarzamindownload.com",53],["sedayiran.com",54],["shahrsakhtafzar.com",55],["shereno.com",56],["takhfifan.com",57],["takmili.com",[58,59]],["kihanb.ir",[58,108]],["takskin.com",60],["tarafdari.com",61],["techfars.com",62],["technews-iran.com",63],["techrato.com",64],["torob.com",65],["uploadboy.com",66],["vananews.com",67],["varandaz.com",68],["vipofilm.com",69],["zibamoon.com",70],["konkur.in",71],["farnet.io",72],["virgool.io",73],["1da.ir",74],["7ganj.ir",75],["ac.ir",76],["amazing.ir",77],["androidparsi.ir",78],["dailymobile.ir",[78,86]],["tarfandha.org",78],["androidzoom.ir",79],["anzalweb.ir",80],["apktops.ir",81],["appreview.ir",82],["avaz-kurd.ir",83],["bartarinha.ir",84],["digiboy.ir",87],["digiro.ir",88],["dlrozaneh.ir",89],["download.ir",90],["download1music.ir",91],["downloadly.ir",92],["downloadsoftware.ir",93],["econews.ir",94],["entekhab.ir",95],["farsifilm.ir",96],["filmnet.ir",97],["filmsky.ir",98],["forsatnet.ir",99],["games4online.ir",100],["gamesetup.ir",101],["hamshahrionline.ir",102],["imna.ir",103],["my.irancell.ir",104],["iranjib.ir",105],["isna.ir",106],["khodropluss.ir",107],["listen2music.ir",109],["mihand.ir",110],["modirnameh.ir",111],["moviemag.ir",112],["nabzefanavari.ir",113],["najiremix.ir",114],["nex11music.ir",115],["show-music.ir",115],["p30download.ir",116],["pedal.ir",117],["plaza.ir",118],["power-music.ir",119],["skinak.ir",121],["subf2m.ir",122],["tabnak.ir",123],["taknaz.ir",124],["tejaratemrouz.ir",125],["top90.ir",126],["toranji.ir",127],["uptrack.ir",128],["vgdl.ir",129],["youc.ir",130],["zoomg.ir",131],["xip.li",132],["opizo.me",133],["androidina.net",134],["jeyran.net",135],["par30dl.net",136],["par30games.net",137],["pichak.net",138],["rokna.net",139],["55online.news",140],["saat24.news",141],["techna.news",142],["bandmoviez.one",143],["skyroom.online",144],["bazdeh.org",145],["tgju.org",146],["takvim.tj",147],["artmusics.top",148],["harmonydl.us",149]]);

const entitiesMap = new Map([["hamtamovie",0]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
