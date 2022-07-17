function capitalizeFirstLetter (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

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
    link.name = capitalizeFirstLetter(keys[i]);
    link.url = 'https://' + keys[i] + '.tsinghua.edu.cn/';
    link.img = 'static/img/success/' + keys[i] + '.gif';
    link.title = '清华' + titles[i] + '.tsinghua';
    links.push(link);
  }
}

// dynamically setting the length of the progress bar based on `usage`
function setProgressBar() {
  const usage = parseFloat(document.getElementById('usage').textContent);
  const new_width = Math.min(53 * 5 + 8, 53 * 5 * usage / 125) + 'px';
  const pbar = document.getElementById('bar-progress');
  pbar.style.width = new_width;
}

async function main() {
  const links = makeLinks();
  Vue.createApp({
    delimiters: ['${', '}'],
    data() {
      return {
        links: links,
        duration: '23:00:00',
      }
    }

  }).mount('#login-success');

  setProgressBar();
}

main();

