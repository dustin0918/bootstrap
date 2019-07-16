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


})
