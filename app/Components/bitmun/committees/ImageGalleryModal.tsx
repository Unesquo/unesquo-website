import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface Committee {
  id: number;
  title: string;
  subtitle: string;
  agenda: string;
  description: string;
  images: string[];
}

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  committee: Committee | null;
}

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ModalContent = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(33, 33, 50, 0.95),
    rgba(20, 20, 40, 0.98)
  );
  border-radius: 24px;
  padding: 2.5rem;
  max-width: 1200px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(100, 100, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #6a11cb, #2575fc);
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 95%;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
    top: 1rem;
    right: 1rem;
  }
`;

const ModalTitle = styled.h2`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  font-weight: bold;
  padding-right: 50px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ModalSubtitle = styled.h3`
  font-size: 1.2rem;
  color: #9699b0;
  margin: 0 0 1.5rem 0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const AgendaSection = styled.div`
  background: rgba(106, 17, 203, 0.15);
  border-left: 4px solid #6a11cb;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const AgendaTitle = styled.h4`
  color: #b8b9c9;
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const AgendaText = styled.p`
  color: #e0e0e0;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const Description = styled.p`
  color: #e0e0e0;
  line-height: 1.8;
  font-size: 1.05rem;
  margin: 0 0 2rem 0;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const GalleryTitle = styled.h3`
  font-size: 1.8rem;
  color: #ffffff;
  margin: 0 0 1.5rem 0;
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const GalleryImage = styled(motion.img)`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 16px;
  cursor: pointer;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const LightboxOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LightboxImage = styled(motion.img)`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
`;

const NavigationButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &.prev {
    left: 2rem;
  }

  &.next {
    right: 2rem;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;

    &.prev {
      left: 1rem;
    }

    &.next {
      right: 1rem;
    }
  }
`;

const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({ isOpen, onClose, committee }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
  };

  const handlePrevImage = () => {
    if (lightboxIndex !== null && committee) {
      setLightboxIndex((lightboxIndex - 1 + committee.images.length) % committee.images.length);
    }
  };

  const handleNextImage = () => {
    if (lightboxIndex !== null && committee) {
      setLightboxIndex((lightboxIndex + 1) % committee.images.length);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  if (!committee) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </CloseButton>

              <ModalTitle>{committee.title}</ModalTitle>
              <ModalSubtitle>{committee.subtitle}</ModalSubtitle>

              <AgendaSection>
                <AgendaTitle>Agenda</AgendaTitle>
                <AgendaText>{committee.agenda}</AgendaText>
              </AgendaSection>

              <Description>{committee.description}</Description>

              <GalleryTitle>Committee Gallery</GalleryTitle>
              <ImageGrid>
                {committee.images.map((image, index) => (
                  <GalleryImage
                    key={index}
                    src={image}
                    alt={`${committee.title} - Image ${index + 1}`}
                    onClick={() => handleImageClick(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onError={(e) => {
                      e.currentTarget.src = '/bitmun25/committee-placeholder-1.jpg';
                    }}
                  />
                ))}
              </ImageGrid>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <LightboxOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <LightboxImage
              src={committee.images[lightboxIndex]}
              alt={`${committee.title} - Image ${lightboxIndex + 1}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                e.currentTarget.src = '/bitmun25/committee-placeholder-1.jpg';
              }}
            />

            <NavigationButton
              className="prev"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ‹
            </NavigationButton>

            <NavigationButton
              className="next"
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ›
            </NavigationButton>

            <CloseButton
              onClick={closeLightbox}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ position: 'fixed' }}
            >
              ×
            </CloseButton>
          </LightboxOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGalleryModal;
