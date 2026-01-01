import React from "react";
import Card from "./Card";

const EventDetails: React.FC = () => {
	const events = [
		{
			image: "/images/Events/IP.webp",
			title: "International Press",
			description: "Committed to fostering cross-cultural understanding, this diverse assembly of journalists, editors, and communicators embarks on a mission to amplify stories that resonate universally. In a world ever more connected, the committee stands as a beacon, championing the richness of global perspectives and fostering dialogue that transcends geographical boundaries.",
			registrationLink:"https://unstop.com/conferences/birla-institute-of-technology-model-united-nations-bitmun24-bit-mesra-ranchi-839214?lb=DP1Hq0R&utm_medium=Share&utm_source=shortUrl"
		},
		{
			image: "/images/Events/JSIP.webp",
			title: "ECOFIN - Economic and Financial Affairs Committee",
			description: "The Economic and Financial Affairs Committee focuses on global economic policies, financial regulations, and sustainable development. Delegates will engage in discussions about international trade, monetary systems, and economic cooperation to address pressing financial challenges facing the international community.",
			registrationLink:"https://unstop.com/conferences/birla-institute-of-technology-model-united-nations-bitmun24-bit-mesra-ranchi-839214?lb=DP1Hq0R&utm_medium=Share&utm_source=shortUrl"
		},
		{
			image: "/images/Events/MOM.webp",
			title: "UNHRC - United Nations Human Rights Council",
			description: "The United Nations Human Rights Council is dedicated to strengthening the promotion and protection of human rights around the globe. Delegates will address violations, develop international human rights standards, and work towards ensuring dignity, freedom, and justice for all individuals across nations.",
			registrationLink:"https://unstop.com/conferences/birla-institute-of-technology-model-united-nations-bitmun24-bit-mesra-ranchi-839214?lb=DP1Hq0R&utm_medium=Share&utm_source=shortUrl"
		},
		{
			image: "/images/Events/WarCabinet.webp",
			title: "War Cabinet",
			description: "Delve into the intricacies of geopolitical maneuvering, forging alliances, and making pivotal decisions that could reshape the course of history. In this intense diplomatic simulation, the war cabinet emerges as a crucible of leadership and strategic thinking, as delegates navigate the challenges of a world in conflict, seeking resolutions that transcend the echoes of the past.",
			registrationLink:"https://unstop.com/conferences/birla-institute-of-technology-model-united-nations-bitmun24-bit-mesra-ranchi-839214?lb=DP1Hq0R&utm_medium=Share&utm_source=shortUrl"
		},
		{
			image: "/images/Events/UNGAD.webp",
			title: "AIPPM - All India Political Parties Meet",
			description: "The All India Political Parties Meet brings together diverse political perspectives to address critical national issues. This committee provides a platform for constructive dialogue, consensus-building, and collaborative policy-making that reflects India's pluralistic democratic values and addresses the nation's most pressing challenges.",
			registrationLink:"https://unstop.com/conferences/birla-institute-of-technology-model-united-nations-bitmun24-bit-mesra-ranchi-839214?lb=DP1Hq0R&utm_medium=Share&utm_source=shortUrl"
		},
		{
			image: "/images/Events/UNGAD.webp",
			title: "Niti Aayog",
			description: "Niti Aayog serves as India's premier policy think tank, fostering cooperative federalism and driving sustainable development. Delegates will engage with transformative ideas, strategic planning, and innovative solutions to accelerate India's growth while ensuring inclusive and equitable progress across all sectors of society.",
			registrationLink:"https://unstop.com/conferences/birla-institute-of-technology-model-united-nations-bitmun24-bit-mesra-ranchi-839214?lb=DP1Hq0R&utm_medium=Share&utm_source=shortUrl"
		}
	];

    const flexStyles = {
        display: 'flex',
        justifyContent: 'space-around',
		flexWrap: 'wrap',
      };

	

	return (
		<div style={flexStyles as React.CSSProperties}>
			{events.map((event, index) => (
				<><Card key={index} {...event} /></>
			))}
		</div>
	);
};

export default EventDetails;
