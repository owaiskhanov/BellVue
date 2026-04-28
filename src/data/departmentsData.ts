import { Stethoscope, HeartPulse, Bed, Activity, ActivitySquare, Scan, TestTube, Pill, DoorOpen, ShieldAlert, Droplets, Users } from 'lucide-react';

export const departmentsData = [
  { 
    id: "consulting",
    icon: Stethoscope, 
    title: "Consulting Chambers", 
    desc: "Multiple specialist OPD rooms for scheduled consultations",
    image: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Departments/Consulting%20Chamber.png",
    sections: [
      {
        title: "Expert Medical Professionals",
        content: "Our consulting chambers are staffed with a diverse team of experienced doctors, specialists, and consultants from various medical disciplines. They possess extensive knowledge, expertise, and years of practical experience in their respective fields. Whether you need a general physician, a cardiologist, an orthopedic surgeon, or any other specialist, we have you covered."
      },
      {
        title: "Comprehensive Healthcare Services",
        content: "The consulting chambers at Belle Vue Multispecialty Hospital cater to a wide range of medical specialties. From routine check-ups and preventive care to specialized treatments and surgical consultations, our doctors are equipped to address various health concerns. Patients can access services such as diagnostic assessments, medication prescriptions, treatment planning, and follow-up care all within the comfort of our well-appointed consulting chambers."
      },
      {
        title: "Patient-Centered Approach",
        content: "We prioritize patient comfort and convenience during every consultation. Our consulting chambers are designed to create a welcoming and relaxed atmosphere, ensuring that patients feel at ease while discussing their medical concerns. The layout and interiors are thoughtfully crafted to promote a healing environment and enable effective doctor-patient communication."
      },
      {
        title: "State-of-the-Art Facilities",
        content: "Our consulting chambers are equipped with advanced medical equipment and technology to aid accurate diagnoses and prompt medical interventions. This ensures that patients receive the highest standard of care and benefit from the latest advancements in medical science. We regularly update our infrastructure to maintain the quality and efficiency of our services."
      },
      {
        title: "Seamless Coordination",
        content: "At Belle Vue Multispecialty Hospital, we strive for seamless coordination among our healthcare professionals. Our consulting chambers serve as a central hub where doctors collaborate, share insights, and provide integrated care to patients. This multidisciplinary approach allows for comprehensive assessments and enables accurate diagnoses, leading to effective treatment plans."
      },
      {
        title: "Patient Education and Empowerment",
        content: "In addition to providing medical consultations, our doctors take the time to educate patients about their health conditions, treatment options, and preventive measures. We believe that informed patients can actively participate in their healthcare journey and make well-informed decisions. Our consulting chambers provide a platform for interactive discussions, where patients can clarify doubts, seek advice, and actively engage in their treatment process."
      }
    ],
    conclusion: "Overall, the consulting chambers at Belle Vue Multispecialty Hospital in Mumbai are dedicated to delivering personalized, compassionate, and high-quality healthcare services. We aim to ensure that each patient receives the necessary attention, expert guidance, and comprehensive care they deserve."
  },
  { 
    id: "cath-lab",
    icon: HeartPulse, 
    title: "Cath Lab", 
    desc: "State-of-the-art Philips FD-10 machine for cardiac procedures",
    image: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Departments/CAT%20lab.png",
    sections: [
      {
        title: "Cat Lab – state-of-the-art Philips FD-10 machine",
        content: "Belle Vue Multispecialty Hospital takes pride in its state-of-the-art Catheterization Laboratory, equipped with the latest technology including the Phillips HD 10 machine. Our Cath Lab is designed to provide exceptional cardiac care and perform various interventional procedures with precision and efficiency."
      },
      {
        title: "Cutting-Edge Technology",
        content: "Our Cath Lab is equipped with the Phillips HD 10 machine, which represents the pinnacle of cardiac imaging technology. The HD 10 machine combines advanced features and imaging capabilities to enable accurate and detailed visualization of the cardiovascular system. It offers high-definition imaging, excellent resolution, and real-time imaging during procedures, ensuring optimal outcomes for patients."
      },
      {
        title: "Cardiac Intervention Procedures",
        content: "The Cath Lab at Belle Vue Multispecialty Hospital specializes in a wide range of cardiac interventional procedures. These include diagnostic angiograms, percutaneous coronary interventions (such as angioplasty and stenting), cardiac catheterizations, and electrophysiological studies. The state-of-the-art technology of the Phillips HD 10 machine enhances the accuracy and efficiency of these procedures, aiding in better decision-making and treatment planning."
      },
      {
        title: "Imaging Capabilities",
        content: "The Phillips HD 10 machine provides exceptional imaging capabilities for cardiac procedures. It uses advanced imaging modalities such as fluoroscopy, digital subtraction angiography (DSA), and intravascular ultrasound (IVUS). These imaging techniques enable cardiologists and cardiac surgeons to visualize the intricate structures of the heart, blood vessels, and surrounding anatomy, facilitating precise diagnosis and intervention."
      },
      {
        title: "Radiation Safety and Dose Management",
        content: "Patient safety is of utmost importance in our Cath Lab. The Phillips HD 10 machine is equipped with features that prioritize radiation safety and dose management. It employs low-dose imaging techniques while maintaining high image quality, minimizing radiation exposure to both patients and healthcare professionals. This ensures that cardiac procedures are performed with the highest level of safety and minimal risk."
      },
      {
        title: "Integration and Workflow Efficiency",
        content: "The Phillips HD 10 machine is designed to seamlessly integrate with other Cath Lab equipment and software, allowing for efficient workflow and streamlined procedures. It enables the seamless transfer of patient data, imaging results, and procedural information, facilitating collaborative decision-making and comprehensive patient care."
      },
      {
        title: "Skilled and Experienced Team",
        content: "Our Cath Lab is staffed by a team of highly skilled and experienced cardiologists, cardiac surgeons, and healthcare professionals. They are well-versed in utilizing the Phillips HD 10 machine and are trained to perform complex cardiac procedures with precision and expertise. The collaboration between our medical team and the advanced technology of the Cath Lab ensures optimal outcomes for our patients."
      }
    ],
    conclusion: "At Belle Vue Multispecialty Hospital, our state-of-the-art Cath Lab, featuring the Phillips HD 10 machine, exemplifies our commitment to delivering the highest standard of cardiac care. Through cutting-edge technology, skilled professionals, and a patient-centric approach, we aim to provide accurate diagnoses, effective treatments, and improved cardiovascular health for our patients."
  },
  { 
    id: "icu",
    icon: Bed, 
    title: "ICU", 
    desc: "11 fully equipped beds, 24-hour emergency availability",
    image: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Departments/ICU%20bed.png",
    sections: [
      {
        title: "ICU (11 beds 24 hours availability for any emergency )",
        content: "Belle Vue Multispecialty Hospital understands the critical importance of providing round-the-clock intensive care services, especially during emergencies. That’s why we have a dedicated Intensive Care Unit (ICU) with 11 beds, ensuring 24-hour availability for patients requiring immediate and specialized medical attention."
      },
      {
        title: "Advanced Monitoring and Life Support",
        content: "Our ICU is equipped with state-of-the-art monitoring systems and life support equipment to ensure comprehensive care for critically ill patients. This includes advanced cardiac monitors, ventilators, infusion pumps, and other essential medical devices. Our highly trained medical staff and critical care specialists closely monitor patients’ vital signs and provide timely interventions as required."
      },
      {
        title: "Specialized Medical Team",
        content: "Our ICU is staffed by a specialized medical team comprising intensivists, critical care nurses, and experienced healthcare professionals. They have extensive expertise in managing critically ill patients and are trained to handle a wide range of medical emergencies. The team works collaboratively to deliver personalized and compassionate care to each patient in the ICU."
      },
      {
        title: "Multidisciplinary Approach",
        content: "We believe in a multidisciplinary approach to patient care. In the ICU, our medical team collaborates with various specialists, including cardiologists, pulmonologists, neurologists, and surgeons, to provide comprehensive and holistic treatment plans. This ensures that patients receive well-coordinated care tailored to their specific medical needs."
      },
      {
        title: "Emergency Response",
        content: "Our ICU is equipped to handle medical emergencies 24 hours a day. Whether it’s a severe cardiac event, respiratory distress, neurological crisis, or any other critical condition, our ICU team is ready to respond promptly. We have protocols in place to ensure rapid assessment, stabilization, and initiation of appropriate treatments for emergent situations."
      },
      {
        title: "Family-Centered Care",
        content: "We understand that having a loved one in the ICU can be an emotionally challenging time for families. Our ICU staff is committed to providing compassionate support and clear communication to the patient’s family members. We believe in involving families in the care process, addressing their concerns, and keeping them informed about the patient’s condition and progress."
      },
      {
        title: "Post-ICU Care",
        content: "Our commitment to patient care extends beyond the ICU. Once a patient stabilizes, our team collaborates with other departments to facilitate a smooth transition to the appropriate level of care, such as step-down units or specialized wards. We ensure continuity of care and provide necessary support to aid the patient’s recovery process."
      }
    ],
    conclusion: "At Belle Vue Multispecialty Hospital, our ICU with 11 beds and 24-hour emergency availability serves as a critical lifeline for patients in need of intensive medical care. Through advanced technology, a skilled medical team, and a patient-centered approach, we strive to deliver the highest quality of care, improve patient outcomes, and provide support during challenging times."
  },
  { 
    id: "ot",
    icon: Activity, 
    title: "Operation Theatres", 
    desc: "2 OTs (minor + major), Laminar air flow",
    image: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Departments/Operation%20theatre%202.png",
    sections: [
      {
        title: "2 Operation theatres (minor, major)",
        content: "Belle Vue Multispecialty Hospital is equipped with two operation theatres to cater to both minor and major surgical procedures. These operation theatres are designed to meet stringent safety standards and provide a sterile environment for surgical interventions."
      },
      {
        title: "Minor Operation Theatre",
        content: "Our hospital has a dedicated minor operation theatre designed for minor surgical procedures that do not require extensive equipment or specialized facilities. This theatre is equipped to handle procedures such as minor skin surgeries, biopsies, wound dressings, and other minor interventions. It provides a clean and controlled environment for these procedures, ensuring patient safety and optimal outcomes."
      },
      {
        title: "Major Operation Theatre",
        content: "Our major operation theatre is a state-of-the-art facility designed for complex and advanced surgical procedures. Equipped with advanced surgical instruments, anesthesia equipment, and monitoring systems, this theatre provides a sterile and controlled environment for surgeries requiring a higher level of infrastructure and resources. It is staffed by skilled surgeons, anesthesiologists, nurses, and support staff who work together to ensure safe and successful surgical outcomes."
      },
      {
        title: "Sterile Environment",
        content: "Both the minor and major operation theatres at Belle Vue Multispecialty Hospital adhere to strict infection control protocols and maintain a sterile environment. This includes regular cleaning and disinfection, proper air filtration systems, and adherence to surgical hand hygiene practices. These measures minimize the risk of infections and promote patient safety during surgical procedures."
      },
      {
        title: "Advanced Equipment and Technology",
        content: "Our operation theatres are equipped with advanced surgical equipment, including anesthesia machines, surgical lights, operating tables, and imaging equipment as needed. We strive to stay updated with the latest advancements in surgical technology to enhance surgical precision, safety, and patient outcomes."
      },
      {
        title: "Skilled Surgical Team",
        content: "We have a team of highly skilled surgeons, anesthesiologists, nurses, and surgical technicians who are experienced in their respective specialties. They work together to provide comprehensive and personalized care to patients undergoing surgical procedures. Our team follows evidence-based practices and focuses on delivering quality care, ensuring patient comfort, and maintaining the highest standards of surgical expertise."
      },
      {
        title: "Post-Operative Care",
        content: "After surgery, our team ensures proper post-operative care, including monitoring the patient’s recovery, managing pain, and providing necessary follow-up instructions. We aim to support patients throughout their surgical journey, from pre-operative preparation to post-operative recovery, to promote a smooth and successful healing process."
      }
    ],
    conclusion: "At Belle Vue Multispecialty Hospital, our two operation theatres, catering to minor and major surgeries, reflect our commitment to providing a comprehensive range of surgical services in a safe and sterile environment. With a skilled surgical team and advanced infrastructure, we strive to deliver excellent surgical outcomes and ensure the well-being of our patients throughout their surgical experience."
  },
  { 
    id: "diabetic-foot",
    icon: ActivitySquare, 
    title: "Diabetic Foot", 
    desc: "Dedicated podiatry and diabetic foot care unit",
    image: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Departments/Diabetic%20foot%20care.png",
    sections: [
      {
        title: "Diabetic foot",
        content: "Diabetic foot refers to a condition that affects individuals with diabetes, leading to complications and potential damage to the feet. It is a serious condition that requires proper management and care to prevent further complications, including infections and even amputation."
      },
      {
        title: "Foot Complications in Diabetes",
        content: "Diabetes can cause a range of foot complications due to poor circulation, nerve damage (neuropathy), and impaired wound healing. These complications include diabetic neuropathy (nerve damage), peripheral arterial disease (poor blood flow), foot ulcers, infections, Charcot foot (deformity), and gangrene. It is crucial for individuals with diabetes to be vigilant about foot care to prevent these complications."
      },
      {
        title: "Importance of Foot Care",
        content: "Regular foot care is essential for individuals with diabetes to maintain foot health and prevent diabetic foot complications. This includes daily foot inspections for any signs of redness, swelling, blisters, cuts, or other abnormalities. Proper foot hygiene, regular nail trimming, and wearing well-fitting shoes and socks are also important. It is recommended to consult a healthcare professional for guidance on foot care techniques and self-examinations."
      },
      {
        title: "Diabetic Foot Ulcers",
        content: "Diabetic foot ulcers are open sores or wounds that develop on the feet. They typically occur due to a combination of factors, including neuropathy, poor circulation, and pressure from ill-fitting footwear. Diabetic foot ulcers require specialized treatment and management to promote healing and prevent infection. This may include wound dressings, offloading devices, regular debridement (removal of dead tissue), and antibiotic therapy if necessary."
      },
      {
        title: "Multidisciplinary Foot Care Team",
        content: "The management of diabetic foot often involves a multidisciplinary approach. A team of healthcare professionals, including endocrinologists, podiatrists, wound care specialists, vascular surgeons, and infectious disease specialists, collaborate to provide comprehensive care. This team approach ensures a holistic evaluation and treatment plan tailored to the individual’s specific needs."
      },
      {
        title: "Offloading and Pressure Redistribution",
        content: "Offloading techniques aim to reduce pressure on the foot ulcers and promote healing. This may involve the use of specialized footwear, casts, braces, or orthotic devices to redistribute pressure and protect the affected areas. Offloading helps to relieve pressure on the ulcers, allowing the wounds to heal more effectively."
      },
      {
        title: "Education and Self-Management",
        content: "Education plays a crucial role in the prevention and management of diabetic foot complications. Individuals with diabetes should receive proper education on foot care techniques, including daily self-inspection, appropriate footwear selection, and prompt reporting of any abnormalities to their healthcare provider. Self-management skills empower individuals to take an active role in preventing complications and seeking timely medical intervention."
      }
    ],
    conclusion: "It is important for individuals with diabetes to prioritize foot care and undergo regular foot examinations by healthcare professionals specializing in diabetic foot management. By adopting a proactive approach to foot health and adhering to the recommended preventive measures and treatment plans, the risk of diabetic foot complications can be significantly reduced."
  },
  { 
    id: "radiology",
    icon: Scan, 
    title: "Radiology", 
    desc: "Sonography, Digital X-ray, Echocardiography, Colour Doppler",
    image: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Departments/Radiology%20Department.png",
    sections: [
      {
        title: "Radiology Department – sonography & Xray",
        content: "Belle Vue Multispecialty Hospital is equipped with a comprehensive Radiology Department that offers a range of diagnostic imaging services, including sonography and X-ray. These imaging modalities play a crucial role in diagnosing various medical conditions and guiding appropriate treatment plans."
      },
      {
        title: "Sonography (Ultrasound)",
        content: "Sonography, also known as ultrasound, is a non-invasive imaging technique that uses high-frequency sound waves to produce real-time images of the internal structures of the body. It is commonly used to examine organs, tissues, and blood vessels. Our Radiology Department offers sonography services for various applications, including abdominal imaging, pelvic imaging, obstetric and gynecological evaluations, musculoskeletal assessments, and vascular studies. Sonography is safe, painless, and does not involve ionizing radiation, making it a preferred imaging modality for many medical conditions."
      },
      {
        title: "X-ray",
        content: "X-ray imaging is a widely used diagnostic tool that produces images by passing a small amount of radiation through the body. It is effective in capturing images of bones, lungs, and other dense tissues. X-rays help in diagnosing fractures, bone abnormalities, lung diseases, and detecting foreign objects within the body. Our Radiology Department provides X-ray services, utilizing modern X-ray equipment that produces high-quality images with minimal radiation exposure. Safety measures, such as lead shielding and collimation, are employed to minimize radiation dose to patients while maintaining diagnostic image quality."
      },
      {
        title: "Expert Radiologists and Technologists",
        content: "Our Radiology Department is staffed with experienced radiologists and skilled radiology technologists who specialize in performing and interpreting imaging studies. These professionals have extensive knowledge and expertise in their respective fields, ensuring accurate and reliable diagnoses. They work closely with other healthcare providers to provide comprehensive reports and aid in patient management."
      },
      {
        title: "Advanced Imaging Technology",
        content: "Belle Vue Multispecialty Hospital is committed to utilizing advanced imaging technology to deliver precise and detailed diagnostic information. Our Radiology Department is equipped with modern ultrasound machines and digital X-ray systems that offer high-resolution images. These technologies aid in detecting subtle abnormalities, enhancing diagnostic accuracy, and assisting in appropriate treatment planning."
      },
      {
        title: "Timely Reporting and Collaboration",
        content: "Our Radiology Department strives to provide prompt reporting of imaging studies to facilitate timely patient care. Radiology reports are generated by our expert radiologists and shared with the referring physicians, enabling collaborative decision-making and streamlined patient management. We prioritize effective communication among healthcare teams to ensure optimal patient outcomes."
      },
      {
        title: "Patient Comfort and Safety",
        content: "Patient comfort and safety are of utmost importance in our Radiology Department. Our staff is trained to address any concerns or questions patients may have about the imaging procedures. We adhere to strict safety protocols and guidelines to minimize radiation exposure and ensure patient well-being throughout the imaging process."
      }
    ],
    conclusion: "At Belle Vue Multispecialty Hospital, our Radiology Department offers comprehensive sonography and X-ray services, backed by advanced technology and a team of skilled professionals. We are committed to providing accurate and timely diagnostic imaging, contributing to effective patient care."
  },
  { 
    id: "pathology",
    icon: TestTube, 
    title: "Pathology Lab", 
    desc: "Comprehensive in-house diagnostic lab",
    image: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Departments/Pathology%20lab.png",
    sections: [
      {
        title: "Pathology lab",
        content: "Belle Vue Multispecialty Hospital houses a well-equipped Pathology Laboratory that plays a vital role in diagnosing and monitoring various diseases. Our Pathology Laboratory is staffed by experienced pathologists, medical technologists, and technicians who perform a wide range of diagnostic tests and analyses."
      },
      {
        title: "Diagnostic Testing",
        content: "Our Pathology Laboratory offers a comprehensive range of diagnostic tests to aid in the detection, diagnosis, and monitoring of diseases. This includes tests such as blood tests, urine analysis, tissue biopsies, cytology evaluations, genetic testing, and molecular diagnostics. These tests help in identifying the presence of infections, analyzing blood cell counts, assessing organ function, detecting genetic abnormalities, and diagnosing various types of cancers and other diseases."
      },
      {
        title: "Hematology and Blood Tests",
        content: "Our Pathology Laboratory performs hematology tests that evaluate the components of blood, such as red blood cells, white blood cells, and platelets. These tests aid in the diagnosis of anemia, blood disorders, infections, and other hematological conditions. We also offer a wide range of blood tests, including complete blood count (CBC), blood chemistry profiles, coagulation studies, and blood typing."
      },
      {
        title: "Microbiology and Infectious Disease Testing",
        content: "Our laboratory specializes in microbiology testing to identify infectious agents, such as bacteria, viruses, fungi, and parasites. We perform cultures, sensitivity testing, and molecular tests to identify the causative organisms responsible for infections. These tests help guide appropriate treatment strategies and ensure targeted therapy for infectious diseases."
      },
      {
        title: "Histopathology and Cytopathology",
        content: "Our Pathology Laboratory provides histopathology services for the examination of tissue samples obtained through biopsies or surgical procedures. This involves the microscopic evaluation of tissues to diagnose diseases such as cancer, inflammatory conditions, and structural abnormalities. Cytopathology involves the examination of individual cells, typically obtained through methods like fine-needle aspirations or Pap smears, to detect abnormalities or early signs of cancer."
      },
      {
        title: "Quality Assurance and Accreditation",
        content: "Quality assurance is a top priority in our Pathology Laboratory. We adhere to stringent quality control measures, follow standardized protocols, and participate in external quality assurance programs to ensure accurate and reliable test results. Our laboratory is also accredited by relevant regulatory bodies, demonstrating our commitment to maintaining high standards of quality and patient care."
      },
      {
        title: "Timely Reporting and Consultation",
        content: "Our Pathology Laboratory is dedicated to providing timely and accurate test results. Once the analysis is complete, our pathologists generate detailed reports and collaborate with referring physicians to interpret the results and guide appropriate patient management. They are available for consultation, discussing test findings, and assisting in clinical decision-making."
      }
    ],
    conclusion: "At Belle Vue Multispecialty Hospital, our Pathology Laboratory plays a critical role in disease diagnosis, monitoring, and treatment planning. With advanced technology, a skilled team of professionals, and a commitment to quality, we strive to deliver accurate and comprehensive pathology services to support optimal patient care."
  },
  { 
    id: "pharmacy",
    icon: Pill, 
    title: "Pharmacy", 
    desc: "24/7 pharmacy and medical store on premises",
    image: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Departments/General%20Medicine.jpg",
    sections: [
      {
        title: "Pharmacy",
        content: "Belle Vue Multispecialty Hospital understands the importance of providing convenient access to medications for our patients. To fulfill this need, we have an in-house pharmacy located within the hospital premises."
      },
      {
        title: "Medication Dispensing",
        content: "Our pharmacy is responsible for dispensing prescribed medications to patients. Whether you are an inpatient or an outpatient, our pharmacy team will ensure that you receive the necessary medications as per your healthcare provider’s instructions. We stock a wide range of medications, including brand-name and generic drugs, to meet the diverse needs of our patients."
      },
      {
        title: "Prescription Processing",
        content: "Our pharmacy works closely with healthcare providers to process prescriptions efficiently. Once your healthcare provider writes a prescription, they can electronically transmit it to our pharmacy, ensuring a seamless and prompt process. Our dedicated pharmacists review prescriptions for accuracy, safety, and appropriateness, providing an additional layer of medication safety."
      },
      {
        title: "Medication Counseling",
        content: "Our pharmacy team consists of knowledgeable pharmacists who are available to provide medication counseling and answer any questions you may have about your medications. They can offer guidance on proper medication use, potential side effects, drug interactions, and storage requirements. The goal is to ensure that you have a clear understanding of your prescribed medications and can take them safely and effectively."
      },
      {
        title: "Medication Safety and Quality Assurance",
        content: "At Belle Vue Multispecialty Hospital, patient safety is of paramount importance. Our pharmacy adheres to stringent quality assurance measures to ensure that all medications are handled, stored, and dispensed appropriately. We follow standardized protocols and best practices to minimize the risk of medication errors and ensure the highest standards of medication safety."
      },
      {
        title: "Specialty Medications",
        content: "In addition to general medications, our pharmacy may also provide specialty medications for specific conditions. These may include medications for chronic diseases, specialized therapies, or medications that require special handling or administration. Our pharmacy team works closely with healthcare providers to procure and dispense these medications, providing comprehensive support for patients with unique medication needs."
      },
      {
        title: "Insurance and Billing",
        content: "Our pharmacy staff is knowledgeable about insurance coverage and can assist you with medication-related insurance queries. They can provide information about insurance networks, formulary coverage, and other aspects related to medication billing and reimbursement. They work closely with insurance providers to ensure a smooth and hassle-free experience for patients."
      }
    ],
    conclusion: "Please note that specific pharmacy services and processes may vary depending on the regulations and policies in your region. However, our goal remains the same – to provide convenient access to medications and ensure patient safety and satisfaction. At Belle Vue Multispecialty Hospital, our in-house pharmacy is dedicated to meeting your medication needs with quality, safety, and convenience in mind. Our experienced pharmacy team is committed to providing personalized care and ensuring that you have access to the medications prescribed by your healthcare provider."
  },
  { 
    id: "rooms",
    icon: DoorOpen, 
    title: "Rooms", 
    desc: "VIP Suite, Triple, Twin, Deluxe, Classic Suites",
    image: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Departments/VIP%20ROOMS.png",
    sections: [
      {
        title: "ROOMS – VIP suite, triple, twin, Deluxe, Classic suites",
        content: "Belle Vue Multispecialty Hospital offers a variety of room options to cater to the diverse needs and preferences of our patients."
      },
      {
        title: "VIP Suite",
        content: "Our VIP Suite is designed to provide utmost comfort and luxury for patients who desire a premium experience. These spacious suites feature separate living and sleeping areas, elegant furnishings, a private bathroom, and amenities such as a flat-screen TV, Wi-Fi access, and personalized services. The VIP Suite offers a tranquil and exclusive environment for patients and their families."
      },
      {
        title: "Triple Room",
        content: "Our Triple Rooms are designed to accommodate three patients comfortably. These rooms are equipped with multiple beds and are ideal for patients who prefer to share a room with others. Each patient is provided with a separate bed and personal space while still enjoying the convenience and cost-effectiveness of a shared accommodation option."
      },
      {
        title: "Twin Room",
        content: "The Twin Rooms at our hospital provide accommodation for two patients. These rooms feature two separate beds and amenities for each patient, ensuring privacy and comfort. Twin rooms are suitable for patients who prefer to share a room with a companion or family member during their hospital stay."
      },
      {
        title: "Deluxe Suite",
        content: "Our Deluxe Suites offer a luxurious and comfortable environment for patients. These suites are designed with attention to detail, featuring a well-appointed bedroom, a separate living area, a private bathroom, and amenities such as a television, Wi-Fi access, and personalized services. The Deluxe Suites provide a serene and relaxing space for patients to recover and rejuvenate."
      },
      {
        title: "Classic Suite",
        content: "The Classic Suites provide a comfortable and cozy atmosphere for patients. These suites typically consist of a bedroom area with essential amenities, a private bathroom, and additional conveniences to enhance the patient’s comfort. Classic Suites offer a warm and welcoming environment for patients during their hospital stay."
      }
    ],
    conclusion: "Regardless of the room type chosen, our hospital strives to create a soothing and patient-centric atmosphere. Our dedicated staff is committed to ensuring the well-being and comfort of all patients, providing personalized care and support throughout their stay. Please note that the availability of specific room types may vary depending on the hospital’s facilities and the current demand. It is advisable to inquire about the availability and pricing of different room options at the time of booking or admission."
  },
  { 
    id: "oncology",
    icon: ShieldAlert, 
    title: "Oncology", 
    desc: "Cancer care + Chemotherapy department",
    image: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Departments/Oncology%20Department.png",
    sections: [
      {
        title: "Oncology department (Includes Chemotherapy)",
        content: "Belle Vue Multispecialty Hospital is proud to have a dedicated Oncology Department that specializes in the diagnosis, treatment, and care of patients with cancer. Our Oncology Department is staffed by a team of highly skilled and experienced oncologists, surgeons, radiation therapists, nurses, and support staff."
      },
      {
        title: "Comprehensive Cancer Care",
        content: "Our Oncology Department offers comprehensive cancer care services, covering a wide range of cancers and treatment modalities. We provide specialized care for various types of cancer, including breast cancer, lung cancer, colorectal cancer, prostate cancer, ovarian cancer, and more. Our team of oncology experts collaborates closely to develop personalized treatment plans tailored to each patient’s specific needs."
      },
      {
        title: "Multidisciplinary Approach",
        content: "We follow a multidisciplinary approach to cancer care, involving a team of healthcare professionals from different specialties. This collaborative approach ensures that patients receive comprehensive evaluations, accurate diagnoses, and individualized treatment strategies. Our multidisciplinary team includes medical oncologists, surgical oncologists, radiation oncologists, radiologists, pathologists, genetic counselors, and supportive care specialists."
      },
      {
        title: "Advanced Diagnostic Services",
        content: "Our Oncology Department is equipped with state-of-the-art diagnostic technology to aid in the accurate diagnosis and staging of cancer. We offer a range of diagnostic services, including imaging studies such as CT scans, MRI scans, PET-CT scans, and molecular imaging. Additionally, we perform biopsies, cytology evaluations, and genetic testing to provide precise and tailored treatment recommendations."
      },
      {
        title: "Treatment Modalities",
        content: "Our Oncology Department offers a comprehensive range of treatment modalities to address different types and stages of cancer. These may include surgery, chemotherapy, radiation therapy, immunotherapy, targeted therapy, hormone therapy, and precision medicine approaches. Our team of oncologists works closely with patients to determine the most appropriate treatment options based on the specific cancer type, stage, and individual patient factors."
      },
      {
        title: "Supportive Care Services",
        content: "We understand that cancer treatment can be physically and emotionally challenging. To provide holistic care, our Oncology Department offers supportive care services that focus on managing symptoms, improving quality of life, and providing psychosocial support to patients and their families. These services may include pain management, nutritional counseling, rehabilitation, counseling services, survivorship programs, and palliative care."
      },
      {
        title: "Clinical Trials and Research",
        content: "Our Oncology Department actively participates in clinical trials and research to advance cancer treatment options and improve patient outcomes. By offering access to innovative therapies and participating in cutting-edge research, we strive to provide our patients with the most advanced and effective treatment options available."
      }
    ],
    conclusion: "At Belle Vue Multispecialty Hospital, our Oncology Department is committed to providing compassionate and comprehensive care to individuals affected by cancer. We prioritize personalized treatment, state-of-the-art technology, and a multidisciplinary approach to ensure the best possible outcomes for our patients."
  },
  { 
    id: "dialysis",
    icon: Droplets, 
    title: "Dialysis Unit", 
    desc: "Fully equipped dialysis centre",
    image: "https://zpojmqmlenivqxqcsuwc.supabase.co/storage/v1/object/public/Stalite%20Media/Bellvue%20Remake/Departments/Dialysis%20unit.png",
    sections: [
      {
        title: "Dialysis unit",
        content: "Belle Vue Multispecialty Hospital is equipped with a dedicated Dialysis Unit to provide high-quality care for patients with kidney disease and those in need of dialysis treatment. Our Dialysis Unit is designed to offer a comfortable and safe environment while delivering essential renal care services."
      },
      {
        title: "Hemodialysis",
        content: "Our Dialysis Unit specializes in hemodialysis, which is a common method of renal replacement therapy. Hemodialysis involves the use of a dialysis machine to remove waste products, excess fluids, and toxins from the blood. Our unit is equipped with advanced dialysis machines that employ cutting-edge technology to ensure optimal treatment outcomes. Our experienced nephrologists, dialysis nurses, and technicians oversee and administer the dialysis treatments."
      },
      {
        title: "Skilled Medical Team",
        content: "Our Dialysis Unit consists of a skilled and compassionate medical team specialized in nephrology and dialysis care. Our nephrologists are experts in managing kidney diseases and overseeing dialysis treatment plans. Our dedicated dialysis nurses and technicians are trained in providing personalized care during dialysis sessions, closely monitoring patients, and ensuring their safety and comfort throughout the procedure."
      },
      {
        title: "Comprehensive Dialysis Services",
        content: "We offer comprehensive dialysis services to meet the individual needs of our patients. This includes scheduled maintenance dialysis sessions, as well as urgent or emergency dialysis treatments when required. Our Dialysis Unit operates during convenient hours to accommodate various schedules, ensuring flexibility and accessibility for patients in need of regular dialysis treatments."
      },
      {
        title: "Infection Control Measures",
        content: "Infection control is of paramount importance in our Dialysis Unit. We strictly adhere to rigorous infection control protocols to minimize the risk of infections and maintain a safe environment for patients. Our unit follows strict hygiene practices, including the use of sterile equipment, regular disinfection of dialysis machines and surfaces, and adherence to hand hygiene and personal protective measures."
      },
      {
        title: "Patient Education and Support",
        content: "We believe in empowering our patients with knowledge and support to actively participate in their own care. Our Dialysis Unit provides comprehensive patient education programs, including information on kidney health, dietary guidelines, medication management, and self-care techniques. We also offer counseling and support services to address the emotional and psychological aspects of living with kidney disease and undergoing dialysis treatment."
      },
      {
        title: "Continuous Monitoring and Follow-up",
        content: "Our Dialysis Unit ensures continuous monitoring of patients during dialysis sessions, with regular assessments of vital signs and response to treatment. We maintain detailed records of each dialysis session to track progress and make necessary adjustments to treatment plans. Additionally, we provide ongoing follow-up care to assess the effectiveness of treatment, manage any complications, and support patients in maintaining optimal kidney health."
      }
    ],
    conclusion: "At Belle Vue Multispecialty Hospital, our Dialysis Unit is dedicated to providing exceptional renal care services through advanced technology, skilled professionals, and a patient-centered approach. We strive to improve the quality of life for patients with kidney disease and ensure the best possible outcomes for those in need of dialysis treatment."
  },
  { 
    id: "geriatric",
    icon: Users, 
    title: "Geriatric Centre", 
    desc: "Elder care centre. Click to visit aajicare.in",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://aajicare.in/"
  }
];
