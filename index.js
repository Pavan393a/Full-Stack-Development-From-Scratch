// const titles = document.querySelectorAll('h1')
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'
// console.log(titles);
// //another way to setting an attribute
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'

// first whole div element should be center
// Wait for the document to be fully loaded before manipulating it
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the "wrapper" element
    // text content should be middle

    const wrapper = document.querySelector(".wrapper");
  
    // Define a CSS class with the desired styles
    const wrapperStyles = {
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "10px",
    };
  
    // Apply the styles to the "wrapper" element
    Object.assign(wrapper.style, wrapperStyles);
    // h1 element in black color as text font size should be default

    // changing a color for 2020 for every second interval 
    const wordToChange=document.querySelector('.color-changing');
    const colors=['green,violet','red','yellow',"gray","purple",'maroon','lime','parrotGreen','black','blue'];
    let colorindex=0;
    function changeColor(){
        wordToChange.style.color=colors[colorindex];
        colorindex=(colorindex+1)%colors.length;
    }

    // setInterval(()=>{changeColor()},40)
    setInterval(changeColor,1000);
    wordToChange.style.fontSize='100px';

    // h2 element should be font size of 15px with line in the below
    const headingTwo=document.querySelector('h2');
    headingTwo.style.fontWeight='normal';
    headingTwo.style.textDecoration='underline';
    // under the h2 there should be time slot represents today month year time
    function updateTime(){
        const now=new Date();
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'
        ];

        // Get the month name based on the month number
        const monthName = monthNames[now.getMonth()];
        const formattedDateTime=`${monthName} ${now.getDate()}, ${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:
        ${now.getMinutes().toString().padStart(2, '0')}:
        ${now.getSeconds().toString().padStart(2, '0')} ${now.getMilliseconds()}`;
        let pElement=document.getElementById('datetime');
        if(!pElement){
            pElement=document.createElement('p');
            pElement.id='datetime'
            document.body.appendChild(pElement);
        }
        
        pElement.textContent=formattedDateTime;
        headingTwo.parentNode.insertBefore(pElement,headingTwo.nextSibling);
        const colors=['green,violet','red','yellow',"gray","purple",'maroon','lime','parrotGreen','brown','blue'];
        let colorindex=0;
        function changeColor(){
            pElement.style.backgroundColor=colors[colorindex];
            colorindex=(colorindex+1)%colors.length;
        }
    
        // setInterval(()=>{changeColor()},40)
        setInterval(changeColor,1000);
        const pElementStyles = {
            padding:"10px",
            borderRadius:"5px"

          };
        
          // Apply the styles to the "wrapper" element
          Object.assign(pElement.style, pElementStyles);
    }
    updateTime();
    setInterval(updateTime,1000);



    const ulElement = document.querySelector('ul');

    // Remove the bullet points by setting list-style-type to 'none'
    ulElement.style.listStyleType = 'none';
    // ul it should represent in a box where backgorund element should be change based on the end word

    const liElement=document.querySelectorAll('li');
    liElement.forEach(li => {
        const text=li.textContent.trim();
        if(text.endsWith('Done')){
            li.style.backgroundColor='#00ea69';
        }else if(text.endsWith('Ongoing')){
            li.style.backgroundColor='#ffe90b';
        }else if(text.endsWith('Coming')){
            li.style.backgroundColor='#f1807e'
        }
        const liElementStyles = {
            padding:"10px",
            borderRadius:"2px",
            marginBottom: "5px", /* Adjust the value to control the gap size */
            padding: '10px',
            width:'500px'
    
          };
        Object.assign(li.style, liElementStyles)});


        
    });
 
    
      // Apply the styles to the "wrapper" element
  

  





