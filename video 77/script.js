function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    if (views < 100000) {
        let viewstr = views / 1000 + k;
    }
    else if (views > 100000) {
        let viewstr = views / 1000000 + m;
    }
    else {
        viewstr = views / 1000 + m;
    }

    let html = ` <div class="card">
    <div class="image"><img
            src="${thumbnail}"
            alt="">
            <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewstr} views . ${monthsOld} months ago</p>
    </div>
</div>`
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

