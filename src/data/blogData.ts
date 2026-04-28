import { Calendar, User } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "cancer-health-awareness",
    title: "Cancer Health & Awareness: A Comprehensive Guide to Prevention, Detection, and Treatment",
    excerpt: "Understanding cancer is the first step in fighting it. Learn about prevention strategies, early detection methods, and modern treatment options.",
    content: `Understanding cancer is the first step in fighting it. It’s a complex group of diseases with many possible causes, but advances in medical science have vastly improved our ability to prevent, detect, and treat it.

## Prevention: Your First Line of Defense
While not all cancers are preventable, healthy lifestyle choices can significantly reduce your risk:
- **Avoid Tobacco:** Smoking and chewing tobacco are linked to various types of cancer, not just lung cancer.
- **Eat a Healthy Diet:** Focus on plenty of fruits, vegetables, whole grains, and lean proteins. Limit processed meats and excessive alcohol consumption.
- **Maintain a Healthy Weight and Be Physically Active:** Regular exercise helps control weight, which lowers the risk of breast, prostate, lung, colon, and kidney cancers.
- **Protect Yourself from the Sun:** Use sunscreen, wear protective clothing, and avoid midday sun to reduce skin cancer risk.

## Early Detection: Finding It When It's Most Treatable
Regular screenings can detect certain cancers early, when treatment is most likely to be successful. 
- **Breast Cancer:** Mammograms are crucial for early detection.
- **Cervical Cancer:** Pap smears and HPV testing are recommended.
- **Colorectal Cancer:** Colonoscopies can find precancerous polyps before they turn into cancer.
- **Prostate Cancer:** Discuss PSA testing with your doctor.

## Treatment: A Multidisciplinary Approach
If cancer is diagnosed, a multidisciplinary approach provides the best care. At Belle Vue Multispecialty Hospital, our Oncology Department offers:
- **Surgery:** To remove the tumor or cancerous tissue.
- **Chemotherapy:** Using drugs to kill cancer cells.
- **Radiation Therapy:** Using high doses of radiation to kill cancer cells or shrink tumors.
- **Targeted Therapy & Immunotherapy:** Newer treatments that target specific parts of cancer cells or boost the body's immune system to fight the cancer.

Awareness empowers you to take control of your health. Consult with our specialists to understand your risks and establish an appropriate screening schedule.`,
    author: "Dr. Oncology Team",
    date: "April 28, 2026",
    category: "Oncology",
    imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "moving-more-every-day",
    title: "Why Moving More Every Day Is Essential for a Healthy Life",
    excerpt: "Physical activity isn't just about weight loss; it's a fundamental pillar of overall health, affecting everything from your heart to your mental wellbeing.",
    content: `In our modern, increasingly sedentary world, finding time to move has never been more important. Physical activity isn't just about weight loss; it's a fundamental pillar of overall health, affecting everything from your heart to your mental wellbeing.

## The Physical Benefits of Movement
- **Cardiovascular Health:** Regular exercise strengthens the heart muscle, improves circulation, and helps manage blood pressure and cholesterol levels.
- **Bone and Muscle Strength:** Weight-bearing exercises help build and maintain bone density, reducing the risk of osteoporosis. Strong muscles support joints and prevent injuries.
- **Metabolic Health:** Physical activity improves insulin sensitivity, helping to prevent or manage type 2 diabetes.

## The Mental and Emotional Boost
- **Stress Reduction:** Exercise releases endorphins, the body's natural mood lifters, helping to alleviate stress, anxiety, and depression.
- **Better Sleep:** Regular physical activity can help you fall asleep faster and deepen your sleep.
- **Cognitive Function:** Movement increases blood flow to the brain, which can help improve memory, focus, and protect against cognitive decline in older adults.

## How to Incorporate More Movement
You don't need to spend hours in the gym to reap the benefits. Small changes add up:
- **Take the Stairs:** A simple swap that burns calories and builds leg strength.
- **Walking Meetings:** If possible, take your meetings on the go.
- **Active Commuting:** Try walking or cycling part or all of your way to work.
- **Stretching Breaks:** Stand up and stretch for 5 minutes every hour to break up prolonged sitting.

Aim for at least 150 minutes of moderate-intensity aerobic physical activity throughout the week. Remember, any movement is better than none. Start small and gradually build a more active lifestyle.`,
    author: "Wellness Team",
    date: "April 20, 2026",
    category: "Wellness",
    imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "preventive-care-matters",
    title: "Value Health More Than Sickness: Why Preventive Care Matters",
    excerpt: "Shifting our focus from reacting to illness to proactively maintaining health through preventive care is crucial for a longer, better life.",
    content: `Traditionally, many people only visit the doctor when they feel unwell. However, shifting our focus from reacting to illness to proactively maintaining health—preventive care—is a far more effective strategy for a long, healthy life.

## What is Preventive Care?
Preventive care involves measures taken for disease prevention, as opposed to disease treatment. It includes routine check-ups, screenings, immunizations, and patient counseling to prevent illnesses, disease, or other health problems.

## The Benefits of Being Proactive
- **Early Detection saves lives:** Screenings can detect conditions like high blood pressure, diabetes, or cancer early, often before symptoms appear. Early detection generally leads to better outcomes and simpler treatments.
- **Cost-Effective in the long run:** Treating a disease in its advanced stages is almost always more expensive than preventing it or treating it early. 
- **Better Quality of Life:** By preventing chronic diseases or managing them effectively from the start, you can maintain your health, independence, and overall quality of life as you age.

## Key Preventive Services Mentioned
- **Annual Physical Exams:** A comprehensive review of your overall health.
- **Vaccinations:** Protecting against infectious diseases like influenza, pneumonia, and tetanus.
- **Age and Gender-Specific Screenings:** such as mammograms, colonoscopies, prostate checks, and bone density scans.
- **Lifestyle Counseling:** Guidance on nutrition, exercise, smoking cessation, and stress management.

## Make the Shift
Valuing health over sickness means prioritizing these preventive steps even when you feel perfectly fine. Talk to your healthcare provider at Belle Vue Multispecialty Hospital to create a personalized preventive care plan based on your age, gender, family history, and lifestyle. Your future self will thank you.`,
    author: "Dr. General Medicine",
    date: "April 15, 2026",
    category: "General Medicine",
    imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "10-early-signs-health-problems",
    title: "10 Early Signs Your Body Is Warning You About Health Problems",
    excerpt: "Your body often gives you subtle hints when something is wrong. Here are 10 early signs you shouldn't ignore.",
    content: `Your body is a complex, incredibly communicative machine. Long before a major health crisis hits, it often sends out subtle warning signs that something isn’t functioning quite right. Recognizing these early signals can be the difference between a quick fix and a chronic condition. Here are 10 early signs your body is warning you about potential health problems:

## 1. Unexplained Weight Loss
Losing weight without trying might sound like a dream, but if you drop 10 pounds or more without changing your diet or exercise habits, it's a red flag. Unexplained weight loss can be a sign of an overactive thyroid, diabetes, depression, or even cancer.

## 2. Persistent Fatigue
We all get tired, but fatigue that doesn't improve with rest is not normal. It can signify anemia, a thyroid disorder, sleep apnea, heart disease, or chronic fatigue syndrome.

## 3. Changes in Bowel Habits
Significant changes in your bowel movements—such as persistent diarrhea, constipation, or noticing blood in your stool—warrant a visit to the doctor. These can be symptoms of irritable bowel syndrome (IBS), infections, thyroid issues, or colon cancer.

## 4. Frequent Headaches
While occasional tension headaches are common, new or unusually severe headaches, or headaches accompanied by other symptoms like vision changes, weakness, or confusion, require immediate medical attention. They could indicate high blood pressure, neurological issues, or a stroke.

## 5. Shortness of Breath
If you find yourself gasping for air after minimal exertion or waking up breathless during the night, don't ignore it. This can be a sign of asthma, chronic obstructive pulmonary disease (COPD), heart failure, or a blood clot in the lung.

## 6. Skin Changes
New moles, changes in existing moles, unusual sores that won't heal, or persistent rashes should be evaluated by a dermatologist. Changes in skin color, such as jaundice (yellowing), indicate liver problems.

## 7. Constant Thirst and Frequent Urination
Excessive thirst (polydipsia) and frequent urination (polyuria) are classic early warning signs of diabetes. If your body is unable to process glucose properly, it tries to flush out the excess sugar through urine.

## 8. Joint Pain and Swelling
Occasional aches are a part of life, but persistent joint pain, swelling, stiffness, or redness can indicate arthritis, autoimmune diseases like lupus or rheumatoid arthritis, or an infection.

## 9. Difficulty Swallowing
If you frequently feel like food is getting stuck in your throat or chest, or if swallowing is painful, it's time to see a doctor. This could be a sign of esophageal issues, gastroesophageal reflux disease (GERD), or esophageal cancer.

## 10. Unexplained Mood Changes
Significant, unexplained changes in your mood, such as increasing anxiety, severe depression, sudden irritability, or confusion, can have physical causes. These include thyroid disorders, hormonal imbalances, neurological conditions, or medication side effects.

### Listen to Your Body
Your body’s warning signs are its way of asking for help. If you experience any of these symptoms persistently, do not try to self-diagnose or ignore them. Schedule an appointment with our expert doctors at Belle Vue Multispecialty Hospital to get a proper diagnosis and protect your long-term health.`,
    author: "Dr. General Medicine",
    date: "April 10, 2026",
    category: "General Medicine",
    imageUrl: "https://images.unsplash.com/photo-1584036561566-baf8b5f14ea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "how-often-full-body-checkup",
    title: "How Often Should You Get a Full Body Checkup?",
    excerpt: "Regular health checkups are vital for disease prevention. Find out how often you should schedule your next full body examination based on your age and risk factors.",
    content: `The old adage "prevention is better than cure" has never been more relevant. A full body checkup is a comprehensive health assessment designed to detect diseases early, often before symptoms even arise. But a common question we hear at Belle Vue Multispecialty Hospital is: "How often do I actually need a full body checkup?" 

The answer isn't a one-size-fits-all number. It depends heavily on your age, lifestyle, family medical history, and overall health status.

## General Guidelines by Age

### In Your 20s and 30s
For young, healthy adults without a family history of chronic illnesses, a comprehensive checkup is generally recommended **every 2 to 3 years**.
- **Key Focus:** Establishing baseline metrics (blood pressure, cholesterol, blood sugar), screening for sexually transmitted infections (STIs), Pap smears for women, and discussing lifestyle habits (diet, exercise, mental health).

### In Your 40s
As you enter your 40s, the risk for certain conditions increases. A checkup is recommended **every 1 to 2 years**.
- **Key Focus:** More frequent monitoring of blood pressure, blood glucose, and cholesterol. For women, mammograms usually begin in this decade. For both men and women, discussions about colon cancer screening options should start.

### In Your 50s and Beyond
Once you hit 50, an **annual** full body checkup becomes crucial. 
- **Key Focus:** Annual screenings for colon cancer, prostate cancer (for men), breast cancer (for women), bone density tests to check for osteoporosis, and comprehensive cardiovascular risk assessments.

## When Should You Get Checked More Frequently?
You may need more frequent checkups, regardless of your age, if any of the following apply to you:

1. **Family History:** If you have a strong family history of heart disease, diabetes, cancer, or other genetic conditions, you should start screening earlier and more frequently.
2. **Pre-existing Conditions:** If you have already been diagnosed with a chronic condition like hypertension, diabetes, or high cholesterol, you will need regular monitoring to manage the disease and prevent complications.
3. **Lifestyle Factors:** If you smoke, consume alcohol heavily, have a sedentary lifestyle, or are obese, you are at a higher risk for lifestyle-related diseases and should be monitored more closely.
4. **New Symptoms:** Never wait for your scheduled checkup if you experience new, unexplained symptoms (like those mentioned in our "10 Early Signs" blog).

## What Does a Full Body Checkup Usually Include?
While packages vary, a standard comprehensive checkup often includes:
- **Clinical Evaluation:** Consultation with a physician, physical examination.
- **Laboratory Tests:** Complete blood count (CBC), lipid profile (cholesterol), blood sugar (fasting and post-prandial), liver function test, kidney function test, thyroid profile, and urine analysis.
- **Imaging and Diagnostics:** Chest X-ray, ECG (Electrocardiogram), and an ultrasound of the abdomen and pelvis.

### Take Charge of Your Health Today
Don't wait until you feel sick to see a doctor. Regular health checkups are an investment in your future well-being. Contact Belle Vue Multispecialty Hospital today to book a health checkup package tailored to your specific needs and age group.`,
    author: "Preventive Care Team",
    date: "April 5, 2026",
    category: "Preventive Health",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];
