const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 890,
        isLiked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 160,
        isLiked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 678,
        isLiked: false
    }
]


const likeSection = document.getElementById("like-section")
const root = document.getElementById('root')

root.addEventListener('click', function(e) {
    let username = e.target.dataset.username
    if(username) {
        handleLikes(username)
    }
})

function handleLikes(username) {
    let userObj = posts.filter(p => p.username == username)[0]
    console.log(userObj)
    
    if(userObj.isLiked) {
        userObj.likes--;
    } else {
        userObj.likes++;
    }
    
    userObj.isLiked = !userObj.isLiked
    document.getElementById(`like-${userObj.username}`).classList.toggle("fa-solid")
    document.getElementById(`like-${userObj.username}`).classList.toggle("bg-red")
    document.getElementById(`num-likes-${userObj.username}`).textContent = `${userObj.likes} likes`
}

function renderPosts() {
    const html = posts.map(post => (`
            <div class="post">
                <div class="post-details container">
                    <img src="${post.avatar}" class="img-avatar">
                    <div>
                        <h4>${post.name}</h4>
                        <p>${post.location}</p>
                    </div>
                </div>
                <img src="${post.post}" class="img-post">
                <div class="container">
                    <div class="like-section" id="like-section">
                        <i class="fa-regular fa-heart like" data-username=${post.username} id="like-${post.username}"></i>
                        <i class="fa-regular fa-comment comment"></i>
                        <i class="fa-regular fa-paper-plane share"></i>
                    </div>
                    <h4 class="num-likes" id="num-likes-${post.username}">${post.likes} likes</h4>
                    <p><span class="user-handle">${post.username}</span> ${post.comment}</p>
                </div>
            </div>
    `)).join('')
    
    root.innerHTML = html
    console.log(html)
}

renderPosts()