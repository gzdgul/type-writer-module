//In order to use this module, 'typewriter' must be added to the relevant tag in class.
//'caret' or 'caret-thick' can be added to the class for carets

//EXAMPLES
    typeWriter('#hello',2000,true,1000);
    typeWriter('#hello2',2000,false,1000);
    typeWriter('#example',4000,true,1000);
    typeWriter('#example2',4000,false,1000);

function typeWriter(
    whichElement,
    durationTime,
    afterDelete = false,
    afterDeleteDuration = 700
) {
        whichElement === 'all' ? whichElement = '.typewriter' : null;
        let element = document.querySelectorAll(`${whichElement}`);
        element.forEach((element) => {
            let i = 0;
            let k = 0;
            let speed;
            let txt = element.innerHTML;
            element.innerHTML = '';
            element.style.display = 'block';
            setTimeout(write,durationTime);


            function write () {
                let a = Math.floor(Math.random() * 40) + 60;
                speed = a;
                if (i < txt.length) {
                    element.innerHTML += txt.charAt(i);
                    i++;
                    return setTimeout(write, speed);
                }
                (afterDelete) &&  setTimeout(del,afterDeleteDuration);
            }
            function del () {
                let b = Math.floor(Math.random() * 60) + 80;
                speed = b;
                if (k < txt.length) {
                    let a = [...element.innerText];
                    a.pop();
                    a = a.join('');
                    element.innerHTML = a;
                    k++;
                    setTimeout(del, speed);
                }
            }
        });
}

