function capitalizeFirstLetter (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const keys = ['info', 'lib', 'learn', 'mail'];
const titles = [
  '清华信息门户\ninfo.tsinghua',
  '清华图书馆\nlib.tsinghua',
  '清华网络学堂\nlearn.tsinghua',
  '清华邮箱\nmail.tsinghua',
]
let links = []

for (let i in keys) {
  let link = {};
  link.name = capitalizeFirstLetter(keys[i]);
  link.url = 'https://' + keys[i] + '.tsinghua.edu.cn/';
  link.img = 'imgs/' + keys[i] + '.gif';
  link.title = titles[i];
  links.push(link);
}

let usage = 5.08


Vue.createApp({
  data() {
    return {
      msg: 'test',
      links: links,
      hover: false,
      usage: usage,
      barLength: Math.min(125, 53 * 5 * usage / 125),
    }
  },
  watch: {
    hover(newHover) {
      if (newHover) {
        
      }
    }
  }
}).mount('#login-succeed')