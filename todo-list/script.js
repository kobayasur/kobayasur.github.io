
// 1. ページを開いた時に、保存されているデータを読み込む
window.onload = function() {
    const savedTasks = localStorage.getItem('myTodo');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        render();
    }
};

let tasks = [];

function addTask() {
    const input = document.getElementById('taskInput');
    if (input.value.trim() !== "") {
        tasks.push(input.value);
        
        // 2. データをブラウザに保存する
        saveData();
        
        render();
        input.value = "";
    }
}

function saveData() {
    // 配列を文字列に変換して保存
    localStorage.setItem('myTodo', JSON.stringify(tasks));
}

function render() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        
        const btn = document.createElement('button');
        btn.textContent = "削除";
        btn.onclick = function() {
            tasks.splice(index, 1);
            saveData(); // 削除した後も保存
            render();
        };
        
        li.appendChild(btn);
        taskList.appendChild(li);
    });
}
