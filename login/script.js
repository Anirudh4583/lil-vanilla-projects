$('.message a').click(function () {
  console.log('kaam');
  $('form').animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
});
