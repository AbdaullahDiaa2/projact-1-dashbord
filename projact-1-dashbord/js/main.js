let pop = document.querySelector(".pop ");
let cil = document.querySelector(".cil  ");
let serch = document.querySelector("#serch ");
let butx = document.querySelector("#butx ");
let lineVeluT = document.querySelector(".line-velu-t ");
let lineVeluM = document.querySelector(".line-velu-m ");
let lineVeluV = document.querySelector(".line-velu-v");
let lineVeluT_s = document.querySelector(".line-velu-t div ");
let lineVeluM_S = document.querySelector(".line-velu-m div");
let lineVeluV_S = document.querySelector(".line-velu-v div");
let br3 = document.querySelector(" #br3");
let remov = document.querySelectorAll("#remov ");
// let x=document.querySelector(" ");

let sied = document.querySelectorAll(".sied ul li a ");
let num = document.querySelectorAll(".num");
// let x=document.querySelectorAll(" ");
// let x=document.querySelectorAll(" ");
// let x=document.querySelectorAll(" ");
// https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js
// test
console.log(remov);

// x.onclick=_=>{

// }

// array.forEach(e => {
//     addEventListener("click",_=>{

//     })
// });

// remov.onclick = e => {
//     remov.removeChild(remov)
// }
remov.forEach(e => {
    e.addEventListener("click", (_) => {
        // console.log(e)
        let x = e.parentElement;
        x.classList.toggle("line-thr")
            // console.log(e.parentElement)


    })
});

const name = (params) => {
    let m = 90;
    let t = 30;
    let v = 70;
    lineVeluV_S.innerHTML = `${v}% `;
    lineVeluM_S.innerHTML = `${m}% `;
    lineVeluT_s.innerHTML = `${t}%`;
    // ------------
    lineVeluM.style.width = `${m}%`;
    lineVeluT.style.width = `${t}%`;
    lineVeluV.style.width = `${v}%`;

}




sied.forEach(e => {

    e.addEventListener("click", ele => {
        sied.forEach(e => {
            e.classList.remove("active")
        });
        e.classList.add("active")
    })

});

cil.onclick = e => {
    pop.classList.toggle("open")
    cil.classList.toggle("cil")


}

serch.onclick = e => {
    console.log(serch)
    serch.style.width = '200px';
    butx.style.display = "flex";
}
butx.onclick = _ => {
        serch.value = "";
        serch.placeholder = "serch";
    }
    // 

const conter = (ele) => {
    let gold = ele.dataset.gold;
    let setv = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == gold) {
            console.log(gold)
            clearInterval(setv)
        }
    }, 10);
}
let stert = false;
window.onscroll = e => {
        if (window.scrollY >= (br3.offsetTop - 200)) {
            if (!stert) {
                num.forEach(e => {
                    conter(e)
                    name()
                    stert = true;
                });
            }

        }
    }
    // b6