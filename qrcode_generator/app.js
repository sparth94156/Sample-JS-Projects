BASE_URL = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const Text = document.getElementById("textarea");
const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const generateBtn = document.getElementById("btn");

function generateQR(){
    if(Text.value.length > 0){
        qrImage.src = BASE_URL + Text.value;
        imgBox.classList.add("show-img");
    }else{
        Text.classList.add("error");
        setTimeout(() => {
            Text.classList.remove("error");
        },1000);
    }
}
generateBtn.addEventListener("click",generateQR);