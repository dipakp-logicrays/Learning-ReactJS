
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS, COURSE_GOAL } from './data.js';
import Header from "./components/Header/Header.jsx";
import { CoreConcept, CoreConcept2 } from './components/CoreConcept/CoreConcept.jsx';
import CourseGoal from './components/CourseGoal/CourseGoal.jsx';
import { TabButton, TabButton2, TabButton3 } from './components/TabButton.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              image={componentsImg}
              title="Components"
              description="The core UI building block - compose the user interface by combining multiple components."
            />
            <CoreConcept2
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept2 {...CORE_CONCEPTS[1]} />
            <CoreConcept2 {...CORE_CONCEPTS[2]} />
          </ul>
          <hr />
          <h2>Course Goal</h2>
          <ul>
            <CourseGoal {...COURSE_GOAL[0]}></CourseGoal>
            <CourseGoal {...COURSE_GOAL[1]}></CourseGoal>
          </ul>
          <hr />
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components/JSX</TabButton>
            <TabButton2>Props</TabButton2>
            <TabButton3 label="State"></TabButton3>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;