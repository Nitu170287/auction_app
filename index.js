//https://gauravgitacc.github.io/postAppData/auctionData.json

// let response = fetch(
//   "https://gauravgitacc.github.io/postAppData/auctionData.json"
// );

// //fetch return the promise object
// //that promise indicate status of network call

// response.then((serverResponse) => {
//   //serverResponse is the instance of class response

//   let data = serverResponse.json();

//   data.then((result) => {
//     console.log(result);
//   });

//   data.catch((error) => {
//     console.log("error");
//   });
// });

// response.catch((error) => {
//   console.log("something wrong");
// });

const cardsConatiner = document.getElementsByClassName("cards-container")[0];

function addDataOntoUi(resultsList) {
  console.log(resultsList);
  for (let i = 0; i < resultsList.length; i++) {
    let card = resultsList[i];

    let innerCard = `<div class="top">
                          <div class="status">
                              <b class="status-chip ${card.status.toLowerCase()}">${
      card.status
    }</b>
                              <span class="case-number">${
                                card.caseNumber
                              }</span>
                          </div>

                          <span class="date">${card.date}</span>

                      </div>

                      <div class="bottom">
                          <b class="from-location">${card.fromLocation}</b>
                          <span class="to-location">${card.toLocation}</span>
                      </div>
                      <span class="price"> ${card.fare}</span>`;

    let cardContainer = document.createElement("div");
    cardContainer.className = "cards";
    cardContainer.innerHTML = innerCard;
    cardContainer.addEventListener("click", () => {
      //alert("navigating to single aution page:" + card.caseNumber);
      window.location.href = "http://127.0.0.1:5500/auction.html";
    });
    cardsConatiner.append(cardContainer);
  }
}

async function fetchdata() {
  try {
    const data = await fetch(
      "https://gauravgitacc.github.io/postAppData/auctionData.json"
    );
    const result = await data.json();
    addDataOntoUi(result);
  } catch (error) {
    console.log(error);
    alert("some error occured");
  }
}
fetchdata();
