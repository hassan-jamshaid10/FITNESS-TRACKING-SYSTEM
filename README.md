# Fitness Tracking Database

## Overview
This project provides a front end for a **Fitness Tracking Database** implemented in **MySQL**. The database is designed to help users track their fitness activities, nutrition, workout plans, and goals effectively. It includes various tables that store user data, activity logs, exercise details, nutrition information, and more.

## Database Structure
The database consists of the following tables:

- **User**: Stores user information.
  - Fields: `UserID`, `Username`, `Email`, `Age`, `Gender`, `Height`, `Weight`, `SubscriptionStatus`

- **Activity**: Logs user activities.
  - Fields: `ActivityID`, `UserID`, `ActivityType`, `Duration`, `Intensity`, `CaloriesBurned`

- **Exercise**: Contains details about different exercises.
  - Fields: `ExerciseID`, `ExerciseName`, `Description`, `EquipmentNeeded`, `DifficultyLevel`

- **WorkoutPlan**: Manages user workout plans.
  - Fields: `PlanID`, `UserID`, `PlanName`, `D_Description`, `Duration`, `IntensityLevel`

- **Nutrition**: Tracks user nutrition intake.
  - Fields: `NutritionID`, `UserID`, `FoodName`, `Calories`, `Protein`, `Category`

- **Goal**: Sets user fitness goals.
  - Fields: `GoalID`, `UserID`, `GoalType`, `TargetValue`, `Deadline`

- **Assistant**: Provides information about fitness assistants or trainers.
  - Fields: `AssistantID`, `Name`, `Description`, `Specialization`, `ContactInfo`

## Features
- **User Registration and Management**: Create and manage user profiles.
- **Activity Tracking**: Log activities and track calories burned.
- **Exercise Database**: Explore various exercises and their details.
- **Workout Plan Management**: Create and modify personalized workout plans.
- **Nutrition Tracking**: Log food intake and monitor nutritional values.
- **Goal Setting**: Define and track fitness goals.

## Getting Started
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/fitness-tracking-database.git
    cd fitness-tracking-database
    ```

2. **Set Up MySQL**: Ensure you have a MySQL server running and create a database for this project.

3. **Import Database Schema**: Use the provided SQL scripts to create the necessary tables in your MySQL database.

4. **Run the Application**: Start the front end application and connect it to your MySQL database.


## Contact
For questions or suggestions, feel free to reach out to me at:
- Email: hjamshaid81@gmail.com
