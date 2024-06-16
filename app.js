// Get UI

const getdivarea = document.querySelector('#divarea');

getdivarea.contentEditable = true;
getdivarea.spellCheck = false;

const getbtns = document.querySelectorAll('.btn');

getbtns.forEach(function (getbtn) {
    // console.log(getbtn);

    getbtn.addEventListener('click', function () {
        //  Method 1
        // const getcommand = getbtn.getAttribute('data-command');
        // console.log(getcommand);

        //  Method 2
        const getcommand = getbtn.dataset['command'];
        // console.log(getcommand);

        if (getcommand === 'clearText') {
            getdivarea.innerHTML = '';
        } else if (getcommand === 'createLink' || getcommand === 'insertImage') {
            //                                      command,  defaultvalue
            const geturl = prompt('Enter your website link', 'https://');
            document.execCommand(getcommand, false, geturl);
        } else if (getcommand === 'paste') {
            navigator.clipboard.readText().then(function (text) {
                getdivarea.innerHTML += text;
            });
        } else if (getcommand === 'foreColor') {
            document.execCommand(getcommand, false, getbtn.value);
        } else if (getcommand === 'backColor') {
            document.execCommand(getcommand, false, getbtn.value);
        } else if (getcommand === 'fontName') {
            document.execCommand(getcommand, false, getbtn.value);
        } else {
            //                    command,  showui, value
            document.execCommand(getcommand, false, null);
        }
    });
});

function lwcasefun() {
    getdivarea.style.textTransform = 'lowercase';
}

function capcasefun() {
    getdivarea.style.textTransform = 'captalize';
}

function upcasefun() {
    getdivarea.style.textTransform = 'uppercase';
}

// 14ex
