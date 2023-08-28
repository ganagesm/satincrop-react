import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>What is the Generative Ai ? </h3>
              <p>Generative AI, short for Generative Artificial Intelligence, refers to a subset of artificial intelligence that focuses on creating new content, data, or information rather than simply analyzing or interpreting existing data. It involves the use of machine learning models, particularly generative models, to generate new and original output based on patterns and examples observed in training data.</p>
              
              <p>Generative AI models, such as Generative Adversarial Networks (GANs) and Variational Autoencoders (VAEs), learn from large datasets to generate content that is similar to the training data but not an exact replica. These models learn the underlying patterns, structures, and features present in the data and then use that knowledge to generate new instances that exhibit similar characteristics.</p>
              <p><strong>Generator</strong> The generator is a neural network that takes random input, often called "noise" or a latent vector, and transforms it into a meaningful output, such as an image, text, or sound. The generator's goal is to produce content that is realistic and resembles the training data. </p>
              <p><strong>Discriminator</strong> The discriminator is another neural network that evaluates the generated output and distinguishes it from real examples. It tries to determine whether the content is generated or comes from the original dataset. The discriminator's objective is to improve its ability to correctly classify the generated content. </p>

            </div>

            <div className="services-details-image">
              <img
                src="/images/blog/generative-ai-case-studie.jpeg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
