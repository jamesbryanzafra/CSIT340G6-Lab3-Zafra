const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.parts[0].name} - {props.parts[0].exercises} units</p>
      <p>{props.parts[1].name} - {props.parts[1].exercises} units</p>
      <p>{props.parts[2].name} - {props.parts[2].exercises} units</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total Units: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
}

const Footer = (props) => {
  return (
    <p style={{ fontStyle: 'italic', marginTop: '20px' }}>
      {props.message} | Student ID: {props.studentId}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'CSIT340 - Industry Elective 1',
    parts: [
      {
        name: 'CSIT327 - Information Management 2',
        exercises: 3
      },
      {
        name: 'IT317 - Project Management',
        exercises: 3
      },
      {
        name: 'IT365 - Data Analytics 1',
        exercises: 3
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer message="Lab Activity 3: Introduction to React Completed" studentId="24-1725-581" />
    </div>
  )
}

export default App