import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const jobList = [
  { id: 1, title: 'MERN Developer', location: 'Jaipur', type: 'Full-time' },
  { id: 2, title: 'Full Stack Java Developer', location: 'Remote', type: 'Internship' },
  { id: 3, title: 'Frontend Developer', location: 'Delhi', type: 'Full-time' },
  { id: 4, title: 'Backend Developer', location: 'Mumbai', type: 'Part-time' },
  { id: 5, title: '.Net Developer', location: 'Jaipur', type: 'Part-time' },
  { id: 6, title: 'salesforce Developer', location: 'pune', type: 'Part-time' },
  // add more job entries
];

function JobListing() {
  // states for filters
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // filter function
  const filteredJobs = jobList.filter((job) => {
    return (
      (selectedTitle === '' || job.title.includes(selectedTitle)) &&
      (selectedLocation === '' || job.location.includes(selectedLocation))
    );
  });

  return (
    <div className="p-4">
      {/* filter section */}
      <div className="mb-4">
        <label className="mr-2">Filter by Title:</label>
        <select value={selectedTitle} onChange={(e) => setSelectedTitle(e.target.value)}>
          <option value="">All</option>
          <option value="MERN Developer">MERN Developer</option>
          <option value="Full Stack Java Developer">Full Stack Java Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value=".Net Developer">.Net Developer</option>
          <option value="salesforce Developer">salesforce Developer</option>
        </select>

        <label className="ml-4 mr-2">Filter by Location:</label>
        <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
          <option value="">All</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Remote">Remote</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Mumbai">Pune</option>
        </select>
      </div>

      {/* job section */}
      <div className="d-flex flex-wrap">
        {filteredJobs.map((job) => (
          <Card key={job.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
              <Card.Title>{job.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {job.location} | {job.type} | Job ID: {job.id}
              </Card.Subtitle>
              <Card.Text>
                We are seeking a {job.title} based in {job.location}. This is a {job.type} position.
              </Card.Text>
              <Button variant="primary">Apply Now</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default JobListing;
