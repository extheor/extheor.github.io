/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","eebdb823d87fbbfd45ca8cc4e9656995"],["/about/index.html","6766fa080154d36b9dc9ff57d16f618d"],["/aplayers/index.html","d0345f689c0ff932aaa7138240cc255e"],["/archives/2020/02/index.html","7e5c451f11e1b0376cba1d1ea0adc2fc"],["/archives/2020/02/page/2/index.html","90c7fa82c7861563717165aa94604fa0"],["/archives/2020/02/page/3/index.html","2492d431f63e6496c3a8e03f192eafbe"],["/archives/2020/02/page/4/index.html","62b5b3e8211ad928a29f5b0f339cf85e"],["/archives/2020/03/index.html","7ec4a132ee4b28ceb3442fbcb06e1a63"],["/archives/2020/03/page/2/index.html","dc8092875c3409498bc64aa3a25ac758"],["/archives/2020/03/page/3/index.html","fc3f5f0de68720bf8a9c0ddab19d72bb"],["/archives/2020/03/page/4/index.html","464e3e4e73ccf3f26f404a8350dfecdf"],["/archives/2020/03/page/5/index.html","50318d9e20dc914736bae580ef98d802"],["/archives/2020/03/page/6/index.html","42b7d418b836c640801b1a173f0b945b"],["/archives/2020/03/page/7/index.html","c01164d883037c771a02ce93c0875bea"],["/archives/2020/03/page/8/index.html","f8d5b0b4ad8ab6eac6352eb75b7e6e86"],["/archives/2020/04/index.html","3fed85b84b7fb49736930999928e4138"],["/archives/2020/04/page/2/index.html","6ade60aaf13ada0b8e6cbb86e7f34a1a"],["/archives/2020/04/page/3/index.html","d8487c450a5df01f6ebbf34464dffe36"],["/archives/2020/04/page/4/index.html","de3bbaac4e0d6f6ce449d842df11dcae"],["/archives/2020/05/index.html","c581a149eea4cfb5538552cffbc2e6ff"],["/archives/2020/07/index.html","d4771c90ceb0fca8cd98e79cf7b99a43"],["/archives/2020/07/page/2/index.html","de2ce060c03a3d3b1ec2da94c1a16714"],["/archives/2020/08/index.html","f988001782df3e65d84f0ab0599f08d0"],["/archives/2020/08/page/2/index.html","43bac6cf9d6d262989a7d3de7e2fb820"],["/archives/2020/09/index.html","2c0a8c04b80a2cd0d3b6ecb5ee35fdd9"],["/archives/2020/09/page/2/index.html","fc69cffaabd885f5433bbbafa3cb2869"],["/archives/2020/09/page/3/index.html","feb76408cca64cb00e6cc8c8414579f5"],["/archives/2020/10/index.html","67adaade01bdcf44e97dba0f00dad617"],["/archives/2020/index.html","31f6905104bf92b89afda3d5847806fa"],["/archives/2020/page/10/index.html","3235a139bfd834e23fb6d9d32c7ec7ad"],["/archives/2020/page/11/index.html","9efca0e94263987fb97d52ffcfe79571"],["/archives/2020/page/12/index.html","b40eaa2382c61ec9fa88cead4937d691"],["/archives/2020/page/13/index.html","2297b9687fa694099117ebdf066919e4"],["/archives/2020/page/14/index.html","15956805440e79b987f796c605131ff8"],["/archives/2020/page/15/index.html","03a4fb6033b7bf81987ac824718cb665"],["/archives/2020/page/16/index.html","da7f91b466f7d9aca936f930239d9280"],["/archives/2020/page/17/index.html","bb4fd8086b1aeaba59bdf07289e9104f"],["/archives/2020/page/18/index.html","d7fbbceb45745c92a170043d93e9da18"],["/archives/2020/page/19/index.html","da238bf583c9a392c03fb73d93dc1218"],["/archives/2020/page/2/index.html","97dcfdb455ff36cc9d359aacc327209d"],["/archives/2020/page/20/index.html","700e83d245b791ec019dba51b6e025f1"],["/archives/2020/page/3/index.html","993765f857964ad16bbda99810b676f6"],["/archives/2020/page/4/index.html","5abe6b278db0f899580ef87427d88421"],["/archives/2020/page/5/index.html","079ec75e495e9d0c1d8e4da5cb90dc46"],["/archives/2020/page/6/index.html","2c8afcd260452a1a3ba92a73bd2c9839"],["/archives/2020/page/7/index.html","51ced3edf9be953338143d92c579b005"],["/archives/2020/page/8/index.html","6a0caff3c3acb80e6b9f2f397c9fc8c6"],["/archives/2020/page/9/index.html","5803974abdac70d2f78a2aa74dfe040e"],["/archives/index.html","b6b83763b4a76e18b88e1dc354308d8d"],["/archives/page/10/index.html","902ffdab4f02137e0da4f79b967b8e52"],["/archives/page/11/index.html","75725d5c6c883d4dd5a57224be31871d"],["/archives/page/12/index.html","52547dbe9e1366819cd5ab970ef59607"],["/archives/page/13/index.html","42b27e0da789271fbefd33f3aff553e0"],["/archives/page/14/index.html","c80c6ac0bb44fbda82321e23d6e631db"],["/archives/page/15/index.html","4ba90a2b5bfa23485e735b283f61fe31"],["/archives/page/16/index.html","de46fd8ff4f8bc4c364fc9940b2d0dfd"],["/archives/page/17/index.html","b758c6fab881eacc2e63c82add2b93a5"],["/archives/page/18/index.html","2576eccdda199789119f77e00222d311"],["/archives/page/19/index.html","8d0b3683e718e7f2591c2a16567f5960"],["/archives/page/2/index.html","2a4b1eda8335ed232f93fa71382122dc"],["/archives/page/20/index.html","cb43fcdfffa6f92c6e6c6f3434692d29"],["/archives/page/3/index.html","56c00e3771b1483557ba30e5c2132434"],["/archives/page/4/index.html","c5a9a38e578e4d7e03eb69163e838c78"],["/archives/page/5/index.html","d99f92db8c6a4d7277dd6aee361f538c"],["/archives/page/6/index.html","f531c6f974e375bc6b152124b3a0a37a"],["/archives/page/7/index.html","514fa48fe529017ba4d0482948c9b132"],["/archives/page/8/index.html","2b3697e76b3a0f333c86ebcc77805589"],["/archives/page/9/index.html","901e563a8da8c4adfdd67807f74f1fda"],["/bangumis/index.html","e613aebdd3a357ce5ee3f056a5971b1a"],["/categories/Ajax/index.html","32ff9e1d0f870634313205d7e625adef"],["/categories/Ajax/page/2/index.html","fcd1fa2fd5db4e0f9749c2a64dd96ece"],["/categories/HTTP/index.html","511e8cbbc604740a65a8d3fce26e9954"],["/categories/Hexo/index.html","6fc2868e8203d862213b04a8b6ff5163"],["/categories/Hexo/标签外挂/index.html","825bd0283d2432744fd4dd67b79fa8d5"],["/categories/Hexo常用命令/index.html","dcdd0cce873fd54274aa94b42be9c6b8"],["/categories/JSON/index.html","b417d38307229b9f5582b33cdc867b66"],["/categories/MongoDB/index.html","6eb5a6591722b6aba48039b1b4c22ff4"],["/categories/Nodejs/index.html","e2dc9c457286fb316c8645ec52c9bf50"],["/categories/Nodejs博客系统/index.html","f969dc6664185ab7698c023554a6b4fc"],["/categories/index.html","9abf1fd9873d61dbaf17dccbe8e1669d"],["/categories/promise/index.html","5bb355daee78f2f16993576f23278cde"],["/categories/日语/index.html","1e9c39a679d515360a61279eb2197ff3"],["/categories/自学考试/index.html","05f901e64812be6c25093ff9ea7b9b05"],["/categories/自学考试/page/2/index.html","815b53766393716f5add668c093fa8e4"],["/categories/自学考试/中国近代史纲要/index.html","3072e1793dcde8102bef5e7667c51ff0"],["/categories/自学考试/管理经济学/index.html","69ed4cc9007d93f79d0bf464185dbd35"],["/categories/自学考试/考前突击/index.html","d297dd932f18dfee75510c6e0a161398"],["/categories/自学考试/考前突击/page/2/index.html","fc96ac6c48dfef118f9e0d5002dc01fd"],["/categories/自学考试/计算机网络原理/index.html","24e82d398f0a3973351880340264f7f9"],["/categories/自学考试/运筹学/index.html","060f802a3793bdd1b90c62a6bad1880b"],["/categories/自学考试/马克思主义/index.html","249a2f1a8228cca8bd8a42d0397f2c3c"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","275b77e5c8ab4aec71a8fa22caff011a"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","f038d8253b754c47b6a8e4440b995b63"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","4c9437773233477e1563448340f029f9"],["/page/3/index.html","114aa8fb09f08319acd7ea80680b1ee0"],["/page/4/index.html","021d0d3e87b467a9447f63f302e114cc"],["/page/5/index.html","0bf9432a44108dc035d4a7578f84c6ae"],["/page/6/index.html","d8ec3a4a524f528bcf999ce34e6881b8"],["/page/7/index.html","603c54e7755b8e8b24383bd0fd3a8cee"],["/posts/10812f0/index.html","3e26f8a943e9c63398f0765a490640b3"],["/posts/126b275/index.html","d02bb120cf1fc40c6ef5180282f77698"],["/posts/12d95a5e/index.html","5ff0067394c657251417511f3282bbd3"],["/posts/1367417b/index.html","24110167d6bbb5a3be76f370ca4faf71"],["/posts/13886e3f/index.html","fe004c4528cd7afa40b824e3e459a4b7"],["/posts/145193a5/index.html","9ee1167ee1505b5769a2bd54f42decc8"],["/posts/149dde25/index.html","f8e1d4ca4e2cae441dc4ec822ab7899e"],["/posts/152fa65b/index.html","fe5d01db457e5193ffbe3447fbdabeec"],["/posts/169e7dda/index.html","f683b9ed171da113dd4dc3e24734d940"],["/posts/1875100e/index.html","4a922afffc00d7ee88830f38493ff960"],["/posts/18eaef7d/index.html","05cbd38c460ebe762af462a13d438811"],["/posts/1a0bc7b7/index.html","3af4809088c03f63fd4c50755a1f45a1"],["/posts/1a20a057/index.html","597f9558076b68215bbed6d34aef5d74"],["/posts/1a998be6/index.html","33891b6bacfcc3c5ec4177383f855c15"],["/posts/1bffbd20/index.html","691bf2228ded5a88f2d701ccf5bd54b4"],["/posts/1c5a0485/index.html","4bfd07380f31ae5374515311aaa15df9"],["/posts/1e638f78/index.html","784a342b9db4f1211910756a26fb3e30"],["/posts/1fb53120/index.html","b606a3652ff35e53161bbe4ddba8edc9"],["/posts/21466e86/index.html","311e429499bfdd758a33237f2b118707"],["/posts/21abcf1a/index.html","9a005dd1b49ceea0044f79c96ff480ca"],["/posts/21c250b1/index.html","e4c269a849a4dd95418bd589ce0c9bd5"],["/posts/2287cc/index.html","ce8b0ab1625fff55651d1908f17aee49"],["/posts/236bfea3/index.html","35a6dfb86eae646f8a0d24117178116f"],["/posts/24caea6b/index.html","1147a61f10e0f67422566e81e6d7481f"],["/posts/25d45c3d/index.html","f2943ed11ff86512342838a1d9c38661"],["/posts/262baa9f/index.html","23c6ba20316634b5609edf2fb170b24b"],["/posts/27cdc142/index.html","b95415d3f4fae18f0c9cb004b2a24670"],["/posts/2895c4bb/index.html","255d05ec2eee481d6585c02f52fd2df2"],["/posts/28987ff3/index.html","bed052cc9deb43ebd28489e26b194bb8"],["/posts/29f0df96/index.html","2757d1e2ee2502ffe1c9413bb6ee0692"],["/posts/2a1d2b6f/index.html","96474547b9b384c136a1c784471d7876"],["/posts/2a386047/index.html","0fa30e5297dff2954fa702d9aba23c38"],["/posts/2b770baf/index.html","e7783c2289049a294b3415de7b16a8b1"],["/posts/2cda4a8/index.html","7bbfdfbede76af3ee5430ba176908e49"],["/posts/2d020832/index.html","7677e9358704edc14f1bc64f7fb9e18c"],["/posts/2d6d3bd/index.html","e5ef691aceb55443f7438fc702c9d8ca"],["/posts/2e0c129d/index.html","b54b27b0ecec39de76a5cfd4be9e2ad0"],["/posts/2e7563a0/index.html","aee1062540051dec2a14152327fd3e91"],["/posts/2e7b8d69/index.html","246c951d45e91f3811ac8baa208e5112"],["/posts/2f28d14b/index.html","c97b4bb058044965917d39f260f0b510"],["/posts/2f6e1383/index.html","2ba4512275618b2927eb21266574a73f"],["/posts/30bfd1cf/index.html","63f332677fb7d5c8b4deee8cf7f12c8a"],["/posts/33235106/index.html","d735df41efc69261fd38764549e469d4"],["/posts/344e951f/index.html","d3c9d657401ba0024055c34557613b97"],["/posts/35e2bcf6/index.html","a186a8402319a7153c3a42a759f21082"],["/posts/365e96c5/index.html","9657c76948952cb61728e9735c3e96f8"],["/posts/36e331e3/index.html","e49fe6827a70edf9aa95b7d3fdb794c9"],["/posts/372df90a/index.html","0b956c952285e3dc91a7ba12c6179004"],["/posts/37c547df/index.html","9a11ccc874439cc772eff6167a14572d"],["/posts/38a88481/index.html","cf3deb5a794d1079e203005be33cd49e"],["/posts/3914bfed/index.html","cea647ec6293ca02942fbc00a6178d7e"],["/posts/3b56780c/index.html","3e3efc65f1b0a914d03cc0308f294177"],["/posts/3e4bb613/index.html","e82a918e387b4695c1044d2687725c23"],["/posts/3f2e933/index.html","138e13a3c78ed1ca61c4c1f483988884"],["/posts/3f6e5f9e/index.html","021973aa0156d1d5fc09d0b1695af920"],["/posts/4349a589/index.html","a2ecc229f799171900ab556a9bb61105"],["/posts/44246190/index.html","992f0e51b5afe682d23cce8ff7fd2ec8"],["/posts/456550f/index.html","241c964db21eff72c452186d4decad5e"],["/posts/470ac03d/index.html","c4f86d4f40af88612faf0f3e1dfeb2d9"],["/posts/49249ac9/index.html","de899c10a3ec9e1cdd19e83f647032f8"],["/posts/49f2d2a/index.html","6b104ab67cd39c34a5dcc961371df6c8"],["/posts/4e6d4eb4/index.html","a67a0b6afae7016db08a536b5979d7f5"],["/posts/50caf1d4/index.html","c877d3ba6f1c110ee5f1640732a0753d"],["/posts/51139400/index.html","0252f59007a351157a51533e90755651"],["/posts/512c9a09/index.html","bd8c1c69e281ad98ae112ad5cc726739"],["/posts/5205b330/index.html","0947ac3c4f75800985ad3bbb3a395c17"],["/posts/52d36cab/index.html","bbc472967bc95998c539ada9391fb16c"],["/posts/532a083a/index.html","0ecb4bd70bb2a50a97ae17fb4e11edb9"],["/posts/537d2c2a/index.html","ff26c4e4f99094c8f71caa1cdc18d387"],["/posts/54383ba0/index.html","1c55242458a1de5d957c47da08c3fc34"],["/posts/54667693/index.html","3e597d6c067fd7fb04776f01f5a1d88e"],["/posts/5508212c/index.html","924a010a627f00dab1a47b582d085658"],["/posts/571564e5/index.html","5f72e62c41c5df5dec278a523f8ed2e5"],["/posts/57900fe5/index.html","fdd25ee68f3398cdc24f1e6c801fb70a"],["/posts/589a214a/index.html","4c1118d8c4d79af40961fdcd11246215"],["/posts/599a2b19/index.html","8956aca75df82d25596c82ed4c076e0b"],["/posts/59c05382/index.html","9303b984fbfa43238f60ad02e747a197"],["/posts/5a5294c8/index.html","3c5038e0fd6646ed97f44c66220506df"],["/posts/5b8c69d5/index.html","84aa8d0009eb570b68fb719673866a30"],["/posts/5d3da28e/index.html","2a4ca59664b525a4b6d429132e8e3a78"],["/posts/5d3f50d1/index.html","8f845b35b65575ec3f7f06ac889e27a5"],["/posts/5ef7ef00/index.html","724a6078e13e899bf124d989821d5681"],["/posts/60b5dd06/index.html","a4e779a3f171a40fdf1d9c05dc3b693a"],["/posts/61477045/index.html","55a3876dcc767f079df7c1b08efa4644"],["/posts/69d79f93/index.html","ecfc2ac17290a641c328f753abd31b80"],["/posts/6b2f046/index.html","5ff1725585101f1c23f40b6154e3f5aa"],["/posts/6b4610c4/index.html","4b03180c8dd4b07ff90162a6a325eb7b"],["/posts/6bbf03f0/index.html","a0d85330524000223420af4be3acbe6a"],["/posts/7000d139/index.html","4abb7c0fef9a434aa616a18758677616"],["/posts/72f94093/index.html","ad295e08636aa73c5e717232c09411ff"],["/posts/7380b71/index.html","cedbe6999b6b2cc4d8964589026bbb06"],["/posts/738eee3b/index.html","47af6be8d3d097a3a5bde26d3ca07754"],["/posts/73981dbc/index.html","1bec6cb38e3e89a27718483a96381642"],["/posts/74d60fd9/index.html","fcb531b149388d4b55364eac76938a8a"],["/posts/74f5d9a5/index.html","e2a64d3eaf5231702b9723da5c08f241"],["/posts/750f2ce3/index.html","74c2cd8ff98c3a0c4038c1436dd33c90"],["/posts/75ceb627/index.html","64faf3b43f5e5cf9aabae0618a48c4a9"],["/posts/7725b75a/index.html","16f9e83ecac921e7c22401c951482d78"],["/posts/79ef335/index.html","ce040189e85ab65868650b7845896d17"],["/posts/7bbd3149/index.html","82309faaacabbcb96a369cc7e2d9d41d"],["/posts/7c20e8d5/index.html","68e9fa80be704b146bfd048de601b1a5"],["/posts/7d3ea75e/index.html","93ddfd580062c28a77493a07aa553a9f"],["/posts/7d43958e/index.html","de3dd26cf2275a79436f1a6167354b58"],["/posts/807ac7f2/index.html","cc8e5335cdb1bc2ee3de807cdc5fbecb"],["/posts/81738fa0/index.html","63a69b839e7c82e99cd557779a4b89bb"],["/posts/817c41b4/index.html","fbe5a90b223384c8cf857bef9467c696"],["/posts/84ee8e34/index.html","f505be611ad146c75e810b46222f680d"],["/posts/8837602f/index.html","864e72f55930aaf8669d6c267b8e147b"],["/posts/89589a03/index.html","e4ac19b52ae16972833e002fc98bf256"],["/posts/8bcef008/index.html","c17e48d2cd3075b274ca509deb5e9899"],["/posts/8bf9abeb/index.html","30d69c57e2e4d82f8598a6cb81c2000f"],["/posts/8e5f5686/index.html","61de22a13f1d4b78cb2cc42e8129cd3e"],["/posts/8fa6b8c7/index.html","3fe89ecfb1c20f129aa9280cb242c98c"],["/posts/9029a3de/index.html","59737dfc27736e86961e9cf4a5661cf9"],["/posts/909d9a5d/index.html","b55544a63ef070f605ac35d900e85d62"],["/posts/91404b94/index.html","6c82462e888c58dbbf2d198724024370"],["/posts/932e3747/index.html","7b15af7632b48b9a61125d58540dcea9"],["/posts/95fc9e6e/index.html","9a1b3d945c0b867c315c891dbdd57898"],["/posts/98e67280/index.html","60115fe11a1b5ad3fad3101bacb1c525"],["/posts/9a4d13ef/index.html","63ec758be6500f048e1b233838bbf7ff"],["/posts/9afbb889/index.html","d8113ab88d8fe9e0ab1f6afca730ce85"],["/posts/9be63ba/index.html","0a20a9dd5dabe58f772914eea837e259"],["/posts/9d967c90/index.html","8c33a7925dfad41555ca99454f69218f"],["/posts/9eadcdf6/index.html","a59696efad2770d0562cd49d03af6cd7"],["/posts/9f97db8f/index.html","75624613e81c9bb3b0e32203e397b914"],["/posts/9ffb4388/index.html","8f08ddc2e0fe2eeccb1ecb33d6698b67"],["/posts/a094d027/index.html","f5049c053904b0f89fa3b026792d8f22"],["/posts/a27042c6/index.html","b0450843bfe8f927893baabccdb0e068"],["/posts/a29cc732/index.html","8feb7fde72178518a6fcef1c46b6058f"],["/posts/a44a518/index.html","8baa6111046460793bbb3537f305686a"],["/posts/a4f2a748/index.html","bf84b6442388e0baed796e19fc0c9b60"],["/posts/a7dc32c9/index.html","32151ea09954dea08009fc5889b49c39"],["/posts/a7f753ec/index.html","46345252527b464ebc1c7f629c8c03bb"],["/posts/ab176793/index.html","ccad8d0daca18facf5a2821dc09abfd1"],["/posts/ab34095a/index.html","de214c5bbbeabc5e18b09ca742b163f1"],["/posts/ad47c4a5/index.html","452130a9d92b1e75f3fc6d2ef5d0db7f"],["/posts/ae8f7b74/index.html","c5cbff73cc5cbe34d388810f77bb91a3"],["/posts/af43816b/index.html","7d776956ee72f493ad4cdecacb1ae9a7"],["/posts/af9e049c/index.html","7f0fb2eea9a4734ea226f32ca29a73a7"],["/posts/b0f1a367/index.html","70ec86664527df969df665450bb3d414"],["/posts/b0f98e2c/index.html","841e2ae1f501cdfdcbd56707f08d1af0"],["/posts/b33131fd/index.html","75c1f4a4a348bee2ce092f4ae27a2c8b"],["/posts/b36eb520/index.html","3b050c4b6372e426b3430c917fe0be4f"],["/posts/b542fc02/index.html","11b87d40deea12de3bdc03b0a98f7100"],["/posts/b54eeeb4/index.html","f10bd9495729f7fa8227ab93dd09547e"],["/posts/b84f3f3c/index.html","5301167fc909c84de9fed8dd7b0f3c1e"],["/posts/b94fc207/index.html","f37af4cc64d6e88759abd9f2a99c71d9"],["/posts/b981a6b4/index.html","2ffb1cbb5b69c64d1065d1247fdb16cd"],["/posts/bcea326a/index.html","503b4e77cc6c645498e738181714828a"],["/posts/beb19e80/index.html","b14811727f404025dccfed3e8c1554a0"],["/posts/bec490f8/index.html","8df2038352c10f6415996a0cfded17cc"],["/posts/bf7bde0e/index.html","455b38754b69ae53f7504ed740ee0a29"],["/posts/c03f17c9/index.html","c8537ff3cbfc8dbaf958f1e817f67bae"],["/posts/c35bc572/index.html","87a8b689366016a105d232786de37794"],["/posts/c436016b/index.html","61b46eed04a4924ec2a55c46cb0da86a"],["/posts/c4efc741/index.html","20eb2e416497589b2699e7ca8748780a"],["/posts/c5e8a08e/index.html","297a8ba6ab56dd199bc8be42f599c593"],["/posts/c7db1dc0/index.html","adaa3944249094b22afdfb43f0c411b4"],["/posts/c7febeba/index.html","eab02b7903c1d67ea5265e5656073377"],["/posts/c9c3a06e/index.html","7b2de8ebdc2be91b977879bf786423a0"],["/posts/cc6d2cf2/index.html","9698d3b22e49d10b012f659a2ba1b586"],["/posts/ce48f291/index.html","1cf3753eaa1d5bdd6d726b0f7117f58c"],["/posts/cf480faa/index.html","ca611700652fb82215552c8e37053973"],["/posts/d090b4d/index.html","dcba59baec205de059c8b2fb0dd25409"],["/posts/d1995044/index.html","49d7eaa4174b179317e658484e9f9892"],["/posts/d2d34977/index.html","1046ed3598d467fb25faf330f34977f0"],["/posts/d3647a92/index.html","da3007a8382285fe53c37ff82ef64bd8"],["/posts/d3f6b818/index.html","24d01c6c53976e26d2207700b4f70945"],["/posts/d465029c/index.html","fba35efef46cc1f063e0e855d377fbee"],["/posts/d9884be2/index.html","6f51b4fb9f5c4202c3facd1f6971002b"],["/posts/da40f433/index.html","21368f629e15efa02fd1344fa99cb8ac"],["/posts/dae71d5f/index.html","4b4bed5319bd2f38a27c04bbbe08318d"],["/posts/db9fbe47/index.html","0a268962b4954b328fdca74b62383991"],["/posts/dbba997d/index.html","3cb728cc6e8d5961bf2fb4be6e319550"],["/posts/dc94f8a1/index.html","395d2c43b45cdd22430e836ca22b1d72"],["/posts/dfe9b67/index.html","b0eec520e9f69a9c2e61e9ac82910898"],["/posts/e0387d80/index.html","cc8097f6671d30a88f8bea125878627f"],["/posts/e356f7b3/index.html","9efe64c1d31fc99dc0afbf42a8bac37e"],["/posts/e3acb366/index.html","2c38e45e89671ac545892abab612218f"],["/posts/e450354f/index.html","6b91a4b9c91e5087b8b954be527ef4bc"],["/posts/e489223c/index.html","56d5359afc7680859b9cbf9f53ad8397"],["/posts/ea914c06/index.html","52bd81b24933c327eb5f882bbcb4145b"],["/posts/eaa8f31e/index.html","b2136c99ad093bf30c3f4b9329ad0647"],["/posts/eac19412/index.html","a2d01252ec6a8c3673fc96e039bfbaf6"],["/posts/edfc881f/index.html","1ac46229ad0b39e2d41669f1643ccf2c"],["/posts/eec0bbd1/index.html","bb1bceca680fc294c2b3ea54414e7ae0"],["/posts/ef22c7c2/index.html","2f7902956e023fce1209f6289ee6b68d"],["/posts/ef271825/index.html","58d22499b531710ac70b8dfc3e680cb4"],["/posts/f209578c/index.html","b7342fcee6e2f52935fa64dca0c06e15"],["/posts/f3e9bea2/index.html","d874656776d4f2ac1372ec6a34c466c9"],["/posts/f67b7122/index.html","bbbccfcef3ddf8994b339853c639892d"],["/posts/f7abba28/index.html","f156bde7e2e3a6951721897bfef02669"],["/posts/faffd764/index.html","046abb09c1fab188a949ecae79f50508"],["/posts/fb684fb0/index.html","15ab916706d56f3324a6403c3427b525"],["/posts/fc57199f/index.html","2f0f7233bd5ec03513df566ad7f2108f"],["/posts/fc6e9a7d/index.html","ff44f629f5fc21297c87b101f28ad6fb"],["/posts/fc7bc02a/index.html","a5def9bede0b7f7a640973aec3148568"],["/posts/fd67c5cb/index.html","0e64d33856430b37fca805aa66fbf188"],["/posts/fdde061e/index.html","21eb5466dd0685d46d9ed034de759192"],["/tags/HTTP/index.html","f4b82b6fa8f1ad6f76dc826a3fa1fb80"],["/tags/Hexo/index.html","eccaacc13b7235bd392e1154f90b3443"],["/tags/Hexo常用命令/index.html","8d635db1d4d19f05e8f04a76a264274f"],["/tags/Nodejs博客系统/index.html","23d6f0e46258825b2358f4b0e387f61f"],["/tags/ajax/index.html","dbf3b8bf801e92489868e748630f1ce9"],["/tags/ajax/page/2/index.html","b6b2e6581232baefd59f6a2f9b69aabe"],["/tags/curl/index.html","63e7eb02f2d134051d70c487b585f6f0"],["/tags/index.html","c3f70a3f6aafd13eadc3dc1798cd0d25"],["/tags/json/index.html","5f49cd62dfe6ee1d209943e06b45c90b"],["/tags/mongodb/index.html","7c6fce01c56e84623ad5de7c1adf86d1"],["/tags/nodejs/index.html","6b2b2da9731fb6b3297b86250d8c4952"],["/tags/promise/index.html","9121a244050bcf5a7d4fcdaa5e6764e1"],["/tags/中国近代史纲要/index.html","211fa4d3ea076069c3773249f82e8f34"],["/tags/日语/index.html","ac47d085fc997ef10f4233cec6523da3"],["/tags/标签外挂/index.html","83513d47ba9d1032f09be24178597649"],["/tags/目录索引/index.html","6b4fce144e594ce0a673f0b424c50eec"],["/tags/管理经济学/index.html","ffe51234b57b23b0c27e06f2b1d5a67b"],["/tags/考前突击/index.html","747d4232c3c07aef12bec850b21cc7b8"],["/tags/考前突击/page/2/index.html","c9e2de1b04529a8f1f0a4192c2d2192f"],["/tags/自考/index.html","8e17243510b79ac9ada6e1653aca63dc"],["/tags/计算机网络原理/index.html","05fb7fb96302443433213e7cb42fd60a"],["/tags/运筹学/index.html","36d679ac2d67dddc81346bdf31728713"],["/tags/马克思主义/index.html","14013d1695294377214972bcd50b81ef"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});




