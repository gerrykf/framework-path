- [国际化技术方案](#国际化技术方案)
  - [区域设置 locale](#区域设置-locale)
  - [国际化 API](#国际化-api)
    - [Intl.PluralRules](#intlpluralrules)
    - [Intl.DateTimeFormat](#intldatetimeformat)
    - [Intl.NumberFormat](#intlnumberformat)

# 国际化技术方案

## 区域设置 locale

locale 是一种标识，用来表示用户所在的地理位置，包括国家、语言、货币等信息。例如：zh-CN 表示中国大陆地区，使用简体中文，货币单位是人民币。

| local code | 通常的含义 |
| ---------- | ---------- |
| zh-CN      | 中文       |
| zh-TW      | 繁体中文   |
| zh-HK      | 繁体中文   |
| en-GB      | 英国英文   |
| en-US      | 美国英文   |
| ja-JP      | 日文       |
| ko-KR      | 韩文       |
| fr-FR      | 法文       |
| de-DE      | 德文       |
| ru-RU      | 俄文       |
| es-ES      | 西班牙文   |
| pt-PT      | 葡萄牙文   |
| ar-SA      | 阿拉伯文   |
| hi-IN      | 印地文     |
| bn-BD      | 孟加拉文   |
| id-ID      | 印尼文     |
| vi-VN      | 越南文     |
| th-TH      | 泰文       |
| ms-MY      | 马来西亚文 |

## 国际化 API

- Intl.PluralRules
- Intl.DateTimeFormat
- Intl.NumberFormat

### Intl.PluralRules

```js
// 语言复数
new Intl.PluralRules("en-US").select(0); // "other"
new Intl.PluralRules("en-US").select(1); // "one"
new Intl.PluralRules("en-US").select(2); // "other"
new Intl.PluralRules("zh-CN").select(0); // "other"
new Intl.PluralRules("zh-CN").select(1); // "other"
new Intl.PluralRules("zh-CN").select(2); // "other"
```

### Intl.DateTimeFormat

```js
// 日期格式化
new Intl.DateTimeFormat("zh-CN", {
  year: "numeric", // "2-digit"
  month: "2-digit", // "long"
  day: "2-digit", // "numeric"
  hour: "2-digit", // "2-digit"
  minute: "2-digit", // "2-digit"
  second: "2-digit", // "2-digit"
}).format(new Date());
```

### Intl.NumberFormat

```js
// 数字格式化
new Intl.NumberFormat("zh-CN", {
  style: "currency", // "decimal" | "percent" | "currency"
  currency: "CNY", // "USD" | "CNY" | "JPY" | "EUR"
  useGrouping: true, // 是否使用分组分隔符
  digits: 2, // 小数位数
}).format(1000000);
```
