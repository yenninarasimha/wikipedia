let searchInputE1 = document.getElementById("searchInput");
let searchResultsE1 = document.getElementById("searchResults");
let spinnerE1 = document.getElementById("spinner");


function createAndAppendSearchResult(result) {
    let {
        title,
        link,
        description
    } = result;
    let resultsItemE1 = document.createElement("div");
    resultsItemE1.classList.add("result-item");

    searchResultsE1.appendChild(resultsItemE1);

    let resultTitleE1 = document.createElement("a");
    resultTitleE1.classList.add("result-title");
    resultTitleE1.textContent = title;
    resultTitleE1.href = link;
    resultTitleE1.target = "_blank";
    resultsItemE1.appendChild(resultTitleE1);

    let titleBreakE1 = document.createElement("br");
    resultsItemE1.appendChild(titleBreakE1);

    let urlE1 = document.createElement("a");
    urlE1.classList.add("result-url");
    urlE1.href = link;
    urlE1.target = "_blank";
    urlE1.textContent = link;
    resultsItemE1.appendChild(urlE1);

    let BreakE1 = document.createElement("br");
    resultsItemE1.appendChild(BreakE1);

    let discriptionE1 = document.createElement("p");
    discriptionE1.classList.add("link-description");
    discriptionE1.textContent = description;
    resultsItemE1.appendChild(discriptionE1);
}

function displayResults(searchResults) {
    spinnerE1.classList.toggle("d-none");
    for (let result of searchResults) {
        createAndAppendSearchResult(result);
    }

}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        spinnerE1.classList.toggle("d-none");
        searchResultsE1.textContent = "";
        let searchInput = searchInputE1.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}

searchInputE1.addEventListener("keydown", searchWikipedia);