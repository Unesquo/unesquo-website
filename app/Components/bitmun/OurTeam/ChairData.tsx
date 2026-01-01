import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from "./DelegateAffairs.module.css";
import Unga from './Unga';
import WarCab from './warCab';
import Mom from './mom';
import Jsip from './jsip';
import Press from './press';

interface PersonData {
  id: number;
  src: string;
  name: string;
  position: string;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const ChairPage: React.FC = () => {
  // Typed data arrays
  const ecofinData: PersonData[] = [
    {
      id: 1,
      src: '/bitmun25/AISHNIT_YADAV_chair_ecofin.png',
      name: 'Aishnit Yadav',
      position: 'CHAIR',
    },
    {
      id: 2,
      src: '/bitmun25/vyom_gupta_vice_chair_ecofin.png',
      name: 'Vyom Gupta',
      position: 'VICE CHAIR',
    },
    {
      id: 3,
      src: '/bitmun25/Varun_Gupta_Rapporteur_ECOFIN.png',
      name: 'Varun Gupta',
      position: 'RAPPORTEUR',
    },
  ];

  const unhrcData: PersonData[] = [
    {
      id: 1,
      src: '/bitmun25/Devayush_das_President_UNHRC.png',
      name: 'Devayush Das',
      position: 'PRESIDENT',
    },
    {
      id: 2,
      src: '/bitmun25/mohammad_ammar_Vice_President_UNHRC.png',
      name: 'Mohammad Ammar',
      position: 'VICE PRESIDENT',
    },
  ];

  const aippmData: PersonData[] = [
    {
      id: 1,
      src: '/bitmun25/LAKSHIT_TANDON_chair_AIPPM.png',
      name: 'Lakshit Tandon',
      position: 'CHAIR',
    },
    {
      id: 2,
      src: '/bitmun25/erapani_meenal_vice_chair_AIPPM.png',
      name: 'Erapani Meenal',
      position: 'VICE CHAIR',
    },
    {
      id: 3,
      src: '/bitmun25/raj_vardhan_roushan_Rapporteur_AIPPM.png',
      name: 'Raj Vardhan Roushan',
      position: 'RAPPORTEUR',
    },
  ];

  const nitiAayogData: PersonData[] = [
    {
      id: 1,
      src: '/bitmun25/NIKHIL_VERMA_Chair_Niti_Aayog.png',
      name: 'Nikhil Verma',
      position: 'CHAIR',
    },
    {
      id: 2,
      src: '/bitmun25/SAMINA_PARVEEN_Vice Chair_Niti_Aayog.png',
      name: 'Samina Parveen',
      position: 'VICE CHAIR',
    },
    {
      id: 3,
      src: '/bitmun25/Shourya_parihar_Rapporteur_Niti_Aayog.png',
      name: 'Shourya Parihar',
      position: 'RAPPORTEUR',
    },
  ];

  const warCabData: PersonData[] = [
    {
      id: 1,
      src: '/bitmun25/ADITYA_DUBEY_Chair_War_Cabinet.png',
      name: 'Aditya Dubey',
      position: 'CHAIR',
    },
    {
      id: 2,
      src: '/bitmun25/AMBUJ_MISHRA_Chair_War_Cabinet.png',
      name: 'Ambuj Mishra',
      position: 'CHAIR',
    },
    {
      id: 3,
      src: '/bitmun25/SIDDHARTH_SHANKER_Co-chair_War_Cabinet.png',
      name: 'Siddharth Shanker',
      position: 'CO-CHAIR',
    },
  ];

  const pressData: PersonData[] = [
    {
      id: 1,
      src: '/bitmun25/AADRITA_GOSWAMI_IP_Head_IP.png',
      name: 'Aadrita Goswami',
      position: 'HEAD',
    },
    {
      id: 2,
      src: '/bitmun25/PRIYANSHU_KUMAR_Editor-In-Chief_IP.png',
      name: 'Priyanshu Kumar',
      position: 'EDITOR-IN-CHIEF',
    },
    {
      id: 3,
      src: '/bitmun25/RAJNISH_Photographer-In-Chief_IP.png',
      name: 'Rajnish',
      position: 'PHOTOGRAPHER-IN-CHIEF',
    },
    {
      id: 4,
      src: '/bitmun25/shruti_tiwari_Head_Caricaturist_IP.png',
      name: 'Shruti Tiwari',
      position: 'HEAD CARICATURIST',
    },
  ];

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.container}
      >
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h1 className={styles.mainTitle}>
            BITMUN 25&apos; Chairs
          </h1>
          <p className={styles.subtitle}>
            Celebrating the exceptional leadership driving our diplomatic discourse
          </p>
        </motion.header>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className={styles.sectionsContainer}
        >
          <motion.section
            variants={sectionVariants}
            className={styles.section}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 variants={sectionVariants} className={styles.sectionTitle}>
              ECOFIN
            </motion.h2>
            <Unga ungaData={ecofinData} />
          </motion.section>

          <motion.section
            variants={sectionVariants}
            className={styles.section}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 variants={sectionVariants} className={styles.sectionTitle}>
              UNHRC
            </motion.h2>
            <WarCab warCabData={unhrcData} />
          </motion.section>

          <motion.section
            variants={sectionVariants}
            className={styles.section}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 variants={sectionVariants} className={styles.sectionTitle}>
              AIPPM
            </motion.h2>
            <Mom MomData={aippmData} />
          </motion.section>

          <motion.section
            variants={sectionVariants}
            className={styles.section}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 variants={sectionVariants} className={styles.sectionTitle}>
              Niti Aayog
            </motion.h2>
            <Jsip jsipData={nitiAayogData} />
          </motion.section>

          <motion.section
            variants={sectionVariants}
            className={styles.section}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 variants={sectionVariants} className={styles.sectionTitle}>
              War Cabinet
            </motion.h2>
            <WarCab warCabData={warCabData} />
          </motion.section>

          <motion.section
            variants={sectionVariants}
            className={styles.section}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 variants={sectionVariants} className={styles.sectionTitle}>
              International Press
            </motion.h2>
            <Press pressData={pressData} />
          </motion.section>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChairPage;
