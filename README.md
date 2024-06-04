# brik-test-fs
**Instructions to Run the Vue.js Project:**

1. **Clone the Repository:**
   - Clone the repository containing the Vue.js project to your local machine using the command:
     ```
     git clone <repository_url>
     ```

2. **Navigate to Project Directory:**
   - Open a terminal and navigate to the directory of the cloned Vue.js project.

3. **Install Dependencies:**
   - Run the following command to install project dependencies:
     ```
     npm install
     ```

4. **Create Environment Variables File:**
   - Create a `.env` file in the root directory of the project.
   - Add the necessary environment variables to the `.env` file. For example:
     ```
     VUE_APP_API_BASE_URL=http://localhost:5000
     ```

5. **Start the Development Server:**
   - After installing dependencies, run the command to start the development server:
     ```
     npm run serve
     ```

6. **Access the Application:**
   - Open a web browser and navigate to the URL provided by the development server (usually `http://localhost:5173`).

**Flow Testing:**

1. **Product List Page:**
   - Visit the home page of the application.
   - Click on the "Products" link in the navigation to access the product list page.
   - Verify that the list of products is displayed correctly.
   - Check if pagination (if implemented) is working as expected.

2. **Product Detail Page:**
   - From the product list page, click on a product to view its details.
   - Verify that the product details are displayed correctly.
   - Check if the back button redirects back to the product list page.

3. **Create Product Page:**
   - Access the create product page by clicking on the appropriate link in the navigation.
   - Fill out the form with valid product information.
   - Submit the form and verify that the product is created successfully.
   - Check if the back button redirects back to the product list page.

4. **Edit Product Page:**
   - Access the edit product page by clicking on the edit button next to a product in the product list.
   - Update the product information in the form.
   - Submit the form and verify that the product is updated successfully.
   - Check if the back button redirects back to the product list page.

5. **Login and Registration:**
   - Access the login and registration pages from the navigation.
   - Test the user authentication flow by registering a new user and logging in with the newly created credentials.
   - Use the provided login information in the `README.md` file to log in and test the application.

6. **Error Handling:**
   - Test error handling by intentionally entering invalid data in the forms or performing actions that should fail (e.g., creating a product with incomplete information).
   - Verify that appropriate error messages are displayed to the user.

7. **Responsive Design:**
   - Test the responsiveness of the application by resizing the browser window or accessing it from different devices (e.g., mobile phones, tablets).
   - Verify that the layout adjusts appropriately to different screen sizes.

8. **Accessibility:**
   - Test the accessibility of the application using accessibility tools or browser extensions.
   - Ensure that all elements are appropriately labeled, and the application is navigable using keyboard-only controls.

By following these instructions and testing the application flow, you can ensure that the Vue.js application functions correctly and meets the specified requirements.
