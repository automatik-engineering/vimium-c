/// <reference no-default-lib="true"/>
/// <reference path="../lib/index.d.ts" />

declare const enum Build {
  MinCVer = BrowserVer.MinSupported, // C35
  MinFFVer = FirefoxBrowserVer.MinSupported, // Firefox version
  BTypes = BrowserType.Chrome | BrowserType.Firefox | BrowserType.Edge, // supported browser types
  NDEBUG = 0,
  NoDialogUI = 0,
  NativeWordMoveOnFirefox = 1,
  PContentSettings = 1,
  OverrideNewTab = 1,
}
declare const enum BuildStr {
  Commit = "in-developing",
  FirefoxID = "vimium-c@gdh1995.cn",
}
