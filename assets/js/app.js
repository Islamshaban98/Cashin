document.querySelector('.collapse').addEventListener('show.bs.collapse', function () {
    document.querySelector('nav').style.background = '#55118e'
})
document.querySelector('.collapse').addEventListener('hide.bs.collapse', function () {
    document.querySelector('nav').style.background = 'transparent'
})