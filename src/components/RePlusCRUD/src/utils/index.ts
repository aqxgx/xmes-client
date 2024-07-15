/**
 * 是否是链接
 * @param url
 * @returns
 */
export function isUrl(url: string) {
  const regex = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return regex.test(url);
}

/**
 * 日期、时间选择器快捷选项，常搭配 [DatePicker](https://element-plus.org/zh-CN/component/date-picker.html)
 * [DateTimePicker](https://element-plus.org/zh-CN/component/datetime-picker.html) 的`shortcuts`属性使用
 */
export const getPickerShortcuts = (): Array<{
  text: string;
  value: Date | Function;
}> => {
  return [
    {
      text: "今天",
      value: () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const todayEnd = new Date();
        todayEnd.setHours(23, 59, 59, 999);
        return [today, todayEnd];
      }
    },
    {
      text: "昨天",
      value: () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        yesterday.setHours(0, 0, 0, 0);
        const yesterdayEnd = new Date();
        yesterdayEnd.setDate(yesterdayEnd.getDate() - 1);
        yesterdayEnd.setHours(23, 59, 59, 999);
        return [yesterday, yesterdayEnd];
      }
    },
    {
      text: "前天",
      value: () => {
        const beforeYesterday = new Date();
        beforeYesterday.setDate(beforeYesterday.getDate() - 2);
        beforeYesterday.setHours(0, 0, 0, 0);
        const beforeYesterdayEnd = new Date();
        beforeYesterdayEnd.setDate(beforeYesterdayEnd.getDate() - 2);
        beforeYesterdayEnd.setHours(23, 59, 59, 999);
        return [beforeYesterday, beforeYesterdayEnd];
      }
    },
    {
      text: "本周",
      value: () => {
        const today = new Date();
        const startOfWeek = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1)
        );
        startOfWeek.setHours(0, 0, 0, 0);
        const endOfWeek = new Date(
          startOfWeek.getTime() +
            6 * 24 * 60 * 60 * 1000 +
            23 * 60 * 60 * 1000 +
            59 * 60 * 1000 +
            59 * 1000 +
            999
        );
        return [startOfWeek, endOfWeek];
      }
    },
    {
      text: "上周",
      value: () => {
        const today = new Date();
        const startOfLastWeek = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() - today.getDay() - 7 + (today.getDay() === 0 ? -6 : 1)
        );
        startOfLastWeek.setHours(0, 0, 0, 0);
        const endOfLastWeek = new Date(
          startOfLastWeek.getTime() +
            6 * 24 * 60 * 60 * 1000 +
            23 * 60 * 60 * 1000 +
            59 * 60 * 1000 +
            59 * 1000 +
            999
        );
        return [startOfLastWeek, endOfLastWeek];
      }
    },
    {
      text: "本月",
      value: () => {
        const today = new Date();
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        startOfMonth.setHours(0, 0, 0, 0);
        const endOfMonth = new Date(
          today.getFullYear(),
          today.getMonth() + 1,
          0
        );
        endOfMonth.setHours(23, 59, 59, 999);
        return [startOfMonth, endOfMonth];
      }
    },
    {
      text: "上个月",
      value: () => {
        const today = new Date();
        const startOfLastMonth = new Date(
          today.getFullYear(),
          today.getMonth() - 1,
          1
        );
        startOfLastMonth.setHours(0, 0, 0, 0);
        const endOfLastMonth = new Date(
          today.getFullYear(),
          today.getMonth(),
          0
        );
        endOfLastMonth.setHours(23, 59, 59, 999);
        return [startOfLastMonth, endOfLastMonth];
      }
    },
    {
      text: "本年",
      value: () => {
        const today = new Date();
        const startOfYear = new Date(today.getFullYear(), 0, 1);
        startOfYear.setHours(0, 0, 0, 0);
        const endOfYear = new Date(today.getFullYear(), 11, 31);
        endOfYear.setHours(23, 59, 59, 999);
        return [startOfYear, endOfYear];
      }
    }
  ];
};
/**
 * 获取类型
 */
export const getColourTypeByIndex = (index: number) => {
  if (index === 1) {
    return "danger";
  } else if (index === 2) {
    return "warning";
  } else if (index === 3) {
    return "primary";
  } else if (index === 4) {
    return "success";
  } else return "info";
};
/**
 * 获取国际化label值
 */
export const formatPublicLabels = (
  t: Function,
  te: Function,
  label: string,
  localeName: string
): string => {
  const formatLabel = `${localeName}.${label}`;
  if (te(formatLabel)) {
    return t(formatLabel);
  }
  if (
    [
      "pk",
      "id",
      "rank",
      "ordering",
      "selection",
      "operation",
      "created_time",
      "updated_time",
      "descending",
      "ascending"
    ].indexOf(label) > -1
  ) {
    return t(`commonLabels.${label}`);
  }
  return;
};

export const uniqueArrayObj = (array, key) => {
  const b = {};
  array.forEach(item => {
    b[item[key]] = item;
  });
  return Object.values(b);
};
