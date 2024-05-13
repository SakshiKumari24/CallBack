async function fetchDataFromMultipleEndpoints() {
    try {
      const responseTodo = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const todoData = await responseTodo.json();
      const responsePost = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const postData = await responsePost.json();
      const combinedData = {
        todo: todoData,
        post: postData
      };
      console.log('Combined Data:', combinedData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  fetchDataFromMultipleEndpoints();
  