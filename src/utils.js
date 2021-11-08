// tcplayer/videojs/dplayer demos
import dPlayerHLSEncryptDemoCode from '../html-demos/dplayer/dplayer-hls-encrypt.html?raw';
import dPlayerHLSPrivateDemoCode from '../html-demos/dplayer/dplayer-hls-private.html?raw';
import dPlayerHLSPublicDemoCode from '../html-demos/dplayer/dplayer-hls-public.html?raw';
import dPlayerOrdinaryPrivateDemoCode from '../html-demos/dplayer/dplayer-ordinary-private.html?raw';
import dPlayerOrdinaryPublicDemoCode from '../html-demos/dplayer/dplayer-ordinary-public.html?raw';
import tcPlayerHLSEncryptDemoCode from '../html-demos/tcplayer/tcplayer-hls-encrypt.html?raw';
import tcPlayerHLSPrivateDemoCode from '../html-demos/tcplayer/tcplayer-hls-private.html?raw';
import tcPlayerHLSPublicDemoCode from '../html-demos/tcplayer/tcplayer-hls-public.html?raw';
import tcPlayerOrdinaryPrivateDemoCode from '../html-demos/tcplayer/tcplayer-ordinary-private.html?raw';
import tcPlayerOrdinaryPublicDemoCode from '../html-demos/tcplayer/tcplayer-ordinary-public.html?raw';
import videojsHLSEncryptDemoCode from '../html-demos/videojs/videojs-hls-encrypt.html?raw';
import videojsHLSPrivateDemoCode from '../html-demos/videojs/videojs-hls-private.html?raw';
import videojsHLSPublicDemoCode from '../html-demos/videojs/videojs-hls-public.html?raw';
import videojsOrdinaryPrivateDemoCode from '../html-demos/videojs/videojs-ordinary-private.html?raw';
import videojsOrdinaryPublicDemoCode from '../html-demos/videojs/videojs-ordinary-public.html?raw';

const videoUrlMap = {
  'ordinary-public': 'https://video-preview-1253960454.cos.ap-nanjing.myqcloud.com/mv.mp4',
  'ordinary-private': 'https://video-demos-1259789488.cos.ap-guangzhou.myqcloud.com/test.mp4?q-sign-algorithm=sha1&q-ak=AKIDWszqQkZfFakeIhRkZ9TaZIkvYx5xZxAV&q-sign-time=1636375419;1936379019&q-key-time=1636375419;1936379019&q-header-list=&q-url-param-list=&q-signature=4bd09ab52c96d5b75685c218cc4dca9839f54901',
  'hls-public': 'https://video-preview-1253960454.cos.ap-nanjing.myqcloud.com/m3u8/mu/123.21d.m3u8',
  'hls-private': 'https://video-demos-1259789488.cos.ap-guangzhou.myqcloud.com/hls/hls-test.m3u8?ci-process=pm3u8&expires=3600&q-sign-algorithm=sha1&q-ak=AKIDWszqQkZfFakeIhRkZ9TaZIkvYx5xZxAV&q-sign-time=1636376197;1936379797&q-key-time=1636376197;1936379797&q-header-list=&q-url-param-list=&q-signature=567d72e4ffcad1f46852fc00d6bc5153cacafcaa',
  'hls-encrypt': 'https://video-demos-1259789488.cos.ap-guangzhou.myqcloud.com/hls-encrypt/example.m3u8',
}

const tcplayerCodeDemoMap = {
  'ordinary-public': tcPlayerOrdinaryPublicDemoCode,
  'ordinary-private': tcPlayerOrdinaryPrivateDemoCode,
  'hls-public': tcPlayerHLSPublicDemoCode,
  'hls-private': tcPlayerHLSPrivateDemoCode,
  'hls-encrypt': tcPlayerHLSEncryptDemoCode,
}

const dplayerCodeDemoMap = {
  'ordinary-public': dPlayerHLSEncryptDemoCode,
  'ordinary-private': dPlayerHLSPrivateDemoCode,
  'hls-public': dPlayerHLSPublicDemoCode,
  'hls-private': dPlayerOrdinaryPrivateDemoCode,
  'hls-encrypt': dPlayerOrdinaryPublicDemoCode,
}

const videojsCodeDemoMap = {
  'ordinary-public': videojsHLSEncryptDemoCode,
  'ordinary-private': videojsHLSPrivateDemoCode,
  'hls-public': videojsHLSPublicDemoCode,
  'hls-private': videojsOrdinaryPrivateDemoCode,
  'hls-encrypt': videojsOrdinaryPublicDemoCode,
}

export {
  videoUrlMap,
  tcplayerCodeDemoMap,
  dplayerCodeDemoMap,
  videojsCodeDemoMap,
};
