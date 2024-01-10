window.onload = function () {
    const addButton = document.getElementById('addButton');
    const resetButton = document.getElementById('resetButton');
    const taskList = document.getElementById('taskList');
    const completedTaskList = document.getElementById('completedTaskList');

    addButton.onclick = ajouterTache;
    resetButton.onclick = reinitialiserTache;


    function ajouterTache() {
        const tache = document.getElementById('tache');

        if (tache.value) {
            let newItem = document.createElement('li');
            newItem.style.padding = '3px';
    newItem.style.marginBottom = '3px'; 
    newItem.style.border = '1px solid #ccc';
    
            newItem.innerHTML = tache.value;

            $(newItem).on('swiperight', function () {
                $(this).toggleClass('done');
                moveTaskToList(this);
            });

            $(newItem).on('swipeleft', function () {
                if ($(this).hasClass('done')) {
                    completedTaskList.removeChild(this);
                } else {
                    taskList.removeChild(this);
                }
            });

            taskList.appendChild(newItem);
            tache.value = '';
        }

        tache.focus();
    }

    function reinitialiserTache() {
        taskList.innerHTML = '';
        completedTaskList.innerHTML = '';
    }



    function moveTaskToList(task) {
        if ($(task).hasClass('done')) {
            completedTaskList.appendChild(task);
        } else {
            taskList.appendChild(task);
        }
    }
};

