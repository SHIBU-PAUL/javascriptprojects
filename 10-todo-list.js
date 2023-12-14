 const todoList = [{
  name:'make dinner', 
  dueDate:'2020-12-22'
}, 
{
  name:'wash dishes',
  dueDate:'2022-12-22'
}];

 randerTodoList();

 function randerTodoList(){

        let todoListHTML = '';

      for (let i = 0; i < todoList.length; i++) {
            const todoObject = todoList[i];
            const name = todoObject.name;
            const dueDate = todoObject.dueDate;

            /*generatinh HTML in the JS*/ 
            const html = `
             <div>${name}</div>
             <div>${dueDate}</div> 
             <button onclick ="
              todoList.splice(${i}, 1);
              randerTodoList();
            " class="delete-todo-button">Delete</button>
            `;
            todoListHTML += html;
      }
      

      document.querySelector('.js-todo-list').innerHTML = todoListHTML;

 }

 

 function addTodo(){
  const inputElement =document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dataInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dataInputElement.value;
 

  todoList.push({
    name: name,
    dueDate: dueDate
  });
  


  inputElement.value = '';

  randerTodoList();
 }