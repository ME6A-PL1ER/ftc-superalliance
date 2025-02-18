# FTC Robotics Scouting Web Application

This project is a web application designed for scouting FTC (FIRST Tech Challenge) robotics teams. It provides a user-friendly interface for logging in, registering, and filling out scouting forms, as well as comparing team statistics.

## Features

- **User Authentication**: Simple username and password login with a user creation page.
- **Scouting Forms**: 
  - A page to fill out a pit form for team data entry.
  - A page to fill out a reconnaissance form for match analysis.
- **Form Configuration**: 
  - A drag-and-drop interface to configure the pit and recon forms.
  - A catalog of elements on the left and a preview area on the right.
  - Editable elements to customize titles and other properties.
- **Team Comparison**: 
  - View two teams side by side.
  - Select teams from a database to compare their statistics.
  - Switch displayed teams easily.

## Technology Stack

- **Frontend**: React with TypeScript
- **Backend**: SQLite for data storage
- **Styling**: CSS for styling the application

## Setup Instructions

1. **Clone the Repository**:
   ```
   git clone https://github.com/yourusername/ftc-robotics-scouting.git
   cd ftc-robotics-scouting
   ```

2. **Install Dependencies**:
   ```
   npm install
   ```

3. **Run the Application**:
   ```
   npm start
   ```

4. **Access the Application**: Open your browser and navigate to `http://localhost:3000`.

## Usage Guidelines

- **Login**: Use the login page to authenticate yourself. If you are a new user, navigate to the registration page to create an account.
- **Filling Forms**: After logging in, you can fill out the pit and recon forms as needed.
- **Configuring Forms**: Use the form editor to customize the forms according to your scouting needs.
- **Comparing Teams**: Access the team comparison page to analyze and compare the statistics of different teams.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.