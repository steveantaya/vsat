{\rtf1\ansi\ansicpg1252\cocoartf1671\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 ##### Armstrong Print VIASAT / 18.6.2 CT Release and 1.1.3 SPA Release (1214) - Last Updated: 3/19/15\
========\
#### Developer\
Jen Rasmussen, Four51\
\
#### Github URL\
`https://github.com/Four51/armstrongPrintPromo.git`\
\
#### Theme URL\
`//www.four51.com/Themes/Custom/a127ce85-d2a4-4d9e-942f-5bdb0342003b/ViaSat/images/custom/`\
* login logo, blue bg, armstrong logo, wildblue/exede logo\
\
#### Overrides for Stationery group\
`js/directives/orderbilling.js`\
* set default billAddressID\
\
`js/directives/ordershipping.js`\
* set default shipAddressID\
\
`partials/branding.html`\
* conditional Stationary logo \
\
`partials/controls/aboutNav.html`\
* hide FAQ\
\
`partials/controls/nav.html`\
* conditional nav items for link builder link\
\
`partials/controls/orderBilling.html`\
* hide billAddress selection dropdown\
\
`partials/controls/orderShipping.html`\
* do not show ship method \
* make ship method not required\
\
`partials/controls/paymentSelection.html`\
* hide payment selection - defaults to Purchase Order\
\
`partials/Messages/home.html`\
* conditional messaging\
\
\
#### Base App Functional Changes\
* Free PDF on DM, Flyers, and Brochures - IMPORTANT! using CostCenter field to store the PDF url\
`js/controllers/productCtrl.js`  / lines 21-35, 43\
`js/directives/quantityfield.js` / lines 29-35\
`js/services/orderService.js` / lines 20-25 \
`partials/controls/cartView.html` / lines 26, 37-55\
`partials/controls/customSelectionField.html` / line 1\
`product-detail-template-zoom-pdf.html` (Viasat-0115) / lines 142-151, 162-167, 177-184\
\
* PDF - view production url for all products\
`partials/reporting/lineItemHistoryGridView.html`  / lines 8-31\
\
* About Navigation\
`js/directives/nav.js`\
`partials/controls/aboutNav.html`\
`partials/faq.html`\
`partials/privacy.html`\
\
### Updated files\
\
#### plugins\
`lib/angular/plugins/ordercloudspecforms.js`\
`lib/angular/plugins/anchorScroll.js`\
\
#### Custom Solutions\
`js/directives/backtotop.js`\
`js/directives/productsearchinput.js`\
`js/directives/productzoom.js`\
`js/directives/productmatrix.js`\
\
#### js\
`js/app.js`\
* inject anchorScroll\
* inject Order Cloud Spec Forms module\
\
`js/filters.js`\
* custom order fields / lines 81-93\
\
`js/routing.js`\
* SPA-13874: remove trailing slash after contactus & remove extra slash in conditions \
* add About routing\
\
`js/controllers/categoryCtrl.js`\
* Yard Signs custom view / lines 12-27\
\
`js/controllers/faqCtrl.js`\
* About Navigation\
\
`js/controllers/orderHistoryViewCtrl.js`\
* custom order fields / line(s) 2, 9-12\
\
`js/controllers/privacyCtrl.js`\
* About Navigation\
\
`js/controllers/productCtrl.js`\
* SPA-13875: remove commented out productmatrix code \
* Free PDF on DM, Flyers, and Brochures / lines 20-28, 35\
\
`js/controllers/specFormCtrl.js`\
* auto populate user and assigned address / lines 28-118\
\
`js/directives/creditcard.js`\
* SPA-14173: current year expiration date fix / lines 159-168  \
\
`js/directives/nav.js`\
* About Navigation\
\
`js/directives/specformmessage.js`\
* custom spec form message\
\
`js/services/orderService.js` \
* Free PDF on DM, Flyers, and Brochures / lines 20-25 \
 \
`js/services/whiteLabelService.js`\
* /sp replacements\
\
`js/services/XLATService.js`\
* SPA-14109: fix for translation service not showing 0.00 dollar amounts / line 64\
\
\
#### html\
`index.html`\
* plugins / lines 62-64\
* About controllers / lines 108-109\
* custom solutions / lines 181-186\
\
`partials/addressListView.html`\
* SPA-13922: fix ng-disabled typo \
* SPA-12917: add responsive account navigation\
* SPA-12917 / SPA-13661: convert to 'table-responsive'\
\
`partials/branding.html`\
* custom theme logos\
\
`partials/cartView.html`\
* continue shopping button / lines 147-151\
* Free PDF on DM, Flyers, and Brochures / lines 26, 37-55\
\
`partials/categoryView.html`\
* conditional category messaging / lines 1-29, 62-65\
\
`partials/controls/aboutNav.html`\
* About Navigation\
\
`partials/controls/addressInput.html`\
* remove google quick search\
\
`partials/controls/creditCard.html`\
* SPA-14210: correct input width from 'col-sm-4' to 'col-sm-12'\
\
`partials/controls/customSelectionField.html`\
* Free PDF on DM, Flyers, and Brochures / line 1\
\
`partials/controls/fileUpload.html`\
* remove border-bottom\
* update alert to alert-custom\
\
`partials/controls/loadingIndicator.html`\
* SPA-12918: Loading indicator width when container-view is contained\
\
`partials/controls/login.html`\
* add armstrong logo\
* remove default background\
\
`partials/controls/orderDetails.html`\
* SPA-12919: add 'col-xs'12' to div 'input-group' to fix column sizing when 'EditPOID' permission is not checked\
* SPA-13904: add additional condition so that cost center label doesn't show if no cost center is assigned to user / line 30\
* custom order fields / lines 23-30\
\
`partials/controls/orderSummary.html`\
* default ship cost to 0 if not yet set / line 21\
\
`partials/favoriteOrderListView.html`\
* SPA-12917: convert to 'table-responsive'\
\
`partials/faq.html`\
* About Navigation\
\
`partials/messageListView.html`\
* SPA-12917: convert to 'table-responsive'\
\
`partials/Messages/contactus.html`\
* SPA-12917: add responsive account nav\
\
`partials/Messages/home.html`\
* welcome message\
\
`partials/privacy.html`\
* About Navigation\
\
`partials/productListView.html`\
*  conditional shortproductview for Yard Signs / lines 31-45\
\
`partials/reporting/lineItemHistoryGridView.html`\
* free PDF and approvals / lines 8-31\
\
`partials/reporting/orderHistoryDetailsView.html`\
* custom order fields / lines 18-27\
\
`partials/reporting/orderHistoryView.html`\
* PW-15011 Cart Icon - The shopping cart icon persists after order submission / lines 26-27\
* base app fix for ship to still showing after approval and values are no longer available / lines 52-53\
\
`partials/Security/security-EN-US.html`\
*  remove inline style 'blue' from <a> tags\
\
`partials/userView.html`\
* add password requirements\
}