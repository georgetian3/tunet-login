function getOss() {
  const names = [
    'Windows',
    'MacOS',
    'Linux',
    'Android',
    'iOS',
  ]
  oss = []
  for (let i in names) {
    let os = {};
    os.name = names[i];
    os.lower = names[i].toLowerCase();
    os.img = 'static/img/login/' + os.lower + '.gif';
    oss.push(os);
  }
  console.log(oss);
  return oss;
}

async function connect() {

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === '') {
    alert('请填写用户名');
    return;
  } else if (password === '') {
    alert('请填写密码');
    return;
  }

  const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': username,
        'password': password
      })
  }).then(x => x.text());

  console.log(response);

  if (response === 'username_does_not_exist') {
    alert('用户不存在');
  } else if (response === 'wrong_password') {
    alert('密码错误');
  } else if (response === 'success') {
    window.location.replace("/success");
  }
  
};

function main() {
  let oss = getOss();
  Vue.createApp({
    delimiters: ['${', '}'],
    data() {
      return {
        oss: oss,
      }
    }

  }).mount('#login');
}

main();