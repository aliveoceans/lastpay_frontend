# LastPay Mock Project (Java Spring Boot)

## Setup Instructions
1. **Backend Setup**:
   - Ensure Java 17+ and Maven are installed.
   - Navigate to `backend/`.
   - Run `mvn clean install` to build the project.
   - Run `mvn spring-boot:run` to start the server (runs on `http://localhost:8080`).
   - Access H2 console at `http://localhost:8080/h2-console` (JDBC URL: `jdbc:h2:mem:testdb`, user: `sa`, password: `password`).

2. **Frontend Setup**:
   - Ensure Node.js is installed.
   - Navigate to `frontend/`.
   - Run `npm install` to install dependencies.
   - Run `npm start` to start the React app (runs on `http://localhost:5173`).

3. **Database**:
   - H2 in-memory database is used; data resets on server restart.

4. **Demo**:
   - Open `http://localhost:5173` in a browser.
   - Enter customer name and car model in the form.
   - Submit to see the summary page with mock data from dealer, insurance, and bank APIs.
   - Check `demo-video.mp4` for a walkthrough (placeholder).

5. **Manual Zip Creation**:
   - Create a folder `lastpay-mock-project-java`.
   - Copy the `backend` and `frontend` folders into it.
   - Add this `README.md` file.
   - Create a placeholder `demo-video.mp4` or record a short video demo.
   - Zip the folder using WinRAR or Windows (right-click > Send to > Compressed folder).

## Notes
- The backend uses Java Spring Boot with H2 in-memory database.
- Mock APIs simulate dealer, insurance, and bank responses.
- Data is stored in H2 during runtime.
- The frontend uses React with Tailwind CSS for a responsive UI.
- Code is modular and follows best practices.
- CORS is enabled for the frontend origin (`http://localhost:5173`).

## GitHub
- Repository: [Link to GitHub repo] (to be shared upon submission).