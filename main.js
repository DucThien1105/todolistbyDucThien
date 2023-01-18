var inputVal = document.querySelector('#item');
var addTaskBtn = document.querySelector('#add');
var outPut = document.querySelector('.output');
var hexString = "0123456789abcdef";
// var taskOutput = document.querySelectorAll('.tasks');


// Gắn sự kiện cho nút
addTaskBtn.addEventListener('click', function () {
   if(inputVal.value == 0) {alert('Please Enter Somthing!!')};
   if(inputVal.value != 0) {
      var localItems = JSON.parse( localStorage.getItem('localItem'));
        if(localItems === null){
            taskList = []
   } 
   else {
       taskList = localItems;
}

// Truyền giá trị phần input vào task
   taskList.push(inputVal.value)
// Clear input after add content
   inputVal.value = " "
// Set Value cho local
   localStorage.setItem('localItem', JSON.stringify(taskList)); 
}
   showItem()
})

// Lưu trên local storage
function showItem(){
   var localItems = JSON.parse( localStorage.getItem('localItem'))
   if(localItems === null){
    taskList = []
     
   } else {
       taskList = localItems;
   }

// Hiển thị task
var html = '';
var itemShowAll = document.querySelector('.output');
taskList.forEach((data, index ) => {
    html += ` 
   <div class="tasks">
   <span class="pText">${data}</span>
   <button class="deleteTask" onClick="deleteItem(${index})">
    <i class="fa-solid fa-circle-xmark"></i>  
   </button>
   </div>
   `
})
itemShowAll.innerHTML = html;
}

// Xóa task
showItem()
function deleteItem(index){
   var localItems = JSON.parse( localStorage.getItem('localItem'))
   taskList.splice(index, 1)
   localStorage.setItem('localItem', JSON.stringify(taskList));
   showItem()
};

// Change task color
// var randomColor = () => {
//    var hexCode = "#";
//    for( i = 0; i < 6; i++){
//        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
//    }
//    return hexCode;
// }

// var generateGrad = () => {
//    var colorOne = randomColor();
//    var colorTwo = randomColor();
//    var direction = Math.floor(Math.random() * 360);
//    outPut.style.background = 
//    `linear-gradient(${direction}deg, ${colorOne}, ${colorTwo})`;
   
// }

// addTaskBtn.addEventListener("click", generateGrad);
