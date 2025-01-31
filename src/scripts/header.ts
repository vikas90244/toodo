const dropdownMenu = document.getElementById("dropdownMenu")!;
const profileImgElement = document.getElementById("profile-img");

function toggleDropdown(event: MouseEvent) {
    console.log("toggleDropdown being called ")
    event.stopPropagation();
    dropdownMenu.classList.toggle("active");
    console.log("executed some logic ")
    if (dropdownMenu.classList.contains("active")) {
        console.log(dropdownMenu.classList);
        document.addEventListener("click", closeDropdown);
    } else {
        document.removeEventListener("click", closeDropdown);
    }
}

function closeDropdown(event: MouseEvent) {
    console.log("close dropdown being called ")
    const dropdownMenu = document.querySelector(".dropdown-menu") as HTMLElement;   
    if (!dropdownMenu.contains(event.target as Node)) {
        dropdownMenu.classList.remove("active");
        document.removeEventListener("click", closeDropdown);
    }
}

profileImgElement?.addEventListener("click", toggleDropdown);
