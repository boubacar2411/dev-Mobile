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
            newItem.innerHTML = tache.value;
    
            $(newItem).on('swiperight', function () {
                $(this).toggleClass('done');
            });
    
            $(newItem).on('swipeleft', function () {
                $(this).remove();
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
};

