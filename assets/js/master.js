$(document).ready(function(){
    $('.mobile-button').click(function(){
      $('.header-menu').toggleClass('active');
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const pageLinks = document.querySelectorAll('.page-link');
    const spans = document.querySelectorAll('.pages-numbers span');
    const leftArrow = document.querySelector('path[d="M11.4375 18.75L4.6875 12L11.4375 5.25M5.625 12H19.3125"]').parentNode.parentNode;
    const rightArrow = document.querySelector('path[d="M12.5625 5.25L19.3125 12L12.5625 18.75M18.375 12L4.6875 12"]').parentNode.parentNode;
   
    pageLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        if(this !== leftArrow && this !== rightArrow) {
          e.preventDefault();
          spans.forEach(function(span) {
            span.classList.remove('active');
          });
          this.parentElement.classList.add('active');
        }
      });
    }); 
    leftArrow.addEventListener('click', function(e) {
      e.preventDefault();
      for(let i = 0; i < spans.length; i++) {
        if(spans[i].classList.contains('active')) {
          spans[i].classList.remove('active');
          if(i > 0) {
            spans[i-1].classList.add('active');
          }
          break;
        }
      }
    });
  
    rightArrow.addEventListener('click', function(e) {
      e.preventDefault();
      for(let i = 0; i < spans.length; i++) {
        if(spans[i].classList.contains('active')) {
          spans[i].classList.remove('active');
          if(i < spans.length - 1) {
            spans[i+1].classList.add('active');
          }
          break;
        }
      }
    });
  });
  
  