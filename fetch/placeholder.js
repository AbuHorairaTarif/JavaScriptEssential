const resultShow = document.getElementById('result-show');

async function postData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
        data.forEach(post => {
            const card = document.createElement('div');
            card.innerHTML =
                `
                <h2 style="color:green;">${post.title}</h2>
                <p>${post.body}</p>
                `;
            resultShow.appendChild(card);
        });
    }
    catch {

    }
}

postData();