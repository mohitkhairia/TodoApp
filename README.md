# Todo Application Documentation

This documentation provides a comprehensive overview of a Todo application built using React and Node.js, leveraging MongoDB as the database. This application is designed to be a single-entity system, simplifying setup and execution by running entirely through Node.js. It offers full CRUD functionality, allowing users to create, read, update, and delete todo items. The interface is responsive, making it accessible on various devices with different screen sizes.

## Features

- **CRUD Operations**: Users can create, read, update, and delete todo items.
- **Responsive Design**: The UI adjusts for different screen sizes, ensuring usability on desktops, tablets, and mobile devices.
- **Single Command Setup**: The entire application can be setup and run using a single command after cloning the repository.
- **Real-Time Data Persistence**: Utilizes MongoDB for storing and managing tasks persistently.

## Prerequisites

Before you can run the application, ensure you have the following installed:
- Node.js (Download and install from [Node.js official website](https://nodejs.org/))
- MongoDB (Setup instructions available on [MongoDB's official documentation](https://docs.mongodb.com/manual/installation/))
- Git (Optional, for cloning the project from a repository)

## Installation

Follow these steps to get the application running:

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohitkhairia/TodoApp.git
   cd backEnd
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure MongoDB**
   
   Ensure MongoDB is running on your system. You might need to update the MongoDB connection string in the application's configuration file (`config.js` or `.env`) if it's not set to default (`mongodb://localhost:27017/todo`).

4. **Start the application**
   ```bash
   node index.js
   ```

   This will start the Node.js server and the application should be accessible via `http://localhost:3000` on a web browser.

## Usage

Once the application is running, you can perform the following actions:

- **Create a Todo Item**: Click on the "Add New Todo" button, enter the task details, and submit.
- **View Todo Items**: All current todo items are listed in the main view.
- **Update a Todo Item**: Click on the "Edit" button next to any todo item, modify the details in the form that appears, and submit the changes.
- **Delete a Todo Item**: Click on the "Delete" button next to any todo item to remove it from the list.

## Responsive Design

The application is built using responsive design principles. It automatically adjusts to fit the screen size of the device being used, ensuring a user-friendly interface across desktops, tablets, and mobile phones.

## Contributing

Contributions to improve the application are welcome. Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email contact@yourdomain.com or open an issue on the GitHub project page.

---

This documentation provides all the necessary details to install, run, and use the Todo application. For any additional questions or issues, refer to the support section of this document.
