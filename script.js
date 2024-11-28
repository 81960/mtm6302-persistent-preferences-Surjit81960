document.addEventListener("DOMContentLoaded", () => {
    const dynamicList = document.getElementById("dynamic-list");
    const themeSelect = document.getElementById("theme");
    const listStyleSelect = document.getElementById("list-style");
    const saveButton = document.getElementById("save-preferences");

    const themes = ["light", "dark", "blue"];
    const listStyles = ["list-group", "list-group-numbered", "custom-list"];

    for (let i = 1; i <= 5; i++) {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = `Item ${i}`;
        dynamicList.appendChild(listItem);
    }

    const savedTheme = localStorage.getItem("theme");
    const savedListStyle = localStorage.getItem("listStyle");

    if (savedTheme) {
        document.body.className = savedTheme;
        themeSelect.value = savedTheme;
    }

    if (savedListStyle) {
        dynamicList.className = savedListStyle;
        listStyleSelect.value = savedListStyle;
    }

    // Save preferences
    saveButton.addEventListener("click", () => {
        const selectedTheme = themeSelect.value;
        const selectedListStyle = listStyleSelect.value;

        document.body.className = selectedTheme;
        dynamicList.className = selectedListStyle;

        localStorage.setItem("theme", selectedTheme);
        localStorage.setItem("listStyle", selectedListStyle);
    });
});
