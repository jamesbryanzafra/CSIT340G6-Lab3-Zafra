const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1.name} - {props.part1.exercises} units</p>
      <p>{props.part2.name} - {props.part2.exercises} units</p>
      <p>{props.part3.name} - {props.part3.exercises} units</p>
    </div>
  )
}

const Total = (props) => {
  return <p>Total Units: {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
}

const App = () => {
  const course = 'CSIT340 - Industry Elective 1'
  const part1 = {
    name: 'CSIT327 - Information Management 2',
    exercises: 3
  }
  const part2 = {
    name: 'IT317 - Project Management',
    exercises: 3
  }
  const part3 = {
    name: 'IT365 - Data Analytics 1',
    exercises: 3
  }

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} 
        part2={part2} 
        part3={part3} 
      />
      <Total 
        part1={part1} 
        part2={part2} 
        part3={part3} 
      />
    </div>
  )
}

export default App