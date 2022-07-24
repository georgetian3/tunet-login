// dynamically generating the navigation links
function makeLinks() {
  const keys = ['info', 'lib', 'learn', 'mail'];
  const titles = [
    '信息门户\ninfo',
    '图书馆\nlib',
    '网络学堂\nlearn',
    '邮箱\nmail',
  ];
  let links = [];
  for (let i in keys) {
    let link = {};
    link.name = keys[i].charAt(0).toUpperCase() + keys[i].slice(1); // capitalizing words
    link.url = 'https://' + keys[i] + '.tsinghua.edu.cn/';
    link.img = 'static/img/success/' + keys[i] + '.gif';
    link.title = '清华' + titles[i] + '.tsinghua';
    links.push(link);
  }
  return links;
}

// dynamically setting the length of the progress bar based on `usage`
function setProgressBar() {
  const usage = parseFloat(document.getElementById('usage').textContent);
  const new_width = Math.min(53 * 5 + 8, 53 * 5 * usage / 125) + 'px';
  const pbar = document.getElementById('bar-progress');
  pbar.style.width = new_width;
}

async function main() {
  Vue.createApp({
    delimiters: ['${', '}'],
    data() {
      return {
        links: makeLinks(),
        duration: '23:00:00',
      }
    }

  }).mount('#success');
  setProgressBar();
}



main();


/*****************************************************************************/
// 实验3

let chart = echarts.init(document.getElementById('chart'));

let data = [];
let usage = 0;

var option = {
  title: {'text': '流量使用情况'},
  tooltip: {
    trigger: 'axis',
    formatter: function (params) {
      // formats the tooltip to:
      // HH:mm::ss: x.yzGB
      // e.g.: 13:21:49 4.25GB
      let date = new Date(params[0].value[0]);
      let usage = params[0].value[1];
      return [date.getHours(), date.getMinutes(), date.getSeconds()].map(x => x.toString().padStart(2, '0')).join(':') + ' ' + usage.toFixed(2) + 'GB';
    },
  },
  xAxis: {type: 'time'},
  yAxis: {type: 'value'},
  series: [{type: 'line', data: data}],
  color: '#E64E2E',
};

chart.setOption(option);

setInterval(function () {
  // add extra point
  data.push([new Date().setMilliseconds(0), usage += Math.random()]);
  // take only the last 10 points
  data = data.slice(-9);
  // update graph
  chart.setOption({series: [{data: data}]});
}, 2000);