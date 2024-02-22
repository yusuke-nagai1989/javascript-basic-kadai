const btn = document.getElementById('btn')
const text = document.getElementById('text')


btn.addEventListener('click', () => {
  
  setTimeout(() => {

  text.textContent='';
  
  const h2 = document.createElement('h2');
  h2.textContent = 'ボタンをクリックしました';
  document.querySelector('body').prepend(h2);
  
  },3000);
})