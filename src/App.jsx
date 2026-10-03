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

const App = () => {
  const course = 'CSIT340 - Industry Elective 1'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App