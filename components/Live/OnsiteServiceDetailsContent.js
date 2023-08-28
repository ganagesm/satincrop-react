import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Onsite Talent</h3>
              <p>
              "onsite talent" refers to employees or workers who work at a physical location, such as an office, factory, or any other company premises. These individuals are physically present at their workplace.
              </p>

              <p>
              Having onsite talent is the traditional way that many companies have operated for decades. Employees report to a designated workplace and work in the same physical location as their colleagues and superiors. This allows for more direct collaboration, face-to-face interactions, and a sense of belonging to a cohesive team.
              </p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/onsite-talent-banner.jpeg"
                alt="image"
              />
            </div>
          </div>

          <div className="services-details-overview">
            <div className="services-details-image mb-30">
              <img
                src="/images/services-details/working-process.jpeg"
                alt="image"
              />
            </div>

            <div className="services-details-desc">
              <h3>Working Process</h3>
              <p> The working process of onsite talent refers to how employees or individuals who work at a physical location, such as an office or company premises, carry out their daily tasks and responsibilities. Here's an overview of the typical working process for onsite talent: </p>

              <ul>
                <li>
                <strong>Commuting to the Workplace:</strong> Onsite talent usually starts their workday by commuting to their designated workplace. They may travel by car, public transportation, or other means, depending on their location and personal preferences.
                </li>
                <li>
                <strong>Clocking In:</strong> Upon arriving at the workplace, employees typically "clock in" or log their attendance using a time tracking system, if required by the company.
                </li>
                <li>
                <strong>Engaging in Team Meetings and Collaboration:</strong> Onsite talent often participate in team meetings, huddles, or stand-ups to discuss daily tasks, project updates, and other relevant information. These in-person interactions promote better collaboration, idea sharing, and problem-solving.
                </li>
                <li>
                <strong>Interacting with Colleagues and Superiors:</strong> Onsite talent has the advantage of direct face-to-face interactions with colleagues, superiors, and other team members. These interactions can foster a stronger sense of teamwork and build professional relationships.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
