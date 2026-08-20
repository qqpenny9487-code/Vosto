// 1. 使用 querySelectorAll 抓取網頁中「所有」的 .modal-box
const modalBoxes = document.querySelectorAll('.modal-box');

// 2. 用 forEach 迴圈，一次處理每一個 .modal-box
modalBoxes.forEach(function(modalBox) {
  
  // 3. 在當前的 .modal-box 裡面，尋找它自己內部對應的 .modal-content
  const modalContent = modalBox.querySelector('.modal-content');
  const nextLeft = modalBox.querySelector('.next-left');
  const nextRight = modalBox.querySelector('.next-right');
  
  // 4. 如果這組彈窗裡確實有 content 元素，就幫它綁定點擊事件
  if (modalContent) {
    
    // 當點擊整個大外框時，跳轉至 #
    modalBox.addEventListener('click', function() {
      window.location.href = '#x';
    });
    
    // 當點擊內部的內容框時，阻止事件向外冒泡（不觸發跳轉）
    modalContent.addEventListener('click', function(event) {
      event.stopPropagation();
    });
    
    // 【新增】當點擊左箭頭時，阻止事件向外冒泡（不觸發關閉）
    if (nextLeft) {
      nextLeft.addEventListener('click', function(event) {
        event.stopPropagation();
        // 如果你之後要在這裡寫切換上一張的邏輯，程式碼寫在這邊
      });
    }

    // 【新增】當點擊右箭頭時，阻止事件向外冒泡（不觸發關閉）
    if (nextRight) {
      nextRight.addEventListener('click', function(event) {
        event.stopPropagation();
        // 如果你之後要在這裡寫切換下一張的邏輯，程式碼寫在這邊
      });
    }
  }
});