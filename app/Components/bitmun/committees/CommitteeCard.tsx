import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

interface Committee {
  id: number;
  title: string;
  subtitle: string;
  agenda: string;
  description: string;
  images: string[];
}

interface CommitteeCardProps {
  committee: Committee;
  index: number;
  onClick: () => void;
}

const CardContainer = styled(motion.div)<{ $isReversed: boolean }>`
  display: flex;
  flex-direction: ${props => props.$isReversed ? 'row-reverse' : 'row'};
  gap: 2rem;
  padding: 2rem;
  margin: 0 auto;
  max-width: 1400px;
  width: 90%;
  background: linear-gradient(
    135deg,
    rgba(33, 33, 50, 0.9),
    rgba(20, 20, 40, 0.95)
  );
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(100, 100, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(100, 100, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 85%;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 1rem;
    gap: 1rem;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  min-width: 400px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 1024px) {
    min-width: 100%;
    height: 300px;
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const MainImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  filter: brightness(0.85) contrast(1.1);
  transition: all 0.4s ease;

  ${CardContainer}:hover & {
    filter: brightness(1) contrast(1.2);
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

const ImageBadge = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const ContentSection = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;

  @media (max-width: 768px) {
    gap: 0.75rem;
    padding: 0.5rem 0;
  }
`;

const CommitteeTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin: 0;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-weight: bold;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CommitteeSubtitle = styled.h3`
  font-size: 1.2rem;
  color: #9699b0;
  margin: 0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AgendaBox = styled.div`
  background: rgba(106, 17, 203, 0.1);
  border-left: 4px solid #6a11cb;
  padding: 1rem;
  border-radius: 8px;
  margin: 0.5rem 0;
`;

const AgendaText = styled.p`
  color: #b8b9c9;
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Description = styled.p`
  color: #e0e0e0;
  line-height: 1.8;
  margin: 0;
  font-size: 1rem;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.6;
    -webkit-line-clamp: 4;
  }
`;

const ViewGalleryButton = styled(motion.button)`
  align-self: flex-start;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(45deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(106, 17, 203, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(106, 17, 203, 0.5);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
`;

const CommitteeCard: React.FC<CommitteeCardProps> = ({ committee, index, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });
  const isReversed = index % 2 === 1;

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isReversed ? 100 : -100,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 0.6
      }
    }
  };

  return (
    <CardContainer
      ref={ref}
      $isReversed={isReversed}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      onClick={onClick}
    >
      <ImageSection>
        <MainImage
          src={committee.images[0]}
          alt={committee.title}
          onError={(e) => {
            e.currentTarget.src = '/bitmun25/committee-placeholder-1.jpg';
          }}
        />
        <ImageOverlay>
          <ImageBadge>Click to View Gallery</ImageBadge>
        </ImageOverlay>
      </ImageSection>

      <ContentSection>
        <CommitteeTitle>{committee.title}</CommitteeTitle>
        <CommitteeSubtitle>{committee.subtitle}</CommitteeSubtitle>

        <AgendaBox>
          <AgendaText>{committee.agenda}</AgendaText>
        </AgendaBox>

        <Description>{committee.description}</Description>

        <ViewGalleryButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          View Gallery & Details
        </ViewGalleryButton>
      </ContentSection>
    </CardContainer>
  );
};

export default CommitteeCard;
