# Restaurantmanagement# Restaurant Management System

Welcome to the **Restaurant Management System**, a comprehensive and dynamic web application designed for managing and showcasing a restaurant's menu. This project is built with modern web development practices, ensuring a responsive and interactive user experience.

## 📋 Overview

This project provides a platform to display restaurant menus, categories, and products in an organized and visually appealing way. It includes features such as sorting, liking products, and dynamic updates. You can check out the live demo of the project [here](https://orhanguezel.github.io/Restaurantmanagement/).
[Restaurant Management System Bildschirm](./img.png)

---

## 🌟 Features

### **1. Categories and Products**
- Display categories such as Pizza, Pasta, Salads, Desserts, Beverages, and Starters.
- Each category includes a set of products dynamically fetched from the data file.
- Clicking on a category directly shows all associated products.

### **2. Product Cards**
- Each product is displayed in a visually appealing card format.
- Cards include:
  - **Image** of the product.
  - **Name** and **Description** of the product.
  - **Price** details for different sizes.
  - **Preparation Time** (e.g., "20 mins").
  - **Rating System**: Dynamic star ratings based on user likes.
  - **Like Feature**: Users can like a product, updating the total like count and visual elements.

### **3. Sorting**
- Sort products by price or popularity through a dropdown menu.

### **4. Responsiveness**
- Fully responsive design, optimized for desktop and mobile devices.
- Categories and products adjust gracefully to different screen sizes.

### **5. Modern Styling**
- Consistent and clean UI/UX design, following modern web design principles.
- Utilizes reusable CSS styles for scalability.

---

## 🛠️ Technologies Used

### **Frontend**
- **HTML5**: Markup structure.
- **CSS3**: Styling and responsive design.
- **JavaScript (ES6)**: Dynamic interactions and DOM manipulations.

### **Development Tools**
- **Node.js**: Dependency management.
- **GitHub Pages**: Hosting and deployment.

---

## 📂 Project Structure

The project is organized in a modular structure for easy maintainability and scalability:

### **1. Main Files**
- **`index.html`**: The entry point of the application.
- **`app.js`**: Core JavaScript file to render components dynamically.

### **2. Components**
Modular JavaScript components are stored in the `components` folder:
- `navbar.js`: Handles the navigation bar.
- `menuComponent.js`: Dynamically renders categories and products.
- `home.js`: Displays the homepage content.
- `footer.js`: Renders the footer section.

### **3. Styles**
CSS files for styling are stored in the `styles` folder:
- `navbar.css`: Styling for the navigation bar.
- `menu.css`: Styling for the menu and product cards.
- `root.css`: Centralized CSS variables for consistent design.
- `layout.css`: General layout styling.
- `home.css`: Styling for the homepage.
- `footer.css`: Styling for the footer.

### **4. Data**
- `data.js`: Contains all category and product data in JSON format for dynamic rendering.

### **5. Assets**
- Images and other static files are stored in the `assets` folder.

---

## 🚀 How to Run the Project Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/orhanguezel/Restaurantmanagement.git
   cd Restaurantmanagement
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   Open `index.html` in your browser or use a live server extension.

4. **Explore the Project**
   Visit the live demo [here](https://orhanguezel.github.io/Restaurantmanagement/).

---

## 📖 Key Files

| File/Directory            | Description                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| `/index.html`              | Main HTML file and entry point of the app.                                 |
| `/app.js`                  | Core JavaScript file to initialize and render components.                  |
| `/components/`             | Contains modular JavaScript components.                                    |
| `/styles/`                 | Contains CSS files for various sections and components.                    |
| `/data/data.js`            | Contains structured data for categories and products.                      |
| `/assets/`                 | Static files like images for categories and products.                      |

---

## 🖥️ Live Demo

You can view the live version of this project at [Restaurant Management System Demo](https://orhanguezel.github.io/Restaurantmanagement/).

---

## 🎯 Future Enhancements

- **Admin Panel**: Add an admin panel for managing categories and products.
- **Search Functionality**: Allow users to search for products by name or keywords.
- **Cart System**: Implement a cart system to simulate ordering functionality.
- **User Authentication**: Add login and authentication for personalized features.

---

## 🤝 Contribution

Contributions are welcome! If you have suggestions or improvements, feel free to:
1. Fork the repository.
2. Make your changes.
3. Submit a pull request.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

### 📧 Contact

For any questions or feedback, feel free to contact me via [GitHub](https://github.com/orhanguezel).

Enjoy exploring the **Restaurant Management System**! 😊