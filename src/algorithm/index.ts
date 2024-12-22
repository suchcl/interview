/**
 * 千分位
 * 小M在工作时遇到了一个问题，他需要将用户输入的不带千分位逗号的数字字符串转换为带千分位逗号的格式，并且保留小数部分。小M还发现，有时候输入的数字字符串前面会有无用的 0，这些也需要精简掉。请你帮助小M编写程序，完成这个任务
 * s = "1294512.12412" => 1,294,512.12412
 * s = "0000123456789.99" => '123,456,789.99'
 */

export function formatNumber(num: number): string {
  const str = num.toString();
  const [integer, decimal] = str.split('.');
  const integerArr = integer.split('').reverse();
  const formattedInteger = integerArr.reduce((acc, digit, index) => {
    if (index > 0 && index % 3 === 0) {
      return digit + ',' + acc;
    } else {
      return digit + acc;
    }
  }, '');
  if (decimal) {
    return formattedInteger + '.' + decimal;
  } else {
    return formattedInteger;
  }
}