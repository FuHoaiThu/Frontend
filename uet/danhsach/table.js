function addBG(e) { // khi checked thi thay mau vang cho hang do
    e
        .parentNode
        .parentNode
        .parentNode
        .classList
        .add("bg--yellow");
}
function removeBG(e) { // khi bo checked thi tra ve nhu cu
    e
        .parentNode
        .parentNode
        .parentNode
        .classList
        .remove("bg--yellow");
}
var check = document.getElementsByName("chk");
var checkLength = check.length;
var checkAll = document.querySelector("#chkall");
var deleteBtn = document.querySelector(".user-button");
// doi bg hang khi check
for (let i = 0; i < checkLength; i++) {
    check[i].onchange = function () { // khi co dau hieu thay doi check
        var countCheck = 0; // dem so hang duoc check
        if (this.checked) {
            addBG(this);
            deleteBtn.style.visibility = "visible";
            //neu check het thi check cua input check all
            for (let j = 0; j < checkLength; j++) {
                if (check[j].checked)
                    countCheck++;
            }
            if (countCheck === checkLength) {
                checkAll.checked = true;
            } else
                checkAll.checked = false;
        }
        else { // chi can mot o khong check thi khong co check all
            checkAll.checked = false;
            removeBG(this);
            //xoa
            check.forEach((chk) => {
                if (chk.checked) {
                    countCheck++;
                }
            });
            if (countCheck) {
                deleteBtn.style.visibility = "visible";
            } else
                deleteBtn.style.visibility = "hidden";
        }
    }
}
// check all
document
    .getElementById("chkall")
    .onchange = function () {
        for (let i = 0; i < check.length; i++) {
            check[i].checked = this.checked;
            if (check[i].checked) {
                addBG(check[i]);
                deleteBtn.style.visibility = "visible";
            } else {
                removeBG(check[i]);
                deleteBtn.style.visibility = "hidden";
            }
        }
    }
deleteBtn.onclick = function () {
    check.forEach((chk) => {
        for(let i=0; i<checkLength; i++) {
            if(check[i].checked) {
                check[i].parentNode.parentNode.parentNode.parentNode.removeChild(check[i].parentNode.parentNode.parentNode);
                checkLength--;
                i--;
            }
        }
    })
}
