'use strict';
{
  document.addEventListener('DOMContentLoaded', () => {
    const textOverlay = document.querySelector('.text-overlay');
    
    // ページが読み込まれたときに.showクラスを追加
    textOverlay.classList.add('show');
});

// ハンバーガーメニュー
const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header');
const mask = document.querySelector('#mask');

hamburger.addEventListener('click', function() {
  header.classList.toggle('open');
  mask.style.display = header.classList.contains('open') ? 'block' : 'none';
});

mask.addEventListener('click', function() {
  header.classList.remove('open');
  mask.style.display = 'none';
});


}