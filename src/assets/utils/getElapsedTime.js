/**
 * @file: getElapsedTime.js
 * @method getElapsedTime
 * @param {type} t - 指定的时间戳
 * @description: 根据指定的t，获取t距离现在过去了多少天
 * @author: chenxubin
 * @date: 2021/3/26
 */
export default function getElapsedTime(t) {
  let now = Date.now();
  let elapsed = now - t
  let result = ''
  let second = 1000;
  let minute = 60 * second;
  let hours = 60 * minute;
  let day = 24 * hours;
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let nowYear = new Date(now).getFullYear()
  let nowMonth = new Date(now).getMonth()
  //判断是不是闰年
  if ((nowYear % 4 === 0 && nowYear % 100 !== 0) || nowYear % 400 === 0) months[1] = 29;
  let month = Math.abs(new Date(t).getMonth() - nowMonth)
  let year = nowYear - new Date(t).getFullYear()

  if (year !== 0 && month >= 12) result = year + '年'
  else if (month !== 0 && Math.round(elapsed / day) >= months[nowMonth]) return month + '个月'
  else if (parse(day) !== 0) result = parse(day) + '天'
  else if (parse(hours) !== 0) result = parse(hours) + '小时'
  else if (parse(minute) !== 0) result = parse(minute) + '分钟'
  else if (parse(second) !== 0) result = parse(second) + '秒'
  else if (parse(1) !== 0) result = parse(1) + '毫秒'
  else result = '0毫秒'

  function parse(time) {
    return Math.round(elapsed / time)
  }

  return result;
}
