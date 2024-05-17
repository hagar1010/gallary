/*-----------------------------------gallery data-------------------------------------------*/
const gallery = [
    {
        name: "all",
        images: ["images/29.jpg", "images/25.jpg", "images/27.jpg", "images/28.jpg", "images/15.jpg", "images/19.jpg", "images/24.jpg", "images/26.jpg", "images/32.jpg", "images/31.jpg"]
    },
    {
        name: "awesome",
        images: ["images/29.jpg", "images/32.jpg", "images/31.jpg",]
    },
    {
        name: "responsive",
        images: ["images/27.jpg", "images/26.jpg", "images/25.jpg"]
    },
    {
        name: "animated",
        images: ["images/24.jpg", "images/15.jpg", "images/28.jpg", "images/19.jpg"]
    }
]






















/*-----------------------------------create defualt-------------------------------------------*/
//get all
let all = document.getElementById("all")

//create
for (let i = 0; i < gallery[0].images.length; i++) {
    let container = document.createElement("div")
    let layer = document.createElement("div")
    let img = document.createElement("img")
    let icon = document.createElement("i")
    container.classList.add("container")

    layer.classList.add("layer")
    icon.classList.add("fa")
    icon.classList.add("fa-magnifying-glass")

    all.appendChild(container)
    container.appendChild(layer)
    layer.appendChild(icon)
    container.appendChild(img)

    img.src = gallery[0].images[i]
}













/*-----------------------------------click event  &  modal-------------------------------------------*/
//get modal elements
let modal = document.querySelector(".modal")
let modal_pic = document.querySelector(".modal-pic")
let close_btn = document.querySelector(".close-btn")
let next_btn = document.getElementById("next")
let prev_btn = document.getElementById("prev")

let all_img = gallery[0].images

//click events:-

//close modal    (error appear when close modal for first time)
close_btn.addEventListener('click', () => {
    modal.style.display = "none"
})


// (click on every img => open modal)
let divs = document.querySelectorAll("#all .container")

for (let i = 0; i < all_img.length; i++) {
    //open modal
    divs[i].addEventListener('click', () => {
        modal_pic.src = all_img[i]

        let moving_pointer = i
        //next button
        next_btn.addEventListener('click', () => {
            if (moving_pointer == all_img.length - 1) {
                moving_pointer = -1
            }
            modal_pic.src = all_img[++moving_pointer]//
        })
        //prev button
        prev_btn.addEventListener('click', () => {
            if (moving_pointer == 0) {
                moving_pointer = all_img.length
            }
            modal_pic.src = all_img[--moving_pointer]//
        })

        modal.style.display = "block"
    })
}













/*------------------------------------------------change category---------------------------------------------------------- */
let btns = document.querySelectorAll(".bar button")
let contents = document.querySelectorAll(".row")
let down = document.querySelector(".down")

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let current_btn = btn
        let current_row = document.getElementById(current_btn.dataset.mark)

        //display down
        if (current_btn.dataset.mark == "all") {
            down.style.display = "none"
        } else {
            down.style.display = "grid"
        }


        //bar btns (category)
        btns.forEach(btn => {
            btn.classList.remove("active")
            current_btn.classList.add("active")
        })
        //change content
        contents.forEach(content => {
            content.classList.remove("show")
            current_row.classList.add("show")
        })
        // console.log(current_row)   //current row(div) element 



        for (let i = 0; i < gallery.length; i++) {
            if (gallery[i].name == current_btn.dataset.mark) {
                var current_images = gallery[i].images//var
                break;
            }
        }
        // console.log(current_images)    //array of img in current category




        //شرط لعدم تكرار الانشاء مع كل ضغطه على زراير البار
        //all ==> false   (already created)
        let number_of_children = current_row.childElementCount

        if (number_of_children != current_images.length) {
            //create containers = number of images in every array in gallery
            for (let i = 0; i < current_images.length; i++) {
                let container = document.createElement("div")
                let img = document.createElement("img")

                container.classList.add("container")

                current_row.appendChild(container)//every
                container.appendChild(img)

                img.src = current_images[i]
            }
        }

    })
})

