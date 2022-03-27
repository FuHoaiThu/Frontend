function addBG(e) { // khi checked thi thay mau vang cho hang do
    e.parentNode.parentNode.parentNode.classList.add("bg--yellow");
}
function removeBG(e) { // khi bo checked thi tra ve nhu cu
    e.parentNode.parentNode.parentNode.classList.remove("bg--yellow");
}
var check = document.getElementsByName("chk");
var checkLength = check.length;
var checkAll = document.getElementById("chkall") // lay so hang user hien co
// doi bg hang khi check
for(let i=0; i<checkLength; i++) {
    check[i].onchange = function() { // khi co dau hieu thay doi check
        var countCheck = 0;  // dem so hang duoc check
        if(this.checked) {
            addBG(this);
            //neu check het thi check cua input check all
            for(let j=0; j<checkLength; j++) {
                if(check[j].checked) countCheck++;
            }
            console.log(countCheck);
            console.log(checkLength);
            if(countCheck === checkLength) {
                checkAll.checked = true;
            }
            else checkAll.checked =false;
        }
        else { // chi can mot o khong check thi khong co check all
            checkAll.checked = false;
            removeBG(this);
        }
    }
}
// check all
document.getElementById("chkall").onchange = function() {
    for(let i=0; i<check.length; i++) {
        check[i].checked = this.checked;
        if(check[i].checked) {
            addBG(check[i]);
        }
        else removeBG(check[i]);
    }
}