import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Offshore Teams</h3>
              <p>Tailored Team Arrangements for Project-specific Needs</p>

              <p>
                Triosource understands that not all projects have the same
                requirements. We offer the flexibility to customize team
                arrangements based on your specific project needs. Whether you
                need a blend of onsite and nearshore resources or a combination
                of nearshore and offshore, Triosource can accommodate your
                unique requirements.
              </p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/service-details1.jpg"
                alt="image"
              />
            </div>
          </div>

          <div className="services-details-overview">
            <div className="services-details-image mb-30">
              <img
                src="/images/services-details/service-details2.jpg"
                alt="image"
              />
            </div>

            <div className="services-details-desc">
              <h3>Flexible Solutions for Tech Talent</h3>
              <p>
                When it comes to tech talent solutions, having flexibility is
                crucial for organizations. Triosource understands the varying
                needs of businesses and offers a range of team arrangements to
                choose from.
              </p>
              <ul>
                <li>
                  <strong>Scalability and Agile Team Adjustments:</strong>
                  Triosource's team arrangements provide scalability and
                  agility. As your project evolves, you can easily scale up or
                  down your team size based on the changing requirements. This
                  flexibility allows you to optimize resource allocation,
                  control costs, and maintain optimal productivity throughout
                  the project lifecycle.
                </li>
                <li>
                  <strong>Outsourcing Companies: </strong>
                  Partnering with established outsourcing companies in countries with a strong tech talent pool can provide a flexible and scalable solution. These companies often offer a range of services, including recruitment, HR management, infrastructure, and project management, allowing you to focus on core business functions.
                </li>
                <li>
                  <strong>Freelance Platforms: </strong>
                  Platforms like Upwork, Freelancer, and Toptal offer access to a vast pool of freelance tech talent from around the world. You can hire individuals or build a team based on specific skills and project requirements. This option is highly flexible as you can scale the team up or down as needed.
                </li>
                <li>
                  <strong>Tech Hubs and Incubators: </strong>
                  Many countries have established tech hubs and incubators that foster a vibrant tech community. Partnering with such organizations can help you tap into local talent while benefiting from their expertise and support.
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
