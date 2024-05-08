import React from "react";
import { useParams } from "react-router-dom";
const subDetails = [
  {
    id: 1,
    coverImg:
      "https://amandeephospital.org/wp-content/uploads/2022/05/what-is-pcos-1-1.webp",
    title: "Causes ,Diagnostics and Symptoms",
    desc: "Polycystic Ovary Syndrome (PCOS) is a hormonal disorder affecting many women globally, with its roots believed to stem from a mix of genetic predisposition and environmental influences. While the precise causes remain elusive, factors such as insulin resistance, hormonal imbalances, and inflammation are thought to be key contributors. Diagnosing PCOS presents challenges due to its varied symptoms, including irregular menstrual cycles, elevated androgens, and ovarian cysts. A comprehensive approach involving medical history, physical exams, and blood tests is necessary for accurate diagnosis.PCOS manifests with a range of symptoms, from irregular periods and excessive hair growth to weight gain and fertility issues. Moreover, it can pose long-term health risks, such as insulin resistance and mental health concerns like depression and anxiety. Managing PCOS typically involves lifestyle adjustments such as diet and exercise, alongside medication to regulate hormones and improve fertility. A multidisciplinary approach, involving gynecologists, endocrinologists, and nutritionists, is pivotal for effective management and enhancing the quality of life for those with PCOS.",
  },
  {
    id: 2,
    coverImg:
      "https://c.ndtvimg.com/2020-09/iv5hiclg_pcos_625x300_18_September_20.jpg",
    title: "Fertility",
    desc: "Fertility can be a significant concern for women with Polycystic Ovary Syndrome (PCOS). The hormonal imbalances characteristic of PCOS can disrupt ovulation, making it challenging to conceive. Irregular menstrual cycles and elevated levels of androgens can hinder the release of mature eggs from the ovaries, leading to infertility or difficulty in becoming pregnant. However, with appropriate management, many women with PCOS can improve their chances of conception. Lifestyle modifications, such as maintaining a healthy weight, balanced diet, and regular exercise, can help regulate hormones and promote ovulation. Additionally, medications like clomiphene citrate or letrozole may be prescribed to induce ovulation. In some cases, assisted reproductive technologies such as in vitro fertilization (IVF) may be necessary to achieve pregnancy. Close collaboration between healthcare providers and individuals with PCOS is essential to address fertility concerns and optimize the chances of successful conception.",
  },
  {
    id: 3,
    coverImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd5TafRd_TUHOrXoZaYbJ0PAXa6pWYle9AYA&usqp=CAU",
    title: "Skin and hair",
    desc: "PCOS, or Polycystic Ovary Syndrome, can have noticeable effects on both skin and hair due to hormonal imbalances. For many women with PCOS, one of the most common skin issues is acne. Increased levels of androgens can lead to excess oil production, clogging pores and causing acne flare-ups, particularly along the jawline and chin. Additionally, PCOS can also contribute to hirsutism, causing excess facial and body hair growth due to elevated levels of male hormones. This can lead to feelings of self-consciousness and may require frequent hair removal methods such as shaving or waxing.Another prominent effect of PCOS on skin is the presence of dark patches known as acanthosis nigricans. These patches typically appear in areas where skin folds, such as the neck, groin, and underarms, and can be a result of insulin resistance, which is common in PCOS. Alongside these skin concerns, PCOS can also impact hair health, leading to thinning or hair loss known as female pattern baldness. This can be distressing for individuals and may require treatment options such as medications or topical solutions to manage. Overall, the effects of PCOS on skin and hair can significantly impact self-esteem and quality of life for those affected, highlighting the importance of comprehensive management strategies.",
  },
  {
    id: 4,
    coverImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4vJuzLfBU3eur6NNlc_uzeCAi7ZEMBlGrQ&usqp=CAU",
    title: "Management and treatment",
    desc: "Polycystic Ovary Syndrome (PCOS) poses significant challenges in management and treatment due to its multifaceted impact on reproductive health and metabolic functions. Firstly, the hormonal imbalances characteristic of PCOS often necessitate a personalized approach to treatment, as no single remedy suits all patients. Secondly, lifestyle modifications, such as diet and exercise, form a cornerstone of PCOS management, aiming to mitigate symptoms like insulin resistance and weight gain. Finally, fertility interventions, ranging from ovulation induction to assisted reproductive technologies, play a crucial role in addressing the reproductive challenges that many women with PCOS encounter, offering hope for those seeking to conceive. Overall, effective management and treatment strategies for PCOS require a comprehensive, tailored approach that addresses both the reproductive and metabolic aspects of the condition.",
  },
  {
    id: 5,
    coverImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbEO3EKtZDc2erTQQ4YxFZWXdJkOhPffA_8YevkQU1EvBWblFOz_MqPozowIoailxMpMo&usqp=CAU",
    title: "Sexual health and relationships",
    desc: "Polycystic Ovary Syndrome (PCOS) can significantly impact sexual health and relationships for those affected. Firstly, hormonal imbalances commonly associated with PCOS can lead to decreased libido in individuals, diminishing their interest in sexual activities. This change can strain intimate connections and cause frustration for both partners. Secondly, PCOS-related symptoms like weight gain and hirsutism (excessive hair growth) may affect self-esteem, causing individuals to feel self-conscious or unattractive, which can interfere with their ability to engage in intimate moments with their partners. Additionally, the emotional toll of managing PCOS, including stress and anxiety, can further strain relationships, requiring open communication and support from both partners to navigate these challenges effectively.Moreover, PCOS can also manifest physically, causing discomfort or pain during sexual intercourse due to pelvic pain or vaginal dryness, which can make intimacy difficult and less pleasurable. These physical symptoms can create barriers to sexual satisfaction and may lead to avoidance of sexual activity altogether, potentially straining the emotional bond between partners. Addressing these challenges often requires a multidisciplinary approach, involving healthcare professionals, therapists, and open dialogue between partners to find holistic solutions and maintain a healthy, fulfilling relationship despite the challenges posed by PCOS.",
  },
];

const Detail = () => {
  const { id } = useParams();
  const details = subDetails.find((item) => item.id === Number(id));
  return (
    <div className="py-20">
      {details && (
        <div>
          <h1 className="mt-10 text-3xl text-gray-600 px-10">
            {details.title}:
          </h1>
          <img
            className=" h-[40vh] px-7 mt-5"
            src={details.coverImg}
            alt={details.title}
          />
          <p className=" text-gray-500 mt-5 px-5">{details.desc}</p>
        </div>
        // <div className="w-full ">
        //   <img className="rounded-lg w-full h-[40vh]" src={details.coverImg} alt={details.title} />
        //   <div className="p-5">
        //     <h2 className="mb-2 px-3 text-4xl py-5 font-bold tracking-tight text-gray-900 dark:text-white">{details.title}</h2>
        //     <p className='text-sm font-medium text-gray-900'>{details.desc}</p>
        //   </div>
        // </div>
      )}
    </div>
  );
};

export default Detail;
