## **📌 Caseware Assessment Project**  
The **Angular Product List Application** is a simple yet dynamic web application that displays a **list of products** and allows users to view **detailed information** about each product.  

### **🔹 Features:**  
✔ **Product List View** – Displays all products with **name, description, price, and image**.  
✔ **Product Detail View** – Shows **detailed information** for a selected product.  
✔ **Reusable Components** – `ProductCardComponent` for individual product cards.  
✔ **Routing & Navigation** – Seamless navigation between product list and product details.  
✔ **Service & Data Handling** – Uses `ProductService` to fetch product data.  
✔ **Modern UI** – Styled with **Bootstrap** for a clean and responsive look.  

---

## **📌 Prerequisites**  
Ensure you have the following installed before running the project:  

✅ **Node.js (LTS version)** – [Download Here](https://nodejs.org/)  
✅ **Angular CLI** – Install via:  
```bash
npm install -g @angular/cli
```
✅ **Git (if cloning from GitHub)** – [Download Here](https://git-scm.com/)  

---

## **📌 Clone the Repository & Run the Project**  
### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/sharanmurli/caseware.git
cd product-app
```

### **2️⃣ Install Dependencies**  
Run:  
```bash
npm install
```
This installs all required **Node modules**.

### **3️⃣ Start the Development Server**  
Run:  
```bash
ng serve
```
This starts a local server at:  
➡ **http://localhost:4200/**  

### **4️⃣ Open the Application in Your Browser**  
Go to **http://localhost:4200/products** to view the **Product List Page**.  

---

## **📌 Available Routes**  
| **Route** | **Description** |
|-----------|---------------|
| `/products` | Displays the **Product List** with names, descriptions, and prices. |
| `/products/:id` | Shows **detailed product information** (name, description, price, and image). |

