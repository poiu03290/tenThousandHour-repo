const startButton = document.querySelector('.btn-exc')
const openButton = document.querySelector('.btn-go')
const closeButton = document.querySelector('.close-btn')
const shareButton = document.querySelector('.btn-share')
const result = document.querySelector('.cont-result')
const modal = document.querySelector('#modal')
const loading = document.querySelector('.result-loading')

function calculator() {
    const fieldValue = document.querySelector('.field-value')
    let timeValue = document.querySelector('.time-value')
    let timeValue_int = Number(timeValue.value)

    const fieldResult = document.querySelector('.field-result')
    let timeResult = document.querySelector('.time-result')

    if (fieldValue.value === '') {
        alert('입력되지 않았습니다.')
        fieldValue.focus()
        return false;
    } else if (timeValue.value === '') {
        alert('입력되지 않았습니다.')
        timeValue.focus()
        return false
    } else if (timeValue_int > 24) {
        alert('잘못된 값입니다. 24이하의 값을 입력해주세요.')
        return false
    }

    result.style.display = 'none'
    loading.style.display = 'flex'

    setTimeout(function() {
        loading.style.display = 'none'
        result.style.display = 'flex'
        fieldResult.innerText = fieldValue.value
        timeResult.innerText = parseInt((10000/timeValue_int), 10)
    }, 1800)
}

function openModal() {
    modal.style.display = 'flex'
}

function closeModal() {
    modal.style.display = 'none'
}

function copyUrl() {
    let url = window.location.href;
    let tmp = document.createElement('input')


	document.body.appendChild(tmp);
	tmp.value = url;
	tmp.select();
    window.getSelection("copy")
	document.body.removeChild(tmp);
	alert("URL이 복사되었습니다.")
}

window.onclick = function (event) {
    if (event.target === modal) {
        closeModal()
    }
}

startButton.addEventListener('click', calculator)
openButton.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)
shareButton.addEventListener('click', copyUrl)
