let n = 0
const interval = setInterval(function(){
    const progress=document.getElementById('progress')
    progress.style.width=`${++n}%`
    progress.innerHTML=`${n}%`

    if (n < 50){
        progress.style.backgroundColor="gray"
    }else if (n < 75) {
        progress.style.backgroundColor="blue"
    }else if (n < 90) {
        progress.style.backgroundColor="orange"
    }else {
        progress.style.backgroundColor="green"
    }
    

    if (n >= 100) {
        clearInterval(interval)
        setTimeout(function(){
            const progress=document.getElementById('progress')
            progress.style.display = 'none'
        }, 1500)
    }
}, 50)