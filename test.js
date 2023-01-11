  class Form {
        constructor() {
          this.formData = {
              name: "",
              email: "",
              password: ""
          }
          this.errors = {
              name: "",
              email: "",
              password: ""
          }
          this.form = document.createElement("form");
          this.form.addEventListener("submit", this.handleSubmit.bind(this));
          this.render();
        }
      
        handleChange(event) {
          const { name, value } = event.target;
      
          this.formData = {
              ...this.formData,
              [name]: value
          };
        }
      
        validateForm() {
          let newErrors = { name: "", email: "", password: "" };
      
          if (!this.formData.name) {
            newErrors.name = "Name is required.";
          }
      
          if (!this.formData.email) {
            newErrors.email = "Email is required.";
          } else if (!/\S+@\S+\.\S+/.test(this.formData.email)) {
            newErrors.email = "Email is not valid.";
          }
      
          if (!this.formData.password) {
            newErrors.password = "Password is required.";
          } else if (this.formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters.";
          }
      
          this.errors = newErrors;
        }
      
        handleSubmit(event) {
          event.preventDefault();
          this.validateForm();
          if (!Object.values(this.errors).some(x=> x.length)) {
              console.log("Form submitted");
          }
        }
      
        createInput(label, name) {
          const div = document.createElement("div");
          const labelElem = document.createElement("label");
          labelElem.htmlFor = name;
          labelElem.innerHTML = label;
          div.appendChild(labelElem);
          const input = document.createElement("input");
          input.type = "text";
          input.id = name;
          input.name = name;
          input.addEventListener("change", this.handleChange.bind(this));
          input.value = this.formData[name];
          div.appendChild(input);
          const errorElem = document.createElement("p");
          errorElem.innerHTML = this.errors[name];
          div.appendChild(errorElem);
          return div;
        }
      
        render() {
          const nameInput = this.createInput("Name:", "name");
          const emailInput = this.createInput("Email:", "email");
          const passwordInput = this.createInput("Password:", "password");
          const submitBtn = document.createElement("button");
          submitBtn.type = "submit";
          submitBtn.innerHTML = "Submit";
          this.form.appendChild(passwordInput);
          this.form.appendChild(submitBtn);
          document.body.appendChild(this.form);
        }
      }
      
      const form = new Form();
      this.form.appendChild(nameInput);
      this.form.appendChild(emailInput);






      function validateForm() {
        let newErrors = { name: "", email: "", password: "" };
    
        if (!formData.name) {
          newErrors.name = "Name is required.";
        }
    
        if (!formData.email) {
          newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Email is not valid.";
        }
    
        if (!formData.password) {
          newErrors.password = "Password is required.";
        } else if (formData.password.length < 8) {
          newErrors.password = "Password must be at least 8 characters.";
        }
    
        errors = newErrors;
    }