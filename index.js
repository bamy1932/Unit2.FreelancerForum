//freelancers
const freelancers = [
  { name: "Lisa", occupation: "Teacher", price: 40 },
  { name: "Geraldine", occupation: "Scientist", price: 60 },
  { name: "John", occupation: "Project Manager", price: 70 },
  { name: "Mike", occupation: "Gardener", price: 30 },
  { name: "Jerry", occupation: "Programmer", price: 50 },
  { name: "Pam", occupation: "PR", price: 60 },
  { name: "Joe", occupation: "Driver", price: 30 },
  { name: "Sandra", occupation: "Vet", price: 50 },
];

//Array of possible names
const nameMapping = (freelancers) => {
  const names = freelancers.map((freelancer) => freelancer.name);
  return names;
};
const mappedNames = nameMapping(freelancers);

//Array of possible occupations
const occupationMapping = (freelancers) => {
  const occupations = freelancers.map((freelancer) => freelancer.occupation);
  return occupations;
};
const mappedOccupations = occupationMapping(freelancers);

//Generate a random freelancer
function generateFreelancer(arr) {
  const tempArray = arr[Math.floor(Math.random() * arr.length)];
  return freelancers.push(tempArray);
}

generateFreelancer(freelancers);

// const randomName = generateFreelancer(mappedNames);
// generateFreelancer(mappedOccupation);
// generateFreelancer(mappedPrices);

let totalPrice = 0;
const body = document.querySelector("body");
const init = () => {
  const section = document.createElement("section");
  section.innerHTML;
  section.style.justifyContent = "space-around";
  for (let i = 0; i < freelancers.length; i++) {
    const element = freelancers[i];
    const div = document.createElement("div");
    const nameList = document.createElement("h3");
    nameList.innerText = element.name;
    const priceList = document.createElement("h3");
    priceList.innerText = element.price;
    totalPrice += element.price;
    const jobList = document.createElement("h3");
    jobList.innerText = element.occupation;
    div.append(nameList);
    div.append(priceList);
    div.append(jobList);
    section.append(div);
  }
  const container = document.getElementById("container");
  const totalHeader = document.createElement("h3");
  totalHeader.innerText = "Average Price";
  const total = document.createElement("h3");
  total.innerText = totalPrice / freelancers.length;
  container.append(totalHeader);
  container.append(total);

  body.append(section);
};

init();
setTimeout(function () {
  location.reload();
}, 5000);
