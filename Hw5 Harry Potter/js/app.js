function image_gender(el) {
	if (el.gender === `male` && el.image === "") {
	  return `<img style="height: 180px" src="https://image.shutterstock.com/image-vector/businessman-icon-260nw-564112600.jpg" >`;
	} else if (el.gender === `female` && el.image === "") {
	  return `<img style="height: 180px" src="https://www.freeiconspng.com/thumbs/female-icon/female-icon-27.png">`;
	} else {
	  return `<img src = "${el.image}">`;
	}
  }
const main = document.querySelector(".main");
const card = document.querySelectorAll(".card");
const btns = document.querySelectorAll(".nav");
// +
let data;

const fetchData = async () => {
  const response = await fetch("https://hp-api.herokuapp.com/api/characters");
  const json = await response.json();
  data = await json;
  foo(data);
};

fetchData();
const foo = (data) => {
	let html ='';
  data.forEach((element) => {
    // main.append;
    html += `
		<div class="card">
		${image_gender(element)};
		<div class="data_of_card">
		<div>Name: ${element.name}</div>
		<div>:Alternate name ${element.alternate_name}</div>
		<div>Species: ${element.species}</div>
		<div>Gender: ${element.gender}</div>
		<div>House: ${element.house}</div>
		<div>Date of Birth: ${element.dateOfBirth}</div>
		<div>Patronus: ${element.patronus}</div>
		<div>Actor: ${element.actor}</div>
		</div>
		</div>
		`;
  });
  main.innerHTML=html;
};



// const btnsFilterFacultet = (data, house) => {
//   const info = data.filter((character) =>
//     character.house.toLowerCase().includes(house.toLowerCase)
//   );
//   foo(info);
// };

// btns[1].addEventListener("click", () => {
//   btnsFilterFacultet(data, "Gryffindor");
// });

// btns[2].addEventListener("click", () => {
//   btnsFilterFacultet(data, "Slytherin");
// });

// btns[3].addEventListener("click", () => {
//   btnsFilterFacultet(data, "Hufflepuff");
// });

// btns[4].addEventListener("click", () => {
//   btnsFilterFacultet(data, "Ravenclaw");
// });

// const filterBox = document.querySelectorAll(`.nav`);

// document.querySelector(`.nav-bar`).addEventListener("click", (event) => {
//   if (event.target.tagName !== "DIV") return false;

//   let filterClass = event.target.dataset["f"];

//   filterBox.forEach((elem) => {
// 	elem.classList.remove(`hide`);
// 	if (!elem.classList.contains(filterClass) && filterClass !== `all`) {
// 	  elem.classList.add("hide");
// 	}
//   });
// });

btns.forEach(el => {
	el.addEventListener("click", ()=>{
		if(el.innerText === "Gryffindor"){
			let filteredData = data.filter(el => el.house.includes("Gryffindor"))
			// console.log(filteredData);
			foo(filteredData);
		} else if(el.innerText === "Slytherin"){
			let filteredData = data.filter(el => el.house.includes("Slytherin"))
			console.log(filteredData);
			foo(filteredData);
		}else if(el.innerText === "Hufflepuff"){
			let filteredData = data.filter(el => el.house.includes("Hufflepuff"))
			console.log(filteredData);
			foo(filteredData);
		}else if(el.innerText === "Ravenclaw"){
			let filteredData = data.filter(el => el.house.includes("Ravenclaw"))
			console.log(filteredData);
			foo(filteredData);
		}else if(el.innerText === "All"){
			foo(data);
		}
	})
})