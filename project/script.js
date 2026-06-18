const showBonus = document.getElementById("item0-3");
const hideBonus = document.getElementById("item0-4");

const bonusItems = document.querySelectorAll(".bonus");

function bonusVisibility() {
    if (showBonus.checked) {
        bonusItems.forEach(item => {
            item.classList.remove("hidden");
        });
    }
    else {
        bonusItems.forEach(item => {
            item.classList.add("hidden");
        })
    }
}

showBonus.addEventListener("change", bonusVisibility);
hideBonus.addEventListener("change", bonusVisibility);

const mercyRoute = document.getElementById("item0-1");
const noMercyRoute = document.getElementById("item0-2");

const mercyItems = document.querySelectorAll(".mercy");
const noMercyItems = document.querySelectorAll(".no-mercy");

function changeRoute() {
    if (mercyRoute.checked) {
        mercyItems.forEach(item => {
            item.classList.remove("hidden");
        })
        noMercyItems.forEach(item => {
            item.classList.add("hidden");
        })
    }
    else {
        noMercyItems.forEach(item => {
            item.classList.remove("hidden");
        })
        mercyItems.forEach(item => {
            item.classList.add("hidden");
        })
    }
}

mercyRoute.addEventListener("change", changeRoute);
noMercyRoute.addEventListener("change", changeRoute);

const proceed = document.getElementById("item2-30");
const doNotProceed = document.getElementById("item2-31");

const weirdItems = document.querySelectorAll(".snowgrave");
const notWeirdItems = document.querySelectorAll(".not-weird");

function getWeird() {
    if (proceed.checked) {
        weirdItems.forEach(item => {
            item.classList.remove("hidden");
        })
        notWeirdItems.forEach(item => {
            item.classList.add("hidden");
        })
    }
    else {
        notWeirdItems.forEach(item => {
            item.classList.remove("hidden");
        })
        weirdItems.forEach(item => {
            item.classList.add("hidden");
        })
    }
}

proceed.addEventListener("change", getWeird);
doNotProceed.addEventListener("change", getWeird);

