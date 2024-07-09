export type ClientMode =
  | 'auto'
  | 'focus-existing'
  | 'navigate-existing'
  | 'navigate-new';

export type Display = 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser';

export type DistributionPlatform =
  | 'chrome_web_store'
  | 'itunes'
  | 'microsoft-inbox'
  | 'microsoft-store'
  | 'play';

export interface EdgeSidePannel {
  preferred_width: number;
}

export interface LaunchHandler {
  client_mode: ClientMode | ClientMode[];
}

export type LinkHandler = 'auto' | 'preferred' | 'not-preferred';

export interface RelatedApp {
  platform: DistributionPlatform;
  url: string;
  id: string;
}

export type ScreenShotFormFactor = 'narrow' | 'wide';

export type ScreenShotPlatform =
  | 'android'
  | 'chromeos'
  | 'ipados'
  | 'ios'
  | 'kaios'
  | 'macos'
  | 'windows'
  | 'xbox';

export type TextDirection = 'auto' | 'ltr' | 'rtl';

export interface ManifestIcon {
  src: string;
  sizes: string;
  type: string;
}

export interface ManifestScreenshot extends ManifestIcon {
  form_factor: ScreenShotFormFactor;
  label: string;
  platform?: ScreenShotPlatform | DistributionPlatform;
}

export type Permission =
  | 'activeTab'
  | 'alarms'
  | 'background'
  | 'bookmarks'
  | 'browserSettings'
  | 'browsingData'
  | 'captivePortal'
  | 'clipboardRead'
  | 'clipboardWrite'
  | 'contentSettings'
  | 'contextMenus'
  | 'contextualIdentities'
  | 'cookies'
  | 'debugger'
  | 'declarativeNetRequest'
  | 'declarativeNetRequestFeedback'
  | 'declarativeNetRequestWithHostAccess'
  | 'devtools'
  | 'dns'
  | 'downloads'
  | 'downloads.open'
  | 'find'
  | 'geolocation'
  | 'history'
  | 'identity'
  | 'idle'
  | 'management'
  | 'menus'
  | 'menus.overrideContext'
  | 'nativeMessaging'
  | 'notifications'
  | 'pageCapture'
  | 'pkcs11'
  | 'privacy'
  | 'proxy'
  | 'scripting'
  | 'search'
  | 'sessions'
  | 'storage'
  | 'tabHide'
  | 'tabs'
  | 'theme'
  | 'topSites'
  | 'unlimitedStorage'
  | 'webNavigation'
  | 'webRequest'
  | 'webRequestAuthProvider'
  | 'webRequestBlocking'
  | 'webRequestFilterResponse'
  | 'webRequestFilterResponse.serviceWorkerScript';
