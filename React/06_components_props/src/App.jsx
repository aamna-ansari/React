import React from 'react'
import Card from './components/Card'

const App = () => {

  const users = [
    {
      "name": "Alice Johnson",
      "age": 29,
      "city": "New York",
      "education": "Master's in Computer Science",
      "profession": "Software Engineer",
      "profile_photo": "https://example.com/profiles/alice.jpg"
    },
    {
      "name": "Michael Smith",
      "age": 34,
      "city": "San Francisco",
      "education": "Bachelor's in Business Administration",
      "profession": "Product Manager",
      "profile_photo": "https://example.com/profiles/michael.jpg"
    },
    {
      "name": "Linda Chen",
      "age": 27,
      "city": "Chicago",
      "education": "Master's in Marketing",
      "profession": "Digital Marketing Specialist",
      "profile_photo": "https://example.com/profiles/linda.jpg"
    },
    {
      "name": "David Brown",
      "age": 41,
      "city": "Seattle",
      "education": "PhD in Data Science",
      "profession": "Data Scientist",
      "profile_photo": "https://example.com/profiles/david.jpg"
    },
    {
      "name": "Sophia Patel",
      "age": 25,
      "city": "Austin",
      "education": "Bachelor's in Graphic Design",
      "profession": "UI/UX Designer",
      "profile_photo": "https://example.com/profiles/sophia.jpg"
    }
  ]  
  return (
    <div className='p-4'>
      {users.map((elem, idx) => {
        return (
          <Card
            key={idx}
            username={elem.name}
            age={elem.age}
            city={elem.city}
            education={elem.education}
            profession={elem.profession}
            profile_photo={elem.profile_photo}
          />
        );
      })}
    </div>
  )
}

export default App