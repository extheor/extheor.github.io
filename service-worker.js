"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var precacheConfig=[["/404.html","15e336f3cea862c162ef6ba463a0a62e"],["/about/index.html","fd2d39dda7d504a6378e449b4f1c0325"],["/aplayers/index.html","177c472639c5536ba0089a89021677c0"],["/archives/2020/02/index.html","98aecd9fd107e22b8e5161583452bbb3"],["/archives/2020/02/page/2/index.html","12ff31b0b1569e0bf087ca3921642663"],["/archives/2020/02/page/3/index.html","d782faa1f2bfc62c04a7de6eced4472c"],["/archives/2020/02/page/4/index.html","bbe8d941844556372f391e6178874a28"],["/archives/2020/03/index.html","415d9067adef34e56726f1e3a0a35b71"],["/archives/2020/03/page/2/index.html","af4441657a7dd759aaecfe6fb85da6d1"],["/archives/2020/03/page/3/index.html","2b8fd5329ed5f79c67c50d6973d1be56"],["/archives/2020/03/page/4/index.html","a98e0668bfe4d7955c7929896a96e0f3"],["/archives/2020/03/page/5/index.html","2fe5e372ff779856f774c8c905a0f309"],["/archives/2020/03/page/6/index.html","95038695364870f4c0b58226a1bda10b"],["/archives/2020/03/page/7/index.html","fb9b234b5e2ea80f90e0d853b9984b67"],["/archives/2020/03/page/8/index.html","0bd0eb8c8037e766ceeb99669650b13a"],["/archives/2020/04/index.html","344efa4f5fd210118b7099ad6cde18c2"],["/archives/2020/04/page/2/index.html","bc259b3934631ba5d1d3d6a27a856429"],["/archives/2020/04/page/3/index.html","76cd9a7f874dc750bcce7bf482581b95"],["/archives/2020/04/page/4/index.html","985c744218afe8d1ad487f8e936039c6"],["/archives/2020/05/index.html","5d25e7e1225b72a754ba7c7064d96933"],["/archives/2020/07/index.html","5a78e16e8b3dc13f2719e5649eac40a1"],["/archives/2020/07/page/2/index.html","e2d9629a3aed1a628ae3c24fa9ab97b8"],["/archives/2020/08/index.html","1b289aba3edc874558a107564b7931de"],["/archives/2020/08/page/2/index.html","5638e50b5556a91cf132cab6141443ef"],["/archives/2020/09/index.html","df8c1208a9a22ab38110cf9f3635b4fa"],["/archives/2020/09/page/2/index.html","639bc0a5f7c5f000764dcf90344a1817"],["/archives/2020/09/page/3/index.html","7dac1940459ce661a2afc88a0f3a786c"],["/archives/2020/index.html","47c1898d394c4bb55c9fa5bc8aa4903c"],["/archives/2020/page/10/index.html","756a2991d27dc097b6fe9e0c89c410c1"],["/archives/2020/page/11/index.html","17c30ec0422a106e9a62f55126123974"],["/archives/2020/page/12/index.html","774c2981264882094cc0191d85c9d2e5"],["/archives/2020/page/13/index.html","21d1a54f7b1359e25cc395d454ce1791"],["/archives/2020/page/14/index.html","520a9fc81a0856cda491a761bc51837a"],["/archives/2020/page/15/index.html","3e3efeeef27a5a5663f584b67452fdc6"],["/archives/2020/page/16/index.html","416d4c54c8f0263e488d0ce7c016c811"],["/archives/2020/page/17/index.html","28684a40d51791e0187f59581f975dcb"],["/archives/2020/page/18/index.html","213efed580404d77a1989cb81ec0a143"],["/archives/2020/page/19/index.html","feb30ab65ba32528b9a4dd606bcc6ec3"],["/archives/2020/page/2/index.html","30662b0156bb2d2b506a30ec80a2bfeb"],["/archives/2020/page/3/index.html","64a1165b43539a31dbf62e48444d8b36"],["/archives/2020/page/4/index.html","70d258f874e7a385440f812bdf61db2a"],["/archives/2020/page/5/index.html","0064b6771a5cbfc024ffae8d0a257dcf"],["/archives/2020/page/6/index.html","d3af05404b804d9f7fc762b661cefd20"],["/archives/2020/page/7/index.html","ca7ae108a93c0d01f01247e5ae9001dc"],["/archives/2020/page/8/index.html","7adabf831cb5d0fb8023dce3ef037fff"],["/archives/2020/page/9/index.html","e11d3934657c87f40837220ddb409a3a"],["/archives/index.html","5032d36288df1417b19aa8d9309263fc"],["/archives/page/10/index.html","057e58ffe5cb67d0775b60018d9a0096"],["/archives/page/11/index.html","73bfa8a8fc557c52bfe0d85bc0276399"],["/archives/page/12/index.html","7f8769f04b2b31b139eab60e773b53ee"],["/archives/page/13/index.html","4c0d352f0d65cac8b40a547c72b8cd0d"],["/archives/page/14/index.html","d32ea45bf527dfc46b6a4e92c9f6ed31"],["/archives/page/15/index.html","c52c944af1e0ee2609389f80929beb2b"],["/archives/page/16/index.html","beb64314261ed52c92a87cd29ba7aecf"],["/archives/page/17/index.html","93ea7958e95563421a48134aa5d1a697"],["/archives/page/18/index.html","9d0f2d4430c22bed6c1505fa0d4b03e1"],["/archives/page/19/index.html","cc420a729c9273141d7bd94cbdfd6ccc"],["/archives/page/2/index.html","de612d6818bc24540ce6e7c711efecdb"],["/archives/page/3/index.html","4a45c0ca2f3bbd2a154356d98f1176e0"],["/archives/page/4/index.html","bf39efd6802c44e5f1cbf283303b51d7"],["/archives/page/5/index.html","1986be00f2968295e767aae85ab348d7"],["/archives/page/6/index.html","6202a9afe5ef302547b14c03c58a9225"],["/archives/page/7/index.html","cffab220eb8bd1843aa336ce039d039d"],["/archives/page/8/index.html","b882ec2b7a33d4e13bc829ac5ab88751"],["/archives/page/9/index.html","d044f68a3f3f06d86545a8965203fe2f"],["/bangumis/index.html","232735f0cc1337af13dd5ec1e8a35561"],["/categories/Ajax/index.html","9d97b1093be304b8b9b8206c6adc74c1"],["/categories/Ajax/page/2/index.html","4d71abf69263080f337a72de3ec86367"],["/categories/HTTP/index.html","10afaf1055a96c794a29aa8fbc85edda"],["/categories/Hexo/index.html","ef6fb8e7b7d64868a3d5bca0f115c918"],["/categories/Hexo/标签外挂/index.html","d11be6c582d52321c977817e77028be8"],["/categories/Hexo常用命令/index.html","88a4c8bf668c4f80f1a818c414d8c89c"],["/categories/JSON/index.html","c570e5a4fcf051ca1011421c93bdd2d8"],["/categories/MongoDB/index.html","744371e720a1f5128ea77757ce26c6e2"],["/categories/Nodejs/index.html","2b67e3b7dda0f276d981bb192c5475e4"],["/categories/Nodejs博客系统/index.html","317d8bdae69fcfea4f63d66706b55ad8"],["/categories/index.html","5fa6206c205d8691d46e8d6ea0e3c425"],["/categories/自学考试/index.html","82b5a7a2c9b60ca33edff10555111505"],["/categories/自学考试/page/2/index.html","4d2c787497854a7d3af435ddb849469a"],["/categories/自学考试/中国近代史纲要/index.html","40d7277941a824610191dfb61cc02415"],["/categories/自学考试/管理经济学/index.html","3daf0996097e607a8ae6f264280989e2"],["/categories/自学考试/考前突击/index.html","94d774f3e18eb40c1513e3142cee8a4d"],["/categories/自学考试/考前突击/page/2/index.html","d9483710a655fb48cc78d66d879bfdda"],["/categories/自学考试/计算机网络原理/index.html","b1c78fe130f02fbd49c7d533145f2a24"],["/categories/自学考试/运筹学/index.html","9410f006c255e62b8dbeaec7a4ce4fd5"],["/categories/自学考试/马克思主义/index.html","43ba37bb85955fff8ab336969be17f06"],["/css/index.css","02768e0f539a91b829374d4d7c70325e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","313a8567e71e47db309f6e377c3c927c"],["/js/calendar.js","bb5dd255ba79da882ea68add71ca0064"],["/js/fireworks.js","fb89d0d04079fffcaef92f0033984567"],["/js/languages.js","edc0ec6b454f9dcbf2b1e967f5d4b771"],["/js/main.js","25f028c3393015483212fce4765e727c"],["/js/search/algolia.js","6739a0bf84ecd8af6c7c0a9358ddfafc"],["/js/search/local-search.js","5b41a01c3d1db3024b0318d008272cc8"],["/js/third-party/ClickShowText.js","f66854e27a08e7c5ca9f2c479fdeff3f"],["/js/third-party/activate-power-mode.js","62f45a1942a31ee8ee24ee2d22d813f2"],["/js/third-party/canvas-nest.js","41f8f312423ab0de3ebce72c84bdc8db"],["/js/third-party/canvas-ribbon.js","1e2ceec82796abeb136789890fd21324"],["/js/third-party/click_heart.js","3822ab26483f0d27b48a9e090d360d1a"],["/js/third-party/fireworks.js","8ad5d796e461b063ae83a2d3b663a07a"],["/js/third-party/piao.js","78ecf11125085b2a594a504819058431"],["/js/tw_cn.js","6bc7f99cd3e10710cac0499debdaf362"],["/js/utils.js","582f6b4c5d0d1ff7d5f6c994855bd11d"],["/links/index.html","00ee21843032bbd5fe7e70a98df5839f"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","b00e55dfee0895125ae03298be9dfa10"],["/page/3/index.html","761f0c1735dbd49af4252f679dac0f98"],["/page/4/index.html","49b55a46686b69f45ae89a581a7791f4"],["/page/5/index.html","14b0be555ec72c51f0c4890eed742bb8"],["/posts/10812f0/index.html","c5000d3480dde9c9c5651f6bee50ca18"],["/posts/126b275/index.html","d5b6b16556376888528a7e50d0972e5a"],["/posts/12d95a5e/index.html","7cd37ba586a77cc5352c215fe42cfe37"],["/posts/1367417b/index.html","e983e5abbdae729f9c4afafd7330c55c"],["/posts/13886e3f/index.html","3b453016a73a8543b209ce11bbdb3e21"],["/posts/145193a5/index.html","3458e3fddce91359e4fc73c46d0e9988"],["/posts/149dde25/index.html","8e6c6df20ef89a90411a3f3df7339cbd"],["/posts/152fa65b/index.html","0320b8f874c944718de36b61488d2a57"],["/posts/169e7dda/index.html","17d6e082c9b903e5d2678c87fca0ab1c"],["/posts/1875100e/index.html","07e23a5f17353dcd46a2d45449fa5ced"],["/posts/18eaef7d/index.html","8e8bb4fa1579c179d707f666d0c8e823"],["/posts/1a0bc7b7/index.html","3600ac495fe981c5924b8eaaf1e6feb0"],["/posts/1a20a057/index.html","6a5aa3b39811cbe057cd1bed4a9db837"],["/posts/1a998be6/index.html","8b90eef282917d0d1d1db45b31c98c01"],["/posts/1bffbd20/index.html","f3c23e00d11d68fcb68bfddea17d3e4a"],["/posts/1c5a0485/index.html","d5f1edc1e94b05fe8ad31ab420d97aed"],["/posts/1e638f78/index.html","dce3156d836ffba76d1f25dcb4915dad"],["/posts/1fb53120/index.html","dfc5cd0a3da047a92485950c454e369a"],["/posts/21466e86/index.html","cfaa3a188a7baabd316ecdd08058155d"],["/posts/21abcf1a/index.html","049d78d0df86540dd51edd20860de33b"],["/posts/21c250b1/index.html","6e68ba292ac64df2f4608c92db0246c4"],["/posts/2287cc/index.html","49326326ca85f4da18554749d3f74c15"],["/posts/236bfea3/index.html","42e6e6f5e551efc39879f401ee38ce95"],["/posts/24caea6b/index.html","4f83d01766bf2adf00d5326ae8fd77ed"],["/posts/25d45c3d/index.html","54260e3e443260e361eb9ca6cc73b3d5"],["/posts/262baa9f/index.html","ebc9ee2c688a8e838b48be2bfca2aaf9"],["/posts/27cdc142/index.html","ace44f2aca92b76e0d70b86b00780912"],["/posts/2895c4bb/index.html","ed9fa9ad93c744272aee9125d625e5b6"],["/posts/28987ff3/index.html","857f21922ee9d7589e28331c168de410"],["/posts/29f0df96/index.html","7c4470be45031695e5f1df8c4d7d7170"],["/posts/2a1d2b6f/index.html","f83064a9fafb1f4bfdc4151b7449f577"],["/posts/2a386047/index.html","9b550132c5d252c6f94157c2e3b81a44"],["/posts/2b770baf/index.html","4ff74e86ac7e3097d346c44b9aa4dd35"],["/posts/2cda4a8/index.html","5f719516447a30ab6a7cfd6273ae505b"],["/posts/2d020832/index.html","d635fae5278d13a1252a24b44863161e"],["/posts/2e0c129d/index.html","1b027572e43f0b3e020c44ecdbc7f421"],["/posts/2e7563a0/index.html","086c6515dbe244e577553d4edd5d82ed"],["/posts/2e7b8d69/index.html","c887e901760b5bae4391555c66f43f34"],["/posts/2f28d14b/index.html","d7cb148ceb7a8c5e6f44bb3fa192176a"],["/posts/2f6e1383/index.html","3a380a72eef31527b9deb091d42895db"],["/posts/30bfd1cf/index.html","c88b908e48ed9d203294517a4e2a39b0"],["/posts/33235106/index.html","1384f37eb41b9d2eb6f8f3bfd3f374d2"],["/posts/344e951f/index.html","23821e761da54cf1946ba5c50cc20588"],["/posts/35e2bcf6/index.html","06b5968d08f9b9faeaf79a57ec1c080b"],["/posts/365e96c5/index.html","6ee745f0ff88dfb3e758a490cb9eaf89"],["/posts/36e331e3/index.html","c7d9fcd93d2f8913d4ff244546e3a38b"],["/posts/372df90a/index.html","d6432f8dc7d8596850cf06b4e0e712b6"],["/posts/37c547df/index.html","03fb4f697dd4299bdc35b8bcde52f814"],["/posts/38a88481/index.html","8f68c64a35864d1c372360bd1d41fe5d"],["/posts/3b56780c/index.html","c988de2efb365480c762adf77fd98915"],["/posts/3e4bb613/index.html","9a2fc6850c22cd4d589d5a740532b7e8"],["/posts/3f2e933/index.html","21a05dae558e5bbd64e06eef285a08bf"],["/posts/3f6e5f9e/index.html","40b290e036c2da0821e6363abf64bc7b"],["/posts/4349a589/index.html","4f85e089e0b74635e50f8fe55d1590c5"],["/posts/44246190/index.html","3557b76da7caa0cab8a042e3d4f641a4"],["/posts/456550f/index.html","434a3654570c991feaca1507e7b33c2f"],["/posts/470ac03d/index.html","2c75324f9a5a5527590b2f667964bb0f"],["/posts/49249ac9/index.html","a6e2a4790f4498067a5e3625346ea299"],["/posts/49f2d2a/index.html","6baa40c6d9f3cf8cf5a9f19abd475e07"],["/posts/4e6d4eb4/index.html","4f6fee59d44fb69ac969ed6d240dbb20"],["/posts/50caf1d4/index.html","5ebe056a23554839bd4698cbc7bc8791"],["/posts/51139400/index.html","2431b112ae0a49a21b9bb0de01c712c8"],["/posts/512c9a09/index.html","265dd80fc6090afe17afab1fa522d797"],["/posts/5205b330/index.html","5ef8ed23a5fe6563241fc48c1e362854"],["/posts/52d36cab/index.html","c4a92d2804d1f56a211c25e5cef28d22"],["/posts/532a083a/index.html","5df3a3aeb62f097c819defd14d9d3c81"],["/posts/537d2c2a/index.html","e8aeb10b44bde3b054b61fda38f16aab"],["/posts/54383ba0/index.html","059125eea12592ee6697ae0804112778"],["/posts/54667693/index.html","909c9975d3eb52e1caf7ac5720c5fb91"],["/posts/5508212c/index.html","7840a79014036850bdfaa1643c967976"],["/posts/571564e5/index.html","56bdda42cdba9bda543baa65a75fee9e"],["/posts/57900fe5/index.html","3396fae419eb27136aeda5dddf94c596"],["/posts/589a214a/index.html","15039f1f88a078c952045bcaafbc3577"],["/posts/599a2b19/index.html","2f490fd294b6f6c842aeb5cefdb7645e"],["/posts/59c05382/index.html","9a28f58d20f3d7f4e155fec4a84abe80"],["/posts/5a5294c8/index.html","22d8fb8d0fcb688fa97dbfa62c9ebe38"],["/posts/5d3da28e/index.html","d331863cb28e1d98652920c90867383a"],["/posts/5d3f50d1/index.html","34bbd951e95d6218e83d0d5934d63c60"],["/posts/5ef7ef00/index.html","0810b852861141e8d53f7e0347ce89f1"],["/posts/60b5dd06/index.html","26a116b6e608756c06c48c7dc77496ba"],["/posts/61477045/index.html","9e32849000f0461b8b76e31bb228fc31"],["/posts/69d79f93/index.html","596513e87a578ac9ed94e632fce1c61b"],["/posts/6b2f046/index.html","6b5d79ee1caf46db18e0324209f29b3e"],["/posts/6b4610c4/index.html","45bfe46aa836099949cf66aae9bc6ba7"],["/posts/7000d139/index.html","5dd50c32a0b7bdfa7527a8649cdf0063"],["/posts/72f94093/index.html","59ce08afefaf29adf59d01ee036cf328"],["/posts/7380b71/index.html","4e585dafdcca4b20851c1e7ebb977a49"],["/posts/738eee3b/index.html","6261c8634eaa8d3acf029c5ec2a87e19"],["/posts/73981dbc/index.html","691401c5ec774c6b7b61d460438593b5"],["/posts/74d60fd9/index.html","352d32a664a87aa2fcf074cabeaf02c6"],["/posts/74f5d9a5/index.html","4de862e0707247b669160f61b91dc215"],["/posts/750f2ce3/index.html","3b6454cf51246a7a1cb957c058e62c01"],["/posts/7725b75a/index.html","24fa978cbd0ab066c3f156206d22d7cc"],["/posts/79ef335/index.html","7fff20b1892260c3b38058c47c5bbdff"],["/posts/7c20e8d5/index.html","57e8429ec971feeb40404ff27f73ab96"],["/posts/7d3ea75e/index.html","b9e477d85003b3d856dc2eee872be8ff"],["/posts/7d43958e/index.html","2daba4e154f681682253f2c9bcbeb8f2"],["/posts/807ac7f2/index.html","4509b6068bc696096619af4fe9bd6f7b"],["/posts/81738fa0/index.html","cbf4deff946776b36a680dc9728f4eb3"],["/posts/817c41b4/index.html","3d30f6d0f6bc1543206d042a0ae00044"],["/posts/84ee8e34/index.html","63b5bd7f78f909e431a9122bbe5a8026"],["/posts/8837602f/index.html","4834210c733251637c234b999502e784"],["/posts/89589a03/index.html","68a825bdd8552180aacfd6e941089dcc"],["/posts/8bcef008/index.html","5153386aca85449b903d5d6814298f60"],["/posts/8bf9abeb/index.html","c7d88fafe8b9fbea6fff819502dc21db"],["/posts/8e5f5686/index.html","e28eae94e0bbdb0dcf3624ad3b1ee3f3"],["/posts/8fa6b8c7/index.html","647ebcc9cd0d2f43f4329399e840baca"],["/posts/9029a3de/index.html","258b81b613edba48bad229534f0989b9"],["/posts/909d9a5d/index.html","90ab4ecd49e7b349d37c1bbc047182e7"],["/posts/91404b94/index.html","a00878df857eab73cbb65c8c352221ff"],["/posts/932e3747/index.html","2caff3e38d6000d0e5c983927c6ee43d"],["/posts/98e67280/index.html","47922746303f0173a422473a5e5bddb0"],["/posts/9a4d13ef/index.html","8f9f014d9c485724145cd1f8bd2322d1"],["/posts/9afbb889/index.html","18f64498b511e76d0cfa99a12fb86c88"],["/posts/9be63ba/index.html","c3bd20491f67bdd4417df791f71e2192"],["/posts/9d967c90/index.html","260021ce65d7285a769e57e8b9b9562a"],["/posts/9ffb4388/index.html","f8260f93aabd7aad59e492314892e291"],["/posts/a094d027/index.html","695c7261c1bd602cf3e7c303f9c349c5"],["/posts/a27042c6/index.html","2538d95257e3595ff44f903ff54bf026"],["/posts/a29cc732/index.html","dbaf4044b72cfbba380194e2258948a1"],["/posts/a44a518/index.html","28d0053f6098c32f4d6b7a5d9d85d088"],["/posts/a4f2a748/index.html","8e85dfb1beafdd7d67f090b2211d5c84"],["/posts/a7dc32c9/index.html","5b6dc5d230248a67d8c4b82b013cbbdc"],["/posts/a7f753ec/index.html","3347cb7474507ec19e6d4ecb5f7de407"],["/posts/ab34095a/index.html","edb48c9cee7860ecbcdbcbfa35f946f1"],["/posts/ad47c4a5/index.html","5cf0aa4643c0f6eb8cabdf6a6ccdcd93"],["/posts/ae8f7b74/index.html","2ce26f75a02166fb41e27e5240e9c68e"],["/posts/af9e049c/index.html","606a19b9c33a8fcb2bfe07abdad9813a"],["/posts/b0f1a367/index.html","46a8f39d9a0374ae4ccbf91abec3c2b9"],["/posts/b0f98e2c/index.html","005e1ced14f46242d7a8f3cc08bd5ef5"],["/posts/b33131fd/index.html","5a42a0754b77120f7845480d5456c315"],["/posts/b36eb520/index.html","0fe0ab2494092c8a1ac6cc33d7355121"],["/posts/b542fc02/index.html","c713bb987042507c6f6e520d2ed17c94"],["/posts/b54eeeb4/index.html","4f32d84c3a08dd5627a721bd9b61ca72"],["/posts/b84f3f3c/index.html","5158d215989ccc8aa61df66275ba05f3"],["/posts/b94fc207/index.html","dd3d8aa2aed89620441cbc91df3b25d1"],["/posts/b981a6b4/index.html","e1be5ac5b1dbc1ca5c47b3662abcd626"],["/posts/bcea326a/index.html","020b1bb81ea74730a58bbc71d05a7ec2"],["/posts/beb19e80/index.html","ce062bce825e4e96df3b7ea016b35f40"],["/posts/bec490f8/index.html","929890bcd5942d9022c451515fb31694"],["/posts/bf7bde0e/index.html","352e3b64f8688de04d48b5358510c911"],["/posts/c03f17c9/index.html","b031d3161b4250f073acd7b47a7ffaa8"],["/posts/c35bc572/index.html","f234f2fa5675f01da6d9b3fc6a2efbd3"],["/posts/c436016b/index.html","af320d6aefc736c4fd9530557b3bf35d"],["/posts/c4efc741/index.html","32864e7206bee2f07de26ad47675ecbd"],["/posts/c5e8a08e/index.html","47a64a4ac8b16a517fe8f19b84e78305"],["/posts/c7db1dc0/index.html","05d1cb29ef966c85c9bcf483058eef34"],["/posts/c7febeba/index.html","6f5f7824a56a0367669443a98f6f2636"],["/posts/c9c3a06e/index.html","4ade1130083544ac56b109c922cc33a6"],["/posts/cc6d2cf2/index.html","17d856a499e7e1eeb0bb6356dc8f2939"],["/posts/ce48f291/index.html","627327cf28499b6f9fab11992083d38f"],["/posts/cf480faa/index.html","9d4ac0543efcf95ba005e7a880e6270f"],["/posts/d090b4d/index.html","ef705ae73a3b3f0a7ff72c6f2200a88b"],["/posts/d1995044/index.html","c9eeda7d1d0f428195797329240317a0"],["/posts/d2d34977/index.html","3581aed101bb09e74f878375136d8806"],["/posts/d3647a92/index.html","c5c94c9da3f5f251783e3d7c72a160ec"],["/posts/d3f6b818/index.html","1e03fa4c780a0782e5e2c652b007b80c"],["/posts/d465029c/index.html","2c3cc8ed4419925acffb792c3764ac49"],["/posts/d9884be2/index.html","a56947361188dbf7fc749789cf88ce3f"],["/posts/da40f433/index.html","94b323aad93d872a33f78ba18f10853a"],["/posts/dae71d5f/index.html","0126ae60107f8148cbe80af5f0c9986a"],["/posts/db9fbe47/index.html","ca827a9c279ea791ed4ef6d5ec74bd11"],["/posts/dc94f8a1/index.html","d6fa6a1cb13fe12db0cd3c2805cd27df"],["/posts/dfe9b67/index.html","97ba969c12cf4521d969bf9e4054d540"],["/posts/e0387d80/index.html","74cd9556e9e1bd684064e3ae08e368e3"],["/posts/e356f7b3/index.html","c21c339a6d8504cc0af0029da4744a08"],["/posts/e3acb366/index.html","ec166cb8f097e09fdd2202527fd1ef1c"],["/posts/e450354f/index.html","63a7811b322bb6e4b9f5b5edaecb6810"],["/posts/e489223c/index.html","128819dd9c0c28425f8d0fb271f81b06"],["/posts/ea914c06/index.html","e6986de7c17cdb0449695108078a93c9"],["/posts/eaa8f31e/index.html","ae871e796e4a2429a0c493ed77654738"],["/posts/eac19412/index.html","9f7b8a09936a9276eed9a2bd5787a5bd"],["/posts/edfc881f/index.html","c72b12462643b1b6fb52caddf5cf0ff2"],["/posts/eec0bbd1/index.html","77abb1785ae3d0205bcebfb793d7e21e"],["/posts/ef22c7c2/index.html","88fcbcc847242757b9ea86d078f02907"],["/posts/ef271825/index.html","d1ed487657c3457cf6b894b8bc8f9fe0"],["/posts/f209578c/index.html","73646c1d801ae52072ac8649bfb9b6bd"],["/posts/f3e9bea2/index.html","88fb8b6e7338d45000568f1b9bb3ce47"],["/posts/f67b7122/index.html","40f4bd761851e61068c946efc1b619b6"],["/posts/f7abba28/index.html","29d0138ac3fecbf54256fdcefd8a4797"],["/posts/faffd764/index.html","e87a4664767f4f47b44591b0c8772f14"],["/posts/fb684fb0/index.html","8184e3a2702f4ee60722a2324b4c2cca"],["/posts/fc57199f/index.html","5f72eac12eaa0ec407931f61b24efe01"],["/posts/fc6e9a7d/index.html","529aff95eb1ea31adee977b79284caf8"],["/posts/fc7bc02a/index.html","3ccebeb7c5a933552332b6bbbe044b4d"],["/posts/fd67c5cb/index.html","18165189f06657d1b220fb30e2c4c8bd"],["/posts/fdde061e/index.html","f312a8437f082a66051d9f0fbd87b2c4"],["/tags/HTTP/index.html","785371dd19e381850668fc55d55a2802"],["/tags/Hexo/index.html","9f3ba88f9aedc687f28429c940a3d41e"],["/tags/Hexo常用命令/index.html","808fd65e7d7b09ea943d42606e5599da"],["/tags/Nodejs博客系统/index.html","f3318b2eb74912d6a0b9987fec996a39"],["/tags/ajax/index.html","63db6be2f19d5faa25f397e57c10d15b"],["/tags/ajax/page/2/index.html","809a70f3939a44a540fbf06c9d501191"],["/tags/curl/index.html","37165725ded759eda4979de88807e2e2"],["/tags/index.html","6e8bc66ae471b52d742fcdfa302adab8"],["/tags/json/index.html","84363a465ed75d376774fae95375930d"],["/tags/mongodb/index.html","2ebf7d641b61693f49dd4d4d57d9d5e9"],["/tags/nodejs/index.html","fc7dcf3c853b753a6d75452e778bd6b2"],["/tags/中国近代史纲要/index.html","c690b2e08cb196a9e6da23da9968a7d9"],["/tags/标签外挂/index.html","02fabcc6aeee995148fe9269a2c50955"],["/tags/目录索引/index.html","db0c8167e03743093c0ddd3d2578e8fc"],["/tags/管理经济学/index.html","37cb4ec52dfdc204342237152f0171f1"],["/tags/考前突击/index.html","28c913e4ada980ce1352b7cebe5d6539"],["/tags/考前突击/page/2/index.html","c974b90a5aee686b690d0c89f47481ec"],["/tags/自考/index.html","e6eebd0a4cc0fb417eed166516890b9d"],["/tags/计算机网络原理/index.html","59362deb06171865eeb5740c61ab9d3a"],["/tags/运筹学/index.html","5a26b6e5a4b6d82abb4d3e9dd2f1308f"],["/tags/马克思主义/index.html","f0b59a0638b9057d04385e83d19619a2"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,!1);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));0,e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}}),function(e){if("object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function d(s,f,r){function i(a,e){if(!f[a]){if(!s[a]){var t="function"==typeof require&&require;if(!e&&t)return t(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var n=f[a]={exports:{}};s[a][0].call(n.exports,function(e){var t=s[a][1][e];return i(t||e)},n,n.exports,d,s,f,r)}return f[a].exports}for(var o="function"==typeof require&&require,e=0;e<r.length;e++)i(r[e]);return i}({1:[function(e,t,a){function r(e,t){((t=t||{}).debug||f.debug)&&console.log("[sw-toolbox] "+e)}function d(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||f.cache.name,caches.open(t)}function c(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var s,f=e("./options"),i=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(c,n){var t=(n=n||{}).successResponses||f.successResponses;return fetch(c.clone()).then(function(e){return"GET"===c.method&&t.test(e.status)&&d(n).then(function(a){a.put(c,e).then(function(){var e,t=n.cache||f.cache;(t.maxEntries||t.maxAgeSeconds)&&t.name&&(e=function(e,a,t){var c=e.url,n=t.maxAgeSeconds,d=t.maxEntries,s=t.name,f=Date.now();return r("Updating LRU order for "+c+". Max entries is "+d+", max age is "+n),i.getDb(s).then(function(e){return i.setTimestampForUrl(e,c,f)}).then(function(e){return i.expireEntries(e,d,n,f)}).then(function(e){r("Successfully updated IDB.");var t=e.map(function(e){return a.delete(e)});return Promise.all(t).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}.bind(null,c,a,t),s=s?s.then(e):e())})}),e.clone()})},openCache:d,renameCache:function(t,e,a){return r("Renaming cache: ["+t+"] to ["+e+"]",a),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var a=e[0],c=e[1];return a.keys().then(function(e){return Promise.all(e.map(function(t){return a.match(t).then(function(e){return c.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return d(e).then(function(e){return e.add(t)})},uncache:function(t,e){return d(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||c(e),f.preCacheItems=f.preCacheItems.concat(e)},validatePrecacheInput:c,isResponseFresh:function(e,t,a){if(!e)return!1;if(t){var c=e.headers.get("date");if(c&&new Date(c).getTime()+1e3*t<a)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,a){var n="sw-toolbox-",d=1,i="store",o="url",b="timestamp",s={};t.exports={getDb:function(e){return e in s||(s[e]=(c=e,new Promise(function(e,t){var a=indexedDB.open(n+c,d);a.onupgradeneeded=function(){a.result.createObjectStore(i,{keyPath:o}).createIndex(b,b,{unique:!1})},a.onsuccess=function(){e(a.result)},a.onerror=function(){t(a.error)}}))),s[e];var c},setTimestampForUrl:function(c,n,d){return new Promise(function(e,t){var a=c.transaction(i,"readwrite");a.objectStore(i).put({url:n,timestamp:d}),a.oncomplete=function(){e(c)},a.onabort=function(){t(a.error)}})},expireEntries:function(e,a,t,c){return(s=e,f=t,r=c,f?new Promise(function(e,t){var c=1e3*f,n=[],a=s.transaction(i,"readwrite"),d=a.objectStore(i);d.index(b).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&r-c>t.value[b]){var a=t.value[o];n.push(a),d.delete(a),t.continue()}},a.oncomplete=function(){e(n)},a.onabort=t}):Promise.resolve([])).then(function(t){return(c=e,r=a,r?new Promise(function(e,t){var n=[],a=c.transaction(i,"readwrite"),d=a.objectStore(i),s=d.index(b),f=s.count();s.count().onsuccess=function(){var c=f.result;r<c&&(s.openCursor().onsuccess=function(e){var t=e.target.result;if(t){var a=t.value[o];n.push(a),d.delete(a),c-n.length>r&&t.continue()}})},a.oncomplete=function(){e(n)},a.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var c,r});var s,f,r}}},{}],3:[function(e,t,a){function c(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var n=e("./helpers"),d=e("./router"),s=e("./options");t.exports={fetchListener:function(e){var t=d.match(e.request);t?e.respondWith(t(e.request)):d.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(d.default(e.request))},activateListener:function(e){n.debug("activate event fired");var t=s.cache.name+"$$$inactive$$$";e.waitUntil(n.renameCache(t,s.cache.name))},installListener:function(e){var t=s.cache.name+"$$$inactive$$$";n.debug("install event fired"),n.debug("creating cache ["+t+"]"),e.waitUntil(n.openCache({cache:{name:t}}).then(function(t){return Promise.all(s.preCacheItems).then(c).then(n.validatePrecacheInput).then(function(e){return n.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,a){var c;c=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+c+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,a){var n=new URL("./",self.location).pathname,d=e("path-to-regexp"),c=function(e,t,a,c){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=n+t),this.keys=[],this.regexp=d(t,this.keys)),this.method=e,this.options=c,this.handler=a};c.prototype.makeHandler=function(e){var a;if(this.regexp){var c=this.regexp.exec(e);a={},this.keys.forEach(function(e,t){a[e.name]=c[t+1]})}return function(e){return this.handler(e,a,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,a){var i=e("./route"),o=e("./helpers"),f=function(e,t){for(var a=e.entries(),c=a.next(),n=[];!c.done;){new RegExp(c.value[0]).test(t)&&n.push(c.value[1]),c=a.next()}return n},n=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(c){n.prototype[c]=function(e,t,a){return this.add(c,e,t,a)}}),n.prototype.add=function(e,t,a,c){var n;c=c||{},n=t instanceof RegExp?RegExp:(n=c.origin||self.location.origin)instanceof RegExp?n.source:n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();var d=new i(e,t,a,c);this.routes.has(n)||this.routes.set(n,new Map);var s=this.routes.get(n);s.has(e)||s.set(e,new Map);var f=s.get(e),r=d.regexp||d.fullUrlRegExp;f.has(r.source)&&o.debug('"'+t+'" resolves to same regex as existing route.'),f.set(r.source,d)},n.prototype.matchMethod=function(e,t){var a=new URL(t),c=a.origin,n=a.pathname;return this._match(e,f(this.routes,c),n)||this._match(e,[this.routes.get(RegExp)],t)},n.prototype._match=function(e,t,a){if(0===t.length)return null;for(var c=0;c<t.length;c++){var n=t[c],d=n&&n.get(e.toLowerCase());if(d){var s=f(d,a);if(0<s.length)return s[0].makeHandler(a)}}return null},n.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new n},{"./helpers":1,"./route":5}],7:[function(e,t,a){var d=e("../options"),s=e("../helpers");t.exports=function(c,e,n){return n=n||{},s.debug("Strategy: cache first ["+c.url+"]",n),s.openCache(n).then(function(e){return e.match(c).then(function(e){var t=n.cache||d.cache,a=Date.now();return s.isResponseFresh(e,t.maxAgeSeconds,a)?e:s.fetchAndCache(c,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,a){var n=e("../options"),d=e("../helpers");t.exports=function(t,e,c){return c=c||{},d.debug("Strategy: cache only ["+t.url+"]",c),d.openCache(c).then(function(e){return e.match(t).then(function(e){var t=c.cache||n.cache,a=Date.now();if(d.isResponseFresh(e,t.maxAgeSeconds,a))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,a){var i=e("../helpers"),o=e("./cacheOnly");t.exports=function(s,f,r){return i.debug("Strategy: fastest ["+s.url+"]",r),new Promise(function(t,a){var c=!1,n=[],d=function(e){n.push(e.toString()),c?a(new Error('Both cache and network failed: "'+n.join('", "')+'"')):c=!0},e=function(e){e instanceof Response?t(e):d("No result returned")};i.fetchAndCache(s.clone(),r).then(e,d),o(s,f,r).then(e,d)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,a){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,a){var o=e("../options"),b=e("../helpers");t.exports=function(s,e,f){var r=(f=f||{}).successResponses||o.successResponses,i=f.networkTimeoutSeconds||o.networkTimeoutSeconds;return b.debug("Strategy: network first ["+s.url+"]",f),b.openCache(f).then(function(e){var t,a,c=[];if(i){var n=new Promise(function(n){t=setTimeout(function(){e.match(s).then(function(e){var t=f.cache||o.cache,a=Date.now(),c=t.maxAgeSeconds;b.isResponseFresh(e,c,a)&&n(e)})},1e3*i)});c.push(n)}var d=b.fetchAndCache(s,f).then(function(e){if(t&&clearTimeout(t),r.test(e.status))return e;throw b.debug("Response was an HTTP error: "+e.statusText,f),a=e,new Error("Bad response")}).catch(function(t){return b.debug("Network or response error, fallback to cache ["+s.url+"]",f),e.match(s).then(function(e){if(e)return e;if(a)return a;throw t})});return c.push(d),Promise.race(c)})}},{"../helpers":1,"../options":4}],12:[function(e,t,a){var c=e("../helpers");t.exports=function(e,t,a){return c.debug("Strategy: network only ["+e.url+"]",a),fetch(e)}},{"../helpers":1}],13:[function(e,t,a){var c=e("./options"),n=e("./router"),d=e("./helpers"),s=e("./strategies"),f=e("./listeners");d.debug("Service Worker Toolbox is loading"),self.addEventListener("install",f.installListener),self.addEventListener("activate",f.activateListener),self.addEventListener("fetch",f.fetchListener),t.exports={networkOnly:s.networkOnly,networkFirst:s.networkFirst,cacheOnly:s.cacheOnly,cacheFirst:s.cacheFirst,fastest:s.fastest,router:n,options:c,cache:d.cache,uncache:d.uncache,precache:d.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,a){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,a){function d(e,t){for(var a,c=[],n=0,d=0,s="",f=t&&t.delimiter||"/";null!=(a=C.exec(e));){var r=a[0],i=a[1],o=a.index;if(s+=e.slice(d,o),d=o+r.length,i)s+=i[1];else{var b=e[d],h=a[2],l=a[3],p=a[4],u=a[5],m=a[6],x=a[7];s&&(c.push(s),s="");var g=null!=h&&null!=b&&b!==h,v="+"===m||"*"===m,w="?"===m||"*"===m,y=a[2]||f,j=p||u;c.push({name:l||n++,prefix:h||"",delimiter:y,optional:w,repeat:v,partial:g,asterisk:!!x,pattern:j?(E=j,E.replace(/([=!:$\/()])/g,"\\$1")):x?".*":"[^"+R(y)+"]+?"})}}var E;return d<e.length&&(s+=e.substr(d)),s&&c.push(s),c}function h(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(o){for(var b=new Array(o.length),e=0;e<o.length;e++)"object"==_typeof(o[e])&&(b[e]=new RegExp("^(?:"+o[e].pattern+")$"));return function(e,t){for(var a="",c=e||{},n=(t||{}).pretty?h:encodeURIComponent,d=0;d<o.length;d++){var s=o[d];if("string"!=typeof s){var f,r=c[s.name];if(null==r){if(s.optional){s.partial&&(a+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(u(r)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(r)+"`");if(0===r.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var i=0;i<r.length;i++){if(f=n(r[i]),!b[d].test(f))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(f)+"`");a+=(0===i?s.prefix:s.delimiter)+f}}else{if(f=s.asterisk?encodeURI(r).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):n(r),!b[d].test(f))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+f+'"');a+=s.prefix+f}}else a+=s}return a}}function R(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function l(e,t){return e.keys=t,e}function p(e){return e.sensitive?"":"i"}function s(e,t,a){u(t)||(a=t||a,t=[]);for(var c=(a=a||{}).strict,n=!1!==a.end,d="",s=0;s<e.length;s++){var f=e[s];if("string"==typeof f)d+=R(f);else{var r=R(f.prefix),i="(?:"+f.pattern+")";t.push(f),f.repeat&&(i+="(?:"+r+i+")*"),d+=i=f.optional?f.partial?r+"("+i+")?":"(?:"+r+"("+i+"))?":r+"("+i+")"}}var o=R(a.delimiter||"/"),b=d.slice(-o.length)===o;return c||(d=(b?d.slice(0,-o.length):d)+"(?:"+o+"(?=$))?"),d+=n?"$":c&&b?"":"(?="+o+"|$)",l(new RegExp("^"+d,p(a)),t)}function f(e,t,a){return u(t)||(a=t||a,t=[]),a=a||{},e instanceof RegExp?function(e,t){var a=e.source.match(/\((?!\?)/g);if(a)for(var c=0;c<a.length;c++)t.push({name:c,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(e,t)}(e,t):u(e)?function(e,t,a){for(var c=[],n=0;n<e.length;n++)c.push(f(e[n],t,a).source);return l(new RegExp("(?:"+c.join("|")+")",p(a)),t)}(e,t,a):(c=t,s(d(e,n=a),c,n));var c,n}var u=e("isarray");t.exports=f,t.exports.parse=d,t.exports.compile=function(e,t){return c(d(e,t))},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=s;var C=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,a){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var a=t[1],c=parseInt(t[2]);e&&(!t||"Firefox"===a&&46<=c||"Chrome"===a&&50<=c)||(Cache.prototype.addAll=function(a){function c(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return c.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return a=a.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(a.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new c("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new c("Incorrect response status");return Promise.all(e.map(function(e,t){return n.put(a[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"cdn.jsdelivr.net"});