// -----------nav section --------------
const loadCategories = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=>res.json())
    .then(data=>{
        displayCategories(data.categories);

    })

}
function displayCategories(categories){
    const categoryContainer = document.getElementById("category-container");
    for(let category of categories){
        const categoryDiv = document.createElement("div");
        
        categoryDiv.innerHTML=`
        <button class="btn btn-sm hover:bg-[#f40f28] hover:text-white">${category.category}</button>
        `;
        categoryContainer.appendChild(categoryDiv);
    };

    
}

loadCategories()



//-------- video section-------------
const loadVideos = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(response=>response.json())
    .then(data=>{
        displayVideos(data.videos)
    })
}

const displayVideos = (videos) =>{
    const videoContainer = document.getElementById("video-container");
    
    videos.forEach(video => {
        console.log(video)

        const videoCard = document.createElement("div");

        videoCard.innerHTML=`
        <div class="card bg-base-100 w-auto h-auto shadow-sm">
        <figure class="relative">
        <img class="w-full h-40" object-cover src="${video.thumbnail}" alt="Thumbnail" />
        <span class="absolute right-2 bottom-2 text-white bg-black px-2 py-1 rounded-lg text-xs">${video.title}</span>
        </figure>
        <div class="flex gap-4 py-5">
            <div class="profile">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                      <img src="${video.authors[0].profile_picture}" />
                    </div>
                  </div>
            </div>
            <div class="details">
                <h3 class="font-semibold text-lg ">${video.title}</h3>
                <div class="flex items-center gap-2 my-1">
                    <p class="text-gray-500 text-sm">${video.authors[0].profile_name}</p>
                    <img class="w-4 h-4" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">
                </div>
                <p class="text-gray-500 text-sm">${video.others.views} views</p>
                
            </div>
        </div>
        </div>
        `;

        videoContainer.appendChild(videoCard);
        
    });
};

loadVideos()


// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }