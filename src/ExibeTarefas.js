import axios from "axios";

function ExibeTarefas({ tarefas, setTarefas }) {
  const remove = (id) => {
    return axios.delete(`http://localhost:3001/tarefas/${id}`).then(() => {
      setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    });
  };

  return (
    <div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.nome_tarefa}
            <i class="bi bi-pencil m-2"></i>
            <i class="bi bi-trash m-2" onClick={() => remove(tarefa.id)}></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExibeTarefas;
