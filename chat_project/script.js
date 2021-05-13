
        document.querySelector('.btn').addEventListener("click",function () {
                var value = document.querySelector(".inp").value;

                var element = document.createElement('p');
                    var text = document.createTextNode(value);
                     element.appendChild(text);
                     var mydiv = document.querySelector('.div2');
                     mydiv.appendChild(element);
                     element.style.fontSize="2rem";
                     element.style.border="1px solid black";
                     element.style.maxWidth="70px";
                     element.style.color="white";
                     element.style.backgroundColor="black";
                     element.style.borderRadius="10px";
                     document.querySelector(".inp").value=" ";
             });  


     document.querySelector('.btn1').addEventListener("click",function () {
        var value = document.querySelector(".inp2").value;
        var element = document.createElement('p');
            var text = document.createTextNode(value);
             element.appendChild(text);
        element.style.margin = "10px";
        element.style.fontSize="2rem";
        element.style.marginLeft="300px";
        element.style.border="1px solid black";
        
        element.style.color="white";
        element.style.backgroundColor="black";
        element.style.borderRadius="10px";
       
             var mydiv = document.querySelector('.div2');
             mydiv.appendChild(element);
             document.querySelector(".inp2").value = " ";
     });