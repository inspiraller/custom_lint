# Question - What is the single biggest cause of css technical debt?
Answer - The Cumulative combinations of specifity
Example css file: http://www.austinwyatt.co.uk/content/_shared/Assets/css/default-web_vSprint%208.css

```css 
/*Global Reset*/
a, button {cursor:pointer;text-decoration:none}
```
- Good - Common elements
- Bad - single line
  

```css 
.Hidden {display:none!important}
```
- Good - Help class defined early
- Bad - !important
  

 ```css 
div#GloabalHeaderWrapper h1 a img {float:left;border:none}
div#GloabalHeaderWrapper div.Inner span a img {float:left;border:none}
```
- Good - Overrides kept with common elements
- Bad - overrides declared before common element declared
- Bad - id's used
- Bad - Nesting on common elements
```css


input{-moz-box-sizing: content-box; box-sizing: content-box; }

/*IE 6*/
/*\*/ * Body {font-size:.9em}/**/

/*Watermark*/
.Watermark {background:White}
.WatermarkDemand {background:#f7dade}

/*Careers*/
a.CareersPDFDownload {text-align:center;float:left;font-size:1.8em;margin:30px;width:530px;padding:20px 10px;background:#f5f5f5;border:1px solid #ccc}
a.CareersPDFDownload span {background:url(/images/icons/pdf-icon-32.png) no-repeat left center;padding:10px 0 10px 40px}

/*400/404*/
div#FourHundredContainer {clear:both;width:532px;float:left;margin:33px 0 0 0;font-size:.8em;color:#333;padding:45px 60px 0 60px;min-height:38px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd; }
div#FourHundredContainer h6 {font-size:2.4em;font-weight:normal; }
div#FourHundredContainer ul {padding:0 0 60px 0}
div#FourHundredContainer ul li {padding:10px 0 0 0;font-size:1.2em; }

/*Favourites Transition*/
.ResultsListingTransition{background:url(/images/results/FavouriteTransitionButton.png) no-repeat -4px -4px;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;padding:4px 0 4px 0;height: 20px;z-index:1000;}

/*Modals*/
div#GlobalModalWrapper {background:url(/images/modals/modal-bg.png) repeat;top:0;right:0;bottom:0;left:0;height:auto;width:100%;z-index:10000;position:absolute}
div#GlobalModalWrapper a:hover {color:#999}
div#GlobalModalWrapper .Body {background:White;overflow:auto;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;-webkit-box-shadow:5px 5px 30px rgba(0, 0, 0, 0.8);-moz-box-shadow:5px 5px 30px rgba(0, 0, 0, 0.8);padding:0 0 20px}
div#GlobalModalWrapper .Body .Title {border-bottom:Solid 1px #ccc;padding:0 25px;height:44px;line-height:44px;background:#f8f8f8;border-top-left-radius:5px;-moz-border-radius-topleft:5px;-webkit-border-top-left-radius:5px;border-top-right-radius:5px;-moz-border-radius-topright:5px;-webkit-border-top-right-radius:5px}
div#GlobalModalWrapper .Body .Title h6 {color:#333;font-size:1.2em;font-weight:normal;padding:0;margin:0;float:left}
div#GlobalModalWrapper .Body .Title a {background:url(/images/modals/close-sprite.gif) no-repeat left top;float:right;clear:none;margin:7px 0 0 0;height:29px;line-height:29px;padding:0 0 0 8px;font-size:13px;color:#333;text-decoration:none;text-shadow:0 -1px White}
div#GlobalModalWrapper .Body .Title a span {background:url(/images/modals/close-sprite.gif) no-repeat right top;float:left;height:29px;margin:0;padding:0 31px 0 0}
div#GlobalModalWrapper .Body .Title a:hover {background-position:left bottom;color:#333}
div#GlobalModalWrapper .Body .Title a:hover span {background-position:right bottom}
div#GlobalModalWrapper .Body .Content {padding:0 25px;float:left;color:#666}
div#Thanks .Body .Content {padding:25px}
div#GlobalModalWrapper .Text {padding:20px 0;text-align:left}
input#ForgotPasswordEmail,
input#NewEmail,
input#Password,
input#CurrentPassword,
input#NewPassword,
input#ConfirmPassword {width:365px}
.ToolTip {display:none}
div#GlobalModalWrapper fieldset.Error .ToolTip {display:block;position:absolute;float:left;z-index:100000}
fieldset {margin:0;padding:0;border:0}
fieldset input {border:Solid 1px #ccc;line-height:19px;height:19px;margin:0;padding:6px;clear:both;color:#666; }
fieldset textarea {border:Solid 1px #ccc;line-height:19px;height:19px;margin:0;padding:6px;clear:both;color:#666;font-family:Calibri, Arial, Verdana, Times New Roman; }
/*fieldset.Error label {color:#c73b3c}
fieldset.Error input {border:Solid 1px #c73b3c;background:#f7dade}*/
div#GlobalModalWrapper sup {color:#39ace6;vertical-align:text-top;font-size:inherit;line-height:normal;margin:0 0 0 3px;font-size:12px}
div#GlobalModalWrapper a.ModalContactButton {float:right;margin:0 0 0 3px;padding:0 0 0 8px;width:auto;height:36px;line-height:36px;text-align:center;background:#666;color:White;text-decoration:none;border:none}
div#GlobalModalWrapper a.ModalContactButton span {float:left;padding:0 8px 0 0}
div#GlobalModalContainer {width:100%;background:url(/images/loading.gif) no-repeat center 100px}
div#GlobalModalLoading {width:597px;position:absolute;z-index:100001;margin:62px auto 0 auto;background:url(/images/results/results-overlay.png) repeat;left:0;right:0}
div#GlobalModalLoading div {width:100%;height:100%;background:url(/images/loading.gif) no-repeat center center}
div#SignUpModal h2 {font-size:1.2em;font-weight:bold;line-height:normal;margin:12px 0;padding:0 17px}
input#SaveSearchName {width:270px}
div#ProfileContentContainer  { padding:35px 0 0 0}
div#SecureContainer div#SignupContent fieldset label { float:left;}
div#SecureContainer div#SignupContent fieldset select { float:left;}
div#SecureContainer div#SignupContent fieldset input { float:left;}
div#SecureContainer div#SignupContent div.Scroller div.ScrollerTwo p { padding-top:0; line-height:19px; text-align:left; float:left; margin-top:50px; }
div#GlobalModalWrapper div.Buttons { margin-left:225px;}
div#LoginModal{float:none;margin:62px auto 0;width:597px}
div#LoginModal fieldset {padding:20px 0 0}
div#LoginModal label{color:#333;display:inline-block;padding:0 8px 0 0;text-align:right;width:140px}
div#LoginModal input{width:365px}
div#LoginModal a.ModalContactButton{margin-top:20px}
div.Thanks p{text-align:left}
div.OuterFrame{margin:0 auto 0;padding:12px 0 0;text-align:left;width:621px}

/*Modals Two Column*/
div.TwoColumnModalContainer {text-align:left;padding:12px 0 0 0;margin:50px auto 0 auto;width:621px}
div.TwoColumnModalContainer .Body {padding:0;float:left}
div.TwoColumnModalContainer .Body .Title {width:547px}
div.TwoColumnModalContainer .Body .Content {width:547px}

/*Modals One Column*/
div.OneColumnModalContainer {text-align:left;padding:12px 0 0 0;margin:50px auto 0 auto;width:621px}
div.OneColumnModalContainer .Body {padding:0;float:left}
div.OneColumnModalContainer .Body .Title {width:547px}
div.OneColumnModalContainer .Body .Content {width:547px;}

/*Modals Wide One Column*/
div.OuterFrameWide {text-align:left;padding:12px 0 0 0;margin:50px auto 0 auto;width:821px}
div.OuterFrameWide .Body {padding:0;float:left}
div.OuterFrameWide .Body .Title {width:747px}
div.OuterFrameWide .Body .Content {width:747px;text-align:center}
div.OuterFrameWide .Body .Content img {max-width:720px;margin:40px 0}

/*Modals One Column Forgotten Password/Change Email/Change Password*/
#ChangeEmail .Body,
#ChangePassword .Body,
#ForgottenPassword .Body,
#SaveSearches .Body {padding:0 0 20px 0}
#ChangeEmail .Body .Content fieldset,
#ChangePassword .Body .Content fieldset,
#ForgottenPassword .Body .Content fieldset ,
#SaveSearches .Body .Content fieldset {display:block;margin:0;width:75%;margin-left:auto;margin-right:auto;}
#ForgottenPassword .Body .Content fieldset {margin-top:0;}
#ChangeEmail .Body .Content fieldset label,
#ChangePassword .Body .Content fieldset label,
#ForgottenPassword .Body .Content fieldset label,
#SaveSearches .Body .Content fieldset label {padding:0 10px 0 0;display:block;color:#666}
#ChangeEmail .Body .Content fieldset input,
#ChangePassword .Body .Content fieldset input,
#ForgottenPassword .Body .Content fieldset input,
#SaveSearches .Body .Content fieldset input {clear:none;display:inline-block;}
#ChangeEmail .Body .Content fieldset.Error div.ToolTip,
#ChangePassword .Body .Content fieldset.Error div.ToolTip,
#ForgottenPassword .Body .Content fieldset.Error div.ToolTip,
#SaveSearches .Body .Content fieldset.Error div.ToolTip {display:block;position:absolute;margin:-4px 0 0 500px;float:left;z-index:100000;text-align:left}
#ChangeEmail .Body .Content fieldset.Error div.ToolTip .One,
#ChangePassword .Body .Content fieldset.Error div.ToolTip .One,
#ForgottenPassword .Body .Content fieldset.Error div.ToolTip .One,
#SaveSearches .Body .Content fieldset.Error div.ToolTip .One {float:left;background:url(/images/modals/tool-tip-top.gif) no-repeat;width:108px;padding:0 0 0 10px;margin:0 0 0 0;z-index:1000}
#ChangeEmail .Body .Content fieldset.Error div.ToolTip .One .Two,
#ChangePassword .Body .Content fieldset.Error div.ToolTip .One .Two,
#ForgottenPassword .Body .Content fieldset.Error div.ToolTip .One .Two,
#SaveSearches .Body .Content fieldset.Error div.ToolTip .One .Two {background:url(/images/modals/tool-tip-bottom.gif) no-repeat center bottom;padding:5px;margin:0;font-size:12px;min-height:30px}
#ChangeEmail a#SubmitButton,
#ChangePassword a#SubmitButton,
#ForgottenPassword a#SubmitButton,
#SaveSearches a#SubmitButton {margin:20px 60px 0 0}
.errorChangeEmail {width:100%}

/*Modal Two Column Contact About Property*/
div.TwoColumnModalContainer#ContactAboutProperty fieldset {margin:4px 0 0 0;height:57px;float:left}
div.TwoColumnModalContainer#ContactAboutProperty fieldset#TextArea {height:157px}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnOne fieldset label {font-weight:bold;margin:0;padding:0;line-height:30px;height:30px;width:301px;font-size:12px;z-index:auto;display:block}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnOne fieldset label span {font-size:10px;font-weight:normal}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnOne fieldset input {width:299px}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnOne fieldset.SimpleTickBox input {height:auto;width:auto;line-height:normal;border:none;margin:8px 0}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnOne fieldset.SimpleTickBox span {float:none;margin:8px 0 8px 8px}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnOne fieldset textarea {width:291px;height:120px}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnOne {width:301px;margin:16px 0 20px 0;float:left;padding:0 25px 0 0}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnTwo {width:221px;margin:40px 0 20px 0;float:left;padding:0}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnOne fieldset {width:301px}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnTwo fieldset {width:221px}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnOne fieldset .ValidationImage {width:15px;height:15px;float:left;overflow:hidden;margin:13px 0 0 0}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnOne fieldset.Error .ValidationImage {background:url(/images/modals/validation-sprite.gif) 15px 0}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnOne fieldset.Error .ToolTip,
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnOne fieldset.Pass .ToolTip,
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnOne fieldset.Loading .ToolTip {display:block;position:absolute;margin:25px 0 0 285px;float:left;z-index:100000}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnOne fieldset.Pass .ValidationImage {background:url(/images/modals/validation-sprite.gif) 0 0}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnOne fieldset.Loading .ValidationImage {background:url(/images/modal/version-2.0/validation-loader-mini.gif) 0 0}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnOne fieldset.Pass .ToolTip .One,
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnOne fieldset.Loading .ToolTip .One {display:none}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnOne fieldset.Error .ToolTip .One {float:left;background:url(/images/modals/tool-tip-top.gif) no-repeat;width:108px;padding:0 0 0 10px;margin:0 0 0 -4px;z-index:1000}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnOne fieldset.Error .ToolTip .One .Two {background:url(/images/modals/tool-tip-bottom.gif) no-repeat center bottom;padding:5px;margin:0;font-size:12px}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnTwo h6 {font-weight:normal;font-size:1.35em}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnTwo address {font-style:normal;margin:10px 0 0 0;padding:0;width:220px;font-size:0.8em;line-height:1.4em;color:#999;min-height:50px}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnTwo address img {border:Solid 1px #e5e5e5;width:68px;height:44px;float:left;background:#fafafa;margin:0 10px 0 0}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnTwo address strong {color:#333;font-size:1.2em;line-height:1.3em}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnTwo address strong.BrandTelephoneNumber {font-size:1.2em;line-height:1em}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnTwo address strong span {color:#333;font-weight:normal;font-size:0.7em;margin:0 0 0 5px;color:#999}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnTwo hr {height:1px;border:none;background:#ededed;margin:20px 0 0 0;padding:0;color:#ededed;clear:both;width:221px}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnTwo .DPA {margin:10px 0 20px 0;color:#999;float:left}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnTwo .DPA fieldset {height:auto;float:left}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnTwo .DPA fieldset input {margin:0 8px 0 0;padding:0;float:left;width:auto;height:auto;display:block;border:none}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Content .ColumnTwo .DPA fieldset p {font-size:11px;padding:0 0 8px 0;float:left;display:block;width:190px;font-style:normal;clear:none;margin:0;display:inline}
div.TwoColumnModalContainer#ContactAboutProperty .Body hr {height:1px;border:none;background:#ededed;margin:20px 25px 0 25px;padding:0;color:#ededed;clear:both;width:547px;clear:both}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Legal {padding:15px 25px;width:526px;float:left}
div.TwoColumnModalContainer#ContactAboutProperty .Body .Legal p {color:#999;font-size:11px;float:left;clear:both;width:100%}

/*Error*/
fieldset.Error div.ToolTip{display:block;float:left;margin:-4px 0 0 500px;position:absolute;text-align:left;z-index:100000}
fieldset.Error div.ToolTip .One{background:url(/images/modals/tool-tip-top.gif) no-repeat 0 0;float:left;margin:0;padding:0 0 0 10px;width:108px;z-index:1000}
fieldset.Error div.ToolTip .One .Two{background:url(/images/modals/tool-tip-bottom.gif) no-repeat center bottom;font-size:12px;margin:0;min-height:30px;padding:5px}

/*Saved Search Notification*/
div#SavedSearchNotification div.FadedBackground{background:url(/images/results/saved-results-bg.jpg) repeat-x center top #E4F3FA;border-bottom:1px solid #CCCCCC;display:inline;float:left;margin:0;padding:10px;width:632px}
div#SavedSearchNotification div.FadedBackground h6{background:url(/images/results/saved-results-tick.jpg) no-repeat left top;color:#333;font-size:1.4em;font-weight:normal;line-height:39px;height:39px;padding:0 0 0 49px}

/*Gloabl Header*/
div#GloabalHeaderWrapper {width:100%;background:#666}
div#GloabalHeaderWrapper div {width:980px;margin:0 auto;height:120px}
div#GloabalHeaderWrapper div span { display:block;margin:0 0 0 10px;font-size:2em}
div#GloabalHeaderWrapper div span a {color:White}
div#GloabalHeaderWrapper div h2.HeaderSupplimentary {float:right;font-weight:normal}
div#GloabalHeaderWrapper div h2.HeaderSupplimentary strong {font-weight:bold}

/*Global Navigation*/
div#GlobalNavigationWrapper {width:100%;margin:0 auto;height:45px;margin-top:20px;margin-bottom:20px;}
div#GlobalNavigationWrapper div.Inner {width:962px; margin:0 auto;position:relative; }
div#GlobalNavigationWrapper ul#Links { display:table;line-height:43px;width:100%;background-color:#AAA; }
div#GlobalNavigationWrapper ul#Links li { display:table-cell;border-right:1px #FFF solid; }
div#GlobalNavigationWrapper ul#Links li a { padding-left:10px;padding-right:10px;display:block;color:#FFF;text-decoration:none;height:43px;outline:none;text-transform:uppercase; }
div#GlobalNavigationWrapper ul#Links li a span { display:block;width:100%;text-align:center;font-size:1.1em; }
div#GlobalNavigationWrapper ul#Links li a:hover { background-color:rgba(255,255,255,0.2); }
div#GlobalNavigationWrapper ul#Links li.Selected { background-color:#CCC; }
div#GlobalNavigationWrapper ul#Links li.Selected a { color:#FFF; }
div#GlobalNavigationWrapper ul#Personalisation { position:absolute;top:-125px;right:0px;margin:0;font-size:1em;float:right; }
div#GlobalNavigationWrapper ul#Personalisation li {float:left;padding-left:10px;padding-right:10px;}
div#GlobalNavigationWrapper ul#Personalisation li a {text-decoration:underline}
div#GlobalNavigationWrapper ul#Personalisation li a:hover {text-decoration:none}

/* PRE LIGHT TOUCH CHANGES */
div#GlobalNavigationWrapper ul#Personalisation li a { color: #FFF; }

/*Global Footer*/
div#Footer {clear:both; text-align:center}
div#GlobalFooterWrapper {width:100%;clear:both;position:static;font-size:.8em;padding:0;padding:20px 0}
div#GlobalFooterWrapper div.Inner {width:960px;margin:0 auto;border-top:Solid 1px #ddd;padding:20px 0}
div#GlobalFooterWrapper div.Inner ul {margin:0 auto; display:inline-block; *display:inline; zoom:1;}
div#GlobalFooterWrapper div.Inner ul li { margin:0 5px 0 20px; list-style:disc; float:left;color:#DADADA}
div#GlobalFooterWrapper div.Inner ul li.first { list-style:none;margin:0 5px 0 0;}
div#GlobalFooterWrapper div.Inner ul li a {color:#666;}
div#GlobalFooterWrapper div.Inner ul li a:hover {text-decoration:underline;}
div#GlobalFooterWrapper div.Inner p {margin:0 auto;clear:both;width:555px; text-align:center; padding:0 0 15px 0; font-size:0.9em; line-height:1.5em; color:#566; }
div#Footer .additional {display:block; padding:27px 0 25px 0}
div#Footer .additional .pwide {display:inline-block; *display:inline; zoom:1;color:#666; padding:0 26px 0 0; position:relative}
div#Footer .additional .pwide div {background:url(/images/global/propertywide-logo.png) no-repeat 0 0;width:178px;height:25px;display:inline-block;*display:inline; zoom:1; vertical-align:middle; margin:0 0 0 5px}
div#Footer .additional .pwide div img {display:none;}
div#Footer .additional .pwide div:hover {background-position:0 -25px}
div#Footer .additional .pwide span {position:absolute; top:22px; left:190px; z-index:30; font-size:1em;}
div#Footer .additional .tpo {display:inline-block;*display:inline; zoom:1;color:#9e9e9e}
div#Footer .additional .tpo .logo {width:116px;height:40px;display:inline-block;*display:inline; zoom:1; margin:0 0 0 5px; vertical-align: middle;}
div#Footer .additional .tpo .logo a{background:none!important}
div#Footer .additional .tpo .logo.sales {width:181px;height:40px}

/*Home*/
div#HomeContentWrapper {width:100%;min-height:300px;display:block; }
div#HomeContentWrapper div.Inner {width:980px;margin:0 auto;padding:50px 0 0 0}
div#HomeContentWrapper div.Inner div.HomeIntroduction {width:475px;float:left;position:static;padding:0 0 50px 0;margin:0 0 0 20px;display:inline}
div#HomeContentWrapper div.Inner div.HomeIntroduction h2 {color:#333;font-weight:normal;font-size:1.5em;margin:0 0 20px 0}
div#HomeContentWrapper div.Inner div.HomeIntroduction p {font-weight:normal;font-size:.8em;line-height:20px;clear:both}
div#HomeContentWrapper div.Inner h2 {color:#333;font-weight:normal;font-size:1.5em;float:left;margin:0 0 10px 30px}
div#HomeContentWrapper div.Inner div.HomeContent {clear:both;width:940px;padding:20px;float:left}
div#HomeContentWrapper div.Inner div.HomeContent ul.Channels {float:left;width:660px;background:White}
div#HomeContentWrapper div.Inner div.HomeContent ul.Channels li {float:left;width:330px;min-height:187px}
div#HomeContentWrapper div.Inner div.HomeContent ul.Channels li h3 {background:White;opacity:.8;font-weight:normal;float:left;line-height:36px;height:36px;padding:0 10px;margin:71px 0 0 0;position:absolute;font-size:1.6em}
div#HomeContentWrapper div.Inner div.HomeContent ul.Channels li h3:hover {opacity:1}
div#HomeContentWrapper div.Inner div.HomeContent ul.Channels li img {width:330px;height:107px;background:#999;display:block}
div#HomeContentWrapper div.Inner div.HomeContent ul li p {width:310px;margin:20px 10px;font-size:.8em;float:left;line-height:20px;display:inline}
div#HomeContentWrapper div.Inner div.HomeContent ul.Campaigns {float:right;width:240px}
div#HomeContentWrapper div.Inner div.HomeContent ul.Campaigns li {float:left;width:240px;height:178px;margin:0 0 10px 0}
div#HomeContentWrapper div.Inner div.HomeContent ul.Campaigns li h4 {width:240px;font-size:1em;font-weight:normal}
div#HomeContentWrapper div.Inner div.HomeContent ul.Campaigns li a img {border:none}
div#HomeContentWrapper div.Inner div.HomeContent ul.Campaigns li p {width:240px;margin:20px 0;font-size:.8em;line-height:20px;display:inline}
div#HomeContentWrapper div.Inner div.HomeContent ul.Campaigns li div.JohnDWood span a {position:absolute;width:224px;font-size:0.75em;padding:0 8px;color:#333;text-decoration:none}
div#HomeContentWrapper div.Inner div.HomeContent ul.Campaigns li div.JohnDWood span a strong {line-height:1.8em;font-size:2em}
div#HomeContentWrapper div.Inner div.HomeContent ul.Campaigns li div.JohnDWood a.Button {position:absolute;font-size:0.9em;width:110px;padding:0 0 0 5px;height:36px;line-height:33px;margin:137px 0 0 8px;background:url(/Content/Hetheringtons/Assets/Images/johndwood-homepage.jpg-button.png) no-repeat;text-decoration:none}
div#HomeContentWrapper div.Inner div.HomeContent ul.Campaigns li div.VideoButton span {position:absolute;width:224px;font-size:0.65em;padding:0;color:#000;text-decoration:none;margin:15px 0 0 0}
div#HomeContentWrapper div.Inner div.HomeContent ul.Campaigns li div.VideoButton span strong {line-height:1.8em;font-size:2em;background:#ececec;padding:9px 20px 10px 15px;border-top-right-radius:5px;border-bottom-right-radius:5px;-moz-border-radius-topright:5px;-moz-border-radius-bottomright:5px;}
div#HomeContentWrapper div.Inner div.HomeContent ul.Campaigns li div.VideoButton a.ButtonLeft {float:left;position:absolute;font-size:0.9em;width:110px;padding:0 0 0 15px;height:36px;line-height:33px;margin:137px 0 0 11px;background:url(/Content/MorrisDibben/Assets/Images/video-guide-button.png) no-repeat;text-decoration:none}
div#HomeContentWrapper div.Inner div.HomeContent ul.Campaigns li div.VideoButton a.ButtonRight {position:absolute;font-size:0.9em;width:110px;padding:0 0 0 15px;height:36px;line-height:33px;margin:137px 0 0 118px;background:url(/Content/MorrisDibben/Assets/Images/video-guide-button.png) no-repeat;text-decoration:none}
div#HomeContentWrapper div.Inner div.HomeContent ul.Campaigns li div.VideoButton a:hover {background:url(/Content/MorrisDibben/Assets/Images/video-guide-button-reverse.png) no-repeat}
div#HomeSearchContainer {float:left;position:static;padding:0;width:440px;margin:0 0 0 30px;height:110px}
div#HomeSearchContainer ul {float:left;height:36px;z-index:1;position:absolute}
div#HomeSearchContainer ul li {margin:0 4px 0 0;float:left}
div#HomeSearchContainer ul li a {height:36px;line-height:36px;padding:0 0 0 20px;float:left;text-shadow:0 1px White;outline:none;text-decoration:none}
div#HomeSearchContainer ul li a span {padding:0 20px 0 0;width:auto;float:left}
div#HomeSearchContainer div.One {overflow:hidden;width:440px;z-index:0;float:left;margin:35px 0 0 0;position:absolute;height:75px;padding:0}
div#HomeSearchContainer div.One div.Two {width:440px;float:right;height:75px;padding:0}
div#HomeSearchContainer div.One div.Two div.Three {width:420px;height:75px;float:left;margin:0 10px;padding:20px 0 0 0;display:inline}
div#HomeSearchContainer div.One div.Two div.Three span label {display:none}
div#HomeSearchContainer div.One div.Two div.Three span div.InputBg {width:420px;height:36px;line-height:36px;margin:0;padding:0;float:left}
div#HomeSearchContainer div.InputBg input {width:318px;height:18px;line-height:18px;padding:8px 5px;margin:0;float:left;border:none;border:Solid 1px #8f8f8f;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;color:#999;}
div#HomeSearchContainer div.InputBg input:focus {outline:none;box-shadow:0 0 5px #0099ff;-webkit-box-shadow:0 0 5px #0099ff;-moz-box-shadow:0 0 5px #0099ff}
div#HomeSearchContainer div.InputBg a {float:right;width:80px;height:36px;line-height:36px;text-align:center;color:White;text-decoration:none}
div#HomeSearchContainer div.InputBg a span {float:right;width:64px;padding:0 8px 0 0}
div#HomeSearchContainer p {display:none}
div#HomeSearchContainer div.PromotionAutocompleteResults {width:330px;position:absolute;margin:90px 0 0 10px;clear:both;padding:0;z-index:1}
div#HomeSearchContainer div.PromotionAutocompleteResults ul {width:330px;margin:0;padding:0}
div#HomeSearchContainer div.PromotionAutocompleteResults ul li {width:330px;margin:0;padding:0}
div#HomeSearchContainer div.PromotionAutocompleteResults ul li a {width:320px;display:block;float:left;line-height:20px;padding:5px;height:auto;color:#333;background:url(/images/home/home-auto-complete.png) left top no-repeat}
div#HomeSearchContainer div.PromotionAutocompleteResults ul li a:hover,
div#HomeSearchContainer div.PromotionAutocompleteResults ul li.Selected a {background-position:right top;color:#333}
div#HomeSearchContainer div.PromotionAutocompleteResults ul li.Last a {background-position:left bottom;border-top:1px Solid #ccc}
div#HomeSearchContainer div.PromotionAutocompleteResults ul li.Last a:hover,
div#HomeSearchContainer div.PromotionAutocompleteResults ul li.Last.Selected a {background-position:right bottom}
div#HomeSearchContainer div.PromotionAutocompleteResults ul li a em {font-weight:bold;font-style:normal}

/*Home Promotion*/
div#HomePromoContainer {padding:2px 0 0 0;margin:0;color:#333;height:250px;padding:0 0 0 0}
div#HomePromoContainer img {border:none;position:relative;left:-15px;}
div#HomePromoContainer div#HomePromoLeftCol {float:left;width:313px;font-size:1.3em;height:250px;padding:0;margin:0}
div#HomePromoContainer div#HomePromoLeftCol strong {font-size:1.6em;}
div#HomePromoContainer div#HomePromoRightCol {float:right;width:133px;height:250px;padding:0 5px 0 0;margin:0;font-size:0.9em}
div#HomePromoContainer div#HomePromoRightCol ul li{padding-top:40px}
div#HomePromoContainer div#HomePromoRightCol a {font-size:0.9em}
div#HomePromoContainer div#HomePromoLeftCol p,
div#HomePromoContainer div#HomePromoRightCol p {color:#666}

/*Global 2, 3 Column*/
div#GlobalContentWrapper {display:block;padding:40px 0 0 0; }
div#GlobalContentWrapper div.Inner, div#GlobalContentWrapper #GlobalContainer  {width:960px;margin:auto;clear:both;position:relative;top:-33px; }

/*2 Column Setter*/
div#GlobalContainer div#ResultsToolsContainer {width:306px;float:left;margin:0px 0 0 0;display:inline;overflow-x:hidden}
div#ResultsToolsContainer {width:306px;float:left; /*margin:0px 0 0 313px;*/ margin:0px 0 0 0px; display:inline;overflow-x:hidden}
div#GlobalPropertyDetails {width:644px;float:left;margin:0;display:inline}
div#GlobalLeftColumn {width:306px;float:left;margin:0 0 0 0;display:inline;overflow:hidden}
div#GlobalRightColumn {width:654px;float:right;margin:0 0 0 0;display:inline}

/*1 Column Setter*/
div#GlobalSingleColumn {width:960px;float:left;margin:0 0 0 0;display:inline; }

/*Search Auto Complete in page*/
div#SearchContainer {float:left;position:static;padding:0;width:306px;height:90px}
div#SearchContainer ul {float:left;height:32px;z-index:1;position:absolute;margin:0;display:inline}
div#SearchContainer ul li {margin:0 3px 0 0;float:left}
div#SearchContainer ul li a {color:White;height:32px;line-height:32px;padding:0 0 0 20px;float:left;outline:none;text-decoration:none}
div#SearchContainer ul li a span {padding:0 20px 0 0;width:auto;float:left}
div#SearchContainer.Buying ul li a#Buy,
div#SearchContainer.Renting ul li a#Rent,
div#SearchContainer.Selling ul li a#Sell {color:#333!important;cursor:default}
div#SearchContainer div.One {border-top:Solid 1px #ddd;border-left:Solid 1px #ddd;border-bottom:Solid 1px #ddd;overflow:hidden;width:305px;z-index:0;float:left;margin:32px 0 0 0;position:absolute;height:58px;padding:0; }
div#SearchContainer div.One div.Two div.Three div label {display:none}
div#SearchContainer div.One div.Two div.Three div.InputBg {height:36px;line-height:36px;margin:11px 10px;display:inline;padding:0;float:left}
div#SearchContainer div.InputBg input {width:185px;height:18px;line-height:18px;padding:8px 5px;margin:0;float:left;border:Solid 1px #CCC;color:#666}
div#SearchContainer div.InputBg input:focus {outline:none; }
div#SearchContainer div.InputBg a { border-color:rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2) ;border-style:solid solid none;border-width:1px 1px medium;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.25) inset, 0 1px 1px rgba(0, 0, 0, 0.3);cursor:pointer;display:block;font-size:0.8em;height:35px;margin:0 0 0 5px;text-decoration:none;text-transform:uppercase;width:80px;float:left;text-align:center;background-color:#333;color:#FFF;border-radius:2px;-moz-border-radius:2px;-webkitborder-radius:2px; }
div#SearchContainer div.InputBg a:focus { outline:none; }
div#SearchContainer div.InputBg a span {float:right;width:64px;padding:0 8px 0 0}
div#SearchContainer p {display:none}

div#SearchContainer div.AutocompleteResults {width:282px;position:absolute;margin:78px 0 0 11px;clear:both;padding:0;z-index:1000}
div#SearchContainer div.AutocompleteResults ul { width:282px;margin:0;padding:0;height:auto;box-shadow:0 5px 6px rgba(0, 0, 0, 0.25);-webkit-box-shadow:0 5px 6px rgba(0, 0, 0, 0.25);-moz-box-shadow:0 5px 6px rgba(0, 0, 0, 0.25); }
div#SearchContainer div.AutocompleteResults ul li { width:282px;margin:0;padding:0}
div#SearchContainer div.AutocompleteResults ul li a { width:266px;display:block;text-shadow:1px 1px White;display:block;float:left;line-height:20px;padding:8px;height:auto;color:#333;background:#FFF;box-shadow:none;text-transform:none;font-size:1em; }
div#SearchContainer div.AutocompleteResults ul li a:hover,
div#SearchContainer div.AutocompleteResults ul li.Selected a { background:#EEE; }
div#SearchContainer div.AutocompleteResults ul li.Last a {background-position:left bottom;border-top:1px Solid #ccc}
div#SearchContainer div.AutocompleteResults ul li.Last a:hover,
div#SearchContainer div.AutocompleteResults ul li.Last.Selected a {background-position:right bottom}
div#SearchContainer div.AutocompleteResults ul li a em {font-weight:bold;font-style:normal }

div#NoPropertiesNotification {width:600px;height:auto}
div#NoPropertiesNotification div.FadedBackground {background:#FFF}
div#NoPropertiesNotification div.FadedBackground div.Header {border-top:Solid 1px #d8d8d8;background:#e3e3e4 url(/images/map/map-header-bg.gif) repeat-x bottom;height:auto;font-weight:normal;color:#333;width:auto;padding:10px 100px}
div#NoPropertiesNotification div.FadedBackground div.Header h6 {margin:0;padding:0;font-size:1.1em;font-weight:normal}
div#NoPropertiesNotification div.FadedBackground div.Header img {float:left;width:27px;height:25px;padding-right:10px;margin:0 0 0 73px}
div#NoPropertiesNotification div.FadedBackground ul {list-style-type:none;margin:0;padding:20px 0 20px 0;width:100%;font-size:0.9em;color:#333;line-height:20px}
div#NoPropertiesNotification div.FadedBackground ul li {background:url(/images/icons/results-bullet.gif) no-repeat left 8px;padding:0 0 0 12px;width:300px;margin-left:186px}

/*Search Radius Slider*/
fieldset#DistanceSlider a {text-decoration:none}
fieldset#DistanceSlider {height:74px;overflow:hidden;border:0;margin:0;padding:10px 0 20px 0;background:#f2f2f2;border-left:Solid 1px #ddd;border-bottom:Solid 1px #ddd;clear:both;background:#FFF; }
fieldset#DistanceSlider label {color:#333;margin:0 10px;display:block;font-size:.8em}
fieldset#DistanceSlider div.NumbersContainer {width:320px;margin:10px 0 0 12px;position:absolute;float:left}

fieldset#DistanceSlider div.NumbersContainer span {font-weight:normal;font-size:0.8em;width:14.2%;height:20px;display:inline-block;float:left;text-align:left;margin:0;padding:0}
fieldset#DistanceSlider div#Container {clear:both;height:9px;clear:both;margin:35px 12px 0 12px;}
fieldset#DistanceSlider div#RadiusSlider {clear:both;width:100%;height:8px;margin:0;cursor:pointer;background:#F8F8F8;border-radius:0!important;-webkit-box-shadow: inset 0px 0px 4px 0px rgba(50, 50, 50, 0.2);-moz-box-shadow: inset 0px 0px 4px 0px rgba(50, 50, 50, 0.2);box-shadow: inset 0px 0px 4px 0px rgba(50, 50, 50, 0.2);border:#CCC 1px solid; }
fieldset#DistanceSlider div#RadiusSlider div.SliderBg {clear:both;margin:0;display:block;width:285px;height:9px;padding:0}
fieldset#DistanceSlider div#RadiusSlider a.ui-slider-handle span#SliderDynamicLabel {color:White;width:34px!important;float:left;z-index:100;position:absolute;top:26px;font-size:.8em;display:inline-block;text-align:center;width:17px;line-height:18px;height:18px;margin:0 0 0 -11px;background:Black;-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px;filter:alpha(opacity=70);opacity:.7;-moz-opacity:.7}
fieldset#DistanceSlider div#RadiusSlider div.ui-slider-range-min {width:50px;height:8px;position:absolute;display:block;margin:0;float:left;-webkit-box-shadow: inset 0px 0px 4px 0px rgba(50, 50, 50, 0.2);-moz-box-shadow: inset 0px 0px 4px 0px rgba(50, 50, 50, 0.2);box-shadow: inset 0px 0px 4px 0px rgba(50, 50, 50, 0.2); }
fieldset#DistanceSlider .ui-corner-all {border:none}
.ui-slider .ui-slider-handle {position:absolute;cursor:pointer;display:block;height:20px;width:8px;z-index:1;margin:-2px -4px 0 -4px;border-radius:20%;-webkit-box-shadow: -1px 3px 3px 0px rgba(50, 50, 50, 0.3), 0px 0px 2px 0px rgba(50, 50, 50, 0.1);-moz-box-shadow: -1px 3px 3px 0px rgba(50, 50, 50, 0.3), 0px 0px 2px 0px rgba(50, 50, 50, 0.1);box-shadow: -1px 3px 3px 0px rgba(50, 50, 50, 0.32), 0px 0px 2px 0px rgba(50, 50, 50, 0.1);border:#CCC 1px solid!important;background:#FFF!important; }
.ui-slider .ui-slider-range {position:absolute;z-index:1;font-size:.7em;display:block;border:0;background-position:0 0}
.ui-widget-content {background:none}

/*Search Radius Filters*/
div#ResultsToolsContainer fieldset.Filter {border:0;margin:0;padding:10px 10px 5px 10px;background:#f2f2f2;border-left:Solid 1px #ddd;clear:both;font-style:italic;color:#333;font-size:.8em;background:#FFF;}
div#ResultsToolsContainer fieldset.Filter.Last {border-bottom:Solid 1px #ddd;border-bottom-left-radius:5px;-moz-border-radius-bottomleft:5px;-webkit-border-bottom-left-radius:5px}
div#ResultsToolsContainer fieldset.Filter label {color:#333;display:inline-block;width:73px;font-style:normal; position:relative; }
div#ResultsToolsContainer fieldset.Filter select {display:inline-block;width:90px;font-size:0.9em;padding:2px 0 2px 0;margin:0 2px 0 2px; }
div#ResultsToolsContainer fieldset.Filter select.Wide {width:auto}
div#ResultsToolsContainer fieldset.Filter label span {font-size:7px; position:absolute;left:0; top:13px;color:#acacac; font-style:italic;}
div#ResultsToolsContainer fieldset.Filter .filter-check-label { width:auto;margin:3px 0 0 0;cursor:pointer; }
div#ResultsToolsContainer fieldset.Filter .filter-check { float:left;margin:0 10px 0 0;cursor:pointer; }

/*Right Column Advert*/
div#ResultsToolsContainer div.GenericAdvert a {margin:10px 10px 0 0;background:url(/images/global/filters-bg.png) bottom repeat-x;width:274px;float:left;padding:10px;border:Solid 1px #ddd;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}
div#ResultsToolsContainer div.GenericAdvert a img {border:none;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}
div#GlobalLeftColumn div.GenericAdvert a {margin:10px 10px 0 0;background:url(/images/global/filters-bg.png) bottom repeat-x;width:274px;float:left;padding:10px;border:Solid 1px #ddd;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}
div#GlobalLeftColumn div.GenericAdvert a img {border:none;width:274px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}
div#GlobalLeftColumn div.GenericAdvert,div#GlobalLeftColumn div.GenericAdvert a,div#GlobalLeftColumn div.GenericAdvert a img {outline:none}

/*Top Tabs*/
ul#TopTabs.SeoDirectory li a, ul#TopTabs.Content li.NoIcon a, ul#TopTabs.MyAccount li a, ul#TopTabs.SavedSearches li a {padding:0 0 0 15px}
ul#TopTabs.SeoDirectory li a span, ul#TopTabs.Content li.NoIcon a span, ul#TopTabs.MyAccount li a span, ul#TopTabs.SavedSearches li a span {padding:0 15px 0 0}
ul#TopTabs { z-index:1;margin:0;display:block;position:absolute; }
div#GlobalPropertyDetails div#GlobalListingTabsContainer ul#TopTabs {float:left;height:32px;z-index:1;position:absolute;margin:0;display:inline}
ul#TopTabs li {margin:0 3px 0 0;float:left}
ul#TopTabs li.NoIcon { background-image:none; }
ul#TopTabs li a {color:#333;height:32px;padding:0 0 0 33px;float:left;text-decoration:none}
ul#TopTabs li a span {padding:0 10px 0 0;width:auto;float:left}
ul#TopTabs .NoIcon.ReviewsTab a { padding:0 0 0 10px; }

div#ResultsListingContainer div#GlobalListingTabsContainer ul li{padding:0}
div.details{float:right}

div#GlobalListingResultsContainer {background:#fff;float:left;clear:both;float:left;margin:0;width:652px;border-right:1px solid #ddd;border-left:1px solid #ddd}
div#GlobalListingResultsContainer div.One{display:table-cell;float:left;height:auto;padding:0;position:relative;width:652px;z-index:100}
div#GlobalListingResultsContainer div#LocationNotFound, div#GlobalListingResultsContainer div#NoResults{float:left;padding:30px 0 30px 0;}
div#GlobalListingResultsContainer div#LocationNotFound div.Header, div#GlobalListingResultsContainer div#NoResults div.Header { margin:auto;width:450px;overflow:hidden;padding:20px 0 15px 25px; }
div#GlobalListingResultsContainer div#LocationNotFound div.Header strong, div#GlobalListingResultsContainer div#NoResults div.Header strong { color:#333;font-weight:normal;width:100%;margin:0; }
div#GlobalListingResultsContainer div#LocationNotFound div.Header strong span, div#GlobalListingResultsContainer div#NoResults div.Header strong span{color:#333;font-weight:bold}
div#GlobalListingResultsContainer div#LocationNotFound input, div#GlobalListingResultsContainer div#NoResults input{background:url(/images/results/not-found/not-found-search-input-fg.gif) no-repeat 0 0;border:0 none;display:inline;float:left;font-size:1em;height:20px;margin:0 12px 0 150px;padding:8px 6px;width:252px}
div#GlobalListingResultsContainer div#LocationNotFound a:hover, div#GlobalListingResultsContainer div#NoResults a:hover{ background:url(/images/home/home-search-button-bg.gif) repeat 0 0;float:left;width:36px;height:36px}
div#GlobalListingResultsContainer div#LocationNotFound ul.List, div#GlobalListingResultsContainer div#NoResults ul.List{ border:none;clear:both;color:#333;line-height:1.4em;list-style:none;margin:0 0 24px 105px;padding:0;width:360px;z-index:-1000; }
div#GlobalListingResultsContainer div#LocationNotFound ul.List li, div#GlobalListingResultsContainer div#NoResults ul.List li{background:url(/images/global/GlobalUnbrandedBullet.gif) no-repeat left 10px;display:block;float:left;margin:0;padding:0 0 5px 12px;width:360px; }
div#GlobalListingResultsContainer div#LocationNotFound.Buying div.AutocompleteResults{display:inline;float:left;font-size:0.95em;margin:0 0 0 174px;padding:0;position:relative;width:264px}
div#GlobalListingResultsContainer div#LocationNotFound.Buying div.AutocompleteResults ul{border:none;display:inline;float:left;margin:0;padding:0;position:absolute;width:264px;height:auto;list-style:none;z-index:100}
div#GlobalListingResultsContainer div#LocationNotFound.Buying div.AutocompleteResults ul li{border-bottom:none;border-top:1px solid #D9D9D9;clear:both;display:inline;float:left;height:30px;line-height:30px;margin:0;overflow:hidden;padding:0;width:264px}
div#GlobalListingResultsContainer div#LocationNotFound.Buying div.AutocompleteResults ul li a{background:url(/images/results/not-found/predictive-normal-bg.gif) no-repeat center bottom;color:#333;display:block;text-indent:8px;width:264px}
div#GlobalListingResultsContainer div#LocationNotFound.Buying div.AutocompleteResults ul li a em{font-style:normal;font-weight:bold}

/*Top Tools*/
div#GlobalPropertyDetails ul#TopTools {float:right;height:25px;z-index:1;margin:13px 10px 0 0;font-size:.8em}
div#GlobalPropertyDetails ul#TopTools li {margin:0 0 0 5px;float:left}
div#GlobalPropertyDetails ul#TopTools li a {height:25px;line-height:25px;display:inline-block;padding:0 0 0 22px;margin:0;cursor:pointer;text-decoration:none}
div#GlobalPropertyDetails ul#TopTools li a span {height:25px;line-height:25px;padding:0 8px 0 0;display:inline-block}
div#GlobalPropertyDetails ul#TopTools li a.Credit {color:White;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;height:21px;line-height:21px;border:Solid 1px #0089b7;padding:0 8px;margin:1px 0 0 0;background:#0e9ecd;width:auto}
div#GlobalPropertyDetails ul#TopTools li a.Credit:hover {background:White;border:dotted 1px White;color:#0089b7;-moz-box-shadow: inset 0 0 1px 1px #ccc;-webkit-box-shadow: inset 0 0 1px 1px #ccc;box-shadow:inset 0 0 1px 1px #ccc}

/*Results & Find an Agent Global*/
div#SearchResultsContainer {margin:2px 0 0 0;width:654px;float:left;}
div#SearchResultsContainer div#Information,
div.ResultsWrapper {font-size:.8em;color:#333;padding:10px;min-height:38px;border-top:#DDD 1px solid;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;margin:-1px 0 0 0;}
div#GlobalListingDidYouMeanContainer, 
div#LargeMapListingToolsContainer{color:#333;padding:10px;min-height:38px;border-top:Solid 1px #ddd;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;}
div#LargeMapListingToolsContainer{width:629px}
div#SearchResultsContainer div#Information h1,
div.ResultsWrapper h1 {font-size:inherit;font-weight:normal;display:inline;line-height:38px;margin:0}
div#SearchResultsContainer div#Information h1 span { font-size:inherit;font-size:1.2em; }
div#SearchResultsContainer div#Information h1 span span,
div#SearchResultsContainer div#Information div#NumberOfProperties {font-size:inherit;font-weight:normal;display:inline;line-height:38px;margin:0}
div#SearchResultsContainer div#Information div#NumberOfProperties span {font-size:1.3em;font-weight:bold;line-height:1px}
div#SearchResultsContainer div#Information a.DidYouMeanButton {display:inline;font-size:1em;margin:0 0 0 5px;text-decoration:none}
div#SearchResultsContainer div#Information a.DidYouMeanButton span {z-index:1}
div#SearchResultsContainer div#Information a.DidYouMeanButton {font-size:11px;margin:6px 0 0 19px;padding:5px 8px 10px 22px;background:url(/images/results/version-2.0/did-you-mean-sprite.png) no-repeat right top}
div#SearchResultsContainer div.DidYouMeanWrapper {font-size:1em;color:#333;padding:20px 10px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;background:#fefce5;clear:both}
div#SearchResultsContainer div.DidYouMeanWrapper a.HideTip {text-decoration:none;float:right;height:20px;line-height:20px;padding:0 30px 0 0;background:url(/images/icons/close-white-bg-sprite.gif) no-repeat right top;color:#333; }
div#SearchResultsContainer div.DidYouMeanWrapper a.HideTip:hover {background-position:right bottom}
div#SearchResultsContainer div.DidYouMeanWrapper h6 {font-size:inherit;font-weight:normal;display:inline}
div#SearchResultsContainer div.DidYouMeanWrapper ul {line-height:20px;margin:15px 0 0 0; }
div#SearchResultsContainer div.DidYouMeanWrapper ul li a {text-decoration:none}
div#SearchResultsContainer div.Paging {float:left;font-size:.8em;width:632px;color:#333;padding:5px 10px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;background:White url(/images/global/filters-bg.png) bottom repeat-x}
div#SearchResultsContainer div.Paging#Bottom {border-bottom-left-radius:5px;-moz-border-radius-bottomleft:5px;-webkit-border-bottom-left-radius:5px;border-bottom-right-radius:5px;-moz-border-radius-bottomright:5px;-webkit-border-bottom-right-radius:5px}
div#SearchResultsContainer div.Paging div.Inner {float:left;width:auto}
div#SearchResultsContainer div.Paging div.Inner button {background:none;border:0;padding:0 15px 0 0;margin:0 10px;display:inline;font-size:.9em;background:url(/images/results/sort-arrows-sprite.gif) no-repeat}
div#SearchResultsContainer div.Paging div.Inner button.Descending {background-position:right -25px;}
div#SearchResultsContainer div.Paging div.Inner button.Ascending {background-position:right -55px;}
div#SearchResultsContainer div.Paging div.Inner button.SelectedDescending {color:#333;font-weight:bold;background-position:right 5px}
div#SearchResultsContainer div.Paging div.Inner button.SelectedAscending{color:#333;font-weight:bold;background-position:right -85px}
div#SearchResultsContainer div.Paging div.Inner button.SelectedDescending:hover,
div#SearchResultsContainer div.Paging div.Inner button.Ascending:hover,
div#SearchResultsContainer div.Paging div.Inner button.Descending:hover,
div#SearchResultsContainer div.Paging div.Inner button.SelectedAscending:hover {color:#999}
div#SearchResultsContainer div.Paging div.Inner button#ForSaleListOrderByDistance {background:none;padding:0}
div#SearchResultsContainer div.Paging ul {float:right;margin:1px 0 0 0}
div#SearchResultsContainer div.Paging ul li {float:left;margin:0 0 0 10px}
div#SearchResultsContainer div.Paging ul li a {text-decoration:none}
div#SearchResultsContainer div.Paging ul li.Selected a {font-weight:bold;color:#666}
div#SearchResultsContainer ul#Key {height:25px;line-height:25px}
div#SearchResultsContainer ul#Key li {background:url(/images/map/key-properties-icons-sprite.gif) no-repeat;line-height:inherit;padding:0 0 0 24px;margin:0 20px 0 0;float:right}
div#SearchResultsContainer ul#Key li.Single {background-position:0 0}
div#SearchResultsContainer ul#Key li.Multiple {background-position:0 -24px}
div#SearchResultsContainer ul#Key li.Center {background-position:0 -48px}
div#ResultsListingContainer div#GlobalListingPagingContainerOne div.Two{float:left;}
div#ResultsListingContainer div#GlobalListingPagingContainerOne div.One ul{float:right;}
div#ResultsListingContainer div#GlobalListingPagingContainerOne ul {float:right;margin:1px 0 0 0}
div#ResultsListingContainer div#GlobalListingPagingContainerOne ul li {float:left;margin:0 0 0 10px}
div#ResultsListingContainer div#GlobalListingPagingContainerOne ul li.Selected a {font-weight:bold;color:#333}
div#ResultsListingContainer div#GlobalListingPagingContainerOne {font-size:0.8em;width:632px;color:#333;background-color:#F8F8F8;padding:8px 10px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;height:16px}

div#FindAnAgent div#LocationNotFound div#BodySearchContainer {margin:25px 0 0 117px;}
div#LocationNotFound div.Header {font-size: 2em;margin: 0 0 0 117px;width: 420px; padding:40px 0 0 0; color:#333;}
div#LocationNotFound div.Header strong {font-weight:normal;line-height:1em; }
div#LocationNotFound div#BodySearchContainer label {display:none}
div#LocationNotFound div#BodySearchContainer div.InputBg {width:420px;height:36px}
div#LocationNotFound div#BodySearchContainer div.InputBg input {background:none;width:318px;height:18px;line-height:18px;padding:8px 5px;margin:0;float:left;border:none;border:Solid 1px #DDD;color:#666; }
div#LocationNotFound div#BodySearchContainer div.InputBg input:focus {outline:none; }
div#LocationNotFound div#BodySearchContainer div.InputBg a { background-image:none;border-color:rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2) ;border-style:solid solid none;border-width:1px 1px medium;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.25) inset, 0 1px 1px rgba(0, 0, 0, 0.3);cursor:pointer;display:block;font-size:0.8em;height:35px;margin:0 0 0 5px;text-decoration:none;text-transform:uppercase;width:80px;float:left;text-align:center;background-color:#333;color:#FFF;border-radius:2px;-moz-border-radius:2px;-webkitborder-radius:2px; }
div#LocationNotFound div#BodySearchContainer div.InputBg a:focus { outline:none; }
div#LocationNotFound div#BodySearchContainer div.InputBg a:hover { background-image:none; }
div#LocationNotFound div#BodySearchContainer div.InputBg a span {float:right;width:64px;padding:0 8px 0 0}
div#GlobalListingResultsContainer div.One div#LocationNotFound {border-bottom:Solid 1px #DDD;width:100%; }
div#GlobalListingResultsContainer div.One div#LocationNotFound ul {clear:both;padding:28px 0 40px 0;margin:0 0 0 118px;width:416px; }
div#GlobalListingResultsContainer div.One div#LocationNotFound ul li {margin:0 0 10px 0;color:#333;font-size:1em}
div#GlobalListingResultsContainer div.One div#LocationNotFound div#BodySearchContainer div.AutocompleteResults {width:330px;position:absolute;clear:both;padding:0;z-index:1000;margin:-1px 0 0 0; }
div#GlobalListingResultsContainer div.One div#LocationNotFound div#BodySearchContainer div.AutocompleteResults ul { width:330px;overflow:hidden;margin:0;padding:0;height:auto;box-shadow:0 5px 6px rgba(0, 0, 0, 0.25);-webkit-box-shadow:0 5px 6px rgba(0, 0, 0, 0.25);-moz-box-shadow:0 5px 6px rgba(0, 0, 0, 0.25); }
div#GlobalListingResultsContainer div.One div#LocationNotFound div#BodySearchContainer div.AutocompleteResults ul li { width:330px;margin:0;padding:0}
div#GlobalListingResultsContainer div.One div#LocationNotFound div#BodySearchContainer div.AutocompleteResults ul li a { width:312px;display:block;text-shadow:1px 1px White;display:block;float:left;line-height:20px;padding:8px;height:auto;color:#333;background:#FFF;box-shadow:none;text-transform:none;font-size:1em;border-top:1px Solid #DDD;border-left:1px Solid #DDD;border-right:1px Solid #DDD; }
div#GlobalListingResultsContainer div.One div#LocationNotFound div#BodySearchContainer div.AutocompleteResults ul li a:hover,
div#GlobalListingResultsContainer div.One div#LocationNotFound div#BodySearchContainer div.AutocompleteResults ul li.Selected a { background:#EEE; }
div#GlobalListingResultsContainer div.One div#LocationNotFound div#BodySearchContainer div.AutocompleteResults ul li a em {font-weight:bold;font-style:normal }

/*Results*/
div.PromotionWrapper {border-left:Solid 1px #ccc;border-right:Solid 1px #ccc;border-bottom:Solid 1px #ccc;padding:10px;background:url(/images/global/filters-bg.png) repeat-x bottom;float:left;width:632px}
div.PromotionWrapper img {width:32px;height:32px;float:left;margin:0 15px 0 0}
div.PromotionWrapper p {text-transform:uppercase;line-height:16px;font-size:15px;font-weight:bold;margin:0;padding:0;float:left;color:#333}
div.PromotionWrapper p span {text-transform:none;font-weight:normal;color:#333;font-size:0.8em}
div.PromotionWrapper a {float:right;background:Transparent url(/images/icons/close-icon.png) no-repeat scroll right center;height:18px;line-height:18px;margin:-1px 0 0 0;padding:0 23px 0 0}
div.PromotionWrapper a.Link{background:none;float:none;font-size:inherit;font-weight:normal;height:auto;line-height:inherit;margin:0;padding:0}
div#DetailsContainer div#Description ul#PromitionalBanner li{list-style:none}

/* Added by Russ, Aaron can tidy as required. */
div#ResultsListingContainer div#NoFavouritesHint {float:left;padding:0;width:652px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;font-size:.8em;color:#333;background:#F9F9F9}
div#ResultsListingContainer div#NoFavouritesHint h4 {font-size:1.5em;margin:40px 20px 20px 60px}
div#ResultsListingContainer div#NoFavouritesHint ul {margin:20px 40px 40px 60px}
div#ResultsListingContainer div#NoFavouritesHint ul li {list-style-type:disc}
div#ResultsListingContainer div#Loading {background:url(/images/results/results-overlay.png);z-index:200;padding:80px 0 0 0;position:absolute;display:table-cell;text-align:center;font-weight:bold;float:left;width:652px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;font-size:.8em;color:#333;}
div#ResultsListingContainer ul#ResultsList {float:left;width:652px;border-right:Solid 1px #ddd;font-size:.8em;color:#333;padding:0;background:White}
div#ResultsListingContainer ul#ResultsList div#SavedSearchNotification div.FadedBackground {border-bottom:1px solid #ccc;width:632px;margin:0;display:inline;float:left;padding:10px;background:#e4f3fa url(/images/results/saved-results-bg.jpg) repeat-x center top}
div#ResultsListingContainer ul#ResultsList div#SavedSearchNotification div.FadedBackground h6 {font-size:1.4em;padding:0 0 0 49px;background:Transparent url(/images/results/saved-results-tick.jpg) no-repeat left top;min-height:39px;line-height:39px;color:#333;font-weight:normal}
div#ResultsListingContainer ul#ResultsList {float:left;width:652px;min-height:330px}
div#ResultsListingContainer ul#ResultsList li {float:left;background:Transparent;border-bottom:Solid 1px #e5e5e5;width:652px;padding:0}
div#ResultsListingContainer ul#ResultsList li ul.PromoIcons {width:27px;height:auto;margin:16px 0 0 7px;padding:0;position:absolute!important;float:left;z-index:1;background:Transparent}
div#ResultsListingContainer ul#ResultsList li ul.PromoIcons li {width:27px;height:18px;margin:0 0 3px 0;padding:0;border:none;background:Transparent}

div#ResultsListingContainer ul#ResultsList li div.SSTC, div#ResultsListingContainer ul#ResultsList li div.LetAgreed, div#ResultsListingContainer ul#ResultsList li div.UnderOffer, div#ResultsListingContainer ul#ResultsList li div.Sold { position: absolute; text-align: center; margin: 87px 0 0 13px; z-index: 1; width: 152px; background: #c71d1d; padding: 0; height: 26px; line-height: 26px; clear: both; color:#FFF;font-size: 1em; }
div#ResultsListingContainer ul#ResultsList li div.SSTC strong, div#ResultsListingContainer ul#ResultsList li div.LetAgreed strong, div#ResultsListingContainer ul#ResultsList li div.UnderOffer strong, div#ResultsListingContainer ul#ResultsList li div.Sold strong  {text-transform:uppercase;font-size:1.1em}

div#ResultsListingContainer ul#ResultsList li a img { position:absolute;margin:10px;width:152px;height:100px;border:#DDD 1px solid;padding:2px;float:left;background-color:#FFF; }

div#GlobalContentWrapper ul.One li div.inner-photo-wrap div.LetAgreed {position:absolute;text-align:center;margin:86px 0 0 14px;z-index:1;width:152px;border-top:Solid 1px #dd2326;border-bottom:Solid 1px #971716;background:#c71d1d url(/images/details/details-sstc-bg.gif) bottom repeat-x;padding:0;height:26px;line-height:26px;clear:both;color:White;text-shadow:-1px -1px 1px #891716;font-size:1em}
div#GlobalContentWrapper ul.One li div.inner-photo-wrap div.LetAgreed strong {text-transform:uppercase;font-size:1.1em}
div#ResultsListingContainer ul#ResultsList li a:hover img {border:Solid 1px #999;-moz-box-shadow:0 0 4px #ccc;-webkit-box-shadow:0 0 4px #ccc;box-shadow:0 0 4px #ccc}
div#ResultsListingContainer ul#ResultsList li div.Two a span.result-price span.pricereduced, div#ResultsListingContainer ul#ResultsList li div.Two a span.result-price span.reduced-price {background:#EBF8CC;color:#97B136;font-size:0.9em;font-weight:normal;margin:0 0 0 5px;text-decoration:line-through}
div#ResultsListingContainer ul#ResultsList li div.Two a span.result-price span.source-price{background:#fff;color:#000;font-size:0.9em;font-weight:normal;margin:0 0 0 5px;text-decoration:none}
div#ResultsListingContainer ul#ResultsList li div.Two {margin:10px 0 0 190px;top:0;padding:0;min-height:120px;}
div#ResultsListingContainer ul#ResultsList li div.Two a {text-decoration:none;}
div#ResultsListingContainer ul#ResultsList li div.Two a span.result-price { font-size:2em;line-height:26px; }
div#ResultsListingContainer ul#ResultsList li div.Two a span.result-price:hover { text-decoration:underline; }
div#ResultsListingContainer ul#ResultsList li div.Two h2 {font-size:1.5em;font-weight:normal; }
div#ResultsListingContainer ul#ResultsList li div.Two h2 a {color:#333; }
div#ResultsListingContainer ul#ResultsList li div.Two h2 a span { font-size:inherit;color:#333;font-size:0.8em!important; }
div#ResultsListingContainer ul#ResultsList li div.Two p { color:#333;margin:5px 0;padding:5px 10px 0 0;line-height:17px}
ul#ResultsList li div.Two .bed-bath-icons { display:none!important; }

div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper {float:left;padding:0 10px;width:632px;height:40px;margin:10px 0 0 0}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper a.photo-no {border:Solid 1px #DDD;width:126px;padding:0 0 0 32px;height:27px;line-height:27px;text-align:left;position:absolute;float:left;background-image:url(/images/results/listing-buttons-bg-photos.png);background-repeat:no-repeat;background-position:8px center;color:#333;}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper ul {position:absolute;float:left;margin:0 0 0 180px;padding:0;width:455px;min-height:29px;height:29px}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper div.NavBar_ModeSelectorControl ul {margin:0 0 0 0;height:auto;}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper ul li {float:left;border:none;margin:0 5px 0 0;padding:0;width:auto;height:29px;display:inline-block}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper ul li a { border:Solid 1px #DDD;padding:0 10px 0 10px;height:27px;display:inline-block;width:auto;line-height:27px;background-repeat:no-repeat;text-decoration:none;font-size:1em;color:#333; }
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper ul li.ReadMore { float:right; }
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper ul li.ReadMore a { color:#FFF;border-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2) !important;border-style: solid solid none;border-width: 1px 1px medium;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.25) inset, 0 1px 1px rgba(0, 0, 0, 0.3); }
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper ul li.ShowMiniMap a {background-position:2px -27px;}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper ul li.Favourite a {background-position:2px -54px;}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper ul li.ContactAgent a {background-position:2px -81px;}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper ul.Buttons li a:hover {height:27px}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper a.photo-no,
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper ul.Buttons li a { background-color:#F8F8F8;text-decoration:none;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px; }
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper a.photo-no:hover,
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper ul.Buttons li a:hover { background-color:#DDD; }

div#ResultsListingContainer ul#ResultsList li.PremiumDisplay {background-color:#EBF6FB;background-image:url(/images/results/results-premium-listing.png);background-repeat:no-repeat;background-position:518px top; }
div#ResultsListingContainer ul#ResultsList li.PremiumDisplay a.Image img {border:Solid 1px #999}
div#ResultsListingContainer ul#ResultsList li.PremiumDisplay div.Details h3,
div#ResultsListingContainer ul#ResultsList li.PremiumDisplay div.Details p, div#ResultsListingContainer ul#ResultsList li.PremiumDisplay .result-price {color:#333;}
div#ResultsListingContainer ul#ResultsList li.PremiumDisplay .prop-button-wrapper .photo-no, div#ResultsListingContainer ul#ResultsList li.PremiumDisplay .Buttons a { color:#333; }
div#GlobalListingPagingContainerTwo div.One ul li {margin:0 0 0 8px;padding:0 2px;float:left}

/* GALLERY VIEW */
ul#GalleryList { overflow:hidden;list-style:none;margin:0;padding:6px 0 6px 7px;color:#333; }
ul#GalleryList > li { width:200px;height:340px;border:#ddd 1px solid;float:left;margin:5px;position:relative; }
ul#GalleryList > li a:hover { text-decoration:none; }
ul#GalleryList > li .One { width:200px;height:340px; }
ul#GalleryList > li .One h2 { font-size:1.1em; }
ul#GalleryList > li .One p, ul#GalleryList > li .One .photo-no, ul#GalleryList > li .Two .Close, ul#GalleryList > li .FullMiniMap, ul#GalleryList > li .prop-button-wrapper ul li.ShowMiniMap { display:none; }
ul#GalleryList > li .One .inner-photo-wrap { position:relative;width:188px;height:120px;margin:6px 6px 10px 6px;background:#EEE; }
ul#GalleryList > li .One .inner-photo-wrap img { border:0;width:188px;height:120px; }
ul#GalleryList > li .Two { margin:0 6px 0 6px; }
ul#GalleryList > li .Two a { font-size:0.9em; } 
ul#GalleryList > li .Two .result-price { font-weight:normal;font-size:1.6em; }
ul#GalleryList > li .Two .result-address { color:#333;font-weight:normal;font-size:1em; }
ul#GalleryList > li .Two h2 { font-weight:normal;margin:5px 0 0 0; }
ul#GalleryList > li .Two h2 a { color:#333; }
ul#GalleryList > li .Two h2 .result-address { display:block;margin:5px 0 0 0;font-weight:normal; }
ul#GalleryList > li .prop-button-wrapper .Buttons { width:188px;position:absolute;bottom:6px;left:6px;margin:0;padding:0;height:30px; }
ul#GalleryList > li .prop-button-wrapper .Buttons li { float:left; }
ul#GalleryList > li .prop-button-wrapper ul li a { text-indent:-9999px; }
ul#GalleryList > li .prop-button-wrapper ul li.ReadMore { float:right;margin:0 0 0 22px;border:Solid 1px #DDD;height:27px;display:inline-block;width:auto;line-height:27px;background-repeat:no-repeat;text-decoration:none;border-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2) !important;border-style: solid solid none;border-width: 1px 1px medium;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.25) inset, 0 1px 1px rgba(0, 0, 0, 0.3);background-color:#F8F8F8;text-decoration:none;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px; }
ul#GalleryList > li .prop-button-wrapper ul li.ReadMore a { display:block;padding:0 10px 0 10px;text-indent:0!important;font-size:0.9em;color:#FFF; }

ul#GalleryList > li .prop-button-wrapper ul li.ShowMiniMap a {background-position:left -27px; padding:0 5px 0 18px;height:27px;display:inline-block;width:auto;line-height:27px;background-image:url(/images/results/listing-buttons-bg-sprite.png);background-repeat:no-repeat;text-decoration:none}
ul#GalleryList > li .prop-button-wrapper ul li.Favourite a {background-position:left -54px;height:27px;width:32px;display:inline-block;line-height:27px;background-image:url(/images/results/listing-buttons-bg-sprite.png);background-repeat:no-repeat;text-decoration:none}
ul#GalleryList > li .prop-button-wrapper ul li.ContactAgent a {background-position:left -81px;height:27px;width:32px;display:inline-block;line-height:27px;background-image:url(/images/results/listing-buttons-bg-sprite.png);background-repeat:no-repeat;text-decoration:none}
ul#GalleryList > li .prop-button-wrapper ul.Buttons li a:hover {height:27px; }
ul#GalleryList > li .One .inner-photo-wrap ul.MiniIcons li span img {height:18px; width:auto;}
ul#GalleryList > li .One .inner-photo-wrap div.LetAgreed {width: 168px;border: none;position:absolute;top:0px; }

/* GALLERY LIST - BATH BED ICONS */
ul#GalleryList > li .Two .bed-bath-icons { display:block;margin:0 0 10px 0;padding:0 0 8px 0;border-bottom:#DADADA 1px solid;overflow:hidden; }
ul#GalleryList > li .Two .bed-bath-icons span, ul#GalleryList > li .Two .bed-bath-icons span p { display:block; }
ul#GalleryList > li .Two .bed-bath-icons span { height:10px;padding:0 0 0 20px;background-image:url(/images/results/gallery-bathbed-icons.png);background-repeat:no-repeat; }
ul#GalleryList > li .Two .bed-bath-icons span p { float:left;font-size:0.8em;margin:-2px 0 0 0;padding:0; }
ul#GalleryList > li .Two .bed-bath-icons span.bathrooms { background-position:bottom left;float:right; }
ul#GalleryList > li .Two .bed-bath-icons span.bedrooms { background-position:top left;float:left; }

div#SearchResultsContainer div#NoFavouritesHint {float:left;padding:0;width:652px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;font-size:.8em;color:#333;background:#F9F9F9}
div#SearchResultsContainer div#NoFavouritesHint h4 {font-size:1.5em;margin:40px 20px 20px 60px}
div#SearchResultsContainer div#NoFavouritesHint ul {margin:20px 40px 40px 60px}
div#SearchResultsContainer div#NoFavouritesHint ul li {list-style-type:disc}
div#SearchResultsContainer div#Loading {background:url(/images/results/results-overlay.png);z-index:200;padding:80px 0 0 0;position:absolute;display:table-cell;text-align:center;font-weight:bold;float:left;width:652px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;font-size:.8em;color:#333;}
div#SearchResultsContainer div#Properties {float:left;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;font-size:.8em;color:#333;padding:0;background:White}
div#SearchResultsContainer div#Properties div#SavedSearchNotification div.FadedBackground {border-bottom:1px solid #ccc;width:632px;margin:0;display:inline;float:left;padding:10px;background:#e4f3fa url(/images/results/saved-results-bg.jpg) repeat-x center top}
div#SearchResultsContainer div#Properties div#SavedSearchNotification div.FadedBackground h6 {font-size:1.4em;padding:0 0 0 49px;background:Transparent url(/images/results/saved-results-tick.jpg) no-repeat left top;min-height:39px;line-height:39px;color:#333;font-weight:normal}
div#SearchResultsContainer div#Properties ul {float:left;width:652px;min-height:330px}
div#SearchResultsContainer div#Properties ul li {float:left;background:Transparent;border-bottom:Solid 1px #e5e5e5;background:url(/images/results/results-li-bg.png);background-position:left center;height:208px;overflow:hidden;width:652px;padding:0}
div#SearchResultsContainer div#Properties ul li ul.PromoIcons {width:44px;height:auto;margin:16px 0 0 7px;padding:0;position:absolute!important;float:left;z-index:1;background:Transparent}
div#SearchResultsContainer div#Properties ul li ul.PromoIcons li {width:44px;height:18px;margin:0 0 3px 0;padding:0;border:none;background:Transparent;overflow:visible}
div#SearchResultsContainer div#Properties ul li div.SSTC {position:absolute;text-align:center;margin:86px 0 0 14px;z-index:1;width:152px;border-top:Solid 1px #dd2326;border-bottom:Solid 1px #971716;background:#c71d1d url(/images/details/details-sstc-bg.gif) bottom repeat-x;padding:0;height:26px;line-height:26px;clear:both;color:White;text-shadow:-1px -1px 1px #891716;font-size:1em}
div#SearchResultsContainer div#Properties ul li div.SSTC strong {text-transform:uppercase;font-size:1.1em}
div#SearchResultsContainer div#Properties ul li div.UnderOffer {position:absolute;text-align:center;margin:86px 0 0 14px;z-index:1;width:152px;border-top:Solid 1px #dd2326;border-bottom:Solid 1px #971716;background:#c71d1d url(/images/details/details-sstc-bg.gif) bottom repeat-x;padding:0;height:26px;line-height:26px;clear:both;color:White;text-shadow:-1px -1px 1px #891716;font-size:1em}
div#SearchResultsContainer div#Properties ul li div.UnderOffer strong {text-transform:uppercase;font-size:1.1em}
div#SearchResultsContainer div#Properties ul li div.Sold {position:absolute;text-align:center;margin:86px 0 0 14px;z-index:1;width:152px;border-top:Solid 1px #dd2326;border-bottom:Solid 1px #971716;background:#c71d1d url(/images/details/details-sstc-bg.gif) bottom repeat-x;padding:0;height:26px;line-height:26px;clear:both;color:White;text-shadow:-1px -1px 1px #891716;font-size:1em}
div#SearchResultsContainer div#Properties ul li div.Sold strong {text-transform:uppercase;font-size:1.1em}
div#SearchResultsContainer div#Properties ul li a.Image img { position:absolute;margin:10px;width:152px;height:100px;border:Solid 1px #ddd;padding:3px;background:#f2f2f2;float:left}
div#SearchResultsContainer div#Properties ul li a.Image:hover img {border:Solid 1px #999;-moz-box-shadow:0 0 4px #ccc;-webkit-box-shadow:0 0 4px #ccc;box-shadow:0 0 4px #ccc}
div#SearchResultsContainer div#Properties ul li div.Details {margin:10px 0 0 190px;top:0;padding:0}
div#SearchResultsContainer div#Properties ul li div.Details a span.result-price {font-size:1.8em;line-height:26px;font-weight:bold}F
div#SearchResultsContainer div#Properties ul li div.Details a span.result-price span {text-decoration:line-through;background:#ebf8cc;color:#97b136;font-weight:normal;margin:0 0 0 5px;font-size:0.9em}
div#SearchResultsContainer div#Properties ul li div.Details h2 {font-size:1.1em;margin:5px 0 0 0}
div#SearchResultsContainer div#Properties ul li div.Details h2 a {color:#333}
div#SearchResultsContainer div#Properties ul li div.Details h2 a span { font-size:inherit;color:#666}
div#SearchResultsContainer div#Properties ul li div.Details p {color:#333;margin:5px 0;line-height:17px}
div#SearchResultsContainer div#Properties ul li div.prop-button-wrapper {float:left;padding:0 10px;width:632px;margin:10px 0 0 0}
div#SearchResultsContainer div#Properties ul li div.prop-button-wrapper a.photo-no {width:126px;padding:0 5px 0 27px;height:27px;line-height:27px;text-align:left;position:absolute;float:left;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;background-image:url(/images/results/listing-buttons-bg-photos.png);background-repeat:no-repeat;background-position:4px center}
div#SearchResultsContainer div#Properties ul li div.prop-button-wrapper ul.Buttons {position:absolute;float:left;margin:0 0 0 180px;padding:0;width:auto;min-height:29px;height:29px}
div#SearchResultsContainer div#Properties ul li div.prop-button-wrapper ul.Buttons li {float:left;border:none;margin:0 5px 0 0;padding:0;width:auto;height:29px;display:inline-block}
div#SearchResultsContainer div#Properties ul li div.prop-button-wrapper ul.Buttons li a {padding:0 5px 0 20px;height:27px;display:inline-block;width:auto;line-height:27px;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;background-image:url(/images/results/listing-buttons-bg-sprite.png);background-repeat:no-repeat;text-decoration:none}
div#SearchResultsContainer div#Properties ul li div.prop-button-wrapper ul.Buttons li.Details a {background-position:left 0}
div#SearchResultsContainer div#Properties ul li div.prop-button-wrapper ul.Buttons li.MiniMap a {background-position:left -27px}
div#SearchResultsContainer div#Properties ul li div.prop-button-wrapper ul.Buttons li.Favourites a {background-position:left -54px}
div#SearchResultsContainer div#Properties ul li div.prop-button-wrapper ul.Buttons li.Contact a {background-position:left -81px}
div#SearchResultsContainer div#Properties ul li div.prop-button-wrapper ul.Buttons li a:hover {height:27px}
div#SearchResultsContainer div#Properties ul li.PremiumDisplay {}
div#SearchResultsContainer div#Properties ul li.PremiumDisplay a.Image img {border:Solid 1px #999}
div#SearchResultsContainer div#Properties ul li.PremiumDisplay div.Details h3,
div#SearchResultsContainer div#Properties ul li.PremiumDisplay div.Details p {color:#333}
div#ResultsListingContainer ul#ResultsList ul.MiniIcons {width:44px;height:auto;margin:16px 0 0 7px;padding:0;position:absolute!important;float:left;z-index:1;background:Transparent}
div#ResultsListingContainer ul#ResultsList ul.MiniIcons li {width:44px;height:18px;margin:0 0 3px 0;padding:0;border:none;background:Transparent}
div#ResultsListingContainer ul#ResultsList ul.MiniIcons li.New{background:url(/images/results/results-new.png) no-repeat;height:18px;width:27px}
div#SearchResultsContainer div#Properties ul#FavouriteResults li div.Details a span.result-price span { background: #EBF8CC;color: #97B136;font-size: 0.9em;font-weight: normal;margin: 0 0 0 5px; text-decoration: line-through; }

/*Find an Agent*/
div#FindAnAgent div#LocationNotFound {position:relative;border-bottom-left-radius:5px;-moz-border-radius-bottomleft:5px;-webkit-border-bottom-left-radius:5px;border-left:Solid 1px #e5e5e5;border-right:Solid 1px #e5e5e5;border-bottom:Solid 1px #e5e5e5}
div#FindAnAgent div#LocationNotFound ul {clear:both;padding:28px 0 40px 0;margin:0 auto;width:416px}
div#FindAnAgent div#LocationNotFound ul li {margin:0 0 10px 0;color:#333; }

div#FindAnAgent div#LocationNotFound div#BodySearchContainer div.AutocompleteResults {width:330px;position:absolute;clear:both;padding:0;z-index:1000;margin:-1px 0 0 0; }
div#FindAnAgent div#LocationNotFound div#BodySearchContainer div.AutocompleteResults ul { width:330px;overflow:hidden;margin:0;padding:0;height:auto;box-shadow:0 5px 6px rgba(0, 0, 0, 0.25);-webkit-box-shadow:0 5px 6px rgba(0, 0, 0, 0.25);-moz-box-shadow:0 5px 6px rgba(0, 0, 0, 0.25); }
div#FindAnAgent div#LocationNotFound div#BodySearchContainer div.AutocompleteResults ul li { width:330px;margin:0;padding:0}
div#FindAnAgent div#LocationNotFound div#BodySearchContainer div.AutocompleteResults ul li a { width:312px;display:block;text-shadow:1px 1px White;display:block;float:left;line-height:20px;padding:8px;height:auto;color:#333;background:#FFF;box-shadow:none;text-transform:none;font-size:1em;border-top:1px Solid #DDD;border-left:1px Solid #DDD;border-right:1px Solid #DDD; }
div#FindAnAgent div#LocationNotFound div#BodySearchContainer div.AutocompleteResults ul li a:hover,
div#FindAnAgent div#LocationNotFound div#BodySearchContainer div.AutocompleteResults ul li.Selected a { background:#EEE; }
div#FindAnAgent div#LocationNotFound div#BodySearchContainer div.AutocompleteResults ul li a em {font-weight:bold;font-style:normal }

div#FindAnAgent div.TwoColumn {float:left;width:654px;font-size:.8em;color:#333;padding:0; }
div#FindAnAgent div.TwoColumn div.EstateAgents,
div#FindAnAgent div.TwoColumn div.LettingsAgents {width:326px;float:left;border-top:Solid 1px #DDD;border-bottom:Solid 1px #DDD;background:Transparent}
div#FindAnAgent div.TwoColumn div.EstateAgents { }
div#FindAnAgent div.TwoColumn div.LettingsAgents {border-right:Solid 1px #DDD;border-left:0}
div#FindAnAgent div.TwoColumn h2 { padding:7px 10px 7px 10px;font-size:1.3em;background:#F8F8F8;border-left:#DDD 1px solid; }
div#FindAnAgent div.TwoColumn div.LettingsAgents h2 {border-left:Solid 1px #DDD; }
div#FindAnAgent div.TwoColumn div ul li {border-top:Solid 1px #DDD;border-left:#DDD 1px solid;border-right:#DDD 1px solid;border-bottom:none;height:160px;padding:10px;margin:0 -1px 0 0; }
div#FindAnAgent div.TwoColumn div ul li a {text-decoration:none}
div#FindAnAgent div.TwoColumn div ul li a h4 {margin:0 0 5px 0;padding:0;font-weight:normal;font-size:1.6em}
div#FindAnAgent div.TwoColumn div ul li a h4 span {color:#999;font-weight:normal;font-size:0.7em}
div#FindAnAgent div.TwoColumn div ul li address {font-style:normal;line-height:1.3em;font-size:1.3em;margin:0 0 10px 0; }
div#FindAnAgent div.TwoColumn div ul li a.ContactBranchButton { -moz-border-radius:2px;-webkit-border-radius:2px;border-radius:2px;float:left;height:25px;line-height:25px;border:Solid 1px #ccc;margin:10px 0;padding:2px 10px;background:none;color:#333;font-size:1.2em;background:#F8F8F8; }
div#FindAnAgent div.TwoColumn div ul li a.ContactBranchButton:hover {background:#DDD; }
div#FindAnAgent div.TwoColumn div ul li h5 { float:left;margin:16px 0 0 4px;padding:0;font-weight:normal;font-size:1.3em; }
div#FindAnAgent div.TwoColumn div ul li h5 span { font-weight:bold;font-size:1.2em;margin:-2px 0 0 5px;float:right; }
div#FindAnAgent div.TwoColumn div ul li h5 span span {color:#999;font-weight:normal;font-size:0.7em}
div#FindAnAgent div.TwoColumn div.NoResultsWithinFifty {background:#fafad4;padding:10px 16px;border-left:Solid 1px #DDD;border-right:Solid 1px #DDD;border-bottom:Solid 1px #DDD}
div#FindAnAgent div.TwoColumn div.NoResultsWithinFifty h2 {padding:0 8px 0 34px;text-shadow:0 1px 0 White;background:url(/images/findanagent/findanagent-noresults-icon.gif) no-repeat left center;font-weight:normal;font-size:1.5em!important}
div#FindAnAgent div.TwoColumn div.NoResultsWithinFifty p {padding:4px 8px 0 34px;line-height:1.6em}

/* FIND AN AGENT - OMAR 19884 */
.FindAnAgentContainer .Filter{padding:10px;height:38px;border:solid 1px #ddd;margin:-1px 0 0}
.FindAnAgentContainer .Filter form{margin:0;padding:0;height:38px;line-height:38px}
.FindAnAgentContainer .Filter form span{margin:0 12px 0 0}
.FindAnAgentContainer .Filter form span input[type=radio].RadioButton{position:absolute;z-index:-1000;left:-1000px;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0}
.FindAnAgentContainer .Filter form span input[type=radio].RadioButton + label.Label{padding-left:30px;height:22px;display:inline-block;line-height:22px;background-repeat:no-repeat;background-position:0 0;vertical-align:middle;cursor:pointer}
.FindAnAgentContainer .Filter form span input[type=radio].RadioButton:checked + label.Label{background-position:0 -22px}
.FindAnAgentContainer .Filter form span label.Label{background-image:url(/images/global/FindAgentRadioButton.png);-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0;font-size:14px!important;color:#333}
.FindAnAgentContainer .Frame{float:left;border-right:solid 1px #ddd;border-left:solid 1px #ddd}
.FindAnAgentContainer .Frame .ResultsTitle{border-bottom:solid 1px #ddd;line-height:15px;padding:12px}
.FindAnAgentContainer.Rentals .Frame .ResultsListing .Sales,
.FindAnAgentContainer.Sales .Frame .ResultsListing .Rentals{display:none}
.FindAnAgentContainer.Sales.Rentals .Frame .ResultsListing .Sales,
.FindAnAgentContainer.Sales.Rentals .Frame .ResultsListing .Rentals{display:block}
.FindAnAgentContainer .Frame .ResultsListing{}
.FindAnAgentContainer .Frame .ResultsListing .Sales,
.FindAnAgentContainer .Frame .ResultsListing .Rentals{}
.FindAnAgentContainer .Frame .ResultsListing .Sales .Header,
.FindAnAgentContainer .Frame .ResultsListing .Rentals .Header{background:#f5f5f5;border-bottom:solid 1px #eee;padding:12px}
.FindAnAgentContainer .Frame .ResultsListing .Sales .Header h6,
.FindAnAgentContainer .Frame .ResultsListing .Rentals .Header h6{color:#333;font-size:18px}
.FindAnAgentContainer .Frame .ResultsListing .Sales ul,
.FindAnAgentContainer .Frame .ResultsListing .Rentals ul{}
.FindAnAgentContainer .Frame .ResultsListing .Sales ul li,
.FindAnAgentContainer .Frame .ResultsListing .Rentals ul li{float:left;width:628px;height:90px;padding:10px;border-bottom:solid 1px #ddd}
.FindAnAgentContainer .Frame .ResultsListing .Sales ul li address,
.FindAnAgentContainer .Frame .ResultsListing .Rentals ul li address{font-style:normal;float:left;width:308px}
.FindAnAgentContainer .Frame .ResultsListing .Sales ul li address a.Title,
.FindAnAgentContainer .Frame .ResultsListing .Rentals ul li address a.Title{line-height:20px;font-size:16px;font-weight:bold;text-decoration:none}
.FindAnAgentContainer .Frame .ResultsListing .Sales ul li address i.MilesAway,
.FindAnAgentContainer .Frame .ResultsListing .Rentals ul li address i.MilesAway{color:#999;font-size:13px;font-style:normal}
.FindAnAgentContainer .Frame .ResultsListing .Sales ul li address .Location,
.FindAnAgentContainer .Frame .ResultsListing .Rentals ul li address .Location{float:left;margin-top:8px;line-height:20px;clear:left}
.FindAnAgentContainer .Frame .ResultsListing .Sales ul li .Contact,
.FindAnAgentContainer .Frame .ResultsListing .Rentals ul li .Contact{float:right;width:308px;height:38px;padding:5px 0}
.FindAnAgentContainer .Frame .ResultsListing .Sales ul li .Contact a.Button,
.FindAnAgentContainer .Frame .ResultsListing .Rentals ul li .Contact a.Button{background:#fafafa;border:solid 1px #ddd;padding:8px;float:left;line-height:20px;border-radius:1px;text-decoration:none}
.FindAnAgentContainer .Frame .ResultsListing .Sales ul li .Contact a.Telephone,
.FindAnAgentContainer .Frame .ResultsListing .Rentals ul li .Contact a.Telephone{line-height:38px;text-decoration:none;cursor:default}
.FindAnAgentContainer.Sales.Rentals .Frame .ResultsListing{width:652px}
.FindAnAgentContainer.Sales.Rentals .Frame .ResultsListing .Sales,
.FindAnAgentContainer.Sales.Rentals .Frame .ResultsListing .Rentals{width:322px}
.FindAnAgentContainer.Sales.Rentals .Frame .ResultsListing .Sales{float:left;border-right:solid 1px #ddd}
.FindAnAgentContainer.Sales.Rentals .Frame .ResultsListing .Rentals{float:right;border-left:solid 1px #ddd}
.FindAnAgentContainer.Sales.Rentals .Frame .ResultsListing ul li{width:298px;height:150px}
.FindAnAgentContainer.Sales.Rentals .Frame .ResultsListing ul li address{width:298px}
.FindAnAgentContainer.Sales.Rentals .Frame .ResultsListing ul li .Contact{float:left;width:322px;height:auto;padding:0;margin-top:12px}



div#FirstAgentsContainer { width:654px;float:left;height:205px;margin:0 0 20px 0; }
div#FirstAgentsContainer div { width:326px;float:left;border-bottom:Solid 1px #DDD;border-left:Solid 1px #DDD;height:205px;background:#FFF; }
div#FirstAgentsContainer div.FirstSalesAgent { position:relative; }
div#FirstAgentsContainer div.FirstLettingAgent { width:325px;border-right:#DDD 1px solid;position:relative; }
div#FirstAgentsContainer div.FirstSalesAgent h2, div#FirstAgentsContainer div.FirstLettingAgent h2 { border-left:0; }
div#FirstAgentsContainer div a {text-decoration:none}
div#FirstAgentsContainer div a h4 {padding:0 9px;font-size:1.6em;margin:10px 0 5px 0;font-weight:normal; }
div#FirstAgentsContainer div a h4 span {color:#999;font-weight:normal;font-size:0.7em;background:none}
div#FirstAgentsContainer div p {padding:0 9px}
div#FirstAgentsContainer div address {padding:0 9px;font-size:1.3em;font-style:normal;}
div#FirstAgentsContainer div p.Telephone { padding:10px 0 0 10px;font-size:2em;font-weight:normal;line-height:30px;margin:0; }

div#FirstAgentsContainer div a.ContactBranchButton { border-color:rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2) ;border-style:solid solid none;border-width:1px 1px medium;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.25) inset, 0 1px 1px rgba(0, 0, 0, 0.3);cursor:pointer;display:block;height:35px;margin:10px 0 0 10px;text-decoration:none;text-transform:uppercase;float:left;text-align:center;background-color:#333;color:#FFF;border-radius:2px;-moz-border-radius:2px;-webkitborder-radius:2px; }
div#FirstAgentsContainer div a.ContactBranchButton:focus { outline:none; }
div#FirstAgentsContainer div a.ContactBranchButton span {float:right;padding:0 20px 0 20px;line-height:34px; }

div#FindAnAgent div.TwoColumn div a.viewallforbranch {font-size:1em;font-weight:bold;line-height:20px;display:block;float:left}
div#FirstAgentsContainer div a.viewallforbranch {margin: 0 9px 0;}




/*Results Loading*/
div.Loading {background:url(/images/loading.gif) no-repeat center center;width:670px;margin:0;height:auto;float:left;position:absolute;z-index:10000000000;height:100px}
div.Loading img {width:40px;height:40px;margin:0;padding:0}

div#favouriteLoading {background:url(/images/results/results-overlay.png);z-index:200;padding:80px 0 0 0;position:absolute;display:table-cell;text-align:center;font-weight:bold;float:left;width:652px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;font-size:.8em;color:#333;}

/*Results Map*/
div#Search {position:relative;background:url(/images/loading.gif) no-repeat center center;width:100%;font-size:.8em;color:#333;padding:0;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;background:White url(/images/global/filters-bg.png) bottom repeat-x}
div.ResultsMapView {float:left;display:inline;padding:0;width:652px;height:652px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;border-bottom-left-radius:5px;-moz-border-radius-bottomleft:5px;-webkit-border-bottom-left-radius:5px;border-bottom-right-radius:5px;-moz-border-radius-bottomright:5px;-webkit-border-bottom-right-radius:5px}

/*Account Activated*/
div#AccountActivated {width:612px;float:left;margin:45px 0 0 0;font-size:.8em;color:#333;padding:20px;min-height:400px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;background:White url(/images/global/filters-bg.png) bottom repeat-x;border-bottom-left-radius:5px;-moz-border-radius-bottomleft:5px;-webkit-border-bottom-left-radius:5px;border-bottom-right-radius:5px;-moz-border-radius-bottomright:5px;-webkit-border-bottom-right-radius:5px}
div#AccountActivated h3 {font-size:1.8em}
div#AccountActivated h4 {font-size:2.4em}
div#AccountActivated p {line-height:2em}

/*Location Not Found*/
div#SearchResultsContainer div#Properties div#LocationNotFound {float:left;width:650px;min-height:400px;overflow-x:hidden}
div#SearchResultsContainer div#Properties div#LocationNotFound div.Header {margin:40px 0 0 117px;width:420px;font-size:1.6em}
div#SearchResultsContainer div#Properties div#LocationNotFound div.Header strong {font-weight:normal}
div#ResultsListingContainer div#GlobalListingPagingContainerOne ul li a {text-decoration:none}
div#ResultsListingContainer div#GlobalListingPagingContainerOne ul li.paging-prev a, div#ResultsListingContainer div#GlobalListingPagingContainerOne ul li.paging-next a { display:block;width:20px;height:20px;text-indent:-9999px;position:relative;top:-3px;background-image:url(/images/global/pagination-arrows.png);background-repeat:no-repeat; }
div#ResultsListingContainer div#GlobalListingPagingContainerOne ul li.paging-prev a { background-position: center left; }
div#ResultsListingContainer div#GlobalListingPagingContainerOne ul li.paging-next a { background-position: center right; }
div#SearchResultsContainer div#Properties div#LocationNotFound div.Header strong span {font-weight:bold}
div#SearchResultsContainer div#Properties div#LocationNotFound ul {clear:both;padding:20px 0;min-height:0;float:none;margin:50px auto 0 auto;width:416px}
div#SearchResultsContainer div#Properties div#LocationNotFound ul li {border:none;width:auto;height:auto;width:416px;margin:0 0 10px 0}
div#BodySearchContainer {float:left;position:static;padding:0;width:420px;margin:25px 0 0 117px;display:inline;height:36px; position:relative}
div#BodySearchContainer span label {display:none}
div#BodySearchContainer span div.InputBg {width:420px;height:36px}
div#BodySearchContainer span div.InputBg input {width:318px;height:18px;line-height:18px;padding:8px 5px;margin:0;float:left;border:none;border:Solid 1px #DDD; }
div#BodySearchContainer span div.InputBg input:focus {outline:none;}
div#BodySearchContainer span div.InputBg a {float:left;margin:0 0 0 3px;width:80px;height:36px;line-height:36px;text-align:center;background:#666;color:White;text-decoration:none}
div#BodySearchContainer span div.InputBg a span {float:right;width:64px;padding:0 8px 0 0}
div#BodySearchContainer span p {display:none}
div#LocationNotFound div#BodySearchContainer span div.AutocompleteResults {width:330px;position:absolute;margin:0!important;clear:both;padding:0!important}
div#LocationNotFound div#BodySearchContainer span div.AutocompleteResults ul {width:330px;min-height:0;height:auto;margin:0!important;clear:both;padding:0!important}
div#LocationNotFound div#BodySearchContainer span div.AutocompleteResults ul li {width:330px;height:auto;display:block;margin:0!important;padding:0}
div#LocationNotFound div#BodySearchContainer span div.AutocompleteResults ul li a {text-shadow:1px 1px White;width:320px;display:block;float:left;line-height:20px;padding:5px;height:auto;color:#333;background:url(/images/home/home-auto-complete.png) left top no-repeat}
div#LocationNotFound div#BodySearchContainer span div.AutocompleteResults ul li a:hover,
div#LocationNotFound div#BodySearchContainer span div.AutocompleteResults ul li.Selected a {background-position:right top;color:#333}
div#LocationNotFound div#BodySearchContainer span div.AutocompleteResults ul li.Last a {background-position:left bottom;border-top:1px Solid #ccc}
div#LocationNotFound div#BodySearchContainer span div.AutocompleteResults ul li.Last a:hover,
div#LocationNotFound div#BodySearchContainer span div.AutocompleteResults ul li.Last.Selected a {background-position:right bottom}
div#LocationNotFound div#BodySearchContainer span div.AutocompleteResults ul li a em {font-weight:bold;font-style:normal}
div#SearchResultsContainer div#Properties div#LocationNotFound ul.List {clear:both;float:left;width:420px;margin:40px 0 0 117px;display:inline;padding:0;min-height:0}
div#SearchResultsContainer div#Properties div#LocationNotFound ul.List li {border:none;height:auto;width:420px;float:left;margin:0 0 20px 0}

/*No Results*/
div#GlobalListingResultsContainer div#NoResults {border-bottom:Solid 1px #ddd;float:left;width:652px;overflow-x:hidden;border-left:1px solid #ddd;border-right:1px solid #ddd;color:#666}
div#GlobalListingResultsContainer div#NoResults strong {clear:both;float:left;width:420px;margin:40px 0 0 117px;font-size:2em}
div#GlobalListingResultsContainer div#NoResults ul {clear:both;float:left;width:420px;margin:40px 0 0 117px;display:inline;padding:0;min-height:0}
div#GlobalListingResultsContainer div#NoResults ul li {border:none;height:auto;width:420px;float:left;margin:0 0 20px 0;background:none}

/*MiniMap*/
div#SearchResultsContainer div#Properties ul li div.prop-button-wrapper div.MiniMap {position:absolute;height:0;width:400px;display:none;z-index:11}
div#SearchResultsContainer div#Properties ul li div.prop-button-wrapper div.Selected {background:White;margin:-261px 0 0 180px;padding:7px 10px 0 10px;width:353px;height:247px;background:White;display:block;border:Solid 1px #bdbdbd;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;-moz-box-shadow:2px 2px 2px #e8e8e8;-webkit-box-shadow:2px 2px 2px #e8e8e8;box-shadow:2px 2px 2px #e8e8e8}
div#SearchResultsContainer div#Properties ul li div.prop-button-wrapper div.MiniMap div.Chevron {background:url(/images/icons/arrow.png) no-repeat top;float:left;width:28px;height:15px;position:absolute;clear:both;top:254px;left:150px}
div#SearchResultsContainer div#Properties ul li div.prop-button-wrapper div.MiniMap h5 {float:left;font-size:1.4em;line-height:24px;margin:0}
div#SearchResultsContainer div#Properties ul li div.prop-button-wrapper div.MiniMap span {float:left;line-height:30px;clear:both}
div#SearchResultsContainer div#Properties ul li div.prop-button-wrapper div.MiniMap .Close {background:url(/images/icons/close-white-bg-sprite.gif) no-repeat right 0;float:right;height:20px;padding:0 30px 0 0;margin:0;line-height:18px}
div#SearchResultsContainer div#Properties ul li div.prop-button-wrapper div.MiniMap a:hover {background-position:right -20px}
div#SearchResultsContainer div#Properties ul li div.prop-button-wrapper div.MiniMap div.Map {position:relative;width:351px;height:181px;border:1px solid #ccc;float:left}
#MSVE_navAction_compassBackground,
#MSVE_navAction_topBackground,
#MSVE_navAction_compassContainer,
#MSVE_navAction_topBar,
#MSVE_navAction_leftBackground,
.MSVE_ZoomBar_plus,
.MSVE_ZoomBar_minus,
#MSVE_navAction_rotatorContainer,
#MSVE_navAction_toggleGlyphWrapper {display:none}
#MSVE_navAction_leftBar {padding:0}
#MSVE_TinyZoomBar {position:absolute;top:0;height:66px!important;background:url(/images/map/minimap-buttons-bg.png)}
#MSVE_navAction_zoomPlusWrapper,
#MSVE_navAction_zoomMinusWrapper,
#MSVE_navAction_zoomPlusWrapper:hover,
#MSVE_navAction_zoomPlusWrapper.ms_pseudoHover,
#MSVE_navAction_zoomMinusWrapper:hover,
#MSVE_navAction_zoomMinusWrapper.ms_pseudoHover,
#MSVE_navAction_zoomPlusWrapper:hover,
#MSVE_navAction_zoomPlusWrapper.ms_pseudoHover,
#MSVE_navAction_zoomMinusWrapper:hover,
#MSVE_navAction_zoomMinusWrapper.ms_pseudoHover {margin:8px 8px 4px 8px!important;padding:0!important;border:none!important;height:21px!important;width:21px!important}
#MSVE_navAction_zoomPlusWrapper {background:url(/images/map/minimap-zoom-normal.png) no-repeat center center}
#MSVE_navAction_zoomMinusWrapper {background:url(/images/map/minimap-reduce-normal.png) no-repeat center center}
#MSVE_navAction_zoomPlusWrapper:hover,
#MSVE_navAction_zoomPlusWrapper.ms_pseudoHover,
#MSVE_navAction_zoomPlusWrapper:hover,
#MSVE_navAction_zoomPlusWrapper.ms_pseudoHover {background:url(/images/map/minimap-zoom-over.png) no-repeat center center}
#MSVE_navAction_zoomMinusWrapper:hover,
#MSVE_navAction_zoomMinusWrapper.ms_pseudoHover,
#MSVE_navAction_zoomMinusWrapper:hover,
#MSVE_navAction_zoomMinusWrapper.ms_pseudoHover {background:url(/images/map/minimap-reduce-over.png) no-repeat center center}
div#SearchResultsContainer div#Properties ul li div.Details div.MiniMap div.Map div.MSVE_Copyright {display:none}
div#SearchResultsContainer div#Properties ul li div.Details div.MiniMap div.Map div.mapPoint {background:url(/images/results/single-property.png) center no-repeat}

/*AddThis*/
div#AddThisWrapper {float:right;display:inline;height:28px!important;line-height:28px!important}
div#AddThis {float:right;border:Solid 1px #bbb;height:28px;overflow:hidden;line-height:28px;padding:0 4px 0 5px;margin:4px 0;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px}
div#AddThis.Open {-moz-border-radius-bottomright:0;-webkit-border-radius-bottomright:0;border-bottom-right-radius:0}
div#AddThis li {float:left;margin:0;padding:0;width:auto;height:28px}
div#AddThis li.Link {margin:3px 0 0 5px}
div#AddThis li.More {margin:0;padding:0;width:25px}
div#AddThis li.More a {float:left;width:25px!important;height:28px!important;line-height:28px!important}
div#AddThis.Closed li.More {background:url(/images/details/arrow-down.png) no-repeat center transparent;border-left:1px solid #bbb;height:28px!important;line-height:28px!important}
div#AddThis.Open li.More {background:url(/images/details/arrow-up.png) no-repeat center transparent;border-left:1px solid #bbb;height:28px!important;line-height:28px!important}
div#AddThis.Closed ul li.ButtonList {display:none}
div#AddThis.Open ul li.ButtonList {position:absolute;display:inline;z-index:100}
div#AddThis.Open ul li.ButtonList div {background:White;border:1px solid #bbb;border-radius:5px;-moz-border-radius-topleft:5px;-moz-border-radius-bottomleft:5px;-moz-border-radius-bottomright:5px;-webkit-border-top-left-radius:5px;-webkit-border-bottom-left-radius:5px;-webkit-border-bottom-right-radius:5px;-moz-border-radius-topright:0;-webkit-border-radius-topright:0;border-top-right-radius:0;height:auto;position:absolute;float:left;margin:28px 0 0 197px}
div#AddThis.Open ul li.ButtonList div ul {float:left;width:180px;height:auto;margin:0;padding:10px}
div#AddThis.Open ul li.ButtonList div ul li {float:left;width:80px}
div#AddThis.Open ul li.ButtonList div ul li a {float:left;width:80px;margin:0;padding:0;color:#666}
div#AddThis.Open ul li.ButtonList div ul li a span {float:left;padding:0;margin:10px 2px 0 0;display:inline}
a#ShowOnMapLink,
a#AddToFavouritesSide {text-decoration:none;background:White url(/images/details/fade.png);color:#333;display:inline-block;position:relative;width:105px;padding:7px;border:1px solid #BBB;margin:0 0 0 10px;float:left}
a#ShowOnMapLink{float:left;margin:0 10px 10px 10px}
a#ShowOnMapLink:hover,
a#AddToFavouritesSide:hover {background:#f3f3f3 url(/images/details/fade.png)}
a#ShowOnMapLink span {background:url(/images/details/property-details-sprite.png) no-repeat left -16px;padding:0 0 2px 23px}
a#AddToFavouritesSide span {background:url(/images/details/property-details-sprite.png) no-repeat left -32px;padding:0 0 2px 23px}

a.ContactAgentButton { border-color:rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2) ;border-style:solid solid none;border-width:1px 1px medium;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.25) inset, 0 1px 1px rgba(0, 0, 0, 0.3);cursor:pointer;display:block;font-size:0.9em;height:35px;margin:15px 0 10px 0;text-decoration:none!important;text-transform:uppercase;width:150px;text-align:center;background-color:#333;color:#FFF!important;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px; }
a.ContactAgentButton:hover { color:#FFF!important; }
a.ContactAgentButton span { padding:0 15px 0 15px;font-size:1.35em;line-height:2.5em; }

div#estateAgentsDetails div.ContactDetails label {float:right;width:154px;line-height:normal;background:white;font-size:1.6em;margin:2px 0 0 0}
div#estateAgentsDetails div.ContactDetails label span {display:inline-block;font-size:11px}
div#estateAgentsDetails.DetailsToolsWrapper div span.Telephone { width:154px;line-height:normal;background:white;font-size:2em;margin:15px 0 15px 0;font-weight:normal;width:100%; }
div#estateAgentsDetails.DetailsToolsWrapper div span.Telephone span {display:inline-block;font-size:11px}
div#DetailsPriceAndContactContainer{padding:0 0 10px;overflow:hidden; }
div#DetailsBodyPriceAndContactContainer {margin:0}
div#DetailsBodyPriceAndContactContainer div#Information {float:left;width:1632px;font-size:.8em;color:#333;padding:10px;min-height:38px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;background:White url(/images/global/filters-bg.png) bottom repeat-x}
div#DetailsBodyPriceAndContactContainer div#Information a {float:left;font-size:inherit;font-weight:normal;display:inline;line-height:38px;margin:4px 5px 0 0;text-decoration:none}
div#DetailsBodyPriceAndContactContainer div#Information a.Back {color:#333;height:28px;line-height:28px;padding:0 10px 0 8px;background:url(/images/details/fade.png);border:1px solid #bbb;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px}
div#DetailsBodyPriceAndContactContainer div#Information a.Back span {padding:0 0 0 20px;background:url(/images/details/backIcon.png) no-repeat left}
div#DetailsBodyPriceAndContactContainer div#Information a.Back:hover {background:#f3f3f3 url(/images/details/fade.png);color:#333}
div#DetailsBodyPriceAndContactContainer div.SSTC {width:632px;border-left:Solid 1px #ccc;border-right:Solid 1px #ccc;border-top:Solid 1px #dd2326;border-bottom:Solid 1px #971716;background:#c71d1d url(/images/details/details-sstc-bg.gif) bottom repeat-x;padding:10px;clear:both;color:White;text-shadow:-1px -1px 1px #891716;font-size:1.1em}
div#DetailsBodyPriceAndContactContainer div.SSTC strong {text-transform:uppercase;font-size:1.2em}
div#DetailsBodyPriceAndContactContainer div#MainPhoto {clear:both;overflow:hidden;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;background:White url(/images/global/filters-bg.png) bottom repeat-x}
div#DetailsBodyPriceAndContactContainer div#MainPhoto img.Prev,
div#DetailsBodyPriceAndContactContainer div#MainPhoto img.Next {border:none;cursor:pointer;width:71px;height:37px;position:absolute;float:left;opacity:.7}
div#DetailsBodyPriceAndContactContainer div#MainPhoto img.Prev {margin:200px 0 0 0}
div#DetailsBodyPriceAndContactContainer div#MainPhoto img.Next {margin:200px 0 0 581px}
div#DetailsBodyPriceAndContactContainer div#MainPhoto img.Prev:hover,
div#DetailsBodyPriceAndContactContainer div#MainPhoto img.Next:hover {opacity:1}
div#DetailsBodyPriceAndContactContainer div#MainPhoto img.MainPhoto {width:652px}
div#DetailsBodyPriceAndContactContainer div#DetailsThumbnailsContainer {float:left;width:652px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;background:White url(/images/global/filters-bg.png) bottom repeat-x}
div#DetailsBodyPriceAndContactContainer div#DetailsThumbnailsContainer ul {float:left;margin:0;padding:0 10px 7px 0}
div#DetailsBodyPriceAndContactContainer div#DetailsThumbnailsContainer ul li {border:Solid 1px #ccc;float:left;margin:8px 0 0 7px;display:inline;padding:0;width:82px;height:53px;overflow:hidden;cursor:pointer}
div#DetailsBodyPriceAndContactContainer div#DetailsThumbnailsContainer ul li img {height:53px;width:82px;margin:0;padding:0}
div#DetailsBodyPriceAndContactContainer div#DetailsThumbnailsContainer ul li.Selected {border:3px Solid #ccc;padding:3px;width:72px;height:43px;cursor:default}
div#DetailsBodyPriceAndContactContainer div#DetailsThumbnailsContainer ul li.Selected img {width:72px;height:43px}
div#DetailsBodyPriceAndContactContainer div#DetailsThumbnailsContainer ul li:hover {border:3px Solid #666;padding:3px;width:72px;height:43px;cursor:pointer}
div#DetailsBodyPriceAndContactContainer div#DetailsThumbnailsContainer ul li:hover img {width:72px;height:43px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer {border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;float:left;margin:0;padding:6px 5px;width:642px;display:inline;list-style:none;font-size:.9em;background:url(/images/map/thumbnails-bg.gif) white repeat-x center bottom}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li {float:left;margin:0;padding:0;height:26px;line-height:26px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li a {text-decoration:none;background:url(/images/results/results-floorplan-and-epc-sprite.gif) no-repeat;padding:0 0 0 30px;float:left;color:#333;cursor:pointer}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li a:hover {color:#32aee1}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li a span {background:url(/images/results/results-floorplan-and-epc-sprite.gif) no-repeat;padding:0 8px 0 0;float:left}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Brochure a {background-position:0 -26px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Brochure a span {background-position:0 26px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Brochure a:hover {background-position:0 0}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Brochure a:hover span {background-position:right bottom}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Floorplan a {background-position:0 -78px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Floorplan a span {background-position:0 26px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Floorplan a:hover {background-position:0 -52px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Floorplan a:hover span {background-position:right bottom}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.EPC a {background-position:0 -130px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.EPC a span {background-position:0 26px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.EPC a:hover {background-position:0 -104px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.EPC a:hover span {background-position:right bottom}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Virtual a {background-position:0 -182px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Virtual a span {background-position:0 26px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Virtual a:hover {background-position:0 -156px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Virtual a:hover span {background-position:right bottom}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Enhanced a {background-position:0 -234px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Enhanced a span {background-position:0 26px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Enhanced a:hover {background-position:0 -208px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Enhanced a:hover span {background-position:right bottom}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Panoramic a {background-position:0 -286px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Panoramic a span {background-position:0 26px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Panoramic a:hover {background-position:0 -260px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Panoramic a:hover span {background-position:right bottom}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Audio a {background-position:0 -338px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Audio a span {background-position:0 26px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Audio a:hover {background-position:0 -312px}
div#DetailsBodyPriceAndContactContainer ul.FloorPlanAndEPCContainer li.Audio a:hover span {background-position:right bottom}
div#DetailsBodyPriceAndContactContainer ul#PromitionalBanner {float:right;clear:none;margin:10px 0 3px 20px;padding:0;width:222px}
div#DetailsBodyPriceAndContactContainer ul#PromitionalBanner li {background:url(/images/details/details-promition-sprite.gif) no-repeat scroll 0 0;float:left;margin:0 0 10px;padding:0;width:222px}
div#DetailsBodyPriceAndContactContainer ul#PromitionalBanner li h6 {color:#333;font-size:1.2em;width:185px;float:left;margin:0 1px 0 -3px;padding:5px 8px 5px 32px;line-height:22px;border-bottom:Solid 1px White}
div#DetailsBodyPriceAndContactContainer ul#PromitionalBanner li.ChainFree h6{background:Transparent url(/promotions/chainfree/images/results-listing-item-icon.png) no-repeat scroll left 10px}
div#DetailsBodyPriceAndContactContainer ul#PromitionalBanner li.BigKickOff h6{background:Transparent url(/promotions/bigkickoff/images/results-listing-item-icon.png) no-repeat scroll left 10px}
div#DetailsBodyPriceAndContactContainer ul#PromitionalBanner li.Sale h6{background:Transparent url(/promotions/sale/images/results-listing-item-icon.gif) no-repeat scroll left 10px}
div#DetailsBodyPriceAndContactContainer ul#PromitionalBanner li p {line-height:17px;font-size:1em;border-top:Solid 1px #d9d9d9;background:url(/images/details/details-promition-sprite.gif) no-repeat scroll center bottom;width:208px;float:left;margin:0;padding:7px}

div#DetailsBodyPriceAndContactContainer { position:relative;font-size:.8em;float:left;width:622px;padding:15px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;}
div#DetailsBodyPriceAndContactContainer h1 {color:#333;margin:0 0 20px 0;font-size:1.6em}
div#DetailsBodyPriceAndContactContainer h2.DescriptionAddress {color:#333;margin:0 0 20px 0;font-size:1.4em}
div#DetailsBodyPriceAndContactContainer h4 {color:#333;font-weight:bold;font-size:1.2em}
div#DetailsBodyPriceAndContactContainer p {line-height:20px;margin:0 0 20px 0}
div#DetailsBodyPriceAndContactContainer ul { overflow:hidden;padding:2px; }
div#DetailsBodyPriceAndContactContainer ul li { width:70%; }
div#DetailsBodyPriceAndContactContainer ul li.ContactButton { width:30%;float:right;position:absolute;top:25px;right:20px; }
div#DetailsBodyPriceAndContactContainer ul li.ContactButton a {margin:0;float:right; }
div#DetailsBodyPriceAndContactContainer ul li.Price { font-size:1.1em;list-style-image:none;margin:0;padding:0 0 10px 0;float:left; }
div#DetailsBodyPriceAndContactContainer ul li.Price label { font-size:2em; }
div#DetailsBodyPriceAndContactContainer ul li.Price span { font-size:2em;padding:0 0 10px 0;color:#199edd; }
div#DetailsBodyPriceAndContactContainer ul li.Price span.NoQualifier {font-size:1.9em;display:inline;font-weight:bold;line-height:40px;margin:0}
div#DetailsBodyPriceAndContactContainer ul li.Bedrooms { list-style-image:none;float:left;margin:0;padding:0; }
div#DetailsBodyPriceAndContactContainer ul li.Bedrooms h2, div#DetailsBodyPriceAndContactContainer ul li.Bedrooms h3 { font-weight:normal;line-height:20px;margin:0;padding:0;font-size:1.3em}


/*Property Details*/
div#DetailsBodyPriceAndContactContainer ul li.ContactButton button#ContactAgentButton {background:Transparent url(/images/details/global-search-button-sprite.png) no-repeat left 0;height:36px;line-height:36px;padding:0 16px 0 8px;margin:0 0 0 20px;border:none;font-size:1.1em;font-weight:bold;text-align:center;color:White;text-decoration:none}
div#DetailsBodyPriceAndContactContainer ul li.ContactButton button#ContactAgentButton span {background:Transparent url(/images/details/global-search-button-sprite.png) no-repeat right -24px;height:36px;line-height:36px;padding:22px 16px 10px 6px;font-size:1.1em;font-weight:bold;text-align:center;color:White;text-decoration:none}
div#DetailsBodyPriceAndContactContainer ul li.ContactButton button#ContactAgentButton:hover {background:Transparent url(/images/details/global-search-button-sprite.png) no-repeat left -72px;height:36px;line-height:36px;padding:0 16px 0 8px;margin:0 0 0 20px;border:none;font-size:1.1em;font-weight:bold;text-align:center;color:White;text-decoration:none}
div#DetailsBodyPriceAndContactContainer ul li.ContactButton button#ContactAgentButton:hover span {background:Transparent url(/images/details/global-search-button-sprite.png) no-repeat right -96px;height:36px;line-height:36px;padding:22px 16px 10px 6px;font-size:1.1em;font-weight:bold;text-align:center;color:White;text-decoration:none}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper ul li.FullMiniMap { display: none;}
div#DetailsContentContainer div.One {width:622px;margin:0;clear:both;float:left;padding:16px 15px;border-right:solid 1px #ddd;border-left:solid 1px #ddd}
div#Information div#MapPointAccuracy {float:left;font-size:inherit;font-weight:normal;display:inline;line-height:38px;margin:0}
div#AgentsDetails div.ContactDetails label { width:274px;line-height:normal;background:white;font-size:2.2em;margin:5px 0 10px 0;font-weight:normal; }
div#AgentsDetails div.ContactDetails label span {display:inline-block;font-size:2em; }
a#ArrangeViewing, a#ReviewButton {text-decoration:none;color:#333;margin:8px 0 8px 10px;display:inline-block;width:105px;padding:7px;background:White url(/images/details/fade.png);border:1px solid #BBB; }
a#ArrangeViewing:hover, a#ReviewButton:hover {background:#f3f3f3 url(/images/details/fade.png)}
a#ArrangeViewing span {background:url(/images/details/property-details-sprite.png) no-repeat left 0;padding:0 0 0 23px}
a#ReviewButton { width:auto;margin:0 0 0 5px; }
div#AgentsDetails {border:0;margin:0;padding:0;border:#ddd 1px solid;clear:both;color:#333;font-size:.8em;width:294px; }
div#AgentsDetails.NoTabs {margin:45px 0 0 0}
div#AgentsDetails label {font-size:1.2em;font-weight:bold;line-height:40px;padding:0 10px;display:block;background:#F8F8F8; }
div#AgentsDetails h1 {font-size:1.6em;padding:15px 10px 0 10px;font-weight:normal; }
div#AgentsDetails p {float:left;font-weight:bold;padding:0 5px 0 0}
div#AgentsDetails fieldset.Supplimentary {clear:both;margin:0;border:0;padding:10px;font-size:1.3em; }
div#AgentsDetails address {padding:10px;font-style:normal;font-weight:normal}
div#DetailsContainer {margin:45px 0 0 0}
div#DetailsContainer div#Information {float:left;width:632px;font-size:.8em;color:#333;padding:10px;min-height:38px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;background:White url(/images/global/filters-bg.png) bottom repeat-x}
div#GlobalListingToolsContainerOne div.One a {float:left;font-size:0.8em;font-weight:normal;display:inline;line-height:38px;margin:0 5px 0 0;text-decoration:none}
div#GlobalListingToolsContainerOne div.One a.Back {color:#333;height:28px;line-height:28px;padding:0 10px 0 8px;background:url(/images/details/fade.png);border:1px solid #bbb; }
div#GlobalListingToolsContainerOne div.One a#BackToSearchResultsTop, div#GlobalListingToolsContainerOne div.One a#BackToOfficeResultsTop { box-shadow:none!important; }
div#GlobalListingToolsContainerOne div.One a#BackToSearchResultsTop:hover { background:#f3f3f3 url(/images/details/fade.png) }
div#DetailsContainer div#Information a.Back span {padding:0 0 0 20px;background:url(/images/details/backIcon.png) no-repeat left}
div#DetailsContainer div#Information a.Back:hover {background:#f3f3f3 url(/images/details/fade.png);color:#333}
div#GlobalPropertyDetails div.SSTC {width:632px;padding:10px;clear:both;color:#FFF;font-size:1.1em}
div#GlobalPropertyDetails div.SSTC strong {text-transform:uppercase;font-size:1.2em}
div#DetailsContainer div#MainPhoto {clear:both;overflow:hidden;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;background:White url(/images/global/filters-bg.png) bottom repeat-x}
div#GlobalPropertyDetails div.LetAgreed {width:632px;background:#c71d1d url(/images/details/details-sstc-bg.gif) bottom repeat-x;padding:10px;clear:both;color:White;text-shadow:-1px -1px 1px #891716;font-size:1.1em}
div#GlobalPropertyDetails div.LetAgreed strong {text-transform:uppercase;font-size:1.2em}
div#GlobalPropertyDetails div.UnderOffer {width:632px;background:#c71d1d url(/images/details/details-sstc-bg.gif) bottom repeat-x;padding:10px;clear:both;color:White;text-shadow:-1px -1px 1px #891716;font-size:1.1em}
div#GlobalPropertyDetails div.UnderOffer strong {text-transform:uppercase;font-size:1.2em}
div#GlobalPropertyDetails div.Sold {width:632px;background:#c71d1d url(/images/details/details-sstc-bg.gif) bottom repeat-x;padding:10px;clear:both;color:White;text-shadow:-1px -1px 1px #891716;font-size:1.1em}
div#GlobalPropertyDetails div.Sold strong {text-transform:uppercase;font-size:1.2em}
div#DetailsContainer div#MainPhoto img.Prev,
div#DetailsContainer div#MainPhoto img.Next {border:none;cursor:pointer;width:71px;height:37px;position:absolute;float:left;opacity:.7}
div#DetailsContainer div#MainPhoto img.Prev {margin:200px 0 0 0}
div#DetailsContainer div#MainPhoto img.Next {margin:200px 0 0 581px}
div#DetailsContainer div#MainPhoto img.Prev:hover,
div#DetailsContainer div#MainPhoto img.Next:hover {opacity:1}
div#DetailsContainer div#MainPhoto img.MainPhoto {width:652px}

div.One ul#PromitionalBanner{clear:none;float:right;margin:10px 0 3px 20px;padding:0;width:222px}
div.One ul#PromitionalBanner li{background:url(/images/details/details-promition-sprite.gif) no-repeat 0 0 transparent;float:left;margin:0 0 10px;padding:0;width:222px}
div.One ul#PromitionalBanner li h6{border-bottom:1px solid White;color:#333;float:left;font-size:1.2em;line-height:22px;margin:0 1px 0 -3px;padding:5px 8px 5px 32px;width:185px}
div.One ul#PromitionalBanner li.ChainFree h6{background:url(/Promotions/chainfree/images/results-listing-item-icon.png) no-repeat left 10px Transparent}
div.One ul#PromitionalBanner li.BigKickOff h6{background:url(/Promotions/bigkickoff/images/results-listing-item-icon.png) no-repeat left 10px Transparent}
div.One ul#PromitionalBanner li.Sale h6{background:url(/Promotions/sale/images/results-listing-item-icon.gif) no-repeat left 10px Transparent}
div.One ul#PromitionalBanner li.NewHomes h6{background:url(/Promotions/newhomes/images/results-listing-item-icon.gif) no-repeat left 10px Transparent;padding:5px 8px 5px 50px}
div.One ul#PromitionalBanner li.Land h6{background:url(/Promotions/land/images/results-listing-item-icon.gif) no-repeat left 10px Transparent;padding:5px 8px 5px 50px}
div.One ul#PromitionalBanner li.ChainFreeProfessional h6{background:url(/Promotions/ChainFreeProfessional/images/results-listing-item-icon.gif) no-repeat left 10px Transparent}
div.One ul#PromitionalBanner li.PriceReduced h6{background:url(/Promotions/pricereduced/images/results-listing-item-icon.gif) no-repeat left 10px Transparent}
div.One ul#PromitionalBanner li.StudentFriendly h6{background: url(/Promotions/studentfriendly/images/results-listing-item-icon.gif) no-repeat left 10px Transparent}
div.One ul#PromitionalBanner li.PrestigeHomes h6{background:url(/Promotions/prestigehomes/images/results-listing-item-icon.gif) no-repeat left 10px Transparent;padding:5px 8px 5px 57px}
div.One ul#PromitionalBanner li.Auctions h6{background:url(/Promotions/auctions/images/results-listing-item-icon.gif) no-repeat left 10px Transparent;padding:5px 8px 5px 57px}
div.One ul#PromitionalBanner li.OpenHouse h6{background:url(/Promotions/prestigehomes/images/results-listing-item-icon.gif) no-repeat left 10px Transparent;padding:5px 8px 5px 57px}
div.One ul#PromitionalBanner li.OpenToOffers h6{background:url(/promotions/opentooffers2014/images/open-to-offers-flag.png) no-repeat left 10px Transparent;padding:5px 8px 5px 89px}
div.One ul#PromitionalBanner li.PerfectLaunch h6{background:url(/promotions/perfectlaunch/images/flag.png) no-repeat left 10px Transparent;padding:5px 8px 5px 91px}
div.One ul#PromitionalBanner li.TimeToShine h6{background:url(/promotions/timetoshine/images/flag.png) no-repeat left 10px Transparent;padding:5px 8px 5px 84px}
div#GlobalPropertyDetails div#DetailsContentContainer div.One ul#PromitionalBanner li p{background: url(/images/details/details-promition-sprite.gif) no-repeat center bottom transparent;border-top:1px solid #D9D9D9;float:left;font-size:1em;line-height:17px;margin:0;padding:7px;width:208px}

div#DetailsThumbnailsContainer {float:left;width:652px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd; }
div#DetailsThumbnailsContainer ul {float:left;margin:0;padding:2px 0 11px 11px }
div#DetailsThumbnailsContainer ul li {float:left;margin:9px 9px 0 0;display:inline;padding:0;width:82px;height:53px;overflow:hidden;cursor:pointer;opacity:0.5;filter:alpha(opacity=50);}
div#DetailsThumbnailsContainer ul li img { height:53px;width:82px;margin:0;padding:0; }
div#DetailsThumbnailsContainer ul li.Selected { opacity:1;filter:alpha(opacity=100); }
div#DetailsThumbnailsContainer ul li:hover { opacity:1;filter:alpha(opacity=100);cursor:pointer; }

div#DetailsContainer ul.FloorPlanAndEPCContainer {border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;float:left;margin:0;padding:11px 5px;width:642px;display:inline;list-style:none;font-size:.9em;background:url(/images/map/thumbnails-bg.gif) white repeat-x center bottom}
div#DetailsContainer ul.FloorPlanAndEPCContainer li {float:left;margin:0;padding:0;height:26px;line-height:26px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li a {text-decoration:none;background:url(/images/results/results-floorplan-and-epc-sprite.gif) no-repeat;padding:0 0 0 30px;float:left;color:#333;cursor:pointer}
div#DetailsContainer ul.FloorPlanAndEPCContainer li a:hover {color:#32aee1}
div#DetailsContainer ul.FloorPlanAndEPCContainer li a span {background:url(/images/results/results-floorplan-and-epc-sprite.gif) no-repeat;padding:0 8px 0 0;float:left}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Brochure a {background-position:0 -26px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Brochure a span {background-position:0 26px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Brochure a:hover {background-position:0 0}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Brochure a:hover span {background-position:right -364px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Floorplan a {background-position:0 -78px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Floorplan a span {background-position:0 26px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Floorplan a:hover {background-position:0 -52px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Floorplan a:hover span {background-position:right -364px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.EPC a {background-position:0 -130px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.EPC a span {background-position:0 26px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.EPC a:hover {background-position:0 -104px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.EPC a:hover span {background-position:right -364px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Virtual a {background-position:0 -182px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Virtual a span {background-position:0 26px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Virtual a:hover {background-position:0 -156px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Virtual a:hover span {background-position:right -364px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Enhanced a {background-position:0 -234px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Enhanced a span {background-position:0 26px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Enhanced a:hover {background-position:0 -208px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Enhanced a:hover span {background-position:right -364px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Panoramic a {background-position:0 -286px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Panoramic a span {background-position:0 26px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Panoramic a:hover {background-position:0 -260px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Panoramic a:hover span {background-position:right -364px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Audio a {background-position:0 -338px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Audio a span {background-position:0 26px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Audio a:hover {background-position:0 -312px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.Audio a:hover span {background-position:right -364px}
.pdf-icon{margin:-6px 0 0 -4PX;position:absolute;border:none}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.EPC a.pdf:hover{background:url(/images/results/results-floorplan-and-epc-sprite.gif) no-repeat 0 -424px}
div#DetailsContainer ul.FloorPlanAndEPCContainer li.EPC a.pdf:hover span{background:url(/images/results/results-floorplan-and-epc-sprite.gif) no-repeat right -394px;color:#D90000}
div#DetailsContainer ul#PromitionalBanner {float:right;clear:none;margin:10px 0 3px 20px;padding:0;width:222px}
div#DetailsContainer ul#PromitionalBanner li {background:url(/images/details/details-promition-sprite.gif) no-repeat scroll 0 0;float:left;margin:0 0 10px;padding:0;width:222px}
div#DetailsContainer ul#PromitionalBanner li h6 {color:#333;font-size:1.2em;width:185px;float:left;margin:0 1px 0 -3px;padding:5px 8px 5px 32px;line-height:22px;border-bottom:Solid 1px White}
div#DetailsContainer ul#PromitionalBanner li.ChainFree h6{background:Transparent url(/promotions/chainfree/images/results-listing-item-icon.png) no-repeat scroll left 10px}
div#DetailsContainer ul#PromitionalBanner li.BigKickOff h6{background:Transparent url(/promotions/bigkickoff/images/results-listing-item-icon.png) no-repeat scroll left 10px}
div#DetailsContainer ul#PromitionalBanner li.Sale h6{background:Transparent url(/promotions/sale/images/results-listing-item-icon.gif) no-repeat scroll left 10px}
div#DetailsContainer ul#PromitionalBanner li.NewHomes h6{background:Transparent url(/promotions/newhomes/images/results-listing-item-icon.gif) no-repeat scroll left 10px;padding:5px 8px 5px 50px}
div#DetailsContainer ul#PromitionalBanner li.Land h6{background:Transparent url(/promotions/land/images/results-listing-item-icon.gif) no-repeat scroll left 10px;padding:5px 8px 5px 50px}
div#DetailsContainer ul#PromitionalBanner li.ChainFreeProfessional h6{background:Transparent url(/promotions/ChainFreeProfessional/images/results-listing-item-icon.gif) no-repeat scroll left 10px}
div#DetailsContainer ul#PromitionalBanner li.PriceReduced h6{background:Transparent url(/promotions/pricereduced/images/results-listing-item-icon.gif) no-repeat scroll left 10px}
div#DetailsContainer ul#PromitionalBanner li.StudentFriendly h6{background:Transparent url(/promotions/studentfriendly/images/results-listing-item-icon.gif) no-repeat scroll left 10px}
div#DetailsContainer ul#PromitionalBanner li p {line-height:17px;font-size:1em;border-top:Solid 1px #d9d9d9;background:url(/images/details/details-promition-sprite.gif) no-repeat scroll center bottom;width:208px;float:left;margin:0;padding:7px; }
div#GlobalPropertyDetails div#DetailsContentContainer div.One {color:#999;font-size:.8em;float:left;width:622px;padding:20px 15px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd; }
div#GlobalPropertyDetails div#DetailsContentContainer div.One h1 {color:#333;margin:0 0 20px 0;font-size:1.6em}
div#GlobalPropertyDetails div#DetailsContentContainer div.One h2.DescriptionAddress {color:#333;margin:0 0 20px 0;font-size:1.4em;font-weight:normal; }
div#GlobalPropertyDetails div#DetailsContentContainer div.One h4 {color:#333;font-weight:bold;font-size:1.2em;clear:left}
div#GlobalPropertyDetails div#DetailsContentContainer div.One p {line-height:20px;margin:0 0 10px 0;color:#333;font-size:1.2em; }
div#GlobalPropertyDetails div#DetailsContentContainer div.One ul {margin:0 0 16px 0;padding:0 16px;display:inline}
div#GlobalPropertyDetails div#DetailsContentContainer div.One ul li.Price {width:110px;font-size:1.1em;font-weight:bold;list-style-image:none;float:left;margin:0;padding:0 12px 0 0}
div#GlobalPropertyDetails div#DetailsContentContainer div.One ul li.Price span.NoQualifier {font-size:1.9em;display:inline;font-weight:bold;line-height:40px;margin:0}
div#GlobalPropertyDetails div#DetailsContentContainer div.One ul li.Bedrooms {list-style-image:none;border-left:1px solid #d9d9d9;border-right:1px solid #d9d9d9;float:left;margin:0;padding:0 12px}
div#GlobalPropertyDetails div#DetailsContentContainer div.One ul li.Bedrooms h2 {color:#333;font-weight:bold;line-height:20px;margin:0;padding:0;font-size:1.3em}
div#GlobalPropertyDetails div#DetailsContentContainer div.One ul li.Bedrooms h3 {clear:both;color:#333;font-weight:normal;line-height:20px;margin:0;padding:0;font-size:1.2em}
div#GlobalPropertyDetails div#DetailsContentContainer div.One ul li.ContactButton {list-style-image:none;float:left}
div#GlobalPropertyDetails div#DetailsContentContainer div.One a.ContactAgentButton {margin:0 0 0 12px;float:left;text-decoration:none}
div#DetailsContainer div#Information div#MapPointAccuracy {float:left;font-size:inherit;font-weight:normal;display:inline;line-height:38px;margin:0}
div#DetailsContainer div#AerialViewMap {clear:both;height:652px!important;width:652px!important;position:relative;overflow:hidden;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;background:url(/images/loading.gif) no-repeat center;border-bottom-left-radius:5px;-moz-border-radius-bottomleft:5px;-webkit-border-bottom-left-radius:5px;border-bottom-right-radius:5px;-moz-border-radius-bottomright:5px;-webkit-border-bottom-right-radius:5px}
div#DetailsContainer div#MapViewMap {clear:both;height:652px!important;width:652px!important;position:relative;overflow:hidden;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;background:url(/images/loading.gif) no-repeat center;border-bottom-left-radius:5px;-moz-border-radius-bottomleft:5px;-webkit-border-bottom-left-radius:5px;border-bottom-right-radius:5px;-moz-border-radius-bottomright:5px;-webkit-border-bottom-right-radius:5px}

div#ResultsToolsContainer{clear:both;float:left; width:306px; overflow:hidden;}

div#MapViewMapPointAccuracy{background:url(/images/results/results-paging-bg.gif) repeat-x center top #80807F;clear:both;color:#e5e5e5;float:left;font-size:0.8em;line-height:35px;margin:0;width:621px;border-right:1px solid #ddd;padding:0 16px}
div.AerialView div#ResultsListingContainer div#GlobalAerialView div#GlobalListingPagingContainerOne{background:url(/images/results/results-paging-bg.gif) repeat-x center top #80807F;clear:both;color:#e5e5e5;float:left;font-size:0.8em;line-height:35px;margin:0;width:620px;border-right:1px solid #ddd;padding:0 16px;height:36px}

a.Back { border: 1px solid #BBB; padding: 0 10px 0 8px; background: url(/images/details/fade.png); color: #666; }
a.Back span { padding:0 0 0 20px; background:url(/images/details/backIcon.png) no-repeat left; }
div#DetailsPriceAndContactContainer a span.fees-apply {margin: 0 50px 8px 11px;text-decoration:underline;color:#333; font-size:12px; padding:0; display:inline-block;*display: inline;zoom: 1;f}
div.Two span.fees-apply {font-size:0.95em; padding:0; text-decoration:underline;color:#333;margin-left:0px;padding:0 10px 0 0; }

/*Content*/
div#CTA { border:0;margin:0;padding:6px 10px;border-left:Solid 1px #ddd;clear:both;color:#333;font-size:.8em;border-bottom:Solid 1px #ddd; }
div#CTA h4 {font-size:1.6em;font-weight:normal;color:#333;margin:10px 0}
div#CTA p {line-height:20px}
div#CTA ul {line-height:20px;margin:0 20px 0 0}
div#CTA ul li {margin:10px 0 0 0;padding:0 0 0 40px;font-size:1.2em;}
div#CTA .CTALink a{background:none;display:inline;padding:0;margin:0;font-size:1.1em;font-weight:normal;line-height:normal;color:#333;height:15px}
div#CTA .CTALink a:hover {color:#333;background:none}
div#CTA a { border-color:rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2) ;border-style:solid solid none;border-width:1px 1px medium;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.25) inset, 0 1px 1px rgba(0, 0, 0, 0.3);cursor:pointer;display:block;font-size:1em;height:35px;padding:0 12px 0 12px;margin:30px 0 5px 0;text-decoration:none;text-transform:uppercase;width:80px;text-align:center;background-color:#333;color:#FFF;border-radius:2px;-moz-border-radius:2px;-webkitborder-radius:2px; }
div#CTA a span  {float:right;width:64px;padding:0 8px 0 0;line-height:34px; }

div#ContentContainer { margin:33px 0 0 0;float:left; }
.SubLanding, .Landing { margin:33px 0 0 0!important; }
div#ContentContainer.Buy div.RentContent,
div#ContentContainer.Rent div.BuyContent {display:none}
div#ContentContainer div.PromotionFrame {width:652px;float:left;margin:0;font-size:.8em;color:#333;padding:20px;min-height:38px;border:Solid 1px #ddd;}
div#ContentContainer div.Frame {width:612px;float:left;margin:-1px 0 0 0;font-size:0.9em;color:#333;padding:20px;min-height:38px;border:Solid 1px #ddd;}
div#ContentContainer div.Frame.SEODirectory h6 {margin:0.25em 0 0 0;font-size:3em;color:#d5d5d5;float:left}
div#ContentContainer div.Frame.SEODirectory a.Top {margin:2.5em 0 0 0;float:right}
div#ContentContainer div.Frame.SEODirectory div {float:left;width:100%}
div#ContentContainer div.Frame.SEODirectory div ul {border-top:Solid 1px #e5e5e5;margin:0;padding:0;width:100%;float:left; }
div#ContentContainer div.Frame.SEODirectory div ul li {margin:0.2em 0 0 0;padding:0;float:left;width:50%;line-height:2em;font-size:1.1em; }
div#ContentContainer div.Frame div ul li span {text-transform:uppercase; font-weight:bold; font-size:0.7em; color:#efefef; background-color:#777; padding:3px 4px;}
div#ContentContainer h3 {margin:25px 0 5px 0;padding:0;font-size:2.1em;line-height:normal;font-weight:normal;display:inline-block}

div#ContentContainer h4 {margin:25px 0 5px 0;padding:0;font-size:2.1em;line-height:normal;font-weight:normal;display:inline-block}
div#ContentContainer p {line-height:20px;clear:both;margin:10px 0;font-size:1.1em; }
div#ContentContainer ul {line-height:20px;clear:both;margin:10px 0;list-style-type:square}
div#ContentContainer ul li {margin:0 0 0 20px}
div#ContentContainer ul.About li {list-style-type:square}
div#ContentContainer ul.ContentListItem {float:left;margin:0 0 40px 0;width:100%;padding:0;}
div#ContentContainer ul.ContentListItem li {width:50%;float:left;margin:40px 0 0 0;min-height:160px}
div#ContentContainer ul.ContentListItem li a img {float:left;margin:0 10px 0 0;width:77px;height:58px;border:0}
div#ContentContainer ul.ContentListItem li h2 { width:200px;float:right;margin:0;padding:0 10px 0 0; }
div#ContentContainer ul.ContentListItem li h2 a {font-size:1.6em;font-weight:normal;width:169px;text-decoration:none}
div#ContentContainer ul.ContentListItem li p { width:200px;font-weight:normal;font-size:1.1em;float:right;clear:none;padding:0 10px 0 0;margin:5px 0 0 0; }
div#ContentContainer ul.BulletedList li{list-style-type:square;}
div#CTA ul.BulletedList {margin-bottom:5px;}
div#ContentContainer ul.AboutBrandList {float:left;width:153px;line-height:20px}
div#ContentContainer .cookies{background-color:#fefce5; margin:13px 0; padding:13px; border:1px solid #e5e5e5}

/*Marketing in London*/
div#ContentContainer div.Frame .mil-cta a {cursor:pointer}

/*Marketing in London*/
div#ContentContainer div.Frame .mil-cta a {cursor:pointer}


/*Saved Searches*/
div#SavedSearchesContainer {clear:both;width:652px;float:left;margin:0;font-size:.8em;color:#333;padding:10px;min-height:38px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;background:White url(/images/global/filters-bg.png) bottom repeat-x;border-bottom-left-radius:5px;-moz-border-radius-bottomleft:5px;-webkit-border-bottom-left-radius:5px;border-bottom-right-radius:5px;-moz-border-radius-bottomright:5px;-webkit-border-bottom-right-radius:5px}
div#SavedSearchesContainer .DeletedMessage {background:#fdf9ca;padding:10px;border-top:Solid 1px #e5e5e5;border-bottom:Solid 1px #e5e5e5;font-size:1.4em}
div#SavedSearchesContainer .SavedSearchedNoResults {background:#fdf9ca;padding:10px;border-top:Solid 1px #e5e5e5;border-bottom:Solid 1px #e5e5e5;margin:60px 0}
div#SavedSearchesContainer .SavedSearchedNoResults h6 {font-weight:normal;font-size:1.4em}
div#SavedSearchesContainer .SavedSearchedNoResults ul {border:none;background:none;margin:10px 0}
div#SavedSearchesContainer .SavedSearchedNoResults ul li {border:none;padding:0;background:none;height:auto;line-height:2em}
div#SavedSearchesContainer .SavedSearchedNoResults ul li:hover {background:inherit}
div#SavedSearchesContainer h5 {font-size:1.4em;margin:10px 0}
div#SavedSearchesContainer p {margin:10px 0}
div#SavedSearchesContainer ul {border-top:Solid 1px #e5e5e5;margin:20px 0}
div#SavedSearchesContainer ul li {border-bottom:Solid 1px #e5e5e5;border-top:Solid 1px White;background:#fafafa;height:28px;line-height:28px;padding:4px 10px}
div#SavedSearchesContainer ul li:hover {background:#f5f5f5}
div#SavedSearchesContainer ul li a {float:left}
div#SavedSearchesContainer ul li a.Remove {background:White;float:right;border:Solid 1px #ddd;height:10px;line-height:10px;padding:7px;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px}
div#SavedSearchesContainer ul li a.Remove span {float:right}
div#SavedSearchesContainer ul li a.Remove:hover {background:#e5e5e5;color:#666}

/*Secure*/
div#SecureContainer {clear:both;width:652px;float:left;margin:33px 0 0 0;font-size:.8em;color:#333;padding:0 0 0 0;min-height:38px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;background:White url(/images/global/filters-bg.png) bottom repeat-x;border-bottom-left-radius:5px;-moz-border-radius-bottomleft:5px;-webkit-border-bottom-left-radius:5px;border-bottom-right-radius:5px;-moz-border-radius-bottomright:5px;-webkit-border-bottom-right-radius:5px}
div#SecureContainer div.SecureContainerLogin { padding:60px 0 0 0; }
div#SecureContainer div#ErrorMessage {width:600px; margin:10px 10px 10px 15px;padding:10px;background:#fdf9ca;border: Solid 1px #CCC;font-weight:bold;font-size:1.2em}
div#SecureContainer p.Error {background-color:#ffffe5;border:1px Solid #ccc;margin:0 10px 20px 10px}
div#SecureContainer p {padding:10px 0 10px 20px; }
div#SecureContainer div#SignupContent p { padding:10px 0 17px 20px;}
div#SecureContainer div#SignupContent div.Scroller p { width:240px;}
div#SecureContainer div#SignupContent div.LegalText p { width:240px;}

div#SecureContainer div#SignupContent div.Button p.RequiredFieldKey{ display: inline;padding: 0;}

div#SecureContainer div#SignupContent p.Help {width:300px; clear:both; margin-left:218px; text-align:left; padding-left:0px; padding-top:0px; }
div#SecureContainer p.LastItem {margin:0 0 60px 0}
div#SecureContainer p.IndentedParagraph {margin:0 0 0 218px;float:left;padding:0 0 12px 0;display:inline}
div#SecureContainer fieldset {width:526px;line-height:29px;margin:0 0 12px 90px;float:left;display:inline}
div#SecureContainer fieldset.Error div.ToolTip {display:block;position:absolute;margin:-7px 0 0 400px;float:left;z-index:100000}
div#SecureContainer fieldset .ValidationImage {width:15px;height:15px;float:left;overflow:hidden;margin:15px 0 0 0}
div#SecureContainer fieldset.Error .ValidationImage {background:url(/images/modals/validation-sprite.gif) 15px 0}
div#SecureContainer fieldset.Error div.ToolTip div.One {float:left;background:url(/images/modals/tool-tip-top.gif) no-repeat;width:108px;padding:0 0 0 10px;margin:0;z-index:1000}
div#SecureContainer fieldset.Error div.ToolTip div.One div.Two {background:url(/images/modals/tool-tip-bottom.gif) no-repeat center bottom;padding:5px;margin:0;font-size:12px;line-height:normal;min-height:30px}
div#SecureContainer fieldset label {width:118px;text-align:right;margin:0 8px 0 0;display:inline-block;line-height:29px;height:29px;font-size:1.2em; }
div#SecureContainer fieldset.LoginAndRemember label {width:100px;text-align:left;margin:0 8px 0 0;display:inline-block;line-height:29px;height:29px}
div#SecureContainer fieldset label sup {margin:-5px 0 0 0;font-size:1.1em;vertical-align:top}
div#SecureContainer fieldset input {width:290px;clear:none;display:inline-block;background-position:right 1px;}
fieldset.Error input{background:#F7DADE;border:1px solid #C73B3C}
div#SecureContainer fieldset input#SignupFormPromotionCode {width:145px;margin:0 145px 0 0}
div#SecureContainer div#MyAccountContent hr {height:1px;border:none;background:#ededed;margin:0;padding:0;color:#ededed;clear:both}
div#SecureContainer div#MyAccountContent fieldset.DPA {width:300px;padding:0;height:150px;float:left;margin:0 0 0 219px;display:inline;border:Solid 1px #ccc;line-height:19px;padding:4px;-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px}
div#SecureContainer div#MyAccountContent fieldset.DPA div.Scroller {width:288px;height:138px;float:left;float:left;margin:8px 0 0 8px;overflow:auto;display:inline}
div#SecureContainer div#MyAccountContent fieldset.DPA div.Scroller div {clear:both}
div#SecureContainer div#MyAccountContent fieldset.DPA div.Scroller input {float:left;display:inline;margin:2px 8px 0 0;padding:0;width:auto;height:auto;border:none;display:inline}
div#SecureContainer div#MyAccountContent fieldset.DPA div.Scroller p {float:left;width:242px;display:inline;margin:0 0 8px 0;padding:0}
div#SecureContainer div.Button {margin:0 0;padding:0 0 50px 0;border-bottom:Solid 1px #ccc;float:left;width:652px}
div#SecureContainer div.Button div.One div.Two button {text-shadow:0 1px 0px #333;font-size:0.9em;width:120px;height:36px;padding:0 0 2px 0;color:White;border:none;font-weight:bold;background:url(/Content/TaylorsEstateAgents/Assets/Images/global-search-button-sprite.png) center -36px no-repeat;float:left}
div#SecureContainer div.Button div.One div.Two input.ModalContactButton {cursor:pointer; text-shadow:0 1px 0px #333;font-size:0.9em;width:120px;height:36px;padding:0 0 2px 0;color:White;border:none;font-weight:bold;background:url(/Content/TaylorsEstateAgents/Assets/Images/global-search-button-sprite.png) center -36px no-repeat;float:left}
div#SecureContainer div.Button button:hover {background-position:center -42px}
div#SecureContainer div.Button p {float:left;line-height:34px;margin:0 0 0 8px;padding:0}
div#SecureContainer div.Legal {clear:both;}
div#SecureContainer fieldset.LoginAndRemember {width:300px;height:36px;line-height:36px;margin:8px 0 60px 219px;float:left}
div#SecureContainer fieldset.LoginAndRemember a {float:left;margin:0 20px 0 0;padding:0 0 0 8px;height:36px;line-height:36px;text-align:center;background:#666;color:White;text-decoration:none;border:none}
div#SecureContainer fieldset.LoginAndRemember a span {float:left;padding:0 8px 0 0;width:120px}
div#SecureContainer fieldset.LoginAndRemember input {width:auto;float:none;border:none;margin:0 5px 0 0;vertical-align:middle}
div#SecureContainer hr {height:1px;border:none;background:#ededed;margin:0;padding:0;color:#ededed; clear:both}
div#SecureContainer div.Scroller {clear:both;height:166px;margin-left:219px;width:304px;-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px}
div#SecureContainer div.Scroller div.ScrollerTwo {clear:both; height:150px; overflow:auto; margin:8px;}
div#SecureContainer div.Scroller fieldset.DPA {width:263px;float:left;margin:8px 0 8px 8px;display:inline;padding:0 0 20px 0;line-height:19px;-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px}
div#SecureContainer div.Scroller fieldset.DPA div {clear:both}
div#SecureContainer div.Scroller fieldset.DPA input {float:left;display:inline;margin:2px 8px 0 0;padding:0;width:auto;height:auto;border:none;display:inline}
div#SecureContainer div.Scroller fieldset.DPA label {float:left;width:230px;display:inline;margin:0 0 8px 0;padding:0;text-align:left; line-height:19px;}
div#SecureContainer div.Scroller div.LegalText{float:left;clear:both;margin:24px 0 0}
div#SignupContent div#SignUpModal div.Content div.ColumnOne span.HelpText {clear:both;color:#999999;display:inline;float:left;height:19px;line-height:10px;margin:6px 0 4px 16px;padding:0;text-align:right;width:428px}
div#SignupContent div#SignUpModal div.Content div.ColumnOne a.ModalContactButton {background:url("/Content/TaylorsEstateAgents/Assets/Images/global-search-button-sprite.png") no-repeat scroll left 0 Transparent;color:White;cursor:pointer;float:left;font-size:1.2em;font-weight:bold;height:12px;line-height:37px;margin:12px 0 16px 219px;padding:0 0 24px 8px}
div#SignupContent div#SignUpModal div.Content div.ColumnOne a.ModalContactButton span {background:url("/Content/TaylorsEstateAgents/Assets/Images/global-search-button-sprite.png") no-repeat scroll right -36px Transparent;float:left;font-size:inherit;margin:0;padding:0 16px 0 8px}
div#SignupContent div#SignUpModal div.Content div.ColumnOne p.RequiredField {color:#999999;float:left;height:37px;line-height:37px;margin:12px 34px 0 30px;padding:0}
div#SecureContainer div.Button {margin:8px 0 0 219px;padding:0 0 50px 0;border-bottom:Solid 1px #EDEDED;float:left;width:300px; text-align:left;}
div#SecureContainer div.Button div.One div.Two a.ModalContactButton {padding:0 0 0 8px; text-shadow:0 1px 0px #333;font-size:0.9em;width:120px;height:36px;color:White;border:none;font-weight:bold;background:url("/Content/TaylorsEstateAgents/Assets/Images/global-search-button-sprite.png") no-repeat scroll left 0 Transparent;float:left; margin-right:20px;}
div#SecureContainer div.Button div.One div.Two a.ModalContactButton span {line-height:36px; text-align:center; text-shadow:0 1px 0px #333;font-size:0.9em;width:120px;height:36px;padding:0 0 2px 0;color:White;border:none;font-weight:bold;background:url("/Content/TaylorsEstateAgents/Assets/Images/global-search-button-sprite.png") no-repeat scroll right -36px Transparent;float:left; margin-right:20px;}
div#SecureContainer div.Button button:hover {background-position:center -42px}
div#SecureContainer div.Button p {float:left;line-height:34px;margin:0 0 0 8px;padding:0}
div#SecureContainer div.Button p.RequiredFieldKey { width:144px !important;}
div#SignupContent h6 { display:none;}

/*Promotion*/
div#PromotionContainer {clear:both;width:652px;float:left;margin:0;font-size:.8em;color:#333;padding:0;min-height:38px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd;background:White url(/images/global/filters-bg.png) bottom repeat-x;border-bottom-left-radius:5px;-moz-border-radius-bottomleft:5px;-webkit-border-bottom-left-radius:5px;border-bottom-right-radius:5px;-moz-border-radius-bottomright:5px;-webkit-border-bottom-right-radius:5px}
div#PromotionContainer img {width:650px;border:Solid 1px White;height:202px;background:#f4f4f4;float:left}
div#PromotionContainer div#PromotionSearchContainer {width:652px;border-top:Solid 1px #ccc;border-bottom:Solid 1px #ccc;float:left;height:104px}
div#PromotionContainer div#PromotionSearchContainer div.One {border:Solid 1px White;padding:0 19px;height:94px;width:612px}
div#PromotionContainer div#PromotionSearchContainer div.One label {font-weight:bold;color:#333;font-size:1.3em;margin:10px 0 0 0;width:612px;float:left;height:36px;line-height:36px}
div#PromotionContainer div#PromotionSearchContainer div.One div.InputBg {height:36px;width:413px;line-height:36px;margin:0 20px 0 0;float:left;display:inline;padding:0;clear:both}
div#PromotionContainer div#PromotionSearchContainer div.One div.InputBg input {width:318px;height:18px;line-height:18px;padding:8px 5px;margin:0;float:left;border:none;border:Solid 1px #8f8f8f;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px}
div#PromotionContainer div#PromotionSearchContainer div.One div.InputBg input:focus {outline:none;box-shadow:0 0 5px #0099ff;-webkit-box-shadow:0 0 5px #0099ff;-moz-box-shadow:0 0 5px #0099ff}
div#PromotionContainer div#PromotionSearchContainer div.One div.InputBg a {float:left;margin:0 0 0 3px;width:80px;height:36px;line-height:36px;text-align:center;background:#666;color:White;text-decoration:none}
div#PromotionContainer div#PromotionSearchContainer div.One div.InputBg a span {float:right;width:64px;padding:0 8px 0 0}
div#PromotionContainer div#PromotionSearchContainer div.One p {margin:0;font-size:1.1em;line-height:18px;margin:0;float:left;width:175px}
div#PromotionContainer div#PromotionSearchContainer div.AutocompleteResults {width:330px;position:absolute;margin:-19px 0 0 20px;clear:both;padding:0;z-index:2}
div#PromotionContainer div#PromotionSearchContainer div.AutocompleteResults ul {width:330px;margin:0;padding:0}
div#PromotionContainer div#PromotionSearchContainer div.AutocompleteResults ul li {margin:0;padding:0}
div#PromotionContainer div#PromotionSearchContainer div.AutocompleteResults ul li a {width:320px;display:block;float:left;line-height:20px;padding:5px;height:auto;color:#333;background:url(/images/home/home-auto-complete.png) left top no-repeat}
div#PromotionContainer div#PromotionSearchContainer div.AutocompleteResults ul li a:hover,
div#PromotionContainer div#PromotionSearchContainer div.AutocompleteResults ul li.Selected a {background-position:right top;color:#333}
div#PromotionContainer div#PromotionSearchContainer div.AutocompleteResults ul li.Last a {background-position:left bottom;border-top:1px Solid #ccc}
div#PromotionContainer div#PromotionSearchContainer div.AutocompleteResults ul li.Last a:hover,
div#PromotionContainer div#PromotionSearchContainer div.AutocompleteResults ul li.Last.Selected a {background-position:right bottom}
div#PromotionContainer div#PromotionSearchContainer div.AutocompleteResults ul li a em {font-weight:bold;font-style:normal}
div#PromotionContainer div.Left {width:288px;float:left;padding:19px}
div#PromotionContainer div.Right {width:288px;float:right;padding:19px}
div#PromotionContainer h2 {font-size:1.5em;line-height:1.6em}
div#PromotionContainer p {line-height:20px;color:#666}
div#PromotionContainer ul {line-height:20px;color:#333;margin:20px 0 0 0}
div#PromotionContainer ul li {margin:0 0 20px 0;padding:0 0 0 20px}
div#ContentContainer div.PromotionFrame div.Description {padding:0 20px}
div#PromotionHolder {clear:both;border:1px Solid #ddd;width:288px;margin:16px 16px 0 0;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px}
div#PromotionHolder img {width:288px;height:auto;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px}
div#PromotionHolder a img.PromoBanner {border:none}
div.PromotionAutocompleteContainer {position:relative;background:Transparent url(/images/promotions/promotion-sprite.png) repeat-x scroll center top;height:92px;margin:0;padding:0 20px;border-top:1px Solid #ddd;border-bottom:1px Solid #ddd}
div.PromotionAutocompleteContainer label{color:#333;float:left;font-size:1.5em;font-weight:bold;height:35px;line-height:35px;margin:5px 0;width:100%;padding:0;margin:0}
div.PromotionAutocompleteContainer .InputBg {float:left;height:40px;width:400px}
div.PromotionAutocompleteContainer .InputBg input {border:Solid 1px #CCC;height:18px;float:left;margin:0;padding:10px 5px;width:254px;color:#333; }
div.PromotionAutocompleteContainer p {color:#333;float:left;height:36px;line-height:18px;padding:0!important;margin:0 0 0 15px!important;width:270px;clear:none!important}
div.PromotionAutocompleteContainer .InputBg a {cursor:pointer;float:left;height:36px;margin:0 0 0 5px;width:36px; background-image:url(/Images/search-btn-glass.png);background-position:center center;background-repeat:no-repeat; }

div#ContentContainer div.PromotionAutocompleteResults  { width:290px;position:absolute;margin:73px 0 0 21px;clear:both;padding:0;z-index:1000; }
div#ContentContainer div.PromotionAutocompleteResults ul { width:290px;overflow:hidden;margin:0;padding:0;height:auto;box-shadow:0 5px 6px rgba(0, 0, 0, 0.25);-webkit-box-shadow:0 5px 6px rgba(0, 0, 0, 0.25);-moz-box-shadow:0 5px 6px rgba(0, 0, 0, 0.25); }
div#ContentContainer div.PromotionAutocompleteResults ul li { width:290px;margin:0;padding:0}
div#ContentContainer div.PromotionAutocompleteResults ul li a { width:274px;display:block;border-top:1px Solid #ccc;text-shadow:1px 1px White;display:block;float:left;line-height:20px;padding:8px;height:auto;color:#333;background:#FFF;box-shadow:none;text-transform:none;font-size:1em; }
div#ContentContainer div.PromotionAutocompleteResults ul li a:hover,
div#ContentContainer div.PromotionAutocompleteResults ul li.Selected a { background:#EEE; }
div#ContentContainer div.PromotionAutocompleteResults ul li.Last a {background-position:left bottom;}
div#ContentContainer div.PromotionAutocompleteResults ul li.Last a:hover,
div#ContentContainer div.PromotionAutocompleteResults ul li.Last.Selected a {background-position:right bottom}
div#ContentContainer div.PromotionAutocompleteResults ul li a em {font-weight:bold;font-style:normal }

 /*Contact*/
div#ContactContainer {margin:0;}
div#ContactContainer div#Content {width:658px;min-height:300px;border-bottom:Solid 1px #ddd;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;float:left;padding:24px 150px;font-size:.8em;color:#333;background:White}
div#ContactContainer div#Content h2 {font-size:1.5em;color:#333;font-weight:normal;line-height:2em;margin-bottom:5px}
/*
div#SalesOrLettingsChoice ul { float:left;width:100%; }
div#SalesOrLettingsChoice ul li {float:left;margin:0;height:34px}
div#SalesOrLettingsChoice ul li.Sale { margin:0 16px 0 0; }
div#SalesOrLettingsChoice ul li a {text-decoration:none}
div#SalesOrLettingsChoice ul li a:focus {outline:none}
div#SalesOrLettingsChoice.NoneSelected ul li {width:321px}
div#SalesOrLettingsChoice.NoneSelected ul li a { float:left;padding:0;height:34px;color:#FFF; }
div#SalesOrLettingsChoice.NoneSelected ul li a span.Link {display:block;float:left;font-size:1.4em;padding:0 18px 0 18px;line-height:32px;width:285px; }
div#SalesOrLettingsChoice.NoneSelected ul li a span.NoneSelectedContent {text-shadow:none;color:#666}
div#SalesOrLettingsChoice.NoneSelected ul li a span.NoneSelectedContent {float:left;padding:0 18px 18px 18px;clear:both;width:283px;background:White;border-left:Solid 1px #ccc;border-right:Solid 1px #ccc;border-bottom:Solid 1px #ccc;}
html div#SalesOrLettingsChoice.NoneSelected ul li a span.NoneSelectedContent span.ShortDescription { font-size:1.2em;display:block;margin:0 0 10px 0; }
div#SalesOrLettingsChoice.NoneSelected ul li a:hover span.NoneSelectedContent {color:#333;background:#f2f2f2;text-shadow:none}
div#SalesOrLettingsChoice.NoneSelected ul li a span.NoneSelectedContent img {width:279px;height:75px;margin:18px 0 12px 0;border:none;}
div#SalesOrLettingsChoice.NoneSelected ul li a span.NoneSelectedContent strong { font-size:1.2em; }
div#SalesOrLettingsChoice ul li a { background:#EEE;float:left;padding:0;height:34px;width:321px; }
div#SalesOrLettingsChoice ul li a span.Link { float:left;font-size:1.4em;line-height:32px;padding:0 18px 0 18px; }
div#SalesOrLettingsChoice ul li.Sale a, div#SalesOrLettingsChoice ul li.Let a { color:#FFF; }
div#SalesOrLettingsChoice.SaleSelected ul li.Sale a, div#SalesOrLettingsChoice.LetSelected ul li.Let a { background-color:#EEE; }
div#SalesOrLettingsChoice.SaleSelected ul li a span.NoneSelectedContent, div#SalesOrLettingsChoice.LetSelected ul li a span.NoneSelectedContent {display:none}

div#ContactContainer div.List {width:658px;float:left}
div#ContactContainer div.List h4 { display:none;width:622px;padding:5px 18px;float:left;height:auto;font-size:1.2em}
div#ContactContainer div.List ul { width:622px;padding:18px;float:left;height:auto;background:#EEE; }
div#ContactContainer div.List ul li {margin:0 16px 0 0;padding:0;width:191px;line-height:2em;height:auto;float:left;font-size:1.2em; }
div#ContactContainer div.List ul li a {background:none;text-shadow:none;margin:0;padding:0;height:auto}
div#ContactContainer div.AutoComplete {width:658px;float:left}

div#ContactContainer address { padding:20px;width:622px;margin:40px 0 20px 0;clear:both;float:left;font-style:normal;background:#EEE; }
div#ContactContainer address strong.BrandName {font-size:1.8em;font-weight:normal;color:#333; }
div#ContactContainer address .Address { color:#333;font-size:1.4em;margin:0 0 10px 0;clear:both;float:left; }
div#ContactContainer address strong.TelephoneNumber { font-size:2.2em;line-height:normal;clear:both;float:left;font-weight:normal;color:#333; }
div#ContactContainer address strong.TelephoneNumber span { margin:0 0 0 5px;font-weight:normal;color:#333; }
*/
div#ContactFormFields {width:658px;float:left;display:block;margin:15px 0px}
div#ContactFormFields h4 {font-size:1em;font-weight:normal;margin:30px 0}

div#ContactFormFields .Left {display:block;width:277px;margin:0 10px 20px 0;position:relative;float:left;z-index:1000}
div#ContactFormFields div.Left div.AnimatedToolTip {float:left;width:135px;height:67px;margin:24px 0 0 0;padding:4px;position:absolute;display:block;left:0;z-index:1000;color:#333;line-height:19px;font-size:1.2em;background:url(/images/modals/tool-tip-arrow.gif) no-repeat}
div#ContactFormFields div.Left div.AnimatedToolTip div.One {margin:1px 17px 3px 3px;padding:0}
div#ContactFormFields .Left fieldset.Error div.ToolTip {display:block;position:absolute;margin:18px 0 0 250px;float:left;z-index:100000;text-align:left}
div#ContactFormFields .Left fieldset.Error div.ToolTip .One {float:left;background:url(/images/modals/tool-tip-top.gif) no-repeat;width:108px;padding:0 0 0 10px;margin:0 0 0 0;z-index:1000}
div#ContactFormFields .Left fieldset.Error div.ToolTip .One .Two {background:url(/images/modals/tool-tip-bottom.gif) no-repeat center bottom;padding:5px;margin:0;font-size:12px}
div#ContactFormFields .Right {display:block;width:365px;margin:0 0 20px 0;float:right;z-index:10!important}
div#ContactFormFields fieldset {margin:0 0 10px 0;float:left;clear:both}
div#ContactFormFields fieldset label {font-weight:normal;color:#333;line-height:24px;height:24px;display:block;font-size:1.2em; }
div#ContactFormFields .Left fieldset,
div#ContactFormFields .Left fieldset label {width:277px}
div#ContactFormFields .Left fieldset input {width:267px}
div#ContactFormFields .Right fieldset,
div#ContactFormFields .Right fieldset label {width:365px}
div#ContactFormFields .Right fieldset textarea { height:153px;width:355px;clear:both;z-index:10!important;resize:none; }
div#ContactFormFields div.DPAAndButton {width:658px;clear:both;padding:10px 0 0 0}
div#ContactFormFields div.DPAAndButton fieldset {float:left;width:660px;clear:none;margin:0 10px 0 0}
div#ContactFormFields div.DPAAndButton fieldset input {float:left;width:auto;line-height:normal;height:auto;border:none;margin:3px 0 10px 0;padding:0; }
div#ContactFormFields div.DPAAndButton fieldset label {font-weight:normal;float:none;width:auto;line-height:normal;height:auto;border:none;margin:0 0 10px 0;padding:0;width:630px;font-size:1.2em;color:#333; }
div#ContactFormFields div.DPAAndButton fieldset label input[type=checkbox] { margin:3px 8px 20px 0; }s
div#ContactFormFields div.DPAAndButton a.Button {float:left;height:36px;float:right;line-height:36px;padding:0 0 0 8px;color:White;font-size:1.6em;text-decoration:none}
div#ContactFormFields div.DPAAndButton a.Button span {float:left;padding:0 16px 0 8px}
div#ContactFormFields hr {clear:both;border:none;background:none;margin:40px 0 }
div#ContactFormFields fieldset.PropertyToSellCheck { font-size:1.2em; }
div#ContactFormFields fieldset.PropertyToSellCheck span { font-size:0.85em;margin:0 0 0 10px;position:relative;top:-4px; }
div#ContactFormFields fieldset.PropertyToSellCheck label { margin:5px 0 0 0; }
/*
div#ContactContainer div.AutoComplete .AutoCompleteWrapper {width:622px;padding:30px 18px 30px 18px;float:left;height:auto;font-size:1.2em;background-color:#EEE; }
div#ContactContainer div.AutoComplete .AutoCompleteWrapper .OfficeStrandSearchContainer label { margin:0 0 10px 0;float:left; }
*/
div#ContactContainer div.AutoComplete div.InputBg input {background:#FFF;width:318px;height:17px;line-height:17px;padding:8px 5px 8px 5px;margin:0;border:none;border:Solid 1px #CCC;color:#666; }
div#ContactContainer div.AutoComplete div.InputBg a {display:none}
div#ContactContainer div.PlaceList {width:328px;position:absolute;margin:-1px 0 0 1px;clear:both;padding:0;z-index:1000}
div#ContactContainer div.PlaceList ul { width:328px;margin:0;padding:0;height:auto;box-shadow:0 5px 6px rgba(0, 0, 0, 0.25);-webkit-box-shadow:0 5px 6px rgba(0, 0, 0, 0.25);-moz-box-shadow:0 5px 6px rgba(0, 0, 0, 0.25);overflow:hidden; }
div#ContactContainer div.PlaceList ul li { width:328px;margin:0;padding:0}
div#ContactContainer div.PlaceList ul li a { width:312px;display:block;text-shadow:1px 1px White;display:block;float:left;line-height:20px;padding:8px;height:auto;color:#333;background:#FFF;box-shadow:none;text-transform:none;font-size:1em;border-top:1px Solid #ccc; }
div#ContactContainer div.PlaceList ul li a:hover,
div#ContactContainer div.PlaceList ul li.Selected a { background:#EEE; }
div#ContactContainer div.PlaceList ul li.Last a {background-position:left bottom;}
div#ContactContainer div.PlaceList ul li.Last a:hover,
div#ContactContainer div.PlaceList ul li.Last.Selected a {background-position:right bottom}
div#ContactContainer div.PlaceList ul li a em {font-weight:bold;font-style:normal }
div#ContactContainer .enquiry-modal-footer { margin:0;border-top:none;float:left;height:auto;padding:0;position:relative;top:-35px }
div#ContactFormFields .enquiry-modal-footer hr { display:none; }
div#ContactFormFields .enquiry-modal-footer p { color: #333;font-size:1.2em;font-weight:normal;padding:0 0 5px; }
div#ContactFormFields .enquiry-modal-footer p a { color:#666;text-decoration:underline; }

div#ContactFormFields .enquiry-modal-body-bottom .modal-btn { background-image:none;border-color:rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2) -moz-use-text-color;border-radius:3px;border-style:solid solid none;border-width:1px 1px medium;box-shadow:0 0 0 1px rgba(255, 255, 255, 0.25) inset, 0 1px 1px rgba(0, 0, 0, 0.3);color:#fff;font-weight:normal;height:37px;margin:40px 0 0 5px;padding:0 20px;text-decoration:none;text-transform:uppercase;width:100px;font-size:0.9em; }

div#HomePromoContainer img.summerchallenge { margin:47px 0 0 2px; }
div#ContactFormFields h6{font-size:2em; margin:10px 0 13px 0}

/*THE GREAT BRITISH MOVE*/
div#HomePromoContainer img.greatbritishmove{margin:47px 0 0 2px}

/* OPEN HOUSE2013 */
div#HomePromoContainer.OpenHouse {margin:58px 0 0 2px; width:474px; height:190px;}
div#HomePromoContainer.OpenHouse img {left:0;}

/*IE 6*/
* html div#GlobalModalWrapper {background-image:url(/images/modals/modal-bg-ie6.gif)}
* html div#HomePromoContainer div#HomePromoLeftCol p, div#HomePromoContainer div#HomePromoRightCol p {color:#333;font-size:0.7em}

/*Thanks*/
div#GlobalModalContainer div.ColumnOne a.ModalCloseLook {float:left;width:129px;height:29px;margin:30px 0 0 230px;padding:0 0 0 8px;clear:none;background:url(/images/modals/close-sprite.gif) no-repeat left top;line-height:29px;font-size:13px;color:#333;cursor:pointer}
div#GlobalModalContainer div.ColumnOne a.ModalCloseLook span {float:right;width:91px;height:29px;margin:0;padding:0 31px 0 0;text-align:left;background:url(/images/modals/close-sprite.gif) no-repeat right top}
div#GlobalModalContainer div.ColumnOne a.ModalCloseLook:hover {background-position:left bottom;color:#333}
div#GlobalModalContainer div.ColumnOne a.ModalCloseLook:hover span {background-position:right bottom}

/*Global Promo*/
div#HomeContentWrapper div.Inner {padding:0}
div#HomeContentWrapper div.Inner div.HomeIntroduction {padding:0}
div#HomeContentWrapper div.Inner h2 {padding-top:50px}
div#HomeContentWrapper div.Inner div.HomeIntroduction {height:250px}

/*Get Britain Moving Promo*/
img.GBMbanner {margin:16px 0 2px 15px;padding:5px}
div#GetBritainMovingList ul li {width:140px;float:left;margin:0 15px 15px 0}
div#GetBritainMovingList a {text-decoration:none}
div#GetBritainMovingList ul li:hover {background:#e0e0e0;border-radius:5px;-moz-border-radius:5px}
div#GetBritainMovingList span {display:block}
span.headerFirst {color:#d71920;font-weight:bold;font-style:italic;font-size:1.0em;padding:5px 5px 0 5px}
span.headerSecond {color:#26247b;font-weight:bold;font-style:italic;font-size:1.1em;padding:0 5px}
span.headerLink {color:#333;font-size:0.9em;padding:0 0 5px 5px;text-decoration:underline;float:left}
img.promoArrow {padding:0 0 0 20px}

/*National Property Showcase 2012*/
#nps-promotion{padding:32px 0 0}
#nps-promotion a img{border:none}

/*NESTING CAMPAIGN*/
div#HomePromoContainer.nestingcampaign {margin:0 0 0 -15px;width:475px;height:239px; float:left;position:relative;}
div#HomePromoContainer a.MainNestingBanner {width:475px;height:239px;margin:0; padding:0;float:left}
div#HomePromoContainer a.MainNestingBanner img {width:475px;height:239px;padding:0;margin:0;left:0}
div#HomePromoContainer.nestingcampaign img {border:none;float:left; margin:0 0 0 0; padding:0;}

/*CAT MERGE - 404 Page*/
h1.h1-NoResults {color:#39ace6;font-weight:normal;font-size:1.8em;width:456px;text-align:right;margin:24px 0 24px 260px;float:left;padding:0;display:inline;text-align:left;font-weight:bold}
p.TitleNoResults {color:#39ace6;font-weight:normal;font-size:1.8em;width:456px;text-align:right;margin:24px 0 24px 260px;float:left;padding:0;display:inline;text-align:left;font-weight:bold}
p.p-NoResults {color:#333;clear:both;width:456px;text-align:right;text-align:left;margin:0 0 24px 260px;display:inline;float:left}
p.p-NoResults a {color:#39ace6}
p.p-NoResults a:hover {color:#666}

/*Content Pages Global Styling*/
div#SideNavigation {width:306px;border:0;margin:0;padding:0;background:#f2f2f2;border-left:Solid 1px #ddd;clear:both;color:#333;font-size:.8em;background:White url(/images/global/filters-bg.png) bottom repeat-x;border-bottom:Solid 1px #ddd}
div#SideNavigation h6 {line-height:4em;padding:0 20px;font-size:1.6em}
div#SideNavigation ul {font-size:1.2em}
div#SideNavigation ul li {border-top:Solid 1px #ddd}
div#SideNavigation ul li a {line-height:2.6em;display:block;text-indent:20px;background:#f2f2f2 url(/images/global/NavigationSprite.png) 0 center no-repeat}
div#SideNavigation ul li a:hover {background-color:#808080;background-position:-1220px center;color:White}
div#SideNavigation ul li ul {font-size:inherit}
div#SideNavigation ul li ul li {display:none}
div#SideNavigation ul li ul li a {text-indent:40px}
div#SideNavigation ul li.Selected a {background-color:#808080;background-position:-610px center;color:White}
div#SideNavigation ul li.Selected ul li {display:block}
div#SideNavigation ul li.Selected ul li a {background-color:#f2f2f2;background-position:-305px center}
div#SideNavigation ul li.Selected ul li a:hover {background-color:#808080;background-position:-1525px center;color:White}
div#SideNavigation ul li.Selected ul li.Selected a {background-color:#808080;background-position:-915px center;color:White}
div.SlidingBanner {width:306px}
div.SlidingBanner div.Content {width:289px;height:250px;margin:0;background:White url(/images/global/filters-bg.png) bottom repeat-x;padding:8px;border-left:Solid 1px #ddd;border-bottom:Solid 1px #ddd}
div.SlidingBanner div.Content button {z-index:10;float:left;background:Transparent url(/images/global/SlidingBannerArrowsSprite.png) no-repeat;cursor:pointer;width:17px;height:48px;border:none;position:absolute}
div.SlidingBanner div.Content button.BackButton {background-position:0 0;margin:70px 0 0 0}
div.SlidingBanner div.Content button.BackButton:hover {background-position:-17px 0}
div.SlidingBanner div.Content button.ForwardButton {background-position:0 -48px;margin:70px 0 0 272px}
div.SlidingBanner div.Content button.ForwardButton:hover {background-position:-17px -48px}
div.SlidingBanner div.Content div.ForwardAndBackTabs {z-index:1;text-align:center;height:10px;float:left;position:absolute;width:289px;padding:0;margin:229px auto 0 auto}
div.SlidingBanner div.Content div.ForwardAndBackTabs span {width:10px!important;height:10px;margin:0 4px}
div.SlidingBanner div.Content div.ForwardAndBackTabs span button {float:none;position:relative;width:10px!important;height:10px;padding:0;overflow:hidden;border:none;cursor:pointer;background:url(/images/global/SlidingBannerTabsSprite.png) 0 0 no-repeat}
div.SlidingBanner div.Content div.ForwardAndBackTabs span.Selected button {cursor:default}
div.SlidingBanner div.Content div.ForwardAndBackTabs span button:active,
div.SlidingBanner div.Content div.ForwardAndBackTabs span button:focus {outline:none}
div.SlidingBanner div.Content div.ForwardAndBackTabs span.Selected button, div#SlidingBanner div.Content div.ForwardAndBackTabs span button:hover {background-position:-10px 0}


div.SlidingBanner div.Content ul.Banners {z-index:0;position:absolute;margin:0;padding:0;width:289px;height:250px;overflow:hidden}
div.SlidingBanner div.Content ul.Banners li {width:273px;height:250px;text-align:center;float:left;margin:0;display:none}
div.SlidingBanner div.Content ul.Banners li.Selected {display:block}
div.SlidingBanner div.Content ul.Banners li h6 {font-weight:normal;margin:0.6em 0;padding:0;font-size:2.0em}
div.SlidingBanner div.Content ul.Banners li h6 a {text-decoration:none!important}
div.SlidingBanner div.Content ul.Banners li img.Icon {margin:1.2em 0;border:none}
div.SlidingBanner div.Content ul.Banners li p {margin:8px 0 0 0;font-size:1.0em}

/*Content Pages - Services*/
ul.MovingServicesList {width:100%;margin:0 0 40px 0!important;padding:0;overflow:hidden; }
ul.MovingServicesList li {margin:40px 0 0 0!important;padding:0;width:50%;float:left;min-height:90px; }
ul.MovingServicesList li h5 {margin:0;padding:0;font-size:1em;font-weight:normal; }
ul.MovingServicesList li h5 a {display:block;float:left;cursor:pointer;text-decoration:none!important;}
ul.MovingServicesList li h5 a img {border:none}
ul.MovingServicesList li h5 a img.Arrow {display:none;height:49px;width:49px;position:absolute;margin:-13px 0 0 220px;-webkit-border-top-right-radius:5px;-moz-border-radius-topright:5px;border-top-right-radius:5px}
ul.MovingServicesList li h5 a img.Icon {float:left;width:77px;height:58px}
ul.MovingServicesList li h5 a strong { float:right;display:block;width:200px;font-weight:normal;font-size:1.6em;padding:0 15px 0 0; } 
ul.MovingServicesList li h5 a span { float:right;display:block;width:195px;color:#333;padding:0 20px 0 0;margin:15px 0 0 0;font-size:1.1em;font-weight:normal;line-height:1.2em}

/*Content Pages - Landing*/
div#ContentContainer.Landing div.Frame {padding:5px 0 20px 0}
div#ContentContainer.Landing div.Frame h1 {margin:10px 20px;padding:0;font-size:2em;line-height:normal;font-weight:normal}
div#ContentContainer.Landing div.Frame div.ImageIntro {width:612px;border-top:Solid 1px #ddd}
div#ContentContainer.Landing div.Frame div.ImageIntro p {position:absolute;width:572px;padding:10px 20px;margin:0;background:url(/images/landing-template/right-image-intro/image-intro-background.png) bottom repeat-x}
div#ContentContainer.Landing div.Frame div.ImageIntro img {width:612px;height:187px}
div#ContentContainer.Landing div.Frame div.SmallPrint {margin:20px;border-top:Solid 1px #f2f2f2;}
div#ContentContainer.Landing div.Frame div.SmallPrint p {line-height:normal;font-size:1.1em}
div#ContentContainer.Landing div.Frame div.Content {margin:20px}
div#ContentContainer div.Frame .Content {margin: 0 20px}
div#ContentContainer.Landing div.Frame div.Content h2 {padding:0;margin:20px 0;clear:both;font-size:1.4em;text-transform:uppercase;font-weight:normal}
div#ContentContainer.Landing div.Frame div.Content p {padding:0;margin:20px 0;clear:both}
div#ContentContainer.Landing div.Frame div.Content ul {padding:0;margin:20px 0;clear:both}
div#ContentContainer.Landing div.Frame div.Content ul li {background:url(/images/global/GlobalUnbrandedBullet.gif) no-repeat left 10px;margin:0;padding:0 0 0 10px}
div#ContentContainer.Landing div.Frame div.Table {margin:20px;border-spacing:0}
div#ContentContainer.Landing div.Frame div.Table h4 {background:#999;padding:10px 20px;margin:0;color:White;text-shadow:0 1px 0 #999}
div#ContentContainer.Landing div.Frame div.Table table {border-collapse:collapse;margin:0;padding:0;width:100%;clear:both;border-right:Solid 1px #ccc}
div#ContentContainer.Landing div.Frame div.Table table tr th,
div#ContentContainer.Landing div.Frame div.Table table tr td {border-bottom:Solid 1px #ccc;text-align:left;vertical-align:middle;padding:10px 20px;border-left:Solid 1px #ccc}
div#ContentContainer.Landing div.Frame div.Table table tr th {background:#efefef;font-size:1.1em}
div#ContentContainer.Landing div.Frame div.ServicesLinks {width:592px;margin:0 0 0 20px}
div#ContentContainer.Landing div.Frame div.ServicesLinks ul {margin:20px 0 0 0;float:left}
div#ContentContainer.Landing div.Frame div.ServicesLinks.TwoWide ul li {width:236px;padding:20px;float:left;margin:0 20px 20px 0;background:#f2f2f2;border-bottom:Solid 1px #e0e0e0;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;x}
div#ContentContainer.Landing div.Frame div.ServicesLinks.TwoWide ul li h3 {margin:0;padding:0;font-size:1.6em;}
div#ContentContainer.Landing div.Frame div.ServicesLinks.TwoWide ul li ul {margin:0}
div#ContentContainer.Landing div.Frame div.ServicesLinks.TwoWide ul li ul li {background:url(/images/global/GlobalUnbrandedBullet.gif) no-repeat left 10px;padding:0 0 0 10px;margin:0;border:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;}
div#ContentContainer.Landing div.Frame div.ServicesLinks.ThreeWide ul li {width:137px;padding:20px;float:left;margin:0 20px 20px 0;background:#f2f2f2;border-bottom:Solid 1px #e0e0e0;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}
div#ContentContainer.Landing div.Frame div.ServicesLinks.ThreeWide ul li h3 {margin:0;padding:0;font-size:1.6em;}
div#ContentContainer.Landing div.Frame div.ServicesLinks.ThreeWide ul li ul {margin:0}
div#ContentContainer.Landing div.Frame div.ServicesLinks.ThreeWide ul li ul li {background:url(/images/global/GlobalUnbrandedBullet.gif) no-repeat left 10px;padding:0 0 0 10px;margin:0;border:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}
div#ContentContainer.Landing div.Frame div.Content .awards-image{float:right; margin:0 0 13px 13px }
div#ContentContainer.Landing div.Frame div.Content p.wrap{clear:none; }

/*Content Pages - Sub Landing*/
div#LinksAsset {width:306px;border:0;margin:0;padding:0;background:#f2f2f2;border-left:Solid 1px #ddd;clear:both;color:#333;font-size:.8em;background:White url(/images/global/pwide-watermark.png) right no-repeat;border-bottom:Solid 1px #ddd}
div#LinksAsset h6 {clear:both;background:#58bde9;color:White;text-transform:uppercase;text-shadow:0 1px 0 #3987a9;font-size:1.2em;-webkit-border-bottom-right-radius:5px;-webkit-border-bottom-left-radius:5px;-moz-border-radius-bottomright:5px;-moz-border-radius-bottomleft:5px;border-bottom-right-radius:5px;border-bottom-left-radius:5px;margin:0 20px;padding:5px 10px;line-height:normal;border-left:Solid 2px #2ba9df;border-bottom:Solid 2px #2ba9df;border-right:Solid 2px #2ba9df;width:auto!important;display:inline-block}
div#LinksAsset ul {clear:both;display:block;margin:0}
div#LinksAsset ul li {margin:0;border-bottom:Solid 1px #ddd;padding:15px 20px;background:Transparent url(/images/global/panel-base.png) bottom repeat-x}
div#LinksAsset ul li.Last {margin:0;border-bottom:none}
div#LinksAsset ul li a {font-size:1.6em;padding:0 24px 0 0;line-height:normal;background:Transparent url(/images/global/side-arrow.png) no-repeat right center}
div#BrandingAsset {width:266px;border:0;margin:0;padding:20px;background:#f2f2f2;border-left:Solid 1px #ddd;clear:both;color:#333;font-size:.8em;background:White;border-bottom:Solid 1px #ddd}
div#BrandingAsset .mortgage-award {margin:0 0 0 65px}
div#ContentContainer.SubLanding div.Frame {padding:20px;width:654px}
div#ContentContainer.SubLanding div.Frame h1 {margin:25px 0 5px 20px;padding:0;font-size:2.2em;line-height:normal;font-weight:normal;display:inline-block;width:100%; }
div#ContentContainer.SubLanding div.Frame span.CTA {display:inline-block;margin:0 20px;font-size:1.6em}

div#ContentContainer div.Frame div.LargeCTA {display:inline-block;width:100%;text-align:center;height:67px; }
div#ContentContainer div.Frame div.LargeCTA div.Content { color:#dcf0f8;font-size:1em;background:#EEE;margin:0 10px 0 10px; }
div#ContentContainer div.Frame div.LargeCTA strong {color:White}
div#ContentContainer div.Frame div.LargeCTA span.call-to-action {height:33px;line-height:33px;margin:17px 8px 17px 0;display:inline-block}
div#ContentContainer div.Frame div.LargeCTA a.Button { border-color:rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2) ;border-style:solid solid none;border-width:1px 1px medium;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.25) inset, 0 1px 1px rgba(0, 0, 0, 0.3);cursor:pointer;display:block;font-size:1em;height:35px;padding:0 12px 0 12px;margin:0 0 0 5px;text-decoration:none!important;text-transform:uppercase;width:80px;float:left;text-align:center;background-color:#333;color:#FFF;border-radius:2px;-moz-border-radius:2px;-webkitborder-radius:2px; }

div#ContentContainer.SubLanding div.Frame div.ServicesLinks {width:592px;margin:0 0 0 20px}
div#ContentContainer.SubLanding div.Frame div.ServicesLinks ul {margin:20px 0 0 0;float:left}
div#ContentContainer.SubLanding div.Frame div.ServicesLinks.TwoWide ul li {width:236px;padding:20px;float:left;margin:0 20px 20px 0;background:#f2f2f2;border-bottom:Solid 1px #e0e0e0;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}
div#ContentContainer.SubLanding div.Frame div.ServicesLinks.TwoWide ul li h3 {margin:0;padding:0;font-size:1.6em;}
div#ContentContainer.SubLanding div.Frame div.ServicesLinks.TwoWide ul li ul {margin:0}
div#ContentContainer.SubLanding div.Frame div.ServicesLinks.TwoWide ul li ul li {background:url(/images/global/GlobalUnbrandedBullet.gif) no-repeat left 10px;padding:0 0 0 10px;margin:0;border:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}
div#ContentContainer.SubLanding div.Frame div.Content {margin:0 20px 20px 20px; }
div#ContentContainer.SubLanding div.Frame div.Content h2 {padding:0;margin:30px 0 0 0;clear:both;font-size:1.4em;text-transform:uppercase;font-weight:normal}
div#ContentContainer.SubLanding div.Frame div.Content p {padding:0;margin:10px 0 20px 0;clear:both;font-size:1.1em;}
div#ContentContainer.SubLanding div.Frame div.Content a { text-decoration:underline; }
div#ContentContainer.SubLanding div.Frame div.Content img.AwardsRight {margin:0 0 9px 9px;width:145px;height:101px;float:right}
div#ContentContainer.SubLanding div.Frame div.Content a img.AwardsRight{border:none}

div#ContentContainer.SubLanding div.Frame div.Content img.Awards {margin:0 0 9px 9px;width:120px;height:58px;float:right}
div#ContentContainer.SubLanding div.Frame div.Content a img.Awards {border:none}

div#ContentContainer.SubLanding div.Frame div.Content ul {padding:0;margin:10px 0;clear:both;font-size:1.1em}
div#ContentContainer.SubLanding div.Frame div.Content ul li {background:url(/images/global/GlobalUnbrandedBullet.gif) no-repeat left 10px;margin:0;padding:0 0 0 10px; }
div#ContentContainer.SubLanding div.Frame div.Table {margin:20px;border-spacing:0}
div#ContentContainer.SubLanding div.Frame div.Table h4 {background:#999;padding:10px 20px;margin:0;color:White;text-shadow:0 1px 0 #999}
div#ContentContainer.SubLanding div.Frame div.Table table {border-collapse:collapse;margin:0;padding:0;width:100%;clear:both;border-right:Solid 1px #ccc}
div#ContentContainer.SubLanding div.Frame div.Table table tr th,
div#ContentContainer.SubLanding div.Frame div.Table table tr td {border-bottom:Solid 1px #ccc;text-align:left;vertical-align:middle;padding:10px 20px;border-left:Solid 1px #ccc}
div#ContentContainer.SubLanding div.Frame div.Table table tr th {background:#efefef;font-size:1.1em}
div#ContentContainer.SubLanding div.Frame div.ImageIntro{width:654px;border-top:Solid 1px #ddd}
div#ContentContainer.SubLanding div.Frame div.ImageIntro p{position:absolute;width:614px;padding:10px 20px;margin:0;background:url(/images/sublanding-template/right-image-intro/image-intro-background.png) bottom repeat-x}
div#ContentContainer.SubLanding div.Frame div.ImageIntro img{width:654px;height:187px}
div#ContentContainer.SubLanding div.Frame div.InPageSearch div.Content{margin:0}
div.InPageSearch{ padding:0;margin:0 0 0 20px;position:relative;width:612px}
div.InPageSearch div.Content{ background:#EEE;padding:0 0 25px 0; }
div.InPageSearch div.Content div.PromotionAutocompleteContainer{background:none;border:none;padding:0}
div.InPageSearch div.Content label{color:#333;display:block;font-size:1.8em;font-weight:normal;margin:8px 0 11px 19px; }
div.InPageSearch div.Content div.InputBg input{float:left;margin:0 0 0 20px;padding:9px 6px;width:278px}

div.InPageSearch div.Content div.InputBg a { border-color:rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2) ;border-style:solid solid none;border-width:1px 1px medium;box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.25) inset, 0 1px 1px rgba(0, 0, 0, 0.3);cursor:pointer;display:block;font-size:1em;height:35px;padding:0 12px 0 12px;margin:0 0 0 5px;text-decoration:none;text-transform:uppercase;width:35px;text-align:center;background-color:#333;color:#FFF;border-radius:2px;-moz-border-radius:2px;-webkitborder-radius:2px; }

div#ContentContainer.SubLanding div.Frame div.InPageSearch div.Content p{font-size:1.2em;font-weight:normal;line-height:1em;margin:56px 0 0 390px;position:absolute;top:0;width:120px}
div#ContentContainer.SubLanding div.Frame div.ChainFreeImageIntro{background:#f1f1f1;padding:0 1px;height:199px;width:652px}
div#ContentContainer.SubLanding div.Frame div.ChainFreeImageIntro img{height:199px;width:652px}
div#ContentContainer.SubLanding div.Frame div#PromotionalSearchContainer div.Left{float:left;width:327px}
div#ContentContainer.SubLanding div.Frame div#PromotionalSearchContainer div.Right{border-left:1px solid #ddd;float:left;width:326px}
div#ContentContainer.SubLanding div.Frame div#PromotionalSearchContainer div.PromotionAutocompleteContainer label{float:none;width:230px}
div#ContentContainer.SubLanding div.Frame div#PromotionalSearchContainer div.PromotionAutocompleteContainer .InputBg{float:none}
div#ContentContainer.SubLanding div.Frame div#PromotionalSearchContainer div.PromotionAutocompleteContainer .InputBg input{width:234px}
div#ContentContainer.SubLanding div.Frame div#PromotionalSearchContainer div.PromotionAutocompleteContainer .InputBg a:hover{background:#666 url(/images/promotions/promotion-sprite.png) no-repeat -36px -128px}
div#ContentContainer.SubLanding div.Frame div.Content div.Left{float:left;padding:0 20px 0 0;width:287px}
div#ContentContainer.SubLanding div.Frame div.Content div.Right{border-left:1px solid #ddd;float:left;padding:0 0 0 20px;width:286px}
div#ContentContainer.SubLanding div.Frame div.Content div.Right ul{padding:0 0 35px}
div#ContentContainer.SubLanding div.Frame div.Content div.PromotionAutocompleteResults ul{margin:18px 0}
div#ContentContainer.SubLanding div.Frame div.Content div.PromotionAutocompleteResults ul li{padding:0}
div#ContentContainer.SubLanding div.Frame div.Content .awards-image{float:right; margin:0 0 13px 13px }
div#ContentContainer.SubLanding div.Frame div.Content p.wrap{clear:none;  }

/*In Page Form Global*/
div#InPageForm {background:#f5f5f5;margin:20px;padding:0;float:left;width:614px;height:auto;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}
div#InPageForm #ContactFormFields {width:auto}
div#InPageForm .Error label {color:#C73B3C}
div#InPageForm .Error .ToolTip {position:absolute;font-size:12px;margin:27px 0 0 -112px;padding:0 10px 0 0;width:108px;height:auto;background:Transparent url(/images/in-page-forms/tool-tip-top.gif) no-repeat center top}
div#InPageForm .Error .ToolTip div.One {background:Transparent url(/images/in-page-forms/tool-tip-bottom.gif) no-repeat left bottom;width:92px;padding:8px;font-size:12px;line-height:normal}
div#InPageForm #ContactFormFields {margin:0}
div#InPageForm .Title {border-bottom:Solid 1px #e5e5e5;width:594px;padding:0 10px;line-height:40px;height:40px}
div#InPageForm .Title h6 {font-size:1.2em;font-weight:normal;text-transform:uppercase}
div#InPageForm .Header h6 {font-size:1.2em;font-weight:normal;text-transform:uppercase}
div#InPageForm .Content {float:left;margin:10px!important;width:594px;padding:0}
div#InPageForm .Content .ColumnOne {float:left;width:277px;margin:0 0 0 10px}
div#InPageForm .Content .ColumnTwo {float:right;width:277px;margin:0 10px 0 0}
div#InPageForm .Content div fieldset {width:277px;margin:0 0 10px}
div#InPageForm .Content div fieldset label {width:277px;line-height:30px;height:30px;display:block}
div#InPageForm .Content div fieldset label sup {margin:0 0 0 0.4em;vertical-align:middle}
div#InPageForm .Content .ColumnOne input {width:267px;padding:4px;margin:0;line-height:22px;height:22px}

/* New Contact Forms */
div#InPageForm .Content div#UserForm1.Page1 .DPA fieldset {clear: none;float: left;height: auto;margin: 0 20px 0 0;padding: 0;width: 277px}
div#InPageForm div#UserForm1.Page1 .DPA fieldset label {float: right;font-weight: normal;height: auto;line-height: normal;width: 250px}
div#InPageForm div#UserForm1.Page1 .DPA fieldset input {border: medium none;clear: both;line-height: 19px;margin: 0;padding: 4px;float: left;}
div#InPageForm div#UserForm1.Page1 .Button {margin: 10px 10px}
div#InPageForm .Content div fieldset input#ContactPropertyValue {width:150px}
div#InPageForm .Content div.ColumnTwo textarea {width:267px;height:165px}
div#InPageForm .Content div.Search {float:left;height:30px;margin:10px 0 0;background:#e5e5e5;padding:10px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}
div#InPageForm .Content div.Search fieldset {width:574px}
div#InPageForm .Content div.Search label {float:left;width:auto; line-height:32px;height:32px;margin:0 10px 0 0}
div#InPageForm .Content div.Search input {width:200px;float:left;clear:none;height:22px;line-height:22px;padding:4px}
div#InPageForm .Button {float:left;margin:10px 20px;width:574px;padding:0 0 20px;height:44px;border-bottom:Solid 1px #e5e5e5}
div#InPageForm .Button p {float:left;line-height:44px;margin:0;padding:0}
div#InPageForm .Button p sup {vertical-align:middle;margin:0 0.4em 0 0}
div#InPageForm .Button button {height:44px;text-shadow:0 1px 0 #900e22;text-align:center;float:right;line-height:44px;margin:0;padding:0;border:0;background:#c51230;width:141px;font-size:1.4em;font-weight:bold;color:White;border:Solid 2px #900e22;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}
div#InPageForm .DPA {float:left;margin:10px 0 10px 20px;width:594px;height:auto;font-size:95%}
div#InPageForm .DPA fieldset {float:left;width:277px;height:auto;margin:0 20px 0 0;padding:0;clear:none}
div#InPageForm .DPA fieldset input {border:none}
div#InPageForm .DPA fieldset label {float:right;width:250px;height:auto;line-height:normal;font-weight:normal}
div#InPageForm .Legal {float:left;margin:15px 20px 20px;width:574px;font-size:95%}
div#InPageForm .Legal p {line-height:normal;padding:5px 0 0;margin:0}

/*In Page Form Part II*/
div#InPageForm #BranchResults fieldset#PlaceSearch {margin:20px 0;width:594px;display:inline}
div#InPageForm #BranchResults fieldset#PlaceSearch input {width:267px;padding:4px;margin:0 10px 0 0;line-height:22px;height:22px;float:left}
div#InPageForm #BranchResults fieldset#PlaceSearch button {height:32px;text-shadow:0 1px 0 #900e22;text-align:center;float:left;line-height:32px;margin:0;padding:0;border:0;background:#c51230;width:141px;font-size:1.2em;font-weight:bold;color:White;border:Solid 2px #900e22;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}
div#InPageForm #BranchResults ul {float:left;width:592px;margin:20px 0;padding:0;list-style-type:none;border:solid 1px #ccc;border-bottom:none}
div#InPageForm #BranchResults ul li {float:left;width:100%;height:74px;background:White;border-bottom:solid 1px #ccc;padding:0}
div#InPageForm #BranchResults ul li fieldset {width:100%;height:74px;margin:0;padding:0;border:none;float:left}
div#InPageForm #BranchResults ul li fieldset .Checkbox {margin:26px 12px 0;width:auto;float:left}
div#InPageForm #BranchResults ul li fieldset .Checkbox input {margin:0;padding:0;height:auto;width:auto;border:none}
div#InPageForm #BranchResults ul li fieldset img {float:left;margin:6px 20px 0 0}
div#InPageForm #BranchResults ul li fieldset label {width:auto;display:block;margin:0.6em 0 0 0;font-size:1.3em;font-weight:normal;color:#333;outline:none!important}
div#InPageForm #BranchResults ul li fieldset label em {margin:0;font-size:0.8em;font-weight:normal;font-style:normal;color:#999}
div#InPageForm #BranchResults ul li fieldset p {width:auto;margin:0;padding:0;font-size:1em;font-weight:normal;color:#999;clear:none}

/*In Page Form Thanks*/
div#InPageForm .Thanks {margin:20px 0;font-size:1em}

/*Back to mobile asset*/
#back-to-mobile {display:block; background:url(/images/global/mob-asset-base.png) bottom left repeat-x #2EA8E5;}
#back-to-mobile a {display:block; text-align:center; padding:15px 0 0 0; height:42px; font-family:Calibri, Arial, Helvetica, sans-serif; color:#FFF; text-decoration:none; font-size:23px; line-height:23px;}
#back-to-mobile a span {padding:0 0 15px 80px; background: url(/images/global/mobile-icon.png) top left no-repeat;}

/*Back to mobile asset*/
div#ContentContainer div.Frame h1 {margin:10px 20px 0 0;padding:0;font-size:2em;line-height:normal;font-weight:normal}

/*EPC Banner*/
div#epc-widget {margin:10px 0 0;float:left}
.hiddenOnCat { display:none !important; }

/*Top Tools*/
ul.Links {float:right;height:25px;z-index:1;margin:0;position:relative; }
ul.Links li { margin:0 0 0 3px;float:right; }
ul.Links li a { padding:0 10px 0 10px;height:22px;line-height:21px;display:inline-block;margin:0;cursor:pointer;text-decoration:none;background-color:#CCC;color:#333;border-color:rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2) ;border-style: solid solid none;border-width: 1px 1px medium;text-transform:uppercase;font-size:0.75em;box-shadow:0 0 0 1px rgba(255, 255, 255, 0.25) inset, 0 1px 1px rgba(0, 0, 0, 0.3);border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px; }
ul.Links li a span { display:inline-block; }
ul.Links li a.Credit { background:#0e9ecd;color:#FFF; }
ul.Links li a.Credit:hover { background:#038bb8; }
ul.Links li a img { display:none; }


div#GlobalListingDidYouMeanContainer {width:652px;margin:0;color:#333;padding:10px 0 0;border-top:Solid 1px #ddd;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd}
div#GlobalListingDidYouMeanContainer div.ResultsWrapper{border:none;background:none;min-height:38px;position:relative;padding-bottom:0px}
div#GlobalListingDidYouMeanContainer div.ResultsWrapper h1,
div#GlobalListingDidYouMeanContainer div.ResultsWrapper h2 {font-size:1em;font-weight:normal;display:block;line-height:20px;margin:10px 0 0 10px;width:430px;text-align:left}
div#GlobalListingDidYouMeanContainer div.ResultsWrapper h1 span,
div#GlobalListingDidYouMeanContainer div.ResultsWrapper h2 span {margin:0}
div#GlobalListingDidYouMeanContainer div.ResultsWrapper div#NumberOfProperties {font-size:inherit;font-weight:normal;display:inline;line-height:38px;margin:0}
div#GlobalListingDidYouMeanContainer div.ResultsWrapper div#NumberOfProperties span {font-size:1.3em;font-weight:bold;line-height:1px}
div#GlobalListingDidYouMeanContainer div.ResultsWrapper a.DidYouMeanButton span {z-index:1}
div#GlobalListingDidYouMeanContainer span.Title{margin:0 0 15px;display:block}
div#GlobalListingDidYouMeanContainer a#DidYouMeanHideButton{color:#333;background:url(/images/icons/close-white-bg-sprite.gif) no-repeat right top;float:right;height:20px;line-height:20px;padding:0 25px 0 0}
div#GlobalListingDidYouMeanContainer a#DidYouMeanHideButton:hover{color:#333;background:url(/images/icons/close-white-bg-sprite.gif) no-repeat right bottom}
div#GlobalListingDidYouMeanContainer div.ResultsWrapper a{background:url(/images/results/version-2.0/did-you-mean-sprite.gif) no-repeat 0 -2px;border:none;cursor:pointer;display:inline-block;font-size:13px !important;height:36px;line-height:32px;padding:0 5px 0 0;text-align:right;width:103px;margin:0 0 -1px;text-decoration:none}
div#GlobalListingDidYouMeanContainer div.ResultsWrapper a.Selected{background:url(/images/results/version-2.0/did-you-mean-sprite.gif) no-repeat -216px 0;border:none;cursor:pointer;display:inline-block;font-size:13px !important;height:36px;line-height:32px;padding:0 5px 0 0;text-align:right;width:103px;margin:0 0 -1px}


div.DidYouMeanWrapper{background:#fefce5;padding:20px 10px;overflow:hidden; }
div.DidYouMeanWrapper ul li {padding:0 0 5px 0;width:50%;float:left; }
div#ResultsListingContainer div#ResultsMap div#GlobalListingPagingContainerOne {background:#80807f;color:#fff;border-left:solid 1px #ddd;border-right:solid 1px #ddd;border-bottom:none;display:inline;float:left;height:35px;padding:0 16px;width:618px}
div#ResultsListingContainer div#ResultsMap div#GlobalListingPagingContainerOne div.One div.Two{margin:10px 0 0 }
div#ResultsListingContainer div#GlobalListingPagingContainerOne#Bottom {border-bottom-left-radius:5px;-moz-border-radius-bottomleft:5px;-webkit-border-bottom-left-radius:5px;border-bottom-right-radius:5px;-moz-border-radius-bottomright:5px;-webkit-border-bottom-right-radius:5px}
div#ResultsListingContainer div#GlobalListingPagingContainerOne div.Inner {float:left;width:auto}
div#ResultsListingContainer div#GlobalListingPagingContainerOne div.Inner button {background:none;border:0;padding:0 15px 0 0;margin:0 10px;display:inline;font-size:.9em;background:url(/images/results/sort-arrows-sprite.gif) no-repeat}
div#ResultsListingContainer div#GlobalListingPagingContainerOne div.Inner button.Descending {background-position:right -25px;}
div#ResultsListingContainer div#GlobalListingPagingContainerOne div.Inner button.Ascending {background-position:right -55px;}
div#ResultsListingContainer div#GlobalListingPagingContainerOne div.Inner button.SelectedDescending {color:#333;font-weight:bold;background-position:right 5px}
div#ResultsListingContainer div#GlobalListingPagingContainerOne div.Inner button.SelectedAscending{color:#333;font-weight:bold;background-position:right -85px}
div#ResultsListingContainer div#GlobalListingPagingContainerOne div.Inner button.SelectedDescending:hover,
div#ResultsListingContainer div#GlobalListingPagingContainerOne div.Inner button.Ascending:hover,
div#ResultsListingContainer div#GlobalListingPagingContainerOne div.Inner button.Descending:hover,
div#ResultsListingContainer div#GlobalListingPagingContainerOne div.Inner button.SelectedAscending:hover {color:#999}
div#ResultsListingContainer div#GlobalListingPagingContainerOne div.Inner button#ForSaleListOrderByDistance {background:none;padding:0}
div#ResultsListingContainer div#GlobalListingPagingContainerOne ul {float:right;margin:1px 0 0 0}
div#ResultsListingContainer div#GlobalListingPagingContainerOne ul li {float:left;margin:0 0 0 10px}
div#ResultsListingContainer div#GlobalListingPagingContainerOne ul li a {text-decoration:none}
div#ResultsListingContainer div#GlobalListingPagingContainerOne ul li.Selected a {font-weight:bold;color:#666}
div#ResultsListingContainer div#GlobalListingPagingContainerOne div.Two{float:left;}
div#ResultsListingContainer div#GlobalListingPagingContainerOne div#NumberOfProperties span { font-weight: bold ;}
div#ResultsListingContainer div#GlobalListingPagingContainerOne div.One ul{float:right;}
div#ResultsListingContainer div#GlobalListingPagingContainerTwo {float:left;font-size:1em;width:632px;background-color:#F8F8F8;color:#333;padding:8px 10px;border-left:Solid 1px #ddd;border-right:Solid 1px #ddd;border-bottom:Solid 1px #ddd; }
div#ResultsListingContainer div#GlobalListingPagingContainerTwo#Bottom {border-bottom-left-radius:5px;-moz-border-radius-bottomleft:5px;-webkit-border-bottom-left-radius:5px;border-bottom-right-radius:5px;-moz-border-radius-bottomright:5px;-webkit-border-bottom-right-radius:5px}
div#ResultsListingContainer div#GlobalListingPagingContainerTwo div.Inner {float:left;width:auto}
div#ResultsListingContainer div#GlobalListingPagingContainerTwo div.Inner button {background:none;border:0;padding:0 15px 0 0;margin:0 10px;display:inline;font-size:.9em;background:url(/images/results/sort-arrows-sprite.gif) no-repeat}
div#ResultsListingContainer div#GlobalListingPagingContainerTwo div.Inner button.Descending {background-position:right -25px;}
div#ResultsListingContainer div#GlobalListingPagingContainerTwo div.Inner button.Ascending {background-position:right -55px;}
div#ResultsListingContainer div#GlobalListingPagingContainerTwo div.Inner button.SelectedDescending {color:#333;font-weight:bold;background-position:right 5px}
div#ResultsListingContainer div#GlobalListingPagingContainerTwo div.Inner button.SelectedAscending{color:#333;font-weight:bold;background-position:right -85px}
div#ResultsListingContainer div#GlobalListingPagingContainerTwo div.Inner button.SelectedDescending:hover,
div#ResultsListingContainer div#GlobalListingPagingContainerTwo div.Inner button.Ascending:hover,
div#ResultsListingContainer div#GlobalListingPagingContainerTwo div.Inner button.Descending:hover,
div#ResultsListingContainer div#GlobalListingPagingContainerTwo div.Inner button.SelectedAscending:hover {color:#999}
div#ResultsListingContainer div#GlobalListingPagingContainerTwo div.Inner button#ForSaleListOrderByDistance {background:none;padding:0}
div#ResultsListingContainer div#GlobalListingPagingContainerTwo ul {float:right;margin:1px 0 0 0}
div#ResultsListingContainer div#GlobalListingPagingContainerTwo ul li {float:left;margin:0 0 0 10px}
div#ResultsListingContainer div#GlobalListingPagingContainerTwo ul li.paging-prev a, div#ResultsListingContainer div#GlobalListingPagingContainerTwo ul li.paging-next a { display:block;width:20px;height:20px;text-indent:-9999px;position:relative;top:-3px;background-image:url(/images/global/pagination-arrows.png);background-repeat:no-repeat; }
div#ResultsListingContainer div#GlobalListingPagingContainerTwo ul li.paging-prev a { background-position: center left; }
div#ResultsListingContainer div#GlobalListingPagingContainerTwo ul li.paging-next a { background-position: center right; }
div#ResultsListingContainer div#GlobalListingPagingContainerTwo ul li.Selected a {font-weight:bold;color:#666}
div#ResultsListingContainer div#GlobalListingPagingContainerTwo div.Two{float:left;}
div#ResultsListingContainer div#GlobalListingPagingContainerTwo div.One ul{float:right;}
div#ResultsListingContainer div#DetailsListingToolsContainerTwo a.Back { display:none;}

div#GlobalListingToolsContainerOne div.One { display: inline; float: left; margin:7px 0 0 0; padding:12px 16px 13px 16px; width: 620px; }

div#ResultsListing div#GlobalListingToolsContainerOne {background-color:red;line-height:0;font-size:0;position:relative;height:0}
div#ResultsListing div#GlobalListingToolsContainerOne div.One { display: inline; float: right; margin:0px; padding:0; width: 193px}
div#GlobalContainer div#GlobalListingToolsContainerOne div.One { border-left:Solid 1px #ddd; border-right:Solid 1px #ddd; }
div#GlobalListingToolsContainerOne ul.Tools{position:absolute;right:10px;z-index:10;float:right; height: 22px; line-height: 22px; list-style: none outside none; margin:20px 0 0 0; padding: 0}
div#GlobalListingToolsContainerOne ul.Tools li { color: #666666; display: inline; float: left; margin: 0 0 0 8px; padding: 0;font-size:13px}
div#GlobalListingToolsContainerOne ul.Links {float: left; height: 22px; line-height: 22px; list-style: none outside none; margin: 0; padding: 0;}
div#GlobalPropertyDetails div#GlobalListingToolsContainerOne ul.Links {height: 22px; line-height: 22px; list-style: none outside none; margin-top: -50px; padding: 0;}
div#GlobalListingToolsContainerOne ul.Links li {float: left; margin: 0 8px 0 0;padding: 0; }
div#GlobalListingToolsContainerTwo div.One {display:inline;float:right;margin:15px 0px;padding:0 8px 0}
div#GlobalListingToolsContainerTwo ul.Tools{float: right; height: 22px; line-height: 22px; list-style: none outside none; margin: 0; padding: 0;}
div#GlobalListingToolsContainerTwo ul.Tools li { color: #666666; display: inline; float: left; margin: 0 0 0 8px; padding: 0;font-size:0.9em; }
div#GlobalListingToolsContainerTwo ul.Links {float: left; height: 22px; line-height: 22px; list-style: none outside none; margin: 0; padding: 0;}
div#GlobalListingToolsContainerTwo ul.Links li {float: left; margin: 4px 8px 0 0;padding: 0; }
div.SearchResultsContainer ul#Key {height:25px;line-height:25px}
div.SearchResultsContainer ul#Key li {background:url(/images/map/key-properties-icons-sprite.gif) no-repeat;line-height:inherit;padding:0 0 0 24px;margin:0 20px 0 0;float:right}
div.SearchResultsContainer ul#Key li.Single {background-position:0 0}
div.SearchResultsContainer ul#Key li.Multiple {background-position:0 -24px}
div.SearchResultsContainer ul#Key li.Center {background-position:0 -48px}

div#GlobalListingToolsContainerOne div.One ul.Tools li select, div#GlobalListingToolsContainerTwo div.One ul.Tools li select {font-size: 11px;margin: 0;padding:2px}

div#DetailsLargeImageContainer
{
    width:670px; margin:0; clear:both; float:left;position:relative;
}
div#DetailsLargeImageContainer img
{
    margin:0px; float:left; display:inline; padding:0; width:652px; border:1px solid #ddd
}
div#DetailsLargeImageContainer img.Prev{border:none;display:none;height:37px;margin-left:1px;position:absolute;width:71px;top:200px;cursor:pointer}

div#DetailsLargeImageContainer img.Next{border:none;display:none;height:37px;margin-left:582px;position:absolute;width:71px;top:200px;cursor:pointer}

div#DetailsContentContainer, div#UnavailableContentContainer
{
    width:670px; margin:0; clear:both; float:left; color:#333; line-height:20px;
}
div#DetailsContentContainer h2.DescriptionAddress
{
    font-weight:bold; margin-bottom:20px; display:block; font-size:1.0em
}


/*Social Networking*/
div#GlobalListingToolsContainerOne div.One ul#AddThis {float:right;margin:0;padding:0 0 0 10px;list-style:none;height:31px;line-height:31px}
div#GlobalListingToolsContainerOne div.One ul#AddThis li {float:left;width:auto;height:16px;margin:0 8px 0 0;padding:0;color:#333;text-transform:uppercase; }
div#GlobalListingToolsContainerOne div.One ul#AddThis li.Title { font-size:0.8em; }
div#GlobalListingToolsContainerOne div.One ul#AddThis li.Link {float:left;width:16px;height:16px;margin:8px 4px 0 0}
div#GlobalListingToolsContainerOne div.One ul#AddThis li.Link a{border:none;float:left;width:16px;height:16px;background:url(/images/results/version-2.0/results-social-bookmarking-sprite.png) no-repeat }
div#GlobalListingToolsContainerOne div.One ul#AddThis li.Link a.Email{background-position:0 -72px}
div#GlobalListingToolsContainerOne div.One ul#AddThis li.Link a.Facebook{background-position:-20px -72px}
div#GlobalListingToolsContainerOne div.One ul#AddThis li.Link a.Twitter {background-position:-40px -72px}
div#GlobalListingToolsContainerOne div.One ul#AddThis li.Link a span{float:left;width:16px;height:16px}
div#GlobalListingToolsContainerOne div.One ul#AddThis li.More {float:left;width:25px;height:31px;margin:0;padding:0}
div#GlobalListingToolsContainerOne div.One ul#AddThis li.More a {cursor:pointer;width:25px;height:31px;float:left}
div#GlobalListingToolsContainerOne div.One ul#AddThis.Closed {background:url(/images/results/version-2.0/results-social-bookmarking-sprite.png) no-repeat 0 0}
div#GlobalListingToolsContainerOne div.One ul#AddThis.Closed li.More {background:White url(/images/results/version-2.0/results-social-bookmarking-sprite.png) no-repeat right 0}
div#GlobalListingToolsContainerOne div.One ul#AddThis.Closed li.More ul {display:none}
div#GlobalListingToolsContainerOne div.One ul#AddThis.Open {background:url(/images/results/version-2.0/results-social-bookmarking-sprite.png) no-repeat 0 -31px;}
div#GlobalListingToolsContainerOne div.One ul#AddThis.Open li.More {background:White url(/images/results/version-2.0/results-social-bookmarking-sprite.png) no-repeat right -31px; position:relative}
div#GlobalListingToolsContainerOne div.One ul#AddThis.Open li.More ul {display:inline}
div#GlobalListingToolsContainerOne div.One ul#AddThis.Open li.More div {position:absolute;float:left;right:25px;margin:30px -25px 0 0;height:auto;background:Transparent url(/images/results/version-2.0/results-social-bookmarking-sprite.png) no-repeat 0 -124px;z-index:10000;}
div#GlobalListingToolsContainerOne div.One ul#AddThis.Open li.More div ul {float:left;width:246px;height:auto;margin:5px 0 0 0;padding:0 0 10px 0;list-style:none;background:Transparent url(/images/results/version-2.0/results-social-bookmarking-sprite.png) no-repeat 0 bottom}
div#GlobalListingToolsContainerOne div.One ul#AddThis.Open li.More div ul li {margin:0 0 0 10px;padding:0;height:22px;width:113px;}
div#GlobalListingToolsContainerOne div.One ul#AddThis.Open li.More div ul li a {color:#333;float:left;width:80px;margin:0;padding:0}
div#GlobalListingToolsContainerOne div.One ul#AddThis.Open li.More div ul li a:hover {color:#33b0de}
div#GlobalListingToolsContainerOne div.One ul#AddThis.Open li.More div ul li span {float:left;margin:8px 6px 0 0;padding:0}

/*Floorplan and EPC's*/
div#DetailsContentContainer ul.FloorPlanAndEPCContainer {border-bottom:Solid 1px #d9d9d9;border-left:Solid 1px #D9D9D9;border-right:Solid 1px #D9D9D9;float:left;margin:0 0;padding:11px 14px;width:624px;display:inline;list-style:none;font-size:0.9em; }
div#DetailsContentContainer ul.FloorPlanAndEPCContainer li {float:left;margin: 0;padding:0;height:26px;line-height:26px}
div#DetailsContentContainer ul.FloorPlanAndEPCContainer li a {background:url(/images/results/version-2.0/results-floorplan-and-epc-sprite.gif) no-repeat;padding:0 0 0 30px;float:left;color:#333;cursor:pointer}

div#DetailsContentContainer ul.FloorPlanAndEPCContainer li a span {background:url(/images/results/version-2.0/results-floorplan-and-epc-sprite.gif) no-repeat;padding:0 8px 0 0;float:left}
div#DetailsContentContainer ul.FloorPlanAndEPCContainer li a span:hover { text-decoration:underline; }
div#DetailsContentContainer ul.FloorPlanAndEPCContainer li.Floorplan a {background-position:0 -78px}
div#DetailsContentContainer ul.FloorPlanAndEPCContainer li.Floorplan a span {background-position:0 26px}
div#DetailsContentContainer ul.FloorPlanAndEPCContainer li.EPC a {background-position:0 -130px}
div#DetailsContentContainer ul.FloorPlanAndEPCContainer li.EPC a span {background-position:0 26px}
div#DetailsContentContainer div.One {width:622px;margin:0;clear:both;float:left;padding:16px 24px 0 6px}
div#DetailsContentContainer ul.FloorPlanAndEPCContainer li.Brochure a {background-position:0 -26px}
div#DetailsContentContainer ul.FloorPlanAndEPCContainer li.Brochure a span {background-position:0 26px}
div#DetailsContentContainer ul.FloorPlanAndEPCContainer li.Virtual a {background-position:0 -182px}
div#DetailsContentContainer ul.FloorPlanAndEPCContainer li.Virtual a span {background-position:0 26px}
div#DetailsContentContainer ul.FloorPlanAndEPCContainer li.Enhanced a {background-position:0 -234px}
div#DetailsContentContainer ul.FloorPlanAndEPCContainer li.Enhanced a span {background-position:0 26px}
div#DetailsContentContainer ul.FloorPlanAndEPCContainer li.Panoramic a {background-position:0 -286px}
div#DetailsContentContainer ul.FloorPlanAndEPCContainer li.Panoramic a span {background-position:0 26px}
div#DetailsContentContainer ul.FloorPlanAndEPCContainer li.Audio a {background-position:0 -338px}
div#DetailsContentContainer ul.FloorPlanAndEPCContainer li.Audio a span {background-position:0 26px}
div#DetailsContentContainer ul.FloorPlanAndEPCContainer li.onlineauction a {background-position:0 -476px}
div#DetailsContentContainer ul.FloorPlanAndEPCContainer li.onlineauction a span {background-position:0 26px}


/*Turning on and off elements in Details View*/
div.PropertyDetails div#ResultsListingContainer div#GlobalAerialView,
div.PropertyDetails div#ResultsListingContainer div#GlobalMapView,
div.AerialView div#ResultsListingContainer div#GlobalPropertyDetails,
div.AerialView div#ResultsListingContainer div#GlobalMapView,
div.MapView div#ResultsListingContainer div#GlobalPropertyDetails,
div.MapView div#ResultsListingContainer div#GlobalAerialView {display:none}
div.PropertyDetails div#LeftWrap,
div.AerialView div#LeftWrap,
div.MapView div#LeftWrap,
div#GlobalMapView { float:left; }
div#propertyDetails {border:0;margin:0;border-left:Solid 1px #ddd;border-bottom:Solid 1px #ddd;clear:both;color:#333;font-size:.8em;float:left}
div#propertyDetails h5 {font-size:1.3em;font-weight:bold;line-height:40px;padding:0 10px 0 10px;display:block;background:#F8F8F8; }
div#propertyDetails h1 {padding:15px 0px 0px 10px;font-size:1.4em;font-weight:normal; }
div#propertyDetails h1 span { font-weight:normal;display:block; }
div#propertyDetails h3 { margin:10px 0 0 0;padding:0 0px 3px 10px;font-size:2.2em;line-height:1.1em;font-weight:normal; }
div#propertyDetails #address strong { font-size:1.2em; }
div#propertyDetails fieldset.Supplimentary {clear:both;margin:0;border:0;padding:10px}
div#propertyDetails fieldset.Supplimentary address {float:right;width:132px;margin:5px 0 0 0;font-style:normal}
div#propertyDetails fieldset.Supplimentary strong {padding:0}
div#propertyDetails fieldset.Supplimentary label {background:white;line-height:normal;padding:0;font-size:100%;font-weight:normal;width:auto}

div#propertyDetails div#address {float:right;font-style:normal;margin:0 10px 0 0;padding:0;width:154px}

div#nearbyPointsOfInterestContainer.DetailsToolsWrapper {border-bottom-left-radius:0;-moz-border-radius-bottomleft:0;-webkit-border-bottom-left-radius:0}
div#nearbyPointsOfInterestContainer.DetailsToolsWrapper div p{padding:4px 0 13px 0;}
div.AerialView div#ResultsListingContainer div#GlobalAerialView { float:left; }
div.DetailsToolsWrapper {border:0;margin:0;border-left:Solid 1px #ddd;border-bottom:Solid 1px #ddd;clear:both;color:#333;font-size:0.9em; }
div.DetailsToolsWrapper div#agentWrap{padding:11px 0 5px}
div.DetailsToolsWrapper a.Contact {text-decoration:none;color:#333;display:inline-block;padding:7px;background:White url(/images/details/fade.png);border:1px solid #BBB;font-size:0.9em; }
div.DetailsToolsWrapper a.Contact:hover {background:#f3f3f3 url(/images/details/fade.png)}
div.DetailsToolsWrapper a.Contact span {background:url(/images/details/property-details-sprite.png) no-repeat left 3px;padding:0 5px 0 23px}
div.DetailsToolsWrapper h5 {font-size:1.2em;font-weight:bold;line-height:40px;padding:0 10px;display:block;background:#F8F8F8;}
div.DetailsToolsWrapper span.ShowHide { float:right ;margin:-30px 10px 0 0}
div.DetailsToolsWrapper span.AddMorePOItoMAP {font-size:1.35em;}
div.DetailsToolsWrapper div{padding:0 10px 10px}
div.DetailsToolsWrapper div.SlidingBanner,
div.DetailsToolsWrapper div.BuyListingsAdContainer{padding:0 0;}
div.DetailsToolsWrapper#nearbyPointsOfInterestContainer div {padding:10px}
div.DetailsToolsWrapper div.BuyListingsAdContainer div.Content{ border-left: none;border-bottom: none;}

div.DetailsToolsWrapper#nearbyPointsOfInterestContainer label{ float:left;font-size:14px;font-weight:bold;margin:0;width:262px}

div.DetailsToolsWrapper div strong {font-size:1.1em;padding:0px;color:#333; }
div.DetailsToolsWrapper div ul { float:left;margin:10px 0 10px 0;padding:0;width:285px}
div.DetailsToolsWrapper div ul li{border-bottom:1px solid #f2f2f2;clear:both;float:left;margin:0;padding:3px 10px;width:265px}
div.DetailsToolsWrapper div ul li img{margin:0 4px 0 0}
div.DetailsToolsWrapper div ul li img span{float:left;width:180px}
div.DetailsToolsWrapper div ul#selectedPointsOfInterestList li input {float:right;}
div.DetailsToolsWrapper div ul li a label{display:none}

div.DetailsToolsWrapper#nearbyPointsOfInterestContainer div ul li {float:left;width:265px!important;clear:both;padding:5px;margin:0;background:#F8F8F8;border-bottom:Solid 1px #DDD; }      
div.DetailsToolsWrapper#nearbyPointsOfInterestContainer div ul li img {float:left;margin:0 8px 0 0}
div.DetailsToolsWrapper#nearbyPointsOfInterestContainer div ul li span {width:170px!important;float:left}
div.DetailsToolsWrapper#nearbyPointsOfInterestContainer div ul li span.Distance {float:right;text-align:right;width:65px!important}
div.DetailsToolsWrapper#nearbyPointsOfInterestContainer div ul li a img {float:right}
div.DetailsToolsWrapper#nearbyPointsOfInterestContainer div ul li a label {display:none}

div.DetailsToolsWrapper a#pointsOfInterestShowOnMapLink {text-decoration:none;background:White url(/images/details/fade.png);color:#333;margin:0 10px 10px 10px!important;display:inline-block;width:auto;padding:7px;border:1px solid #BBB; }
div.DetailsToolsWrapper a#pointsOfInterestShowOnMapLink span {background:url(/images/details/property-details-sprite.png) no-repeat left -16px;padding:0 0 2px 23px}
div.DetailsToolsWrapper a#pointsOfInterestShowOnMapLink:hover {background:#f3f3f3 url(/images/details/fade.png)}

div.DetailsToolsWrapper div.MortgageCalculatorContent {padding:10px 0}
div.DetailsToolsWrapper div.MortgageCalculatorContent fieldset {padding:0 10px}
div.DetailsToolsWrapper div.MortgageCalculatorContent label {margin:0 0 6px 0;clear:none;float:left;font-size:1em;width:145px;font-weight:normal;height:28px;line-height:28px;padding:0;display:block;background:none}
div.DetailsToolsWrapper div.MortgageCalculatorContent label sup {font-size:14px;position:absolute;vertical-align:super;color:#333; }
div.DetailsToolsWrapper div.MortgageCalculatorContent input {font-size:1em;color:#333;background-image:url(/images/details/mortgage-calculator-sprite.gif);margin:0 0 6px 0;padding:4px 0;height:18px; clear:none;float:right;width:137px;border:Solid 1px #CCC;}
div.DetailsToolsWrapper div.MortgageCalculatorContent input#deposit {padding:4px 9px 4px 20px;width:108px;background-position:0 -1px}
div.DetailsToolsWrapper div.MortgageCalculatorContent input#rate {padding:4px 9px;width:119px;background-position:0px -27px}
div.DetailsToolsWrapper div.MortgageCalculatorContent input#years {padding:4px 9px;width:119px;background-position:0px -55px}
div.DetailsToolsWrapper div.MortgageCalculatorContent span#mortgage { font-size:1.2em;width:139px;margin:0 0 6px 0;padding:0;float:right;clear:none;display:block;line-height:28px;background-position:10px}
div.DetailsToolsWrapper div fieldset.MortgageCalculator span#repayment {float:left;line-height:28px;border:0;padding:0;margin:0px 0 0 0;float:left;color:#2fa4da;font-size:1.8em;font-weight:bold}
div.DetailsToolsWrapper div fieldset.MortgageCalculator span#interestOnly {line-height:28px;border:0;padding:0;margin:0px 0 0 0;float:left;color:#333;font-size:1.6em}
div.DetailsToolsWrapper div.MortgageCalculatorContent fieldset div#Error {background:#fefce5;padding:6px;margin:7px 0;float:left;width:271px;border:Dotted 1px #ccc;height:auto; }
div.DetailsToolsWrapper div.MortgageCalculatorContent fieldset div#Error span {margin:0 0 8px 0;display:block;color:#333; }
div.DetailsToolsWrapper div.MortgageCalculatorContent fieldset div#Error label {margin:2px 0 0 0;height:auto;font-size:1em!important;color:#333;clear:both;width:238px;display:block;line-height:16px}
div.DetailsToolsWrapper div.MortgageCalculatorContent fieldset div#Error label span {margin:0;font-size:inherit;display:inline}
div.DetailsToolsWrapper div.MortgageCalculatorContent hr {height:1px;border:none;color:#ededed;background:#ededed;margin:10px 0;padding:0}
div.DetailsToolsWrapper div.MortgageCalculatorContent h6 {margin:10px;font-size:1.2em}
div.DetailsToolsWrapper div.MortgageCalculatorContent a.MortgageLink {margin:0 10px;width:285px;display:block}
div.DetailsToolsWrapper div.MortgageCalculatorContent a.Credit {margin:10px 10px 0 10px;padding:0 19px 0 5px;height:19px;line-height:19px;width:auto;clear:both;display:inline-block;color:White;background:#0091c1 url(/images/details/free-credit-report.gif) right center no-repeat;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}
small.MortgageCalculator {width:285px;clear:both;margin:10px 0 10px 0;float:left;font-size:11px;color:#999}

div.DetailsToolsWrapper div.MortgageCalculatorContent a.MortgageLink, div.DetailsToolsWrapper div.MortgageCalculatorContent a.ContactUsForm{display:block;margin:0 10px 7px;width:285px}

div.DetailsToolsWrapper#estateAgentsDetails div img.Logo { display:none }


/*New Content Page Footers*/
div#GlobalFooterContainer ul.MainContentListColOne{margin:0px 70px 0px 0px;}
div#GlobalFooterContainer ul.MainContentListColOne li h5{width:174px;}
div#GlobalFooterContainer ul.MainContentListColTwo{margin:19px 70px 0px 0px;}
div#GlobalFooterContainer ul.CWPropertyServicesList{margin:0px 70px 0px 0px;}
div#GlobalFooterContainer ul.CWPropertyServicesList li h5{width:174px;}
div#GlobalFooterContainer ul.CWPropertyServicesListColThree{margin:19px 70px 0px 0px;}
div#GlobalFooterContainer ul.CWPropertyServicesListColFour{margin:19px 0px 0px 0px;}

div#GlobalSearchContainer{float:left;width:306px}

/*Cross Sell Ads - Property Details*/
div.AdvertMarkupContainer {float:left}
div#AdvertDetailsContainer {display:none}
div.BuyDetailsAdContainer,
div.RentDetailsAdContainer {border:1px solid #d9d9d9;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;background:white;float:left;padding:5px 0 5px 7px;margin:0 0 12px 30px;width:280px;height:238px}
div.BuyDetailsAdContainer div {background:url(/promotions/crosssells/property-details-buy-ads.jpg);width:272px;height:237px;float:left}
div.BuyDetailsAdContainer div.MortgagesAd {background-position:0 0}
div.BuyDetailsAdContainer div.MortgagesAd p {font-size:x-small;color:#636161;text-align:right;height:25px;clear:right;padding:0;margin:0;line-height:1.2em;cursor:pointer}
div.BuyDetailsAdContainer div.MortgagesAd img.GBMIcon {float:right;margin:0} 
div.BuyDetailsAdContainer div.MortgagesAd img.NEGIcon {margin:13px 0 0 13px}
div.BuyDetailsAdContainer div.InsuranceAd {background-position:-1360px 0}

div.BuyDetailsAdContainer div.ConveyancingAd {background-position:-272px 0}
div.BuyDetailsAdContainer div.CommsAd {background-position:-816px 0}
div.BuyDetailsAdContainer div.FreeMarketAd {background-position:-1632px 0;margin-left:2px}
div.RentDetailsAdContainer div {background:url(/promotions/crosssells/property-details-rent-ads.jpg);width:272px;height:237px;float:left}
div.RentDetailsAdContainer div.LAServicesAd {background-position:-272px 0}
div.RentDetailsAdContainer div.CommsAd {background-position:-544px 0}
div.RentDetailsAdContainer div.StorageAd {background-position:-816px 0}
div.RentDetailsAdContainer div.EnergyAd {background-position:-1088px 0}
div.RentDetailsAdContainer div.EPCAd {background-position:-1360px 0}
div.BuyDetailsAdContainer div a span.Header,
div.RentDetailsAdContainer div a span.Header {padding:5px;margin:0;background:#2ea8e5;font-size:1.2em;color:white;display:inline;float:right;margin:80px 0 0 0;cursor:pointer;clear:both}
div.BuyDetailsAdContainer div a span.Paragraph,
div.RentDetailsAdContainer div a span.Paragraph {padding:4px;margin:2px 0 10px 0;background:#ddd;font-size:0.9em;color:#0b1d61;display:inline;float:right;min-width:180px;cursor:pointer}
div.BuyDetailsAdContainer div a img.GBMIcon,
div.RentDetailsAdContainer div a img.GBMIcon {float:right;margin-top:44px;width:143px;height:40px;border:none}
/*div.BuyDetailsAdContainer div.MortgagesAd a span {clear:none;text-align:left;float:left;color:#666}
div.BuyDetailsAdContainer div.MortgagesAd a span.Top {padding:160px 0 0 0;font-size:0.7em}
div.BuyDetailsAdContainer div.MortgagesAd a span.Bottom {width:140px;padding:10px 0 0 0;font-size:0.6em}*/
div.BuyDetailsAdContainer div.CommsAd ul,
div.RentDetailsAdContainer div.CommsAd ul {list-style:none;padding:0;margin:8px 0 0 0; float:left;width:280px;height:38px}
div.BuyDetailsAdContainer div.CommsAd ul li,
div.RentDetailsAdContainer div.CommsAd ul li {float:left;font-size:0.8em;display:block}
div.BuyDetailsAdContainer div.CommsAd ul li a,
div.RentDetailsAdContainer div.CommsAd ul li a {text-align:center;-moz-border-radius:3px;-moz-box-shadow:2px 2px #E6E5E5;background:#F7F7F7;border:1px solid #D9D9D9;color:#0b1d61;font-size:1em;font-weight:bold;line-height:12px;margin:0 0 0 6px;padding:3px;width:74px; display:block}
div.BuyDetailsAdContainer div.CommsAd ul li a:hover,
div.RentDetailsAdContainer div.CommsAd ul li a:hover {-moz-box-shadow:2px 2px #cfcfcf;background:#eaebec;border:1px solid #cdcbcb}
div.RentDetailsAdContainer div.LAServicesAd p {font-size:x-small;color:#636161;text-align:right;height:25px;clear:right;padding:0;margin:0;line-height:1.2em;cursor:pointer}
div.RentDetailsAdContainer div.LAServicesAd p a {display:inline;text-decoration:underline;width:250px;height:10px;color:#39ace6}
div.RentDetailsAdContainer div.LAServicesAd a.GBMIcon img {float:right;margin:8px 0 0 0}
div.BuyDetailsAdContainer div {background:url(/promotions/crosssells/property-details-buy-ads.jpg);width:272px;height:237px;float:left}
div.BuyDetailsAdContainer div.BlankBackground,
div.RentDetailsAdContainer div.BlankBackground {background-image:none}
div.BuyDetailsAdContainer div.BlankBackground img,
div.RentDetailsAdContainer div.BlankBackground img {margin:0;border:none}




div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper div.FullMiniMap div.MiniMap { display:none; }
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper div.FullMiniMap div.Selected{display:block; background:none;position:relative;z-index:1000}


div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper div.FullMiniMap div.Selected {z-index:0;margin:-252px 0 0 173px}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper div.FullMiniMap div.Selected div.One {background:url(/images/results/results-minimap-top.png) no-repeat;width:472px;margin:0;padding:0;height:11px;float:left;border:0}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper div.FullMiniMap div.Selected div.Two {background:url(/images/results/results-minimap-bg.png) repeat-y;height:229px !important;width:472px!important;margin:0;padding:0;float:left;border:0}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper div.FullMiniMap div.Selected div.Three {background:url(/images/results/results-minimap-bottom.png) no-repeat;width:472px;height:11px;float:left}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper div.FullMiniMap div.Selected div.Two div.TwoOne{margin:4px 14px;float:left;width:444px; display:inline}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper div.FullMiniMap div.Selected div.Two div.TwoOne h5 {float:left;margin:0;padding:0;font-size:16px;}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper div.FullMiniMap div.Selected div.Two div.TwoOne span {background:none;float:left; font-size:1.1em; line-height:1em; margin:0;color:#999; clear:both}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper div.FullMiniMap div.Selected div.Two .Map {overflow:hidden;border:Solid 1px #d9d9d9;float:left;margin:10px 14px 0 14px;display:inline;width:442px;height:170px;padding:0;position:relative;background:url(/images/loading.gif) no-repeat center center;font:14px Arial}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper div.FullMiniMap div.Selected div.Two .Map img {border:none;padding:0;height:auto;width:auto;background:none}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper div.FullMiniMap div.Selected div.Two .Map .mapPoint {width:19px;height:21px;background:url(/images/icons/single-property.png) no-repeat;color:white;font:8px Arial; background-repeat:no-repeat;}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper div.FullMiniMap div.Selected div.Two .Map span {float:none;padding-right:0}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper div.FullMiniMap div.Selected a.Close {background:url(/images/icons/close-white-bg-sprite.gif) no-repeat;background-position:right 0!important;float:right;height:20px;line-height:18px;margin:0;padding:0 30px 0 0;border:none}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper div.FullMiniMap div.Selected a.Close:Hover {background: url(/images/icons/close-white-bg-sprite.gif) no-repeat right -20px;background-position:right -20px! important;float:right;height:20px;line-height:18px;margin:0;padding:0 30px 0 0;border:none}
div#ResultsListingContainer ul#ResultsList li div.prop-button-wrapper div.FullMiniMap div.Selected div.Chevron {background: url(/images/icons/arrow.png) no-repeat center top;clear:both;float:left;height:15px;left:45px;position:absolute;top:243px;width:28px}

div.NavBar_zoomControlContainer {
    width:335px;
}

.MicrosoftMap_NavBar_typeMenu div {background: none; }
.MicrosoftMap_NavBar_typeMenu{ width:350px !important; height:100px !important;}
.NavBar_typePreview{ width: 20px !important; height: 20px !important;}
.NavBar_typeTitle{ font-size: 14px !important;}
.NavBar_typeDesc{ display: none !important;}
.NavBar_checkControls{ display: none !important;}



div#CloseAccountModal {
    margin: 50px auto 0;
    padding: 12px 0 0;
    text-align: left;
    width: 621px;
}

div#GlobalModalWrapper .Body .Content {
    color: #666666;
    float: left;
    padding: 0 25px;
}

div#CloseAccountModal div#CloseAccountModalText p{
    text-align: center;
    width: 547px;
    
}
fieldset.PropertyToSellCheck input{ border: none;}
fieldset.PropertyToSellCheck span{margin: 0px 0 0 8px;}

/*PROPERTY DETAILS IE7 ISSUE*/
div#GlobalPropertyDetails { width:654px;position:relative; }
div#GlobalPropertyDetails ul.Links{width:100%;height:31px;}
div#ResultsListingContainer {width:654px;position:relative;}
div#GlobalListingTabsContainer ul#TopTabs{ top:0;left:0;} 
div#GlobalListingDidYouMeanContainer div.ResultsWrapper {padding:0;} 
div#GlobalListingDidYouMeanContainer {float:left;padding:11px 0 0 0;margin:1px 0 0 0; }
div#ResultsListing{margin:0}
div#GlobalListingResultsContainer div#NoResults{border-left:none}
div#ResultsListingContainer div#GlobalListingPagingContainerOne{clear:both}
div#GlobalListingTabsContainer ul.PropertyList{width:100%}
div#GlobalListingToolsContainerOne{background:green}

/*ADDITIONAL INFORMATION PAGE*/
div#AgentsDetails.NoTabs{border-top:1px solid #ddd}
ul.Location-results{border-left:1px solid #ddd}
#additionalContentContainer{border:1px solid #ddd;border-top:none;float:left;padding:30px 10px;width:632px}
#additionalContentContainer p{margin:0 0 16px 0}
#AgentsDetails img{height:145px;margin:0 0 10px 10px;width:217px}

/*Hide Google VGN*/
span.googleplaces {text-indent:-9999px;position:absolute; z-index:-1000}

/*No Properties*/
div#SearchResultsContainer div#Properties div#NoResults{text-align:center}
div#SearchResultsContainer div#Properties div#NoResults div.Header{font-size:2.0em;font-weight:bold;padding:45px 0}
div#SearchResultsContainer div#Properties div#NoResults ul{min-height:auto}
div#SearchResultsContainer div#Properties div#NoResults ul li{background:none;border:none;height:auto;padding:0 0 15px}

/*Property Details Error Fixes*/
div#GlobalListingResultsContainer.error {display:inline-block}
div#GlobalPropertyDetails.error {margin:45px 0 0 0}

/*Nearby Locations*/
div.NearbyLinks {width:296px;padding:0;clear:both;margin:9px 0 0 0;float:left}
div.NearbyLinks div.One {float:left;margin:8px 0 0 0;width:;clear:both;padding:0;height:auto;border:1px solid #ddd; }
div.NearbyLinks div.One span {width:260px;margin:10px 17px 8px 16px;font-size:1.25em;font-weight:bold;line-height:30px}
div.NearbyLinks div.One ul li a { margin:0;padding:0;float:left;line-height:19px;font-size:0.8em;text-decoration:underline; }
div.NearbyLinks div.One div#NearbyPlacesContainer ul {float: left;width:274px;margin:0;padding:10px}
div.NearbyLinks div.One div#NearbyPlacesContainer ul li {width:50%;margin:0;padding:0;float: left;}
div.NearbyLinks ul.NearbyLinks {width:274px;margin:0;padding:10px;float:left;list-style-type:none; border-top:1px solid #ddd; }
div.NearbyLinks ul.NearbyLinks li {width:100%;margin:0;padding:0;float: left}
div.NearbyLinks ul.NearbyLinks li a { text-decoration:underline;float:left; }
div.NearbyLinks ul.NearbyLinks li:last-child { margin:0; }

.nearby-links-container, #nearby-branches-container { overflow:hidden; }
.nearby-branches-container #headerTextSpan, .nearby-links-container #headerTextSpan, #nearby-branches-container .nearby-branches-title { display:block;padding:3px 10px 3px 10px;color:#333;font-size:1em;font-weight:bold;line-height:30px;margin:0;width:274px;background:#F8F8F8; }
.nearby-branches-container .NearbyLinks, #nearby-branches-container .nearby-branches { width:263px!important;border-top:none!important;margin:0!important;padding:10px!important;overflow:hidden; }
.nearby-branches-container .NearbyLinks p span, #nearby-branches-container .nearby-branches p span { margin:0 0 5px 0!important;line-height:1em!important;font-weight:normal!important;float:left; }
#nearby-branches-container .nearby-branches p .branch-name { text-decoration:underline; }
.nearby-links-container #headerTextSpan, #nearby-branches-container .nearby-branches-title { color:#333; }
#nearby-branches-container .branch-address { font-size:0.8em!important; }
 #nearby-branches-container .branch-name { font-size:1em!important; }
#nearby-branches-container .nearby-branches li { margin:0 0 10px 0;float:left; }
.nearby-branches-container p { font-size:0.7em;margin:0;float:left; }
.nearby-branches p { margin:0!important; }

/*Prestige Homes*/
#ContentContainer.PrestigeContent .Frame div.PrestigeHomes{border:1px solid #E9E9E9;border-radius:5px;-moz-border-radius-:5px;-webkit-border-radius:5px;padding:0px 0;position:relative; margin:20px 0 20px 0}
#ContentContainer.PrestigeContent .Frame div.PrestigeHomes div.Content{background:#E9E9E9;padding:0 0 20px 0}
#ContentContainer.PrestigeContent .Frame div.PrestigeHomes div.Content div.PromotionAutocompleteContainer{background:none;border:none;padding:0}
#ContentContainer.PrestigeContent .Frame div.PrestigeHomes div.Content label{color:#333;display:block;font-size:1.8em;font-weight:bold;margin:8px 0 11px 19px}
#ContentContainer.PrestigeContent .Frame div.PrestigeHomes div.Content div.PromotionAutocompleteContainer div.InputBg{width:370px;border:0px;margin: 0 0 0 19px}
#ContentContainer.PrestigeContent .Frame div.PrestigeHomes div.InPageSearch div.Content div.InputBg input{float:left;margin:0 10px 0 30px;padding:8px 0;width:278px;border:0px}
#ContentContainer.PrestigeContent .Frame .InfoText h3{margin:20px 0 18px 0; font-size:21px; color:#000;}

html div.PrestigeHomes div.PromotionAutocompleteContainer .InputBg a {background:#666 url(/images/promotions/promotion-sprite.png) no-repeat scroll 0 -128px;cursor:pointer;float:left;height:36px;margin:0 0 0 5px;width:36px}
html div.PrestigeHomes div.PromotionAutocompleteContainer .InputBg a:hover {background:url(/images/promotions/promotion-sprite.png) -36px -128px }

#ContentContainer.PrestigeContent div.Border {border:1px solid #ddd;color:#333;float:left;font-size:0.8em;margin:-1px 0 0 0;min-height:38px;padding:0;width:652px;background-color:#FFF;overflow:auto}
#ContentContainer.PrestigeContent div.Border .PrestigeLogo {float:left;}
#ContentContainer.PrestigeContent div.Border .PrestigeLogo img {margin: 15px 0 15px 20px;overflow:auto}
#ContentContainer.PrestigeContent div.Border .PrestigeHeader {float:left;}
#ContentContainer.PrestigeContent div.Border .PrestigeHeader h2 {color:#999999; font-family:Georgia, "Times New Roman", Times, serif; font-weight:normal; font-size:21px; margin: 49px 0 0 18px}
#ContentContainer.PrestigeContent .Frame div.PrestigeHomes div.PromotionAutocompleteResults ul {width:244px;margin:0;padding:0;height:auto;line-height:30px;list-style:none;position:absolute;top:20px; z-index:70;}
#ContentContainer.PrestigeContent .Frame div.PrestigeHomes div.PromotionAutocompleteResults ul li {background: url(/images/global/global-predictive-middle-bg.jpg) repeat-x 50% bottom;margin:0;padding:0;border:1px solid #d9d9d9;float:left;width:244px;}
#ContentContainer.PrestigeContent .Frame div.PrestigeHomes div.PromotionAutocompleteResults ul li a {display:block;line-height:25px;padding:0 10px;color:#333;text-shadow:1px 1px White}
#ContentContainer.PrestigeContent .Frame div.PrestigeHomes div.PromotionAutocompleteResults ul li a:hover, #ContentContainer.PrestigeContent .Frame div.PrestigeHomes div.PromotionAutocompleteResults ul li.Selected a {color:#fff;text-shadow:none}
#ContentContainer.PrestigeContent .Frame div.PrestigeHomes div.PromotionAutocompleteResults ul li.selected a {color:#fff;}
#ContentContainer.PrestigeContent .Frame div.PrestigeHomes div.Content p {line-height:20px;clear:both;margin:10px 0;font-size:1.2em;font-weight:bold;margin:52px 0 0 340px;top:0;width:130px;padding:0;position:absolute}
#ContentContainer.PrestigeContent .Frame div.PrestigeHomes div.Content div.PrestigeTab {background: transparent;clear:both;margin:0 0 0 540px;position:absolute;top:0;width:54px;padding:0; z-index 20;}

form { padding:0;margin:0; }

/* HORIZONAL AND VERTICAL CENTERED MODAL */
.acquisitions-modal-wrapper { background:url(/images/acquisitions-modal/modal-bg.png) repeat scroll 0 0 transparent;position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:10000; }
.acquisitions-modal-wrapper .modal-float { float:left;height:50%;width:100%;margin-bottom:-195px; }
.acquisitions-modal-wrapper .modal-border-top { margin:auto;width:625px;background-image:url(/images/acquisitions-modal/top-bg.png);background-repeat:no-repeat;padding:14px 0 0 0;position:relative;clear:both; }
.acquisitions-modal-wrapper .modal-hold { width:625px;background-image:url(/images/acquisitions-modal/middle-bg.png);background-repeat:repeat-y; }
.acquisitions-modal-wrapper .modal-border-top .modal-border-bottom { background-image:url(/images/acquisitions-modal/bottom-bg.png);background-repeat:no-repeat;height:14px;margin:0;padding:0;position:relative;width:625px; }
.acquisitions-modal-wrapper .modal-inner { font-family:"Calibri", Helvetica, sans-serif;color:#333;width:597px;background:#FFF;margin:0 0 0 12px; }
.acquisitions-modal-wrapper .modal-inner a { color:#333;text-decoration:underline; }
.acquisitions-modal-wrapper .modal-inner h1 { margin:0;padding:0 30px 25px 30px;font-size:2.1em;line-height:1.2em;font-weight:normal; }
.acquisitions-modal-wrapper .modal-inner h1 span { font-weight:bold; }
.acquisitions-modal-wrapper .modal-inner p { margin:0;padding:0 30px 15px 30px;font-size:1em;line-height:1.4em;font-weight:normal; }
.acquisitions-modal-wrapper .modal-inner ul { list-style:none;margin:0;padding:0 30px 10px 30px; }
.acquisitions-modal-wrapper .modal-inner ul li { font-size:1.2em;margin:0 0 10px 0;background-image:url(/images/acquisitions-modal/tick.jpg);background-repeat:no-repeat;background-position:0px 0px;padding:0 0 0 35px; }
.acquisitions-modal-wrapper .modal-inner .modal-header { height:44px;background-repeat:repeat-x; }
.acquisitions-modal-wrapper .modal-inner .modal-header h6 { display:inline;float:left;font-size:1.25em;font-weight:bold;line-height:44px;margin:0 0 0 20px;padding:0;text-shadow:0 1px 1px #FFFFFF; }
.acquisitions-modal-wrapper .modal-inner .modal-header a.modal-close { background-color:#E6E6E6;clear:none;cursor:pointer;display:inline-block;float:right;height:25px;width:25px;margin:10px 10px 0 0;padding:0;-webkit-box-shadow:inset 0px 0px 2px 0px #BBB;box-shadow:inset 0px 0px 2px 0px #BBB;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;border:#BBB 1px solid; }
.acquisitions-modal-wrapper .modal-inner .modal-header a.modal-close:hover { background-color:#DDD; }
.acquisitions-modal-wrapper .modal-inner .modal-header a.modal-close span { display:block;width:16px;height:16px;background-image:url(/images/acquisitions-modal/close.png);background-repeat:no-repeat;background-position:right;margin:4px 0 0 4px; }
.acquisitions-modal-wrapper .modal-inner .modal-header a.modal-close:hover span { background-position:left; }
.acquisitions-modal-wrapper .modal-inner .modal-button  { padding:10px 0 70px 0; }
.acquisitions-modal-wrapper .modal-inner .modal-button .explore-button { display:block;float:right;background-color:#2AA837;border:#2AA837 1px solid;text-decoration:none;margin:0 25px 0 0;padding:0 15px 0 15px; }
.acquisitions-modal-wrapper .modal-inner .modal-button .explore-button span { display:block;width:100%;text-align:center;color:#FFF;padding:6px 0 6px 0;font-size:1.2em; }
.acquisitions-modal-wrapper .modal-inner .modal-button .explore-button:hover { background-color:#208f2b;border:#106719 1px solid; }

.float-left { float:left!important; }
.float-right { float:right!important; }

/* COOKIES */
#ContentContainer .Frame h1 {font-size:1.8em;font-weight:normal;color:#333;margin:10px 0 20px 0;display:block}
#ContentContainer .Frame h2 {font-weight:bold;color:#333;margin:20px 0 10px 0;}
#ContentContainer .Frame ul.cookieslist {list-style-type:square;line-height:20px;clear:both;padding:0;margin:10px 0;clear:both;}
#ContentContainer .Frame ul.cookieslist li {border:none;background: url(/images/global/GlobalUnbrandedBullet.gif) no-repeat left 10px;margin:0;padding:0 0 0 10px;font-weight:bold;}
#ContentContainer .Frame .DataTwoColumn-wrap {background-color:#EAEAEA;border:1px solid #EAEAEA;padding:5px;margin:20px 0 20px 0;}
#ContentContainer .Frame .DataTwoColumn-wrap .DataTwoColumn-title {color:#FFF;font-size:1.2em;line-height:20px;padding:10px 15px;overflow:auto;}
#ContentContainer .Frame .DataTwoColumn-wrap .DataTwoColumn-title .lefttitle {float:left;width:200px;color:#333;font-weight:bold}
#ContentContainer .Frame .DataTwoColumn-wrap .DataTwoColumn-title .righttitle {float:left;width:368px;color:#333;font-weight:bold}
#ContentContainer .Frame .DataTwoColumn-wrap .DataTwoColumn-container {background:#fff;border:1px solid #eee;padding:5px 15px 0px;display:block;overflow:auto;}
#ContentContainer .Frame .DataTwoColumn-wrap .DataTwoColumn-container .leftcolumn {float:left;width:200px;}
#ContentContainer .Frame .DataTwoColumn-wrap .DataTwoColumn-container .rightcolumn {float:left;width:368px;}

/* COUNTRY HOMES */
ul#TopTabs.Content.country-homes{display:none;} 
#ContentContainer .PromoHeader img.ch-header {}
#ContentContainer .Frame .ch-cta {padding:15px 0;float:left;}
#ContentContainer .Frame .ch-cta a{background-color:#818284; padding:10px 15px; color:#FFF;-webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px; font-size:16px; font-weight:bold; }
#ContentContainer .Frame .ch-cta a:hover {background-color:#333}
#ContentContainer .Frame p.lead-in {font-size:17px; line-height:22px;float:left; clear:none;padding:3px 0 0 6px}


/* DID YOU KNOW - LETTINGS */
.didyouknow-campaign-cont { background-color:#FFF;width:100%;float:left;overflow:hidden;font-size:1.2em!important;border:#CCC 1px solid; }
.didyouknow-campaign-cont p { line-height:1.4em;clear:none!important; }
.didyouknow-campaign-cont .didyouknow-campaign-header { width:100%;float:left;position:relative;overflow:hidden;padding:0 0 15px 0; background-color:#FFFFFF; }
.didyouknow-campaign-cont .didyouknow-campaign-header img { margin:15px 0 15px 40px; }
.didyouknow-campaign-cont .didyouknow-campaign-header p { color:#6D6D6C;margin:0 45px 15px 45px!important;font-size:0.9em; }
.didyouknow-campaign-cont .didyouknow-campaign-header p.intro-text { color:#444;font-size:1em;line-height:1.3em; }
.didyouknow-campaign-cont .didyouknow-campaign-header p a { color:#52AD48;text-decoration:underline; }
.didyouknow-campaign-cont .speech-bubble { width:291px;height:191px;float:right;background-image:url(/Images/promotions/didyouknow/speechbubble.png);background-repeat:no-repeat;margin:0 45px 0 45px; }
.didyouknow-campaign-cont .speech-bubble p { padding:30px 0 8px 0!important;margin-bottom:5px!important;color:#FFF;text-align:center;font-size:1.1em;text-shadow: 0 0 2px #444; }
.didyouknow-campaign-cont .didyouknow-campaign-text { width:574px;float:left;overflow:hidden;padding:20px 45px 20px 45px;margin:0; }
.didyouknow-campaign-cont .didyouknow-campaign-text p { font-size:0.9em; }
.didyouknow-campaign-cont .didyouknow-campaign-text p.text-fade { color:#D4F1D1!important; }
.didyouknow-campaign-cont .didyouknow-campaign-text.yellow { background-color:#FFCC00;-webkit-box-shadow:0px 4px 4px 0px rgba(0, 0, 0, 0.3);-moz-box-shadow:0px 4px 4px 0px rgba(0, 0, 0, 0.3);box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);position:relative;z-index:2; }
.didyouknow-campaign-cont .didyouknow-campaign-text.yellow p { color:#000; }
.didyouknow-campaign-cont .didyouknow-campaign-text.yellow img { float:left;margin:15px 45px 30px 0px; }
.didyouknow-campaign-cont .didyouknow-campaign-text.dark-green { background-color:#52AD48;margin:0!important;-webkit-box-shadow:0px 3px 3px 0px rgba(0, 0, 0, 0.3);-moz-box-shadow:0px 3px 3px 0px rgba(0, 0, 0, 0.3);box-shadow:0px 3px 3px 0px rgba(0, 0, 0, 0.3);position:relative;z-index:1; }
.didyouknow-campaign-cont .didyouknow-campaign-text.dark-green p { color:#FFF;text-shadow: 0 0 1px #444; }
.didyouknow-campaign-cont .didyouknow-campaign-text.dark-green img { float:right;margin:12px 0 10px 20px; }
.didyouknow-campaign-cont .didyouknow-campaign-contact { width:100%;float:left;position:relative;background-image:url(/Images/promotions/didyouknow/didyouknow-bg.jpg);background-repeat:no-repeat; }
.didyouknow-campaign-cont .didyouknow-campaign-contact h3 { text-align:center;font-weight:normal;font-size:1.3em!important;margin:45px 0 5px 0!important;padding:0;color:#6D6D6C!important; }
.didyouknow-campaign-cont .didyouknow-campaign-contact p { text-align:center;font-size:0.9em;margin:0;padding:0;color:#6D6D6C; }
.didyouknow-campaign-cont .didyouknow-campaign-contact p a { color:#52AD48;text-decoration:underline; }
.didyouknow-campaign-cont .didyouknow-campaign-terms { padding:30px 0 45px 0!important; }
.didyouknow-campaign-cont .didyouknow-campaign-terms p { font-size:0.75em;text-align:left;margin:0 45px 0 45px!important; }
.didyouknow-campaign-cont .contact-us-btn { display:block;margin:auto;height:40px;background-image:url(/Images/promotions/didyouknow/btn-bg.png);border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;color:#FFF;text-decoration:none;width:200px;-webkit-box-shadow: 1px 1px 1px 0px rgba(50, 50, 50, 0.35);-moz-box-shadow: 1px 1px 1px 0px rgba(50, 50, 50, 0.35);box-shadow: 1px 1px 1px 0px rgba(50, 50, 50, 0.35); }
.didyouknow-campaign-cont .contact-us-btn:hover { background-image:none;background-color:#303030;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;color:#FFF; }
.didyouknow-campaign-cont .contact-us-btn span { display:block;text-align:center;padding:8px 0 0 0;font-size:1em; }

/* PETE'S BRANDING FOR NEW STYLE TABS */
/*Search Auto Complete in page*/
#SearchContainer ul li a { background:#CCC;border-color:rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2) ;border-style: solid solid none;border-width: 1px 1px medium;box-shadow:0 0 0 1px rgba(255, 255, 255, 0.4) inset, inset 0px -10px 3px -5px rgba(50, 50, 50, 0.1);-moz-box-shadow:0 0 0 1px rgba(255, 255, 255, 0.4) inset, inset 0px -10px 3px -5px rgba(50, 50, 50, 0.1);-webkit-box-shadow:0 0 0 1px rgba(255, 255, 255, 0.4) inset, inset 0px -10px 3px -5px rgba(50, 50, 50, 0.1);text-transform:uppercase;font-size:0.9em; }
#SearchContainer .Watermark { background:none!important; }
#SearchContainer.Buying #Buy, #SearchContainer.Renting #Rent, #SearchContainer.Selling #Sell { background:#FFF!important;border-top:#ddd 1px solid;border-left:#ddd 1px solid;border-right:#ddd 1px solid;height:33px;position:relative;top:-1px;-webkit-box-shadow: 0px -1px 0px 1px rgba(0, 0, 0, 0.02);-moz-box-shadow: 0px -1px 0px 1px rgba(0, 0, 0, 0.02);box-shadow: 0px -1px 0px 1px rgba(0, 0, 0, 0.02); }

/*Top Tabs*/
#TopTabs li { background-color:#CCC;background-image:url(/Images/global-navigation-icons.png);background-repeat:no-repeat;border-color:rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2) ;border-style: solid solid none;border-width: 1px 1px medium;box-shadow:0 0 0 1px rgba(255, 255, 255, 0.4) inset, inset 0px -10px 3px -5px rgba(50, 50, 50, 0.1);-moz-box-shadow:0 0 0 1px rgba(255, 255, 255, 0.4) inset, inset 0px -10px 3px -5px rgba(50, 50, 50, 0.1);-webkit-box-shadow:0 0 0 1px rgba(255, 255, 255, 0.4) inset, inset 0px -10px 3px -5px rgba(50, 50, 50, 0.1);text-transform:uppercase;font-size:0.9em; }
#TopTabs li a { line-height:30px; }
#TopTabs .Selected, .Content li.NoIcon { background-color:#FFF!important;border-left:#ddd 1px solid!important;border-right:#ddd 1px solid!important;border-top:#ddd 1px solid!important;position:relative!important;top:-1px!important;-webkit-box-shadow: 0px -1px 0px 1px rgba(0, 0, 0, 0.02)!important;-moz-box-shadow: 0px -1px 0px 1px rgba(0, 0, 0, 0.02)!important;box-shadow: 0px -1px 0px 1px rgba(0, 0, 0, 0.02)!important; }
#TopTabs .Selected a, .Content li.NoIcon a { height:33px!important;color:#666!important;line-height:32px!important; }
#TopTabs .ResultsList { background-position:5px 2px; }
#TopTabs .ResultsMap { background-position:2px -30px; }
#TopTabs .GalleryList { background-position:2px -120px; }
#TopTabs .PropertyDetails { background-position:2px -60px; }
#TopTabs .AerialView { background-position:2px -90px;  }
#TopTabs .MapView { background-position:2px -30px; }
#TopTabs .EAOffices, #TopTabs .LAOffices, #TopTabs .Buy, #TopTabs .Rent { background-image:none; }

#litFooterSearchText { font-size:1em; }

/* CONTENT PAGE FIX FOR CMS */
#GlobalPropertyDetails #ContentContainer .Content .Border, #GlobalPropertyDetails #ContentContainer .Content .PromoImage { border-left:none;border-right:none;margin:0 0 0 -20px; }


.didyouknow-campaign-cont a.didyouknow-pdf {color:#FFCC00}
.thank-you.tax-strategy-guide span.strategy-tax-guide-link {font-size:14px; padding:0 0 20px 0}
.thank-you.tax-strategy-guide a { display:block; width:400px; font-size:14px;margin:0 0 0 90px}
.thank-you.tax-strategy-guide a img { float:left; width:60px; height:auto;}
.thank-you.tax-strategy-guide a span { float:left;width:320px;font-size:18px!important; text-align:left; padding:7px 0 0 0; }


/* TRAVEL TIME RESULTS PAGE ADS */
#GlobalMainContentContainer #GlobalContentWrapper .Inner .low-strip-banner, #GlobalMainContentContainer #GlobalContentWrapper .Inner .mid-strip-banner, #GlobalMainContentContainer #GlobalContentWrapper .Inner .high-strip-banner {padding:0 0 27px 0; position:relative;}
#GlobalMainContentContainer #GlobalContentWrapper .Inner .low-strip-banner a.creative, #GlobalMainContentContainer #GlobalContentWrapper .Inner .mid-strip-banner a.creative, #GlobalMainContentContainer #GlobalContentWrapper .Inner .high-strip-banner a.creative {display:block; height:138px; cursor:pointer;}
#GlobalMainContentContainer #GlobalContentWrapper .Inner .low-strip-banner a.creative {background: url(/promotions/traveltime/tt-low-strip.jpg) left top no-repeat;}
#GlobalMainContentContainer #GlobalContentWrapper .Inner .mid-strip-banner a.creative {background: url(/promotions/traveltime/tt-mid-strip.jpg) left top no-repeat;}
#GlobalMainContentContainer #GlobalContentWrapper .Inner .high-strip-banner a.creative {background: url(/promotions/traveltime/tt-high-strip.jpg) left top no-repeat;}
#GlobalMainContentContainer #GlobalContentWrapper .Inner .low-strip-banner a.close, #GlobalMainContentContainer #GlobalContentWrapper .Inner .mid-strip-banner a.close, #GlobalMainContentContainer #GlobalContentWrapper .Inner .high-strip-banner a.close {position:absolute; top:10px; right:10px; background: url(/promotions/traveltime/close.png) left top no-repeat; width:13px; height:13px;}

/* PROMOTIONAL BANNER ADS */
.promotional-banner-wrap {overflow:auto; padding: 0 0 27px 0;}
.sales-promotional-banner-left {width: 466px; background-color: #fff; float: left; overflow:hidden;}
.sales-promotional-banner-right {width: 466px; background-color: #fff; float: right; overflow:hidden;}
.lettings-promotional-banner {width: 960px; background-color: #fff; overflow:hidden;}

/* BRANCH REVIEWS */
.reviews-container { width:652px;border-right:#DDD 1px solid;border-left:#DDD 1px solid;border-bottom:#DDD 1px solid;clear:both; }
.reviews-container ul { padding:0 10px 10px 10px; }
.reviews-container ul li { border-bottom:#DDD 1px solid;padding:20px 0 20px 0;overflow:hidden; }
.reviews-container ul li:last-child { border-bottom:none; }
.reviews-container .review-title { width:432px;float:left; }
.reviews-container .review-title h3 { font-size:1.2em; }
.reviews-container .review-title .review-date { color:#999; }
.reviews-container .review-rating { width:200px;float:left; }
.reviews-container .review-rating .rating-value { float:left;display:block;width:100px;text-align:right;padding:0 10px 0 0;line-height:1.4em; }
.reviews-container .review-rating .rating-hold { float:right;width:90px; }
.reviews-container .review-rating .rating-hold .rating { display:block;float:left;width:18px;height:18px;background-image:url(/Images/star-rating.png);background-position:right; }
.reviews-container .review-rating .rating-hold .rating.rating-on { background-position:left; }
.reviews-container .review-paragraph { float:left;padding:10px 0 0 0;width:100%; }

.branch-photo { width:274px;height:140px;background-color:#EEE;margin:10px;overflow:hidden; }
.branch-photo img { width:274px!important;margin:0!important; }
#AgentsDetails #CTA { border:none!important; }
#AgentsDetails #CTA ul { margin-bottom:10px; }
#AgentsDetails #CTA ul li { font-size:1.6em;background:url("/images/services/global-content-tick.gif") no-repeat scroll 2px 6px rgba(0, 0, 0, 0);padding:0 0 0 30px; }

/* LETTINGS CAMPAIGN */
.lettings-branch-campaign-container {
	padding-left:30px;
	padding-right:30px;
	padding-top:30px;
	padding-bottom:30px;
	overflow:hidden;
    float:left;
    border-left:#DDD 1px solid;
    border-right:#DDD 1px solid;
}
.lettings-branch-campaign-container .lettings-branch-campaign-heading {
	width:70%;
	float:left;
}
.lettings-branch-campaign-container .lettings-branch-campaign-heading h1 {
	font-size:2.1em;
	font-weight:normal;
}
.lettings-branch-campaign-container .lettings-branch-campaign-heading p {
	padding-top:10px;
}
.lettings-branch-campaign-container .lettings-branch-campaign-heading p a {
	text-decoration:underline;
}
.lettings-branch-campaign-container .lettings-branch-campaign-image {
	width:30%;
	float:left;
}
.lettings-branch-campaign-container .lettings-branch-campaign-image img {
	float:right;
}
.lettings-branch-campaign-container .lettings-branch-campaign-usp {
	padding-top:20px;
	float:left;
	width:100%;
	overflow:hidden;
}
.lettings-branch-campaign-container .lettings-branch-campaign-usp ul {
	width:50%;
	float:left;
}

.lettings-branch-campaign-container .lettings-branch-campaign-usp ul li {
	background:rgba(0, 0, 0, 0) url("http://www.taylorsestateagents.co.uk/images/services/global-content-tick.gif") no-repeat scroll 0px 8px;
	padding-left:25px;
	padding-top:5px;
	padding-right:30px;
	margin-bottom:8px;
}
.lettings-branch-campaign-container .lettings-branch-campaign-usp ul li.lettings-branch-campaign-cta {
	background:none;
	padding-top:12px;
	padding-left:0px;
	width:100%;
}
.campaign-cta-button {
	background-color: #5CAA28;
    border-color: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    border-style: solid solid none;
    border-width: 1px 1px medium;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.25) inset, 0 1px 1px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    display: block;
    margin: 0;
    padding: 0 10px;
    text-decoration: none;
}
.campaign-cta-button span {
	display:block;
	width:100%;
    text-transform: uppercase;
    font-size: 1em;
    color: #FFF;
    text-align:center;
    padding-top:8px;
    padding-bottom:8px;
}
.lettings-branch-campaign-terms {
	padding-top:15px;
	float:right;
	overflow:hidden;
	width:100%;
}
.lettings-branch-campaign-terms p {
	font-size:0.8em;
	color:#666;
	margin-bottom:2px;
}

/* STAMP DUTY CALCULATOR */
.StampDutyCalc .Calc{border-bottom:solid 1px #eee;background:#fafafa}
.StampDutyCalc .Calc h1{margin:0;padding:20px;color:#333;font-size:1.8em;text-align:center}
.StampDutyCalc .Calc hr{width:616px;height:0;margin:0 auto;padding:0;border-top:solid 1px #f0f0f0;border-bottom:solid 1px White;border-left:none;border-right:none}
.StampDutyCalc .Calc fieldset{border:none;margin:0;padding:20px 0;width:656px}
.StampDutyCalc .Calc fieldset legend{font-size:14px;margin:0 0 20px;padding:0;float:left;position:static;width:100%;text-align:center;color:#666}
.StampDutyCalc .Calc fieldset.Warning .ToolTip{display:block}
.StampDutyCalc .Calc fieldset .ToolTip {position:absolute;margin:0 0 0 -140px;background-image:url(/images/StampDutyCalc-TipBg.png);background-repeat:no-repeat;background-position:-18px center;width:106px;height:30px;padding:5px 15px 5px 5px;line-height:15px;display:none}
.StampDutyCalc .Calc fieldset .ToolTip small{position:absolute;float:left;width:106px;font-size:12px;text-transform:uppercase;color:white;text-align:center}
.StampDutyCalc .Calc fieldset .Supplimentary{position:absolute;margin:0 0 0 -14px;color:#4d4d4d;font-size: 16px;height:40px;line-height:40px;}
.StampDutyCalc .Calc fieldset div{width:320px;height:40px;margin:0 auto 0;display:block;clear:both}
.StampDutyCalc .Calc fieldset div input{float:left;height:38px;line-height:38px;border:solid 1px #ddd;color:#4d4d4d;padding:0 10px;width:159px;font-size:16px}
.StampDutyCalc .Calc fieldset.Warning div input{background:#fdfaea}
.StampDutyCalc .Calc fieldset div button{margin:0;padding:0;cursor:pointer;float:right;height:40px;line-height:40px;border-style: solid;border-width: 1px 1px 2px;border-color:#333;background:#4d4d4d;color:white;width:139px;font-size:16px;text-transform:uppercase}
.StampDutyCalc .Calc fieldset div button:focus{outline:0}
.StampDutyCalc .Calc fieldset div button:hover{background:#333}
div#ContentContainer .StampDutyCalc .Results{border-bottom:solid 1px #eee;display:none}
div#ContentContainer .StampDutyCalc .Results.Active{display:block}
div#ContentContainer .StampDutyCalc .Results ul{background-image:url(/images/StampDutyCalc-ResultsBg.png);margin:0;padding:0;list-style-type:none;float:left}
div#ContentContainer .StampDutyCalc .Results ul li.Rate{margin:0;padding:20px 10px;text-align:center;float:left;width:286px}
div#ContentContainer .StampDutyCalc .Results ul li.Rate h6{margin:0;padding:0;color:#333;font-size:12px}
div#ContentContainer .StampDutyCalc p.Amount{margin:0;padding:0;color:#333!important;font-size:25px!important;font-weight:bold}
div#ContentContainer .StampDutyCalc .Results ul li.Rate p.Amount{margin:0;padding:0;color:#333;font-size:25px!important;font-weight:bold}
div#ContentContainer .StampDutyCalc .Results ul li.Rate small.Date{color:#999;text-transform:uppercase}
div#ContentContainer .StampDutyCalc .Results ul li.Rate small.Date em{font-weight:bold;font-style:normal}
div#ContentContainer .StampDutyCalc .Results ul li.Rate small.Percentage{color:#999}
div#ContentContainer .StampDutyCalc .Results .Difference{clear:both;text-align:center;width:300px;display:block;margin:20px 168px 20px;padding:26px 10px 10px;background-image:url(/images/StampDutyCalc-DifferenceBg.png);background-repeat:no-repeat;background-position:center 4px}
div#ContentContainer .StampDutyCalc .Results .Difference p{color:white!important;margin:0;padding:0}
div#ContentContainer .StampDutyCalc .Results .Difference p.SubHeader{font-size:14px;text-transform:uppercase}
div#ContentContainer .StampDutyCalc .Results .Difference p.Amount{color: white !important;font-size:25px;font-weight:bold}
.StampDutyCalc .Content{margin:20px}
.StampDutyCalc .Content h2{margin:0 0 20px;font-size:14px}
.Stam.StampDutyCalc .Calc fieldset span buttonpDutyCalc .Content p{margin:0 0 20px}
.StampDutyCalc .Content table {margin:0 0 10px!important;color:#666;border-spacing:0;border-collapse:separate}
.StampDutyCalc .Content table thead,
.StampDutyCalc .Content table tbody,
.StampDutyCalc .Content table tr{margin:0;padding:0}
.StampDutyCalc .Content table thead,
.StampDutyCalc .Content table tbody,
.StampDutyCalc .Content table tr,
.StampDutyCalc .Content table tr th,
.StampDutyCalc .Content table tr td{border:none}
.StampDutyCalc .Content table tr th{color:#333;font-weight:bold}
.StampDutyCalc .Content table tr th,
.StampDutyCalc .Content table tr td{margin:0;padding:10px;background:#eff9fb;border-bottom:solid 1px #ddd;border-right:solid 1px #ddd}
.StampDutyCalc .Content table tr th.Last,
.StampDutyCalc .Content table tr td.Last{border-right:none}
.StampDutyCalc .Content table tr.Last td{border-bottom:none}
.StampDutyCalc .Content table tr th.Even,
.StampDutyCalc .Content table tr td.Even{background:White}
.StampDutyCalc .Content table{width:100%;margin:0;padding:0}
.StampDutyCalc .Content table tr th.Old,
.StampDutyCalc .Content table tr th.New{width:30%}
.StampDutyCalc .Content table tr td{text-align:center}
.StampDutyCalc .Content table tr td.Label{text-align:left}


/* Result list links */
/* alandemaid, hetheringtons, and 'to let' branch listing pages */
div.One div.Two span.fees-apply,
div#ResultsListingContainer ul#ResultsList li div.Two h2 a span.fees-apply,
/* generic */
#ResultsList .Two .fees-link .fees-apply, 
#ResultsListingContainer #GlobalPropertyDetails .l-property-header .l-fees-apply {
    margin-top: 5px;
    text-decoration: underline;
    display: block;
    font-size: .8125rem;
    color: #489AE2;
}
/* alandemaid, hetheringtons, and 'to let' branch listing pages */
div.One div.Two span.fees-apply:hover,
div#ResultsListingContainer ul#ResultsList li div.Two h2 a span.fees-apply:hover,
/* generic */
#ResultsList .Two .fees-link .fees-apply:hover, 
#ResultsListingContainer #GlobalPropertyDetails .l-property-header .l-fees-apply:hover {
    text-decoration: underline;
}
```
