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

var precacheConfig = [["/404.html","57f38c9c89d70c6d7026f6072cb4e4c5"],["/about/index.html","8f733103be626c78f51325316e0a3673"],["/aplayers/index.html","50a35f15f2a806a131f6e1ae66324ad9"],["/archives/2020/02/index.html","0494eda53fd5a8e57bb295c54abb6ed1"],["/archives/2020/02/page/2/index.html","7ef9d8443dd51b251e5b77c9d03547b5"],["/archives/2020/02/page/3/index.html","73ec1c2284899bf5276d410b867bc159"],["/archives/2020/02/page/4/index.html","dd83d6ecca727f782feef7b42660bdaa"],["/archives/2020/03/index.html","91139ef54d875c8b97810c6c97bbad67"],["/archives/2020/03/page/2/index.html","62ccf7884041c399560465d8472faf78"],["/archives/2020/03/page/3/index.html","9a2309e6531f32f4aa913adf7149e511"],["/archives/2020/03/page/4/index.html","36f810a55d4655f0d3eb3113caf1f6a2"],["/archives/2020/03/page/5/index.html","de25140af4567f31dc6638398cb69a3b"],["/archives/2020/03/page/6/index.html","dd9ac28dd8410d0eeec3aa3110be12df"],["/archives/2020/03/page/7/index.html","71ccdd4c0ce14c2cefca8566a7f3b2e3"],["/archives/2020/03/page/8/index.html","18f0804683bd307eba3e95011d741310"],["/archives/2020/04/index.html","b8fb894f1d6f3ea6bf2c5a4307aeb951"],["/archives/2020/04/page/2/index.html","8d292b1182db37bafc343dd346e1a70d"],["/archives/2020/04/page/3/index.html","697245cd200c46833d2d5ec45d651d58"],["/archives/2020/04/page/4/index.html","13286c937075add5608a13045118e24e"],["/archives/2020/05/index.html","fc1364b19fee88a07fa708393b129498"],["/archives/2020/07/index.html","b9bbcfc0786758347d80bd782a03e780"],["/archives/2020/07/page/2/index.html","ae0ae26d5b132a8630d6ca7f848e21eb"],["/archives/2020/08/index.html","0f234cd610cb78a7c836816dab8ce943"],["/archives/2020/08/page/2/index.html","4c0f897b0e33c140e8e9d0262e5fdb4c"],["/archives/2020/09/index.html","6068eae769c90b415fd0fe4b874bf9b7"],["/archives/2020/09/page/2/index.html","3230b18b6b6d7e85d3318ebb8f6f2c50"],["/archives/2020/09/page/3/index.html","b8935b8851eccb8f9119aa80b823cae9"],["/archives/2020/10/index.html","f7b8c96a988e6df148dd594c872f732a"],["/archives/2020/10/page/2/index.html","d9e73fc0ddfc78d97529720d8f4cc0c0"],["/archives/2020/index.html","c7c10e155dd255cb5c3c8dbb6433734c"],["/archives/2020/page/10/index.html","5e87691a9e2c25f1562ea0d601e7827c"],["/archives/2020/page/11/index.html","6f503df5cb2600446f30d92eab028155"],["/archives/2020/page/12/index.html","f14bf66811624d4c241245d4518485a4"],["/archives/2020/page/13/index.html","b9fcfa1591fc7e5ebf6c70ba90b8f639"],["/archives/2020/page/14/index.html","4dab04634bdf33068be8f48d4e256687"],["/archives/2020/page/15/index.html","7c6ae959a57a3959342b14e2f74fd59a"],["/archives/2020/page/16/index.html","fd2eb6e02b3d09434daf7bdc99278b90"],["/archives/2020/page/17/index.html","479474ace14301fe2d3fcf2ea5bbc24e"],["/archives/2020/page/18/index.html","c13482a6bd2a8b6e94302cb91e5c5cc4"],["/archives/2020/page/19/index.html","17558d0fe105c2a764f8818dcc9482d7"],["/archives/2020/page/2/index.html","972df76bcfcd27ac63573ac4abfe8cda"],["/archives/2020/page/20/index.html","7eba15be9a139dbb94e15377a6de85e3"],["/archives/2020/page/21/index.html","1e978436f2ca449d34fe365b3166e664"],["/archives/2020/page/22/index.html","d848c885a74f3685525e8aaef55522c7"],["/archives/2020/page/3/index.html","2f7a9445de57006f9a9d489825fc8529"],["/archives/2020/page/4/index.html","2e1666e1cad2d1ac4dcf4054ce9a4cd2"],["/archives/2020/page/5/index.html","cda7727a79ba43d9436834b9e5ac5bf0"],["/archives/2020/page/6/index.html","ad1c2bd2d89c9cb3526f32af2537446c"],["/archives/2020/page/7/index.html","a8d56745bf03dc85d1b965a1273ddbe3"],["/archives/2020/page/8/index.html","988a99bcd1635229da41e8d7a9458d31"],["/archives/2020/page/9/index.html","55153ec8fea7f71d4a3525f2250c265b"],["/archives/index.html","07409ea3bf706c1f62fe951922077fc0"],["/archives/page/10/index.html","6e7fc7a223dea593a1bf2de9c6eacf3a"],["/archives/page/11/index.html","7ac6e312b8c828d1a08adc8ad523c1b6"],["/archives/page/12/index.html","c77b435c0df360682627706121b316b6"],["/archives/page/13/index.html","e90fbca1295aed65f9888496bd4a7bf2"],["/archives/page/14/index.html","0ff3090a481880c23e742569ca054833"],["/archives/page/15/index.html","7653f46548b65be5a53c18afca2b109c"],["/archives/page/16/index.html","c174d05480a402c920f7dd53c7cbef27"],["/archives/page/17/index.html","1b8bcef8c007c7f667607f71f83b6e40"],["/archives/page/18/index.html","0bee54423493d13f1734dd45de7e9f53"],["/archives/page/19/index.html","870e0adce08050684e9d213f826b552b"],["/archives/page/2/index.html","2fd2d2e1db630bb4db2287fc7573436d"],["/archives/page/20/index.html","92d83d181cd953be0ed9fbee1823929b"],["/archives/page/21/index.html","396997fdc0f424cc0e49eed536ca8c89"],["/archives/page/22/index.html","c1efa1de2cde853f0847d546bb497fd4"],["/archives/page/3/index.html","80df54106178ed7f25b6d06a6a6f1da9"],["/archives/page/4/index.html","eb40d8345684afffc781f06db7bdc9a1"],["/archives/page/5/index.html","8d13ab917fc43b245b647e1d5b47840b"],["/archives/page/6/index.html","05f6bc54066dbbea62e137a636594a0b"],["/archives/page/7/index.html","d6ec0ea974ebc73ae5a0338581b8248f"],["/archives/page/8/index.html","8964aeb685f9a6ef257da8056a36cd59"],["/archives/page/9/index.html","ac0491e71a576f1dc73a17ea5cea43b4"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","6f4781de90bc3f050a4b69e7e9b51c90"],["/categories/Ajax/index.html","da37c0b1d6940038a6243b5cce4b469c"],["/categories/Ajax/page/2/index.html","6d465d353ff5e9f244db6781d1d26bd7"],["/categories/ES6/index.html","ce1b4407553c0b52a07dfbeea712d22f"],["/categories/ES6/page/2/index.html","fda71c2a67dec843d48ea6829f6c3f77"],["/categories/FL/index.html","6dfbc5a3b78dfbcacd231094a67bd1dd"],["/categories/HTTP/index.html","a40c3beffe3e61b2cb8b1e78991701be"],["/categories/Hexo/index.html","2cf178aa34a4023a8c4cdb1980529f8c"],["/categories/Hexo/标签外挂/index.html","8d7fe068a098508287495a3b7c0754c7"],["/categories/Hexo常用命令/index.html","c36c87de1750bda24d885a03efcfc46f"],["/categories/JSON/index.html","65394dfbfc24d3601671f7f5614ca7be"],["/categories/MongoDB/index.html","098fc810698cb7ca9e05cedc364292dd"],["/categories/Nodejs/index.html","e93bdc9664cf351d1a8aeb2fda868f0e"],["/categories/Nodejs博客实战/index.html","a77a2ec6dd6b32bb1ec811cb62d7329f"],["/categories/index.html","35400fb80ca149da41fea3c2948d3228"],["/categories/promise/index.html","65dfff1279a46faf308bebdec8e0ae1b"],["/categories/日语/index.html","5eaa473b1993d0817d22002b51992b1c"],["/categories/自学考试/index.html","f470189912916534c8347fa1f649e898"],["/categories/自学考试/page/2/index.html","ba1a187649d70f0cacbf6e5e597d7f80"],["/categories/自学考试/中国近代史纲要/index.html","475479106581e27386b0c475db8fa0a3"],["/categories/自学考试/管理经济学/index.html","593acf8abd4c1a5d44814c4de6ae6222"],["/categories/自学考试/考前突击/index.html","49280d94eaabcc96a3adb10f60fc527b"],["/categories/自学考试/考前突击/page/2/index.html","e474ebe74e76b00977b0bc7465ed2a70"],["/categories/自学考试/计算机网络原理/index.html","a5536ef077c3f67f76cd6074cd3020f2"],["/categories/自学考试/运筹学/index.html","33e36ccbcc3524a6ef5cc1e816215fad"],["/categories/自学考试/马克思主义/index.html","3d70d5a23aff2857090714354f38a2df"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/flags/flag-cn.png","aec786dd377f7498121b2b989285de13"],["/images/search_icon.png","587c37488cb060f2dffa18bc0cc9a684"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","fff06f5e9c8f9c3e308c7ec7a7998806"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","05a402467fde398aa494e45598e80191"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","5076fa3873127d9403d16674566dc7e1"],["/page/3/index.html","90c981837cbd43dc5c4ee30dca36f0e7"],["/page/4/index.html","1ffb06ddfa3482791f930dfd0cdd4da9"],["/page/5/index.html","36fc7d218f133c7d7518d5da6fbcb718"],["/page/6/index.html","b5e8fd55153d5173bd772d6253d78291"],["/page/7/index.html","03d1e3e623cc113e032d2ced92240197"],["/page/8/index.html","60449cc4529561c65cebad0f6e388e07"],["/posts/10812f0/index.html","0d30dbf8bb28fdf75f483ddcc3a9e642"],["/posts/126b275/index.html","df4d18a23e7be97a8db1625818302197"],["/posts/12d95a5e/index.html","c382afc014a02b1886d8640dd645492a"],["/posts/1367417b/index.html","18ada81c0a48a21a92623b8759a00f1e"],["/posts/13886e3f/index.html","73910ce22cbf1f8952ad60e314574f72"],["/posts/145193a5/index.html","c154f9bc8b1d657d3a2faeb7b9bf0464"],["/posts/149dde25/index.html","bae45504ea4a4b88a7e1f5e9982a822f"],["/posts/152fa65b/index.html","519b4941ad53b4b1afa7212956f7d568"],["/posts/169e7dda/index.html","fba52c4d96b48e1b17e8f0565a800c4b"],["/posts/1875100e/index.html","188f2e0a2f8746640f976edd1c2cc297"],["/posts/18eaef7d/index.html","402cb24d277d294da10d1063ae6cedb6"],["/posts/1a0bc7b7/index.html","d6f8cbc993a213adb129098dda17b742"],["/posts/1a20a057/index.html","ba5247f31e486a86b2d3fad5fc3c97fc"],["/posts/1a998be6/index.html","0e600d76747153849e14b0f44e00584a"],["/posts/1bffbd20/index.html","baf90b17b5d8b6f50fc1030ff114efd6"],["/posts/1c5a0485/index.html","0c5ed6077322ad8afb3a33e6da226c85"],["/posts/1e638f78/index.html","2a130dfaefa504af10c1b78cfb1bf375"],["/posts/1e967920/index.html","d7a76af6918aca1234acc2c8de95665b"],["/posts/1fb53120/index.html","6122015f4b1ce19e417c60be8357e6c3"],["/posts/21466e86/index.html","385d6a8723093b209f6de0b56ed03b67"],["/posts/21abcf1a/index.html","eb84e576bff65fcf5f2beb704a874081"],["/posts/21c250b1/index.html","061159404801f7fe2eaaa5311cbcd665"],["/posts/2287cc/index.html","d923d35ded49290a1ab06de319744d8a"],["/posts/236bfea3/index.html","0ea7573fc227dd733da8f7f226d99c9b"],["/posts/24caea6b/index.html","c188f481bd0b2c2dab52dd9455ccd721"],["/posts/25d45c3d/index.html","ddcc730140ed6aff28baef34e9793223"],["/posts/262baa9f/index.html","2bc43f43822f3219f97eb573476c0afe"],["/posts/26f82f65/index.html","cc7c19960c04391c414c9747bbca2fe5"],["/posts/27cdc142/index.html","ea6be11158a2b742c6711387d28ef4d0"],["/posts/2895c4bb/index.html","5336fced0f6f8dc53480d5ccac2f61c2"],["/posts/28987ff3/index.html","23953068dcddaa2788ff5f7ea1b1d5e1"],["/posts/298cfeed/index.html","80af8b3075f0689b97edd62267a13e51"],["/posts/29f0df96/index.html","1908cd04dfc40ab52a80af14f5b98e2d"],["/posts/2a1d2b6f/index.html","194d3b9180415d801515c81b298309eb"],["/posts/2a386047/index.html","878e7f45864517ba3c0f83b1070315b0"],["/posts/2b2f44ba/index.html","7e8f8ce6a55f62344d902a4a11f259ae"],["/posts/2b770baf/index.html","6586955710f899db24d4331786abae48"],["/posts/2cda4a8/index.html","de0683ac02bbd11c1dd848fab9e86a6a"],["/posts/2d020832/index.html","7bae6744b6a58fde192375301fcca732"],["/posts/2d6d3bd/index.html","37c98a852b2aebf41c947baeb0357f08"],["/posts/2e0c129d/index.html","478ec965f9ad1d46bda4ef7e72a59c50"],["/posts/2e7563a0/index.html","96834b6f639123c3156a91dbd927e6d0"],["/posts/2e7b8d69/index.html","f730fc84f29a80bf76d1c68d4f889b95"],["/posts/2f28d14b/index.html","7fceeafe16d9901f2e919378d3fa8948"],["/posts/2f6e1383/index.html","ad9b6d89ad7bc6e19304f0ab1618eff7"],["/posts/30bfd1cf/index.html","67d3d2ecfe5dd376e8ac928d0e41f3e7"],["/posts/33235106/index.html","2c09b1ad32753957da7a9dc6b978db74"],["/posts/344e951f/index.html","240cbbedd822deeb40b9cc7ff826b7b2"],["/posts/35e2bcf6/index.html","6f24979dab199914b2b070bb719e3f9b"],["/posts/365e96c5/index.html","e9314808666b4d85b52aad32e1405b9b"],["/posts/36e331e3/index.html","7e866729c87e41fee317648803d7cea7"],["/posts/372df90a/index.html","d185b3cd5025f22d701ba458cc7bcf4f"],["/posts/37c547df/index.html","ec2dc3c116ee7fa153444be926bc7b94"],["/posts/380dfa6c/index.html","f15b0e8909d6ffe667f7179e083ce830"],["/posts/3859c98f/index.html","760376c93b61e879f4fb543deae96c34"],["/posts/38a88481/index.html","90f0d2fc9a8701bb1729b9309fe8841e"],["/posts/3914bfed/index.html","85894623519c1f26ef625de071aefba7"],["/posts/3b56780c/index.html","0133f0602955a78ee312e7c9d6272299"],["/posts/3d1ef1fa/index.html","771b8a6c3388c0669c4c0dccb9ea8939"],["/posts/3e4bb613/index.html","b7e475762f365eb5fca322942543d56b"],["/posts/3f2e933/index.html","5fc12acac1cdf271f180d68d7c67d6a6"],["/posts/3f6e5f9e/index.html","87c592c55c7c75c460b4d6185bfa0188"],["/posts/4349a589/index.html","5ab46b5f9a129df1b2ddf8ca5b467b6d"],["/posts/44246190/index.html","ce48c849c02c3ea9404b451f817fbb53"],["/posts/456550f/index.html","eae5e9303124ad09344004a3e963f100"],["/posts/470ac03d/index.html","fa1fdccc91e800d6a85589f35ed89cee"],["/posts/470d45ef/index.html","c09014bc74ea3a8f6a0df0ee003ba0bb"],["/posts/49249ac9/index.html","5754c4f9abd25ffba95f074dd990d6c4"],["/posts/49f2d2a/index.html","dd22c61dc15b88771bf37b86fd0ec670"],["/posts/4e6d4eb4/index.html","d4301d98f4dbf539a3dd39718fbc130f"],["/posts/4f346c5/index.html","581c18b7a2080ad7032db0d45f960bf4"],["/posts/50caf1d4/index.html","3c7aedc517a34c5e68121da9ec4a1f57"],["/posts/51139400/index.html","064057b9e2dd6ffcbea3399becce27a1"],["/posts/512c9a09/index.html","d4a45868ff61cdda40ea15258d721b50"],["/posts/5205b330/index.html","db2234b4d4cd523a6d41e89f94cb9267"],["/posts/52d36cab/index.html","f415c678cd52cad708143c265674be93"],["/posts/532a083a/index.html","cf4cf5882d15b037e2fced85f2f69fe4"],["/posts/537d2c2a/index.html","2f144e5da10f0c26e2899f0766e710c9"],["/posts/54383ba0/index.html","23a6e51e4d5a5bb668ad8773006fd1c8"],["/posts/54667693/index.html","62dd9492fd851c5fef3da02d0fbac0db"],["/posts/5508212c/index.html","076118cc9ede7205a9bb878ef1b3aa81"],["/posts/571564e5/index.html","7fd8138d7ecc805aae0d636b92457e7a"],["/posts/57900fe5/index.html","362584b72f33309e2acda53efbce058b"],["/posts/589a214a/index.html","264709d14d115fcbbd4e3def76774ce1"],["/posts/599a2b19/index.html","db90616baebff9da78d503adb866b495"],["/posts/59c05382/index.html","ecacaa8cba173a0cb74fed74856f8f7f"],["/posts/5a5294c8/index.html","afba1cf5250a4d6438d1be4d372cfbdf"],["/posts/5d3da28e/index.html","0f7d3593f089fbea59d2773874d6c0de"],["/posts/5d3f50d1/index.html","91f07d43f75ba6890b7477e76418e556"],["/posts/5ef7ef00/index.html","7308691cec5663108f56babdeb93e99a"],["/posts/5f1fa8df/index.html","0c923018431a603d3187cd802f71815c"],["/posts/60b5dd06/index.html","772d40c1b469ec3c00fee2892cc10ece"],["/posts/61477045/index.html","58bd57eca7799c02b22404a9aac705a5"],["/posts/69d79f93/index.html","c381bd6de94b20aa0009665fcf8a3677"],["/posts/6b2f046/index.html","bce6189d15c905adb09c01fef333036d"],["/posts/6b4610c4/index.html","0551093e0ff7f286aae182294d4d0375"],["/posts/6bbf03f0/index.html","5c62879621682aa59817998812b7289c"],["/posts/7000d139/index.html","1c3865d952c46c82e48405b1824c8962"],["/posts/72f94093/index.html","72858779e7b2691380d764a37518ab98"],["/posts/7380b71/index.html","b17babcbd8b92c19bef6863cc32bb6ca"],["/posts/738eee3b/index.html","2cc1df593a2915df3c921f0d0509bead"],["/posts/73981dbc/index.html","3b09fe38136e5c38c78941cf672d8cb3"],["/posts/74d60fd9/index.html","44dd3982784a3547be65bc4ac60fd31e"],["/posts/74f5d9a5/index.html","836dbf45c86dda8039c66b3bbec085d5"],["/posts/750f2ce3/index.html","7a9d8b680863a33a8eafa553415a1455"],["/posts/75ceb627/index.html","84d6febd17aaf101ccb9fcf2273574fa"],["/posts/7725b75a/index.html","84d099822a8b4262e50ba6d5c9d1e891"],["/posts/79ef335/index.html","b2e22736a3cbb9be92c87016bcb1189b"],["/posts/7bbd3149/index.html","42be3962918932d729c2f597a4d7e3ac"],["/posts/7c20e8d5/index.html","cc76498024579fba0ba14066c50b20ac"],["/posts/7d3ea75e/index.html","414059ef1559fe973032c4864f68f61f"],["/posts/7d43958e/index.html","0ee387d9bfed3b2006a9357ee7a2ad98"],["/posts/807ac7f2/index.html","8b02945e27a41c9fa58d0cf3d1dbfad5"],["/posts/81738fa0/index.html","d5de2cce11ad7f20ea51a3f3f7b57f9d"],["/posts/817c41b4/index.html","8f5af7c5add629e5425e31553344f5cd"],["/posts/84ee8e34/index.html","205512c6388478e461c13db62508540f"],["/posts/8837602f/index.html","52e15c1ad7bc6b8012e2eef5f8cd4c6b"],["/posts/89589a03/index.html","d62062a27cb57eca61fe561cbae89830"],["/posts/8bcef008/index.html","775f708431bc1f574c4b28c63dad1d65"],["/posts/8bf9abeb/index.html","da5c4891b8ea8299f6202ec8b4e3d026"],["/posts/8e5f5686/index.html","6b59507593bd93c06dcedd34f4cb2632"],["/posts/8fa6b8c7/index.html","d7d73f403ed6982b98a295fdf8c28b7a"],["/posts/9029a3de/index.html","113efeb6524ace73bfd32a01ecee2417"],["/posts/909d9a5d/index.html","06f832baeb4d5fbaea0ebbf32dcd41e9"],["/posts/91404b94/index.html","4e4abf70a28dd93ade8def5c105e7585"],["/posts/932e3747/index.html","15f795be2fdc863d59362b64f6b8f4e3"],["/posts/95fc9e6e/index.html","f6818892591a4e3dc2e422372255b136"],["/posts/98e67280/index.html","8bc3d4a511a115a663bfeb70a0190207"],["/posts/9a4d13ef/index.html","70b76eb777ec7b98be04e1e7cc5f43fb"],["/posts/9afbb889/index.html","be0104227891342e8478d4a3ac17af6f"],["/posts/9be63ba/index.html","7cfa8e0cb2b881448aa14895cc7f51cd"],["/posts/9d967c90/index.html","a7da6f031ad790565116b17b9b80e738"],["/posts/9eadcdf6/index.html","a55b94ed9820c2b7c03c07e319228c9e"],["/posts/9efd76a3/index.html","5744fafd843ec5de8ec38be5886bbe85"],["/posts/9f97db8f/index.html","af55608ec9bee9fc4a86f57061b0cad2"],["/posts/9ffb4388/index.html","425b762a527fd93d6e9bac59a5119bbe"],["/posts/a094d027/index.html","af39f420c4e8bf5f8d10b5fad87c812a"],["/posts/a27042c6/index.html","8fae91663939ed7c47b31a7969d05f9f"],["/posts/a29cc732/index.html","91f1b2d5bb3c53ce65a674d4a88ade4e"],["/posts/a44a518/index.html","af1285c81542068e021f84211c7efa69"],["/posts/a4f2a748/index.html","e56a5a78b60573ef83cf465fe3617014"],["/posts/a7dc32c9/index.html","eca28fda2b10a214226232633fe8e932"],["/posts/a7f753ec/index.html","1bc221d6fe39285c54d5e792c808ae27"],["/posts/a9168bc5/index.html","2bf2e50c80a9072e2671ed22f5de7076"],["/posts/ab176793/index.html","ecdba37cd061baceca4b4356ec7d8820"],["/posts/ab34095a/index.html","8bef243d04116e0235f058736be3c1f5"],["/posts/ad47c4a5/index.html","d099ca5a7cfc021c201dcd1ece7c0b2a"],["/posts/ae8f7b74/index.html","d5c1eb2d7ab49314b0da85816054402f"],["/posts/af43816b/index.html","c4bc22e9e6e6ef28764d52375ed2d979"],["/posts/af9e049c/index.html","499aa2105b4821837b768a3b86eb872d"],["/posts/b0f1a367/index.html","15b66eeb6476824c7889494c3ec4b537"],["/posts/b0f98e2c/index.html","4dadfdd653174ade424e3cf3afae2f2e"],["/posts/b33131fd/index.html","e56899609ec165c2dce126643178412d"],["/posts/b36eb520/index.html","b9cea905ee66b29ea624159284038c4a"],["/posts/b542fc02/index.html","1eaff6155d00476e9deb1becfd920c35"],["/posts/b54eeeb4/index.html","3f476037ff4ef70f0568c11879cafede"],["/posts/b84f3f3c/index.html","c5684fe5e5c5ff54d0282e43a6ed17f2"],["/posts/b94fc207/index.html","863b0854e9c0b8813a3dadb0889e96bb"],["/posts/b981a6b4/index.html","fc6a6a0ed542b1c3131d2effe27044db"],["/posts/bcea326a/index.html","c8ced4e45dcf0833f6f050ff50375cb2"],["/posts/beb19e80/index.html","fa6e1364892ff46b4230d17664315a7a"],["/posts/bec490f8/index.html","b82bfbf8dda659514904223d3796eda9"],["/posts/bf7bde0e/index.html","aed30f24820c0c8914d1cd4d4c52a2b3"],["/posts/c03f17c9/index.html","377e0c60ea97dd29db5bc861dbe99400"],["/posts/c35bc572/index.html","4a944ab334ee9906dddee40eb3fe9849"],["/posts/c436016b/index.html","a6b8094b555d2894cc1182c4e306aceb"],["/posts/c4efc741/index.html","0d7adfab6fd61684b7daa44aa7cce302"],["/posts/c5e8a08e/index.html","0325673edc5c2fd33dfd4ff8f42a6b12"],["/posts/c7db1dc0/index.html","fa91b2dbbf97f312b8a4e66aaa69d462"],["/posts/c7febeba/index.html","f9cb2725f2498b952baa2dd42a2e06b8"],["/posts/c9c3a06e/index.html","a9d170dccca4d25c1e379f181389002c"],["/posts/cc6d2cf2/index.html","2450ff0a7987cbdc4a42aafacd370eea"],["/posts/ce48f291/index.html","9c53ccdedb6c92f591e3f25fa6b4a4e4"],["/posts/cf480faa/index.html","e2e73e36cd86760b5a160df0878c87bb"],["/posts/d090b4d/index.html","71c31dfe49fa8db405b438bf1f630477"],["/posts/d1995044/index.html","c89ec1a584ecd3486caa140f40fb3aba"],["/posts/d2d34977/index.html","f6631a4bf9d23d1c4b41f65e002a88d5"],["/posts/d3647a92/index.html","0d5885c1b124d1c955ad28ad47661d59"],["/posts/d3f6b818/index.html","c87fdd449be8310160c8dece291cbfde"],["/posts/d465029c/index.html","de6eb64806e9182680007c39686f7df0"],["/posts/d9884be2/index.html","364f5cbb64468bde55a145973fc8f300"],["/posts/da40f433/index.html","cb4c7b8cfa474157cb9409a5fbd23586"],["/posts/dae71d5f/index.html","5b69602d1a43abd5fc0df55517e533ec"],["/posts/db9fbe47/index.html","e30f6eec9aa0b104e8a4a97296b8a198"],["/posts/dbba997d/index.html","dbb0e9f066ce065f926750ae9feab072"],["/posts/dc94f8a1/index.html","594cc3125ed323698391fc33104bdbde"],["/posts/dfe9b67/index.html","4e50b78feda01a7051a5ba38de3ea2b8"],["/posts/e0387d80/index.html","8fd092473342e1210f66ef0ce6e5db16"],["/posts/e356f7b3/index.html","4c11f07dcb51f95c1056dcd5f6e1f3a9"],["/posts/e3acb366/index.html","16db29c8b1ffbc2451201da7204e2664"],["/posts/e450354f/index.html","80655dcf77f15f21eee06afffb624c33"],["/posts/e489223c/index.html","56579785e35909fc0246d11f16e73450"],["/posts/e9a8ddd1/index.html","0d966ed69838ed1a986f73a0009c6968"],["/posts/ea914c06/index.html","98d85f004af173ae740a68aa5e2dac1d"],["/posts/eaa8f31e/index.html","ada832d4aa5b87f94093b80945d45580"],["/posts/eac19412/index.html","31b3341f9158f319e30708cbf264fdaa"],["/posts/edfc881f/index.html","6099150a2cef469478897b9f6211f005"],["/posts/eec0bbd1/index.html","21500bf18a1762f602c7fd6bbe3436c1"],["/posts/ef22c7c2/index.html","c6759ae1e93a99752a48722ece41c513"],["/posts/ef271825/index.html","f56b6482b72e3dbf595e766ea8aca21e"],["/posts/f209578c/index.html","596635b45372d1380dd3d6bda8779089"],["/posts/f3e9bea2/index.html","7472b34e25057f54312ebe776d7739b0"],["/posts/f67b7122/index.html","e964851571e30233d8271cc6f096cae2"],["/posts/f7abba28/index.html","85bc243d1cad6e14b25489489ad4830b"],["/posts/faffd764/index.html","659f4fadf0f721f30264ef95a8d4a103"],["/posts/fb684fb0/index.html","f4be51e34ccb3056f58115d95065762e"],["/posts/fc57199f/index.html","cb800805966e55f696fd3765387c072c"],["/posts/fc6e9a7d/index.html","e62558e6edeceddf72f2829112570a53"],["/posts/fc7bc02a/index.html","b9961d553303de19e519380b3c672319"],["/posts/fd67c5cb/index.html","dd5a4ae92ebec98d1eb7c775d75097cf"],["/posts/fdde061e/index.html","10fa7d5452a6cba2c64e72f0b2249d18"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/ES6/index.html","3824e7cde0187ad6f766041a16362cfc"],["/tags/ES6/page/2/index.html","f4ef3b9c4f259285fe31c03f2da7e838"],["/tags/FL/index.html","c7d6eb198a9a75530ad0c92367fdea44"],["/tags/HTTP/index.html","4abb16dc2085957635d2e7328daa1276"],["/tags/Hexo/index.html","df983cf9c6d7bb025e434129281bd6e7"],["/tags/Hexo常用命令/index.html","0611b27f0e423e230b6c9a3bcd44eee1"],["/tags/Nodejs博客实战/index.html","c33a33d56656a9f718194cb3748d45a1"],["/tags/ajax/index.html","7e865444a29f5311130432e4fa4515ce"],["/tags/ajax/page/2/index.html","58d26cb6d7bbec087dd4ece6d8de63b2"],["/tags/curl/index.html","a4f7cc09f7b6dacbac4a30713ca926d1"],["/tags/index.html","9c682bf10ecc04ea93ea1639f38b2924"],["/tags/json/index.html","1e7e8ad4d8711e151c8773ec8bd4772a"],["/tags/mongodb/index.html","24a37fa3652033341878e7dfaf8af180"],["/tags/nodejs/index.html","b34d655981eb106a16e8cc3444f9f3b5"],["/tags/promise/index.html","52baa24238c08fe0cbf40eb0a59f215f"],["/tags/中国近代史纲要/index.html","e86f933b0089d367ea0961824f77c287"],["/tags/日语/index.html","c46d0bd1d0613b3e262a724b9dd2e5f5"],["/tags/标签外挂/index.html","4015dfcfde75071121a0cca339680873"],["/tags/目录索引/index.html","515f51c7fed26d52c51642d1c8054a3d"],["/tags/管理经济学/index.html","6761315d3b6beb93f892ec8fe934e31d"],["/tags/考前突击/index.html","c17357bae1fab0bdacb58a1a5ea4cada"],["/tags/考前突击/page/2/index.html","d9c35edd52c3a9be2fdca308d52a6530"],["/tags/自考/index.html","00b0210c5b4712d34336823b4299d9f0"],["/tags/计算机网络原理/index.html","0e38c3b2259191f451cc7e530b3f3d43"],["/tags/运筹学/index.html","f5dd476232785cc579608ecea0e6debe"],["/tags/马克思主义/index.html","ecc3f58e35cf9e5824e26290cb763871"],["/webstacks/index.html","b7871e3b51d769a2cd87baad95bc61e4"]];
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




