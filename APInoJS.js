const button =document.querySelector("#button");
const postlist = document.querySelector("#list")

// ボタンが押されたらAPP取得実行
button.addEventListener("click",async()=>{
    try {

        // 取得するはconst response = await fetch を書く
        // そういう文法
        // サーバーから返事をもらう
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        // もらった返事をpostsに入れてください
        const posts = await response.json();
        console.log(posts);

        // 前回表示した内容を消す
        // 何回押しても結果が重複しないように
        postlist.innerHTML = "";

        // forEach(element => 1件ずつ取り出す
        // postは1件ずつ取り出したもの
        // slice(0, 10) 0~9番目まで出して
        posts.slice(0,10).forEach(post => {
            const li = document.createElement("li");// <li></li>をつくる
            li.textContent = post.title;// <li>の中にタイトルを入れる
            postlist.appendChild(li);// つくった<li>を画面に入れる

        });

// エラー起きたらコンソールにエラー内容書いて
    } catch(error){
        console.log(error);
    }
});
