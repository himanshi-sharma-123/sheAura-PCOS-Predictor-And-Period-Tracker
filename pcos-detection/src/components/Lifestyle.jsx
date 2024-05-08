import React from "react";
import { Link } from "react-router-dom";

const lifestyle = [
  {
    id: 1,
    coverImg:
      "https://media.istockphoto.com/id/680653924/photo/closeup-of-nice-woman-eating-slice-of-watermelon.jpg?s=612x612&w=0&k=20&c=a2tqgD3jGJ7r_YZLTHMduT_A5W_Vg3vKkwxWh5GKLbA=",
    title: "How does PCOS affect your emotional health?",
    link: "https://www.nursing.columbia.edu/news/psychiatric-complications-women-polycystic-ovary-syndrome-most-often-linked-menstrual#:~:text=Polycystic%20ovary%20syndrome%20(PCOS)%2C,%2C%20depression%2C%20and%20eating%20disorders.",
  },
  {
    id: 2,
    coverImg:
      "https://flo.health/uploads/media/sulu-1000x-inset/05/6185-pcos-diet_1006x755.jpg?v=1-0",
    title: "PCOS and diet",
    link: "https://www.hopkinsmedicine.org/health/wellness-and-prevention/pcos-diet",
  },
  {
    id: 3,
    coverImg:
      "https://d2avcgftbrgp6g.cloudfront.net/wp-content/uploads/2021/11/featured-22.jpg",
    title: "PCOS and exercise",
    link: "https://www.fertilityfamily.co.uk/blog/exercise-for-pcos-what-are-the-best-and-worst-exercises-for-pcos/#:~:text=glycemic%2Dindex%20carbohydrates.-,How%20often%20should%20you%20exercise%20with%20PCOS%3F,walk%20is%20better%20than%20nothing.",
  },
];

const Lifestyle = () => {
  return (
    <div className="px-20 mt-20">
      <div className="text-gray-700 text-5xl">
        <h1>Manage your Lifestyle</h1>
      </div>
      <div className="text-gray-500 mt-5">
        <p className="text-xl">
          We know that living with PCOS posts some challenges to living a
          healthy life. Women with PCOS may be more likely to gain weight. An
          unhealthy lifestyle has more impact on weight gain and health for
          women with PCOS than women without PCOS. We have some suggestion to
          live the healthiest possible lifestyle to manage PCOS for you:
        </p>
        <ul className="mt-5">
          <li>
            • Improve diet and physical activity for physical and mental health
          </li>
          <li>• Prevent weight gain (really important goal)</li>
          <li>
            • Modest weight loss (if deemed relevant by women and clinicians)
          </li>
        </ul>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 mb-5 gap-8">
        {lifestyle.map((l) => (
          <div className="" key={l.id}>
            <div className="">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg">
                <img
                  className="rounded-t-lg w-full h-[35vh]"
                  src={l.coverImg}
                  alt=""
                  width={250}
                  height={250}
                />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 overflow-y-clip">
                  {l.title}
                </h5>

                <Link
                  to={l.link}
                  target="_blank"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-cente text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lifestyle;
