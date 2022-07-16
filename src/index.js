import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//　未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li タグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(dov)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了知るとに追加する要素
    const addTarget = completeButton.parentNode;
    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;
    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    //buttonタグ生成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(div)を完了知るとから削除
      const deleteTarget = backbutton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      //テキスト取得
      const text = backbutton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);
    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(dov)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
