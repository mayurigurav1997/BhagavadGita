// https://bhagavadgitaapi.in/chapters/?api_key=74af61aa6a8205b60

const GitaApi = {
    key:"74af61aa6a8205b60",
    baseUrl:"https://bhagavadgitaapi.in/chapters/?api_key="
};

let input = document.getElementById("chapter_input");

input.addEventListener("keypress",(eve) => {
    if(eve.keyCode==13){
        console.log(input.value);
        if(input.value<=18 && input.value>=1){
            console.log("Enter the right chapter");
            getGita(input.value);
        }
        else{
            alert("Please enter the chapter number between 1 to 18");
        }
    }
    
});

//Get the Gita
function getGita(Number) {
    fetch(`${GitaApi.baseUrl}${GitaApi.key}`)
    .then(data => {return data.json()})
    .then(showGita);
}

//Show GitaApi
function showGita(data){
   console.log(data);
   let Number = input.value - 1;
    
   //set the Number 
    let chapter_number = document.getElementById("chapter_number");
    chapter_number.innerHTML = input.value;

    //set the name of the chapter
    let chapter_name = document.getElementById("chapter_name");
    chapter_name.innerHTML = data[Number].meaning.en;

    //set the hindi name of the chapter
    let chapter_name_hi = document.getElementById("chapter_name_hi");
    chapter_name_hi.innerHTML = data[Number].meaning.hi;

    let chapter_summary = document.getElementById("chapter_summary");
    chapter_summary.innerHTML = data[Number].summary.en;

    let chapter_summary_hi = document.getElementById("chapter_summary_hi");
    chapter_summary_hi.innerHTML = data[Number].summary.hi;

    //changethe background Image
    let Background_Image = document.getElementById("chapter_details");
    console.log(Background_Image);
    if(input.value == 1){
        Background_Image.style.backgroundImage = "url('Images/chapter1.jpg')";
    }
    else if(input.value == 2){
        Background_Image.style.backgroundImage = "url('Images/chapter2.jpg')";
    }
    else if(input.value == 3){
        Background_Image.style.backgroundImage = "url('Images/chapter3.jpg')";
    }
    else if(input.value == 4){
        Background_Image.style.backgroundImage = "url('Images/chapter4.jpg')";
    }
    else if(input.value == 5){
        Background_Image.style.backgroundImage = "url('Images/chapter5.jpg')";
    }
    else if(input.value == 6){
        Background_Image.style.backgroundImage = "url('Images/chapter6.jpg')";
    }
    else if(input.value == 7){
        Background_Image.style.backgroundImage = "url('Images/chapter7.jpg')";
    }
    else if(input.value == 8){
        Background_Image.style.backgroundImage = "url('Images/chapter8.jpg')";
    }
    else if(input.value == 9){
        Background_Image.style.backgroundImage = "url('Images/chapter9.jpg')";
    }
    else if(input.value == 10){
        Background_Image.style.backgroundImage = "url('Images/chapter10.jpg')";
    }
    else if(input.value == 11){
        Background_Image.style.backgroundImage = "url('Images/chapter11.jpg')";
    }
    else if(input.value == 12){
        Background_Image.style.backgroundImage = "url('Images/chapter12.jpg')";
    }
    else if(input.value == 13){
        Background_Image.style.backgroundImage = "url('Images/chapter13.jpg')";
    }
    else if(input.value == 14){
        Background_Image.style.backgroundImage = "url('Images/chapter14.jpg')";
    }
    else if(input.value == 15){
        Background_Image.style.backgroundImage = "url('Images/chapter15.jpg')";
    }
    else if(input.value == 16){
        Background_Image.style.backgroundImage = "url('Images/chapter16.jpg')";
    }
    else if(input.value == 17){
        Background_Image.style.backgroundImage = "url('Images/chapter17.jpg')";
    }
    else if(input.value == 18){
        Background_Image.style.backgroundImage = "url('Images/chapter18.jpg')";
    }
}