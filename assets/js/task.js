"use strict";


let fileInput = document.querySelector(".file-input")
let tableBody = document.querySelector(".table-area .table tbody")
let table = document.querySelector(".table")
let alertFile = document.querySelector(".file-alert")
let button = document.querySelector("button")
let uploadIcon = document.querySelector(".icon")


uploadIcon.addEventListener("click", function () {
    fileInput.click();

})


uploadIcon.addEventListener("dragover", function (e) {
    e.preventDefault();
})

uploadIcon.addEventListener("drop", function (e) {
    e.preventDefault();
    fileInput.files = e.dataTransfer.files;
    uploadFiles();

})




fileInput.addEventListener("change", uploadFiles)

function uploadFiles() {
    for (const file of fileInput.files) {

        let fileReader = new FileReader();

        fileReader.onloadend = (e) => {
            let base64Img = e.currentTarget.result;

            tableBody.innerHTML += `<tr>
            <td><img src="${base64Img}" alt=""></td>
            <td>${file.name}</td>
            <td>${file.size / 1024} kb</td>
            </tr>`

        }
        fileReader.readAsDataURL(file);
    }
    table.classList.remove("d-none")
    alertFile.classList.add("d-none")
    button.classList.remove("d-none")
}




button.addEventListener("click", function () {
    tableBody.innerHTML = ""
    table.classList.add("d-none")
    alertFile.classList.remove("d-none")
    this.classList.add("d-none")
    fileInput.value = ""
})