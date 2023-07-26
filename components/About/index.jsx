import React from "react";

const useStyles = {
  root: {
    padding: "16px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "8px",
  },
};

const AboutUs = () => {
  const aboutUsData = [
    {
      imageSrc:
        "https://media.licdn.com/dms/image/C4D03AQFYonKqpgOVbA/profile-displayphoto-shrink_800_800/0/1663903831400?e=2147483647&v=beta&t=7mTg5MxWeE0FW8lW3nj4qkunp4ffk-iz6Cno65FmzP4",
      description:
        "I am passionate about making a positive impact in the world through technology. My love for problem-solving and creativity drives me to constantly learn and explore new ideas. I believe that by harnessing the power of innovation and collaboration, we can create solutions that benefit and improve the lives of people everywhere.",
    },
    {
      imageSrc:
        "https://media.licdn.com/dms/image/C5103AQGcjEQPrTLWMQ/profile-displayphoto-shrink_400_400/0/1584425619492?e=1695859200&v=beta&t=i7nnpovT8aXq49sZ1uxfX0n5sYHx8Ua_u2dKADLByqw",
      description:
        "As a tech-savvy entrepreneur, I am motivated to bridge the gap between technology and everyday challenges. My mission is to identify market needs and develop user-centric solutions that simplify people's lives. By fostering a culture of innovation and collaboration within my startup, I aspire to build a thriving business that positively impacts society and drives technological progress.",
    },
    {
      imageSrc:
        "https://media.licdn.com/dms/image/C5603AQG8mAGxooF4Ew/profile-displayphoto-shrink_400_400/0/1623665408903?e=1695859200&v=beta&t=MniqttnL6sJgY8dKMDN5s5sFYbMVGBNUaiY7LqZbuU8",
      description:
        "I aspire to practice my skills more and work for something which has an impact on all people around us. Further, my sincerity and discipline drive me to learn, adapt, and grow. As an avid learner, I embrace every opportunity to collaborate with diverse teams, seeking to build transformative projects that leave a lasting, positive influence on the lives of people worldwide.",
    },
  ];

  return (
    <div style={useStyles.root}>
      <h2>About Us</h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {aboutUsData.map((item, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              maxWidth: "400px",
              margin: "16px",
              textAlign: "center",
            }}
          >
            <img
              src={item.imageSrc}
              alt={`Image ${index + 1}`}
              style={useStyles.image}
            />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
