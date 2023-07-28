import React, { useState, useEffect } from 'react';
import './Activities.css';
// import ContinuousImageSlideshow from './ContinuousImageSlideshow';

const mockActivities = [
  { id: 1, title: 'Swimming Pool', description: 'Enjoy a refreshing swim in our pool.' },
  { id: 2, title: 'Fitness Center', description: 'Stay fit and healthy with our modern gym.' },
  { id: 3, title: 'Spa & Wellness', description: 'Relax and rejuvenate at our luxurious spa.' },
];

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    setActivities(mockActivities);
  }, []);

  return (
    <div className="activities-container">
      <h1 className="activities-header">Activities</h1>
      <div className="activities-list">
        {activities.map(activity => (
          <div className="activity-card" key={activity.id}>
            <div className="activity-card-inner">
              <div className="activity-card-front">
                <h2 className="activity-title">{activity.title}</h2>
                <p className="activity-description">{activity.description}</p>
              </div>
              <div className="activity-card-back">
                <h2 className="activity-title">{activity.title}</h2>
                <p className="activity-description">{activity.description}</p>
                <button className="learn-more-button">Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <ContinuousImageSlideshow /> */}
    </div>
  );
};

export default Activities;
