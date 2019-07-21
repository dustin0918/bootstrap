$(document).ready(()=>{
$('.close-alert').click(()=>{
  $('.alert').alert('close')
})
$('.alert').on('close.bs.alert',()=>{
  console.log('close alert')
})
$('.alert').on('closed.bs.alert',()=>{
  console.log('closed alert')
})
$('.carousel').carousel({
  interval: 1000
})
$('#dropdown-demo').on('show.bs.dropdown',()=>{
  console.log('show')
})
$('#dropdown-demo').on('shown.bs.dropdown',()=>{
  console.log('shown')
})
$('#dropdown-demo').on('hide.bs.dropdown',()=>{
  console.log('hide')
})
$('#dropdown-demo').on('hidden.bs.dropdown',()=>{
  console.log('hidden')
})
  const list = $('#tab-demo .list-group a')
  list.click(function (event) {
    event.preventDefault()
    $(this).tab('show')
  })
  list.on('show.bs.tab', function(event){
    console.log(`show: ${event.target.getAttribute('href')}`)
  })
  list.on('shown.bs.tab', function(event){
    console.log(`shown: ${event.target.getAttribute('href')}`)
  })
  list.on('hide.bs.tab', function(event){
    console.log(`hide: ${event.target.getAttribute('href')}`)
  })
  list.on('hidden.bs.tab', function(event){
    console.log(`hidden: ${event.target.getAttribute('href')}`)
  })
  $('[data-toggle="popover"]').popover()
  $('[data-toggle="tooltip"]').tooltip()
  $('#form-demo').submit(function(event){
    const form=$(this)
    if(form[0].checkValidity()===false){
      event.preventDefault()
      event.stopPropagation()
    }
    form.addClass('was-validated')
  })
})
