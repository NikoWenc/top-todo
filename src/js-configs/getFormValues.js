
export default function getFormValues() {

    const formData = [];

    document.querySelector("#todo-form").addEventListener("submit", (e) => {

      const data = new FormData(e.target);
    
      if (e) {
        formData.push({
            title: data.get('title'),
        })
      };
    });

    return formData;
    
}