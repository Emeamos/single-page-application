the_list = document.getElementById("list");

function getApiResponse()  {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://swapi.dev/api/people");
    xhr.onload = function() {
      if (xhr.status ===  200) {
        const response = JSON.parse(xhr.responseText);
      for (let i = 0; i < response.results.length; i++)   {
            const main = document.createElement("div");
            const name = document.createElement("h3");
            const number = document.createElement("h6");
            const Img = document.createElement("img");
            const gender = document.createElement("p")
            const height = document.createElement("p")
            Img.src = "download.jpg";
          

            name.innerText = response.results[i].name;
            name.className = "name"
            gender.innerText = response.results[i].gender;
            gender.className = "gender"
            height.innerText = response.results[i].height;
            height.className = "height"
            number.innerText = i+1;
            main.className = "info"
            main.appendChild(number);
            main.appendChild(Img);
            main.appendChild(name);
            main.appendChild(gender);
            main.appendChild(height);

            the_list.appendChild(main);
          }

          function displayParagraphs(element) {
            element.addEventListener('click', function(event) {
              const div = element.parentNode;
              let paragraphs = div.getElementsByTagName('p');
          
              for (let i = 0; i < paragraphs.length; i++) {
              paragraphs[i].style.display = 'block';
              }
            });
          }
          
          let paras = document.getElementsByClassName('name');
          
          for (let i = 0; i < paras.length; i++) {
            displayParagraphs(paras[i]);
          }

      } else {
        console.error(xhr.responseText);
      }
    };
    xhr.send();
  }

getApiResponse()

  
  
  