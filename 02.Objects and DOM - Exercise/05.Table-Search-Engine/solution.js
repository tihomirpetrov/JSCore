function solve() {
    let allInfo = document.querySelector("tbody").children;
    let searchBtn = document.querySelector("#searchBtn");
    searchBtn.addEventListener("click", () => {

        for (let i = 0; i < allInfo.length; i++) {
            let row = allInfo[i];
            row.classList.remove("select");
        }
            let searchField = document.querySelector("#searchField");
            let searchText = searchField.value.toLowerCase();
            for (let i = 0; i < allInfo.length; i++) {
                let row = allInfo[i];
                let cellsInRow = row.children;
                for (let j = 0; j < cellsInRow.length; j++) {
                    let textCell = cellsInRow[j].textContent.toLowerCase();
                    if (textCell.includes(searchText) && searchText.length > 0 ){
                        row.classList.add("select");
                    }
                }
                searchField.value = "";
            }
        }
    )
}
