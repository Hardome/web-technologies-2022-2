import Todos from "../services/todos.js";
import location from "../services/location.js";
import loading from "../services/loading.js";
import Form from "../components/form.js";
import Auth from "../services/auth.js";

const init = async () => {
    const { ok: isLogged, user:id} = await Auth.me()
    const formEl = document.getElementById('todos')
    const totods = document.getElementById('todos-items')
    const {data} = await Auth.me()

    if (!isLogged) {
        return location.login()
    } else {
        loading.stop()
    }
    function clickh() {
       return alert('Test');
    }
    const updateListTodos = () =>{
        const allTodos = Todos.getAll(data.user.id);
        totods.innerHTML = ''

        allTodos.then((x)=>{
            x.data.map((el)=>{
                totods.innerHTML+= `<div id="${el.id}">${el.description}</div>`
/*                const div = document.getElementById(el.id);
                div.addEventListener("click", clickh, false);*/
            })
        })
    }

    new Form(formEl, {
        'description': (value) => {
            if (value.length < 3) {
                return 'Значение должно быть больше или равно 3'
            } else if (value.length >= 32) {
                return 'Значение должно быть меньше 32'
            }

            return false
        }
    }, (values) => {
        Todos.add(values)
        totods.innerHTML+= `<div>${values.description}</div>`
    })

    //Todos.add(values) //добавляет
    //Todos.updateById(21, {'completed': true}, {'description': 'NOSAD'}); //обновляет статус
    //Todos.deleteById(28); //удаляет по айдишнику
    //Todos.getById(22);
    //Todos.getAll();
    updateListTodos();

    // create add POST /todo { description: string }                Todos.add
    // get getbyId /todo/1 - 1 это id                               Todos.getById
    // getAll getall /todo  +++                                     Todos.getAll
    // update put /todo/1 - 1 это id { description: string } +++    Todos.updateById
    // delete delete /todo/1 - 1 это id                             Todos.deleteById
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init)
} else {
    init()
}
