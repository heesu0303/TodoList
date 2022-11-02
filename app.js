const main = document.querySelector('.artcl_main');
const userTask = main.querySelector('header input');
const addBtn = main.querySelector('header button');
const listTodo = main.querySelector('.list_todo');

// 할일 추가 이벤트
addBtn.addEventListener('click', createListItem);

// 경고 메시지 생성
const error = document.createElement('strong');
error.textContent = ('입력해주세요.');
error.classList.add('txt_invalid');

// 다운로드 버튼 생성


// todo를 저장할 배열


// 초기 화면에서 저장되어 있는 데이터를 가지고 목록을 생성



function createListItem() {
    if (!userTask.value) {
        main.appendChild(error);
        error.classList.remove('hidden');
    } else {
        const li = document.createElement('li');
        li.textContent = userTask.value;
        listTodo.appendChild(li);

        if (main.contains(error)) {
            main.removeChild(error);
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        li.appendChild(deleteBtn);
    }
}

// 목룍 요소를 생성합니다.
function genItem(val, complete) {

}

// 로컬스토리지에 할일 목록을 저장하는 함수
function saveTasks() {

}

// 할일 정보를 업데이트하는 함수. 할일을 클릭했을 때, 할일을 제거했을 때
function buildTasks() {

}

// 다운로드 버튼의 노출을 판단하는 함수
function showDownload() {

}

// 경고 메시지 활성화 함수
function errorMsg(msg) {

}

function downloadFile() {
 
}