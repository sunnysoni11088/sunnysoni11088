document.addEventListener("DOMContentLoaded", function () {
    const middleSlide = document.querySelector(".middleSlide");
    const backSlide = document.querySelector(".backSlide");
    const playButton = document.querySelector(".playVideo");
    const closeVideoButton = document.querySelector(".closeVideo");
    const videoPlayer = document.querySelector(".videoPlayer");
    const middleSlideImage = middleSlide.querySelector("img");
    const middleSlideImageUrl = middleSlideImage.src;

    backSlide.style.backgroundImage = "url('" + middleSlideImageUrl + "')";

    function updateSlides(slideSelector) {
        const width = document.body.clientWidth;
        if (width <= 767) return;
        const slide = document.querySelector(slideSelector);
        const slideImage = slide.querySelector(".imageStyle");

        const tempSrc = middleSlideImage.src;
        middleSlideImage.src = slideImage.src;
        slideImage.src = tempSrc;
        backSlide.style.backgroundImage =
            "url('" + middleSlideImage.src + "')";

    }

    function onEnter(selector) {
        updateSlides(selector);
    }

    function handleResize() {
        let screenWidth = document.body.clientWidth;
        if (screenWidth >= 767) {
            console.log("screenWidth: ", screenWidth);
            const slideSelectors = [
                ".firstSlide",
                ".secondSlide",
                ".thirdSlide",
                ".fourthSlide",
            ];

            slideSelectors.forEach((selector) => {
                const slide = document.querySelector(selector);

                if (!slide.hasEventListener) {
                    slide.addEventListener("mouseenter", () => {
                        onEnter(selector);
                    });
                    slide.hasEventListener = true;
                }
            });

            closeVideoButton?.addEventListener("click", function () {
                backSlide.style.display = "flex";
                videoPlayer.style.display = "none";
            });
            closeVideoButton?.removeEventListener("click", function () {
                backSlide.style.display = "flex";
                videoPlayer.style.display = "none";
            });

            playButton.addEventListener("click", function () {
                console.log("click");
                const middleSlideImageSrc = new URL(middleSlideImage.src)
                    .pathname;

                console.log("middleSlideImageSrc: ", middleSlideImageSrc);
                let videoSource = "dots-boxes.mp4";

                if (middleSlideImageSrc.endsWith("ar-sports.webp")) {
                    videoSource = "ar-sports.mp4";
                } else if (middleSlideImageSrc.endsWith("bal-hanuman.webp")) {
                    videoSource = "bal-hanuman.mp4";
                } else if (middleSlideImageSrc.endsWith("forbidden-islands.webp")) {
                    videoSource = "forbidden-islands.mp4";
                } else if (middleSlideImageSrc.endsWith("rofl-characters.webp")) {
                    videoSource = "rofl-characters.mp4";
                }

                const newVideoElement = document.createElement("video");
                newVideoElement.controls = true;
                const newSource = document.createElement("source");
                newSource.src = videoSource;
                newVideoElement.className = "videoStart";
                newSource.type = "video/mp4";

                newVideoElement.appendChild(newSource);

                const oldVideoElement = videoPlayer.querySelector(".videoStart");
                videoPlayer.removeChild(oldVideoElement);
                videoPlayer.appendChild(newVideoElement);

                videoPlayer.style.display = "flex";
                backSlide.style.display = "none";
                updateSlides(".middleSlide", videoSource);
            });

            playButton.removeEventListener("click", function () {
                console.log("click");
                const middleSlideImageSrc = new URL(middleSlideImage.src)
                    .pathname;

                console.log("middleSlideImageSrc: ", middleSlideImageSrc);
                let videoSource = "5.mp4";

                if (middleSlideImageSrc.endsWith("bal-hanuman.webp")) {
                    videoSource = "bal-hanuman.mp4";
                } else if (middleSlideImageSrc.endsWith("forbidden-islands.webp")) {
                    videoSource = "forbidden-islands.mp4";
                } else if (middleSlideImageSrc.endsWith("rofl-characters.webp")) {
                    videoSource = "rofl-characters.mp4";
                } else if (middleSlideImageSrc.endsWith("demo-one.png")) {
                    videoSource = "5.mp4";
                }

                const newVideoElement = document.createElement("video");
                newVideoElement.controls = true;
                const newSource = document.createElement("source");
                newSource.src = videoSource;
                newVideoElement.className = "videoStart";
                newSource.type = "video/mp4";

                newVideoElement.appendChild(newSource);

                const oldVideoElement = videoPlayer.querySelector(".videoStart");
                videoPlayer.removeChild(oldVideoElement);
                videoPlayer.appendChild(newVideoElement);

                videoPlayer.style.display = "flex";
                backSlide.style.display = "none";
                updateSlides(".middleSlide", videoSource);
            });
        } else if (screenWidth <= 767) {
            console.log("below", screenWidth);

            const slideSelectors = [
                ".firstSlide",
                ".secondSlide",
                ".thirdSlide",
                ".fourthSlide",
            ];

            closeVideoButton.removeEventListener("click", function () {
                backSlide.style.display = "flex";
                videoPlayer.style.display = "none";
            });

            const Player = [
                "hanuman",
                "forbidden",
                "blockgame",
                "Rofel",
                "minicraft",
            ];

            Player.forEach((selector) => {
                const slide = document.getElementById(selector);
                slide.addEventListener("click", function () {
                    console.log(selector);
                    let videos = "bal-hanuman.mp4";

                    if (selector === "forbidden") {
                        videos = "5.mp4";
                    } else if (selector === "blockgame") {
                        videos = "bal-hanuman.mp4";
                    } else if (selector === "Rofel") {
                        videos = "rofl.mp4";
                    } else if (selector === "minicraft") {
                        videos = "bal-hanuman.mp4";
                    }

                    const newVideoElement = document.createElement("video");
                    newVideoElement.controls = true;
                    const newSource = document.createElement("source");
                    newSource.src = videos;
                    newVideoElement.className = "videoStart";
                    newSource.type = "video/mp4";

                    newVideoElement.appendChild(newSource);
                    newVideoElement.play();
                    const oldVideoElement =
                        videoPlayer.querySelector(".videoStart");
                    videoPlayer.removeChild(oldVideoElement);
                    videoPlayer.appendChild(newVideoElement);

                    videoPlayer.style.display = "flex";
                    backSlide.style.display = "none";
                });
            });

            closeVideoButton?.addEventListener("click", function () {
                backSlide.style.display = "flex";
                videoPlayer.style.display = "none";
            });
        }
    }

    handleResize();
    let resizeTimeout;
    window.addEventListener("resize", function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () {
            handleResize();
        }, 300);
    });
});
