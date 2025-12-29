'use client'
import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Timer from '../Components/bitmun/OurTeam/Timer';
import ChairPage from '../Components/bitmun/OurTeam/ChairData';
import FourGridsSection from '../Components/bitmun/OurTeam/FourGrids';
// import ExampleUsage from '../Components/bitmun/OurTeam/ExampleUsage';
// import ExampleUsage1 from '../Components/bitmun/OurTeam/ExampleUsage1';
import Video from '../Components/bitmun/OurTeam/Video';
import styles from './OurTeam.module.css';
import Button from "../Components/bitmun/button/Button";
import { FaCrown, FaUserCheck, FaBullhorn } from "react-icons/fa";
import UnesquoLoading from '../Components/bitmun/loading/UnesquoLoading';
import { toast } from 'react-toastify';

const targetTime = '2026-01-23T08:00:00';

const ExecutiveBoard = () => {
  toast.info("Executive Board Registration Forms are closed now.");
  // window.location.href = "https://docs.google.com/forms/d/1eVp8ZU2nT3HbObZ4bUUebC6mJLFieWTCVDLJy1ygFLM/edit";

};
const DelegateRegistration = () => {
  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdQOTz89SSdCKyTh4D-NPuX59bnT35nEmthNjmx5ySbt_wAKQ/viewform";
};
const CampusAmbassador = () => {
  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScS2sRR4VttICwmmtb0moy0elp2RgyoVnFa6DH901CRd52S5w/viewform";
};

const Bitmun = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>
      {loading && <UnesquoLoading />}
      {!loading && (
        <>
          <NavBar />
          <Timer targetTime={targetTime} />
          <div className={styles.registration_butons}>
            <div className={styles.executive} onClick={ExecutiveBoard}>
              <Button
                name="Executive Board"
                background="linear-gradient(45deg, #4a90e2, #50a4f2)"
                color="#fff"
                border="1px solid #4a90e2"
                icon={<FaCrown />}
              />
            </div>
            <div className={styles.delegate} onClick={DelegateRegistration}>
              <Button
                name="Delegate Registration"
                background="linear-gradient(45deg, #f2994a, #f2c94c)"
                color="#fff"
                border="1px solid #f2994a"
                icon={<FaUserCheck />}
              />
            </div>
            <div className={styles.campus_ambassador} onClick={CampusAmbassador}>
              <Button
                name="Campus Ambassador"
                background="linear-gradient(45deg, #27ae60, #2ecc71)"
                color="#fff"
                border="1px solid #27ae60"
                icon={<FaBullhorn />}
              />
            </div>
          </div>

          <Video />
          <br />
          <div className={styles.fourGrid}>
            <FourGridsSection />
          </div>
          {/* <section className={styles.section}>
            <div className={styles.ExampleUsage}>
              <ExampleUsage />
            </div>
            <div className={styles.ExampleUsage1}>
              <ExampleUsage1 />
            </div>
          </section> */}
            <ChairPage />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Bitmun;
