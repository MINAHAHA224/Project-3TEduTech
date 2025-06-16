### Prerequisites
Before you begin, ensure you have the following installed:
- [Git](https.git-scm.com/)
- [Node.js](https.nodejs.org/) (which includes npm)
- [SQL Server](https.microsoft.com/en-us/sql-server/sql-server-downloads) and a management tool like [SQL Server Management Studio (SSMS)](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms)
- [IntelliJ IDEA](https://www.jetbrains.com/idea/download/)

### 🚀 Getting Started
Follow these steps to set up and run the project locally.
#### 1. Clone the Repository
First, clone the project repository to your local machine:
``` bash
git clone <your-repository-url>
cd <your-project-directory>
```
#### 2. Database Setup
Next, set up the database using the provided SQL script.
1. Open SQL Server Management Studio (or your preferred SQL Server client).
2. Connect to your database server.
3. Open the file located in the root of the project. `DatabaseScript.sql`
4. Execute the script to create the necessary database and tables.

#### 3. Backend Setup
Now, let's get the backend server running.
1. Open the entire project folder in IntelliJ IDEA.
2. Open the integrated terminal in IntelliJ IDEA (`View` > `Tool Windows` > `Terminal`).
3. Navigate to the backend directory:
``` bash
    cd 3TEduTech-BE
```
1. Install the required dependencies:
``` bash
    npm install
```
1. Start the backend development server:
``` bash
    npm run dev
```
The backend should now be running.
#### 4. Frontend Setup
Finally, let's set up and run the frontend application.
1. Open a new terminal tab or window.
2. Navigate to the frontend directory:
``` bash
    cd FE
```
1. Install the required dependencies:
``` bash
    npm install
```
1. Start the frontend development server:
``` bash
    npm run dev
```
Your project should now be fully running, with the frontend communicating with the backend. You can access the application in your web browser at the address provided in the terminal

### 🎥 Video Demos
Check out these video demonstrations for a closer look at the project's features .

- **Full Application Tour:**
    - [Link to Full Demo Video - _Please add your link here_

