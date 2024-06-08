// Get UI

const getbox = document.querySelector('.box'),
    getbtns = document.querySelector('.btns'),
    getboxtitle = document.querySelector('#boxtitle');

getbox.addEventListener('click', function (e) {
    // console.log('hey');

    getbtns.classList.add('show');
    // getbtns.classList.toggle('show');

    smallmenu(e.target);
});

getbox.addEventListener('dblclick', function () {
    getbtns.classList.remove('show');
});

function smallmenu(ele) {
    // console.log(ele);

    if (ele.classList.contains('btn-icon') || ele.classList.contains('icn')) {
        // console.log('Yes');

        const geturl = ele.getAttribute('data-link');
        // console.log(geturl);
        window.location.href = geturl;
    } else if (ele.classList.contains('icn')) {
        const geturl = ele.parentElement.getAttribute('data-link');
        // console.log(geturl);
        window.location.href = geturl;
    } else {
        console.log('No');
    }
}

dragme(getbox);

function dragme(box) {
    // console.log(box);
    // console.log('I am main dragme function');

    let getcx, getcy, setcx, setcy;

    if (getboxtitle) {
        getboxtitle.onmousedown = mousedown;
    }

    function mousedown(e) {
        // console.log('I am movedown function');

        getcx = e.clientX;
        getcy = e.clientY;

        // console.log('Step 1: ', getcx, getcy);

        document.onmousemove = dragnow;
        document.onmouseup = stopdrag;

        getbtns.classList.remove('show');
    }

    function dragnow(e) {
        // console.log('I am dragnow function');

        setcx = getcx - e.clientX;
        setcy = getcy - e.clientY;

        // console.log('Step 2: ', setcx, setcy);

        getcx = e.clientX; //          reset and override clientX and clientY ,  moved element to the new location
        getcy = e.clientY;

        const btnleft = box.offsetLeft;
        const btntop = box.offsetTop;

        // console.log(btnleft, btntop);     //     btn topLeft point

        // console.log(btnleft - setcx, btntop - setcy);

        box.style.left = btnleft - setcx + 'px';
        box.style.top = btntop - setcy + 'px';
    }

    function stopdrag() {
        // console.log('I am stopdrag function');

        document.onmousemove = null;
        document.onmouseup = null;
    }
}
