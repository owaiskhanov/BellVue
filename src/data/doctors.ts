export interface Doctor {
  name: string;
  speciality: string;
  type: 'Panel' | 'Visiting';
}

export const doctors: Doctor[] = [
  { name: 'Dr. V.N. Lulla', speciality: 'Physician & Clinical Cardiologist', type: 'Panel' },
  { name: 'Dr. Shrirang Sanglikar', speciality: 'Physician & Clinical Cardiologist', type: 'Panel' },
  { name: 'Dr. Abhishek Bhargav', speciality: 'Physician & Clinical Cardiologist', type: 'Visiting' },
  { name: 'Dr. Asif Bhojani', speciality: 'Physician & Clinical Cardiologist', type: 'Visiting' },
  { name: 'Dr. Ayub Ali Qureshi', speciality: 'Physician & Clinical Cardiologist', type: 'Visiting' },
  { name: 'Dr. C.C. Nair', speciality: 'Physician & Clinical Cardiologist', type: 'Visiting' },
  { name: 'Dr. Chitra Sunder', speciality: 'Physician & Clinical Cardiologist', type: 'Visiting' },
  { name: 'Dr. Deepak Rajani', speciality: 'Physician & Clinical Cardiologist', type: 'Visiting' },
  { name: 'Dr. Naresh Shetty', speciality: 'Physician & Clinical Cardiologist', type: 'Visiting' },
  { name: 'Dr. Pradeep Sanghvi', speciality: 'Physician & Clinical Cardiologist', type: 'Visiting' },
  { name: 'Dr. Subhash Pawar', speciality: 'Physician & Clinical Cardiologist', type: 'Visiting' },
  { name: 'Dr. M.S. Menon', speciality: 'Physician & Clinical Cardiologist', type: 'Visiting' },
  { name: 'Dr. Pradeep Biwalkar', speciality: 'Physician & Clinical Cardiologist', type: 'Visiting' },
  { name: 'Dr. Amit Kumar Shah', speciality: 'Physician & Clinical Cardiologist', type: 'Visiting' },
  { name: 'Dr. Aabid Khan', speciality: 'Physician & Clinical Cardiologist', type: 'Visiting' },
  
  { name: 'Dr. Kiran Narang', speciality: 'Interventional Cardiologist', type: 'Visiting' },
  { name: 'Dr. Haresh Mehta', speciality: 'Interventional Cardiologist', type: 'Visiting' },
  { name: 'Dr. Siddharth Seth', speciality: 'Interventional Cardiologist', type: 'Visiting' },
  { name: 'Dr. Harish Bajaj', speciality: 'Interventional Cardiologist', type: 'Visiting' },
  { name: 'Dr. Ashish Amladi', speciality: 'Interventional Cardiologist', type: 'Visiting' },
  { name: 'Dr. Vivek Mehan', speciality: 'Interventional Cardiologist', type: 'Visiting' },
  { name: 'Dr. Anand Rao', speciality: 'Interventional Cardiologist', type: 'Visiting' },
  { name: 'Dr. Sanjay Ravat', speciality: 'Interventional Cardiologist', type: 'Visiting' },
  
  { name: 'Dr. Ujjay Jadhav', speciality: 'Anaesthetist', type: 'Visiting' },
  { name: 'Dr. Arun Devrajan', speciality: 'Anaesthetist', type: 'Visiting' },
  { name: 'Dr. Mugdha Oak', speciality: 'Anaesthetist', type: 'Visiting' },
  { name: 'Dr. Shilpa Ruparel', speciality: 'Anaesthetist', type: 'Visiting' },
  { name: 'Dr. Nitin Bhorkar', speciality: 'Anaesthetist', type: 'Visiting' },
  { name: 'Dr. Himanshu Chitre', speciality: 'Anaesthetist', type: 'Visiting' },
  { name: 'Dr. Nalini Patel', speciality: 'Anaesthetist', type: 'Visiting' },
  { name: 'Dr. Pramod Mishra', speciality: 'Anaesthetist', type: 'Visiting' },
  { name: 'Dr. Salyankar', speciality: 'Anaesthetist', type: 'Visiting' },
  { name: 'Dr. Bindu M.', speciality: 'Anaesthetist', type: 'Visiting' },
  { name: 'Dr. Bhargav Patel', speciality: 'Anaesthetist', type: 'Visiting' },
  { name: 'Dr. Kusum Kankani', speciality: 'Anaesthetist', type: 'Visiting' },
  { name: 'Dr. Pritesh Shah', speciality: 'Anaesthetist', type: 'Visiting' },
  
  { name: 'Dr. J.L. Kulkarni', speciality: 'Paediatrician', type: 'Visiting' },
  { name: 'Dr. Deepa Bhandarkar', speciality: 'Paediatrician', type: 'Visiting' },
  
  { name: 'Dr. Kiran Paknikar', speciality: 'Spine Surgeon', type: 'Visiting' },
  { name: 'Dr. Sandeep Sonone', speciality: 'Spine Surgeon', type: 'Visiting' },
  { name: 'Dr. Aditya Kashikar', speciality: 'Spine Surgeon', type: 'Visiting' },
  
  { name: 'Dr. Shrinath Kshirsagar', speciality: 'Hematologist', type: 'Visiting' },
  { name: 'Dr. Abhay Bhave', speciality: 'Hematologist', type: 'Visiting' },
  { name: 'Dr. Deepkumar Mahajan', speciality: 'Hematologist', type: 'Visiting' },
  { name: 'Dr. Mukesh Desai', speciality: 'Hematologist', type: 'Visiting' },
  
  { name: 'Dr. Shilpa Nayak', speciality: 'Allergy', type: 'Panel' },
  
  { name: 'Dr. Tejas Dharia', speciality: 'Varicose Veins', type: 'Visiting' },
  
  { name: 'Dr. Sumit Agrawal', speciality: 'Cosmetic / Plastic Surgeon', type: 'Visiting' },
  { name: 'Dr. Siddharth Prakash', speciality: 'Cosmetic / Plastic Surgeon', type: 'Visiting' },
  
  { name: 'Dr. Shilpa Verma', speciality: 'Dietician', type: 'Panel' },
  
  { name: 'Dr. Jessy Thomas', speciality: 'Diabetic Foot Surgeon', type: 'Visiting' },
  
  { name: 'Dr. Srushti Bhujbale', speciality: 'Ayurveda Anorectal Surgeon', type: 'Panel' },
  
  { name: 'Dr. Amarnath Upadhye', speciality: 'General & Laparoscopic Surgeon', type: 'Panel' },
  { name: 'Dr. Rajinder Singh', speciality: 'General & Laparoscopic Surgeon', type: 'Visiting' },
  { name: 'Dr. Saalim Shaikh', speciality: 'General & Laparoscopic Surgeon', type: 'Visiting' },
  { name: 'Dr. Simi Saxena', speciality: 'General & Laparoscopic Surgeon', type: 'Visiting' },
  { name: 'Dr. Sameer Bagadia', speciality: 'General & Laparoscopic Surgeon', type: 'Visiting' },
  { name: 'Dr. R.K. Sinha', speciality: 'General & Laparoscopic Surgeon', type: 'Visiting' },
  
  { name: 'Dr. Salil Bendre', speciality: 'Chest Specialist', type: 'Visiting' },
  { name: 'Dr. Shirish Shah', speciality: 'Chest Specialist', type: 'Visiting' },
  { name: 'Dr. Prabhu Desai', speciality: 'Chest Specialist', type: 'Visiting' },
  { name: 'Dr. Sandeep Tilve', speciality: 'Chest Specialist', type: 'Visiting' },
  { name: 'Dr. Prajay Lunia', speciality: 'Chest Specialist', type: 'Visiting' },
  
  { name: 'Dr. Bharat Bhosle', speciality: 'Oncophysician', type: 'Visiting' },
  { name: 'Dr. Amol Akhade', speciality: 'Oncophysician', type: 'Visiting' },
  { name: 'Dr. Kshijit Joshi', speciality: 'Oncophysician', type: 'Visiting' },
  
  { name: 'Dr. Sanket Mehta', speciality: 'Oncosurgeon', type: 'Visiting' },
  { name: 'Dr. Jay R. Anam', speciality: 'Oncosurgeon', type: 'Visiting' },
  { name: 'Dr. Nilesh Chordiya', speciality: 'Oncosurgeon', type: 'Visiting' },
  { name: 'Dr. Chetan Anchan', speciality: 'Oncosurgeon', type: 'Visiting' },
  { name: 'Dr. Pravin Kammar', speciality: 'Oncosurgeon', type: 'Visiting' },
  { name: 'Dr. Amit Chakraborty', speciality: 'Oncosurgeon', type: 'Visiting' },
  
  { name: 'Dr. Ujjwal Yeole', speciality: 'Onco Neurosurgeon', type: 'Visiting' },
  
  { name: 'Dr. P.P. Ashok', speciality: 'Neuro Physician', type: 'Visiting' },
  { name: 'Dr. Ashutosh Shetty', speciality: 'Neuro Physician', type: 'Visiting' },
  { name: 'Dr. Shruti Agarwal', speciality: 'Neuro Physician', type: 'Visiting' },
  
  { name: 'Dr. Saurabh Kamat', speciality: 'Neurologist', type: 'Visiting' },
  
  { name: 'Dr. Darpan Thakre', speciality: 'Neuro Surgeon', type: 'Visiting' },
  
  { name: 'Dr. Suresh Bahrani', speciality: 'Dermatologist', type: 'Visiting' },
  { name: 'Dr. Akansha Chadha', speciality: 'Dermatologist', type: 'Visiting' },
  { name: 'Dr. Faaria Ali', speciality: 'Dermatologist', type: 'Visiting' },
  
  { name: 'Dr. Rachana Agrawal', speciality: 'ENT Surgeon', type: 'Panel' },
  { name: 'Dr. Varun Dave', speciality: 'ENT Surgeon', type: 'Panel' },
  { name: 'Dr. Agneesh Patial', speciality: 'ENT Surgeon', type: 'Visiting' },
  { name: 'Dr. Uday Vora', speciality: 'ENT Surgeon', type: 'Visiting' },
  
  { name: 'Dr. M.S. Menon', speciality: 'De-Addiction & HIV Medicine', type: 'Visiting' },
  
  { name: 'Dr. Sarika Gajjar', speciality: 'Physiotherapist', type: 'Panel' },
  { name: 'Dr. Sachin Pandey', speciality: 'Physiotherapist', type: 'Panel' },
  { name: 'Dr. Atul Londhe', speciality: 'Physiotherapist', type: 'Visiting' },
  
  { name: 'Dr. Pranav Agrawala', speciality: 'Arthroscopist', type: 'Visiting' },
  { name: 'Dr. Aftab Malpura', speciality: 'Arthroscopist', type: 'Visiting' },
  { name: 'Dr. Mihir Patel', speciality: 'Arthroscopist', type: 'Visiting' },
  
  { name: 'Dr. Anupama Shetty', speciality: 'Speech Therapist', type: 'Visiting' },
  { name: 'Dr. Mansi Jagtap', speciality: 'Speech Therapist', type: 'Visiting' },
  { name: 'Dr. Ashique Rathod', speciality: 'Speech Therapist', type: 'Visiting' },
  
  { name: 'Dr. Manoj Chawla', speciality: 'Diabetologist', type: 'Visiting' },
  { name: 'Dr. Rajiv Kovil', speciality: 'Diabetologist', type: 'Visiting' },
  { name: 'Dr. Purvi Chawla', speciality: 'Diabetologist', type: 'Visiting' },
  
  { name: 'Dr. Durgesh Borkar', speciality: 'Gastroenterologist', type: 'Visiting' },
  { name: 'Dr. Jay Kotecha', speciality: 'Gastroenterologist', type: 'Visiting' },
  { name: 'Dr. Rahul Shah', speciality: 'Gastroenterologist', type: 'Visiting' },
  
  { name: 'Dr. Rusi Bhalla', speciality: 'Laser Surgeon', type: 'Visiting' },
  
  { name: 'Dr. Leena Bahrani', speciality: 'Psychiatrist', type: 'Panel' },
  { name: 'Dr. Rukshyeda Sayed', speciality: 'Psychiatrist', type: 'Visiting' },
  { name: 'Dr. Shyam Lulla', speciality: 'Psychiatrist', type: 'Visiting' },
  { name: 'Dr. Pawan Sonar', speciality: 'Psychiatrist', type: 'Visiting' },
  { name: 'Dr. Paresh Trivedi', speciality: 'Psychiatrist', type: 'Visiting' },
  
  { name: 'Dr. Nikhil Karnik', speciality: 'Interventional Radiologist', type: 'Visiting' },
  { name: 'Dr. Rahul Sheth', speciality: 'Interventional Radiologist', type: 'Visiting' },
  { name: 'Dr. Tejas Dharia', speciality: 'Interventional Radiologist', type: 'Visiting' },
  { name: 'Dr. Jathin Krishna Rai', speciality: 'Interventional Radiologist', type: 'Visiting' },
  
  { name: 'Dr. Varun Gunavanthe', speciality: 'Surgical Urologist', type: 'Panel' },
  { name: 'Dr. Ajit Vaze', speciality: 'Surgical Urologist', type: 'Visiting' },
  { name: 'Dr. Sachin Pahade', speciality: 'Surgical Urologist', type: 'Visiting' },
  { name: 'Dr. R.S. Gulati', speciality: 'Surgical Urologist', type: 'Visiting' },
  
  { name: 'Dr. Shilpa Deshpande', speciality: 'Ophthalmologist', type: 'Panel' },
  { name: 'Dr. Suresh Hemrajani', speciality: 'Ophthalmologist', type: 'Visiting' },
  
  { name: 'Dr. Namrita Sheregar', speciality: 'Gynaecologist', type: 'Panel' },
  { name: 'Dr. Ashlesha Sankhe', speciality: 'Gynaecologist', type: 'Visiting' },
  { name: 'Dr. Bela Dodiya', speciality: 'Gynaecologist', type: 'Visiting' },
  { name: 'Dr. Vandana Chavan', speciality: 'Gynaecologist', type: 'Visiting' },
  { name: 'Dr. Meghana Bhate', speciality: 'Gynaecologist', type: 'Visiting' },
  { name: 'Dr. Monika Taklikar', speciality: 'Gynaecologist', type: 'Visiting' },
  { name: 'Dr. Latika Chawla', speciality: 'Gynaecologist', type: 'Visiting' },
  { name: 'Dr. Veena Shinde', speciality: 'Gynaecologist', type: 'Visiting' },
  { name: 'Dr. Pramila Kenkre', speciality: 'Gynaecologist', type: 'Visiting' },
  { name: 'Dr. Shilpa Bansal', speciality: 'Gynaecologist', type: 'Visiting' },
  { name: 'Dr. Suchita Pisat', speciality: 'Gynaecologist', type: 'Visiting' },
  { name: 'Dr. Sanket Pisat', speciality: 'Gynaecologist', type: 'Visiting' },
  { name: 'Dr. Shefali Pandey', speciality: 'Gynaecologist', type: 'Visiting' },
  { name: 'Dr. Anurag Bhate', speciality: 'Gynaecologist', type: 'Visiting' },
  { name: 'Dr. Neha Shah', speciality: 'Gynaecologist', type: 'Visiting' },
  { name: 'Dr. Hemlata Hardasani', speciality: 'Gynaecologist', type: 'Visiting' },
  
  { name: 'Dr. Niraj Vora', speciality: 'Orthopedic Surgeon', type: 'Panel' },
  { name: 'Dr. N.M. Danani', speciality: 'Orthopedic Surgeon', type: 'Panel' },
  { name: 'Dr. Snehanshu Kumar', speciality: 'Orthopedic Surgeon', type: 'Panel' },
  { name: 'Dr. Pradeep Nayak', speciality: 'Orthopedic Surgeon', type: 'Panel' },
  { name: 'Dr. A.I. Baig', speciality: 'Orthopedic Surgeon', type: 'Visiting' },
  { name: 'Dr. Atul Pangate', speciality: 'Orthopedic Surgeon', type: 'Visiting' },
  { name: 'Dr. Atul Wankhede', speciality: 'Orthopedic Surgeon', type: 'Visiting' },
  { name: 'Dr. Siddhant Naik', speciality: 'Orthopedic Surgeon', type: 'Visiting' },
  
  { name: 'Dr. Keyur Dave', speciality: 'Nephrologist', type: 'Panel' },
  { name: 'Dr. Arun Shah', speciality: 'Nephrologist', type: 'Visiting' },
  { name: 'Dr. Gaurav Daga', speciality: 'Nephrologist', type: 'Visiting' },
  { name: 'Dr. Kavita Vishwakarma', speciality: 'Nephrologist', type: 'Visiting' },
  
  { name: 'Dr. Ketan Gundavda', speciality: 'Radiology Department', type: 'Panel' },
  { name: 'Dr. K. Hari Bhagyaprasad', speciality: 'Radiology Department', type: 'Panel' }
];
