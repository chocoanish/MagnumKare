import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import { Play } from "lucide-react";
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const HomePage = () => {

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const faqs = [
    {
      question: "What is Magnum AI and how does it work?",
      answer: "Magnum is your AI-powered health assistant available 24/7 on WhatsApp. It uses advanced AI technology to provide reliable health information and guidance based on your queries and medical reports."
    },
    {
      question: "How accurate is Magnum AI?",
      answer: "Magnum AI maintains a high level of accuracy by utilizing advanced machine learning algorithms and being regularly updated with the latest medical knowledge. However, it's important to note that it's designed to provide general guidance and should not replace professional medical advice."
    },
    {
      question: "Is my medical data secure?",
      answer: "Yes, your medical data is fully encrypted and secured. We follow strict privacy protocols and comply with healthcare data protection standards to ensure your personal information remains confidential."
    }
  ];

  const handleQuestionClick = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };


  return (
    <div>
      <Navbar />
      <section className={styles.heroContainer}>
        {/* Main Header */}
        <div className={styles.headerWrapper}>
          <h1 className={styles.mainHeader}>
            Magnum Scores <span className={styles.highlight}>94.8%</span> in the
            USMLE!
          </h1>
          <p className={styles.subHeader}>
            Watch how our innovative approach helped achieve this remarkable
            result
          </p>
        </div>

        {/* Video Frame */}
        <div className={styles.videoContainer}>
          <iframe
            className={styles.videoFramed}
            src="https://www.youtube.com/embed/c1zOFQpmCXc?autoplay=1&mute=1"
            title="Success Story"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* Video Statistics */}
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>94.8%</span>
              <span className={styles.statLabel}>Final Score</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>null</span>
              <span className={styles.statLabel}>null</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>null</span>
              <span className={styles.statLabel}>null</span>
            </div>
          </div>
        </div>
        <div className={styles.learnMoreContainer}>
          <p>
            Your personal AI health assistant. Now say goodbye to Google scares!
          </p>
          <p>Available for FREE, 24x7 on WhatsApp</p>
          <div className={styles.learnMoreButton}>Learn More</div>
        </div>
      </section>

      <section className={styles.section2}>
        {/* Main Header */}
        <div className={styles.headerWrapper}>
          <h1 className={styles.sectionHeader}>Successful Benchmarking</h1>
          <p className={styles.subSectionHeader}>
            Mangnum is the top Health AI in the world. We secured 94.8% in the
            US Medical Licensing Examination. This is one of the standard
            benchmarks used for Health AIs.
          </p>
        </div>

        {/* Video Frame */}
        <div className={styles.videoContainer}>
          <div className={styles.videoFrame}>
            <div className={styles.videoPlaceholder}>
              <button className={styles.playButton}>
                <Play size={32} />
              </button>
              <p className={styles.videoText}>Watch the Success Story</p>
            </div>
          </div>
        </div>
        <div className={styles.learnMoreContainer}>
          <div className={styles.stepContainer}>
            <div className={styles.step}>
              <div className={styles.step_number}>1</div>
              <div className={styles.step_content}>
                <h3>Send a Message</h3>
                <p>
                  Start by sending your health-related question to Magnum on
                  WhatsApp. Its that simple.
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.step_number}>2</div>
              <div className={styles.step_content}>
                <h3>AI Analysis</h3>
                <p>
                  Magnum processes your question using its advanced AI model
                  that scored 94.8% in USMLE.
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.step_number}>3</div>
              <div className={styles.step_content}>
                <h3>Get Instant Response</h3>
                <p>
                  Receive clear, accurate, and personalized health guidance
                  within moments.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.learnMoreButton}>Learn More</div>
        </div>
      </section>

      <section className={styles.section3}>
        {/* Main Header */}
        <div className={styles.headerWrapper}>
          <h1 className={styles.sectionHeader}>
            How Magnum makes Healthcare Accessible
          </h1>
          <p className={styles.subSectionHeader}>
            Explore the various ways Magnum can assist you with your health
            needs.
          </p>
        </div>

        {/* Video Frame */}
        <div className={styles.videoContainer}>
          <div className={styles.videoFrame}>
            <div className={styles.videoPlaceholder}>
              <button className={styles.playButton}>
                <Play size={32} />
              </button>
              <p className={styles.videoText}>Watch the Success Story</p>
            </div>
          </div>
        </div>

        <div className={styles.gridContainer}>
          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src="/api/placeholder/400/320"
                alt="First card"
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>Lab Report Analysis</h3>
              <p className={styles.description}>
                Send your lab reports through WhatsApp and get instant, detailed
                analysis with actionable insights. Magnum helps you understand
                your reports in simple terms.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src="/api/placeholder/400/320"
                alt="Second card"
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>Symptom Assessment</h3>
              <p className={styles.description}>
                Describe your symptoms to Magnum and receive a comprehensive
                preliminary assessment, helping you understand when to seek
                immediate medical attention.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src="/api/placeholder/400/320"
                alt="Third card"
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>Medication Information</h3>
              <p className={styles.description}>
                Get detailed informaiton about your medications, including
                potential side effects, interactions, and proper usage
                guidlines.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src="/api/placeholder/400/320"
                alt="Fourth card"
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>Health Monitoring</h3>
              <p className={styles.description}>
                Regular check-ins and monitoring of your health parameters.
                Magnum helps you track your progress and maintain a healthy
                lifestyle.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.learnMoreContainer}>
          <div className={styles.useMagnum}>
            <div className={styles.startButton}>Start using Magnum</div>
            <div className={styles.learnMoreButton}>Learn More</div>
          </div>
        </div>
      </section>

      <section className={styles.faqsContainer}>
        {/* Main Header */}
        <div className={styles.headerWrapper}>
          <h1 className={styles.sectionHeader}>Frequently Asked Questions</h1>
          <p className={styles.subSectionHeader}>
            Everything you need to know about Magnum AI.
          </p>
        </div>
        <div className={styles.faqs}>
      {faqs.map((faq, index) => (
        <div key={index}>
          <div 
            className={styles.question}
            onClick={() => handleQuestionClick(index)}
          >
            <div className={styles.header}>
              <h2 className={styles.title}>{faq.question}</h2>
              {selectedQuestion === index ? (
                <ChevronUp/>
              ) : (
                <ChevronDown/>
              )}
            </div>
          </div>
          
          <div 
            className={`${styles.answer} ${selectedQuestion === index ? styles.show : ''}`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
      </section>

      <section className={styles.noticeSection}>
        {/* Main Header */}
        <div className={styles.noticeWrapper}>
          <h1 className={styles.noticeHeader}>Important Health Notice</h1>
          <p className={styles.subNoticeHeader}>
            Magnum is a health information platform and is not designed to
            replace medical advice from a licensed healthcare professional.
            Always consult with a healthcare provider for medical decisions.
          </p>
        </div>
        <div className={styles.learnMoreContainer}>
          <div className={styles.learnMoreButton}>Read Our Privacy Policy</div>
        </div>
      </section>

      <section className={styles.QRCode}>
        <img src="./QR.png" alt="QR-Code" />
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.logoSection}>
            <div className={styles.logo}></div>
            <p className={styles.tagline}>Made in India for the world</p>
          </div>

          <div className={styles.contentSection}>
            <div className={styles.contactInfo}>
              <h3 className={styles.sectionTitle}>Contact</h3>
              <p className={styles.address}>
                E-city, Bengaluru, Karnataka-560075
              </p>
              <p className={styles.phone}>+(91) 9305872476</p>
              <p className={styles.email}>shashank@magnumkare.com</p>
            </div>

            <div className={styles.linksSection}>
              <h3 className={styles.sectionTitle}>Links</h3>
              <a href="#" className={styles.link}>
                Talk to Magnum
              </a>
            </div>
          </div>
        </div>
        <div className={styles.disclaimerSection}>
          <p className={styles.disclaimer}>
            Disclaimer: Magnum is a health information platform and its
            responses dont constitute medical advise. Always consult with a
            liscenced medical professional near you before making any changes.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
