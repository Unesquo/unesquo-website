'use client'
import React, { useState } from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import CommitteeCard from '../../Components/bitmun/committees/CommitteeCard';
import ImageGalleryModal from '../../Components/bitmun/committees/ImageGalleryModal';
import { motion } from 'framer-motion';
import styles from './committees.module.css';

interface Committee {
  id: number;
  title: string;
  subtitle: string;
  agenda: string;
  description: string;
  images: string[];
}

const CommitteesPage = () => {
  const [selectedCommittee, setSelectedCommittee] = useState<Committee | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const committees: Committee[] = [
    {
      id: 1,
      title: 'All India Political Parties Meet (AIPPM)',
      subtitle: 'Reassessing the Sixth Schedule',
      agenda: 'AGENDA: Reassessing the Implementation and Relevance of the Sixth Schedule in the Contemporary Federal Framework with a special emphasis on Autonomous Regions.',
      description: 'The constitutional bedrock of the nation is being tested. The Sixth Schedule, a mechanism designed to safeguard the rights and autonomy of specific regions, now requires urgent reassessment. This AIPPM session dives into the very heart of federalism and constitutional justice, focusing sharply on the delicate balance in Autonomous Regions. Delegates must deliberate on how to reconcile local self-governance, unique cultural identities, and national security within the contemporary framework. The discussion centers on the growing demands for self-determination against the necessity of national integration. The job is not merely to amend law; it is to forge a cohesive policy that respects fundamental constitutional mandates while shaping the nation\'s political future.',
      images: [
        '/images/Events/UNGAD.webp',
        '/images/_MG_9409.webp',
        '/images/IMG_1648.webp',
        '/images/Events/MOM.webp'
      ]
    },
    {
      id: 2,
      title: 'Historical Crisis Committee (HCC)',
      subtitle: 'Pokhran Nuclear Tests - May 1998',
      agenda: 'AGENDA: Discussion on Nuclear Tests at Pokhran and Their Implications for National Security and foreign policy (Freeze Date: May 1998).',
      description: 'The Historical Crisis Committee begins its session facing the immediate, severe fallout of the nuclear tests conducted at Pokhran in May 1998. This Committee challenges delegates to operate under a rigid freeze date, navigating the severe international fallout of nuclear tests at Pokhran. The global landscape fractured overnight, demanding immediate, aggressive responses from world powers. Delegates won\'t just debate history; the committee must re-live the most crucial national security and foreign policy decisions. The task is to determine how the delegates manage crippling sanctions, intense diplomatic pressure, and the looming threat of regional instability. The question is how survival is achieved during the moment that changed global geopolitical dynamics.',
      images: [
        '/images/Events/WarCabinet.webp',
        '/images/_MG_9409.webp',
        '/images/IMG_1648.webp',
        '/images/Events/JSIP.webp'
      ]
    },
    {
      id: 3,
      title: 'UNGA Social, Humanitarian & Cultural Committee (SOCHUM)',
      subtitle: 'Protection of Refugees and IDPs',
      agenda: 'AGENDA: Deliberation on the Protection and Socio-Economic Reintegration of Refugees, Asylum Seekers, and Internally Displaced Persons (IDPs).',
      description: 'Beyond the headlines lies the immense human cost of conflict. UNGA SOCHUM\'s focus is on shielding these vulnerable populations. This committee will deliberate on the protection, rights, and long-term socio-economic reintegration of Refugees, Asylum Seekers, and IDPs. The practical challenges of securing humanitarian aid and rebuilding shattered lives are enormous. Delegates must collaborate to draft viable strategies that not only ensure immediate safety but offer a concrete path back to dignity and lasting security. The challenge is to design a policy framework that truly transforms human despair into conscious, sustainable harmony.',
      images: [
        '/images/Events/UNGAD.webp',
        '/images/_MG_9409.webp',
        '/images/IMG_1648.webp',
        '/images/Events/MOM.webp'
      ]
    },
    {
      id: 4,
      title: 'World Trade Organization (WTO)',
      subtitle: 'Fair Trade in Post-Pandemic Economy',
      agenda: 'AGENDA: Deliberation on the Promotion of Fair Trade Practices and Reducing Protectionism in the Post-Pandemic Global Economy.',
      description: 'The global economy is currently at a critical inflection point, struggling not only to recover its footing post-pandemic but also to mend deep fissures in global supply chains. The WTO committee challenges member state delegates to devise policy that aggressively promotes fair, equitable trade practices while strategically reducing protectionism, the very nationalistic policies that often fracture global commerce and stall recovery. This is high-stakes international negotiation aimed at resolving global economic inequity and fostering sustainable growth. The ultimate focus of the deliberation is clear: Will diplomacy succeed in resolving volatile market forces, or will unchecked protectionism lead the global community toward greater instability and economic fragmentation?',
      images: [
        '/images/Events/JSIP.webp',
        '/images/_MG_9409.webp',
        '/images/IMG_1648.webp',
        '/images/Events/WarCabinet.webp'
      ]
    },
    {
      id: 5,
      title: 'Fantasy Committee: All Wizards Stakeholder Meet',
      subtitle: 'Wizarding World Under Crisis',
      agenda: 'AGENDA: All Wizards Stakeholder Meet: Deliberating political, military, and survival strategies as the Ministry falls under Voldemort\'s control.',
      description: 'The Ministry has fallen. Chaos reigns. Delegations represent the remaining political, military, and financial stakeholders of the Wizarding World: Wizards, Aurors, Goblin Bankers, and Giants. As Adversarial Power\'s control tightens, this emergency committee requires deliberation on immediate political, military, and survival strategies to manage the crisis. Success demands ruthless negotiation, complex alliances that transcend old prejudices, and a mastery of strategy far beyond standard spells. The Dark Lord waits for no one: The question is whether resistance will be mounted against collapse, or if factions will ensure their survival at any cost.',
      images: [
        '/images/Events/MOM.webp',
        '/images/_MG_9409.webp',
        '/images/IMG_1648.webp',
        '/images/Events/UNGAD.webp'
      ]
    },
    {
      id: 6,
      title: 'International Press (IP)',
      subtitle: 'Journalism, Photography & Caricature',
      agenda: 'AGENDA: Journalism, Photography & Caricature',
      description: 'The International Press committee plays a crucial role in documenting and disseminating information about global events within the conference. With a focus on journalism, photography, and caricature, this committee aims to capture the essence of diplomatic discussions, international policies, and human stories through both visual and written media. By blending art and reportage, the International Press highlights key moments in history and interprets complex political landscapes. The mission is to inform the global public, fostering transparency, accountability, and awareness of pressing global issues.',
      images: [
        '/images/Events/IP.webp',
        '/images/_MG_9409.webp',
        '/images/IMG_1648.webp',
        '/images/Events/JSIP.webp'
      ]
    }
  ];

  const handleCardClick = (committee: Committee) => {
    setSelectedCommittee(committee);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCommittee(null), 300);
  };

  return (
    <div className={styles.pageContainer}>
      <NavBar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={styles.committeesContainer}
      >
        {committees.map((committee, index) => (
          <CommitteeCard
            key={committee.id}
            committee={committee}
            index={index}
            onClick={() => handleCardClick(committee)}
          />
        ))}
      </motion.div>

      <ImageGalleryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        committee={selectedCommittee}
      />

      <Footer />
    </div>
  );
};

export default CommitteesPage;
