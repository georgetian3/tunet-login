let no_username = '用户不存在'
let wrong_password = '密码错误'

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