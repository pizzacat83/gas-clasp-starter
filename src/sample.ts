declare var global: any;

global.sampleFunc = (url: string): string => {
  return UrlFetchApp.fetch(url).getContentText();
};
