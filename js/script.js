// const myModal = new bootstrap.Modal('#exampleModal');


// window.addEventListener('DOMContentLoaded', () => {
//     myModal.show();
// })

const myModal = bootstrap.Modal.getOrCreateInstance('#exampleModal');


window.addEventListener('DOMContentLoaded', () => {
    myModal.show();
})
