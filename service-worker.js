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

var precacheConfig = [["/404.html","7f043fb6694d2f560af94438265557a1"],["/about/index.html","43703d2e14862b5b01508e43820ff4a6"],["/aplayers/index.html","108d81baab58fc4d1cc7eebb91aad097"],["/archives/2020/02/index.html","b920eed2de7219de2dee41bdb0150f30"],["/archives/2020/02/page/2/index.html","9896b883f6ffddfe004f12ef90752494"],["/archives/2020/02/page/3/index.html","4bf4a9a6b5f290525d8a9a0e053d1183"],["/archives/2020/02/page/4/index.html","82fafede0066b82200976274f86d9bf8"],["/archives/2020/03/index.html","6f56612a52c57cadffc55b7302b100eb"],["/archives/2020/03/page/2/index.html","9bda8b8a4957472efa9ed51ed2c3c50c"],["/archives/2020/03/page/3/index.html","a9031ee9986f40458e0ec73cf9ea4233"],["/archives/2020/03/page/4/index.html","e13d88b200a9b2f8af6f79b7914b4fcf"],["/archives/2020/03/page/5/index.html","ef9d32f0c4a9064cad9fd504d3217181"],["/archives/2020/03/page/6/index.html","3729eb9d94cd0b5efc970c22b58314f2"],["/archives/2020/03/page/7/index.html","a49a5bc564763a319fe2df41b6810e0c"],["/archives/2020/03/page/8/index.html","e81f40844e93d995d6403eb2979e2d44"],["/archives/2020/04/index.html","a270c01275c287c42e4259b5d4306189"],["/archives/2020/04/page/2/index.html","e4b8bfdce57d69d2710b5441cc106180"],["/archives/2020/04/page/3/index.html","5c72b96205d598f342f25a61c84c0d92"],["/archives/2020/04/page/4/index.html","dc4c300de71b331f8ee14bc48575f747"],["/archives/2020/05/index.html","106f11c2985d3c4b32e333307c8baa62"],["/archives/2020/07/index.html","a47672c85ea691f37f30eee2bebf2c7e"],["/archives/2020/07/page/2/index.html","ac4fe225caa896bc606002228ed381d0"],["/archives/2020/08/index.html","022d29a7910da9b5dc7444aea211a606"],["/archives/2020/08/page/2/index.html","3f947608bd51f6964d7333640eec109d"],["/archives/2020/09/index.html","b47dde2e867ae530b072576a05f7d3c7"],["/archives/2020/09/page/2/index.html","37f58f627ccc70c4f7ac45ac868ba811"],["/archives/2020/09/page/3/index.html","6a573c6c8a7df51a0f8b56a0306eca96"],["/archives/2020/index.html","cb7ad1072e9318e9559a34ff547f9430"],["/archives/2020/page/10/index.html","d26847d7334f947e8dff0ab2c6dd7cf8"],["/archives/2020/page/11/index.html","cbbc822ecf2aa6e9e824cfd0c71783fa"],["/archives/2020/page/12/index.html","cc1caa840d1ead1bc3db7623e392371b"],["/archives/2020/page/13/index.html","eecc4a5d85f7a373a3faba9cad19819a"],["/archives/2020/page/14/index.html","a174d133d9a57e74f91d5998df668e7a"],["/archives/2020/page/15/index.html","7d6132861edbfe2aab335538a5de04c6"],["/archives/2020/page/16/index.html","0f0f10395c0b1b7bf4b69c705f7c8e3a"],["/archives/2020/page/17/index.html","d260877e341041ced582eb807e3d2661"],["/archives/2020/page/18/index.html","8f4f2a836ed07d460f169dbe52bbc894"],["/archives/2020/page/19/index.html","2091ef8eeed7d7ed0d353cee4f481f0d"],["/archives/2020/page/2/index.html","558809886bf3864be529a8301fc92f16"],["/archives/2020/page/3/index.html","57648d1b73a8efd59e29c3647931b601"],["/archives/2020/page/4/index.html","06383e6f572b38c6ad6974187ab96b4f"],["/archives/2020/page/5/index.html","942fda01bba79f4845f3d81d943092f9"],["/archives/2020/page/6/index.html","53e8668b23365f8f9fcf1bd27b532b79"],["/archives/2020/page/7/index.html","05b8f5c303581a78f04587d99101e44f"],["/archives/2020/page/8/index.html","f009581ab5b4ad6c15d916421033d290"],["/archives/2020/page/9/index.html","84c3f99b794c81faf77cf4c9864e5290"],["/archives/index.html","f257a66ee85b3457b387eda2fcbd634f"],["/archives/page/10/index.html","236b5157dc6c2569d4571ceae555e6e5"],["/archives/page/11/index.html","2215009836bc8ed4f12663a803dc354c"],["/archives/page/12/index.html","8aff4007b14cac84724f80c0592c7b6d"],["/archives/page/13/index.html","958795bafb4c9dfb17915369944c6a18"],["/archives/page/14/index.html","a06463a91f14497188a7429814886c41"],["/archives/page/15/index.html","1db8da16d3d893e7e8a7c97513f88138"],["/archives/page/16/index.html","88c06c6170e0f653bea5bd6861c9193f"],["/archives/page/17/index.html","b2f7ff4ce7cbf5569f72c0c3b88b7e81"],["/archives/page/18/index.html","5acafe1ce95258f17986142aa832d10c"],["/archives/page/19/index.html","2ca734b785baa26eb669a0dcb400d2be"],["/archives/page/2/index.html","df4f1e676294d353b4490ae97ec24c81"],["/archives/page/3/index.html","cdd3b1b7269e54b700293fbc9e3b25dc"],["/archives/page/4/index.html","e5c6282a3c48109da67d4ee84f2b48a0"],["/archives/page/5/index.html","6819904007c278a8af304e7378224781"],["/archives/page/6/index.html","1dbe59af97a4f881516da50791d78d58"],["/archives/page/7/index.html","3ef44ec1b31dd4df94ad4a018e03122b"],["/archives/page/8/index.html","743b930c4639db3aca85cf1577eab2d9"],["/archives/page/9/index.html","1695618a43f4cb75e842167230eb9c2a"],["/bangumis/index.html","393a0625cf1c038292a8f25c5604aafd"],["/categories/Ajax/index.html","a26841e4c44750c2b5b64eaa0594cb2b"],["/categories/Ajax/page/2/index.html","0399c3d123c802b2f72373e0606b41aa"],["/categories/HTTP/index.html","c08832e030076e4ff14ad1e7bb2f6ab7"],["/categories/Hexo/index.html","57b685c2cf64ae79c57729afdbad2d97"],["/categories/Hexo/标签外挂/index.html","7f9b1d46a568987c9fd00c33f2c18fe0"],["/categories/Hexo常用命令/index.html","5f9bfd289a43fe73f25b9151f7c6ab15"],["/categories/JSON/index.html","345fa2c04f4429f7a6f807f0e251d794"],["/categories/MongoDB/index.html","07c58eae7cc4a86cc09229d99a6470b0"],["/categories/Nodejs/index.html","ce81254e529f078420089d0f7971bbd6"],["/categories/Nodejs博客系统/index.html","475b1c959a51e6a40235a1d707fa6633"],["/categories/index.html","f77977f25fa204b113f6cab6c68bdaca"],["/categories/自学考试/index.html","23b9a68c9b8e0f3f2e10467b0154fb00"],["/categories/自学考试/page/2/index.html","e231803c36908a48e0dc15a78e51723e"],["/categories/自学考试/中国近代史纲要/index.html","b8910e6fcad2977bcc2f2b6bc4a067a3"],["/categories/自学考试/管理经济学/index.html","6fe99ff1f60ea4ece811efbc149a1fca"],["/categories/自学考试/考前突击/index.html","45aa85ddbff180189f278371cb8b861a"],["/categories/自学考试/考前突击/page/2/index.html","1b1c4fe9f4198c557c3a67533eb37d4f"],["/categories/自学考试/计算机网络原理/index.html","61cae4990b511bc9162e7bb3a2fba247"],["/categories/自学考试/运筹学/index.html","4276944204e2c1afd3174d61fdc15f73"],["/categories/自学考试/马克思主义/index.html","43307629862e9e8106dcbdec90cd2627"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","d1a3c74eb49ea770d0301ef3885cd3d7"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","c9b6e3f3e97f835fc73841a9882f7733"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","8610a06c2bdd8e2fcfaf88d0d23428ed"],["/page/3/index.html","32dc6416d4d22fdd53899b2c436f3091"],["/page/4/index.html","f7cfabc7671e6cf7dfe3175b4a7fcb52"],["/page/5/index.html","271262f6d134b3e37f8fab6bed110fb0"],["/posts/10812f0/index.html","8d145e8c42890d5070b9e6b4284cd912"],["/posts/126b275/index.html","9613b2e23d3285f546ae1a84b298d00c"],["/posts/12d95a5e/index.html","c3c5f076351445b32659a35dbb008473"],["/posts/1367417b/index.html","bac710d7e6187e76ebb28925db077fdc"],["/posts/13886e3f/index.html","215d2fcae2e75459f45176d48b847390"],["/posts/145193a5/index.html","3ffb3a769104af2a4e2c15893df27776"],["/posts/149dde25/index.html","da15eec7a66d39f3737275d4410474b1"],["/posts/152fa65b/index.html","a81f17526eab24127533c1a6a385078c"],["/posts/169e7dda/index.html","eebe5b53bb81a11d133022917f9b24bd"],["/posts/1875100e/index.html","0efdb90e9cae6e555be9f33232e57e37"],["/posts/18eaef7d/index.html","34622145002069525c457221c01e4d3b"],["/posts/1a0bc7b7/index.html","faf480847ca5b4e15b5c607b872e970a"],["/posts/1a20a057/index.html","370952437e86dad3dda7c26505424b3a"],["/posts/1a998be6/index.html","d56f539f694b74374e6498b4077d4189"],["/posts/1bffbd20/index.html","32e8601a8671cab3fec8309b5b082c81"],["/posts/1c5a0485/index.html","b3f9599375bdc7b6421b7558045b577d"],["/posts/1e638f78/index.html","ea88412a7c37ac4abf2786bddd5596c6"],["/posts/1fb53120/index.html","790e5f4a246771c7e6dde2bfc2adf863"],["/posts/21466e86/index.html","9e9d1244818f76a5d876249e69531b8f"],["/posts/21abcf1a/index.html","05751f13b87f0cfe45dae208546c1882"],["/posts/21c250b1/index.html","8e07b05c1adc436499baede698888e3f"],["/posts/2287cc/index.html","f12589d140f880d2bea390a1968998cb"],["/posts/236bfea3/index.html","77be5eb57a161849d4d0ff573aebf6cb"],["/posts/24caea6b/index.html","6d3b9a3200b3077a6d6c21224d437f21"],["/posts/25d45c3d/index.html","468ee4156d0bf6f5f6cf82bbd2b82082"],["/posts/262baa9f/index.html","c9f174d807412029aa7a3df53be7e69f"],["/posts/27cdc142/index.html","5c36197acf7e95fff0ae246f46baa344"],["/posts/2895c4bb/index.html","90eed53b21cfc3f99133489df05782ea"],["/posts/28987ff3/index.html","f47ba479fb837ed5f7ab8fb940ce65cb"],["/posts/29f0df96/index.html","b1aa7a9652292e5d10efcbc1e02b1571"],["/posts/2a1d2b6f/index.html","4b49e6e40c3213955a8325e59282aaf4"],["/posts/2a386047/index.html","6aae3399a6fd5720e50ca6aaa45e9c3a"],["/posts/2b770baf/index.html","09a37933e502bffb2d0f31d8816fe791"],["/posts/2cda4a8/index.html","7af83ac601c76764bf707031ad9d385a"],["/posts/2d020832/index.html","c63d7a1777b364e66fbd87b393784288"],["/posts/2e0c129d/index.html","9323abe6ea86a57b570c3b414ba3e635"],["/posts/2e7563a0/index.html","b00dfe85e14259d5ec15e5d3a660f782"],["/posts/2e7b8d69/index.html","1c85575b774c188cb42c159c17846e3d"],["/posts/2f28d14b/index.html","ae208f15cad7a6e662761026e02e284c"],["/posts/2f6e1383/index.html","5073ea9283da7402452fba21f45bd8a8"],["/posts/30bfd1cf/index.html","c6b25cda4049fbda70e129175a78ee21"],["/posts/33235106/index.html","54fd2aed42f76cb3095f287b09721774"],["/posts/344e951f/index.html","e762e5ab739cd78b225581cc1e45c84b"],["/posts/35e2bcf6/index.html","73719bb1716a1f8d827275a72adc66d0"],["/posts/365e96c5/index.html","4b23689c54804e7d3f0c994665480d3c"],["/posts/36e331e3/index.html","6c81bc83d2f2c00a54ecf9d8c0fa6f5e"],["/posts/372df90a/index.html","bd31cc60933ca627c4edfbec87b09ed6"],["/posts/37c547df/index.html","4f5644a6f2ffcc8d2b5cb6e080d9667b"],["/posts/38a88481/index.html","5ab4087cc67a8ef1b3caae9a0900c668"],["/posts/3b56780c/index.html","3c0ba08528ce9f958ef687c218b924b6"],["/posts/3e4bb613/index.html","e1facf40b492509b49528d7f0bf1c86b"],["/posts/3f2e933/index.html","2dd91ad637c9f9413deb2540e18a3fb6"],["/posts/3f6e5f9e/index.html","3601ab68ae5a8e165150bb812535bbd1"],["/posts/4349a589/index.html","fcc445c5cd364cc8d07460c693861f51"],["/posts/44246190/index.html","f787651e600e36b2bf55c932ee5c8805"],["/posts/456550f/index.html","e370751aae50ebedffb6797ad1130234"],["/posts/470ac03d/index.html","8f3764068f7963e9e849a7d1c2e154ac"],["/posts/49249ac9/index.html","b781239fad80cf197d5527e9e8639714"],["/posts/49f2d2a/index.html","3a697f0e6de78eefafda1e4e5212e066"],["/posts/4e6d4eb4/index.html","40a02c57bc17caa21fdc761cd0f6120a"],["/posts/50caf1d4/index.html","ddfbd0be592bfdab3abc9b4264db765b"],["/posts/51139400/index.html","cacb94875c13a3bdf5d6eb8217da8afa"],["/posts/512c9a09/index.html","2a1233375910d72e883f77f4f5f95ae1"],["/posts/5205b330/index.html","96daca51953747361470b2b6bb99ff80"],["/posts/52d36cab/index.html","2d91af92d240a33f732a2c16a49e83ea"],["/posts/532a083a/index.html","751b5f85d3e5270cdc3120b23152558a"],["/posts/537d2c2a/index.html","191d44d033032cef821be110ad5707db"],["/posts/54383ba0/index.html","4728c1c6c586cd741a28064a469aa196"],["/posts/54667693/index.html","34b4602f97a4709e8c27f42b600898c4"],["/posts/5508212c/index.html","558a9c010e6f7eb5c57e7a9363fbc7b7"],["/posts/571564e5/index.html","05202de1c3ab70c03c95a0f3278a7fe4"],["/posts/57900fe5/index.html","880ec94a1536d6430bafb764b104fc72"],["/posts/589a214a/index.html","5ad10de74ee7c2f2a4b3f43d53626dec"],["/posts/599a2b19/index.html","553dba4c61b17679856b84a330257e0f"],["/posts/59c05382/index.html","51647e4318a5ab1ffcac925658e4e94e"],["/posts/5a5294c8/index.html","1a508a99e0fc29a775c3890df99a57ae"],["/posts/5d3da28e/index.html","b9e2063ea1d3844cedde99e4668f5fa1"],["/posts/5d3f50d1/index.html","cc6bb06d8100673ea23b1900cf481348"],["/posts/5ef7ef00/index.html","6bd635080c984fdc252a85e07066b85e"],["/posts/60b5dd06/index.html","1edc4e5fb3d93847d9bc83d69691b304"],["/posts/61477045/index.html","ce02706b0e084e6fc6b21bf7830566e1"],["/posts/69d79f93/index.html","6602773ef38fe384c2405c7750dda754"],["/posts/6b2f046/index.html","6b800b4f8add5051c6ea13e6230f3d9f"],["/posts/6b4610c4/index.html","9303c3fb507c066e3f5693be6218233a"],["/posts/7000d139/index.html","d789732645710de98c4400ce11435f48"],["/posts/72f94093/index.html","55393cb25d91d7c8af7b920238850335"],["/posts/7380b71/index.html","9bd1d831650a13cddd3abb5800cdf180"],["/posts/738eee3b/index.html","71ac363d005a9499d2567bcb6b75bc28"],["/posts/73981dbc/index.html","e8936f4f932316bc48b6fa2ee70ab218"],["/posts/74d60fd9/index.html","a8feb543d7460683e1f570b42a3ef920"],["/posts/74f5d9a5/index.html","da3c993cf89630fa7c1c4b256989fff1"],["/posts/750f2ce3/index.html","e9c17cfa9d81e93380c267a27410495f"],["/posts/7725b75a/index.html","c3c2a0bcb42c67a5c7bfb33df5b8f1f0"],["/posts/79ef335/index.html","e6e308200ed6da809212473ea4ce5563"],["/posts/7c20e8d5/index.html","e744aa735acf5e97707feb13e7cf394b"],["/posts/7d3ea75e/index.html","dee2a49742f8de8767fda2f7e85480d4"],["/posts/7d43958e/index.html","e4f68be9474ed3c1c346748f86798535"],["/posts/807ac7f2/index.html","3929e69caaa2df158466a272e8d37e18"],["/posts/81738fa0/index.html","a1553457c29f6549221f1c7dd53b9fb6"],["/posts/817c41b4/index.html","e765a321c40ee32690774e335e79e50a"],["/posts/84ee8e34/index.html","e95fee76dedb4aa07eed5627beadc167"],["/posts/8837602f/index.html","e91df06970276dc9a891e9b0cf923435"],["/posts/89589a03/index.html","c3c0641c99e32eed2d62cf86b6e636c4"],["/posts/8bcef008/index.html","dda97e13d0eae221eafde335e5fa1514"],["/posts/8bf9abeb/index.html","77b411ac5925b30e5628333c52b041c7"],["/posts/8e5f5686/index.html","2611ca7bd2255b5730d448900cbfa953"],["/posts/8fa6b8c7/index.html","f4d147f922c380163af41c8f9aa462cb"],["/posts/9029a3de/index.html","f95ea6e59c3b0da573495a6ac42e9dbf"],["/posts/909d9a5d/index.html","aded11e3ce530ac74a809a4dde8f722a"],["/posts/91404b94/index.html","987fc1bec19979575954e338e5bf2bbe"],["/posts/932e3747/index.html","345f95ed6909ac7788e454679a4c2aa2"],["/posts/98e67280/index.html","3b78be1d458a7b251c4d6bfc4c2e029b"],["/posts/9a4d13ef/index.html","72d162dcdb9008fced13544c47fdf89a"],["/posts/9afbb889/index.html","ee0e088d1b6fd970f95cc3a32e4e1b89"],["/posts/9be63ba/index.html","938a4ba8e5f81af8b56292d54f1f043c"],["/posts/9d967c90/index.html","25f01d44a1592bd8aad6229057c42410"],["/posts/9ffb4388/index.html","fe9404a6fedb6caf2a97995b5a58efd1"],["/posts/a094d027/index.html","0801c14ae9c788e5fc30cd2b2ed43907"],["/posts/a27042c6/index.html","61a19c44e3eb4e0ca228f262feca131f"],["/posts/a29cc732/index.html","c2c56ec64294312a383385185f698b64"],["/posts/a44a518/index.html","b1a1830bc483b23a9050782f8adee941"],["/posts/a4f2a748/index.html","800c76fbf0c078cca45f564437ac3b6e"],["/posts/a7dc32c9/index.html","b3699311812fc48658b402037dd19fc3"],["/posts/a7f753ec/index.html","9dc201a94cb45bd37df59793538cab5d"],["/posts/ab34095a/index.html","30bbeb4816d540177b4d6f2753788791"],["/posts/ad47c4a5/index.html","572667eaf3b71e53e0f59c3e2e5ea772"],["/posts/ae8f7b74/index.html","2e55c8390521c7cf02ba155428c7bfa8"],["/posts/af9e049c/index.html","96a13b35d3269877742cc6d1ae919738"],["/posts/b0f1a367/index.html","eaa7fc5c94d086096c74638a2c00e074"],["/posts/b0f98e2c/index.html","b7d31010407c4c7fe0963822767656ae"],["/posts/b33131fd/index.html","c9d2944b24e8085254a3343e08dd4302"],["/posts/b36eb520/index.html","40db892dc944d21ad67ae70445f4035d"],["/posts/b542fc02/index.html","e102164ade98d0b7ef35ba3d505dd8c7"],["/posts/b54eeeb4/index.html","405658a9cef783abeedc2e6435503fa5"],["/posts/b84f3f3c/index.html","bfc84e965c58245d33a945472df43f38"],["/posts/b94fc207/index.html","b838169a32b25b8ce2ebabd9954875b7"],["/posts/b981a6b4/index.html","1902b87c1563acd2cc82aa33e5d2048a"],["/posts/bcea326a/index.html","0f31b768e44d3967c8c6bfc27434bff2"],["/posts/beb19e80/index.html","bf5b81736117496e05e06a0386f4dec7"],["/posts/bec490f8/index.html","9ac95e2b13df0a6dc91c0369764e630f"],["/posts/bf7bde0e/index.html","337cded524c23639ef6c3747af3cc42d"],["/posts/c03f17c9/index.html","07f7a9114f57c93114f835a1ebdc2ed8"],["/posts/c35bc572/index.html","ec542f144735c431970a460db1e20f95"],["/posts/c436016b/index.html","d118ec445ed58ae66c9e50a840d14671"],["/posts/c4efc741/index.html","5ec3f0e7ec3ebf0524251e18eca4753e"],["/posts/c5e8a08e/index.html","c42c41d63afd1cf1c060d864149ff498"],["/posts/c7db1dc0/index.html","17f5037646304ae1a69f306b143c0ef1"],["/posts/c7febeba/index.html","02a0ab38a31acb7dff15ae2a3e1ee75f"],["/posts/c9c3a06e/index.html","5f29e4644006c649a85ceb7703554dbe"],["/posts/cc6d2cf2/index.html","034fe29cf5c30fe38ac88d035d811874"],["/posts/ce48f291/index.html","430d3261f6cd9971aba8c87af2e3383f"],["/posts/cf480faa/index.html","b14f49f6f1cff87f3ef12034b0e45dba"],["/posts/d090b4d/index.html","c7300751f64efe6123d5bee733b292a9"],["/posts/d1995044/index.html","f38472ee6e807d37b52f919c50967285"],["/posts/d2d34977/index.html","18b8427a9c0bd5d98823f1f47a954a0a"],["/posts/d3647a92/index.html","52487794c65fdfcb7ed654e581c4fdbb"],["/posts/d3f6b818/index.html","81702059ca5cc622e61effa7b589a945"],["/posts/d465029c/index.html","f3ddd0769e09b49f0e7e6e179e388091"],["/posts/d9884be2/index.html","a419c90ec370925e2aa9c63bcf10095a"],["/posts/da40f433/index.html","ba919349561623b691b36f0992e72af4"],["/posts/dae71d5f/index.html","0d304a1b3913b7b022a829589e460893"],["/posts/db9fbe47/index.html","66e5f05f381f625b88a5f2a9d0412fbc"],["/posts/dc94f8a1/index.html","9262cc11f5d195dc51fe73e3278c63c3"],["/posts/dfe9b67/index.html","904fa79a2a2cf4de67aa55fdb98f2bb0"],["/posts/e0387d80/index.html","bef2f9d6590c3731d1d5cac94c1ba970"],["/posts/e356f7b3/index.html","31dd60f06ec2c698164098a4601a9171"],["/posts/e3acb366/index.html","95d33efae26543a61f0567abd90f8cbd"],["/posts/e450354f/index.html","b68e632498f0ff3256a37d3e56e4594d"],["/posts/e489223c/index.html","25373d8a9c1f2c9a0ebcff131d44c391"],["/posts/ea914c06/index.html","b91e7fe9b61253b14e694a105acd5463"],["/posts/eaa8f31e/index.html","68c4f6fc51ce971d5fc318491fad2ac9"],["/posts/eac19412/index.html","3d2e26fcaa34bd84c046a8b0ed1ba431"],["/posts/edfc881f/index.html","d80d8d5ebc5bcc34cf78d071bce67986"],["/posts/eec0bbd1/index.html","2221a9560c8bae5ee2d88b9b33204aee"],["/posts/ef22c7c2/index.html","8613d731b02316cb78e413262d031618"],["/posts/ef271825/index.html","eee5a84116d5061a693e39f14dc7975c"],["/posts/f209578c/index.html","b6cdc46fb216854545eb896ae7733c1c"],["/posts/f3e9bea2/index.html","29d20e79fbd7d9b439a4730bda9e3e41"],["/posts/f67b7122/index.html","79384dd81a194d57ee0f3cb8c1129a34"],["/posts/f7abba28/index.html","95857aea22f5169ef76d190fd6161914"],["/posts/faffd764/index.html","b1c6393e70ebfa3106e4076ce7665383"],["/posts/fb684fb0/index.html","11f0d6cfa3a5f588ee23909367a5d65d"],["/posts/fc57199f/index.html","391c1f34c893010910acea39e3cad179"],["/posts/fc6e9a7d/index.html","6acebaf79a380d6be88db19000d40380"],["/posts/fc7bc02a/index.html","c22e6d1ef3e5b3cd67b78742420cb0da"],["/posts/fd67c5cb/index.html","12e8507120709a2d4faa20a82e92c8a2"],["/posts/fdde061e/index.html","90ad7e335a64a9651dcc181c52bddf81"],["/tags/HTTP/index.html","8be255f82ec72d2bee9e2355e915cff2"],["/tags/Hexo/index.html","00ef37e5da223485f811392264f0406f"],["/tags/Hexo常用命令/index.html","55bc75fa5fef42475d4a282fa7f46174"],["/tags/Nodejs博客系统/index.html","efd39c2a37d83cafdfb29ad194ee303c"],["/tags/ajax/index.html","a0610950d9627d281ae1177c5a667775"],["/tags/ajax/page/2/index.html","ffdfdbc449db63fcfd21c1cc740580b5"],["/tags/curl/index.html","c8cd359638fcf70f35f4cca270672d21"],["/tags/index.html","7ed83299fd27ebc28e9db858e46d891d"],["/tags/json/index.html","2055d9f703f9b52c99cf444f73cda1f3"],["/tags/mongodb/index.html","51b225aaa96e31bab3ba3a99e63acb67"],["/tags/nodejs/index.html","6598bf56beff3f55afc7d92b3275707c"],["/tags/中国近代史纲要/index.html","994ad6e3b420252c7c6cbf96b5f29394"],["/tags/标签外挂/index.html","44dc233af94158f0dd4f6ceeb14933ef"],["/tags/目录索引/index.html","1d4e496a3ee23063d5a3cb07ead35947"],["/tags/管理经济学/index.html","b4485943eff5fe540a480344154d531b"],["/tags/考前突击/index.html","ff55a1790a161c4776b734bc1b1781f4"],["/tags/考前突击/page/2/index.html","a67e5eeec61b71322bc54e199a97367e"],["/tags/自考/index.html","a887ecfd9f8cb942f521bc5671188a64"],["/tags/计算机网络原理/index.html","8c18be43571b5d9e1265690d830c6d72"],["/tags/运筹学/index.html","26ff1b189bf470bfb6e8b2f38aef8409"],["/tags/马克思主义/index.html","5bdac078ecdecaafb354d377b2764b1f"]];
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




