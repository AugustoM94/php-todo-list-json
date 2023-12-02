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
         console.log(error);
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
    }
  },
  mounted() {
   this.readList();
  },
}).mount("#app");
