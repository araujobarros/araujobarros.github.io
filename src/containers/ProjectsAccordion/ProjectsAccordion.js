import React from "react";
import "./ProjectsAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import ProjectCarousel from "../../components/projectCarousel/ProjectCarousel.js";

function ProjectsAccordion(props) {
  const theme = props.theme;

  return (
    <div className="experience-accord">
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <Accordion onChange={({ expanded }) => console.log(expanded)}>
          {props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
              >
                <ProjectCarousel
                  detailedProject={section["detailedProjects"]}
                  theme={theme}
                  title="project"
                />
              </Panel>
            );
          })}
        </Accordion>
      </ThemeProvider>
    </div>
  );
}

export default ProjectsAccordion;
