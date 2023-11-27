interface IDateTimeFormats {
  [locale: string]: {
    [formatName: string]: Intl.DateTimeFormatOptions;
  };
}

const datetimeFormatList: IDateTimeFormats = {};

["zh-CN", "en-US"].forEach((locale) => {
  datetimeFormatList[locale] = {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
    long: {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    },
  };
});

export default datetimeFormatList;
