const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: 'server.php',
      todoList: [],
      newTask: '',
    };
  },
  methods: {
    readList() {
      axios.get(this.apiUrl).then((response) =>{
        console.log(response.data);
        this.todoList = response.data;
      })
         .catch((error) =>{
         console.log(error);newTask
      })
         .finally((error) =>{
         console.log(error);
      })
    },

    addTask(){
      
      const data = new FormData();
      data.append("task", this.newTask);

      axios
          .post(this.apiUrl, data)
          .then((response) => {
          console.log(response);
           this.todoList = response.data;

          })
         .catch((error) => {
          console.log(error);
          })
    },
   deleteTask(index){
      
      const data = new FormData();
      data.append("deleteTask", index);

      axios
          .post(this.apiUrl, data)
          .then((response) => {
          console.log(response);
           this.todoList = response.data;

          })
         .catch((error) => {
          console.log(error);
          })
    },
toggleTaskStatus(index) {
        this.todoList[index].done = !this.todoList[index].done;

        const data = new FormData();
        data.append("updateTask", JSON.stringify(this.todoList[index]));

        axios
            .post(this.apiUrl, data)
            .then((response) => {
                console.log(response);
            })
  },
},
  mounted() {
   this.readList();
  },
}).mount("#app");
