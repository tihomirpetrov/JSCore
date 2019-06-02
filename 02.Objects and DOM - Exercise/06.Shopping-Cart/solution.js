function solve() {

    let productsName = document.getElementsByClassName("product-title");
    let textArea = document.getElementsByTagName("textarea")[0];
    textArea.disabled = false;
    let productsPrice = document.getElementsByClassName("product-line-price");
    let addBread = document.getElementsByClassName("add-product")[0];
    let addMilk = document.getElementsByClassName("add-product")[1];
    let addTomatoes = document.getElementsByClassName("add-product")[2];
    let checkout = document.getElementsByClassName("checkout")[0];
    let bread = productsName[0].textContent;
    let milk = productsName[1].textContent;
    let tomatoes = productsName[2].textContent;
    let totalPrice = 0;
    let list = [];

    let breadPrice = productsPrice[0].textContent;
    let milkPrice = productsPrice[1].textContent;
    let tomatoesPrice = productsPrice[2].textContent;

    addBread.addEventListener("click", () => {

        textArea.value += `Added ${bread} for ${breadPrice} to the cart.\n`;
        totalPrice += Number(breadPrice);

        if (!list.includes(bread)) {
            list.push(bread);
        }
    });
    addMilk.addEventListener("click", () => {

        textArea.value += `Added ${milk} for ${milkPrice} to the cart.\n`;
        totalPrice += Number(milkPrice);
        if (!list.includes(milk)) {
            list.push(milk);
        }
    });
    addTomatoes.addEventListener("click", () => {

        textArea.value += `Added ${tomatoes} for ${tomatoesPrice} to the cart.\n`;
        totalPrice += Number(tomatoesPrice);
        if (!list.includes(tomatoes)) {
            list.push(tomatoes);
        }
    });

    checkout.addEventListener("click", ()=>{
        textArea.value += `You bought ${list.join(", ")} for ${totalPrice.toFixed(2)}.`;
        addBread.disabled = true;
        addMilk.disabled = true;
        addTomatoes.disabled = true;
        checkout.disabled = true;
    })
}
