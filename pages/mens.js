const changeImage = () => {
    let img_links = ["./images/first card/1.jpg", "./images/first card/2.png", "./images/first card/3.png",
        "./images/first card/4.png"]

    let imgCount = 0;
    const interval = setInterval(() => {

        if (imgCount >= img_links.length) {
            //stopping interval
            clearInterval(interval);
            imgCount = 0;
            document.getElementById("card_img").src = "./images/1.png"
        } else {
            document.getElementById("card_img").src = img_links[imgCount]
            imgCount += 1;
        }

    }, 1500);
    
}


