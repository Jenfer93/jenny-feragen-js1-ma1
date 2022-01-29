
//Question 1 

const cat = {
  complain: function () {
      console.log("Meow!");
  }
} 

cat.complain();



//Question 2 

const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";

//Question 3

heading.style.fontSize = "2em";

//Question 4 

heading.classList.add("subheading");

// Question 5 

const para = document.querySelectorAll("p");

for (let i = 0; i < para.length; i++) {
  para[i].style.color = "red";
}

//Question 6 

const resultContainer = document.querySelector(".results");

resultContainer.innerHTML = `<p>New paragraph</p>`;
resultContainer.style.backgroundColor = "yellow";

//Question 7
const cats = [
  {
      name: "Blob",
      age: 10
  },
  {
      name: "Harold",
  },
  {
      name: "Blurt",
      age: 21
  }
];

let list;

function listOfCats(list){
  for (let i = 0; i<cats.length; i++) {
      console.log(cats[i].name);
  }
}
listOfCats(list);

//Question 8

const catContainer = document.querySelector(".cat-container");

let html = "";


function createCats(cats) {
  for (let i = 0; i < cats.length; i++) {
      let catsAge = "Age unknown";

      if (cats[i].age) {
          catsAge = cats[i].age;
      }
      
      html += `<div> 
          <h5>${cats[i].name}</h5>
          <p>${catsAge}</p>
          </div>
          `;
  }
}

createCats(cats);

catContainer.innerHTML = html;