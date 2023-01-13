document.querySelector('#add').onclick = function() {

// Nếu ko có giá trị hoặc giá trị rỗng sẽ hiện alert
    if(document.querySelector('.input input').value == 0) {
        alert('Please Enter The Text!!') 
    }
// Nếu có giá trị sẽ in ra nội dung 
    else {
        document.querySelector(".output").innerHTML += `
        <div class = "tag">
            <span class = "tag_input">        
                ${document.querySelector(".input input").value}
            </span>
                <button class = "upItemBtn">
                    <i class="fa-solid fa-circle-chevron-up"></i>
                </button>
                <button class = "removeItemBtn">
                    <i class="fa-solid fa-circle-xmark"></i>    
                </button>
                <button class = "downItemBtn"> 
                    <i class="fa-solid fa-circle-chevron-down"></i>
                </button>
        </div>
        `;

        var but = document.querySelectorAll(".removeItemBtn");
        for(var i = 0; i < but.length; i++) {
            but[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}