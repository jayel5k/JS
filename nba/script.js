
//updated

// cPrev = 1; // global var saves the previous c, used to
//     // determine if the same column is clicked again

// function sortBy(c) {




// // document.getElementById("InsertYourTableIDHere").setAttribute("data-sortable-initialized", "false");

// rows = document.getElementById("data_table").rows.length-1; // num of rows

// columns = document.getElementById("data_table").rows[0].cells.length-1; // num of columns
// arrTable = [...Array(rows)].map(e => Array(columns)); // create an empty 2d array

//   for (ro=0; ro<rows; ro++) { // cycle through rows
//     for (co=0; co<columns; co++) { // cycle through columns
//     // assign the value in each row-column to a 2d array by row-column
//     arrTable[ro][co] = document.getElementById("data_table").rows[ro].cells[co].innerHTML;
//     }
//   }

// th = arrTable.shift(); // remove the header row from the array, and save it //c !== cPrev

// if (c == cPrev ){ // different column is clicked, so sort by the new column


// //arrTable.sort(
// //     function (a, b) {
// //  var x = String(a).toLowerCase(); 
// //  var y = String(b).toLowerCase(); 
// // if (x > y) 
// //  return 1 
// // if (x < y) 
// // return -1; 
// //   }


// arrTable.sort(function(x,y){
//   var a = String(x).toUpperCase();
//   var b = String(y).toUpperCase();
//   {
//   if(a < b) {
//   return -1;
//   } else if (a > b) {
//   return 1;
//   } else {
//   return 0;
//   }
//   }

// });






// }



//       else if(c === cPrev){

 
//         arrTable.reverse();
//       }


// else{ // if the same column is clicked then reverse the array
// arrTable.reverse();
// }

// cPrev = c; // save in previous c

// arrTable.unshift(th); // put the header back in to the array

// // cycle through rows-columns placing values from the array back into the html table
// for (ro=0; ro<rows; ro++) {
// for (co=0; co<columns; co++) {
//     document.getElementById("data_table").rows[ro].cells[co].innerHTML = arrTable[ro][co];
// }
// }

// }


function sortBy(n) {
        var table;
        table = document.getElementById("data_table");
        var rows, i, x, y, count = 0;
        var switching = true;

        // Order is set as ascending
        var direction = "ascending";

        // Run loop until no switching is needed
        while (switching) {
          switching = false;
          var rows = table.rows;

          //Loop to go through all rows
          for (i = 1; i < (rows.length - 2); i++) {
            var Switch = false;

            // Fetch 2 elements that need to be compared
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            // Check the direction of order
            if (direction == "ascending") {

              // Check if 2 rows need to be switched
              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
                {
                // If yes, mark Switch as needed and break loop
                Switch = true;
                break;
              }
            } else if (direction == "descending") {

              // Check direction
              if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase())
                {
                // If yes, mark Switch as needed and break loop
                Switch = true;
                break;
              }
            }
          }
          if (Switch) {
            // Function to switch rows and mark switch as completed
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;

            // Increase count for each switch
            count++;
          } else {
            // Run while loop again for descending order
            if (count == 0 && direction == "ascending") {
              direction = "descending";
              switching = true;
            }
          }
        }
      }


const removeSaveBtns = () => {
const saveBtns = document.querySelectorAll('.save');
saveBtns.forEach((btn, i) => {
btn.style.display = "none";
})
}



removeSaveBtns();



// function edit_row(no)
// {

// document.getElementById("edit_button"+no).style.display="none";

// document.getElementById("save_button"+no).style.display="";

// var name=document.getElementById("name_row"+no);


// var name_data=name.innerHTML;

// name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";

// }

// --------------------------------------

var current_edit_row = 0;

function edit_row(no) {
  // Close input field in previous edited row
   var name = document.getElementById("name_row" + no);
  var name_data = name.innerHTML;
  
   if (current_edit_row >= 1 && current_edit_row <= name_data.length) {
    save_row(current_edit_row);
  }

  // Open input field in new row
  document.getElementById("edit_button" + no).style.display = "none";
  document.getElementById("save_button" + no).style.display = "";
 
  name.innerHTML = "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";

  // Update current edited row number
 
  current_edit_row = no;
}

function save_row(no) {
  var name_input = document.getElementById("name_text" + no);
  if (name_input) {
    var name_val = name_input.value;
    document.getElementById("name_row" + no).innerHTML = name_val;
  }

  document.getElementById("save_button" + no).style.display = "none";
  document.getElementById("edit_button" + no).style.display = "";
}


// --------------------------------------

// function save_row(no)
// {
// var name_val=document.getElementById("name_text"+no).value;

// //var country_val=document.getElementById("country_text"+no).value;
// //var age_val=document.getElementById("age_text"+no).value;

// document.getElementById("name_row"+no).innerHTML=name_val;
// //document.getElementById("country_row"+no).innerHTML=country_val;
// //document.getElementById("age_row"+no).innerHTML=age_val;


// document.getElementById("save_button"+no).style.display="none";
// document.getElementById("edit_button"+no).style.display="";

// }

function delete_row(no)
{
document.getElementById("row"+no+"").outerHTML="";
}


// function validateForm() {
//   var x = document.getElementById("new_name").value;
//   if (x == "" || x == null) {
//     alert("Please input Team");
//     return false;
//   }
// }



// function addOne(button) {
// console.log(button.nextElementSibling.innerHTML)
// var spanEle = button.nextElementSibling;
// var old = parseInt(spanEle.innerHTML);
// spanEle.innerHTML = old + 1;

// }

function addOne(button) {
//console.log(button.nextElementSibling.innerHTML)
var spanEle = button.previousElementSibling;
var old = parseInt(spanEle.innerHTML);
spanEle.innerHTML = old + 1;

}


function reset(button) {
var spanEle = button.previousElementSibling.previousElementSibling;
var old = parseInt(spanEle.innerHTML);
spanEle.innerHTML = old - 1;
 }


// function minus(button) {
// //console.log(button.nextElementSibling.innerHTML)
// var spanEle = button;
// var old = parseInt(spanEle.innerHTML);
// spanEle.innerHTML = old - 1;


//           function myFunction() {
//                 var change = document.getElementById("btn1");
        
//                 var old = parseInt(change.innerHTML);

// change.innerHTML = old + 1;
// }


//http://jsfiddle.net/Hk4xJ/1/

// function addOne(button) {

// var count = 0;

// document.querySelector("button").onclick=function(){
//     count=count+1;
//     this.innerHTML=count}

// }


function add_row(no)
{
var new_name=document.getElementById("new_name").value;



if ( new_name == "" || new_name == null) {
window.alert("Please Input Team");
return false;
}


//var new_country=document.getElementById("new_country").value;
//var new_age=document.getElementById("new_age").value;
//if($("#myInput").val()==="") return;
//<button onclick='addOne(this)'>0d</button>



var table=document.getElementById("data_table");
var table_len=(table.rows.length)-1;
var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'><span>0</span><button onclick='addOne(this)'>+</button><button onclick='reset(this)'>-</button></td><td id='age_row"+table_len+"'><span>0</span><button onclick='addOne(this)'>+</button><button onclick='reset(this)'>-</button></td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' id='delete_button"+table_len+"' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";


document.getElementById("new_name").value="";
// document.getElementById("new_country").value="";
// document.getElementById("new_age").value="";


removeSaveBtns();


}