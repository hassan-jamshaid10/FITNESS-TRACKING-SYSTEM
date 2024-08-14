import React, { useState, useMemo } from 'react';

const tables = {
  User: ['UserID', 'Username', 'Email', 'Age', 'Gender', 'Height', 'Weight', 'SubscriptionStatus'],
  Activity: ['ActivityID', 'UserID', 'ActivityType', 'Duration', 'Intensity', 'CaloriesBurned'],
  Exercise: ['ExerciseID', 'ExerciseName', 'Description', 'EquipmentNeeded', 'DifficultyLevel'],
  WorkoutPlan: ['PlanID', 'UserID', 'PlanName', 'D_Description', 'Duration', 'IntensityLevel'],
  Nutrition: ['NutritionID', 'UserID', 'FoodName', 'Calories', 'Protein', 'Category'],
  Goal: ['GoalID', 'UserID', 'GoalType', 'TargetValue', 'Deadline'],
  Assistant: ['AssistantID', 'Name', 'Description', 'Specialization', 'ContactInfo'],
};

const TableInput = () => {
  const [selectedTable, setSelectedTable] = useState('User');
  const [formData, setFormData] = useState({});
  const [dataList, setDataList] = useState([]);

  const columns = useMemo(() => tables[selectedTable], [selectedTable]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataList([...dataList, formData]);
    setFormData({});
  };

  return (
    <div className="table-input-container">
      <h4>Select Table</h4>
      <select onChange={(e) => setSelectedTable(e.target.value)} value={selectedTable}>
        {Object.keys(tables).map((table) => (
          <option key={table} value={table}>
            {table}
          </option>
        ))}
      </select>
      
      <form onSubmit={handleSubmit}>
        {columns.map((column) => (
          <div key={column} className="input-group">
            <label>{column}</label>
            <input
              type="text"
              name={column}
              value={formData[column] || ''}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}
        <button type="submit">Add Data</button>
      </form>

      <div className="data-list">
        <h4>{selectedTable} Data</h4>
        {dataList.length > 0 && (
          <table>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataList.map((data, index) => (
                <tr key={index}>
                  {columns.map((column) => (
                    <td key={column}>{data[column]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TableInput;
