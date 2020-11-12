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

var precacheConfig = [["/404.html","8b57d7733e00791cfdaece015b4c6144"],["/about/index.html","604975e3124bbf9ce4b6bc639dbb2f62"],["/aplayers/index.html","f6dc2d70d576a6a801904e089d002fa0"],["/archives/2020/02/index.html","dc0c10f9d671f1e53402d1ff92d1851a"],["/archives/2020/02/page/2/index.html","c157cec5c072a53158b3248a9140d914"],["/archives/2020/02/page/3/index.html","2b969d052262e0300de0b57d3837afa7"],["/archives/2020/02/page/4/index.html","8a067e24802ef378b341dd0ae529b1e1"],["/archives/2020/03/index.html","b7b09c555498bdef536978b498298a6c"],["/archives/2020/03/page/2/index.html","e50da03d6de1fe4d25c21cd2f21a9278"],["/archives/2020/03/page/3/index.html","e1831e07974e31f7a4647ea8338bafbc"],["/archives/2020/03/page/4/index.html","23208c7e79e535e757b9dcb60c30b85d"],["/archives/2020/03/page/5/index.html","462d4b51184847116a003ed129df0938"],["/archives/2020/03/page/6/index.html","94cf0096a5d12ba620c96a125d329f16"],["/archives/2020/03/page/7/index.html","cf20ab18bf745cea24a26578398c325a"],["/archives/2020/03/page/8/index.html","ef43e377dbdb92bdb1c3f359a98756b2"],["/archives/2020/04/index.html","491fe641887663e37d4d2676ab4af2b1"],["/archives/2020/04/page/2/index.html","fe4dbc6500e139c2b947ecc98795b8b7"],["/archives/2020/04/page/3/index.html","bb853a5ba1ef126bcb6aca241f4731a0"],["/archives/2020/04/page/4/index.html","9fb1e8c662a361a0a67e6c397a393e4c"],["/archives/2020/05/index.html","afde80ce4eedc008469f22e3a86f071d"],["/archives/2020/07/index.html","2860d0b4402d54ef5c8d102d8c2e4baf"],["/archives/2020/07/page/2/index.html","242fc8da4a6ded86eea71369f49c1a3e"],["/archives/2020/08/index.html","e7abd2d9d3213f31d75a8b5052265680"],["/archives/2020/08/page/2/index.html","ef491dc28af013fa8784a49e2530af25"],["/archives/2020/09/index.html","1719eaff1b94057aaee795d135891ee8"],["/archives/2020/09/page/2/index.html","bd102839abc16e2f1e8f4f1c9409d439"],["/archives/2020/09/page/3/index.html","c17a5c10aa86d14a18a956fa84cafea9"],["/archives/2020/10/index.html","3fdb7ce384d45a9c447e6eccd9aa2c73"],["/archives/2020/10/page/2/index.html","0ad7712dcdef12e3c2b0078ff79092d3"],["/archives/2020/11/index.html","9b70fc494f3e7da7b47855d6a56e6005"],["/archives/2020/11/page/2/index.html","784255b1f56fdcf2bbb671e2454ecde0"],["/archives/2020/11/page/3/index.html","c4195407d5359bca8745bf39d54148e0"],["/archives/2020/index.html","7446782abd49cbc8b7a493013a0d3fc3"],["/archives/2020/page/10/index.html","6f845a768f70484a8c2b90d9ae3ae5db"],["/archives/2020/page/11/index.html","b3ddccbeb04e83a5e225a769cd700e90"],["/archives/2020/page/12/index.html","5ee7d56dcfc1882a96ae37065444b542"],["/archives/2020/page/13/index.html","4417cd22f1529f90ac3a756a8bd178c1"],["/archives/2020/page/14/index.html","afe96f6a6e8835d93a194510f3de4685"],["/archives/2020/page/15/index.html","0e5d461024f1e8411c5b1ef4b2c5d840"],["/archives/2020/page/16/index.html","72c3d625dbe5f77233b9fa01ba11e078"],["/archives/2020/page/17/index.html","63ed844e8b6da017b8359fac53465861"],["/archives/2020/page/18/index.html","d716dff7a9342aee937bd67be84d93a6"],["/archives/2020/page/19/index.html","b8417ead22073a6012dd00e451118552"],["/archives/2020/page/2/index.html","0c45e75193df697e259a9f2eae9c4f0b"],["/archives/2020/page/20/index.html","ab2b59268367971284850267edeca55a"],["/archives/2020/page/21/index.html","562e2594c1fce89b67e0133dda591251"],["/archives/2020/page/22/index.html","ba2ab613ee7d45dba80813a848108642"],["/archives/2020/page/23/index.html","85ec3d378234b88ac26b3d7b225f55fb"],["/archives/2020/page/24/index.html","0f9365fc3e4acf87b9f36b5de9a5400d"],["/archives/2020/page/3/index.html","50814f775918900227d007e0c227dd85"],["/archives/2020/page/4/index.html","b79e0edd710a7370805cef87f1604c11"],["/archives/2020/page/5/index.html","e136c755046ecd5e23cbe1b2a1ea8f17"],["/archives/2020/page/6/index.html","6226c7491fca1e156817adbe2355ef9f"],["/archives/2020/page/7/index.html","5581206b4093cd86124c059d79dcb04a"],["/archives/2020/page/8/index.html","77d21cb926d6bb0211262b327c5f1fa5"],["/archives/2020/page/9/index.html","3cf43fbe42b5c0fb51a5f44448014da3"],["/archives/index.html","10af19e1860fc8b068e8c9d991d19b35"],["/archives/page/10/index.html","8946e5574498156ec80edfdee8d8c4c2"],["/archives/page/11/index.html","4d9a067a2dcbf6c12bcc3df85b13c04a"],["/archives/page/12/index.html","9a922a832e5b9a4ea89e2e77c3ba11bd"],["/archives/page/13/index.html","3ac4232fe8242f7e32b3023ad94eee1a"],["/archives/page/14/index.html","0bae1c9c561c84724139f4049d566535"],["/archives/page/15/index.html","c0058ab2e34d3c4ede0e602d3ce724de"],["/archives/page/16/index.html","150a835a42381852992fd25c2a96a101"],["/archives/page/17/index.html","3cb8c50fff325076ed3f1a437eff6f8d"],["/archives/page/18/index.html","25c754c5260f8059f1209a6244bc7dd8"],["/archives/page/19/index.html","f5457748400b9b9bcfdcda65d7d1d811"],["/archives/page/2/index.html","c6459b2ca82564d15a37a04d525f9c52"],["/archives/page/20/index.html","e2cc8f37d05aa24d7baa8d5e11de59ac"],["/archives/page/21/index.html","0314142aaaf059ffe828330670f24476"],["/archives/page/22/index.html","d2c7b45a02183c85135d49176c49cc25"],["/archives/page/23/index.html","69c87ff4867f44494e896409f7d97eb6"],["/archives/page/24/index.html","5a9f64df342e55c118d9e039c16b9395"],["/archives/page/3/index.html","12f21a5759cb9a89e9b513f614a2e499"],["/archives/page/4/index.html","3565045c3c4f625f29b0617c3a035127"],["/archives/page/5/index.html","faf3ed3199d72753848b7a82754fdd89"],["/archives/page/6/index.html","963e229d6b22ed1a03902d8f7a64310d"],["/archives/page/7/index.html","6ccf8b56c66c398b7c0671dccdacece7"],["/archives/page/8/index.html","2aa070c193751e14273322a95099a104"],["/archives/page/9/index.html","132f4e07dc82dfc58e2f04bd7bab26df"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","0b5425f2e7b6c79a2bf1f2de7dffa29a"],["/categories/Ajax/index.html","bd43c24034f82aa4892db4907d1bb018"],["/categories/Ajax/page/2/index.html","99574c0e659cc7290f8eb1b94f4f4249"],["/categories/ES6/index.html","bb422e539335805808900ba4480040d5"],["/categories/ES6/page/2/index.html","8292fb4bfaba91d89ee4e25cc82d059d"],["/categories/FL/index.html","474c150fa5609e6c788f66cd9c35b609"],["/categories/HTTP/index.html","241724256d4efbbb71411a910671ea6a"],["/categories/Hexo/index.html","c86d599d7a9d9a6c43be3c231ded27f4"],["/categories/Hexo/标签外挂/index.html","53245ce394054a86743a498fd654d30e"],["/categories/Hexo常用命令/index.html","7b032f74390b8e3f25e93a1cbfec3187"],["/categories/JSON/index.html","74c5f214d2fe4b206d51041634d65bfd"],["/categories/MongoDB/index.html","22d5c8389a404b14c4ea91b393e2f79f"],["/categories/Nodejs/index.html","45ca27a6d724977643183f3d5c0a4b17"],["/categories/Nodejs博客实战/index.html","cb09efbc682c3982f33a4879bcdff06b"],["/categories/Vue/index.html","9fe24d3b86cd1091ba29ba31ebdaded0"],["/categories/Vue/page/2/index.html","7fe40944251d711fbe8c789b3c9eb37e"],["/categories/Vue/page/3/index.html","2ead95a4e184e16ca831dea0383acf5d"],["/categories/index.html","4e728ecd9785c14376bbc747f8227a85"],["/categories/promise/index.html","f7c0832b49315739df66056deaebfd5d"],["/categories/日语/index.html","5a1d6725b45fdcefce25f19030d11ed9"],["/categories/自学考试/index.html","4685605cf6902a15c54f044a9945a6e2"],["/categories/自学考试/page/2/index.html","fc1a4be4d1b9b8c8baf0bd7f63472beb"],["/categories/自学考试/中国近代史纲要/index.html","de846b34495a10e8170ee79141f2bcee"],["/categories/自学考试/管理经济学/index.html","f254ec1c8b001046805c184199a30b66"],["/categories/自学考试/考前突击/index.html","27087b0a5e59b0287faf6b6fd7d38651"],["/categories/自学考试/考前突击/page/2/index.html","73e7ab878dedae41473512c583330191"],["/categories/自学考试/计算机网络原理/index.html","02757010c1a09c5dd15fd469c4c9eee1"],["/categories/自学考试/运筹学/index.html","aafeade47fc59e35e1b40a4900b2d5f6"],["/categories/自学考试/马克思主义/index.html","7df4277c7a5838aaa2d9c30cd2a4c08b"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/favicon.png","831793361f36a5524d7c2c8e5a5e791c"],["/images/flags/flag-cn.png","aec786dd377f7498121b2b989285de13"],["/images/flags/flag-us.png","4e484b374a934ec7a0c318fa3039a18f"],["/images/logo-collapsed@2x.png","5a7921ae91c9497d9c479db2ed247271"],["/images/logo@2x.png","7dff419a181fc2ee0d21e7759b9fdff5"],["/images/logo_dark@2x.png","7618f56d3783393049d5486b34c83f1b"],["/images/logos/github.png","3ca867b4d49b00409911b0e7d221993d"],["/images/logos/myblog.png","c65b405af280672770a5e68dbc602608"],["/images/off_on.png","1bdd36870ded5c5d39e24fcdc65b0cb5"],["/images/search_icon.png","73b5f23fe9023e21c9d90b25d73f3881"],["/images/webstack_banner_cn.png","49008f34a922e970792cacb5d17b51a0"],["/images/webstack_icon_producthunt.png","2ba473dc05e96515bb57a7bb00c4d703"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","cbb14b913c16347daecc37b1f22494a0"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","ed7d97b281038cfe50defde8d7c4e8d0"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","6ca3973a4cf938397373f031124c18dd"],["/page/2/index.html","15e12b3759801ccf36ed71fe4a95fe07"],["/page/3/index.html","afcb573042d1dc16ec3b896647e04538"],["/page/4/index.html","1d4dc2b57030bcf85239c8a77b8e3cc5"],["/page/5/index.html","26cd89c5205c48c7c404fa12097b04e5"],["/page/6/index.html","6a162aaf93bbe1a5d470203ba53df2a0"],["/page/7/index.html","8c87c336dc5a622d4ec2b4464190daec"],["/page/8/index.html","7aa66c4620752034712358668e3f7105"],["/page/9/index.html","3617feb8d49f45e341c78cda8809f683"],["/posts/10812f0/index.html","be91bc48710055c8fabc2ab3525bcb39"],["/posts/126b275/index.html","2e48683c723543aaebf6fe7fe9c45c8b"],["/posts/12d95a5e/index.html","0ef1c238afc81e787fbe4d2c7fd02769"],["/posts/1367417b/index.html","d714f27de71cce90449753ba1520b39a"],["/posts/13886e3f/index.html","b54ee5bf3baee760bf47bfd8d9274346"],["/posts/145193a5/index.html","d46f732c57c1d0e17000035f4f0bb46a"],["/posts/149dde25/index.html","0e2b74facbd1d20895963eefb3b23165"],["/posts/152fa65b/index.html","65e4f3ef2c83d8b13cf86cdcaf1bdb40"],["/posts/169e7dda/index.html","e4ac2ff65ed9abab91ad86775791c00c"],["/posts/1875100e/index.html","9998378396894e918a5dcddbed97aa5d"],["/posts/18eaef7d/index.html","a093ab2ba72a64cc2aa77273f4fd27ec"],["/posts/1a0bc7b7/index.html","eebf55046d91af7ad34a8123431614fe"],["/posts/1a20a057/index.html","d1baa064870f49236df4c58d4283dd2e"],["/posts/1a998be6/index.html","f2486126eddd16931a14000d8fc53372"],["/posts/1bffbd20/index.html","7ab10fa944e88dcb7038f40118f56cf0"],["/posts/1c5a0485/index.html","9d015ae610c445482f95d0a2adbf54a9"],["/posts/1e638f78/index.html","493fae6adf462052020741e989073de7"],["/posts/1e967920/index.html","ec60235be5264bb9c7ac7e92722697e6"],["/posts/1fb53120/index.html","342211ac52cd2928b3af9cb9b8d182ef"],["/posts/21466e86/index.html","3a2079b022a1302ea6659953ed61d9d9"],["/posts/21abcf1a/index.html","b8d454a9bdc09f8faf91a0beea563a9c"],["/posts/21c250b1/index.html","bfe881e510b74a553c7bddc0e09ebcf3"],["/posts/2287cc/index.html","20b6e9e8fbe2ad4bfb933217a6272748"],["/posts/236bfea3/index.html","9f1881a4fb4c1bf1e2ffa17da66f5c53"],["/posts/24caea6b/index.html","afe4aa950b6e238e0e33f87fb90e40c4"],["/posts/25d45c3d/index.html","73564f9bf17a2deac0b321bf3e2eaec5"],["/posts/262baa9f/index.html","4879fea2af0d75f3b35955875cb39ce6"],["/posts/26f82f65/index.html","9f8973935a9648d77be2bc48f4c3b753"],["/posts/27cdc142/index.html","b639bd04c57ca633a227165e95898662"],["/posts/2895c4bb/index.html","9633f415e3a2325cf1b1ad314470c939"],["/posts/28987ff3/index.html","5bcb41dc31262c72d8a736dc957db652"],["/posts/298cfeed/index.html","81c4edb95843bb93405320213f9fc062"],["/posts/29f0df96/index.html","72fc464b67ca4ae06ca5afa63059e56e"],["/posts/2a1d2b6f/index.html","0be48c57f489fe3ccbeb640de442c87e"],["/posts/2a386047/index.html","ce26b189dac3049daf26ce7a8b04db53"],["/posts/2b2f44ba/index.html","28f211f1621b32789d879aa094f75c2c"],["/posts/2b770baf/index.html","d9416130496deae8499d6313f32fcf54"],["/posts/2cda4a8/index.html","255731671e4572cd12bb8fb0ad3c06cd"],["/posts/2d020832/index.html","e8a4d357c62a6198d5014af8435fa6bd"],["/posts/2d6d3bd/index.html","3d96a6192d622a3864b4798cfb42f9a5"],["/posts/2e0c129d/index.html","4a29b55f1e019f3bceb8524bfe818391"],["/posts/2e7563a0/index.html","7eb1da20d4fc89642db370d9fcda29de"],["/posts/2e7b8d69/index.html","205a3390c5f573605533224ffd3179c2"],["/posts/2f28d14b/index.html","a4d463fb437c20e6a2df6655ae632bba"],["/posts/2f6e1383/index.html","c275b99acb44374b5ea8db71fdc92d34"],["/posts/30bfd1cf/index.html","4711454b4d279a03c502c7003c85aecf"],["/posts/3270cf84/index.html","4895e818410645b2454c3bcb0ab1c7ff"],["/posts/33235106/index.html","b60ca3f2e9c9e0443d903bbaeed643a7"],["/posts/344e951f/index.html","79cdd442f8ca12d584f496b871b49b23"],["/posts/35e2bcf6/index.html","7ccdf2eed8eb39315b9a2df51acb5376"],["/posts/365e96c5/index.html","23beff1c2480bfa8df2fe5b8b90b5385"],["/posts/36e331e3/index.html","3edbe1a1e0d1819e9b9263c046831091"],["/posts/372df90a/index.html","2ee587a18b7bef649ba2d3f690caa7c8"],["/posts/37c547df/index.html","c791ed255cbf1134b22bd6d217aaed77"],["/posts/380dfa6c/index.html","7a45cd70e647a6a14fef28f5b2e36db9"],["/posts/3859c98f/index.html","7528f0b214adf15a4997cc59eae6f136"],["/posts/387564ca/index.html","6dc3f20b235b4be75158d11407d35030"],["/posts/38a88481/index.html","beca87398c49f57318ebdd6e79636698"],["/posts/3914bfed/index.html","60a07331724fdcd46ffc1d07fd68f287"],["/posts/3b56780c/index.html","235e7e4cae8abb1533b563e37216e069"],["/posts/3d1ef1fa/index.html","555783770d6696d6d39f7be9519ec6cc"],["/posts/3e4bb613/index.html","b7ff9aa59408390fdba6730fcffcb048"],["/posts/3f2e933/index.html","a7d94705799a25673a288cb38a167705"],["/posts/3f6e5f9e/index.html","b241636602b135267674e343d6260918"],["/posts/4349a589/index.html","13ba5eff0577d63974f78c489347db71"],["/posts/44246190/index.html","f5b967e3dccdaa1974e21f2eb941b457"],["/posts/456550f/index.html","177d445f5ad0bcc7db4c8f484b8ff8bf"],["/posts/45fe8d36/index.html","b148a4264ac32af0e6f828d8b53609c9"],["/posts/470ac03d/index.html","9750fd132866190e9f22c9c761c48676"],["/posts/470d45ef/index.html","4e0afbce04ff173c1726d8c5df875d12"],["/posts/4894629c/index.html","3bb4195f5499369f09c27bfd43512165"],["/posts/49249ac9/index.html","fb3b177fc0bf738ff9bf184d982b3414"],["/posts/49f2d2a/index.html","9f951e5642738a4e7083caa2b647eb96"],["/posts/4e6d4eb4/index.html","6f7e00030065bdf82830a4cfd521b235"],["/posts/4f346c5/index.html","f0d2875611613b3bc7a0d3e25b6537a9"],["/posts/50caf1d4/index.html","3336660242da70c46e2662a4fe8d6e6f"],["/posts/51139400/index.html","38aa69de4dd37c5a49966063a9b7ad43"],["/posts/512c9a09/index.html","8718a2a5a96005d02551610a50776055"],["/posts/5205b330/index.html","a75c90cfab5bb739d3edf35eec3f0448"],["/posts/52d36cab/index.html","b4f2bb81fe67c007e29a51c2224a5d99"],["/posts/532a083a/index.html","74a805ca50326118c16c6a6a91193abf"],["/posts/537d2c2a/index.html","f90829ea59edea0b5d5dd3e43b610ae5"],["/posts/54383ba0/index.html","3fe77032665d074a3b17e26cffc1ccef"],["/posts/54667693/index.html","a77ecfd6b2aee1376e14964385c20b6a"],["/posts/54fbed4a/index.html","8f0d7ff244dcefbecbc2d53a98cb65f8"],["/posts/5508212c/index.html","02d7bddbb7828e8fb6cd47254859aea5"],["/posts/56760226/index.html","17f884ef23d7d71b80c60c8b4eb58b16"],["/posts/571564e5/index.html","44975db779fbef1105531fc497300330"],["/posts/57900fe5/index.html","f87f2c4fcf1a4a1e0a4be4ebba729f2c"],["/posts/585ba415/index.html","6ab8d80fd6172d5405f3fb16bcd472ee"],["/posts/589a214a/index.html","933e158d9b0bb0f6e0cfa08afda0a866"],["/posts/599a2b19/index.html","0060622d5e82f6b8f7d39940d5637721"],["/posts/59c05382/index.html","951a8f1c1a70faae4ea2dc5e519451cc"],["/posts/5a5294c8/index.html","9b829002968a62f8188ccae771efdc7e"],["/posts/5d3da28e/index.html","9bdae2bd490f1e9868b567e501336359"],["/posts/5d3f50d1/index.html","6b0a47d9a693100b9f949ace4146e804"],["/posts/5ef7ef00/index.html","2bd91f697bd16130698f53dbc68f53fa"],["/posts/5f1fa8df/index.html","74d5ff17535f8118d6ed5842be849120"],["/posts/5fba84c3/index.html","0e1d2a07e5ce235b65895ee5b729e0f6"],["/posts/60b5dd06/index.html","0ae95bbc5b100b8b118266b7ad5a2ec5"],["/posts/61057c88/index.html","342d8e0956b8ed9631b02e77d12efe90"],["/posts/61477045/index.html","cc69b612c8ca14729f9a19e87dd2844e"],["/posts/664423f6/index.html","059041335f919c91f25b804b9989d44d"],["/posts/69d79f93/index.html","f7d2c2cdfe5294e9e005a09e6c02a396"],["/posts/6b2f046/index.html","b10464a9f5c24ea19c3e445414e0052e"],["/posts/6b4610c4/index.html","c99cf3b53037ca3c19f401a8f12e6ce9"],["/posts/6bbf03f0/index.html","0fc5097bb83f23914d35260bc6a08112"],["/posts/6e7b67e4/index.html","e9ea1be69e8ca0753ee9a797635824e4"],["/posts/7000d139/index.html","a1865bbc6012591eaa2cc1a551a22a7c"],["/posts/72f94093/index.html","7424ce3c239cbc037e4af8109fe75be3"],["/posts/7380b71/index.html","5148415a8c835a0f01f9761fa8ec7176"],["/posts/738eee3b/index.html","38047767ea0b26341d1e508b21c08270"],["/posts/73981dbc/index.html","4d89eaea7ca3a6f619a5d6d34633c8d5"],["/posts/74d60fd9/index.html","b94b9ff32d9b95ff630aad16891ab35c"],["/posts/74f5d9a5/index.html","9f3e4867795eaf2d435e1ecbdbe7c5ad"],["/posts/750f2ce3/index.html","43bfcc94f44e149f0400ff8419b71619"],["/posts/75ceb627/index.html","b429f36c5a5b633f77cc2d9fe266ad3f"],["/posts/7725b75a/index.html","dde21787886782a34330b5b95c9c3b08"],["/posts/79ef335/index.html","d912700f959d57fe65993a139007f819"],["/posts/7a228db4/index.html","53da678886a1fe25f09bf08e832f815f"],["/posts/7bbd3149/index.html","fdc8056069f43936aeda414eb4a770cd"],["/posts/7c20e8d5/index.html","2f8ded2ceb77fc9e9f26ea88212eb418"],["/posts/7d3ea75e/index.html","e537f57dbf6a54edb5e4257afd60899e"],["/posts/7d43958e/index.html","021f99b2fbef85a20d95efc6eefa65f7"],["/posts/807ac7f2/index.html","5b558f6b211b30f9b98789f7f181ecc9"],["/posts/81738fa0/index.html","15b859ce78383b02dd3f4336f3f6c71e"],["/posts/817c41b4/index.html","f1dbf2d78f059b7098c430eed730d7b5"],["/posts/83f13096/index.html","9bf8839fd825103d69032e43781e9a37"],["/posts/84ee8e34/index.html","fed1c00726c2f196c4506ee1c9bfae10"],["/posts/854d07da/index.html","c91e5f3ea931fffbc7da8d9c53301a75"],["/posts/86cad295/index.html","801f1aac962d634f5217be11a22e21e0"],["/posts/8833154b/index.html","eb7804ee74b500d69a3aded58ff906af"],["/posts/8837602f/index.html","e4edeb96671bbcb754fe75ffa593883a"],["/posts/89589a03/index.html","44d1b019d82a9a49af99d31581903a55"],["/posts/8bcef008/index.html","8628b956de0a7ee4a7619941a0efbd5a"],["/posts/8bf9abeb/index.html","552619230e2bb7f6e082dd1fe64dea86"],["/posts/8e5f5686/index.html","990968dd838b5bdd35e955cfa784fdd1"],["/posts/8fa6b8c7/index.html","a021d5bba83346b25dd45e8b9166f946"],["/posts/9029a3de/index.html","50709b406690de4a90b52e3c440eadbb"],["/posts/909d9a5d/index.html","0960c83c0c875e9377fc16c24f9c2547"],["/posts/91404b94/index.html","a05cfb5654f525fde1f7c54e64d97867"],["/posts/932e3747/index.html","35afdec35ddf396863e68869115529ab"],["/posts/95fc9e6e/index.html","3c7049d95ca20f71ad92a434c1841271"],["/posts/98e67280/index.html","c3c205b067ad7fa61362e8ac475106be"],["/posts/9a4d13ef/index.html","b9e0be289634c9060d8f11e621c0d75c"],["/posts/9afbb889/index.html","60839adfef0edb6f72cee493f354bcd7"],["/posts/9be63ba/index.html","72c10915a6935b6e3a6703db875cb163"],["/posts/9d967c90/index.html","4d6ffa88826a13183fb718509ffea313"],["/posts/9eadcdf6/index.html","dcd008d30f90fc1c5859c2b3b54fb339"],["/posts/9efd76a3/index.html","3263c22881fe737065324af5da152388"],["/posts/9f97db8f/index.html","5ccf8d25981505316e5fe7e33c3e209c"],["/posts/9ffb4388/index.html","f6a360b05b5302bff5b710ac274f5701"],["/posts/a094d027/index.html","d13b7a8d5149587077c7cac7f23689c9"],["/posts/a27042c6/index.html","28ea494ce6d5b6e6e76355f7ed25e40f"],["/posts/a29cc732/index.html","e0b7b3305cf1b6ab1a641980acc86901"],["/posts/a44a518/index.html","3e0c6e323896bc26257ce9b538aaeb0f"],["/posts/a4f2a748/index.html","8f6b9a012ae64df93ad7158bfe614923"],["/posts/a7dc32c9/index.html","23faf7e02f9e6e4e9aaa2ffde9f3f6a8"],["/posts/a7f753ec/index.html","a886ace1758e78a61d6e98624931f433"],["/posts/a9168bc5/index.html","0b41c35d0ebf2041f18599f147563075"],["/posts/ab176793/index.html","c52c8fb81f145dd22411ece28d344a1b"],["/posts/ab34095a/index.html","990d45965a0a0cc4388bd59c8cca0c46"],["/posts/ad47c4a5/index.html","3034b4c5bd75c1e5ebef21e740c538a9"],["/posts/ae8f7b74/index.html","289f141318fd33db15fb50c6216f427a"],["/posts/af43816b/index.html","3b06aad4bd22008f4655d11be6f98bcb"],["/posts/af9e049c/index.html","ce38c70acdac0c6eb140102bfa8528aa"],["/posts/b0f1a367/index.html","ed6b85453f6c8b2bab12ceacf3b0a3f6"],["/posts/b0f98e2c/index.html","274baedc47fe7b43dc99999f4a316dd5"],["/posts/b33131fd/index.html","bdb8219e9247716af4c309ae925707e0"],["/posts/b36eb520/index.html","8de147435d6cc28f96a9a2fea51ef0a1"],["/posts/b542fc02/index.html","7a52756c78cb746d806dea6b7971e793"],["/posts/b54eeeb4/index.html","6cd5cab54c7b6fca49e4de3a32b66b8a"],["/posts/b84f3f3c/index.html","3fb40914be7499f76ec7143275c66e11"],["/posts/b9325cf5/index.html","5f660f83ceda961f14bd52953c56f429"],["/posts/b94fc207/index.html","510be43ae00e35c7ef89762107fdca43"],["/posts/b981a6b4/index.html","94cb25834366e66b021942422b6cec2b"],["/posts/bcea326a/index.html","ae81b180c4c4657c62b0156a7e1ad2a1"],["/posts/beb19e80/index.html","b4f577e484ba7e22fa63ae89950e2563"],["/posts/bec490f8/index.html","279be8963671c713c3ea3bd197744954"],["/posts/bf7bde0e/index.html","bb442a294c220ecd7ecc0496366baf9a"],["/posts/c03f17c9/index.html","f0e083669803b450c0b300995de76bf7"],["/posts/c35bc572/index.html","a481998e5ecc7f6b3b1c32486ed6807a"],["/posts/c436016b/index.html","510e2068b81f0432af8f4cbc3ce0c461"],["/posts/c4efc741/index.html","1ebaf6e4a5d99a9b1e908bb9ea8b138d"],["/posts/c5e8a08e/index.html","15a6e64739348f78eedb989a99d727c5"],["/posts/c7646f1a/index.html","c2e10f6b2ba0dff80bd60820f4d95c35"],["/posts/c7db1dc0/index.html","2dc40709bfdbd371e06fbe719097da57"],["/posts/c7febeba/index.html","03f60d8be58ad642b8497b0c85bb618d"],["/posts/c9c3a06e/index.html","7c867c3ed2a190f465bc2e703a0791c7"],["/posts/ca657192/index.html","4e284ff7306a8704bb7c89196b54987e"],["/posts/cc6d2cf2/index.html","55bbe3fd7202e334a0faaa6a46d285df"],["/posts/ce48f291/index.html","fb6bc10e63ec2ad80356f8de56ec7e81"],["/posts/cf480faa/index.html","0f7fa085555ab2bea531834b89230d81"],["/posts/d090b4d/index.html","0e51259ced96d0baf63652595fe6f683"],["/posts/d1995044/index.html","224df7be7da7b84d6bdefa9c385a8221"],["/posts/d2d34977/index.html","e6fef83c047e37d505d10353b90e73dd"],["/posts/d3647a92/index.html","7170cca5cc6e16cef8aaaaac79d53388"],["/posts/d3f6b818/index.html","9e75c34b199e5f6f8d1a9e38949d423a"],["/posts/d465029c/index.html","9b1176c4d44d81a4f024243df297506f"],["/posts/d9884be2/index.html","e31a8d33433e86d364cd08ad32436cf9"],["/posts/da40f433/index.html","483a6ab7dcec0d2c6ef47c0e295defc0"],["/posts/dae71d5f/index.html","8e3859d06127cb292f8586fe8d36f948"],["/posts/db9fbe47/index.html","7268d4c8fb3f1f7ca2664239fe6fab7e"],["/posts/dbba997d/index.html","193ed524e13f13301592bfbf8f2001e6"],["/posts/dc94f8a1/index.html","c9f1abb021a6fd21ca0974fffd5c2bed"],["/posts/dfe9b67/index.html","ca8751fd07de0bc28a8eeab83544bbb7"],["/posts/e0387d80/index.html","e3f5e3eff6d5c8103ef9d9e02596a123"],["/posts/e356f7b3/index.html","34925917753de10cd279d2f47541bf1b"],["/posts/e3acb366/index.html","5aa4cb45322863e03607df44eb00a43e"],["/posts/e450354f/index.html","61da6531904774fd8df80c9d99205ca8"],["/posts/e489223c/index.html","e79fc974d2e4f982f47a0b18b0b8271c"],["/posts/e9a8ddd1/index.html","f7ea866efbe10f9a6152324965d149ed"],["/posts/ea914c06/index.html","e196ca2ca8a5400f31a440bedc0d5c79"],["/posts/eaa8f31e/index.html","da8a4d022e70a6524b41258f0076997e"],["/posts/eac19412/index.html","734f597effda3057099b64b727bb8568"],["/posts/eb0c9e8/index.html","9f6c97a0b9f1c03f63ac0f201a4678ee"],["/posts/ebe408b3/index.html","6d9148b01938954320602f4f0a6ebfc3"],["/posts/edfc881f/index.html","9847709df783c20f77c228fab22d370a"],["/posts/eec0bbd1/index.html","031e412e035a6f029600f458c0bc902e"],["/posts/ef22c7c2/index.html","e8fe2846d5a9b0c3dbe885c6dfc74d4b"],["/posts/ef271825/index.html","81920a2a137fecba0316b850ed22f1f3"],["/posts/f209578c/index.html","1994dc5bb95044efc26ae50460b1a975"],["/posts/f3e9bea2/index.html","8c0736458a6311bfdb149c40250adc7e"],["/posts/f67b7122/index.html","95adcf1ae0a49fc659c140643977e876"],["/posts/f7abba28/index.html","315c5f4c25111fa0430ab46081ae1f6e"],["/posts/f7bf33eb/index.html","47f170976658ad65389b48489eb12a7e"],["/posts/faffd764/index.html","8427927bbba7ba1eeb4717ed3cf902c8"],["/posts/fb684fb0/index.html","8130b65784f32bb9ec460b30465b8d46"],["/posts/fc57199f/index.html","b8c90c7a13282b551bedcce425f064ed"],["/posts/fc6e9a7d/index.html","72fd61912fa31c5be1ea2293f9b633eb"],["/posts/fc7bc02a/index.html","7a940644f5eabd224a78322178ca283c"],["/posts/fd67c5cb/index.html","81bab575839738b55d23e7c4171bf88d"],["/posts/fdde061e/index.html","97833d8decc19b28f427148b1fb1f35c"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/ES6/index.html","b52193afd7cb03eff0db2f50bcc25e5c"],["/tags/ES6/page/2/index.html","6eb2aa3ad7812d20f9f791774637d77d"],["/tags/FL/index.html","cd22cd272da0e4fa4e4324759e23afd9"],["/tags/HTTP/index.html","ccd86b09b55808dceac198653b8a4ac5"],["/tags/Hexo/index.html","23da692758c354d64f795ac8f31bc925"],["/tags/Hexo常用命令/index.html","88beb405d565aa66fea02efc2ad7b5fb"],["/tags/Nodejs博客实战/index.html","b6f3da31dd546a0d153f18fb127eeee9"],["/tags/Vue/index.html","bbabd9a81a231023ff638d7c82a0d426"],["/tags/Vue/page/2/index.html","f10ce5e4d865bb35ed63faa44dc11f65"],["/tags/Vue/page/3/index.html","e4ba73cbb88a054bdbbab66fb7d9aa9e"],["/tags/ajax/index.html","5d29e3004322806561c93a46bdf3b023"],["/tags/ajax/page/2/index.html","4cb5c4b461c5a53d8a6dad81a32d0ff9"],["/tags/curl/index.html","72274694692fa8d78465038d98b6892b"],["/tags/index.html","880aed95c53664c263a3e33030743492"],["/tags/json/index.html","b9a010729772040e5e7972d6ef1b1750"],["/tags/mongodb/index.html","683cf7a8a617804712e556c97e10295b"],["/tags/nodejs/index.html","420c3047dcb46f7f0fdb01b843ec7338"],["/tags/promise/index.html","4675d61aaec471d9f42eed9cdca76cbf"],["/tags/中国近代史纲要/index.html","959ade6971efcff9afdb1a23e16ab60f"],["/tags/日语/index.html","c28dac6b2a34f1c976159cc88a87a82f"],["/tags/标签外挂/index.html","af7cf800531e62f7f179a98b0af572c7"],["/tags/目录索引/index.html","eb299878467d41f18defdf36ea7a48be"],["/tags/管理经济学/index.html","c477e104537f66878b05f4b5c42420f4"],["/tags/考前突击/index.html","ac8ad959c6f49cb27d413416d65360b5"],["/tags/考前突击/page/2/index.html","879a5d8ecfc3e121ec8bd90011857c62"],["/tags/自考/index.html","c2321e80924255046467ab9f54f3b7b9"],["/tags/计算机网络原理/index.html","dd428d63d28d1f972df63e2f03ae6fcc"],["/tags/运筹学/index.html","2543cefd572d9a007079af412746f389"],["/tags/马克思主义/index.html","8ce5ba2ce8fd895ccb8623cd782ea4bb"]];
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




