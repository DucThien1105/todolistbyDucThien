document.querySelector('#add').onclick = function() {
    if(document.querySelector('.input input').value == 0) {
        alert('Please Enter The Text!!') 
    }
console.log("alert");
    // else {
    //     document.querySelector("output").innerHTML += `
    //     <div class = "tag">
    //         <div class = "tag_text">    
    //             ${document.querySelector(".input input").value}
    //         </div>
    //         <div class = "tag_btn">
    //             <button class = "up">
    //                 <i class="fa-solid fa-circle-chevron-up"></i>
    //             </button>
    //             <button class = "delete">
    //                 <i class="fa-solid fa-circle-xmark"></i>    
    //             </button>
    //             <button class = "down"> 
    //                 <i class="fa-solid fa-circle-chevron-down"></i>
    //             </button>
    //         </div>
    //     </div>
    //     `;
        
    //     var but = document.querySelectorAll(".delete");

    //     for(var i = 0; i < but.length; i++) {
    //         but[i].onclick = function(){
    //             this.parentNode.remove();
    //         }
    //     }

    // }
}