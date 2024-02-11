window.addEventListener('load', () => {
    const task_form = document.querySelector('#task-form');
    const task_input = document.querySelector('#task-input');
    const task_list = document.querySelector('#task-list');

    task_form.addEventListener('submit', (e) => { //Nueva Tarea
        e.preventDefault();

        const tarea = task_input.value; //valor de input

        if (!tarea) {
            alert('ingrese una tarea'); //valida tarea vacia
            return;
        }

        //Creando Etiquetas HTML
        const div_task = document.createElement('div');
        div_task.classList.add('task');
        task_list.appendChild(div_task);
        
            const div_content = document.createElement('content');
            div_content.classList.add('content');
            div_task.appendChild(div_content);

                const input_text = document.createElement('input');
                input_text.type = 'text';
                input_text.classList.add('text');
                input_text.value = tarea;
                input_text.setAttribute('readonly', 'readonly');
                div_content.appendChild(input_text);

            const div_actions = document.createElement('div');
            div_actions.classList.add('actions');
            div_task.appendChild(div_actions);

                const button_edit = document.createElement('button')
                button_edit.classList.add('edit');
                button_edit.innerText = 'edit';
                div_actions.appendChild(button_edit);
                
                const button_delete = document.createElement('button')
                button_delete.classList.add('delete');
                button_delete.innerText = 'delete';
                div_actions.appendChild(button_delete);

        task_input.value = '';

        button_edit.addEventListener('click', (e) => {
            if (button_edit.innerText.toLowerCase() == 'edit') {
                button_edit.innerText = 'save';
                input_text.removeAttribute('readonly');
                input_text.focus();
            } else {
                button_edit.innerText = 'edit';
                input_text.setAttribute('readonly', 'readonly');
            };
        });
        
        button_delete.addEventListener('click', (e) => {
            task_list.removeChild(div_task);
        });



    });









})




