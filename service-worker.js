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

var precacheConfig = [["/404.html","1ba45cffe0820ceb97e42e11471269c7"],["/about/index.html","d8e5cf225c5d569b87cbe7b37848352f"],["/aplayers/index.html","53877f1ec6d556d560e126fff95aafbb"],["/archives/2020/02/index.html","9cf389a5d6c574ff756d7b0586a2acaf"],["/archives/2020/02/page/2/index.html","a8c6207f28433f32127947f7934f36e0"],["/archives/2020/02/page/3/index.html","4b0f93a5b781fc23c951fabae0338369"],["/archives/2020/02/page/4/index.html","972f4a3ae1a78758ea628859acd03fa8"],["/archives/2020/03/index.html","ee0a58563abe31767f86430c419ac0ce"],["/archives/2020/03/page/2/index.html","5fcf483df9bf411a242f822311454096"],["/archives/2020/03/page/3/index.html","5a75e95cf78efb234c3c607c5df3233c"],["/archives/2020/03/page/4/index.html","c7fdfefe072631c57995e3115b728ea9"],["/archives/2020/03/page/5/index.html","7733d84d04cd1d1b8d279cf8c330ff95"],["/archives/2020/03/page/6/index.html","ba01fb31fafb412582875b12af10ca22"],["/archives/2020/03/page/7/index.html","b839679fb788191cb47469760c235fb3"],["/archives/2020/03/page/8/index.html","0fa4eb0e0e4eab1b8e14f25e926f0137"],["/archives/2020/04/index.html","96944bec4b30373aeb2853e6470f2923"],["/archives/2020/04/page/2/index.html","d547e693447e8f0576cbc0431393c16c"],["/archives/2020/04/page/3/index.html","5ef63d379f82fb1bbaa4002732dfbd01"],["/archives/2020/04/page/4/index.html","257fa70223ffd88bd9f7c0f57041c8dc"],["/archives/2020/05/index.html","242db01a8d5ff3a0326786b762b1c18b"],["/archives/2020/07/index.html","6f05d75ffc17f80e6705505d212b28ba"],["/archives/2020/07/page/2/index.html","226bf478f58edbf379d07f3f9907f9d5"],["/archives/2020/08/index.html","a74096248d1a7eec24c95f34b12c5bb2"],["/archives/2020/08/page/2/index.html","5babee91bb66978b477fc93c26f64cc8"],["/archives/2020/09/index.html","e10c581fb30beaf6ec9dfe27c7a9675b"],["/archives/2020/09/page/2/index.html","9e32a6d989258b67cb23c89830f6e5e1"],["/archives/2020/09/page/3/index.html","ae59f07f2a96fcaff3daa27b944effa3"],["/archives/2020/10/index.html","aaa8503a618bb8a3ff4b1e733b74c179"],["/archives/2020/10/page/2/index.html","1808feed7a8443d1e75aab1cec1bb09f"],["/archives/2020/index.html","e925e9b07a95c2e321e726d300f6de92"],["/archives/2020/page/10/index.html","d6c4c7579c80773903435741b39ac39b"],["/archives/2020/page/11/index.html","f2dd8838a08b29da1e3d947438592352"],["/archives/2020/page/12/index.html","a94692266e3613c4378fa24d500416d0"],["/archives/2020/page/13/index.html","e43b81a39909a1a1df7dc482e985a389"],["/archives/2020/page/14/index.html","c94394c1e5e0d72bbe26560bf2abac5f"],["/archives/2020/page/15/index.html","c007d07e0306e77c21936bbbf2838aba"],["/archives/2020/page/16/index.html","eaf0baf1b243cbcc24ae41aa0b03edda"],["/archives/2020/page/17/index.html","c8e710358a9a61ead89b9c1ea7d74724"],["/archives/2020/page/18/index.html","3b16b23570d48219df522bf9722cc1ba"],["/archives/2020/page/19/index.html","b83e8e46797fad13fd0f5e3051437f9d"],["/archives/2020/page/2/index.html","3d0a2b0d1ebb4e0e08610e8948f3f2ea"],["/archives/2020/page/20/index.html","443af666965af225de7c81dd8cad9ed9"],["/archives/2020/page/21/index.html","511e14396843303d8b455e8a54dab9d8"],["/archives/2020/page/22/index.html","736045ba8dd6ac57f941ead834a1daa3"],["/archives/2020/page/3/index.html","69daaf447d32d36fd74ce0e2f6180cba"],["/archives/2020/page/4/index.html","d5eaf633488dae960f986138bce18a75"],["/archives/2020/page/5/index.html","fc0a607a37f0c8ad87896fec8b0f7873"],["/archives/2020/page/6/index.html","4940ffa094f89acecffbd6498c335fc0"],["/archives/2020/page/7/index.html","91405d6d1dd9d9932850946387159e8f"],["/archives/2020/page/8/index.html","54e18e8e1834ca1c6be6a11b5f1a481c"],["/archives/2020/page/9/index.html","d4702f0df27460d29546fea6f085ace0"],["/archives/index.html","129eb6e060ffa0686ee30a58e5952b51"],["/archives/page/10/index.html","9f06feae288af98d1b0ed02fcd43a8bd"],["/archives/page/11/index.html","023687e70a38c9b6a5c438384c41b464"],["/archives/page/12/index.html","99d2457ba60e82ccc83cf74ceca62fa7"],["/archives/page/13/index.html","85fb30250a7209bef6194734e5bfa040"],["/archives/page/14/index.html","ba6645f1b184f5db5e5622e1dcef5c8f"],["/archives/page/15/index.html","522f1d06be8e805a4ad139b3a605af6c"],["/archives/page/16/index.html","51259ebd6cd8a15e2d40ccefdbef26d2"],["/archives/page/17/index.html","7dd9aea317b141b2b5ed397b9bba8d3b"],["/archives/page/18/index.html","0ac833381b80693c5de523500966e8b5"],["/archives/page/19/index.html","e7a1ea7b89ec9e9fe30237758b9cd266"],["/archives/page/2/index.html","2c0f75951f11646eb80c63c41c4a19b4"],["/archives/page/20/index.html","776f405344f04e60bed231f49cde8538"],["/archives/page/21/index.html","76477678e58d4bfe270cf33e944d79b9"],["/archives/page/22/index.html","1338ba39557ac411da7eb9152b55f7d1"],["/archives/page/3/index.html","8d41cc7c22a38542ff5a68fbedb283b5"],["/archives/page/4/index.html","7d22cdc3f6d7d4a8af8bf98bd921e62a"],["/archives/page/5/index.html","8e6bb4df6c78f2d47fa4ded39c59c96f"],["/archives/page/6/index.html","d8648d0413849149c4573dc550211131"],["/archives/page/7/index.html","7b7c3e7eaef732d8a27ecc859d4bd77d"],["/archives/page/8/index.html","d5aec92552c9ca01ff750e0916c12a12"],["/archives/page/9/index.html","ff21bc6ac41ef8ecf4c2b4d0029ebd26"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","3c5ccd2ce869ae6af7f3c0c888cca7f9"],["/categories/Ajax/index.html","201d32d2e3df50e0c830550d1b5f7b18"],["/categories/Ajax/page/2/index.html","91597c0dec6c99f26e0b15435a64514d"],["/categories/ES6/index.html","e99ab4ddd50b83e80fda51f5b00c2716"],["/categories/ES6/page/2/index.html","411744a0c5d90c5cbb2b744b252539d5"],["/categories/FL/index.html","17c6c0d5cd545b948b76002056c9c073"],["/categories/HTTP/index.html","975e42afbad442ebe8d40dcdcf52e9a2"],["/categories/Hexo/index.html","1fd8ec66e63d1e5329037fe6c2e6bfaf"],["/categories/Hexo/标签外挂/index.html","89db038fa631068906a4de321d275b1c"],["/categories/Hexo常用命令/index.html","882576a8cc671175f0c86853c52fb410"],["/categories/JSON/index.html","b35ec6dad5c0dc923d464f10480008ce"],["/categories/MongoDB/index.html","685396b86d97745b82a4fa5750c9457b"],["/categories/Nodejs/index.html","294407215b5906308b923fed819c4e4f"],["/categories/Nodejs博客实战/index.html","16bde8c54cfe119d83684e322138538c"],["/categories/index.html","8c16364bdef62a1ef5dbb8cfce08ad53"],["/categories/promise/index.html","f544baaa399bdb93cca8770b699d07e5"],["/categories/日语/index.html","18775fffdbcf771d43cb5e65c256d978"],["/categories/自学考试/index.html","6567219757edad292ace812b1451ab8e"],["/categories/自学考试/page/2/index.html","9598291ac12a7398cd0c39315d0f783f"],["/categories/自学考试/中国近代史纲要/index.html","f7dde56790703bd048a98efef0fc16e4"],["/categories/自学考试/管理经济学/index.html","492db6abbdfad34d773f480f7c191a1e"],["/categories/自学考试/考前突击/index.html","0fe809ac643ee585312d6db770323282"],["/categories/自学考试/考前突击/page/2/index.html","609d3a74e50c69cbb329d21dfe88aee4"],["/categories/自学考试/计算机网络原理/index.html","d3bf724fc1a6cb9588f3ffddef3ec10a"],["/categories/自学考试/运筹学/index.html","9a2b61185ae3513f2b4ba78d2ff2abfe"],["/categories/自学考试/马克思主义/index.html","968eba2c4b0b3f23c63bd08bcb60d8e6"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","99e1754df87877aa65a010e05ef7b719"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","a91d818e234e2c4eb13c6905f6c40763"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","1213edbe5f0e64e05f24309267ca6f1a"],["/page/3/index.html","fd462f25ab11893623321367e5cd6dcc"],["/page/4/index.html","d53600e3ee83691971c6c4c06b4c2bb1"],["/page/5/index.html","6957fcf0e3fad4a0cc8352263911aea1"],["/page/6/index.html","345779a8d93ada003b97ca67d9ce7d5e"],["/page/7/index.html","0d81209288aae7108efb5e7404ade24a"],["/page/8/index.html","547798cc3a0a18ad3fd955b092067919"],["/posts/10812f0/index.html","0d1eb78592c02a42c092f46c8e567ca0"],["/posts/126b275/index.html","a522e235b1bf5a8ada1f51b6f93e05fc"],["/posts/12d95a5e/index.html","1a36dabd4d5fe270cb19fc7379ea5b1b"],["/posts/1367417b/index.html","2175bb13fa6a3baa64dec57205a48307"],["/posts/13886e3f/index.html","a873ba800171a3807e730dab7c14aa96"],["/posts/145193a5/index.html","efb999d2e8dd275bfcdb3ef2c5d0f9a6"],["/posts/149dde25/index.html","12c2b50553d5b17bfd7ed2bcbcb831b5"],["/posts/152fa65b/index.html","cc9864265ad4495ccabe91a479ffbd82"],["/posts/169e7dda/index.html","ec610f5fb1a1a2440640873d558e3b25"],["/posts/1875100e/index.html","f985020e9d221df8ea31ef970cfee874"],["/posts/18eaef7d/index.html","ade2e4227b116828064fc591131c7d19"],["/posts/1a0bc7b7/index.html","de7fc2d28fb991bab7b71e68ddf59a30"],["/posts/1a20a057/index.html","6be5e5d61a5e51533a94d9e89bd35eef"],["/posts/1a998be6/index.html","b345d00e700d46caddf89d0d5daeb5f3"],["/posts/1bffbd20/index.html","d93fb41e48b292fc3bdaebafb3fc5e59"],["/posts/1c5a0485/index.html","c868a5a994b2a32d6234c91e9e4cd00a"],["/posts/1e638f78/index.html","a58412df6d15d5c5594a4aed1c1fb9e9"],["/posts/1e967920/index.html","30f264ef751ec213efffd1eb035aab89"],["/posts/1fb53120/index.html","cff89d19adf6af63cf1b060508937ba4"],["/posts/21466e86/index.html","d9a6d2035337870818f74be577e3d7a0"],["/posts/21abcf1a/index.html","551c93fcaa7258f8f121799ca4839f8d"],["/posts/21c250b1/index.html","ee8972c6dc0fefdd47b4ddbfcb990bf9"],["/posts/2287cc/index.html","34ab04f7f585bc4eed9588a376b91271"],["/posts/236bfea3/index.html","fcce651b77a941515078b3ba53732239"],["/posts/24caea6b/index.html","f15243be5b886b2a2bb545a1e3f2e96a"],["/posts/25d45c3d/index.html","601d96125a9fadeb52219863d68d9126"],["/posts/262baa9f/index.html","f01c8c13bcc3fa6888a98361921b018e"],["/posts/26f82f65/index.html","01c6641316ac10d374b95c30947ec7a4"],["/posts/27cdc142/index.html","5cf33b57f7525488411a5164af20122c"],["/posts/2895c4bb/index.html","d15858bcd945b96ddbbaad6df0e4dbd9"],["/posts/28987ff3/index.html","4a497f1852c9cac3ad9ec1b145999343"],["/posts/298cfeed/index.html","63e62d93064355bec6312a9edd0a2e05"],["/posts/29f0df96/index.html","6fa87df9c9b6e73b461c16036c83dcb9"],["/posts/2a1d2b6f/index.html","752d7610ebd8c4052f54e0ef2a71c2f1"],["/posts/2a386047/index.html","80731bfbe6c924d8968fb1fe76c3c003"],["/posts/2b2f44ba/index.html","ccbb2060fb0e642301bc0b32cb7cad72"],["/posts/2b770baf/index.html","0926b3ba8d628d3ad87022cf93897697"],["/posts/2cda4a8/index.html","266999cf70af1087122858f56081393c"],["/posts/2d020832/index.html","1768c3e181d259184ebeffb620ccad46"],["/posts/2d6d3bd/index.html","c71babf207a189e279ad14e8a91b0dff"],["/posts/2e0c129d/index.html","5563eb27b476b860d7f2c78d17db0e9d"],["/posts/2e7563a0/index.html","4b912bf43c3dd1c62dc473b38ef3ab51"],["/posts/2e7b8d69/index.html","97d75b70b4a1cbf21ae79eaf9a9f40f2"],["/posts/2f28d14b/index.html","770f4e7576e7dd506cf09f109e5dc567"],["/posts/2f6e1383/index.html","d667dbb4ec265b50deb580c58a5a713e"],["/posts/30bfd1cf/index.html","fb5b96319ae0797179e674047f66dcfa"],["/posts/33235106/index.html","9a9a56a6be266b52e20146125cf8485c"],["/posts/344e951f/index.html","f33db832743134bc743f07d38793f311"],["/posts/35e2bcf6/index.html","040f0ab2b72cd55ab86837f15422d412"],["/posts/365e96c5/index.html","6657e7c506f2edd45b0287b7a8bc61af"],["/posts/36e331e3/index.html","e3e2ad91bd0b4a574cb9e14c4349efe9"],["/posts/372df90a/index.html","21d076c37533fcc44e0e6858cc88a275"],["/posts/37c547df/index.html","0a7ac9428262f05b2670ff6561c2d2e8"],["/posts/380dfa6c/index.html","99b7a41d5195872667f4aa038c95b5f5"],["/posts/3859c98f/index.html","0dfa3bf537ae4caf70e713fa15ba63c3"],["/posts/38a88481/index.html","0e7446e81e68dace51be3ed7d1e7185c"],["/posts/3914bfed/index.html","2ede29ce759cc886dc36564098fc22d0"],["/posts/3b56780c/index.html","0657746b20ff1fb2de8a4a9f2c3559a0"],["/posts/3d1ef1fa/index.html","57503c5cb4a85d6bb7b109e2c4f1ed9e"],["/posts/3e4bb613/index.html","f60d940a254e97fce2e6723e36339566"],["/posts/3f2e933/index.html","33f86ebfe8cc5f77d4179e13e78a7f60"],["/posts/3f6e5f9e/index.html","da28574305fd38fc5671dd5301ad68c0"],["/posts/4349a589/index.html","fd21dddbcec15b665d83ee8ca5706b54"],["/posts/44246190/index.html","e3758eca2f1355cfc07e716d00e65563"],["/posts/456550f/index.html","b81a52df090ee5963fa20235fbc19268"],["/posts/470ac03d/index.html","9460708eb6a134950b48e71498198d28"],["/posts/470d45ef/index.html","14e12623843934b1d736724d4dea32fe"],["/posts/49249ac9/index.html","09bee47e8d47bf50e82f5e44b14c6257"],["/posts/49f2d2a/index.html","d8f072aac5231d554e21d10812e58ce8"],["/posts/4e6d4eb4/index.html","ea019b21e107e8f3d87253615e44170a"],["/posts/4f346c5/index.html","67d0899793f76633ca09e67f161668ea"],["/posts/50caf1d4/index.html","7cceb4b1c80b78a4dd1791e1097359be"],["/posts/51139400/index.html","719caaacb400bca7effcd66560ad7612"],["/posts/512c9a09/index.html","bcfaa264057fc0d0aab71252011ca6e0"],["/posts/5205b330/index.html","6c75a42c984c070097ee25b01f953d3d"],["/posts/52d36cab/index.html","6a5de1e87d1ae50645f9f591e6fcca63"],["/posts/532a083a/index.html","f5297b51f756b998729dc34d16dc5a17"],["/posts/537d2c2a/index.html","0b4d1a084f3dccc83c8f12da559262ed"],["/posts/54383ba0/index.html","2ac5bca8c2345a3be0d4c5c55a5efcab"],["/posts/54667693/index.html","1c0871fc8b3b19c5cabe3828bb7fdb7b"],["/posts/5508212c/index.html","bba4b3797a950ea99e603483b3cac4fd"],["/posts/571564e5/index.html","11fe31c91ee2d89c96e7dc9cd1868707"],["/posts/57900fe5/index.html","6d34353b04bc63dcb258c7e01121095b"],["/posts/589a214a/index.html","8c968c92036aa5fec85975d6e706f52b"],["/posts/599a2b19/index.html","d967c8e33daa055027233450b4403335"],["/posts/59c05382/index.html","cd10fe884a00d1942b6407647ebbd334"],["/posts/5a5294c8/index.html","d54b0222b55449e4fbf2e9613ba305dc"],["/posts/5d3da28e/index.html","485cfb5fdee5912129be40ceb839982d"],["/posts/5d3f50d1/index.html","6a3caa16b5d84dd10fb2b0f7550af116"],["/posts/5ef7ef00/index.html","9c21dd9f0d89d4d7c480144b71b70b91"],["/posts/5f1fa8df/index.html","b2899c4d91f7a62e2ff2d64478019c45"],["/posts/60b5dd06/index.html","e8110462a012d162160d34a4485ede84"],["/posts/61477045/index.html","91db9e258a69901f9a6b5f079d063cae"],["/posts/69d79f93/index.html","3fd186a6712c01525f3386a6f6500166"],["/posts/6b2f046/index.html","d8bc50ad78c777d9c1d31e8402ae93fe"],["/posts/6b4610c4/index.html","5e1a4ca4cb54db0e3cd6ed284b7c47e0"],["/posts/6bbf03f0/index.html","a5d6ef12a58c82b80a83012eff6c1ed2"],["/posts/7000d139/index.html","801e7eb5cc893637ecbdb3903f9825d7"],["/posts/72f94093/index.html","36cbd6a8de60017a563449e1525181fc"],["/posts/7380b71/index.html","2f1266aa314cc1de37879a6b8975e4a8"],["/posts/738eee3b/index.html","87205ee700d2858d2e2c39d00c7410b9"],["/posts/73981dbc/index.html","c8c7dacc26db627264f2f5d90cf8a4e6"],["/posts/74d60fd9/index.html","2dbce74e7db7da933ef2217db1d26194"],["/posts/74f5d9a5/index.html","f8c187139f0035bfdd1c38bbe45c22f8"],["/posts/750f2ce3/index.html","b8bb4b7cd769b48ee7b9fce5dd792b41"],["/posts/75ceb627/index.html","f39ba10ca6f12c3586e88aee327f3290"],["/posts/7725b75a/index.html","4e8fdfb55284ee210849a17e9c038836"],["/posts/79ef335/index.html","c00d0ad5cdd0df6b1b02d248cfe02609"],["/posts/7bbd3149/index.html","0ed2bc01f7ccf45d855338df4882b1a6"],["/posts/7c20e8d5/index.html","8053c118f4aedb04eb1f35dd8be01310"],["/posts/7d3ea75e/index.html","1af62fb98a7a2a36b64bf1c73dce75bf"],["/posts/7d43958e/index.html","daae142ec077e6cfe699fe2bbbc99488"],["/posts/807ac7f2/index.html","abaf2601e482a4c593ef7a8ba10da745"],["/posts/81738fa0/index.html","a8ee77901b9877ec6e80167dc7003071"],["/posts/817c41b4/index.html","d39aaa7189169b665c890bc91e5261ee"],["/posts/84ee8e34/index.html","d15fd3d5115f1803b6c4c83e54b6d283"],["/posts/8837602f/index.html","65139cc05a42bdbdabe4382ae499df81"],["/posts/89589a03/index.html","716cc5dffb9a26b6518c03c683dfa30a"],["/posts/8bcef008/index.html","8bc1dd4997e120c30595236f420cc340"],["/posts/8bf9abeb/index.html","1e208b752be178e2951224defae14ef7"],["/posts/8e5f5686/index.html","4e19ebc7b1e6f111c7fa4afa6cee89b7"],["/posts/8fa6b8c7/index.html","dbaeb2693eee6bb08c4867135dd45f78"],["/posts/9029a3de/index.html","f2a82f7ed30e1658b22d7a1749c0233b"],["/posts/909d9a5d/index.html","e0657438a44dd45ea01ffd13ed5594b4"],["/posts/91404b94/index.html","b1fda5600866124bab790e0abb14cb46"],["/posts/932e3747/index.html","d7ae5bf137074eb3a9b969d1fa729791"],["/posts/95fc9e6e/index.html","6546c196ab92ff6aacc8a2b594043039"],["/posts/98e67280/index.html","c0c95b932ef2fd02f08163fca3d81e58"],["/posts/9a4d13ef/index.html","cdb0c312a32620c6f847303b27654627"],["/posts/9afbb889/index.html","28c484684dc8a0aff5fdb1fad33f3d23"],["/posts/9be63ba/index.html","ba2144f9fa0b7eeaaefecd514cb17906"],["/posts/9d967c90/index.html","6f885af7244fa2e6989475f582146e1b"],["/posts/9eadcdf6/index.html","c250b486d3871bf30576735ab5e1baac"],["/posts/9efd76a3/index.html","d769766663d257efadfc20cf1420f833"],["/posts/9f97db8f/index.html","fc4d71c562a698ffdf803d84b5fbfc99"],["/posts/9ffb4388/index.html","0672f4c1672c84febc5e0f052a0ed07a"],["/posts/a094d027/index.html","2903cb7e56e44ce679661395ad31ae09"],["/posts/a27042c6/index.html","c5add5a5b1f89c91241b58657d4ce366"],["/posts/a29cc732/index.html","596e8bde97bf9e95855182fc3ee26fda"],["/posts/a44a518/index.html","a160c1a97f4ad28a45b59a475bbf5001"],["/posts/a4f2a748/index.html","6a9bcbc7f06b9d27acbb68eb208b641b"],["/posts/a7dc32c9/index.html","fcd9d6a04b597b1644aaec4ece0e6094"],["/posts/a7f753ec/index.html","46e2a38f2543c440567801b10084c514"],["/posts/a9168bc5/index.html","fc9392d8975e3b36613d562153a65fd0"],["/posts/ab176793/index.html","1832b226cfdb8ed7490c63d96454420f"],["/posts/ab34095a/index.html","f5891a8cac19021dd0518e1d0d6e885c"],["/posts/ad47c4a5/index.html","cd1eee19ff76e6103a953d3a33619c25"],["/posts/ae8f7b74/index.html","6dcaf1f5cfb34f6b94b8964cf159f10e"],["/posts/af43816b/index.html","29f504f367d58a34b88a5668de880977"],["/posts/af9e049c/index.html","9ae444681dbde2cb07177bed426eb88b"],["/posts/b0f1a367/index.html","a60fb5cb23f5a57c52d0706432530c8e"],["/posts/b0f98e2c/index.html","a92c3d5004be6b624dd12fae95072a9a"],["/posts/b33131fd/index.html","f2adc2b4d97787f0d371e208e05e4d69"],["/posts/b36eb520/index.html","3e4eef1245815b68ff315247a3151f2a"],["/posts/b542fc02/index.html","7f74017bb0f33f8f8d82e1adc6a637f0"],["/posts/b54eeeb4/index.html","73f6bd2f71787bea72df71e8d46add1b"],["/posts/b84f3f3c/index.html","53f8b20846e45978ad64ea3415c8259b"],["/posts/b94fc207/index.html","20da0f018c153d65d093fef3ba2086f2"],["/posts/b981a6b4/index.html","7e44b062d6841e22a5579d6599988c6e"],["/posts/bcea326a/index.html","7b68648fb513295c49c0e3af02ae9463"],["/posts/beb19e80/index.html","0f94998d109f7102328f0dd395ba8072"],["/posts/bec490f8/index.html","946e324e07b753773a696f8a7c2765fb"],["/posts/bf7bde0e/index.html","be1045a2914f0616de09786464431968"],["/posts/c03f17c9/index.html","1f980dfafccba130f710298096a82662"],["/posts/c35bc572/index.html","f659f6e17b7df243374169ea8c962f9e"],["/posts/c436016b/index.html","c6a4e6b2b875f8b4a9547592e783af69"],["/posts/c4efc741/index.html","10efa81a579921ba5ff0c50550eaea87"],["/posts/c5e8a08e/index.html","5d537adfe9bb24143cb020a6b0ed217b"],["/posts/c7db1dc0/index.html","0502e2be2cd450e5d6ee2c237a7c5ff1"],["/posts/c7febeba/index.html","37d8b6be700681a5ad99a1bac153edeb"],["/posts/c9c3a06e/index.html","d9aa0eac4b3a0b61d0e38b2f3fa92049"],["/posts/cc6d2cf2/index.html","9eb9952fc4f1ad1d635a31f334cee10b"],["/posts/ce48f291/index.html","1da6a0d01ac58a0da9b170072fb48bf8"],["/posts/cf480faa/index.html","eb459a5b75e0dc389504297c73716c2b"],["/posts/d090b4d/index.html","89989e9ce2f873a8fcc21fdd1d40a1e7"],["/posts/d1995044/index.html","1117ca425643f6963d1165e1e3964731"],["/posts/d2d34977/index.html","ca77a1b0a24d2cda96602644ebf9a78c"],["/posts/d3647a92/index.html","00716c12bc627a6d9f03783e501d4cdd"],["/posts/d3f6b818/index.html","5bcf0a6bea7c921c2613c40b7c70519e"],["/posts/d465029c/index.html","fbaec072448b203323d6ede151e2bff9"],["/posts/d9884be2/index.html","774c370b94a8b302c7bfb5b067f5c567"],["/posts/da40f433/index.html","475c2d7c0478c7dc7b280b3954dd38fc"],["/posts/dae71d5f/index.html","edf10be5f971ca62d23396d073a4a341"],["/posts/db9fbe47/index.html","7ea19b1250cae8a701c9d2fb0b5e9241"],["/posts/dbba997d/index.html","3b7ae2396dd462e0347adfbbfe8508e6"],["/posts/dc94f8a1/index.html","65f4b6979b171eb4dfcd748fd9638a46"],["/posts/dfe9b67/index.html","9ea7cc956aacfbdb7f6835acf6dc2ed0"],["/posts/e0387d80/index.html","21ef370702946fb95518cfa3e580ae75"],["/posts/e356f7b3/index.html","dc232b7d7ed711ea003c4e7d37ff6488"],["/posts/e3acb366/index.html","f8c88e9a172def7bec544a196d13c40a"],["/posts/e450354f/index.html","f675e32dd9e14cd1eb55fd00096f3708"],["/posts/e489223c/index.html","d9286db58de674da22c36812352f27da"],["/posts/e9a8ddd1/index.html","d92e6f211c7c56166d8b6962d3a17821"],["/posts/ea914c06/index.html","95345f665c12953b7a0a4e36cfdf2a2a"],["/posts/eaa8f31e/index.html","677bbc74fb51a8a9edd87431e2f432b8"],["/posts/eac19412/index.html","75257be443f447aacf54c4159ba94a55"],["/posts/edfc881f/index.html","d3aac5d69181160a4d520963da54426f"],["/posts/eec0bbd1/index.html","949a7b1a79b3ff31b73fc26562f3eecc"],["/posts/ef22c7c2/index.html","aa03b0c9d2c5c9fc1df2fcaf040b30f9"],["/posts/ef271825/index.html","4cf96697a47c5d6428f932acfa57bab1"],["/posts/f209578c/index.html","0756a5c15f261c478febb40579053a43"],["/posts/f3e9bea2/index.html","45d4c725565e06f3dea0ba1aea3316d8"],["/posts/f67b7122/index.html","a9774aa23a5c0592f4f2b953660ded34"],["/posts/f7abba28/index.html","0d19bf97ca56e8dc478c1d1cdeadeacf"],["/posts/faffd764/index.html","fb8118f4e3ee5fba8b14a578a1dc6369"],["/posts/fb684fb0/index.html","34b3ec30ad1d39d711a38a6431224036"],["/posts/fc57199f/index.html","a5c5257d94d07701076327e0b6e7131c"],["/posts/fc6e9a7d/index.html","8b4f6dd865d1223293a090dc34fb7e99"],["/posts/fc7bc02a/index.html","809baf30709f0a1f2ba28746855e1cc6"],["/posts/fd67c5cb/index.html","7056181a93d035eedc13f8259aac8499"],["/posts/fdde061e/index.html","6f6a3c4ebe43c6b9da802a00fc431818"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/ES6/index.html","9a4c39b167aac0ef17bef0ce8b8390f2"],["/tags/ES6/page/2/index.html","7d82efd9c1f223cd0c80613015d91767"],["/tags/FL/index.html","5d7af069cb92bfc1396770b4bb87157f"],["/tags/HTTP/index.html","ec284c985ece63c52704e93d2c2cebfd"],["/tags/Hexo/index.html","9054c29adcf91673d906cbddb78a2b41"],["/tags/Hexo常用命令/index.html","2dcc37264fdc7a8982a22d622aa583ae"],["/tags/Nodejs博客实战/index.html","542b2ab10629d3095f8bb79227a7b690"],["/tags/ajax/index.html","d09944acc6ff615459eb7657d15c13a5"],["/tags/ajax/page/2/index.html","2a12ce1659c914b1085e458df116ff15"],["/tags/curl/index.html","39dd956e4c051ffd49b18be6dcc9f86c"],["/tags/index.html","8fe587030611b637cb63fb9e2345934e"],["/tags/json/index.html","c48a4508cef4250e367be893d4e07269"],["/tags/mongodb/index.html","61b5e9b7caaa9bccb4b294b228159745"],["/tags/nodejs/index.html","f9a4940b2691502c4c98d0b175167dfb"],["/tags/promise/index.html","43d0ee82eb6b84b9b0931ae6c87c0b3f"],["/tags/中国近代史纲要/index.html","1dcc19864b2c07a9f3f922ed68f05ead"],["/tags/日语/index.html","32f4cef3aea6a94c911b330331494cf0"],["/tags/标签外挂/index.html","9cdc97c840c2b71306c415f4c3c12a6a"],["/tags/目录索引/index.html","4f6a3011acee9c152b354b06dab6575d"],["/tags/管理经济学/index.html","a6d52f6e6cb02aac9d5259c192e24898"],["/tags/考前突击/index.html","299c4a74d06eb2888f56e340c6788f6e"],["/tags/考前突击/page/2/index.html","8590a3e1431d23ae0e8481e1b4137da2"],["/tags/自考/index.html","c807632830d9322589f6d6fa67f4f616"],["/tags/计算机网络原理/index.html","19b0ebeb1745c5451b429da52f6e1c48"],["/tags/运筹学/index.html","a9519dd6022ba2922a00a6f231778395"],["/tags/马克思主义/index.html","c24d6816d9ab0778ca9554daf4439661"]];
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




